(function (win) {

	"use strict";
	/*global window, document, console, alert, info, ui, lang, statusBar */

	var ls = win.localStorage;

	if (win.location.hash === '#clear') {
		ls.clear();
		alert('localStorage has bean cleared.');
	}

	win.dataStorage = {
		savedItem: 'saved-item',
		getData: function () {
			var data = ls.getItem(this.savedItem) || '{}';
			data = JSON.parse(data);
			data.score = data.score || 0;
			data.openedLevel = data.openedLevel || [1];
			return data;
		},
		getItem: function (itemName) {
			var data = this.getData();
			return data[itemName];
		},
		saveItem: function (itemName, value) {
			var data = this.getData();
			data[itemName] = value;
			data = JSON.stringify(data);
			ls.setItem(this.savedItem, data);
		},
		changeItem: function (itemName, delta) {
			this.saveItem(itemName, this.getItem(itemName) + delta);
		},
		openNextLevel: function () {

			var path = lang[info.lang].endSection || soundList.endSection;
			player.play(path);

			if (info.currentLevelName === 'learning-basics') {
				var openedLevels = this.getItem('openedLevel');
				if (openedLevels.indexOf(info.currentLevel + 1) === -1 && info.currentLevel !== 9) {
					openedLevels.push(info.currentLevel + 1);
				}

				// add zero (0)
				if (info.currentLevel === 9) {
					if (openedLevels.indexOf(0) === -1) {
						openedLevels.push(0);
					}
				}

				this.saveItem('openedLevel', openedLevels);

				if (info.currentLevel !== 0) {
					ui.message.show(lang[info.lang].levelIsDone, 'app insetHTML .select-level');
				} else {
					statusBar.updateScore(info.bonus.normal);
					this.addToOpenSections('test-basics');
					ui.message.show(lang[info.lang].sectionIsDone, 'app insetHTML .title-page');
				}

				if (info.currentLevel === 5) {
					this.addToOpenSections('test-basics');
				}

			}

			if (info.currentLevelName === 'learn-+') {
				statusBar.updateScore(info.bonus.normal);
				this.addToOpenSections('test-+');
				if (info.difficult === 'beginner') {
					ui.message.show(lang[info.lang].sectionIsDone, 'app insetHTML .learn-plus');
				} else {
					ui.message.show(lang[info.lang].sectionIsDone, 'app insetHTML .title-page');
				}
			}

			if (info.currentLevelName === 'learn--') {
				statusBar.updateScore(info.bonus.normal);
				this.addToOpenSections('test--');
				if (info.difficult === 'beginner') {
					ui.message.show(lang[info.lang].sectionIsDone, 'app insetHTML .learn-minus');
				} else {
					ui.message.show(lang[info.lang].sectionIsDone, 'app insetHTML .title-page');
				}
			}

		},
		addToOpenSections: function (sectionName) {
			var openSections = this.getItem('openedSections') || [];
			if (openSections.indexOf(sectionName) === -1) {
				openSections.push(sectionName);
			}
			this.saveItem('openedSections', openSections);
		}

	};

	win.dataStorage.addToOpenSections('learn-basics');
	win.dataStorage.addToOpenSections('test-basics');
	win.dataStorage.addToOpenSections('test-+');
	win.dataStorage.addToOpenSections('test--');
	win.dataStorage.addToOpenSections('learn-+');
	win.dataStorage.addToOpenSections('learn--');
	win.dataStorage.saveItem('openedLevel', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
	//win.dataStorage.addToOpenSections('learn-basics');

	// >>>>>>>>>>>> !!!!!!!!!!!!!!1add only for test
	console.log('to clear local storage add to url - #clear');


}(window));
