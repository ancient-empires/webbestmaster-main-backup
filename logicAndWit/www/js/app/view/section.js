(function (win) {

	"use strict";
	/*global window, Backbone, $, templateMaster, setTimeout, APP, history */

	win.APP = win.APP || {};

	win.APP.BB = win.APP.BB || {};

	APP.BB.SectionView = APP.BB.BaseView.extend({

		events: {
			'click .js-to-question': 'toQuestion'
		},

		initialize: function (data) {

			this.proto.initialize.apply(this, arguments);

			var sectionName = data.id;

			this.$el = $(this.tmpl.section( win.sections[sectionName] ));

			this.render();

			this.set('sectionName', sectionName);

		},

		toQuestion: function (e) {

			var $this = $(e.target),
				index = parseInt($this.attr('data-index'), 10);

			APP.bb.questionView = new APP.BB.QuestionView({
				sectionName: this.get('sectionName'),
				questionIndex: index
			});

		}

	});

}(window));