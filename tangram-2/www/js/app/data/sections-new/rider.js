'use strict';
/*global window */

var section = {

	id: 'rider',
	name: 'rider',
	data: [

		// rider
		// 37
		{"name":"","hash":"1ad372","data":[[1.03033,1.457107,180],[1.03033,1.457107,90],[0.676777,1.103553,90],[0.676777,1.103553,180],[1.03033,1.103553,90],[1.03033,1.103553,180],[1.03033,1.103553,0],[1.03033,1.103553,-90],[0.25,0.426777,135],[0.25,0.426777,45],[0.5,0.676777,45],[0.5,0.676777,135],[0,0.676777,45],[0,0.676777,135],[0.25,0.426777,-45],[0.25,0.426777,-135],[1.737437,0.75,0],[1.737437,0.75,-90],[1.383883,0.75,180],[1.383883,0.75,-90],[0.073223,0,180],[0.073223,0,90],[0.875,0.551777,45],[0.875,0.551777,-45],[1.051777,0.301777,-90],[1.051777,0.301777,180],[1.051777,0.301777,90],[1.051777,0.301777,0],[0.5,0.676777,-45],[0.5,0.676777,-135],[0.75,0.926777,45],[0.75,0.926777,135]]},
		{"name":"","hash":"e155fd","data":[[1.28033,1.03033,180],[1.28033,1.03033,90],[0.926777,0.676777,90],[0.926777,0.676777,180],[1.28033,0.676777,90],[1.28033,0.676777,180],[1.28033,0.676777,0],[1.28033,0.676777,-90],[0.5,0.5,-135],[0.5,0.5,135],[0.25,0.75,135],[0.25,0.75,-135],[0.25,0.25,135],[0.25,0.25,-135],[0.5,0.5,45],[0.5,0.5,-45],[0,0.25,135],[0,0.25,45],[0.25,0,-45],[0.25,0,45],[1.633883,0.323223,90],[1.633883,0.323223,0],[0.75,0.75,135],[0.75,0.75,45],[1.051777,0.021447,-135],[1.051777,0.021447,135],[1.051777,0.021447,45],[1.051777,0.021447,-45],[1.103553,0.323223,-90],[1.103553,0.323223,0],[0.75,0.323223,180],[0.75,0.323223,90]]},
		{"name":"","hash":"5e4a7c","data":[[0.5,1.133883,135],[0.5,1.133883,45],[0,1.133883,45],[0,1.133883,135],[0.25,0.883883,45],[0.25,0.883883,135],[0.25,0.883883,-45],[0.25,0.883883,-135],[1.103553,0.78033,180],[1.103553,0.78033,90],[1.103553,1.133883,90],[1.103553,1.133883,180],[0.75,0.78033,90],[0.75,0.78033,180],[1.103553,0.78033,0],[1.103553,0.78033,-90],[0.396447,0.53033,45],[0.396447,0.53033,-45],[0.146447,0.28033,-135],[0.146447,0.28033,-45],[1.53033,0.603553,135],[1.53033,0.603553,45],[0.75,0.426777,-90],[0.75,0.426777,180],[0.926777,0,-135],[0.926777,0,135],[0.926777,0,45],[0.926777,0,-45],[0.573223,0.957107,90],[0.573223,0.957107,180],[0.926777,0.957107,0],[0.926777,0.957107,-90]]},
		{"name":"","hash":"647a82","data":[[0.426777,0.426777,0],[0.426777,0.426777,-90],[0.78033,0.78033,-90],[0.78033,0.78033,0],[0.426777,0.78033,-90],[0.426777,0.78033,0],[0.426777,0.78033,180],[0.426777,0.78033,90],[1.133883,0.78033,180],[1.133883,0.78033,90],[1.133883,1.133883,90],[1.133883,1.133883,180],[0.78033,0.78033,90],[0.78033,0.78033,180],[1.133883,0.78033,0],[1.133883,0.78033,-90],[0,0.5,135],[0,0.5,45],[0.25,0.25,-45],[0.25,0.25,45],[0.25,1.133883,90],[0.25,1.133883,0],[1.487437,0.78033,180],[1.487437,0.78033,90],[1.133883,0,-135],[1.133883,0,135],[1.133883,0,45],[1.133883,0,-45],[0.78033,0.426777,-90],[0.78033,0.426777,180],[1.133883,0.426777,0],[1.133883,0.426777,90]]},
		{"name":"","hash":"89cdb3","data":[[1.06066,0.801777,90],[1.06066,0.801777,0],[0.707107,1.15533,0],[0.707107,1.15533,90],[0.707107,0.801777,0],[0.707107,0.801777,90],[0.707107,0.801777,-90],[0.707107,0.801777,180],[1.414214,0.801777,-90],[1.414214,0.801777,180],[1.06066,0.801777,180],[1.06066,0.801777,-90],[1.414214,0.448223,180],[1.414214,0.448223,-90],[1.414214,0.801777,90],[1.414214,0.801777,0],[0.737437,0.375,-135],[0.737437,0.375,135],[0.987437,0.625,45],[0.987437,0.625,135],[1.767767,0.09467,0],[1.767767,0.09467,-90],[1.414214,1.15533,180],[1.414214,1.15533,90],[0.862437,0,-135],[0.862437,0,135],[0.862437,0,45],[0.862437,0,-45],[0,0.801777,-90],[0,0.801777,180],[0.353553,0.801777,0],[0.353553,0.801777,90]]},
		{"name":"","hash":"da6d01","data":[[1.06066,1.133883,180],[1.06066,1.133883,90],[0.707107,0.78033,90],[0.707107,0.78033,180],[1.06066,0.78033,90],[1.06066,0.78033,180],[1.06066,0.78033,0],[1.06066,0.78033,-90],[0.353553,0.78033,0],[0.353553,0.78033,-90],[0.353553,0.426777,-90],[0.353553,0.426777,0],[0.707107,0.78033,-90],[0.707107,0.78033,0],[0.353553,0.78033,180],[0.353553,0.78033,90],[0.426777,0.957107,-45],[0.426777,0.957107,-135],[0.176777,1.207107,135],[0.176777,1.207107,-135],[0,0.603553,-90],[0,0.603553,180],[0.707107,0.426777,-90],[0.707107,0.426777,180],[0.883883,0,-135],[0.883883,0,135],[0.883883,0,45],[0.883883,0,-45],[1.767767,0.78033,-90],[1.767767,0.78033,0],[1.414214,0.78033,180],[1.414214,0.78033,90]]},
		// 38
		{"name":"","hash":"b2123f","data":[[0.707107,0.78033,90],[0.707107,0.78033,0],[0.353553,1.133883,0],[0.353553,1.133883,90],[0.353553,0.78033,0],[0.353553,0.78033,90],[0.353553,0.78033,-90],[0.353553,0.78033,180],[1.06066,0.78033,-90],[1.06066,0.78033,180],[0.707107,0.78033,180],[0.707107,0.78033,-90],[1.06066,0.426777,180],[1.06066,0.426777,-90],[1.06066,0.78033,90],[1.06066,0.78033,0],[1.237437,0.25,-135],[1.237437,0.25,135],[1.487437,0.5,45],[1.487437,0.5,135],[0,0.78033,90],[0,0.78033,0],[1.06066,1.133883,180],[1.06066,1.133883,90],[0.883883,0,-135],[0.883883,0,135],[0.883883,0,45],[0.883883,0,-45],[0.53033,0.426777,-90],[0.53033,0.426777,180],[0.883883,0.426777,0],[0.883883,0.426777,90]]},
		{"name":"","hash":"330347","data":[[0.676777,0.301777,0],[0.676777,0.301777,-90],[1.03033,0.65533,-90],[1.03033,0.65533,0],[0.676777,0.65533,-90],[0.676777,0.65533,0],[0.676777,0.65533,180],[0.676777,0.65533,90],[1.383883,0.65533,180],[1.383883,0.65533,90],[1.383883,1.008883,90],[1.383883,1.008883,180],[1.03033,0.65533,90],[1.03033,0.65533,180],[1.383883,0.65533,0],[1.383883,0.65533,-90],[0.5,0.375,45],[0.5,0.375,-45],[0.25,0.125,-135],[0.25,0.125,-45],[1.207107,0.301777,-90],[1.207107,0.301777,180],[0,0.375,-135],[0,0.375,135],[1.258883,0,-135],[1.258883,0,135],[1.258883,0,45],[1.258883,0,-45],[0.676777,1.008883,90],[0.676777,1.008883,0],[0.323223,1.008883,180],[0.323223,1.008883,-90]]},
		{"name":"","hash":"b769e3","data":[[0.353553,0.78033,90],[0.353553,0.78033,0],[0,1.133883,0],[0,1.133883,90],[0,0.78033,0],[0,0.78033,90],[0,0.78033,-90],[0,0.78033,180],[0.78033,0.603553,135],[0.78033,0.603553,45],[1.03033,0.853553,45],[1.03033,0.853553,135],[0.53033,0.853553,45],[0.53033,0.853553,135],[0.78033,0.603553,-45],[0.78033,0.603553,-135],[1.31066,0.176777,0],[1.31066,0.176777,-90],[0.957107,0.176777,180],[0.957107,0.176777,-90],[1.28033,1.03033,180],[1.28033,1.03033,90],[0.957107,0.53033,180],[0.957107,0.53033,90],[0,0,-135],[0,0,135],[0,0,45],[0,0,-45],[0.353553,0.426777,-90],[0.353553,0.426777,0],[0,0.426777,180],[0,0.426777,90]]},
		{"name":"","hash":"79b1ef","data":[[0.75,0.853553,135],[0.75,0.853553,45],[0.25,0.853553,45],[0.25,0.853553,135],[0.5,0.603553,45],[0.5,0.603553,135],[0.5,0.603553,-45],[0.5,0.603553,-135],[1.28033,0.78033,180],[1.28033,0.78033,90],[1.28033,1.133883,90],[1.28033,1.133883,180],[0.926777,0.78033,90],[0.926777,0.78033,180],[1.28033,0.78033,0],[1.28033,0.78033,-90],[0,0.353553,135],[0,0.353553,45],[0.25,0.103553,-45],[0.25,0.103553,45],[1.707107,0.603553,135],[1.707107,0.603553,45],[0.25,0.353553,-135],[0.25,0.353553,135],[0.75,0,-135],[0.75,0,135],[0.75,0,45],[0.75,0,-45],[1.103553,0.426777,-90],[1.103553,0.426777,0],[0.75,0.426777,180],[0.75,0.426777,90]]},
		{"name":"","hash":"cb0984","data":[[0.78033,0.65533,90],[0.78033,0.65533,0],[0.426777,1.008883,0],[0.426777,1.008883,90],[0.426777,0.65533,0],[0.426777,0.65533,90],[0.426777,0.65533,-90],[0.426777,0.65533,180],[1.133883,0.65533,-90],[1.133883,0.65533,180],[0.78033,0.65533,180],[0.78033,0.65533,-90],[1.133883,0.301777,180],[1.133883,0.301777,-90],[1.133883,0.65533,90],[1.133883,0.65533,0],[1.31066,0.125,-135],[1.31066,0.125,135],[1.56066,0.375,45],[1.56066,0.375,135],[0.603553,0.301777,0],[0.603553,0.301777,-90],[0,0.478553,135],[0,0.478553,45],[0.551777,0,-135],[0.551777,0,135],[0.551777,0,45],[0.551777,0,-45],[1.487437,1.008883,-90],[1.487437,1.008883,0],[1.133883,1.008883,180],[1.133883,1.008883,90]]},
		{"name":"","hash":"018a51","data":[[0.25,0.853553,-135],[0.25,0.853553,135],[0.25,0.353553,135],[0.25,0.353553,-135],[0.5,0.603553,135],[0.5,0.603553,-135],[0.5,0.603553,45],[0.5,0.603553,-45],[1.28033,0.78033,180],[1.28033,0.78033,90],[1.28033,1.133883,90],[1.28033,1.133883,180],[0.926777,0.78033,90],[0.926777,0.78033,180],[1.28033,0.78033,0],[1.28033,0.78033,-90],[0,0.353553,135],[0,0.353553,45],[0.25,0.103553,-45],[0.25,0.103553,45],[0.75,0.853553,135],[0.75,0.853553,45],[1.707107,0.603553,135],[1.707107,0.603553,45],[1.28033,0,-135],[1.28033,0,135],[1.28033,0,45],[1.28033,0,-45],[1.103553,0.426777,-90],[1.103553,0.426777,180],[1.457107,0.426777,0],[1.457107,0.426777,90]]}

	]

};

export default section;
