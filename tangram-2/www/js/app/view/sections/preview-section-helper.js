'use strict';
/*global window */

import tangrams from './../../data/tangrams';
import SectionView from './sections-view';
import mediator from './../../../services/mediator';
import log from './../../../services/log';
import info from './../../../services/info';
import Queue from './../../../lib/queue';
import sha1 from './../../../lib/sha1';

var sectionViewProto = SectionView.prototype,
	previewSectionHelper = {

		attr: {},

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

		hasKey: function (key) {

			return this.attr.hasOwnProperty(key);

		},

		initializeTangramPreview: function () {

			var self = this,
				length = 0,
				queue = new Queue();

			log('----- start initializeTangramPreview');

			if ( self.getData('isInitialized') ) {
				return;
			}

			self.setData('isInitialized', true);

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

			queue.run().then(function () {
				log(self);
				log(length);
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
			}, 0);

			return defer.promise();

		},

		publishData: function () {

			var self = this;

			self.publish('previewSectionHelper:savedData', self.attr);

		}

	};

mediator.installTo(previewSectionHelper);

previewSectionHelper.subscribe('previewSectionHelper:initialize', previewSectionHelper.initializeTangramPreview);
previewSectionHelper.subscribe('previewSectionHelper:publishData', previewSectionHelper.publishData);

export default previewSectionHelper;