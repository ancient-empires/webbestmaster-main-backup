'use strict';
/*global window */

import BaseView from './../core/base';
import tm from './../../../services/template-master';
import util from './../../../services/util';
import log from './../../../services/log';
import WheelCollection from './wheel-collection';
import Render from './render';

var HomeView = BaseView.extend({

	events: {
		scroll: 'stopEvent',
		'click .js-set-game-difficult': 'setGameDifficult',
		'click .js-save-textures': 'saveTextures'
	},

	initialize: function () {

		var view = this,
			wheelCollection = new WheelCollection(),
			render = new Render();

		//view.set('wheelCollection', wheelCollection);
		//view.set('render', render);

		view.setElement(tm.get('home')());

		render.appendTo(view.$el.get(0));

		view.render();

		render.preLoadAssets().done(function () {
			wheelCollection.initializeWheels({
				wheelCount: 6
			});
		});


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