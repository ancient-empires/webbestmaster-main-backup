(function (win, doc, docElem) {

	"use strict";
	/*global console, alert, info, window, document */

	win.util = {
		getProgress: function(name) {

			var section = win.sections[name],
				savedSections = info.get('sections') || {},
				savedSectionState = savedSections[name] || {},
				keys = _.keys(savedSectionState);

			return keys.length + '/' + section.questions.length;

		}
	};

}(window, document, document.documentElement));