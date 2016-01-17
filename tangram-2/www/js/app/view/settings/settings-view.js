'use strict';
/*global window */

import BaseView from './../core/base';
import tm from './../../../services/template-master';
import lang from './../../../services/lang';
import $ from './../../../lib/jbone';
import info from './../../../services/info';

var SettingsView = BaseView.extend({

	events: {

	},

	initialize: function () {

		var view = this;

		view.setElement(tm.get('settings')({
			lang: lang
		}));

		view.render();

		return BaseView.prototype.initialize.apply(view, arguments);

	}

});

export default SettingsView;