'use strict';
/*global window */

var section = {

	name: 'animal',
	data: [
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
		{"name":"","hash":"018a51","data":[[0.25,0.853553,-135],[0.25,0.853553,135],[0.25,0.353553,135],[0.25,0.353553,-135],[0.5,0.603553,135],[0.5,0.603553,-135],[0.5,0.603553,45],[0.5,0.603553,-45],[1.28033,0.78033,180],[1.28033,0.78033,90],[1.28033,1.133883,90],[1.28033,1.133883,180],[0.926777,0.78033,90],[0.926777,0.78033,180],[1.28033,0.78033,0],[1.28033,0.78033,-90],[0,0.353553,135],[0,0.353553,45],[0.25,0.103553,-45],[0.25,0.103553,45],[0.75,0.853553,135],[0.75,0.853553,45],[1.707107,0.603553,135],[1.707107,0.603553,45],[1.28033,0,-135],[1.28033,0,135],[1.28033,0,45],[1.28033,0,-45],[1.103553,0.426777,-90],[1.103553,0.426777,180],[1.457107,0.426777,0],[1.457107,0.426777,90]]},
		// 39
		{"name":"","hash":"775eed","data":[[0.603553,0.75,0],[0.603553,0.75,-90],[0.957107,1.103553,-90],[0.957107,1.103553,0],[0.603553,1.103553,-90],[0.603553,1.103553,0],[0.603553,1.103553,180],[0.603553,1.103553,90],[0.25,0.5,-45],[0.25,0.5,-135],[0,0.25,-135],[0,0.25,-45],[0.5,0.25,-135],[0.5,0.25,-45],[0.25,0.5,135],[0.25,0.5,45],[0.25,0.75,-90],[0.25,0.75,180],[0.25,1.103553,90],[0.25,1.103553,180],[0.25,1.103553,0],[0.25,1.103553,-90],[0.073223,0.073223,0],[0.073223,0.073223,-90],[0.75,0,-135],[0.75,0,135],[0.75,0,45],[0.75,0,-45],[1.31066,1.103553,-90],[1.31066,1.103553,0],[0.957107,1.103553,180],[0.957107,1.103553,90]]},
		{"name":"","hash":"5d5df0","data":[[0.603553,1,-135],[0.603553,1,135],[0.603553,0.5,135],[0.603553,0.5,-135],[0.853553,0.75,135],[0.853553,0.75,-135],[0.853553,0.75,45],[0.853553,0.75,-45],[0.53033,1.676777,-90],[0.53033,1.676777,180],[0.176777,1.676777,180],[0.176777,1.676777,-90],[0.53033,1.323223,180],[0.53033,1.323223,-90],[0.53033,1.676777,90],[0.53033,1.676777,0],[1.28033,0.926777,0],[1.28033,0.926777,-90],[0.926777,0.926777,180],[0.926777,0.926777,-90],[0.883883,1.853553,0],[0.883883,1.853553,-90],[0,1.853553,90],[0,1.853553,0],[0.603553,0,-135],[0.603553,0,135],[0.603553,0,45],[0.603553,0,-45],[0.353553,1.25,-135],[0.353553,1.25,135],[0.603553,1,-45],[0.603553,1,45]]},
		{"name":"","hash":"aa86ca","data":[[0,1.65533,-90],[0,1.65533,180],[0.353553,1.301777,180],[0.353553,1.301777,-90],[0.353553,1.65533,180],[0.353553,1.65533,-90],[0.353553,1.65533,90],[0.353553,1.65533,0],[0.78033,1.332107,-135],[0.78033,1.332107,135],[0.53033,1.582107,135],[0.53033,1.582107,-135],[0.53033,1.082107,135],[0.53033,1.082107,-135],[0.78033,1.332107,45],[0.78033,1.332107,-45],[0.707107,0.65533,90],[0.707107,0.65533,0],[0.707107,0.301777,-90],[0.707107,0.301777,0],[0.53033,0.375,45],[0.53033,0.375,-45],[0.78033,0.832107,45],[0.78033,0.832107,-45],[0.65533,0,-135],[0.65533,0,135],[0.65533,0,45],[0.65533,0,-45],[0.53033,0.875,-45],[0.53033,0.875,45],[0.28033,0.625,-135],[0.28033,0.625,135]]},
		{"name":"","hash":"530b80","data":[[0.426777,0.78033,180],[0.426777,0.78033,90],[0.073223,0.426777,90],[0.073223,0.426777,180],[0.426777,0.426777,90],[0.426777,0.426777,180],[0.426777,0.426777,0],[0.426777,0.426777,-90],[0.426777,1.133883,0],[0.426777,1.133883,-90],[0.426777,0.78033,-90],[0.426777,0.78033,0],[0.78033,1.133883,-90],[0.78033,1.133883,0],[0.426777,1.133883,180],[0.426777,1.133883,90],[1.03033,0.28033,-45],[1.03033,0.28033,-135],[0.78033,0.53033,135],[0.78033,0.53033,-135],[0,1.31066,135],[0,1.31066,45],[0.25,1.06066,45],[0.25,1.06066,-45],[0.603553,0,-135],[0.603553,0,135],[0.603553,0,45],[0.603553,0,-45],[0.78033,1.133883,180],[0.78033,1.133883,90],[0.78033,0.78033,-90],[0.78033,0.78033,0]]},
		{"name":"","hash":"a99261","data":[[0.75,1.228553,45],[0.75,1.228553,-45],[0.75,1.728553,-45],[0.75,1.728553,45],[0.5,1.478553,-45],[0.5,1.478553,45],[0.5,1.478553,-135],[0.5,1.478553,135],[0.25,1.728553,135],[0.25,1.728553,45],[0.5,1.978553,45],[0.5,1.978553,135],[0,1.978553,45],[0,1.978553,135],[0.25,1.728553,-45],[0.25,1.728553,-135],[0.396447,0.375,-135],[0.396447,0.375,135],[0.646447,0.625,45],[0.646447,0.625,135],[0.396447,0.875,45],[0.396447,0.875,-45],[0.573223,0.801777,90],[0.573223,0.801777,0],[0.521447,0,-135],[0.521447,0,135],[0.521447,0,45],[0.521447,0,-45],[0.573223,0.801777,180],[0.573223,0.801777,-90],[0.573223,1.15533,90],[0.573223,1.15533,0]]},
		{"name":"","hash":"8bf4f2","data":[[0.5,0.375,45],[0.5,0.375,-45],[0.5,0.875,-45],[0.5,0.875,45],[0.25,0.625,-45],[0.25,0.625,45],[0.25,0.625,-135],[0.25,0.625,135],[0.676777,1.65533,0],[0.676777,1.65533,-90],[0.676777,1.301777,-90],[0.676777,1.301777,0],[1.03033,1.65533,-90],[1.03033,1.65533,0],[0.676777,1.65533,180],[0.676777,1.65533,90],[0.323223,1.301777,-90],[0.323223,1.301777,180],[0.323223,1.65533,90],[0.323223,1.65533,180],[0.25,1.125,-135],[0.25,1.125,135],[0,0.375,-45],[0,0.375,-135],[0.375,0,-135],[0.375,0,135],[0.375,0,45],[0.375,0,-45],[0.75,1.125,-45],[0.75,1.125,45],[0.5,0.875,-135],[0.5,0.875,135]]},
		{"name":"","hash":"2aad1d","data":[[0.426777,1.353553,0],[0.426777,1.353553,-90],[0.78033,1.707107,-90],[0.78033,1.707107,0],[0.426777,1.707107,-90],[0.426777,1.707107,0],[0.426777,1.707107,180],[0.426777,1.707107,90],[0,0.676777,45],[0,0.676777,-45],[0.25,0.426777,-45],[0.25,0.426777,45],[0.25,0.926777,-45],[0.25,0.926777,45],[0,0.676777,-135],[0,0.676777,135],[0.073223,1.353553,-90],[0.073223,1.353553,180],[0.073223,1.707107,90],[0.073223,1.707107,180],[0.25,0.926777,-135],[0.25,0.926777,135],[0,1.176777,-135],[0,1.176777,135],[0.25,0,-90],[0.25,0,180],[0.25,0,90],[0.25,0,0],[0.5,0.676777,-45],[0.5,0.676777,45],[0.25,0.426777,-135],[0.25,0.426777,135]]},
		// 40
		{"name":"","hash":"6b3add","data":[[0.78033,1.487437,180],[0.78033,1.487437,90],[0.426777,1.133883,90],[0.426777,1.133883,180],[0.78033,1.133883,90],[0.78033,1.133883,180],[0.78033,1.133883,0],[0.78033,1.133883,-90],[0.78033,0.426777,180],[0.78033,0.426777,90],[0.78033,0.78033,90],[0.78033,0.78033,180],[0.426777,0.426777,90],[0.426777,0.426777,180],[0.78033,0.426777,0],[0.78033,0.426777,-90],[0.957107,0.707107,-135],[0.957107,0.707107,135],[1.207107,0.957107,45],[1.207107,0.957107,135],[0.957107,1.664214,0],[0.957107,1.664214,-90],[0.707107,0.957107,135],[0.707107,0.957107,45],[0.957107,0,-135],[0.957107,0,135],[0.957107,0,45],[0.957107,0,-45],[0.25,1.207107,135],[0.25,1.207107,45],[0,0.957107,-135],[0,0.957107,-45]]},
		{"name":"","hash":"b41a96","data":[[0.676777,0.426777,45],[0.676777,0.426777,-45],[0.676777,0.926777,-45],[0.676777,0.926777,45],[0.426777,0.676777,-45],[0.426777,0.676777,45],[0.426777,0.676777,-135],[0.426777,0.676777,135],[0.426777,1.176777,-135],[0.426777,1.176777,135],[0.176777,1.426777,135],[0.176777,1.426777,-135],[0.176777,0.926777,135],[0.176777,0.926777,-135],[0.426777,1.176777,45],[0.426777,1.176777,-45],[0,0.5,180],[0,0.5,90],[0.353553,0.5,0],[0.353553,0.5,90],[0.603553,1.603553,180],[0.603553,1.603553,90],[0,1.853553,-90],[0,1.853553,180],[0.676777,0,-90],[0.676777,0,180],[0.676777,0,90],[0.676777,0,0],[0.853553,1.03033,180],[0.853553,1.03033,90],[0.853553,0.676777,-90],[0.853553,0.676777,0]]},
		{"name":"","hash":"83e4d8","data":[[0.676777,0.353553,0],[0.676777,0.353553,-90],[1.03033,0.707107,-90],[1.03033,0.707107,0],[0.676777,0.707107,-90],[0.676777,0.707107,0],[0.676777,0.707107,180],[0.676777,0.707107,90],[0.25,1.383883,45],[0.25,1.383883,-45],[0.5,1.133883,-45],[0.5,1.133883,45],[0.5,1.633883,-45],[0.5,1.633883,45],[0.25,1.383883,-135],[0.25,1.383883,135],[0.25,0.676777,135],[0.25,0.676777,45],[0.5,0.426777,-45],[0.5,0.426777,45],[0.5,1.883883,-135],[0.5,1.883883,135],[0.676777,1.06066,90],[0.676777,1.06066,0],[0.5,0,-90],[0.5,0,180],[0.5,0,90],[0.5,0,0],[0.25,1.883883,-45],[0.25,1.883883,45],[0,1.633883,-135],[0,1.633883,135]]},
		{"name":"","hash":"fb0e06","data":[[1.25,0.625,135],[1.25,0.625,45],[0.75,0.625,45],[0.75,0.625,135],[1,0.375,45],[1,0.375,135],[1,0.375,-45],[1,0.375,-135],[0.676777,0.801777,90],[0.676777,0.801777,0],[1.03033,0.801777,0],[1.03033,0.801777,90],[0.676777,1.15533,0],[0.676777,1.15533,90],[0.676777,0.801777,-90],[0.676777,0.801777,180],[0.25,1.332107,135],[0.25,1.332107,45],[0.5,1.082107,-45],[0.5,1.082107,45],[1.103553,1.478553,135],[1.103553,1.478553,45],[0,1.332107,90],[0,1.332107,0],[1.125,0,-135],[1.125,0,135],[1.125,0,45],[1.125,0,-45],[0.853553,1.228553,-135],[0.853553,1.228553,135],[1.103553,0.978553,-45],[1.103553,0.978553,45]]},
		{"name":"","hash":"9fa3ca","data":[[0.5,0.625,135],[0.5,0.625,45],[0,0.625,45],[0,0.625,135],[0.25,0.375,45],[0.25,0.375,135],[0.25,0.375,-45],[0.25,0.375,-135],[0.573223,0.801777,180],[0.573223,0.801777,90],[0.573223,1.15533,90],[0.573223,1.15533,180],[0.21967,0.801777,90],[0.21967,0.801777,180],[0.573223,0.801777,0],[0.573223,0.801777,-90],[0.573223,1.508883,90],[0.573223,1.508883,0],[0.573223,1.15533,-90],[0.573223,1.15533,0],[1.103553,1.582107,-135],[1.103553,1.582107,135],[0.396447,1.68566,-90],[0.396447,1.68566,180],[0.125,0,-135],[0.125,0,135],[0.125,0,45],[0.125,0,-45],[0.926777,1.508883,180],[0.926777,1.508883,90],[0.926777,1.15533,-90],[0.926777,1.15533,0]]},
		{"name":"","hash":"e4ba53","data":[[0.5,0.625,135],[0.5,0.625,45],[0,0.625,45],[0,0.625,135],[0.25,0.375,45],[0.25,0.375,135],[0.25,0.375,-45],[0.25,0.375,-135],[0.573223,0.801777,180],[0.573223,0.801777,90],[0.573223,1.15533,90],[0.573223,1.15533,180],[0.21967,0.801777,90],[0.21967,0.801777,180],[0.573223,0.801777,0],[0.573223,0.801777,-90],[0.573223,1.15533,0],[0.573223,1.15533,-90],[0.21967,1.15533,180],[0.21967,1.15533,-90],[1,1.582107,-135],[1,1.582107,135],[0.042893,1.332107,-45],[0.042893,1.332107,-135],[0.125,0,-135],[0.125,0,135],[0.125,0,45],[0.125,0,-45],[1,1.332107,-45],[1,1.332107,45],[0.75,1.082107,-135],[0.75,1.082107,135]]},
		// 41
		{"name":"","hash":"4c02fc","data":[[0,0.176777,0],[0,0.176777,-90],[0.353553,0.53033,-90],[0.353553,0.53033,0],[0,0.53033,-90],[0,0.53033,0],[0,0.53033,180],[0,0.53033,90],[0.353553,0.883883,180],[0.353553,0.883883,90],[0.353553,1.237437,90],[0.353553,1.237437,180],[0,0.883883,90],[0,0.883883,180],[0.353553,0.883883,0],[0.353553,0.883883,-90],[0.78033,0.707107,-45],[0.78033,0.707107,-135],[0.53033,0.957107,135],[0.53033,0.957107,-135],[1.03033,1.457107,135],[1.03033,1.457107,45],[0.426777,0.353553,-45],[0.426777,0.353553,-135],[0.073223,0,-135],[0.073223,0,135],[0.073223,0,45],[0.073223,0,-45],[0.78033,1.207107,-135],[0.78033,1.207107,135],[1.03033,0.957107,-45],[1.03033,0.957107,45]]},
		{"name":"","hash":"24c72b","data":[[0.25,0.375,45],[0.25,0.375,-45],[0.25,0.875,-45],[0.25,0.875,45],[0,0.625,-45],[0,0.625,45],[0,0.625,-135],[0,0.625,135],[0.5,0.978553,-135],[0.5,0.978553,135],[0.25,1.228553,135],[0.25,1.228553,-135],[0.25,0.728553,135],[0.25,0.728553,-135],[0.5,0.978553,45],[0.5,0.978553,-45],[0.5,1.478553,135],[0.5,1.478553,45],[0.75,1.228553,-45],[0.75,1.228553,45],[0.75,1.228553,-135],[0.75,1.228553,135],[0,1.478553,135],[0,1.478553,45],[0.375,0,-135],[0.375,0,135],[0.375,0,45],[0.375,0,-45],[0.073223,1.301777,180],[0.073223,1.301777,90],[0.073223,0.948223,-90],[0.073223,0.948223,0]]},
		{"name":"","hash":"7909fc","data":[[0.676777,0.59467,0],[0.676777,0.59467,-90],[1.03033,0.948223,-90],[1.03033,0.948223,0],[0.676777,0.948223,-90],[0.676777,0.948223,0],[0.676777,0.948223,180],[0.676777,0.948223,90],[0.957107,0.625,45],[0.957107,0.625,-45],[1.207107,0.375,-45],[1.207107,0.375,45],[1.207107,0.875,-45],[1.207107,0.875,45],[0.957107,0.625,-135],[0.957107,0.625,135],[0.25,1.125,135],[0.25,1.125,45],[0.5,0.875,-45],[0.5,0.875,45],[1.207107,0.875,-135],[1.207107,0.875,135],[0,1.125,-45],[0,1.125,-135],[1.082107,0,-135],[1.082107,0,135],[1.082107,0,45],[1.082107,0,-45],[1.457107,0.625,-45],[1.457107,0.625,45],[1.207107,0.375,-135],[1.207107,0.375,135]]},
		{"name":"","hash":"2d8da5","data":[[0.103553,0.926777,0],[0.103553,0.926777,-90],[0.457107,1.28033,-90],[0.457107,1.28033,0],[0.103553,1.28033,-90],[0.103553,1.28033,0],[0.103553,1.28033,180],[0.103553,1.28033,90],[0.78033,1.56066,135],[0.78033,1.56066,45],[1.03033,1.81066,45],[1.03033,1.81066,135],[0.53033,1.81066,45],[0.53033,1.81066,135],[0.78033,1.56066,-45],[0.78033,1.56066,-135],[0.426777,0,-45],[0.426777,0,-135],[0.176777,0.25,135],[0.176777,0.25,-135],[0.103553,1.633883,90],[0.103553,1.633883,0],[0,0.323223,0],[0,0.323223,-90],[0.176777,0.75,-135],[0.176777,0.75,135],[0.176777,0.75,45],[0.176777,0.75,-45],[0.103553,1.633883,-90],[0.103553,1.633883,180],[0.457107,1.633883,0],[0.457107,1.633883,90]]},
		{"name":"","hash":"7cc182","data":[[0.823223,0.375,45],[0.823223,0.375,-45],[0.823223,0.875,-45],[0.823223,0.875,45],[0.573223,0.625,-45],[0.573223,0.625,45],[0.573223,0.625,-135],[0.573223,0.625,135],[0.5,1.051777,135],[0.5,1.051777,45],[0.75,1.301777,45],[0.75,1.301777,135],[0.25,1.301777,45],[0.25,1.301777,135],[0.5,1.051777,-45],[0.5,1.051777,-135],[1,0.948223,-90],[1,0.948223,180],[1,1.301777,90],[1,1.301777,180],[0.823223,0.875,-135],[0.823223,0.875,135],[0,1.051777,-45],[0,1.051777,-135],[0.698223,0,-135],[0.698223,0,135],[0.698223,0,45],[0.698223,0,-45],[1.073223,0.625,-45],[1.073223,0.625,45],[0.823223,0.375,-135],[0.823223,0.375,135]]},
		{"name":"","hash":"278831","data":[[0.75,1.125,135],[0.75,1.125,45],[0.25,1.125,45],[0.25,1.125,135],[0.5,0.875,45],[0.5,0.875,135],[0.5,0.875,-45],[0.5,0.875,-135],[0.75,0.625,45],[0.75,0.625,-45],[1,0.375,-45],[1,0.375,45],[1,0.875,-45],[1,0.875,45],[0.75,0.625,-135],[0.75,0.625,135],[0.5,0.375,-45],[0.5,0.375,-135],[0.25,0.625,135],[0.25,0.625,-135],[1,0.875,-135],[1,0.875,135],[0,0.875,-45],[0,0.875,-135],[0.875,0,-135],[0.875,0,135],[0.875,0,45],[0.875,0,-45],[1.25,0.625,-45],[1.25,0.625,45],[1,0.375,-135],[1,0.375,135]]},
		{"name":"","hash":"f41db8","data":[[1,1.125,135],[1,1.125,45],[0.5,1.125,45],[0.5,1.125,135],[0.75,0.875,45],[0.75,0.875,135],[0.75,0.875,-45],[0.75,0.875,-135],[0.5,0.625,-135],[0.5,0.625,135],[0.25,0.875,135],[0.25,0.875,-135],[0.25,0.375,135],[0.25,0.375,-135],[0.5,0.625,45],[0.5,0.625,-45],[1,0.625,135],[1,0.625,45],[1.25,0.375,-45],[1.25,0.375,45],[0.25,0.375,45],[0.25,0.375,-45],[1.375,1,-45],[1.375,1,-135],[0.375,0,-135],[0.375,0,135],[0.375,0,45],[0.375,0,-45],[0.25,0.875,-45],[0.25,0.875,45],[0,0.625,-135],[0,0.625,135]]},
		{"name":"","hash":"a60983","data":[[0.207107,1.362437,-90],[0.207107,1.362437,180],[0.56066,1.008883,180],[0.56066,1.008883,-90],[0.56066,1.362437,180],[0.56066,1.362437,-90],[0.56066,1.362437,90],[0.56066,1.362437,0],[0.707107,0.65533,0],[0.707107,0.65533,-90],[0.707107,0.301777,-90],[0.707107,0.301777,0],[1.06066,0.65533,-90],[1.06066,0.65533,0],[0.707107,0.65533,180],[0.707107,0.65533,90],[0.987437,0.832107,-45],[0.987437,0.832107,-135],[0.737437,1.082107,135],[0.737437,1.082107,-135],[1.06066,1.008883,-90],[1.06066,1.008883,180],[0.353553,0.65533,0],[0.353553,0.65533,-90],[0.40533,0,-135],[0.40533,0,135],[0.40533,0,45],[0.40533,0,-45],[0,1.008883,-90],[0,1.008883,180],[0.353553,1.008883,0],[0.353553,1.008883,90]]},
		// 42
		{"name":"","hash":"af5221","data":[[0.707107,0.146447,90],[0.707107,0.146447,0],[0.353553,0.5,0],[0.353553,0.5,90],[0.353553,0.146447,0],[0.353553,0.146447,90],[0.353553,0.146447,-90],[0.353553,0.146447,180],[0.707107,0.5,-90],[0.707107,0.5,180],[0.353553,0.5,180],[0.353553,0.5,-90],[0.707107,0.146447,180],[0.707107,0.146447,-90],[0.707107,0.5,90],[0.707107,0.5,0],[0.883883,0.426777,-135],[0.883883,0.426777,135],[1.133883,0.676777,45],[1.133883,0.676777,135],[1.508883,0.551777,-45],[1.508883,0.551777,-135],[0,0.5,-90],[0,0.5,180],[1.362437,0.051777,-135],[1.362437,0.051777,135],[1.362437,0.051777,45],[1.362437,0.051777,-45],[1.06066,0,0],[1.06066,0,-90],[1.06066,0.353553,90],[1.06066,0.353553,180]]},
		{"name":"","hash":"b17e7e","data":[[0.53033,0.801777,90],[0.53033,0.801777,0],[0.176777,1.15533,0],[0.176777,1.15533,90],[0.176777,0.801777,0],[0.176777,0.801777,90],[0.176777,0.801777,-90],[0.176777,0.801777,180],[0.5,0.375,135],[0.5,0.375,45],[0.75,0.625,45],[0.75,0.625,135],[0.25,0.625,45],[0.25,0.625,135],[0.5,0.375,-45],[0.5,0.375,-135],[0.53033,0.801777,-90],[0.53033,0.801777,180],[0.53033,1.15533,90],[0.53033,1.15533,180],[0.707107,1.332107,0],[0.707107,1.332107,-90],[0,1.332107,45],[0,1.332107,-45],[0.625,0,-135],[0.625,0,135],[0.625,0,45],[0.625,0,-45],[1.25,0.625,-45],[1.25,0.625,-135],[1.5,0.875,45],[1.5,0.875,135]]},
		{"name":"","hash":"797108","data":[[0.426777,1.301777,0],[0.426777,1.301777,-90],[0.78033,1.65533,-90],[0.78033,1.65533,0],[0.426777,1.65533,-90],[0.426777,1.65533,0],[0.426777,1.65533,180],[0.426777,1.65533,90],[0.5,0.625,-135],[0.5,0.625,135],[0.25,0.875,135],[0.25,0.875,-135],[0.25,0.375,135],[0.25,0.375,-135],[0.5,0.625,45],[0.5,0.625,-45],[0.5,1.125,135],[0.5,1.125,45],[0.75,0.875,-45],[0.75,0.875,45],[0.426777,1.301777,180],[0.426777,1.301777,90],[0.073223,0.625,-90],[0.073223,0.625,180],[0.125,0,-135],[0.125,0,135],[0.125,0,45],[0.125,0,-45],[0,1.625,-135],[0,1.625,135],[0.25,1.375,-45],[0.25,1.375,45]]},
		{"name":"","hash":"e80b46","data":[[0.707107,0.426777,0],[0.707107,0.426777,-90],[1.06066,0.78033,-90],[1.06066,0.78033,0],[0.707107,0.78033,-90],[0.707107,0.78033,0],[0.707107,0.78033,180],[0.707107,0.78033,90],[0.353553,0.426777,180],[0.353553,0.426777,90],[0.353553,0.78033,90],[0.353553,0.78033,180],[0,0.426777,90],[0,0.426777,180],[0.353553,0.426777,0],[0.353553,0.426777,-90],[0.353553,1.133883,90],[0.353553,1.133883,0],[0.353553,0.78033,-90],[0.353553,0.78033,0],[1.133883,1.31066,-45],[1.133883,1.31066,-135],[0.176777,1.31066,-90],[0.176777,1.31066,180],[0.53033,0,-135],[0.53033,0,135],[0.53033,0,45],[0.53033,0,-45],[1.06066,1.133883,-90],[1.06066,1.133883,0],[0.707107,1.133883,180],[0.707107,1.133883,90]]},
		{"name":"","hash":"f826f0","data":[[0,0.65533,-90],[0,0.65533,180],[0.353553,0.301777,180],[0.353553,0.301777,-90],[0.353553,0.65533,180],[0.353553,0.65533,-90],[0.353553,0.65533,90],[0.353553,0.65533,0],[0.707107,0.301777,90],[0.707107,0.301777,0],[1.06066,0.301777,0],[1.06066,0.301777,90],[0.707107,0.65533,0],[0.707107,0.65533,90],[0.707107,0.301777,-90],[0.707107,0.301777,180],[0.353553,1.008883,-90],[0.353553,1.008883,180],[0.353553,1.362437,90],[0.353553,1.362437,180],[1.207107,0.65533,-90],[1.207107,0.65533,180],[0.28033,1.539214,135],[0.28033,1.539214,45],[0.40533,0,-135],[0.40533,0,135],[0.40533,0,45],[0.40533,0,-45],[0.78033,0.832107,45],[0.78033,0.832107,135],[1.03033,0.582107,-45],[1.03033,0.582107,-135]]},
		{"name":"","hash":"4c5ffc","data":[[0.353553,0.65533,-90],[0.353553,0.65533,180],[0.707107,0.301777,180],[0.707107,0.301777,-90],[0.707107,0.65533,180],[0.707107,0.65533,-90],[0.707107,0.65533,90],[0.707107,0.65533,0],[0.707107,1.008883,90],[0.707107,1.008883,0],[1.06066,1.008883,0],[1.06066,1.008883,90],[0.707107,1.362437,0],[0.707107,1.362437,90],[0.707107,1.008883,-90],[0.707107,1.008883,180],[0.707107,1.362437,-90],[0.707107,1.362437,180],[0.707107,1.71599,90],[0.707107,1.71599,180],[0.707107,2.46599,135],[0.707107,2.46599,45],[0,0.65533,0],[0,0.65533,-90],[0.758883,0,-135],[0.758883,0,135],[0.758883,0,45],[0.758883,0,-45],[0.957107,2.21599,-45],[0.957107,2.21599,45],[0.707107,1.96599,-135],[0.707107,1.96599,135]]},
		// 43
		{"name":"","hash":"e29d52","data":[[0,1.75,-135],[0,1.75,135],[0,1.25,135],[0,1.25,-135],[0.25,1.5,135],[0.25,1.5,-135],[0.25,1.5,45],[0.25,1.5,-45],[0.25,1,45],[0.25,1,-45],[0.5,0.75,-45],[0.5,0.75,45],[0.5,1.25,-45],[0.5,1.25,45],[0.25,1,-135],[0.25,1,135],[0.53033,1.823223,0],[0.53033,1.823223,-90],[0.176777,1.823223,180],[0.176777,1.823223,-90],[0.25,0,-135],[0.25,0,135],[0.75,0,45],[0.75,0,-45],[0.5,0.25,-135],[0.5,0.25,135],[0.5,0.25,45],[0.5,0.25,-45],[0.957107,2,135],[0.957107,2,45],[0.707107,1.75,-135],[0.707107,1.75,-45]]},
		{"name":"","hash":"6c80c8","data":[[0.707107,0.707107,90],[0.707107,0.707107,0],[0.353553,1.06066,0],[0.353553,1.06066,90],[0.353553,0.707107,0],[0.353553,0.707107,90],[0.353553,0.707107,-90],[0.353553,0.707107,180],[0.883883,0.78033,135],[0.883883,0.78033,45],[1.133883,1.03033,45],[1.133883,1.03033,135],[0.633883,1.03033,45],[0.633883,1.03033,135],[0.883883,0.78033,-45],[0.883883,0.78033,-135],[0.883883,1.28033,45],[0.883883,1.28033,-45],[0.633883,1.03033,-135],[0.633883,1.03033,-45],[0.883883,0.28033,-135],[0.883883,0.28033,135],[1.383883,0.28033,45],[1.383883,0.28033,-45],[1.133883,0.53033,-135],[1.133883,0.53033,135],[1.133883,0.53033,45],[1.133883,0.53033,-45],[0,0.353553,180],[0,0.353553,90],[0,0,-90],[0,0,0]]},
		{"name":"","hash":"c5ea0b","data":[[0.75,0.75,135],[0.75,0.75,45],[0.25,0.75,45],[0.25,0.75,135],[0.5,0.5,45],[0.5,0.5,135],[0.5,0.5,-45],[0.5,0.5,-135],[0.823223,0.926777,180],[0.823223,0.926777,90],[0.823223,1.28033,90],[0.823223,1.28033,180],[0.46967,0.926777,90],[0.46967,0.926777,180],[0.823223,0.926777,0],[0.823223,0.926777,-90],[0.823223,1.28033,0],[0.823223,1.28033,-90],[0.46967,1.28033,180],[0.46967,1.28033,-90],[0,0,-135],[0,0,135],[0.5,0,45],[0.5,0,-45],[0.25,0.25,-135],[0.25,0.25,135],[0.25,0.25,45],[0.25,0.25,-45],[1.176777,1.28033,0],[1.176777,1.28033,90],[1.176777,0.926777,-90],[1.176777,0.926777,180]]},
		{"name":"","hash":"5dab29","data":[[1,0.896447,135],[1,0.896447,45],[0.5,0.896447,45],[0.5,0.896447,135],[0.75,0.646447,45],[0.75,0.646447,135],[0.75,0.646447,-45],[0.75,0.646447,-135],[1.603553,0.5,135],[1.603553,0.5,45],[1.853553,0.75,45],[1.853553,0.75,135],[1.353553,0.75,45],[1.353553,0.75,135],[1.603553,0.5,-45],[1.603553,0.5,-135],[0.926777,0.573223,180],[0.926777,0.573223,90],[1.28033,0.573223,0],[1.28033,0.573223,90],[1.603553,0,-135],[1.603553,0,135],[2.103553,0,45],[2.103553,0,-45],[1.853553,0.25,-135],[1.853553,0.25,135],[1.853553,0.25,45],[1.853553,0.25,-45],[0,0.396447,135],[0,0.396447,-135],[0.25,0.646447,45],[0.25,0.646447,-45]]},
		{"name":"","hash":"573b96","data":[[0.323223,0.396447,45],[0.323223,0.396447,-45],[0.323223,0.896447,-45],[0.323223,0.896447,45],[0.073223,0.646447,-45],[0.073223,0.646447,45],[0.073223,0.646447,-135],[0.073223,0.646447,135],[0,1.176777,0],[0,1.176777,-90],[0,0.823223,-90],[0,0.823223,0],[0.353553,1.176777,-90],[0.353553,1.176777,0],[0,1.176777,180],[0,1.176777,90],[0.5,0.676777,90],[0.5,0.676777,0],[0.5,0.323223,-90],[0.5,0.323223,0],[0.78033,0,-135],[0.78033,0,135],[1.28033,0,45],[1.28033,0,-45],[1.03033,0.25,-135],[1.03033,0.25,135],[1.03033,0.25,45],[1.03033,0.25,-45],[0.853553,0.323223,-90],[0.853553,0.323223,0],[0.5,0.323223,180],[0.5,0.323223,90]]},
		{"name":"","hash":"0bfeda","data":[[0,1.207107,-90],[0,1.207107,180],[0.353553,0.853553,180],[0.353553,0.853553,-90],[0.353553,1.207107,180],[0.353553,1.207107,-90],[0.353553,1.207107,90],[0.353553,1.207107,0],[0.353553,1.56066,180],[0.353553,1.56066,90],[0.353553,1.914214,90],[0.353553,1.914214,180],[0,1.56066,90],[0,1.56066,180],[0.353553,1.56066,0],[0.353553,1.56066,-90],[0.707107,0.853553,90],[0.707107,0.853553,0],[0.707107,0.5,-90],[0.707107,0.5,0],[0.457107,0,-135],[0.457107,0,135],[0.707107,0.25,45],[0.707107,0.25,-45],[0.707107,1.914214,180],[0.707107,1.914214,90],[0.707107,1.914214,0],[0.707107,1.914214,-90],[0.707107,0.25,-135],[0.707107,0.25,135],[0.957107,0,-45],[0.957107,0,45]]},
		{"name":"","hash":"465022","data":[[0.5,1,-135],[0.5,1,135],[0.5,0.5,135],[0.5,0.5,-135],[0.75,0.75,135],[0.75,0.75,-135],[0.75,0.75,45],[0.75,0.75,-45],[0.75,1.25,45],[0.75,1.25,-45],[1,1,-45],[1,1,45],[1,1.5,-45],[1,1.5,45],[0.75,1.25,-135],[0.75,1.25,135],[0.75,1.5,0],[0.75,1.5,-90],[0.396447,1.5,180],[0.396447,1.5,-90],[0,0,-135],[0,0,135],[0.5,0,45],[0.5,0,-45],[0.25,0.25,-135],[0.25,0.25,135],[0.25,0.25,45],[0.25,0.25,-45],[1.176777,1.573223,0],[1.176777,1.573223,90],[1.176777,1.21967,-90],[1.176777,1.21967,180]]},
		// 44
		{"name":"","hash":"4a67aa","data":[[1.03033,0.78033,180],[1.03033,0.78033,90],[0.676777,0.426777,90],[0.676777,0.426777,180],[1.03033,0.426777,90],[1.03033,0.426777,180],[1.03033,0.426777,0],[1.03033,0.426777,-90],[0.676777,0.78033,0],[0.676777,0.78033,-90],[0.676777,0.426777,-90],[0.676777,0.426777,0],[1.03033,0.78033,-90],[1.03033,0.78033,0],[0.676777,0.78033,180],[0.676777,0.78033,90],[1.207107,0.707107,-135],[1.207107,0.707107,135],[1.457107,0.957107,45],[1.457107,0.957107,135],[0,0,-135],[0,0,135],[0.5,0,45],[0.5,0,-45],[0.25,0.25,-135],[0.25,0.25,135],[0.25,0.25,45],[0.25,0.25,-45],[1.707107,0.707107,-45],[1.707107,0.707107,-135],[1.957107,0.957107,45],[1.957107,0.957107,135]]},
		{"name":"","hash":"a39264","data":[[0.582107,1.353553,-135],[0.582107,1.353553,135],[0.582107,0.853553,135],[0.582107,0.853553,-135],[0.832107,1.103553,135],[0.832107,1.103553,-135],[0.832107,1.103553,45],[0.832107,1.103553,-45],[0.90533,1.633883,-90],[0.90533,1.633883,180],[0.551777,1.633883,180],[0.551777,1.633883,-90],[0.90533,1.28033,180],[0.90533,1.28033,-90],[0.90533,1.633883,90],[0.90533,1.633883,0],[0.758883,0.426777,-90],[0.758883,0.426777,180],[0.758883,0.78033,90],[0.758883,0.78033,180],[0.93566,0,-135],[0.93566,0,135],[1.43566,0,45],[1.43566,0,-45],[1.18566,0.25,-135],[1.18566,0.25,135],[1.18566,0.25,45],[1.18566,0.25,-45],[0,1.93566,45],[0,1.93566,135],[0.25,1.68566,-45],[0.25,1.68566,-135]]},
		{"name":"","hash":"bca9b5","data":[[0.551777,0.90533,90],[0.551777,0.90533,0],[0.198223,1.258883,0],[0.198223,1.258883,90],[0.198223,0.90533,0],[0.198223,0.90533,90],[0.198223,0.90533,-90],[0.198223,0.90533,180],[0.551777,1.258883,-90],[0.551777,1.258883,180],[0.198223,1.258883,180],[0.198223,1.258883,-90],[0.551777,0.90533,180],[0.551777,0.90533,-90],[0.551777,1.258883,90],[0.551777,1.258883,0],[0.198223,0.551777,180],[0.198223,0.551777,-90],[0.551777,0.551777,0],[0.551777,0.551777,-90],[0,0,-135],[0,0,135],[0.5,0,45],[0.5,0,-45],[0.25,0.25,-135],[0.25,0.25,135],[0.25,0.25,45],[0.25,0.25,-45],[0.90533,1.258883,0],[0.90533,1.258883,90],[0.90533,0.90533,-90],[0.90533,0.90533,180]]},
		{"name":"","hash":"137eb8","data":[[0.75,0.75,45],[0.75,0.75,-45],[0.75,1.25,-45],[0.75,1.25,45],[0.5,1,-45],[0.5,1,45],[0.5,1,-135],[0.5,1,135],[0.926777,0.676777,90],[0.926777,0.676777,0],[1.28033,0.676777,0],[1.28033,0.676777,90],[0.926777,1.03033,0],[0.926777,1.03033,90],[0.926777,0.676777,-90],[0.926777,0.676777,180],[1.28033,0.676777,-90],[1.28033,0.676777,180],[1.28033,1.03033,90],[1.28033,1.03033,180],[0,0.5,-135],[0,0.5,135],[0.5,0.5,45],[0.5,0.5,-45],[0.25,0.75,-135],[0.25,0.75,135],[0.25,0.75,45],[0.25,0.75,-45],[1.457107,0.25,-135],[1.457107,0.25,135],[1.707107,0,-45],[1.707107,0,45]]},
		{"name":"","hash":"11e20b","data":[[1.353553,0.883883,135],[1.353553,0.883883,45],[0.853553,0.883883,45],[0.853553,0.883883,135],[1.103553,0.633883,45],[1.103553,0.633883,135],[1.103553,0.633883,-45],[1.103553,0.633883,-135],[0.78033,0.353553,90],[0.78033,0.353553,0],[1.133883,0.353553,0],[1.133883,0.353553,90],[0.78033,0.707107,0],[0.78033,0.707107,90],[0.78033,0.353553,-90],[0.78033,0.353553,180],[0.426777,0.353553,-90],[0.426777,0.353553,180],[0.426777,0.707107,90],[0.426777,0.707107,180],[1.603553,0.133883,45],[1.603553,0.133883,-45],[1.133883,0,0],[1.133883,0,-90],[1.353553,0.383883,-135],[1.353553,0.383883,135],[1.353553,0.383883,45],[1.353553,0.383883,-45],[0,0.53033,-45],[0,0.53033,-135],[0.25,0.78033,45],[0.25,0.78033,135]]},
		{"name":"","hash":"ca0760","data":[[1,1.103553,135],[1,1.103553,45],[0.5,1.103553,45],[0.5,1.103553,135],[0.75,0.853553,45],[0.75,0.853553,135],[0.75,0.853553,-45],[0.75,0.853553,-135],[1.28033,0.78033,180],[1.28033,0.78033,90],[1.28033,1.133883,90],[1.28033,1.133883,180],[0.926777,0.78033,90],[0.926777,0.78033,180],[1.28033,0.78033,0],[1.28033,0.78033,-90],[1.28033,0.426777,0],[1.28033,0.426777,-90],[0.926777,0.426777,180],[0.926777,0.426777,-90],[1.103553,0,-135],[1.103553,0,135],[1.603553,0,45],[1.603553,0,-45],[1.353553,0.25,-135],[1.353553,0.25,135],[1.353553,0.25,45],[1.353553,0.25,-45],[0.25,0.853553,-45],[0.25,0.853553,45],[0,0.603553,-135],[0,0.603553,135]]},
		{"name":"","hash":"2132b7","data":[[0.75,1,135],[0.75,1,45],[0.25,1,45],[0.25,1,135],[0.5,0.75,45],[0.5,0.75,135],[0.5,0.75,-45],[0.5,0.75,-135],[1.03033,0.676777,180],[1.03033,0.676777,90],[1.03033,1.03033,90],[1.03033,1.03033,180],[0.676777,0.676777,90],[0.676777,0.676777,180],[1.03033,0.676777,0],[1.03033,0.676777,-90],[1.207107,0.75,-135],[1.207107,0.75,135],[1.457107,1,45],[1.457107,1,135],[0,0.25,-135],[0,0.25,135],[0.5,0.25,-45],[0.5,0.25,-135],[0.25,0.5,-135],[0.25,0.5,135],[0.25,0.5,45],[0.25,0.5,-45],[1.207107,0.25,-45],[1.207107,0.25,45],[0.957107,0,-135],[0.957107,0,135]]},
		// 45

		// 46

		// 47

		// 48

		// 49

		// 60

	]

};

export default section;
