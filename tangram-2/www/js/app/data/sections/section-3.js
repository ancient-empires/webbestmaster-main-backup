'use strict';
/*global window */

var section = {

	id: 'id_section_3',
	name: 'animal',
	data: [
		// 69
		{"name":"","hash":"404f1c","data":[[0.21967,1.353553,-90],[0.21967,1.353553,180],[0.573223,1,180],[0.573223,1,-90],[0.573223,1.353553,180],[0.573223,1.353553,-90],[0.573223,1.353553,90],[0.573223,1.353553,0],[0.25,1.073223,-45],[0.25,1.073223,-135],[0,0.823223,-135],[0,0.823223,-45],[0.5,0.823223,-135],[0.5,0.823223,-45],[0.25,1.073223,135],[0.25,1.073223,45],[0.926777,1.353553,90],[0.926777,1.353553,0],[0.926777,1,-90],[0.926777,1,0],[1,0.823223,45],[1,0.823223,-45],[0.926777,0,90],[0.926777,0,0],[0.75,0.573223,-135],[0.75,0.573223,135],[0.75,0.573223,45],[0.75,0.573223,-45],[0.5,0.323223,-135],[0.5,0.323223,135],[0.75,0.073223,-45],[0.75,0.073223,45]]},
		{"name":"","hash":"8517eb","data":[[0.073223,0.53033,-45],[0.073223,0.53033,-135],[0.573223,0.53033,-135],[0.573223,0.53033,-45],[0.323223,0.78033,-135],[0.323223,0.78033,-45],[0.323223,0.78033,135],[0.323223,0.78033,45],[0.823223,0.78033,135],[0.823223,0.78033,45],[1.073223,1.03033,45],[1.073223,1.03033,135],[0.573223,1.03033,45],[0.573223,1.03033,135],[0.823223,0.78033,-45],[0.823223,0.78033,-135],[0.353553,0,0],[0.353553,0,-90],[0,0,180],[0,0,-90],[1.323223,0.28033,45],[1.323223,0.28033,-45],[1.323223,0.78033,45],[1.323223,0.78033,-45],[1.073223,0.53033,-135],[1.073223,0.53033,135],[1.073223,0.53033,45],[1.073223,0.53033,-45],[0,0.353553,-90],[0,0.353553,180],[0.353553,0.353553,0],[0.353553,0.353553,90]]},
		{"name":"","hash":"7257d8","data":[[0.926777,0.53033,-45],[0.926777,0.53033,-135],[1.426777,0.53033,-135],[1.426777,0.53033,-45],[1.176777,0.78033,-135],[1.176777,0.78033,-45],[1.176777,0.78033,135],[1.176777,0.78033,45],[0.676777,0.78033,135],[0.676777,0.78033,45],[0.926777,1.03033,45],[0.926777,1.03033,135],[0.426777,1.03033,45],[0.426777,1.03033,135],[0.676777,0.78033,-45],[0.676777,0.78033,-135],[1.5,0,0],[1.5,0,-90],[1.146447,0,180],[1.146447,0,-90],[0,0.853553,-90],[0,0.853553,180],[0.176777,0.78033,-135],[0.176777,0.78033,135],[0.426777,0.53033,-135],[0.426777,0.53033,135],[0.426777,0.53033,45],[0.426777,0.53033,-45],[1.5,0.353553,-90],[1.5,0.353553,0],[1.146447,0.353553,180],[1.146447,0.353553,90]]},
		{"name":"","hash":"542222","data":[[1,1,135],[1,1,45],[0.5,1,45],[0.5,1,135],[0.75,0.75,45],[0.75,0.75,135],[0.75,0.75,-45],[0.75,0.75,-135],[0.25,0.75,-45],[0.25,0.75,-135],[0,0.5,-135],[0,0.5,-45],[0.5,0.5,-135],[0.5,0.5,-45],[0.25,0.75,135],[0.25,0.75,45],[1.75,0.25,45],[1.75,0.25,-45],[1.5,0,-135],[1.5,0,-45],[0.926777,1.176777,0],[0.926777,1.176777,-90],[0.573223,1.176777,90],[0.573223,1.176777,0],[1.25,0.25,-135],[1.25,0.25,135],[1.25,0.25,45],[1.25,0.25,-45],[1.25,0.75,-45],[1.25,0.75,45],[1,0.5,-135],[1,0.5,135]]},
		{"name":"","hash":"85f5a1","data":[[1,1.176777,135],[1,1.176777,45],[0.5,1.176777,45],[0.5,1.176777,135],[0.75,0.926777,45],[0.75,0.926777,135],[0.75,0.926777,-45],[0.75,0.926777,-135],[0.5,0.676777,-135],[0.5,0.676777,135],[0.25,0.926777,135],[0.25,0.926777,-135],[0.25,0.426777,135],[0.25,0.426777,-135],[0.5,0.676777,45],[0.5,0.676777,-45],[0,0.323223,135],[0,0.323223,45],[0.25,0.073223,-45],[0.25,0.073223,45],[1,0.676777,-45],[1,0.676777,-135],[1.5,0.676777,45],[1.5,0.676777,-45],[1.25,0.926777,-135],[1.25,0.926777,135],[1.25,0.926777,45],[1.25,0.926777,-45],[0.426777,0,0],[0.426777,0,-90],[0.426777,0.353553,90],[0.426777,0.353553,180]]},
		{"name":"","hash":"840c49","data":[[0.823223,1.133883,135],[0.823223,1.133883,45],[0.323223,1.133883,45],[0.323223,1.133883,135],[0.573223,0.883883,45],[0.573223,0.883883,135],[0.573223,0.883883,-45],[0.573223,0.883883,-135],[1.073223,0.883883,-45],[1.073223,0.883883,-135],[0.823223,0.633883,-135],[0.823223,0.633883,-45],[1.323223,0.633883,-135],[1.323223,0.633883,-45],[1.073223,0.883883,135],[1.073223,0.883883,45],[0.353553,0,0],[0.353553,0,-90],[0,0,180],[0,0,-90],[0,0.707107,90],[0,0.707107,0],[0.323223,0.633883,-45],[0.323223,0.633883,-135],[0.073223,0.883883,-135],[0.073223,0.883883,135],[0.073223,0.883883,45],[0.073223,0.883883,-45],[0,0.353553,-90],[0,0.353553,180],[0.353553,0.353553,0],[0.353553,0.353553,90]]},
		{"name":"","hash":"b2175d","data":[[0.78033,0.53033,-45],[0.78033,0.53033,-135],[1.28033,0.53033,-135],[1.28033,0.53033,-45],[1.03033,0.78033,-135],[1.03033,0.78033,-45],[1.03033,0.78033,135],[1.03033,0.78033,45],[1.53033,0.78033,135],[1.53033,0.78033,45],[1.78033,1.03033,45],[1.78033,1.03033,135],[1.28033,1.03033,45],[1.28033,1.03033,135],[1.53033,0.78033,-45],[1.53033,0.78033,-135],[0.353553,0,0],[0.353553,0,-90],[0,0,180],[0,0,-90],[1.207107,1.207107,180],[1.207107,1.207107,90],[0.853553,1.207107,-90],[0.853553,1.207107,180],[0.353553,0.353553,-90],[0.353553,0.353553,180],[0.353553,0.353553,90],[0.353553,0.353553,0],[0.707107,0.707107,-90],[0.707107,0.707107,0],[0.353553,0.707107,180],[0.353553,0.707107,90]]},
		// 70
		{"name":"","hash":"cd2a86","data":[[0.633883,1.414214,135],[0.633883,1.414214,45],[0.133883,1.414214,45],[0.133883,1.414214,135],[0.383883,1.164214,45],[0.383883,1.164214,135],[0.383883,1.164214,-45],[0.383883,1.164214,-135],[0.707107,0.883883,180],[0.707107,0.883883,90],[0.707107,1.237437,90],[0.707107,1.237437,180],[0.353553,0.883883,90],[0.353553,0.883883,180],[0.707107,0.883883,0],[0.707107,0.883883,-90],[0.176777,0,180],[0.176777,0,90],[0.53033,0,0],[0.53033,0,90],[0.707107,0.53033,0],[0.707107,0.53033,-90],[0.353553,0.176777,-90],[0.353553,0.176777,180],[0.353553,0.53033,-90],[0.353553,0.53033,180],[0.353553,0.53033,90],[0.353553,0.53033,0],[0,0.883883,0],[0,0.883883,90],[0,0.53033,-90],[0,0.53033,180]]},
		{"name":"","hash":"bf0697","data":[[0.75,1.56066,135],[0.75,1.56066,45],[0.25,1.56066,45],[0.25,1.56066,135],[0.5,1.31066,45],[0.5,1.31066,135],[0.5,1.31066,-45],[0.5,1.31066,-135],[0.176777,1.03033,90],[0.176777,1.03033,0],[0.53033,1.03033,0],[0.53033,1.03033,90],[0.176777,1.383883,0],[0.176777,1.383883,90],[0.176777,1.03033,-90],[0.176777,1.03033,180],[0,0.25,-135],[0,0.25,135],[0.25,0.5,45],[0.25,0.5,135],[0.53033,0.676777,0],[0.53033,0.676777,-90],[0.25,0,-45],[0.25,0,-135],[0.176777,0.676777,-90],[0.176777,0.676777,180],[0.176777,0.676777,90],[0.176777,0.676777,0],[0.883883,0.676777,-90],[0.883883,0.676777,0],[0.53033,0.676777,180],[0.53033,0.676777,90]]},
		{"name":"","hash":"5e4a9b","data":[[0.853553,1.40533,135],[0.853553,1.40533,45],[0.353553,1.40533,45],[0.353553,1.40533,135],[0.603553,1.15533,45],[0.603553,1.15533,135],[0.603553,1.15533,-45],[0.603553,1.15533,-135],[0.78033,0.728553,180],[0.78033,0.728553,90],[0.78033,1.082107,90],[0.78033,1.082107,180],[0.426777,0.728553,90],[0.426777,0.728553,180],[0.78033,0.728553,0],[0.78033,0.728553,-90],[0.15533,0,180],[0.15533,0,90],[0.508883,0,0],[0.508883,0,90],[0.707107,0.551777,135],[0.707107,0.551777,45],[0.207107,0.551777,135],[0.207107,0.551777,45],[0.457107,0.301777,-135],[0.457107,0.301777,135],[0.457107,0.301777,45],[0.457107,0.301777,-45],[0.25,0.801777,135],[0.25,0.801777,45],[0,0.551777,-135],[0,0.551777,-45]]},
		{"name":"","hash":"977469","data":[[0.5,0.03033,-45],[0.5,0.03033,-135],[1,0.03033,-135],[1,0.03033,-45],[0.75,0.28033,-135],[0.75,0.28033,-45],[0.75,0.28033,135],[0.75,0.28033,45],[1.28033,0.353553,-90],[1.28033,0.353553,180],[0.926777,0.353553,180],[0.926777,0.353553,-90],[1.28033,0,180],[1.28033,0,-90],[1.28033,0.353553,90],[1.28033,0.353553,0],[0,0.53033,-135],[0,0.53033,135],[0.25,0.78033,45],[0.25,0.78033,135],[1.633883,0.176777,0],[1.633883,0.176777,-90],[0.5,0.53033,135],[0.5,0.53033,45],[0.25,0.28033,-135],[0.25,0.28033,135],[0.25,0.28033,45],[0.25,0.28033,-45],[1.457107,0.78033,135],[1.457107,0.78033,45],[1.207107,0.53033,-135],[1.207107,0.53033,-45]]},
		{"name":"","hash":"18cd84","data":[[0.353553,0.603553,90],[0.353553,0.603553,0],[0,0.957107,0],[0,0.957107,90],[0,0.603553,0],[0,0.603553,90],[0,0.603553,-90],[0,0.603553,180],[0.323223,0.883883,135],[0.323223,0.883883,45],[0.573223,1.133883,45],[0.573223,1.133883,135],[0.073223,1.133883,45],[0.073223,1.133883,135],[0.323223,0.883883,-45],[0.323223,0.883883,-135],[0.396447,0,180],[0.396447,0,90],[0.75,0,0],[0.75,0,90],[0.823223,0.883883,45],[0.823223,0.883883,-45],[0.073223,0.426777,135],[0.073223,0.426777,45],[0.323223,0.176777,-135],[0.323223,0.176777,135],[0.323223,0.176777,45],[0.323223,0.176777,-45],[0.573223,0.426777,45],[0.573223,0.426777,135],[0.823223,0.176777,-45],[0.823223,0.176777,-135]]},
		{"name":"","hash":"4e041b","data":[[1.28033,1.426777,135],[1.28033,1.426777,45],[0.78033,1.426777,45],[0.78033,1.426777,135],[1.03033,1.176777,45],[1.03033,1.176777,135],[1.03033,1.176777,-45],[1.03033,1.176777,-135],[0.78033,0.926777,-135],[0.78033,0.926777,135],[0.53033,1.176777,135],[0.53033,1.176777,-135],[0.53033,0.676777,135],[0.53033,0.676777,-135],[0.78033,0.926777,45],[0.78033,0.926777,-45],[0.78033,0.426777,45],[0.78033,0.426777,-45],[0.53033,0.176777,-135],[0.53033,0.176777,-45],[0.81066,0,0],[0.81066,0,-90],[0.957107,0.5,90],[0.957107,0.5,0],[0.457107,0,180],[0.457107,0,90],[0.457107,0,0],[0.457107,0,-90],[0,1.25,90],[0,1.25,180],[0.353553,1.25,0],[0.353553,1.25,-90]]},
		{"name":"","hash":"e22c1d","data":[[1.06066,0.353553,180],[1.06066,0.353553,90],[0.707107,0,90],[0.707107,0,180],[1.06066,0,90],[1.06066,0,180],[1.06066,0,0],[1.06066,0,-90],[1.487437,0.323223,-135],[1.487437,0.323223,135],[1.237437,0.573223,135],[1.237437,0.573223,-135],[1.237437,0.073223,135],[1.237437,0.073223,-135],[1.487437,0.323223,45],[1.487437,0.323223,-45],[0.53033,0.073223,-135],[0.53033,0.073223,135],[0.78033,0.323223,45],[0.78033,0.323223,135],[0,0,-90],[0,0,180],[1.237437,0.823223,-90],[1.237437,0.823223,180],[0.353553,0,-90],[0.353553,0,180],[0.353553,0,90],[0.353553,0,0],[0.353553,0.5,-90],[0.353553,0.5,180],[0.707107,0.5,0],[0.707107,0.5,90]]},
		// 71
		{"name":"","hash":"c0898f","data":[[1.133883,1.133883,180],[1.133883,1.133883,90],[0.78033,0.78033,90],[0.78033,0.78033,180],[1.133883,0.78033,90],[1.133883,0.78033,180],[1.133883,0.78033,0],[1.133883,0.78033,-90],[0.426777,0.426777,-90],[0.426777,0.426777,180],[0.073223,0.426777,180],[0.073223,0.426777,-90],[0.426777,0.073223,180],[0.426777,0.073223,-90],[0.426777,0.426777,90],[0.426777,0.426777,0],[0.25,0,-45],[0.25,0,-135],[0,0.25,135],[0,0.25,-135],[0.353553,1.103553,-135],[0.353553,1.103553,135],[0.353553,0.603553,-45],[0.353553,0.603553,-135],[0.603553,0.853553,-135],[0.603553,0.853553,135],[0.603553,0.853553,45],[0.603553,0.853553,-45],[1.84099,0.78033,-90],[1.84099,0.78033,0],[1.487437,0.78033,180],[1.487437,0.78033,90]]},
		{"name":"","hash":"7a0e99","data":[[0.78033,0,0],[0.78033,0,-90],[1.133883,0.353553,-90],[1.133883,0.353553,0],[0.78033,0.353553,-90],[0.78033,0.353553,0],[0.78033,0.353553,180],[0.78033,0.353553,90],[0.426777,0,180],[0.426777,0,90],[0.426777,0.353553,90],[0.426777,0.353553,180],[0.073223,0,90],[0.073223,0,180],[0.426777,0,0],[0.426777,0,-90],[0,0.176777,-135],[0,0.176777,135],[0.25,0.426777,45],[0.25,0.426777,135],[0.78033,0.707107,-90],[0.78033,0.707107,180],[0.478553,0.65533,-135],[0.478553,0.65533,135],[1.133883,0.707107,-90],[1.133883,0.707107,180],[1.133883,0.707107,90],[1.133883,0.707107,0],[1.487437,0.707107,-90],[1.487437,0.707107,180],[1.84099,0.707107,0],[1.84099,0.707107,90]]},
		{"name":"","hash":"8c0829","data":[[1.133883,0.707107,90],[1.133883,0.707107,0],[0.78033,1.06066,0],[0.78033,1.06066,90],[0.78033,0.707107,0],[0.78033,0.707107,90],[0.78033,0.707107,-90],[0.78033,0.707107,180],[0.78033,0.353553,-90],[0.78033,0.353553,180],[0.426777,0.353553,180],[0.426777,0.353553,-90],[0.78033,0,180],[0.78033,0,-90],[0.78033,0.353553,90],[0.78033,0.353553,0],[0.426777,1.06066,-90],[0.426777,1.06066,180],[0.426777,1.414214,90],[0.426777,1.414214,180],[1.082107,1.008883,135],[1.082107,1.008883,45],[0.603553,1.59099,0],[0.603553,1.59099,-90],[1.133883,0.176777,-90],[1.133883,0.176777,180],[1.133883,0.176777,90],[1.133883,0.176777,0],[0.25,0.987437,-45],[0.25,0.987437,45],[0,0.737437,-135],[0,0.737437,135]]},
		{"name":"","hash":"d0bca5","data":[[1.362437,1.03033,180],[1.362437,1.03033,90],[1.008883,0.676777,90],[1.008883,0.676777,180],[1.362437,0.676777,90],[1.362437,0.676777,180],[1.362437,0.676777,0],[1.362437,0.676777,-90],[0.353553,0.375,90],[0.353553,0.375,0],[0.707107,0.375,0],[0.707107,0.375,90],[0.353553,0.728553,0],[0.353553,0.728553,90],[0.353553,0.375,-90],[0.353553,0.375,180],[0.883883,0.551777,0],[0.883883,0.551777,-90],[0.53033,0.551777,180],[0.53033,0.551777,-90],[1.06066,0.978553,-135],[1.06066,0.978553,135],[0.176777,0.90533,-90],[0.176777,0.90533,180],[0,0.551777,-90],[0,0.551777,180],[0,0.551777,90],[0,0.551777,0],[1.539214,0.25,-135],[1.539214,0.25,135],[1.789214,0,-45],[1.789214,0,45]]},
		{"name":"","hash":"f6de20","data":[[0.707107,1.06066,180],[0.707107,1.06066,90],[0.353553,0.707107,90],[0.353553,0.707107,180],[0.707107,0.707107,90],[0.707107,0.707107,180],[0.707107,0.707107,0],[0.707107,0.707107,-90],[0.353553,0.353553,0],[0.353553,0.353553,-90],[0.353553,0,-90],[0.353553,0,0],[0.707107,0.353553,-90],[0.707107,0.353553,0],[0.353553,0.353553,180],[0.353553,0.353553,90],[0.883883,0.78033,-135],[0.883883,0.78033,135],[1.133883,1.03033,45],[1.133883,1.03033,135],[1.06066,1.207107,90],[1.06066,1.207107,0],[0.176777,1.28033,135],[0.176777,1.28033,45],[0,0.176777,-90],[0,0.176777,180],[0,0.176777,90],[0,0.176777,0],[0.426777,1.03033,-45],[0.426777,1.03033,45],[0.176777,0.78033,-135],[0.176777,0.78033,135]]},
		{"name":"","hash":"6b77cc","data":[[0.707107,0.707107,90],[0.707107,0.707107,0],[0.353553,1.06066,0],[0.353553,1.06066,90],[0.353553,0.707107,0],[0.353553,0.707107,90],[0.353553,0.707107,-90],[0.353553,0.707107,180],[1.06066,0.707107,-90],[1.06066,0.707107,180],[0.707107,0.707107,180],[0.707107,0.707107,-90],[1.06066,0.353553,180],[1.06066,0.353553,-90],[1.06066,0.707107,90],[1.06066,0.707107,0],[1.487437,0.28033,-45],[1.487437,0.28033,-135],[1.237437,0.53033,135],[1.237437,0.53033,-135],[0.353553,1.06066,-90],[0.353553,1.06066,180],[1.487437,0.53033,-90],[1.487437,0.53033,180],[1.06066,1.06066,-90],[1.06066,1.06066,180],[1.06066,1.06066,90],[1.06066,1.06066,0],[0,0,0],[0,0,-90],[0,0.353553,90],[0,0.353553,180]]},
		{"name":"","hash":"221c8c","data":[[0.78033,0.676777,90],[0.78033,0.676777,0],[0.426777,1.03033,0],[0.426777,1.03033,90],[0.426777,0.676777,0],[0.426777,0.676777,90],[0.426777,0.676777,-90],[0.426777,0.676777,180],[1.457107,0.25,45],[1.457107,0.25,-45],[1.707107,0,-45],[1.707107,0,45],[1.707107,0.5,-45],[1.707107,0.5,45],[1.457107,0.25,-135],[1.457107,0.25,135],[1.883883,0.426777,90],[1.883883,0.426777,0],[1.883883,0.073223,-90],[1.883883,0.073223,0],[0,0.5,135],[0,0.5,45],[0.957107,0.75,135],[0.957107,0.75,45],[1.207107,0.5,-135],[1.207107,0.5,135],[1.207107,0.5,45],[1.207107,0.5,-45],[1.383883,0.926777,-90],[1.383883,0.926777,0],[1.03033,0.926777,180],[1.03033,0.926777,90]]},
		// 72
		{"name":"","hash":"aa0aa2","data":[[0.603553,1,-135],[0.603553,1,135],[0.603553,0.5,135],[0.603553,0.5,-135],[0.853553,0.75,135],[0.853553,0.75,-135],[0.853553,0.75,45],[0.853553,0.75,-45],[1.353553,1.25,-135],[1.353553,1.25,135],[1.103553,1.5,135],[1.103553,1.5,-135],[1.103553,1,135],[1.103553,1,-135],[1.353553,1.25,45],[1.353553,1.25,-45],[0,0.25,135],[0,0.25,45],[0.25,0,-45],[0.25,0,45],[1.103553,1,45],[1.103553,1,-45],[0.603553,1.5,-135],[0.603553,1.5,135],[0.853553,1.25,-135],[0.853553,1.25,135],[0.853553,1.25,45],[0.853553,1.25,-45],[0.426777,0.426777,180],[0.426777,0.426777,90],[0.426777,0.073223,-90],[0.426777,0.073223,0]]},
		{"name":"","hash":"414140","data":[[0.426777,1.487437,90],[0.426777,1.487437,0],[0.073223,1.84099,0],[0.073223,1.84099,90],[0.073223,1.487437,0],[0.073223,1.487437,90],[0.073223,1.487437,-90],[0.073223,1.487437,180],[0.707107,1.457107,45],[0.707107,1.457107,-45],[0.957107,1.207107,-45],[0.957107,1.207107,45],[0.957107,1.707107,-45],[0.957107,1.707107,45],[0.707107,1.457107,-135],[0.707107,1.457107,135],[0,0.25,135],[0,0.25,45],[0.25,0,-45],[0.25,0,45],[0.78033,1.133883,90],[0.78033,1.133883,0],[0.78033,0.426777,0],[0.78033,0.426777,-90],[0.78033,0.78033,-90],[0.78033,0.78033,180],[0.78033,0.78033,90],[0.78033,0.78033,0],[0.426777,0.073223,0],[0.426777,0.073223,-90],[0.426777,0.426777,90],[0.426777,0.426777,180]]},
		{"name":"","hash":"fdedc1","data":[[1.31066,1.353553,-135],[1.31066,1.353553,135],[1.31066,0.853553,135],[1.31066,0.853553,-135],[1.56066,1.103553,135],[1.56066,1.103553,-135],[1.56066,1.103553,45],[1.56066,1.103553,-45],[2.09099,1.03033,180],[2.09099,1.03033,90],[2.09099,1.383883,90],[2.09099,1.383883,180],[1.737437,1.03033,90],[1.737437,1.03033,180],[2.09099,1.03033,0],[2.09099,1.03033,-90],[0,0.25,135],[0,0.25,45],[0.25,0,-45],[0.25,0,45],[0.78033,0.073223,0],[0.78033,0.073223,-90],[1.133883,0.78033,180],[1.133883,0.78033,90],[0.426777,0.073223,-90],[0.426777,0.073223,180],[0.426777,0.073223,90],[0.426777,0.073223,0],[1.133883,0.426777,-90],[1.133883,0.426777,0],[0.78033,0.426777,180],[0.78033,0.426777,90]]},
		{"name":"","hash":"b5df27","data":[[0.957107,1.707107,-135],[0.957107,1.707107,135],[0.957107,1.207107,135],[0.957107,1.207107,-135],[1.207107,1.457107,135],[1.207107,1.457107,-135],[1.207107,1.457107,45],[1.207107,1.457107,-45],[1.737437,1.383883,180],[1.737437,1.383883,90],[1.737437,1.737437,90],[1.737437,1.737437,180],[1.383883,1.383883,90],[1.383883,1.383883,180],[1.737437,1.383883,0],[1.737437,1.383883,-90],[0,0.25,135],[0,0.25,45],[0.25,0,-45],[0.25,0,45],[0.78033,1.133883,180],[0.78033,1.133883,90],[0.426777,0.073223,0],[0.426777,0.073223,-90],[0.78033,0.78033,-90],[0.78033,0.78033,180],[0.78033,0.78033,90],[0.78033,0.78033,0],[0.78033,0.426777,-90],[0.78033,0.426777,0],[0.426777,0.426777,180],[0.426777,0.426777,90]]},
		{"name":"","hash":"d6540d","data":[[0.25,1.25,-135],[0.25,1.25,135],[0.25,0.75,135],[0.25,0.75,-135],[0.5,1,135],[0.5,1,-135],[0.5,1,45],[0.5,1,-45],[1,1.5,-135],[1,1.5,135],[0.75,1.75,135],[0.75,1.75,-135],[0.75,1.25,135],[0.75,1.25,-135],[1,1.5,45],[1,1.5,-45],[0,0.25,135],[0,0.25,45],[0.25,0,-45],[0.25,0,45],[0.75,1.25,45],[0.75,1.25,-45],[0.25,1.75,-135],[0.25,1.75,135],[0.5,1.5,-135],[0.5,1.5,135],[0.5,1.5,45],[0.5,1.5,-45],[0.5,0.5,-45],[0.5,0.5,45],[0.25,0.25,-135],[0.25,0.25,135]]},
		{"name":"","hash":"d8d829","data":[[0.353553,1.883883,90],[0.353553,1.883883,0],[0,2.237437,0],[0,2.237437,90],[0,1.883883,0],[0,1.883883,90],[0,1.883883,-90],[0,1.883883,180],[0.53033,1.957107,45],[0.53033,1.957107,-45],[0.78033,1.707107,-45],[0.78033,1.707107,45],[0.78033,2.207107,-45],[0.78033,2.207107,45],[0.53033,1.957107,-135],[0.53033,1.957107,135],[1.133883,0,-45],[1.133883,0,-135],[0.883883,0.25,135],[0.883883,0.25,-135],[0.957107,0.926777,-90],[0.957107,0.926777,180],[0.957107,1.633883,90],[0.957107,1.633883,0],[0.957107,1.28033,-90],[0.957107,1.28033,180],[0.957107,1.28033,90],[0.957107,1.28033,0],[0.883883,0.75,-135],[0.883883,0.75,135],[1.133883,0.5,-45],[1.133883,0.5,45]]},
		// 73
		{"name":"","hash":"25597c","data":[[1.133883,0,0],[1.133883,0,-90],[1.487437,0.353553,-90],[1.487437,0.353553,0],[1.133883,0.353553,-90],[1.133883,0.353553,0],[1.133883,0.353553,180],[1.133883,0.353553,90],[1.133883,0.707107,180],[1.133883,0.707107,90],[1.133883,1.06066,90],[1.133883,1.06066,180],[0.78033,0.707107,90],[0.78033,0.707107,180],[1.133883,0.707107,0],[1.133883,0.707107,-90],[0.78033,0.707107,0],[0.78033,0.707107,-90],[0.426777,0.707107,180],[0.426777,0.707107,-90],[0.426777,1.06066,180],[0.426777,1.06066,90],[1.43566,0.051777,45],[1.43566,0.051777,-45],[0.25,0.633883,-135],[0.25,0.633883,135],[0.25,0.633883,45],[0.25,0.633883,-45],[0,0.383883,-135],[0,0.383883,135],[0.25,0.133883,-45],[0.25,0.133883,45]]},
		{"name":"","hash":"3ffbab","data":[[1.03033,0.426777,90],[1.03033,0.426777,0],[0.676777,0.78033,0],[0.676777,0.78033,90],[0.676777,0.426777,0],[0.676777,0.426777,90],[0.676777,0.426777,-90],[0.676777,0.426777,180],[0.25,0.25,-45],[0.25,0.25,-135],[0,0,-135],[0,0,-45],[0.5,0,-135],[0.5,0,-45],[0.25,0.25,135],[0.25,0.25,45],[1.383883,0.426777,0],[1.383883,0.426777,-90],[1.03033,0.426777,180],[1.03033,0.426777,-90],[1.383883,0.78033,180],[1.383883,0.78033,90],[0.676777,0.78033,-90],[0.676777,0.78033,180],[2.09099,0.53033,-135],[2.09099,0.53033,135],[2.09099,0.53033,45],[2.09099,0.53033,-45],[1.914214,0.603553,-90],[1.914214,0.603553,0],[1.56066,0.603553,180],[1.56066,0.603553,90]]},
		{"name":"","hash":"1de2a8","data":[[1.487437,0.676777,90],[1.487437,0.676777,0],[1.133883,1.03033,0],[1.133883,1.03033,90],[1.133883,0.676777,0],[1.133883,0.676777,90],[1.133883,0.676777,-90],[1.133883,0.676777,180],[0.426777,0.676777,90],[0.426777,0.676777,0],[0.78033,0.676777,0],[0.78033,0.676777,90],[0.426777,1.03033,0],[0.426777,1.03033,90],[0.426777,0.676777,-90],[0.426777,0.676777,180],[0.707107,1,135],[0.707107,1,45],[0.957107,0.75,-45],[0.957107,0.75,45],[1.914214,0.5,45],[1.914214,0.5,-45],[1.487437,0.323223,0],[1.487437,0.323223,-90],[1.664214,0.75,-135],[1.664214,0.75,135],[1.664214,0.75,45],[1.664214,0.75,-45],[0.25,0.25,-45],[0.25,0.25,45],[0,0,-135],[0,0,135]]},
		{"name":"","hash":"ba5107","data":[[0,0.353553,-90],[0,0.353553,180],[0.353553,0,180],[0.353553,0,-90],[0.353553,0.353553,180],[0.353553,0.353553,-90],[0.353553,0.353553,90],[0.353553,0.353553,0],[0.353553,0.707107,90],[0.353553,0.707107,0],[0.707107,0.707107,0],[0.707107,0.707107,90],[0.353553,1.06066,0],[0.353553,1.06066,90],[0.353553,0.707107,-90],[0.353553,0.707107,180],[1.06066,0.707107,0],[1.06066,0.707107,-90],[0.707107,0.707107,180],[0.707107,0.707107,-90],[1.06066,1.06066,180],[1.06066,1.06066,90],[0.051777,0.051777,-135],[0.051777,0.051777,135],[1.59099,1.237437,-90],[1.59099,1.237437,180],[1.59099,1.237437,90],[1.59099,1.237437,0],[1.59099,0.883883,-90],[1.59099,0.883883,0],[1.237437,0.883883,180],[1.237437,0.883883,90]]},
		{"name":"","hash":"485258","data":[[1.414214,0,0],[1.414214,0,-90],[1.767767,0.353553,-90],[1.767767,0.353553,0],[1.414214,0.353553,-90],[1.414214,0.353553,0],[1.414214,0.353553,180],[1.414214,0.353553,90],[1.414214,0.707107,180],[1.414214,0.707107,90],[1.414214,1.06066,90],[1.414214,1.06066,180],[1.06066,0.707107,90],[1.06066,0.707107,180],[1.414214,0.707107,0],[1.414214,0.707107,-90],[1.06066,0.707107,0],[1.06066,0.707107,-90],[0.707107,0.707107,180],[0.707107,0.707107,-90],[1.944544,0.28033,45],[1.944544,0.28033,-45],[0.707107,1.06066,90],[0.707107,1.06066,0],[0,0.81066,-135],[0,0.81066,135],[0,0.81066,45],[0,0.81066,-45],[0.176777,0.883883,-90],[0.176777,0.883883,180],[0.53033,0.883883,0],[0.53033,0.883883,90]]},
		{"name":"","hash":"58c741","data":[[1.207107,0.75,135],[1.207107,0.75,45],[0.707107,0.75,45],[0.707107,0.75,135],[0.957107,0.5,45],[0.957107,0.5,135],[0.957107,0.5,-45],[0.957107,0.5,-135],[0.426777,0.426777,90],[0.426777,0.426777,0],[0.78033,0.426777,0],[0.78033,0.426777,90],[0.426777,0.78033,0],[0.426777,0.78033,90],[0.426777,0.426777,-90],[0.426777,0.426777,180],[0.25,0.25,135],[0.25,0.25,45],[0.5,0,-45],[0.5,0,45],[0.926777,0.926777,180],[0.926777,0.926777,90],[0,0,-135],[0,0,135],[1.81066,0.853553,-135],[1.81066,0.853553,135],[1.81066,0.853553,45],[1.81066,0.853553,-45],[1.633883,0.926777,-90],[1.633883,0.926777,0],[1.28033,0.926777,180],[1.28033,0.926777,90]]},
		// 74
		{"name":"","hash":"d06970","data":[[0.78033,0.75,45],[0.78033,0.75,-45],[0.78033,1.25,-45],[0.78033,1.25,45],[0.53033,1,-45],[0.53033,1,45],[0.53033,1,-135],[0.53033,1,135],[0,0.926777,90],[0,0.926777,0],[0.353553,0.926777,0],[0.353553,0.926777,90],[0,1.28033,0],[0,1.28033,90],[0,0.926777,-90],[0,0.926777,180],[1.03033,0,-45],[1.03033,0,-135],[0.78033,0.25,135],[0.78033,0.25,-135],[0,0.573223,-90],[0,0.573223,180],[0.353553,0.573223,0],[0.353553,0.573223,-90],[0.53033,0.5,-135],[0.53033,0.5,135],[0.53033,0.5,45],[0.53033,0.5,-45],[0.78033,0.75,-135],[0.78033,0.75,135],[1.03033,0.5,-45],[1.03033,0.5,45]]},
		{"name":"","hash":"dc0c0a","data":[[0.25,1.5,-135],[0.25,1.5,135],[0.25,1,135],[0.25,1,-135],[0.5,1.25,135],[0.5,1.25,-135],[0.5,1.25,45],[0.5,1.25,-45],[1.154106,1.298712,180],[1.154106,1.298712,90],[1.154106,1.652266,90],[1.154106,1.652266,180],[0.800552,1.298712,90],[0.800552,1.298712,180],[1.154106,1.298712,0],[1.154106,1.298712,-90],[1.154106,0.945159,0],[1.154106,0.945159,-90],[0.800552,0.945159,180],[0.800552,0.945159,-90],[0.25,0.25,45],[0.25,0.25,-45],[0,0,-45],[0,0,-135],[0.623776,0.871936,-135],[0.623776,0.871936,135],[0.623776,0.871936,45],[0.623776,0.871936,-45],[0.25,0.75,-45],[0.25,0.75,45],[0,0.5,-135],[0,0.5,135]]},
		{"name":"","hash":"cd41b6","data":[[0.707107,0.53033,-90],[0.707107,0.53033,180],[1.06066,0.176777,180],[1.06066,0.176777,-90],[1.06066,0.53033,180],[1.06066,0.53033,-90],[1.06066,0.53033,90],[1.06066,0.53033,0],[0.707107,0.883883,90],[0.707107,0.883883,0],[1.06066,0.883883,0],[1.06066,0.883883,90],[0.707107,1.237437,0],[0.707107,1.237437,90],[0.707107,0.883883,-90],[0.707107,0.883883,180],[1.06066,1.237437,0],[1.06066,1.237437,-90],[0.707107,1.237437,180],[0.707107,1.237437,-90],[1.414214,0.53033,0],[1.414214,0.53033,-90],[1.414214,0,0],[1.414214,0,-90],[0,1.237437,-90],[0,1.237437,180],[0,1.237437,90],[0,1.237437,0],[0.353553,1.237437,0],[0.353553,1.237437,90],[0.353553,0.883883,-90],[0.353553,0.883883,180]]},
		{"name":"","hash":"fed625","data":[[1.237437,0,90],[1.237437,0,0],[0.883883,0.353553,0],[0.883883,0.353553,90],[0.883883,0,0],[0.883883,0,90],[0.883883,0,-90],[0.883883,0,180],[1.414214,0.073223,135],[1.414214,0.073223,45],[1.664214,0.323223,45],[1.664214,0.323223,135],[1.164214,0.323223,45],[1.164214,0.323223,135],[1.414214,0.073223,-45],[1.414214,0.073223,-135],[0.53033,0,0],[0.53033,0,-90],[0.176777,0,180],[0.176777,0,-90],[0.707107,0.53033,-90],[0.707107,0.53033,180],[0.53033,0,180],[0.53033,0,90],[1.737437,0.5,-90],[1.737437,0.5,180],[1.737437,0.5,90],[1.737437,0.5,0],[0,0.426777,45],[0,0.426777,135],[0.25,0.176777,-45],[0.25,0.176777,-135]]},
		{"name":"","hash":"e6c8e4","data":[[0.78033,0.676777,90],[0.78033,0.676777,0],[0.426777,1.03033,0],[0.426777,1.03033,90],[0.426777,0.676777,0],[0.426777,0.676777,90],[0.426777,0.676777,-90],[0.426777,0.676777,180],[1.103553,0.603553,135],[1.103553,0.603553,45],[1.353553,0.853553,45],[1.353553,0.853553,135],[0.853553,0.853553,45],[0.853553,0.853553,135],[1.103553,0.603553,-45],[1.103553,0.603553,-135],[1.426777,1.103553,45],[1.426777,1.103553,-45],[1.176777,0.853553,-135],[1.176777,0.853553,-45],[1.78033,0.957107,-135],[1.78033,0.957107,135],[1.603553,0.603553,45],[1.603553,0.603553,-45],[1.603553,1.03033,-90],[1.603553,1.03033,180],[1.603553,1.03033,90],[1.603553,1.03033,0],[0.25,0.25,-45],[0.25,0.25,45],[0,0,-135],[0,0,135]]},
		{"name":"","hash":"e9a929","data":[[0.353553,0.176777,0],[0.353553,0.176777,-90],[0.707107,0.53033,-90],[0.707107,0.53033,0],[0.353553,0.53033,-90],[0.353553,0.53033,0],[0.353553,0.53033,180],[0.353553,0.53033,90],[0.707107,0.883883,180],[0.707107,0.883883,90],[0.707107,1.237437,90],[0.707107,1.237437,180],[0.353553,0.883883,90],[0.353553,0.883883,180],[0.707107,0.883883,0],[0.707107,0.883883,-90],[1.06066,1.59099,0],[1.06066,1.59099,-90],[0.707107,1.59099,180],[0.707107,1.59099,-90],[0,0,-90],[0,0,180],[0.176777,0.707107,45],[0.176777,0.707107,-45],[0.633883,1.414214,-135],[0.633883,1.414214,135],[0.633883,1.414214,45],[0.633883,1.414214,-45],[1.133883,1.414214,-45],[1.133883,1.414214,45],[0.883883,1.164214,-135],[0.883883,1.164214,135]]},
		// 75
		{"name":"","hash":"1f9254","data":[[1.457107,0.53033,180],[1.457107,0.53033,90],[1.103553,0.176777,90],[1.103553,0.176777,180],[1.457107,0.176777,90],[1.457107,0.176777,180],[1.457107,0.176777,0],[1.457107,0.176777,-90],[0.926777,0.25,135],[0.926777,0.25,45],[1.176777,0.5,45],[1.176777,0.5,135],[0.676777,0.5,45],[0.676777,0.5,135],[0.926777,0.25,-45],[0.926777,0.25,-135],[1.633883,0,-135],[1.633883,0,135],[1.883883,0.25,45],[1.883883,0.25,135],[0.603553,0.323223,90],[0.603553,0.323223,0],[0.926777,0.676777,90],[0.926777,0.676777,0],[0,0.71967,-90],[0,0.71967,180],[0,0.71967,90],[0,0.71967,0],[0.176777,0.646447,-135],[0.176777,0.646447,135],[0.426777,0.396447,-45],[0.426777,0.396447,45]]},
		{"name":"","hash":"24d970","data":[[0.707107,0.676777,0],[0.707107,0.676777,-90],[1.06066,1.03033,-90],[1.06066,1.03033,0],[0.707107,1.03033,-90],[0.707107,1.03033,0],[0.707107,1.03033,180],[0.707107,1.03033,90],[1.03033,0.25,135],[1.03033,0.25,45],[1.28033,0.5,45],[1.28033,0.5,135],[0.78033,0.5,45],[0.78033,0.5,135],[1.03033,0.25,-45],[1.03033,0.25,-135],[1.03033,0,180],[1.03033,0,90],[1.383883,0,0],[1.383883,0,90],[0.707107,0.676777,180],[0.707107,0.676777,90],[1.06066,0.676777,90],[1.06066,0.676777,0],[0,0.676777,-90],[0,0.676777,180],[0,0.676777,90],[0,0.676777,0],[0.353553,1.03033,-90],[0.353553,1.03033,0],[0,1.03033,180],[0,1.03033,90]]},
		{"name":"","hash":"6411a5","data":[[0.5,1.103553,135],[0.5,1.103553,45],[0,1.103553,45],[0,1.103553,135],[0.25,0.853553,45],[0.25,0.853553,135],[0.25,0.853553,-45],[0.25,0.853553,-135],[0.926777,1.28033,180],[0.926777,1.28033,90],[0.926777,1.633883,90],[0.926777,1.633883,180],[0.573223,1.28033,90],[0.573223,1.28033,180],[0.926777,1.28033,0],[0.926777,1.28033,-90],[1.103553,1.103553,-135],[1.103553,1.103553,135],[1.353553,1.353553,45],[1.353553,1.353553,135],[0.426777,0.426777,90],[0.426777,0.426777,0],[0.073223,1.28033,90],[0.073223,1.28033,0],[1,0.25,-135],[1,0.25,135],[1,0.25,45],[1,0.25,-45],[0.5,0.25,45],[0.5,0.25,135],[0.75,0,-45],[0.75,0,-135]]},
		{"name":"","hash":"7e8fb8","data":[[0.53033,1.426777,-135],[0.53033,1.426777,135],[0.53033,0.926777,135],[0.53033,0.926777,-135],[0.78033,1.176777,135],[0.78033,1.176777,-135],[0.78033,1.176777,45],[0.78033,1.176777,-45],[0.353553,0.853553,180],[0.353553,0.853553,90],[0.353553,1.207107,90],[0.353553,1.207107,180],[0,0.853553,90],[0,0.853553,180],[0.353553,0.853553,0],[0.353553,0.853553,-90],[0.353553,0.25,45],[0.353553,0.25,-45],[0.103553,0,-135],[0.103553,0,-45],[1.28033,2.176777,135],[1.28033,2.176777,45],[0.353553,0.5,0],[0.353553,0.5,-90],[1.03033,1.926777,-135],[1.03033,1.926777,135],[1.03033,1.926777,45],[1.03033,1.926777,-45],[0.78033,1.676777,-135],[0.78033,1.676777,135],[1.03033,1.426777,-45],[1.03033,1.426777,45]]},
		{"name":"","hash":"3f1627","data":[[1.25,0.75,45],[1.25,0.75,-45],[1.25,1.25,-45],[1.25,1.25,45],[1,1,-45],[1,1,45],[1,1,-135],[1,1,135],[1.426777,0.676777,90],[1.426777,0.676777,0],[1.78033,0.676777,0],[1.78033,0.676777,90],[1.426777,1.03033,0],[1.426777,1.03033,90],[1.426777,0.676777,-90],[1.426777,0.676777,180],[1.5,0,-45],[1.5,0,-135],[1.25,0.25,135],[1.25,0.25,-135],[0,1.5,-135],[0,1.5,135],[1.426777,0.323223,-90],[1.426777,0.323223,180],[0.25,1.25,-135],[0.25,1.25,135],[0.25,1.25,45],[0.25,1.25,-45],[0.5,1,-45],[0.5,1,-135],[0.75,1.25,45],[0.75,1.25,135]]},
		{"name":"","hash":"a2b1b3","data":[[0.78033,0.926777,90],[0.78033,0.926777,0],[0.426777,1.28033,0],[0.426777,1.28033,90],[0.426777,0.926777,0],[0.426777,0.926777,90],[0.426777,0.926777,-90],[0.426777,0.926777,180],[0.957107,1,135],[0.957107,1,45],[1.207107,1.25,45],[1.207107,1.25,135],[0.707107,1.25,45],[0.707107,1.25,135],[0.957107,1,-45],[0.957107,1,-135],[1.487437,0.573223,0],[1.487437,0.573223,-90],[1.133883,0.573223,180],[1.133883,0.573223,-90],[1.207107,0.75,-45],[1.207107,0.75,-135],[0.25,0,-45],[0.25,0,-135],[0.5,0.25,-135],[0.5,0.25,135],[0.5,0.25,45],[0.5,0.25,-45],[0.25,0.5,-45],[0.25,0.5,45],[0,0.25,-135],[0,0.25,135]]},
		{"name":"","hash":"dd58a8","data":[[0.676777,0.75,135],[0.676777,0.75,45],[0.176777,0.75,45],[0.176777,0.75,135],[0.426777,0.5,45],[0.426777,0.5,135],[0.426777,0.5,-45],[0.426777,0.5,-135],[0.75,1.28033,-90],[0.75,1.28033,180],[0.396447,1.28033,180],[0.396447,1.28033,-90],[0.75,0.926777,180],[0.75,0.926777,-90],[0.75,1.28033,90],[0.75,1.28033,0],[0.396447,0.926777,180],[0.396447,0.926777,90],[0.75,0.926777,0],[0.75,0.926777,90],[0.176777,0.25,-135],[0.176777,0.25,135],[0,0,-90],[0,0,180],[1.457107,0.926777,180],[1.457107,0.926777,90],[1.457107,0.926777,0],[1.457107,0.926777,-90],[1.103553,1.28033,-90],[1.103553,1.28033,180],[1.457107,1.28033,0],[1.457107,1.28033,90]]},
		// 76
		{"name":"","hash":"703d55","data":[[0.353553,0.707107,90],[0.353553,0.707107,0],[0,1.06066,0],[0,1.06066,90],[0,0.707107,0],[0,0.707107,90],[0,0.707107,-90],[0,0.707107,180],[0.707107,0.707107,-90],[0.707107,0.707107,180],[0.353553,0.707107,180],[0.353553,0.707107,-90],[0.707107,0.353553,180],[0.707107,0.353553,-90],[0.707107,0.707107,90],[0.707107,0.707107,0],[0.633883,0.883883,-45],[0.633883,0.883883,-135],[0.383883,1.133883,135],[0.383883,1.133883,-135],[1.06066,0.707107,180],[1.06066,0.707107,90],[0.53033,0.073223,135],[0.53033,0.073223,45],[1.06066,0.353553,-90],[1.06066,0.353553,180],[1.06066,0.353553,90],[1.06066,0.353553,0],[1.06066,0,-90],[1.06066,0,0],[0.707107,0,180],[0.707107,0,90]]},
		{"name":"","hash":"66a805","data":[[0.53033,0.676777,90],[0.53033,0.676777,0],[0.176777,1.03033,0],[0.176777,1.03033,90],[0.176777,0.676777,0],[0.176777,0.676777,90],[0.176777,0.676777,-90],[0.176777,0.676777,180],[1.207107,0.25,135],[1.207107,0.25,45],[1.457107,0.5,45],[1.457107,0.5,135],[0.957107,0.5,45],[0.957107,0.5,135],[1.207107,0.25,-45],[1.207107,0.25,-135],[0.81066,0.853553,-45],[0.81066,0.853553,-135],[0.56066,1.103553,135],[0.56066,1.103553,-135],[0,0.5,45],[0,0.5,-45],[0.53033,0.676777,-90],[0.53033,0.676777,180],[0.883883,0.676777,-90],[0.883883,0.676777,180],[0.883883,0.676777,90],[0.883883,0.676777,0],[0.707107,0.25,45],[0.707107,0.25,135],[0.957107,0,-45],[0.957107,0,-135]]},
		{"name":"","hash":"c92dfb","data":[[0.75,1,135],[0.75,1,45],[0.25,1,45],[0.25,1,135],[0.5,0.75,45],[0.5,0.75,135],[0.5,0.75,-45],[0.5,0.75,-135],[1.03033,0.676777,180],[1.03033,0.676777,90],[1.03033,1.03033,90],[1.03033,1.03033,180],[0.676777,0.676777,90],[0.676777,0.676777,180],[1.03033,0.676777,0],[1.03033,0.676777,-90],[0.25,1,-45],[0.25,1,-135],[0,1.25,135],[0,1.25,-135],[1.457107,0.5,135],[1.457107,0.5,45],[0.957107,0.5,135],[0.957107,0.5,45],[1.207107,0.25,-135],[1.207107,0.25,135],[1.207107,0.25,45],[1.207107,0.25,-45],[0.707107,0.25,45],[0.707107,0.25,135],[0.957107,0,-45],[0.957107,0,-135]]},
		{"name":"","hash":"8c68b5","data":[[0.5,1.5,-135],[0.5,1.5,135],[0.5,1,135],[0.5,1,-135],[0.75,1.25,135],[0.75,1.25,-135],[0.75,1.25,45],[0.75,1.25,-45],[0.25,0.75,45],[0.25,0.75,-45],[0.5,0.5,-45],[0.5,0.5,45],[0.5,1,-45],[0.5,1,45],[0.25,0.75,-135],[0.25,0.75,135],[0.176777,1.28033,90],[0.176777,1.28033,0],[0.176777,0.926777,-90],[0.176777,0.926777,0],[0,0.5,135],[0,0.5,45],[1,1.25,180],[1,1.25,90],[0.25,0.25,-135],[0.25,0.25,135],[0.25,0.25,45],[0.25,0.25,-45],[0.75,0.25,135],[0.75,0.25,45],[0.5,0,-135],[0.5,0,-45]]},
		{"name":"","hash":"35a7c2","data":[[0.875,1.051777,135],[0.875,1.051777,45],[0.375,1.051777,45],[0.375,1.051777,135],[0.625,0.801777,45],[0.625,0.801777,135],[0.625,0.801777,-45],[0.625,0.801777,-135],[1.301777,0.875,180],[1.301777,0.875,90],[1.301777,1.228553,90],[1.301777,1.228553,180],[0.948223,0.875,90],[0.948223,0.875,180],[1.301777,0.875,0],[1.301777,0.875,-90],[0.25,0.176777,-45],[0.25,0.176777,-135],[0,0.426777,135],[0,0.426777,-135],[1.478553,0.698223,-135],[1.478553,0.698223,135],[0.448223,1.228553,90],[0.448223,1.228553,0],[0.375,0.551777,-135],[0.375,0.551777,135],[0.375,0.551777,45],[0.375,0.551777,-45],[0.176777,0,-90],[0.176777,0,180],[0.53033,0,0],[0.53033,0,90]]},
		{"name":"","hash":"ad81b6","data":[[1,0.75,135],[1,0.75,45],[0.5,0.75,45],[0.5,0.75,135],[0.75,0.5,45],[0.75,0.5,135],[0.75,0.5,-45],[0.75,0.5,-135],[1.426777,0.573223,180],[1.426777,0.573223,90],[1.426777,0.926777,90],[1.426777,0.926777,180],[1.073223,0.573223,90],[1.073223,0.573223,180],[1.426777,0.573223,0],[1.426777,0.573223,-90],[0.25,0,-45],[0.25,0,-135],[0,0.25,135],[0,0.25,-135],[0.25,0,135],[0.25,0,45],[1.603553,0.396447,-135],[1.603553,0.396447,135],[0.5,0.25,-135],[0.5,0.25,135],[0.5,0.25,45],[0.5,0.25,-45],[0.78033,0.926777,-90],[0.78033,0.926777,0],[0.426777,0.926777,180],[0.426777,0.926777,90]]},
		// 77

		// 78

		// 79

		// 80

		// 81

		// 82

		// 83

		// 84

		// 85

		// 86

		// 87

		// 88

		// 89

		// 90


	]

};

export default section;
