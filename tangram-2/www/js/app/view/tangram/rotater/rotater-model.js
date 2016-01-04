import Backbone from './../../../../lib/backbone';
import _ from './../../../../lib/lodash';
import mediator from './../../../../services/mediator';
import log from './../../../../services/log';

'use strict';
/*global window */
/*global */

var RotaterModel = Backbone.Model.extend({


	initialize: function () {

		var rotater = this;

		rotater.set({
			isActive: false
		});

		rotater.bindEventListeners();

	},

	bindEventListeners: function () {

		var rotater = this;

		mediator.installTo(rotater);

		rotater.subscribe('deviceAction:moving', rotater.rotateTan);

	},

	rotateTan: function (data) {

		var rotater = this;

		if ( !rotater.get('isActive') ) {
			return;
		}




	}







});


export default RotaterModel;