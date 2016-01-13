'use strict';
/*global window */

import BaseView from './../core/base';
import tm from './../../../services/template-master';
import lang from './../../../services/lang';
import tangrams from './../../data/tangrams';

var SectionsView = BaseView.extend({

	events: {},

	initialize: function () {

		var view = this,
			sections = tangrams.data;

		view.setElement(tm.get('sections')({
			lang: lang,
			sections: sections
		}));

		view.render();

		return BaseView.prototype.initialize.apply(view, arguments);

	}

});

export default SectionsView;