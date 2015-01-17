(function (win, doc) {

	/*global window, document, console, alert */

	win.$ = function (selector, context) {
		return (context || doc).querySelector(selector);
	};

	win.$$ = function (selector, context) {
		return Array.prototype.slice.call((context || doc).querySelectorAll(selector));
	};

	win.$.hasClass = function (node, className) {
		var re = new RegExp('^' + className + ' | ' + className + ' | ' + className + '$|^' + className + '$', 'g');
		return re.test(node.className);
	};

	win.$.removeClass = function (node, className) {
		var re = new RegExp('^' + className + ' | ' + className + ' | ' + className + '$|^' + className + '$', 'g');
		var nodeClass = node.className;
		if (re.test(nodeClass)) {
			node.className = nodeClass.replace(re, ' ').trim();
		}
	};

	win.$.addClass = function (node, className) {
		if (!win.$.hasClass(node, className)) {
			node.className += node.className ? ' ' + className : className;
		}
	};

	win.$.shuffle = function (arr) {
		function assort() {
			return Math.random() - 0.5;
		}
		arr.forEach(function (value, index, array) {
			array.sort(assort);
		});
		return arr;
	};

	win.$.createSimpleArray = function(begin, end) {
		var arr = [], i;
		for (i = begin; i <= end; i++) {
			arr.push(i);
		}
		return arr;
	};

	win.$.hexToRgb = function(hex) {

		//#FCA -> #FFCCAA
		if (hex.length <= 4) {
			hex = hex.replace(/(\w)(\w)(\w)/gi, '$1$1$2$2$3$3');
		}

		var rgb = hex.match(/\w{2}/gi);
		return parseInt(rgb[0], 16) + ', ' + parseInt(rgb[1], 16) + ', ' + parseInt(rgb[2], 16);
	};

	win.$.toArray = function(list) {
		return Array.prototype.slice.call(list);
	}

}(window, document));
