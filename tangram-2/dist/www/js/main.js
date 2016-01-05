(function (gi8002) {
(function () {
'use strict';
/*global console */

var log,
	gOldOnError,
	slice = Array.prototype.slice,
	logger = {
		isEnable: true,
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

gi8002['/www/js/services/log.js'] = log;


}());
(function () {
'use strict';
/*global window */

var log = gi8002['/www/js/services/log.js'] || window.log;

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
	}
};

gi8002['/www/js/services/mediator.js'] = mediator;

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
 * lodash 3.10.1 (Custom Build) lodash.com/license | Underscore.js 1.8.3 underscorejs.org/LICENSE
 * Build: `lodash compat -o ./lodash.js`
 */
;(function(){function n(n,t){if(n!==t){var r=null===n,e=n===w,u=n===n,o=null===t,i=t===w,f=t===t;if(n>t&&!o||!u||r&&!i&&f||e&&f)return 1;if(n<t&&!r||!f||o&&!e&&u||i&&u)return-1}return 0}function t(n,t,r){for(var e=n.length,u=r?e:-1;r?u--:++u<e;)if(t(n[u],u,n))return u;return-1}function r(n,t,r){if(t!==t)return p(n,r);r-=1;for(var e=n.length;++r<e;)if(n[r]===t)return r;return-1}function e(n){return typeof n=="function"||false}function u(n){return null==n?"":n+""}function o(n,t){for(var r=-1,e=n.length;++r<e&&-1<t.indexOf(n.charAt(r)););
    return r}function i(n,t){for(var r=n.length;r--&&-1<t.indexOf(n.charAt(r)););return r}function f(t,r){return n(t.a,r.a)||t.b-r.b}function a(n){return Nn[n]}function c(n){return Tn[n]}function l(n,t,r){return t?n=Bn[n]:r&&(n=Dn[n]),"\\"+n}function s(n){return"\\"+Dn[n]}function p(n,t,r){var e=n.length;for(t+=r?0:-1;r?t--:++t<e;){var u=n[t];if(u!==u)return t}return-1}function h(n){return!!n&&typeof n=="object"}function _(n){return 160>=n&&9<=n&&13>=n||32==n||160==n||5760==n||6158==n||8192<=n&&(8202>=n||8232==n||8233==n||8239==n||8287==n||12288==n||65279==n);
}function v(n,t){for(var r=-1,e=n.length,u=-1,o=[];++r<e;)n[r]===t&&(n[r]=P,o[++u]=r);return o}function g(n){for(var t=-1,r=n.length;++t<r&&_(n.charCodeAt(t)););return t}function y(n){for(var t=n.length;t--&&_(n.charCodeAt(t)););return t}function d(n){return Pn[n]}function m(_){function Nn(n){if(h(n)&&!(Wo(n)||n instanceof zn)){if(n instanceof Pn)return n;if(eu.call(n,"__chain__")&&eu.call(n,"__wrapped__"))return qr(n)}return new Pn(n)}function Tn(){}function Pn(n,t,r){this.__wrapped__=n,this.__actions__=r||[],
    this.__chain__=!!t}function zn(n){this.__wrapped__=n,this.__actions__=[],this.__dir__=1,this.__filtered__=false,this.__iteratees__=[],this.__takeCount__=Cu,this.__views__=[]}function Bn(){this.__data__={}}function Dn(n){var t=n?n.length:0;for(this.data={hash:mu(null),set:new hu};t--;)this.push(n[t])}function Mn(n,t){var r=n.data;return(typeof t=="string"||de(t)?r.set.has(t):r.hash[t])?0:-1}function qn(n,t){var r=-1,e=n.length;for(t||(t=De(e));++r<e;)t[r]=n[r];return t}function Kn(n,t){for(var r=-1,e=n.length;++r<e&&false!==t(n[r],r,n););
    return n}function Vn(n,t){for(var r=-1,e=n.length;++r<e;)if(!t(n[r],r,n))return false;return true}function Zn(n,t){for(var r=-1,e=n.length,u=-1,o=[];++r<e;){var i=n[r];t(i,r,n)&&(o[++u]=i)}return o}function Xn(n,t){for(var r=-1,e=n.length,u=De(e);++r<e;)u[r]=t(n[r],r,n);return u}function Hn(n,t){for(var r=-1,e=t.length,u=n.length;++r<e;)n[u+r]=t[r];return n}function Qn(n,t,r,e){var u=-1,o=n.length;for(e&&o&&(r=n[++u]);++u<o;)r=t(r,n[u],u,n);return r}function nt(n,t){for(var r=-1,e=n.length;++r<e;)if(t(n[r],r,n))return true;
    return false}function tt(n,t,r,e){return n!==w&&eu.call(e,r)?n:t}function rt(n,t,r){for(var e=-1,u=Ko(t),o=u.length;++e<o;){var i=u[e],f=n[i],a=r(f,t[i],i,n,t);(a===a?a===f:f!==f)&&(f!==w||i in n)||(n[i]=a)}return n}function et(n,t){return null==t?n:ot(t,Ko(t),n)}function ut(n,t){for(var r=-1,e=null==n,u=!e&&Sr(n),o=u?n.length:0,i=t.length,f=De(i);++r<i;){var a=t[r];f[r]=u?Ur(a,o)?n[a]:w:e?w:n[a]}return f}function ot(n,t,r){r||(r={});for(var e=-1,u=t.length;++e<u;){var o=t[e];r[o]=n[o]}return r}function it(n,t,r){
    var e=typeof n;return"function"==e?t===w?n:Dt(n,t,r):null==n?Ne:"object"==e?At(n):t===w?Be(n):jt(n,t)}function ft(n,t,r,e,u,o,i){var f;if(r&&(f=u?r(n,e,u):r(n)),f!==w)return f;if(!de(n))return n;if(e=Wo(n)){if(f=Ir(n),!t)return qn(n,f)}else{var a=ou.call(n),c=a==K;if(a!=Z&&a!=z&&(!c||u))return Ln[a]?Er(n,a,t):u?n:{};if(Gn(n))return u?n:{};if(f=Rr(c?{}:n),!t)return et(f,n)}for(o||(o=[]),i||(i=[]),u=o.length;u--;)if(o[u]==n)return i[u];return o.push(n),i.push(f),(e?Kn:gt)(n,function(e,u){f[u]=ft(e,t,r,u,n,o,i);
}),f}function at(n,t,r){if(typeof n!="function")throw new Xe(T);return _u(function(){n.apply(w,r)},t)}function ct(n,t){var e=n?n.length:0,u=[];if(!e)return u;var o=-1,i=jr(),f=i===r,a=f&&t.length>=F&&mu&&hu?new Dn(t):null,c=t.length;a&&(i=Mn,f=false,t=a);n:for(;++o<e;)if(a=n[o],f&&a===a){for(var l=c;l--;)if(t[l]===a)continue n;u.push(a)}else 0>i(t,a,0)&&u.push(a);return u}function lt(n,t){var r=true;return zu(n,function(n,e,u){return r=!!t(n,e,u)}),r}function st(n,t,r,e){var u=e,o=u;return zu(n,function(n,i,f){
    i=+t(n,i,f),(r(i,u)||i===e&&i===o)&&(u=i,o=n)}),o}function pt(n,t){var r=[];return zu(n,function(n,e,u){t(n,e,u)&&r.push(n)}),r}function ht(n,t,r,e){var u;return r(n,function(n,r,o){return t(n,r,o)?(u=e?r:n,false):void 0}),u}function _t(n,t,r,e){e||(e=[]);for(var u=-1,o=n.length;++u<o;){var i=n[u];h(i)&&Sr(i)&&(r||Wo(i)||_e(i))?t?_t(i,t,r,e):Hn(e,i):r||(e[e.length]=i)}return e}function vt(n,t){return Du(n,t,Ee)}function gt(n,t){return Du(n,t,Ko)}function yt(n,t){return Mu(n,t,Ko)}function dt(n,t){for(var r=-1,e=t.length,u=-1,o=[];++r<e;){
    var i=t[r];ye(n[i])&&(o[++u]=i)}return o}function mt(n,t,r){if(null!=n){n=Dr(n),r!==w&&r in n&&(t=[r]),r=0;for(var e=t.length;null!=n&&r<e;)n=Dr(n)[t[r++]];return r&&r==e?n:w}}function wt(n,t,r,e,u,o){if(n===t)return true;if(null==n||null==t||!de(n)&&!h(t))return n!==n&&t!==t;n:{var i=wt,f=Wo(n),a=Wo(t),c=B,l=B;f||(c=ou.call(n),c==z?c=Z:c!=Z&&(f=je(n))),a||(l=ou.call(t),l==z?l=Z:l!=Z&&je(t));var s=c==Z&&!Gn(n),a=l==Z&&!Gn(t),l=c==l;if(!l||f||s){if(!e&&(c=s&&eu.call(n,"__wrapped__"),a=a&&eu.call(t,"__wrapped__"),
    c||a)){n=i(c?n.value():n,a?t.value():t,r,e,u,o);break n}if(l){for(u||(u=[]),o||(o=[]),c=u.length;c--;)if(u[c]==n){n=o[c]==t;break n}u.push(n),o.push(t),n=(f?mr:xr)(n,t,i,r,e,u,o),u.pop(),o.pop()}else n=false}else n=wr(n,t,c)}return n}function xt(n,t,r){var e=t.length,u=e,o=!r;if(null==n)return!u;for(n=Dr(n);e--;){var i=t[e];if(o&&i[2]?i[1]!==n[i[0]]:!(i[0]in n))return false}for(;++e<u;){var i=t[e],f=i[0],a=n[f],c=i[1];if(o&&i[2]){if(a===w&&!(f in n))return false}else if(i=r?r(a,c,f):w,i===w?!wt(c,a,r,true):!i)return false;
}return true}function bt(n,t){var r=-1,e=Sr(n)?De(n.length):[];return zu(n,function(n,u,o){e[++r]=t(n,u,o)}),e}function At(n){var t=kr(n);if(1==t.length&&t[0][2]){var r=t[0][0],e=t[0][1];return function(n){return null==n?false:(n=Dr(n),n[r]===e&&(e!==w||r in n))}}return function(n){return xt(n,t)}}function jt(n,t){var r=Wo(n),e=Wr(n)&&t===t&&!de(t),u=n+"";return n=Mr(n),function(o){if(null==o)return false;var i=u;if(o=Dr(o),!(!r&&e||i in o)){if(o=1==n.length?o:mt(o,St(n,0,-1)),null==o)return false;i=Gr(n),o=Dr(o);
}return o[i]===t?t!==w||i in o:wt(t,o[i],w,true)}}function kt(n,t,r,e,u){if(!de(n))return n;var o=Sr(t)&&(Wo(t)||je(t)),i=o?w:Ko(t);return Kn(i||t,function(f,a){if(i&&(a=f,f=t[a]),h(f)){e||(e=[]),u||(u=[]);n:{for(var c=a,l=e,s=u,p=l.length,_=t[c];p--;)if(l[p]==_){n[c]=s[p];break n}var p=n[c],v=r?r(p,_,c,n,t):w,g=v===w;g&&(v=_,Sr(_)&&(Wo(_)||je(_))?v=Wo(p)?p:Sr(p)?qn(p):[]:xe(_)||_e(_)?v=_e(p)?Ie(p):xe(p)?p:{}:g=false),l.push(_),s.push(v),g?n[c]=kt(v,_,r,l,s):(v===v?v!==p:p===p)&&(n[c]=v)}}else c=n[a],
    l=r?r(c,f,a,n,t):w,(s=l===w)&&(l=f),l===w&&(!o||a in n)||!s&&(l===l?l===c:c!==c)||(n[a]=l)}),n}function Ot(n){return function(t){return null==t?w:Dr(t)[n]}}function It(n){var t=n+"";return n=Mr(n),function(r){return mt(r,n,t)}}function Rt(n,t){for(var r=n?t.length:0;r--;){var e=t[r];if(e!=u&&Ur(e)){var u=e;vu.call(n,e,1)}}return n}function Et(n,t){return n+wu(Ru()*(t-n+1))}function Ct(n,t,r,e,u){return u(n,function(n,u,o){r=e?(e=false,n):t(r,n,u,o)}),r}function St(n,t,r){var e=-1,u=n.length;for(t=null==t?0:+t||0,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        0>t&&(t=-t>u?0:u+t),r=r===w||r>u?u:+r||0,0>r&&(r+=u),u=t>r?0:r-t>>>0,t>>>=0,r=De(u);++e<u;)r[e]=n[e+t];return r}function Ut(n,t){var r;return zu(n,function(n,e,u){return r=t(n,e,u),!r}),!!r}function $t(n,t){var r=n.length;for(n.sort(t);r--;)n[r]=n[r].c;return n}function Wt(t,r,e){var u=br(),o=-1;return r=Xn(r,function(n){return u(n)}),t=bt(t,function(n){return{a:Xn(r,function(t){return t(n)}),b:++o,c:n}}),$t(t,function(t,r){var u;n:{for(var o=-1,i=t.a,f=r.a,a=i.length,c=e.length;++o<a;)if(u=n(i[o],f[o])){
    if(o>=c)break n;o=e[o],u*="asc"===o||true===o?1:-1;break n}u=t.b-r.b}return u})}function Ft(n,t){var r=0;return zu(n,function(n,e,u){r+=+t(n,e,u)||0}),r}function Lt(n,t){var e=-1,u=jr(),o=n.length,i=u===r,f=i&&o>=F,a=f&&mu&&hu?new Dn(void 0):null,c=[];a?(u=Mn,i=false):(f=false,a=t?[]:c);n:for(;++e<o;){var l=n[e],s=t?t(l,e,n):l;if(i&&l===l){for(var p=a.length;p--;)if(a[p]===s)continue n;t&&a.push(s),c.push(l)}else 0>u(a,s,0)&&((t||f)&&a.push(s),c.push(l))}return c}function Nt(n,t){for(var r=-1,e=t.length,u=De(e);++r<e;)u[r]=n[t[r]];
    return u}function Tt(n,t,r,e){for(var u=n.length,o=e?u:-1;(e?o--:++o<u)&&t(n[o],o,n););return r?St(n,e?0:o,e?o+1:u):St(n,e?o+1:0,e?u:o)}function Pt(n,t){var r=n;r instanceof zn&&(r=r.value());for(var e=-1,u=t.length;++e<u;)var o=t[e],r=o.func.apply(o.thisArg,Hn([r],o.args));return r}function zt(n,t,r){var e=0,u=n?n.length:e;if(typeof t=="number"&&t===t&&u<=Uu){for(;e<u;){var o=e+u>>>1,i=n[o];(r?i<=t:i<t)&&null!==i?e=o+1:u=o}return u}return Bt(n,t,Ne,r)}function Bt(n,t,r,e){t=r(t);for(var u=0,o=n?n.length:0,i=t!==t,f=null===t,a=t===w;u<o;){
    var c=wu((u+o)/2),l=r(n[c]),s=l!==w,p=l===l;(i?p||e:f?p&&s&&(e||null!=l):a?p&&(e||s):null==l?0:e?l<=t:l<t)?u=c+1:o=c}return ku(o,Su)}function Dt(n,t,r){if(typeof n!="function")return Ne;if(t===w)return n;switch(r){case 1:return function(r){return n.call(t,r)};case 3:return function(r,e,u){return n.call(t,r,e,u)};case 4:return function(r,e,u,o){return n.call(t,r,e,u,o)};case 5:return function(r,e,u,o,i){return n.call(t,r,e,u,o,i)}}return function(){return n.apply(t,arguments)}}function Mt(n){var t=new au(n.byteLength);
    return new gu(t).set(new gu(n)),t}function qt(n,t,r){for(var e=r.length,u=-1,o=ju(n.length-e,0),i=-1,f=t.length,a=De(f+o);++i<f;)a[i]=t[i];for(;++u<e;)a[r[u]]=n[u];for(;o--;)a[i++]=n[u++];return a}function Kt(n,t,r){for(var e=-1,u=r.length,o=-1,i=ju(n.length-u,0),f=-1,a=t.length,c=De(i+a);++o<i;)c[o]=n[o];for(i=o;++f<a;)c[i+f]=t[f];for(;++e<u;)c[i+r[e]]=n[o++];return c}function Vt(n,t){return function(r,e,u){var o=t?t():{};if(e=br(e,u,3),Wo(r)){u=-1;for(var i=r.length;++u<i;){var f=r[u];n(o,f,e(f,u,r),r);
}}else zu(r,function(t,r,u){n(o,t,e(t,r,u),u)});return o}}function Zt(n){return pe(function(t,r){var e=-1,u=null==t?0:r.length,o=2<u?r[u-2]:w,i=2<u?r[2]:w,f=1<u?r[u-1]:w;for(typeof o=="function"?(o=Dt(o,f,5),u-=2):(o=typeof f=="function"?f:w,u-=o?1:0),i&&$r(r[0],r[1],i)&&(o=3>u?w:o,u=1);++e<u;)(i=r[e])&&n(t,i,o);return t})}function Yt(n,t){return function(r,e){var u=r?Vu(r):0;if(!Lr(u))return n(r,e);for(var o=t?u:-1,i=Dr(r);(t?o--:++o<u)&&false!==e(i[o],o,i););return r}}function Gt(n){return function(t,r,e){
    var u=Dr(t);e=e(t);for(var o=e.length,i=n?o:-1;n?i--:++i<o;){var f=e[i];if(false===r(u[f],f,u))break}return t}}function Jt(n,t){function r(){return(this&&this!==Yn&&this instanceof r?e:n).apply(t,arguments)}var e=Ht(n);return r}function Xt(n){return function(t){var r=-1;t=Fe(Ue(t));for(var e=t.length,u="";++r<e;)u=n(u,t[r],r);return u}}function Ht(n){return function(){var t=arguments;switch(t.length){case 0:return new n;case 1:return new n(t[0]);case 2:return new n(t[0],t[1]);case 3:return new n(t[0],t[1],t[2]);
    case 4:return new n(t[0],t[1],t[2],t[3]);case 5:return new n(t[0],t[1],t[2],t[3],t[4]);case 6:return new n(t[0],t[1],t[2],t[3],t[4],t[5]);case 7:return new n(t[0],t[1],t[2],t[3],t[4],t[5],t[6])}var r=Pu(n.prototype),t=n.apply(r,t);return de(t)?t:r}}function Qt(n){function t(r,e,u){return u&&$r(r,e,u)&&(e=w),r=dr(r,n,w,w,w,w,w,e),r.placeholder=t.placeholder,r}return t}function nr(n,t){return pe(function(r){var e=r[0];return null==e?e:(r.push(t),n.apply(w,r))})}function tr(n,t){return function(r,e,u){
    if(u&&$r(r,e,u)&&(e=w),e=br(e,u,3),1==e.length){u=r=Wo(r)?r:Br(r);for(var o=e,i=-1,f=u.length,a=t,c=a;++i<f;){var l=u[i],s=+o(l);n(s,a)&&(a=s,c=l)}if(u=c,!r.length||u!==t)return u}return st(r,e,n,t)}}function rr(n,r){return function(e,u,o){return u=br(u,o,3),Wo(e)?(u=t(e,u,r),-1<u?e[u]:w):ht(e,u,n)}}function er(n){return function(r,e,u){return r&&r.length?(e=br(e,u,3),t(r,e,n)):-1}}function ur(n){return function(t,r,e){return r=br(r,e,3),ht(t,r,n,true)}}function or(n){return function(){for(var t,r=arguments.length,e=n?r:-1,u=0,o=De(r);n?e--:++e<r;){
    var i=o[u++]=arguments[e];if(typeof i!="function")throw new Xe(T);!t&&Pn.prototype.thru&&"wrapper"==Ar(i)&&(t=new Pn([],true))}for(e=t?-1:r;++e<r;){var i=o[e],u=Ar(i),f="wrapper"==u?Ku(i):w;t=f&&Fr(f[0])&&f[1]==(E|k|I|C)&&!f[4].length&&1==f[9]?t[Ar(f[0])].apply(t,f[3]):1==i.length&&Fr(i)?t[u]():t.thru(i)}return function(){var n=arguments,e=n[0];if(t&&1==n.length&&Wo(e)&&e.length>=F)return t.plant(e).value();for(var u=0,n=r?o[u].apply(this,n):e;++u<r;)n=o[u].call(this,n);return n}}}function ir(n,t){
    return function(r,e,u){return typeof e=="function"&&u===w&&Wo(r)?n(r,e):t(r,Dt(e,u,3))}}function fr(n){return function(t,r,e){return(typeof r!="function"||e!==w)&&(r=Dt(r,e,3)),n(t,r,Ee)}}function ar(n){return function(t,r,e){return(typeof r!="function"||e!==w)&&(r=Dt(r,e,3)),n(t,r)}}function cr(n){return function(t,r,e){var u={};return r=br(r,e,3),gt(t,function(t,e,o){o=r(t,e,o),e=n?o:e,t=n?t:o,u[e]=t}),u}}function lr(n){return function(t,r,e){return t=u(t),(n?t:"")+_r(t,r,e)+(n?"":t)}}function sr(n){
    var t=pe(function(r,e){var u=v(e,t.placeholder);return dr(r,n,w,e,u)});return t}function pr(n,t){return function(r,e,u,o){var i=3>arguments.length;return typeof e=="function"&&o===w&&Wo(r)?n(r,e,u,i):Ct(r,br(e,o,4),u,i,t)}}function hr(n,t,r,e,u,o,i,f,a,c){function l(){for(var m=arguments.length,x=m,j=De(m);x--;)j[x]=arguments[x];if(e&&(j=qt(j,e,u)),o&&(j=Kt(j,o,i)),_||y){var x=l.placeholder,k=v(j,x),m=m-k.length;if(m<c){var O=f?qn(f):w,m=ju(c-m,0),E=_?k:w,k=_?w:k,C=_?j:w,j=_?w:j;return t|=_?I:R,t&=~(_?R:I),
g||(t&=~(b|A)),j=[n,t,r,C,E,j,k,O,a,m],O=hr.apply(w,j),Fr(n)&&Zu(O,j),O.placeholder=x,O}}if(x=p?r:this,O=h?x[n]:n,f)for(m=j.length,E=ku(f.length,m),k=qn(j);E--;)C=f[E],j[E]=Ur(C,m)?k[C]:w;return s&&a<j.length&&(j.length=a),this&&this!==Yn&&this instanceof l&&(O=d||Ht(n)),O.apply(x,j)}var s=t&E,p=t&b,h=t&A,_=t&k,g=t&j,y=t&O,d=h?w:Ht(n);return l}function _r(n,t,r){return n=n.length,t=+t,n<t&&bu(t)?(t-=n,r=null==r?" ":r+"",$e(r,du(t/r.length)).slice(0,t)):""}function vr(n,t,r,e){function u(){for(var t=-1,f=arguments.length,a=-1,c=e.length,l=De(c+f);++a<c;)l[a]=e[a];
    for(;f--;)l[a++]=arguments[++t];return(this&&this!==Yn&&this instanceof u?i:n).apply(o?r:this,l)}var o=t&b,i=Ht(n);return u}function gr(n){var t=Ve[n];return function(n,r){return(r=r===w?0:+r||0)?(r=su(10,r),t(n*r)/r):t(n)}}function yr(n){return function(t,r,e,u){var o=br(e);return null==e&&o===it?zt(t,r,n):Bt(t,r,o(e,u,1),n)}}function dr(n,t,r,e,u,o,i,f){var a=t&A;if(!a&&typeof n!="function")throw new Xe(T);var c=e?e.length:0;if(c||(t&=~(I|R),e=u=w),c-=u?u.length:0,t&R){var l=e,s=u;e=u=w}var p=a?w:Ku(n);
    return r=[n,t,r,e,u,l,s,o,i,f],p&&(e=r[1],t=p[1],f=e|t,u=t==E&&e==k||t==E&&e==C&&r[7].length<=p[8]||t==(E|C)&&e==k,(f<E||u)&&(t&b&&(r[2]=p[2],f|=e&b?0:j),(e=p[3])&&(u=r[3],r[3]=u?qt(u,e,p[4]):qn(e),r[4]=u?v(r[3],P):qn(p[4])),(e=p[5])&&(u=r[5],r[5]=u?Kt(u,e,p[6]):qn(e),r[6]=u?v(r[5],P):qn(p[6])),(e=p[7])&&(r[7]=qn(e)),t&E&&(r[8]=null==r[8]?p[8]:ku(r[8],p[8])),null==r[9]&&(r[9]=p[9]),r[0]=p[0],r[1]=f),t=r[1],f=r[9]),r[9]=null==f?a?0:n.length:ju(f-c,0)||0,n=t==b?Jt(r[0],r[2]):t!=I&&t!=(b|I)||r[4].length?hr.apply(w,r):vr.apply(w,r),
        (p?qu:Zu)(n,r)}function mr(n,t,r,e,u,o,i){var f=-1,a=n.length,c=t.length;if(a!=c&&(!u||c<=a))return false;for(;++f<a;){var l=n[f],c=t[f],s=e?e(u?c:l,u?l:c,f):w;if(s!==w){if(s)continue;return false}if(u){if(!nt(t,function(n){return l===n||r(l,n,e,u,o,i)}))return false}else if(l!==c&&!r(l,c,e,u,o,i))return false}return true}function wr(n,t,r){switch(r){case D:case M:return+n==+t;case q:return n.name==t.name&&n.message==t.message;case V:return n!=+n?t!=+t:n==+t;case Y:case G:return n==t+""}return false}function xr(n,t,r,e,u,o,i){
    var f=Ko(n),a=f.length,c=Ko(t).length;if(a!=c&&!u)return false;for(c=a;c--;){var l=f[c];if(!(u?l in t:eu.call(t,l)))return false}for(var s=u;++c<a;){var l=f[c],p=n[l],h=t[l],_=e?e(u?h:p,u?p:h,l):w;if(_===w?!r(p,h,e,u,o,i):!_)return false;s||(s="constructor"==l)}return s||(r=n.constructor,e=t.constructor,!(r!=e&&"constructor"in n&&"constructor"in t)||typeof r=="function"&&r instanceof r&&typeof e=="function"&&e instanceof e)?true:false}function br(n,t,r){var e=Nn.callback||Le,e=e===Le?it:e;return r?e(n,t,r):e}function Ar(n){
    for(var t=n.name+"",r=Fu[t],e=r?r.length:0;e--;){var u=r[e],o=u.func;if(null==o||o==n)return u.name}return t}function jr(n,t,e){var u=Nn.indexOf||Yr,u=u===Yr?r:u;return n?u(n,t,e):u}function kr(n){n=Ce(n);for(var t=n.length;t--;){var r,e=n[t];r=n[t][1],r=r===r&&!de(r),e[2]=r}return n}function Or(n,t){var r=null==n?w:n[t];return me(r)?r:w}function Ir(n){var t=n.length,r=new n.constructor(t);return t&&"string"==typeof n[0]&&eu.call(n,"index")&&(r.index=n.index,r.input=n.input),r}function Rr(n){return n=n.constructor,
typeof n=="function"&&n instanceof n||(n=Ye),new n}function Er(n,t,r){var e=n.constructor;switch(t){case J:return Mt(n);case D:case M:return new e(+n);case X:case H:case Q:case nn:case tn:case rn:case en:case un:case on:return e instanceof e&&(e=Lu[t]),t=n.buffer,new e(r?Mt(t):t,n.byteOffset,n.length);case V:case G:return new e(n);case Y:var u=new e(n.source,kn.exec(n));u.lastIndex=n.lastIndex}return u}function Cr(n,t,r){return null==n||Wr(t,n)||(t=Mr(t),n=1==t.length?n:mt(n,St(t,0,-1)),t=Gr(t)),
    t=null==n?n:n[t],null==t?w:t.apply(n,r)}function Sr(n){return null!=n&&Lr(Vu(n))}function Ur(n,t){return n=typeof n=="number"||Rn.test(n)?+n:-1,t=null==t?$u:t,-1<n&&0==n%1&&n<t}function $r(n,t,r){if(!de(r))return false;var e=typeof t;return("number"==e?Sr(r)&&Ur(t,r.length):"string"==e&&t in r)?(t=r[t],n===n?n===t:t!==t):false}function Wr(n,t){var r=typeof n;return"string"==r&&dn.test(n)||"number"==r?true:Wo(n)?false:!yn.test(n)||null!=t&&n in Dr(t)}function Fr(n){var t=Ar(n),r=Nn[t];return typeof r=="function"&&t in zn.prototype?n===r?true:(t=Ku(r),
!!t&&n===t[0]):false}function Lr(n){return typeof n=="number"&&-1<n&&0==n%1&&n<=$u}function Nr(n,t){return n===w?t:Fo(n,t,Nr)}function Tr(n,t){n=Dr(n);for(var r=-1,e=t.length,u={};++r<e;){var o=t[r];o in n&&(u[o]=n[o])}return u}function Pr(n,t){var r={};return vt(n,function(n,e,u){t(n,e,u)&&(r[e]=n)}),r}function zr(n){for(var t=Ee(n),r=t.length,e=r&&n.length,u=!!e&&Lr(e)&&(Wo(n)||_e(n)||Ae(n)),o=-1,i=[];++o<r;){var f=t[o];(u&&Ur(f,e)||eu.call(n,f))&&i.push(f)}return i}function Br(n){return null==n?[]:Sr(n)?Nn.support.unindexedChars&&Ae(n)?n.split(""):de(n)?n:Ye(n):Se(n);
}function Dr(n){if(Nn.support.unindexedChars&&Ae(n)){for(var t=-1,r=n.length,e=Ye(n);++t<r;)e[t]=n.charAt(t);return e}return de(n)?n:Ye(n)}function Mr(n){if(Wo(n))return n;var t=[];return u(n).replace(mn,function(n,r,e,u){t.push(e?u.replace(An,"$1"):r||n)}),t}function qr(n){return n instanceof zn?n.clone():new Pn(n.__wrapped__,n.__chain__,qn(n.__actions__))}function Kr(n,t,r){return n&&n.length?((r?$r(n,t,r):null==t)&&(t=1),St(n,0>t?0:t)):[]}function Vr(n,t,r){var e=n?n.length:0;return e?((r?$r(n,t,r):null==t)&&(t=1),
    t=e-(+t||0),St(n,0,0>t?0:t)):[]}function Zr(n){return n?n[0]:w}function Yr(n,t,e){var u=n?n.length:0;if(!u)return-1;if(typeof e=="number")e=0>e?ju(u+e,0):e;else if(e)return e=zt(n,t),e<u&&(t===t?t===n[e]:n[e]!==n[e])?e:-1;return r(n,t,e||0)}function Gr(n){var t=n?n.length:0;return t?n[t-1]:w}function Jr(n){return Kr(n,1)}function Xr(n,t,e,u){if(!n||!n.length)return[];null!=t&&typeof t!="boolean"&&(u=e,e=$r(n,t,u)?w:t,t=false);var o=br();if((null!=e||o!==it)&&(e=o(e,u,3)),t&&jr()===r){t=e;var i;e=-1,
    u=n.length;for(var o=-1,f=[];++e<u;){var a=n[e],c=t?t(a,e,n):a;e&&i===c||(i=c,f[++o]=a)}n=f}else n=Lt(n,e);return n}function Hr(n){if(!n||!n.length)return[];var t=-1,r=0;n=Zn(n,function(n){return Sr(n)?(r=ju(n.length,r),true):void 0});for(var e=De(r);++t<r;)e[t]=Xn(n,Ot(t));return e}function Qr(n,t,r){return n&&n.length?(n=Hr(n),null==t?n:(t=Dt(t,r,4),Xn(n,function(n){return Qn(n,t,w,true)}))):[]}function ne(n,t){var r=-1,e=n?n.length:0,u={};for(!e||t||Wo(n[0])||(t=[]);++r<e;){var o=n[r];t?u[o]=t[r]:o&&(u[o[0]]=o[1]);
}return u}function te(n){return n=Nn(n),n.__chain__=true,n}function re(n,t,r){return t.call(r,n)}function ee(n,t,r){var e=Wo(n)?Vn:lt;return r&&$r(n,t,r)&&(t=w),(typeof t!="function"||r!==w)&&(t=br(t,r,3)),e(n,t)}function ue(n,t,r){var e=Wo(n)?Zn:pt;return t=br(t,r,3),e(n,t)}function oe(n,t,r,e){var u=n?Vu(n):0;return Lr(u)||(n=Se(n),u=n.length),r=typeof r!="number"||e&&$r(t,r,e)?0:0>r?ju(u+r,0):r||0,typeof n=="string"||!Wo(n)&&Ae(n)?r<=u&&-1<n.indexOf(t,r):!!u&&-1<jr(n,t,r)}function ie(n,t,r){var e=Wo(n)?Xn:bt;
    return t=br(t,r,3),e(n,t)}function fe(n,t,r){if(r?$r(n,t,r):null==t){n=Br(n);var e=n.length;return 0<e?n[Et(0,e-1)]:w}r=-1,n=Oe(n);var e=n.length,u=e-1;for(t=ku(0>t?0:+t||0,e);++r<t;){var e=Et(r,u),o=n[e];n[e]=n[r],n[r]=o}return n.length=t,n}function ae(n,t,r){var e=Wo(n)?nt:Ut;return r&&$r(n,t,r)&&(t=w),(typeof t!="function"||r!==w)&&(t=br(t,r,3)),e(n,t)}function ce(n,t){var r;if(typeof t!="function"){if(typeof n!="function")throw new Xe(T);var e=n;n=t,t=e}return function(){return 0<--n&&(r=t.apply(this,arguments)),
1>=n&&(t=w),r}}function le(n,t,r){function e(t,r){r&&cu(r),a=p=h=w,t&&(_=wo(),c=n.apply(s,f),p||a||(f=s=w))}function u(){var n=t-(wo()-l);0>=n||n>t?e(h,a):p=_u(u,n)}function o(){e(g,p)}function i(){if(f=arguments,l=wo(),s=this,h=g&&(p||!y),false===v)var r=y&&!p;else{a||y||(_=l);var e=v-(l-_),i=0>=e||e>v;i?(a&&(a=cu(a)),_=l,c=n.apply(s,f)):a||(a=_u(o,e))}return i&&p?p=cu(p):p||t===v||(p=_u(u,t)),r&&(i=true,c=n.apply(s,f)),!i||p||a||(f=s=w),c}var f,a,c,l,s,p,h,_=0,v=false,g=true;if(typeof n!="function")throw new Xe(T);
    if(t=0>t?0:+t||0,true===r)var y=true,g=false;else de(r)&&(y=!!r.leading,v="maxWait"in r&&ju(+r.maxWait||0,t),g="trailing"in r?!!r.trailing:g);return i.cancel=function(){p&&cu(p),a&&cu(a),_=0,a=p=h=w},i}function se(n,t){if(typeof n!="function"||t&&typeof t!="function")throw new Xe(T);var r=function(){var e=arguments,u=t?t.apply(this,e):e[0],o=r.cache;return o.has(u)?o.get(u):(e=n.apply(this,e),r.cache=o.set(u,e),e)};return r.cache=new se.Cache,r}function pe(n,t){if(typeof n!="function")throw new Xe(T);return t=ju(t===w?n.length-1:+t||0,0),
    function(){for(var r=arguments,e=-1,u=ju(r.length-t,0),o=De(u);++e<u;)o[e]=r[t+e];switch(t){case 0:return n.call(this,o);case 1:return n.call(this,r[0],o);case 2:return n.call(this,r[0],r[1],o)}for(u=De(t+1),e=-1;++e<t;)u[e]=r[e];return u[t]=o,n.apply(this,u)}}function he(n,t){return n>t}function _e(n){return h(n)&&Sr(n)&&eu.call(n,"callee")&&!pu.call(n,"callee")}function ve(n,t,r,e){return e=(r=typeof r=="function"?Dt(r,e,3):w)?r(n,t):w,e===w?wt(n,t,r):!!e}function ge(n){return h(n)&&typeof n.message=="string"&&ou.call(n)==q;
}function ye(n){return de(n)&&ou.call(n)==K}function de(n){var t=typeof n;return!!n&&("object"==t||"function"==t)}function me(n){return null==n?false:ye(n)?fu.test(ru.call(n)):h(n)&&(Gn(n)?fu:In).test(n)}function we(n){return typeof n=="number"||h(n)&&ou.call(n)==V}function xe(n){var t;if(!h(n)||ou.call(n)!=Z||Gn(n)||_e(n)||!(eu.call(n,"constructor")||(t=n.constructor,typeof t!="function"||t instanceof t)))return false;var r;return Nn.support.ownLast?(vt(n,function(n,t,e){return r=eu.call(e,t),false}),false!==r):(vt(n,function(n,t){
    r=t}),r===w||eu.call(n,r))}function be(n){return de(n)&&ou.call(n)==Y}function Ae(n){return typeof n=="string"||h(n)&&ou.call(n)==G}function je(n){return h(n)&&Lr(n.length)&&!!Fn[ou.call(n)]}function ke(n,t){return n<t}function Oe(n){var t=n?Vu(n):0;return Lr(t)?t?Nn.support.unindexedChars&&Ae(n)?n.split(""):qn(n):[]:Se(n)}function Ie(n){return ot(n,Ee(n))}function Re(n){return dt(n,Ee(n))}function Ee(n){if(null==n)return[];de(n)||(n=Ye(n));for(var t=n.length,r=Nn.support,t=t&&Lr(t)&&(Wo(n)||_e(n)||Ae(n))&&t||0,e=n.constructor,u=-1,e=ye(e)&&e.prototype||nu,o=e===n,i=De(t),f=0<t,a=r.enumErrorProps&&(n===Qe||n instanceof qe),c=r.enumPrototypes&&ye(n);++u<t;)i[u]=u+"";
    for(var l in n)c&&"prototype"==l||a&&("message"==l||"name"==l)||f&&Ur(l,t)||"constructor"==l&&(o||!eu.call(n,l))||i.push(l);if(r.nonEnumShadows&&n!==nu)for(t=n===tu?G:n===Qe?q:ou.call(n),r=Nu[t]||Nu[Z],t==Z&&(e=nu),t=Wn.length;t--;)l=Wn[t],u=r[l],o&&u||(u?!eu.call(n,l):n[l]===e[l])||i.push(l);return i}function Ce(n){n=Dr(n);for(var t=-1,r=Ko(n),e=r.length,u=De(e);++t<e;){var o=r[t];u[t]=[o,n[o]]}return u}function Se(n){return Nt(n,Ko(n))}function Ue(n){return(n=u(n))&&n.replace(En,a).replace(bn,"");
}function $e(n,t){var r="";if(n=u(n),t=+t,1>t||!n||!bu(t))return r;do t%2&&(r+=n),t=wu(t/2),n+=n;while(t);return r}function We(n,t,r){var e=n;return(n=u(n))?(r?$r(e,t,r):null==t)?n.slice(g(n),y(n)+1):(t+="",n.slice(o(n,t),i(n,t)+1)):n}function Fe(n,t,r){return r&&$r(n,t,r)&&(t=w),n=u(n),n.match(t||Un)||[]}function Le(n,t,r){return r&&$r(n,t,r)&&(t=w),h(n)?Te(n):it(n,t)}function Ne(n){return n}function Te(n){return At(ft(n,true))}function Pe(n,t,r){if(null==r){var e=de(t),u=e?Ko(t):w;((u=u&&u.length?dt(t,u):w)?u.length:e)||(u=false,
    r=t,t=n,n=this)}u||(u=dt(t,Ko(t)));var o=true,e=-1,i=ye(n),f=u.length;false===r?o=false:de(r)&&"chain"in r&&(o=r.chain);for(;++e<f;){r=u[e];var a=t[r];n[r]=a,i&&(n.prototype[r]=function(t){return function(){var r=this.__chain__;if(o||r){var e=n(this.__wrapped__);return(e.__actions__=qn(this.__actions__)).push({func:t,args:arguments,thisArg:n}),e.__chain__=r,e}return t.apply(n,Hn([this.value()],arguments))}}(a))}return n}function ze(){}function Be(n){return Wr(n)?Ot(n):It(n)}_=_?Jn.defaults(Yn.Object(),_,Jn.pick(Yn,$n)):Yn;
    var De=_.Array,Me=_.Date,qe=_.Error,Ke=_.Function,Ve=_.Math,Ze=_.Number,Ye=_.Object,Ge=_.RegExp,Je=_.String,Xe=_.TypeError,He=De.prototype,Qe=qe.prototype,nu=Ye.prototype,tu=Je.prototype,ru=Ke.prototype.toString,eu=nu.hasOwnProperty,uu=0,ou=nu.toString,iu=Yn._,fu=Ge("^"+ru.call(eu).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),au=_.ArrayBuffer,cu=_.clearTimeout,lu=_.parseFloat,su=Ve.pow,pu=nu.propertyIsEnumerable,hu=Or(_,"Set"),_u=_.setTimeout,vu=He.splice,gu=_.Uint8Array,yu=Or(_,"WeakMap"),du=Ve.ceil,mu=Or(Ye,"create"),wu=Ve.floor,xu=Or(De,"isArray"),bu=_.isFinite,Au=Or(Ye,"keys"),ju=Ve.max,ku=Ve.min,Ou=Or(Me,"now"),Iu=_.parseInt,Ru=Ve.random,Eu=Ze.NEGATIVE_INFINITY,Cu=Ze.POSITIVE_INFINITY,Su=4294967294,Uu=2147483647,$u=9007199254740991,Wu=yu&&new yu,Fu={},Lu={};
    Lu[X]=_.Float32Array,Lu[H]=_.Float64Array,Lu[Q]=_.Int8Array,Lu[nn]=_.Int16Array,Lu[tn]=_.Int32Array,Lu[rn]=gu,Lu[en]=_.Uint8ClampedArray,Lu[un]=_.Uint16Array,Lu[on]=_.Uint32Array;var Nu={};Nu[B]=Nu[M]=Nu[V]={constructor:true,toLocaleString:true,toString:true,valueOf:true},Nu[D]=Nu[G]={constructor:true,toString:true,valueOf:true},Nu[q]=Nu[K]=Nu[Y]={constructor:true,toString:true},Nu[Z]={constructor:true},Kn(Wn,function(n){for(var t in Nu)if(eu.call(Nu,t)){var r=Nu[t];r[n]=eu.call(r,n)}});var Tu=Nn.support={};!function(n){
        var t=function(){this.x=n},r={0:n,length:n},e=[];t.prototype={valueOf:n,y:n};for(var u in new t)e.push(u);Tu.enumErrorProps=pu.call(Qe,"message")||pu.call(Qe,"name"),Tu.enumPrototypes=pu.call(t,"prototype"),Tu.nonEnumShadows=!/valueOf/.test(e),Tu.ownLast="x"!=e[0],Tu.spliceObjects=(vu.call(r,0,1),!r[0]),Tu.unindexedChars="xx"!="x"[0]+Ye("x")[0]}(1,0),Nn.templateSettings={escape:_n,evaluate:vn,interpolate:gn,variable:"",imports:{_:Nn}};var Pu=function(){function n(){}return function(t){if(de(t)){n.prototype=t;
        var r=new n;n.prototype=w}return r||{}}}(),zu=Yt(gt),Bu=Yt(yt,true),Du=Gt(),Mu=Gt(true),qu=Wu?function(n,t){return Wu.set(n,t),n}:Ne,Ku=Wu?function(n){return Wu.get(n)}:ze,Vu=Ot("length"),Zu=function(){var n=0,t=0;return function(r,e){var u=wo(),o=W-(u-t);if(t=u,0<o){if(++n>=$)return r}else n=0;return qu(r,e)}}(),Yu=pe(function(n,t){return h(n)&&Sr(n)?ct(n,_t(t,false,true)):[]}),Gu=er(),Ju=er(true),Xu=pe(function(n){for(var t=n.length,e=t,u=De(l),o=jr(),i=o===r,f=[];e--;){var a=n[e]=Sr(a=n[e])?a:[];u[e]=i&&120<=a.length&&mu&&hu?new Dn(e&&a):null;
    }var i=n[0],c=-1,l=i?i.length:0,s=u[0];n:for(;++c<l;)if(a=i[c],0>(s?Mn(s,a):o(f,a,0))){for(e=t;--e;){var p=u[e];if(0>(p?Mn(p,a):o(n[e],a,0)))continue n}s&&s.push(a),f.push(a)}return f}),Hu=pe(function(t,r){r=_t(r);var e=ut(t,r);return Rt(t,r.sort(n)),e}),Qu=yr(),no=yr(true),to=pe(function(n){return Lt(_t(n,false,true))}),ro=pe(function(n,t){return Sr(n)?ct(n,t):[]}),eo=pe(Hr),uo=pe(function(n){var t=n.length,r=2<t?n[t-2]:w,e=1<t?n[t-1]:w;return 2<t&&typeof r=="function"?t-=2:(r=1<t&&typeof e=="function"?(--t,
        e):w,e=w),n.length=t,Qr(n,r,e)}),oo=pe(function(n){return n=_t(n),this.thru(function(t){t=Wo(t)?t:[Dr(t)];for(var r=n,e=-1,u=t.length,o=-1,i=r.length,f=De(u+i);++e<u;)f[e]=t[e];for(;++o<i;)f[e++]=r[o];return f})}),io=pe(function(n,t){return Sr(n)&&(n=Br(n)),ut(n,_t(t))}),fo=Vt(function(n,t,r){eu.call(n,r)?++n[r]:n[r]=1}),ao=rr(zu),co=rr(Bu,true),lo=ir(Kn,zu),so=ir(function(n,t){for(var r=n.length;r--&&false!==t(n[r],r,n););return n},Bu),po=Vt(function(n,t,r){eu.call(n,r)?n[r].push(t):n[r]=[t]}),ho=Vt(function(n,t,r){
        n[r]=t}),_o=pe(function(n,t,r){var e=-1,u=typeof t=="function",o=Wr(t),i=Sr(n)?De(n.length):[];return zu(n,function(n){var f=u?t:o&&null!=n?n[t]:w;i[++e]=f?f.apply(n,r):Cr(n,t,r)}),i}),vo=Vt(function(n,t,r){n[r?0:1].push(t)},function(){return[[],[]]}),go=pr(Qn,zu),yo=pr(function(n,t,r,e){var u=n.length;for(e&&u&&(r=n[--u]);u--;)r=t(r,n[u],u,n);return r},Bu),mo=pe(function(n,t){if(null==n)return[];var r=t[2];return r&&$r(t[0],t[1],r)&&(t.length=1),Wt(n,_t(t),[])}),wo=Ou||function(){return(new Me).getTime();
        },xo=pe(function(n,t,r){var e=b;if(r.length)var u=v(r,xo.placeholder),e=e|I;return dr(n,e,t,r,u)}),bo=pe(function(n,t){t=t.length?_t(t):Re(n);for(var r=-1,e=t.length;++r<e;){var u=t[r];n[u]=dr(n[u],b,n)}return n}),Ao=pe(function(n,t,r){var e=b|A;if(r.length)var u=v(r,Ao.placeholder),e=e|I;return dr(t,e,n,r,u)}),jo=Qt(k),ko=Qt(O),Oo=pe(function(n,t){return at(n,1,t)}),Io=pe(function(n,t,r){return at(n,t,r)}),Ro=or(),Eo=or(true),Co=pe(function(n,t){if(t=_t(t),typeof n!="function"||!Vn(t,e))throw new Xe(T);
        var r=t.length;return pe(function(e){for(var u=ku(e.length,r);u--;)e[u]=t[u](e[u]);return n.apply(this,e)})}),So=sr(I),Uo=sr(R),$o=pe(function(n,t){return dr(n,C,w,w,w,_t(t))}),Wo=xu||function(n){return h(n)&&Lr(n.length)&&ou.call(n)==B},Fo=Zt(kt),Lo=Zt(function(n,t,r){return r?rt(n,t,r):et(n,t)}),No=nr(Lo,function(n,t){return n===w?t:n}),To=nr(Fo,Nr),Po=ur(gt),zo=ur(yt),Bo=fr(Du),Do=fr(Mu),Mo=ar(gt),qo=ar(yt),Ko=Au?function(n){var t=null==n?w:n.constructor;return typeof t=="function"&&t.prototype===n||(typeof n=="function"?Nn.support.enumPrototypes:Sr(n))?zr(n):de(n)?Au(n):[];
    }:zr,Vo=cr(true),Zo=cr(),Yo=pe(function(n,t){if(null==n)return{};if("function"!=typeof t[0])return t=Xn(_t(t),Je),Tr(n,ct(Ee(n),t));var r=Dt(t[0],t[1],3);return Pr(n,function(n,t,e){return!r(n,t,e)})}),Go=pe(function(n,t){return null==n?{}:"function"==typeof t[0]?Pr(n,Dt(t[0],t[1],3)):Tr(n,_t(t))}),Jo=Xt(function(n,t,r){return t=t.toLowerCase(),n+(r?t.charAt(0).toUpperCase()+t.slice(1):t)}),Xo=Xt(function(n,t,r){return n+(r?"-":"")+t.toLowerCase()}),Ho=lr(),Qo=lr(true),ni=Xt(function(n,t,r){return n+(r?"_":"")+t.toLowerCase();
    }),ti=Xt(function(n,t,r){return n+(r?" ":"")+(t.charAt(0).toUpperCase()+t.slice(1))}),ri=pe(function(n,t){try{return n.apply(w,t)}catch(r){return ge(r)?r:new qe(r)}}),ei=pe(function(n,t){return function(r){return Cr(r,n,t)}}),ui=pe(function(n,t){return function(r){return Cr(n,r,t)}}),oi=gr("ceil"),ii=gr("floor"),fi=tr(he,Eu),ai=tr(ke,Cu),ci=gr("round");return Nn.prototype=Tn.prototype,Pn.prototype=Pu(Tn.prototype),Pn.prototype.constructor=Pn,zn.prototype=Pu(Tn.prototype),zn.prototype.constructor=zn,
        Bn.prototype["delete"]=function(n){return this.has(n)&&delete this.__data__[n]},Bn.prototype.get=function(n){return"__proto__"==n?w:this.__data__[n]},Bn.prototype.has=function(n){return"__proto__"!=n&&eu.call(this.__data__,n)},Bn.prototype.set=function(n,t){return"__proto__"!=n&&(this.__data__[n]=t),this},Dn.prototype.push=function(n){var t=this.data;typeof n=="string"||de(n)?t.set.add(n):t.hash[n]=true},se.Cache=Bn,Nn.after=function(n,t){if(typeof t!="function"){if(typeof n!="function")throw new Xe(T);
        var r=n;n=t,t=r}return n=bu(n=+n)?n:0,function(){return 1>--n?t.apply(this,arguments):void 0}},Nn.ary=function(n,t,r){return r&&$r(n,t,r)&&(t=w),t=n&&null==t?n.length:ju(+t||0,0),dr(n,E,w,w,w,w,t)},Nn.assign=Lo,Nn.at=io,Nn.before=ce,Nn.bind=xo,Nn.bindAll=bo,Nn.bindKey=Ao,Nn.callback=Le,Nn.chain=te,Nn.chunk=function(n,t,r){t=(r?$r(n,t,r):null==t)?1:ju(wu(t)||1,1),r=0;for(var e=n?n.length:0,u=-1,o=De(du(e/t));r<e;)o[++u]=St(n,r,r+=t);return o},Nn.compact=function(n){for(var t=-1,r=n?n.length:0,e=-1,u=[];++t<r;){
        var o=n[t];o&&(u[++e]=o)}return u},Nn.constant=function(n){return function(){return n}},Nn.countBy=fo,Nn.create=function(n,t,r){var e=Pu(n);return r&&$r(n,t,r)&&(t=w),t?et(e,t):e},Nn.curry=jo,Nn.curryRight=ko,Nn.debounce=le,Nn.defaults=No,Nn.defaultsDeep=To,Nn.defer=Oo,Nn.delay=Io,Nn.difference=Yu,Nn.drop=Kr,Nn.dropRight=Vr,Nn.dropRightWhile=function(n,t,r){return n&&n.length?Tt(n,br(t,r,3),true,true):[]},Nn.dropWhile=function(n,t,r){return n&&n.length?Tt(n,br(t,r,3),true):[]},Nn.fill=function(n,t,r,e){
        var u=n?n.length:0;if(!u)return[];for(r&&typeof r!="number"&&$r(n,t,r)&&(r=0,e=u),u=n.length,r=null==r?0:+r||0,0>r&&(r=-r>u?0:u+r),e=e===w||e>u?u:+e||0,0>e&&(e+=u),u=r>e?0:e>>>0,r>>>=0;r<u;)n[r++]=t;return n},Nn.filter=ue,Nn.flatten=function(n,t,r){var e=n?n.length:0;return r&&$r(n,t,r)&&(t=false),e?_t(n,t):[]},Nn.flattenDeep=function(n){return n&&n.length?_t(n,true):[]},Nn.flow=Ro,Nn.flowRight=Eo,Nn.forEach=lo,Nn.forEachRight=so,Nn.forIn=Bo,Nn.forInRight=Do,Nn.forOwn=Mo,Nn.forOwnRight=qo,Nn.functions=Re,
        Nn.groupBy=po,Nn.indexBy=ho,Nn.initial=function(n){return Vr(n,1)},Nn.intersection=Xu,Nn.invert=function(n,t,r){r&&$r(n,t,r)&&(t=w),r=-1;for(var e=Ko(n),u=e.length,o={};++r<u;){var i=e[r],f=n[i];t?eu.call(o,f)?o[f].push(i):o[f]=[i]:o[f]=i}return o},Nn.invoke=_o,Nn.keys=Ko,Nn.keysIn=Ee,Nn.map=ie,Nn.mapKeys=Vo,Nn.mapValues=Zo,Nn.matches=Te,Nn.matchesProperty=function(n,t){return jt(n,ft(t,true))},Nn.memoize=se,Nn.merge=Fo,Nn.method=ei,Nn.methodOf=ui,Nn.mixin=Pe,Nn.modArgs=Co,Nn.negate=function(n){if(typeof n!="function")throw new Xe(T);
        return function(){return!n.apply(this,arguments)}},Nn.omit=Yo,Nn.once=function(n){return ce(2,n)},Nn.pairs=Ce,Nn.partial=So,Nn.partialRight=Uo,Nn.partition=vo,Nn.pick=Go,Nn.pluck=function(n,t){return ie(n,Be(t))},Nn.property=Be,Nn.propertyOf=function(n){return function(t){return mt(n,Mr(t),t+"")}},Nn.pull=function(){var n=arguments,t=n[0];if(!t||!t.length)return t;for(var r=0,e=jr(),u=n.length;++r<u;)for(var o=0,i=n[r];-1<(o=e(t,i,o));)vu.call(t,o,1);return t},Nn.pullAt=Hu,Nn.range=function(n,t,r){
        r&&$r(n,t,r)&&(t=r=w),n=+n||0,r=null==r?1:+r||0,null==t?(t=n,n=0):t=+t||0;var e=-1;t=ju(du((t-n)/(r||1)),0);for(var u=De(t);++e<t;)u[e]=n,n+=r;return u},Nn.rearg=$o,Nn.reject=function(n,t,r){var e=Wo(n)?Zn:pt;return t=br(t,r,3),e(n,function(n,r,e){return!t(n,r,e)})},Nn.remove=function(n,t,r){var e=[];if(!n||!n.length)return e;var u=-1,o=[],i=n.length;for(t=br(t,r,3);++u<i;)r=n[u],t(r,u,n)&&(e.push(r),o.push(u));return Rt(n,o),e},Nn.rest=Jr,Nn.restParam=pe,Nn.set=function(n,t,r){if(null==n)return n;
        var e=t+"";t=null!=n[e]||Wr(t,n)?[e]:Mr(t);for(var e=-1,u=t.length,o=u-1,i=n;null!=i&&++e<u;){var f=t[e];de(i)&&(e==o?i[f]=r:null==i[f]&&(i[f]=Ur(t[e+1])?[]:{})),i=i[f]}return n},Nn.shuffle=function(n){return fe(n,Cu)},Nn.slice=function(n,t,r){var e=n?n.length:0;return e?(r&&typeof r!="number"&&$r(n,t,r)&&(t=0,r=e),St(n,t,r)):[]},Nn.sortBy=function(n,t,r){if(null==n)return[];r&&$r(n,t,r)&&(t=w);var e=-1;return t=br(t,r,3),n=bt(n,function(n,r,u){return{a:t(n,r,u),b:++e,c:n}}),$t(n,f)},Nn.sortByAll=mo,
        Nn.sortByOrder=function(n,t,r,e){return null==n?[]:(e&&$r(t,r,e)&&(r=w),Wo(t)||(t=null==t?[]:[t]),Wo(r)||(r=null==r?[]:[r]),Wt(n,t,r))},Nn.spread=function(n){if(typeof n!="function")throw new Xe(T);return function(t){return n.apply(this,t)}},Nn.take=function(n,t,r){return n&&n.length?((r?$r(n,t,r):null==t)&&(t=1),St(n,0,0>t?0:t)):[]},Nn.takeRight=function(n,t,r){var e=n?n.length:0;return e?((r?$r(n,t,r):null==t)&&(t=1),t=e-(+t||0),St(n,0>t?0:t)):[]},Nn.takeRightWhile=function(n,t,r){return n&&n.length?Tt(n,br(t,r,3),false,true):[];
    },Nn.takeWhile=function(n,t,r){return n&&n.length?Tt(n,br(t,r,3)):[]},Nn.tap=function(n,t,r){return t.call(r,n),n},Nn.throttle=function(n,t,r){var e=true,u=true;if(typeof n!="function")throw new Xe(T);return false===r?e=false:de(r)&&(e="leading"in r?!!r.leading:e,u="trailing"in r?!!r.trailing:u),le(n,t,{leading:e,maxWait:+t,trailing:u})},Nn.thru=re,Nn.times=function(n,t,r){if(n=wu(n),1>n||!bu(n))return[];var e=-1,u=De(ku(n,4294967295));for(t=Dt(t,r,1);++e<n;)4294967295>e?u[e]=t(e):t(e);return u},Nn.toArray=Oe,
        Nn.toPlainObject=Ie,Nn.transform=function(n,t,r,e){var u=Wo(n)||je(n);return t=br(t,e,4),null==r&&(u||de(n)?(e=n.constructor,r=u?Wo(n)?new e:[]:Pu(ye(e)?e.prototype:w)):r={}),(u?Kn:gt)(n,function(n,e,u){return t(r,n,e,u)}),r},Nn.union=to,Nn.uniq=Xr,Nn.unzip=Hr,Nn.unzipWith=Qr,Nn.values=Se,Nn.valuesIn=function(n){return Nt(n,Ee(n))},Nn.where=function(n,t){return ue(n,At(t))},Nn.without=ro,Nn.wrap=function(n,t){return t=null==t?Ne:t,dr(t,I,w,[n],[])},Nn.xor=function(){for(var n=-1,t=arguments.length;++n<t;){
            var r=arguments[n];if(Sr(r))var e=e?Hn(ct(e,r),ct(r,e)):r}return e?Lt(e):[]},Nn.zip=eo,Nn.zipObject=ne,Nn.zipWith=uo,Nn.backflow=Eo,Nn.collect=ie,Nn.compose=Eo,Nn.each=lo,Nn.eachRight=so,Nn.extend=Lo,Nn.iteratee=Le,Nn.methods=Re,Nn.object=ne,Nn.select=ue,Nn.tail=Jr,Nn.unique=Xr,Pe(Nn,Nn),Nn.add=function(n,t){return(+n||0)+(+t||0)},Nn.attempt=ri,Nn.camelCase=Jo,Nn.capitalize=function(n){return(n=u(n))&&n.charAt(0).toUpperCase()+n.slice(1)},Nn.ceil=oi,Nn.clone=function(n,t,r,e){return t&&typeof t!="boolean"&&$r(n,t,r)?t=false:typeof t=="function"&&(e=r,
            r=t,t=false),typeof r=="function"?ft(n,t,Dt(r,e,3)):ft(n,t)},Nn.cloneDeep=function(n,t,r){return typeof t=="function"?ft(n,true,Dt(t,r,3)):ft(n,true)},Nn.deburr=Ue,Nn.endsWith=function(n,t,r){n=u(n),t+="";var e=n.length;return r=r===w?e:ku(0>r?0:+r||0,e),r-=t.length,0<=r&&n.indexOf(t,r)==r},Nn.escape=function(n){return(n=u(n))&&hn.test(n)?n.replace(sn,c):n},Nn.escapeRegExp=function(n){return(n=u(n))&&xn.test(n)?n.replace(wn,l):n||"(?:)"},Nn.every=ee,Nn.find=ao,Nn.findIndex=Gu,Nn.findKey=Po,Nn.findLast=co,
        Nn.findLastIndex=Ju,Nn.findLastKey=zo,Nn.findWhere=function(n,t){return ao(n,At(t))},Nn.first=Zr,Nn.floor=ii,Nn.get=function(n,t,r){return n=null==n?w:mt(n,Mr(t),t+""),n===w?r:n},Nn.gt=he,Nn.gte=function(n,t){return n>=t},Nn.has=function(n,t){if(null==n)return false;var r=eu.call(n,t);if(!r&&!Wr(t)){if(t=Mr(t),n=1==t.length?n:mt(n,St(t,0,-1)),null==n)return false;t=Gr(t),r=eu.call(n,t)}return r||Lr(n.length)&&Ur(t,n.length)&&(Wo(n)||_e(n)||Ae(n))},Nn.identity=Ne,Nn.includes=oe,Nn.indexOf=Yr,Nn.inRange=function(n,t,r){
            return t=+t||0,r===w?(r=t,t=0):r=+r||0,n>=ku(t,r)&&n<ju(t,r)},Nn.isArguments=_e,Nn.isArray=Wo,Nn.isBoolean=function(n){return true===n||false===n||h(n)&&ou.call(n)==D},Nn.isDate=function(n){return h(n)&&ou.call(n)==M},Nn.isElement=function(n){return!!n&&1===n.nodeType&&h(n)&&!xe(n)},Nn.isEmpty=function(n){return null==n?true:Sr(n)&&(Wo(n)||Ae(n)||_e(n)||h(n)&&ye(n.splice))?!n.length:!Ko(n).length},Nn.isEqual=ve,Nn.isError=ge,Nn.isFinite=function(n){return typeof n=="number"&&bu(n)},Nn.isFunction=ye,Nn.isMatch=function(n,t,r,e){
            return r=typeof r=="function"?Dt(r,e,3):w,xt(n,kr(t),r)},Nn.isNaN=function(n){return we(n)&&n!=+n},Nn.isNative=me,Nn.isNull=function(n){return null===n},Nn.isNumber=we,Nn.isObject=de,Nn.isPlainObject=xe,Nn.isRegExp=be,Nn.isString=Ae,Nn.isTypedArray=je,Nn.isUndefined=function(n){return n===w},Nn.kebabCase=Xo,Nn.last=Gr,Nn.lastIndexOf=function(n,t,r){var e=n?n.length:0;if(!e)return-1;var u=e;if(typeof r=="number")u=(0>r?ju(e+r,0):ku(r||0,e-1))+1;else if(r)return u=zt(n,t,true)-1,n=n[u],(t===t?t===n:n!==n)?u:-1;
            if(t!==t)return p(n,u,true);for(;u--;)if(n[u]===t)return u;return-1},Nn.lt=ke,Nn.lte=function(n,t){return n<=t},Nn.max=fi,Nn.min=ai,Nn.noConflict=function(){return Yn._=iu,this},Nn.noop=ze,Nn.now=wo,Nn.pad=function(n,t,r){n=u(n),t=+t;var e=n.length;return e<t&&bu(t)?(e=(t-e)/2,t=wu(e),e=du(e),r=_r("",e,r),r.slice(0,t)+n+r):n},Nn.padLeft=Ho,Nn.padRight=Qo,Nn.parseInt=function(n,t,r){return(r?$r(n,t,r):null==t)?t=0:t&&(t=+t),n=We(n),Iu(n,t||(On.test(n)?16:10))},Nn.random=function(n,t,r){r&&$r(n,t,r)&&(t=r=w);
            var e=null==n,u=null==t;return null==r&&(u&&typeof n=="boolean"?(r=n,n=1):typeof t=="boolean"&&(r=t,u=true)),e&&u&&(t=1,u=false),n=+n||0,u?(t=n,n=0):t=+t||0,r||n%1||t%1?(r=Ru(),ku(n+r*(t-n+lu("1e-"+((r+"").length-1))),t)):Et(n,t)},Nn.reduce=go,Nn.reduceRight=yo,Nn.repeat=$e,Nn.result=function(n,t,r){var e=null==n?w:Dr(n)[t];return e===w&&(null==n||Wr(t,n)||(t=Mr(t),n=1==t.length?n:mt(n,St(t,0,-1)),e=null==n?w:Dr(n)[Gr(t)]),e=e===w?r:e),ye(e)?e.call(n):e},Nn.round=ci,Nn.runInContext=m,Nn.size=function(n){
            var t=n?Vu(n):0;return Lr(t)?t:Ko(n).length},Nn.snakeCase=ni,Nn.some=ae,Nn.sortedIndex=Qu,Nn.sortedLastIndex=no,Nn.startCase=ti,Nn.startsWith=function(n,t,r){return n=u(n),r=null==r?0:ku(0>r?0:+r||0,n.length),n.lastIndexOf(t,r)==r},Nn.sum=function(n,t,r){if(r&&$r(n,t,r)&&(t=w),t=br(t,r,3),1==t.length){n=Wo(n)?n:Br(n),r=n.length;for(var e=0;r--;)e+=+t(n[r])||0;n=e}else n=Ft(n,t);return n},Nn.template=function(n,t,r){var e=Nn.templateSettings;r&&$r(n,t,r)&&(t=r=w),n=u(n),t=rt(et({},r||t),e,tt),r=rt(et({},t.imports),e.imports,tt);
            var o,i,f=Ko(r),a=Nt(r,f),c=0;r=t.interpolate||Cn;var l="__p+='";r=Ge((t.escape||Cn).source+"|"+r.source+"|"+(r===gn?jn:Cn).source+"|"+(t.evaluate||Cn).source+"|$","g");var p="sourceURL"in t?"//# sourceURL="+t.sourceURL+"\n":"";if(n.replace(r,function(t,r,e,u,f,a){return e||(e=u),l+=n.slice(c,a).replace(Sn,s),r&&(o=true,l+="'+__e("+r+")+'"),f&&(i=true,l+="';"+f+";\n__p+='"),e&&(l+="'+((__t=("+e+"))==null?'':__t)+'"),c=a+t.length,t}),l+="';",(t=t.variable)||(l="with(obj){"+l+"}"),l=(i?l.replace(fn,""):l).replace(an,"$1").replace(cn,"$1;"),
                    l="function("+(t||"obj")+"){"+(t?"":"obj||(obj={});")+"var __t,__p=''"+(o?",__e=_.escape":"")+(i?",__j=Array.prototype.join;function print(){__p+=__j.call(arguments,'')}":";")+l+"return __p}",t=ri(function(){return Ke(f,p+"return "+l).apply(w,a)}),t.source=l,ge(t))throw t;return t},Nn.trim=We,Nn.trimLeft=function(n,t,r){var e=n;return(n=u(n))?n.slice((r?$r(e,t,r):null==t)?g(n):o(n,t+"")):n},Nn.trimRight=function(n,t,r){var e=n;return(n=u(n))?(r?$r(e,t,r):null==t)?n.slice(0,y(n)+1):n.slice(0,i(n,t+"")+1):n;
        },Nn.trunc=function(n,t,r){r&&$r(n,t,r)&&(t=w);var e=S;if(r=U,null!=t)if(de(t)){var o="separator"in t?t.separator:o,e="length"in t?+t.length||0:e;r="omission"in t?u(t.omission):r}else e=+t||0;if(n=u(n),e>=n.length)return n;if(e-=r.length,1>e)return r;if(t=n.slice(0,e),null==o)return t+r;if(be(o)){if(n.slice(e).search(o)){var i,f=n.slice(0,e);for(o.global||(o=Ge(o.source,(kn.exec(o)||"")+"g")),o.lastIndex=0;n=o.exec(f);)i=n.index;t=t.slice(0,null==i?e:i)}}else n.indexOf(o,e)!=e&&(o=t.lastIndexOf(o),
        -1<o&&(t=t.slice(0,o)));return t+r},Nn.unescape=function(n){return(n=u(n))&&pn.test(n)?n.replace(ln,d):n},Nn.uniqueId=function(n){var t=++uu;return u(n)+t},Nn.words=Fe,Nn.all=ee,Nn.any=ae,Nn.contains=oe,Nn.eq=ve,Nn.detect=ao,Nn.foldl=go,Nn.foldr=yo,Nn.head=Zr,Nn.include=oe,Nn.inject=go,Pe(Nn,function(){var n={};return gt(Nn,function(t,r){Nn.prototype[r]||(n[r]=t)}),n}(),false),Nn.sample=fe,Nn.prototype.sample=function(n){return this.__chain__||null!=n?this.thru(function(t){return fe(t,n)}):fe(this.value());
        },Nn.VERSION=x,Kn("bind bindKey curry curryRight partial partialRight".split(" "),function(n){Nn[n].placeholder=Nn}),Kn(["drop","take"],function(n,t){zn.prototype[n]=function(r){var e=this.__filtered__;if(e&&!t)return new zn(this);r=null==r?1:ju(wu(r)||0,0);var u=this.clone();return e?u.__takeCount__=ku(u.__takeCount__,r):u.__views__.push({size:r,type:n+(0>u.__dir__?"Right":"")}),u},zn.prototype[n+"Right"]=function(t){return this.reverse()[n](t).reverse()}}),Kn(["filter","map","takeWhile"],function(n,t){
            var r=t+1,e=r!=N;zn.prototype[n]=function(n,t){var u=this.clone();return u.__iteratees__.push({iteratee:br(n,t,1),type:r}),u.__filtered__=u.__filtered__||e,u}}),Kn(["first","last"],function(n,t){var r="take"+(t?"Right":"");zn.prototype[n]=function(){return this[r](1).value()[0]}}),Kn(["initial","rest"],function(n,t){var r="drop"+(t?"":"Right");zn.prototype[n]=function(){return this.__filtered__?new zn(this):this[r](1)}}),Kn(["pluck","where"],function(n,t){var r=t?"filter":"map",e=t?At:Be;zn.prototype[n]=function(n){
            return this[r](e(n))}}),zn.prototype.compact=function(){return this.filter(Ne)},zn.prototype.reject=function(n,t){return n=br(n,t,1),this.filter(function(t){return!n(t)})},zn.prototype.slice=function(n,t){n=null==n?0:+n||0;var r=this;return r.__filtered__&&(0<n||0>t)?new zn(r):(0>n?r=r.takeRight(-n):n&&(r=r.drop(n)),t!==w&&(t=+t||0,r=0>t?r.dropRight(-t):r.take(t-n)),r)},zn.prototype.takeRightWhile=function(n,t){return this.reverse().takeWhile(n,t).reverse()},zn.prototype.toArray=function(){return this.take(Cu);
        },gt(zn.prototype,function(n,t){var r=/^(?:filter|map|reject)|While$/.test(t),e=/^(?:first|last)$/.test(t),u=Nn[e?"take"+("last"==t?"Right":""):t];u&&(Nn.prototype[t]=function(){var t=e?[1]:arguments,o=this.__chain__,i=this.__wrapped__,f=!!this.__actions__.length,a=i instanceof zn,c=t[0],l=a||Wo(i);l&&r&&typeof c=="function"&&1!=c.length&&(a=l=false);var s=function(n){return e&&o?u(n,1)[0]:u.apply(w,Hn([n],t))},c={func:re,args:[s],thisArg:w},f=a&&!f;return e&&!o?f?(i=i.clone(),i.__actions__.push(c),
            n.call(i)):u.call(w,this.value())[0]:!e&&l?(i=f?i:new zn(this),i=n.apply(i,t),i.__actions__.push(c),new Pn(i,o)):this.thru(s)})}),Kn("join pop push replace shift sort splice split unshift".split(" "),function(n){var t=(/^(?:replace|split)$/.test(n)?tu:He)[n],r=/^(?:push|sort|unshift)$/.test(n)?"tap":"thru",e=!Tu.spliceObjects&&/^(?:pop|shift|splice)$/.test(n),u=/^(?:join|pop|replace|shift)$/.test(n),o=e?function(){var n=t.apply(this,arguments);return 0===this.length&&delete this[0],n}:t;Nn.prototype[n]=function(){
            var n=arguments;return u&&!this.__chain__?o.apply(this.value(),n):this[r](function(t){return o.apply(t,n)})}}),gt(zn.prototype,function(n,t){var r=Nn[t];if(r){var e=r.name+"";(Fu[e]||(Fu[e]=[])).push({name:t,func:r})}}),Fu[hr(w,A).name]=[{name:"wrapper",func:w}],zn.prototype.clone=function(){var n=new zn(this.__wrapped__);return n.__actions__=qn(this.__actions__),n.__dir__=this.__dir__,n.__filtered__=this.__filtered__,n.__iteratees__=qn(this.__iteratees__),n.__takeCount__=this.__takeCount__,n.__views__=qn(this.__views__),
            n},zn.prototype.reverse=function(){if(this.__filtered__){var n=new zn(this);n.__dir__=-1,n.__filtered__=true}else n=this.clone(),n.__dir__*=-1;return n},zn.prototype.value=function(){var n,t=this.__wrapped__.value(),r=this.__dir__,e=Wo(t),u=0>r,o=e?t.length:0;n=0;for(var i=o,f=this.__views__,a=-1,c=f.length;++a<c;){var l=f[a],s=l.size;switch(l.type){case"drop":n+=s;break;case"dropRight":i-=s;break;case"take":i=ku(i,n+s);break;case"takeRight":n=ju(n,i-s)}}if(n={start:n,end:i},i=n.start,f=n.end,n=f-i,
                u=u?f:i-1,i=this.__iteratees__,f=i.length,a=0,c=ku(n,this.__takeCount__),!e||o<F||o==n&&c==n)return Pt(t,this.__actions__);e=[];n:for(;n--&&a<c;){for(u+=r,o=-1,l=t[u];++o<f;){var p=i[o],s=p.type,p=p.iteratee(l);if(s==N)l=p;else if(!p){if(s==L)continue n;break n}}e[a++]=l}return e},Nn.prototype.chain=function(){return te(this)},Nn.prototype.commit=function(){return new Pn(this.value(),this.__chain__)},Nn.prototype.concat=oo,Nn.prototype.plant=function(n){for(var t,r=this;r instanceof Tn;){var e=qr(r);
            t?u.__wrapped__=e:t=e;var u=e,r=r.__wrapped__}return u.__wrapped__=n,t},Nn.prototype.reverse=function(){var n=this.__wrapped__,t=function(n){return n.reverse()};return n instanceof zn?(this.__actions__.length&&(n=new zn(this)),n=n.reverse(),n.__actions__.push({func:re,args:[t],thisArg:w}),new Pn(n,this.__chain__)):this.thru(t)},Nn.prototype.toString=function(){return this.value()+""},Nn.prototype.run=Nn.prototype.toJSON=Nn.prototype.valueOf=Nn.prototype.value=function(){return Pt(this.__wrapped__,this.__actions__);
        },Nn.prototype.collect=Nn.prototype.map,Nn.prototype.head=Nn.prototype.first,Nn.prototype.select=Nn.prototype.filter,Nn.prototype.tail=Nn.prototype.rest,Nn}var w,x="3.10.1",b=1,A=2,j=4,k=8,O=16,I=32,R=64,E=128,C=256,S=30,U="...",$=150,W=16,F=200,L=1,N=2,T="Expected a function",P="__lodash_placeholder__",z="[object Arguments]",B="[object Array]",D="[object Boolean]",M="[object Date]",q="[object Error]",K="[object Function]",V="[object Number]",Z="[object Object]",Y="[object RegExp]",G="[object String]",J="[object ArrayBuffer]",X="[object Float32Array]",H="[object Float64Array]",Q="[object Int8Array]",nn="[object Int16Array]",tn="[object Int32Array]",rn="[object Uint8Array]",en="[object Uint8ClampedArray]",un="[object Uint16Array]",on="[object Uint32Array]",fn=/\b__p\+='';/g,an=/\b(__p\+=)''\+/g,cn=/(__e\(.*?\)|\b__t\))\+'';/g,ln=/&(?:amp|lt|gt|quot|#39|#96);/g,sn=/[&<>"'`]/g,pn=RegExp(ln.source),hn=RegExp(sn.source),_n=/<%-([\s\S]+?)%>/g,vn=/<%([\s\S]+?)%>/g,gn=/<%=([\s\S]+?)%>/g,yn=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\n\\]|\\.)*?\1)\]/,dn=/^\w*$/,mn=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\n\\]|\\.)*?)\2)\]/g,wn=/^[:!,]|[\\^$.*+?()[\]{}|\/]|(^[0-9a-fA-Fnrtuvx])|([\n\r\u2028\u2029])/g,xn=RegExp(wn.source),bn=/[\u0300-\u036f\ufe20-\ufe23]/g,An=/\\(\\)?/g,jn=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,kn=/\w*$/,On=/^0[xX]/,In=/^\[object .+?Constructor\]$/,Rn=/^\d+$/,En=/[\xc0-\xd6\xd8-\xde\xdf-\xf6\xf8-\xff]/g,Cn=/($^)/,Sn=/['\n\r\u2028\u2029\\]/g,Un=RegExp("[A-Z\\xc0-\\xd6\\xd8-\\xde]+(?=[A-Z\\xc0-\\xd6\\xd8-\\xde][a-z\\xdf-\\xf6\\xf8-\\xff]+)|[A-Z\\xc0-\\xd6\\xd8-\\xde]?[a-z\\xdf-\\xf6\\xf8-\\xff]+|[A-Z\\xc0-\\xd6\\xd8-\\xde]+|[0-9]+","g"),$n="Array ArrayBuffer Date Error Float32Array Float64Array Function Int8Array Int16Array Int32Array Math Number Object RegExp Set String _ clearTimeout isFinite parseFloat parseInt setTimeout TypeError Uint8Array Uint8ClampedArray Uint16Array Uint32Array WeakMap".split(" "),Wn="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "),Fn={};
    Fn[X]=Fn[H]=Fn[Q]=Fn[nn]=Fn[tn]=Fn[rn]=Fn[en]=Fn[un]=Fn[on]=true,Fn[z]=Fn[B]=Fn[J]=Fn[D]=Fn[M]=Fn[q]=Fn[K]=Fn["[object Map]"]=Fn[V]=Fn[Z]=Fn[Y]=Fn["[object Set]"]=Fn[G]=Fn["[object WeakMap]"]=false;var Ln={};Ln[z]=Ln[B]=Ln[J]=Ln[D]=Ln[M]=Ln[X]=Ln[H]=Ln[Q]=Ln[nn]=Ln[tn]=Ln[V]=Ln[Z]=Ln[Y]=Ln[G]=Ln[rn]=Ln[en]=Ln[un]=Ln[on]=true,Ln[q]=Ln[K]=Ln["[object Map]"]=Ln["[object Set]"]=Ln["[object WeakMap]"]=false;var Nn={"\xc0":"A","\xc1":"A","\xc2":"A","\xc3":"A","\xc4":"A","\xc5":"A","\xe0":"a","\xe1":"a","\xe2":"a",
        "\xe3":"a","\xe4":"a","\xe5":"a","\xc7":"C","\xe7":"c","\xd0":"D","\xf0":"d","\xc8":"E","\xc9":"E","\xca":"E","\xcb":"E","\xe8":"e","\xe9":"e","\xea":"e","\xeb":"e","\xcc":"I","\xcd":"I","\xce":"I","\xcf":"I","\xec":"i","\xed":"i","\xee":"i","\xef":"i","\xd1":"N","\xf1":"n","\xd2":"O","\xd3":"O","\xd4":"O","\xd5":"O","\xd6":"O","\xd8":"O","\xf2":"o","\xf3":"o","\xf4":"o","\xf5":"o","\xf6":"o","\xf8":"o","\xd9":"U","\xda":"U","\xdb":"U","\xdc":"U","\xf9":"u","\xfa":"u","\xfb":"u","\xfc":"u","\xdd":"Y",
        "\xfd":"y","\xff":"y","\xc6":"Ae","\xe6":"ae","\xde":"Th","\xfe":"th","\xdf":"ss"},Tn={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","`":"&#96;"},Pn={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'","&#96;":"`"},zn={"function":true,object:true},Bn={0:"x30",1:"x31",2:"x32",3:"x33",4:"x34",5:"x35",6:"x36",7:"x37",8:"x38",9:"x39",A:"x41",B:"x42",C:"x43",D:"x44",E:"x45",F:"x46",a:"x61",b:"x62",c:"x63",d:"x64",e:"x65",f:"x66",n:"x6e",r:"x72",t:"x74",u:"x75",v:"x76",x:"x78"},Dn={"\\":"\\",
        "'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},Mn=zn[typeof exports]&&exports&&!exports.nodeType&&exports,qn=zn[typeof module]&&module&&!module.nodeType&&module,Kn=zn[typeof self]&&self&&self.Object&&self,Vn=zn[typeof window]&&window&&window.Object&&window,Zn=qn&&qn.exports===Mn&&Mn,Yn=Mn&&qn&&typeof global=="object"&&global&&global.Object&&global||Vn!==(this&&this.window)&&Vn||Kn||this,Gn=function(){try{Object({toString:0}+"")}catch(n){return function(){return false}}return function(n){
        return typeof n.toString!="function"&&typeof(n+"")=="string"}}(),Jn=m();typeof define=="function"&&typeof define.amd=="object"&&define.amd?(Yn._=Jn, define(function(){return Jn})):Mn&&qn?Zn?(qn.exports=Jn)._=Jn:Mn._=Jn:Yn._=Jn}).call(this);
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
(function(){function n(a,b,e){return("string"===typeof b?b:b.toString()).replace(a.define||h,function(b,c,d,g){0===c.indexOf("def.")&&(c=c.substring(4));c in e||(":"===d?(a.defineParams&&g.replace(a.defineParams,function(b,a,d){e[c]={arg:a,text:d}}),c in e||(e[c]=g)):(new Function("def","def['"+c+"']="+g))(e));return""}).replace(a.use||h,function(b,c){a.useParams&&(c=c.replace(a.useParams,function(b,a,c,d){if(e[c]&&e[c].arg&&d)return b=(c+":"+d).replace(/'|\\/g,"_"),e.__exp=e.__exp||{},e.__exp[b]=
	e[c].text.replace(new RegExp("(^|[^\\w$])"+e[c].arg+"([^\\w$])","g"),"$1"+d+"$2"),a+"def.__exp['"+b+"']"}));var d=(new Function("def","return "+c))(e);return d?n(a,d,e):d})}function k(a){return a.replace(/\\('|\\)/g,"$1").replace(/[\r\t\n]/g," ")}var f={version:"1.0.3",templateSettings:{evaluate:/\{\{([\s\S]+?(\}?)+)\}\}/g,interpolate:/\{\{=([\s\S]+?)\}\}/g,encode:/\{\{!([\s\S]+?)\}\}/g,use:/\{\{#([\s\S]+?)\}\}/g,useParams:/(^|[^\w$])def(?:\.|\[[\'\"])([\w$\.]+)(?:[\'\"]\])?\s*\:\s*([\w$\.]+|\"[^\"]+\"|\'[^\']+\'|\{[^\}]+\})/g,
	define:/\{\{##\s*([\w\.$]+)\s*(\:|=)([\s\S]+?)#\}\}/g,defineParams:/^\s*([\w$]+):([\s\S]+)/,conditional:/\{\{\?(\?)?\s*([\s\S]*?)\s*\}\}/g,iterate:/\{\{~\s*(?:\}\}|([\s\S]+?)\s*\:\s*([\w$]+)\s*(?:\:\s*([\w$]+))?\s*\}\})/g,varname:"it",strip:!0,append:!0,selfcontained:!1,doNotSkipEncoded:!1},template:void 0,compile:void 0},l;f.encodeHTMLSource=function(a){var b={"&":"&#38;","<":"&#60;",">":"&#62;",'"':"&#34;","'":"&#39;","/":"&#47;"},e=a?/[&<>"'\/]/g:/&(?!#?\w+;)|<|>|"|'|\//g;return function(a){return a?
	a.toString().replace(e,function(a){return b[a]||a}):""}};l=function(){return this||(0,eval)("this")}();"undefined"!==typeof module&&module.exports?module.exports=f:"function"===typeof define&&define.amd?define(function(){return f}):l.doT=f;var p={start:"'+(",end:")+'",startencode:"'+encodeHTML("},q={start:"';out+=(",end:");out+='",startencode:"';out+=encodeHTML("},h=/$^/;f.template=function(a,b,e){b=b||f.templateSettings;var m=b.append?p:q,c,d=0,g;a=b.use||b.define?n(b,a,e||{}):a;a=("var out='"+(b.strip?
	a.replace(/(^|\r|\n)\t* +| +\t*(\r|\n|$)/g," ").replace(/\r|\n|\t|\/\*[\s\S]*?\*\//g,""):a).replace(/'|\\/g,"\\$&").replace(b.interpolate||h,function(a,b){return m.start+k(b)+m.end}).replace(b.encode||h,function(a,b){c=!0;return m.startencode+k(b)+m.end}).replace(b.conditional||h,function(a,b,c){return b?c?"';}else if("+k(c)+"){out+='":"';}else{out+='":c?"';if("+k(c)+"){out+='":"';}out+='"}).replace(b.iterate||h,function(b,a,c,e){if(!a)return"';} } out+='";d+=1;g=e||"i"+d;a=k(a);return"';var arr"+
		d+"="+a+";if(arr"+d+"){var "+c+","+g+"=-1,l"+d+"=arr"+d+".length-1;while("+g+"<l"+d+"){"+c+"=arr"+d+"["+g+"+=1];out+='"}).replace(b.evaluate||h,function(a,b){return"';"+k(b)+"out+='"})+"';return out;").replace(/\n/g,"\\n").replace(/\t/g,"\\t").replace(/\r/g,"\\r").replace(/(\s|;|\}|^|\{)out\+='';/g,"$1").replace(/\+''/g,"");c&&(b.selfcontained||!l||l._encodeHTML||(l._encodeHTML=f.encodeHTMLSource(b.doNotSkipEncoded)),a="var encodeHTML = typeof _encodeHTML !== 'undefined' ? _encodeHTML : ("+f.encodeHTMLSource.toString()+
	"("+(b.doNotSkipEncoded||"")+"));"+a);return new Function(b.varname,a)};f.compile=function(a,b){return f.template(a,null,b)}})();
}());
(function () {
'use strict';
/*global window */

var win = window,
	doc = win.document,
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
	savedItem: 'cool-book-stories',
	attr: {},
	systemAttr: {},
	defaultLanguage: 'ru',
	availableLanguages: ['ru'],
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
		info.detectAnimationEndEventName();

		//set settings
		info.setSettings();

	},

	setLanguage: function () {

		var info = this,
			lang;

		lang = info.get('language') || navigator.language || navigator.userLanguage || this.defaultLanguage;
		lang = lang.split('-')[0].toLowerCase();
		lang = (info.availableLanguages.indexOf(lang) === -1) ? info.defaultLanguage : lang;
		lang = lang.toLowerCase();
		info.set('language', lang);

	},

	setOS: function () {

		var info = this,
			ua = win.navigator.userAgent,
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

		var match = win.navigator.userAgent.toLowerCase().match(/android\s([0-9\.]*)/);

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

		var i,
			el = doc.createElement('div'),
			transitions = {
				'transition': 'transitionend',
				'OTransition': 'otransitionend',  // oTransitionEnd in very old Opera
				'MozTransition': 'transitionend',
				'WebkitTransition': 'webkitTransitionEnd'
			},
			transitionEnd = 'transitionend';

		for (i in transitions) {
			if (transitions.hasOwnProperty(i) && el.style[i] !== undefined) {
				transitionEnd = transitions[i];
			}
		}

		this.set('transitionEnd', transitionEnd, true);

	},

	detectAnimationEndEventName: function () {
		var i,
			el = doc.createElement('div'),
			animations = {
				'animation': 'animationend',
				'OAnimation': 'oAnimationEnd',  // oAnimationEnd in very old Opera
				'MozAnimation': 'animationend',
				'WebkitAnimation': 'webkitAnimationEnd'
			},
			animationEnd = 'animationend';

		for (i in animations) {
			if (animations.hasOwnProperty(i) && el.style[i] !== undefined) {
				animationEnd = animations[i];
			}
		}

		this.set('animationEnd', animationEnd, true);

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
				installTime: Date.now(),
				versionCode: 1,
				screenAnimation: info.get('isAndroid', true) ? 'off' : 'on',
				//screenAnimation: 'off',
				storyByStory: info.isNormal ? 'off' : 'on',
				hint: {}
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
	}

};

info.init();

gi8002['/www/js/services/info.js'] = info;


}());
(function () {
'use strict';
/*global window */

var Backbone = gi8002['/www/js/lib/backbone.js'] || window.Backbone;
var mediator = gi8002['/www/js/services/mediator.js'] || window.mediator;
var log = gi8002['/www/js/services/log.js'] || window.log;

var win = window,
	doc = win.document,
	docElem = doc.documentElement,
	device,
	Device = Backbone.Model.extend({

		defaults: {
			width: 0,
			height: 0,
			orientation: ''
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
					orientation: orientation
				};

			device.set(data);

			device.trigger('resize');

			device.publish('resize', data);

		}

	});

device = new Device();

gi8002['/www/js/services/device.js'] = device;
}());
(function () {
'use strict';
/*global window, Date */

var info = gi8002['/www/js/services/info.js'] || window.info;

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

gi8002['/www/js/services/android-ads.js'] = androidAds;

}());
(function () {
'use strict';
/*global window */

var en = {
	language: 'Language',
	languageName: 'English',
	shortLanguageName: 'Eng',
	appName: 'Tangram-2',

	notification: {
	},

	// rate us block
	rateUs: {
		header: 'If you like out app, please rate it. Thanks!',
		rateNow: 'Rate Now',
		remindMeLater: 'Remind Me Later',
		noThanks: 'No, Thanks'
	}

};

gi8002['/www/js/i18n/en.js'] = en;
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
	}

};

gi8002['/www/js/i18n/ru.js'] = ru;
}());
(function () {
'use strict';
/*global window */

var info = gi8002['/www/js/services/info.js'] || window.info;
var en = gi8002['/www/js/i18n/en.js'] || window.en;
var ru = gi8002['/www/js/i18n/ru.js'] || window.ru;

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

gi8002['/www/js/services/lang.js'] = lang;



}());
(function () {
'use strict';
/*global window */

var doT = gi8002['/www/js/lib/dot.js'] || window.doT;

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

			}

		};

