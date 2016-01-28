'use strict';
/*global window */

import tangrams from './../../data/tangrams';
import SectionView from './sections-view';
import mediator from './../../../services/mediator';
import util from './../../../services/util';
import log from './../../../services/log';
import log from './../../../services/log';
import info from './../../../services/info';
import Queue from './../../../lib/queue';
import sha1 from './../../../lib/sha1';
import $ from './../../../lib/jbone';

var sectionViewProto = SectionView.prototype,
	previewSectionHelper = {

		attr: {},

		initialize: function () {

			var self = this,
				$progressBarWrapper = $('<div class="progress-bar-wrapper progress-bar-wrapper_hidden"><div class="progress-bar js-progress-bar">&nbsp;</div></div>');

			$('.js-wrapper').append($progressBarWrapper);

			self.setData('$progressBarWrapper', $progressBarWrapper);

			self.setData('$progressBar', $progressBarWrapper.find('.js-progress-bar'));

			self.initializeTangramPreview();

			self.unsubscribe('previewSectionHelper:initialize');

			util.preLoadInterfaceImages().always(function () {
				log('All interface images has been loaded');
			});

		},

		setData: function (keyOrObj, value) {

			var self = this,
				attr = self.attr;

			if (typeof keyOrObj === 'string') {
				attr[keyOrObj] = value;
				return self;
			}

			Object.keys(keyOrObj).forEach(function (key) {
				this[key] = keyOrObj[key];
			}, attr);

			return self;

		},

		getData: function (key) {

			return this.attr[key];

		},

		removeData: function (key) {

			var self = this,
				attr = this.attr;

			attr[key] = null;
			delete attr[key];

			return self;

		},

/*
		hasKey: function (key) {

			return this.attr.hasOwnProperty(key);

		},
*/

		initializeTangramPreview: function () {

			var self = this,
				length = 0,
				queue = new Queue();

			self.setData('donePreviews', 0);

			log('----- start initializeTangramPreview');

			// initTans
			tangrams.data.forEach(function (section) {

				var sectionData = section.data;

				sectionData.forEach(function (item) {
					queue.push(function () {
						return self.initializePreviewSection(item);
					});
				});

				length += sectionData.length;

			});

			self.setData('tangramsLength', length);

			queue.run().then(function () {
				self.hideProgressBar();
				log('----- end initializeTangramPreview');
			});

		},

		initializePreviewSection: function (item) {

			var self = this,
				defer = $.Deferred(),
				key = item.hash,
				result = sectionViewProto.createPreviewSection(item);

			self.setData(key, result);

			setTimeout(function () {
				log('one tangram has been resolve');
				defer.resolve();
				self.increaseProgressBar();

				if ( self.getData('donePreviews') === 10) {
					self.getData('$progressBarWrapper').removeClass('progress-bar-wrapper_hidden');
				}

			}, 0);

			return defer.promise();

		},

		publishData: function () {

			var self = this;

			self.publish('previewSectionHelper:savedData', self.attr);

		},

		increaseProgressBar: function () {

			var self = this,
				donePreviews = self.getData('donePreviews'),
				$progressBar = self.getData('$progressBar'),
				length = self.getData('tangramsLength');

			donePreviews += 1;

			$progressBar.css('width', donePreviews / length * 100 + '%');

			self.setData('donePreviews', donePreviews);

			return donePreviews;

		},

		hideProgressBar: function () {

			var self = this,
				animationEnd = info.get('transitionEnd', true),
				$progressBarWrapper = self.getData('$progressBarWrapper');

			$progressBarWrapper.one(animationEnd, function() {
				self.removeData('$progressBarWrapper');
				self.removeData('$progressBar');
				$progressBarWrapper.empty().remove();
			});

			self.getData('$progressBarWrapper').addClass('progress-bar-wrapper_hidden');

		}

	};

mediator.installTo(previewSectionHelper);

previewSectionHelper.subscribe('previewSectionHelper:initialize', previewSectionHelper.initialize);
previewSectionHelper.subscribe('previewSectionHelper:publishData', previewSectionHelper.publishData);

export default previewSectionHelper;