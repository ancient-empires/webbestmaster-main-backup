'use strict';
/*global window */

import BaseView from './../core/base';
import tm from './../../../services/template-master';
import lang from './../../../services/lang';
import $ from './../../../lib/jbone';
import info from './../../../services/info';

var HomeView = BaseView.extend({

	events: {
		'down .js-set-game-difficult': 'setGameDifficult'
	},

	initialize: function () {

		var view = this;

		view.setElement(tm.get('home')({
			lang: lang
		}));

		view.render();

		return BaseView.prototype.initialize.apply(view, arguments);

	},

	setGameDifficult: function (e) {

		var view = this,
			$node = $(e.currentTarget),
			difficult = $node.attr('data-difficult');

		info.set('gameDifficult', difficult);

		view.publish('navigate', 'sections', {trigger: true});

	}

});

export default HomeView;