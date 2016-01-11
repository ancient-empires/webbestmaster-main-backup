'use strict';
/*global window */

import BaseView from './../core/base';
import tm from './../../../services/template-master';
import lang from './../../../services/lang';

var HomeView = BaseView.extend({

	events: {},

	initialize: function () {

		var view = this;

		view.setElement(tm.tmplFn.home({
			tm: tm,
			lang: lang,
			isBack: !false,
			title: 'tangram'
		}));

		view.render();

		return BaseView.prototype.initialize.apply(view, arguments);

	}

});

export default HomeView;