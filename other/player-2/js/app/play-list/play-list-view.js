(function (win, doc, docElem) {

	"use strict";
	/*global console, alert, URL */

	win.APP = win.APP || {};

	win.APP.PlayListView = win.APP.MainView.extend({

		templates: ['play-list'],

		events: {
			'dragover .js-song-container': 'dragover',
			'drop .js-song-container': 'drop'
		},

		eventsForRestore: {
			'dragover .js-song-container': 'dragover',
			'drop .js-song-container': 'drop',
			'click .js-song-block': 'play'
		},

		init: function() {

			this.model = new win.APP.PlayListModel({view: this});
			this.$el = $('.js-wrapper .js-play-list-wrapper');

			this.$el.html(this.tmpl['play-list'](this.model.toJSON()));

			this.playerView.playListModel = this.model;

		},

		dragover: function(e) {
			e.preventDefault();
			e.stopPropagation();
		},

		drop: function(e) {

			e.preventDefault();
			e.stopPropagation();

			var util = $(),
				files = util.toArray(e.dataTransfer.files),
				list = this.model.get('list'),
				that = this,
				autoPlay = !list.length;

			files.forEach(function (file) {

				list.push({
					src: URL.createObjectURL(file),
					name: file.name
				});

			}, this);

			this.model.set('list', list);

			this.model.trigger('change:list');

			list.forEach(function(data){

				var audio = new Audio();

				audio.addEventListener('canplaythrough', function(){

					var item = that.model.getDataBySrc(this.src),
						duration = Math.round(this.duration);

					that.$el.find('.js-song-block[data-src="' + this.src + '"]').data('duration', duration);
					item.duration = duration;

					if (item === that.model.get('list')[0] && autoPlay){
						that.playerModel.play(item);
					}

				}, false);

				audio.src = data.src;

			});

		},

		update: function() {

			this.$el.html(this.tmpl['play-list'](this.model.toJSON()));

			this.bindEvents();

		},

		play: function(e) {

			var $node = $(e.currentTarget),
				data = this.model.getDataBySrc($node.data('src'));

			this.playerModel.play(data);

		},

		markSong: function(data) {

			var $node = this.$el.find('.js-song-block[data-src="' + data.src + '"]');
			this.$el.find('.js-song-block.current-playing').removeClass('current-playing');
			$node.addClass('current-playing');

		},

		bindEvents: function() {

			var events = this.eventsForRestore,
				key, event, selector, arr;

			for (key in events) {
				if (events.hasOwnProperty(key)) {
					arr = key.replace(/,/gi, ' ').replace(/\s+/gi, ' ').match(/[\S]+/g);
					event = arr.shift();
					selector = arr.join(', ');
					this.$el.find(selector).on(event, this[events[key]].bind(this));
				}
			}


		}





	});


}(window, document, document.documentElement));