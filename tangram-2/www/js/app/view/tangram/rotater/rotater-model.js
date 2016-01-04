import Backbone from './../../../../lib/backbone';
import _ from './../../../../lib/lodash';
import mediator from './../../../../services/mediator';
import info from './../../../../services/info';
import log from './../../../../services/log';

'use strict';
/*global window */
/*global */

var RotaterModel = Backbone.Model.extend({

	initialize: function () {

		var rotater = this;

		rotater.set({
			cssTransformName: info.get('cssJsPrefix', true).css + 'transform',
			scale: 200,
			isActive: false
		});

		rotater.initNode();
		rotater.bindEventListeners();

	},

	initNode: function () {

		var rotater = this,
			parentView = rotater.get('parentView'),
			parent$el = parentView.$el,
			scale = rotater.get('scale'),
			$rotater = $('<div class="rotater hidden"></div>');

		$rotater.css({
			width: scale + 'px',
			height: scale + 'px',
			top: -scale / 2 + 'px',
			left: -scale / 2 + 'px'
		});

		rotater.set('$rotater', $rotater);

		parent$el.append($rotater);

	},

	bindEventListeners: function () {

		var rotater = this;

		mediator.installTo(rotater);

		rotater.subscribe('deviceAction:moving', rotater.rotateTan);

		rotater.subscribe('rotater:connectTan', rotater.connectTan);

		rotater.subscribe('rotater:hide', rotater.deActivate);

	},

	rotateTan: function (data) {

		var rotater = this;

		if (!rotater.get('isActive')) {
			return;
		}


	},

	connectTan: function (data) {

		var rotater = this;

		rotater.set({
			'tan': data.tan,
			isActive: true
		});

		rotater.showNode();

	},

	active: function () {

		var rotater = this;

		rotater.showNode();

	},

	showNode: function () {

		var rotater = this,
			tan = rotater.get('tan'),
			$rotater = rotater.get('$rotater'),
			centerXY = tan.getCenterCoordinates();

		$rotater.css(rotater.get('cssTransformName'), 'translate3d(' + centerXY.x + 'px,' + centerXY.y + 'px,0)');

		$rotater.removeClass('hidden');

	},

	deActivate: function () {

		var rotater = this;

		rotater.hideNode();

		rotater.set('isActive', false);

	},

	hideNode: function () {

		var rotater = this,
			$rotater = rotater.get('$rotater');

		$rotater.addClass('hidden');


	}


});


export default RotaterModel;