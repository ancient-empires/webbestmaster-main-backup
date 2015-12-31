'use strict';
/*global window */

import BaseView from './../core/base';
import tm from './../../../services/template-master';

var TangramView = BaseView.extend({

	events: {},

	initialize: function () {

		var view = this;

		view.setElement(tm.tmplFn.tangram());

		view.render();

		return BaseView.prototype.initialize.apply(view, arguments);

	}

});

export default TangramView;