/*jslint white: true, nomen: true */
(function (win) {

	'use strict';
	/*global window */
	/*global */

	PIXI.SCALE_MODES.DEFAULT = PIXI.SCALE_MODES.NEAREST;

	// create an new instance of a pixi stage
	var stage = new PIXI.Container();

	// create a renderer instance.
	var renderer = PIXI.autoDetectRenderer(400, 300, {
		backgroundColor: 0x65C25D
	});

	// add the renderer view element to the DOM
	document.body.appendChild(renderer.view);

	requestAnimFrame( animate );

	// create a texture from an image path
	var texture = PIXI.Texture.fromImage("../bunny.png");
	// create a new Sprite using the texture
	var bunny = new PIXI.Sprite(texture);

	// center the sprites anchor point
	bunny.anchor.x = 0.5;
	bunny.anchor.y = 0.5;

	// move the sprite t the center of the screen
	bunny.position.x = 200;
	bunny.position.y = 150;

	bunny.scale.x = 5;
	bunny.scale.y = 5;

	//bunny.setInteractive(true);

	stage.addChild(bunny);

	function animate() {

		requestAnimFrame( animate );

		// just for fun, lets rotate mr rabbit a little
		bunny.rotation += 0.01;

		// render the stage
		renderer.render(stage);
	}

}(window));