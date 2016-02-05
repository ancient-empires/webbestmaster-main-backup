'use strict';
/*global window */
/*global */

import Backbone from '../../../lib/backbone';
import $ from '../../../lib/jbone';
import log from '../../../services/log';
import mediator from '../../../services/mediator';

var GameModel = Backbone.Model.extend({



	defaults: {
		state: 'idle'

		/*
		* idle 			- 100% ready to work
		* spin-begin 	- start of spin, wheel get a first round
		* spin-main		- spin in progress
		* spin-end		- spin is stopping
		*
		*
		* */

	},

	initialize: function () {

		var model = this;

		mediator.installTo(model);

		//model.set('$button-spin', $('.js-spin'));

		model.bindEventListeners();

	},

	bindEventListeners: function () {

		var model = this;

		model.on('change:state', model.onChangeState);

		model.subscribe('game-model:set-state', model.setState);

	},

	onChangeState: function () {

		var model = this,
			state = model.get('state');

		log('model state is', state);

		if (state === 'idle' || state === 'spin-main') {
			$('.js-spin').removeClass('button-spin_disable');
		} else {
			$('.js-spin').addClass('button-spin_disable');
		}

	},

	isState: function (state) {
		return this.get('state') === state;
	},

	setState: function (state) {
		this.set('state', state);
	}

});

export default GameModel;