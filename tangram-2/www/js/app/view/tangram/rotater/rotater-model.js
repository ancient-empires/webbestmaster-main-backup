'use strict';
/*global window */

import Backbone from './../../../../lib/backbone';
import _ from './../../../../lib/lodash';
import mediator from './../../../../services/mediator';
import info from './../../../../services/info';
import log from './../../../../services/log';

var RotaterModel = Backbone.Model.extend({

	initialize: function (data) {

		if (!data) {
			return;
		}

		var rotater = this,
			size = data.size * 1.2,
			size050 = size / 2,
			size025 = size / 4;

		rotater.set(data);

		rotater.set({
			cssTransformName: info.get('cssJsPrefix', true).css + 'transform',
			size: size,
			size050: size050,
			size025: size025,
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
			size050 = rotater.get('size050'),
			$rotater = $('<div class="rotater rotater__hidden">&nbsp;</div>');

		$rotater.css({
			width: size + 'px',
			height: size + 'px',
			top: -size050 + 'px',
			left: -size050 + 'px'
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
		rotater.subscribe('rotater:moveTo', rotater.moveTo);
		rotater.subscribe('rotater:showMoverXY', rotater.showMoverXY);

	},

	showMoverXY: function (xy) {

		var rotater = this;

		rotater.moveTo(xy);

		rotater.showMoverNode();

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

		rotater.moveTo(tan.getCenterCoordinates());

	},

	connectTan: function (data) {

		var rotater = this,
			tan = data.tan;

		rotater.set({
			tan: tan,
			isActive: true
		});

		tan.drawActiveDeActive(true);

		rotater.showNode();

		rotater.publish('flip-btn', true);

	},

	setStartData: function (data) {

		var rotater = this,
			tan = rotater.get('tan'),
			tanCenterXY = tan.getCenterCoordinates();

		rotater.set({
			angle: tan.get('rotate' || 0),
			tanCenterX: tanCenterXY.x,
			tanCenterY: tanCenterXY.y,
			startRotatingCursorX: data.x,
			startRotatingCursorY: data.y,
			startRotateTanAngle: tan.get('rotate')
		});

		tan.drawActiveDeActive(true);

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
			$rotater = rotater.get('$rotater');

		rotater.moveTo(tan.getCenterCoordinates());

		$rotater.removeClass('rotater__hidden').addClass('state-rotater').removeClass('state-mover');

	},

	showMoverNode: function () {

		var rotater = this,
			$rotater = rotater.get('$rotater');

		$rotater.removeClass('rotater__hidden').addClass('state-mover').removeClass('state-rotater');

	},

	moveTo: function (data) {

		var rotater = this,
			rotate = data.isFlip ? (180 - data.rotate) : data.rotate,
			$rotater = rotater.get('$rotater');

		$rotater.css(
			rotater.get('cssTransformName'),
			'translate3d(' + data.x + 'px,' + data.y + 'px,0) rotate(' + rotate + 'deg)'
		);

	},

	deActivate: function () {

		var rotater = this;

		rotater.hideNode();

		rotater.set('isActive', false);

		rotater.publish('flip-btn', false);

	},

	hideNode: function () {

		var rotater = this,
			$rotater = rotater.get('$rotater');

		$rotater.removeClass('state-rotater').removeClass('state-mover').addClass('rotater__hidden');

	},

	isInRing: function (xy) {

		var rotater = this;

		if (!rotater.get('isActive')) {
			return false;
		}

		var tan = rotater.get('tan'),
			centerXY = tan.getCenterCoordinates(),
			size = rotater.get('size'),
			//max = size / 2 * 1.1,
			max = rotater.get('size050') * 1.1,
			//min = size / 4,
			min = rotater.get('size025'),
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

		tan.publish('tan-collection:align', {tan: tan});

		tan.drawActiveDeActive(true);

		tan.reDraw();

		rotater.moveTo(tan.getCenterCoordinates());

	},

	destroy: function () {

		var rotater = this,
			attr = rotater.toJSON();

		rotater.unsubscribe();
		mediator.uninstallFrom(rotater);

		rotater.get('$rotater').off().remove();

		_.each(attr, function (value, key) {
			rotater.set(key, null);
		});

		return Backbone.Model.prototype.destroy.apply(rotater, arguments);

	}

});


export default RotaterModel;