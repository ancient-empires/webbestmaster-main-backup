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

var tanCollectionProto = tanCollection.prototype,
	sectionsCache = {};

var SectionsView = BaseView.extend({

	events: {},

	initialize: function (data) {

		var view = this,
			items,
			section,
			sectionId,
			isSections = data.isSections;

		view.subscribe('previewSectionHelper:savedData', view.setCachedPreviewSection);

		view.publish('previewSectionHelper:publishData');

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

		return BaseView.prototype.initialize.apply(view, arguments);

	},

	getPrepareSections: function () {

		var view = this,
			getSectionInfo = view.getSectionInfo;

		// img, name
		return tangrams.data.map(function (section) {

			var sectionInfo = getSectionInfo(section);

			sectionInfo.preview = view.createPreviewSection(section.data[0]);

			return sectionInfo;

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
					tick: true,
					//name: figure.name,
					preview: view.createDoneTangramPreviewSection(hash)
				};
			}

			return {
				hash: hash,
				//name: figure.name,
				preview: view.createPreviewSection(figure)
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

	setCachedPreviewSection: function (data) {
		sectionsCache = data;
	},

	getCachedPreviewSection: function (key) {

		return sectionsCache[key];

	},

	createPreviewSection: function (item) {

		var triangles = item.data,
			previewSection = this.getCachedPreviewSection(item.hash);

		if (previewSection) {
			log('createPreviewSection fromCache');
			return {
				svgText: previewSection
			};
		}

		var tempDiv = document.createElement('div'),
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
				width: size + 'px',
				height: size + 'px',
				viewBox: [0, 0, size, size].join(' '),
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

		return {
			svgText: tempDiv.innerHTML
		};

	}

});

export default SectionsView;