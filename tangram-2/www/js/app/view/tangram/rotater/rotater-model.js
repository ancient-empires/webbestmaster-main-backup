import Backbone from './../../../../lib/backbone';
import _ from './../../../../lib/lodash';
import mediator from './../../../../services/mediator';
import info from './../../../../services/info';
import log from './../../../../services/log';

'use strict';
/*global window */
/*global */

var RotaterModel = Backbone.Model.extend({

	initialize: function (data) {

		if (!data) {
			return;
		}

		var rotater = this;

		rotater.set(data);

		rotater.set({
			cssTransformName: info.get('cssJsPrefix', true).css + 'transform',
			size: 200,
			isActive: false
		});

		rotater.initNode();
		rotater.bindEventListeners();

	},

	initNode: function () {

		var rotater = this,
			parentView = rotater.get('parentView'),
			parent$el = parentView.$el,
			size = rotater.get('size'),
			$rotater = $('<div class="rotater hidden"></div>');

		$rotater.css({
			width: size + 'px',
			height: size + 'px',
			top: -size / 2 + 'px',
			left: -size / 2 + 'px'
		});

		rotater.set('$rotater', $rotater);

		parent$el.append($rotater);

	},

	bindEventListeners: function () {

		var rotater = this;

		mediator.installTo(rotater);

		rotater.subscribe('deviceAction:moving', rotater.rotateTan);

		//rotater.subscribe('rotater:connectTan', rotater.connectTan);

		rotater.subscribe('rotater:deActivate', rotater.deActivate);

	},

	rotateTan: function (data) {

		var rotater = this;

		if (!rotater.get('isActive')) {
			return;
		}

		var tan = rotater.get('tan'),
			startRotatingCursorX = rotater.get('startRotatingCursorX'),
			startRotatingCursorY = rotater.get('startRotatingCursorY'),
			tanCenterX = rotater.get('tanCenterX'),
			tanCenterY = rotater.get('tanCenterY'),
			currentX = data.x,
			currentY = data.y,
			startVectorX = tanCenterX - startRotatingCursorX,
			startVectorY = tanCenterY - startRotatingCursorY,
			currentVectorX = tanCenterX - currentX,
			currentVectorY = tanCenterY - currentY,
			toDeg = 180 / Math.PI,
			startAngle,
			currentAngle,
			deltaAngle,
			isFlip = tan.get('isFlip') ? -1 : 1;

		// get angle
		startAngle = Math.atan2(startVectorY, startVectorX) * toDeg;
		currentAngle = Math.atan2(currentVectorY, currentVectorX) * toDeg;

		deltaAngle = currentAngle - startAngle;

		tan.set('rotate', rotater.get('startRotateTanAngle') + deltaAngle * isFlip);
		tan.reDraw();

	},

	connectTan: function (data) {

		var rotater = this;

		rotater.set({
			tan: data.tan,
			isActive: true
		});

		rotater.showNode();

	},

	setStartData: function (data) {

		var rotater = this,
			tan = rotater.get('tan'),
			tanCenterXY = tan.getCenterCoordinates();

		rotater.set({
			tanCenterX: tanCenterXY.x,
			tanCenterY: tanCenterXY.y,
			startRotatingCursorX: data.x,
			startRotatingCursorY: data.y,
			startRotateTanAngle: tan.get('rotate')
		});

	},

	//active: function () {
	//
	//	var rotater = this;
	//
	//	rotater.showNode();
	//
	//},

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

	},

	isInRing: function (xy) {

		var rotater = this;

		if (!rotater.get('isActive')) {
			return false;
		}

		var tan = rotater.get('tan'),
			centerXY = tan.getCenterCoordinates(),
			size = rotater.get('size'),
			max = size / 2 * 1.1,
			min = size / 4,
			distance = Math.sqrt(Math.pow(centerXY.x - xy.x, 2) + Math.pow(centerXY.y - xy.y, 2));

		return (distance > min) && (distance < max);

	},

	endRotating: function () {

		var rotater = this;

		if (!rotater.get('isActive')) {
			return false;
		}

		var tan = rotater.get('tan'),
			tanRotate = tan.get('rotate');

		tanRotate = Math.round(tanRotate / 45) * 45;

		tan.set('rotate', tanRotate);

		tan.reDraw();

	}


});


export default RotaterModel;