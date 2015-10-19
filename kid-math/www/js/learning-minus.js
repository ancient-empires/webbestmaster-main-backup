(function (win) {

	"use strict";
	/*global window, document, app, ui, $, info */

	win.learningMinus = {
		showLevelBeginner: function() {
			ui.fade.show();
			window.setTimeout(app.insetHTML.bind(app, '.learn-minus-beginner'), ui.fade.time);
			$.shuffle(this.slides.list);
			info.currentLevelName = 'learn--';
			info.difficult = 'beginner';
		},
		showLevelExpert: function() {
			ui.fade.show();
			window.setTimeout(app.insetHTML.bind(app, '.learn-minus-expert'), ui.fade.time);
			$.shuffle(this.slides.list);
			info.currentLevelName = 'learn--';
			info.difficult = 'expert';
		},
		slides: {
			pre: 'img/minus-beginner/',
			list: $.createSimpleArray(1, 15),
			post: '.png'
		},
		createMinusCards: function() {
			var pluses = [], i, j;
			for ( i = 0; i <= 10; i++ ) {
				for ( j = 0; j <= 10; j++ ) {
					if ( (j - i) <= 10 && (j - i) >= 0 ) {
						var slide = {
							a: j,
							b: i,
							sum: j - i
						};
						pluses.push(slide);
					}
				}
			}

			$.shuffle(pluses);
			var selectedPluses = [];
			var selectedSums = [];
			pluses.forEach(function(obj){
				if (selectedSums.indexOf(obj.sum) === -1) {
					selectedSums.push(obj.sum);
					selectedPluses.push(obj);
				}
			});

			return selectedPluses;
		}

	};

}(window));
