(function (gi0788) {
(function () {
'use strict';
/*global window */

var win = window,
	doc = win.document,
	navigator = win.navigator,
	docElem = doc.documentElement,
	info,
	isNormal = false;

info = {

	isNormal: isNormal,

	link: {
		ios: {
			normal: '',
			pro: ''
		},
		android: {
			normal: '',
			pro: ''
		}
	},

	ls: win.localStorage,
	savedItem: 'tangram-2',
	attr: {},
	systemAttr: {},
	defaultLanguage: 'en',
	availableLanguages: ['en'],
	//availableLanguages: ['ru', 'en'],

	init: function () {

		var info = this;

		// get data from LS
		info.attr = JSON.parse(info.ls.getItem(info.savedItem) || '{}');

		// set language
		info.setLanguage();
		// is phone
		info.set('isPhone', Math.max(docElem.clientHeight, docElem.clientWidth) <= 736, true); // 736 msx of iPhone6plus
		// is touch
		info.set('isTouch', 'ontouchstart' in doc, true);
		info.setOS();
		info.detectCssJsPrefix();
		info.detectTransitionEndEventName();
		info.detectAnimationEventNames();

		//set settings
		info.setSettings();

	},

	setLanguage: function () {

		var info = this,
			lang;

		lang = info.get('language') || navigator.language || navigator.userLanguage || info.defaultLanguage;
		lang = lang.split('-')[0].toLowerCase();
		lang = (info.availableLanguages.indexOf(lang) === -1) ? info.defaultLanguage : lang;
		//lang = lang.toLowerCase();
		info.set('language', lang);

	},

	setOS: function () {

		var info = this,
			ua = navigator.userAgent,
			isIE = /MSIE/.test(ua),
			isAndroid = (/android/i).test(ua),
			isIOS = /iPad|iPhone|iPod/.test(ua);

		info.set('isIE', isIE, true);
		info.set('isAndroid', isAndroid, true);
		info.set('isIOS', isIOS, true);

		if (isIE) {
			info.set('os', 'wp', true);
		}

		if (isAndroid) {
			info.set('os', 'android', true);
			info.set('android-version', info.getAndroidVersion(), true);
		}

		if (isIOS) {
			info.set('os', 'ios', true);
		}

		// set os if os is not defined
		if (!info.get('os', true)) {
			info.set('os', 'ios', true);
			info.set('isIOS', true, true);
		}

	},

	getAndroidVersion: function () {

		var match = navigator.userAgent.toLowerCase().match(/android\s([0-9\.]*)/);

		return match && match[1];

	},

	detectCssJsPrefix: function () {

		var data = {
				js: '',
				css: ''
			},
			tempStyle = doc.createElement('div').style,
			vendors = ['t', 'webkitT', 'MozT', 'msT', 'OT'];

		// find vendors by css transform property
		vendors.forEach(function (vendor) {

			var transform = vendor + 'ransform';

			if (!tempStyle.hasOwnProperty(transform)) {
				return;
			}

			vendor = vendor.replace(/t$/i, ''); // remove 't' from vendor

			data.js = vendor;

			vendor = vendor.toLowerCase();
			if (vendor) {
				data.css = '-' + vendor + '-';
			}

		});

		this.set('cssJsPrefix', data, true);

	},

	detectTransitionEndEventName: function () {

		if (doc.createElement('div').style.WebkitTransition === undefined) {
			this.set('transitionEnd', 'transitionend', true);
		} else {
			this.set('transitionEnd', 'webkitTransitionEnd', true);
		}

	},

	detectAnimationEventNames: function () {

		if (doc.createElement('div').style.WebkitAnimation === undefined) {
			this.set('animationEnd', 'animationend', true);
			this.set('animationStart', 'animationstart', true);
			this.set('animationIteration', 'animationiteration', true);
		} else {
			this.set('animationEnd', 'webkitAnimationEnd', true);
			this.set('animationStart', 'webkitAnimationStart', true);
			this.set('animationIteration', 'webkitAnimationIteration', true);
		}

	},

	set: function (key, value, isSystem) {

		if (isSystem) {
			this.systemAttr[key] = value;
		} else {
			this.attr[key] = value;
			this.ls.setItem(this.savedItem, JSON.stringify(this.attr));
		}

		return key;

	},

	get: function (key, isSystem) {
		return isSystem ? this.systemAttr[key] : this.attr[key];
	},

	remove: function (key, isSystem) {
		if (isSystem) {
			this.systemAttr[key] = null;
			delete this.systemAttr[key];
		} else {
			this.attr[key] = null;
			delete this.attr[key];
			this.ls.setItem(this.savedItem, JSON.stringify(this.attr));
		}

		return key;

	},

	setSettings: function () {

		var info = this,
			defaultSettings = {
				//screenAnimation: info.get('isAndroid', true) ? 'off' : 'on',
				screenAnimation: 'on',
				installTime: Date.now(),

				// extra - tangram
				tangramTexture: 0,
				gameDifficult: 'regular',
				doneTangramsRegular: [],
				doneTangramsMaster: []
				//screenAnimation: 'off',
				//storyByStory: info.isNormal ? 'off' : 'on',
				//hint: {}
				//autoSave: 'on', // auto save game after every turn
				//confirmTurn: 'off', // game turn
				//confirmMove: 'off', // move unit
				//confirmAttack: 'off', // attack unit
				//music: 'on',
				//vibrate: 'off',
				//help: 'on',
				//fightAnimation: 'off',
				//buildingSmoke: 'off',
				//unitAnimation: 'off',
				//difficult: 'easy', // easy, normal, hard
				//gameSpeed: '3' // 1..5, use string type
			},
			key,
			value;

		for (key in defaultSettings) {
			if (defaultSettings.hasOwnProperty(key)) {
				value = info.get(key) || defaultSettings[key];
				info.set(key, value);
			}
		}

	},

	hintIsDone: function (hintName) {

		var info = this,
			hint = info.get('hint')[hintName];

		return Boolean(hint && hint.state === 'done');

	},

	getLinkToStore: function (type) { // pro or normal
		return this.link[this.get('os', true)][type || 'normal'];
		//return this.link[this.get('os', true)][type || (this.isNormal ? 'normal' : 'pro')];
	},

	// extra tangram

	getDoneTangrams: function () {

		var info = this,
			gameDifficult = info.get('gameDifficult');

		if (gameDifficult === 'regular') {
			return info.get('doneTangramsRegular');
		}

		// master case
		return info.get('doneTangramsMaster');

	},

	/*
	 getDoneTangramsHash: function () {

	 },
	 */

	pushToDoneTangrams: function (data) {

		var info = this,
			gameDifficult = info.get('gameDifficult'),
			doneTangramsName,
			doneTangrams;

		if (gameDifficult === 'regular') {
			doneTangramsName = 'doneTangramsRegular';
		} else { // master case
			doneTangramsName = 'doneTangramsMaster';
		}

		doneTangrams = info.get(doneTangramsName);

		doneTangrams.push(data);

		info.set(doneTangramsName, doneTangrams);

	}

};

info.init();

gi0788['/www/js/services/info.js'] = info;


}());
(function () {
'use strict';
/*global console */

var info = gi0788['/www/js/services/info.js'] || window.info;

var log,
	gOldOnError,
	slice = Array.prototype.slice,
	logger = {
		isEnable: info.get('dev-mode'),
		remoteLog: false,
		xhr: new XMLHttpRequest(),
		log: function () {
			console.log.apply(console, arguments);
		},
		sendToServer: function () {

			if (!this.remoteLog) {
				return;
			}

			var logger = this,
				xhr = logger.xhr,
				args = slice.call(arguments).map(function (arg) {
					return (arg && typeof arg === 'object') ? JSON.stringify(arg) : String(arg);
				}).join(' ');

			xhr.open('POST', '/log/', false);

			xhr.send(args);

		}

	};

log = logger.isEnable ? (function () {
	logger.sendToServer.apply(logger, arguments);
	return logger.log.apply(logger, arguments);
}) : (function () {});

gOldOnError = window.onerror;

window.onerror = function (errorMsg, url, lineNumber) {

	log.apply(null, arguments);

	if (gOldOnError) {
		return gOldOnError(errorMsg, url, lineNumber);
	}

};

gi0788['/www/js/services/log.js'] = log;


}());
(function () {
'use strict';
/*global window */

var log = gi0788['/www/js/services/log.js'] || window.log;

var mediator;

function subscribe(channel, fn) {

	var channels = mediator.channels;

	if (!channels[channel]) {
		channels[channel] = [];
	}

	channels[channel].push({context: this, callback: fn});

	return this;

}

function publish(channel) {

	var list = mediator.channels[channel],
		args;

	log('publish -', channel, arguments);

	if ( !list ) {
		return this;
	}

	args = Array.prototype.slice.call(arguments, 1);

	list.forEach(function (item) {
		item.callback.apply(item.context, args);
	});

	return this;

}

function unsubscribe(channel) {

	var channels = mediator.channels,
		ch;

	if (!channel) {

		for (ch in channels) {
			if (channels.hasOwnProperty(ch)) {
				this.unsubscribe(ch);
			}
		}

		return this;

	}

	if (!channels[channel]) {
		return this;
	}

	channels[channel] = channels[channel].filter(function (item) {
		return item.context !== this;
	}, this);

	return this;

}

mediator = {
	channels: {},
	publish: publish,
	subscribe: subscribe,
	unsubscribe: unsubscribe,
	installTo: function (obj) {
		obj.subscribe = subscribe;
		obj.publish = publish;
		obj.unsubscribe = unsubscribe;
	},
	uninstallFrom: function (obj) {
		['subscribe', 'publish', 'unsubscribe'].forEach(function (methodName) {
			obj[methodName] = null;
			delete obj[methodName];
		});
	}
};

gi0788['/www/js/services/mediator.js'] = mediator;

}());
(function () {
/* 
 * classList.js: Cross-browser full element.classList implementation.
 * 2014-07-23
 *
 * By Eli Grey, http://eligrey.com
 * Public Domain.
 * NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.
 */

/*global self, document, DOMException */

/*! @source http://purl.eligrey.com/github/classList.js/blob/master/classList.js*/

if ("document" in self) {

// Full polyfill for browsers with no classList support
	if (!("classList" in document.createElement("_"))) {

		(function (view) {

			"use strict";

			if (!('Element' in view)) return;

			var
				classListProp = "classList"
				, protoProp = "prototype"
				, elemCtrProto = view.Element[protoProp]
				, objCtr = Object
				, strTrim = String[protoProp].trim || function () {
						return this.replace(/^\s+|\s+$/g, "");
					}
				, arrIndexOf = Array[protoProp].indexOf || function (item) {
						var
							i = 0
							, len = this.length
							;
						for (; i < len; i++) {
							if (i in this && this[i] === item) {
								return i;
							}
						}
						return -1;
					}
			// Vendors: please allow content code to instantiate DOMExceptions
				, DOMEx = function (type, message) {
					this.name = type;
					this.code = DOMException[type];
					this.message = message;
				}
				, checkTokenAndGetIndex = function (classList, token) {
					if (token === "") {
						throw new DOMEx(
							"SYNTAX_ERR"
							, "An invalid or illegal string was specified"
						);
					}
					if (/\s/.test(token)) {
						throw new DOMEx(
							"INVALID_CHARACTER_ERR"
							, "String contains an invalid character"
						);
					}
					return arrIndexOf.call(classList, token);
				}
				, ClassList = function (elem) {
					var
						trimmedClasses = strTrim.call(elem.getAttribute("class") || "")
						, classes = trimmedClasses ? trimmedClasses.split(/\s+/) : []
						, i = 0
						, len = classes.length
						;
					for (; i < len; i++) {
						this.push(classes[i]);
					}
					this._updateClassName = function () {
						elem.setAttribute("class", this.toString());
					};
				}
				, classListProto = ClassList[protoProp] = []
				, classListGetter = function () {
					return new ClassList(this);
				}
				;
// Most DOMException implementations don't allow calling DOMException's toString()
// on non-DOMExceptions. Error's toString() is sufficient here.
			DOMEx[protoProp] = Error[protoProp];
			classListProto.item = function (i) {
				return this[i] || null;
			};
			classListProto.contains = function (token) {
				token += "";
				return checkTokenAndGetIndex(this, token) !== -1;
			};
			classListProto.add = function () {
				var
					tokens = arguments
					, i = 0
					, l = tokens.length
					, token
					, updated = false
					;
				do {
					token = tokens[i] + "";
					if (checkTokenAndGetIndex(this, token) === -1) {
						this.push(token);
						updated = true;
					}
				}
				while (++i < l);

				if (updated) {
					this._updateClassName();
				}
			};
			classListProto.remove = function () {
				var
					tokens = arguments
					, i = 0
					, l = tokens.length
					, token
					, updated = false
					, index
					;
				do {
					token = tokens[i] + "";
					index = checkTokenAndGetIndex(this, token);
					while (index !== -1) {
						this.splice(index, 1);
						updated = true;
						index = checkTokenAndGetIndex(this, token);
					}
				}
				while (++i < l);

				if (updated) {
					this._updateClassName();
				}
			};
			classListProto.toggle = function (token, force) {
				token += "";

				var
					result = this.contains(token)
					, method = result ?
					force !== true && "remove"
						:
					force !== false && "add"
					;

				if (method) {
					this[method](token);
				}

				if (force === true || force === false) {
					return force;
				} else {
					return !result;
				}
			};
			classListProto.toString = function () {
				return this.join(" ");
			};

			if (objCtr.defineProperty) {
				var classListPropDesc = {
					get: classListGetter
					, enumerable: true
					, configurable: true
				};
				try {
					objCtr.defineProperty(elemCtrProto, classListProp, classListPropDesc);
				} catch (ex) { // IE 8 doesn't support enumerable:true
					if (ex.number === -0x7FF5EC54) {
						classListPropDesc.enumerable = false;
						objCtr.defineProperty(elemCtrProto, classListProp, classListPropDesc);
					}
				}
			} else if (objCtr[protoProp].__defineGetter__) {
				elemCtrProto.__defineGetter__(classListProp, classListGetter);
			}

		}(self));

	} else {
// There is full or partial native classList support, so just check if we need
// to normalize the add/remove and toggle APIs.

		(function () {
			"use strict";

			var testElement = document.createElement("_");

			testElement.classList.add("c1", "c2");

			// Polyfill for IE 10/11 and Firefox <26, where classList.add and
			// classList.remove exist but support only one argument at a time.
			if (!testElement.classList.contains("c2")) {
				var createMethod = function(method) {
					var original = DOMTokenList.prototype[method];

					DOMTokenList.prototype[method] = function(token) {
						var i, len = arguments.length;

						for (i = 0; i < len; i++) {
							token = arguments[i];
							original.call(this, token);
						}
					};
				};
				createMethod('add');
				createMethod('remove');
			}

			testElement.classList.toggle("c3", false);

			// Polyfill for IE 10 and Firefox <24, where classList.toggle does not
			// support the second argument.
			if (testElement.classList.contains("c3")) {
				var _toggle = DOMTokenList.prototype.toggle;

				DOMTokenList.prototype.toggle = function(token, force) {
					if (1 in arguments && !this.contains(token) === !force) {
						return force;
					} else {
						return _toggle.call(this, token);
					}
				};

			}

			testElement = null;
		}());

	}

}
}());
(function () {
/**
 * Add dataset support to elements
 * No globals, no overriding prototype with non-standard methods,
 *   handles CamelCase properly, attempts to use standard
 *   Object.defineProperty() (and Function bind()) methods,
 *   falls back to native implementation when existing
 * Inspired by http://code.eligrey.com/html5/dataset/
 *   (via https://github.com/adalgiso/html5-dataset/blob/master/html5-dataset.js )
 * Depends on Function.bind and Object.defineProperty/Object.getOwnPropertyDescriptor (shims below)
 * Licensed under the X11/MIT License
 */

// Inspired by https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Function/bind#Compatibility
if (!Function.prototype.bind) {
	Function.prototype.bind = function (oThis) {
		'use strict';
		if (typeof this !== "function") {
			// closest thing possible to the ECMAScript 5 internal IsCallable function
			throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
		}

		var aArgs = Array.prototype.slice.call(arguments, 1),
			fToBind = this,
			FNOP = function () {
			},
			fBound = function () {
				return fToBind.apply(
					this instanceof FNOP && oThis ? this : oThis,
					aArgs.concat(Array.prototype.slice.call(arguments))
				);
			};

		FNOP.prototype = this.prototype;
		fBound.prototype = new FNOP();

		return fBound;
	};
}

/*
 * Xccessors Standard: Cross-browser ECMAScript 5 accessors
 * http://purl.eligrey.com/github/Xccessors
 * 
 * 2010-06-21
 * 
 * By Eli Grey, http://eligrey.com
 * 
 * A shim that partially implements Object.defineProperty,
 * Object.getOwnPropertyDescriptor, and Object.defineProperties in browsers that have
 * legacy __(define|lookup)[GS]etter__ support.
 * 
 * Licensed under the X11/MIT License
 *   See LICENSE.md
 */

// Removed a few JSLint options as Notepad++ JSLint validator complaining and 
//   made comply with JSLint; also moved 'use strict' inside function
/*jslint white: true, undef: true, plusplus: true,
 bitwise: true, regexp: true, newcap: true, maxlen: 90 */

/*! @source http://purl.eligrey.com/github/Xccessors/blob/master/xccessors-standard.js*/

(function () {
	'use strict';
	var ObjectProto = Object.prototype,
		defineGetter = ObjectProto.__defineGetter__,
		defineSetter = ObjectProto.__defineSetter__,
		lookupGetter = ObjectProto.__lookupGetter__,
		lookupSetter = ObjectProto.__lookupSetter__,
		hasOwnProp = ObjectProto.hasOwnProperty;

	if (defineGetter && defineSetter && lookupGetter && lookupSetter) {

		if (!Object.defineProperty) {
			Object.defineProperty = function (obj, prop, descriptor) {
				if (arguments.length < 3) { // all arguments required
					throw new TypeError("Arguments not optional");
				}

				prop += ""; // convert prop to string

				if (hasOwnProp.call(descriptor, "value")) {
					if (!lookupGetter.call(obj, prop) && !lookupSetter.call(obj, prop)) {
						// data property defined and no pre-existing accessors
						obj[prop] = descriptor.value;
					}

					if ((hasOwnProp.call(descriptor, "get") ||
						hasOwnProp.call(descriptor, "set"))) {
						// descriptor has a value prop but accessor already exists
						throw new TypeError("Cannot specify an accessor and a value");
					}
				}

				// can't switch off these features in ECMAScript 3
				// so throw a TypeError if any are false
				if (!(descriptor.writable && descriptor.enumerable &&
					descriptor.configurable)) {
					throw new TypeError(
						"This implementation of Object.defineProperty does not support" +
						" false for configurable, enumerable, or writable."
					);
				}

				if (descriptor.get) {
					defineGetter.call(obj, prop, descriptor.get);
				}
				if (descriptor.set) {
					defineSetter.call(obj, prop, descriptor.set);
				}

				return obj;
			};
		}

		if (!Object.getOwnPropertyDescriptor) {
			Object.getOwnPropertyDescriptor = function (obj, prop) {
				if (arguments.length < 2) { // all arguments required
					throw new TypeError("Arguments not optional.");
				}

				prop += ""; // convert prop to string

				var descriptor = {
						configurable: true,
						enumerable: true,
						writable: true
					},
					getter = lookupGetter.call(obj, prop),
					setter = lookupSetter.call(obj, prop);

				if (!hasOwnProp.call(obj, prop)) {
					// property doesn't exist or is inherited
					return descriptor;
				}
				if (!getter && !setter) { // not an accessor so return prop
					descriptor.value = obj[prop];
					return descriptor;
				}

				// there is an accessor, remove descriptor.writable;
				// populate descriptor.get and descriptor.set (IE's behavior)
				delete descriptor.writable;
				descriptor.get = descriptor.set = undefined;

				if (getter) {
					descriptor.get = getter;
				}
				if (setter) {
					descriptor.set = setter;
				}

				return descriptor;
			};
		}

		if (!Object.defineProperties) {
			Object.defineProperties = function (obj, props) {
				var prop;
				for (prop in props) {
					if (hasOwnProp.call(props, prop)) {
						Object.defineProperty(obj, prop, props[prop]);
					}
				}
			};
		}
	}
}());

// Begin dataset code

if (!document.documentElement.dataset &&
		// FF is empty while IE gives empty object
	(!Object.getOwnPropertyDescriptor(Element.prototype, 'dataset') || !Object.getOwnPropertyDescriptor(Element.prototype, 'dataset').get)
) {
	var propDescriptor = {
		enumerable: true,
		get: function () {
			'use strict';
			var i,
				that = this,
				HTML5_DOMStringMap,
				attrVal, attrName, propName,
				attribute,
				attributes = this.attributes,
				attsLength = attributes.length,
				toUpperCase = function (n0) {
					return n0.charAt(1).toUpperCase();
				},
				getter = function () {
					return this;
				},
				setter = function (attrName, value) {
					return (typeof value !== 'undefined') ?
						this.setAttribute(attrName, value) :
						this.removeAttribute(attrName);
				};
			try { // Simulate DOMStringMap w/accessor support
				// Test setting accessor on normal object
				({}).__defineGetter__('test', function () {
				});
				HTML5_DOMStringMap = {};
			}
			catch (e1) { // Use a DOM object for IE8
				HTML5_DOMStringMap = document.createElement('div');
			}
			for (i = 0; i < attsLength; i++) {
				attribute = attributes[i];
				// Fix: This test really should allow any XML Name without
				//         colons (and non-uppercase for XHTML)
				if (attribute && attribute.name &&
					(/^data-\w[\w\-]*$/).test(attribute.name)) {
					attrVal = attribute.value;
					attrName = attribute.name;
					// Change to CamelCase
					propName = attrName.substr(5).replace(/-./g, toUpperCase);
					try {
						Object.defineProperty(HTML5_DOMStringMap, propName, {
							enumerable: this.enumerable,
							get: getter.bind(attrVal || ''),
							set: setter.bind(that, attrName)
						});
					}
					catch (e2) { // if accessors are not working
						HTML5_DOMStringMap[propName] = attrVal;
					}
				}
			}
			return HTML5_DOMStringMap;
		}
	};
	try {
		// FF enumerates over element's dataset, but not
		//   Element.prototype.dataset; IE9 iterates over both
		Object.defineProperty(Element.prototype, 'dataset', propDescriptor);
	} catch (e) {
		propDescriptor.enumerable = false; // IE8 does not allow setting to true
		Object.defineProperty(Element.prototype, 'dataset', propDescriptor);
	}
}
}());
(function () {
/*!
 * https://github.com/es-shims/es5-shim
 * @license es5-shim Copyright 2009-2015 by contributors, MIT License
 * see https://github.com/es-shims/es5-shim/blob/master/LICENSE
 */

// vim: ts=4 sts=4 sw=4 expandtab

// Add semicolon to prevent IIFE from being passed as argument to concatenated code.
;

// UMD (Universal Module Definition)
// see https://github.com/umdjs/umd/blob/master/templates/returnExports.js
(function (root, factory) {
    'use strict';

    /* global define, exports, module */
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(factory);
    } else if (typeof exports === 'object') {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like enviroments that support module.exports,
        // like Node.
        module.exports = factory();
    } else {
        // Browser globals (root is window)
        root.returnExports = factory();
    }
}(this, function () {

/**
 * Brings an environment as close to ECMAScript 5 compliance
 * as is possible with the facilities of erstwhile engines.
 *
 * Annotated ES5: http://es5.github.com/ (specific links below)
 * ES5 Spec: http://www.ecma-international.org/publications/files/ECMA-ST/Ecma-262.pdf
 * Required reading: http://javascriptweblog.wordpress.com/2011/12/05/extending-javascript-natives/
 */

// Shortcut to an often accessed properties, in order to avoid multiple
// dereference that costs universally. This also holds a reference to known-good
// functions.
var $Array = Array;
var ArrayPrototype = $Array.prototype;
var $Object = Object;
var ObjectPrototype = $Object.prototype;
var FunctionPrototype = Function.prototype;
var $String = String;
var StringPrototype = $String.prototype;
var $Number = Number;
var NumberPrototype = $Number.prototype;
var array_slice = ArrayPrototype.slice;
var array_splice = ArrayPrototype.splice;
var array_push = ArrayPrototype.push;
var array_unshift = ArrayPrototype.unshift;
var array_concat = ArrayPrototype.concat;
var call = FunctionPrototype.call;
var apply = FunctionPrototype.apply;
var max = Math.max;
var min = Math.min;

// Having a toString local variable name breaks in Opera so use to_string.
var to_string = ObjectPrototype.toString;

var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';
var isCallable; /* inlined from https://npmjs.com/is-callable */ var fnToStr = Function.prototype.toString, tryFunctionObject = function tryFunctionObject(value) { try { fnToStr.call(value); return true; } catch (e) { return false; } }, fnClass = '[object Function]', genClass = '[object GeneratorFunction]'; isCallable = function isCallable(value) { if (typeof value !== 'function') { return false; } if (hasToStringTag) { return tryFunctionObject(value); } var strClass = to_string.call(value); return strClass === fnClass || strClass === genClass; };
var isRegex; /* inlined from https://npmjs.com/is-regex */ var regexExec = RegExp.prototype.exec, tryRegexExec = function tryRegexExec(value) { try { regexExec.call(value); return true; } catch (e) { return false; } }, regexClass = '[object RegExp]'; isRegex = function isRegex(value) { if (typeof value !== 'object') { return false; } return hasToStringTag ? tryRegexExec(value) : to_string.call(value) === regexClass; };
var isString; /* inlined from https://npmjs.com/is-string */ var strValue = String.prototype.valueOf, tryStringObject = function tryStringObject(value) { try { strValue.call(value); return true; } catch (e) { return false; } }, stringClass = '[object String]'; isString = function isString(value) { if (typeof value === 'string') { return true; } if (typeof value !== 'object') { return false; } return hasToStringTag ? tryStringObject(value) : to_string.call(value) === stringClass; };

/* inlined from http://npmjs.com/define-properties */
var supportsDescriptors = $Object.defineProperty && (function () {
    try {
        var obj = {};
        $Object.defineProperty(obj, 'x', { enumerable: false, value: obj });
        for (var _ in obj) { return false; }
        return obj.x === obj;
    } catch (e) { /* this is ES3 */
        return false;
    }
}());
var defineProperties = (function (has) {
  // Define configurable, writable, and non-enumerable props
  // if they don't exist.
  var defineProperty;
  if (supportsDescriptors) {
      defineProperty = function (object, name, method, forceAssign) {
          if (!forceAssign && (name in object)) { return; }
          $Object.defineProperty(object, name, {
              configurable: true,
              enumerable: false,
              writable: true,
              value: method
          });
      };
  } else {
      defineProperty = function (object, name, method, forceAssign) {
          if (!forceAssign && (name in object)) { return; }
          object[name] = method;
      };
  }
  return function defineProperties(object, map, forceAssign) {
      for (var name in map) {
          if (has.call(map, name)) {
            defineProperty(object, name, map[name], forceAssign);
          }
      }
  };
}(ObjectPrototype.hasOwnProperty));

//
// Util
// ======
//

/* replaceable with https://npmjs.com/package/es-abstract /helpers/isPrimitive */
var isPrimitive = function isPrimitive(input) {
    var type = typeof input;
    return input === null || (type !== 'object' && type !== 'function');
};

var isActualNaN = $Number.isNaN || function (x) { return x !== x; };

var ES = {
    // ES5 9.4
    // http://es5.github.com/#x9.4
    // http://jsperf.com/to-integer
    /* replaceable with https://npmjs.com/package/es-abstract ES5.ToInteger */
    ToInteger: function ToInteger(num) {
        var n = +num;
        if (isActualNaN(n)) {
            n = 0;
        } else if (n !== 0 && n !== (1 / 0) && n !== -(1 / 0)) {
            n = (n > 0 || -1) * Math.floor(Math.abs(n));
        }
        return n;
    },

    /* replaceable with https://npmjs.com/package/es-abstract ES5.ToPrimitive */
    ToPrimitive: function ToPrimitive(input) {
        var val, valueOf, toStr;
        if (isPrimitive(input)) {
            return input;
        }
        valueOf = input.valueOf;
        if (isCallable(valueOf)) {
            val = valueOf.call(input);
            if (isPrimitive(val)) {
                return val;
            }
        }
        toStr = input.toString;
        if (isCallable(toStr)) {
            val = toStr.call(input);
            if (isPrimitive(val)) {
                return val;
            }
        }
        throw new TypeError();
    },

    // ES5 9.9
    // http://es5.github.com/#x9.9
    /* replaceable with https://npmjs.com/package/es-abstract ES5.ToObject */
    ToObject: function (o) {
        if (o == null) { // this matches both null and undefined
            throw new TypeError("can't convert " + o + ' to object');
        }
        return $Object(o);
    },

    /* replaceable with https://npmjs.com/package/es-abstract ES5.ToUint32 */
    ToUint32: function ToUint32(x) {
        return x >>> 0;
    }
};

//
// Function
// ========
//

// ES-5 15.3.4.5
// http://es5.github.com/#x15.3.4.5

var Empty = function Empty() {};

defineProperties(FunctionPrototype, {
    bind: function bind(that) { // .length is 1
        // 1. Let Target be the this value.
        var target = this;
        // 2. If IsCallable(Target) is false, throw a TypeError exception.
        if (!isCallable(target)) {
            throw new TypeError('Function.prototype.bind called on incompatible ' + target);
        }
        // 3. Let A be a new (possibly empty) internal list of all of the
        //   argument values provided after thisArg (arg1, arg2 etc), in order.
        // XXX slicedArgs will stand in for "A" if used
        var args = array_slice.call(arguments, 1); // for normal call
        // 4. Let F be a new native ECMAScript object.
        // 11. Set the [[Prototype]] internal property of F to the standard
        //   built-in Function prototype object as specified in 15.3.3.1.
        // 12. Set the [[Call]] internal property of F as described in
        //   15.3.4.5.1.
        // 13. Set the [[Construct]] internal property of F as described in
        //   15.3.4.5.2.
        // 14. Set the [[HasInstance]] internal property of F as described in
        //   15.3.4.5.3.
        var bound;
        var binder = function () {

            if (this instanceof bound) {
                // 15.3.4.5.2 [[Construct]]
                // When the [[Construct]] internal method of a function object,
                // F that was created using the bind function is called with a
                // list of arguments ExtraArgs, the following steps are taken:
                // 1. Let target be the value of F's [[TargetFunction]]
                //   internal property.
                // 2. If target has no [[Construct]] internal method, a
                //   TypeError exception is thrown.
                // 3. Let boundArgs be the value of F's [[BoundArgs]] internal
                //   property.
                // 4. Let args be a new list containing the same values as the
                //   list boundArgs in the same order followed by the same
                //   values as the list ExtraArgs in the same order.
                // 5. Return the result of calling the [[Construct]] internal
                //   method of target providing args as the arguments.

                var result = target.apply(
                    this,
                    array_concat.call(args, array_slice.call(arguments))
                );
                if ($Object(result) === result) {
                    return result;
                }
                return this;

            } else {
                // 15.3.4.5.1 [[Call]]
                // When the [[Call]] internal method of a function object, F,
                // which was created using the bind function is called with a
                // this value and a list of arguments ExtraArgs, the following
                // steps are taken:
                // 1. Let boundArgs be the value of F's [[BoundArgs]] internal
                //   property.
                // 2. Let boundThis be the value of F's [[BoundThis]] internal
                //   property.
                // 3. Let target be the value of F's [[TargetFunction]] internal
                //   property.
                // 4. Let args be a new list containing the same values as the
                //   list boundArgs in the same order followed by the same
                //   values as the list ExtraArgs in the same order.
                // 5. Return the result of calling the [[Call]] internal method
                //   of target providing boundThis as the this value and
                //   providing args as the arguments.

                // equiv: target.call(this, ...boundArgs, ...args)
                return target.apply(
                    that,
                    array_concat.call(args, array_slice.call(arguments))
                );

            }

        };

        // 15. If the [[Class]] internal property of Target is "Function", then
        //     a. Let L be the length property of Target minus the length of A.
        //     b. Set the length own property of F to either 0 or L, whichever is
        //       larger.
        // 16. Else set the length own property of F to 0.

        var boundLength = max(0, target.length - args.length);

        // 17. Set the attributes of the length own property of F to the values
        //   specified in 15.3.5.1.
        var boundArgs = [];
        for (var i = 0; i < boundLength; i++) {
            array_push.call(boundArgs, '$' + i);
        }

        // XXX Build a dynamic function with desired amount of arguments is the only
        // way to set the length property of a function.
        // In environments where Content Security Policies enabled (Chrome extensions,
        // for ex.) all use of eval or Function costructor throws an exception.
        // However in all of these environments Function.prototype.bind exists
        // and so this code will never be executed.
        bound = Function('binder', 'return function (' + boundArgs.join(',') + '){ return binder.apply(this, arguments); }')(binder);

        if (target.prototype) {
            Empty.prototype = target.prototype;
            bound.prototype = new Empty();
            // Clean up dangling references.
            Empty.prototype = null;
        }

        // TODO
        // 18. Set the [[Extensible]] internal property of F to true.

        // TODO
        // 19. Let thrower be the [[ThrowTypeError]] function Object (13.2.3).
        // 20. Call the [[DefineOwnProperty]] internal method of F with
        //   arguments "caller", PropertyDescriptor {[[Get]]: thrower, [[Set]]:
        //   thrower, [[Enumerable]]: false, [[Configurable]]: false}, and
        //   false.
        // 21. Call the [[DefineOwnProperty]] internal method of F with
        //   arguments "arguments", PropertyDescriptor {[[Get]]: thrower,
        //   [[Set]]: thrower, [[Enumerable]]: false, [[Configurable]]: false},
        //   and false.

        // TODO
        // NOTE Function objects created using Function.prototype.bind do not
        // have a prototype property or the [[Code]], [[FormalParameters]], and
        // [[Scope]] internal properties.
        // XXX can't delete prototype in pure-js.

        // 22. Return F.
        return bound;
    }
});

// _Please note: Shortcuts are defined after `Function.prototype.bind` as we
// use it in defining shortcuts.
var owns = call.bind(ObjectPrototype.hasOwnProperty);
var toStr = call.bind(ObjectPrototype.toString);
var arraySlice = call.bind(array_slice);
var arraySliceApply = apply.bind(array_slice);
var strSlice = call.bind(StringPrototype.slice);
var strSplit = call.bind(StringPrototype.split);
var strIndexOf = call.bind(StringPrototype.indexOf);
var push = call.bind(array_push);
var isEnum = call.bind(ObjectPrototype.propertyIsEnumerable);
var arraySort = call.bind(ArrayPrototype.sort);

//
// Array
// =====
//

var isArray = $Array.isArray || function isArray(obj) {
    return toStr(obj) === '[object Array]';
};

// ES5 15.4.4.12
// http://es5.github.com/#x15.4.4.13
// Return len+argCount.
// [bugfix, ielt8]
// IE < 8 bug: [].unshift(0) === undefined but should be "1"
var hasUnshiftReturnValueBug = [].unshift(0) !== 1;
defineProperties(ArrayPrototype, {
    unshift: function () {
        array_unshift.apply(this, arguments);
        return this.length;
    }
}, hasUnshiftReturnValueBug);

// ES5 15.4.3.2
// http://es5.github.com/#x15.4.3.2
// https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/isArray
defineProperties($Array, { isArray: isArray });

// The IsCallable() check in the Array functions
// has been replaced with a strict check on the
// internal class of the object to trap cases where
// the provided function was actually a regular
// expression literal, which in V8 and
// JavaScriptCore is a typeof "function".  Only in
// V8 are regular expression literals permitted as
// reduce parameters, so it is desirable in the
// general case for the shim to match the more
// strict and common behavior of rejecting regular
// expressions.

// ES5 15.4.4.18
// http://es5.github.com/#x15.4.4.18
// https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/array/forEach

// Check failure of by-index access of string characters (IE < 9)
// and failure of `0 in boxedString` (Rhino)
var boxedString = $Object('a');
var splitString = boxedString[0] !== 'a' || !(0 in boxedString);

var properlyBoxesContext = function properlyBoxed(method) {
    // Check node 0.6.21 bug where third parameter is not boxed
    var properlyBoxesNonStrict = true;
    var properlyBoxesStrict = true;
    if (method) {
        method.call('foo', function (_, __, context) {
            if (typeof context !== 'object') { properlyBoxesNonStrict = false; }
        });

        method.call([1], function () {
            'use strict';

            properlyBoxesStrict = typeof this === 'string';
        }, 'x');
    }
    return !!method && properlyBoxesNonStrict && properlyBoxesStrict;
};

defineProperties(ArrayPrototype, {
    forEach: function forEach(callbackfn/*, thisArg*/) {
        var object = ES.ToObject(this);
        var self = splitString && isString(this) ? strSplit(this, '') : object;
        var i = -1;
        var length = ES.ToUint32(self.length);
        var T;
        if (arguments.length > 1) {
          T = arguments[1];
        }

        // If no callback function or if callback is not a callable function
        if (!isCallable(callbackfn)) {
            throw new TypeError('Array.prototype.forEach callback must be a function');
        }

        while (++i < length) {
            if (i in self) {
                // Invoke the callback function with call, passing arguments:
                // context, property value, property key, thisArg object
                if (typeof T === 'undefined') {
                    callbackfn(self[i], i, object);
                } else {
                    callbackfn.call(T, self[i], i, object);
                }
            }
        }
    }
}, !properlyBoxesContext(ArrayPrototype.forEach));

// ES5 15.4.4.19
// http://es5.github.com/#x15.4.4.19
// https://developer.mozilla.org/en/Core_JavaScript_1.5_Reference/Objects/Array/map
defineProperties(ArrayPrototype, {
    map: function map(callbackfn/*, thisArg*/) {
        var object = ES.ToObject(this);
        var self = splitString && isString(this) ? strSplit(this, '') : object;
        var length = ES.ToUint32(self.length);
        var result = $Array(length);
        var T;
        if (arguments.length > 1) {
            T = arguments[1];
        }

        // If no callback function or if callback is not a callable function
        if (!isCallable(callbackfn)) {
            throw new TypeError('Array.prototype.map callback must be a function');
        }

        for (var i = 0; i < length; i++) {
            if (i in self) {
                if (typeof T === 'undefined') {
                    result[i] = callbackfn(self[i], i, object);
                } else {
                    result[i] = callbackfn.call(T, self[i], i, object);
                }
            }
        }
        return result;
    }
}, !properlyBoxesContext(ArrayPrototype.map));

// ES5 15.4.4.20
// http://es5.github.com/#x15.4.4.20
// https://developer.mozilla.org/en/Core_JavaScript_1.5_Reference/Objects/Array/filter
defineProperties(ArrayPrototype, {
    filter: function filter(callbackfn/*, thisArg*/) {
        var object = ES.ToObject(this);
        var self = splitString && isString(this) ? strSplit(this, '') : object;
        var length = ES.ToUint32(self.length);
        var result = [];
        var value;
        var T;
        if (arguments.length > 1) {
            T = arguments[1];
        }

        // If no callback function or if callback is not a callable function
        if (!isCallable(callbackfn)) {
            throw new TypeError('Array.prototype.filter callback must be a function');
        }

        for (var i = 0; i < length; i++) {
            if (i in self) {
                value = self[i];
                if (typeof T === 'undefined' ? callbackfn(value, i, object) : callbackfn.call(T, value, i, object)) {
                    push(result, value);
                }
            }
        }
        return result;
    }
}, !properlyBoxesContext(ArrayPrototype.filter));

// ES5 15.4.4.16
// http://es5.github.com/#x15.4.4.16
// https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/every
defineProperties(ArrayPrototype, {
    every: function every(callbackfn/*, thisArg*/) {
        var object = ES.ToObject(this);
        var self = splitString && isString(this) ? strSplit(this, '') : object;
        var length = ES.ToUint32(self.length);
        var T;
        if (arguments.length > 1) {
            T = arguments[1];
        }

        // If no callback function or if callback is not a callable function
        if (!isCallable(callbackfn)) {
            throw new TypeError('Array.prototype.every callback must be a function');
        }

        for (var i = 0; i < length; i++) {
            if (i in self && !(typeof T === 'undefined' ? callbackfn(self[i], i, object) : callbackfn.call(T, self[i], i, object))) {
                return false;
            }
        }
        return true;
    }
}, !properlyBoxesContext(ArrayPrototype.every));

// ES5 15.4.4.17
// http://es5.github.com/#x15.4.4.17
// https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/some
defineProperties(ArrayPrototype, {
    some: function some(callbackfn/*, thisArg */) {
        var object = ES.ToObject(this);
        var self = splitString && isString(this) ? strSplit(this, '') : object;
        var length = ES.ToUint32(self.length);
        var T;
        if (arguments.length > 1) {
            T = arguments[1];
        }

        // If no callback function or if callback is not a callable function
        if (!isCallable(callbackfn)) {
            throw new TypeError('Array.prototype.some callback must be a function');
        }

        for (var i = 0; i < length; i++) {
            if (i in self && (typeof T === 'undefined' ? callbackfn(self[i], i, object) : callbackfn.call(T, self[i], i, object))) {
                return true;
            }
        }
        return false;
    }
}, !properlyBoxesContext(ArrayPrototype.some));

// ES5 15.4.4.21
// http://es5.github.com/#x15.4.4.21
// https://developer.mozilla.org/en/Core_JavaScript_1.5_Reference/Objects/Array/reduce
var reduceCoercesToObject = false;
if (ArrayPrototype.reduce) {
    reduceCoercesToObject = typeof ArrayPrototype.reduce.call('es5', function (_, __, ___, list) { return list; }) === 'object';
}
defineProperties(ArrayPrototype, {
    reduce: function reduce(callbackfn/*, initialValue*/) {
        var object = ES.ToObject(this);
        var self = splitString && isString(this) ? strSplit(this, '') : object;
        var length = ES.ToUint32(self.length);

        // If no callback function or if callback is not a callable function
        if (!isCallable(callbackfn)) {
            throw new TypeError('Array.prototype.reduce callback must be a function');
        }

        // no value to return if no initial value and an empty array
        if (length === 0 && arguments.length === 1) {
            throw new TypeError('reduce of empty array with no initial value');
        }

        var i = 0;
        var result;
        if (arguments.length >= 2) {
            result = arguments[1];
        } else {
            do {
                if (i in self) {
                    result = self[i++];
                    break;
                }

                // if array contains no values, no initial value to return
                if (++i >= length) {
                    throw new TypeError('reduce of empty array with no initial value');
                }
            } while (true);
        }

        for (; i < length; i++) {
            if (i in self) {
                result = callbackfn(result, self[i], i, object);
            }
        }

        return result;
    }
}, !reduceCoercesToObject);

// ES5 15.4.4.22
// http://es5.github.com/#x15.4.4.22
// https://developer.mozilla.org/en/Core_JavaScript_1.5_Reference/Objects/Array/reduceRight
var reduceRightCoercesToObject = false;
if (ArrayPrototype.reduceRight) {
    reduceRightCoercesToObject = typeof ArrayPrototype.reduceRight.call('es5', function (_, __, ___, list) { return list; }) === 'object';
}
defineProperties(ArrayPrototype, {
    reduceRight: function reduceRight(callbackfn/*, initial*/) {
        var object = ES.ToObject(this);
        var self = splitString && isString(this) ? strSplit(this, '') : object;
        var length = ES.ToUint32(self.length);

        // If no callback function or if callback is not a callable function
        if (!isCallable(callbackfn)) {
            throw new TypeError('Array.prototype.reduceRight callback must be a function');
        }

        // no value to return if no initial value, empty array
        if (length === 0 && arguments.length === 1) {
            throw new TypeError('reduceRight of empty array with no initial value');
        }

        var result;
        var i = length - 1;
        if (arguments.length >= 2) {
            result = arguments[1];
        } else {
            do {
                if (i in self) {
                    result = self[i--];
                    break;
                }

                // if array contains no values, no initial value to return
                if (--i < 0) {
                    throw new TypeError('reduceRight of empty array with no initial value');
                }
            } while (true);
        }

        if (i < 0) {
            return result;
        }

        do {
            if (i in self) {
                result = callbackfn(result, self[i], i, object);
            }
        } while (i--);

        return result;
    }
}, !reduceRightCoercesToObject);

// ES5 15.4.4.14
// http://es5.github.com/#x15.4.4.14
// https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/indexOf
var hasFirefox2IndexOfBug = ArrayPrototype.indexOf && [0, 1].indexOf(1, 2) !== -1;
defineProperties(ArrayPrototype, {
    indexOf: function indexOf(searchElement/*, fromIndex */) {
        var self = splitString && isString(this) ? strSplit(this, '') : ES.ToObject(this);
        var length = ES.ToUint32(self.length);

        if (length === 0) {
            return -1;
        }

        var i = 0;
        if (arguments.length > 1) {
            i = ES.ToInteger(arguments[1]);
        }

        // handle negative indices
        i = i >= 0 ? i : max(0, length + i);
        for (; i < length; i++) {
            if (i in self && self[i] === searchElement) {
                return i;
            }
        }
        return -1;
    }
}, hasFirefox2IndexOfBug);

// ES5 15.4.4.15
// http://es5.github.com/#x15.4.4.15
// https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/lastIndexOf
var hasFirefox2LastIndexOfBug = ArrayPrototype.lastIndexOf && [0, 1].lastIndexOf(0, -3) !== -1;
defineProperties(ArrayPrototype, {
    lastIndexOf: function lastIndexOf(searchElement/*, fromIndex */) {
        var self = splitString && isString(this) ? strSplit(this, '') : ES.ToObject(this);
        var length = ES.ToUint32(self.length);

        if (length === 0) {
            return -1;
        }
        var i = length - 1;
        if (arguments.length > 1) {
            i = min(i, ES.ToInteger(arguments[1]));
        }
        // handle negative indices
        i = i >= 0 ? i : length - Math.abs(i);
        for (; i >= 0; i--) {
            if (i in self && searchElement === self[i]) {
                return i;
            }
        }
        return -1;
    }
}, hasFirefox2LastIndexOfBug);

// ES5 15.4.4.12
// http://es5.github.com/#x15.4.4.12
var spliceNoopReturnsEmptyArray = (function () {
    var a = [1, 2];
    var result = a.splice();
    return a.length === 2 && isArray(result) && result.length === 0;
}());
defineProperties(ArrayPrototype, {
    // Safari 5.0 bug where .splice() returns undefined
    splice: function splice(start, deleteCount) {
        if (arguments.length === 0) {
            return [];
        } else {
            return array_splice.apply(this, arguments);
        }
    }
}, !spliceNoopReturnsEmptyArray);

var spliceWorksWithEmptyObject = (function () {
    var obj = {};
    ArrayPrototype.splice.call(obj, 0, 0, 1);
    return obj.length === 1;
}());
defineProperties(ArrayPrototype, {
    splice: function splice(start, deleteCount) {
        if (arguments.length === 0) { return []; }
        var args = arguments;
        this.length = max(ES.ToInteger(this.length), 0);
        if (arguments.length > 0 && typeof deleteCount !== 'number') {
            args = arraySlice(arguments);
            if (args.length < 2) {
                push(args, this.length - start);
            } else {
                args[1] = ES.ToInteger(deleteCount);
            }
        }
        return array_splice.apply(this, args);
    }
}, !spliceWorksWithEmptyObject);
var spliceWorksWithLargeSparseArrays = (function () {
    // Per https://github.com/es-shims/es5-shim/issues/295
    // Safari 7/8 breaks with sparse arrays of size 1e5 or greater
    var arr = new $Array(1e5);
    // note: the index MUST be 8 or larger or the test will false pass
    arr[8] = 'x';
    arr.splice(1, 1);
    // note: this test must be defined *after* the indexOf shim
    // per https://github.com/es-shims/es5-shim/issues/313
    return arr.indexOf('x') === 7;
}());
var spliceWorksWithSmallSparseArrays = (function () {
    // Per https://github.com/es-shims/es5-shim/issues/295
    // Opera 12.15 breaks on this, no idea why.
    var n = 256;
    var arr = [];
    arr[n] = 'a';
    arr.splice(n + 1, 0, 'b');
    return arr[n] === 'a';
}());
defineProperties(ArrayPrototype, {
    splice: function splice(start, deleteCount) {
        var O = ES.ToObject(this);
        var A = [];
        var len = ES.ToUint32(O.length);
        var relativeStart = ES.ToInteger(start);
        var actualStart = relativeStart < 0 ? max((len + relativeStart), 0) : min(relativeStart, len);
        var actualDeleteCount = min(max(ES.ToInteger(deleteCount), 0), len - actualStart);

        var k = 0;
        var from;
        while (k < actualDeleteCount) {
            from = $String(actualStart + k);
            if (owns(O, from)) {
                A[k] = O[from];
            }
            k += 1;
        }

        var items = arraySlice(arguments, 2);
        var itemCount = items.length;
        var to;
        if (itemCount < actualDeleteCount) {
            k = actualStart;
            while (k < (len - actualDeleteCount)) {
                from = $String(k + actualDeleteCount);
                to = $String(k + itemCount);
                if (owns(O, from)) {
                    O[to] = O[from];
                } else {
                    delete O[to];
                }
                k += 1;
            }
            k = len;
            while (k > (len - actualDeleteCount + itemCount)) {
                delete O[k - 1];
                k -= 1;
            }
        } else if (itemCount > actualDeleteCount) {
            k = len - actualDeleteCount;
            while (k > actualStart) {
                from = $String(k + actualDeleteCount - 1);
                to = $String(k + itemCount - 1);
                if (owns(O, from)) {
                    O[to] = O[from];
                } else {
                    delete O[to];
                }
                k -= 1;
            }
        }
        k = actualStart;
        for (var i = 0; i < items.length; ++i) {
            O[k] = items[i];
            k += 1;
        }
        O.length = len - actualDeleteCount + itemCount;

        return A;
    }
}, !spliceWorksWithLargeSparseArrays || !spliceWorksWithSmallSparseArrays);

var originalJoin = ArrayPrototype.join;
var hasStringJoinBug;
try {
    hasStringJoinBug = Array.prototype.join.call('123', ',') !== '1,2,3';
} catch (e) {
    hasStringJoinBug = true;
}
if (hasStringJoinBug) {
    defineProperties(ArrayPrototype, {
        join: function join(separator) {
            var sep = typeof separator === 'undefined' ? ',' : separator;
            return originalJoin.call(isString(this) ? strSplit(this, '') : this, sep);
        }
    }, hasStringJoinBug);
}

var hasJoinUndefinedBug = [1, 2].join(undefined) !== '1,2';
if (hasJoinUndefinedBug) {
    defineProperties(ArrayPrototype, {
        join: function join(separator) {
            var sep = typeof separator === 'undefined' ? ',' : separator;
            return originalJoin.call(this, sep);
        }
    }, hasJoinUndefinedBug);
}

var pushShim = function push(item) {
    var O = ES.ToObject(this);
    var n = ES.ToUint32(O.length);
    var i = 0;
    while (i < arguments.length) {
        O[n + i] = arguments[i];
        i += 1;
    }
    O.length = n + i;
    return n + i;
};

var pushIsNotGeneric = (function () {
    var obj = {};
    var result = Array.prototype.push.call(obj, undefined);
    return result !== 1 || obj.length !== 1 || typeof obj[0] !== 'undefined' || !owns(obj, 0);
}());
defineProperties(ArrayPrototype, {
    push: function push(item) {
        if (isArray(this)) {
            return array_push.apply(this, arguments);
        }
        return pushShim.apply(this, arguments);
    }
}, pushIsNotGeneric);

// This fixes a very weird bug in Opera 10.6 when pushing `undefined
var pushUndefinedIsWeird = (function () {
    var arr = [];
    var result = arr.push(undefined);
    return result !== 1 || arr.length !== 1 || typeof arr[0] !== 'undefined' || !owns(arr, 0);
}());
defineProperties(ArrayPrototype, { push: pushShim }, pushUndefinedIsWeird);

// ES5 15.2.3.14
// http://es5.github.io/#x15.4.4.10
// Fix boxed string bug
defineProperties(ArrayPrototype, {
    slice: function (start, end) {
        var arr = isString(this) ? strSplit(this, '') : this;
        return arraySliceApply(arr, arguments);
    }
}, splitString);

var sortIgnoresNonFunctions = (function () {
    try {
        [1, 2].sort(null);
        [1, 2].sort({});
        return true;
    } catch (e) { /**/ }
    return false;
}());
var sortThrowsOnRegex = (function () {
    // this is a problem in Firefox 4, in which `typeof /a/ === 'function'`
    try {
        [1, 2].sort(/a/);
        return false;
    } catch (e) { /**/ }
    return true;
}());
var sortIgnoresUndefined = (function () {
    // applies in IE 8, for one.
    try {
        [1, 2].sort(undefined);
        return true;
    } catch (e) { /**/ }
    return false;
}());
defineProperties(ArrayPrototype, {
    sort: function sort(compareFn) {
        if (typeof compareFn === 'undefined') {
            return arraySort(this);
        }
        if (!isCallable(compareFn)) {
            throw new TypeError('Array.prototype.sort callback must be a function');
        }
        return arraySort(this, compareFn);
    }
}, sortIgnoresNonFunctions || !sortIgnoresUndefined || !sortThrowsOnRegex);

//
// Object
// ======
//

// ES5 15.2.3.14
// http://es5.github.com/#x15.2.3.14

// http://whattheheadsaid.com/2010/10/a-safer-object-keys-compatibility-implementation
var hasDontEnumBug = !({ 'toString': null }).propertyIsEnumerable('toString');
var hasProtoEnumBug = function () {}.propertyIsEnumerable('prototype');
var hasStringEnumBug = !owns('x', '0');
var equalsConstructorPrototype = function (o) {
    var ctor = o.constructor;
    return ctor && ctor.prototype === o;
};
var blacklistedKeys = {
    $window: true,
    $console: true,
    $parent: true,
    $self: true,
    $frame: true,
    $frames: true,
    $frameElement: true,
    $webkitIndexedDB: true,
    $webkitStorageInfo: true,
    $external: true
};
var hasAutomationEqualityBug = (function () {
    /* globals window */
    if (typeof window === 'undefined') { return false; }
    for (var k in window) {
        try {
            if (!blacklistedKeys['$' + k] && owns(window, k) && window[k] !== null && typeof window[k] === 'object') {
                equalsConstructorPrototype(window[k]);
            }
        } catch (e) {
            return true;
        }
    }
    return false;
}());
var equalsConstructorPrototypeIfNotBuggy = function (object) {
    if (typeof window === 'undefined' || !hasAutomationEqualityBug) { return equalsConstructorPrototype(object); }
    try {
        return equalsConstructorPrototype(object);
    } catch (e) {
        return false;
    }
};
var dontEnums = [
    'toString',
    'toLocaleString',
    'valueOf',
    'hasOwnProperty',
    'isPrototypeOf',
    'propertyIsEnumerable',
    'constructor'
];
var dontEnumsLength = dontEnums.length;

// taken directly from https://github.com/ljharb/is-arguments/blob/master/index.js
// can be replaced with require('is-arguments') if we ever use a build process instead
var isStandardArguments = function isArguments(value) {
    return toStr(value) === '[object Arguments]';
};
var isLegacyArguments = function isArguments(value) {
    return value !== null &&
        typeof value === 'object' &&
        typeof value.length === 'number' &&
        value.length >= 0 &&
        !isArray(value) &&
        isCallable(value.callee);
};
var isArguments = isStandardArguments(arguments) ? isStandardArguments : isLegacyArguments;

defineProperties($Object, {
    keys: function keys(object) {
        var isFn = isCallable(object);
        var isArgs = isArguments(object);
        var isObject = object !== null && typeof object === 'object';
        var isStr = isObject && isString(object);

        if (!isObject && !isFn && !isArgs) {
            throw new TypeError('Object.keys called on a non-object');
        }

        var theKeys = [];
        var skipProto = hasProtoEnumBug && isFn;
        if ((isStr && hasStringEnumBug) || isArgs) {
            for (var i = 0; i < object.length; ++i) {
                push(theKeys, $String(i));
            }
        }

        if (!isArgs) {
            for (var name in object) {
                if (!(skipProto && name === 'prototype') && owns(object, name)) {
                    push(theKeys, $String(name));
                }
            }
        }

        if (hasDontEnumBug) {
            var skipConstructor = equalsConstructorPrototypeIfNotBuggy(object);
            for (var j = 0; j < dontEnumsLength; j++) {
                var dontEnum = dontEnums[j];
                if (!(skipConstructor && dontEnum === 'constructor') && owns(object, dontEnum)) {
                    push(theKeys, dontEnum);
                }
            }
        }
        return theKeys;
    }
});

var keysWorksWithArguments = $Object.keys && (function () {
    // Safari 5.0 bug
    return $Object.keys(arguments).length === 2;
}(1, 2));
var keysHasArgumentsLengthBug = $Object.keys && (function () {
    var argKeys = $Object.keys(arguments);
    return arguments.length !== 1 || argKeys.length !== 1 || argKeys[0] !== 1;
}(1));
var originalKeys = $Object.keys;
defineProperties($Object, {
    keys: function keys(object) {
        if (isArguments(object)) {
            return originalKeys(arraySlice(object));
        } else {
            return originalKeys(object);
        }
    }
}, !keysWorksWithArguments || keysHasArgumentsLengthBug);

//
// Date
// ====
//

// ES5 15.9.5.43
// http://es5.github.com/#x15.9.5.43
// This function returns a String value represent the instance in time
// represented by this Date object. The format of the String is the Date Time
// string format defined in 15.9.1.15. All fields are present in the String.
// The time zone is always UTC, denoted by the suffix Z. If the time value of
// this object is not a finite Number a RangeError exception is thrown.
var negativeDate = -62198755200000;
var negativeYearString = '-000001';
var hasNegativeDateBug = Date.prototype.toISOString && new Date(negativeDate).toISOString().indexOf(negativeYearString) === -1;
var hasSafari51DateBug = Date.prototype.toISOString && new Date(-1).toISOString() !== '1969-12-31T23:59:59.999Z';

defineProperties(Date.prototype, {
    toISOString: function toISOString() {
        var result, length, value, year, month;
        if (!isFinite(this)) {
            throw new RangeError('Date.prototype.toISOString called on non-finite value.');
        }

        year = this.getUTCFullYear();

        month = this.getUTCMonth();
        // see https://github.com/es-shims/es5-shim/issues/111
        year += Math.floor(month / 12);
        month = (month % 12 + 12) % 12;

        // the date time string format is specified in 15.9.1.15.
        result = [month + 1, this.getUTCDate(), this.getUTCHours(), this.getUTCMinutes(), this.getUTCSeconds()];
        year = (
            (year < 0 ? '-' : (year > 9999 ? '+' : '')) +
            strSlice('00000' + Math.abs(year), (0 <= year && year <= 9999) ? -4 : -6)
        );

        length = result.length;
        while (length--) {
            value = result[length];
            // pad months, days, hours, minutes, and seconds to have two
            // digits.
            if (value < 10) {
                result[length] = '0' + value;
            }
        }
        // pad milliseconds to have three digits.
        return (
            year + '-' + arraySlice(result, 0, 2).join('-') +
            'T' + arraySlice(result, 2).join(':') + '.' +
            strSlice('000' + this.getUTCMilliseconds(), -3) + 'Z'
        );
    }
}, hasNegativeDateBug || hasSafari51DateBug);

// ES5 15.9.5.44
// http://es5.github.com/#x15.9.5.44
// This function provides a String representation of a Date object for use by
// JSON.stringify (15.12.3).
var dateToJSONIsSupported = (function () {
    try {
        return Date.prototype.toJSON &&
            new Date(NaN).toJSON() === null &&
            new Date(negativeDate).toJSON().indexOf(negativeYearString) !== -1 &&
            Date.prototype.toJSON.call({ // generic
                toISOString: function () { return true; }
            });
    } catch (e) {
        return false;
    }
}());
if (!dateToJSONIsSupported) {
    Date.prototype.toJSON = function toJSON(key) {
        // When the toJSON method is called with argument key, the following
        // steps are taken:

        // 1.  Let O be the result of calling ToObject, giving it the this
        // value as its argument.
        // 2. Let tv be ES.ToPrimitive(O, hint Number).
        var O = $Object(this);
        var tv = ES.ToPrimitive(O);
        // 3. If tv is a Number and is not finite, return null.
        if (typeof tv === 'number' && !isFinite(tv)) {
            return null;
        }
        // 4. Let toISO be the result of calling the [[Get]] internal method of
        // O with argument "toISOString".
        var toISO = O.toISOString;
        // 5. If IsCallable(toISO) is false, throw a TypeError exception.
        if (!isCallable(toISO)) {
            throw new TypeError('toISOString property is not callable');
        }
        // 6. Return the result of calling the [[Call]] internal method of
        //  toISO with O as the this value and an empty argument list.
        return toISO.call(O);

        // NOTE 1 The argument is ignored.

        // NOTE 2 The toJSON function is intentionally generic; it does not
        // require that its this value be a Date object. Therefore, it can be
        // transferred to other kinds of objects for use as a method. However,
        // it does require that any such object have a toISOString method. An
        // object is free to use the argument key to filter its
        // stringification.
    };
}

// ES5 15.9.4.2
// http://es5.github.com/#x15.9.4.2
// based on work shared by Daniel Friesen (dantman)
// http://gist.github.com/303249
var supportsExtendedYears = Date.parse('+033658-09-27T01:46:40.000Z') === 1e15;
var acceptsInvalidDates = !isNaN(Date.parse('2012-04-04T24:00:00.500Z')) || !isNaN(Date.parse('2012-11-31T23:59:59.000Z')) || !isNaN(Date.parse('2012-12-31T23:59:60.000Z'));
var doesNotParseY2KNewYear = isNaN(Date.parse('2000-01-01T00:00:00.000Z'));
if (doesNotParseY2KNewYear || acceptsInvalidDates || !supportsExtendedYears) {
    // XXX global assignment won't work in embeddings that use
    // an alternate object for the context.
    /* global Date: true */
    /* eslint-disable no-undef */
    var maxSafeUnsigned32Bit = Math.pow(2, 31) - 1;
    var hasSafariSignedIntBug = isActualNaN(new Date(1970, 0, 1, 0, 0, 0, maxSafeUnsigned32Bit + 1).getTime());
    Date = (function (NativeDate) {
    /* eslint-enable no-undef */
        // Date.length === 7
        var DateShim = function Date(Y, M, D, h, m, s, ms) {
            var length = arguments.length;
            var date;
            if (this instanceof NativeDate) {
                var seconds = s;
                var millis = ms;
                if (hasSafariSignedIntBug && length >= 7 && ms > maxSafeUnsigned32Bit) {
                    // work around a Safari 8/9 bug where it treats the seconds as signed
                    var msToShift = Math.floor(ms / maxSafeUnsigned32Bit) * maxSafeUnsigned32Bit;
                    var sToShift = Math.floor(msToShift / 1e3);
                    seconds += sToShift;
                    millis -= sToShift * 1e3;
                }
                date = length === 1 && $String(Y) === Y ? // isString(Y)
                    // We explicitly pass it through parse:
                    new NativeDate(DateShim.parse(Y)) :
                    // We have to manually make calls depending on argument
                    // length here
                    length >= 7 ? new NativeDate(Y, M, D, h, m, seconds, millis) :
                    length >= 6 ? new NativeDate(Y, M, D, h, m, seconds) :
                    length >= 5 ? new NativeDate(Y, M, D, h, m) :
                    length >= 4 ? new NativeDate(Y, M, D, h) :
                    length >= 3 ? new NativeDate(Y, M, D) :
                    length >= 2 ? new NativeDate(Y, M) :
                    length >= 1 ? new NativeDate(Y) :
                                  new NativeDate();
            } else {
                date = NativeDate.apply(this, arguments);
            }
            if (!isPrimitive(date)) {
              // Prevent mixups with unfixed Date object
              defineProperties(date, { constructor: DateShim }, true);
            }
            return date;
        };

        // 15.9.1.15 Date Time String Format.
        var isoDateExpression = new RegExp('^' +
            '(\\d{4}|[+-]\\d{6})' + // four-digit year capture or sign +
                                      // 6-digit extended year
            '(?:-(\\d{2})' + // optional month capture
            '(?:-(\\d{2})' + // optional day capture
            '(?:' + // capture hours:minutes:seconds.milliseconds
                'T(\\d{2})' + // hours capture
                ':(\\d{2})' + // minutes capture
                '(?:' + // optional :seconds.milliseconds
                    ':(\\d{2})' + // seconds capture
                    '(?:(\\.\\d{1,}))?' + // milliseconds capture
                ')?' +
            '(' + // capture UTC offset component
                'Z|' + // UTC capture
                '(?:' + // offset specifier +/-hours:minutes
                    '([-+])' + // sign capture
                    '(\\d{2})' + // hours offset capture
                    ':(\\d{2})' + // minutes offset capture
                ')' +
            ')?)?)?)?' +
        '$');

        var months = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334, 365];

        var dayFromMonth = function dayFromMonth(year, month) {
            var t = month > 1 ? 1 : 0;
            return (
                months[month] +
                Math.floor((year - 1969 + t) / 4) -
                Math.floor((year - 1901 + t) / 100) +
                Math.floor((year - 1601 + t) / 400) +
                365 * (year - 1970)
            );
        };

        var toUTC = function toUTC(t) {
            var s = 0;
            var ms = t;
            if (hasSafariSignedIntBug && ms > maxSafeUnsigned32Bit) {
                // work around a Safari 8/9 bug where it treats the seconds as signed
                var msToShift = Math.floor(ms / maxSafeUnsigned32Bit) * maxSafeUnsigned32Bit;
                var sToShift = Math.floor(msToShift / 1e3);
                s += sToShift;
                ms -= sToShift * 1e3;
            }
            return $Number(new NativeDate(1970, 0, 1, 0, 0, s, ms));
        };

        // Copy any custom methods a 3rd party library may have added
        for (var key in NativeDate) {
            if (owns(NativeDate, key)) {
                DateShim[key] = NativeDate[key];
            }
        }

        // Copy "native" methods explicitly; they may be non-enumerable
        defineProperties(DateShim, {
            now: NativeDate.now,
            UTC: NativeDate.UTC
        }, true);
        DateShim.prototype = NativeDate.prototype;
        defineProperties(DateShim.prototype, {
            constructor: DateShim
        }, true);

        // Upgrade Date.parse to handle simplified ISO 8601 strings
        var parseShim = function parse(string) {
            var match = isoDateExpression.exec(string);
            if (match) {
                // parse months, days, hours, minutes, seconds, and milliseconds
                // provide default values if necessary
                // parse the UTC offset component
                var year = $Number(match[1]),
                    month = $Number(match[2] || 1) - 1,
                    day = $Number(match[3] || 1) - 1,
                    hour = $Number(match[4] || 0),
                    minute = $Number(match[5] || 0),
                    second = $Number(match[6] || 0),
                    millisecond = Math.floor($Number(match[7] || 0) * 1000),
                    // When time zone is missed, local offset should be used
                    // (ES 5.1 bug)
                    // see https://bugs.ecmascript.org/show_bug.cgi?id=112
                    isLocalTime = Boolean(match[4] && !match[8]),
                    signOffset = match[9] === '-' ? 1 : -1,
                    hourOffset = $Number(match[10] || 0),
                    minuteOffset = $Number(match[11] || 0),
                    result;
                var hasMinutesOrSecondsOrMilliseconds = minute > 0 || second > 0 || millisecond > 0;
                if (
                    hour < (hasMinutesOrSecondsOrMilliseconds ? 24 : 25) &&
                    minute < 60 && second < 60 && millisecond < 1000 &&
                    month > -1 && month < 12 && hourOffset < 24 &&
                    minuteOffset < 60 && // detect invalid offsets
                    day > -1 &&
                    day < (dayFromMonth(year, month + 1) - dayFromMonth(year, month))
                ) {
                    result = (
                        (dayFromMonth(year, month) + day) * 24 +
                        hour +
                        hourOffset * signOffset
                    ) * 60;
                    result = (
                        (result + minute + minuteOffset * signOffset) * 60 +
                        second
                    ) * 1000 + millisecond;
                    if (isLocalTime) {
                        result = toUTC(result);
                    }
                    if (-8.64e15 <= result && result <= 8.64e15) {
                        return result;
                    }
                }
                return NaN;
            }
            return NativeDate.parse.apply(this, arguments);
        };
        defineProperties(DateShim, { parse: parseShim });

        return DateShim;
    }(Date));
    /* global Date: false */
}

// ES5 15.9.4.4
// http://es5.github.com/#x15.9.4.4
if (!Date.now) {
    Date.now = function now() {
        return new Date().getTime();
    };
}

//
// Number
// ======
//

// ES5.1 15.7.4.5
// http://es5.github.com/#x15.7.4.5
var hasToFixedBugs = NumberPrototype.toFixed && (
  (0.00008).toFixed(3) !== '0.000' ||
  (0.9).toFixed(0) !== '1' ||
  (1.255).toFixed(2) !== '1.25' ||
  (1000000000000000128).toFixed(0) !== '1000000000000000128'
);

var toFixedHelpers = {
  base: 1e7,
  size: 6,
  data: [0, 0, 0, 0, 0, 0],
  multiply: function multiply(n, c) {
      var i = -1;
      var c2 = c;
      while (++i < toFixedHelpers.size) {
          c2 += n * toFixedHelpers.data[i];
          toFixedHelpers.data[i] = c2 % toFixedHelpers.base;
          c2 = Math.floor(c2 / toFixedHelpers.base);
      }
  },
  divide: function divide(n) {
      var i = toFixedHelpers.size, c = 0;
      while (--i >= 0) {
          c += toFixedHelpers.data[i];
          toFixedHelpers.data[i] = Math.floor(c / n);
          c = (c % n) * toFixedHelpers.base;
      }
  },
  numToString: function numToString() {
      var i = toFixedHelpers.size;
      var s = '';
      while (--i >= 0) {
          if (s !== '' || i === 0 || toFixedHelpers.data[i] !== 0) {
              var t = $String(toFixedHelpers.data[i]);
              if (s === '') {
                  s = t;
              } else {
                  s += strSlice('0000000', 0, 7 - t.length) + t;
              }
          }
      }
      return s;
  },
  pow: function pow(x, n, acc) {
      return (n === 0 ? acc : (n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc)));
  },
  log: function log(x) {
      var n = 0;
      var x2 = x;
      while (x2 >= 4096) {
          n += 12;
          x2 /= 4096;
      }
      while (x2 >= 2) {
          n += 1;
          x2 /= 2;
      }
      return n;
  }
};

var toFixedShim = function toFixed(fractionDigits) {
    var f, x, s, m, e, z, j, k;

    // Test for NaN and round fractionDigits down
    f = $Number(fractionDigits);
    f = isActualNaN(f) ? 0 : Math.floor(f);

    if (f < 0 || f > 20) {
        throw new RangeError('Number.toFixed called with invalid number of decimals');
    }

    x = $Number(this);

    if (isActualNaN(x)) {
        return 'NaN';
    }

    // If it is too big or small, return the string value of the number
    if (x <= -1e21 || x >= 1e21) {
        return $String(x);
    }

    s = '';

    if (x < 0) {
        s = '-';
        x = -x;
    }

    m = '0';

    if (x > 1e-21) {
        // 1e-21 < x < 1e21
        // -70 < log2(x) < 70
        e = toFixedHelpers.log(x * toFixedHelpers.pow(2, 69, 1)) - 69;
        z = (e < 0 ? x * toFixedHelpers.pow(2, -e, 1) : x / toFixedHelpers.pow(2, e, 1));
        z *= 0x10000000000000; // Math.pow(2, 52);
        e = 52 - e;

        // -18 < e < 122
        // x = z / 2 ^ e
        if (e > 0) {
            toFixedHelpers.multiply(0, z);
            j = f;

            while (j >= 7) {
                toFixedHelpers.multiply(1e7, 0);
                j -= 7;
            }

            toFixedHelpers.multiply(toFixedHelpers.pow(10, j, 1), 0);
            j = e - 1;

            while (j >= 23) {
                toFixedHelpers.divide(1 << 23);
                j -= 23;
            }

            toFixedHelpers.divide(1 << j);
            toFixedHelpers.multiply(1, 1);
            toFixedHelpers.divide(2);
            m = toFixedHelpers.numToString();
        } else {
            toFixedHelpers.multiply(0, z);
            toFixedHelpers.multiply(1 << (-e), 0);
            m = toFixedHelpers.numToString() + strSlice('0.00000000000000000000', 2, 2 + f);
        }
    }

    if (f > 0) {
        k = m.length;

        if (k <= f) {
            m = s + strSlice('0.0000000000000000000', 0, f - k + 2) + m;
        } else {
            m = s + strSlice(m, 0, k - f) + '.' + strSlice(m, k - f);
        }
    } else {
        m = s + m;
    }

    return m;
};
defineProperties(NumberPrototype, { toFixed: toFixedShim }, hasToFixedBugs);

var hasToPrecisionUndefinedBug = (function () {
    try {
        return 1.0.toPrecision(undefined) === '1';
    } catch (e) {
        return true;
    }
}());
var originalToPrecision = NumberPrototype.toPrecision;
defineProperties(NumberPrototype, {
    toPrecision: function toPrecision(precision) {
        return typeof precision === 'undefined' ? originalToPrecision.call(this) : originalToPrecision.call(this, precision);
    }
}, hasToPrecisionUndefinedBug);

//
// String
// ======
//

// ES5 15.5.4.14
// http://es5.github.com/#x15.5.4.14

// [bugfix, IE lt 9, firefox 4, Konqueror, Opera, obscure browsers]
// Many browsers do not split properly with regular expressions or they
// do not perform the split correctly under obscure conditions.
// See http://blog.stevenlevithan.com/archives/cross-browser-split
// I've tested in many browsers and this seems to cover the deviant ones:
//    'ab'.split(/(?:ab)*/) should be ["", ""], not [""]
//    '.'.split(/(.?)(.?)/) should be ["", ".", "", ""], not ["", ""]
//    'tesst'.split(/(s)*/) should be ["t", undefined, "e", "s", "t"], not
//       [undefined, "t", undefined, "e", ...]
//    ''.split(/.?/) should be [], not [""]
//    '.'.split(/()()/) should be ["."], not ["", "", "."]

if (
    'ab'.split(/(?:ab)*/).length !== 2 ||
    '.'.split(/(.?)(.?)/).length !== 4 ||
    'tesst'.split(/(s)*/)[1] === 't' ||
    'test'.split(/(?:)/, -1).length !== 4 ||
    ''.split(/.?/).length ||
    '.'.split(/()()/).length > 1
) {
    (function () {
        var compliantExecNpcg = typeof (/()??/).exec('')[1] === 'undefined'; // NPCG: nonparticipating capturing group
        var maxSafe32BitInt = Math.pow(2, 32) - 1;

        StringPrototype.split = function (separator, limit) {
            var string = String(this);
            if (typeof separator === 'undefined' && limit === 0) {
                return [];
            }

            // If `separator` is not a regex, use native split
            if (!isRegex(separator)) {
                return strSplit(this, separator, limit);
            }

            var output = [];
            var flags = (separator.ignoreCase ? 'i' : '') +
                        (separator.multiline ? 'm' : '') +
                        (separator.unicode ? 'u' : '') + // in ES6
                        (separator.sticky ? 'y' : ''), // Firefox 3+ and ES6
                lastLastIndex = 0,
                // Make `global` and avoid `lastIndex` issues by working with a copy
                separator2, match, lastIndex, lastLength;
            var separatorCopy = new RegExp(separator.source, flags + 'g');
            if (!compliantExecNpcg) {
                // Doesn't need flags gy, but they don't hurt
                separator2 = new RegExp('^' + separatorCopy.source + '$(?!\\s)', flags);
            }
            /* Values for `limit`, per the spec:
             * If undefined: 4294967295 // maxSafe32BitInt
             * If 0, Infinity, or NaN: 0
             * If positive number: limit = Math.floor(limit); if (limit > 4294967295) limit -= 4294967296;
             * If negative number: 4294967296 - Math.floor(Math.abs(limit))
             * If other: Type-convert, then use the above rules
             */
            var splitLimit = typeof limit === 'undefined' ? maxSafe32BitInt : ES.ToUint32(limit);
            match = separatorCopy.exec(string);
            while (match) {
                // `separatorCopy.lastIndex` is not reliable cross-browser
                lastIndex = match.index + match[0].length;
                if (lastIndex > lastLastIndex) {
                    push(output, strSlice(string, lastLastIndex, match.index));
                    // Fix browsers whose `exec` methods don't consistently return `undefined` for
                    // nonparticipating capturing groups
                    if (!compliantExecNpcg && match.length > 1) {
                        /* eslint-disable no-loop-func */
                        match[0].replace(separator2, function () {
                            for (var i = 1; i < arguments.length - 2; i++) {
                                if (typeof arguments[i] === 'undefined') {
                                    match[i] = void 0;
                                }
                            }
                        });
                        /* eslint-enable no-loop-func */
                    }
                    if (match.length > 1 && match.index < string.length) {
                        array_push.apply(output, arraySlice(match, 1));
                    }
                    lastLength = match[0].length;
                    lastLastIndex = lastIndex;
                    if (output.length >= splitLimit) {
                        break;
                    }
                }
                if (separatorCopy.lastIndex === match.index) {
                    separatorCopy.lastIndex++; // Avoid an infinite loop
                }
                match = separatorCopy.exec(string);
            }
            if (lastLastIndex === string.length) {
                if (lastLength || !separatorCopy.test('')) {
                    push(output, '');
                }
            } else {
                push(output, strSlice(string, lastLastIndex));
            }
            return output.length > splitLimit ? strSlice(output, 0, splitLimit) : output;
        };
    }());

// [bugfix, chrome]
// If separator is undefined, then the result array contains just one String,
// which is the this value (converted to a String). If limit is not undefined,
// then the output array is truncated so that it contains no more than limit
// elements.
// "0".split(undefined, 0) -> []
} else if ('0'.split(void 0, 0).length) {
    StringPrototype.split = function split(separator, limit) {
        if (typeof separator === 'undefined' && limit === 0) { return []; }
        return strSplit(this, separator, limit);
    };
}

var str_replace = StringPrototype.replace;
var replaceReportsGroupsCorrectly = (function () {
    var groups = [];
    'x'.replace(/x(.)?/g, function (match, group) {
        push(groups, group);
    });
    return groups.length === 1 && typeof groups[0] === 'undefined';
}());

if (!replaceReportsGroupsCorrectly) {
    StringPrototype.replace = function replace(searchValue, replaceValue) {
        var isFn = isCallable(replaceValue);
        var hasCapturingGroups = isRegex(searchValue) && (/\)[*?]/).test(searchValue.source);
        if (!isFn || !hasCapturingGroups) {
            return str_replace.call(this, searchValue, replaceValue);
        } else {
            var wrappedReplaceValue = function (match) {
                var length = arguments.length;
                var originalLastIndex = searchValue.lastIndex;
                searchValue.lastIndex = 0;
                var args = searchValue.exec(match) || [];
                searchValue.lastIndex = originalLastIndex;
                push(args, arguments[length - 2], arguments[length - 1]);
                return replaceValue.apply(this, args);
            };
            return str_replace.call(this, searchValue, wrappedReplaceValue);
        }
    };
}

// ECMA-262, 3rd B.2.3
// Not an ECMAScript standard, although ECMAScript 3rd Edition has a
// non-normative section suggesting uniform semantics and it should be
// normalized across all browsers
// [bugfix, IE lt 9] IE < 9 substr() with negative value not working in IE
var string_substr = StringPrototype.substr;
var hasNegativeSubstrBug = ''.substr && '0b'.substr(-1) !== 'b';
defineProperties(StringPrototype, {
    substr: function substr(start, length) {
        var normalizedStart = start;
        if (start < 0) {
            normalizedStart = max(this.length + start, 0);
        }
        return string_substr.call(this, normalizedStart, length);
    }
}, hasNegativeSubstrBug);

// ES5 15.5.4.20
// whitespace from: http://es5.github.io/#x15.5.4.20
var ws = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
    '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028' +
    '\u2029\uFEFF';
var zeroWidth = '\u200b';
var wsRegexChars = '[' + ws + ']';
var trimBeginRegexp = new RegExp('^' + wsRegexChars + wsRegexChars + '*');
var trimEndRegexp = new RegExp(wsRegexChars + wsRegexChars + '*$');
var hasTrimWhitespaceBug = StringPrototype.trim && (ws.trim() || !zeroWidth.trim());
defineProperties(StringPrototype, {
    // http://blog.stevenlevithan.com/archives/faster-trim-javascript
    // http://perfectionkills.com/whitespace-deviations/
    trim: function trim() {
        if (typeof this === 'undefined' || this === null) {
            throw new TypeError("can't convert " + this + ' to object');
        }
        return $String(this).replace(trimBeginRegexp, '').replace(trimEndRegexp, '');
    }
}, hasTrimWhitespaceBug);

var hasLastIndexBug = StringPrototype.lastIndexOf && 'abcあい'.lastIndexOf('あい', 2) !== -1;
defineProperties(StringPrototype, {
    lastIndexOf: function lastIndexOf(searchString) {
        if (typeof this === 'undefined' || this === null) {
            throw new TypeError("can't convert " + this + ' to object');
        }
        var S = $String(this);
        var searchStr = $String(searchString);
        var numPos = arguments.length > 1 ? $Number(arguments[1]) : NaN;
        var pos = isActualNaN(numPos) ? Infinity : ES.ToInteger(numPos);
        var start = min(max(pos, 0), S.length);
        var searchLen = searchStr.length;
        var k = start + searchLen;
        while (k > 0) {
            k = max(0, k - searchLen);
            var index = strIndexOf(strSlice(S, k, start + searchLen), searchStr);
            if (index !== -1) {
                return k + index;
            }
        }
        return -1;
    }
}, hasLastIndexBug);

var originalLastIndexOf = StringPrototype.lastIndexOf;
defineProperties(StringPrototype, {
    lastIndexOf: function lastIndexOf(searchString) {
        return originalLastIndexOf.apply(this, arguments);
    }
}, StringPrototype.lastIndexOf.length !== 1);

// ES-5 15.1.2.2
/* eslint-disable radix */
if (parseInt(ws + '08') !== 8 || parseInt(ws + '0x16') !== 22) {
/* eslint-enable radix */
    /* global parseInt: true */
    parseInt = (function (origParseInt) {
        var hexRegex = /^[\-+]?0[xX]/;
        return function parseInt(str, radix) {
            var string = $String(str).trim();
            var defaultedRadix = $Number(radix) || (hexRegex.test(string) ? 16 : 10);
            return origParseInt(string, defaultedRadix);
        };
    }(parseInt));
}

if (String(new RangeError('test')) !== 'RangeError: test') {
    var errorToStringShim = function toString() {
        if (typeof this === 'undefined' || this === null) {
            throw new TypeError("can't convert " + this + ' to object');
        }
        var name = this.name;
        if (typeof name === 'undefined') {
            name = 'Error';
        } else if (typeof name !== 'string') {
            name = $String(name);
        }
        var msg = this.message;
        if (typeof msg === 'undefined') {
            msg = '';
        } else if (typeof msg !== 'string') {
            msg = $String(msg);
        }
        if (!name) {
            return msg;
        }
        if (!msg) {
            return name;
        }
        return name + ': ' + msg;
    };
    // can't use defineProperties here because of toString enumeration issue in IE <= 8
    Error.prototype.toString = errorToStringShim;
}

if (supportsDescriptors) {
    var ensureNonEnumerable = function (obj, prop) {
        if (isEnum(obj, prop)) {
            var desc = Object.getOwnPropertyDescriptor(obj, prop);
            desc.enumerable = false;
            Object.defineProperty(obj, prop, desc);
        }
    };
    ensureNonEnumerable(Error.prototype, 'message');
    if (Error.prototype.message !== '') {
      Error.prototype.message = '';
    }
    ensureNonEnumerable(Error.prototype, 'name');
}

if (String(/a/mig) !== '/a/gim') {
    var regexToString = function toString() {
        var str = '/' + this.source + '/';
        if (this.global) {
            str += 'g';
        }
        if (this.ignoreCase) {
            str += 'i';
        }
        if (this.multiline) {
            str += 'm';
        }
        return str;
    };
    // can't use defineProperties here because of toString enumeration issue in IE <= 8
    RegExp.prototype.toString = regexToString;
}

}));

}());
(function () {
/*!
 * https://github.com/es-shims/es5-shim
 * @license es5-shim Copyright 2009-2015 by contributors, MIT License
 * see https://github.com/es-shims/es5-shim/blob/master/LICENSE
 */

// vim: ts=4 sts=4 sw=4 expandtab

// Add semicolon to prevent IIFE from being passed as argument to concatenated code.
;

// UMD (Universal Module Definition)
// see https://github.com/umdjs/umd/blob/master/templates/returnExports.js
(function (root, factory) {
    'use strict';

    /* global define, exports, module */
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(factory);
    } else if (typeof exports === 'object') {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like enviroments that support module.exports,
        // like Node.
        module.exports = factory();
    } else {
        // Browser globals (root is window)
        root.returnExports = factory();
  }
}(this, function () {

var call = Function.call;
var prototypeOfObject = Object.prototype;
var owns = call.bind(prototypeOfObject.hasOwnProperty);
var isEnumerable = call.bind(prototypeOfObject.propertyIsEnumerable);
var toStr = call.bind(prototypeOfObject.toString);

// If JS engine supports accessors creating shortcuts.
var defineGetter;
var defineSetter;
var lookupGetter;
var lookupSetter;
var supportsAccessors = owns(prototypeOfObject, '__defineGetter__');
if (supportsAccessors) {
    /* eslint-disable no-underscore-dangle */
    defineGetter = call.bind(prototypeOfObject.__defineGetter__);
    defineSetter = call.bind(prototypeOfObject.__defineSetter__);
    lookupGetter = call.bind(prototypeOfObject.__lookupGetter__);
    lookupSetter = call.bind(prototypeOfObject.__lookupSetter__);
    /* eslint-enable no-underscore-dangle */
}

// ES5 15.2.3.2
// http://es5.github.com/#x15.2.3.2
if (!Object.getPrototypeOf) {
    // https://github.com/es-shims/es5-shim/issues#issue/2
    // http://ejohn.org/blog/objectgetprototypeof/
    // recommended by fschaefer on github
    //
    // sure, and webreflection says ^_^
    // ... this will nerever possibly return null
    // ... Opera Mini breaks here with infinite loops
    Object.getPrototypeOf = function getPrototypeOf(object) {
        /* eslint-disable no-proto */
        var proto = object.__proto__;
        /* eslint-enable no-proto */
        if (proto || proto === null) {
            return proto;
        } else if (toStr(object.constructor) === '[object Function]') {
            return object.constructor.prototype;
        } else if (object instanceof Object) {
          return prototypeOfObject;
        } else {
          // Correctly return null for Objects created with `Object.create(null)`
          // (shammed or native) or `{ __proto__: null}`.  Also returns null for
          // cross-realm objects on browsers that lack `__proto__` support (like
          // IE <11), but that's the best we can do.
          return null;
        }
    };
}

// ES5 15.2.3.3
// http://es5.github.com/#x15.2.3.3

var doesGetOwnPropertyDescriptorWork = function doesGetOwnPropertyDescriptorWork(object) {
    try {
        object.sentinel = 0;
        return Object.getOwnPropertyDescriptor(object, 'sentinel').value === 0;
    } catch (exception) {
        return false;
    }
};

// check whether getOwnPropertyDescriptor works if it's given. Otherwise, shim partially.
if (Object.defineProperty) {
    var getOwnPropertyDescriptorWorksOnObject = doesGetOwnPropertyDescriptorWork({});
    var getOwnPropertyDescriptorWorksOnDom = typeof document === 'undefined' ||
    doesGetOwnPropertyDescriptorWork(document.createElement('div'));
    if (!getOwnPropertyDescriptorWorksOnDom || !getOwnPropertyDescriptorWorksOnObject) {
        var getOwnPropertyDescriptorFallback = Object.getOwnPropertyDescriptor;
    }
}

if (!Object.getOwnPropertyDescriptor || getOwnPropertyDescriptorFallback) {
    var ERR_NON_OBJECT = 'Object.getOwnPropertyDescriptor called on a non-object: ';

    /* eslint-disable no-proto */
    Object.getOwnPropertyDescriptor = function getOwnPropertyDescriptor(object, property) {
        if ((typeof object !== 'object' && typeof object !== 'function') || object === null) {
            throw new TypeError(ERR_NON_OBJECT + object);
        }

        // make a valiant attempt to use the real getOwnPropertyDescriptor
        // for I8's DOM elements.
        if (getOwnPropertyDescriptorFallback) {
            try {
                return getOwnPropertyDescriptorFallback.call(Object, object, property);
            } catch (exception) {
                // try the shim if the real one doesn't work
            }
        }

        var descriptor;

        // If object does not owns property return undefined immediately.
        if (!owns(object, property)) {
            return descriptor;
        }

        // If object has a property then it's for sure `configurable`, and
        // probably `enumerable`. Detect enumerability though.
        descriptor = {
            enumerable: isEnumerable(object, property),
            configurable: true
        };

        // If JS engine supports accessor properties then property may be a
        // getter or setter.
        if (supportsAccessors) {
            // Unfortunately `__lookupGetter__` will return a getter even
            // if object has own non getter property along with a same named
            // inherited getter. To avoid misbehavior we temporary remove
            // `__proto__` so that `__lookupGetter__` will return getter only
            // if it's owned by an object.
            var prototype = object.__proto__;
            var notPrototypeOfObject = object !== prototypeOfObject;
            // avoid recursion problem, breaking in Opera Mini when
            // Object.getOwnPropertyDescriptor(Object.prototype, 'toString')
            // or any other Object.prototype accessor
            if (notPrototypeOfObject) {
                object.__proto__ = prototypeOfObject;
            }

            var getter = lookupGetter(object, property);
            var setter = lookupSetter(object, property);

            if (notPrototypeOfObject) {
                // Once we have getter and setter we can put values back.
                object.__proto__ = prototype;
            }

            if (getter || setter) {
                if (getter) {
                    descriptor.get = getter;
                }
                if (setter) {
                    descriptor.set = setter;
                }
                // If it was accessor property we're done and return here
                // in order to avoid adding `value` to the descriptor.
                return descriptor;
            }
        }

        // If we got this far we know that object has an own property that is
        // not an accessor so we set it as a value and return descriptor.
        descriptor.value = object[property];
        descriptor.writable = true;
        return descriptor;
    };
    /* eslint-enable no-proto */
}

// ES5 15.2.3.4
// http://es5.github.com/#x15.2.3.4
if (!Object.getOwnPropertyNames) {
    Object.getOwnPropertyNames = function getOwnPropertyNames(object) {
        return Object.keys(object);
    };
}

// ES5 15.2.3.5
// http://es5.github.com/#x15.2.3.5
if (!Object.create) {

    // Contributed by Brandon Benvie, October, 2012
    var createEmpty;
    var supportsProto = !({ __proto__: null } instanceof Object);
                        // the following produces false positives
                        // in Opera Mini => not a reliable check
                        // Object.prototype.__proto__ === null

    // Check for document.domain and active x support
    // No need to use active x approach when document.domain is not set
    // see https://github.com/es-shims/es5-shim/issues/150
    // variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
    /* global ActiveXObject */
    var shouldUseActiveX = function shouldUseActiveX() {
        // return early if document.domain not set
        if (!document.domain) {
            return false;
        }

        try {
            return !!new ActiveXObject('htmlfile');
        } catch (exception) {
            return false;
        }
    };

    // This supports IE8 when document.domain is used
    // see https://github.com/es-shims/es5-shim/issues/150
    // variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
    var getEmptyViaActiveX = function getEmptyViaActiveX() {
        var empty;
        var xDoc;

        xDoc = new ActiveXObject('htmlfile');

        xDoc.write('<script><\/script>');
        xDoc.close();

        empty = xDoc.parentWindow.Object.prototype;
        xDoc = null;

        return empty;
    };

    // The original implementation using an iframe
    // before the activex approach was added
    // see https://github.com/es-shims/es5-shim/issues/150
    var getEmptyViaIFrame = function getEmptyViaIFrame() {
        var iframe = document.createElement('iframe');
        var parent = document.body || document.documentElement;
        var empty;

        iframe.style.display = 'none';
        parent.appendChild(iframe);
        /* eslint-disable no-script-url */
        iframe.src = 'javascript:';
        /* eslint-enable no-script-url */

        empty = iframe.contentWindow.Object.prototype;
        parent.removeChild(iframe);
        iframe = null;

        return empty;
    };

    /* global document */
    if (supportsProto || typeof document === 'undefined') {
        createEmpty = function () {
            return { __proto__: null };
        };
    } else {
        // In old IE __proto__ can't be used to manually set `null`, nor does
        // any other method exist to make an object that inherits from nothing,
        // aside from Object.prototype itself. Instead, create a new global
        // object and *steal* its Object.prototype and strip it bare. This is
        // used as the prototype to create nullary objects.
        createEmpty = function () {
            // Determine which approach to use
            // see https://github.com/es-shims/es5-shim/issues/150
            var empty = shouldUseActiveX() ? getEmptyViaActiveX() : getEmptyViaIFrame();

            delete empty.constructor;
            delete empty.hasOwnProperty;
            delete empty.propertyIsEnumerable;
            delete empty.isPrototypeOf;
            delete empty.toLocaleString;
            delete empty.toString;
            delete empty.valueOf;

            var Empty = function Empty() {};
            Empty.prototype = empty;
            // short-circuit future calls
            createEmpty = function () {
                return new Empty();
            };
            return new Empty();
        };
    }

    Object.create = function create(prototype, properties) {

        var object;
        var Type = function Type() {}; // An empty constructor.

        if (prototype === null) {
            object = createEmpty();
        } else {
            if (typeof prototype !== 'object' && typeof prototype !== 'function') {
                // In the native implementation `parent` can be `null`
                // OR *any* `instanceof Object`  (Object|Function|Array|RegExp|etc)
                // Use `typeof` tho, b/c in old IE, DOM elements are not `instanceof Object`
                // like they are in modern browsers. Using `Object.create` on DOM elements
                // is...err...probably inappropriate, but the native version allows for it.
                throw new TypeError('Object prototype may only be an Object or null'); // same msg as Chrome
            }
            Type.prototype = prototype;
            object = new Type();
            // IE has no built-in implementation of `Object.getPrototypeOf`
            // neither `__proto__`, but this manually setting `__proto__` will
            // guarantee that `Object.getPrototypeOf` will work as expected with
            // objects created using `Object.create`
            /* eslint-disable no-proto */
            object.__proto__ = prototype;
            /* eslint-enable no-proto */
        }

        if (properties !== void 0) {
            Object.defineProperties(object, properties);
        }

        return object;
    };
}

// ES5 15.2.3.6
// http://es5.github.com/#x15.2.3.6

// Patch for WebKit and IE8 standard mode
// Designed by hax <hax.github.com>
// related issue: https://github.com/es-shims/es5-shim/issues#issue/5
// IE8 Reference:
//     http://msdn.microsoft.com/en-us/library/dd282900.aspx
//     http://msdn.microsoft.com/en-us/library/dd229916.aspx
// WebKit Bugs:
//     https://bugs.webkit.org/show_bug.cgi?id=36423

var doesDefinePropertyWork = function doesDefinePropertyWork(object) {
    try {
        Object.defineProperty(object, 'sentinel', {});
        return 'sentinel' in object;
    } catch (exception) {
        return false;
    }
};

// check whether defineProperty works if it's given. Otherwise,
// shim partially.
if (Object.defineProperty) {
    var definePropertyWorksOnObject = doesDefinePropertyWork({});
    var definePropertyWorksOnDom = typeof document === 'undefined' ||
        doesDefinePropertyWork(document.createElement('div'));
    if (!definePropertyWorksOnObject || !definePropertyWorksOnDom) {
        var definePropertyFallback = Object.defineProperty,
            definePropertiesFallback = Object.defineProperties;
    }
}

if (!Object.defineProperty || definePropertyFallback) {
    var ERR_NON_OBJECT_DESCRIPTOR = 'Property description must be an object: ';
    var ERR_NON_OBJECT_TARGET = 'Object.defineProperty called on non-object: ';
    var ERR_ACCESSORS_NOT_SUPPORTED = 'getters & setters can not be defined on this javascript engine';

    Object.defineProperty = function defineProperty(object, property, descriptor) {
        if ((typeof object !== 'object' && typeof object !== 'function') || object === null) {
            throw new TypeError(ERR_NON_OBJECT_TARGET + object);
        }
        if ((typeof descriptor !== 'object' && typeof descriptor !== 'function') || descriptor === null) {
            throw new TypeError(ERR_NON_OBJECT_DESCRIPTOR + descriptor);
        }
        // make a valiant attempt to use the real defineProperty
        // for I8's DOM elements.
        if (definePropertyFallback) {
            try {
                return definePropertyFallback.call(Object, object, property, descriptor);
            } catch (exception) {
                // try the shim if the real one doesn't work
            }
        }

        // If it's a data property.
        if ('value' in descriptor) {
            // fail silently if 'writable', 'enumerable', or 'configurable'
            // are requested but not supported
            /*
            // alternate approach:
            if ( // can't implement these features; allow false but not true
                ('writable' in descriptor && !descriptor.writable) ||
                ('enumerable' in descriptor && !descriptor.enumerable) ||
                ('configurable' in descriptor && !descriptor.configurable)
            ))
                throw new RangeError(
                    'This implementation of Object.defineProperty does not support configurable, enumerable, or writable.'
                );
            */

            if (supportsAccessors && (lookupGetter(object, property) || lookupSetter(object, property))) {
                // As accessors are supported only on engines implementing
                // `__proto__` we can safely override `__proto__` while defining
                // a property to make sure that we don't hit an inherited
                // accessor.
                /* eslint-disable no-proto */
                var prototype = object.__proto__;
                object.__proto__ = prototypeOfObject;
                // Deleting a property anyway since getter / setter may be
                // defined on object itself.
                delete object[property];
                object[property] = descriptor.value;
                // Setting original `__proto__` back now.
                object.__proto__ = prototype;
                /* eslint-enable no-proto */
            } else {
                object[property] = descriptor.value;
            }
        } else {
            if (!supportsAccessors && (('get' in descriptor) || ('set' in descriptor))) {
                throw new TypeError(ERR_ACCESSORS_NOT_SUPPORTED);
            }
            // If we got that far then getters and setters can be defined !!
            if ('get' in descriptor) {
                defineGetter(object, property, descriptor.get);
            }
            if ('set' in descriptor) {
                defineSetter(object, property, descriptor.set);
            }
        }
        return object;
    };
}

// ES5 15.2.3.7
// http://es5.github.com/#x15.2.3.7
if (!Object.defineProperties || definePropertiesFallback) {
    Object.defineProperties = function defineProperties(object, properties) {
        // make a valiant attempt to use the real defineProperties
        if (definePropertiesFallback) {
            try {
                return definePropertiesFallback.call(Object, object, properties);
            } catch (exception) {
                // try the shim if the real one doesn't work
            }
        }

        Object.keys(properties).forEach(function (property) {
            if (property !== '__proto__') {
                Object.defineProperty(object, property, properties[property]);
            }
        });
        return object;
    };
}

// ES5 15.2.3.8
// http://es5.github.com/#x15.2.3.8
if (!Object.seal) {
    Object.seal = function seal(object) {
        if (Object(object) !== object) {
            throw new TypeError('Object.seal can only be called on Objects.');
        }
        // this is misleading and breaks feature-detection, but
        // allows "securable" code to "gracefully" degrade to working
        // but insecure code.
        return object;
    };
}

// ES5 15.2.3.9
// http://es5.github.com/#x15.2.3.9
if (!Object.freeze) {
    Object.freeze = function freeze(object) {
        if (Object(object) !== object) {
            throw new TypeError('Object.freeze can only be called on Objects.');
        }
        // this is misleading and breaks feature-detection, but
        // allows "securable" code to "gracefully" degrade to working
        // but insecure code.
        return object;
    };
}

// detect a Rhino bug and patch it
try {
    Object.freeze(function () {});
} catch (exception) {
    Object.freeze = (function (freezeObject) {
        return function freeze(object) {
            if (typeof object === 'function') {
                return object;
            } else {
                return freezeObject(object);
            }
        };
    }(Object.freeze));
}

// ES5 15.2.3.10
// http://es5.github.com/#x15.2.3.10
if (!Object.preventExtensions) {
    Object.preventExtensions = function preventExtensions(object) {
        if (Object(object) !== object) {
            throw new TypeError('Object.preventExtensions can only be called on Objects.');
        }
        // this is misleading and breaks feature-detection, but
        // allows "securable" code to "gracefully" degrade to working
        // but insecure code.
        return object;
    };
}

// ES5 15.2.3.11
// http://es5.github.com/#x15.2.3.11
if (!Object.isSealed) {
    Object.isSealed = function isSealed(object) {
        if (Object(object) !== object) {
            throw new TypeError('Object.isSealed can only be called on Objects.');
        }
        return false;
    };
}

// ES5 15.2.3.12
// http://es5.github.com/#x15.2.3.12
if (!Object.isFrozen) {
    Object.isFrozen = function isFrozen(object) {
        if (Object(object) !== object) {
            throw new TypeError('Object.isFrozen can only be called on Objects.');
        }
        return false;
    };
}

// ES5 15.2.3.13
// http://es5.github.com/#x15.2.3.13
if (!Object.isExtensible) {
    Object.isExtensible = function isExtensible(object) {
        // 1. If Type(O) is not Object throw a TypeError exception.
        if (Object(object) !== object) {
            throw new TypeError('Object.isExtensible can only be called on Objects.');
        }
        // 2. Return the Boolean value of the [[Extensible]] internal property of O.
        var name = '';
        while (owns(object, name)) {
            name += '?';
        }
        object[name] = true;
        var returnValue = owns(object, name);
        delete object[name];
        return returnValue;
    };
}

}));

}());
(function () {
/**
 * @license
 * lodash 4.0.0 (Custom Build) <https://lodash.com/>
 * Build: `lodash core -o ./dist/lodash.core.js`
 * Copyright 2012-2016 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2016 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */
;(function() {

    /** Used as a safe reference for `undefined` in pre-ES5 environments. */
    var undefined;

    /** Used as the semantic version number. */
    var VERSION = '4.0.0';

    /** Used to compose bitmasks for wrapper metadata. */
    var BIND_FLAG = 1,
        PARTIAL_FLAG = 32;

    /** Used to compose bitmasks for comparison styles. */
    var UNORDERED_COMPARE_FLAG = 1,
        PARTIAL_COMPARE_FLAG = 2;

    /** Used as the `TypeError` message for "Functions" methods. */
    var FUNC_ERROR_TEXT = 'Expected a function';

    /** Used as references for various `Number` constants. */
    var MAX_SAFE_INTEGER = 9007199254740991;

    /** `Object#toString` result references. */
    var argsTag = '[object Arguments]',
        arrayTag = '[object Array]',
        boolTag = '[object Boolean]',
        dateTag = '[object Date]',
        errorTag = '[object Error]',
        funcTag = '[object Function]',
        genTag = '[object GeneratorFunction]',
        numberTag = '[object Number]',
        objectTag = '[object Object]',
        regexpTag = '[object RegExp]',
        stringTag = '[object String]';

    /** Used to match HTML entities and HTML characters. */
    var reUnescapedHtml = /[&<>"'`]/g,
        reHasUnescapedHtml = RegExp(reUnescapedHtml.source);

    /** Used to detect unsigned integer values. */
    var reIsUint = /^(?:0|[1-9]\d*)$/;

    /** Used to map characters to HTML entities. */
    var htmlEscapes = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;',
        '`': '&#96;'
    };

    /** Used to determine if values are of the language type `Object`. */
    var objectTypes = {
        'function': true,
        'object': true
    };

    /** Detect free variable `exports`. */
    var freeExports = (objectTypes[typeof exports] && exports && !exports.nodeType) ? exports : null;

    /** Detect free variable `module`. */
    var freeModule = (objectTypes[typeof module] && module && !module.nodeType) ? module : null;

    /** Detect free variable `global` from Node.js. */
    var freeGlobal = checkGlobal(freeExports && freeModule && typeof global == 'object' && global);

    /** Detect free variable `self`. */
    var freeSelf = checkGlobal(objectTypes[typeof self] && self);

    /** Detect free variable `window`. */
    var freeWindow = checkGlobal(objectTypes[typeof window] && window);

    /** Detect the popular CommonJS extension `module.exports`. */
    var moduleExports = (freeModule && freeModule.exports === freeExports) ? freeExports : null;

    /** Detect `this` as the global object. */
    var thisGlobal = checkGlobal(objectTypes[typeof this] && this);

    /**
     * Used as a reference to the global object.
     *
     * The `this` value is used if it's the global object to avoid Greasemonkey's
     * restricted `window` object, otherwise the `window` object is used.
     */
    var root = freeGlobal || ((freeWindow !== (thisGlobal && thisGlobal.window)) && freeWindow) || freeSelf || thisGlobal || Function('return this')();

    /*--------------------------------------------------------------------------*/

    /**
     * Creates a new array concatenating `array` with `other`.
     *
     * @private
     * @param {Array} array The first array to concatenate.
     * @param {Array} other The second array to concatenate.
     * @returns {Array} Returns the new concatenated array.
     */
    function arrayConcat(array, other) {
        return arrayPush(copyArray(array), values);
    }

    /**
     * Appends the elements of `values` to `array`.
     *
     * @private
     * @param {Array} array The array to modify.
     * @param {Array} values The values to append.
     * @returns {Array} Returns `array`.
     */
    function arrayPush(array, values) {
        var index = -1,
            length = values.length,
            offset = array.length;

        while (++index < length) {
            array[offset + index] = values[index];
        }
        return array;
    }

    /**
     * The base implementation of methods like `_.max` and `_.min` which accepts a
     * `comparator` to determine the extremum value.
     *
     * @private
     * @param {Array} array The array to iterate over.
     * @param {Function} iteratee The iteratee invoked per iteration.
     * @param {Function} comparator The comparator used to compare values.
     * @returns {*} Returns the extremum value.
     */
    function baseExtremum(array, iteratee, comparator) {
        var index = -1,
            length = array.length;

        while (++index < length) {
            var value = array[index],
                current = iteratee(value);

            if (current != null && (computed === undefined
                        ? current === current
                        : comparator(current, computed)
                )) {
                var computed = current,
                    result = value;
            }
        }
        return result;
    }

    /**
     * The base implementation of methods like `_.find` and `_.findKey`, without
     * support for iteratee shorthands, which iterates over `collection` using
     * the provided `eachFunc`.
     *
     * @private
     * @param {Array|Object} collection The collection to search.
     * @param {Function} predicate The function invoked per iteration.
     * @param {Function} eachFunc The function to iterate over `collection`.
     * @param {boolean} [retKey] Specify returning the key of the found element instead of the element itself.
     * @returns {*} Returns the found element or its key, else `undefined`.
     */
    function baseFind(collection, predicate, eachFunc, retKey) {
        var result;
        eachFunc(collection, function(value, key, collection) {
            if (predicate(value, key, collection)) {
                result = retKey ? key : value;
                return false;
            }
        });
        return result;
    }

    /**
     * The base implementation of `_.reduce` and `_.reduceRight`, without support
     * for iteratee shorthands, which iterates over `collection` using the provided
     * `eachFunc`.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @param {*} accumulator The initial value.
     * @param {boolean} initFromCollection Specify using the first or last element of `collection` as the initial value.
     * @param {Function} eachFunc The function to iterate over `collection`.
     * @returns {*} Returns the accumulated value.
     */
    function baseReduce(collection, iteratee, accumulator, initFromCollection, eachFunc) {
        eachFunc(collection, function(value, index, collection) {
            accumulator = initFromCollection
                ? (initFromCollection = false, value)
                : iteratee(accumulator, value, index, collection);
        });
        return accumulator;
    }

    /**
     * The base implementation of `_.times` without support for iteratee shorthands
     * or max array length checks.
     *
     * @private
     * @param {number} n The number of times to invoke `iteratee`.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Array} Returns the array of results.
     */
    function baseTimes(n, iteratee) {
        var index = -1,
            result = Array(n);

        while (++index < n) {
            result[index] = iteratee(index);
        }
        return result;
    }

    /**
     * The base implementation of `_.values` and `_.valuesIn` which creates an
     * array of `object` property values corresponding to the property names
     * of `props`.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Array} props The property names to get values for.
     * @returns {Object} Returns the array of property values.
     */
    function baseValues(object, props) {
        return baseMap(props, function(key) {
            return object[key];
        });
    }

    /**
     * Checks if `value` is a global object.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {null|Object} Returns `value` if it's a global object, else `null`.
     */
    function checkGlobal(value) {
        return (value && value.Object === Object) ? value : null;
    }

    /**
     * Compares values to sort them in ascending order.
     *
     * @private
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {number} Returns the sort order indicator for `value`.
     */
    function compareAscending(value, other) {
        if (value !== other) {
            var valIsNull = value === null,
                valIsUndef = value === undefined,
                valIsReflexive = value === value;

            var othIsNull = other === null,
                othIsUndef = other === undefined,
                othIsReflexive = other === other;

            if ((value > other && !othIsNull) || !valIsReflexive ||
                (valIsNull && !othIsUndef && othIsReflexive) ||
                (valIsUndef && othIsReflexive)) {
                return 1;
            }
            if ((value < other && !valIsNull) || !othIsReflexive ||
                (othIsNull && !valIsUndef && valIsReflexive) ||
                (othIsUndef && valIsReflexive)) {
                return -1;
            }
        }
        return 0;
    }

    /**
     * Used by `_.escape` to convert characters to HTML entities.
     *
     * @private
     * @param {string} chr The matched character to escape.
     * @returns {string} Returns the escaped character.
     */
    function escapeHtmlChar(chr) {
        return htmlEscapes[chr];
    }

    /**
     * Checks if `value` is a host object in IE < 9.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
     */
    function isHostObject(value) {
        // Many host objects are `Object` objects that can coerce to strings
        // despite having improperly defined `toString` methods.
        var result = false;
        if (value != null && typeof value.toString != 'function') {
            try {
                result = !!(value + '');
            } catch (e) {}
        }
        return result;
    }

    /**
     * Checks if `value` is a valid array-like index.
     *
     * @private
     * @param {*} value The value to check.
     * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
     * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
     */
    function isIndex(value, length) {
        value = (typeof value == 'number' || reIsUint.test(value)) ? +value : -1;
        length = length == null ? MAX_SAFE_INTEGER : length;
        return value > -1 && value % 1 == 0 && value < length;
    }

    /**
     * Converts `iterator` to an array.
     *
     * @private
     * @param {Object} iterator The iterator to convert.
     * @returns {Array} Returns the converted array.
     */
    function iteratorToArray(iterator) {
        var data,
            result = [];

        while (!(data = iterator.next()).done) {
            result.push(data.value);
        }
        return result;
    }

    /*--------------------------------------------------------------------------*/

    /** Used for built-in method references. */
    var arrayProto = Array.prototype,
        objectProto = Object.prototype;

    /** Used to check objects for own properties. */
    var hasOwnProperty = objectProto.hasOwnProperty;

    /** Used to generate unique IDs. */
    var idCounter = 0;

    /**
     * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
     * of values.
     */
    var objectToString = objectProto.toString;

    /** Used to restore the original `_` reference in `_.noConflict`. */
    var oldDash = root._;

    /** Built-in value references. */
    var _Symbol = root.Symbol,
        Reflect = root.Reflect,
        Uint8Array = root.Uint8Array,
        enumerate = Reflect ? Reflect.enumerate : undefined,
        propertyIsEnumerable = objectProto.propertyIsEnumerable;

    /* Built-in method references for those with the same name as other `lodash` methods. */
    var nativeIsFinite = root.isFinite,
        nativeKeys = Object.keys,
        nativeMax = Math.max;

    /*------------------------------------------------------------------------*/

    /**
     * Creates a `lodash` object which wraps `value` to enable implicit method
     * chaining. Methods that operate on and return arrays, collections, and
     * functions can be chained together. Methods that retrieve a single value or
     * may return a primitive value will automatically end the chain sequence and
     * return the unwrapped value. Otherwise, the value must be unwrapped with
     * `_#value`.
     *
     * Explicit chaining, which must be unwrapped with `_#value` in all cases,
     * may be enabled using `_.chain`.
     *
     * The execution of chained methods is lazy, that is, it's deferred until
     * `_#value` is implicitly or explicitly called.
     *
     * Lazy evaluation allows several methods to support shortcut fusion. Shortcut
     * fusion is an optimization to merge iteratee calls; this avoids the creation
     * of intermediate arrays and can greatly reduce the number of iteratee executions.
     * Sections of a chain sequence qualify for shortcut fusion if the section is
     * applied to an array of at least two hundred elements and any iteratees
     * accept only one argument. The heuristic for whether a section qualifies
     * for shortcut fusion is subject to change.
     *
     * Chaining is supported in custom builds as long as the `_#value` method is
     * directly or indirectly included in the build.
     *
     * In addition to lodash methods, wrappers have `Array` and `String` methods.
     *
     * The wrapper `Array` methods are:
     * `concat`, `join`, `pop`, `push`, `shift`, `sort`, `splice`, and `unshift`
     *
     * The wrapper `String` methods are:
     * `replace` and `split`
     *
     * The wrapper methods that support shortcut fusion are:
     * `at`, `compact`, `drop`, `dropRight`, `dropWhile`, `filter`, `find`,
     * `findLast`, `head`, `initial`, `last`, `map`, `reject`, `reverse`, `slice`,
     * `tail`, `take`, `takeRight`, `takeRightWhile`, `takeWhile`, and `toArray`
     *
     * The chainable wrapper methods are:
     * `after`, `ary`, `assign`, `assignIn`, `assignInWith`, `assignWith`,
     * `at`, `before`, `bind`, `bindAll`, `bindKey`, `chain`, `chunk`, `commit`,
     * `compact`, `concat`, `conforms`,  `constant`, `countBy`, `create`, `curry`,
     * `debounce`, `defaults`, `defaultsDeep`, `defer`, `delay`, `difference`,
     * `differenceBy`, `differenceWith`,  `drop`, `dropRight`, `dropRightWhile`,
     * `dropWhile`, `fill`, `filter`, `flatten`, `flattenDeep`, `flip`, `flow`,
     * `flowRight`, `forEach`, `forEachRight`, `forIn`, `forInRight`, `forOwn`,
     * `forOwnRight`, `fromPairs`, `functions`, `functionsIn`, `groupBy`, `initial`,
     * `intersection`, `intersectionBy`, `intersectionWith`, invert`, `invokeMap`,
     * `iteratee`, `keyBy`, `keys`, `keysIn`, `map`, `mapKeys`, `mapValues`,
     * `matches`, `matchesProperty`, `memoize`, `merge`, `mergeWith`, `method`,
     * `methodOf`, `mixin`, `negate`, `nthArg`, `omit`, `omitBy`, `once`, `orderBy`,
     * `over`, `overArgs`, `overEvery`, `overSome`, `partial`, `partialRight`,
     * `partition`, `pick`, `pickBy`, `plant`, `property`, `propertyOf`, `pull`,
     * `pullAll`, `pullAllBy`, `pullAt`, `push`, `range`, `rangeRight`, `rearg`,
     * `reject`, `remove`, `rest`, `reverse`, `sampleSize`, `set`, `setWith`,
     * `shuffle`, `slice`, `sort`, `sortBy`, `splice`, `spread`, `tail`, `take`,
     * `takeRight`, `takeRightWhile`, `takeWhile`, `tap`, `throttle`, `thru`,
     * `toArray`, `toPairs`, `toPairsIn`, `toPath`, `toPlainObject`, `transform`,
     * `unary`, `union`, `unionBy`, `unionWith`, `uniq`, `uniqBy`, `uniqWith`,
     * `unset`, `unshift`, `unzip`, `unzipWith`, `values`, `valuesIn`, `without`,
     * `wrap`, `xor`, `xorBy`, `xorWith`, `zip`, `zipObject`, and `zipWith`
     *
     * The wrapper methods that are **not** chainable by default are:
     * `add`, `attempt`, `camelCase`, `capitalize`, `ceil`, `clamp`, `clone`,
     * `cloneDeep`, `cloneDeepWith`, `cloneWith`, `deburr`, `endsWith`, `eq`,
     * `escape`, `escapeRegExp`, `every`, `find`, `findIndex`, `findKey`,
     * `findLast`, `findLastIndex`, `findLastKey`, `floor`, `get`, `gt`, `gte`,
     * `has`, `hasIn`, `head`, `identity`, `includes`, `indexOf`, `inRange`,
     * `invoke`, `isArguments`, `isArray`, `isArrayLike`, `isArrayLikeObject`,
     * `isBoolean`, `isDate`, `isElement`, `isEmpty`, `isEqual`, `isEqualWith`,
     * `isError`, `isFinite`, `isFunction`, `isInteger`, `isLength`, `isMatch`,
     * `isMatchWith`, `isNaN`, `isNative`, `isNil`, `isNull`, `isNumber`,
     * `isObject`, `isObjectLike`, `isPlainObject`, `isRegExp`, `isSafeInteger`,
     * `isString`, `isUndefined`, `isTypedArray`, `join`, `kebabCase`, `last`,
     * `lastIndexOf`, `lowerCase`, `lowerFirst`, `lt`, `lte`, `max`, `maxBy`,
     * `mean`, `min`, `minBy`, `noConflict`, `noop`, `now`, `pad`, `padEnd`,
     * `padStart`, `parseInt`, `pop`, `random`, `reduce`, `reduceRight`, `repeat`,
     * `result`, `round`, `runInContext`, `sample`, `shift`, `size`, `snakeCase`,
     * `some`, `sortedIndex`, `sortedIndexBy`, `sortedLastIndex`, `sortedLastIndexBy`,
     * `startCase`, `startsWith`, `subtract`, `sum`, sumBy`, `template`, `times`,
     * `toLower`, `toInteger`, `toLength`, `toNumber`, `toSafeInteger`, toString`,
     * `toUpper`, `trim`, `trimEnd`, `trimStart`, `truncate`, `unescape`, `uniqueId`,
     * `upperCase`, `upperFirst`, `value`, and `words`
     *
     * @name _
     * @constructor
     * @category Seq
     * @param {*} value The value to wrap in a `lodash` instance.
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * function square(n) {
   *   return n * n;
   * }
     *
     * var wrapped = _([1, 2, 3]);
     *
     * // returns an unwrapped value
     * wrapped.reduce(_.add);
     * // => 6
     *
     * // returns a wrapped value
     * var squares = wrapped.map(square);
     *
     * _.isArray(squares);
     * // => false
     *
     * _.isArray(squares.value());
     * // => true
     */
    function lodash(value) {
        if (isObjectLike(value) && !isArray(value)) {
            if (value instanceof LodashWrapper) {
                return value;
            }
            if (hasOwnProperty.call(value, '__wrapped__')) {
                return wrapperClone(value);
            }
        }
        return new LodashWrapper(value);
    }

    /**
     * The base constructor for creating `lodash` wrapper objects.
     *
     * @private
     * @param {*} value The value to wrap.
     * @param {boolean} [chainAll] Enable chaining for all wrapper methods.
     */
    function LodashWrapper(value, chainAll) {
        this.__wrapped__ = value;
        this.__actions__ = [];
        this.__chain__ = !!chainAll;
    }

    /*------------------------------------------------------------------------*/

    /**
     * Used by `_.defaults` to customize its `_.assignIn` use.
     *
     * @private
     * @param {*} objValue The destination value.
     * @param {*} srcValue The source value.
     * @param {string} key The key of the property to assign.
     * @param {Object} object The parent object of `objValue`.
     * @returns {*} Returns the value to assign.
     */
    function assignInDefaults(objValue, srcValue, key, object) {
        if (objValue === undefined ||
            (eq(objValue, objectProto[key]) && !hasOwnProperty.call(object, key))) {
            return srcValue;
        }
        return objValue;
    }

    /**
     * Assigns `value` to `key` of `object` if the existing value is not equivalent
     * using [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
     * for equality comparisons.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {string} key The key of the property to assign.
     * @param {*} value The value to assign.
     */
    function assignValue(object, key, value) {
        var objValue = object[key];
        if ((!eq(objValue, value) ||
            (eq(objValue, objectProto[key]) && !hasOwnProperty.call(object, key))) ||
            (value === undefined && !(key in object))) {
            object[key] = value;
        }
    }

    /**
     * The base implementation of `_.create` without support for assigning
     * properties to the created object.
     *
     * @private
     * @param {Object} prototype The object to inherit from.
     * @returns {Object} Returns the new object.
     */
    var baseCreate = (function() {
        function object() {}
        return function(prototype) {
            if (isObject(prototype)) {
                object.prototype = prototype;
                var result = new object;
                object.prototype = undefined;
            }
            return result || {};
        };
    }());

    /**
     * The base implementation of `_.delay` and `_.defer` which accepts an array
     * of `func` arguments.
     *
     * @private
     * @param {Function} func The function to delay.
     * @param {number} wait The number of milliseconds to delay invocation.
     * @param {Object} args The arguments provide to `func`.
     * @returns {number} Returns the timer id.
     */
    function baseDelay(func, wait, args) {
        if (typeof func != 'function') {
            throw new TypeError(FUNC_ERROR_TEXT);
        }
        return setTimeout(function() { func.apply(undefined, args); }, wait);
    }

    /**
     * The base implementation of `_.forEach` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Array|Object} Returns `collection`.
     */
    var baseEach = createBaseEach(baseForOwn);

    /**
     * The base implementation of `_.every` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} predicate The function invoked per iteration.
     * @returns {boolean} Returns `true` if all elements pass the predicate check, else `false`
     */
    function baseEvery(collection, predicate) {
        var result = true;
        baseEach(collection, function(value, index, collection) {
            result = !!predicate(value, index, collection);
            return result;
        });
        return result;
    }

    /**
     * The base implementation of `_.filter` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} predicate The function invoked per iteration.
     * @returns {Array} Returns the new filtered array.
     */
    function baseFilter(collection, predicate) {
        var result = [];
        baseEach(collection, function(value, index, collection) {
            if (predicate(value, index, collection)) {
                result.push(value);
            }
        });
        return result;
    }

    /**
     * The base implementation of `_.flatten` with support for restricting flattening.
     *
     * @private
     * @param {Array} array The array to flatten.
     * @param {boolean} [isDeep] Specify a deep flatten.
     * @param {boolean} [isStrict] Restrict flattening to arrays-like objects.
     * @param {Array} [result=[]] The initial result value.
     * @returns {Array} Returns the new flattened array.
     */
    function baseFlatten(array, isDeep, isStrict, result) {
        result || (result = []);

        var index = -1,
            length = array.length;

        while (++index < length) {
            var value = array[index];
            if (isArrayLikeObject(value) &&
                (isStrict || isArray(value) || isArguments(value))) {
                if (isDeep) {
                    // Recursively flatten arrays (susceptible to call stack limits).
                    baseFlatten(value, isDeep, isStrict, result);
                } else {
                    arrayPush(result, value);
                }
            } else if (!isStrict) {
                result[result.length] = value;
            }
        }
        return result;
    }

    /**
     * The base implementation of `baseForIn` and `baseForOwn` which iterates
     * over `object` properties returned by `keysFunc` invoking `iteratee` for
     * each property. Iteratee functions may exit iteration early by explicitly
     * returning `false`.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @param {Function} keysFunc The function to get the keys of `object`.
     * @returns {Object} Returns `object`.
     */
    var baseFor = createBaseFor();

    /**
     * The base implementation of `_.forOwn` without support for iteratee shorthands.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Object} Returns `object`.
     */
    function baseForOwn(object, iteratee) {
        return object && baseFor(object, iteratee, keys);
    }

    /**
     * The base implementation of `_.functions` which creates an array of
     * `object` function property names filtered from those provided.
     *
     * @private
     * @param {Object} object The object to inspect.
     * @param {Array} props The property names to filter.
     * @returns {Array} Returns the new array of filtered property names.
     */
    function baseFunctions(object, props) {
        return baseFilter(props, function(key) {
            return isFunction(object[key]);
        });
    }

    /**
     * The base implementation of `_.isEqual` which supports partial comparisons
     * and tracks traversed objects.
     *
     * @private
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @param {Function} [customizer] The function to customize comparisons.
     * @param {boolean} [bitmask] The bitmask of comparison flags.
     *  The bitmask may be composed of the following flags:
     *     1 - Unordered comparison
     *     2 - Partial comparison
     * @param {Object} [stack] Tracks traversed `value` and `other` objects.
     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
     */
    function baseIsEqual(value, other, customizer, bitmask, stack) {
        if (value === other) {
            return true;
        }
        if (value == null || other == null || (!isObject(value) && !isObjectLike(other))) {
            return value !== value && other !== other;
        }
        return baseIsEqualDeep(value, other, baseIsEqual, customizer, bitmask, stack);
    }

    /**
     * A specialized version of `baseIsEqual` for arrays and objects which performs
     * deep comparisons and tracks traversed objects enabling objects with circular
     * references to be compared.
     *
     * @private
     * @param {Object} object The object to compare.
     * @param {Object} other The other object to compare.
     * @param {Function} equalFunc The function to determine equivalents of values.
     * @param {Function} [customizer] The function to customize comparisons.
     * @param {number} [bitmask] The bitmask of comparison flags. See `baseIsEqual` for more details.
     * @param {Object} [stack] Tracks traversed `object` and `other` objects.
     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
     */
    function baseIsEqualDeep(object, other, equalFunc, customizer, bitmask, stack) {
        var objIsArr = isArray(object),
            othIsArr = isArray(other),
            objTag = arrayTag,
            othTag = arrayTag;

        if (!objIsArr) {
            objTag = objectToString.call(object);
            if (objTag == argsTag) {
                objTag = objectTag;
            }
        }
        if (!othIsArr) {
            othTag = objectToString.call(other);
            if (othTag == argsTag) {
                othTag = objectTag;
            }
        }
        var objIsObj = objTag == objectTag && !isHostObject(object),
            othIsObj = othTag == objectTag && !isHostObject(other),
            isSameTag = objTag == othTag;

        if (isSameTag && !(objIsArr || objIsObj)) {
            return equalByTag(object, other, objTag, equalFunc, customizer, bitmask);
        }
        var isPartial = bitmask & PARTIAL_COMPARE_FLAG;
        if (!isPartial) {
            var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
                othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

            if (objIsWrapped || othIsWrapped) {
                return equalFunc(objIsWrapped ? object.value() : object, othIsWrapped ? other.value() : other, customizer, bitmask, stack);
            }
        }
        if (!isSameTag) {
            return false;
        }
        stack || (stack = []);
        var stacked = find(stack, function(entry) {
            return entry[0] === object;
        });
        if (stacked && stacked[1]) {
            return stacked[1] == other;
        }
        stack.push([object, other]);
        var result =  (objIsArr ? equalArrays : equalObjects)(object, other, equalFunc, customizer, bitmask, stack);
        stack.pop();
        return result;
    }

    /**
     * The base implementation of `_.iteratee`.
     *
     * @private
     * @param {*} [value=_.identity] The value to convert to an iteratee.
     * @returns {Function} Returns the iteratee.
     */
    function baseIteratee(func) {
        var type = typeof func;
        if (type == 'function') {
            return func;
        }
        return func == null
            ? identity
            : (type == 'object' ? baseMatches : baseProperty)(func);
    }

    /**
     * The base implementation of `_.keys` which doesn't skip the constructor
     * property of prototypes or treat sparse arrays as dense.
     *
     * @private
     * @type Function
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     */
    function baseKeys(object) {
        return nativeKeys(Object(object));
    }

    /**
     * The base implementation of `_.keysIn` which doesn't skip the constructor
     * property of prototypes or treat sparse arrays as dense.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     */
    function baseKeysIn(object) {
        object = object == null ? object : Object(object);

        var result = [];
        for (var key in object) {
            result.push(key);
        }
        return result;
    }

    // Fallback for IE < 9 with es6-shim.
    if (enumerate && !propertyIsEnumerable.call({ 'valueOf': 1 }, 'valueOf')) {
        baseKeysIn = function(object) {
            return iteratorToArray(enumerate(object));
        };
    }

    /**
     * The base implementation of `_.map` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Array} Returns the new mapped array.
     */
    function baseMap(collection, iteratee) {
        var index = -1,
            result = isArrayLike(collection) ? Array(collection.length) : [];

        baseEach(collection, function(value, key, collection) {
            result[++index] = iteratee(value, key, collection);
        });
        return result;
    }

    /**
     * The base implementation of `_.matches` which doesn't clone `source`.
     *
     * @private
     * @param {Object} source The object of property values to match.
     * @returns {Function} Returns the new function.
     */
    function baseMatches(source) {
        var props = keys(source),
            length = props.length;

        return function(object) {
            if (object == null) {
                return !length;
            }
            object = Object(object);
            while (length--) {
                var key = props[length];
                if (!(key in object && baseIsEqual(source[key], object[key], undefined, true))) {
                    return false;
                }
            }
            return true;
        };
    }

    /**
     * The base implementation of `_.pick` without support for individual
     * property names.
     *
     * @private
     * @param {Object} object The source object.
     * @param {string[]} props The property names to pick.
     * @returns {Object} Returns the new object.
     */
    function basePick(object, props) {
        object = Object(object);
        return reduce(props, function(result, key) {
            if (key in object) {
                result[key] = object[key];
            }
            return result;
        }, {});
    }

    /**
     * The base implementation of `_.property` without support for deep paths.
     *
     * @private
     * @param {string} key The key of the property to get.
     * @returns {Function} Returns the new function.
     */
    function baseProperty(key) {
        return function(object) {
            return object == null ? undefined : object[key];
        };
    }

    /**
     * The base implementation of `_.slice` without an iteratee call guard.
     *
     * @private
     * @param {Array} array The array to slice.
     * @param {number} [start=0] The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns the slice of `array`.
     */
    function baseSlice(array, start, end) {
        var index = -1,
            length = array.length;

        if (start < 0) {
            start = -start > length ? 0 : (length + start);
        }
        end = end > length ? length : end;
        if (end < 0) {
            end += length;
        }
        length = start > end ? 0 : ((end - start) >>> 0);
        start >>>= 0;

        var result = Array(length);
        while (++index < length) {
            result[index] = array[index + start];
        }
        return result;
    }

    /**
     * Copies the values of `source` to `array`.
     *
     * @private
     * @param {Array} source The array to copy values from.
     * @param {Array} [array=[]] The array to copy values to.
     * @returns {Array} Returns `array`.
     */
    function copyArray(source) {
        return baseSlice(source, 0, source.length);
    }

    /**
     * The base implementation of `_.some` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} predicate The function invoked per iteration.
     * @returns {boolean} Returns `true` if any element passes the predicate check, else `false`.
     */
    function baseSome(collection, predicate) {
        var result;

        baseEach(collection, function(value, index, collection) {
            result = predicate(value, index, collection);
            return !result;
        });
        return !!result;
    }

    /**
     * The base implementation of `wrapperValue` which returns the result of
     * performing a sequence of actions on the unwrapped `value`, where each
     * successive action is supplied the return value of the previous.
     *
     * @private
     * @param {*} value The unwrapped value.
     * @param {Array} actions Actions to perform to resolve the unwrapped value.
     * @returns {*} Returns the resolved value.
     */
    function baseWrapperValue(value, actions) {
        var result = value;
        return reduce(actions, function(result, action) {
            return action.func.apply(action.thisArg, arrayPush([result], action.args));
        }, result);
    }

    /**
     * Copies properties of `source` to `object`.
     *
     * @private
     * @param {Object} source The object to copy properties from.
     * @param {Array} props The property names to copy.
     * @param {Object} [object={}] The object to copy properties to.
     * @returns {Object} Returns `object`.
     */
    var copyObject = copyObjectWith;

    /**
     * This function is like `copyObject` except that it accepts a function to
     * customize copied values.
     *
     * @private
     * @param {Object} source The object to copy properties from.
     * @param {Array} props The property names to copy.
     * @param {Object} [object={}] The object to copy properties to.
     * @param {Function} [customizer] The function to customize copied values.
     * @returns {Object} Returns `object`.
     */
    function copyObjectWith(source, props, object, customizer) {
        object || (object = {});

        var index = -1,
            length = props.length;

        while (++index < length) {
            var key = props[index],
                newValue = customizer ? customizer(object[key], source[key], key, object, source) : source[key];

            assignValue(object, key, newValue);
        }
        return object;
    }

    /**
     * Creates a function like `_.assign`.
     *
     * @private
     * @param {Function} assigner The function to assign values.
     * @returns {Function} Returns the new assigner function.
     */
    function createAssigner(assigner) {
        return rest(function(object, sources) {
            var index = -1,
                length = sources.length,
                customizer = length > 1 ? sources[length - 1] : undefined;

            customizer = typeof customizer == 'function' ? (length--, customizer) : undefined;
            object = Object(object);
            while (++index < length) {
                var source = sources[index];
                if (source) {
                    assigner(object, source, customizer);
                }
            }
            return object;
        });
    }

    /**
     * Creates a `baseEach` or `baseEachRight` function.
     *
     * @private
     * @param {Function} eachFunc The function to iterate over a collection.
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Function} Returns the new base function.
     */
    function createBaseEach(eachFunc, fromRight) {
        return function(collection, iteratee) {
            if (collection == null) {
                return collection;
            }
            if (!isArrayLike(collection)) {
                return eachFunc(collection, iteratee);
            }
            var length = collection.length,
                index = fromRight ? length : -1,
                iterable = Object(collection);

            while ((fromRight ? index-- : ++index < length)) {
                if (iteratee(iterable[index], index, iterable) === false) {
                    break;
                }
            }
            return collection;
        };
    }

    /**
     * Creates a base function for methods like `_.forIn`.
     *
     * @private
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Function} Returns the new base function.
     */
    function createBaseFor(fromRight) {
        return function(object, iteratee, keysFunc) {
            var index = -1,
                iterable = Object(object),
                props = keysFunc(object),
                length = props.length;

            while (length--) {
                var key = props[fromRight ? length : ++index];
                if (iteratee(iterable[key], key, iterable) === false) {
                    break;
                }
            }
            return object;
        };
    }

    /**
     * Creates a function that produces an instance of `Ctor` regardless of
     * whether it was invoked as part of a `new` expression or by `call` or `apply`.
     *
     * @private
     * @param {Function} Ctor The constructor to wrap.
     * @returns {Function} Returns the new wrapped function.
     */
    function createCtorWrapper(Ctor) {
        return function() {
            // Use a `switch` statement to work with class constructors.
            // See http://ecma-international.org/ecma-262/6.0/#sec-ecmascript-function-objects-call-thisargument-argumentslist
            // for more details.
            var args = arguments;
            var thisBinding = baseCreate(Ctor.prototype),
                result = Ctor.apply(thisBinding, args);

            // Mimic the constructor's `return` behavior.
            // See https://es5.github.io/#x13.2.2 for more details.
            return isObject(result) ? result : thisBinding;
        };
    }

    /**
     * Creates a function that wraps `func` to invoke it with the optional `this`
     * binding of `thisArg` and the `partials` prepended to those provided to
     * the wrapper.
     *
     * @private
     * @param {Function} func The function to wrap.
     * @param {number} bitmask The bitmask of wrapper flags. See `createWrapper` for more details.
     * @param {*} thisArg The `this` binding of `func`.
     * @param {Array} partials The arguments to prepend to those provided to the new function.
     * @returns {Function} Returns the new wrapped function.
     */
    function createPartialWrapper(func, bitmask, thisArg, partials) {
        if (typeof func != 'function') {
            throw new TypeError(FUNC_ERROR_TEXT);
        }
        var isBind = bitmask & BIND_FLAG,
            Ctor = createCtorWrapper(func);

        function wrapper() {
            var argsIndex = -1,
                argsLength = arguments.length,
                leftIndex = -1,
                leftLength = partials.length,
                args = Array(leftLength + argsLength),
                fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;

            while (++leftIndex < leftLength) {
                args[leftIndex] = partials[leftIndex];
            }
            while (argsLength--) {
                args[leftIndex++] = arguments[++argsIndex];
            }
            return fn.apply(isBind ? thisArg : this, args);
        }
        return wrapper;
    }

    /**
     * A specialized version of `baseIsEqualDeep` for arrays with support for
     * partial deep comparisons.
     *
     * @private
     * @param {Array} array The array to compare.
     * @param {Array} other The other array to compare.
     * @param {Function} equalFunc The function to determine equivalents of values.
     * @param {Function} [customizer] The function to customize comparisons.
     * @param {number} [bitmask] The bitmask of comparison flags. See `baseIsEqual` for more details.
     * @param {Object} [stack] Tracks traversed `array` and `other` objects.
     * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
     */
    function equalArrays(array, other, equalFunc, customizer, bitmask, stack) {
        var index = -1,
            isPartial = bitmask & PARTIAL_COMPARE_FLAG,
            isUnordered = bitmask & UNORDERED_COMPARE_FLAG,
            arrLength = array.length,
            othLength = other.length;

        if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
            return false;
        }
        var result = true;

        // Ignore non-index properties.
        while (++index < arrLength) {
            var arrValue = array[index],
                othValue = other[index];

            var compared;
            if (compared !== undefined) {
                if (compared) {
                    continue;
                }
                result = false;
                break;
            }
            // Recursively compare arrays (susceptible to call stack limits).
            if (isUnordered) {
                if (!baseSome(other, function(othValue) {
                        return arrValue === othValue || equalFunc(arrValue, othValue, customizer, bitmask, stack);
                    })) {
                    result = false;
                    break;
                }
            } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, customizer, bitmask, stack))) {
                result = false;
                break;
            }
        }
        return result;
    }

    /**
     * A specialized version of `baseIsEqualDeep` for comparing objects of
     * the same `toStringTag`.
     *
     * **Note:** This function only supports comparing values with tags of
     * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
     *
     * @private
     * @param {Object} object The object to compare.
     * @param {Object} other The other object to compare.
     * @param {string} tag The `toStringTag` of the objects to compare.
     * @param {Function} equalFunc The function to determine equivalents of values.
     * @param {Function} [customizer] The function to customize comparisons.
     * @param {number} [bitmask] The bitmask of comparison flags. See `baseIsEqual` for more details.
     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
     */
    function equalByTag(object, other, tag, equalFunc, customizer, bitmask) {
        switch (tag) {

            case boolTag:
            case dateTag:
                // Coerce dates and booleans to numbers, dates to milliseconds and booleans
                // to `1` or `0` treating invalid dates coerced to `NaN` as not equal.
                return +object == +other;

            case errorTag:
                return object.name == other.name && object.message == other.message;

            case numberTag:
                // Treat `NaN` vs. `NaN` as equal.
                return (object != +object) ? other != +other : object == +other;

            case regexpTag:
            case stringTag:
                // Coerce regexes to strings and treat strings primitives and string
                // objects as equal. See https://es5.github.io/#x15.10.6.4 for more details.
                return object == (other + '');

        }
        return false;
    }

    /**
     * A specialized version of `baseIsEqualDeep` for objects with support for
     * partial deep comparisons.
     *
     * @private
     * @param {Object} object The object to compare.
     * @param {Object} other The other object to compare.
     * @param {Function} equalFunc The function to determine equivalents of values.
     * @param {Function} [customizer] The function to customize comparisons.
     * @param {number} [bitmask] The bitmask of comparison flags. See `baseIsEqual` for more details.
     * @param {Object} [stack] Tracks traversed `object` and `other` objects.
     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
     */
    function equalObjects(object, other, equalFunc, customizer, bitmask, stack) {
        var isPartial = bitmask & PARTIAL_COMPARE_FLAG,
            isUnordered = bitmask & UNORDERED_COMPARE_FLAG,
            objProps = keys(object),
            objLength = objProps.length,
            othProps = keys(other),
            othLength = othProps.length;

        if (objLength != othLength && !isPartial) {
            return false;
        }
        var index = objLength;
        while (index--) {
            var key = objProps[index];
            if (!(isPartial ? key in other : hasOwnProperty.call(other, key)) ||
                !(isUnordered || key == othProps[index])) {
                return false;
            }
        }
        var result = true;

        var skipCtor = isPartial;
        while (++index < objLength) {
            key = objProps[index];
            var objValue = object[key],
                othValue = other[key];

            var compared;
            // Recursively compare objects (susceptible to call stack limits).
            if (!(compared === undefined
                        ? (objValue === othValue || equalFunc(objValue, othValue, customizer, bitmask, stack))
                        : compared
                )) {
                result = false;
                break;
            }
            skipCtor || (skipCtor = key == 'constructor');
        }
        if (result && !skipCtor) {
            var objCtor = object.constructor,
                othCtor = other.constructor;

            // Non `Object` object instances with different constructors are not equal.
            if (objCtor != othCtor &&
                ('constructor' in object && 'constructor' in other) &&
                !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
                typeof othCtor == 'function' && othCtor instanceof othCtor)) {
                result = false;
            }
        }
        return result;
    }

    /**
     * Gets the "length" property value of `object`.
     *
     * **Note:** This function is used to avoid a [JIT bug](https://bugs.webkit.org/show_bug.cgi?id=142792)
     * that affects Safari on at least iOS 8.1-8.3 ARM64.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {*} Returns the "length" value.
     */
    var getLength = baseProperty('length');

    /**
     * Creates an array of index keys for `object` values of arrays,
     * `arguments` objects, and strings, otherwise `null` is returned.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array|null} Returns index keys, else `null`.
     */
    function indexKeys(object) {
        var length = object ? object.length : undefined;
        return (isLength(length) && (isArray(object) || isString(object) || isArguments(object)))
            ? baseTimes(length, String)
            : null;
    }

    /**
     * Checks if `value` is likely a prototype object.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
     */
    function isPrototype(value) {
        var Ctor = value && value.constructor,
            proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

        return value === proto;
    }

    /**
     * Converts `value` to a function if it's not one.
     *
     * @private
     * @param {*} value The value to process.
     * @returns {Function} Returns the function.
     */
    function toFunction(value) {
        return typeof value == 'function' ? value : identity;
    }

    /**
     * Creates a clone of `wrapper`.
     *
     * @private
     * @param {Object} wrapper The wrapper to clone.
     * @returns {Object} Returns the cloned wrapper.
     */
    function wrapperClone(wrapper) {
        var result = new LodashWrapper(wrapper.__wrapped__, wrapper.__chain__);
        result.__actions__ = copyArray(wrapper.__actions__);
        return result;
    }

    /*------------------------------------------------------------------------*/

    /**
     * Creates an array with all falsey values removed. The values `false`, `null`,
     * `0`, `""`, `undefined`, and `NaN` are falsey.
     *
     * @static
     * @memberOf _
     * @category Array
     * @param {Array} array The array to compact.
     * @returns {Array} Returns the new array of filtered values.
     * @example
     *
     * _.compact([0, 1, false, 2, '', 3]);
     * // => [1, 2, 3]
     */
    function compact(array) {
        return baseFilter(array, Boolean);
    }

    /**
     * Creates a new array concatenating `array` with any additional arrays
     * and/or values.
     *
     * @static
     * @memberOf _
     * @category Array
     * @param {Array} array The array to concatenate.
     * @param {...*} [values] The values to concatenate.
     * @returns {Array} Returns the new concatenated array.
     * @example
     *
     * var array = [1];
     * var other = _.concat(array, 2, [3], [[4]]);
     *
     * console.log(other);
     * // => [1, 2, 3, [4]]
     *
     * console.log(array);
     * // => [1]
     */
    var concat = rest(function(array, values) {
        values = baseFlatten(values);
        return arrayConcat(isArray(array) ? array : [Object(array)], values);
    });

    /**
     * Flattens `array` a single level.
     *
     * @static
     * @memberOf _
     * @category Array
     * @param {Array} array The array to flatten.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * _.flatten([1, [2, 3, [4]]]);
     * // => [1, 2, 3, [4]]
     */
    function flatten(array) {
        var length = array ? array.length : 0;
        return length ? baseFlatten(array) : [];
    }

    /**
     * This method is like `_.flatten` except that it recursively flattens `array`.
     *
     * @static
     * @memberOf _
     * @category Array
     * @param {Array} array The array to recursively flatten.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * _.flattenDeep([1, [2, 3, [4]]]);
     * // => [1, 2, 3, 4]
     */
    function flattenDeep(array) {
        var length = array ? array.length : 0;
        return length ? baseFlatten(array, true) : [];
    }

    /**
     * Gets the first element of `array`.
     *
     * @static
     * @memberOf _
     * @alias first
     * @category Array
     * @param {Array} array The array to query.
     * @returns {*} Returns the first element of `array`.
     * @example
     *
     * _.head([1, 2, 3]);
     * // => 1
     *
     * _.head([]);
     * // => undefined
     */
    function head(array) {
        return array ? array[0] : undefined;
    }

    /**
     * Gets the index at which the first occurrence of `value` is found in `array`
     * using [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
     * for equality comparisons. If `fromIndex` is negative, it's used as the offset
     * from the end of `array`. If `array` is sorted providing `true` for `fromIndex`
     * performs a faster binary search.
     *
     * @static
     * @memberOf _
     * @category Array
     * @param {Array} array The array to search.
     * @param {*} value The value to search for.
     * @param {number} [fromIndex=0] The index to search from.
     * @returns {number} Returns the index of the matched value, else `-1`.
     * @example
     *
     * _.indexOf([1, 2, 1, 2], 2);
     * // => 1
     *
     * // using `fromIndex`
     * _.indexOf([1, 2, 1, 2], 2, 2);
     * // => 3
     */
    function indexOf(array, value, fromIndex) {
        var length = array ? array.length : 0;
        if (typeof fromIndex == 'number') {
            fromIndex = fromIndex < 0 ? nativeMax(length + fromIndex, 0) : fromIndex;
        } else {
            fromIndex = 0;
        }
        var index = (fromIndex || 0) - 1,
            isReflexive = value === value;

        while (++index < length) {
            var other = array[index];
            if ((isReflexive ? other === value : other !== other)) {
                return index;
            }
        }
        return -1;
    }

    /**
     * Gets the last element of `array`.
     *
     * @static
     * @memberOf _
     * @category Array
     * @param {Array} array The array to query.
     * @returns {*} Returns the last element of `array`.
     * @example
     *
     * _.last([1, 2, 3]);
     * // => 3
     */
    function last(array) {
        var length = array ? array.length : 0;
        return length ? array[length - 1] : undefined;
    }

    /**
     * Creates a slice of `array` from `start` up to, but not including, `end`.
     *
     * **Note:** This method is used instead of [`Array#slice`](https://mdn.io/Array/slice)
     * to ensure dense arrays are returned.
     *
     * @static
     * @memberOf _
     * @category Array
     * @param {Array} array The array to slice.
     * @param {number} [start=0] The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns the slice of `array`.
     */
    function slice(array, start, end) {
        var length = array ? array.length : 0;
        return length ? baseSlice(array, start, end) : [];
    }

    /*------------------------------------------------------------------------*/

    /**
     * Creates a `lodash` object that wraps `value` with explicit method chaining enabled.
     * The result of such method chaining must be unwrapped with `_#value`.
     *
     * @static
     * @memberOf _
     * @category Seq
     * @param {*} value The value to wrap.
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'age': 36 },
     *   { 'user': 'fred',    'age': 40 },
     *   { 'user': 'pebbles', 'age': 1 }
     * ];
     *
     * var youngest = _
     *   .chain(users)
     *   .sortBy('age')
     *   .map(function(o) {
   *     return o.user + ' is ' + o.age;
   *   })
     *   .head()
     *   .value();
     * // => 'pebbles is 1'
     */
    function chain(value) {
        var result = lodash(value);
        result.__chain__ = true;
        return result;
    }

    /**
     * This method invokes `interceptor` and returns `value`. The interceptor is
     * invoked with one argument; (value). The purpose of this method is to "tap into"
     * a method chain in order to perform operations on intermediate results within
     * the chain.
     *
     * @static
     * @memberOf _
     * @category Seq
     * @param {*} value The value to provide to `interceptor`.
     * @param {Function} interceptor The function to invoke.
     * @returns {*} Returns `value`.
     * @example
     *
     * _([1, 2, 3])
     *  .tap(function(array) {
   *    array.pop();
   *  })
     *  .reverse()
     *  .value();
     * // => [2, 1]
     */
    function tap(value, interceptor) {
        interceptor(value);
        return value;
    }

    /**
     * This method is like `_.tap` except that it returns the result of `interceptor`.
     *
     * @static
     * @memberOf _
     * @category Seq
     * @param {*} value The value to provide to `interceptor`.
     * @param {Function} interceptor The function to invoke.
     * @returns {*} Returns the result of `interceptor`.
     * @example
     *
     * _('  abc  ')
     *  .chain()
     *  .trim()
     *  .thru(function(value) {
   *    return [value];
   *  })
     *  .value();
     * // => ['abc']
     */
    function thru(value, interceptor) {
        return interceptor(value);
    }

    /**
     * Enables explicit method chaining on the wrapper object.
     *
     * @name chain
     * @memberOf _
     * @category Seq
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36 },
     *   { 'user': 'fred',   'age': 40 }
     * ];
     *
     * // without explicit chaining
     * _(users).head();
     * // => { 'user': 'barney', 'age': 36 }
     *
     * // with explicit chaining
     * _(users)
     *   .chain()
     *   .head()
     *   .pick('user')
     *   .value();
     * // => { 'user': 'barney' }
     */
    function wrapperChain() {
        return chain(this);
    }

    /**
     * Executes the chained sequence to extract the unwrapped value.
     *
     * @name value
     * @memberOf _
     * @alias run, toJSON, valueOf
     * @category Seq
     * @returns {*} Returns the resolved unwrapped value.
     * @example
     *
     * _([1, 2, 3]).value();
     * // => [1, 2, 3]
     */
    function wrapperValue() {
        return baseWrapperValue(this.__wrapped__, this.__actions__);
    }

    /*------------------------------------------------------------------------*/

    /**
     * Checks if `predicate` returns truthy for **all** elements of `collection`.
     * Iteration is stopped once `predicate` returns falsey. The predicate is
     * invoked with three arguments: (value, index|key, collection).
     *
     * @static
     * @memberOf _
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function|Object|string} [predicate=_.identity] The function invoked per iteration.
     * @param- {Object} [guard] Enables use as an iteratee for functions like `_.map`.
     * @returns {boolean} Returns `true` if all elements pass the predicate check, else `false`.
     * @example
     *
     * _.every([true, 1, null, 'yes'], Boolean);
     * // => false
     *
     * var users = [
     *   { 'user': 'barney', 'active': false },
     *   { 'user': 'fred',   'active': false }
     * ];
     *
     * // using the `_.matches` iteratee shorthand
     * _.every(users, { 'user': 'barney', 'active': false });
     * // => false
     *
     * // using the `_.matchesProperty` iteratee shorthand
     * _.every(users, ['active', false]);
     * // => true
     *
     * // using the `_.property` iteratee shorthand
     * _.every(users, 'active');
     * // => false
     */
    function every(collection, predicate, guard) {
        predicate = guard ? undefined : predicate;
        return baseEvery(collection, baseIteratee(predicate));
    }

    /**
     * Iterates over elements of `collection`, returning an array of all elements
     * `predicate` returns truthy for. The predicate is invoked with three arguments:
     * (value, index|key, collection).
     *
     * @static
     * @memberOf _
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function|Object|string} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new filtered array.
     * @example
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36, 'active': true },
     *   { 'user': 'fred',   'age': 40, 'active': false }
     * ];
     *
     * _.filter(users, function(o) { return !o.active; });
     * // => objects for ['fred']
     *
     * // using the `_.matches` iteratee shorthand
     * _.filter(users, { 'age': 36, 'active': true });
     * // => objects for ['barney']
     *
     * // using the `_.matchesProperty` iteratee shorthand
     * _.filter(users, ['active', false]);
     * // => objects for ['fred']
     *
     * // using the `_.property` iteratee shorthand
     * _.filter(users, 'active');
     * // => objects for ['barney']
     */
    function filter(collection, predicate) {
        return baseFilter(collection, baseIteratee(predicate));
    }

    /**
     * Iterates over elements of `collection`, returning the first element
     * `predicate` returns truthy for. The predicate is invoked with three arguments:
     * (value, index|key, collection).
     *
     * @static
     * @memberOf _
     * @category Collection
     * @param {Array|Object} collection The collection to search.
     * @param {Function|Object|string} [predicate=_.identity] The function invoked per iteration.
     * @returns {*} Returns the matched element, else `undefined`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'age': 36, 'active': true },
     *   { 'user': 'fred',    'age': 40, 'active': false },
     *   { 'user': 'pebbles', 'age': 1,  'active': true }
     * ];
     *
     * _.find(users, function(o) { return o.age < 40; });
     * // => object for 'barney'
     *
     * // using the `_.matches` iteratee shorthand
     * _.find(users, { 'age': 1, 'active': true });
     * // => object for 'pebbles'
     *
     * // using the `_.matchesProperty` iteratee shorthand
     * _.find(users, ['active', false]);
     * // => object for 'fred'
     *
     * // using the `_.property` iteratee shorthand
     * _.find(users, 'active');
     * // => object for 'barney'
     */
    function find(collection, predicate) {
        return baseFind(collection, baseIteratee(predicate), baseEach);
    }

    /**
     * Iterates over elements of `collection` invoking `iteratee` for each element.
     * The iteratee is invoked with three arguments: (value, index|key, collection).
     * Iteratee functions may exit iteration early by explicitly returning `false`.
     *
     * **Note:** As with other "Collections" methods, objects with a "length" property
     * are iterated like arrays. To avoid this behavior use `_.forIn` or `_.forOwn`
     * for object iteration.
     *
     * @static
     * @memberOf _
     * @alias each
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array|Object} Returns `collection`.
     * @example
     *
     * _([1, 2]).forEach(function(value) {
   *   console.log(value);
   * });
     * // => logs `1` then `2`
     *
     * _.forEach({ 'a': 1, 'b': 2 }, function(value, key) {
   *   console.log(key);
   * });
     * // => logs 'a' then 'b' (iteration order is not guaranteed)
     */
    function forEach(collection, iteratee) {
        return baseEach(collection, toFunction(iteratee));
    }

    /**
     * Invokes the method at `path` of each element in `collection`, returning
     * an array of the results of each invoked method. Any additional arguments
     * are provided to each invoked method. If `methodName` is a function it's
     * invoked for, and `this` bound to, each element in `collection`.
     *
     * @static
     * @memberOf _
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Array|Function|string} path The path of the method to invoke or
     *  the function invoked per iteration.
     * @param {...*} [args] The arguments to invoke each method with.
     * @returns {Array} Returns the array of results.
     * @example
     *
     * _.invokeMap([[5, 1, 7], [3, 2, 1]], 'sort');
     * // => [[1, 5, 7], [1, 2, 3]]
     *
     * _.invokeMap([123, 456], String.prototype.split, '');
     * // => [['1', '2', '3'], ['4', '5', '6']]
     */
    var invokeMap = rest(function(collection, path, args) {
        var isFunc = typeof path == 'function';
        return baseMap(collection, function(value) {
            var func = isFunc ? path : value[path];
            return func == null ? func : func.apply(value, args);
        });
    });

    /**
     * Creates an array of values by running each element in `collection` through
     * `iteratee`. The iteratee is invoked with three arguments:
     * (value, index|key, collection).
     *
     * Many lodash methods are guarded to work as iteratees for methods like
     * `_.every`, `_.filter`, `_.map`, `_.mapValues`, `_.reject`, and `_.some`.
     *
     * The guarded methods are:
     * `ary`, `curry`, `curryRight`, `drop`, `dropRight`, `every`, `fill`,
     * `invert`, `parseInt`, `random`, `range`, `rangeRight`, `slice`, `some`,
     * `sortBy`, `take`, `takeRight`, `template`, `trim`, `trimEnd`, `trimStart`,
     * and `words`
     *
     * @static
     * @memberOf _
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function|Object|string} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new mapped array.
     * @example
     *
     * function square(n) {
   *   return n * n;
   * }
     *
     * _.map([1, 2], square);
     * // => [3, 6]
     *
     * _.map({ 'a': 1, 'b': 2 }, square);
     * // => [3, 6] (iteration order is not guaranteed)
     *
     * var users = [
     *   { 'user': 'barney' },
     *   { 'user': 'fred' }
     * ];
     *
     * // using the `_.property` iteratee shorthand
     * _.map(users, 'user');
     * // => ['barney', 'fred']
     */
    function map(collection, iteratee) {
        return baseMap(collection, baseIteratee(iteratee));
    }

    /**
     * Reduces `collection` to a value which is the accumulated result of running
     * each element in `collection` through `iteratee`, where each successive
     * invocation is supplied the return value of the previous. If `accumulator`
     * is not provided the first element of `collection` is used as the initial
     * value. The iteratee is invoked with four arguments:
     * (accumulator, value, index|key, collection).
     *
     * Many lodash methods are guarded to work as iteratees for methods like
     * `_.reduce`, `_.reduceRight`, and `_.transform`.
     *
     * The guarded methods are:
     * `assign`, `defaults`, `defaultsDeep`, `includes`, `merge`, `orderBy`,
     * and `sortBy`
     *
     * @static
     * @memberOf _
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @param {*} [accumulator] The initial value.
     * @returns {*} Returns the accumulated value.
     * @example
     *
     * _.reduce([1, 2], function(sum, n) {
   *   return sum + n;
   * });
     * // => 3
     *
     * _.reduce({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
   *   (result[value] || (result[value] = [])).push(key);
   *   return result;
   * }, {});
     * // => { '1': ['a', 'c'], '2': ['b'] } (iteration order is not guaranteed)
     */
    function reduce(collection, iteratee, accumulator) {
        return baseReduce(collection, baseIteratee(iteratee), accumulator, arguments.length < 3, baseEach);
    }

    /**
     * Gets the size of `collection` by returning its length for array-like
     * values or the number of own enumerable properties for objects.
     *
     * @static
     * @memberOf _
     * @category Collection
     * @param {Array|Object} collection The collection to inspect.
     * @returns {number} Returns the collection size.
     * @example
     *
     * _.size([1, 2, 3]);
     * // => 3
     *
     * _.size({ 'a': 1, 'b': 2 });
     * // => 2
     *
     * _.size('pebbles');
     * // => 7
     */
    function size(collection) {
        if (collection == null) {
            return 0;
        }
        collection = isArrayLike(collection) ? collection : keys(collection);
        return collection.length;
    }

    /**
     * Checks if `predicate` returns truthy for **any** element of `collection`.
     * Iteration is stopped once `predicate` returns truthy. The predicate is
     * invoked with three arguments: (value, index|key, collection).
     *
     * @static
     * @memberOf _
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function|Object|string} [predicate=_.identity] The function invoked per iteration.
     * @param- {Object} [guard] Enables use as an iteratee for functions like `_.map`.
     * @returns {boolean} Returns `true` if any element passes the predicate check, else `false`.
     * @example
     *
     * _.some([null, 0, 'yes', false], Boolean);
     * // => true
     *
     * var users = [
     *   { 'user': 'barney', 'active': true },
     *   { 'user': 'fred',   'active': false }
     * ];
     *
     * // using the `_.matches` iteratee shorthand
     * _.some(users, { 'user': 'barney', 'active': false });
     * // => false
     *
     * // using the `_.matchesProperty` iteratee shorthand
     * _.some(users, ['active', false]);
     * // => true
     *
     * // using the `_.property` iteratee shorthand
     * _.some(users, 'active');
     * // => true
     */
    function some(collection, predicate, guard) {
        predicate = guard ? undefined : predicate;
        return baseSome(collection, baseIteratee(predicate));
    }

    /**
     * Creates an array of elements, sorted in ascending order by the results of
     * running each element in a collection through each iteratee. This method
     * performs a stable sort, that is, it preserves the original sort order of
     * equal elements. The iteratees are invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {...(Function|Function[]|Object|Object[]|string|string[])} [iteratees=[_.identity]]
     *  The iteratees to sort by, specified individually or in arrays.
     * @returns {Array} Returns the new sorted array.
     * @example
     *
     * var users = [
     *   { 'user': 'fred',   'age': 48 },
     *   { 'user': 'barney', 'age': 36 },
     *   { 'user': 'fred',   'age': 42 },
     *   { 'user': 'barney', 'age': 34 }
     * ];
     *
     * _.sortBy(users, function(o) { return o.user; });
     * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 42]]
     *
     * _.sortBy(users, ['user', 'age']);
     * // => objects for [['barney', 34], ['barney', 36], ['fred', 42], ['fred', 48]]
     *
     * _.sortBy(users, 'user', function(o) {
   *   return Math.floor(o.age / 10);
   * });
     * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 42]]
     */
    function sortBy(collection, iteratee) {
        var index = 0;
        iteratee = baseIteratee(iteratee);

        return baseMap(baseMap(collection, function(value, key, collection) {
            return { 'value': value, 'index': index++, 'criteria': iteratee(value, key, collection) };
        }).sort(function(object, other) {
            return compareAscending(object.criteria, other.criteria) || (object.index - other.index);
        }), baseProperty('value'));
    }

    /*------------------------------------------------------------------------*/

    /**
     * Gets the timestamp of the number of milliseconds that have elapsed since
     * the Unix epoch (1 January 1970 00:00:00 UTC).
     *
     * @static
     * @memberOf _
     * @type Function
     * @category Date
     * @returns {number} Returns the timestamp.
     * @example
     *
     * _.defer(function(stamp) {
   *   console.log(_.now() - stamp);
   * }, _.now());
     * // => logs the number of milliseconds it took for the deferred function to be invoked
     */
    var now = Date.now;

    /*------------------------------------------------------------------------*/

    /**
     * Creates a function that invokes `func`, with the `this` binding and arguments
     * of the created function, while it's called less than `n` times. Subsequent
     * calls to the created function return the result of the last `func` invocation.
     *
     * @static
     * @memberOf _
     * @category Function
     * @param {number} n The number of calls at which `func` is no longer invoked.
     * @param {Function} func The function to restrict.
     * @returns {Function} Returns the new restricted function.
     * @example
     *
     * jQuery(element).on('click', _.before(5, addContactToList));
     * // => allows adding up to 4 contacts to the list
     */
    function before(n, func) {
        var result;
        if (typeof func != 'function') {
            throw new TypeError(FUNC_ERROR_TEXT);
        }
        n = toInteger(n);
        return function() {
            if (--n > 0) {
                result = func.apply(this, arguments);
            }
            if (n <= 1) {
                func = undefined;
            }
            return result;
        };
    }

    /**
     * Creates a function that invokes `func` with the `this` binding of `thisArg`
     * and prepends any additional `_.bind` arguments to those provided to the
     * bound function.
     *
     * The `_.bind.placeholder` value, which defaults to `_` in monolithic builds,
     * may be used as a placeholder for partially applied arguments.
     *
     * **Note:** Unlike native `Function#bind` this method doesn't set the "length"
     * property of bound functions.
     *
     * @static
     * @memberOf _
     * @category Function
     * @param {Function} func The function to bind.
     * @param {*} thisArg The `this` binding of `func`.
     * @param {...*} [partials] The arguments to be partially applied.
     * @returns {Function} Returns the new bound function.
     * @example
     *
     * var greet = function(greeting, punctuation) {
   *   return greeting + ' ' + this.user + punctuation;
   * };
     *
     * var object = { 'user': 'fred' };
     *
     * var bound = _.bind(greet, object, 'hi');
     * bound('!');
     * // => 'hi fred!'
     *
     * // using placeholders
     * var bound = _.bind(greet, object, _, '!');
     * bound('hi');
     * // => 'hi fred!'
     */
    var bind = rest(function(func, thisArg, partials) {
        return createPartialWrapper(func, BIND_FLAG | PARTIAL_FLAG, thisArg, partials);
    });

    /**
     * Defers invoking the `func` until the current call stack has cleared. Any
     * additional arguments are provided to `func` when it's invoked.
     *
     * @static
     * @memberOf _
     * @category Function
     * @param {Function} func The function to defer.
     * @param {...*} [args] The arguments to invoke `func` with.
     * @returns {number} Returns the timer id.
     * @example
     *
     * _.defer(function(text) {
   *   console.log(text);
   * }, 'deferred');
     * // logs 'deferred' after one or more milliseconds
     */
    var defer = rest(function(func, args) {
        return baseDelay(func, 1, args);
    });

    /**
     * Invokes `func` after `wait` milliseconds. Any additional arguments are
     * provided to `func` when it's invoked.
     *
     * @static
     * @memberOf _
     * @category Function
     * @param {Function} func The function to delay.
     * @param {number} wait The number of milliseconds to delay invocation.
     * @param {...*} [args] The arguments to invoke `func` with.
     * @returns {number} Returns the timer id.
     * @example
     *
     * _.delay(function(text) {
   *   console.log(text);
   * }, 1000, 'later');
     * // => logs 'later' after one second
     */
    var delay = rest(function(func, wait, args) {
        return baseDelay(func, toNumber(wait) || 0, args);
    });

    /**
     * Creates a function that negates the result of the predicate `func`. The
     * `func` predicate is invoked with the `this` binding and arguments of the
     * created function.
     *
     * @static
     * @memberOf _
     * @category Function
     * @param {Function} predicate The predicate to negate.
     * @returns {Function} Returns the new function.
     * @example
     *
     * function isEven(n) {
   *   return n % 2 == 0;
   * }
     *
     * _.filter([1, 2, 3, 4, 5, 6], _.negate(isEven));
     * // => [1, 3, 5]
     */
    function negate(predicate) {
        if (typeof predicate != 'function') {
            throw new TypeError(FUNC_ERROR_TEXT);
        }
        return function() {
            return !predicate.apply(this, arguments);
        };
    }

    /**
     * Creates a function that is restricted to invoking `func` once. Repeat calls
     * to the function return the value of the first invocation. The `func` is
     * invoked with the `this` binding and arguments of the created function.
     *
     * @static
     * @memberOf _
     * @category Function
     * @param {Function} func The function to restrict.
     * @returns {Function} Returns the new restricted function.
     * @example
     *
     * var initialize = _.once(createApplication);
     * initialize();
     * initialize();
     * // `initialize` invokes `createApplication` once
     */
    function once(func) {
        return before(2, func);
    }

    /**
     * Creates a function that invokes `func` with the `this` binding of the
     * created function and arguments from `start` and beyond provided as an array.
     *
     * **Note:** This method is based on the [rest parameter](https://mdn.io/rest_parameters).
     *
     * @static
     * @memberOf _
     * @category Function
     * @param {Function} func The function to apply a rest parameter to.
     * @param {number} [start=func.length-1] The start position of the rest parameter.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var say = _.rest(function(what, names) {
   *   return what + ' ' + _.initial(names).join(', ') +
   *     (_.size(names) > 1 ? ', & ' : '') + _.last(names);
   * });
     *
     * say('hello', 'fred', 'barney', 'pebbles');
     * // => 'hello fred, barney, & pebbles'
     */
    function rest(func, start) {
        if (typeof func != 'function') {
            throw new TypeError(FUNC_ERROR_TEXT);
        }
        start = nativeMax(start === undefined ? (func.length - 1) : toInteger(start), 0);
        return function() {
            var args = arguments,
                index = -1,
                length = nativeMax(args.length - start, 0),
                array = Array(length);

            while (++index < length) {
                array[index] = args[start + index];
            }
            var otherArgs = Array(start + 1);
            index = -1;
            while (++index < start) {
                otherArgs[index] = args[index];
            }
            otherArgs[start] = array;
            return func.apply(this, otherArgs);
        };
    }

    /*------------------------------------------------------------------------*/

    /**
     * Creates a shallow clone of `value`.
     *
     * **Note:** This method is loosely based on the
     * [structured clone algorithm](https://mdn.io/Structured_clone_algorithm)
     * and supports cloning arrays, array buffers, booleans, date objects, maps,
     * numbers, `Object` objects, regexes, sets, strings, symbols, and typed
     * arrays. The own enumerable properties of `arguments` objects are cloned
     * as plain objects. An empty object is returned for uncloneable values such
     * as error objects, functions, DOM nodes, and WeakMaps.
     *
     * @static
     * @memberOf _
     * @category Lang
     * @param {*} value The value to clone.
     * @returns {*} Returns the cloned value.
     * @example
     *
     * var objects = [{ 'a': 1 }, { 'b': 2 }];
     *
     * var shallow = _.clone(objects);
     * console.log(shallow[0] === objects[0]);
     * // => true
     */
    function clone(value) {
        if (!isObject(value)) {
            return value;
        }
        return isArray(value) ? copyArray(value) : copyObject(value, keys(value));
    }

    /**
     * Performs a [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
     * comparison between two values to determine if they are equivalent.
     *
     * @static
     * @memberOf _
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
     * @example
     *
     * var object = { 'user': 'fred' };
     * var other = { 'user': 'fred' };
     *
     * _.eq(object, object);
     * // => true
     *
     * _.eq(object, other);
     * // => false
     *
     * _.eq('a', 'a');
     * // => true
     *
     * _.eq('a', Object('a'));
     * // => false
     *
     * _.eq(NaN, NaN);
     * // => true
     */
    function eq(value, other) {
        return value === other || (value !== value && other !== other);
    }

    /**
     * Checks if `value` is greater than `other`.
     *
     * @static
     * @memberOf _
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is greater than `other`, else `false`.
     * @example
     *
     * _.gt(3, 1);
     * // => true
     *
     * _.gt(3, 3);
     * // => false
     *
     * _.gt(1, 3);
     * // => false
     */
    function gt(value, other) {
        return value > other;
    }

    /**
     * Checks if `value` is likely an `arguments` object.
     *
     * @static
     * @memberOf _
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
     * @example
     *
     * _.isArguments(function() { return arguments; }());
     * // => true
     *
     * _.isArguments([1, 2, 3]);
     * // => false
     */
    function isArguments(value) {
        // Safari 8.1 incorrectly makes `arguments.callee` enumerable in strict mode.
        return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
            (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
    }

    /**
     * Checks if `value` is classified as an `Array` object.
     *
     * @static
     * @memberOf _
     * @type Function
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
     * @example
     *
     * _.isArray([1, 2, 3]);
     * // => true
     *
     * _.isArray(document.body.children);
     * // => false
     *
     * _.isArray('abc');
     * // => false
     *
     * _.isArray(_.noop);
     * // => false
     */
    var isArray = Array.isArray;

    /**
     * Checks if `value` is array-like. A value is considered array-like if it's
     * not a function and has a `value.length` that's an integer greater than or
     * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
     *
     * @static
     * @memberOf _
     * @type Function
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
     * @example
     *
     * _.isArrayLike([1, 2, 3]);
     * // => true
     *
     * _.isArrayLike(document.body.children);
     * // => true
     *
     * _.isArrayLike('abc');
     * // => true
     *
     * _.isArrayLike(_.noop);
     * // => false
     */
    function isArrayLike(value) {
        return value != null &&
            !(typeof value == 'function' && isFunction(value)) && isLength(getLength(value));
    }

    /**
     * This method is like `_.isArrayLike` except that it also checks if `value`
     * is an object.
     *
     * @static
     * @memberOf _
     * @type Function
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an array-like object, else `false`.
     * @example
     *
     * _.isArrayLikeObject([1, 2, 3]);
     * // => true
     *
     * _.isArrayLikeObject(document.body.children);
     * // => true
     *
     * _.isArrayLikeObject('abc');
     * // => false
     *
     * _.isArrayLikeObject(_.noop);
     * // => false
     */
    function isArrayLikeObject(value) {
        return isObjectLike(value) && isArrayLike(value);
    }

    /**
     * Checks if `value` is classified as a boolean primitive or object.
     *
     * @static
     * @memberOf _
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
     * @example
     *
     * _.isBoolean(false);
     * // => true
     *
     * _.isBoolean(null);
     * // => false
     */
    function isBoolean(value) {
        return value === true || value === false ||
            (isObjectLike(value) && objectToString.call(value) == boolTag);
    }

    /**
     * Checks if `value` is classified as a `Date` object.
     *
     * @static
     * @memberOf _
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
     * @example
     *
     * _.isDate(new Date);
     * // => true
     *
     * _.isDate('Mon April 23 2012');
     * // => false
     */
    function isDate(value) {
        return isObjectLike(value) && objectToString.call(value) == dateTag;
    }

    /**
     * Checks if `value` is empty. A value is considered empty unless it's an
     * `arguments` object, array, string, or jQuery-like collection with a length
     * greater than `0` or an object with own enumerable properties.
     *
     * @static
     * @memberOf _
     * @category Lang
     * @param {Array|Object|string} value The value to inspect.
     * @returns {boolean} Returns `true` if `value` is empty, else `false`.
     * @example
     *
     * _.isEmpty(null);
     * // => true
     *
     * _.isEmpty(true);
     * // => true
     *
     * _.isEmpty(1);
     * // => true
     *
     * _.isEmpty([1, 2, 3]);
     * // => false
     *
     * _.isEmpty({ 'a': 1 });
     * // => false
     */
    function isEmpty(value) {
        return (!isObjectLike(value) || isFunction(value.splice))
            ? !size(value)
            : !keys(value).length;
    }

    /**
     * Performs a deep comparison between two values to determine if they are
     * equivalent.
     *
     * **Note:** This method supports comparing arrays, array buffers, booleans,
     * date objects, error objects, maps, numbers, `Object` objects, regexes,
     * sets, strings, symbols, and typed arrays. `Object` objects are compared
     * by their own, not inherited, enumerable properties. Functions and DOM
     * nodes are **not** supported.
     *
     * @static
     * @memberOf _
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
     * @example
     *
     * var object = { 'user': 'fred' };
     * var other = { 'user': 'fred' };
     *
     * _.isEqual(object, other);
     * // => true
     *
     * object === other;
     * // => false
     */
    function isEqual(value, other) {
        return baseIsEqual(value, other);
    }

    /**
     * Checks if `value` is a finite primitive number.
     *
     * **Note:** This method is based on [`Number.isFinite`](https://mdn.io/Number/isFinite).
     *
     * @static
     * @memberOf _
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a finite number, else `false`.
     * @example
     *
     * _.isFinite(3);
     * // => true
     *
     * _.isFinite(Number.MAX_VALUE);
     * // => true
     *
     * _.isFinite(3.14);
     * // => true
     *
     * _.isFinite(Infinity);
     * // => false
     */
    function isFinite(value) {
        return typeof value == 'number' && nativeIsFinite(value);
    }

    /**
     * Checks if `value` is classified as a `Function` object.
     *
     * @static
     * @memberOf _
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
     * @example
     *
     * _.isFunction(_);
     * // => true
     *
     * _.isFunction(/abc/);
     * // => false
     */
    function isFunction(value) {
        // The use of `Object#toString` avoids issues with the `typeof` operator
        // in Safari 8 which returns 'object' for typed array constructors, and
        // PhantomJS 1.9 which returns 'function' for `NodeList` instances.
        var tag = isObject(value) ? objectToString.call(value) : '';
        return tag == funcTag || tag == genTag;
    }

    /**
     * Checks if `value` is a valid array-like length.
     *
     * **Note:** This function is loosely based on [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).
     *
     * @static
     * @memberOf _
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
     * @example
     *
     * _.isLength(3);
     * // => true
     *
     * _.isLength(Number.MIN_VALUE);
     * // => false
     *
     * _.isLength(Infinity);
     * // => false
     *
     * _.isLength('3');
     * // => false
     */
    function isLength(value) {
        return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
    }

    /**
     * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
     * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
     *
     * @static
     * @memberOf _
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an object, else `false`.
     * @example
     *
     * _.isObject({});
     * // => true
     *
     * _.isObject([1, 2, 3]);
     * // => true
     *
     * _.isObject(_.noop);
     * // => true
     *
     * _.isObject(null);
     * // => false
     */
    function isObject(value) {
        // Avoid a V8 JIT bug in Chrome 19-20.
        // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
        var type = typeof value;
        return !!value && (type == 'object' || type == 'function');
    }

    /**
     * Checks if `value` is object-like. A value is object-like if it's not `null`
     * and has a `typeof` result of "object".
     *
     * @static
     * @memberOf _
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
     * @example
     *
     * _.isObjectLike({});
     * // => true
     *
     * _.isObjectLike([1, 2, 3]);
     * // => true
     *
     * _.isObjectLike(_.noop);
     * // => false
     *
     * _.isObjectLike(null);
     * // => false
     */
    function isObjectLike(value) {
        return !!value && typeof value == 'object';
    }

    /**
     * Checks if `value` is `NaN`.
     *
     * **Note:** This method is not the same as [`isNaN`](https://es5.github.io/#x15.1.2.4)
     * which returns `true` for `undefined` and other non-numeric values.
     *
     * @static
     * @memberOf _
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
     * @example
     *
     * _.isNaN(NaN);
     * // => true
     *
     * _.isNaN(new Number(NaN));
     * // => true
     *
     * isNaN(undefined);
     * // => true
     *
     * _.isNaN(undefined);
     * // => false
     */
    function isNaN(value) {
        // An `NaN` primitive is the only value that is not equal to itself.
        // Perform the `toStringTag` check first to avoid errors with some ActiveX objects in IE.
        return isNumber(value) && value != +value;
    }

    /**
     * Checks if `value` is `null`.
     *
     * @static
     * @memberOf _
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is `null`, else `false`.
     * @example
     *
     * _.isNull(null);
     * // => true
     *
     * _.isNull(void 0);
     * // => false
     */
    function isNull(value) {
        return value === null;
    }

    /**
     * Checks if `value` is classified as a `Number` primitive or object.
     *
     * **Note:** To exclude `Infinity`, `-Infinity`, and `NaN`, which are classified
     * as numbers, use the `_.isFinite` method.
     *
     * @static
     * @memberOf _
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
     * @example
     *
     * _.isNumber(3);
     * // => true
     *
     * _.isNumber(Number.MIN_VALUE);
     * // => true
     *
     * _.isNumber(Infinity);
     * // => true
     *
     * _.isNumber('3');
     * // => false
     */
    function isNumber(value) {
        return typeof value == 'number' ||
            (isObjectLike(value) && objectToString.call(value) == numberTag);
    }

    /**
     * Checks if `value` is classified as a `RegExp` object.
     *
     * @static
     * @memberOf _
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
     * @example
     *
     * _.isRegExp(/abc/);
     * // => true
     *
     * _.isRegExp('/abc/');
     * // => false
     */
    function isRegExp(value) {
        return isObject(value) && objectToString.call(value) == regexpTag;
    }

    /**
     * Checks if `value` is classified as a `String` primitive or object.
     *
     * @static
     * @memberOf _
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
     * @example
     *
     * _.isString('abc');
     * // => true
     *
     * _.isString(1);
     * // => false
     */
    function isString(value) {
        return typeof value == 'string' ||
            (!isArray(value) && isObjectLike(value) && objectToString.call(value) == stringTag);
    }

    /**
     * Checks if `value` is `undefined`.
     *
     * @static
     * @memberOf _
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is `undefined`, else `false`.
     * @example
     *
     * _.isUndefined(void 0);
     * // => true
     *
     * _.isUndefined(null);
     * // => false
     */
    function isUndefined(value) {
        return value === undefined;
    }

    /**
     * Checks if `value` is less than `other`.
     *
     * @static
     * @memberOf _
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is less than `other`, else `false`.
     * @example
     *
     * _.lt(1, 3);
     * // => true
     *
     * _.lt(3, 3);
     * // => false
     *
     * _.lt(3, 1);
     * // => false
     */
    function lt(value, other) {
        return value < other;
    }

    /**
     * Converts `value` to an array.
     *
     * @static
     * @memberOf _
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {Array} Returns the converted array.
     * @example
     *
     * _.toArray({ 'a': 1, 'b': 2 });
     * // => [1, 2]
     *
     * _.toArray('abc');
     * // => ['a', 'b', 'c']
     *
     * _.toArray(1);
     * // => []
     *
     * _.toArray(null);
     * // => []
     */
    function toArray(value) {
        if (!isArrayLike(value)) {
            return values(value);
        }
        return value.length ? copyArray(value) : [];
    }

    /**
     * Converts `value` to an integer.
     *
     * **Note:** This function is loosely based on [`ToInteger`](http://www.ecma-international.org/ecma-262/6.0/#sec-tointeger).
     *
     * @static
     * @memberOf _
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {number} Returns the converted integer.
     * @example
     *
     * _.toInteger(3);
     * // => 3
     *
     * _.toInteger(Number.MIN_VALUE);
     * // => 0
     *
     * _.toInteger(Infinity);
     * // => 1.7976931348623157e+308
     *
     * _.toInteger('3');
     * // => 3
     */
    var toInteger = Number;

    /**
     * Converts `value` to a number.
     *
     * @static
     * @memberOf _
     * @category Lang
     * @param {*} value The value to process.
     * @returns {number} Returns the number.
     * @example
     *
     * _.toNumber(3);
     * // => 3
     *
     * _.toNumber(Number.MIN_VALUE);
     * // => 5e-324
     *
     * _.toNumber(Infinity);
     * // => Infinity
     *
     * _.toNumber('3');
     * // => 3
     */
    var toNumber = Number;

    /**
     * Converts `value` to a string if it's not one. An empty string is returned
     * for `null` and `undefined` values. The sign of `-0` is preserved.
     *
     * @static
     * @memberOf _
     * @category Lang
     * @param {*} value The value to process.
     * @returns {string} Returns the string.
     * @example
     *
     * _.toString(null);
     * // => ''
     *
     * _.toString(-0);
     * // => '-0'
     *
     * _.toString([1, 2, 3]);
     * // => '1,2,3'
     */
    function toString(value) {
        if (typeof value == 'string') {
            return value;
        }
        return value == null ? '' : (value + '');
    }

    /*------------------------------------------------------------------------*/

    /**
     * Assigns own enumerable properties of source objects to the destination
     * object. Source objects are applied from left to right. Subsequent sources
     * overwrite property assignments of previous sources.
     *
     * **Note:** This method mutates `object` and is loosely based on
     * [`Object.assign`](https://mdn.io/Object/assign).
     *
     * @static
     * @memberOf _
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} [sources] The source objects.
     * @returns {Object} Returns `object`.
     * @example
     *
     * function Foo() {
   *   this.c = 3;
   * }
     *
     * function Bar() {
   *   this.e = 5;
   * }
     *
     * Foo.prototype.d = 4;
     * Bar.prototype.f = 6;
     *
     * _.assign({ 'a': 1 }, new Foo, new Bar);
     * // => { 'a': 1, 'c': 3, 'e': 5 }
     */
    var assign = createAssigner(function(object, source) {
        copyObject(source, keys(source), object);
    });

    /**
     * This method is like `_.assign` except that it iterates over own and
     * inherited source properties.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @alias extend
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} [sources] The source objects.
     * @returns {Object} Returns `object`.
     * @example
     *
     * function Foo() {
   *   this.b = 2;
   * }
     *
     * function Bar() {
   *   this.d = 4;
   * }
     *
     * Foo.prototype.c = 3;
     * Bar.prototype.e = 5;
     *
     * _.assignIn({ 'a': 1 }, new Foo, new Bar);
     * // => { 'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5 }
     */
    var assignIn = createAssigner(function(object, source) {
        copyObject(source, keysIn(source), object);
    });

    /**
     * This method is like `_.assignIn` except that it accepts `customizer` which
     * is invoked to produce the assigned values. If `customizer` returns `undefined`
     * assignment is handled by the method instead. The `customizer` is invoked
     * with five arguments: (objValue, srcValue, key, object, source).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @alias extendWith
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} sources The source objects.
     * @param {Function} [customizer] The function to customize assigned values.
     * @returns {Object} Returns `object`.
     * @example
     *
     * function customizer(objValue, srcValue) {
   *   return _.isUndefined(objValue) ? srcValue : objValue;
   * }
     *
     * var defaults = _.partialRight(_.assignInWith, customizer);
     *
     * defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
     * // => { 'a': 1, 'b': 2 }
     */
    var assignInWith = createAssigner(function(object, source, customizer) {
        copyObjectWith(source, keysIn(source), object, customizer);
    });

    /**
     * Creates an object that inherits from the `prototype` object. If a `properties`
     * object is provided its own enumerable properties are assigned to the created object.
     *
     * @static
     * @memberOf _
     * @category Object
     * @param {Object} prototype The object to inherit from.
     * @param {Object} [properties] The properties to assign to the object.
     * @returns {Object} Returns the new object.
     * @example
     *
     * function Shape() {
   *   this.x = 0;
   *   this.y = 0;
   * }
     *
     * function Circle() {
   *   Shape.call(this);
   * }
     *
     * Circle.prototype = _.create(Shape.prototype, {
   *   'constructor': Circle
   * });
     *
     * var circle = new Circle;
     * circle instanceof Circle;
     * // => true
     *
     * circle instanceof Shape;
     * // => true
     */
    function create(prototype, properties) {
        var result = baseCreate(prototype);
        return properties ? assign(result, properties) : result;
    }

    /**
     * Assigns own and inherited enumerable properties of source objects to the
     * destination object for all destination properties that resolve to `undefined`.
     * Source objects are applied from left to right. Once a property is set,
     * additional values of the same property are ignored.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} [sources] The source objects.
     * @returns {Object} Returns `object`.
     * @example
     *
     * _.defaults({ 'user': 'barney' }, { 'age': 36 }, { 'user': 'fred' });
     * // => { 'user': 'barney', 'age': 36 }
     */
    var defaults = rest(function(args) {
        args.push(undefined, assignInDefaults);
        return assignInWith.apply(undefined, args);
    });

    /**
     * Checks if `path` is a direct property of `object`.
     *
     * @static
     * @memberOf _
     * @category Object
     * @param {Object} object The object to query.
     * @param {Array|string} path The path to check.
     * @returns {boolean} Returns `true` if `path` exists, else `false`.
     * @example
     *
     * var object = { 'a': { 'b': { 'c': 3 } } };
     * var other = _.create({ 'a': _.create({ 'b': _.create({ 'c': 3 }) }) });
     *
     * _.has(object, 'a');
     * // => true
     *
     * _.has(object, 'a.b.c');
     * // => true
     *
     * _.has(object, ['a', 'b', 'c']);
     * // => true
     *
     * _.has(other, 'a');
     * // => false
     */
    function has(object, path) {
        return object != null && hasOwnProperty.call(object, path);
    }

    /**
     * Creates an array of the own enumerable property names of `object`.
     *
     * **Note:** Non-object values are coerced to objects. See the
     * [ES spec](http://ecma-international.org/ecma-262/6.0/#sec-object.keys)
     * for more details.
     *
     * @static
     * @memberOf _
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     * @example
     *
     * function Foo() {
   *   this.a = 1;
   *   this.b = 2;
   * }
     *
     * Foo.prototype.c = 3;
     *
     * _.keys(new Foo);
     * // => ['a', 'b'] (iteration order is not guaranteed)
     *
     * _.keys('hi');
     * // => ['0', '1']
     */
    function keys(object) {
        var isProto = isPrototype(object);
        if (!(isProto || isArrayLike(object))) {
            return baseKeys(object);
        }
        var indexes = indexKeys(object),
            skipIndexes = !!indexes,
            result = indexes || [],
            length = result.length;

        for (var key in object) {
            if (hasOwnProperty.call(object, key) &&
                !(skipIndexes && (key == 'length' || isIndex(key, length))) &&
                !(isProto && key == 'constructor')) {
                result.push(key);
            }
        }
        return result;
    }

    /**
     * Creates an array of the own and inherited enumerable property names of `object`.
     *
     * **Note:** Non-object values are coerced to objects.
     *
     * @static
     * @memberOf _
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     * @example
     *
     * function Foo() {
   *   this.a = 1;
   *   this.b = 2;
   * }
     *
     * Foo.prototype.c = 3;
     *
     * _.keysIn(new Foo);
     * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
     */
    function keysIn(object) {
        var index = -1,
            isProto = isPrototype(object),
            props = baseKeysIn(object),
            propsLength = props.length,
            indexes = indexKeys(object),
            skipIndexes = !!indexes,
            result = indexes || [],
            length = result.length;

        while (++index < propsLength) {
            var key = props[index];
            if (!(skipIndexes && (key == 'length' || isIndex(key, length))) &&
                !(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
                result.push(key);
            }
        }
        return result;
    }

    /**
     * Creates an object composed of the picked `object` properties.
     *
     * @static
     * @memberOf _
     * @category Object
     * @param {Object} object The source object.
     * @param {...(string|string[])} [props] The property names to pick, specified
     *  individually or in arrays.
     * @returns {Object} Returns the new object.
     * @example
     *
     * var object = { 'a': 1, 'b': '2', 'c': 3 };
     *
     * _.pick(object, ['a', 'c']);
     * // => { 'a': 1, 'c': 3 }
     */
    var pick = rest(function(object, props) {
        return object == null ? {} : basePick(object, baseFlatten(props));
    });

    /**
     * This method is like `_.get` except that if the resolved value is a function
     * it's invoked with the `this` binding of its parent object and its result
     * is returned.
     *
     * @static
     * @memberOf _
     * @category Object
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the property to resolve.
     * @param {*} [defaultValue] The value returned if the resolved value is `undefined`.
     * @returns {*} Returns the resolved value.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c1': 3, 'c2': _.constant(4) } }] };
     *
     * _.result(object, 'a[0].b.c1');
     * // => 3
     *
     * _.result(object, 'a[0].b.c2');
     * // => 4
     *
     * _.result(object, 'a[0].b.c3', 'default');
     * // => 'default'
     *
     * _.result(object, 'a[0].b.c3', _.constant('default'));
     * // => 'default'
     */
    function result(object, path, defaultValue) {
        var value = object == null ? undefined : object[path];
        if (value === undefined) {
            value = defaultValue;
        }
        return isFunction(value) ? value.call(object) : value;
    }

    /**
     * Creates an array of the own enumerable property values of `object`.
     *
     * **Note:** Non-object values are coerced to objects.
     *
     * @static
     * @memberOf _
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property values.
     * @example
     *
     * function Foo() {
   *   this.a = 1;
   *   this.b = 2;
   * }
     *
     * Foo.prototype.c = 3;
     *
     * _.values(new Foo);
     * // => [1, 2] (iteration order is not guaranteed)
     *
     * _.values('hi');
     * // => ['h', 'i']
     */
    function values(object) {
        return object ? baseValues(object, keys(object)) : [];
    }

    /*------------------------------------------------------------------------*/

    /**
     * Converts the characters "&", "<", ">", '"', "'", and "\`" in `string` to
     * their corresponding HTML entities.
     *
     * **Note:** No other characters are escaped. To escape additional
     * characters use a third-party library like [_he_](https://mths.be/he).
     *
     * Though the ">" character is escaped for symmetry, characters like
     * ">" and "/" don't need escaping in HTML and have no special meaning
     * unless they're part of a tag or unquoted attribute value.
     * See [Mathias Bynens's article](https://mathiasbynens.be/notes/ambiguous-ampersands)
     * (under "semi-related fun fact") for more details.
     *
     * Backticks are escaped because in IE < 9, they can break out of
     * attribute values or HTML comments. See [#59](https://html5sec.org/#59),
     * [#102](https://html5sec.org/#102), [#108](https://html5sec.org/#108), and
     * [#133](https://html5sec.org/#133) of the [HTML5 Security Cheatsheet](https://html5sec.org/)
     * for more details.
     *
     * When working with HTML you should always [quote attribute values](http://wonko.com/post/html-escaping)
     * to reduce XSS vectors.
     *
     * @static
     * @memberOf _
     * @category String
     * @param {string} [string=''] The string to escape.
     * @returns {string} Returns the escaped string.
     * @example
     *
     * _.escape('fred, barney, & pebbles');
     * // => 'fred, barney, &amp; pebbles'
     */
    function escape(string) {
        string = toString(string);
        return (string && reHasUnescapedHtml.test(string))
            ? string.replace(reUnescapedHtml, escapeHtmlChar)
            : string;
    }

    /*------------------------------------------------------------------------*/

    /**
     * This method returns the first argument provided to it.
     *
     * @static
     * @memberOf _
     * @category Util
     * @param {*} value Any value.
     * @returns {*} Returns `value`.
     * @example
     *
     * var object = { 'user': 'fred' };
     *
     * _.identity(object) === object;
     * // => true
     */
    function identity(value) {
        return value;
    }

    /**
     * Creates a function that invokes `func` with the arguments of the created
     * function. If `func` is a property name the created callback returns the
     * property value for a given element. If `func` is an object the created
     * callback returns `true` for elements that contain the equivalent object properties, otherwise it returns `false`.
     *
     * @static
     * @memberOf _
     * @category Util
     * @param {*} [func=_.identity] The value to convert to a callback.
     * @returns {Function} Returns the callback.
     * @example
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36 },
     *   { 'user': 'fred',   'age': 40 }
     * ];
     *
     * // create custom iteratee shorthands
     * _.iteratee = _.wrap(_.iteratee, function(callback, func) {
   *   var p = /^(\S+)\s*([<>])\s*(\S+)$/.exec(func);
   *   return !p ? callback(func) : function(object) {
   *     return (p[2] == '>' ? object[p[1]] > p[3] : object[p[1]] < p[3]);
   *   };
   * });
     *
     * _.filter(users, 'age > 36');
     * // => [{ 'user': 'fred', 'age': 40 }]
     */
    var iteratee = baseIteratee;

    /**
     * Adds all own enumerable function properties of a source object to the
     * destination object. If `object` is a function then methods are added to
     * its prototype as well.
     *
     * **Note:** Use `_.runInContext` to create a pristine `lodash` function to
     * avoid conflicts caused by modifying the original.
     *
     * @static
     * @memberOf _
     * @category Util
     * @param {Function|Object} [object=lodash] The destination object.
     * @param {Object} source The object of functions to add.
     * @param {Object} [options] The options object.
     * @param {boolean} [options.chain=true] Specify whether the functions added
     *  are chainable.
     * @returns {Function|Object} Returns `object`.
     * @example
     *
     * function vowels(string) {
   *   return _.filter(string, function(v) {
   *     return /[aeiou]/i.test(v);
   *   });
   * }
     *
     * _.mixin({ 'vowels': vowels });
     * _.vowels('fred');
     * // => ['e']
     *
     * _('fred').vowels().value();
     * // => ['e']
     *
     * _.mixin({ 'vowels': vowels }, { 'chain': false });
     * _('fred').vowels();
     * // => ['e']
     */
    function mixin(object, source, options) {
        var props = keys(source),
            methodNames = baseFunctions(source, props);

        if (options == null &&
            !(isObject(source) && (methodNames.length || !props.length))) {
            options = source;
            source = object;
            object = this;
            methodNames = baseFunctions(source, keys(source));
        }
        var chain = (isObject(options) && 'chain' in options) ? options.chain : true,
            isFunc = isFunction(object);

        baseEach(methodNames, function(methodName) {
            var func = source[methodName];
            object[methodName] = func;
            if (isFunc) {
                object.prototype[methodName] = function() {
                    var chainAll = this.__chain__;
                    if (chain || chainAll) {
                        var result = object(this.__wrapped__),
                            actions = result.__actions__ = copyArray(this.__actions__);

                        actions.push({ 'func': func, 'args': arguments, 'thisArg': object });
                        result.__chain__ = chainAll;
                        return result;
                    }
                    return func.apply(object, arrayPush([this.value()], arguments));
                };
            }
        });

        return object;
    }

    /**
     * Reverts the `_` variable to its previous value and returns a reference to
     * the `lodash` function.
     *
     * @static
     * @memberOf _
     * @category Util
     * @returns {Function} Returns the `lodash` function.
     * @example
     *
     * var lodash = _.noConflict();
     */
    function noConflict() {
        root._ = oldDash;
        return this;
    }

    /**
     * A no-operation function that returns `undefined` regardless of the
     * arguments it receives.
     *
     * @static
     * @memberOf _
     * @category Util
     * @example
     *
     * var object = { 'user': 'fred' };
     *
     * _.noop(object) === undefined;
     * // => true
     */
    function noop() {
        // No operation performed.
    }

    /**
     * Generates a unique ID. If `prefix` is provided the ID is appended to it.
     *
     * @static
     * @memberOf _
     * @category Util
     * @param {string} [prefix] The value to prefix the ID with.
     * @returns {string} Returns the unique ID.
     * @example
     *
     * _.uniqueId('contact_');
     * // => 'contact_104'
     *
     * _.uniqueId();
     * // => '105'
     */
    function uniqueId(prefix) {
        var id = ++idCounter;
        return toString(prefix) + id;
    }

    /*------------------------------------------------------------------------*/

    /**
     * Computes the maximum value of `array`. If `array` is empty or falsey
     * `undefined` is returned.
     *
     * @static
     * @memberOf _
     * @category Math
     * @param {Array} array The array to iterate over.
     * @returns {*} Returns the maximum value.
     * @example
     *
     * _.max([4, 2, 8, 6]);
     * // => 8
     *
     * _.max([]);
     * // => undefined
     */
    function max(array) {
        return (array && array.length)
            ? baseExtremum(array, identity, gt)
            : undefined;
    }

    /**
     * Computes the minimum value of `array`. If `array` is empty or falsey
     * `undefined` is returned.
     *
     * @static
     * @memberOf _
     * @category Math
     * @param {Array} array The array to iterate over.
     * @returns {*} Returns the minimum value.
     * @example
     *
     * _.min([4, 2, 8, 6]);
     * // => 2
     *
     * _.min([]);
     * // => undefined
     */
    function min(array) {
        return (array && array.length)
            ? baseExtremum(array, identity, lt)
            : undefined;
    }

    /*------------------------------------------------------------------------*/

    LodashWrapper.prototype = baseCreate(lodash.prototype);
    LodashWrapper.prototype.constructor = LodashWrapper;

    // Add functions that return wrapped values when chaining.
    lodash.assignIn = assignIn;
    lodash.before = before;
    lodash.bind = bind;
    lodash.chain = chain;
    lodash.compact = compact;
    lodash.concat = concat;
    lodash.create = create;
    lodash.defaults = defaults;
    lodash.defer = defer;
    lodash.delay = delay;
    lodash.filter = filter;
    lodash.flatten = flatten;
    lodash.flattenDeep = flattenDeep;
    lodash.invokeMap = invokeMap;
    lodash.iteratee = iteratee;
    lodash.keys = keys;
    lodash.map = map;
    lodash.mixin = mixin;
    lodash.negate = negate;
    lodash.once = once;
    lodash.pick = pick;
    lodash.slice = slice;
    lodash.sortBy = sortBy;
    lodash.tap = tap;
    lodash.thru = thru;
    lodash.toArray = toArray;
    lodash.values = values;

    // Add aliases.
    lodash.each = forEach;
    lodash.extend = assignIn;

    // Add functions to `lodash.prototype`.
    mixin(lodash, lodash);

    /*------------------------------------------------------------------------*/

    // Add functions that return unwrapped values when chaining.
    lodash.clone = clone;
    lodash.escape = escape;
    lodash.every = every;
    lodash.find = find;
    lodash.forEach = forEach;
    lodash.has = has;
    lodash.head = head;
    lodash.identity = identity;
    lodash.indexOf = indexOf;
    lodash.isArguments = isArguments;
    lodash.isArray = isArray;
    lodash.isBoolean = isBoolean;
    lodash.isDate = isDate;
    lodash.isEmpty = isEmpty;
    lodash.isEqual = isEqual;
    lodash.isFinite = isFinite;
    lodash.isFunction = isFunction;
    lodash.isNaN = isNaN;
    lodash.isNull = isNull;
    lodash.isNumber = isNumber;
    lodash.isObject = isObject;
    lodash.isRegExp = isRegExp;
    lodash.isString = isString;
    lodash.isUndefined = isUndefined;
    lodash.last = last;
    lodash.max = max;
    lodash.min = min;
    lodash.noConflict = noConflict;
    lodash.noop = noop;
    lodash.now = now;
    lodash.reduce = reduce;
    lodash.result = result;
    lodash.size = size;
    lodash.some = some;
    lodash.uniqueId = uniqueId;

    // Add aliases.
    lodash.first = head;

    mixin(lodash, (function() {
        var source = {};
        baseForOwn(lodash, function(func, methodName) {
            if (!hasOwnProperty.call(lodash.prototype, methodName)) {
                source[methodName] = func;
            }
        });
        return source;
    }()), { 'chain': false });

    /*------------------------------------------------------------------------*/

    /**
     * The semantic version number.
     *
     * @static
     * @memberOf _
     * @type string
     */
    lodash.VERSION = VERSION;

    // Add `Array` and `String` methods to `lodash.prototype`.
    baseEach(['pop', 'join', 'replace', 'reverse', 'split', 'push', 'shift', 'sort', 'splice', 'unshift'], function(methodName) {
        var func = (/^(?:replace|split)$/.test(methodName) ? String.prototype : arrayProto)[methodName],
            chainName = /^(?:push|sort|unshift)$/.test(methodName) ? 'tap' : 'thru',
            retUnwrapped = /^(?:pop|join|replace|shift)$/.test(methodName);

        lodash.prototype[methodName] = function() {
            var args = arguments;
            if (retUnwrapped && !this.__chain__) {
                return func.apply(this.value(), args);
            }
            return this[chainName](function(value) {
                return func.apply(value, args);
            });
        };
    });

    // Add chaining functions to the `lodash` wrapper.
    lodash.prototype.toJSON = lodash.prototype.valueOf = lodash.prototype.value = wrapperValue;

    /*--------------------------------------------------------------------------*/

    // Expose lodash on the free variable `window` or `self` when available. This
    // prevents errors in cases where lodash is loaded by a script tag in the presence
    // of an AMD loader. See http://requirejs.org/docs/errors.html#mismatch for more details.
    (freeWindow || freeSelf || {})._ = lodash;

    // Some AMD build optimizers like r.js check for condition patterns like the following:
    if (typeof define == 'function' && typeof define.amd == 'object' && define.amd) {
        // Define as an anonymous module so, through path mapping, it can be
        // referenced as the "underscore" module.
        define(function() {
            return lodash;
        });
    }
    // Check for `exports` after `define` in case a build optimizer adds an `exports` object.
    else if (freeExports && freeModule) {
        // Export for Node.js.
        if (moduleExports) {
            (freeModule.exports = lodash)._ = lodash;
        }
        // Export for CommonJS support.
        freeExports._ = lodash;
    }
    else {
        // Export to the global object.
        root._ = lodash;
    }
}.call(this));
}());
(function () {
/*!
 * jBone v1.1.2 - 2015-10-09 - Library for DOM manipulation
 *
 * http://jbone.js.org
 *
 * Copyright 2015 Alexey Kupriyanenko
 * Released under the MIT license.
 */

(function (win) {

	var
// cache previous versions
		_$ = win.$,
		_jBone = win.jBone,

// Quick match a standalone tag
		rquickSingleTag = /^<(\w+)\s*\/?>$/,

// A simple way to check for HTML strings
// Prioritize #id over <tag> to avoid XSS via location.hash
		rquickExpr = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,

// Alias for function
		slice = [].slice,
		splice = [].splice,
		keys = Object.keys,

// Alias for global variables
		doc = document,

		isString = function(el) {
			return typeof el === "string";
		},
		isObject = function(el) {
			return el instanceof Object;
		},
		isFunction = function(el) {
			return ({}).toString.call(el) === "[object Function]";
		},
		isArray = function(el) {
			return Array.isArray(el);
		},
		jBone = function(element, data) {
			return new fn.init(element, data);
		},
		fn;

// set previous values and return the instance upon calling the no-conflict mode
	jBone.noConflict = function() {
		win.$ = _$;
		win.jBone = _jBone;

		return jBone;
	};

	fn = jBone.fn = jBone.prototype = {
		init: function(element, data) {
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

				try {
					elements = doc.querySelectorAll(element);

					return jBone.merge(this, elements);
				} catch (e) {
					return this;
				}
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

		pop: [].pop,
		push: [].push,
		reverse: [].reverse,
		shift: [].shift,
		sort: [].sort,
		splice: [].splice,
		slice: [].slice,
		indexOf: [].indexOf,
		forEach: [].forEach,
		unshift: [].unshift,
		concat: [].concat,
		join: [].join,
		every: [].every,
		some: [].some,
		filter: [].filter,
		map: [].map,
		reduce: [].reduce,
		reduceRight: [].reduceRight,
		length: 0
	};

	fn.constructor = jBone;

	fn.init.prototype = fn;

	jBone.setId = function(el) {
		var jid = el.jid;

		if (el === win) {
			jid = "window";
		} else if (el.jid === undefined) {
			el.jid = jid = ++jBone._cache.jid;
		}

		if (!jBone._cache.events[jid]) {
			jBone._cache.events[jid] = {};
		}
	};

	jBone.getData = function(el) {
		el = el instanceof jBone ? el[0] : el;

		var jid = el === win ? "window" : el.jid;

		return {
			jid: jid,
			events: jBone._cache.events[jid]
		};
	};

	jBone.isElement = function(el) {
		return el && el instanceof jBone || el instanceof HTMLElement || isString(el);
	};

	jBone._cache = {
		events: {},
		jid: 0
	};

	function isArraylike(obj) {
		var length = obj.length,
			type = typeof obj;

		if (isFunction(type) || obj === win) {
			return false;
		}

		if (obj.nodeType === 1 && length) {
			return true;
		}

		return isArray(type) || length === 0 ||
			typeof length === "number" && length > 0 && (length - 1) in obj;
	}

	fn.pushStack = function(elems) {
		var ret = jBone.merge(this.constructor(), elems);

		return ret;
	};

	jBone.merge = function(first, second) {
		var l = second.length,
			i = first.length,
			j = 0;

		while (j < l) {
			first[i++] = second[j++];
		}

		first.length = i;

		return first;
	};

	jBone.contains = function(container, contained) {
		return container.contains(contained);
	};

	jBone.extend = function(target) {
		var tg;

		splice.call(arguments, 1).forEach(function(source) {
			tg = target; //caching target for perf improvement

			if (source) {
				for (var prop in source) {
					tg[prop] = source[prop];
				}
			}
		});

		return target;
	};

	jBone.makeArray = function(arr, results) {
		var ret = results || [];

		if (arr !== null) {
			if (isArraylike(arr)) {
				jBone.merge(ret, isString(arr) ? [arr] : arr);
			} else {
				ret.push(arr);
			}
		}

		return ret;
	};

	jBone.unique = function(array) {
		if (array == null) {
			return [];
		}

		var result = [];

		for (var i = 0, length = array.length; i < length; i++) {
			var value = array[i];
			if (result.indexOf(value) < 0) {
				result.push(value);
			}
		}
		return result;
	};

	function BoneEvent(e, data) {
		var key, setter;

		this.originalEvent = e;

		setter = function(key, e) {
			if (key === "preventDefault") {
				this[key] = function() {
					this.defaultPrevented = true;
					return e[key]();
				};
			} else if (key === "stopImmediatePropagation") {
				this[key] = function() {
					this.immediatePropagationStopped = true;
					return e[key]();
				};
			} else if (isFunction(e[key])) {
				this[key] = function() {
					return e[key]();
				};
			} else {
				this[key] = e[key];
			}
		};

		for (key in e) {
			if (e[key] || typeof e[key] === "function") {
				setter.call(this, key, e);
			}
		}

		jBone.extend(this, data, {
			isImmediatePropagationStopped: function() {
				return !!this.immediatePropagationStopped;
			}
		});
	}

	jBone.Event = function(event, data) {
		var namespace, eventType;

		if (event.type && !data) {
			data = event;
			event = event.type;
		}

		namespace = event.split(".").splice(1).join(".");
		eventType = event.split(".")[0];

		event = doc.createEvent("Event");
		event.initEvent(eventType, true, true);

		return jBone.extend(event, {
			namespace: namespace,
			isDefaultPrevented: function() {
				return event.defaultPrevented;
			}
		}, data);
	};

	jBone.event = {

		/**
		 * Attach a handler to an event for the elements
		 * @param {Node}        el         - Events will be attached to this DOM Node
		 * @param {String}      types      - One or more space-separated event types and optional namespaces
		 * @param {Function}    handler    - A function to execute when the event is triggered
		 * @param {Object}      [data]     - Data to be passed to the handler in event.data
		 * @param {String}      [selector] - A selector string to filter the descendants of the selected elements
		 */
		add: function(el, types, handler, data, selector) {
			jBone.setId(el);

			var eventHandler = function(e) {
					jBone.event.dispatch.call(el, e);
				},
				events = jBone.getData(el).events,
				eventType, t, event;

			types = types.split(" ");
			t = types.length;
			while (t--) {
				event = types[t];

				eventType = event.split(".")[0];
				events[eventType] = events[eventType] || [];

				if (events[eventType].length) {
					// override with previous event handler
					eventHandler = events[eventType][0].fn;
				} else {
					el.addEventListener && el.addEventListener(eventType, eventHandler, false);
				}

				events[eventType].push({
					namespace: event.split(".").splice(1).join("."),
					fn: eventHandler,
					selector: selector,
					data: data,
					originfn: handler
				});
			}
		},

		/**
		 * Remove an event handler
		 * @param  {Node}       el        - Events will be deattached from this DOM Node
		 * @param  {String}     types     - One or more space-separated event types and optional namespaces
		 * @param  {Function}   handler   - A handler function previously attached for the event(s)
		 */
		remove: function(el, types, handler) {
			var removeListener = function(events, eventType, index, el, e) {
					var callback;

					// get callback
					if ((handler && e.originfn === handler) || !handler) {
						callback = e.fn;
					}

					if (events[eventType][index].fn === callback) {
						// remove handler from cache
						events[eventType].splice(index, 1);

						if (!events[eventType].length) {
							el.removeEventListener(eventType, callback);
						}
					}
				},
				events = jBone.getData(el).events,
				l,
				eventsByType;

			if (!events) {
				return;
			}

			// remove all events
			if (!types && events) {
				return keys(events).forEach(function(eventType) {
					eventsByType = events[eventType];
					l = eventsByType.length;

					while(l--) {
						removeListener(events, eventType, l, el, eventsByType[l]);
					}
				});
			}

			types.split(" ").forEach(function(eventName) {
				var eventType = eventName.split(".")[0],
					namespace = eventName.split(".").splice(1).join("."),
					e;

				// remove named events
				if (events[eventType]) {
					eventsByType = events[eventType];
					l = eventsByType.length;

					while(l--) {
						e = eventsByType[l];
						if (!namespace || (namespace && e.namespace === namespace)) {
							removeListener(events, eventType, l, el, e);
						}
					}
				}
				// remove all namespaced events
				else if (namespace) {
					keys(events).forEach(function(eventType) {
						eventsByType = events[eventType];
						l = eventsByType.length;

						while(l--) {
							e = eventsByType[l];
							if (e.namespace.split(".")[0] === namespace.split(".")[0]) {
								removeListener(events, eventType, l, el, e);
							}
						}
					});
				}
			});
		},

		/**
		 * Execute all handlers and behaviors attached to the matched elements for the given event type.
		 * @param  {Node}       el       - Events will be triggered for thie DOM Node
		 * @param  {String}     event    - One or more space-separated event types and optional namespaces
		 */
		trigger: function(el, event) {
			var events = [];

			if (isString(event)) {
				events = event.split(" ").map(function(event) {
					return jBone.Event(event);
				});
			} else {
				event = event instanceof Event ? event : jBone.Event(event);
				events = [event];
			}

			events.forEach(function(event) {
				if (!event.type) {
					return;
				}

				el.dispatchEvent && el.dispatchEvent(event);
			});
		},

		dispatch: function(e) {
			var i = 0,
				j = 0,
				el = this,
				handlers = jBone.getData(el).events[e.type],
				length = handlers.length,
				handlerQueue = [],
				targets = [],
				l,
				expectedTarget,
				handler,
				event,
				eventOptions;

			// cache all events handlers, fix issue with multiple handlers (issue #45)
			for (; i < length; i++) {
				handlerQueue.push(handlers[i]);
			}

			i = 0;
			length = handlerQueue.length;

			for (;
				// if event exists
				i < length &&
					// if handler is not removed from stack
				~handlers.indexOf(handlerQueue[i]) &&
					// if propagation is not stopped
				!(event && event.isImmediatePropagationStopped());
				i++) {
				expectedTarget = null;
				eventOptions = {};
				handler = handlerQueue[i];
				handler.data && (eventOptions.data = handler.data);

				// event handler without selector
				if (!handler.selector) {
					event = new BoneEvent(e, eventOptions);

					if (!(e.namespace && e.namespace !== handler.namespace)) {
						handler.originfn.call(el, event);
					}
				}
				// event handler with selector
				else if (
					// if target and selected element the same
				~(targets = jBone(el).find(handler.selector)).indexOf(e.target) && (expectedTarget = e.target) ||
					// if one of element matched with selector contains target
				(el !== e.target && el.contains(e.target))
				) {
					// get element matched with selector
					if (!expectedTarget) {
						l = targets.length;
						j = 0;

						for (; j < l; j++) {
							if (targets[j] && targets[j].contains(e.target)) {
								expectedTarget = targets[j];
							}
						}
					}

					if (!expectedTarget) {
						continue;
					}

					eventOptions.currentTarget = expectedTarget;
					event = new BoneEvent(e, eventOptions);

					if (!(e.namespace && e.namespace !== handler.namespace)) {
						handler.originfn.call(expectedTarget, event);
					}
				}
			}
		}
	};

	fn.on = function(types, selector, data, fn) {
		var length = this.length,
			i = 0;

		if (data == null && fn == null) {
			// (types, fn)
			fn = selector;
			data = selector = undefined;
		} else if (fn == null) {
			if (typeof selector === "string") {
				// (types, selector, fn)
				fn = data;
				data = undefined;
			} else {
				// (types, data, fn)
				fn = data;
				data = selector;
				selector = undefined;
			}
		}

		if (!fn) {
			return this;
		}

		for (; i < length; i++) {
			jBone.event.add(this[i], types, fn, data, selector);
		}

		return this;
	};

	fn.one = function(event) {
		var args = arguments,
			i = 0,
			length = this.length,
			oneArgs = slice.call(args, 1, args.length - 1),
			callback = slice.call(args, -1)[0],
			addListener;

		addListener = function(el) {
			var $el = jBone(el);

			event.split(" ").forEach(function(event) {
				var fn = function(e) {
					$el.off(event, fn);
					callback.call(el, e);
				};

				$el.on.apply($el, [event].concat(oneArgs, fn));
			});
		};

		for (; i < length; i++) {
			addListener(this[i]);
		}

		return this;
	};

	fn.trigger = function(event) {
		var i = 0,
			length = this.length;

		if (!event) {
			return this;
		}

		for (; i < length; i++) {
			jBone.event.trigger(this[i], event);
		}

		return this;
	};

	fn.off = function(types, handler) {
		var i = 0,
			length = this.length;

		for (; i < length; i++) {
			jBone.event.remove(this[i], types, handler);
		}

		return this;
	};

	fn.find = function(selector) {
		var results = [],
			i = 0,
			length = this.length,
			finder = function(el) {
				if (isFunction(el.querySelectorAll)) {
					[].forEach.call(el.querySelectorAll(selector), function(found) {
						results.push(found);
					});
				}
			};

		for (; i < length; i++) {
			finder(this[i]);
		}

		return jBone(results);
	};

	fn.get = function(index) {
		return index != null ?

			// Return just one element from the set
			(index < 0 ? this[index + this.length] : this[index]) :

			// Return all the elements in a clean array
			slice.call(this);
	};

	fn.eq = function(index) {
		return jBone(this[index]);
	};

	fn.parent = function() {
		var results = [],
			parent,
			i = 0,
			length = this.length;

		for (; i < length; i++) {
			if (!~results.indexOf(parent = this[i].parentElement) && parent) {
				results.push(parent);
			}
		}

		return jBone(results);
	};

	fn.toArray = function() {
		return slice.call(this);
	};

	fn.is = function() {
		var args = arguments;

		return this.some(function(el) {
			return el.tagName.toLowerCase() === args[0];
		});
	};

	fn.has = function() {
		var args = arguments;

		return this.some(function(el) {
			return el.querySelectorAll(args[0]).length;
		});
	};

	fn.add = function(selector, context) {
		return this.pushStack(
			jBone.unique(
				jBone.merge(this.get(), jBone(selector, context))
			)
		);
	};

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

	fn.data = function(key, value) {
		var args = arguments, data = {},
			i = 0,
			length = this.length,
			setter,
			setValue = function(el, key, value) {
				if (isObject(value)) {
					el.jdata = el.jdata || {};
					el.jdata[key] = value;
				} else {
					el.dataset[key] = value;
				}
			},
			getValue = function(value) {
				if (value === "true") {
					return true;
				} else if (value === "false") {
					return false;
				} else {
					return value;
				}
			};

		// Get all data
		if (args.length === 0) {
			this[0].jdata && (data = this[0].jdata);

			keys(this[0].dataset).forEach(function(key) {
				data[key] = getValue(this[0].dataset[key]);
			}, this);

			return data;
		}
		// Get data by name
		if (args.length === 1 && isString(key)) {
			return this[0] && getValue(this[0].dataset[key] || this[0].jdata && this[0].jdata[key]);
		}

		// Set data
		if (args.length === 1 && isObject(key)) {
			setter = function(el) {
				keys(key).forEach(function(name) {
					setValue(el, name, key[name]);
				});
			};
		} else if (args.length === 2) {
			setter = function(el) {
				setValue(el, key, value);
			};
		}

		for (; i < length; i++) {
			setter(this[i]);
		}

		return this;
	};

	fn.removeData = function(key) {
		var i = 0,
			length = this.length,
			jdata, dataset;

		for (; i < length; i++) {
			jdata = this[i].jdata;
			dataset = this[i].dataset;

			if (key) {
				jdata && jdata[key] && delete jdata[key];
				delete dataset[key];
			} else {
				for (key in jdata) {
					delete jdata[key];
				}

				for (key in dataset) {
					delete dataset[key];
				}
			}
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

	fn.toggleClass = function(className, force) {
		var i = 0,
			length = this.length,
			method = "toggle";

		force === true && (method = "add") || force === false && (method = "remove");

		if (className) {
			for (; i < length; i++) {
				this[i].classList[method](className);
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

	fn.html = function(value) {
		var args = arguments,
			el;

		// add HTML into elements
		if (args.length === 1 && value !== undefined) {
			return this.empty().append(value);
		}
		// get HTML from element
		else if (args.length === 0 && (el = this[0])) {
			return el.innerHTML;
		}

		return this;
	};

	fn.append = function(appended) {
		var i = 0,
			length = this.length,
			setter;

		// create jBone object and then append
		if (isString(appended) && rquickExpr.exec(appended)) {
			appended = jBone(appended);
		}
		// create text node for insertion
		else if (!isObject(appended)) {
			appended = document.createTextNode(appended);
		}

		appended = appended instanceof jBone ? appended : jBone(appended);

		setter = function(el, i) {
			appended.forEach(function(node) {
				if (i) {
					el.appendChild(node.cloneNode(true));
				} else {
					el.appendChild(node);
				}
			});
		};

		for (; i < length; i++) {
			setter(this[i], i);
		}

		return this;
	};

	fn.appendTo = function(to) {
		jBone(to).append(this);

		return this;
	};

	fn.empty = function() {
		var i = 0,
			length = this.length,
			el;

		for (; i < length; i++) {
			el = this[i];

			while (el.lastChild) {
				el.removeChild(el.lastChild);
			}
		}

		return this;
	};

	fn.remove = function() {
		var i = 0,
			length = this.length,
			el;

		// remove all listeners
		this.off();

		for (; i < length; i++) {
			el = this[i];

			// remove data and nodes
			delete el.jdata;
			el.parentNode && el.parentNode.removeChild(el);
		}

		return this;
	};

	if (typeof module === "object" && module && typeof module.exports === "object") {
		// Expose jBone as module.exports in loaders that implement the Node
		// module pattern (including browserify). Do not create the global, since
		// the user will be storing it themselves locally, and globals are frowned
		// upon in the Node module world.
		module.exports = jBone;
	}
// Register as a AMD module
	else if (typeof define === "function" && define.amd) {
		define(function() {
			return jBone;
		});

		win.jBone = win.$ = jBone;
	} else if (typeof win === "object" && typeof win.document === "object") {
		win.jBone = win.$ = jBone;
	}

}(window));
}());
(function () {
// Generated by CoffeeScript 1.6.3
(function() {
    var Deferred, PENDING, REJECTED, RESOLVED, VERSION, after, execute, flatten, has, installInto, isArguments, isPromise, wrap, _when,
        __slice = [].slice;

    VERSION = '3.0.0';

    PENDING = "pending";

    RESOLVED = "resolved";

    REJECTED = "rejected";

    has = function(obj, prop) {
        return obj != null ? obj.hasOwnProperty(prop) : void 0;
    };

    isArguments = function(obj) {
        return has(obj, 'length') && has(obj, 'callee');
    };

    isPromise = function(obj) {
        return has(obj, 'promise') && typeof (obj != null ? obj.promise : void 0) === 'function';
    };

    flatten = function(array) {
        if (isArguments(array)) {
            return flatten(Array.prototype.slice.call(array));
        }
        if (!Array.isArray(array)) {
            return [array];
        }
        return array.reduce(function(memo, value) {
            if (Array.isArray(value)) {
                return memo.concat(flatten(value));
            }
            memo.push(value);
            return memo;
        }, []);
    };

    after = function(times, func) {
        if (times <= 0) {
            return func();
        }
        return function() {
            if (--times < 1) {
                return func.apply(this, arguments);
            }
        };
    };

    wrap = function(func, wrapper) {
        return function() {
            var args;
            args = [func].concat(Array.prototype.slice.call(arguments, 0));
            return wrapper.apply(this, args);
        };
    };

    execute = function(callbacks, args, context) {
        var callback, _i, _len, _ref, _results;
        _ref = flatten(callbacks);
        _results = [];
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            callback = _ref[_i];
            _results.push(callback.call.apply(callback, [context].concat(__slice.call(args))));
        }
        return _results;
    };

    Deferred = function() {
        var candidate, close, closingArguments, doneCallbacks, failCallbacks, progressCallbacks, state;
        state = PENDING;
        doneCallbacks = [];
        failCallbacks = [];
        progressCallbacks = [];
        closingArguments = {
            'resolved': {},
            'rejected': {},
            'pending': {}
        };
        this.promise = function(candidate) {
            var pipe, storeCallbacks;
            candidate = candidate || {};
            candidate.state = function() {
                return state;
            };
            storeCallbacks = function(shouldExecuteImmediately, holder, holderState) {
                return function() {
                    if (state === PENDING) {
                        holder.push.apply(holder, flatten(arguments));
                    }
                    if (shouldExecuteImmediately()) {
                        execute(arguments, closingArguments[holderState]);
                    }
                    return candidate;
                };
            };
            candidate.done = storeCallbacks((function() {
                return state === RESOLVED;
            }), doneCallbacks, RESOLVED);
            candidate.fail = storeCallbacks((function() {
                return state === REJECTED;
            }), failCallbacks, REJECTED);
            candidate.progress = storeCallbacks((function() {
                return state !== PENDING;
            }), progressCallbacks, PENDING);
            candidate.always = function() {
                var _ref;
                return (_ref = candidate.done.apply(candidate, arguments)).fail.apply(_ref, arguments);
            };
            pipe = function(doneFilter, failFilter, progressFilter) {
                var filter, master;
                master = new Deferred();
                filter = function(source, funnel, callback) {
                    if (!callback) {
                        return candidate[source](master[funnel]);
                    }
                    return candidate[source](function() {
                        var args, value;
                        args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
                        value = callback.apply(null, args);
                        if (isPromise(value)) {
                            return value.done(master.resolve).fail(master.reject).progress(master.notify);
                        } else {
                            return master[funnel](value);
                        }
                    });
                };
                filter('done', 'resolve', doneFilter);
                filter('fail', 'reject', failFilter);
                filter('progress', 'notify', progressFilter);
                return master;
            };
            candidate.pipe = pipe;
            candidate.then = pipe;
            if (candidate.promise == null) {
                candidate.promise = function() {
                    return candidate;
                };
            }
            return candidate;
        };
        this.promise(this);
        candidate = this;
        close = function(finalState, callbacks, context) {
            return function() {
                if (state === PENDING) {
                    state = finalState;
                    closingArguments[finalState] = arguments;
                    execute(callbacks, closingArguments[finalState], context);
                    return candidate;
                }
                return this;
            };
        };
        this.resolve = close(RESOLVED, doneCallbacks);
        this.reject = close(REJECTED, failCallbacks);
        this.notify = close(PENDING, progressCallbacks);
        this.resolveWith = function(context, args) {
            return close(RESOLVED, doneCallbacks, context).apply(null, args);
        };
        this.rejectWith = function(context, args) {
            return close(REJECTED, failCallbacks, context).apply(null, args);
        };
        this.notifyWith = function(context, args) {
            return close(PENDING, progressCallbacks, context).apply(null, args);
        };
        return this;
    };

    _when = function() {
        var def, defs, finish, resolutionArgs, trigger, _i, _len;
        defs = flatten(arguments);
        if (defs.length === 1) {
            if (isPromise(defs[0])) {
                return defs[0];
            } else {
                return (new Deferred()).resolve(defs[0]).promise();
            }
        }
        trigger = new Deferred();
        if (!defs.length) {
            return trigger.resolve().promise();
        }
        resolutionArgs = [];
        finish = after(defs.length, function() {
            return trigger.resolve.apply(trigger, resolutionArgs);
        });
        defs.forEach(function(def, index) {
            if (isPromise(def)) {
                return def.done(function() {
                    var args;
                    args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
                    resolutionArgs[index] = args.length > 1 ? args : args[0];
                    return finish();
                });
            } else {
                resolutionArgs[index] = def;
                return finish();
            }
        });
        for (_i = 0, _len = defs.length; _i < _len; _i++) {
            def = defs[_i];
            isPromise(def) && def.fail(trigger.reject);
        }
        return trigger.promise();
    };

    installInto = function(fw) {
        fw.Deferred = function() {
            return new Deferred();
        };
        fw.ajax = wrap(fw.ajax, function(ajax, options) {
            var createWrapper, def, promise, xhr;
            if (options == null) {
                options = {};
            }
            def = new Deferred();
            createWrapper = function(wrapped, finisher) {
                return wrap(wrapped, function() {
                    var args, func;
                    func = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
                    if (func) {
                        func.apply(null, args);
                    }
                    return finisher.apply(null, args);
                });
            };
            options.success = createWrapper(options.success, def.resolve);
            options.error = createWrapper(options.error, def.reject);
            xhr = ajax(options);
            promise = def.promise();
            promise.abort = function() {
                return xhr.abort();
            };
            return promise;
        });
        return fw.when = _when;
    };

    if (typeof exports !== 'undefined') {
        exports.Deferred = function() {
            return new Deferred();
        };
        exports.when = _when;
        exports.installInto = installInto;
    } else if (typeof define === 'function' && define.amd) {
        define(function() {
            if (typeof Zepto !== 'undefined') {
                return installInto(Zepto);
            } else {
                Deferred.when = _when;
                Deferred.installInto = installInto;
                return Deferred;
            }
        });
    } else if (typeof Zepto !== 'undefined') {
        installInto(Zepto);
    } else {
        this.Deferred = function() {
            return new Deferred();
        };
        this.Deferred.when = _when;
        this.Deferred.installInto = installInto;
    }

}).call(this);
}());
(function () {
//     Backbone.js 1.2.3

//     (c) 2010-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Backbone may be freely distributed under the MIT license.
//     For all details and documentation:
//     http://backbonejs.org

(function(factory) {

	// Establish the root object, `window` (`self`) in the browser, or `global` on the server.
	// We use `self` instead of `window` for `WebWorker` support.
	var root = (typeof self == 'object' && self.self == self && self) ||
		(typeof global == 'object' && global.global == global && global);

	// Set up Backbone appropriately for the environment. Start with AMD.
	if (typeof define === 'function' && define.amd) {
		define(['underscore', 'jquery', 'exports'], function(_, $, exports) {
			// Export global even in AMD case in case this script is loaded with
			// others that may still expect a global Backbone.
			root.Backbone = factory(root, exports, _, $);
		});

		// Next for Node.js or CommonJS. jQuery may not be needed as a module.
	} else if (typeof exports !== 'undefined') {
		var _ = require('underscore'), $;
		try { $ = require('jquery'); } catch(e) {}
		factory(root, exports, _, $);

		// Finally, as a browser global.
	} else {
		root.Backbone = factory(root, {}, root._, (root.jQuery || root.Zepto || root.ender || root.$));
	}

}(function(root, Backbone, _, $) {

	// Initial Setup
	// -------------

	// Save the previous value of the `Backbone` variable, so that it can be
	// restored later on, if `noConflict` is used.
	var previousBackbone = root.Backbone;

	// Create a local reference to a common array method we'll want to use later.
	var slice = Array.prototype.slice;

	// Current version of the library. Keep in sync with `package.json`.
	Backbone.VERSION = '1.2.3';

	// For Backbone's purposes, jQuery, Zepto, Ender, or My Library (kidding) owns
	// the `$` variable.
	Backbone.$ = $;

	// Runs Backbone.js in *noConflict* mode, returning the `Backbone` variable
	// to its previous owner. Returns a reference to this Backbone object.
	Backbone.noConflict = function() {
		root.Backbone = previousBackbone;
		return this;
	};

	// Turn on `emulateHTTP` to support legacy HTTP servers. Setting this option
	// will fake `"PATCH"`, `"PUT"` and `"DELETE"` requests via the `_method` parameter and
	// set a `X-Http-Method-Override` header.
	Backbone.emulateHTTP = false;

	// Turn on `emulateJSON` to support legacy servers that can't deal with direct
	// `application/json` requests ... this will encode the body as
	// `application/x-www-form-urlencoded` instead and will send the model in a
	// form param named `model`.
	Backbone.emulateJSON = false;

	// Proxy Backbone class methods to Underscore functions, wrapping the model's
	// `attributes` object or collection's `models` array behind the scenes.
	//
	// collection.filter(function(model) { return model.get('age') > 10 });
	// collection.each(this.addView);
	//
	// `Function#apply` can be slow so we use the method's arg count, if we know it.
	var addMethod = function(length, method, attribute) {
		switch (length) {
			case 1: return function() {
				return _[method](this[attribute]);
			};
			case 2: return function(value) {
				return _[method](this[attribute], value);
			};
			case 3: return function(iteratee, context) {
				return _[method](this[attribute], cb(iteratee, this), context);
			};
			case 4: return function(iteratee, defaultVal, context) {
				return _[method](this[attribute], cb(iteratee, this), defaultVal, context);
			};
			default: return function() {
				var args = slice.call(arguments);
				args.unshift(this[attribute]);
				return _[method].apply(_, args);
			};
		}
	};
	var addUnderscoreMethods = function(Class, methods, attribute) {
		_.each(methods, function(length, method) {
			if (_[method]) Class.prototype[method] = addMethod(length, method, attribute);
		});
	};

	// Support `collection.sortBy('attr')` and `collection.findWhere({id: 1})`.
	var cb = function(iteratee, instance) {
		if (_.isFunction(iteratee)) return iteratee;
		if (_.isObject(iteratee) && !instance._isModel(iteratee)) return modelMatcher(iteratee);
		if (_.isString(iteratee)) return function(model) { return model.get(iteratee); };
		return iteratee;
	};
	var modelMatcher = function(attrs) {
		var matcher = _.matches(attrs);
		return function(model) {
			return matcher(model.attributes);
		};
	};

	// Backbone.Events
	// ---------------

	// A module that can be mixed in to *any object* in order to provide it with
	// a custom event channel. You may bind a callback to an event with `on` or
	// remove with `off`; `trigger`-ing an event fires all callbacks in
	// succession.
	//
	//     var object = {};
	//     _.extend(object, Backbone.Events);
	//     object.on('expand', function(){ alert('expanded'); });
	//     object.trigger('expand');
	//
	var Events = Backbone.Events = {};

	// Regular expression used to split event strings.
	var eventSplitter = /\s+/;

	// Iterates over the standard `event, callback` (as well as the fancy multiple
	// space-separated events `"change blur", callback` and jQuery-style event
	// maps `{event: callback}`).
	var eventsApi = function(iteratee, events, name, callback, opts) {
		var i = 0, names;
		if (name && typeof name === 'object') {
			// Handle event maps.
			if (callback !== void 0 && 'context' in opts && opts.context === void 0) opts.context = callback;
			for (names = _.keys(name); i < names.length ; i++) {
				events = eventsApi(iteratee, events, names[i], name[names[i]], opts);
			}
		} else if (name && eventSplitter.test(name)) {
			// Handle space separated event names by delegating them individually.
			for (names = name.split(eventSplitter); i < names.length; i++) {
				events = iteratee(events, names[i], callback, opts);
			}
		} else {
			// Finally, standard events.
			events = iteratee(events, name, callback, opts);
		}
		return events;
	};

	// Bind an event to a `callback` function. Passing `"all"` will bind
	// the callback to all events fired.
	Events.on = function(name, callback, context) {
		return internalOn(this, name, callback, context);
	};

	// Guard the `listening` argument from the public API.
	var internalOn = function(obj, name, callback, context, listening) {
		obj._events = eventsApi(onApi, obj._events || {}, name, callback, {
			context: context,
			ctx: obj,
			listening: listening
		});

		if (listening) {
			var listeners = obj._listeners || (obj._listeners = {});
			listeners[listening.id] = listening;
		}

		return obj;
	};

	// Inversion-of-control versions of `on`. Tell *this* object to listen to
	// an event in another object... keeping track of what it's listening to
	// for easier unbinding later.
	Events.listenTo =  function(obj, name, callback) {
		if (!obj) return this;
		var id = obj._listenId || (obj._listenId = _.uniqueId('l'));
		var listeningTo = this._listeningTo || (this._listeningTo = {});
		var listening = listeningTo[id];

		// This object is not listening to any other events on `obj` yet.
		// Setup the necessary references to track the listening callbacks.
		if (!listening) {
			var thisId = this._listenId || (this._listenId = _.uniqueId('l'));
			listening = listeningTo[id] = {obj: obj, objId: id, id: thisId, listeningTo: listeningTo, count: 0};
		}

		// Bind callbacks on obj, and keep track of them on listening.
		internalOn(obj, name, callback, this, listening);
		return this;
	};

	// The reducing API that adds a callback to the `events` object.
	var onApi = function(events, name, callback, options) {
		if (callback) {
			var handlers = events[name] || (events[name] = []);
			var context = options.context, ctx = options.ctx, listening = options.listening;
			if (listening) listening.count++;

			handlers.push({ callback: callback, context: context, ctx: context || ctx, listening: listening });
		}
		return events;
	};

	// Remove one or many callbacks. If `context` is null, removes all
	// callbacks with that function. If `callback` is null, removes all
	// callbacks for the event. If `name` is null, removes all bound
	// callbacks for all events.
	Events.off =  function(name, callback, context) {
		if (!this._events) return this;
		this._events = eventsApi(offApi, this._events, name, callback, {
			context: context,
			listeners: this._listeners
		});
		return this;
	};

	// Tell this object to stop listening to either specific events ... or
	// to every object it's currently listening to.
	Events.stopListening =  function(obj, name, callback) {
		var listeningTo = this._listeningTo;
		if (!listeningTo) return this;

		var ids = obj ? [obj._listenId] : _.keys(listeningTo);

		for (var i = 0; i < ids.length; i++) {
			var listening = listeningTo[ids[i]];

			// If listening doesn't exist, this object is not currently
			// listening to obj. Break out early.
			if (!listening) break;

			listening.obj.off(name, callback, this);
		}
		if (_.isEmpty(listeningTo)) this._listeningTo = void 0;

		return this;
	};

	// The reducing API that removes a callback from the `events` object.
	var offApi = function(events, name, callback, options) {
		if (!events) return;

		var i = 0, listening;
		var context = options.context, listeners = options.listeners;

		// Delete all events listeners and "drop" events.
		if (!name && !callback && !context) {
			var ids = _.keys(listeners);
			for (; i < ids.length; i++) {
				listening = listeners[ids[i]];
				delete listeners[listening.id];
				delete listening.listeningTo[listening.objId];
			}
			return;
		}

		var names = name ? [name] : _.keys(events);
		for (; i < names.length; i++) {
			name = names[i];
			var handlers = events[name];

			// Bail out if there are no events stored.
			if (!handlers) break;

			// Replace events if there are any remaining.  Otherwise, clean up.
			var remaining = [];
			for (var j = 0; j < handlers.length; j++) {
				var handler = handlers[j];
				if (
					callback && callback !== handler.callback &&
					callback !== handler.callback._callback ||
					context && context !== handler.context
				) {
					remaining.push(handler);
				} else {
					listening = handler.listening;
					if (listening && --listening.count === 0) {
						delete listeners[listening.id];
						delete listening.listeningTo[listening.objId];
					}
				}
			}

			// Update tail event if the list has any events.  Otherwise, clean up.
			if (remaining.length) {
				events[name] = remaining;
			} else {
				delete events[name];
			}
		}
		if (_.size(events)) return events;
	};

	// Bind an event to only be triggered a single time. After the first time
	// the callback is invoked, its listener will be removed. If multiple events
	// are passed in using the space-separated syntax, the handler will fire
	// once for each event, not once for a combination of all events.
	Events.once =  function(name, callback, context) {
		// Map the event into a `{event: once}` object.
		var events = eventsApi(onceMap, {}, name, callback, _.bind(this.off, this));
		return this.on(events, void 0, context);
	};

	// Inversion-of-control versions of `once`.
	Events.listenToOnce =  function(obj, name, callback) {
		// Map the event into a `{event: once}` object.
		var events = eventsApi(onceMap, {}, name, callback, _.bind(this.stopListening, this, obj));
		return this.listenTo(obj, events);
	};

	// Reduces the event callbacks into a map of `{event: onceWrapper}`.
	// `offer` unbinds the `onceWrapper` after it has been called.
	var onceMap = function(map, name, callback, offer) {
		if (callback) {
			var once = map[name] = _.once(function() {
				offer(name, once);
				callback.apply(this, arguments);
			});
			once._callback = callback;
		}
		return map;
	};

	// Trigger one or many events, firing all bound callbacks. Callbacks are
	// passed the same arguments as `trigger` is, apart from the event name
	// (unless you're listening on `"all"`, which will cause your callback to
	// receive the true name of the event as the first argument).
	Events.trigger =  function(name) {
		if (!this._events) return this;

		var length = Math.max(0, arguments.length - 1);
		var args = Array(length);
		for (var i = 0; i < length; i++) args[i] = arguments[i + 1];

		eventsApi(triggerApi, this._events, name, void 0, args);
		return this;
	};

	// Handles triggering the appropriate event callbacks.
	var triggerApi = function(objEvents, name, cb, args) {
		if (objEvents) {
			var events = objEvents[name];
			var allEvents = objEvents.all;
			if (events && allEvents) allEvents = allEvents.slice();
			if (events) triggerEvents(events, args);
			if (allEvents) triggerEvents(allEvents, [name].concat(args));
		}
		return objEvents;
	};

	// A difficult-to-believe, but optimized internal dispatch function for
	// triggering events. Tries to keep the usual cases speedy (most internal
	// Backbone events have 3 arguments).
	var triggerEvents = function(events, args) {
		var ev, i = -1, l = events.length, a1 = args[0], a2 = args[1], a3 = args[2];
		switch (args.length) {
			case 0: while (++i < l) (ev = events[i]).callback.call(ev.ctx); return;
			case 1: while (++i < l) (ev = events[i]).callback.call(ev.ctx, a1); return;
			case 2: while (++i < l) (ev = events[i]).callback.call(ev.ctx, a1, a2); return;
			case 3: while (++i < l) (ev = events[i]).callback.call(ev.ctx, a1, a2, a3); return;
			default: while (++i < l) (ev = events[i]).callback.apply(ev.ctx, args); return;
		}
	};

	// Aliases for backwards compatibility.
	Events.bind   = Events.on;
	Events.unbind = Events.off;

	// Allow the `Backbone` object to serve as a global event bus, for folks who
	// want global "pubsub" in a convenient place.
	_.extend(Backbone, Events);

	// Backbone.Model
	// --------------

	// Backbone **Models** are the basic data object in the framework --
	// frequently representing a row in a table in a database on your server.
	// A discrete chunk of data and a bunch of useful, related methods for
	// performing computations and transformations on that data.

	// Create a new model with the specified attributes. A client id (`cid`)
	// is automatically generated and assigned for you.
	var Model = Backbone.Model = function(attributes, options) {
		var attrs = attributes || {};
		options || (options = {});
		this.cid = _.uniqueId(this.cidPrefix);
		this.attributes = {};
		if (options.collection) this.collection = options.collection;
		if (options.parse) attrs = this.parse(attrs, options) || {};
		attrs = _.defaults({}, attrs, _.result(this, 'defaults'));
		this.set(attrs, options);
		this.changed = {};
		this.initialize.apply(this, arguments);
	};

	// Attach all inheritable methods to the Model prototype.
	_.extend(Model.prototype, Events, {

		// A hash of attributes whose current and previous value differ.
		changed: null,

		// The value returned during the last failed validation.
		validationError: null,

		// The default name for the JSON `id` attribute is `"id"`. MongoDB and
		// CouchDB users may want to set this to `"_id"`.
		idAttribute: 'id',

		// The prefix is used to create the client id which is used to identify models locally.
		// You may want to override this if you're experiencing name clashes with model ids.
		cidPrefix: 'c',

		// Initialize is an empty function by default. Override it with your own
		// initialization logic.
		initialize: function(){},

		// Return a copy of the model's `attributes` object.
		toJSON: function(options) {
			return _.clone(this.attributes);
		},

		// Proxy `Backbone.sync` by default -- but override this if you need
		// custom syncing semantics for *this* particular model.
		sync: function() {
			return Backbone.sync.apply(this, arguments);
		},

		// Get the value of an attribute.
		get: function(attr) {
			return this.attributes[attr];
		},

		// Get the HTML-escaped value of an attribute.
		escape: function(attr) {
			return _.escape(this.get(attr));
		},

		// Returns `true` if the attribute contains a value that is not null
		// or undefined.
		has: function(attr) {
			return this.get(attr) != null;
		},

		// Special-cased proxy to underscore's `_.matches` method.
		matches: function(attrs) {
			return !!_.iteratee(attrs, this)(this.attributes);
		},

		// Set a hash of model attributes on the object, firing `"change"`. This is
		// the core primitive operation of a model, updating the data and notifying
		// anyone who needs to know about the change in state. The heart of the beast.
		set: function(key, val, options) {
			if (key == null) return this;

			// Handle both `"key", value` and `{key: value}` -style arguments.
			var attrs;
			if (typeof key === 'object') {
				attrs = key;
				options = val;
			} else {
				(attrs = {})[key] = val;
			}

			options || (options = {});

			// Run validation.
			if (!this._validate(attrs, options)) return false;

			// Extract attributes and options.
			var unset      = options.unset;
			var silent     = options.silent;
			var changes    = [];
			var changing   = this._changing;
			this._changing = true;

			if (!changing) {
				this._previousAttributes = _.clone(this.attributes);
				this.changed = {};
			}

			var current = this.attributes;
			var changed = this.changed;
			var prev    = this._previousAttributes;

			// For each `set` attribute, update or delete the current value.
			for (var attr in attrs) {
				val = attrs[attr];
				if (!_.isEqual(current[attr], val)) changes.push(attr);
				if (!_.isEqual(prev[attr], val)) {
					changed[attr] = val;
				} else {
					delete changed[attr];
				}
				unset ? delete current[attr] : current[attr] = val;
			}

			// Update the `id`.
			this.id = this.get(this.idAttribute);

			// Trigger all relevant attribute changes.
			if (!silent) {
				if (changes.length) this._pending = options;
				for (var i = 0; i < changes.length; i++) {
					this.trigger('change:' + changes[i], this, current[changes[i]], options);
				}
			}

			// You might be wondering why there's a `while` loop here. Changes can
			// be recursively nested within `"change"` events.
			if (changing) return this;
			if (!silent) {
				while (this._pending) {
					options = this._pending;
					this._pending = false;
					this.trigger('change', this, options);
				}
			}
			this._pending = false;
			this._changing = false;
			return this;
		},

		// Remove an attribute from the model, firing `"change"`. `unset` is a noop
		// if the attribute doesn't exist.
		unset: function(attr, options) {
			return this.set(attr, void 0, _.extend({}, options, {unset: true}));
		},

		// Clear all attributes on the model, firing `"change"`.
		clear: function(options) {
			var attrs = {};
			for (var key in this.attributes) attrs[key] = void 0;
			return this.set(attrs, _.extend({}, options, {unset: true}));
		},

		// Determine if the model has changed since the last `"change"` event.
		// If you specify an attribute name, determine if that attribute has changed.
		hasChanged: function(attr) {
			if (attr == null) return !_.isEmpty(this.changed);
			return _.has(this.changed, attr);
		},

		// Return an object containing all the attributes that have changed, or
		// false if there are no changed attributes. Useful for determining what
		// parts of a view need to be updated and/or what attributes need to be
		// persisted to the server. Unset attributes will be set to undefined.
		// You can also pass an attributes object to diff against the model,
		// determining if there *would be* a change.
		changedAttributes: function(diff) {
			if (!diff) return this.hasChanged() ? _.clone(this.changed) : false;
			var old = this._changing ? this._previousAttributes : this.attributes;
			var changed = {};
			for (var attr in diff) {
				var val = diff[attr];
				if (_.isEqual(old[attr], val)) continue;
				changed[attr] = val;
			}
			return _.size(changed) ? changed : false;
		},

		// Get the previous value of an attribute, recorded at the time the last
		// `"change"` event was fired.
		previous: function(attr) {
			if (attr == null || !this._previousAttributes) return null;
			return this._previousAttributes[attr];
		},

		// Get all of the attributes of the model at the time of the previous
		// `"change"` event.
		previousAttributes: function() {
			return _.clone(this._previousAttributes);
		},

		// Fetch the model from the server, merging the response with the model's
		// local attributes. Any changed attributes will trigger a "change" event.
		fetch: function(options) {
			options = _.extend({parse: true}, options);
			var model = this;
			var success = options.success;
			options.success = function(resp) {
				var serverAttrs = options.parse ? model.parse(resp, options) : resp;
				if (!model.set(serverAttrs, options)) return false;
				if (success) success.call(options.context, model, resp, options);
				model.trigger('sync', model, resp, options);
			};
			wrapError(this, options);
			return this.sync('read', this, options);
		},

		// Set a hash of model attributes, and sync the model to the server.
		// If the server returns an attributes hash that differs, the model's
		// state will be `set` again.
		save: function(key, val, options) {
			// Handle both `"key", value` and `{key: value}` -style arguments.
			var attrs;
			if (key == null || typeof key === 'object') {
				attrs = key;
				options = val;
			} else {
				(attrs = {})[key] = val;
			}

			options = _.extend({validate: true, parse: true}, options);
			var wait = options.wait;

			// If we're not waiting and attributes exist, save acts as
			// `set(attr).save(null, opts)` with validation. Otherwise, check if
			// the model will be valid when the attributes, if any, are set.
			if (attrs && !wait) {
				if (!this.set(attrs, options)) return false;
			} else {
				if (!this._validate(attrs, options)) return false;
			}

			// After a successful server-side save, the client is (optionally)
			// updated with the server-side state.
			var model = this;
			var success = options.success;
			var attributes = this.attributes;
			options.success = function(resp) {
				// Ensure attributes are restored during synchronous saves.
				model.attributes = attributes;
				var serverAttrs = options.parse ? model.parse(resp, options) : resp;
				if (wait) serverAttrs = _.extend({}, attrs, serverAttrs);
				if (serverAttrs && !model.set(serverAttrs, options)) return false;
				if (success) success.call(options.context, model, resp, options);
				model.trigger('sync', model, resp, options);
			};
			wrapError(this, options);

			// Set temporary attributes if `{wait: true}` to properly find new ids.
			if (attrs && wait) this.attributes = _.extend({}, attributes, attrs);

			var method = this.isNew() ? 'create' : (options.patch ? 'patch' : 'update');
			if (method === 'patch' && !options.attrs) options.attrs = attrs;
			var xhr = this.sync(method, this, options);

			// Restore attributes.
			this.attributes = attributes;

			return xhr;
		},

		// Destroy this model on the server if it was already persisted.
		// Optimistically removes the model from its collection, if it has one.
		// If `wait: true` is passed, waits for the server to respond before removal.
		destroy: function(options) {
			options = options ? _.clone(options) : {};
			var model = this;
			var success = options.success;
			var wait = options.wait;

			var destroy = function() {
				model.stopListening();
				model.trigger('destroy', model, model.collection, options);
			};

			options.success = function(resp) {
				if (wait) destroy();
				if (success) success.call(options.context, model, resp, options);
				if (!model.isNew()) model.trigger('sync', model, resp, options);
			};

			var xhr = false;
			if (this.isNew()) {
				_.defer(options.success);
			} else {
				wrapError(this, options);
				xhr = this.sync('delete', this, options);
			}
			if (!wait) destroy();
			return xhr;
		},

		// Default URL for the model's representation on the server -- if you're
		// using Backbone's restful methods, override this to change the endpoint
		// that will be called.
		url: function() {
			var base =
				_.result(this, 'urlRoot') ||
				_.result(this.collection, 'url') ||
				urlError();
			if (this.isNew()) return base;
			var id = this.get(this.idAttribute);
			return base.replace(/[^\/]$/, '$&/') + encodeURIComponent(id);
		},

		// **parse** converts a response into the hash of attributes to be `set` on
		// the model. The default implementation is just to pass the response along.
		parse: function(resp, options) {
			return resp;
		},

		// Create a new model with identical attributes to this one.
		clone: function() {
			return new this.constructor(this.attributes);
		},

		// A model is new if it has never been saved to the server, and lacks an id.
		isNew: function() {
			return !this.has(this.idAttribute);
		},

		// Check if the model is currently in a valid state.
		isValid: function(options) {
			return this._validate({}, _.defaults({validate: true}, options));
		},

		// Run validation against the next complete set of model attributes,
		// returning `true` if all is well. Otherwise, fire an `"invalid"` event.
		_validate: function(attrs, options) {
			if (!options.validate || !this.validate) return true;
			attrs = _.extend({}, this.attributes, attrs);
			var error = this.validationError = this.validate(attrs, options) || null;
			if (!error) return true;
			this.trigger('invalid', this, error, _.extend(options, {validationError: error}));
			return false;
		}

	});

	// Underscore methods that we want to implement on the Model, mapped to the
	// number of arguments they take.
	var modelMethods = { keys: 1, values: 1, pairs: 1, invert: 1, pick: 0,
		omit: 0, chain: 1, isEmpty: 1 };

	// Mix in each Underscore method as a proxy to `Model#attributes`.
	addUnderscoreMethods(Model, modelMethods, 'attributes');

	// Backbone.Collection
	// -------------------

	// If models tend to represent a single row of data, a Backbone Collection is
	// more analogous to a table full of data ... or a small slice or page of that
	// table, or a collection of rows that belong together for a particular reason
	// -- all of the messages in this particular folder, all of the documents
	// belonging to this particular author, and so on. Collections maintain
	// indexes of their models, both in order, and for lookup by `id`.

	// Create a new **Collection**, perhaps to contain a specific type of `model`.
	// If a `comparator` is specified, the Collection will maintain
	// its models in sort order, as they're added and removed.
	var Collection = Backbone.Collection = function(models, options) {
		options || (options = {});
		if (options.model) this.model = options.model;
		if (options.comparator !== void 0) this.comparator = options.comparator;
		this._reset();
		this.initialize.apply(this, arguments);
		if (models) this.reset(models, _.extend({silent: true}, options));
	};

	// Default options for `Collection#set`.
	var setOptions = {add: true, remove: true, merge: true};
	var addOptions = {add: true, remove: false};

	// Splices `insert` into `array` at index `at`.
	var splice = function(array, insert, at) {
		at = Math.min(Math.max(at, 0), array.length);
		var tail = Array(array.length - at);
		var length = insert.length;
		for (var i = 0; i < tail.length; i++) tail[i] = array[i + at];
		for (i = 0; i < length; i++) array[i + at] = insert[i];
		for (i = 0; i < tail.length; i++) array[i + length + at] = tail[i];
	};

	// Define the Collection's inheritable methods.
	_.extend(Collection.prototype, Events, {

		// The default model for a collection is just a **Backbone.Model**.
		// This should be overridden in most cases.
		model: Model,

		// Initialize is an empty function by default. Override it with your own
		// initialization logic.
		initialize: function(){},

		// The JSON representation of a Collection is an array of the
		// models' attributes.
		toJSON: function(options) {
			return this.map(function(model) { return model.toJSON(options); });
		},

		// Proxy `Backbone.sync` by default.
		sync: function() {
			return Backbone.sync.apply(this, arguments);
		},

		// Add a model, or list of models to the set. `models` may be Backbone
		// Models or raw JavaScript objects to be converted to Models, or any
		// combination of the two.
		add: function(models, options) {
			return this.set(models, _.extend({merge: false}, options, addOptions));
		},

		// Remove a model, or a list of models from the set.
		remove: function(models, options) {
			options = _.extend({}, options);
			var singular = !_.isArray(models);
			models = singular ? [models] : _.clone(models);
			var removed = this._removeModels(models, options);
			if (!options.silent && removed) this.trigger('update', this, options);
			return singular ? removed[0] : removed;
		},

		// Update a collection by `set`-ing a new list of models, adding new ones,
		// removing models that are no longer present, and merging models that
		// already exist in the collection, as necessary. Similar to **Model#set**,
		// the core operation for updating the data contained by the collection.
		set: function(models, options) {
			if (models == null) return;

			options = _.defaults({}, options, setOptions);
			if (options.parse && !this._isModel(models)) models = this.parse(models, options);

			var singular = !_.isArray(models);
			models = singular ? [models] : models.slice();

			var at = options.at;
			if (at != null) at = +at;
			if (at < 0) at += this.length + 1;

			var set = [];
			var toAdd = [];
			var toRemove = [];
			var modelMap = {};

			var add = options.add;
			var merge = options.merge;
			var remove = options.remove;

			var sort = false;
			var sortable = this.comparator && (at == null) && options.sort !== false;
			var sortAttr = _.isString(this.comparator) ? this.comparator : null;

			// Turn bare objects into model references, and prevent invalid models
			// from being added.
			var model;
			for (var i = 0; i < models.length; i++) {
				model = models[i];

				// If a duplicate is found, prevent it from being added and
				// optionally merge it into the existing model.
				var existing = this.get(model);
				if (existing) {
					if (merge && model !== existing) {
						var attrs = this._isModel(model) ? model.attributes : model;
						if (options.parse) attrs = existing.parse(attrs, options);
						existing.set(attrs, options);
						if (sortable && !sort) sort = existing.hasChanged(sortAttr);
					}
					if (!modelMap[existing.cid]) {
						modelMap[existing.cid] = true;
						set.push(existing);
					}
					models[i] = existing;

					// If this is a new, valid model, push it to the `toAdd` list.
				} else if (add) {
					model = models[i] = this._prepareModel(model, options);
					if (model) {
						toAdd.push(model);
						this._addReference(model, options);
						modelMap[model.cid] = true;
						set.push(model);
					}
				}
			}

			// Remove stale models.
			if (remove) {
				for (i = 0; i < this.length; i++) {
					model = this.models[i];
					if (!modelMap[model.cid]) toRemove.push(model);
				}
				if (toRemove.length) this._removeModels(toRemove, options);
			}

			// See if sorting is needed, update `length` and splice in new models.
			var orderChanged = false;
			var replace = !sortable && add && remove;
			if (set.length && replace) {
				orderChanged = this.length != set.length || _.some(this.models, function(model, index) {
						return model !== set[index];
					});
				this.models.length = 0;
				splice(this.models, set, 0);
				this.length = this.models.length;
			} else if (toAdd.length) {
				if (sortable) sort = true;
				splice(this.models, toAdd, at == null ? this.length : at);
				this.length = this.models.length;
			}

			// Silently sort the collection if appropriate.
			if (sort) this.sort({silent: true});

			// Unless silenced, it's time to fire all appropriate add/sort events.
			if (!options.silent) {
				for (i = 0; i < toAdd.length; i++) {
					if (at != null) options.index = at + i;
					model = toAdd[i];
					model.trigger('add', model, this, options);
				}
				if (sort || orderChanged) this.trigger('sort', this, options);
				if (toAdd.length || toRemove.length) this.trigger('update', this, options);
			}

			// Return the added (or merged) model (or models).
			return singular ? models[0] : models;
		},

		// When you have more items than you want to add or remove individually,
		// you can reset the entire set with a new list of models, without firing
		// any granular `add` or `remove` events. Fires `reset` when finished.
		// Useful for bulk operations and optimizations.
		reset: function(models, options) {
			options = options ? _.clone(options) : {};
			for (var i = 0; i < this.models.length; i++) {
				this._removeReference(this.models[i], options);
			}
			options.previousModels = this.models;
			this._reset();
			models = this.add(models, _.extend({silent: true}, options));
			if (!options.silent) this.trigger('reset', this, options);
			return models;
		},

		// Add a model to the end of the collection.
		push: function(model, options) {
			return this.add(model, _.extend({at: this.length}, options));
		},

		// Remove a model from the end of the collection.
		pop: function(options) {
			var model = this.at(this.length - 1);
			return this.remove(model, options);
		},

		// Add a model to the beginning of the collection.
		unshift: function(model, options) {
			return this.add(model, _.extend({at: 0}, options));
		},

		// Remove a model from the beginning of the collection.
		shift: function(options) {
			var model = this.at(0);
			return this.remove(model, options);
		},

		// Slice out a sub-array of models from the collection.
		slice: function() {
			return slice.apply(this.models, arguments);
		},

		// Get a model from the set by id.
		get: function(obj) {
			if (obj == null) return void 0;
			var id = this.modelId(this._isModel(obj) ? obj.attributes : obj);
			return this._byId[obj] || this._byId[id] || this._byId[obj.cid];
		},

		// Get the model at the given index.
		at: function(index) {
			if (index < 0) index += this.length;
			return this.models[index];
		},

		// Return models with matching attributes. Useful for simple cases of
		// `filter`.
		where: function(attrs, first) {
			return this[first ? 'find' : 'filter'](attrs);
		},

		// Return the first model with matching attributes. Useful for simple cases
		// of `find`.
		findWhere: function(attrs) {
			return this.where(attrs, true);
		},

		// Force the collection to re-sort itself. You don't need to call this under
		// normal circumstances, as the set will maintain sort order as each item
		// is added.
		sort: function(options) {
			var comparator = this.comparator;
			if (!comparator) throw new Error('Cannot sort a set without a comparator');
			options || (options = {});

			var length = comparator.length;
			if (_.isFunction(comparator)) comparator = _.bind(comparator, this);

			// Run sort based on type of `comparator`.
			if (length === 1 || _.isString(comparator)) {
				this.models = this.sortBy(comparator);
			} else {
				this.models.sort(comparator);
			}
			if (!options.silent) this.trigger('sort', this, options);
			return this;
		},

		// Pluck an attribute from each model in the collection.
		pluck: function(attr) {
			return _.invoke(this.models, 'get', attr);
		},

		// Fetch the default set of models for this collection, resetting the
		// collection when they arrive. If `reset: true` is passed, the response
		// data will be passed through the `reset` method instead of `set`.
		fetch: function(options) {
			options = _.extend({parse: true}, options);
			var success = options.success;
			var collection = this;
			options.success = function(resp) {
				var method = options.reset ? 'reset' : 'set';
				collection[method](resp, options);
				if (success) success.call(options.context, collection, resp, options);
				collection.trigger('sync', collection, resp, options);
			};
			wrapError(this, options);
			return this.sync('read', this, options);
		},

		// Create a new instance of a model in this collection. Add the model to the
		// collection immediately, unless `wait: true` is passed, in which case we
		// wait for the server to agree.
		create: function(model, options) {
			options = options ? _.clone(options) : {};
			var wait = options.wait;
			model = this._prepareModel(model, options);
			if (!model) return false;
			if (!wait) this.add(model, options);
			var collection = this;
			var success = options.success;
			options.success = function(model, resp, callbackOpts) {
				if (wait) collection.add(model, callbackOpts);
				if (success) success.call(callbackOpts.context, model, resp, callbackOpts);
			};
			model.save(null, options);
			return model;
		},

		// **parse** converts a response into a list of models to be added to the
		// collection. The default implementation is just to pass it through.
		parse: function(resp, options) {
			return resp;
		},

		// Create a new collection with an identical list of models as this one.
		clone: function() {
			return new this.constructor(this.models, {
				model: this.model,
				comparator: this.comparator
			});
		},

		// Define how to uniquely identify models in the collection.
		modelId: function (attrs) {
			return attrs[this.model.prototype.idAttribute || 'id'];
		},

		// Private method to reset all internal state. Called when the collection
		// is first initialized or reset.
		_reset: function() {
			this.length = 0;
			this.models = [];
			this._byId  = {};
		},

		// Prepare a hash of attributes (or other model) to be added to this
		// collection.
		_prepareModel: function(attrs, options) {
			if (this._isModel(attrs)) {
				if (!attrs.collection) attrs.collection = this;
				return attrs;
			}
			options = options ? _.clone(options) : {};
			options.collection = this;
			var model = new this.model(attrs, options);
			if (!model.validationError) return model;
			this.trigger('invalid', this, model.validationError, options);
			return false;
		},

		// Internal method called by both remove and set.
		_removeModels: function(models, options) {
			var removed = [];
			for (var i = 0; i < models.length; i++) {
				var model = this.get(models[i]);
				if (!model) continue;

				var index = this.indexOf(model);
				this.models.splice(index, 1);
				this.length--;

				if (!options.silent) {
					options.index = index;
					model.trigger('remove', model, this, options);
				}

				removed.push(model);
				this._removeReference(model, options);
			}
			return removed.length ? removed : false;
		},

		// Method for checking whether an object should be considered a model for
		// the purposes of adding to the collection.
		_isModel: function (model) {
			return model instanceof Model;
		},

		// Internal method to create a model's ties to a collection.
		_addReference: function(model, options) {
			this._byId[model.cid] = model;
			var id = this.modelId(model.attributes);
			if (id != null) this._byId[id] = model;
			model.on('all', this._onModelEvent, this);
		},

		// Internal method to sever a model's ties to a collection.
		_removeReference: function(model, options) {
			delete this._byId[model.cid];
			var id = this.modelId(model.attributes);
			if (id != null) delete this._byId[id];
			if (this === model.collection) delete model.collection;
			model.off('all', this._onModelEvent, this);
		},

		// Internal method called every time a model in the set fires an event.
		// Sets need to update their indexes when models change ids. All other
		// events simply proxy through. "add" and "remove" events that originate
		// in other collections are ignored.
		_onModelEvent: function(event, model, collection, options) {
			if ((event === 'add' || event === 'remove') && collection !== this) return;
			if (event === 'destroy') this.remove(model, options);
			if (event === 'change') {
				var prevId = this.modelId(model.previousAttributes());
				var id = this.modelId(model.attributes);
				if (prevId !== id) {
					if (prevId != null) delete this._byId[prevId];
					if (id != null) this._byId[id] = model;
				}
			}
			this.trigger.apply(this, arguments);
		}

	});

	// Underscore methods that we want to implement on the Collection.
	// 90% of the core usefulness of Backbone Collections is actually implemented
	// right here:
	var collectionMethods = { forEach: 3, each: 3, map: 3, collect: 3, reduce: 4,
		foldl: 4, inject: 4, reduceRight: 4, foldr: 4, find: 3, detect: 3, filter: 3,
		select: 3, reject: 3, every: 3, all: 3, some: 3, any: 3, include: 3, includes: 3,
		contains: 3, invoke: 0, max: 3, min: 3, toArray: 1, size: 1, first: 3,
		head: 3, take: 3, initial: 3, rest: 3, tail: 3, drop: 3, last: 3,
		without: 0, difference: 0, indexOf: 3, shuffle: 1, lastIndexOf: 3,
		isEmpty: 1, chain: 1, sample: 3, partition: 3, groupBy: 3, countBy: 3,
		sortBy: 3, indexBy: 3};

	// Mix in each Underscore method as a proxy to `Collection#models`.
	addUnderscoreMethods(Collection, collectionMethods, 'models');

	// Backbone.View
	// -------------

	// Backbone Views are almost more convention than they are actual code. A View
	// is simply a JavaScript object that represents a logical chunk of UI in the
	// DOM. This might be a single item, an entire list, a sidebar or panel, or
	// even the surrounding frame which wraps your whole app. Defining a chunk of
	// UI as a **View** allows you to define your DOM events declaratively, without
	// having to worry about render order ... and makes it easy for the view to
	// react to specific changes in the state of your models.

	// Creating a Backbone.View creates its initial element outside of the DOM,
	// if an existing element is not provided...
	var View = Backbone.View = function(options) {
		this.cid = _.uniqueId('view');
		_.extend(this, _.pick(options, viewOptions));
		this._ensureElement();
		this.initialize.apply(this, arguments);
	};

	// Cached regex to split keys for `delegate`.
	var delegateEventSplitter = /^(\S+)\s*(.*)$/;

	// List of view options to be set as properties.
	var viewOptions = ['model', 'collection', 'el', 'id', 'attributes', 'className', 'tagName', 'events'];

	// Set up all inheritable **Backbone.View** properties and methods.
	_.extend(View.prototype, Events, {

		// The default `tagName` of a View's element is `"div"`.
		tagName: 'div',

		// jQuery delegate for element lookup, scoped to DOM elements within the
		// current view. This should be preferred to global lookups where possible.
		$: function(selector) {
			return this.$el.find(selector);
		},

		// Initialize is an empty function by default. Override it with your own
		// initialization logic.
		initialize: function(){},

		// **render** is the core function that your view should override, in order
		// to populate its element (`this.el`), with the appropriate HTML. The
		// convention is for **render** to always return `this`.
		render: function() {
			return this;
		},

		// Remove this view by taking the element out of the DOM, and removing any
		// applicable Backbone.Events listeners.
		remove: function() {
			this._removeElement();
			this.stopListening();
			return this;
		},

		// Remove this view's element from the document and all event listeners
		// attached to it. Exposed for subclasses using an alternative DOM
		// manipulation API.
		_removeElement: function() {
			this.$el.remove();
		},

		// Change the view's element (`this.el` property) and re-delegate the
		// view's events on the new element.
		setElement: function(element) {
			this.undelegateEvents();
			this._setElement(element);
			this.delegateEvents();
			return this;
		},

		// Creates the `this.el` and `this.$el` references for this view using the
		// given `el`. `el` can be a CSS selector or an HTML string, a jQuery
		// context or an element. Subclasses can override this to utilize an
		// alternative DOM manipulation API and are only required to set the
		// `this.el` property.
		_setElement: function(el) {
			this.$el = el instanceof Backbone.$ ? el : Backbone.$(el);
			this.el = this.$el[0];
		},

		// Set callbacks, where `this.events` is a hash of
		//
		// *{"event selector": "callback"}*
		//
		//     {
		//       'mousedown .title':  'edit',
		//       'click .button':     'save',
		//       'click .open':       function(e) { ... }
		//     }
		//
		// pairs. Callbacks will be bound to the view, with `this` set properly.
		// Uses event delegation for efficiency.
		// Omitting the selector binds the event to `this.el`.
		delegateEvents: function(events) {
			events || (events = _.result(this, 'events'));
			if (!events) return this;
			this.undelegateEvents();
			for (var key in events) {
				var method = events[key];
				if (!_.isFunction(method)) method = this[method];
				if (!method) continue;
				var match = key.match(delegateEventSplitter);
				this.delegate(match[1], match[2], _.bind(method, this));
			}
			return this;
		},

		// Add a single event listener to the view's element (or a child element
		// using `selector`). This only works for delegate-able events: not `focus`,
		// `blur`, and not `change`, `submit`, and `reset` in Internet Explorer.
		delegate: function(eventName, selector, listener) {
			this.$el.on(eventName + '.delegateEvents' + this.cid, selector, listener);
			return this;
		},

		// Clears all callbacks previously bound to the view by `delegateEvents`.
		// You usually don't need to use this, but may wish to if you have multiple
		// Backbone views attached to the same DOM element.
		undelegateEvents: function() {
			if (this.$el) this.$el.off('.delegateEvents' + this.cid);
			return this;
		},

		// A finer-grained `undelegateEvents` for removing a single delegated event.
		// `selector` and `listener` are both optional.
		undelegate: function(eventName, selector, listener) {
			this.$el.off(eventName + '.delegateEvents' + this.cid, selector, listener);
			return this;
		},

		// Produces a DOM element to be assigned to your view. Exposed for
		// subclasses using an alternative DOM manipulation API.
		_createElement: function(tagName) {
			return document.createElement(tagName);
		},

		// Ensure that the View has a DOM element to render into.
		// If `this.el` is a string, pass it through `$()`, take the first
		// matching element, and re-assign it to `el`. Otherwise, create
		// an element from the `id`, `className` and `tagName` properties.
		_ensureElement: function() {
			if (!this.el) {
				var attrs = _.extend({}, _.result(this, 'attributes'));
				if (this.id) attrs.id = _.result(this, 'id');
				if (this.className) attrs['class'] = _.result(this, 'className');
				this.setElement(this._createElement(_.result(this, 'tagName')));
				this._setAttributes(attrs);
			} else {
				this.setElement(_.result(this, 'el'));
			}
		},

		// Set attributes from a hash on this view's element.  Exposed for
		// subclasses using an alternative DOM manipulation API.
		_setAttributes: function(attributes) {
			this.$el.attr(attributes);
		}

	});

	// Backbone.sync
	// -------------

	// Override this function to change the manner in which Backbone persists
	// models to the server. You will be passed the type of request, and the
	// model in question. By default, makes a RESTful Ajax request
	// to the model's `url()`. Some possible customizations could be:
	//
	// * Use `setTimeout` to batch rapid-fire updates into a single request.
	// * Send up the models as XML instead of JSON.
	// * Persist models via WebSockets instead of Ajax.
	//
	// Turn on `Backbone.emulateHTTP` in order to send `PUT` and `DELETE` requests
	// as `POST`, with a `_method` parameter containing the true HTTP method,
	// as well as all requests with the body as `application/x-www-form-urlencoded`
	// instead of `application/json` with the model in a param named `model`.
	// Useful when interfacing with server-side languages like **PHP** that make
	// it difficult to read the body of `PUT` requests.
	Backbone.sync = function(method, model, options) {
		var type = methodMap[method];

		// Default options, unless specified.
		_.defaults(options || (options = {}), {
			emulateHTTP: Backbone.emulateHTTP,
			emulateJSON: Backbone.emulateJSON
		});

		// Default JSON-request options.
		var params = {type: type, dataType: 'json'};

		// Ensure that we have a URL.
		if (!options.url) {
			params.url = _.result(model, 'url') || urlError();
		}

		// Ensure that we have the appropriate request data.
		if (options.data == null && model && (method === 'create' || method === 'update' || method === 'patch')) {
			params.contentType = 'application/json';
			params.data = JSON.stringify(options.attrs || model.toJSON(options));
		}

		// For older servers, emulate JSON by encoding the request into an HTML-form.
		if (options.emulateJSON) {
			params.contentType = 'application/x-www-form-urlencoded';
			params.data = params.data ? {model: params.data} : {};
		}

		// For older servers, emulate HTTP by mimicking the HTTP method with `_method`
		// And an `X-HTTP-Method-Override` header.
		if (options.emulateHTTP && (type === 'PUT' || type === 'DELETE' || type === 'PATCH')) {
			params.type = 'POST';
			if (options.emulateJSON) params.data._method = type;
			var beforeSend = options.beforeSend;
			options.beforeSend = function(xhr) {
				xhr.setRequestHeader('X-HTTP-Method-Override', type);
				if (beforeSend) return beforeSend.apply(this, arguments);
			};
		}

		// Don't process data on a non-GET request.
		if (params.type !== 'GET' && !options.emulateJSON) {
			params.processData = false;
		}

		// Pass along `textStatus` and `errorThrown` from jQuery.
		var error = options.error;
		options.error = function(xhr, textStatus, errorThrown) {
			options.textStatus = textStatus;
			options.errorThrown = errorThrown;
			if (error) error.call(options.context, xhr, textStatus, errorThrown);
		};

		// Make the request, allowing the user to override any Ajax options.
		var xhr = options.xhr = Backbone.ajax(_.extend(params, options));
		model.trigger('request', model, xhr, options);
		return xhr;
	};

	// Map from CRUD to HTTP for our default `Backbone.sync` implementation.
	var methodMap = {
		'create': 'POST',
		'update': 'PUT',
		'patch':  'PATCH',
		'delete': 'DELETE',
		'read':   'GET'
	};

	// Set the default implementation of `Backbone.ajax` to proxy through to `$`.
	// Override this if you'd like to use a different library.
	Backbone.ajax = function() {
		return Backbone.$.ajax.apply(Backbone.$, arguments);
	};

	// Backbone.Router
	// ---------------

	// Routers map faux-URLs to actions, and fire events when routes are
	// matched. Creating a new one sets its `routes` hash, if not set statically.
	var Router = Backbone.Router = function(options) {
		options || (options = {});
		if (options.routes) this.routes = options.routes;
		this._bindRoutes();
		this.initialize.apply(this, arguments);
	};

	// Cached regular expressions for matching named param parts and splatted
	// parts of route strings.
	var optionalParam = /\((.*?)\)/g;
	var namedParam    = /(\(\?)?:\w+/g;
	var splatParam    = /\*\w+/g;
	var escapeRegExp  = /[\-{}\[\]+?.,\\\^$|#\s]/g;

	// Set up all inheritable **Backbone.Router** properties and methods.
	_.extend(Router.prototype, Events, {

		// Initialize is an empty function by default. Override it with your own
		// initialization logic.
		initialize: function(){},

		// Manually bind a single named route to a callback. For example:
		//
		//     this.route('search/:query/p:num', 'search', function(query, num) {
		//       ...
		//     });
		//
		route: function(route, name, callback) {
			if (!_.isRegExp(route)) route = this._routeToRegExp(route);
			if (_.isFunction(name)) {
				callback = name;
				name = '';
			}
			if (!callback) callback = this[name];
			var router = this;
			Backbone.history.route(route, function(fragment) {
				var args = router._extractParameters(route, fragment);
				if (router.execute(callback, args, name) !== false) {
					router.trigger.apply(router, ['route:' + name].concat(args));
					router.trigger('route', name, args);
					Backbone.history.trigger('route', router, name, args);
				}
			});
			return this;
		},

		// Execute a route handler with the provided parameters.  This is an
		// excellent place to do pre-route setup or post-route cleanup.
		execute: function(callback, args, name) {
			if (callback) callback.apply(this, args);
		},

		// Simple proxy to `Backbone.history` to save a fragment into the history.
		navigate: function(fragment, options) {
			Backbone.history.navigate(fragment, options);
			return this;
		},

		// Bind all defined routes to `Backbone.history`. We have to reverse the
		// order of the routes here to support behavior where the most general
		// routes can be defined at the bottom of the route map.
		_bindRoutes: function() {
			if (!this.routes) return;
			this.routes = _.result(this, 'routes');
			var route, routes = _.keys(this.routes);
			while ((route = routes.pop()) != null) {
				this.route(route, this.routes[route]);
			}
		},

		// Convert a route string into a regular expression, suitable for matching
		// against the current location hash.
		_routeToRegExp: function(route) {
			route = route.replace(escapeRegExp, '\\$&')
				.replace(optionalParam, '(?:$1)?')
				.replace(namedParam, function(match, optional) {
					return optional ? match : '([^/?]+)';
				})
				.replace(splatParam, '([^?]*?)');
			return new RegExp('^' + route + '(?:\\?([\\s\\S]*))?$');
		},

		// Given a route, and a URL fragment that it matches, return the array of
		// extracted decoded parameters. Empty or unmatched parameters will be
		// treated as `null` to normalize cross-browser behavior.
		_extractParameters: function(route, fragment) {
			var params = route.exec(fragment).slice(1);
			return _.map(params, function(param, i) {
				// Don't decode the search params.
				if (i === params.length - 1) return param || null;
				return param ? decodeURIComponent(param) : null;
			});
		}

	});

	// Backbone.History
	// ----------------

	// Handles cross-browser history management, based on either
	// [pushState](http://diveintohtml5.info/history.html) and real URLs, or
	// [onhashchange](https://developer.mozilla.org/en-US/docs/DOM/window.onhashchange)
	// and URL fragments. If the browser supports neither (old IE, natch),
	// falls back to polling.
	var History = Backbone.History = function() {
		this.handlers = [];
		this.checkUrl = _.bind(this.checkUrl, this);

		// Ensure that `History` can be used outside of the browser.
		if (typeof window !== 'undefined') {
			this.location = window.location;
			this.history = window.history;
		}
	};

	// Cached regex for stripping a leading hash/slash and trailing space.
	var routeStripper = /^[#\/]|\s+$/g;

	// Cached regex for stripping leading and trailing slashes.
	var rootStripper = /^\/+|\/+$/g;

	// Cached regex for stripping urls of hash.
	var pathStripper = /#.*$/;

	// Has the history handling already been started?
	History.started = false;

	// Set up all inheritable **Backbone.History** properties and methods.
	_.extend(History.prototype, Events, {

		// The default interval to poll for hash changes, if necessary, is
		// twenty times a second.
		interval: 50,

		// Are we at the app root?
		atRoot: function() {
			var path = this.location.pathname.replace(/[^\/]$/, '$&/');
			return path === this.root && !this.getSearch();
		},

		// Does the pathname match the root?
		matchRoot: function() {
			var path = this.decodeFragment(this.location.pathname);
			var root = path.slice(0, this.root.length - 1) + '/';
			return root === this.root;
		},

		// Unicode characters in `location.pathname` are percent encoded so they're
		// decoded for comparison. `%25` should not be decoded since it may be part
		// of an encoded parameter.
		decodeFragment: function(fragment) {
			return decodeURI(fragment.replace(/%25/g, '%2525'));
		},

		// In IE6, the hash fragment and search params are incorrect if the
		// fragment contains `?`.
		getSearch: function() {
			var match = this.location.href.replace(/#.*/, '').match(/\?.+/);
			return match ? match[0] : '';
		},

		// Gets the true hash value. Cannot use location.hash directly due to bug
		// in Firefox where location.hash will always be decoded.
		getHash: function(window) {
			var match = (window || this).location.href.match(/#(.*)$/);
			return match ? match[1] : '';
		},

		// Get the pathname and search params, without the root.
		getPath: function() {
			var path = this.decodeFragment(
				this.location.pathname + this.getSearch()
			).slice(this.root.length - 1);
			return path.charAt(0) === '/' ? path.slice(1) : path;
		},

		// Get the cross-browser normalized URL fragment from the path or hash.
		getFragment: function(fragment) {
			if (fragment == null) {
				if (this._usePushState || !this._wantsHashChange) {
					fragment = this.getPath();
				} else {
					fragment = this.getHash();
				}
			}
			return fragment.replace(routeStripper, '');
		},

		// Start the hash change handling, returning `true` if the current URL matches
		// an existing route, and `false` otherwise.
		start: function(options) {
			if (History.started) throw new Error('Backbone.history has already been started');
			History.started = true;

			// Figure out the initial configuration. Do we need an iframe?
			// Is pushState desired ... is it available?
			this.options          = _.extend({root: '/'}, this.options, options);
			this.root             = this.options.root;
			this._wantsHashChange = this.options.hashChange !== false;
			this._hasHashChange   = 'onhashchange' in window && (document.documentMode === void 0 || document.documentMode > 7);
			this._useHashChange   = this._wantsHashChange && this._hasHashChange;
			this._wantsPushState  = !!this.options.pushState;
			this._hasPushState    = !!(this.history && this.history.pushState);
			this._usePushState    = this._wantsPushState && this._hasPushState;
			this.fragment         = this.getFragment();

			// Normalize root to always include a leading and trailing slash.
			this.root = ('/' + this.root + '/').replace(rootStripper, '/');

			// Transition from hashChange to pushState or vice versa if both are
			// requested.
			if (this._wantsHashChange && this._wantsPushState) {

				// If we've started off with a route from a `pushState`-enabled
				// browser, but we're currently in a browser that doesn't support it...
				if (!this._hasPushState && !this.atRoot()) {
					var root = this.root.slice(0, -1) || '/';
					this.location.replace(root + '#' + this.getPath());
					// Return immediately as browser will do redirect to new url
					return true;

					// Or if we've started out with a hash-based route, but we're currently
					// in a browser where it could be `pushState`-based instead...
				} else if (this._hasPushState && this.atRoot()) {
					this.navigate(this.getHash(), {replace: true});
				}

			}

			// Proxy an iframe to handle location events if the browser doesn't
			// support the `hashchange` event, HTML5 history, or the user wants
			// `hashChange` but not `pushState`.
			if (!this._hasHashChange && this._wantsHashChange && !this._usePushState) {
				this.iframe = document.createElement('iframe');
				this.iframe.src = 'javascript:0';
				this.iframe.style.display = 'none';
				this.iframe.tabIndex = -1;
				var body = document.body;
				// Using `appendChild` will throw on IE < 9 if the document is not ready.
				var iWindow = body.insertBefore(this.iframe, body.firstChild).contentWindow;
				iWindow.document.open();
				iWindow.document.close();
				iWindow.location.hash = '#' + this.fragment;
			}

			// Add a cross-platform `addEventListener` shim for older browsers.
			var addEventListener = window.addEventListener || function (eventName, listener) {
					return attachEvent('on' + eventName, listener);
				};

			// Depending on whether we're using pushState or hashes, and whether
			// 'onhashchange' is supported, determine how we check the URL state.
			if (this._usePushState) {
				addEventListener('popstate', this.checkUrl, false);
			} else if (this._useHashChange && !this.iframe) {
				addEventListener('hashchange', this.checkUrl, false);
			} else if (this._wantsHashChange) {
				this._checkUrlInterval = setInterval(this.checkUrl, this.interval);
			}

			if (!this.options.silent) return this.loadUrl();
		},

		// Disable Backbone.history, perhaps temporarily. Not useful in a real app,
		// but possibly useful for unit testing Routers.
		stop: function() {
			// Add a cross-platform `removeEventListener` shim for older browsers.
			var removeEventListener = window.removeEventListener || function (eventName, listener) {
					return detachEvent('on' + eventName, listener);
				};

			// Remove window listeners.
			if (this._usePushState) {
				removeEventListener('popstate', this.checkUrl, false);
			} else if (this._useHashChange && !this.iframe) {
				removeEventListener('hashchange', this.checkUrl, false);
			}

			// Clean up the iframe if necessary.
			if (this.iframe) {
				document.body.removeChild(this.iframe);
				this.iframe = null;
			}

			// Some environments will throw when clearing an undefined interval.
			if (this._checkUrlInterval) clearInterval(this._checkUrlInterval);
			History.started = false;
		},

		// Add a route to be tested when the fragment changes. Routes added later
		// may override previous routes.
		route: function(route, callback) {
			this.handlers.unshift({route: route, callback: callback});
		},

		// Checks the current URL to see if it has changed, and if it has,
		// calls `loadUrl`, normalizing across the hidden iframe.
		checkUrl: function(e) {
			var current = this.getFragment();

			// If the user pressed the back button, the iframe's hash will have
			// changed and we should use that for comparison.
			if (current === this.fragment && this.iframe) {
				current = this.getHash(this.iframe.contentWindow);
			}

			if (current === this.fragment) return false;
			if (this.iframe) this.navigate(current);
			this.loadUrl();
		},

		// Attempt to load the current URL fragment. If a route succeeds with a
		// match, returns `true`. If no defined routes matches the fragment,
		// returns `false`.
		loadUrl: function(fragment) {
			// If the root doesn't match, no routes can match either.
			if (!this.matchRoot()) return false;
			fragment = this.fragment = this.getFragment(fragment);
			return _.some(this.handlers, function(handler) {
				if (handler.route.test(fragment)) {
					handler.callback(fragment);
					return true;
				}
			});
		},

		// Save a fragment into the hash history, or replace the URL state if the
		// 'replace' option is passed. You are responsible for properly URL-encoding
		// the fragment in advance.
		//
		// The options object can contain `trigger: true` if you wish to have the
		// route callback be fired (not usually desirable), or `replace: true`, if
		// you wish to modify the current URL without adding an entry to the history.
		navigate: function(fragment, options) {
			if (!History.started) return false;
			if (!options || options === true) options = {trigger: !!options};

			// Normalize the fragment.
			fragment = this.getFragment(fragment || '');

			// Don't include a trailing slash on the root.
			var root = this.root;
			if (fragment === '' || fragment.charAt(0) === '?') {
				root = root.slice(0, -1) || '/';
			}
			var url = root + fragment;

			// Strip the hash and decode for matching.
			fragment = this.decodeFragment(fragment.replace(pathStripper, ''));

			if (this.fragment === fragment) return;
			this.fragment = fragment;

			// If pushState is available, we use it to set the fragment as a real URL.
			if (this._usePushState) {
				this.history[options.replace ? 'replaceState' : 'pushState']({}, document.title, url);

				// If hash changes haven't been explicitly disabled, update the hash
				// fragment to store history.
			} else if (this._wantsHashChange) {
				this._updateHash(this.location, fragment, options.replace);
				if (this.iframe && (fragment !== this.getHash(this.iframe.contentWindow))) {
					var iWindow = this.iframe.contentWindow;

					// Opening and closing the iframe tricks IE7 and earlier to push a
					// history entry on hash-tag change.  When replace is true, we don't
					// want this.
					if (!options.replace) {
						iWindow.document.open();
						iWindow.document.close();
					}

					this._updateHash(iWindow.location, fragment, options.replace);
				}

				// If you've told us that you explicitly don't want fallback hashchange-
				// based history, then `navigate` becomes a page refresh.
			} else {
				return this.location.assign(url);
			}
			if (options.trigger) return this.loadUrl(fragment);
		},

		// Update the hash location, either replacing the current entry, or adding
		// a new one to the browser history.
		_updateHash: function(location, fragment, replace) {
			if (replace) {
				var href = location.href.replace(/(javascript:|#).*$/, '');
				location.replace(href + '#' + fragment);
			} else {
				// Some browsers require that `hash` contains a leading #.
				location.hash = '#' + fragment;
			}
		}

	});

	// Create the default Backbone.history.
	Backbone.history = new History;

	// Helpers
	// -------

	// Helper function to correctly set up the prototype chain for subclasses.
	// Similar to `goog.inherits`, but uses a hash of prototype properties and
	// class properties to be extended.
	var extend = function(protoProps, staticProps) {
		var parent = this;
		var child;

		// The constructor function for the new subclass is either defined by you
		// (the "constructor" property in your `extend` definition), or defaulted
		// by us to simply call the parent constructor.
		if (protoProps && _.has(protoProps, 'constructor')) {
			child = protoProps.constructor;
		} else {
			child = function(){ return parent.apply(this, arguments); };
		}

		// Add static properties to the constructor function, if supplied.
		_.extend(child, parent, staticProps);

		// Set the prototype chain to inherit from `parent`, without calling
		// `parent` constructor function.
		var Surrogate = function(){ this.constructor = child; };
		Surrogate.prototype = parent.prototype;
		child.prototype = new Surrogate;

		// Add prototype properties (instance properties) to the subclass,
		// if supplied.
		if (protoProps) _.extend(child.prototype, protoProps);

		// Set a convenience property in case the parent's prototype is needed
		// later.
		child.__super__ = parent.prototype;

		return child;
	};

	// Set up inheritance for the model, collection, router, view and history.
	Model.extend = Collection.extend = Router.extend = View.extend = History.extend = extend;

	// Throw an error when a URL is needed, and none is supplied.
	var urlError = function() {
		throw new Error('A "url" property or function must be specified');
	};

	// Wrap an optional error callback with a fallback error event.
	var wrapError = function(model, options) {
		var error = options.error;
		options.error = function(resp) {
			if (error) error.call(options.context, model, resp, options);
			model.trigger('error', model, resp, options);
		};
	};

	return Backbone;

}));
}());
(function () {
;(function () {
	'use strict';

	/**
	 * @preserve FastClick: polyfill to remove click delays on browsers with touch UIs.
	 *
	 * @codingstandard ftlabs-jsv2
	 * @copyright The Financial Times Limited [All Rights Reserved]
	 * @license MIT License (see LICENSE.txt)
	 */

	/*jslint browser:true, node:true*/
	/*global define, Event, Node*/


	/**
	 * Instantiate fast-clicking listeners on the specified layer.
	 *
	 * @constructor
	 * @param {Element} layer The layer to listen on
	 * @param {Object} [options={}] The options to override the defaults
	 */
	function FastClick(layer, options) {
		var oldOnClick;

		options = options || {};

		/**
		 * Whether a click is currently being tracked.
		 *
		 * @type boolean
		 */
		this.trackingClick = false;


		/**
		 * Timestamp for when click tracking started.
		 *
		 * @type number
		 */
		this.trackingClickStart = 0;


		/**
		 * The element being tracked for a click.
		 *
		 * @type EventTarget
		 */
		this.targetElement = null;


		/**
		 * X-coordinate of touch start event.
		 *
		 * @type number
		 */
		this.touchStartX = 0;


		/**
		 * Y-coordinate of touch start event.
		 *
		 * @type number
		 */
		this.touchStartY = 0;


		/**
		 * ID of the last touch, retrieved from Touch.identifier.
		 *
		 * @type number
		 */
		this.lastTouchIdentifier = 0;


		/**
		 * Touchmove boundary, beyond which a click will be cancelled.
		 *
		 * @type number
		 */
		this.touchBoundary = options.touchBoundary || 10;


		/**
		 * The FastClick layer.
		 *
		 * @type Element
		 */
		this.layer = layer;

		/**
		 * The minimum time between tap(touchstart and touchend) events
		 *
		 * @type number
		 */
		this.tapDelay = options.tapDelay || 200;

		/**
		 * The maximum time for a tap
		 *
		 * @type number
		 */
		this.tapTimeout = options.tapTimeout || 700;

		if (FastClick.notNeeded(layer)) {
			return;
		}

		// Some old versions of Android don't have Function.prototype.bind
		function bind(method, context) {
			return function() { return method.apply(context, arguments); };
		}


		var methods = ['onMouse', 'onClick', 'onTouchStart', 'onTouchMove', 'onTouchEnd', 'onTouchCancel'];
		var context = this;
		for (var i = 0, l = methods.length; i < l; i++) {
			context[methods[i]] = bind(context[methods[i]], context);
		}

		// Set up event handlers as required
		if (deviceIsAndroid) {
			layer.addEventListener('mouseover', this.onMouse, true);
			layer.addEventListener('mousedown', this.onMouse, true);
			layer.addEventListener('mouseup', this.onMouse, true);
		}

		layer.addEventListener('click', this.onClick, true);
		layer.addEventListener('touchstart', this.onTouchStart, false);
		layer.addEventListener('touchmove', this.onTouchMove, false);
		layer.addEventListener('touchend', this.onTouchEnd, false);
		layer.addEventListener('touchcancel', this.onTouchCancel, false);

		// Hack is required for browsers that don't support Event#stopImmediatePropagation (e.g. Android 2)
		// which is how FastClick normally stops click events bubbling to callbacks registered on the FastClick
		// layer when they are cancelled.
		if (!Event.prototype.stopImmediatePropagation) {
			layer.removeEventListener = function(type, callback, capture) {
				var rmv = Node.prototype.removeEventListener;
				if (type === 'click') {
					rmv.call(layer, type, callback.hijacked || callback, capture);
				} else {
					rmv.call(layer, type, callback, capture);
				}
			};

			layer.addEventListener = function(type, callback, capture) {
				var adv = Node.prototype.addEventListener;
				if (type === 'click') {
					adv.call(layer, type, callback.hijacked || (callback.hijacked = function(event) {
							if (!event.propagationStopped) {
								callback(event);
							}
						}), capture);
				} else {
					adv.call(layer, type, callback, capture);
				}
			};
		}

		// If a handler is already declared in the element's onclick attribute, it will be fired before
		// FastClick's onClick handler. Fix this by pulling out the user-defined handler function and
		// adding it as listener.
		if (typeof layer.onclick === 'function') {

			// Android browser on at least 3.2 requires a new reference to the function in layer.onclick
			// - the old one won't work if passed to addEventListener directly.
			oldOnClick = layer.onclick;
			layer.addEventListener('click', function(event) {
				oldOnClick(event);
			}, false);
			layer.onclick = null;
		}
	}

	/**
	 * Windows Phone 8.1 fakes user agent string to look like Android and iPhone.
	 *
	 * @type boolean
	 */
	var deviceIsWindowsPhone = navigator.userAgent.indexOf("Windows Phone") >= 0;

	/**
	 * Android requires exceptions.
	 *
	 * @type boolean
	 */
	var deviceIsAndroid = navigator.userAgent.indexOf('Android') > 0 && !deviceIsWindowsPhone;


	/**
	 * iOS requires exceptions.
	 *
	 * @type boolean
	 */
	var deviceIsIOS = /iP(ad|hone|od)/.test(navigator.userAgent) && !deviceIsWindowsPhone;


	/**
	 * iOS 4 requires an exception for select elements.
	 *
	 * @type boolean
	 */
	var deviceIsIOS4 = deviceIsIOS && (/OS 4_\d(_\d)?/).test(navigator.userAgent);


	/**
	 * iOS 6.0-7.* requires the target element to be manually derived
	 *
	 * @type boolean
	 */
	var deviceIsIOSWithBadTarget = deviceIsIOS && (/OS [6-7]_\d/).test(navigator.userAgent);

	/**
	 * BlackBerry requires exceptions.
	 *
	 * @type boolean
	 */
	var deviceIsBlackBerry10 = navigator.userAgent.indexOf('BB10') > 0;

	/**
	 * Determine whether a given element requires a native click.
	 *
	 * @param {EventTarget|Element} target Target DOM element
	 * @returns {boolean} Returns true if the element needs a native click
	 */
	FastClick.prototype.needsClick = function(target) {
		switch (target.nodeName.toLowerCase()) {

			// Don't send a synthetic click to disabled inputs (issue #62)
			case 'button':
			case 'select':
			case 'textarea':
				if (target.disabled) {
					return true;
				}

				break;
			case 'input':

				// File inputs need real clicks on iOS 6 due to a browser bug (issue #68)
				if ((deviceIsIOS && target.type === 'file') || target.disabled) {
					return true;
				}

				break;
			case 'label':
			case 'iframe': // iOS8 homescreen apps can prevent events bubbling into frames
			case 'video':
				return true;
		}

		return (/\bneedsclick\b/).test(target.className);
	};


	/**
	 * Determine whether a given element requires a call to focus to simulate click into element.
	 *
	 * @param {EventTarget|Element} target Target DOM element
	 * @returns {boolean} Returns true if the element requires a call to focus to simulate native click.
	 */
	FastClick.prototype.needsFocus = function(target) {
		switch (target.nodeName.toLowerCase()) {
			case 'textarea':
				return true;
			case 'select':
				return !deviceIsAndroid;
			case 'input':
				switch (target.type) {
					case 'button':
					case 'checkbox':
					case 'file':
					case 'image':
					case 'radio':
					case 'submit':
						return false;
				}

				// No point in attempting to focus disabled inputs
				return !target.disabled && !target.readOnly;
			default:
				return (/\bneedsfocus\b/).test(target.className);
		}
	};


	/**
	 * Send a click event to the specified element.
	 *
	 * @param {EventTarget|Element} targetElement
	 * @param {Event} event
	 */
	FastClick.prototype.sendClick = function(targetElement, event) {
		var clickEvent, touch;

		// On some Android devices activeElement needs to be blurred otherwise the synthetic click will have no effect (#24)
		if (document.activeElement && document.activeElement !== targetElement) {
			document.activeElement.blur();
		}

		touch = event.changedTouches[0];

		// Synthesise a click event, with an extra attribute so it can be tracked
		clickEvent = document.createEvent('MouseEvents');
		clickEvent.initMouseEvent(this.determineEventType(targetElement), true, true, window, 1, touch.screenX, touch.screenY, touch.clientX, touch.clientY, false, false, false, false, 0, null);
		clickEvent.forwardedTouchEvent = true;
		targetElement.dispatchEvent(clickEvent);
	};

	FastClick.prototype.determineEventType = function(targetElement) {

		//Issue #159: Android Chrome Select Box does not open with a synthetic click event
		if (deviceIsAndroid && targetElement.tagName.toLowerCase() === 'select') {
			return 'mousedown';
		}

		return 'click';
	};


	/**
	 * @param {EventTarget|Element} targetElement
	 */
	FastClick.prototype.focus = function(targetElement) {
		var length;

		// Issue #160: on iOS 7, some input elements (e.g. date datetime month) throw a vague TypeError on setSelectionRange. These elements don't have an integer value for the selectionStart and selectionEnd properties, but unfortunately that can't be used for detection because accessing the properties also throws a TypeError. Just check the type instead. Filed as Apple bug #15122724.
		if (deviceIsIOS && targetElement.setSelectionRange && targetElement.type.indexOf('date') !== 0 && targetElement.type !== 'time' && targetElement.type !== 'month') {
			length = targetElement.value.length;
			targetElement.setSelectionRange(length, length);
		} else {
			targetElement.focus();
		}
	};


	/**
	 * Check whether the given target element is a child of a scrollable layer and if so, set a flag on it.
	 *
	 * @param {EventTarget|Element} targetElement
	 */
	FastClick.prototype.updateScrollParent = function(targetElement) {
		var scrollParent, parentElement;

		scrollParent = targetElement.fastClickScrollParent;

		// Attempt to discover whether the target element is contained within a scrollable layer. Re-check if the
		// target element was moved to another parent.
		if (!scrollParent || !scrollParent.contains(targetElement)) {
			parentElement = targetElement;
			do {
				if (parentElement.scrollHeight > parentElement.offsetHeight) {
					scrollParent = parentElement;
					targetElement.fastClickScrollParent = parentElement;
					break;
				}

				parentElement = parentElement.parentElement;
			} while (parentElement);
		}

		// Always update the scroll top tracker if possible.
		if (scrollParent) {
			scrollParent.fastClickLastScrollTop = scrollParent.scrollTop;
		}
	};


	/**
	 * @param {EventTarget} targetElement
	 * @returns {Element|EventTarget}
	 */
	FastClick.prototype.getTargetElementFromEventTarget = function(eventTarget) {

		// On some older browsers (notably Safari on iOS 4.1 - see issue #56) the event target may be a text node.
		if (eventTarget.nodeType === Node.TEXT_NODE) {
			return eventTarget.parentNode;
		}

		return eventTarget;
	};


	/**
	 * On touch start, record the position and scroll offset.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.onTouchStart = function(event) {
		var targetElement, touch, selection;

		// Ignore multiple touches, otherwise pinch-to-zoom is prevented if both fingers are on the FastClick element (issue #111).
		if (event.targetTouches.length > 1) {
			return true;
		}

		targetElement = this.getTargetElementFromEventTarget(event.target);
		touch = event.targetTouches[0];

		if (deviceIsIOS) {

			// Only trusted events will deselect text on iOS (issue #49)
			selection = window.getSelection();
			if (selection.rangeCount && !selection.isCollapsed) {
				return true;
			}

			if (!deviceIsIOS4) {

				// Weird things happen on iOS when an alert or confirm dialog is opened from a click event callback (issue #23):
				// when the user next taps anywhere else on the page, new touchstart and touchend events are dispatched
				// with the same identifier as the touch event that previously triggered the click that triggered the alert.
				// Sadly, there is an issue on iOS 4 that causes some normal touch events to have the same identifier as an
				// immediately preceeding touch event (issue #52), so this fix is unavailable on that platform.
				// Issue 120: touch.identifier is 0 when Chrome dev tools 'Emulate touch events' is set with an iOS device UA string,
				// which causes all touch events to be ignored. As this block only applies to iOS, and iOS identifiers are always long,
				// random integers, it's safe to to continue if the identifier is 0 here.
				if (touch.identifier && touch.identifier === this.lastTouchIdentifier) {
					event.preventDefault();
					return false;
				}

				this.lastTouchIdentifier = touch.identifier;

				// If the target element is a child of a scrollable layer (using -webkit-overflow-scrolling: touch) and:
				// 1) the user does a fling scroll on the scrollable layer
				// 2) the user stops the fling scroll with another tap
				// then the event.target of the last 'touchend' event will be the element that was under the user's finger
				// when the fling scroll was started, causing FastClick to send a click event to that layer - unless a check
				// is made to ensure that a parent layer was not scrolled before sending a synthetic click (issue #42).
				this.updateScrollParent(targetElement);
			}
		}

		this.trackingClick = true;
		this.trackingClickStart = event.timeStamp;
		this.targetElement = targetElement;

		this.touchStartX = touch.pageX;
		this.touchStartY = touch.pageY;

		// Prevent phantom clicks on fast double-tap (issue #36)
		if ((event.timeStamp - this.lastClickTime) < this.tapDelay) {
			event.preventDefault();
		}

		return true;
	};


	/**
	 * Based on a touchmove event object, check whether the touch has moved past a boundary since it started.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.touchHasMoved = function(event) {
		var touch = event.changedTouches[0], boundary = this.touchBoundary;

		if (Math.abs(touch.pageX - this.touchStartX) > boundary || Math.abs(touch.pageY - this.touchStartY) > boundary) {
			return true;
		}

		return false;
	};


	/**
	 * Update the last position.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.onTouchMove = function(event) {
		if (!this.trackingClick) {
			return true;
		}

		// If the touch has moved, cancel the click tracking
		if (this.targetElement !== this.getTargetElementFromEventTarget(event.target) || this.touchHasMoved(event)) {
			this.trackingClick = false;
			this.targetElement = null;
		}

		return true;
	};


	/**
	 * Attempt to find the labelled control for the given label element.
	 *
	 * @param {EventTarget|HTMLLabelElement} labelElement
	 * @returns {Element|null}
	 */
	FastClick.prototype.findControl = function(labelElement) {

		// Fast path for newer browsers supporting the HTML5 control attribute
		if (labelElement.control !== undefined) {
			return labelElement.control;
		}

		// All browsers under test that support touch events also support the HTML5 htmlFor attribute
		if (labelElement.htmlFor) {
			return document.getElementById(labelElement.htmlFor);
		}

		// If no for attribute exists, attempt to retrieve the first labellable descendant element
		// the list of which is defined here: http://www.w3.org/TR/html5/forms.html#category-label
		return labelElement.querySelector('button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea');
	};


	/**
	 * On touch end, determine whether to send a click event at once.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.onTouchEnd = function(event) {
		var forElement, trackingClickStart, targetTagName, scrollParent, touch, targetElement = this.targetElement;

		if (!this.trackingClick) {
			return true;
		}

		// Prevent phantom clicks on fast double-tap (issue #36)
		if ((event.timeStamp - this.lastClickTime) < this.tapDelay) {
			this.cancelNextClick = true;
			return true;
		}

		if ((event.timeStamp - this.trackingClickStart) > this.tapTimeout) {
			return true;
		}

		// Reset to prevent wrong click cancel on input (issue #156).
		this.cancelNextClick = false;

		this.lastClickTime = event.timeStamp;

		trackingClickStart = this.trackingClickStart;
		this.trackingClick = false;
		this.trackingClickStart = 0;

		// On some iOS devices, the targetElement supplied with the event is invalid if the layer
		// is performing a transition or scroll, and has to be re-detected manually. Note that
		// for this to function correctly, it must be called *after* the event target is checked!
		// See issue #57; also filed as rdar://13048589 .
		if (deviceIsIOSWithBadTarget) {
			touch = event.changedTouches[0];

			// In certain cases arguments of elementFromPoint can be negative, so prevent setting targetElement to null
			targetElement = document.elementFromPoint(touch.pageX - window.pageXOffset, touch.pageY - window.pageYOffset) || targetElement;
			targetElement.fastClickScrollParent = this.targetElement.fastClickScrollParent;
		}

		targetTagName = targetElement.tagName.toLowerCase();
		if (targetTagName === 'label') {
			forElement = this.findControl(targetElement);
			if (forElement) {
				this.focus(targetElement);
				if (deviceIsAndroid) {
					return false;
				}

				targetElement = forElement;
			}
		} else if (this.needsFocus(targetElement)) {

			// Case 1: If the touch started a while ago (best guess is 100ms based on tests for issue #36) then focus will be triggered anyway. Return early and unset the target element reference so that the subsequent click will be allowed through.
			// Case 2: Without this exception for input elements tapped when the document is contained in an iframe, then any inputted text won't be visible even though the value attribute is updated as the user types (issue #37).
			if ((event.timeStamp - trackingClickStart) > 100 || (deviceIsIOS && window.top !== window && targetTagName === 'input')) {
				this.targetElement = null;
				return false;
			}

			this.focus(targetElement);
			this.sendClick(targetElement, event);

			// Select elements need the event to go through on iOS 4, otherwise the selector menu won't open.
			// Also this breaks opening selects when VoiceOver is active on iOS6, iOS7 (and possibly others)
			if (!deviceIsIOS || targetTagName !== 'select') {
				this.targetElement = null;
				event.preventDefault();
			}

			return false;
		}

		if (deviceIsIOS && !deviceIsIOS4) {

			// Don't send a synthetic click event if the target element is contained within a parent layer that was scrolled
			// and this tap is being used to stop the scrolling (usually initiated by a fling - issue #42).
			scrollParent = targetElement.fastClickScrollParent;
			if (scrollParent && scrollParent.fastClickLastScrollTop !== scrollParent.scrollTop) {
				return true;
			}
		}

		// Prevent the actual click from going though - unless the target node is marked as requiring
		// real clicks or if it is in the whitelist in which case only non-programmatic clicks are permitted.
		if (!this.needsClick(targetElement)) {
			event.preventDefault();
			this.sendClick(targetElement, event);
		}

		return false;
	};


	/**
	 * On touch cancel, stop tracking the click.
	 *
	 * @returns {void}
	 */
	FastClick.prototype.onTouchCancel = function() {
		this.trackingClick = false;
		this.targetElement = null;
	};


	/**
	 * Determine mouse events which should be permitted.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.onMouse = function(event) {

		// If a target element was never set (because a touch event was never fired) allow the event
		if (!this.targetElement) {
			return true;
		}

		if (event.forwardedTouchEvent) {
			return true;
		}

		// Programmatically generated events targeting a specific element should be permitted
		if (!event.cancelable) {
			return true;
		}

		// Derive and check the target element to see whether the mouse event needs to be permitted;
		// unless explicitly enabled, prevent non-touch click events from triggering actions,
		// to prevent ghost/doubleclicks.
		if (!this.needsClick(this.targetElement) || this.cancelNextClick) {

			// Prevent any user-added listeners declared on FastClick element from being fired.
			if (event.stopImmediatePropagation) {
				event.stopImmediatePropagation();
			} else {

				// Part of the hack for browsers that don't support Event#stopImmediatePropagation (e.g. Android 2)
				event.propagationStopped = true;
			}

			// Cancel the event
			event.stopPropagation();
			event.preventDefault();

			return false;
		}

		// If the mouse event is permitted, return true for the action to go through.
		return true;
	};


	/**
	 * On actual clicks, determine whether this is a touch-generated click, a click action occurring
	 * naturally after a delay after a touch (which needs to be cancelled to avoid duplication), or
	 * an actual click which should be permitted.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.onClick = function(event) {
		var permitted;

		// It's possible for another FastClick-like library delivered with third-party code to fire a click event before FastClick does (issue #44). In that case, set the click-tracking flag back to false and return early. This will cause onTouchEnd to return early.
		if (this.trackingClick) {
			this.targetElement = null;
			this.trackingClick = false;
			return true;
		}

		// Very odd behaviour on iOS (issue #18): if a submit element is present inside a form and the user hits enter in the iOS simulator or clicks the Go button on the pop-up OS keyboard the a kind of 'fake' click event will be triggered with the submit-type input element as the target.
		if (event.target.type === 'submit' && event.detail === 0) {
			return true;
		}

		permitted = this.onMouse(event);

		// Only unset targetElement if the click is not permitted. This will ensure that the check for !targetElement in onMouse fails and the browser's click doesn't go through.
		if (!permitted) {
			this.targetElement = null;
		}

		// If clicks are permitted, return true for the action to go through.
		return permitted;
	};


	/**
	 * Remove all FastClick's event listeners.
	 *
	 * @returns {void}
	 */
	FastClick.prototype.destroy = function() {
		var layer = this.layer;

		if (deviceIsAndroid) {
			layer.removeEventListener('mouseover', this.onMouse, true);
			layer.removeEventListener('mousedown', this.onMouse, true);
			layer.removeEventListener('mouseup', this.onMouse, true);
		}

		layer.removeEventListener('click', this.onClick, true);
		layer.removeEventListener('touchstart', this.onTouchStart, false);
		layer.removeEventListener('touchmove', this.onTouchMove, false);
		layer.removeEventListener('touchend', this.onTouchEnd, false);
		layer.removeEventListener('touchcancel', this.onTouchCancel, false);
	};


	/**
	 * Check whether FastClick is needed.
	 *
	 * @param {Element} layer The layer to listen on
	 */
	FastClick.notNeeded = function(layer) {
		var metaViewport;
		var chromeVersion;
		var blackberryVersion;
		var firefoxVersion;

		// Devices that don't support touch don't need FastClick
		if (typeof window.ontouchstart === 'undefined') {
			return true;
		}

		// Chrome version - zero for other browsers
		chromeVersion = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [,0])[1];

		if (chromeVersion) {

			if (deviceIsAndroid) {
				metaViewport = document.querySelector('meta[name=viewport]');

				if (metaViewport) {
					// Chrome on Android with user-scalable="no" doesn't need FastClick (issue #89)
					if (metaViewport.content.indexOf('user-scalable=no') !== -1) {
						return true;
					}
					// Chrome 32 and above with width=device-width or less don't need FastClick
					if (chromeVersion > 31 && document.documentElement.scrollWidth <= window.outerWidth) {
						return true;
					}
				}

				// Chrome desktop doesn't need FastClick (issue #15)
			} else {
				return true;
			}
		}

		if (deviceIsBlackBerry10) {
			blackberryVersion = navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/);

			// BlackBerry 10.3+ does not require Fastclick library.
			// https://github.com/ftlabs/fastclick/issues/251
			if (blackberryVersion[1] >= 10 && blackberryVersion[2] >= 3) {
				metaViewport = document.querySelector('meta[name=viewport]');

				if (metaViewport) {
					// user-scalable=no eliminates click delay.
					if (metaViewport.content.indexOf('user-scalable=no') !== -1) {
						return true;
					}
					// width=device-width (or less than device-width) eliminates click delay.
					if (document.documentElement.scrollWidth <= window.outerWidth) {
						return true;
					}
				}
			}
		}

		// IE10 with -ms-touch-action: none or manipulation, which disables double-tap-to-zoom (issue #97)
		if (layer.style.msTouchAction === 'none' || layer.style.touchAction === 'manipulation') {
			return true;
		}

		// Firefox version - zero for other browsers
		firefoxVersion = +(/Firefox\/([0-9]+)/.exec(navigator.userAgent) || [,0])[1];

		if (firefoxVersion >= 27) {
			// Firefox 27+ does not have tap delay if the content is not zoomable - https://bugzilla.mozilla.org/show_bug.cgi?id=922896

			metaViewport = document.querySelector('meta[name=viewport]');
			if (metaViewport && (metaViewport.content.indexOf('user-scalable=no') !== -1 || document.documentElement.scrollWidth <= window.outerWidth)) {
				return true;
			}
		}

		// IE11: prefixed -ms-touch-action is no longer supported and it's recomended to use non-prefixed version
		// http://msdn.microsoft.com/en-us/library/windows/apps/Hh767313.aspx
		if (layer.style.touchAction === 'none' || layer.style.touchAction === 'manipulation') {
			return true;
		}

		return false;
	};


	/**
	 * Factory method for creating a FastClick object
	 *
	 * @param {Element} layer The layer to listen on
	 * @param {Object} [options={}] The options to override the defaults
	 */
	FastClick.attach = function(layer, options) {
		return new FastClick(layer, options);
	};


	if (typeof define === 'function' && typeof define.amd === 'object' && define.amd) {

		// AMD. Register as an anonymous module.
		define(function() {
			return FastClick;
		});
	} else if (typeof module !== 'undefined' && module.exports) {
		module.exports = FastClick.attach;
		module.exports.FastClick = FastClick;
	} else {
		window.FastClick = FastClick;
	}
}());
}());
(function () {
// doT.js
// 2011-2014, Laura Doktorova, https://github.com/olado/doT
// Licensed under the MIT license.

(function() {
	"use strict";

	var doT = {
		version: "1.0.3",
		templateSettings: {
			evaluate:    /\{\{([\s\S]+?(\}?)+)\}\}/g,
			interpolate: /\{\{=([\s\S]+?)\}\}/g,
			encode:      /\{\{!([\s\S]+?)\}\}/g,
			use:         /\{\{#([\s\S]+?)\}\}/g,
			useParams:   /(^|[^\w$])def(?:\.|\[[\'\"])([\w$\.]+)(?:[\'\"]\])?\s*\:\s*([\w$\.]+|\"[^\"]+\"|\'[^\']+\'|\{[^\}]+\})/g,
			define:      /\{\{##\s*([\w\.$]+)\s*(\:|=)([\s\S]+?)#\}\}/g,
			defineParams:/^\s*([\w$]+):([\s\S]+)/,
			conditional: /\{\{\?(\?)?\s*([\s\S]*?)\s*\}\}/g,
			iterate:     /\{\{~\s*(?:\}\}|([\s\S]+?)\s*\:\s*([\w$]+)\s*(?:\:\s*([\w$]+))?\s*\}\})/g,
			varname:	"it",
			strip:		true,
			append:		true,
			selfcontained: false,
			doNotSkipEncoded: false
		},
		template: undefined, //fn, compile template
		compile:  undefined  //fn, for express
	}, _globals;

	doT.encodeHTMLSource = function(doNotSkipEncoded) {
		var encodeHTMLRules = { "&": "&#38;", "<": "&#60;", ">": "&#62;", '"': "&#34;", "'": "&#39;", "/": "&#47;" },
			matchHTML = doNotSkipEncoded ? /[&<>"'\/]/g : /&(?!#?\w+;)|<|>|"|'|\//g;
		return function(code) {
			return code ? code.toString().replace(matchHTML, function(m) {return encodeHTMLRules[m] || m;}) : "";
		};
	};

	_globals = (function(){ return this || (0,eval)("this"); }());

	if (typeof module !== "undefined" && module.exports) {
		module.exports = doT;
	} else if (typeof define === "function" && define.amd) {
		define(function(){return doT;});
	} else {
		_globals.doT = doT;
	}

	var startend = {
		append: { start: "'+(",      end: ")+'",      startencode: "'+encodeHTML(" },
		split:  { start: "';out+=(", end: ");out+='", startencode: "';out+=encodeHTML(" }
	}, skip = /$^/;

	function resolveDefs(c, block, def) {
		return ((typeof block === "string") ? block : block.toString())
			.replace(c.define || skip, function(m, code, assign, value) {
				if (code.indexOf("def.") === 0) {
					code = code.substring(4);
				}
				if (!(code in def)) {
					if (assign === ":") {
						if (c.defineParams) value.replace(c.defineParams, function(m, param, v) {
							def[code] = {arg: param, text: v};
						});
						if (!(code in def)) def[code]= value;
					} else {
						new Function("def", "def['"+code+"']=" + value)(def);
					}
				}
				return "";
			})
			.replace(c.use || skip, function(m, code) {
				if (c.useParams) code = code.replace(c.useParams, function(m, s, d, param) {
					if (def[d] && def[d].arg && param) {
						var rw = (d+":"+param).replace(/'|\\/g, "_");
						def.__exp = def.__exp || {};
						def.__exp[rw] = def[d].text.replace(new RegExp("(^|[^\\w$])" + def[d].arg + "([^\\w$])", "g"), "$1" + param + "$2");
						return s + "def.__exp['"+rw+"']";
					}
				});
				var v = new Function("def", "return " + code)(def);
				return v ? resolveDefs(c, v, def) : v;
			});
	}

	function unescape(code) {
		return code.replace(/\\('|\\)/g, "$1").replace(/[\r\t\n]/g, " ");
	}

	doT.template = function(tmpl, c, def) {
		c = c || doT.templateSettings;
		var cse = c.append ? startend.append : startend.split, needhtmlencode, sid = 0, indv,
			str  = (c.use || c.define) ? resolveDefs(c, tmpl, def || {}) : tmpl;

		str = ("var out='" + (c.strip ? str.replace(/(^|\r|\n)\t* +| +\t*(\r|\n|$)/g," ")
			.replace(/\r|\n|\t|\/\*[\s\S]*?\*\//g,""): str)
			.replace(/'|\\/g, "\\$&")
			.replace(c.interpolate || skip, function(m, code) {
				return cse.start + unescape(code) + cse.end;
			})
			.replace(c.encode || skip, function(m, code) {
				needhtmlencode = true;
				return cse.startencode + unescape(code) + cse.end;
			})
			.replace(c.conditional || skip, function(m, elsecase, code) {
				return elsecase ?
					(code ? "';}else if(" + unescape(code) + "){out+='" : "';}else{out+='") :
					(code ? "';if(" + unescape(code) + "){out+='" : "';}out+='");
			})
			.replace(c.iterate || skip, function(m, iterate, vname, iname) {
				if (!iterate) return "';} } out+='";
				sid+=1; indv=iname || "i"+sid; iterate=unescape(iterate);
				return "';var arr"+sid+"="+iterate+";if(arr"+sid+"){var "+vname+","+indv+"=-1,l"+sid+"=arr"+sid+".length-1;while("+indv+"<l"+sid+"){"
					+vname+"=arr"+sid+"["+indv+"+=1];out+='";
			})
			.replace(c.evaluate || skip, function(m, code) {
				return "';" + unescape(code) + "out+='";
			})
		+ "';return out;")
			.replace(/\n/g, "\\n").replace(/\t/g, '\\t').replace(/\r/g, "\\r")
			.replace(/(\s|;|\}|^|\{)out\+='';/g, '$1').replace(/\+''/g, "");
		//.replace(/(\s|;|\}|^|\{)out\+=''\+/g,'$1out+=');

		if (needhtmlencode) {
			if (!c.selfcontained && _globals && !_globals._encodeHTML) _globals._encodeHTML = doT.encodeHTMLSource(c.doNotSkipEncoded);
			str = "var encodeHTML = typeof _encodeHTML !== 'undefined' ? _encodeHTML : ("
				+ doT.encodeHTMLSource.toString() + "(" + (c.doNotSkipEncoded || '') + "));"
				+ str;
		}
		try {
			return new Function(c.varname, str);
		} catch (e) {
			if (typeof console !== "undefined") console.log("Could not create a template function: " + str);
			throw e;
		}
	};

	doT.compile = function(tmpl, def) {
		return doT.template(tmpl, null, def);
	};
}());
}());
(function () {
'use strict';
/*global window */
/*global */

var $ = gi0788['/www/js/lib/jbone.js'] || window.$;

function Queue() {

	this.queue = [];
	this.index = 0;
	this.deferred = $.Deferred();

}

Queue.prototype = {

	push: function (data) {
		this.queue.push(data);
	},

	getNext: function () {
		return this.queue[this.index++];
	},

	canNext: function () {
		return this.queue.length > this.index;
	},

	run: function () {

		var self = this,
			result;

		if (!self.canNext()) {
			return self.end();
		}

		result = self.getNext()();
		if (result && result.always) {
			result.always(self.run.bind(self));
		} else {
			self.run();
		}

		return self.deferred.promise();

	},
	end: function () {
		return this.deferred.resolve();
	}

};

gi0788['/www/js/lib/queue.js'] = Queue;
}());
(function () {
'use strict';
/*global window */

var Backbone = gi0788['/www/js/lib/backbone.js'] || window.Backbone;
var mediator = gi0788['/www/js/services/mediator.js'] || window.mediator;
var log = gi0788['/www/js/services/log.js'] || window.log;

var win = window,
	doc = win.document,
	docElem = doc.documentElement,
	device,
	Device = Backbone.Model.extend({

		defaults: {
			width: 0,
			height: 0,
			orientation: '',
			minScreenSize: 153600 // 153600 = 320 * 480
		},

		eventTypes: {
			down: ['mousedown', 'touchstart'],
			move: ['mousemove', 'touchmove'],
			up: ['mouseup', 'touchend']
		},

		events: {},

		mapEventType: {
			mousedown: 'down',
			touchstart: 'down',
			mousemove: 'move',
			touchmove: 'move',
			mouseup: 'up',
			touchend: 'up'
		},

		initialize: function () {

			var device = this;

			device.clearLogMoving();

			device.clearLogDown();

			device.collectInfo();

			device.setPointData({x: 0, y: 0, scale: 1});

			device.bindEventListeners();

			mediator.installTo(device);

			device.onResize();

		},

		collectInfo: function () {

			var device = this,
				isTouch = 'ontouchstart' in doc,
				eventTypesIndex = Number(isTouch),
				types = device.eventTypes,
				events = device.events;

			// set is touch
			device.set('isTouch', isTouch);

			// set events names - touch or mouse
			_.each(types, function (typesArr, key) {
				events[key] = typesArr[eventTypesIndex];
			});

		},

		bindEventListeners: function () {

			var device = this,
				events = device.events,
				body = doc.body;

			win.addEventListener('resize', function () {
				device.onResize();
			}, false);

			body.addEventListener(events.down, function (e) {
				device.onDown(e);
			}, false);

			body.addEventListener(events.move, function (e) {
				device.onMove(e);
			}, false);

			body.addEventListener(events.up, function (e) {
				device.onUp(e);
			}, false);

			device.on('change:actionIsActive', function (self, actionIsActive) {
				self.publish('deviceAction:isActive', actionIsActive, self.logMovingGetLast());
			});

		},

		getEvents: function (e) {

			//e = e.originalEvent; // for jQ like

			var device = this,
				evt = {
					events: [],
					length: 0,
					type: ''
				},
				events = e.touches || [e];

			evt.length = events.length;
			evt.type = device.mapEventType[e.type];

			_.each(events, function (e) {
				evt.events.push({
					x: e.clientX,
					y: e.clientY
				});
			});

			return evt;

		},

		getAverageXY: function (arr) {

			var sumX = 0,
				sumY = 0,
				count = arr.length;

			_.each(arr, function (xy) {
				sumX += xy.x;
				sumY += xy.y;
			});

			return {
				x: sumX / count,
				y: sumY / count
			};

		},

		logDown: function (events) {

			var device = this,
				logDown = device.get('log-down'),
				xy;

			if (events.length !== 1) {
				return;
			}

			if (logDown.length > 10) {
				logDown.shift(); // delete first item
			}

			xy = events.events[0];

			logDown.push({
				x: xy.x,
				y: xy.y,
				timeStamp: Date.now()
			});

		},

		clearLogDown: function () {
			return this.set('log-down', []);
		},

		logMoving: function (xy) {

			var device = this,
				logMoving = device.get('log-moving');

			if (logMoving.length > 10) {
				logMoving.shift(); // delete first item
			}

			logMoving.push({
				x: xy.x,
				y: xy.y,
				timeStamp: Date.now()
			});

			//device.set('log-moving', logMoving);

		},

		clearLogMoving: function () {
			return this.set('log-moving', []);
		},

		logMovingGetLast: function () {

			var logMoving = this.get('log-moving');

			return logMoving[logMoving.length - 1];

		},

		getPinchData: function (events) {

			var device = this,
				startEvents = device.get('pinchStartEvents'),

				startXY0 = startEvents[0],
				startXY1 = startEvents[1],
				startXY0X = startXY0.x,
				startXY0Y = startXY0.y,
				startXY1X = startXY1.x,
				startXY1Y = startXY1.y,
				startVectorX = startXY1X - startXY0X,
				startVectorY = startXY1Y - startXY0Y,

				currentXY0 = events[0],
				currentXY1 = events[1],
				currentXY0X = currentXY0.x,
				currentXY0Y = currentXY0.y,
				currentXY1X = currentXY1.x,
				currentXY1Y = currentXY1.y,
				currentVectorX = currentXY1X - currentXY0X,
				currentVectorY = currentXY1Y - currentXY0Y,

				before,
				after,
				startAngle,
				currentAngle,
				deltaAngle;

			// get scale
			before = Math.pow(startXY0X - startXY1X, 2) + Math.pow(startXY0Y - startXY1Y, 2);
			before = Math.pow(before, 0.5);

			after = Math.pow(currentXY0X - currentXY1X, 2) + Math.pow(currentXY0Y - currentXY1Y, 2);
			after = Math.pow(after, 0.5);

			// get angle
			startAngle = Math.atan2(startVectorY, startVectorX);
			currentAngle = Math.atan2(currentVectorY, currentVectorX);
			deltaAngle = (currentAngle - startAngle) * 180 / Math.PI;

			return {
				scale: (after / before) || 1,
				deltaAngle: deltaAngle
			}

		},

		setPointData: function (xys) {

			var device = this;

			if (xys.hasOwnProperty('x')) {
				device.set('pointDataX', xys.x);
			}

			if (xys.hasOwnProperty('y')) {
				device.set('pointDataY', xys.y);
			}

			if (xys.hasOwnProperty('scale')) {
				device.set('pointDataScale', xys.scale);
			}

			return device;
		},

		getPointData: function () {

			var device = this;

			return {
				x: device.get('pointDataX'),
				y: device.get('pointDataY'),
				scale: device.get('pointDataScale')
			};

		},

		onDown: function (e) {

			var device = this,
				events = device.getEvents(e),
				startEventXY = device.getAverageXY(events.events),
				pointData = device.getPointData();

			// set start events position
			device.set('startDownEventXY', startEventXY);

			// set start point position
			device.set('startPointData', pointData);
			device.set('currentPointData', pointData);

			device.clearLogMoving();
			device.logMoving(startEventXY);
			device.logDown(events);

			device.set('actionIsActive', true);

			// detect start zooming
			if (events.length === 2) {
				device.set('pinchIsActive', true);
				device.set('pinchStartEvents', events.events);
			} else {
				device.set('pinchIsActive', false);
			}

		},

		onMove: function (e) {

			if (!this.get('actionIsActive')) {
				return false;
			}

			var device = this,
				events = device.getEvents(e),
				currentEventXY = device.getAverageXY(events.events),
				currentPointData = device.get('currentPointData'),
				logMoving = device.get('log-moving'),
				lastEventXY = logMoving[logMoving.length - 1],
				pinchData,
				x,
				y,
				dx,
				dy,
				scale;

			dx = currentEventXY.x - lastEventXY.x;
			x = currentPointData.x + dx;

			dy = currentEventXY.y - lastEventXY.y;
			y = currentPointData.y + dy;

			device.set('currentPointData', {
				x: x,
				y: y
			});

			if (device.get('pinchIsActive')) { // zooming
				pinchData = device.getPinchData(events.events);
				scale = pinchData.scale;
				device.setPointData({
					x: x * scale,
					y: y * scale,
					scale: scale
				});
			} else { // just moving
				device.setPointData({
					x: x,
					y: y
				});
			}

			device.publish('deviceAction:moving', {
				x: currentEventXY.x,
				y: currentEventXY.y,
				dx: dx,
				dy: dy
			});

			device.logMoving(currentEventXY);

		},

		onUp: function (e) {

			var device = this,
				events = device.getEvents(e),
				eventsArr = events.events,
				eventsArrLength = eventsArr.length,
				isTouch = device.get('isTouch'),
				pinchIsActive = device.get('pinchIsActive');

			// try to detect double click
			// and auto trigger event

			if (!eventsArrLength && isTouch && pinchIsActive) { // 2 fingers -> 0 finger
				device.set('pinchIsActive', false);
				device.set('actionIsActive', false);
				device.checkDblTap();
				//device.setContainerSize();
				return;
			}

			if (!eventsArrLength || !isTouch) { // if is not touch device - stop moving
				device.set('actionIsActive', false);
				//this.sliding();
				device.checkDblTap();
				device.clearLogMoving();
				return;
			}

			if (eventsArrLength === 1 && isTouch) { // 2 fingers -> 1 finger
				device.set('pinchIsActive', false);
				//device.setContainerSize();
				device.onDown(e);
			}

		},

		checkDblTap: function () {

			var device = this,
				downLog = device.get('log-down'),
				downLogLength = downLog.length,
				lastDown = downLog[downLogLength - 1],
				preLastDown = downLog[downLogLength - 2];

			if ( downLogLength < 2 ) {
				return;
			}

			// timer check
			if ( (lastDown.timeStamp - preLastDown.timeStamp) > 300 ) {
				return;
			}

			// coordinates check
			if ( Math.abs(lastDown.x - preLastDown.x) > 10 || Math.abs(lastDown.y - preLastDown.y) > 10 ) {
				return;
			}

			device.publish('deviceAction:dblTap', lastDown);

		},

		onResize: function () {

			var device = this,
				width = docElem.clientWidth,
				height = docElem.clientHeight,
				orientation = width > height ? '-' : '|',
				data = {
					width: width,
					height: height,
					orientation: orientation,
					spaceSize: width * height
				};

			device.set(data);

			device.trigger('resize');

			device.publish('resize', data);

		}

	});

device = new Device();

gi0788['/www/js/services/device.js'] = device;
}());
(function () {
'use strict';
/*global window, Date */

var info = gi0788['/www/js/services/info.js'] || window.info;

var win = window,
	androidAds = {
		attr: {},
		minShowPeriod: 2 * 60e3,
		set: function (key, value) {
			this.attr[key] = value;
			return this;
		},
		get: function (key) {
			return this.attr[key];
		},
		showAd: function () {

			var ad = this,
				now,
				lastShow;

			if ( !ad.get('adsIsAvailable') ) {
				return;
			}

			now = Date.now();
			lastShow = ad.get('lastShow') || 0;

			if ( now - lastShow >= ad.minShowPeriod ) {
				ad.set('lastShow', now);
				Android.displayInterstitial();
			}

		},
		init: function () {

			var ad = this;

			ad.showAd = ad.showAd.bind(ad);

			ad.set('adsIsAvailable', (typeof Android !== 'undefined') && info.isNormal );

		}

	};

	androidAds.init();

gi0788['/www/js/services/android-ads.js'] = androidAds;

}());
(function () {
'use strict';
/*global window */

var en = {
	language: 'Language',
	languageName: 'English',
	shortLanguageName: 'Eng',
	appName: 'Tangram-2',

	newVersionIsAvailable: 'A new version of this app is available. Load it?',

	notification: {},

	// rate us block
	rateUs: {
		header: 'If you like out app, please rate it. Thanks!',
		rateNow: 'Rate Now',
		remindMeLater: 'Remind Me Later',
		noThanks: 'No, Thanks'
	},

	// tangram

	menu: 'menu',
	exit: 'exit',
	reset: 'reset',

		// title menu
	'play-regular': 'play regular',
	'play-master': 'play master',
	//'share': 'share',

		// sections
	sections: 'sections',
	tangram: 'tangram',

	person: 'person',
	animal: 'animal',

	// settings

	settings: 'settings',
	//timer: 'timer',
	//sound: 'sound',
	'tangram-texture': 'tangram texture'
	//about: 'about'
	//'e-mail': 'e-mail',
	//'other-apps': 'other apps'

};

gi0788['/www/js/i18n/en.js'] = en;
}());
(function () {
'use strict';
/*global window */

var ru = {
	language: 'Язык',
	languageName: 'Русский',
	shortLanguageName: 'Рус',
	appName: 'Танграм-2',

	notification: {
	},

	// rate us block
	rateUs: {
		header: 'Если Вам понравилось наше приложение, пожалуйста, оцените его. Спасибо!',
		rateNow: 'Оценить',
		remindMeLater: 'Напомнить позже',
		noThanks: 'Нет, спасибо'
	},

	// tangram
	tangram: 'танграм',
	person: 'человечки'

};

gi0788['/www/js/i18n/ru.js'] = ru;
}());
(function () {
'use strict';
/*global window */

var info = gi0788['/www/js/services/info.js'] || window.info;
var en = gi0788['/www/js/i18n/en.js'] || window.en;
var ru = gi0788['/www/js/i18n/ru.js'] || window.ru;

var lang = {

	attr: {},

	languages: { en: en, ru: ru },

	set: function (lang) {
		this.attr = this.languages[lang];
	},

	get: function (key) {
		return key ? this.attr[key] : this.attr;
	}

};

lang.set(info.get('language'));

gi0788['/www/js/services/lang.js'] = lang;



}());
(function () {
'use strict';
/*global window */

var doT = gi0788['/www/js/lib/dot.js'] || window.doT;

var doc = window.document,
	templateMaster = {
		templateSelector: '.js-template',
		mainJsSelector: '.js-main-js',
		tmplText: {},
		tmplFn: {},
		init: function () {

			var tm = this,
				templates = doc.querySelectorAll(tm.templateSelector),
				mainJs = doc.querySelector(tm.mainJsSelector);

			Array.prototype.forEach.call(templates, function (tmplNode) {

				var name = tmplNode.getAttribute('data-name'),
					text = tmplNode.textContent.replace(/\<\!\-\-[\s\S]+?\-\-\>/gi, '').trim();

				tm.tmplText[name] = text;
				tm.tmplFn[name] = doT.template(text);

				tmplNode.parentNode.removeChild(tmplNode);

			});

			return mainJs && mainJs.parentNode.removeChild(mainJs);

		},
		get: function (name) {
			return this.tmplFn[name];
		}

	};

templateMaster.init();

gi0788['/www/js/services/template-master.js'] = templateMaster;



}());
(function () {
'use strict';
/*global window */

var $ = gi0788['/www/js/lib/jbone.js'] || window.$;
var Queue = gi0788['/www/js/lib/queue.js'] || window.Queue;

var arrayProto = Array.prototype,
	win = window,
//doc = win.document,
//docElem = doc.documentElement,
	util = {

		tempDiv: document.createElement('div'),
		forEach: arrayProto.forEach,
		DOMURL: win.URL || win.webkitURL || win,

		svgBoundingBox: function (svg) {

			var maxX = -Infinity,
				maxY = -Infinity,
				minX = Infinity,
				minY = Infinity,
				polygons = svg.querySelectorAll('polygon');

			arrayProto.forEach.call(polygons, function (polygon) {

				var polygonPoints = polygon.points,
					len,
					i,
					point,
					x,
					y;

				for (i = 0, len = polygonPoints.length; i < len; i += 1) {
					point = polygonPoints.getItem(i);

					x = point.x;
					y = point.y;

					if (x > maxX) {
						maxX = x;
					}

					if (y > maxY) {
						maxY = y;
					}

					if (x < minX) {
						minX = x;
					}

					if (y < minY) {
						minY = y;
					}

				}

			});

			return {
				maxX: maxX,
				maxY: maxY,
				minX: minX,
				minY: minY,
				width: parseFloat(svg.getAttribute('width')),
				height: parseFloat(svg.getAttribute('height')),
				sizeX: maxX - minX,
				sizeY: maxY - minY
			}

		},

		svgToCanvas: function (data, cb) { // data -> svg + padding

			var util = this,
				svg = data.svg,
				svgBoundingBox = util.svgBoundingBox(svg),
				svgText = util.getOuterHtml(svg),
				minX = svgBoundingBox.minX,
				minY = svgBoundingBox.minY,
				sizeX = svgBoundingBox.sizeX,
				sizeY = svgBoundingBox.sizeY,
				padding = data.padding || 0, // 5 px
				dblPadding = padding * 2,
				canvas = document.createElement('canvas'),
			//canvasStyle = canvas.style,
				ctx = canvas.getContext('2d'),
				DOMURL = util.DOMURL,
				img = new Image(),
				svgBlob,
				url,
				left = minX - padding,
				top = minY - padding;

			sizeX += dblPadding;
			sizeY += dblPadding;

			canvas.width = sizeX;
			canvas.height = sizeY;

			svgBlob = new Blob([svgText], {type: 'image/svg+xml;charset=utf-8'});
			url = DOMURL.createObjectURL(svgBlob);

			img.addEventListener('load', function onLoad() {
				img.removeEventListener('load', onLoad, false);
				ctx.drawImage(this, left, top, sizeX, sizeY, 0, 0, sizeX, sizeY);
				DOMURL.revokeObjectURL(url);
				cb({
					canvas: canvas,
					left: left,
					top: top,
					sizeX: sizeX,
					sizeY: sizeY,
					width: svgBoundingBox.width,
					height: svgBoundingBox.height
				});
			}, false);

			img.addEventListener('error', function (e) {
				console.log('error');
				console.log(e);
			}, false);

			img.src = url;

		},

		toArray: function (likeArray) {

			return Array.prototype.slice.call(likeArray);

		},

		getOuterHtml: function (node) {

			var util = this,
				tempDiv = util.tempDiv,
				outerHtml,
				cloneNode = node.cloneNode(true);

			tempDiv.appendChild(cloneNode);

			outerHtml = tempDiv.innerHTML;
			tempDiv.removeChild(cloneNode);

			return outerHtml;

		},

		arrayRemoveByValue: function (arr, value) {
			var index = arr.indexOf(value);
			if (index !== -1) {
				arr.splice(index, 1);
			}
			return arr;
		},

		getBetween: function (min, current, max) {
			current = Math.min(current, max);
			current = Math.max(current, min);
			return current;
		},

		getRandomBetween: function (min, max) {
			return Math.floor(Math.random() * (max - min) + min);
		},

		toTop: function () {
			win.scrollTo(0, 0);
		},

		copyJSON: function (obj) { // external
			return JSON.parse(JSON.stringify(obj));
		},
		formatTime: function (number) {
			return number >= 10 ? number : '0' + number;
		},
		formatMs: function (ms) {

			var util = this,
				date = new Date(ms);

			return {
				d: util.formatTime(date.getUTCDate()),
				h: util.formatTime(date.getUTCHours()),
				m: util.formatTime(date.getUTCMinutes()),
				s: util.formatTime(date.getUTCSeconds()),
				ms: util.formatTime(date.getUTCMilliseconds())
			};

		},

		loadImage: function (src) {

			var def = $.Deferred(),
				$img = $(new Image());

			$img.one('load', function (e) {
				def.resolve(e.currentTarget);
				$img.off();
			});
			$img.one('error', function (e) {
				def.reject(e);
				$img.off();
			});

			$img.attr('src', src);

			return def.promise();

		},

		loadImages: function (srcs) {

			var loadImage = this.loadImage,
				queue = new Queue();

			srcs.forEach(function (src) {
				queue.push(function () {
					return loadImage(src);
				});
			});

			return queue.run();

		},

/*
		hexToDecimal: function (hex) {

			return parseInt(hex, 16);

		},

		decimalToHex: function (decimal) {

			return decimal.toString(16);

		},

		getRandomColor: function () {

			return '#' + [0, 0, 0].map(function () {
				return this.decimalToHex(this.getRandomBetween(0, 256));
			}, this).join('');

		},
*/

		// tangram

		preLoadInterfaceImages: function () {

			// load interface images
			var imagesPath = ['mover-bg.svg', 'popup-close-icon.svg', 'rotate-bg.svg', 'tangram-frame.svg'],
				i;

			for (i = 0; i < 9; i += 1) {

				// push texture for settings
				imagesPath.push('tangram-texture/' + i + '.jpg');

				// tan textures
				Object.keys(tansInfo).forEach(function (key) {
					imagesPath.push('tan-textures/texture-' + i + '-' + key + '.png');
				});

			}

			imagesPath = imagesPath.map(function (path) {
				return 'i/' + path;
			});

			return this.loadImages(imagesPath);

		},

		getPathBetween: function (xy0, xy1) {

			return Math.sqrt( Math.pow(xy0.x - xy1.x, 2) + Math.pow(xy0.y - xy1.y, 2));

		}

	};

gi0788['/www/js/services/util.js'] = util;
}());
(function () {
'use strict';
/*global window */

var win = window,
	androidPlayer = {

	pathPrefix: 'www/',

	init: function () {

	},

	play: function (data) {

		var player = this,
			roadNumber = data.road,
			isLoop = data.isLoop,
			sound = data.sound,
			src = player.pathPrefix + sound,
			andAud = win['AndAud_' + roadNumber];

		if (isLoop) {
			andAud.playAudioLooping(src);
		} else {
			andAud.playAudio(src);
		}

	},

	stop: function (data) {

		var roadNumber = data.road,
			andAud = win['AndAud_' + roadNumber];

		andAud.stop();

	}

};

gi0788['/www/js/sound/player-android.js'] = androidPlayer;
}());
(function () {
'use strict';
/*global window */

var win = window,
	iosPlayer = {

		roads: new Array(4),

		pathPrefix: '',

		init: function () {

		},

		play: function (data) {

			var player = this,
				roadNumber = data.road,
				isLoop = data.isLoop,
				sound = data.sound,
				newAudio,
				settings = {
					playAudioWhenScreenIsLocked: false
				};

			player.stop(data);

			newAudio = new Media(player.pathPrefix + sound);

			if (isLoop) {
				settings.numberOfLoops = 9;
			}

			newAudio.play(settings); // play audio with needed settings

			player.roads[roadNumber] = newAudio;

		},

		stop: function (data) {

			var player = this,
				roadNumber = data.road,
				road = player.roads[roadNumber];

			if (road && road.release) {
				player.roads[roadNumber].stop();
				player.roads[roadNumber].release();
			}

		}

	};

gi0788['/www/js/sound/player-ios.js'] = iosPlayer;


}());
(function () {
'use strict';
/*global window */

var info = gi0788['/www/js/services/info.js'] || window.info;

var win = window,
	webPlayer = {

	roads: undefined,

	pathPrefix: '',

	init: function () {

		var player = this;

		player.roads = new Array(4).map(function () {
			return new Audio();
		});

	},

	play: function (data) {

		var player = this,
			roadNumber = data.road,
			isLoop = data.isLoop,
			sound = data.sound,
			newAudio;

		player.stop(data);

		newAudio = new Audio();
		if (isLoop) {
			newAudio.addEventListener('ended', function () {
				if (info.get('music') === 'off') {
					return;
				}
				var audio = this;
				audio.currentTime = 0;
				audio.play();
			}, false);
		}

		newAudio.addEventListener('canplay', function () {
			if (info.get('music') === 'off') {
				return;
			}
			var audio = this;
			audio.play();
		});

		player.roads[roadNumber].src = '';
		player.roads[roadNumber] = newAudio;

		newAudio.src = player.pathPrefix + sound;

	},

	stop: function (data) {

		var player = this,
			roadNumber = data.road,
			road = player.roads[roadNumber];

		if (road && road.pause) {
			road.pause();
		}

		if (road && road.currentTime && road.currentTime < 0.1) {
			road.currentTime = 0;
		}

	}

};

gi0788['/www/js/sound/player-web.js'] = webPlayer;

}());
(function () {
'use strict';
/*global window */

var androidPlayer = gi0788['/www/js/sound/player-android.js'] || window.androidPlayer;
var iosPlayer = gi0788['/www/js/sound/player-ios.js'] || window.iosPlayer;
var webPlayer = gi0788['/www/js/sound/player-web.js'] || window.webPlayer;
var info = gi0788['/www/js/services/info.js'] || window.info;

var win = window,
	soundMaster = {

		init: function () {

			var soundMaster = this;

			soundMaster.initPlayers();

			win.addEventListener('hashchange', soundMaster.playBgSound.bind(soundMaster), false);

		},

		roads: [{}, {}, {}, {}], // 4 roads

		initPlayers: function () {

			var soundMaster = this,
				isAndroidPlayer = win.AndAud_0,
				isIosPlayer = win.Media, // detect cordova Media
				player;

			if (isAndroidPlayer) {
				player = androidPlayer;
			}

			if (isIosPlayer) {
				player = iosPlayer;
			}

			player = player || webPlayer; // get system player or use web player

			player.init();

			soundMaster.player = player;

		},

		getPlayer: function () {
			return this.player;
		},

		playBgSound: function () {

			var soundMaster = this,
				gbSound = soundMaster.getCurrentBgSound();

			if (!gbSound) {
				return;
			}

			soundMaster.play({
				sound: gbSound,
				isLoop: true,
				road: 0
			});

		},

		getCurrentBgSound: function () {

			//var state = Backbone.history.fragment;

			//switch (state) {
			//
			//	case '':
			//	case 'play':
			//	case 'select-level':
			//	case 'skirmish-select-map':
			//		return 'main-theme.mp3'; // file name main-theme.mp3
			//
			//}

			// if false - do not anything
			return false;

		},

		play: function (data) {

			var soundMaster = this,
				player = soundMaster.getPlayer(),
				prevState = soundMaster.roads[data.road],
				curStr = JSON.stringify(data),
				prevStr = JSON.stringify(prevState);

			//save arguments for - do not start play the same sound
			if (curStr === prevStr && data.isLoop) {
				return;
			}

			soundMaster.stop(data);

			soundMaster.roads[data.road] = JSON.parse(curStr);

			if (info.get('music') === 'off') {
				return;
			}

			player.play(data);

		},

		stop: function (data) {

			var soundMaster = this,
				player = soundMaster.getPlayer();

			player.stop(data);

		},

		stopBgSound: function () {

			var soundMaster = this,
				state = soundMaster.roads[0]; // 0 is bg sound

			soundMaster.stop(state);

		},

		restoreBgSound: function () {

			var soundMaster = this,
				state = JSON.parse(JSON.stringify(soundMaster.roads[0])); // 0 is bg sound

			soundMaster.roads[0] = {}; // wipe previous state to force play sound

			soundMaster.play(state);

		}

	};

soundMaster.init();

gi0788['/www/js/sound/sound-master.js'] = soundMaster;


}());
(function () {
'use strict';
/*global window */

var Backbone = gi0788['/www/js/lib/backbone.js'] || window.Backbone;
var $ = gi0788['/www/js/lib/jbone.js'] || window.$;
var _ = gi0788['/www/js/lib/lodash.js'] || window._;
var info = gi0788['/www/js/services/info.js'] || window.info;
//var tm = gi0788['/www/js/services/template-master.js'] || window.tm;
var util = gi0788['/www/js/services/util.js'] || window.util;
var mediator = gi0788['/www/js/services/mediator.js'] || window.mediator;
var sm = gi0788['/www/js/sound/sound-master.js'] || window.sm;
var lang = gi0788['/www/js/services/lang.js'] || window.lang;
var device = gi0788['/www/js/services/device.js'] || window.device;
var log = gi0788['/www/js/services/log.js'] || window.log;

var win = window,
	doc = win.document,
	docElem = doc.documentElement,
	BaseView = Backbone.View.extend({

		events: {
			// base
			'click [data-sound]': 'playSound',
			'click [data-route]': 'routeTo',
			'click .js-back': 'routeBack',
			'click .js-external-link': 'toExternalLink',
			'click .js-stop-event': 'stopEvent',

			// hide view
			'hide': 'hide',
			'click .js-hide-popup': 'hidePopupByRouter',

			// fix extra scroll for iOS
			'touchstart .js-scroll-area-container': 'touchStartAutoScroll',

			// external
			'click .js-list-backward[data-group-name]': 'changeSelect',
			'click .js-list-changed-item[data-group-name]': 'changeSelect',
			'click .js-list-forward[data-group-name]': 'changeSelect',

			// tabs
			'click .js-tab-button': 'tabAction',
			'click .js-tab-close': 'tabClose'

		},

		extraEvents: {
			noScroll: ['mousewheel', 'touchmove', 'gesturestart', 'gesturechange', 'gestureend']
		},

		//popupUrl: 'popup=true',

		selectors: {
			wrapper: '.js-wrapper',
			verticalSwiper: '.js-scroll-container',
			noScroll: '.js-no-scroll'
		},

		// will be changed after initStatic
		eventTypes: {
			down: ['mousedown', 'touchstart'],
			move: ['mousemove', 'touchmove'],
			up: ['mouseup', 'touchend']
			//dbl: ['dblclick', 'doubletap']
		},

		initStatic: function () {

			var view = this,
				isTouch = device.get('isTouch'),
				eventTypesIndex = Number(isTouch),
				types = view.eventTypes,
				fontSize;

			view.constructor.prototype.$wrapper = $(view.selectors.wrapper);

			// adjust font size
			fontSize = Math.round(14 * Math.pow(docElem.clientWidth * docElem.clientHeight / 153600, 0.5)); // 153600 = 320 * 480
			fontSize = Math.min(fontSize, 24);
			fontSize = Math.max(fontSize, 14);
			fontSize = Math.round(fontSize / 2) * 2;
			docElem.style.fontSize = fontSize + 'px';

			info.set('remSize', fontSize, true);

			_.each(types, function (typesArr, key) {
				types[key] = typesArr[eventTypesIndex];
			});

			$(doc.body).on('contextmenu', view.stopEvent);

			view.listenTo(device, 'resize', function () {
				view.resizeWrapper();
			});

			view.resizeWrapper();

		},

		resizeWrapper: function () {
			this.constructor.prototype.$wrapper.css({
				width: device.get('width') + 'px',
				height: device.get('height') + 'px'
			});
		},

		constructor: function () {

			var view = this,
				proto = BaseView.prototype,
				newEvents = {},
				noScrollEvents = proto.extraEvents.noScroll,
				noScrollSelector = proto.selectors.noScroll;

			view.events = $.extend({}, proto.events, view.events);

			// prepare extra events from eventTypes
			_.each(view.events, function (functionName, eventAndSelector) {
				newEvents[view.getFullEventNameAndSelector(eventAndSelector)] = functionName;
			});

			_.each(noScrollEvents, function (name) {
				newEvents[name + ' ' + noScrollSelector] = 'stopEvent';
			});

			if (newEvents.scroll === 'stopEvent') {
				newEvents.scroll = null; // let gc clean ram
				delete newEvents.scroll;
				_.each(noScrollEvents, function (name) {
					newEvents[name] = 'preventDefaultEvent';
				});
			}

			view.events = newEvents;

			view.selectors = $.extend({}, proto.selectors, view.selectors);

			view.attr = {};

			//view.setClassNames();

			mediator.installTo(view);

			return Backbone.View.prototype.constructor.apply(view, arguments);
		},

/*
		setClassNames: function () {

			var classNames = this.classNames = {};

			_.each(this.selectors, function (value, key) {
				classNames[key] = value.replace(/\./g, ' ').trim();
			});

		},
*/

		getFullEventNameAndSelector: function (eventNameAndSelector) {

			var view = this,
				arr = eventNameAndSelector.split(' '),
				newEventName = view.eventTypes[arr[0]];

			if (newEventName) {
				return [newEventName, arr[1]].join(' ');
			}

			return eventNameAndSelector;

		},

	 	// still not implemented
		//initialize: function() {
		//	console.log('base initialize');
		//},

		changeSelect: function (e) { // external

			var $this = $(e.currentTarget),
				direction = $this.hasClass('js-list-backward') ? -1 : 1,
				groupName = $this.attr('data-group-name'),
				$container = this.$el.find('.js-list-changed-item[data-full-list][data-group-name="' + groupName + '"]'),
				listData = JSON.parse(decodeURI($container.attr('data-full-list'))),
				listLength = listData.length,
				currentKey = $container.attr('data-key'),
				followIndex = 0,
				followData;

			// find current index
			listData.every(function(obj, i) {
				if (obj.key.toString() === currentKey) {
					followIndex = i + direction;
					return false;
				}
				return true;
			});

			// adjust follow index
			if (followIndex < 0) {
				followIndex = listLength - 1;
			}

			if (followIndex >= listLength) {
				followIndex = 0;
			}

			followData = listData[followIndex];

			$container.attr('data-key', followData.key);
			$container.attr('data-value', followData.value);
			$container.html(followData.value);

			$container.trigger('change');

		},

		destroyView: function () {

			var view = this;

			// view.$el.removeData().unbind().remove().empty(); // use with jQuery
			view.$el.remove().empty();

			view.remove();
			view.unbind();



			return Backbone.View.prototype.remove.call(view);

		},

		hide: function () {

			log('base view hide');

			var view = this,
				$el = view.$el,
				animationEnd = info.get('animationEnd', true),
				isScreenAnimation = info.get('screenAnimation') === 'on',
				deferred = $.Deferred();

			view.empty();

			view.set('isHidden', true);

			view.unsubscribe();
			mediator.uninstallFrom(view);

			view.undelegateEvents();

			if (view.unbindEventListeners) {
				view.unbindEventListeners();
			}

			if (isScreenAnimation && $el.hasClass('show-view-animation')) {
				$el.one(animationEnd, function() {
					view.destroyView();
					deferred.resolve();
				});
				//$el.removeClass('show-view-animation');
				$el.addClass('hide-view-animation');
			} else {
				view.destroyView();
				deferred.resolve();
			}

			return deferred.promise();

		},

		render: function () {

			var view = this;

			view.publish('hide-main-view');
			view.subscribe('hide-main-view', view.hide);

			view.$wrapper.append(view.$el);
			//view.util.setSizes();
			//view.util.toTop();
			return view.showAppearAnimation();

		},

		showAppearAnimation: function () {

			var view = this,
				isScreenAnimation = info.get('screenAnimation') === 'on',
				$el = view.$el,
				deferred = $.Deferred(),
				animationEnd = info.get('animationEnd', true);

			if (isScreenAnimation) {
				$el.one(animationEnd, function() {
					deferred.resolve();
				});
				$el.addClass('show-view-animation');
			} else {
				$el.addClass('show-view-no-animation');
				deferred.resolve();
			}

			return deferred.promise();

		},

		routeTo: function (e) {

			var view = this,
				$this = $(e.currentTarget),
				route = $this.attr('data-route');

			view.publish('navigate', route, true);

		},

		routeBack: function (e) {

			this.stopEvent(e);

			if (win.location.hash) {
				Backbone.history.history.back();
			}

		},

		//backTo: function (url, data) {
		backTo: function (url) {

			//data = data || {};

			var view = this;

			(function backTo() {
				win.setTimeout(function () {
					if (Backbone.history.fragment === url || !Backbone.history.fragment) { // needed url or ''
						//router.isForce = false;
						return;
					}
					view.routeBack();
					backTo();
				}, 10);
			}());

		},

		showPopup: function (data) {

			var view = this,
				deferred = $.Deferred(),
				popup = {};

			view.hidePopupByRouter();

			view.publish('show-popup', data, popup);

			popup.view.set('deferred', deferred);

			return deferred.promise();

		},

		hidePopupByRouter: function () {

			this.publish('router-hide-popup');

		},

		isPopupExist: function () {

			var view = this,
				url = win.location.href,
				popupPart = view.popupUrl;

			return url.indexOf(popupPart) !== -1;

		},

		stopEvent: function (e) {

			if (!e) {
				return;
			}

			e.preventDefault();
			e.stopPropagation();

		},

		preventDefaultEvent: function (e) {

			if (!e) {
				return;
			}

			e.preventDefault();

		},

		toExternalLink: function (e) {

			var view = this,
				$this = $(e.currentTarget),
				needConfirm = $this.attr('data-need-confirm'),
				url = $this.attr('data-href');

			view.stopEvent(e);

			if (needConfirm === 'yes') {
				return view.needConfirmLinkPrompt({
					url: url
				});
			}

			win.open(url);

		},

		needConfirmLinkPrompt: function (data) {

			var view = this,
				getRandomBetween = util.getRandomBetween,
				a = getRandomBetween(5, 9),
				b = getRandomBetween(5, 9),
				answer = a + b,
				i, len,
				answers = [];

			if ( a < b ) {
				b = [a, a = b][0];
			}

			for (i = 0, len = 6; i < len; i += 1) {
				answers[i] = answer + i - 4;
			}

			return view.showPopup({
				name: 'need-confirm',
				//cssClass: 'popup-title',
				data: {
					a: a,
					b: b,
					answer: answer,
					answers: util.assortArray(answers),
					url: data.url
				}
			});

			/*
			 if ( result === null || result === '') {
			 return;
			 }

			 if (Number(result) === a + b) {
			 win.open(data.url);
			 } else {
			 view.needConfirmLinkPrompt(data);
			 }
			 */

		},

		checkConnection: function () {

			var deferred = $.Deferred(),
				src = 'https://www.google.com/favicon.ico?' + Date.now(),
				$img = $('<img alt=""/>');

			$img.on('load', function () {
				$(this).off().remove();
				deferred.resolve();
			});

			$img.on('error', function () {
				$(this).off().remove();
				deferred.reject();
			});

			$img.attr('src', src);

			return deferred.promise();

		},

		rateUsPopup: function () {

			var view = this,
				dateUsData = info.get('rate-us') || {},
				now = Date.now(),
				lastShow = dateUsData.lastShow,
			//lastRemindMeLater = dateUsData.lastRemindMeLater,
				lastNoThanks = dateUsData.lastNoThanks,
				lastRateNow = dateUsData.lastRateNow,
				showPeriod = 86400e3, // one day
				noThanksPeriod = showPeriod * 2; // try to show every two days

			// do not show if user use app less than a minute
			if ( now - info.get('installTime') < 60e3 ) {
				log('do not show if user use app less than a minute');
				return;
			}

			if (lastShow && (now - lastShow < showPeriod)) {
				log('do not show popup too often');
				// do not show popup too often
				//console.log('do not show popup too often');
				return;
			}

			if (lastRateNow) {
				log('rate by rate now');
				// rate by rate now
				//console.log('it had been rate by rate now');
				return;
			}

			if (lastNoThanks && ( now - lastShow < noThanksPeriod )) {
				//console.log('no thanks - 3 * showPeriod');
				return;
			}

			// do not show any popup if user is offline
			view.checkConnection().done(function () {

				if (win.location.hash.indexOf('show-popup=popup') !== -1) {
					log('popup is open');
					return;
				}

				// set last show time
				dateUsData.lastShow = now;

				// save date-us data
				info.set('rate-us', dateUsData);

				mediator.publish('show-popup', {
						name: 'rate-us',
						//cssClass: 'popup-title',
						extraEvents: [
							{
								selector: '.js-rate-us-rate-now',
								event: 'click',
								fn: function () {
									var dateUsData = info.get('rate-us') || {};
									dateUsData.lastRateNow = Date.now();
									info.set('rate-us', dateUsData);
								}
							},
							{
								selector: '.js-rate-us-no-thanks',
								event: 'click',
								fn: function () {
									var dateUsData = info.get('rate-us') || {};
									dateUsData.lastNoThanks = Date.now();
									info.set('rate-us', dateUsData);
								}
							}
						],
						data: {
							lang: lang,
							url: info.getLinkToStore()
						}
					}
				);

			});

		},

		loadUrl: function () {
			Backbone.history.loadUrl();
		},

		changeBy: function (key, delta) {
			return this.set(key, this.get(key) + delta);
		},

		set: function (keyOrObj, value) {

			var self = this,
				attr = self.attr;

			if (typeof keyOrObj === 'string') {
				attr[keyOrObj] = value;
				return self;
			}

			Object.keys(keyOrObj).forEach(function (key) {
				this[key] = keyOrObj[key];
			}, attr);

			return self;

		},
		get: function (key) {

			return this.attr[key];

		},

		empty: function () {

			this.attr = {};

			return this;

		},

		extendFromObj: function (data) {
			_.extend(this.attr, data);
		},

		setVerticalSwiper: function () {

			var view = this,
				$el = view.$el,
				varticalSwiper;

			// need for swiper
			$el.find('.swiper-slide').css('height', 'auto');

			varticalSwiper = new Swiper($el.find(view.selectors.verticalSwiper), {
				scrollbar: '.swiper-scrollbar',
				direction: 'vertical',
				slidesPerView: 'auto',
				mousewheelControl: true,
				freeMode: true
			});

			view.set('vertical-swiper', varticalSwiper);

		},

		scrollToTop: function () {
			doc.body.scrollTop = 0
		},

		touchStartAutoScroll: function (e) {

			if (!info.get('isIOS', true)) { // do for IOS only
				return;
			}

			var wrapper = e.currentTarget,
				scrollArea = wrapper.querySelector(':scope > div'),
				scrollTop = wrapper.scrollTop,
				wrapperHeight,
				scrollAreaHeight,
				maxScrollTop;

			if (scrollTop <= 0) {
				wrapper.scrollTop = 1;
				return;
			}

			wrapperHeight = wrapper.clientHeight;
			scrollAreaHeight = scrollArea.clientHeight;
			maxScrollTop = scrollAreaHeight - wrapperHeight;

			if (scrollTop >= maxScrollTop) {
				wrapper.scrollTop = maxScrollTop - 1;
			}

		},

		tabAction: function (e) {

			var view = this,
				$el = view.$el,
				$button = $(e.currentTarget),
				tabId = $button.attr('data-tab-id'),
				tabState = $button.attr('data-tab-state'),
				tabButtonClassPrefix = 'tab-button-',
				tabBlockSelector = '.js-tab-block',
				tabButtonSelector = '.js-tab-button',
				$block = $el.find(tabBlockSelector + '[data-tab-id="' + tabId + '"]'),
				$blocks = $el.find(tabBlockSelector),
				$buttons = $el.find(tabButtonSelector);

			$blocks.addClass('hidden');
			$buttons
				.addClass(tabButtonClassPrefix + 'close')
				.removeClass(tabButtonClassPrefix + 'open')
				.attr('data-tab-state', 'close');

			if (tabState === 'close') {
				$button
					.attr('data-tab-state', 'open')
					.removeClass(tabButtonClassPrefix + 'close')
					.addClass(tabButtonClassPrefix + 'open');
				$block.removeClass('hidden');
			}

		},

		tabClose: function () {

			var view = this,
				$el = view.$el,
				tabButtonClassPrefix = 'tab-button-',
				tabBlockSelector = '.js-tab-block',
				tabButtonSelector = '.js-tab-button',
				$blocks = $el.find(tabBlockSelector),
				$buttons = $el.find(tabButtonSelector);

			$blocks.addClass('hidden');
			$buttons
				.addClass(tabButtonClassPrefix + 'close')
				.removeClass(tabButtonClassPrefix + 'open')
				.attr('data-tab-state', 'close');

		},

		playSound: function (e) {

			var $this = $(e.currentTarget),
				sound = $this.attr('data-sound');

			sm.play({
				sound: sound,
				road: 3,
				isLoop: false
			});

		}

	});

gi0788['/www/js/app/view/core/base.js'] = BaseView;
}());
(function () {
'use strict';
/*global window */

var BaseView = gi0788['/www/js/app/view/core/base.js'] || window.BaseView;
var tm = gi0788['/www/js/services/template-master.js'] || window.tm;
var log = gi0788['/www/js/services/log.js'] || window.log;

var HomeView = BaseView.extend({

	events: {
		scroll: 'stopEvent',
		'click .js-set-game-difficult': 'setGameDifficult',
		'click .js-save-textures': 'saveTextures'
	},

	initialize: function () {

		var view = this;

		view.setElement(tm.get('home')());

		view.render();

		return BaseView.prototype.initialize.apply(view, arguments);

	}

});

gi0788['/www/js/app/view/home/home-view.js'] = HomeView;
}());
(function () {
'use strict';
/*global window */

var mediator = gi0788['/www/js/services/mediator.js'] || window.mediator;
var Backbone = gi0788['/www/js/lib/backbone.js'] || window.Backbone;
var _ = gi0788['/www/js/lib/lodash.js'] || window._;
var BaseView = gi0788['/www/js/app/view/core/base.js'] || window.BaseView;
var HomeView = gi0788['/www/js/app/view/home/home-view.js'] || window.HomeView;

var win = window,
	router,
	Router = Backbone.Router.extend({

		routes: {
			'': 'home'
		},

		home: function () {
			new HomeView();
		},

		url: {
			popup: 'show-popup=popup'
		},

		getAction: function () {

			var router = this,
				e = window.event || {},
				newURL = e.newURL || '',
				oldURL = e.oldURL || '',
				popupPart = router.url.popup,
				viewAction;

			if ( newURL.indexOf(popupPart) !== -1 ) {
				viewAction = 'showPopup';
			}

			if ( oldURL.indexOf(popupPart) !== -1 ) {
				viewAction = 'hidePopup';
			}

			// other action is here
			return viewAction;

		},

		constructor: function () {

			var router = this,
				originalFunctions = {},
				proto = Router.prototype;

			_.each(router.routes, function (value) {

				originalFunctions[value] = proto[value];

				proto[value] = function () {

					var viewAction = router.getAction();

					if ( !viewAction ) {
						return originalFunctions[value].apply(router, arguments);
					}

					switch (viewAction) {
						case 'hidePopup':
							router.publish('hide-popup');
							break;
						case 'showPopup':
							break;
					}

				};

			});

			return Backbone.Router.prototype.constructor.apply(router, arguments);

		},

		routeToPopup: function () {
			this.navigate(Backbone.history.fragment + '?' + this.url.popup, false);
		},

		hidePopup: function () {

			var router = this;

			if (Backbone.history.fragment.indexOf(router.url.popup) !== -1) {
				win.history.back();
			} else {
				router.publish('hide-popup');
			}

		}

	});

router = new Router();

mediator.installTo(router);

router.subscribe('route-to-popup', router.routeToPopup);
router.subscribe('router-hide-popup', router.hidePopup);
router.subscribe('navigate', router.navigate);

router.on('route', function (route, data) {
	router.publish('route', route, data);
});

gi0788['/www/js/app/router/router.js'] = router;
}());
(function () {
'use strict';
/*global window */

var BaseView = gi0788['/www/js/app/view/core/base.js'] || window.BaseView;
var $ = gi0788['/www/js/lib/jbone.js'] || window.$;
var _ = gi0788['/www/js/lib/lodash.js'] || window._;
var lang = gi0788['/www/js/services/lang.js'] || window.lang;
var info = gi0788['/www/js/services/info.js'] || window.info;
var device = gi0788['/www/js/services/device.js'] || window.device;
var tm = gi0788['/www/js/services/template-master.js'] || window.tm;
var mediator = gi0788['/www/js/services/mediator.js'] || window.mediator;

var win = window,
	HintView,
	hintMaster,
	hintsMap = {

		autoplay: {
			x1: 0.3,
			y1: 0,
			// use this
			//x2: -10,
			//y2: -10
			// or this
			width: 4.9,
			height: 3.7,
			submitType: 'normal' // just click to hint to never see this hint
		},

		removeAds: {
			x1: -0.3,
			y1: 0,
			// use this
			//x2: 4,
			//y2: 4,
			// or this
			width: 4.9,
			height: 3.7,
			submitType: 'normal'
		},

		thanksForBuy: {
			x1: -0.3,
			y1: 0,
			// use this
			//x2: 4,
			//y2: 4,
			// or this
			width: 4.9,
			height: 3.7,
			submitType: 'normal'
		},

		showTitle: {
			x1: 3.3,
			y1: 0.3,
			// use this
			x2: -3.3,
			//y2: 3.3,
			// or this
			//width: 4.9,
			height: 3,
			submitType: 'normal'
		},

		showText: {
			x1: 3,
			y1: 10,
			// use this
			x2: -3,
			y2: -11,
			// or this
			//width: 4.9,
			//height: 3.7,
			submitType: 'normal'
		},

		stopAndStartPlay: {
			x1: -0.3,
			y1: 0,
			// use this
			//x2: 4,
			//y2: 4,
			// or this
			width: 3.7,
			height: 3.6,
			submitType: 'normal'
		}

	},
	s = 'rem'; // size

HintView = BaseView.extend({

	selectors: {
		hintFocus: '.js-hint-focus',
		text: '.js-hint-text',
		hintArrow: '.js-hint-arrow'
	},

	events: {
		'click': 'hide',
		'scroll': 'stopEvent'
		//'click .js-story-by-story': 'setStoryByStory',
		//'click .js-show-popup': 'testShowPopup'
	},

	initialize: function (data) {

		var view = this,
			hintName = data.name;

		view.extendFromObj(data);
		view.extendFromObj(hintsMap[hintName]);

		view.setElement(tm.get('hint')({
			text: lang.get('hint')[hintName]
		}));

		BaseView.prototype.initialize.apply(view, arguments);

		view.bindEventListeners();

		view.subscribe('hide-hint', view.hide);

		view.render();

	},

	render: function () {

		var view = this,
			$wrapper = view.$wrapper,
			isAndroid = info.get('isAndroid', true),
			execute;

		if (isAndroid) {
			execute = function (fn, timeout) {
				setTimeout(fn, timeout);
			};
		} else {
			execute = function (fn) {
				fn();
			}
		}

		view.setCoordinates({
			$hintFocus: view.$el.find(view.selectors.hintFocus),
			$text: view.$el.find(view.selectors.text),
			coordinates: hintsMap[view.get('name')]
		});

		execute(function () {
			$wrapper.append(view.$el);
		}, 50);

		execute(function () {
			view.showInAnimation();
		}, 100);

	},

	showInAnimation: function () {

		var view = this,
			isScreenAnimation = info.get('screenAnimation') === 'on';

		if (isScreenAnimation) {
			view.$el.addClass('hint-container-show-in');
		} else {
			view.$el.addClass('hint-container-show-in-no-animation');
		}

	},

	showOutAnimation: function () {

		var view = this,
			$el = view.$el,
			deferred = $.Deferred(),
			animationEnd = info.get('animationEnd', true),
			isScreenAnimation = info.get('screenAnimation') === 'on';

		if (isScreenAnimation && $el.hasClass('hint-container-show-in')) {

			$el.one(animationEnd, function () {
				deferred.resolve();
			}); // work only one time

			$el.addClass('hint-container-show-out');

		} else {
			deferred.resolve();
		}

		return deferred.promise();

	},

	setCoordinates: function (data) {

		var view = this,
			allCoordinates = view.getAllCoordinates(data);

		view.setFadeCoordinates({
			$hintFocus: data.$hintFocus,
			allCoordinates: allCoordinates
		});

		view.setHintCoordinates({
			$text: data.$text,
			allCoordinates: allCoordinates
		});

	},

	setHintCoordinates: function (data) {

		var view = this,
			textWidth = 12,
			halfTextWidth = textWidth / 2,
			xys = data.allCoordinates,
			maxWidth = xys.maxWidth,
		//maxHeight = xys.maxHeight,
			minX1 = 1,
			maxX2 = maxWidth - minX1,
			x1, y1, x2, dx = 0;
		//y2,
		//dy;

		x1 = xys.center.bottom.x - halfTextWidth;
		y1 = xys.center.bottom.y;

		x2 = x1 + textWidth;

		if (x1 <= minX1) {
			dx = minX1 - x1;
		}

		if (x2 >= maxX2) {
			dx = maxX2 - x2;
		}

		data.$text.css({
			width: textWidth + s,
			top: y1 + s,
			left: x1 + dx + s
		});

		data.$text.find(view.selectors.hintArrow).css({
			left: halfTextWidth - dx + s
		});

	},

	setFadeCoordinates: function (data) {

		var view = this,
			isScreenAnimation = info.get('screenAnimation') === 'on',
			xys = data.allCoordinates;

		if (isScreenAnimation) {
			data.$hintFocus.css({
				left: xys.x1 + s,
				top: xys.y1 + s,
				width: xys.width + s,
				height: xys.height + s
			});
		} else {
			data.$hintFocus.remove();
		}

	},

	getAllCoordinates: function (data) {

		var view = this,
			remSize = info.get('remSize', true),
			maxWidth = device.get('width') / remSize,
			maxHeight = device.get('height') / remSize,
			coordinates = data.coordinates,
			width = coordinates.width,
			height = coordinates.height,
			x1 = coordinates.x1,
			y1 = coordinates.y1,
			x2, y2;

		if (x1 < 0) {
			x1 = maxWidth + x1 - width;
		}

		if (y1 < 0) {
			y1 = maxHeight + y1 - height;
		}

		// set _ coordinates
		if (coordinates.hasOwnProperty('width')) {
			x2 = x1 + width;
		} else {
			x2 = coordinates.x2;
			x2 = x2 >= 0 ? x2 : maxWidth + x2;
			width = x2 - x1;
		}

		// set | coordinates
		if (coordinates.hasOwnProperty('height')) {
			y2 = y1 + height;
		} else {
			y2 = coordinates.y2;
			y2 = y2 >= 0 ? y2 : maxHeight + y2;
			height = y2 - y1;
		}

		return {
			x1: x1,
			y1: y1,
			x2: x2,
			y2: y2,
			width: width,
			height: height,
			maxWidth: maxWidth,
			maxHeight: maxHeight,

			// you can add your custom coordinates
			center: {
				bottom: {
					x: x1 + width / 2,
					y: y2
				}
			}
		};

	},

	hide: function (evt, dataArg) {

		var view = this,
			data = dataArg || {},
			submitType = view.get('submitType'),
			hints = info.get('hint'),
			hintName = view.get('name');

		hints[hintName] = hints[hintName] || {};

		if (data.doNotTrack) {
			view.clearOnHides();
		} else {
			if (submitType === 'normal') {
				hints[hintName].state = 'done';
				info.set('hint', hints);
			}
		}

		view.showOutAnimation().then(function () {
			BaseView.prototype.hide.call(view);
			view.runOnHides();
		});

	},

	bindEventListeners: function () {

	},

	unbindEventListeners: function () {

	},

	onHide: function (fn, args, context) {

		var view = this,
			onHides = view.get('onHides') || [];

		onHides.push({
			fn: fn,
			args: args,
			context: context
		});

		view.set('onHides', onHides);

		return view;

	},

	runOnHides: function () {

		var view = this,
			onHides = view.get('onHides') || [];

		_.each(onHides, function (item) {
			item.fn.apply(item.context, item.args);
		});

		view.set('onHides', null);

	},

	clearOnHides: function () {
		this.set('onHides', null);
	}

});

hintMaster = {
	showHint: function (data, result) {
		return result ? (result.view = new HintView(data)) : new HintView(data);
	}
};

mediator.installTo(hintMaster);

hintMaster.subscribe('showHint', hintMaster.showHint);

gi0788['/www/js/app/view/core/hint.js'] = hintMaster;
}());
(function () {
'use strict';
/*global window */

var BaseView = gi0788['/www/js/app/view/core/base.js'] || window.BaseView;
var $ = gi0788['/www/js/lib/jbone.js'] || window.$;
var _ = gi0788['/www/js/lib/lodash.js'] || window._;
var sm = gi0788['/www/js/sound/sound-master.js'] || window.sm;
var tm = gi0788['/www/js/services/template-master.js'] || window.tm;
var info = gi0788['/www/js/services/info.js'] || window.info;
var mediator = gi0788['/www/js/services/mediator.js'] || window.mediator;

var win = window,
	PopupView,
	popupMaster;

PopupView = BaseView.extend({

	events: {
		//'click .js-popup-container': 'stopEvent'
		//'click': 'hidePopupByRouter',
		scroll: 'stopEvent'
	},

	selectors: {
		popupContainer: '.js-popup-container'
	},

	initialize: function (data) {

	// timeout, cssClass, from,
	// data {text, header ...},
	// sound,
	// hideOnClick
	// onShow {context, fn}, onHide {context, fn}

		var view = this,
			popupUrl = view.popupUrl,
			url = win.location.href;

		if (url.indexOf(popupUrl) === -1) {
			view.publish('route-to-popup');
		}

		if (data.hideOnClick) {
			view.events.click = 'hidePopupByRouter';
		}

		view.extendFromObj(data); // name, parentView, data(objToView)

		view.setElement(tm.get('popup-wrapper')(data));

		if (data.cssClass) {
			view.$el.addClass(data.cssClass);
		}

		BaseView.prototype.initialize.apply(this, arguments);

		view.render();

		view.showInAnimation();

		view.bindEventListeners();

		view.set('deferred', $.Deferred());

		view.subscribe('hide-popup', view.hide);

	},

	bindEventListeners: function () {

		var view = this,
			timeout = view.get('timeout'),
			timeoutId;

		if (timeout) {
			timeoutId = setTimeout(function () {
				view.hidePopupByRouter();
			}, timeout);
			view.set('timeoutId', timeoutId);
		}

		view.bindExtraEvents();

	},

	unbindEventListeners: function () {

		var view = this,
			timeout = view.get('timeout');

		if (timeout) {
			clearTimeout(view.get('timeoutId'));
		}

		view.unbindExtraEvents();

	},

	bindExtraEvents: function () {

		var view = this,
			$el = view.$el,
			events = view.get('extraEvents');

		_.each(events, function (data) {
			$el.find(data.selector).on(data.event, data.fn);
		});

	},

	unbindExtraEvents: function () {

		var view = this,
			$el = view.$el,
			events = view.get('extraEvents');

		_.each(events, function (data) {
			$el.find(data.selector).off(data.event, data.fn);
		});

	},

	render: function () {

		var view = this,
			//append$el = view.get('append$el'),
			data = view.get('data') || {},
			sound = view.get('sound'),
			$content = $(tm.get(view.get('name'))(data)),
			$container = view.$el.find(view.selectors.popupContainer),
			onShow = view.get('onShow'),
			context;

		if (sound) {
			sm.play(sound);
		}

		$container.append($content);

		view.$wrapper.append(view.$el);

		if (onShow) {
			context = onShow.context || view;
			context[onShow.fn].apply(context, onShow.args);
		}

	},

	hide: function () {

		var view = this;

		view.showOutAnimation().then(function () {

			var onHide = view.get('onHide'),
				context,
				deferred = view.get('deferred');

			if (onHide) {
				context = onHide.context || view;
				context[onHide.fn].apply(context, onHide.args || []);
			}

			BaseView.prototype.hide.call(view);

			deferred.resolve();

		});

	},

	// actions
	showInAnimation: function () {

		// todo: add check for animation is on/off

		var view = this;
		view.$el.addClass('popup-show-in');
	},

	showOutAnimation: function () {

		// todo: add check for animation is on/off

		var view = this,
			$el = view.$el,
			deferred = $.Deferred(),
			animationEnd = info.get('animationEnd', true);

		$el.one(animationEnd, function () {
			deferred.resolve();
		}); // work only one time

		$el.addClass('popup-show-out');

		return deferred.promise();

	}

});

popupMaster = {
	showPopup: function (data, result) {
		return result ? (result.view = new PopupView(data)) : new PopupView(data);
	}
};

mediator.installTo(popupMaster);

popupMaster.subscribe('show-popup', popupMaster.showPopup);

gi0788['/www/js/app/view/core/popup.js'] = popupMaster;
}());
(function () {
'use strict';
/*global window */

var info = gi0788['/www/js/services/info.js'] || window.info;
info.set('dev-mode', false);

var log = gi0788['/www/js/services/log.js'] || window.log;


var mediator = gi0788['/www/js/services/mediator.js'] || window.mediator;

// init all librares
var polyfillClassList = gi0788['/www/js/lib/polyfill-class-list.js'] || window.polyfillClassList;
var shim = gi0788['/www/js/lib/shim.js'] || window.shim;
var shimES5 = gi0788['/www/js/lib/shim-es5.js'] || window.shimES5;
var shamES5 = gi0788['/www/js/lib/sham-es5.js'] || window.shamES5;
var _ = gi0788['/www/js/lib/lodash.js'] || window._;
var $ = gi0788['/www/js/lib/jbone.js'] || window.$;
var Deferred = gi0788['/www/js/lib/deferred.js'] || window.Deferred;
var Backbone = gi0788['/www/js/lib/backbone.js'] || window.Backbone;
var fastclick = gi0788['/www/js/lib/fastclick.js'] || window.fastclick;
var doT = gi0788['/www/js/lib/dot.js'] || window.doT;
var Queue = gi0788['/www/js/lib/queue.js'] || window.Queue;

// init all services
var device = gi0788['/www/js/services/device.js'] || window.device;
var androidAds = gi0788['/www/js/services/android-ads.js'] || window.androidAds;
var lang = gi0788['/www/js/services/lang.js'] || window.lang;
var tm = gi0788['/www/js/services/template-master.js'] || window.tm;
var util = gi0788['/www/js/services/util.js'] || window.util;

// init sound players
var sm = gi0788['/www/js/sound/sound-master.js'] || window.sm;

var router = gi0788['/www/js/app/router/router.js'] || window.router;

var BaseView = gi0788['/www/js/app/view/core/base.js'] || window.BaseView;
var hintMaster = gi0788['/www/js/app/view/core/hint.js'] || window.hintMaster;
var popupMaster = gi0788['/www/js/app/view/core/popup.js'] || window.popupMaster;

new FastClick(window.document.body);

(function back() {

	var win = window;

	if ( win.location.hash ) {
		win.history.back();
		return win.setTimeout(back, 50);
	}

	Deferred.installInto($);

	win.$ = win.jQuery = win.jquery = $;

	BaseView.prototype.initStatic();

	Backbone.history.start();

}());
}());

}({}));
