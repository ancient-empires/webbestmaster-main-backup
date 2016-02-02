'use strict';
/*global window */

import BaseView from './../core/base';
import tm from './../../../services/template-master';

var ColumnView = BaseView.extend({

	initialize: function () {

		var view = this;

		view.setElement(tm.get('column')());

		return BaseView.prototype.initialize.apply(view, arguments);

	}

});

export default ColumnView;