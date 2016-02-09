'use strict';
/*global window */

import BaseView from './../core/base';
import tm from './../../../services/template-master';
import util from './../../../services/util';
import log from './../../../services/log';

var HomeView = BaseView.extend({

	events: {
		scroll: 'stopEvent',
		'click .js-set-game-difficult': 'setGameDifficult',
		'click .js-save-textures': 'saveTextures'
	},

	initialize: function () {

		var view = this;

		view.setElement(tm.get('home')());

		view.render();








/*
		util.requestAnimationFrame(anim);

		function anim() {

			util.requestAnimationFrame(anim);

			console.log(Date.now());

		}
*/




		return BaseView.prototype.initialize.apply(view, arguments);

	}

});

export default HomeView;