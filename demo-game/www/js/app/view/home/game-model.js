'use strict';
/*global window */
/*global */

import Backbone from '../../../lib/backbone';
import log from '../../../services/log';
import mediator from '../../../services/mediator';

var GameModel = Backbone.Model.extend({



	defaults: {
		state: 'idle'

		/*
		* idle 			- 100% ready to work
		* begin-spin 	- start of spin, wheel get a first round
		* main-spin		- spin in progress
		* end-spin		- spin is stopping
		*
		*
		* */

	},

	initialize: function () {

		var model = this;

		mediator.installTo(model);

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

	},

	isState: function (state) {
		return this.get('state') === state;
	},

	setState: function (state) {
		this.set('state', state);
	}

});

export default GameModel;