templateMaster.init();

gi8002['/www/js/services/template-master.js'] = templateMaster;



}());
(function () {
'use strict';
/*global window */

var win = window,
	//doc = win.document,
	//docElem = doc.documentElement,
	util = {

		assortArray: function (arr) {
			return arr.sort(function () {
				return 0.5 - Math.random();
			});
		},

		getPath: function (folder, index, type) {

			index += 1;

			if (index < 10) {
				index = '0' + index;
			}

			return folder + '/' + folder + '-' + index + '.' + type;

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
			return Math.round(Math.random() * (max - min) + min);
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

		}

	};

gi8002['/www/js/services/util.js'] = util;
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

gi8002['/www/js/sound/player-android.js'] = androidPlayer;
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

gi8002['/www/js/sound/player-ios.js'] = iosPlayer;


}());
(function () {
'use strict';
/*global window */

var info = gi8002['/www/js/services/info.js'] || window.info;

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

gi8002['/www/js/sound/player-web.js'] = webPlayer;

}());
(function () {
'use strict';
/*global window */

var androidPlayer = gi8002['/www/js/sound/player-android.js'] || window.androidPlayer;
var iosPlayer = gi8002['/www/js/sound/player-ios.js'] || window.iosPlayer;
var webPlayer = gi8002['/www/js/sound/player-web.js'] || window.webPlayer;
var info = gi8002['/www/js/services/info.js'] || window.info;

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

gi8002['/www/js/sound/sound-master.js'] = soundMaster;


}());
(function () {
'use strict';
/*global window */

var Backbone = gi8002['/www/js/lib/backbone.js'] || window.Backbone;
var $ = gi8002['/www/js/lib/jbone.js'] || window.$;
var _ = gi8002['/www/js/lib/lodash.js'] || window._;
var info = gi8002['/www/js/services/info.js'] || window.info;
//var tm = gi8002['/www/js/services/template-master.js'] || window.tm;
var util = gi8002['/www/js/services/util.js'] || window.util;
var mediator = gi8002['/www/js/services/mediator.js'] || window.mediator;
var sm = gi8002['/www/js/sound/sound-master.js'] || window.sm;
var lang = gi8002['/www/js/services/lang.js'] || window.lang;
var device = gi8002['/www/js/services/device.js'] || window.device;

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

			view.setClassNames();

			mediator.installTo(view);

			return Backbone.View.prototype.constructor.apply(view, arguments);
		},

		setClassNames: function () {

			this.classNames = {};

			_.each(this.selectors, function (value, key) {
				this[key] = value.replace(/\./g, ' ').trim();
			}, this.classNames);

		},

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

			Backbone.View.prototype.remove.call(view);

		},

		hide: function () {

			var view = this,
				$el = view.$el,
				animationEnd = info.get('animationEnd', true),
				isScreenAnimation = info.get('screenAnimation') === 'on',
				deferred = $.Deferred();

			view.unsubscribe();

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

			view.publish('showPopup', data, popup);

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
				cssClass: 'popup-title',
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
				src = 'https://www.gstatic.com/android/market_images/web/play_one_bar_logo.png?t=' + Math.random(),
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
				showPeriod = 86400e3 * 2,
				noThanksPeriod = showPeriod * 3; // try to show every two days

			if (lastShow && (now - lastShow < showPeriod)) {
				// do not show popup too often
				//console.log('do not show popup too often');
				return;
			}

			if (lastRateNow) {
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

				// set last show time
				dateUsData.lastShow = now;

				// save date-us data
				info.set('rate-us', dateUsData);

				return view.showPopup({
					name: 'rate-us',
					cssClass: 'popup-title',
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
				});

			});

		},

		loadUrl: function () {
			Backbone.history.loadUrl();
		},

		changeBy: function (key, delta) {
			return this.set(key, this.get(key) + delta);
		},

		set: function (key, value) {
			this.attr[key] = value;
			return value;
		},
		get: function (key) {
			return this.attr[key];
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

gi8002['/www/js/app/view/core/base.js'] = BaseView;
}());
(function () {
'use strict';
/*global window */

var BaseView = gi8002['/www/js/app/view/core/base.js'] || window.BaseView;
var tm = gi8002['/www/js/services/template-master.js'] || window.tm;

var HomeView = BaseView.extend({

	events: {},

	initialize: function () {

		var view = this;

		view.setElement(tm.tmplFn.home());

		view.render();

		return BaseView.prototype.initialize.apply(view, arguments);

	}

});

gi8002['/www/js/app/view/home/home-view.js'] = HomeView;
}());
(function () {
var Backbone = gi8002['/www/js/lib/backbone.js'] || window.Backbone;
var mediator = gi8002['/www/js/services/mediator.js'] || window.mediator;

var Tan = Backbone.Model.extend({

	styles: {
		fill: '#c00',
		stroke: '#0c0',
		'stroke-width': 0.02
	},

	activeStyles: {
		fill: '#0c0',
		stroke: '#c00',
		'stroke-width': 0.02
	},

	nodeAttributes: {
		'stroke-linejoin': 'round',
		'stroke-alignment': 'center'
	},

	setBy: function (key, deltaValue) {

		var tan = this;

		return tan.set(key, tan.get(key) + deltaValue);

	},

	initialize: function () {

		var tan = this;

		tan.initCoordinates();

		tan.bindEventListeners();

	},

	setLastAccept: function () {
		return this.set('last-accept', Date.now());
	},

	getLastAccept: function () {
		return this.get('last-accept');
	},

	initCoordinates: function () {

		var tan = this,
			scale = tan.get('scale'),
			maxX = -Infinity,
			maxY = -Infinity,
			minX = Infinity,
			minY = Infinity,
			sizeX,
			sizeY,
			halfSizeX,
			halfSizeY,
			rotateOriginX,
			rotateOriginY,
			coordinates = tan.get('coordinates');

		// push init coordinates to real tan coordinates
		tan.set('coordinates', coordinates.map(function (xy) {

			var x = xy.x * scale,
				y = xy.y * scale;

			maxX = x > maxX ? x : maxX;
			maxY = y > maxY ? y : maxY;
			minX = x < minX ? x : minX;
			minY = y < minY ? y : minY;

			return {x: x, y: y};

		}));

		sizeX = maxX - minX;
		sizeY = maxY - minY;

		halfSizeX = sizeX / 2;
		halfSizeY = sizeY / 2;

		rotateOriginX = minX + halfSizeX;
		rotateOriginY = minY + halfSizeY;

		tan.set({
			maxX: maxX,
			maxY: maxY,
			centerX: minX + halfSizeX,
			centerY: minY + halfSizeY,
			minX: minX,
			minY: minY,
			sizeX: sizeX,
			sizeY: sizeY,
			halfSizeX: halfSizeX,
			halfSizeY: halfSizeY,
			dx: 0,
			dy: 0,
			rotate: 0,
			rotateOriginX: rotateOriginX,
			rotateOriginY: rotateOriginY,
			isFlip: false,
			isActive: false
		});

	},

	bindEventListeners: function () {

		var tan = this;

		mediator.installTo(tan);

		tan.on('change:isActive', tan.setStateActiveDeActive);

		tan.subscribe('deviceAction:moving', tan.onMove);

	},

	flip: function () {

		var tan = this;

		tan.set('isFlip', !tan.get('isFlip'));

		tan.reDraw();

	},

	onMove: function (data) {

		var tan = this;
		return tan.get('isActive') && tan.move(data);

	},

	move: function (data) {

		var tan = this,
			dx = data.dx,
			dy = data.dy;

		tan.setBy('dx', data.dx);
		tan.setBy('dy', data.dy);

		tan.reDraw();

	},

	setStateActiveDeActive: function (self, isActive) {

		var tan = this;

		if (isActive) {
			tan.publish('rotater:deActivate');
			tan.setLastAccept();
		}

		tan.drawActiveDeActive(isActive);

		tan.moveToUpDown(isActive)

	},

	drawActiveDeActive: function (isActive) {

		var tan = this;

		tan.setStyles(isActive && tan.activeStyles);

	},

	moveToUpDown: function (isActive) {

		if (!isActive) {
			return;
		}

		var node = this.get('node');

		node.parentElement.appendChild(node);

	},

	getCoordinates: function () {

		var tan = this,
			coordinates = tan.get('coordinates'),
			toRad = Math.PI / 180,
			dx = tan.get('dx'),
			dy = tan.get('dy'),
			rotate = tan.get('rotate'),
			isFlip = tan.get('isFlip'),
			centerX = tan.get('centerX'),
			centerY = tan.get('centerY');

		return coordinates.map(function (xy) {

			var x = isFlip ? (xy.x + 2 * (centerX - xy.x)) : xy.x,
				y = xy.y,
				centeredX = x - centerX,
				centeredY = y - centerY,
				lineSize = Math.sqrt(centeredX * centeredX + centeredY * centeredY),
				centeredAngle = Math.atan2(centeredY, centeredX),
				newAngle = centeredAngle + rotate * (isFlip ? -1 : 1) * toRad,
				newX = Math.cos(newAngle) * lineSize,
				newY = Math.sin(newAngle) * lineSize,
				rotateDeltaX = newX - centeredX,
				rotateDeltaY = newY - centeredY;

			return {
				x: x + dx + rotateDeltaX,
				y: y + dy + rotateDeltaY
			}

		});

	},

	getAlignCoordinates: function () {

		var tan = this,
			getAlignCoordinatesOfLine = tan.getAlignCoordinatesOfLine,
			parts = tan.get('parts'),
			coordinates = tan.getCoordinates(),
			alignCoordinates = [];

		coordinates.forEach(function (xy, index, arr) {
			alignCoordinates = alignCoordinates.concat(getAlignCoordinatesOfLine(xy, arr[index + 1] || arr[0], parts));
		});

		return coordinates.concat(alignCoordinates);

	},

	getAlignCoordinatesOfLine: function getAlignCoordinatesOfLine(xy0, xy1, parts) {

		var centerXY = {
			x: (xy0.x + xy1.x) / 2,
			y: (xy0.y + xy1.y) / 2
		};

		if (parts === 2) {
			return [centerXY];
		}

		// parts === 4
		return [centerXY].concat(getAlignCoordinatesOfLine(xy0, centerXY, 2), getAlignCoordinatesOfLine(centerXY, xy1, 2));

	},

	getAngleBetweenLines: function (xy0, xy1, xy2, xy3) { // (xy0, xy1) - begin and end of first line, (xy2, xy3) - begin and end of second line

		var beginX = xy1.x - xy0.x,
			beginY = xy1.y - xy0.y,
			endX = xy3.x - xy2.x,
			endY = xy3.y - xy2.y;

		return (Math.atan2(endY, endX) - Math.atan2(beginY, beginX)) * 180 / Math.PI;

	},

	//getAngleFromPoint: function (x, y) {
	//
	//	return Math.atan2(y, x) * 180 / Math.PI;
	//
	//},

	getCenterCoordinates: function () {

		var tan = this;

		return {
			x: tan.get('dx') + tan.get('centerX'),
			y: tan.get('dy') + tan.get('centerY')
		}

	},

	/*
	 setCoordinates: function (coordinates) {

	 var tan = this;

	 _.each(coordinates, function (xy, i) {
	 tan.set('x' + i, xy.x);
	 tan.set('y' + i, xy.y);
	 });

	 return tan;

	 },
	 */

	drawTo: function (drawNode) {

		var tan = this,
			tanNode = tan.get('node'),
			polygonCoordinates = tan.getInitialPolygonCoordinates();

		if (!tanNode) {
			tanNode = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
			tan.set('node', tanNode);
			tan.setStyles();
			drawNode.appendChild(tanNode);
		}

		tanNode.setAttribute('points', polygonCoordinates);

	},

	reDraw: function () {

		var tan = this,
			tanNode = tan.get('node'),
			transformation = tan.getTransform().attribute;

		tanNode.setAttribute('transform', transformation);

	},

	getTransform: function () {

		var tan = this,
			rotate = tan.get('rotate'),
			rotateOriginX = tan.get('rotateOriginX'),
			rotateOriginY = tan.get('rotateOriginY'),
			dx = tan.get('dx'),
			flipDx,
			dy = tan.get('dy'),
			isFlip = tan.get('isFlip'),
			translateSrt = 'translate(dx,dy)',
			rotateSrt = 'rotate(angle rotateOriginX rotateOriginY)',
			scaleStr = 'scale(-1,1)',
			attribute = [];

		if (isFlip) {
			flipDx = -2 * tan.get('minX') - dx - tan.get('sizeX');
			attribute.push(scaleStr);
			attribute.push(
				translateSrt
					.replace('dx', flipDx)
					.replace('dy', dy)
			);
		} else {
			attribute.push(
				translateSrt
					.replace('dx', dx)
					.replace('dy', dy)
			);
		}

		attribute.push(
			rotateSrt
				.replace('angle', rotate)
				.replace('rotateOriginX', rotateOriginX)
				.replace('rotateOriginY', rotateOriginY)
		);

		return {
			dx: dx,
			dy: dy,
			rotate: rotate,
			isFlip: isFlip,
			flipDx: flipDx,
			attribute: attribute.join(' ')
		}

	},

	setStyles: function (stylesArg) {

		var tan = this,
			node = tan.get('node'),
			styles = stylesArg || tan.styles,
			nodeAttributes = tan.nodeAttributes,
			styleStr = '',
			attr = document.createAttribute('style');

		Object.keys(styles).forEach(function (key) {
			var value = (key === 'stroke-width') ? styles[key] * tan.get('scale') : styles[key];
			styleStr += key + ':' + value + ';';
		});

		attr.value = styleStr;
		node.setAttributeNode(attr);

		Object.keys(nodeAttributes).forEach(function (key) {
			var attr = document.createAttribute(key);
			attr.value = nodeAttributes[key];
			node.setAttributeNode(attr);
		});

	},

	getInitialPolygonCoordinates: function () {

		var tan = this,
			scale = tan.get('scale');

		return tan.get('coordinates').map(function (xy) {
			return xy.x + ',' + xy.y;
		}).join(' ');

	},

	isIn: function (xy) {

		var tan = this,
			coordinates = tan.getCoordinates(),
			anglesLength = coordinates.length;

		if (anglesLength === 3) {
			return tan.isInTriangle.apply(tan, coordinates.concat([xy]));
		}

		if (anglesLength === 4) {
			return tan.isInFourangle.apply(tan, coordinates.concat([xy]));
		}

	},

	// x0, y0 - point coordinates

	isInTriangle: function (xy1, xy2, xy3, xy0) {

		var a, b, c,
			x1 = xy1.x,
			y1 = xy1.y,
			x2 = xy2.x,
			y2 = xy2.y,
			x3 = xy3.x,
			y3 = xy3.y,
			x0 = xy0.x,
			y0 = xy0.y;

		a = (x1 - x0) * (y2 - y1) - (x2 - x1) * (y1 - y0);
		b = (x2 - x0) * (y3 - y2) - (x3 - x2) * (y2 - y0);
		c = (x3 - x0) * (y1 - y3) - (x1 - x3) * (y3 - y0);

		return (a >= 0 && b >= 0 && c >= 0) || (a <= 0 && b <= 0 && c <= 0);

	},

	isInFourangle: function (xy1, xy2, xy3, xy4, xy0) {

		var tan = this;

		return tan.isInTriangle(xy1, xy2, xy3, xy0) || tan.isInTriangle(xy3, xy4, xy1, xy0);

	}

});

gi8002['/www/js/app/view/tangram/models/tan.js'] = Tan;
}());
(function () {
var Backbone = gi8002['/www/js/lib/backbone.js'] || window.Backbone;
var Tan = gi8002['/www/js/app/view/tangram/models/tan.js'] || window.Tan;
var _ = gi8002['/www/js/lib/lodash.js'] || window._;
var device = gi8002['/www/js/services/device.js'] || window.device;
var mediator = gi8002['/www/js/services/mediator.js'] || window.mediator;
var log = gi8002['/www/js/services/log.js'] || window.log;

var tansInfo = {
	triangleBig: {
		count: 2,
		coordinates: [{x: 0, y: 0}, {x: 1, y: 0}, {x: 0.5, y: 0.5}],
		parts: 4
	},
	triangleMedium: {
		count: 1,
		coordinates: [{x: 0, y: 0.5}, {x: 0.5, y: 1}, {x: 0, y: 1}],
		parts: 4
	},
	triangleSmall: {
		count: 2,
		coordinates: [{x: 0.25, y: 0.25}, {x: 0.5, y: 0.5}, {x: 0.25, y: 0.75}],
		parts: 2
	},
	square: {
		count: 1,
		coordinates: [{x: 0.5, y: 0.5}, {x: 0.75, y: 0.75}, {x: 0.5, y: 1}, {x: 0.25, y: 0.75}],
		parts: 2
	},
	parallelogram: {
		count: 1,
		coordinates: [{x: 0, y: 0}, {x: 0.25, y: 0.25}, {x: 0.25, y: 0.75}, {x: 0, y: 0.5}],
		parts: 2
	}
};

var TanCollection = Backbone.Collection.extend({

	model: Tan,

	attr: {},

	setData: function (keyOrObj, value) {

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

	getData: function (key) {

		return this.attr[key];

	},

	initialize: function () {

		var collection = this;

		collection.bindEventListeners();

	},

	bindEventListeners: function () {

		var collection = this;

		mediator.installTo(collection);

		collection.subscribe('deviceAction:isActive', collection.activateDeActiveTans);
		collection.subscribe('deviceAction:dblTap', collection.flipTan);

		collection.subscribe('tan:align', collection.align);

	},

	activateDeActiveTans: function (isActive, data) {

		var collection = this,
			hoveredTan = collection.getHoveredTan(data),
			rotater = collection.getData('rotater'),
			isInRingRotater = rotater.isInRing(data);

		collection.deActiveAll();

		if (isActive) {

			if (isInRingRotater) {

				rotater.setStartData(data);

			} else {

				rotater.deActivate();
				if (hoveredTan) {
					hoveredTan.set('isActive', true);
					collection.setData('lastActiveTan', hoveredTan);
				} else {


				}


			}


		} else {

			// stop rotating if needed

			if (rotater.get('isActive')) {

				rotater.endRotating();

			} else {

				if (hoveredTan) {
					collection.align({tan: hoveredTan});
					rotater.connectTan({
						tan: hoveredTan
					});
				}

			}

		}

	},

	flipTan: function (data) {

		var collection = this,
			rotater = collection.getData('rotater'),
			hoveredTan = collection.getHoveredTan(data);

		return hoveredTan && rotater.get('tan') === hoveredTan && hoveredTan.flip();

	},

	align: function (data) {

		var collection = this,
			tan = data.tan,
			alignData = collection.getAlignData(data),
			maxAlignPath = collection.getData('maxAlignPath');

		if (alignData.pathSize > maxAlignPath) {
			return;
		}

		tan.move({
			dx: alignData.otherX - alignData.alignX,
			dy: alignData.otherY - alignData.alignY
		});

		collection.publish('rotater:moveTo', tan.getCenterCoordinates());

	},

	getAlignData: function (data) {

		var collection = this,
			alignTan = data.tan,
			alignTanCoordinates = alignTan.getAlignCoordinates(),
			align = {},
			minPath = Infinity,
			otherTansCoordinates = [],
			pow = Math.pow.bind(Math);

		collection.each(function (tan) {
			if (tan === alignTan) {
				return;
			}
			otherTansCoordinates = otherTansCoordinates.concat(tan.getAlignCoordinates());
		});

		otherTansCoordinates.forEach(function (otherXY) {

			alignTanCoordinates.forEach(function (alignXY) {

				var otherX = otherXY.x,
					otherY = otherXY.y,
					alignX = alignXY.x,
					alignY = alignXY.y,
					curPath = pow(otherX - alignX, 2) + pow(otherY - alignY, 2);

				if (curPath > minPath) {
					return;
				}

				minPath = curPath;

				align = {
					otherX: otherX,
					otherY: otherY,
					alignX: alignX,
					alignY: alignY,
					pathSize: Math.sqrt(minPath)
				}

			});

		});

		return align;

	},

	getHoveredTan: function (xy) {

		var collection = this,
			hoveredTan;

		collection.each(function (tan) {

			// touch XY is not in tan
			if (!tan.isIn(xy)) {
				return;
			}

			if (!hoveredTan) {
				return hoveredTan = tan;
			}

			if (tan.getLastAccept() > hoveredTan.getLastAccept()) {
				hoveredTan = tan;
			}

		});

		return hoveredTan;

	},

	deActiveAll: function () {

		this.each(function (tan) {
			tan.set('isActive', false);
		});

	},

	setScale: function (scale) {
		this.setData('maxAlignPath', scale / 10);
		this.setData('scale', scale);
	},

	createTans: function () {

		_.each(tansInfo, function (data) {
			for (var i = 0, len = data.count; i < len; i += 1) {
				this.add({
					coordinates: data.coordinates,
					parts: data.parts,
					count: len,
					scale: this.getData('scale')
				});
			}
		}, this);

	},

	createDrawElement: function () {

		// device
		var collection = this,
			width = device.get('width'),
			height = device.get('height'),
			svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg'),
			attributes = {
				x: '0px',
				y: '0px',
				width: width + 'px',
				height: height + 'px',
				viewBox: [0, 0, width, height].join(' ')
			};

		Object.keys(attributes).forEach(function (key) {
			var attr = document.createAttribute(key);
			attr.value = attributes[key];
			svg.setAttributeNode(attr);
		});

		collection.setData('draw-node', svg);

		return svg;

	},

	addDrawFieldTo: function ($node) {

		$node.append(this.createDrawElement());

	},

	drawTans: function () {

		var svg = this.getData('draw-node');

		this.each(function (tan) {
			tan.drawTo(svg);
		});

	}

});

gi8002['/www/js/app/view/tangram/models/tan-collection.js'] = TanCollection;
}());
(function () {
var Backbone = gi8002['/www/js/lib/backbone.js'] || window.Backbone;
var _ = gi8002['/www/js/lib/lodash.js'] || window._;
var mediator = gi8002['/www/js/services/mediator.js'] || window.mediator;
var info = gi8002['/www/js/services/info.js'] || window.info;
var log = gi8002['/www/js/services/log.js'] || window.log;

'use strict';
/*global window */
/*global */

var RotaterModel = Backbone.Model.extend({

	initialize: function (data) {

		if (!data) {
			return;
		}

		var rotater = this;

		rotater.set(data);

		rotater.set({
			cssTransformName: info.get('cssJsPrefix', true).css + 'transform',
			size: data.size,
			isActive: false
		});

		rotater.initNode();
		rotater.bindEventListeners();

	},

	initNode: function () {

		var rotater = this,
			parentView = rotater.get('parentView'),
			parent$el = parentView.$el,
			size = rotater.get('size'),
			$rotater = $('<div class="rotater rotater--hidden"></div>');

		$rotater.css({
			width: size + 'px',
			height: size + 'px',
			top: -size / 2 + 'px',
			left: -size / 2 + 'px'
		});

		rotater.set('$rotater', $rotater);

		parent$el.append($rotater);

	},

	bindEventListeners: function () {

		var rotater = this;

		mediator.installTo(rotater);

		rotater.subscribe('deviceAction:moving', rotater.rotateTan);

		//rotater.subscribe('rotater:connectTan', rotater.connectTan);

		rotater.subscribe('rotater:deActivate', rotater.deActivate);
		rotater.subscribe('rotater:moveTo', rotater.moveTo);

	},

	rotateTan: function (data) {

		var rotater = this;

		if (!rotater.get('isActive')) {
			return;
		}

		var tan = rotater.get('tan'),
			startRotatingCursorX = rotater.get('startRotatingCursorX'),
			startRotatingCursorY = rotater.get('startRotatingCursorY'),
			tanCenterX = rotater.get('tanCenterX'),
			tanCenterY = rotater.get('tanCenterY'),
			currentX = data.x,
			currentY = data.y,
			startVectorX = tanCenterX - startRotatingCursorX,
			startVectorY = tanCenterY - startRotatingCursorY,
			currentVectorX = tanCenterX - currentX,
			currentVectorY = tanCenterY - currentY,
			toDeg = 180 / Math.PI,
			startAngle,
			currentAngle,
			deltaAngle,
			isFlip = tan.get('isFlip') ? -1 : 1;

		// get angle
		startAngle = Math.atan2(startVectorY, startVectorX) * toDeg;
		currentAngle = Math.atan2(currentVectorY, currentVectorX) * toDeg;

		deltaAngle = currentAngle - startAngle;

		tan.set('rotate', rotater.get('startRotateTanAngle') + deltaAngle * isFlip);
		tan.reDraw();

	},

	connectTan: function (data) {

		var rotater = this;

		rotater.set({
			tan: data.tan,
			isActive: true
		});

		rotater.showNode();

	},

	setStartData: function (data) {

		var rotater = this,
			tan = rotater.get('tan'),
			tanCenterXY = tan.getCenterCoordinates();

		rotater.set({
			tanCenterX: tanCenterXY.x,
			tanCenterY: tanCenterXY.y,
			startRotatingCursorX: data.x,
			startRotatingCursorY: data.y,
			startRotateTanAngle: tan.get('rotate')
		});

	},

	//active: function () {
	//
	//	var rotater = this;
	//
	//	rotater.showNode();
	//
	//},

	showNode: function () {

		var rotater = this,
			tan = rotater.get('tan'),
			$rotater = rotater.get('$rotater');

		rotater.moveTo(tan.getCenterCoordinates());

		$rotater.removeClass('rotater--hidden');

	},

	moveTo: function (data) {

		var rotater = this,
			$rotater = rotater.get('$rotater');

		$rotater.css(rotater.get('cssTransformName'), 'translate3d(' + data.x + 'px,' + data.y + 'px,0)');

	},

	deActivate: function () {

		var rotater = this;

		rotater.hideNode();

		rotater.set('isActive', false);

	},

	hideNode: function () {

		var rotater = this,
			$rotater = rotater.get('$rotater');

		$rotater.addClass('rotater--hidden');

	},

	isInRing: function (xy) {

		var rotater = this;

		if (!rotater.get('isActive')) {
			return false;
		}

		var tan = rotater.get('tan'),
			centerXY = tan.getCenterCoordinates(),
			size = rotater.get('size'),
			max = size / 2 * 1.1,
			min = size / 4,
			distance = Math.sqrt(Math.pow(centerXY.x - xy.x, 2) + Math.pow(centerXY.y - xy.y, 2));

		return (distance > min) && (distance < max);

	},

	endRotating: function () {

		var rotater = this;

		if (!rotater.get('isActive')) {
			return false;
		}

		var tan = rotater.get('tan'),
			tanRotate = tan.get('rotate');

		tanRotate = Math.round(tanRotate / 45) * 45;

		tan.set('rotate', tanRotate);

		tan.publish('tan:align', {tan: tan});

		tan.reDraw();

	}


});


gi8002['/www/js/app/view/tangram/rotater/rotater-model.js'] = RotaterModel;
}());
(function () {
'use strict';
/*global window */

var BaseView = gi8002['/www/js/app/view/core/base.js'] || window.BaseView;
var tm = gi8002['/www/js/services/template-master.js'] || window.tm;
var TanCollection = gi8002['/www/js/app/view/tangram/models/tan-collection.js'] || window.TanCollection;
var RotaterModel = gi8002['/www/js/app/view/tangram/rotater/rotater-model.js'] || window.RotaterModel;

var TangramView = BaseView.extend({

	events: {
		scroll: 'stopEvent'
	},

	initialize: function () {

		var view = this,
			tanCollection = new TanCollection(),
			rotater = new RotaterModel(),
			scale = 200;

		view.setElement(tm.tmplFn.tangram());

		view.set('tan-collection', tanCollection);

		tanCollection.setScale(scale);
		tanCollection.createTans();
		tanCollection.addDrawFieldTo(view.$el);
		tanCollection.drawTans();
		tanCollection.setData('rotater', rotater);

		rotater.initialize({
			parentView: view,
			size: scale
		});

		view.render();

		return BaseView.prototype.initialize.apply(view, arguments);

	}

});

gi8002['/www/js/app/view/tangram/tangram-view.js'] = TangramView;
}());
(function () {
'use strict';
/*global window */

var Backbone = gi8002['/www/js/lib/backbone.js'] || window.Backbone;
var _ = gi8002['/www/js/lib/lodash.js'] || window._;
var BaseView = gi8002['/www/js/app/view/core/base.js'] || window.BaseView;
var HomeView = gi8002['/www/js/app/view/home/home-view.js'] || window.HomeView;
var TangramView = gi8002['/www/js/app/view/tangram/tangram-view.js'] || window.TangramView;
var mediator = gi8002['/www/js/services/mediator.js'] || window.mediator;

var win = window,
	router,
	Router = Backbone.Router.extend({

		routes: {
			'': 'home',
			'tangram': 'tangram'
		},

		home: function () {
			new HomeView();
		},

		tangram: function () {
			new TangramView();
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

gi8002['/www/js/app/router/router.js'] = router;
}());
(function () {
'use strict';
/*global window */

var BaseView = gi8002['/www/js/app/view/core/base.js'] || window.BaseView;
var $ = gi8002['/www/js/lib/jbone.js'] || window.$;
var _ = gi8002['/www/js/lib/lodash.js'] || window._;
var lang = gi8002['/www/js/services/lang.js'] || window.lang;
var info = gi8002['/www/js/services/info.js'] || window.info;
var device = gi8002['/www/js/services/device.js'] || window.device;
var tm = gi8002['/www/js/services/template-master.js'] || window.tm;
var mediator = gi8002['/www/js/services/mediator.js'] || window.mediator;

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

		view.setElement(tm.tmplFn.hint({
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

gi8002['/www/js/app/view/core/hint.js'] = hintMaster;
}());
(function () {
'use strict';
/*global window */

var BaseView = gi8002['/www/js/app/view/core/base.js'] || window.BaseView;
var $ = gi8002['/www/js/lib/jbone.js'] || window.$;
var _ = gi8002['/www/js/lib/lodash.js'] || window._;
var sm = gi8002['/www/js/sound/sound-master.js'] || window.sm;
var tm = gi8002['/www/js/services/template-master.js'] || window.tm;
var info = gi8002['/www/js/services/info.js'] || window.info;
var mediator = gi8002['/www/js/services/mediator.js'] || window.mediator;

var win = window,
	PopupView,
	popupMaster;

PopupView = BaseView.extend({

	events: {
		//'click .js-popup-container': 'stopEvent'
		'click': 'hidePopupByRouter',
		'scroll': 'stopEvent'
	},

	selectors: {
		popupContainer: '.js-popup-container'
	},

	initialize: function (data) { // timeout, cssClass, from, data {text, header ...}, append$el, sound, onShow {context, fn}, onHide {context, fn}

		var view = this,
			popupUrl = view.popupUrl,
			url = win.location.href;

		if (url.indexOf(popupUrl) === -1) {
			view.publish('route-to-popup');
		}

		view.extendFromObj(data); // name, parentView, data(objToView)

		view.setElement(tm.tmplFn['popup-wrapper']());

		if (data.cssClass) {
			view.$el.addClass(data.cssClass);
		}

		BaseView.prototype.initialize.apply(this, arguments);

		view.render();

		view.showInAnimation();

		view.bindEventListeners();

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
			clearTimeout(view.get('timeoutId'))
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
			append$el = view.get('append$el'),
			data = view.get('data') || {},
			sound = view.get('sound'),
			$content = $(tm.tmplFn[view.get('name')](data)),
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
				context;

			if (onHide) {
				context = onHide.context || view;
				context[onHide.fn].apply(context, onHide.args);
			}

			BaseView.prototype.hide.call(view);

			view.get('deferred').resolve();

		});

	},

	// actions
	showInAnimation: function () {
		var view = this;
		view.$el.addClass('popup-show-in');
	},

	showOutAnimation: function () {

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

popupMaster.subscribe('showPopup', popupMaster.showPopup);

gi8002['/www/js/app/view/core/popup.js'] = popupMaster;
}());
(function () {
'use strict';
/*global window */

var log = gi8002['/www/js/services/log.js'] || window.log;

var mediator = gi8002['/www/js/services/mediator.js'] || window.mediator;

// init all librares
var polyfillClassList = gi8002['/www/js/lib/polyfill-class-list.js'] || window.polyfillClassList;
var shim = gi8002['/www/js/lib/shim.js'] || window.shim;
var shimES5 = gi8002['/www/js/lib/shim-es5.js'] || window.shimES5;
var shamES5 = gi8002['/www/js/lib/sham-es5.js'] || window.shamES5;
var _ = gi8002['/www/js/lib/lodash.js'] || window._;
var $ = gi8002['/www/js/lib/jbone.js'] || window.$;
var Deferred = gi8002['/www/js/lib/deferred.js'] || window.Deferred;
var Backbone = gi8002['/www/js/lib/backbone.js'] || window.Backbone;
var fastclick = gi8002['/www/js/lib/fastclick.js'] || window.fastclick;
var doT = gi8002['/www/js/lib/dot.js'] || window.doT;

// init all services
var info = gi8002['/www/js/services/info.js'] || window.info;
var device = gi8002['/www/js/services/device.js'] || window.device;
var androidAds = gi8002['/www/js/services/android-ads.js'] || window.androidAds;
var lang = gi8002['/www/js/services/lang.js'] || window.lang;
var tm = gi8002['/www/js/services/template-master.js'] || window.tm;
var util = gi8002['/www/js/services/util.js'] || window.util;

// init sound players
var sm = gi8002['/www/js/sound/sound-master.js'] || window.sm;

var router = gi8002['/www/js/app/router/router.js'] || window.router;

var BaseView = gi8002['/www/js/app/view/core/base.js'] || window.BaseView;
var hintMaster = gi8002['/www/js/app/view/core/hint.js'] || window.hintMaster;
var popupMaster = gi8002['/www/js/app/view/core/popup.js'] || window.popupMaster;

// todo: - test - enable fast click
new FastClick(window.document.body); // test it decide

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

	win.setTimeout(androidAds.showAd, 3e3);

}());
}());

}({}));
