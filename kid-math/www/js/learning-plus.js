(function (win) {

	"use strict";
	/*global window, document, app, ui, $, info */

	win.learningPlus = {
		showLevelBeginner: function() {
			ui.fade.show();
			window.setTimeout(app.insetHTML.bind(app, '.learn-plus-beginner'), ui.fade.time);
			$.shuffle(this.slides.list);
			info.currentLevelName = 'learn-+';
			info.difficult = 'beginner';
		},
		showLevelExpert: function() {
			ui.fade.show();
			window.setTimeout(app.insetHTML.bind(app, '.learn-plus-expert'), ui.fade.time);
			$.shuffle(this.slides.list);
			info.currentLevelName = 'learn-+';
			info.difficult = 'expert';
		},
		slides: {
			pre: 'img/plus-beginner/',
			list: $.createSimpleArray(1, 14),
			post: '.png'
		},
		createPlusCards: function() {
			var pluses = [], i, j;
			for ( i = 0; i <= 10; i++ ) {
				for ( j = 0; j <= 10; j++ ) {
					if ( (i + j) <= 10 ) {
						var slide = {
							a: i,
							b: j,
							sum: i + j
						};
						pluses.push(slide);
					}
				}
			}

			$.shuffle(pluses);
			var selectedPluses = [];
			var selectedSums = [];
			pluses.forEach(function(obj){
				if (selectedSums.indexOf(obj.sum) === -1 && obj.a !== 0) {
					selectedSums.push(obj.sum);
					selectedPluses.push(obj);
				}
			});

			return selectedPluses;
		}

	};

}(window));
