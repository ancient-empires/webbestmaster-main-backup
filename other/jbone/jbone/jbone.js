/*!
 * jBone v1.0.28 - 2015-04-17 - Library for DOM manipulation
 *
 * https://github.com/kupriyanenko/jbone
 *
 * Copyright 2015 Alexey Kupriyanenko
 * Released under the MIT license.
 */

(function (win, doc) {

	var
// cache previous versions
		_$ = win.$,
		_jBone = win.jBone,

// Quick match a standalone tag
		rquickSingleTag = /^<(\w+)\s*\/?>$/,

// A simple way to check for HTML strings
// Prioritize #id over <tag> to avoid XSS via location.hash
		rquickExpr = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,

		arrayProto = Array.prototype,

// Alias for function
		slice = arrayProto.slice,
		splice = arrayProto.splice,
		keys = Object.keys,

	// Alias for global variables
		isString = function (el) {
			return typeof el === "string";
		},
		isObject = function (el) {
			return el instanceof Object;
		},
		isFunction = function (el) {
			return ({}).toString.call(el) === "[object Function]";
		},
		isArray = function (el) {
			return Array.isArray(el);
		},
		isArrayLike = function (obj) {
			var length = obj.length, type = typeof obj;
			if (isFunction(type) || obj === win) {
				return false;
			}
			if (obj.nodeType === 1 && length) {
				return true;
			}
			return isArray(type) || length === 0 || typeof length === "number" && length > 0 && (length - 1) in obj;
		},
		jBone = function (element, data) {
			return new fn.init(element, data);
		},
		fn;

// set previous values and return the instance upon calling the no-conflict mode
	jBone.noConflict = function () {
		win.$ = _$;
		win.jBone = _jBone;

		return jBone;
	};

	fn = jBone.fn = jBone.prototype = {
		init: function (element, data) {
			var elements, tag, wraper, fragment;

			if (!element) {
				return this;
			}
			if (isString(element)) {
				// Create single DOM element
				if (tag = rquickSingleTag.exec(element)) {
					this[0] = doc.createElement(tag[1]);
					this.length = 1;

					if (isObject(data)) {
						this.attr(data);
					}

					return this;
				}
				// Create DOM collection
				if ((tag = rquickExpr.exec(element)) && tag[1]) {
					fragment = doc.createDocumentFragment();
					wraper = doc.createElement("div");
					wraper.innerHTML = element;
					while (wraper.lastChild) {
						fragment.appendChild(wraper.firstChild);
					}
					elements = slice.call(fragment.childNodes);

					return jBone.merge(this, elements);
				}
				// Find DOM elements with querySelectorAll
				if (jBone.isElement(data)) {
					return jBone(data).find(element);
				}

				elements = doc.querySelectorAll(element);
				return jBone.merge(this, elements);

			}
			// Wrap DOMElement
			if (element.nodeType) {
				this[0] = element;
				this.length = 1;

				return this;
			}
			// Run function
			if (isFunction(element)) {
				return element();
			}
			// Return jBone element as is
			if (element instanceof jBone) {
				return element;
			}

			// Return element wrapped by jBone
			return jBone.makeArray(element, this);
		},

		pop: arrayProto.pop,
		push: arrayProto.push,
		reverse: arrayProto.reverse,
		shift: arrayProto.shift,
		sort: arrayProto.sort,
		splice: arrayProto.splice,
		slice: arrayProto.slice,
		indexOf: arrayProto.indexOf,
		forEach: arrayProto.forEach,
		unshift: arrayProto.unshift,
		concat: arrayProto.concat,
		join: arrayProto.join,
		every: arrayProto.every,
		some: arrayProto.some,
		filter: arrayProto.filter,
		map: arrayProto.map,
		reduce: arrayProto.reduce,
		reduceRight: arrayProto.reduceRight,
		length: 0
	};

	fn.constructor = jBone;

	fn.init.prototype = fn;

	if (typeof module === "object" && module && typeof module.exports === "object") {
		// Expose jBone as module.exports in loaders that implement the Node
		// module pattern (including browserify). Do not create the global, since
		// the user will be storing it themselves locally, and globals are frowned
		// upon in the Node module world.
		module.exports = jBone;
	}
	// Register as a AMD module
	else if (typeof define === "function" && define.amd) {
		define(function () {
			return jBone;
		});
		win.jBone = win.$ = jBone;
	} else if (typeof win === "object" && typeof win.document === "object") {
		win.jBone = win.$ = jBone;
	}

	////////////////////////
	// UTILS
	////////////////////////

	jBone.isElement = function (el) {
		return el && el instanceof jBone || el instanceof HTMLElement || isString(el);
	};

	jBone.merge = function (first, second) {
		var l = second.length,
			i = first.length,
			j = 0;

		while (j < l) {
			first[i++] = second[j++];
		}

		first.length = i;

		return first;
	};

	jBone.makeArray = function (arr, results) {
		var ret = results || [];

		if (arr !== null) {
			if (isArrayLike(arr)) {
				jBone.merge(ret, isString(arr) ? [arr] : arr);
			} else {
				ret.push(arr);
			}
		}
		return ret;
	};

	fn.find = function (selector) {
		var results = [],
			i = 0,
			length = this.length,
			finder = function (el) {
				if (isFunction(el.querySelectorAll)) {
					Array.prototype.forEach.call(el.querySelectorAll(selector), function (found) {
						results.push(found);
					});
				}
			};

		for (; i < length; i++) {
			finder(this[i]);
		}

		return jBone(results);
	};

	////////////////////////
	// ATTRIBUTES
	////////////////////////

	fn.attr = function(key, value) {
		var args = arguments,
			i = 0,
			length = this.length,
			setter;

		if (isString(key) && args.length === 1) {
			return this[0] && this[0].getAttribute(key);
		}

		if (args.length === 2) {
			setter = function(el) {
				el.setAttribute(key, value);
			};
		} else if (isObject(key)) {
			setter = function(el) {
				keys(key).forEach(function(name) {
					el.setAttribute(name, key[name]);
				});
			};
		}

		for (; i < length; i++) {
			setter(this[i]);
		}

		return this;
	};

	fn.removeAttr = function(key) {
		var i = 0,
			length = this.length;

		for (; i < length; i++) {
			this[i].removeAttribute(key);
		}

		return this;
	};

	fn.val = function(value) {
		var i = 0,
			length = this.length;

		if (arguments.length === 0) {
			return this[0] && this[0].value;
		}

		for (; i < length; i++) {
			this[i].value = value;
		}

		return this;
	};

	fn.css = function(key, value) {
		var args = arguments,
			i = 0,
			length = this.length,
			setter;

		// Get attribute
		if (isString(key) && args.length === 1) {
			return this[0] && win.getComputedStyle(this[0])[key];
		}

		// Set attributes
		if (args.length === 2) {
			setter = function(el) {
				el.style[key] = value;
			};
		} else if (isObject(key)) {
			setter = function(el) {
				keys(key).forEach(function(name) {
					el.style[name] = key[name];
				});
			};
		}

		for (; i < length; i++) {
			setter(this[i]);
		}

		return this;
	};

	fn.addClass = function(className) {
		var i = 0,
			j = 0,
			length = this.length,
			classes = className ? className.trim().split(/\s+/) : [];

		for (; i < length; i++) {
			j = 0;

			for (j = 0; j < classes.length; j++) {
				this[i].classList.add(classes[j]);
			}
		}

		return this;
	};

	fn.removeClass = function(className) {
		var i = 0,
			j = 0,
			length = this.length,
			classes = className ? className.trim().split(/\s+/) : [];

		for (; i < length; i++) {
			j = 0;

			for (j = 0; j < classes.length; j++) {
				this[i].classList.remove(classes[j]);
			}
		}

		return this;
	};

	fn.hasClass = function(className) {
		var i = 0, length = this.length;

		if (className) {
			for (; i < length; i++) {
				if (this[i].classList.contains(className)) {
					return true;
				}
			}
		}

		return false;
	};

}(window, window.document));