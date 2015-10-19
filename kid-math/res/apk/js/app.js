(function () {

	"use strict";
	/*global window, navigator, document, console, alert, $, $$, app, tmpl, lang, levels, info, Pagination, dataStorage, statusBar, ui */

	window.app = {
		wrapper: '#wrapper',
		tmplClass: '.js-template',
		init: function() {
			this.wrapper = $('#wrapper');
			this.insetHTML('.title-page');
			this.setWrapperSize();
			window.addEventListener('resize', window.app.resize.bind(window.app), false);
			this.resizeIU();
		},
		insetHTML: function(selector) {
			var template = $(this.tmplClass + selector);
			this.wrapper.innerHTML = tmpl(template.innerHTML)(lang[info.lang]);
			this.setBeforeAction(template);
			this.setShowPage();
			this.setAction();
			this.setAfterAction(template);
			this.setBackButton(template);
			this.setAudio();
			statusBar.setSetupButton(selector === '.title-page');
			ui.fade.hide();
			this.resizeIU();
			this.addShadow();
			this.setFontSize();
		},
		addShadow: function() {
			$$('.title-button span, .level-wrapper span, .test-basic-answer-number span').forEach(function(node){
				var randomColor = $.shuffle(info.shadowColors)[6];
				node.style.boxShadow = '5px 5px 5px 0 rgba(' + $.hexToRgb(randomColor) + ', 0.6)';
			});
		},
		setFontSize: function() {
			var page;
			if (info.lang === 'de' || info.lang === 'es') {
				page = $('#wrapper .page-wrapper');
				page.className += ' add-small-font-' + info.lang;
			}
		},
		setShowPage: function() {
			$$('[show-page]', this.wrapper).forEach(function(node) {
				node.addEventListener('click', function(){
					if ($.hasClass(this, 'disable')) {
						ui.message.show(node.getAttribute('error-massage'));
					} else {
						ui.fade.show();
						window.setTimeout(app.insetHTML.bind(app, '.' + this.getAttribute('show-page')), ui.fade.time);
					}

				}, false);
			});
		},
		setAudio:function() {
			$$('[audio]', this.wrapper).forEach(function(node){
				node.addEventListener('click', function(){
					var audio = this.getAttribute('audio');
					var path = lang[info.lang][audio] || soundList[audio];
					if (!path) {
						return;
					}
					player.play(path);
				}, false);
			});
		},
		setAction: function() {
			$$('[action]', this.wrapper).forEach(function(node) {
				node.addEventListener('click', function(){
					var arr = this.getAttribute('action').split(' ');
					var controller = arr[0];
					var action = arr[1];
					var params = JSON.parse(arr[2] || '{}');

					window[controller][action](params, this);

					arr = node.getAttribute('action-after');
					if (!arr) {
						return;
					}
					arr = arr.split(' ');
					controller = arr[0];
					action = arr[1];
					params = JSON.parse(arr[2] || '{}');

					window[controller][action](params, this);

				}, false);
			});
		},
		setBeforeAction: function(template) {
			var str = template.getAttribute('run-before');

			if (!str) {
				return;
			}

			var arr = str.split(' ');
			var controller = arr[0];
			var action = arr[1];
			var params = JSON.parse(arr[2] || '{}');
			window[controller][action](params);
		},
		setAfterAction: function(template){
			var str = template.getAttribute('run-after');

			if (!str) {
				return;
			}

			var arr = str.split(' ');
			var controller = arr[0];
			var action = arr[1];
			var params = JSON.parse(arr[2] || '{}');
			window[controller][action](params);
		},
		setBackButton: function(template) {
			window.statusBar.setBackButton(template.getAttribute('back-button'));
		},
		closeNeededLevel: function() {

			var levels = $$('.level-wrapper', this.wrapper);
			levels.forEach(function(levelNode) {
				if (dataStorage.getItem('openedLevel').indexOf(parseInt(levelNode.getAttribute('level'), 10)) === -1) {
					levelNode.className += ' disable';
				} else {
					levelNode.className += ' enable';
				}
			});

		},
		showLevel: function(params, node) {

			if ($.hasClass(node, 'disable')) {
				ui.message.show(lang[info.lang].doPreviousLevel);
				return;
			}

			info.currentLevelName = 'learning-basics';
			lang[info.lang].level = Object.create(levels['level-' + params.level]);

			lang[info.lang].level.pages = $.shuffle(lang[info.lang].level.pages);
			lang[info.lang].level.numbers = [];

			for (var i = 0; i < lang[info.lang].level.levelNumber; i++) {
				lang[info.lang].level.numbers.push(lang[info.lang].level.levelNumber);
			}

			ui.fade.show();
			window.setTimeout(function(){
				this.insetHTML('.level');
				var paginator = new Pagination({wrapper: $('.swipe-wrapper', this.wrapper), container: $('.swipe-level-container', this.wrapper), pages:$$('.level-image-block', this.wrapper)});
				this.setLevelBlockSize();
				ui.fade.hide();
			}.bind(this), ui.fade.time);
		},
		resize: function() {
			this.setWrapperSize();
			this.setLevelBlockSize();
			this.resizeIU();
		},
		setLevelBlockSize: function() {
			$$('.level-image-card', this.wrapper).forEach(function(card) {
				var height = 0;
				var h1 = $('h1', card);
				if (h1) {
					height = h1.clientHeight;
					h1.style.lineHeight = height + 'px';
					h1.style.fontSize = height + 'px';
				}

				var p = $('p', card);
				var q = 1;
				if (info.lang === 'de') {
					q = 0.9;
				}
				if (p) {
					height = p.parentNode.clientHeight * 0.15 * 0.6 * q + 'px';
					p.style.lineHeight = height;
					p.style.fontSize = height;
				}

			});
		},
		setWrapperSize: function() {
			this.wrapper.style.overflow = 'hidden';
			this.wrapper.style.width = info.screenWidth() + 'px';
			this.wrapper.style.height = info.screenHeight() + 'px';
		},
		setTitleActiveSection: function() {
			$$('.title-button', this.wrapper).forEach(function(node){
				var openCategories = dataStorage.getItem('openedSections') || [];
				if (openCategories.indexOf(node.getAttribute('section-name')) === -1) {
					node.className += ' disable';
					node.setAttribute('audio', 'badAnswer');
				} else {
					node.className += ' enable';
					node.setAttribute('audio', 'click');
				}
			});
			info.currentLevelName = 'title';
		},
		setSettingsPage: function() {
			// set custom select
			$$('.select-wrapper select', this.wrapper).forEach(function(select){
				select.addEventListener('change', function(){

					if (this.getAttribute('lang')) {
						var newLang = this.options[this.selectedIndex].value;
						info.lang = newLang;
						dataStorage.saveItem('curLang', newLang);

						ui.fade.show();
						window.setTimeout(function() {
							window.app.insetHTML('.setup-page');
							window.ui.fade.hide();
							statusBar.setLang();
						}, window.ui.fade.time);

					}

				}, false);


			});

			// set external link
			var links = $$('#wrapper a');
			ui.externalLinkHandler.setLinks(links);

		},
		createSlider: function() {
			var paginator = new Pagination({wrapper: $('#wrapper .swipe-wrapper'), container: $('#wrapper .swipe-level-container'), pages:$$('#wrapper .level-image-block')});
		},
		resizeIU: function() {
			// resize title page elements
			var innerWrapper, height, nodes, firstNode;
			var wrapper = $('#wrapper');
			var q;

			q = 1;
			if (info.lang === 'es' || info.lang === 'de') {
				q = 0.55;
			}
			innerWrapper = $('.learn-test-wrapper', wrapper);
			nodes = $$('.learn-test-wrapper p', wrapper);
			nodes.forEach(function(node){
				node.style.lineHeight = '';
				node.style.fontSize = '';
			});
			height = (innerWrapper || wrapper).clientHeight;
			nodes.forEach(function(node){
				node.style.lineHeight = height + 'px';
				node.style.fontSize = height * 0.7 * q + 'px';
			});

			q = 1;
			nodes = $$('.title-page-header', wrapper);
			nodes.forEach(function(node){
				node.style.lineHeight = '';
				node.style.fontSize = '';
			});
			firstNode = $('.title-page-header', wrapper);
			height = (firstNode || wrapper).clientHeight;
			nodes.forEach(function(node){
				node.style.paddingTop = height * 0.2 + 'px';
				node.style.lineHeight = height * 0.8 + 'px';
				node.style.fontSize = height * 0.5 + 'px';
			});

			q = 1;
			nodes = $$('.title-button span', wrapper);
			nodes.forEach(function(node){
				node.style.lineHeight = '';
				node.style.fontSize = '';
			});
			firstNode = $('.title-button', wrapper);
			height = (firstNode || wrapper).clientHeight * 0.8;
			nodes.forEach(function(node){
				node.style.lineHeight = height + 'px';
				node.style.fontSize = height * 0.45 + 'px';
			});

			q = 1;
			nodes = $$('.level-wrapper span', wrapper);
			nodes.forEach(function(node){
				node.style.lineHeight = '';
				node.style.fontSize = '';
			});
			firstNode = $('.level-wrapper span', wrapper);
			height = (firstNode || wrapper).clientHeight * 0.8;
			nodes.forEach(function(node){
				node.style.lineHeight = height + 'px';
				node.style.fontSize = height * 0.8 + 'px';
			});

			q = 1;
			if (info.lang === 'es') {
				q = 0.8;
			}
			nodes = $$('.plus-level-wrapper span', wrapper);
			nodes.forEach(function(node){
				node.style.lineHeight = '';
				node.style.fontSize = '';
			});
			firstNode = $('.level-wrapper span', wrapper);
			height = (firstNode || wrapper).clientHeight;
			nodes.forEach(function(node){
				node.style.lineHeight = height + 'px';
				node.style.fontSize = height * 0.5 * q + 'px';
			});

		},
		showThanks: function() {
			var page = $('#wrapper .thanks-text');
			page.style.display = 'block';
		},
		closeThanks: function() {
			var page = $('#wrapper .thanks-text');
			page.style.display = '';
		}

	};

	window.addEventListener('load', window.app.init.bind(window.app), false);

}());
