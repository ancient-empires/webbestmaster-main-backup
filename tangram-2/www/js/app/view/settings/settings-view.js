'use strict';
/*global window */

import BaseView from './../core/base';
import tm from './../../../services/template-master';
import lang from './../../../services/lang';
import $ from './../../../lib/jbone';
import info from './../../../services/info';

var SettingsView = BaseView.extend({

	events: {
		'click .js-tangram-texture-preview': 'setTangramTexture',
		'click .js-set-lang': 'setLang'
	},

	initialize: function () {

		var view = this;

		view.setElement(tm.get('settings')({
			lang: lang,
			info: info
		}));

		view.render();
		view.setVerticalSwiper();

		return BaseView.prototype.initialize.apply(view, arguments);

	},

	setTangramTexture: function (e) {

		var view = this,
			$node = $(e.currentTarget),
			index = Number($node.attr('data-index')),
			cssActiveClass = 'tangram-texture-preview_active';

		view.$el.find('.' + cssActiveClass).removeClass(cssActiveClass);
		$node.addClass(cssActiveClass);

		info.set('tangramTexture', index);

	},

	setLang: function (e) {

		var language = e.currentTarget.getAttribute('data-lang');

		info.set('language', language);
		lang.set(language);

		Backbone.history.loadUrl();

	}

});

export default SettingsView;