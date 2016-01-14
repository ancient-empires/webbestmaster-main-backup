'use strict';
/*global window */

import BaseView from './../core/base';
import tm from './../../../services/template-master';
import lang from './../../../services/lang';
import $ from './../../../lib/jbone';
import info from './../../../services/info';

var tangramSuccessfulView = BaseView.extend({

	events: {
		'scroll': 'stopEvent'
	},

	initialize: function () {

		var view = this;

		view.setElement(tm.get('tangram-successful')());

		view.render();

		return BaseView.prototype.initialize.apply(view, arguments);

	},

	render: function () {

		var view = this;

		this.$wrapper.append(view.$el);

	}

});

export default tangramSuccessfulView;