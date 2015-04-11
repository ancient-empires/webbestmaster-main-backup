/*jslint white: true, nomen: true */
(function (win, doc) {

	"use strict";
	/*global window, Object, Array */
	/*global */

	var broCreator, proto, reSingleTag, reHTML, tempWrapper;

	tempWrapper = doc.createElement('div');

	reSingleTag = /^<(\w+)\s*\/?>$/;

	reHTML = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/;

	function isString (el) {
		return typeof el === "string";
	}

	function isObject (el) {
		return el instanceof Object;
	}

	function isFunction (el) {
		return typeof el === 'function';
	}

	function isElement (el) {
		return el && el instanceof Bro || el instanceof HTMLElement || isString(el);
	}

	//function isArray (el) {
		//return Array.isArray(el);
	//}

	function merge (first, second) {
		var l = second.length,
			i = first.length,
			j = 0;

		while (j < l) {
			first[i++] = second[j++];
		}

		first.length = i;

		return first;
	}

	function Bro(element, data) {
		return this.init(element, data);
	}

	Bro.prototype = Object.create(Array.prototype);

	proto = Bro.prototype;

	proto.init = function (element, data) {

		var tag;

		if (!element) {
			return this;
		}
		if (isString(element)) {

			// Create single DOM element
			if (tag = reSingleTag.exec(element)) {
				this.push(doc.createElement(tag[1]));

				if (isObject(data)) {
					this.attr(data);
				}

				return this;

			}

			// Create DOM collection
			if ((tag = reHTML.exec(element)) && tag[1]) {
				tempWrapper.innerHTML = element;
				this.push.apply(this, tempWrapper.querySelectorAll(':scope > *'));
				return this;
			}

			// Find DOM elements with querySelectorAll
			if (isElement(data)) {
				return broCreator(data).find(element);
			}

			return merge(this, doc.querySelectorAll(element));

		}

		// Wrap DOMElement
		if (element.nodeType) {
			this.push(element);
			return this;
		}

		// Run function
		if (isFunction(element)) {
			return element();
		}

		// Return jBone element as is
		if (element instanceof Bro) {
			return element;
		}

		// Return element wrapped by jBone
		this.push.apply(this, element);
		return this;

	};

	broCreator = function (element, data) {
		return new Bro(element, data);
	};

	win.$ = broCreator;

	// attr node methods
	proto.attr = function(key, value) {

		if (isString(key) && arguments.length === 1) {
			return this[0] && this[0].getAttribute(key);
		}

		if ( isObject(key) ) {
			this.forEach(function (node) {
				var i;
				for (i in key) {
					if (key.hasOwnProperty(i)) {
						node.setAttribute(i, key[i]);
					}
				}
			});
			return this;
		}

		this.forEach(function (node) {
			node.setAttribute(key, value);
		});

		return this;

	};

	proto.find = function (selector) {

		var results = [];

		this.forEach(function (node) {
			results.push.apply(results, node.querySelectorAll(selector));
		});

		return broCreator(results);

	};

	proto.addClass = function () {
		this.forEach(function (node) {
			node.classList.add.apply(node.classList, this);
		}, arguments);
		return this;
	};

	proto.removeClass = function () {
		this.forEach(function (node) {
			node.classList.remove.apply(node.classList, this);
		}, arguments);
		return this;
	};

	proto.hasClass = function(className) {
		return this.some(function (node) {
			return node.classList.contains(className);
		});
	};

}(window, window.document));