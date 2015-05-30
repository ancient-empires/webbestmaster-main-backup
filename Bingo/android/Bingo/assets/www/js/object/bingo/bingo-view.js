(function (win) {

	"use strict";
	/*global window, location */
	/*global bingo, $, Backbone, APP */

	win.APP = win.APP || {};

	win.APP.BingoView = win.APP.MainView.extend({
		templates: ['bingo'],
		events: {

			'click .js-table-cell-word': 'setWord',
			'click .js-info': 'info'

		},
		selectors: {

		},
		init: function() {

			var obj = this.copyObject(bingo[this.name]);

			this.$el = $('<div class="bingo js-bingo"/>').html(this.tmpl.bingo(obj));

			this.$endGameAlert = this.$el.find('.js-end-game-alert-wrapper');

			this.$wrapper = $('.js-wrapper');

			this.$wrapper.html('');

			this.$wrapper.append(this.$el);

			this.setCellSize();

			var util = $();
			util.setBodyScroll(false);

		},
		setCellSize: function() {

			function setCellSize() {
				var $cells = this.$el.find('.js-table-cell-word'),
					$table = this.$el.find('.js-words-tablet'),
					docElem = win.document.documentElement,
					size = Math.min(docElem.clientHeight, docElem.clientWidth);

				size -= 30;

				$table.css({
					width: size + 'px',
					height: size + 'px'
				});

				size = Math.floor(size / 5);

				$cells.each(function(){
					this.style.width = size + 'px';
					this.style.height = size + 'px';
				});
			}

			setCellSize.call(this);

			setTimeout(setCellSize.bind(this), 200);

		},
		copyObject: function(obj) {
			return JSON.parse(JSON.stringify(obj));
		},
		setWord: function(e) {
			var $node = $(e.currentTarget),
				$word = $node.find('.js-bingo-word');

			if ($word.data('checked') === 'true') {
				$word.data('checked', 'false');
				$node.removeClass('checked');
			} else {
				$word.data('checked', 'true');
				$node.addClass('checked');
			}

			this.bingoTest();

		},
		bingoTest: function() {
			var i, diagonal_1 = [], diagonal_2 = [], $nodes, isBingo, $row, $column, diagonalNode;

			for (i = 1; i <= 5; i += 1) {

				// get diagonal data
				diagonalNode = this.$el.find('.js-words-tablet .table-row:nth-child(' + i + ') .table-cell:nth-child(' + i + ') [data-checked="true"]');
				if (!diagonalNode.isEmpty()) {
					diagonal_1.push(diagonalNode);
				}

				diagonalNode = this.$el.find('.js-words-tablet .table-row:nth-child(' + i + ') .table-cell:nth-child(' + (6 - i) + ') [data-checked="true"]');
				if (!diagonalNode.isEmpty()) {
					diagonal_2.push(diagonalNode);
				}

				// horizontal test
				$row = this.$el.find('.js-words-tablet .table-row:nth-child(' + i + ')');
				$nodes = $row.find('[data-checked="true"]');

				isBingo = isBingo || $nodes.length === 5;

				// vertical test
				$column = this.$el.find('.js-words-tablet .table-row .table-cell:nth-child(' + i + ')');
				$nodes = $column.find('[data-checked="true"]');

				isBingo = isBingo || $nodes.length === 5;

				// test diagonal
				isBingo = isBingo || diagonal_1.length === 5;
				isBingo = isBingo || diagonal_2.length === 5;

			}

			if (isBingo) {
				this.alertEndGame();
			}

		},
		alertEndGame: function() {
			this.$endGameAlert.addClass('show-alert');
			$('.bingo').addClass('blur');
		},
		info: function() {

			if (location.hash === '#info') {
				Backbone.history.history.back();
			} else {
				APP.router.navigate('info');
			}


		}



	});


}(window));