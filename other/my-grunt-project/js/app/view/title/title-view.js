(function (win, doc, docElem) {

	"use strict";
	/*global console, alert, window, document */
	/*global APP, _, $ */

	APP.TitleView = APP.BaseView.extend({

		events: {
			'click .js-set-lang': 'setLang'
		},

		url: '',

		constructor: function(){
			this.baseConstructor.apply(this, arguments);
		},

		setLang: function(e) {
			var $this = $(e.target),
				lang = $this.data('lang');

			APP.info.set('lang', lang, true);
			APP.langMaster.push(lang);

			APP.$wrapper.empty();

			APP.titleView = new APP.TitleView({el: $(APP.templateMaster.tmplFn.title())});

		},

		initialize: function() {

			APP.BaseView.prototype.initialize.apply(this, arguments);

			this.addBackgroundParallax();
		}

	});



}(window, document, document.documentElement));