(function (win, doc) {

	/*global window, document, Array, RegExp */

	var bro, broA;
	
	bro = function (selector, context) {
		return (context || doc).querySelector(selector);
	};

	broA = function (selector, context) {
		return bro.toArray((context || doc).querySelectorAll(selector));
	};

	bro.hasClass = function (node, className) {
		var re = new RegExp('^' + className + ' | ' + className + ' | ' + className + '$|^' + className + '$', 'g');
		return re.test(node.className);
	};

	bro.removeClass = function (node, className) {
		var re = new RegExp('^' + className + ' | ' + className + ' | ' + className + '$|^' + className + '$', 'g');
		var nodeClass = node.className;
		if (re.test(nodeClass)) {
			node.className = nodeClass.replace(re, ' ').trim();
		}
	};

	bro.addClass = function (node, className) {
		if (!bro.hasClass(node, className)) {
			node.className += node.className ? ' ' + className : className;
		}
	};

	bro.assortFunction = function() {
		return Math.random() - 0.5;
	};

	bro.shuffle = function (arr) {
		arr.forEach(function (value, index, array) {
			array.sort(bro.assortFunction);
		});
		return arr;
	};

	bro.createSimpleArray = function(begin, end) {
		var arr = [], i;
		for (i = begin; i <= end; i++) {
			arr.push(i);
		}
		return arr;
	};

	bro.hexToRgb = function(hex) {

		//#FCA -> #FFCCAA
		if (hex.length <= 4) {
			hex = hex.replace(/(\w)(\w)(\w)/gi, '$1$1$2$2$3$3');
		}

		var rgb = hex.match(/\w{2}/gi);
		return parseInt(rgb[0], 16) + ',' + parseInt(rgb[1], 16) + ',' + parseInt(rgb[2], 16);
	};

	bro.toArray = function(list) {
		return Array.prototype.slice.call(list);
	};

	bro.html = function(node, html) {
		if (html !== undefined) {
			node.innerHTML = html;
			return true;
		}
		return node.innerHTML;
	};

	bro.remove = function(node) {
		node.parentNode.removeChild(node);
	};

	win.$ = bro;
	win.$$ = broA;

}(window, document));
