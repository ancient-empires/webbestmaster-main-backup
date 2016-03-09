'use strict';
/*global window */

import BaseView from './../core/base';
import tm from './../../../services/template-master';
import lang from './../../../services/lang';
import info from './../../../services/info';
import log from './../../../services/log';
import sha1 from './../../../lib/sha1';
import tangrams from './../../data/tangrams';
import tanCollection from './../tangram/models/tan-collection';
import _ from './../../../lib/lodash';
import $ from './../../../lib/jbone';
import Queue from './../../../lib/queue';

var tanCollectionProto = tanCollection.prototype;

var SectionsView = BaseView.extend({

	events: {},

	initialize: function (data) {

		var view = this,
			items,
			section,
			sectionId,
			isSections = data.isSections;

/*
		view.subscribe('previewSectionHelper:savedData', view.setCachedPreviewSection);

		view.publish('previewSectionHelper:publishData');
*/

		if (isSections) {
			items = view.getPrepareSections();
			view.setElement(tm.get('sections')({
				sectionHeader: 'sections',
				isSections: true,
				lang: lang,
				items: items,
				doneTangrams: info.getDoneTangrams()
			}));
		} else {
			sectionId = data.id;
			items = view.getPrepareSection(sectionId);
			section = view.getSectionById(sectionId);
			view.setElement(tm.get('sections')({
				sectionHeader: section.name,
				isSections: false,
				id: sectionId,
				lang: lang,
				items: items,
				doneTangrams: info.getDoneTangrams()
			}));
		}

		view.render();
		view.setVerticalSwiper();

		return BaseView.prototype.initialize.apply(view, arguments);

	},

	getPrepareSections: function () {

		var view = this,
			getSectionInfo = view.getSectionInfo;

		// img, name
		return tangrams.data.map(function (section) {
			return getSectionInfo(section);
		});

	},

	getSectionInfo: function (section) {

		var sectionData, allDoneTangrams, doneTangramsHashs;

		allDoneTangrams = info.getDoneTangrams();

		sectionData = section.data;

		doneTangramsHashs = sectionData.filter(function (tangram) {
			return _.find(allDoneTangrams, function (doneTangram) {
				return tangram.hash === doneTangram.hash;
			});
		});

		return {
			//originalName: originalName,
			preview: section.data[0].hash,
			name: section.name,
			id: section.id,
			length: sectionData.length,
			doneTangramsHashs: doneTangramsHashs
		}

	},

	getPrepareSection: function (id) {

		var view = this,
			doneTangramsHashs = info.getDoneTangrams().map(function (data) {
				return data.hash;
			});

		return view.getSectionById(id).data.map(function (figure) {
			var hash = figure.hash;

			if (doneTangramsHashs.indexOf(hash) !== -1) {
				return {
					hash: hash,
					stars: view.getStarsByHash(hash),
					//name: figure.name,
					preview: view.createDoneTangramPreviewSection(hash)
				};
			}

			return {
				hash: hash,
				stars: 0,
				//name: figure.name,
				preview: hash
			};
		});

	},

	getSectionById: function (id) {

		return _.find(tangrams.data, function (section) {
			//{name: name}
			return section.id === id;
		});

	},

	createDoneTangramPreviewSection: function (hash) {

		var tempDiv = document.createElement('div'),
			//view = this,
			doneTangramsHashs = info.getDoneTangrams(),
			data = _.find(doneTangramsHashs, function (data) {
				// {hash: hash}
				return data.hash === hash;
			}),
			figure = data.figure,
			patternDeltaX,
			patternDeltaY,
			size = 2.5,
			viewSizeX = size,
			viewSizeY = size,
			patternSizeX,
			patternSizeY,
			patternMaxX = -Infinity,
			patternMaxY = -Infinity,
			patternMinX = Infinity,
			patternMinY = Infinity,
			svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg'),
			svgAttributes = {
				x: '0px',
				y: '0px',
				width: size + 'px',
				height: size + 'px',
				viewBox: [0, 0, size, size].join(' '),
				xmlns: 'http://www.w3.org/2000/svg',
				'class': 'section-preview-image'
			},
			polygonAttributes = {
				fill: '#333',
				stroke: '#f5f5f5',
				'stroke-width': '0.03px'
			},
			coordinatesToPolygon = tanCollectionProto.coordinatesToPolygon;


		figure.forEach(function (tan) {

			tan.forEach(function (xy) {

				var x = xy.x,
					y = xy.y;

				if (x > patternMaxX) {
					patternMaxX = x;
				}

				if (y > patternMaxY) {
					patternMaxY = y;
				}

				if (x < patternMinX) {
					patternMinX = x;
				}

				if (y < patternMinY) {
					patternMinY = y;
				}

			});

		});


		patternSizeX = patternMaxX + patternMinX;
		patternSizeY = patternMaxY + patternMinY;

		patternDeltaX = (viewSizeX - patternSizeX) / 2;
		patternDeltaY = (viewSizeY - patternSizeY) / 2;

		figure = figure.map(function (tan) {
			return tan.map(function (xy) {
				return {
					x: xy.x + patternDeltaX,
					y: xy.y + patternDeltaY
				}
			});
		});

		Object.keys(svgAttributes).forEach(function (key) {
			var attr = document.createAttribute(key);
			attr.value = svgAttributes[key];
			svg.setAttributeNode(attr);
		});

		figure.forEach(function (tan) {
			var polygon = coordinatesToPolygon(tan, polygonAttributes);
			svg.appendChild(polygon);
		});

		tempDiv.appendChild(svg);

		return {
			//svg: svg,
			svgText: tempDiv.innerHTML
		};

	},

	getStarsByHash: function (hash) {

		var doneTangramsHashs = info.getDoneTangrams(),
			data = _.find(doneTangramsHashs, function (data) {
				// {hash: hash}
				return data.hash === hash;
			});

		return data.stars;

	},

/*
	setCachedPreviewSection: function (data) {
		sectionsCache = data;
	},

	getCachedPreviewSection: function (key) {

		return sectionsCache[key];

	},
*/

	createPreviewSection: function (item) {

		var triangles = item.data,
			key = item.hash,
			view = this,
			svgText,
			tempDiv = document.createElement('div'),
			atomToTriangle = tanCollectionProto.atomToTriangle,
			patternDeltaX,
			patternDeltaY,
			size = 2.7,
			viewSizeX = size,
			viewSizeY = size,
			patternSizeX,
			patternSizeY,
			patternMaxX = -Infinity,
			patternMaxY = -Infinity,
			patternMinX = Infinity,
			patternMinY = Infinity,
			svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg'),
			svgAttributes = {
				x: '0px',
				y: '0px',
				width: size * 60 + 'px',
				height: size * 60 + 'px',
				viewBox: [0, 0, size, size].join(' '),
				xmlns: 'http://www.w3.org/2000/svg',
				'class': 'section-preview-image'
			},
			polygonAttributes = {
				fill: '#333',
				stroke: '#333',
				'stroke-width': '0.02px'
			},
			coordinatesToPolygon = tanCollectionProto.coordinatesToPolygon;

		triangles = triangles.map(function (atom) {
			return atomToTriangle(atom, 1);
		});

		triangles.forEach(function (triangle) {

			triangle.forEach(function (xy) {

				var x = xy.x,
					y = xy.y;

				if (x > patternMaxX) {
					patternMaxX = x;
				}

				if (y > patternMaxY) {
					patternMaxY = y;
				}

				if (x < patternMinX) {
					patternMinX = x;
				}

				if (y < patternMinY) {
					patternMinY = y;
				}

			});

		});

		patternSizeX = patternMaxX + patternMinX;
		patternSizeY = patternMaxY + patternMinY;

		patternDeltaX = (viewSizeX - patternSizeX) / 2;
		patternDeltaY = (viewSizeY - patternSizeY) / 2;

		triangles = triangles.map(function (triangle) {
			return triangle.map(function (xy) {
				return {
					x: xy.x + patternDeltaX,
					y: xy.y + patternDeltaY
				}
			});
		});

		Object.keys(svgAttributes).forEach(function (key) {
			var attr = document.createAttribute(key);
			attr.value = svgAttributes[key];
			svg.setAttributeNode(attr);
		});

		triangles.forEach(function (triangle) {
			var polygon = coordinatesToPolygon(triangle, polygonAttributes);
			svg.appendChild(polygon);
		});

		tempDiv.appendChild(svg);

		svgText = tempDiv.innerHTML;

		if (view && view.publish) {
			view.publish('previewSectionHelper:pushToPreviewSection', {
				key: key,
				svgText: svgText
			});
		}

		return {
			svgText: svgText
		};

	},

	savePreviews: function () {

		var self = this;

		var queue = new Queue();

		tangrams.data.forEach(function (section) {
			section.data.forEach(function (tangramData, index) {
				queue.push(function () {
					return self.savePreview(tangramData)
				});
			});
		});

		queue.run().done(function () {
			console.log('all images are saved');
		});

	},

	savePreview: function (tangramData) {

		var defer = $.Deferred();

		var self = this;

		var svgData = self.createPreviewSection(tangramData);

		var svg = {
			header: 'data:image/svg+xml',
			data: svgData.svgText
		};

		var width = 160;
		var height = 160;

		// Setup canvas
		var canvas = document.createElement('canvas');
		canvas.width = width;
		canvas.height = height;

		// Get canvas context
		var context = canvas.getContext('2d');
		// Setup new image object
		var image = new Image();
		// Make sure that there is an event listener
		// BEFORE attaching an image source
		image.onload = function() {

			context.drawImage(image, 0, 0);

			//document.body.appendChild(canvas);

			var a = $('<a href="' + canvas.toDataURL() + '" download="' + tangramData.hash + '.png">');
			a.trigger('click');

			image.onload = null;

			defer.resolve();

		};
		// Init the image with our SVG
		image.src = svg.header + ',' + svg.data;

		return defer.promise();

	}

});

/*
window.addEventListener('load', function () {
	SectionsView.prototype.savePreviews();
}, false);
*/

export default SectionsView;