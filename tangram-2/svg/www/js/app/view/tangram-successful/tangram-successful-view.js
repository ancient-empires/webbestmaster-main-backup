'use strict';
/*global window */

import BaseView from './../core/base';
import tm from './../../../services/template-master';
import lang from './../../../services/lang';
import mediator from './../../../services/mediator';
import $ from './../../../lib/jbone';
import _ from './../../../lib/lodash';
import info from './../../../services/info';
import tangrams from './../../data/tangrams';

var TangramSuccessfulView = BaseView.extend({

	events: {
		'scroll': 'stopEvent',
		'click .js-one-more-tangram': 'oneMoreTangram'
		//'click .js-restart-tangram': 'restartTangram'
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
			id = data.id,
			section = _.find(tangrams.data, function (data) {
				// {name: name}
				return data.id === id;
			}),
			lastIndex = section.data.length - 1,
			nextIndex,
			prevIndex,
			index = data.index;

		if (index === lastIndex) { // index === lastIndex
			nextIndex = 0;
			prevIndex = index - 1;
		} else if (!index) { // index === 0
			nextIndex = 1;
			prevIndex = lastIndex;
		} else {
			nextIndex = index + 1;
			prevIndex = index - 1;
		}

		return {
			nextIndex: nextIndex,
			prevIndex: prevIndex,
			section: section,
			id: data.id,
			index: index
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
			id = $node.attr('data-id');

		view.hide();

		mediator.publish('hide-main-view');

		mediator.publish('tangram-view', {
			id: id,
			index: index
		});

	}

/*
	restartTangram: function (e) {

		var view = this,
			$node = $(e.currentTarget),
			index = $node.attr('data-index'),
			name = $node.attr('data-name');

		view.publish('tangram-view', {
			name: name,
			index: index
		});

		view.hide();

	}
*/

});

export default TangramSuccessfulView;