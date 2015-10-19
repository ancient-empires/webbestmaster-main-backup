(function (win) {

	"use strict";
	/*global window, document, console, alert, info */

	win.levels = win.levels || {};

	win.levels['level-0'] = {
		levelNumber: 0,
		pages: [{
			img: 'mouse',
			caption: {
				en: 'ZERO mouse',
				ru: 'НОЛЬ мышей',
				de: 'NULL Mäuse',
				zh: '零只老鼠',
				es: 'CERO ratones',
				ar: 'لا يوجد فأر'
			}
		},{
			img: 'squirrel',
			caption: {
				en: 'ZERO squirrel',
				ru: 'НОЛЬ белок',
				de: 'NULL Eichhörnchen',
				zh: '零只松鼠',
				es: 'CERO ardillas',
				ar: 'لا يوجد سنجاب'
			}
		},{
			img: 'rabbit',
			caption: {
				en: 'ZERO rabbit',
				ru: 'НОЛЬ кроликов',
				de: 'NULL Kaninchen',
				zh: '零只兔子',
				es: 'CERO conejos',
				ar: 'لا يوجد ارانب'
			}
		},{
			img: 'dog',
			caption: {
				en: 'ZERO dog',
				ru: 'НОЛЬ собак',
				de: 'NULL Hunde',
				zh: '零只狗',
				es: 'CERO perros',
				ar: 'لا يوجد كلاب'
			}
		}]

	};

}(window));
