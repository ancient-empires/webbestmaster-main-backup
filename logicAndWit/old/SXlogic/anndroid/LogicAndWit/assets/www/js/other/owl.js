(function (win, doc, docElem) {

	"use strict";
	/*global console, alert, window, document, $, setTimeout */

	function Owl() {
		this.init();
	}

	Owl.prototype.init = function() {
		this.$node = $('<div class="js-owl-node owl-node owl-animation">&nbsp;</div>');
	};

	Owl.prototype.show = function() {
		var $body = $('body');
		$body.append(this.$node);
		setTimeout(this.remove.bind(this), 7200);
	};

	Owl.prototype.remove = function() {
		this.$node.remove();
	};

	win.Owl = Owl;

}(window, document, document.documentElement));