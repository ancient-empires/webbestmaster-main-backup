'use strict';
/*global window */

import BaseView from './../core/base';
import tm from './../../../services/template-master';
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

		return BaseView.prototype.initialize.apply(view, arguments);

	}

});

export default HomeView;