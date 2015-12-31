'use strict';
/*global window */

import BaseView from './../core/base';
import tm from './../../../services/template-master';

var HomeView = BaseView.extend({

	events: {},

	initialize: function () {

		var view = this;

		view.setElement(tm.tmplFn.home());

		view.render();

		return BaseView.prototype.initialize.apply(view, arguments);

	}

});

export default HomeView;