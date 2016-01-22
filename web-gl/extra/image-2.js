/*jslint white: true, nomen: true */
(function (win) {

	'use strict';
	/*global window */
	/*global */

	function getShader(gl, selector, shaderType) {

		var shaderScript = document.querySelector(selector);

		var shaderSourceStr = shaderScript.textContent;

		var shader;

		if (shaderType === 'fragment') {
			shader = gl.createShader(gl.FRAGMENT_SHADER);
		}

		if (shaderType === 'vertex') {
			shader = gl.createShader(gl.VERTEX_SHADER);
		}

		gl.shaderSource(shader, shaderSourceStr);
		gl.compileShader(shader);

		// test shader for compiling
		if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
			console.error(gl.getShaderInfoLog(shader));
			return null;
		}

		return shader;

	}

	function handleLoadedTexture(gl, texture) {
		gl.bindTexture(gl.TEXTURE_2D, texture);
		gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
		gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, texture.image);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
		gl.bindTexture(gl.TEXTURE_2D, null);
	}

	win.addEventListener('load', function () {

		var canvas = document.getElementById('canvas');

		//-- and init GL
		var gl = canvas.getContext('experimental-webgl'),
			glViewportWidth = canvas.width,
			glViewportHeight = canvas.height;

		// init shaders - begin
		//-- create shader from sources
		var vertexShader = getShader(gl, '.js-shader-vertex', 'vertex');
		var fragmentShader = getShader(gl, '.js-shader-fragment', 'fragment');

		//-- create shader program
		var shaderProgram = gl.createProgram();
		gl.attachShader(shaderProgram, vertexShader);
		gl.attachShader(shaderProgram, fragmentShader);
		gl.linkProgram(shaderProgram);

		// test shader for compiling
		if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
			console.error("Could not initialise shaders");
		}

		gl.useProgram(shaderProgram);

		var vertexPositionAttribute = gl.getAttribLocation(shaderProgram, 'aVertexPosition');
		gl.enableVertexAttribArray(vertexPositionAttribute);

		var vertexTextureAttribute = gl.getAttribLocation(shaderProgram, 'aTextureCoord');
		gl.enableVertexAttribArray(vertexTextureAttribute);

		var scale = gl.getUniformLocation(shaderProgram, 'scale');
		var solidColor = gl.getUniformLocation(shaderProgram, 'solid_color');
		shaderProgram.samplerUniform = gl.getUniformLocation(shaderProgram, "uSampler");

		// init shaders - end

		// init buffer - begin
		var squareVertexPositionBuffer = gl.createBuffer();
		gl.bindBuffer(gl.ARRAY_BUFFER, squareVertexPositionBuffer);
		var vertices = [
			0.9,  0.9,  0.0,
			-0.9,  0.9,  0.0,
			0.9, -0.9,  0.0,
			-0.9, -0.9,  0.0
		];
		gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

		var vertexTextureCoordBuffer = gl.createBuffer();
		gl.bindBuffer(gl.ARRAY_BUFFER, vertexTextureCoordBuffer);
		var textureCoords = [
			2.0, 2.0,
			0.0, 2.0,
			2.0, 0.0,
			0.0, 0.0
		];
/*
		var textureCoords = [
			1.0, 1.0,
			0.0, 1.0,
			1.0, 0.0,
			0.0, 0.0
		];
*/
		gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(textureCoords), gl.STATIC_DRAW);
		vertexTextureCoordBuffer.itemSize = 2;
		vertexTextureCoordBuffer.numItems = 4;


		/*
		 var colorBuffer = gl.createBuffer();
		 gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
		 var color = [1, 0, 0, 1];
		 gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(color), gl.STATIC_DRAW);
		 gl.vertexAttribPointer(shaderProgram.aColor, 3, gl.FLOAT, false, 0, 0);
		 */

		var itemSize = 3; // size of one item (x, y, z)
		var numItems = 4; // length of items
		// init buffer - end

		// small preparing
		gl.clearColor(0.0, 0.0, 0.0, 1.0);
		gl.enable(gl.DEPTH_TEST);

		// get texture
		var imageTexture = gl.createTexture();
		imageTexture.image = new Image();
		imageTexture.image.onload = function () {
			handleLoadedTexture(gl, imageTexture);




			gl.viewport(0, 0, glViewportWidth, glViewportHeight);
			gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

			gl.bindBuffer(gl.ARRAY_BUFFER, squareVertexPositionBuffer);
			gl.vertexAttribPointer(vertexPositionAttribute, itemSize, gl.FLOAT, false, 0, 0);

			gl.bindBuffer(gl.ARRAY_BUFFER, vertexTextureCoordBuffer);
			gl.vertexAttribPointer(vertexTextureAttribute, vertexTextureCoordBuffer.itemSize, gl.FLOAT, false, 0, 0);

			gl.activeTexture(gl.TEXTURE0);
			gl.bindTexture(gl.TEXTURE_2D, imageTexture);
			gl.uniform1i(shaderProgram.samplerUniform, 0);


			//	gl.uniformMatrix4fv(pMatrixUniform, false, pMatrix);
			//	gl.uniformMatrix4fv(shaderProgram.mvMatrixUniform, false, mvMatrix);
			gl.uniform1f(scale, 1);
			gl.uniform4f(solidColor, 1, 0, 1, 0.5);
			gl.drawArrays(gl.TRIANGLE_STRIP, 0, numItems);

		};
		imageTexture.image.src = "../image/nehe.gif";


/*
			neheTexture = gl.createTexture();
		neheTexture.image = new Image();
		neheTexture.image.onload = function () {
			handleLoadedTexture(neheTexture);
		};

		neheTexture.image.src = "../image/nehe.gif";
*/


		// draw scene


	}, false);


}(window));