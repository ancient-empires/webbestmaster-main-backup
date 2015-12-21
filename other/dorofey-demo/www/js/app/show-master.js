'use strict';
/*global window */

import images from './image-data';
import tm from './../lib/template-master';

var showMaster = {

	attr: {},

	set: function (keyOrObj, value) {

		var util = this,
			attr = util.attr;

		if (typeof keyOrObj === 'string') {
			attr[keyOrObj] = value;
			return util;
		}

		Object.keys(keyOrObj).forEach(function (key) {
			this[key] = keyOrObj[key];
		}, attr);

		return util;

	},

	get: function (key) {

		return this.attr[key];

	},

	init: function () {

		var sm = this;

		sm.set('$wrapper', $('.js-wrapper'));

		sm.lightBoxInit();

		sm.showPreviews();

		sm.bindEventListeners();

	},

	bindEventListeners: function () {

		$('.js-show-gallery').on('click', function () {
			$('a[data-lightbox=' + this.getAttribute('data-lightbox-image-selector') + ']')
				.eq(0)
				.trigger('click');
		});

	},

	lightBoxInit: function () {

		// todo: fix disable scroll
		// http://stackoverflow.com/questions/13698456/is-it-possible-to-trigger-an-event-on-clicking-the-close-button-of-jquery-lightb
/*
		$("body").on("click", "#lightbox-secNav-btnClose", function() {
			console.log("lightbox closed");
		});
*/

		lightbox.option({
			resizeDuration: 200,
			albumLabel: '%1/%2'
		});

	},

	showPreviews: function () {

		var sm = this,
			html,
			sections = images.sections;

		// just generate more images - begin
		for (var i = 0; i < 3; i += 1) {
			sections = sections.concat(sections);
		}
		//sections = sections.sort(function () {
		//	return Math.random() - 0.5;
		//});
		// just generate more images - end

		html = tm.tmplFn['section-preview']({
			sections: sections
		});

		sm.get('$wrapper').html(html);

	}

};

export default showMaster;