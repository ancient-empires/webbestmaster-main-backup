'use strict';
/*global window */

import BaseView from './../core/base';
import tm from './../../../services/template-master';
import lang from './../../../services/lang';
import $ from './../../../lib/jbone';
import _ from './../../../lib/lodash';
import info from './../../../services/info';
import tangrams from './../../data/tangrams';

var TangramSuccessfulView = BaseView.extend({

	events: {
		'scroll': 'stopEvent',
		'click .js-one-more-tangram': 'oneMoreTangram',
		'click .js-restart-tangram': 'restartTangram'
	},

	initialize: function (data) {

		var view = this,
			sectionInfo;

		//view.extendFromObj(data);

		sectionInfo = view.getSectionInfo(data);

		view.setElement(tm.get('tangram-successful')(sectionInfo));

		view.render();

		view.subscribe('route', view.hide);

		return BaseView.prototype.initialize.apply(view, arguments);

	},

	getSectionInfo: function (data) {

		var view = this,
			section = _.find(tangrams.data, {name: data.name}),
			sectionLength = section.data.length,
			nextIndex,
			prevIndex,
			index = data.index;

		if (index === sectionLength - 1) { // index === lastIndex
			nextIndex = 0;
			prevIndex = index - 1;
		} else if (!index) { // index === 0
			nextIndex = 1;
			prevIndex = sectionLength - 1;
		} else {
			nextIndex = index + 1;
			prevIndex = index - 1;
		}

		return {
			nextIndex: nextIndex,
			prevIndex: prevIndex,
			section: section,
			name: data.name,
			index: data.index
		};

	},

	render: function () {

		var view = this;

		this.$wrapper.append(view.$el);

	},

	oneMoreTangram: function (e) {

		var view = this,
			$node = $(e.currentTarget),
			index = $node.attr('data-index'),
			name = $node.attr('data-name');

		view.publish('tangram-view', {
			name: name,
			index: index
		});

		view.hide();

	},

	restartTangram: function () {
		console.log('restart tangram');
	}

});

export default TangramSuccessfulView;