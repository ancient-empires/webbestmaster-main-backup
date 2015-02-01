(function (win, doc, docElem) {

	"use strict";
	/*global console, alert, window, document, setTimeout, clearTimeout */
	/*global APP, $, Backbone*/

	APP.PopUpView = APP.BaseView.extend({

		events: {
			'click .js-popup-container': 'stopEvent'
		},

		proto: APP.BaseView.prototype,

		constructor: function() {
			this.baseConstructor.apply(this, arguments);
		},

		initialize: function(data) {

			this.routeByUrl(Backbone.history.fragment + '?' + this.popupUrl);

			this.$el = $(APP.templateMaster.tmplFn.popup(data));

			this.proto.initialize.apply(this, arguments);

		}

	});

	$(win).on('hashchange', function(e){

		var originalEvent = e.originalEvent,
			curUrl = originalEvent.newURL,
			prevUrl = originalEvent.oldURL,
			proto = APP.BaseView.prototype,
			direction;

		if ( (prevUrl + curUrl).indexOf(proto.popupUrl) !== -1 ) {
			direction = curUrl.indexOf(proto.popupUrl) !== -1 ? proto.direction.showPopup : proto.direction.hidePopup;
		}

		if (direction !== proto.direction.hidePopup) {
			return;
		}

		proto.showDirectionAnimation({direction: direction});

	});

}(window, document, document.documentElement));