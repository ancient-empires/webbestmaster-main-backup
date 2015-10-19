(function (win, doc) {

	/*global window, document, console, alert */

	win.$ = function (selector, context) {
		return (context || doc).querySelector(selector);
	};

	win.$$ = function (selector, context) {
		return Array.prototype.slice.call((context || doc).querySelectorAll(selector));
	};

	win.$.hasClass = function (node, className) {
		var re = new RegExp('^' + className + ' | ' + className + ' | ' + className + '$', 'g');
		return re.test(node.className);
	};

	win.$.shuffle = function (arr) {
		arr.forEach(function (value, index, array) {
			array.sort(function () {
				return Math.random() - 0.5;
			});
		});

		return arr;

	};

	win.$.createSimpleArray = function(begin, end) {
		var arr = [], i;
		for (i = begin; i <= end; i += 1) {
			arr.push(i);
		}
		return arr;
	};

	win.$.hexToRgb = function(hex) {
		var rgb = hex.match(/\w{2}/gi);
		return parseInt(rgb[0], 16) + ', ' + parseInt(rgb[1], 16) + ', ' + parseInt(rgb[2], 16);
	}

}(window, document));
