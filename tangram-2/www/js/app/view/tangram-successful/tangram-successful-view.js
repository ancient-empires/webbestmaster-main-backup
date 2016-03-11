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
import androidAds from './../../../services/android-ads';
import util from './../../../services/util';

var TangramSuccessfulView = BaseView.extend({

	events: {
		'scroll': 'stopEvent',
		'click .js-one-more-tangram': 'oneMoreTangram'
		//'click .js-restart-tangram': 'restartTangram'
	},

	initialize: function (tangramInfo, data) {

		var view = this,
			sectionInfo;

		//view.extendFromObj(data);

		sectionInfo = util.getSectionInfo(tangramInfo);

		sectionInfo.stars = data.stars;

		view.setElement(tm.get('tangram-successful')(sectionInfo));

		view.render();

		view.subscribe('route', view.hide);

		return BaseView.prototype.initialize.apply(view, arguments);

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

		androidAds.showAd();

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