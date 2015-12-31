/*jslint white: true, nomen: true */
(function (win) {

	'use strict';
	/*global window */
	/*global */

	/*

	 http://habrahabr.ru/company/2gis/blog/273735/

	 attributes — доступны только в вершинном шейдере, разные для каждой из вершин;
	 uniforms — доступны в обоих шейдерах и одинаковы для всех вызовов шейдера;
	 varying — служат для передачи информации от вершинного шейдера к фрагментному.
	* */

	var
		vertexShaderCode = [
			'attribute vec3 a_position;',
			'attribute vec3 a_color;',
			'uniform vec3 u_position;',
			'varying vec3 v_color;',
			'void main(void) {',
			'v_color = a_color;',
			'gl_Position = vec4(u_position + a_position, 1.0);',
			'}'
		].join(''),

		fragmentShaderCode = [
			'precision mediump float;',
			'varying vec3 v_color;',
			'void main(void) {',
			'gl_FragColor = vec4(v_color.rgb, 1.0);',
			'}'
		].join('');


	// Попробуем инициализировать данные шейдеры. Для начала получим контекст WebGL:
	var canvas = document.querySelector('.js-canvas-triangle');
	var gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');

	var size = Math.min(window.innerWidth, window.innerHeight);
	canvas.width = canvas.height = size;
	gl.viewport(0, 0, size, size);

	// Код шейдеров представляется обычной строкой и для использования его нужно скомпилировать:
	var vertexShader = gl.createShader(gl.VERTEX_SHADER);
	gl.shaderSource(vertexShader, vertexShaderCode);
	gl.compileShader(vertexShader);

	var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
	gl.shaderSource(fragmentShader, fragmentShaderCode);
	gl.compileShader(fragmentShader);

	if (!gl.getShaderParameter(fragmentShader, gl.COMPILE_STATUS)) {
		console.log(gl.getShaderInfoLog(fragmentShader));
	}

	// Для связывания двух типов шейдеров вместе используется шейдерная программа:
	var program = gl.createProgram();
	gl.attachShader(program, vertexShader);
	gl.attachShader(program, fragmentShader);
	gl.linkProgram(program);

	// Если uniform-переменные связываются напрямую с переменными из js, то для атрибутов нужно использовать ещё одну сущность — буферы. Данные буферов хранятся в памяти видеокарты, что даёт значительный прирост в скорости рендеринга.

	// В нашем случае нам понадобятся:
	// буфер вершин, который хранит всю информацию о расположению вершин геометрии;
	// буфер цветов с информацией о цвете вершин.

	// Зададим буфер вершин:
	// (0, 0, 0);
	// (0.5, 1, 0);
	// (1, 0, 0);

	var vertexBuffer = gl.createBuffer(); // данные в буфер передаются одним массивом без вложенности, в случае нашего треугольника данные будут выглядеть следующим образом: [0, 0, 0, 0.5, 1, 0, 1, 0, 0];
	var vertices = [0, 0, 0, 0.9, 1, 0, 1, 0, 0];
	gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices),  gl.STATIC_DRAW);// прежде чем передать данные, вы должны точно указать, какой буфер будет использоваться, методом gl.bindBuffer. // передаваться должны только типизированные массивы;


	// Создадим аналогичным образом буфер цветов. Цвет указываем для каждой из вершин в формате RGB, где каждая компонента цвета от 0 до 1:
	var colorBuffer = gl.createBuffer();
	var colors = [1, 0, 0, 0, 1, 0, 0, 0, 1];
	gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW);


	// Всё, что нам осталось, чтобы нарисовать треугольник, — это связать данные с переменными шейдерной программы и вызвать методы отрисовки. Для этого:

	// Получим местоположение переменных в программе шейдеров
	var uPosition = gl.getUniformLocation(program, 'u_position');
	var aPosition = gl.getAttribLocation(program, 'a_position');
	var aColor = gl.getAttribLocation(program, 'a_color');

	// Укажем какую шейдерную программу мы намерены далее использовать
	gl.useProgram(program);

	// Передаем в uniform-переменную положение треугольника
	gl.uniform3fv(uPosition, [0, 0, 0]);

	// Связываем данные цветов
	gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
	gl.enableVertexAttribArray(aColor);

	// Вторым аргументом передаём размерность, RGB имеет 3 компоненты
	gl.vertexAttribPointer(aColor, 3, gl.FLOAT, false, 0, 0);

	// И вершин
	gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
	gl.enableVertexAttribArray(aPosition);
	gl.vertexAttribPointer(aPosition, 3, gl.FLOAT, false, 0, 0);

	// Очищаем сцену, закрашивая её в белый цвет
	gl.clearColor(1.0, 1.0, 1.0, 1.0);
	gl.clear(gl.COLOR_BUFFER_BIT);

	// Рисуем треугольник
	// Третьим аргументом передаём количество вершин геометрии
	gl.drawArrays(gl.TRIANGLES, 0, 3);





}(window));