(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/*!
 * jQuery JavaScript Library v2.1.4
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2005, 2014 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2015-04-28T16:01Z
 */

(function( global, factory ) {

	if ( typeof module === "object" && typeof module.exports === "object" ) {
		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
}(typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Support: Firefox 18+
// Can't be in strict mode, several libs including ASP.NET trace
// the stack via arguments.caller.callee and Firefox dies if
// you try to trace through "use strict" call chains. (#13335)
//

var arr = [];

var slice = arr.slice;

var concat = arr.concat;

var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var support = {};



var
	// Use the correct document accordingly with window argument (sandbox)
	document = window.document,

	version = "2.1.4",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {
		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	},

	// Support: Android<4.1
	// Make sure we trim BOM and NBSP
	rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,

	// Matches dashed string for camelizing
	rmsPrefix = /^-ms-/,
	rdashAlpha = /-([\da-z])/gi,

	// Used by jQuery.camelCase as callback to replace()
	fcamelCase = function( all, letter ) {
		return letter.toUpperCase();
	};

jQuery.fn = jQuery.prototype = {
	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// Start with an empty selector
	selector: "",

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {
		return num != null ?

			// Return just the one element from the set
			( num < 0 ? this[ num + this.length ] : this[ num ] ) :

			// Return all the elements in a clean array
			slice.call( this );
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;
		ret.context = this.context;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	// (You can seed the arguments with an array of args, but this is
	// only used internally.)
	each: function( callback, args ) {
		return jQuery.each( this, callback, args );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map(this, function( elem, i ) {
			return callback.call( elem, i, elem );
		}));
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[j] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor(null);
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[0] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !jQuery.isFunction(target) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {
		// Only deal with non-null/undefined values
		if ( (options = arguments[ i ]) != null ) {
			// Extend the base object
			for ( name in options ) {
				src = target[ name ];
				copy = options[ name ];

				// Prevent never-ending loop
				if ( target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject(copy) || (copyIsArray = jQuery.isArray(copy)) ) ) {
					if ( copyIsArray ) {
						copyIsArray = false;
						clone = src && jQuery.isArray(src) ? src : [];

					} else {
						clone = src && jQuery.isPlainObject(src) ? src : {};
					}

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend({
	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isFunction: function( obj ) {
		return jQuery.type(obj) === "function";
	},

	isArray: Array.isArray,

	isWindow: function( obj ) {
		return obj != null && obj === obj.window;
	},

	isNumeric: function( obj ) {
		// parseFloat NaNs numeric-cast false positives (null|true|false|"")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		// adding 1 corrects loss of precision from parseFloat (#15100)
		return !jQuery.isArray( obj ) && (obj - parseFloat( obj ) + 1) >= 0;
	},

	isPlainObject: function( obj ) {
		// Not plain objects:
		// - Any object or value whose internal [[Class]] property is not "[object Object]"
		// - DOM nodes
		// - window
		if ( jQuery.type( obj ) !== "object" || obj.nodeType || jQuery.isWindow( obj ) ) {
			return false;
		}

		if ( obj.constructor &&
				!hasOwn.call( obj.constructor.prototype, "isPrototypeOf" ) ) {
			return false;
		}

		// If the function hasn't returned already, we're confident that
		// |obj| is a plain object, created by {} or constructed with new Object
		return true;
	},

	isEmptyObject: function( obj ) {
		var name;
		for ( name in obj ) {
			return false;
		}
		return true;
	},

	type: function( obj ) {
		if ( obj == null ) {
			return obj + "";
		}
		// Support: Android<4.0, iOS<6 (functionish RegExp)
		return typeof obj === "object" || typeof obj === "function" ?
			class2type[ toString.call(obj) ] || "object" :
			typeof obj;
	},

	// Evaluates a script in a global context
	globalEval: function( code ) {
		var script,
			indirect = eval;

		code = jQuery.trim( code );

		if ( code ) {
			// If the code includes a valid, prologue position
			// strict mode pragma, execute code by injecting a
			// script tag into the document.
			if ( code.indexOf("use strict") === 1 ) {
				script = document.createElement("script");
				script.text = code;
				document.head.appendChild( script ).parentNode.removeChild( script );
			} else {
			// Otherwise, avoid the DOM node creation, insertion
			// and removal by using an indirect global eval
				indirect( code );
			}
		}
	},

	// Convert dashed to camelCase; used by the css and data modules
	// Support: IE9-11+
	// Microsoft forgot to hump their vendor prefix (#9572)
	camelCase: function( string ) {
		return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
	},

	nodeName: function( elem, name ) {
		return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
	},

	// args is for internal usage only
	each: function( obj, callback, args ) {
		var value,
			i = 0,
			length = obj.length,
			isArray = isArraylike( obj );

		if ( args ) {
			if ( isArray ) {
				for ( ; i < length; i++ ) {
					value = callback.apply( obj[ i ], args );

					if ( value === false ) {
						break;
					}
				}
			} else {
				for ( i in obj ) {
					value = callback.apply( obj[ i ], args );

					if ( value === false ) {
						break;
					}
				}
			}

		// A special, fast, case for the most common use of each
		} else {
			if ( isArray ) {
				for ( ; i < length; i++ ) {
					value = callback.call( obj[ i ], i, obj[ i ] );

					if ( value === false ) {
						break;
					}
				}
			} else {
				for ( i in obj ) {
					value = callback.call( obj[ i ], i, obj[ i ] );

					if ( value === false ) {
						break;
					}
				}
			}
		}

		return obj;
	},

	// Support: Android<4.1
	trim: function( text ) {
		return text == null ?
			"" :
			( text + "" ).replace( rtrim, "" );
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArraylike( Object(arr) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var value,
			i = 0,
			length = elems.length,
			isArray = isArraylike( elems ),
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArray ) {
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return concat.apply( [], ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// Bind a function to a context, optionally partially applying any
	// arguments.
	proxy: function( fn, context ) {
		var tmp, args, proxy;

		if ( typeof context === "string" ) {
			tmp = fn[ context ];
			context = fn;
			fn = tmp;
		}

		// Quick check to determine if target is callable, in the spec
		// this throws a TypeError, but we will just return undefined.
		if ( !jQuery.isFunction( fn ) ) {
			return undefined;
		}

		// Simulated bind
		args = slice.call( arguments, 2 );
		proxy = function() {
			return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
		};

		// Set the guid of unique handler to the same of original handler, so it can be removed
		proxy.guid = fn.guid = fn.guid || jQuery.guid++;

		return proxy;
	},

	now: Date.now,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
});

// Populate the class2type map
jQuery.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(i, name) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
});

function isArraylike( obj ) {

	// Support: iOS 8.2 (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = "length" in obj && obj.length,
		type = jQuery.type( obj );

	if ( type === "function" || jQuery.isWindow( obj ) ) {
		return false;
	}

	if ( obj.nodeType === 1 && length ) {
		return true;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.2.0-pre
 * http://sizzlejs.com/
 *
 * Copyright 2008, 2014 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2014-12-16
 */
(function( window ) {

var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// General-purpose constants
	MAX_NEGATIVE = 1 << 31,

	// Instance methods
	hasOwn = ({}).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	push_native = arr.push,
	push = arr.push,
	slice = arr.slice,
	// Use a stripped-down indexOf as it's faster than native
	// http://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[i] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// Whitespace characters http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",
	// http://www.w3.org/TR/css3-syntax/#characters
	characterEncoding = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",

	// Loosely modeled on CSS identifier characters
	// An unquoted value should be a CSS identifier http://www.w3.org/TR/css3-selectors/#attribute-selectors
	// Proper syntax: http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier = characterEncoding.replace( "w", "w#" ),

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + characterEncoding + ")(?:" + whitespace +
		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +
		// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
		"*\\]",

	pseudos = ":(" + characterEncoding + ")(?:\\((" +
		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

	rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + characterEncoding + ")" ),
		"CLASS": new RegExp( "^\\.(" + characterEncoding + ")" ),
		"TAG": new RegExp( "^(" + characterEncoding.replace( "w", "w*" ) + ")" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
			"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
			"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
			whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,
	rescape = /'|\\/g,

	// CSS escapes http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
	funescape = function( _, escaped, escapedWhitespace ) {
		var high = "0x" + escaped - 0x10000;
		// NaN means non-codepoint
		// Support: Firefox<24
		// Workaround erroneous numeric interpretation of +"0x"
		return high !== high || escapedWhitespace ?
			escaped :
			high < 0 ?
				// BMP codepoint
				String.fromCharCode( high + 0x10000 ) :
				// Supplemental Plane codepoint (surrogate pair)
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	};

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		(arr = slice.call( preferredDoc.childNodes )),
		preferredDoc.childNodes
	);
	// Support: Android<4.0
	// Detect silently failing push.apply
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			push_native.apply( target, slice.call(els) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;
			// Can't trust NodeList.length
			while ( (target[j++] = els[i++]) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var match, elem, m, nodeType,
		// QSA vars
		i, groups, old, nid, newContext, newSelector;

	if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
		setDocument( context );
	}

	context = context || document;
	results = results || [];
	nodeType = context.nodeType;

	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	if ( !seed && documentIsHTML ) {

		// Try to shortcut find operations when possible (e.g., not under DocumentFragment)
		if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {
			// Speed-up: Sizzle("#ID")
			if ( (m = match[1]) ) {
				if ( nodeType === 9 ) {
					elem = context.getElementById( m );
					// Check parentNode to catch when Blackberry 4.6 returns
					// nodes that are no longer in the document (jQuery #6963)
					if ( elem && elem.parentNode ) {
						// Handle the case where IE, Opera, and Webkit return items
						// by name instead of ID
						if ( elem.id === m ) {
							results.push( elem );
							return results;
						}
					} else {
						return results;
					}
				} else {
					// Context is not a document
					if ( context.ownerDocument && (elem = context.ownerDocument.getElementById( m )) &&
						contains( context, elem ) && elem.id === m ) {
						results.push( elem );
						return results;
					}
				}

			// Speed-up: Sizzle("TAG")
			} else if ( match[2] ) {
				push.apply( results, context.getElementsByTagName( selector ) );
				return results;

			// Speed-up: Sizzle(".CLASS")
			} else if ( (m = match[3]) && support.getElementsByClassName ) {
				push.apply( results, context.getElementsByClassName( m ) );
				return results;
			}
		}

		// QSA path
		if ( support.qsa && (!rbuggyQSA || !rbuggyQSA.test( selector )) ) {
			nid = old = expando;
			newContext = context;
			newSelector = nodeType !== 1 && selector;

			// qSA works strangely on Element-rooted queries
			// We can work around this by specifying an extra ID on the root
			// and working up from there (Thanks to Andrew Dupont for the technique)
			// IE 8 doesn't work on object elements
			if ( nodeType === 1 && context.nodeName.toLowerCase() !== "object" ) {
				groups = tokenize( selector );

				if ( (old = context.getAttribute("id")) ) {
					nid = old.replace( rescape, "\\$&" );
				} else {
					context.setAttribute( "id", nid );
				}
				nid = "[id='" + nid + "'] ";

				i = groups.length;
				while ( i-- ) {
					groups[i] = nid + toSelector( groups[i] );
				}
				newContext = rsibling.test( selector ) && testContext( context.parentNode ) || context;
				newSelector = groups.join(",");
			}

			if ( newSelector ) {
				try {
					push.apply( results,
						newContext.querySelectorAll( newSelector )
					);
					return results;
				} catch(qsaError) {
				} finally {
					if ( !old ) {
						context.removeAttribute("id");
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {Function(string, Object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {
		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {
			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return (cache[ key + " " ] = value);
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created div and expects a boolean result
 */
function assert( fn ) {
	var div = document.createElement("div");

	try {
		return !!fn( div );
	} catch (e) {
		return false;
	} finally {
		// Remove from its parent by default
		if ( div.parentNode ) {
			div.parentNode.removeChild( div );
		}
		// release memory in IE
		div = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split("|"),
		i = attrs.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[i] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			( ~b.sourceIndex || MAX_NEGATIVE ) -
			( ~a.sourceIndex || MAX_NEGATIVE );

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( (cur = cur.nextSibling) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return (name === "input" || name === "button") && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction(function( argument ) {
		argument = +argument;
		return markFunction(function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ (j = matchIndexes[i]) ] ) {
					seed[j] = !(matches[j] = seed[j]);
				}
			}
		});
	});
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	// documentElement is verified for cases where it doesn't yet exist
	// (such as loading iframes in IE - #4833)
	var documentElement = elem && (elem.ownerDocument || elem).documentElement;
	return documentElement ? documentElement.nodeName !== "HTML" : false;
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, parent,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// If no document and documentElement is available, return
	if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Set our document
	document = doc;
	docElem = doc.documentElement;
	parent = doc.defaultView;

	// Support: IE>8
	// If iframe document is assigned to "document" variable and if iframe has been reloaded,
	// IE will throw "permission denied" error when accessing "document" variable, see jQuery #13936
	// IE6-8 do not support the defaultView property so parent will be undefined
	if ( parent && parent !== parent.top ) {
		// IE11 does not have attachEvent, so all must suffer
		if ( parent.addEventListener ) {
			parent.addEventListener( "unload", unloadHandler, false );
		} else if ( parent.attachEvent ) {
			parent.attachEvent( "onunload", unloadHandler );
		}
	}

	/* Support tests
	---------------------------------------------------------------------- */
	documentIsHTML = !isXML( doc );

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert(function( div ) {
		div.className = "i";
		return !div.getAttribute("className");
	});

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert(function( div ) {
		div.appendChild( doc.createComment("") );
		return !div.getElementsByTagName("*").length;
	});

	// Support: IE<9
	support.getElementsByClassName = rnative.test( doc.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert(function( div ) {
		docElem.appendChild( div ).id = expando;
		return !doc.getElementsByName || !doc.getElementsByName( expando ).length;
	});

	// ID find and filter
	if ( support.getById ) {
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var m = context.getElementById( id );
				// Check parentNode to catch when Blackberry 4.6 returns
				// nodes that are no longer in the document #6963
				return m && m.parentNode ? [ m ] : [];
			}
		};
		Expr.filter["ID"] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute("id") === attrId;
			};
		};
	} else {
		// Support: IE6/7
		// getElementById is not reliable as a find shortcut
		delete Expr.find["ID"];

		Expr.filter["ID"] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" && elem.getAttributeNode("id");
				return node && node.value === attrId;
			};
		};
	}

	// Tag
	Expr.find["TAG"] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,
				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( (elem = results[i++]) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
		if ( documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See http://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( (support.qsa = rnative.test( doc.querySelectorAll )) ) {
		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert(function( div ) {
			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// http://bugs.jquery.com/ticket/12359
			docElem.appendChild( div ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\f]' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// http://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( div.querySelectorAll("[msallowcapture^='']").length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !div.querySelectorAll("[selected]").length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.2+, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.7+
			if ( !div.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push("~=");
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !div.querySelectorAll(":checked").length ) {
				rbuggyQSA.push(":checked");
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibing-combinator selector` fails
			if ( !div.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push(".#.+[+~]");
			}
		});

		assert(function( div ) {
			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = doc.createElement("input");
			input.setAttribute( "type", "hidden" );
			div.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( div.querySelectorAll("[name=d]").length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( !div.querySelectorAll(":enabled").length ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Opera 10-11 does not throw on post-comma invalid pseudos
			div.querySelectorAll("*,:x");
			rbuggyQSA.push(",.*:");
		});
	}

	if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector) )) ) {

		assert(function( div ) {
			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( div, "div" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( div, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		});
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully does not implement inclusive descendent
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			));
		} :
		function( a, b ) {
			if ( b ) {
				while ( (b = b.parentNode) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

			// Choose the first element that is related to our preferred document
			if ( a === doc || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
				return -1;
			}
			if ( b === doc || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {
		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {
			return a === doc ? -1 :
				b === doc ? 1 :
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( (cur = cur.parentNode) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( (cur = cur.parentNode) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[i] === bp[i] ) {
			i++;
		}

		return i ?
			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[i], bp[i] ) :

			// Otherwise nodes in our document sort first
			ap[i] === preferredDoc ? -1 :
			bp[i] === preferredDoc ? 1 :
			0;
	};

	return doc;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	// Make sure that attribute selectors are quoted
	expr = expr.replace( rattributeQuotes, "='$1']" );

	if ( support.matchesSelector && documentIsHTML &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||
					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch (e) {}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {
	// Set document vars if needed
	if ( ( context.ownerDocument || context ) !== document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],
		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			(val = elem.getAttributeNode(name)) && val.specified ?
				val.value :
				null;
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( (elem = results[i++]) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {
		// If no nodeType, this is expected to be an array
		while ( (node = elem[i++]) ) {
			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {
			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}
	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[1] = match[1].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

			if ( match[2] === "~=" ) {
				match[3] = " " + match[3] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {
			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[1] = match[1].toLowerCase();

			if ( match[1].slice( 0, 3 ) === "nth" ) {
				// nth-* requires argument
				if ( !match[3] ) {
					Sizzle.error( match[0] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
				match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

			// other types prohibit arguments
			} else if ( match[3] ) {
				Sizzle.error( match[0] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[6] && match[2];

			if ( matchExpr["CHILD"].test( match[0] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[3] ) {
				match[2] = match[4] || match[5] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&
				// Get excess from tokenize (recursively)
				(excess = tokenize( unquoted, true )) &&
				// advance to the next closing parenthesis
				(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

				// excess is a negative index
				match[0] = match[0].slice( 0, excess );
				match[2] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() { return true; } :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
				classCache( className, function( elem ) {
					return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
				});
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
			};
		},

		"CHILD": function( type, what, argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, context, xml ) {
					var cache, outerCache, node, diff, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( (node = node[ dir ]) ) {
									if ( ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1 ) {
										return false;
									}
								}
								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {
							// Seek `elem` from a previously-cached index
							outerCache = parent[ expando ] || (parent[ expando ] = {});
							cache = outerCache[ type ] || [];
							nodeIndex = cache[0] === dirruns && cache[1];
							diff = cache[0] === dirruns && cache[2];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( (node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								(diff = nodeIndex = 0) || start.pop()) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									outerCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						// Use previously-cached element index if available
						} else if ( useCache && (cache = (elem[ expando ] || (elem[ expando ] = {}))[ type ]) && cache[0] === dirruns ) {
							diff = cache[1];

						// xml :nth-child(...) or :nth-last-child(...) or :nth(-last)?-of-type(...)
						} else {
							// Use the same loop as above to seek `elem` from the start
							while ( (node = ++nodeIndex && node && node[ dir ] ||
								(diff = nodeIndex = 0) || start.pop()) ) {

								if ( ( ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1 ) && ++diff ) {
									// Cache the index of each encountered element
									if ( useCache ) {
										(node[ expando ] || (node[ expando ] = {}))[ type ] = [ dirruns, diff ];
									}

									if ( node === elem ) {
										break;
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {
			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction(function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[i] );
							seed[ idx ] = !( matches[ idx ] = matched[i] );
						}
					}) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {
		// Potentially complex pseudos
		"not": markFunction(function( selector ) {
			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction(function( seed, matches, context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( (elem = unmatched[i]) ) {
							seed[i] = !(matches[i] = elem);
						}
					}
				}) :
				function( elem, context, xml ) {
					input[0] = elem;
					matcher( input, null, xml, results );
					// Don't keep the element (issue #299)
					input[0] = null;
					return !results.pop();
				};
		}),

		"has": markFunction(function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		}),

		"contains": markFunction(function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
			};
		}),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {
			// lang value must be a valid identifier
			if ( !ridentifier.test(lang || "") ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( (elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
				return false;
			};
		}),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
		},

		// Boolean properties
		"enabled": function( elem ) {
			return elem.disabled === false;
		},

		"disabled": function( elem ) {
			return elem.disabled === true;
		},

		"checked": function( elem ) {
			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
		},

		"selected": function( elem ) {
			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {
			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos["empty"]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo(function() {
			return [ 0 ];
		}),

		"last": createPositionalPseudo(function( matchIndexes, length ) {
			return [ length - 1 ];
		}),

		"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		}),

		"even": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"odd": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		})
	}
};

Expr.pseudos["nth"] = Expr.pseudos["eq"];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || (match = rcomma.exec( soFar )) ) {
			if ( match ) {
				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[0].length ) || soFar;
			}
			groups.push( (tokens = []) );
		}

		matched = false;

		// Combinators
		if ( (match = rcombinators.exec( soFar )) ) {
			matched = match.shift();
			tokens.push({
				value: matched,
				// Cast descendant combinators to space
				type: match[0].replace( rtrim, " " )
			});
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
				(match = preFilters[ type ]( match ))) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					type: type,
					matches: match
				});
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :
			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[i].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		checkNonElements = base && dir === "parentNode",
		doneName = done++;

	return combinator.first ?
		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( (elem = elem[ dir ]) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from dir caching
			if ( xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || (elem[ expando ] = {});
						if ( (oldCache = outerCache[ dir ]) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return (newCache[ 2 ] = oldCache[ 2 ]);
						} else {
							// Reuse newcache so results back-propagate to previous elements
							outerCache[ dir ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
								return true;
							}
						}
					}
				}
			}
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[i]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[0];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[i], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( (elem = unmatched[i]) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction(function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?
				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( (elem = temp[i]) ) {
					matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {
					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) ) {
							// Restore matcherIn since elem is not yet a final match
							temp.push( (matcherIn[i] = elem) );
						}
					}
					postFinder( null, (matcherOut = []), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( (elem = matcherOut[i]) &&
						(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

						seed[temp] = !(results[temp] = elem);
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	});
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[0].type ],
		implicitRelative = leadingRelative || Expr.relative[" "],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				(checkContext = context).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );
			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
			matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
		} else {
			matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {
				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[j].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(
						// If the preceding token was a descendant combinator, insert an implicit any-element `*`
						tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,
				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
				len = elems.length;

			if ( outermost ) {
				outermostContext = context !== document && context;
			}

			// Add elements passing elementMatchers directly to results
			// Keep `i` a string if there are no elements so `matchedCount` will be "00" below
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;
					while ( (matcher = elementMatchers[j++]) ) {
						if ( matcher( elem, context, xml ) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {
					// They will have gone through all possible matchers
					if ( (elem = !matcher && elem) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// Apply set filters to unmatched elements
			matchedCount += i;
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( (matcher = setMatchers[j++]) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {
					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !(unmatched[i] || setMatched[i]) ) {
								setMatched[i] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {
		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[i] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( (selector = compiled.selector || selector) );

	results = results || [];

	// Try to minimize operations if there is no seed and only one group
	if ( match.length === 1 ) {

		// Take a shortcut and set the context if the root selector is an ID
		tokens = match[0] = match[0].slice( 0 );
		if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
				support.getById && context.nodeType === 9 && documentIsHTML &&
				Expr.relative[ tokens[1].type ] ) {

			context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[i];

			// Abort if we hit a combinator
			if ( Expr.relative[ (type = token.type) ] ) {
				break;
			}
			if ( (find = Expr.find[ type ]) ) {
				// Search, expanding context for leading sibling combinators
				if ( (seed = find(
					token.matches[0].replace( runescape, funescape ),
					rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
				)) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert(function( div1 ) {
	// Should return 1, but returns 4 (following)
	return div1.compareDocumentPosition( document.createElement("div") ) & 1;
});

// Support: IE<8
// Prevent attribute/property "interpolation"
// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert(function( div ) {
	div.innerHTML = "<a href='#'></a>";
	return div.firstChild.getAttribute("href") === "#" ;
}) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	});
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert(function( div ) {
	div.innerHTML = "<input/>";
	div.firstChild.setAttribute( "value", "" );
	return div.firstChild.getAttribute( "value" ) === "";
}) ) {
	addHandle( "value", function( elem, name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	});
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert(function( div ) {
	return div.getAttribute("disabled") == null;
}) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
					(val = elem.getAttributeNode( name )) && val.specified ?
					val.value :
				null;
		}
	});
}

return Sizzle;

})( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;
jQuery.expr[":"] = jQuery.expr.pseudos;
jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;



var rneedsContext = jQuery.expr.match.needsContext;

var rsingleTag = (/^<(\w+)\s*\/?>(?:<\/\1>|)$/);



var risSimple = /^.[^:#\[\.,]*$/;

// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( jQuery.isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			/* jshint -W018 */
			return !!qualifier.call( elem, i, elem ) !== not;
		});

	}

	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		});

	}

	if ( typeof qualifier === "string" ) {
		if ( risSimple.test( qualifier ) ) {
			return jQuery.filter( qualifier, elements, not );
		}

		qualifier = jQuery.filter( qualifier, elements );
	}

	return jQuery.grep( elements, function( elem ) {
		return ( indexOf.call( qualifier, elem ) >= 0 ) !== not;
	});
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	return elems.length === 1 && elem.nodeType === 1 ?
		jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [] :
		jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
			return elem.nodeType === 1;
		}));
};

jQuery.fn.extend({
	find: function( selector ) {
		var i,
			len = this.length,
			ret = [],
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter(function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			}) );
		}

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		// Needed because $( selector, context ) becomes $( context ).find( selector )
		ret = this.pushStack( len > 1 ? jQuery.unique( ret ) : ret );
		ret.selector = this.selector ? this.selector + " " + selector : selector;
		return ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow(this, selector || [], false) );
	},
	not: function( selector ) {
		return this.pushStack( winnow(this, selector || [], true) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
});


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,

	init = jQuery.fn.init = function( selector, context ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[0] === "<" && selector[ selector.length - 1 ] === ">" && selector.length >= 3 ) {
				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && (match[1] || !context) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[1] ) {
					context = context instanceof jQuery ? context[0] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[1],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[1] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {
							// Properties of context are called as methods if possible
							if ( jQuery.isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[2] );

					// Support: Blackberry 4.6
					// gEBID returns nodes no longer in the document (#6963)
					if ( elem && elem.parentNode ) {
						// Inject the element directly into the jQuery object
						this.length = 1;
						this[0] = elem;
					}

					this.context = document;
					this.selector = selector;
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || rootjQuery ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this.context = this[0] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( jQuery.isFunction( selector ) ) {
			return typeof rootjQuery.ready !== "undefined" ?
				rootjQuery.ready( selector ) :
				// Execute immediately if ready is not present
				selector( jQuery );
		}

		if ( selector.selector !== undefined ) {
			this.selector = selector.selector;
			this.context = selector.context;
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,
	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.extend({
	dir: function( elem, dir, until ) {
		var matched = [],
			truncate = until !== undefined;

		while ( (elem = elem[ dir ]) && elem.nodeType !== 9 ) {
			if ( elem.nodeType === 1 ) {
				if ( truncate && jQuery( elem ).is( until ) ) {
					break;
				}
				matched.push( elem );
			}
		}
		return matched;
	},

	sibling: function( n, elem ) {
		var matched = [];

		for ( ; n; n = n.nextSibling ) {
			if ( n.nodeType === 1 && n !== elem ) {
				matched.push( n );
			}
		}

		return matched;
	}
});

jQuery.fn.extend({
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter(function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[i] ) ) {
					return true;
				}
			}
		});
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			pos = rneedsContext.test( selectors ) || typeof selectors !== "string" ?
				jQuery( selectors, context || this.context ) :
				0;

		for ( ; i < l; i++ ) {
			for ( cur = this[i]; cur && cur !== context; cur = cur.parentNode ) {
				// Always skip document fragments
				if ( cur.nodeType < 11 && (pos ?
					pos.index(cur) > -1 :

					// Don't pass non-elements to Sizzle
					cur.nodeType === 1 &&
						jQuery.find.matchesSelector(cur, selectors)) ) {

					matched.push( cur );
					break;
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.unique( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.unique(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter(selector)
		);
	}
});

function sibling( cur, dir ) {
	while ( (cur = cur[dir]) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each({
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return jQuery.dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, i, until ) {
		return jQuery.dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return jQuery.dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return jQuery.dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, i, until ) {
		return jQuery.dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, i, until ) {
		return jQuery.dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return jQuery.sibling( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return jQuery.sibling( elem.firstChild );
	},
	contents: function( elem ) {
		return elem.contentDocument || jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {
			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.unique( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
});
var rnotwhite = (/\S+/g);



// String to Object options format cache
var optionsCache = {};

// Convert String-formatted options into Object-formatted ones and store in cache
function createOptions( options ) {
	var object = optionsCache[ options ] = {};
	jQuery.each( options.match( rnotwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	});
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		( optionsCache[ options ] || createOptions( options ) ) :
		jQuery.extend( {}, options );

	var // Last fire value (for non-forgettable lists)
		memory,
		// Flag to know if list was already fired
		fired,
		// Flag to know if list is currently firing
		firing,
		// First callback to fire (used internally by add and fireWith)
		firingStart,
		// End of the loop when firing
		firingLength,
		// Index of currently firing callback (modified by remove if needed)
		firingIndex,
		// Actual callback list
		list = [],
		// Stack of fire calls for repeatable lists
		stack = !options.once && [],
		// Fire callbacks
		fire = function( data ) {
			memory = options.memory && data;
			fired = true;
			firingIndex = firingStart || 0;
			firingStart = 0;
			firingLength = list.length;
			firing = true;
			for ( ; list && firingIndex < firingLength; firingIndex++ ) {
				if ( list[ firingIndex ].apply( data[ 0 ], data[ 1 ] ) === false && options.stopOnFalse ) {
					memory = false; // To prevent further calls using add
					break;
				}
			}
			firing = false;
			if ( list ) {
				if ( stack ) {
					if ( stack.length ) {
						fire( stack.shift() );
					}
				} else if ( memory ) {
					list = [];
				} else {
					self.disable();
				}
			}
		},
		// Actual Callbacks object
		self = {
			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {
					// First, we save the current length
					var start = list.length;
					(function add( args ) {
						jQuery.each( args, function( _, arg ) {
							var type = jQuery.type( arg );
							if ( type === "function" ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && type !== "string" ) {
								// Inspect recursively
								add( arg );
							}
						});
					})( arguments );
					// Do we need to add the callbacks to the
					// current firing batch?
					if ( firing ) {
						firingLength = list.length;
					// With memory, if we're not firing then
					// we should call right away
					} else if ( memory ) {
						firingStart = start;
						fire( memory );
					}
				}
				return this;
			},
			// Remove a callback from the list
			remove: function() {
				if ( list ) {
					jQuery.each( arguments, function( _, arg ) {
						var index;
						while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
							list.splice( index, 1 );
							// Handle firing indexes
							if ( firing ) {
								if ( index <= firingLength ) {
									firingLength--;
								}
								if ( index <= firingIndex ) {
									firingIndex--;
								}
							}
						}
					});
				}
				return this;
			},
			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ? jQuery.inArray( fn, list ) > -1 : !!( list && list.length );
			},
			// Remove all callbacks from the list
			empty: function() {
				list = [];
				firingLength = 0;
				return this;
			},
			// Have the list do nothing anymore
			disable: function() {
				list = stack = memory = undefined;
				return this;
			},
			// Is it disabled?
			disabled: function() {
				return !list;
			},
			// Lock the list in its current state
			lock: function() {
				stack = undefined;
				if ( !memory ) {
					self.disable();
				}
				return this;
			},
			// Is it locked?
			locked: function() {
				return !stack;
			},
			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( list && ( !fired || stack ) ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					if ( firing ) {
						stack.push( args );
					} else {
						fire( args );
					}
				}
				return this;
			},
			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},
			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


jQuery.extend({

	Deferred: function( func ) {
		var tuples = [
				// action, add listener, listener list, final state
				[ "resolve", "done", jQuery.Callbacks("once memory"), "resolved" ],
				[ "reject", "fail", jQuery.Callbacks("once memory"), "rejected" ],
				[ "notify", "progress", jQuery.Callbacks("memory") ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				then: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;
					return jQuery.Deferred(function( newDefer ) {
						jQuery.each( tuples, function( i, tuple ) {
							var fn = jQuery.isFunction( fns[ i ] ) && fns[ i ];
							// deferred[ done | fail | progress ] for forwarding actions to newDefer
							deferred[ tuple[1] ](function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && jQuery.isFunction( returned.promise ) ) {
									returned.promise()
										.done( newDefer.resolve )
										.fail( newDefer.reject )
										.progress( newDefer.notify );
								} else {
									newDefer[ tuple[ 0 ] + "With" ]( this === promise ? newDefer.promise() : this, fn ? [ returned ] : arguments );
								}
							});
						});
						fns = null;
					}).promise();
				},
				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Keep pipe for back-compat
		promise.pipe = promise.then;

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 3 ];

			// promise[ done | fail | progress ] = list.add
			promise[ tuple[1] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(function() {
					// state = [ resolved | rejected ]
					state = stateString;

				// [ reject_list | resolve_list ].disable; progress_list.lock
				}, tuples[ i ^ 1 ][ 2 ].disable, tuples[ 2 ][ 2 ].lock );
			}

			// deferred[ resolve | reject | notify ]
			deferred[ tuple[0] ] = function() {
				deferred[ tuple[0] + "With" ]( this === deferred ? promise : this, arguments );
				return this;
			};
			deferred[ tuple[0] + "With" ] = list.fireWith;
		});

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( subordinate /* , ..., subordinateN */ ) {
		var i = 0,
			resolveValues = slice.call( arguments ),
			length = resolveValues.length,

			// the count of uncompleted subordinates
			remaining = length !== 1 || ( subordinate && jQuery.isFunction( subordinate.promise ) ) ? length : 0,

			// the master Deferred. If resolveValues consist of only a single Deferred, just use that.
			deferred = remaining === 1 ? subordinate : jQuery.Deferred(),

			// Update function for both resolve and progress values
			updateFunc = function( i, contexts, values ) {
				return function( value ) {
					contexts[ i ] = this;
					values[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( values === progressValues ) {
						deferred.notifyWith( contexts, values );
					} else if ( !( --remaining ) ) {
						deferred.resolveWith( contexts, values );
					}
				};
			},

			progressValues, progressContexts, resolveContexts;

		// Add listeners to Deferred subordinates; treat others as resolved
		if ( length > 1 ) {
			progressValues = new Array( length );
			progressContexts = new Array( length );
			resolveContexts = new Array( length );
			for ( ; i < length; i++ ) {
				if ( resolveValues[ i ] && jQuery.isFunction( resolveValues[ i ].promise ) ) {
					resolveValues[ i ].promise()
						.done( updateFunc( i, resolveContexts, resolveValues ) )
						.fail( deferred.reject )
						.progress( updateFunc( i, progressContexts, progressValues ) );
				} else {
					--remaining;
				}
			}
		}

		// If we're not waiting on anything, resolve the master
		if ( !remaining ) {
			deferred.resolveWith( resolveContexts, resolveValues );
		}

		return deferred.promise();
	}
});


// The deferred used on DOM ready
var readyList;

jQuery.fn.ready = function( fn ) {
	// Add the callback
	jQuery.ready.promise().done( fn );

	return this;
};

jQuery.extend({
	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Hold (or release) the ready event
	holdReady: function( hold ) {
		if ( hold ) {
			jQuery.readyWait++;
		} else {
			jQuery.ready( true );
		}
	},

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );

		// Trigger any bound ready events
		if ( jQuery.fn.triggerHandler ) {
			jQuery( document ).triggerHandler( "ready" );
			jQuery( document ).off( "ready" );
		}
	}
});

/**
 * The ready event handler and self cleanup method
 */
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed, false );
	window.removeEventListener( "load", completed, false );
	jQuery.ready();
}

jQuery.ready.promise = function( obj ) {
	if ( !readyList ) {

		readyList = jQuery.Deferred();

		// Catch cases where $(document).ready() is called after the browser event has already occurred.
		// We once tried to use readyState "interactive" here, but it caused issues like the one
		// discovered by ChrisS here: http://bugs.jquery.com/ticket/12282#comment:15
		if ( document.readyState === "complete" ) {
			// Handle it asynchronously to allow scripts the opportunity to delay ready
			setTimeout( jQuery.ready );

		} else {

			// Use the handy event callback
			document.addEventListener( "DOMContentLoaded", completed, false );

			// A fallback to window.onload, that will always work
			window.addEventListener( "load", completed, false );
		}
	}
	return readyList.promise( obj );
};

// Kick off the DOM ready check even if the user does not
jQuery.ready.promise();




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = jQuery.access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( jQuery.type( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			jQuery.access( elems, fn, i, key[i], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !jQuery.isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {
			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn( elems[i], key, raw ? value : value.call( elems[i], i, fn( elems[i], key ) ) );
			}
		}
	}

	return chainable ?
		elems :

		// Gets
		bulk ?
			fn.call( elems ) :
			len ? fn( elems[0], key ) : emptyGet;
};


/**
 * Determines whether an object can have data
 */
jQuery.acceptData = function( owner ) {
	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	/* jshint -W018 */
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};


function Data() {
	// Support: Android<4,
	// Old WebKit does not have Object.preventExtensions/freeze method,
	// return new empty object instead with no [[set]] accessor
	Object.defineProperty( this.cache = {}, 0, {
		get: function() {
			return {};
		}
	});

	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;
Data.accepts = jQuery.acceptData;

Data.prototype = {
	key: function( owner ) {
		// We can accept data for non-element nodes in modern browsers,
		// but we should not, see #8335.
		// Always return the key for a frozen object.
		if ( !Data.accepts( owner ) ) {
			return 0;
		}

		var descriptor = {},
			// Check if the owner object already has a cache key
			unlock = owner[ this.expando ];

		// If not, create one
		if ( !unlock ) {
			unlock = Data.uid++;

			// Secure it in a non-enumerable, non-writable property
			try {
				descriptor[ this.expando ] = { value: unlock };
				Object.defineProperties( owner, descriptor );

			// Support: Android<4
			// Fallback to a less secure definition
			} catch ( e ) {
				descriptor[ this.expando ] = unlock;
				jQuery.extend( owner, descriptor );
			}
		}

		// Ensure the cache object
		if ( !this.cache[ unlock ] ) {
			this.cache[ unlock ] = {};
		}

		return unlock;
	},
	set: function( owner, data, value ) {
		var prop,
			// There may be an unlock assigned to this node,
			// if there is no entry for this "owner", create one inline
			// and set the unlock as though an owner entry had always existed
			unlock = this.key( owner ),
			cache = this.cache[ unlock ];

		// Handle: [ owner, key, value ] args
		if ( typeof data === "string" ) {
			cache[ data ] = value;

		// Handle: [ owner, { properties } ] args
		} else {
			// Fresh assignments by object are shallow copied
			if ( jQuery.isEmptyObject( cache ) ) {
				jQuery.extend( this.cache[ unlock ], data );
			// Otherwise, copy the properties one-by-one to the cache object
			} else {
				for ( prop in data ) {
					cache[ prop ] = data[ prop ];
				}
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		// Either a valid cache is found, or will be created.
		// New caches will be created and the unlock returned,
		// allowing direct access to the newly created
		// empty data object. A valid owner object must be provided.
		var cache = this.cache[ this.key( owner ) ];

		return key === undefined ?
			cache : cache[ key ];
	},
	access: function( owner, key, value ) {
		var stored;
		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				((key && typeof key === "string") && value === undefined) ) {

			stored = this.get( owner, key );

			return stored !== undefined ?
				stored : this.get( owner, jQuery.camelCase(key) );
		}

		// [*]When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i, name, camel,
			unlock = this.key( owner ),
			cache = this.cache[ unlock ];

		if ( key === undefined ) {
			this.cache[ unlock ] = {};

		} else {
			// Support array or space separated string of keys
			if ( jQuery.isArray( key ) ) {
				// If "name" is an array of keys...
				// When data is initially created, via ("key", "val") signature,
				// keys will be converted to camelCase.
				// Since there is no way to tell _how_ a key was added, remove
				// both plain key and camelCase key. #12786
				// This will only penalize the array argument path.
				name = key.concat( key.map( jQuery.camelCase ) );
			} else {
				camel = jQuery.camelCase( key );
				// Try the string as a key before any manipulation
				if ( key in cache ) {
					name = [ key, camel ];
				} else {
					// If a key with the spaces exists, use it.
					// Otherwise, create an array by matching non-whitespace
					name = camel;
					name = name in cache ?
						[ name ] : ( name.match( rnotwhite ) || [] );
				}
			}

			i = name.length;
			while ( i-- ) {
				delete cache[ name[ i ] ];
			}
		}
	},
	hasData: function( owner ) {
		return !jQuery.isEmptyObject(
			this.cache[ owner[ this.expando ] ] || {}
		);
	},
	discard: function( owner ) {
		if ( owner[ this.expando ] ) {
			delete this.cache[ owner[ this.expando ] ];
		}
	}
};
var data_priv = new Data();

var data_user = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /([A-Z])/g;

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$1" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = data === "true" ? true :
					data === "false" ? false :
					data === "null" ? null :
					// Only convert to a number if it doesn't change the string
					+data + "" === data ? +data :
					rbrace.test( data ) ? jQuery.parseJSON( data ) :
					data;
			} catch( e ) {}

			// Make sure we set the data so it isn't changed later
			data_user.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend({
	hasData: function( elem ) {
		return data_user.hasData( elem ) || data_priv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return data_user.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		data_user.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to data_priv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return data_priv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		data_priv.remove( elem, name );
	}
});

jQuery.fn.extend({
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = data_user.get( elem );

				if ( elem.nodeType === 1 && !data_priv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE11+
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = jQuery.camelCase( name.slice(5) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					data_priv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each(function() {
				data_user.set( this, key );
			});
		}

		return access( this, function( value ) {
			var data,
				camelKey = jQuery.camelCase( key );

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {
				// Attempt to get data from the cache
				// with the key as-is
				data = data_user.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to get data from the cache
				// with the key camelized
				data = data_user.get( elem, camelKey );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, camelKey, undefined );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each(function() {
				// First, attempt to store a copy or reference of any
				// data that might've been store with a camelCased key.
				var data = data_user.get( this, camelKey );

				// For HTML5 data-* attribute interop, we have to
				// store property names with dashes in a camelCase form.
				// This might not apply to all properties...*
				data_user.set( this, camelKey, value );

				// *... In the case of properties that might _actually_
				// have dashes, we need to also store a copy of that
				// unchanged property.
				if ( key.indexOf("-") !== -1 && data !== undefined ) {
					data_user.set( this, key, value );
				}
			});
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each(function() {
			data_user.remove( this, key );
		});
	}
});


jQuery.extend({
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = data_priv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || jQuery.isArray( data ) ) {
					queue = data_priv.access( elem, type, jQuery.makeArray(data) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return data_priv.get( elem, key ) || data_priv.access( elem, key, {
			empty: jQuery.Callbacks("once memory").add(function() {
				data_priv.remove( elem, [ type + "queue", key ] );
			})
		});
	}
});

jQuery.fn.extend({
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[0], type );
		}

		return data === undefined ?
			this :
			this.each(function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[0] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			});
	},
	dequeue: function( type ) {
		return this.each(function() {
			jQuery.dequeue( this, type );
		});
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},
	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = data_priv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
});
var pnum = (/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/).source;

var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var isHidden = function( elem, el ) {
		// isHidden might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;
		return jQuery.css( elem, "display" ) === "none" || !jQuery.contains( elem.ownerDocument, elem );
	};

var rcheckableType = (/^(?:checkbox|radio)$/i);



(function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Safari<=5.1
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Safari<=5.1, Android<4.2
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE<=11+
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
})();
var strundefined = typeof undefined;



support.focusinBubbles = "onfocusin" in window;


var
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu)|click/,
	rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)$/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = data_priv.get( elem );

		// Don't attach events to noData or text/comment nodes (but allow plain objects)
		if ( !elemData ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !(events = elemData.events) ) {
			events = elemData.events = {};
		}
		if ( !(eventHandle = elemData.handle) ) {
			eventHandle = elemData.handle = function( e ) {
				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== strundefined && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnotwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[t] ) || [];
			type = origType = tmp[1];
			namespaces = ( tmp[2] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend({
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join(".")
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !(handlers = events[ type ]) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup || special.setup.call( elem, data, namespaces, eventHandle ) === false ) {
					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle, false );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = data_priv.hasData( elem ) && data_priv.get( elem );

		if ( !elemData || !(events = elemData.events) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnotwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[t] ) || [];
			type = origType = tmp[1];
			namespaces = ( tmp[2] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[2] && new RegExp( "(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector || selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown || special.teardown.call( elem, namespaces, elemData.handle ) === false ) {
					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			delete elemData.handle;
			data_priv.remove( elem, "events" );
		}
	},

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split(".") : [];

		cur = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf(".") >= 0 ) {
			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split(".");
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf(":") < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join(".");
		event.namespace_re = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === (elem.ownerDocument || document) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( (cur = eventPath[i++]) && !event.isPropagationStopped() ) {

			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( data_priv.get( cur, "events" ) || {} )[ event.type ] && data_priv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && jQuery.acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( (!special._default || special._default.apply( eventPath.pop(), data ) === false) &&
				jQuery.acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && jQuery.isFunction( elem[ type ] ) && !jQuery.isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;
					elem[ type ]();
					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	dispatch: function( event ) {

		// Make a writable jQuery.Event from the native event object
		event = jQuery.event.fix( event );

		var i, j, ret, matched, handleObj,
			handlerQueue = [],
			args = slice.call( arguments ),
			handlers = ( data_priv.get( this, "events" ) || {} )[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[0] = event;
		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( (matched = handlerQueue[ i++ ]) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( (handleObj = matched.handlers[ j++ ]) && !event.isImmediatePropagationStopped() ) {

				// Triggered event must either 1) have no namespace, or 2) have namespace(s)
				// a subset or equal to those in the bound event (both can have no namespace).
				if ( !event.namespace_re || event.namespace_re.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( (jQuery.event.special[ handleObj.origType ] || {}).handle || handleObj.handler )
							.apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( (event.result = ret) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, matches, sel, handleObj,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		// Black-hole SVG <use> instance trees (#13180)
		// Avoid non-left-click bubbling in Firefox (#3861)
		if ( delegateCount && cur.nodeType && (!event.button || event.type !== "click") ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.disabled !== true || event.type !== "click" ) {
					matches = [];
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matches[ sel ] === undefined ) {
							matches[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) >= 0 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matches[ sel ] ) {
							matches.push( handleObj );
						}
					}
					if ( matches.length ) {
						handlerQueue.push({ elem: cur, handlers: matches });
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		if ( delegateCount < handlers.length ) {
			handlerQueue.push({ elem: this, handlers: handlers.slice( delegateCount ) });
		}

		return handlerQueue;
	},

	// Includes some event props shared by KeyEvent and MouseEvent
	props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),

	fixHooks: {},

	keyHooks: {
		props: "char charCode key keyCode".split(" "),
		filter: function( event, original ) {

			// Add which for key events
			if ( event.which == null ) {
				event.which = original.charCode != null ? original.charCode : original.keyCode;
			}

			return event;
		}
	},

	mouseHooks: {
		props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
		filter: function( event, original ) {
			var eventDoc, doc, body,
				button = original.button;

			// Calculate pageX/Y if missing and clientX/Y available
			if ( event.pageX == null && original.clientX != null ) {
				eventDoc = event.target.ownerDocument || document;
				doc = eventDoc.documentElement;
				body = eventDoc.body;

				event.pageX = original.clientX + ( doc && doc.scrollLeft || body && body.scrollLeft || 0 ) - ( doc && doc.clientLeft || body && body.clientLeft || 0 );
				event.pageY = original.clientY + ( doc && doc.scrollTop  || body && body.scrollTop  || 0 ) - ( doc && doc.clientTop  || body && body.clientTop  || 0 );
			}

			// Add which for click: 1 === left; 2 === middle; 3 === right
			// Note: button is not normalized, so don't use it
			if ( !event.which && button !== undefined ) {
				event.which = ( button & 1 ? 1 : ( button & 2 ? 3 : ( button & 4 ? 2 : 0 ) ) );
			}

			return event;
		}
	},

	fix: function( event ) {
		if ( event[ jQuery.expando ] ) {
			return event;
		}

		// Create a writable copy of the event object and normalize some properties
		var i, prop, copy,
			type = event.type,
			originalEvent = event,
			fixHook = this.fixHooks[ type ];

		if ( !fixHook ) {
			this.fixHooks[ type ] = fixHook =
				rmouseEvent.test( type ) ? this.mouseHooks :
				rkeyEvent.test( type ) ? this.keyHooks :
				{};
		}
		copy = fixHook.props ? this.props.concat( fixHook.props ) : this.props;

		event = new jQuery.Event( originalEvent );

		i = copy.length;
		while ( i-- ) {
			prop = copy[ i ];
			event[ prop ] = originalEvent[ prop ];
		}

		// Support: Cordova 2.5 (WebKit) (#13255)
		// All events should have a target; Cordova deviceready doesn't
		if ( !event.target ) {
			event.target = document;
		}

		// Support: Safari 6.0+, Chrome<28
		// Target should not be a text node (#504, #13143)
		if ( event.target.nodeType === 3 ) {
			event.target = event.target.parentNode;
		}

		return fixHook.filter ? fixHook.filter( event, originalEvent ) : event;
	},

	special: {
		load: {
			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		focus: {
			// Fire native event if possible so blur/focus sequence is correct
			trigger: function() {
				if ( this !== safeActiveElement() && this.focus ) {
					this.focus();
					return false;
				}
			},
			delegateType: "focusin"
		},
		blur: {
			trigger: function() {
				if ( this === safeActiveElement() && this.blur ) {
					this.blur();
					return false;
				}
			},
			delegateType: "focusout"
		},
		click: {
			// For checkbox, fire native event so checked state will be right
			trigger: function() {
				if ( this.type === "checkbox" && this.click && jQuery.nodeName( this, "input" ) ) {
					this.click();
					return false;
				}
			},

			// For cross-browser consistency, don't fire native .click() on links
			_default: function( event ) {
				return jQuery.nodeName( event.target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	},

	simulate: function( type, elem, event, bubble ) {
		// Piggyback on a donor event to simulate a different one.
		// Fake originalEvent to avoid donor's stopPropagation, but if the
		// simulated event prevents default then we do the same on the donor.
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true,
				originalEvent: {}
			}
		);
		if ( bubble ) {
			jQuery.event.trigger( e, null, elem );
		} else {
			jQuery.event.dispatch.call( elem, e );
		}
		if ( e.isDefaultPrevented() ) {
			event.preventDefault();
		}
	}
};

jQuery.removeEvent = function( elem, type, handle ) {
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle, false );
	}
};

jQuery.Event = function( src, props ) {
	// Allow instantiation without the 'new' keyword
	if ( !(this instanceof jQuery.Event) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&
				// Support: Android<4.0
				src.returnValue === false ?
			returnTrue :
			returnFalse;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || jQuery.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// http://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && e.preventDefault ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && e.stopPropagation ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && e.stopImmediatePropagation ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Create mouseenter/leave events using mouseover/out and event-time checks
// Support: Chrome 15+
jQuery.each({
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mousenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || (related !== target && !jQuery.contains( target, related )) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
});

// Support: Firefox, Chrome, Safari
// Create "bubbling" focus and blur events
if ( !support.focusinBubbles ) {
	jQuery.each({ focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
				jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ), true );
			};

		jQuery.event.special[ fix ] = {
			setup: function() {
				var doc = this.ownerDocument || this,
					attaches = data_priv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				data_priv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this,
					attaches = data_priv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					data_priv.remove( doc, fix );

				} else {
					data_priv.access( doc, fix, attaches );
				}
			}
		};
	});
}

jQuery.fn.extend({

	on: function( types, selector, data, fn, /*INTERNAL*/ one ) {
		var origFn, type;

		// Types can be a map of types/handlers
		if ( typeof types === "object" ) {
			// ( types-Object, selector, data )
			if ( typeof selector !== "string" ) {
				// ( types-Object, data )
				data = data || selector;
				selector = undefined;
			}
			for ( type in types ) {
				this.on( type, selector, data, types[ type ], one );
			}
			return this;
		}

		if ( data == null && fn == null ) {
			// ( types, fn )
			fn = selector;
			data = selector = undefined;
		} else if ( fn == null ) {
			if ( typeof selector === "string" ) {
				// ( types, selector, fn )
				fn = data;
				data = undefined;
			} else {
				// ( types, data, fn )
				fn = data;
				data = selector;
				selector = undefined;
			}
		}
		if ( fn === false ) {
			fn = returnFalse;
		} else if ( !fn ) {
			return this;
		}

		if ( one === 1 ) {
			origFn = fn;
			fn = function( event ) {
				// Can use an empty set, since event contains the info
				jQuery().off( event );
				return origFn.apply( this, arguments );
			};
			// Use same guid so caller can remove using origFn
			fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
		}
		return this.each( function() {
			jQuery.event.add( this, types, fn, data, selector );
		});
	},
	one: function( types, selector, data, fn ) {
		return this.on( types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {
			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {
			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {
			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each(function() {
			jQuery.event.remove( this, types, fn, selector );
		});
	},

	trigger: function( type, data ) {
		return this.each(function() {
			jQuery.event.trigger( type, data, this );
		});
	},
	triggerHandler: function( type, data ) {
		var elem = this[0];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
});


var
	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
	rtagName = /<([\w:]+)/,
	rhtml = /<|&#?\w+;/,
	rnoInnerhtml = /<(?:script|style|link)/i,
	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rscriptType = /^$|\/(?:java|ecma)script/i,
	rscriptTypeMasked = /^true\/(.*)/,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,

	// We have to close these tags to support XHTML (#13200)
	wrapMap = {

		// Support: IE9
		option: [ 1, "<select multiple='multiple'>", "</select>" ],

		thead: [ 1, "<table>", "</table>" ],
		col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
		tr: [ 2, "<table><tbody>", "</tbody></table>" ],
		td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

		_default: [ 0, "", "" ]
	};

// Support: IE9
wrapMap.optgroup = wrapMap.option;

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;

// Support: 1.x compatibility
// Manipulating tables requires a tbody
function manipulationTarget( elem, content ) {
	return jQuery.nodeName( elem, "table" ) &&
		jQuery.nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ?

		elem.getElementsByTagName("tbody")[0] ||
			elem.appendChild( elem.ownerDocument.createElement("tbody") ) :
		elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = (elem.getAttribute("type") !== null) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	var match = rscriptTypeMasked.exec( elem.type );

	if ( match ) {
		elem.type = match[ 1 ];
	} else {
		elem.removeAttribute("type");
	}

	return elem;
}

// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		data_priv.set(
			elems[ i ], "globalEval", !refElements || data_priv.get( refElements[ i ], "globalEval" )
		);
	}
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( data_priv.hasData( src ) ) {
		pdataOld = data_priv.access( src );
		pdataCur = data_priv.set( dest, pdataOld );
		events = pdataOld.events;

		if ( events ) {
			delete pdataCur.handle;
			pdataCur.events = {};

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( data_user.hasData( src ) ) {
		udataOld = data_user.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		data_user.set( dest, udataCur );
	}
}

function getAll( context, tag ) {
	var ret = context.getElementsByTagName ? context.getElementsByTagName( tag || "*" ) :
			context.querySelectorAll ? context.querySelectorAll( tag || "*" ) :
			[];

	return tag === undefined || tag && jQuery.nodeName( context, tag ) ?
		jQuery.merge( [ context ], ret ) :
		ret;
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

jQuery.extend({
	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = jQuery.contains( elem.ownerDocument, elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: http://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	buildFragment: function( elems, context, scripts, selection ) {
		var elem, tmp, tag, wrap, contains, j,
			fragment = context.createDocumentFragment(),
			nodes = [],
			i = 0,
			l = elems.length;

		for ( ; i < l; i++ ) {
			elem = elems[ i ];

			if ( elem || elem === 0 ) {

				// Add nodes directly
				if ( jQuery.type( elem ) === "object" ) {
					// Support: QtWebKit, PhantomJS
					// push.apply(_, arraylike) throws on ancient WebKit
					jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

				// Convert non-html into a text node
				} else if ( !rhtml.test( elem ) ) {
					nodes.push( context.createTextNode( elem ) );

				// Convert html into DOM nodes
				} else {
					tmp = tmp || fragment.appendChild( context.createElement("div") );

					// Deserialize a standard representation
					tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
					wrap = wrapMap[ tag ] || wrapMap._default;
					tmp.innerHTML = wrap[ 1 ] + elem.replace( rxhtmlTag, "<$1></$2>" ) + wrap[ 2 ];

					// Descend through wrappers to the right content
					j = wrap[ 0 ];
					while ( j-- ) {
						tmp = tmp.lastChild;
					}

					// Support: QtWebKit, PhantomJS
					// push.apply(_, arraylike) throws on ancient WebKit
					jQuery.merge( nodes, tmp.childNodes );

					// Remember the top-level container
					tmp = fragment.firstChild;

					// Ensure the created nodes are orphaned (#12392)
					tmp.textContent = "";
				}
			}
		}

		// Remove wrapper from fragment
		fragment.textContent = "";

		i = 0;
		while ( (elem = nodes[ i++ ]) ) {

			// #4087 - If origin and destination elements are the same, and this is
			// that element, do not do anything
			if ( selection && jQuery.inArray( elem, selection ) !== -1 ) {
				continue;
			}

			contains = jQuery.contains( elem.ownerDocument, elem );

			// Append to fragment
			tmp = getAll( fragment.appendChild( elem ), "script" );

			// Preserve script evaluation history
			if ( contains ) {
				setGlobalEval( tmp );
			}

			// Capture executables
			if ( scripts ) {
				j = 0;
				while ( (elem = tmp[ j++ ]) ) {
					if ( rscriptType.test( elem.type || "" ) ) {
						scripts.push( elem );
					}
				}
			}
		}

		return fragment;
	},

	cleanData: function( elems ) {
		var data, elem, type, key,
			special = jQuery.event.special,
			i = 0;

		for ( ; (elem = elems[ i ]) !== undefined; i++ ) {
			if ( jQuery.acceptData( elem ) ) {
				key = elem[ data_priv.expando ];

				if ( key && (data = data_priv.cache[ key ]) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}
					if ( data_priv.cache[ key ] ) {
						// Discard any remaining `private` data
						delete data_priv.cache[ key ];
					}
				}
			}
			// Discard any remaining `user` data
			delete data_user.cache[ elem[ data_user.expando ] ];
		}
	}
});

jQuery.fn.extend({
	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each(function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				});
		}, null, value, arguments.length );
	},

	append: function() {
		return this.domManip( arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		});
	},

	prepend: function() {
		return this.domManip( arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		});
	},

	before: function() {
		return this.domManip( arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		});
	},

	after: function() {
		return this.domManip( arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		});
	},

	remove: function( selector, keepData /* Internal Use Only */ ) {
		var elem,
			elems = selector ? jQuery.filter( selector, this ) : this,
			i = 0;

		for ( ; (elem = elems[i]) != null; i++ ) {
			if ( !keepData && elem.nodeType === 1 ) {
				jQuery.cleanData( getAll( elem ) );
			}

			if ( elem.parentNode ) {
				if ( keepData && jQuery.contains( elem.ownerDocument, elem ) ) {
					setGlobalEval( getAll( elem, "script" ) );
				}
				elem.parentNode.removeChild( elem );
			}
		}

		return this;
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; (elem = this[i]) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map(function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		});
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = value.replace( rxhtmlTag, "<$1></$2>" );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var arg = arguments[ 0 ];

		// Make the changes, replacing each context element with the new content
		this.domManip( arguments, function( elem ) {
			arg = this.parentNode;

			jQuery.cleanData( getAll( this ) );

			if ( arg ) {
				arg.replaceChild( elem, this );
			}
		});

		// Force removal if there was no new content (e.g., from empty arguments)
		return arg && (arg.length || arg.nodeType) ? this : this.remove();
	},

	detach: function( selector ) {
		return this.remove( selector, true );
	},

	domManip: function( args, callback ) {

		// Flatten any nested arrays
		args = concat.apply( [], args );

		var fragment, first, scripts, hasScripts, node, doc,
			i = 0,
			l = this.length,
			set = this,
			iNoClone = l - 1,
			value = args[ 0 ],
			isFunction = jQuery.isFunction( value );

		// We can't cloneNode fragments that contain checked, in WebKit
		if ( isFunction ||
				( l > 1 && typeof value === "string" &&
					!support.checkClone && rchecked.test( value ) ) ) {
			return this.each(function( index ) {
				var self = set.eq( index );
				if ( isFunction ) {
					args[ 0 ] = value.call( this, index, self.html() );
				}
				self.domManip( args, callback );
			});
		}

		if ( l ) {
			fragment = jQuery.buildFragment( args, this[ 0 ].ownerDocument, false, this );
			first = fragment.firstChild;

			if ( fragment.childNodes.length === 1 ) {
				fragment = first;
			}

			if ( first ) {
				scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
				hasScripts = scripts.length;

				// Use the original fragment for the last item instead of the first because it can end up
				// being emptied incorrectly in certain situations (#8070).
				for ( ; i < l; i++ ) {
					node = fragment;

					if ( i !== iNoClone ) {
						node = jQuery.clone( node, true, true );

						// Keep references to cloned scripts for later restoration
						if ( hasScripts ) {
							// Support: QtWebKit
							// jQuery.merge because push.apply(_, arraylike) throws
							jQuery.merge( scripts, getAll( node, "script" ) );
						}
					}

					callback.call( this[ i ], node, i );
				}

				if ( hasScripts ) {
					doc = scripts[ scripts.length - 1 ].ownerDocument;

					// Reenable scripts
					jQuery.map( scripts, restoreScript );

					// Evaluate executable scripts on first document insertion
					for ( i = 0; i < hasScripts; i++ ) {
						node = scripts[ i ];
						if ( rscriptType.test( node.type || "" ) &&
							!data_priv.access( node, "globalEval" ) && jQuery.contains( doc, node ) ) {

							if ( node.src ) {
								// Optional AJAX dependency, but won't run scripts if not present
								if ( jQuery._evalUrl ) {
									jQuery._evalUrl( node.src );
								}
							} else {
								jQuery.globalEval( node.textContent.replace( rcleanScript, "" ) );
							}
						}
					}
				}
			}
		}

		return this;
	}
});

jQuery.each({
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: QtWebKit
			// .get() because push.apply(_, arraylike) throws
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
});


var iframe,
	elemdisplay = {};

/**
 * Retrieve the actual display of a element
 * @param {String} name nodeName of the element
 * @param {Object} doc Document object
 */
// Called only from within defaultDisplay
function actualDisplay( name, doc ) {
	var style,
		elem = jQuery( doc.createElement( name ) ).appendTo( doc.body ),

		// getDefaultComputedStyle might be reliably used only on attached element
		display = window.getDefaultComputedStyle && ( style = window.getDefaultComputedStyle( elem[ 0 ] ) ) ?

			// Use of this method is a temporary fix (more like optimization) until something better comes along,
			// since it was removed from specification and supported only in FF
			style.display : jQuery.css( elem[ 0 ], "display" );

	// We don't have any data stored on the element,
	// so use "detach" method as fast way to get rid of the element
	elem.detach();

	return display;
}

/**
 * Try to determine the default display value of an element
 * @param {String} nodeName
 */
function defaultDisplay( nodeName ) {
	var doc = document,
		display = elemdisplay[ nodeName ];

	if ( !display ) {
		display = actualDisplay( nodeName, doc );

		// If the simple way fails, read from inside an iframe
		if ( display === "none" || !display ) {

			// Use the already-created iframe if possible
			iframe = (iframe || jQuery( "<iframe frameborder='0' width='0' height='0'/>" )).appendTo( doc.documentElement );

			// Always write a new HTML skeleton so Webkit and Firefox don't choke on reuse
			doc = iframe[ 0 ].contentDocument;

			// Support: IE
			doc.write();
			doc.close();

			display = actualDisplay( nodeName, doc );
			iframe.detach();
		}

		// Store the correct default display
		elemdisplay[ nodeName ] = display;
	}

	return display;
}
var rmargin = (/^margin/);

var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var getStyles = function( elem ) {
		// Support: IE<=11+, Firefox<=30+ (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		if ( elem.ownerDocument.defaultView.opener ) {
			return elem.ownerDocument.defaultView.getComputedStyle( elem, null );
		}

		return window.getComputedStyle( elem, null );
	};



function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,
		style = elem.style;

	computed = computed || getStyles( elem );

	// Support: IE9
	// getPropertyValue is only needed for .css('filter') (#12537)
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];
	}

	if ( computed ) {

		if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// Support: iOS < 6
		// A tribute to the "awesome hack by Dean Edwards"
		// iOS < 6 (at least) returns percentage for a larger set of values, but width seems to be reliably pixels
		// this is against the CSSOM draft spec: http://dev.w3.org/csswg/cssom/#resolved-values
		if ( rnumnonpx.test( ret ) && rmargin.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?
		// Support: IE
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {
	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {
				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return (this.get = hookFn).apply( this, arguments );
		}
	};
}


(function() {
	var pixelPositionVal, boxSizingReliableVal,
		docElem = document.documentElement,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	if ( !div.style ) {
		return;
	}

	// Support: IE9-11+
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	container.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;" +
		"position:absolute";
	container.appendChild( div );

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computePixelPositionAndBoxSizingReliable() {
		div.style.cssText =
			// Support: Firefox<29, Android 2.3
			// Vendor-prefix box-sizing
			"-webkit-box-sizing:border-box;-moz-box-sizing:border-box;" +
			"box-sizing:border-box;display:block;margin-top:1%;top:1%;" +
			"border:1px;padding:1px;width:4px;position:absolute";
		div.innerHTML = "";
		docElem.appendChild( container );

		var divStyle = window.getComputedStyle( div, null );
		pixelPositionVal = divStyle.top !== "1%";
		boxSizingReliableVal = divStyle.width === "4px";

		docElem.removeChild( container );
	}

	// Support: node.js jsdom
	// Don't assume that getComputedStyle is a property of the global object
	if ( window.getComputedStyle ) {
		jQuery.extend( support, {
			pixelPosition: function() {

				// This test is executed only once but we still do memoizing
				// since we can use the boxSizingReliable pre-computing.
				// No need to check if the test was already performed, though.
				computePixelPositionAndBoxSizingReliable();
				return pixelPositionVal;
			},
			boxSizingReliable: function() {
				if ( boxSizingReliableVal == null ) {
					computePixelPositionAndBoxSizingReliable();
				}
				return boxSizingReliableVal;
			},
			reliableMarginRight: function() {

				// Support: Android 2.3
				// Check if div with explicit width and no margin-right incorrectly
				// gets computed margin-right based on width of container. (#3333)
				// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
				// This support function is only executed once so no memoizing is needed.
				var ret,
					marginDiv = div.appendChild( document.createElement( "div" ) );

				// Reset CSS: box-sizing; display; margin; border; padding
				marginDiv.style.cssText = div.style.cssText =
					// Support: Firefox<29, Android 2.3
					// Vendor-prefix box-sizing
					"-webkit-box-sizing:content-box;-moz-box-sizing:content-box;" +
					"box-sizing:content-box;display:block;margin:0;border:0;padding:0";
				marginDiv.style.marginRight = marginDiv.style.width = "0";
				div.style.width = "1px";
				docElem.appendChild( container );

				ret = !parseFloat( window.getComputedStyle( marginDiv, null ).marginRight );

				docElem.removeChild( container );
				div.removeChild( marginDiv );

				return ret;
			}
		});
	}
})();


// A method for quickly swapping in/out CSS properties to get correct calculations.
jQuery.swap = function( elem, options, callback, args ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.apply( elem, args || [] );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};


var
	// Swappable if display is none or starts with table except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rnumsplit = new RegExp( "^(" + pnum + ")(.*)$", "i" ),
	rrelNum = new RegExp( "^([+-])=(" + pnum + ")", "i" ),

	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	},

	cssPrefixes = [ "Webkit", "O", "Moz", "ms" ];

// Return a css property mapped to a potentially vendor prefixed property
function vendorPropName( style, name ) {

	// Shortcut for names that are not vendor prefixed
	if ( name in style ) {
		return name;
	}

	// Check for vendor prefixed names
	var capName = name[0].toUpperCase() + name.slice(1),
		origName = name,
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in style ) {
			return name;
		}
	}

	return origName;
}

function setPositiveNumber( elem, value, subtract ) {
	var matches = rnumsplit.exec( value );
	return matches ?
		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 1 ] - ( subtract || 0 ) ) + ( matches[ 2 ] || "px" ) :
		value;
}

function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
	var i = extra === ( isBorderBox ? "border" : "content" ) ?
		// If we already have the right measurement, avoid augmentation
		4 :
		// Otherwise initialize for horizontal or vertical properties
		name === "width" ? 1 : 0,

		val = 0;

	for ( ; i < 4; i += 2 ) {
		// Both box models exclude margin, so add it if we want it
		if ( extra === "margin" ) {
			val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
		}

		if ( isBorderBox ) {
			// border-box includes padding, so remove it if we want content
			if ( extra === "content" ) {
				val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// At this point, extra isn't border nor margin, so remove border
			if ( extra !== "margin" ) {
				val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		} else {
			// At this point, extra isn't content, so add padding
			val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// At this point, extra isn't content nor padding, so add border
			if ( extra !== "padding" ) {
				val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	return val;
}

function getWidthOrHeight( elem, name, extra ) {

	// Start with offset property, which is equivalent to the border-box value
	var valueIsBorderBox = true,
		val = name === "width" ? elem.offsetWidth : elem.offsetHeight,
		styles = getStyles( elem ),
		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

	// Some non-html elements return undefined for offsetWidth, so check for null/undefined
	// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
	// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
	if ( val <= 0 || val == null ) {
		// Fall back to computed then uncomputed css if necessary
		val = curCSS( elem, name, styles );
		if ( val < 0 || val == null ) {
			val = elem.style[ name ];
		}

		// Computed unit is not pixels. Stop here and return.
		if ( rnumnonpx.test(val) ) {
			return val;
		}

		// Check for style in case a browser which returns unreliable values
		// for getComputedStyle silently falls back to the reliable elem.style
		valueIsBorderBox = isBorderBox &&
			( support.boxSizingReliable() || val === elem.style[ name ] );

		// Normalize "", auto, and prepare for extra
		val = parseFloat( val ) || 0;
	}

	// Use the active box-sizing model to add/subtract irrelevant styles
	return ( val +
		augmentWidthOrHeight(
			elem,
			name,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles
		)
	) + "px";
}

function showHide( elements, show ) {
	var display, elem, hidden,
		values = [],
		index = 0,
		length = elements.length;

	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		values[ index ] = data_priv.get( elem, "olddisplay" );
		display = elem.style.display;
		if ( show ) {
			// Reset the inline display of this element to learn if it is
			// being hidden by cascaded rules or not
			if ( !values[ index ] && display === "none" ) {
				elem.style.display = "";
			}

			// Set elements which have been overridden with display: none
			// in a stylesheet to whatever the default browser style is
			// for such an element
			if ( elem.style.display === "" && isHidden( elem ) ) {
				values[ index ] = data_priv.access( elem, "olddisplay", defaultDisplay(elem.nodeName) );
			}
		} else {
			hidden = isHidden( elem );

			if ( display !== "none" || !hidden ) {
				data_priv.set( elem, "olddisplay", hidden ? display : jQuery.css( elem, "display" ) );
			}
		}
	}

	// Set the display of most of the elements in a second loop
	// to avoid the constant reflow
	for ( index = 0; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}
		if ( !show || elem.style.display === "none" || elem.style.display === "" ) {
			elem.style.display = show ? values[ index ] || "" : "none";
		}
	}

	return elements;
}

jQuery.extend({

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {
		"float": "cssFloat"
	},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = jQuery.camelCase( name ),
			style = elem.style;

		name = jQuery.cssProps[ origName ] || ( jQuery.cssProps[ origName ] = vendorPropName( style, origName ) );

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && (ret = rrelNum.exec( value )) ) {
				value = ( ret[1] + 1 ) * ret[2] + parseFloat( jQuery.css( elem, name ) );
				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (#7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number, add 'px' to the (except for certain CSS properties)
			if ( type === "number" && !jQuery.cssNumber[ origName ] ) {
				value += "px";
			}

			// Support: IE9-11+
			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !("set" in hooks) || (value = hooks.set( elem, value, extra )) !== undefined ) {
				style[ name ] = value;
			}

		} else {
			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks && (ret = hooks.get( elem, false, extra )) !== undefined ) {
				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = jQuery.camelCase( name );

		// Make sure that we're working with the right name
		name = jQuery.cssProps[ origName ] || ( jQuery.cssProps[ origName ] = vendorPropName( elem.style, origName ) );

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || jQuery.isNumeric( num ) ? num || 0 : val;
		}
		return val;
	}
});

jQuery.each([ "height", "width" ], function( i, name ) {
	jQuery.cssHooks[ name ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) && elem.offsetWidth === 0 ?
					jQuery.swap( elem, cssShow, function() {
						return getWidthOrHeight( elem, name, extra );
					}) :
					getWidthOrHeight( elem, name, extra );
			}
		},

		set: function( elem, value, extra ) {
			var styles = extra && getStyles( elem );
			return setPositiveNumber( elem, value, extra ?
				augmentWidthOrHeight(
					elem,
					name,
					extra,
					jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
					styles
				) : 0
			);
		}
	};
});

// Support: Android 2.3
jQuery.cssHooks.marginRight = addGetHookIf( support.reliableMarginRight,
	function( elem, computed ) {
		if ( computed ) {
			return jQuery.swap( elem, { "display": "inline-block" },
				curCSS, [ elem, "marginRight" ] );
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each({
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split(" ") : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( !rmargin.test( prefix ) ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
});

jQuery.fn.extend({
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( jQuery.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	},
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each(function() {
			if ( isHidden( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		});
	}
});


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || "swing";
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			if ( tween.elem[ tween.prop ] != null &&
				(!tween.elem.style || tween.elem.style[ tween.prop ] == null) ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );
			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {
			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.style && ( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null || jQuery.cssHooks[ tween.prop ] ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE9
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	}
};

jQuery.fx = Tween.prototype.init;

// Back Compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, timerId,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rfxnum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" ),
	rrun = /queueHooks$/,
	animationPrefilters = [ defaultPrefilter ],
	tweeners = {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value ),
				target = tween.cur(),
				parts = rfxnum.exec( value ),
				unit = parts && parts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

				// Starting value computation is required for potential unit mismatches
				start = ( jQuery.cssNumber[ prop ] || unit !== "px" && +target ) &&
					rfxnum.exec( jQuery.css( tween.elem, prop ) ),
				scale = 1,
				maxIterations = 20;

			if ( start && start[ 3 ] !== unit ) {
				// Trust units reported by jQuery.css
				unit = unit || start[ 3 ];

				// Make sure we update the tween properties later on
				parts = parts || [];

				// Iteratively approximate from a nonzero starting point
				start = +target || 1;

				do {
					// If previous iteration zeroed out, double until we get *something*.
					// Use string for doubling so we don't accidentally see scale as unchanged below
					scale = scale || ".5";

					// Adjust and apply
					start = start / scale;
					jQuery.style( tween.elem, prop, start + unit );

				// Update scale, tolerating zero or NaN from tween.cur(),
				// break the loop if scale is unchanged or perfect, or if we've just had enough
				} while ( scale !== (scale = tween.cur() / target) && scale !== 1 && --maxIterations );
			}

			// Update tween properties
			if ( parts ) {
				start = tween.start = +start || +target || 0;
				tween.unit = unit;
				// If a +=/-= token was provided, we're doing a relative animation
				tween.end = parts[ 1 ] ?
					start + ( parts[ 1 ] + 1 ) * parts[ 2 ] :
					+parts[ 2 ];
			}

			return tween;
		} ]
	};

// Animations created synchronously will run synchronously
function createFxNow() {
	setTimeout(function() {
		fxNow = undefined;
	});
	return ( fxNow = jQuery.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4 ; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( tweeners[ prop ] || [] ).concat( tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( (tween = collection[ index ].call( animation, prop, value )) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	/* jshint validthis: true */
	var prop, value, toggle, tween, hooks, oldfire, display, checkDisplay,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHidden( elem ),
		dataShow = data_priv.get( elem, "fxshow" );

	// Handle queue: false promises
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always(function() {
			// Ensure the complete handler is called before this completes
			anim.always(function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			});
		});
	}

	// Height/width overflow pass
	if ( elem.nodeType === 1 && ( "height" in props || "width" in props ) ) {
		// Make sure that nothing sneaks out
		// Record all 3 overflow attributes because IE9-10 do not
		// change the overflow attribute when overflowX and
		// overflowY are set to the same value
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Set display property to inline-block for height/width
		// animations on inline elements that are having width/height animated
		display = jQuery.css( elem, "display" );

		// Test default display if display is currently "none"
		checkDisplay = display === "none" ?
			data_priv.get( elem, "olddisplay" ) || defaultDisplay( elem.nodeName ) : display;

		if ( checkDisplay === "inline" && jQuery.css( elem, "float" ) === "none" ) {
			style.display = "inline-block";
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always(function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		});
	}

	// show/hide pass
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.exec( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// If there is dataShow left over from a stopped hide or show and we are going to proceed with show, we should pretend to be hidden
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );

		// Any non-fx value stops us from restoring the original display value
		} else {
			display = undefined;
		}
	}

	if ( !jQuery.isEmptyObject( orig ) ) {
		if ( dataShow ) {
			if ( "hidden" in dataShow ) {
				hidden = dataShow.hidden;
			}
		} else {
			dataShow = data_priv.access( elem, "fxshow", {} );
		}

		// Store state if its toggle - enables .stop().toggle() to "reverse"
		if ( toggle ) {
			dataShow.hidden = !hidden;
		}
		if ( hidden ) {
			jQuery( elem ).show();
		} else {
			anim.done(function() {
				jQuery( elem ).hide();
			});
		}
		anim.done(function() {
			var prop;

			data_priv.remove( elem, "fxshow" );
			for ( prop in orig ) {
				jQuery.style( elem, prop, orig[ prop ] );
			}
		});
		for ( prop in orig ) {
			tween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );

			if ( !( prop in dataShow ) ) {
				dataShow[ prop ] = tween.start;
				if ( hidden ) {
					tween.end = tween.start;
					tween.start = prop === "width" || prop === "height" ? 1 : 0;
				}
			}
		}

	// If this is a noop like .hide().hide(), restore an overwritten display value
	} else if ( (display === "none" ? defaultDisplay( elem.nodeName ) : display) === "inline" ) {
		style.display = display;
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = jQuery.camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( jQuery.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = animationPrefilters.length,
		deferred = jQuery.Deferred().always( function() {
			// Don't match elem in the :animated selector
			delete tick.elem;
		}),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),
				// Support: Android 2.3
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length ; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ]);

			if ( percent < 1 && length ) {
				return remaining;
			} else {
				deferred.resolveWith( elem, [ animation ] );
				return false;
			}
		},
		animation = deferred.promise({
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, { specialEasing: {} }, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,
					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length ; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		}),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length ; index++ ) {
		result = animationPrefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( jQuery.isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		})
	);

	// attach callbacks from options
	return animation.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );
}

jQuery.Animation = jQuery.extend( Animation, {

	tweener: function( props, callback ) {
		if ( jQuery.isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.split(" ");
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length ; index++ ) {
			prop = props[ index ];
			tweeners[ prop ] = tweeners[ prop ] || [];
			tweeners[ prop ].unshift( callback );
		}
	},

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			animationPrefilters.unshift( callback );
		} else {
			animationPrefilters.push( callback );
		}
	}
});

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			jQuery.isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
	};

	opt.duration = jQuery.fx.off ? 0 : typeof opt.duration === "number" ? opt.duration :
		opt.duration in jQuery.fx.speeds ? jQuery.fx.speeds[ opt.duration ] : jQuery.fx.speeds._default;

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( jQuery.isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend({
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHidden ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate({ opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {
				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || data_priv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue && type !== false ) {
			this.queue( type || "fx", [] );
		}

		return this.each(function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = data_priv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && (type == null || timers[ index ].queue === type) ) {
					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		});
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each(function() {
			var index,
				data = data_priv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		});
	}
});

jQuery.each([ "toggle", "show", "hide" ], function( i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
});

// Generate shortcuts for custom animations
jQuery.each({
	slideDown: genFx("show"),
	slideUp: genFx("hide"),
	slideToggle: genFx("toggle"),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
});

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = jQuery.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];
		// Checks the timer has not already been removed
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	if ( timer() ) {
		jQuery.fx.start();
	} else {
		jQuery.timers.pop();
	}
};

jQuery.fx.interval = 13;

jQuery.fx.start = function() {
	if ( !timerId ) {
		timerId = setInterval( jQuery.fx.tick, jQuery.fx.interval );
	}
};

jQuery.fx.stop = function() {
	clearInterval( timerId );
	timerId = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,
	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = setTimeout( next, time );
		hooks.stop = function() {
			clearTimeout( timeout );
		};
	});
};


(function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: iOS<=5.1, Android<=4.2+
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE<=11+
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: Android<=2.3
	// Options inside disabled selects are incorrectly marked as disabled
	select.disabled = true;
	support.optDisabled = !opt.disabled;

	// Support: IE<=11+
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
})();


var nodeHook, boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend({
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each(function() {
			jQuery.removeAttr( this, name );
		});
	}
});

jQuery.extend({
	attr: function( elem, name, value ) {
		var hooks, ret,
			nType = elem.nodeType;

		// don't get/set attributes on text, comment and attribute nodes
		if ( !elem || nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === strundefined ) {
			return jQuery.prop( elem, name, value );
		}

		// All attributes are lowercase
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			name = name.toLowerCase();
			hooks = jQuery.attrHooks[ name ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : nodeHook );
		}

		if ( value !== undefined ) {

			if ( value === null ) {
				jQuery.removeAttr( elem, name );

			} else if ( hooks && "set" in hooks && (ret = hooks.set( elem, value, name )) !== undefined ) {
				return ret;

			} else {
				elem.setAttribute( name, value + "" );
				return value;
			}

		} else if ( hooks && "get" in hooks && (ret = hooks.get( elem, name )) !== null ) {
			return ret;

		} else {
			ret = jQuery.find.attr( elem, name );

			// Non-existent attributes return null, we normalize to undefined
			return ret == null ?
				undefined :
				ret;
		}
	},

	removeAttr: function( elem, value ) {
		var name, propName,
			i = 0,
			attrNames = value && value.match( rnotwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( (name = attrNames[i++]) ) {
				propName = jQuery.propFix[ name ] || name;

				// Boolean attributes get special treatment (#10870)
				if ( jQuery.expr.match.bool.test( name ) ) {
					// Set corresponding property to false
					elem[ propName ] = false;
				}

				elem.removeAttribute( name );
			}
		}
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					jQuery.nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	}
});

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {
			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};
jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle;
		if ( !isXML ) {
			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ name ];
			attrHandle[ name ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				name.toLowerCase() :
				null;
			attrHandle[ name ] = handle;
		}
		return ret;
	};
});




var rfocusable = /^(?:input|select|textarea|button)$/i;

jQuery.fn.extend({
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each(function() {
			delete this[ jQuery.propFix[ name ] || name ];
		});
	}
});

jQuery.extend({
	propFix: {
		"for": "htmlFor",
		"class": "className"
	},

	prop: function( elem, name, value ) {
		var ret, hooks, notxml,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( !elem || nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		notxml = nType !== 1 || !jQuery.isXMLDoc( elem );

		if ( notxml ) {
			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			return hooks && "set" in hooks && (ret = hooks.set( elem, value, name )) !== undefined ?
				ret :
				( elem[ name ] = value );

		} else {
			return hooks && "get" in hooks && (ret = hooks.get( elem, name )) !== null ?
				ret :
				elem[ name ];
		}
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {
				return elem.hasAttribute( "tabindex" ) || rfocusable.test( elem.nodeName ) || elem.href ?
					elem.tabIndex :
					-1;
			}
		}
	}
});

if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {
			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		}
	};
}

jQuery.each([
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
});




var rclass = /[\t\r\n\f]/g;

jQuery.fn.extend({
	addClass: function( value ) {
		var classes, elem, cur, clazz, j, finalValue,
			proceed = typeof value === "string" && value,
			i = 0,
			len = this.length;

		if ( jQuery.isFunction( value ) ) {
			return this.each(function( j ) {
				jQuery( this ).addClass( value.call( this, j, this.className ) );
			});
		}

		if ( proceed ) {
			// The disjunction here is for better compressibility (see removeClass)
			classes = ( value || "" ).match( rnotwhite ) || [];

			for ( ; i < len; i++ ) {
				elem = this[ i ];
				cur = elem.nodeType === 1 && ( elem.className ?
					( " " + elem.className + " " ).replace( rclass, " " ) :
					" "
				);

				if ( cur ) {
					j = 0;
					while ( (clazz = classes[j++]) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// only assign if different to avoid unneeded rendering.
					finalValue = jQuery.trim( cur );
					if ( elem.className !== finalValue ) {
						elem.className = finalValue;
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, clazz, j, finalValue,
			proceed = arguments.length === 0 || typeof value === "string" && value,
			i = 0,
			len = this.length;

		if ( jQuery.isFunction( value ) ) {
			return this.each(function( j ) {
				jQuery( this ).removeClass( value.call( this, j, this.className ) );
			});
		}
		if ( proceed ) {
			classes = ( value || "" ).match( rnotwhite ) || [];

			for ( ; i < len; i++ ) {
				elem = this[ i ];
				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( elem.className ?
					( " " + elem.className + " " ).replace( rclass, " " ) :
					""
				);

				if ( cur ) {
					j = 0;
					while ( (clazz = classes[j++]) ) {
						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) >= 0 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = value ? jQuery.trim( cur ) : "";
					if ( elem.className !== finalValue ) {
						elem.className = finalValue;
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value;

		if ( typeof stateVal === "boolean" && type === "string" ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( jQuery.isFunction( value ) ) {
			return this.each(function( i ) {
				jQuery( this ).toggleClass( value.call(this, i, this.className, stateVal), stateVal );
			});
		}

		return this.each(function() {
			if ( type === "string" ) {
				// Toggle individual class names
				var className,
					i = 0,
					self = jQuery( this ),
					classNames = value.match( rnotwhite ) || [];

				while ( (className = classNames[ i++ ]) ) {
					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( type === strundefined || type === "boolean" ) {
				if ( this.className ) {
					// store className if set
					data_priv.set( this, "__className__", this.className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				this.className = this.className || value === false ? "" : data_priv.get( this, "__className__" ) || "";
			}
		});
	},

	hasClass: function( selector ) {
		var className = " " + selector + " ",
			i = 0,
			l = this.length;
		for ( ; i < l; i++ ) {
			if ( this[i].nodeType === 1 && (" " + this[i].className + " ").replace(rclass, " ").indexOf( className ) >= 0 ) {
				return true;
			}
		}

		return false;
	}
});




var rreturn = /\r/g;

jQuery.fn.extend({
	val: function( value ) {
		var hooks, ret, isFunction,
			elem = this[0];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] || jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks && "get" in hooks && (ret = hooks.get( elem, "value" )) !== undefined ) {
					return ret;
				}

				ret = elem.value;

				return typeof ret === "string" ?
					// Handle most common string cases
					ret.replace(rreturn, "") :
					// Handle cases where value is null/undef or number
					ret == null ? "" : ret;
			}

			return;
		}

		isFunction = jQuery.isFunction( value );

		return this.each(function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( isFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( jQuery.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				});
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !("set" in hooks) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		});
	}
});

jQuery.extend({
	valHooks: {
		option: {
			get: function( elem ) {
				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :
					// Support: IE10-11+
					// option.text throws exceptions (#14686, #14858)
					jQuery.trim( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one" || index < 0,
					values = one ? null : [],
					max = one ? index + 1 : options.length,
					i = index < 0 ?
						max :
						one ? index : 0;

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// IE6-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&
							// Don't return options that are disabled or in a disabled optgroup
							( support.optDisabled ? !option.disabled : option.getAttribute( "disabled" ) === null ) &&
							( !option.parentNode.disabled || !jQuery.nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];
					if ( (option.selected = jQuery.inArray( option.value, values ) >= 0) ) {
						optionSet = true;
					}
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
});

// Radios and checkboxes getter/setter
jQuery.each([ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( jQuery.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery(elem).val(), value ) >= 0 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute("value") === null ? "on" : elem.value;
		};
	}
});




// Return jQuery for attributes-only inclusion


jQuery.each( ("blur focus focusin focusout load resize scroll unload click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup error contextmenu").split(" "), function( i, name ) {

	// Handle event binding
	jQuery.fn[ name ] = function( data, fn ) {
		return arguments.length > 0 ?
			this.on( name, null, data, fn ) :
			this.trigger( name );
	};
});

jQuery.fn.extend({
	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	},

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {
		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ? this.off( selector, "**" ) : this.off( types, selector || "**", fn );
	}
});


var nonce = jQuery.now();

var rquery = (/\?/);



// Support: Android 2.3
// Workaround failure to string-cast null input
jQuery.parseJSON = function( data ) {
	return JSON.parse( data + "" );
};


// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml, tmp;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE9
	try {
		tmp = new DOMParser();
		xml = tmp.parseFromString( data, "text/xml" );
	} catch ( e ) {
		xml = undefined;
	}

	if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	rhash = /#.*$/,
	rts = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,
	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,
	rurl = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Document location
	ajaxLocation = window.location.href,

	// Segment location into parts
	ajaxLocParts = rurl.exec( ajaxLocation.toLowerCase() ) || [];

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnotwhite ) || [];

		if ( jQuery.isFunction( func ) ) {
			// For each dataType in the dataTypeExpression
			while ( (dataType = dataTypes[i++]) ) {
				// Prepend if requested
				if ( dataType[0] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					(structure[ dataType ] = structure[ dataType ] || []).unshift( func );

				// Otherwise append
				} else {
					(structure[ dataType ] = structure[ dataType ] || []).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[ dataTypeOrTransport ] ) {
				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		});
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || (deep = {}) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {
		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[0] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}
		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},
		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

		// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {
								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s[ "throws" ] ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return { state: "parsererror", error: conv ? e : "No conversion from " + prev + " to " + current };
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend({

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: ajaxLocation,
		type: "GET",
		isLocal: rlocalProtocol.test( ajaxLocParts[ 1 ] ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",
		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /xml/,
			html: /html/,
			json: /json/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": jQuery.parseJSON,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,
			// URL without anti-cache param
			cacheURL,
			// Response headers
			responseHeadersString,
			responseHeaders,
			// timeout handle
			timeoutTimer,
			// Cross-domain detection vars
			parts,
			// To know if global events are to be dispatched
			fireGlobals,
			// Loop variable
			i,
			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),
			// Callbacks context
			callbackContext = s.context || s,
			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context && ( callbackContext.nodeType || callbackContext.jquery ) ?
				jQuery( callbackContext ) :
				jQuery.event,
			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks("once memory"),
			// Status-dependent callbacks
			statusCode = s.statusCode || {},
			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},
			// The jqXHR state
			state = 0,
			// Default abort message
			strAbort = "canceled",
			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( state === 2 ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( (match = rheaders.exec( responseHeadersString )) ) {
								responseHeaders[ match[1].toLowerCase() ] = match[ 2 ];
							}
						}
						match = responseHeaders[ key.toLowerCase() ];
					}
					return match == null ? null : match;
				},

				// Raw string
				getAllResponseHeaders: function() {
					return state === 2 ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					var lname = name.toLowerCase();
					if ( !state ) {
						name = requestHeadersNames[ lname ] = requestHeadersNames[ lname ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( !state ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( state < 2 ) {
							for ( code in map ) {
								// Lazy-add the new callback in a way that preserves old ones
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						} else {
							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR ).complete = completeDeferred.add;
		jqXHR.success = jqXHR.done;
		jqXHR.error = jqXHR.fail;

		// Remove hash character (#7531: and string promotion)
		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || ajaxLocation ) + "" ).replace( rhash, "" )
			.replace( rprotocol, ajaxLocParts[ 1 ] + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = jQuery.trim( s.dataType || "*" ).toLowerCase().match( rnotwhite ) || [ "" ];

		// A cross-domain request is in order when we have a protocol:host:port mismatch
		if ( s.crossDomain == null ) {
			parts = rurl.exec( s.url.toLowerCase() );
			s.crossDomain = !!( parts &&
				( parts[ 1 ] !== ajaxLocParts[ 1 ] || parts[ 2 ] !== ajaxLocParts[ 2 ] ||
					( parts[ 3 ] || ( parts[ 1 ] === "http:" ? "80" : "443" ) ) !==
						( ajaxLocParts[ 3 ] || ( ajaxLocParts[ 1 ] === "http:" ? "80" : "443" ) ) )
			);
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( state === 2 ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger("ajaxStart");
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		cacheURL = s.url;

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// If data is available, append data to url
			if ( s.data ) {
				cacheURL = ( s.url += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data );
				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add anti-cache in url if needed
			if ( s.cache === false ) {
				s.url = rts.test( cacheURL ) ?

					// If there is already a '_' parameter, set its value
					cacheURL.replace( rts, "$1_=" + nonce++ ) :

					// Otherwise add one to the end
					cacheURL + ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + nonce++;
			}
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[0] ] ?
				s.accepts[ s.dataTypes[0] ] + ( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend && ( s.beforeSend.call( callbackContext, jqXHR, s ) === false || state === 2 ) ) {
			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		for ( i in { success: 1, error: 1, complete: 1 } ) {
			jqXHR[ i ]( s[ i ] );
		}

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}
			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = setTimeout(function() {
					jqXHR.abort("timeout");
				}, s.timeout );
			}

			try {
				state = 1;
				transport.send( requestHeaders, done );
			} catch ( e ) {
				// Propagate exception as error if not done
				if ( state < 2 ) {
					done( -1, e );
				// Simply rethrow otherwise
				} else {
					throw e;
				}
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Called once
			if ( state === 2 ) {
				return;
			}

			// State is "done" now
			state = 2;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader("Last-Modified");
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader("etag");
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {
				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );
				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger("ajaxStop");
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
});

jQuery.each( [ "get", "post" ], function( i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {
		// Shift arguments if data argument was omitted
		if ( jQuery.isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		return jQuery.ajax({
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		});
	};
});


jQuery._evalUrl = function( url ) {
	return jQuery.ajax({
		url: url,
		type: "GET",
		dataType: "script",
		async: false,
		global: false,
		"throws": true
	});
};


jQuery.fn.extend({
	wrapAll: function( html ) {
		var wrap;

		if ( jQuery.isFunction( html ) ) {
			return this.each(function( i ) {
				jQuery( this ).wrapAll( html.call(this, i) );
			});
		}

		if ( this[ 0 ] ) {

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map(function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			}).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( jQuery.isFunction( html ) ) {
			return this.each(function( i ) {
				jQuery( this ).wrapInner( html.call(this, i) );
			});
		}

		return this.each(function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		});
	},

	wrap: function( html ) {
		var isFunction = jQuery.isFunction( html );

		return this.each(function( i ) {
			jQuery( this ).wrapAll( isFunction ? html.call(this, i) : html );
		});
	},

	unwrap: function() {
		return this.parent().each(function() {
			if ( !jQuery.nodeName( this, "body" ) ) {
				jQuery( this ).replaceWith( this.childNodes );
			}
		}).end();
	}
});


jQuery.expr.filters.hidden = function( elem ) {
	// Support: Opera <= 12.12
	// Opera reports offsetWidths and offsetHeights less than zero on some elements
	return elem.offsetWidth <= 0 && elem.offsetHeight <= 0;
};
jQuery.expr.filters.visible = function( elem ) {
	return !jQuery.expr.filters.hidden( elem );
};




var r20 = /%20/g,
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( jQuery.isArray( obj ) ) {
		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {
				// Treat each array item as a scalar.
				add( prefix, v );

			} else {
				// Item is non-scalar (array or object), encode its numeric index.
				buildParams( prefix + "[" + ( typeof v === "object" ? i : "" ) + "]", v, traditional, add );
			}
		});

	} else if ( !traditional && jQuery.type( obj ) === "object" ) {
		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {
		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, value ) {
			// If value is a function, invoke it and return its value
			value = jQuery.isFunction( value ) ? value() : ( value == null ? "" : value );
			s[ s.length ] = encodeURIComponent( key ) + "=" + encodeURIComponent( value );
		};

	// Set traditional to true for jQuery <= 1.3.2 behavior.
	if ( traditional === undefined ) {
		traditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional;
	}

	// If an array was passed in, assume that it is an array of form elements.
	if ( jQuery.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {
		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		});

	} else {
		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" ).replace( r20, "+" );
};

jQuery.fn.extend({
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map(function() {
			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		})
		.filter(function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		})
		.map(function( i, elem ) {
			var val = jQuery( this ).val();

			return val == null ?
				null :
				jQuery.isArray( val ) ?
					jQuery.map( val, function( val ) {
						return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
					}) :
					{ name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		}).get();
	}
});


jQuery.ajaxSettings.xhr = function() {
	try {
		return new XMLHttpRequest();
	} catch( e ) {}
};

var xhrId = 0,
	xhrCallbacks = {},
	xhrSuccessStatus = {
		// file protocol always yields status code 0, assume 200
		0: 200,
		// Support: IE9
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

// Support: IE9
// Open requests must be manually aborted on unload (#5280)
// See https://support.microsoft.com/kb/2856746 for more info
if ( window.attachEvent ) {
	window.attachEvent( "onunload", function() {
		for ( var key in xhrCallbacks ) {
			xhrCallbacks[ key ]();
		}
	});
}

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport(function( options ) {
	var callback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr(),
					id = ++xhrId;

				xhr.open( options.type, options.url, options.async, options.username, options.password );

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers["X-Requested-With"] ) {
					headers["X-Requested-With"] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							delete xhrCallbacks[ id ];
							callback = xhr.onload = xhr.onerror = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {
								complete(
									// file: protocol always yields status 0; see #8605, #14207
									xhr.status,
									xhr.statusText
								);
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,
									// Support: IE9
									// Accessing binary-data responseText throws an exception
									// (#11426)
									typeof xhr.responseText === "string" ? {
										text: xhr.responseText
									} : undefined,
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				xhr.onerror = callback("error");

				// Create the abort callback
				callback = xhrCallbacks[ id ] = callback("abort");

				try {
					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {
					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
});




// Install script dataType
jQuery.ajaxSetup({
	accepts: {
		script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /(?:java|ecma)script/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
});

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
});

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {
	// This transport only deals with cross domain requests
	if ( s.crossDomain ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery("<script>").prop({
					async: true,
					charset: s.scriptCharset,
					src: s.url
				}).on(
					"load error",
					callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					}
				);
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
});




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup({
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
		this[ callback ] = true;
		return callback;
	}
});

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" && !( s.contentType || "" ).indexOf("application/x-www-form-urlencoded") && rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters["script json"] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always(function() {
			// Restore preexisting value
			window[ callbackName ] = overwritten;

			// Save back as free
			if ( s[ callbackName ] ) {
				// make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && jQuery.isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		});

		// Delegate to script
		return "script";
	}
});




// data: string of html
// context (optional): If specified, the fragment will be created in this context, defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( !data || typeof data !== "string" ) {
		return null;
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}
	context = context || document;

	var parsed = rsingleTag.exec( data ),
		scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[1] ) ];
	}

	parsed = jQuery.buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


// Keep a copy of the old load method
var _load = jQuery.fn.load;

/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	if ( typeof url !== "string" && _load ) {
		return _load.apply( this, arguments );
	}

	var selector, type, response,
		self = this,
		off = url.indexOf(" ");

	if ( off >= 0 ) {
		selector = jQuery.trim( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( jQuery.isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax({
			url: url,

			// if "type" variable is undefined, then "GET" method will be used
			type: type,
			dataType: "html",
			data: params
		}).done(function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery("<div>").append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		}).complete( callback && function( jqXHR, status ) {
			self.each( callback, response || [ jqXHR.responseText, status, jqXHR ] );
		});
	}

	return this;
};




// Attach a bunch of functions for handling common AJAX events
jQuery.each( [ "ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend" ], function( i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
});




jQuery.expr.filters.animated = function( elem ) {
	return jQuery.grep(jQuery.timers, function( fn ) {
		return elem === fn.elem;
	}).length;
};




var docElem = window.document.documentElement;

/**
 * Gets a window from an element
 */
function getWindow( elem ) {
	return jQuery.isWindow( elem ) ? elem : elem.nodeType === 9 && elem.defaultView;
}

jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf("auto") > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( jQuery.isFunction( options ) ) {
			options = options.call( elem, i, curOffset );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend({
	offset: function( options ) {
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each(function( i ) {
					jQuery.offset.setOffset( this, options, i );
				});
		}

		var docElem, win,
			elem = this[ 0 ],
			box = { top: 0, left: 0 },
			doc = elem && elem.ownerDocument;

		if ( !doc ) {
			return;
		}

		docElem = doc.documentElement;

		// Make sure it's not a disconnected DOM node
		if ( !jQuery.contains( docElem, elem ) ) {
			return box;
		}

		// Support: BlackBerry 5, iOS 3 (original iPhone)
		// If we don't have gBCR, just use 0,0 rather than error
		if ( typeof elem.getBoundingClientRect !== strundefined ) {
			box = elem.getBoundingClientRect();
		}
		win = getWindow( doc );
		return {
			top: box.top + win.pageYOffset - docElem.clientTop,
			left: box.left + win.pageXOffset - docElem.clientLeft
		};
	},

	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// Fixed elements are offset from window (parentOffset = {top:0, left: 0}, because it is its only offset parent
		if ( jQuery.css( elem, "position" ) === "fixed" ) {
			// Assume getBoundingClientRect is there when computed position is fixed
			offset = elem.getBoundingClientRect();

		} else {
			// Get *real* offsetParent
			offsetParent = this.offsetParent();

			// Get correct offsets
			offset = this.offset();
			if ( !jQuery.nodeName( offsetParent[ 0 ], "html" ) ) {
				parentOffset = offsetParent.offset();
			}

			// Add offsetParent borders
			parentOffset.top += jQuery.css( offsetParent[ 0 ], "borderTopWidth", true );
			parentOffset.left += jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true );
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	offsetParent: function() {
		return this.map(function() {
			var offsetParent = this.offsetParent || docElem;

			while ( offsetParent && ( !jQuery.nodeName( offsetParent, "html" ) && jQuery.css( offsetParent, "position" ) === "static" ) ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || docElem;
		});
	}
});

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {
			var win = getWindow( elem );

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : window.pageXOffset,
					top ? val : window.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length, null );
	};
});

// Support: Safari<7+, Chrome<37+
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://code.google.com/p/chromium/issues/detail?id=229280
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );
				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
});


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name }, function( defaultExtra, funcName ) {
		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( jQuery.isWindow( elem ) ) {
					// As of 5/8/2012 this will yield incorrect results for Mobile Safari, but there
					// isn't a whole lot we can do. See pull request at this URL for discussion:
					// https://github.com/jquery/jquery/pull/764
					return elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?
					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable, null );
		};
	});
});


// The number of elements contained in the matched element set
jQuery.fn.size = function() {
	return this.length;
};

jQuery.fn.andSelf = jQuery.fn.addBack;




// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( typeof define === "function" && define.amd ) {
	define( "jquery", [], function() {
		return jQuery;
	});
}




var
	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( typeof noGlobal === strundefined ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;

}));

},{}],2:[function(require,module,exports){
//     Underscore.js 1.8.3
//     http://underscorejs.org
//     (c) 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.

(function() {

  // Baseline setup
  // --------------

  // Establish the root object, `window` in the browser, or `exports` on the server.
  var root = this;

  // Save the previous value of the `_` variable.
  var previousUnderscore = root._;

  // Save bytes in the minified (but not gzipped) version:
  var ArrayProto = Array.prototype, ObjProto = Object.prototype, FuncProto = Function.prototype;

  // Create quick reference variables for speed access to core prototypes.
  var
    push             = ArrayProto.push,
    slice            = ArrayProto.slice,
    toString         = ObjProto.toString,
    hasOwnProperty   = ObjProto.hasOwnProperty;

  // All **ECMAScript 5** native function implementations that we hope to use
  // are declared here.
  var
    nativeIsArray      = Array.isArray,
    nativeKeys         = Object.keys,
    nativeBind         = FuncProto.bind,
    nativeCreate       = Object.create;

  // Naked function reference for surrogate-prototype-swapping.
  var Ctor = function(){};

  // Create a safe reference to the Underscore object for use below.
  var _ = function(obj) {
    if (obj instanceof _) return obj;
    if (!(this instanceof _)) return new _(obj);
    this._wrapped = obj;
  };

  // Export the Underscore object for **Node.js**, with
  // backwards-compatibility for the old `require()` API. If we're in
  // the browser, add `_` as a global object.
  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = _;
    }
    exports._ = _;
  } else {
    root._ = _;
  }

  // Current version.
  _.VERSION = '1.8.3';

  // Internal function that returns an efficient (for current engines) version
  // of the passed-in callback, to be repeatedly applied in other Underscore
  // functions.
  var optimizeCb = function(func, context, argCount) {
    if (context === void 0) return func;
    switch (argCount == null ? 3 : argCount) {
      case 1: return function(value) {
        return func.call(context, value);
      };
      case 2: return function(value, other) {
        return func.call(context, value, other);
      };
      case 3: return function(value, index, collection) {
        return func.call(context, value, index, collection);
      };
      case 4: return function(accumulator, value, index, collection) {
        return func.call(context, accumulator, value, index, collection);
      };
    }
    return function() {
      return func.apply(context, arguments);
    };
  };

  // A mostly-internal function to generate callbacks that can be applied
  // to each element in a collection, returning the desired result — either
  // identity, an arbitrary callback, a property matcher, or a property accessor.
  var cb = function(value, context, argCount) {
    if (value == null) return _.identity;
    if (_.isFunction(value)) return optimizeCb(value, context, argCount);
    if (_.isObject(value)) return _.matcher(value);
    return _.property(value);
  };
  _.iteratee = function(value, context) {
    return cb(value, context, Infinity);
  };

  // An internal function for creating assigner functions.
  var createAssigner = function(keysFunc, undefinedOnly) {
    return function(obj) {
      var length = arguments.length;
      if (length < 2 || obj == null) return obj;
      for (var index = 1; index < length; index++) {
        var source = arguments[index],
            keys = keysFunc(source),
            l = keys.length;
        for (var i = 0; i < l; i++) {
          var key = keys[i];
          if (!undefinedOnly || obj[key] === void 0) obj[key] = source[key];
        }
      }
      return obj;
    };
  };

  // An internal function for creating a new object that inherits from another.
  var baseCreate = function(prototype) {
    if (!_.isObject(prototype)) return {};
    if (nativeCreate) return nativeCreate(prototype);
    Ctor.prototype = prototype;
    var result = new Ctor;
    Ctor.prototype = null;
    return result;
  };

  var property = function(key) {
    return function(obj) {
      return obj == null ? void 0 : obj[key];
    };
  };

  // Helper for collection methods to determine whether a collection
  // should be iterated as an array or as an object
  // Related: http://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength
  // Avoids a very nasty iOS 8 JIT bug on ARM-64. #2094
  var MAX_ARRAY_INDEX = Math.pow(2, 53) - 1;
  var getLength = property('length');
  var isArrayLike = function(collection) {
    var length = getLength(collection);
    return typeof length == 'number' && length >= 0 && length <= MAX_ARRAY_INDEX;
  };

  // Collection Functions
  // --------------------

  // The cornerstone, an `each` implementation, aka `forEach`.
  // Handles raw objects in addition to array-likes. Treats all
  // sparse array-likes as if they were dense.
  _.each = _.forEach = function(obj, iteratee, context) {
    iteratee = optimizeCb(iteratee, context);
    var i, length;
    if (isArrayLike(obj)) {
      for (i = 0, length = obj.length; i < length; i++) {
        iteratee(obj[i], i, obj);
      }
    } else {
      var keys = _.keys(obj);
      for (i = 0, length = keys.length; i < length; i++) {
        iteratee(obj[keys[i]], keys[i], obj);
      }
    }
    return obj;
  };

  // Return the results of applying the iteratee to each element.
  _.map = _.collect = function(obj, iteratee, context) {
    iteratee = cb(iteratee, context);
    var keys = !isArrayLike(obj) && _.keys(obj),
        length = (keys || obj).length,
        results = Array(length);
    for (var index = 0; index < length; index++) {
      var currentKey = keys ? keys[index] : index;
      results[index] = iteratee(obj[currentKey], currentKey, obj);
    }
    return results;
  };

  // Create a reducing function iterating left or right.
  function createReduce(dir) {
    // Optimized iterator function as using arguments.length
    // in the main function will deoptimize the, see #1991.
    function iterator(obj, iteratee, memo, keys, index, length) {
      for (; index >= 0 && index < length; index += dir) {
        var currentKey = keys ? keys[index] : index;
        memo = iteratee(memo, obj[currentKey], currentKey, obj);
      }
      return memo;
    }

    return function(obj, iteratee, memo, context) {
      iteratee = optimizeCb(iteratee, context, 4);
      var keys = !isArrayLike(obj) && _.keys(obj),
          length = (keys || obj).length,
          index = dir > 0 ? 0 : length - 1;
      // Determine the initial value if none is provided.
      if (arguments.length < 3) {
        memo = obj[keys ? keys[index] : index];
        index += dir;
      }
      return iterator(obj, iteratee, memo, keys, index, length);
    };
  }

  // **Reduce** builds up a single result from a list of values, aka `inject`,
  // or `foldl`.
  _.reduce = _.foldl = _.inject = createReduce(1);

  // The right-associative version of reduce, also known as `foldr`.
  _.reduceRight = _.foldr = createReduce(-1);

  // Return the first value which passes a truth test. Aliased as `detect`.
  _.find = _.detect = function(obj, predicate, context) {
    var key;
    if (isArrayLike(obj)) {
      key = _.findIndex(obj, predicate, context);
    } else {
      key = _.findKey(obj, predicate, context);
    }
    if (key !== void 0 && key !== -1) return obj[key];
  };

  // Return all the elements that pass a truth test.
  // Aliased as `select`.
  _.filter = _.select = function(obj, predicate, context) {
    var results = [];
    predicate = cb(predicate, context);
    _.each(obj, function(value, index, list) {
      if (predicate(value, index, list)) results.push(value);
    });
    return results;
  };

  // Return all the elements for which a truth test fails.
  _.reject = function(obj, predicate, context) {
    return _.filter(obj, _.negate(cb(predicate)), context);
  };

  // Determine whether all of the elements match a truth test.
  // Aliased as `all`.
  _.every = _.all = function(obj, predicate, context) {
    predicate = cb(predicate, context);
    var keys = !isArrayLike(obj) && _.keys(obj),
        length = (keys || obj).length;
    for (var index = 0; index < length; index++) {
      var currentKey = keys ? keys[index] : index;
      if (!predicate(obj[currentKey], currentKey, obj)) return false;
    }
    return true;
  };

  // Determine if at least one element in the object matches a truth test.
  // Aliased as `any`.
  _.some = _.any = function(obj, predicate, context) {
    predicate = cb(predicate, context);
    var keys = !isArrayLike(obj) && _.keys(obj),
        length = (keys || obj).length;
    for (var index = 0; index < length; index++) {
      var currentKey = keys ? keys[index] : index;
      if (predicate(obj[currentKey], currentKey, obj)) return true;
    }
    return false;
  };

  // Determine if the array or object contains a given item (using `===`).
  // Aliased as `includes` and `include`.
  _.contains = _.includes = _.include = function(obj, item, fromIndex, guard) {
    if (!isArrayLike(obj)) obj = _.values(obj);
    if (typeof fromIndex != 'number' || guard) fromIndex = 0;
    return _.indexOf(obj, item, fromIndex) >= 0;
  };

  // Invoke a method (with arguments) on every item in a collection.
  _.invoke = function(obj, method) {
    var args = slice.call(arguments, 2);
    var isFunc = _.isFunction(method);
    return _.map(obj, function(value) {
      var func = isFunc ? method : value[method];
      return func == null ? func : func.apply(value, args);
    });
  };

  // Convenience version of a common use case of `map`: fetching a property.
  _.pluck = function(obj, key) {
    return _.map(obj, _.property(key));
  };

  // Convenience version of a common use case of `filter`: selecting only objects
  // containing specific `key:value` pairs.
  _.where = function(obj, attrs) {
    return _.filter(obj, _.matcher(attrs));
  };

  // Convenience version of a common use case of `find`: getting the first object
  // containing specific `key:value` pairs.
  _.findWhere = function(obj, attrs) {
    return _.find(obj, _.matcher(attrs));
  };

  // Return the maximum element (or element-based computation).
  _.max = function(obj, iteratee, context) {
    var result = -Infinity, lastComputed = -Infinity,
        value, computed;
    if (iteratee == null && obj != null) {
      obj = isArrayLike(obj) ? obj : _.values(obj);
      for (var i = 0, length = obj.length; i < length; i++) {
        value = obj[i];
        if (value > result) {
          result = value;
        }
      }
    } else {
      iteratee = cb(iteratee, context);
      _.each(obj, function(value, index, list) {
        computed = iteratee(value, index, list);
        if (computed > lastComputed || computed === -Infinity && result === -Infinity) {
          result = value;
          lastComputed = computed;
        }
      });
    }
    return result;
  };

  // Return the minimum element (or element-based computation).
  _.min = function(obj, iteratee, context) {
    var result = Infinity, lastComputed = Infinity,
        value, computed;
    if (iteratee == null && obj != null) {
      obj = isArrayLike(obj) ? obj : _.values(obj);
      for (var i = 0, length = obj.length; i < length; i++) {
        value = obj[i];
        if (value < result) {
          result = value;
        }
      }
    } else {
      iteratee = cb(iteratee, context);
      _.each(obj, function(value, index, list) {
        computed = iteratee(value, index, list);
        if (computed < lastComputed || computed === Infinity && result === Infinity) {
          result = value;
          lastComputed = computed;
        }
      });
    }
    return result;
  };

  // Shuffle a collection, using the modern version of the
  // [Fisher-Yates shuffle](http://en.wikipedia.org/wiki/Fisher–Yates_shuffle).
  _.shuffle = function(obj) {
    var set = isArrayLike(obj) ? obj : _.values(obj);
    var length = set.length;
    var shuffled = Array(length);
    for (var index = 0, rand; index < length; index++) {
      rand = _.random(0, index);
      if (rand !== index) shuffled[index] = shuffled[rand];
      shuffled[rand] = set[index];
    }
    return shuffled;
  };

  // Sample **n** random values from a collection.
  // If **n** is not specified, returns a single random element.
  // The internal `guard` argument allows it to work with `map`.
  _.sample = function(obj, n, guard) {
    if (n == null || guard) {
      if (!isArrayLike(obj)) obj = _.values(obj);
      return obj[_.random(obj.length - 1)];
    }
    return _.shuffle(obj).slice(0, Math.max(0, n));
  };

  // Sort the object's values by a criterion produced by an iteratee.
  _.sortBy = function(obj, iteratee, context) {
    iteratee = cb(iteratee, context);
    return _.pluck(_.map(obj, function(value, index, list) {
      return {
        value: value,
        index: index,
        criteria: iteratee(value, index, list)
      };
    }).sort(function(left, right) {
      var a = left.criteria;
      var b = right.criteria;
      if (a !== b) {
        if (a > b || a === void 0) return 1;
        if (a < b || b === void 0) return -1;
      }
      return left.index - right.index;
    }), 'value');
  };

  // An internal function used for aggregate "group by" operations.
  var group = function(behavior) {
    return function(obj, iteratee, context) {
      var result = {};
      iteratee = cb(iteratee, context);
      _.each(obj, function(value, index) {
        var key = iteratee(value, index, obj);
        behavior(result, value, key);
      });
      return result;
    };
  };

  // Groups the object's values by a criterion. Pass either a string attribute
  // to group by, or a function that returns the criterion.
  _.groupBy = group(function(result, value, key) {
    if (_.has(result, key)) result[key].push(value); else result[key] = [value];
  });

  // Indexes the object's values by a criterion, similar to `groupBy`, but for
  // when you know that your index values will be unique.
  _.indexBy = group(function(result, value, key) {
    result[key] = value;
  });

  // Counts instances of an object that group by a certain criterion. Pass
  // either a string attribute to count by, or a function that returns the
  // criterion.
  _.countBy = group(function(result, value, key) {
    if (_.has(result, key)) result[key]++; else result[key] = 1;
  });

  // Safely create a real, live array from anything iterable.
  _.toArray = function(obj) {
    if (!obj) return [];
    if (_.isArray(obj)) return slice.call(obj);
    if (isArrayLike(obj)) return _.map(obj, _.identity);
    return _.values(obj);
  };

  // Return the number of elements in an object.
  _.size = function(obj) {
    if (obj == null) return 0;
    return isArrayLike(obj) ? obj.length : _.keys(obj).length;
  };

  // Split a collection into two arrays: one whose elements all satisfy the given
  // predicate, and one whose elements all do not satisfy the predicate.
  _.partition = function(obj, predicate, context) {
    predicate = cb(predicate, context);
    var pass = [], fail = [];
    _.each(obj, function(value, key, obj) {
      (predicate(value, key, obj) ? pass : fail).push(value);
    });
    return [pass, fail];
  };

  // Array Functions
  // ---------------

  // Get the first element of an array. Passing **n** will return the first N
  // values in the array. Aliased as `head` and `take`. The **guard** check
  // allows it to work with `_.map`.
  _.first = _.head = _.take = function(array, n, guard) {
    if (array == null) return void 0;
    if (n == null || guard) return array[0];
    return _.initial(array, array.length - n);
  };

  // Returns everything but the last entry of the array. Especially useful on
  // the arguments object. Passing **n** will return all the values in
  // the array, excluding the last N.
  _.initial = function(array, n, guard) {
    return slice.call(array, 0, Math.max(0, array.length - (n == null || guard ? 1 : n)));
  };

  // Get the last element of an array. Passing **n** will return the last N
  // values in the array.
  _.last = function(array, n, guard) {
    if (array == null) return void 0;
    if (n == null || guard) return array[array.length - 1];
    return _.rest(array, Math.max(0, array.length - n));
  };

  // Returns everything but the first entry of the array. Aliased as `tail` and `drop`.
  // Especially useful on the arguments object. Passing an **n** will return
  // the rest N values in the array.
  _.rest = _.tail = _.drop = function(array, n, guard) {
    return slice.call(array, n == null || guard ? 1 : n);
  };

  // Trim out all falsy values from an array.
  _.compact = function(array) {
    return _.filter(array, _.identity);
  };

  // Internal implementation of a recursive `flatten` function.
  var flatten = function(input, shallow, strict, startIndex) {
    var output = [], idx = 0;
    for (var i = startIndex || 0, length = getLength(input); i < length; i++) {
      var value = input[i];
      if (isArrayLike(value) && (_.isArray(value) || _.isArguments(value))) {
        //flatten current level of array or arguments object
        if (!shallow) value = flatten(value, shallow, strict);
        var j = 0, len = value.length;
        output.length += len;
        while (j < len) {
          output[idx++] = value[j++];
        }
      } else if (!strict) {
        output[idx++] = value;
      }
    }
    return output;
  };

  // Flatten out an array, either recursively (by default), or just one level.
  _.flatten = function(array, shallow) {
    return flatten(array, shallow, false);
  };

  // Return a version of the array that does not contain the specified value(s).
  _.without = function(array) {
    return _.difference(array, slice.call(arguments, 1));
  };

  // Produce a duplicate-free version of the array. If the array has already
  // been sorted, you have the option of using a faster algorithm.
  // Aliased as `unique`.
  _.uniq = _.unique = function(array, isSorted, iteratee, context) {
    if (!_.isBoolean(isSorted)) {
      context = iteratee;
      iteratee = isSorted;
      isSorted = false;
    }
    if (iteratee != null) iteratee = cb(iteratee, context);
    var result = [];
    var seen = [];
    for (var i = 0, length = getLength(array); i < length; i++) {
      var value = array[i],
          computed = iteratee ? iteratee(value, i, array) : value;
      if (isSorted) {
        if (!i || seen !== computed) result.push(value);
        seen = computed;
      } else if (iteratee) {
        if (!_.contains(seen, computed)) {
          seen.push(computed);
          result.push(value);
        }
      } else if (!_.contains(result, value)) {
        result.push(value);
      }
    }
    return result;
  };

  // Produce an array that contains the union: each distinct element from all of
  // the passed-in arrays.
  _.union = function() {
    return _.uniq(flatten(arguments, true, true));
  };

  // Produce an array that contains every item shared between all the
  // passed-in arrays.
  _.intersection = function(array) {
    var result = [];
    var argsLength = arguments.length;
    for (var i = 0, length = getLength(array); i < length; i++) {
      var item = array[i];
      if (_.contains(result, item)) continue;
      for (var j = 1; j < argsLength; j++) {
        if (!_.contains(arguments[j], item)) break;
      }
      if (j === argsLength) result.push(item);
    }
    return result;
  };

  // Take the difference between one array and a number of other arrays.
  // Only the elements present in just the first array will remain.
  _.difference = function(array) {
    var rest = flatten(arguments, true, true, 1);
    return _.filter(array, function(value){
      return !_.contains(rest, value);
    });
  };

  // Zip together multiple lists into a single array -- elements that share
  // an index go together.
  _.zip = function() {
    return _.unzip(arguments);
  };

  // Complement of _.zip. Unzip accepts an array of arrays and groups
  // each array's elements on shared indices
  _.unzip = function(array) {
    var length = array && _.max(array, getLength).length || 0;
    var result = Array(length);

    for (var index = 0; index < length; index++) {
      result[index] = _.pluck(array, index);
    }
    return result;
  };

  // Converts lists into objects. Pass either a single array of `[key, value]`
  // pairs, or two parallel arrays of the same length -- one of keys, and one of
  // the corresponding values.
  _.object = function(list, values) {
    var result = {};
    for (var i = 0, length = getLength(list); i < length; i++) {
      if (values) {
        result[list[i]] = values[i];
      } else {
        result[list[i][0]] = list[i][1];
      }
    }
    return result;
  };

  // Generator function to create the findIndex and findLastIndex functions
  function createPredicateIndexFinder(dir) {
    return function(array, predicate, context) {
      predicate = cb(predicate, context);
      var length = getLength(array);
      var index = dir > 0 ? 0 : length - 1;
      for (; index >= 0 && index < length; index += dir) {
        if (predicate(array[index], index, array)) return index;
      }
      return -1;
    };
  }

  // Returns the first index on an array-like that passes a predicate test
  _.findIndex = createPredicateIndexFinder(1);
  _.findLastIndex = createPredicateIndexFinder(-1);

  // Use a comparator function to figure out the smallest index at which
  // an object should be inserted so as to maintain order. Uses binary search.
  _.sortedIndex = function(array, obj, iteratee, context) {
    iteratee = cb(iteratee, context, 1);
    var value = iteratee(obj);
    var low = 0, high = getLength(array);
    while (low < high) {
      var mid = Math.floor((low + high) / 2);
      if (iteratee(array[mid]) < value) low = mid + 1; else high = mid;
    }
    return low;
  };

  // Generator function to create the indexOf and lastIndexOf functions
  function createIndexFinder(dir, predicateFind, sortedIndex) {
    return function(array, item, idx) {
      var i = 0, length = getLength(array);
      if (typeof idx == 'number') {
        if (dir > 0) {
            i = idx >= 0 ? idx : Math.max(idx + length, i);
        } else {
            length = idx >= 0 ? Math.min(idx + 1, length) : idx + length + 1;
        }
      } else if (sortedIndex && idx && length) {
        idx = sortedIndex(array, item);
        return array[idx] === item ? idx : -1;
      }
      if (item !== item) {
        idx = predicateFind(slice.call(array, i, length), _.isNaN);
        return idx >= 0 ? idx + i : -1;
      }
      for (idx = dir > 0 ? i : length - 1; idx >= 0 && idx < length; idx += dir) {
        if (array[idx] === item) return idx;
      }
      return -1;
    };
  }

  // Return the position of the first occurrence of an item in an array,
  // or -1 if the item is not included in the array.
  // If the array is large and already in sort order, pass `true`
  // for **isSorted** to use binary search.
  _.indexOf = createIndexFinder(1, _.findIndex, _.sortedIndex);
  _.lastIndexOf = createIndexFinder(-1, _.findLastIndex);

  // Generate an integer Array containing an arithmetic progression. A port of
  // the native Python `range()` function. See
  // [the Python documentation](http://docs.python.org/library/functions.html#range).
  _.range = function(start, stop, step) {
    if (stop == null) {
      stop = start || 0;
      start = 0;
    }
    step = step || 1;

    var length = Math.max(Math.ceil((stop - start) / step), 0);
    var range = Array(length);

    for (var idx = 0; idx < length; idx++, start += step) {
      range[idx] = start;
    }

    return range;
  };

  // Function (ahem) Functions
  // ------------------

  // Determines whether to execute a function as a constructor
  // or a normal function with the provided arguments
  var executeBound = function(sourceFunc, boundFunc, context, callingContext, args) {
    if (!(callingContext instanceof boundFunc)) return sourceFunc.apply(context, args);
    var self = baseCreate(sourceFunc.prototype);
    var result = sourceFunc.apply(self, args);
    if (_.isObject(result)) return result;
    return self;
  };

  // Create a function bound to a given object (assigning `this`, and arguments,
  // optionally). Delegates to **ECMAScript 5**'s native `Function.bind` if
  // available.
  _.bind = function(func, context) {
    if (nativeBind && func.bind === nativeBind) return nativeBind.apply(func, slice.call(arguments, 1));
    if (!_.isFunction(func)) throw new TypeError('Bind must be called on a function');
    var args = slice.call(arguments, 2);
    var bound = function() {
      return executeBound(func, bound, context, this, args.concat(slice.call(arguments)));
    };
    return bound;
  };

  // Partially apply a function by creating a version that has had some of its
  // arguments pre-filled, without changing its dynamic `this` context. _ acts
  // as a placeholder, allowing any combination of arguments to be pre-filled.
  _.partial = function(func) {
    var boundArgs = slice.call(arguments, 1);
    var bound = function() {
      var position = 0, length = boundArgs.length;
      var args = Array(length);
      for (var i = 0; i < length; i++) {
        args[i] = boundArgs[i] === _ ? arguments[position++] : boundArgs[i];
      }
      while (position < arguments.length) args.push(arguments[position++]);
      return executeBound(func, bound, this, this, args);
    };
    return bound;
  };

  // Bind a number of an object's methods to that object. Remaining arguments
  // are the method names to be bound. Useful for ensuring that all callbacks
  // defined on an object belong to it.
  _.bindAll = function(obj) {
    var i, length = arguments.length, key;
    if (length <= 1) throw new Error('bindAll must be passed function names');
    for (i = 1; i < length; i++) {
      key = arguments[i];
      obj[key] = _.bind(obj[key], obj);
    }
    return obj;
  };

  // Memoize an expensive function by storing its results.
  _.memoize = function(func, hasher) {
    var memoize = function(key) {
      var cache = memoize.cache;
      var address = '' + (hasher ? hasher.apply(this, arguments) : key);
      if (!_.has(cache, address)) cache[address] = func.apply(this, arguments);
      return cache[address];
    };
    memoize.cache = {};
    return memoize;
  };

  // Delays a function for the given number of milliseconds, and then calls
  // it with the arguments supplied.
  _.delay = function(func, wait) {
    var args = slice.call(arguments, 2);
    return setTimeout(function(){
      return func.apply(null, args);
    }, wait);
  };

  // Defers a function, scheduling it to run after the current call stack has
  // cleared.
  _.defer = _.partial(_.delay, _, 1);

  // Returns a function, that, when invoked, will only be triggered at most once
  // during a given window of time. Normally, the throttled function will run
  // as much as it can, without ever going more than once per `wait` duration;
  // but if you'd like to disable the execution on the leading edge, pass
  // `{leading: false}`. To disable execution on the trailing edge, ditto.
  _.throttle = function(func, wait, options) {
    var context, args, result;
    var timeout = null;
    var previous = 0;
    if (!options) options = {};
    var later = function() {
      previous = options.leading === false ? 0 : _.now();
      timeout = null;
      result = func.apply(context, args);
      if (!timeout) context = args = null;
    };
    return function() {
      var now = _.now();
      if (!previous && options.leading === false) previous = now;
      var remaining = wait - (now - previous);
      context = this;
      args = arguments;
      if (remaining <= 0 || remaining > wait) {
        if (timeout) {
          clearTimeout(timeout);
          timeout = null;
        }
        previous = now;
        result = func.apply(context, args);
        if (!timeout) context = args = null;
      } else if (!timeout && options.trailing !== false) {
        timeout = setTimeout(later, remaining);
      }
      return result;
    };
  };

  // Returns a function, that, as long as it continues to be invoked, will not
  // be triggered. The function will be called after it stops being called for
  // N milliseconds. If `immediate` is passed, trigger the function on the
  // leading edge, instead of the trailing.
  _.debounce = function(func, wait, immediate) {
    var timeout, args, context, timestamp, result;

    var later = function() {
      var last = _.now() - timestamp;

      if (last < wait && last >= 0) {
        timeout = setTimeout(later, wait - last);
      } else {
        timeout = null;
        if (!immediate) {
          result = func.apply(context, args);
          if (!timeout) context = args = null;
        }
      }
    };

    return function() {
      context = this;
      args = arguments;
      timestamp = _.now();
      var callNow = immediate && !timeout;
      if (!timeout) timeout = setTimeout(later, wait);
      if (callNow) {
        result = func.apply(context, args);
        context = args = null;
      }

      return result;
    };
  };

  // Returns the first function passed as an argument to the second,
  // allowing you to adjust arguments, run code before and after, and
  // conditionally execute the original function.
  _.wrap = function(func, wrapper) {
    return _.partial(wrapper, func);
  };

  // Returns a negated version of the passed-in predicate.
  _.negate = function(predicate) {
    return function() {
      return !predicate.apply(this, arguments);
    };
  };

  // Returns a function that is the composition of a list of functions, each
  // consuming the return value of the function that follows.
  _.compose = function() {
    var args = arguments;
    var start = args.length - 1;
    return function() {
      var i = start;
      var result = args[start].apply(this, arguments);
      while (i--) result = args[i].call(this, result);
      return result;
    };
  };

  // Returns a function that will only be executed on and after the Nth call.
  _.after = function(times, func) {
    return function() {
      if (--times < 1) {
        return func.apply(this, arguments);
      }
    };
  };

  // Returns a function that will only be executed up to (but not including) the Nth call.
  _.before = function(times, func) {
    var memo;
    return function() {
      if (--times > 0) {
        memo = func.apply(this, arguments);
      }
      if (times <= 1) func = null;
      return memo;
    };
  };

  // Returns a function that will be executed at most one time, no matter how
  // often you call it. Useful for lazy initialization.
  _.once = _.partial(_.before, 2);

  // Object Functions
  // ----------------

  // Keys in IE < 9 that won't be iterated by `for key in ...` and thus missed.
  var hasEnumBug = !{toString: null}.propertyIsEnumerable('toString');
  var nonEnumerableProps = ['valueOf', 'isPrototypeOf', 'toString',
                      'propertyIsEnumerable', 'hasOwnProperty', 'toLocaleString'];

  function collectNonEnumProps(obj, keys) {
    var nonEnumIdx = nonEnumerableProps.length;
    var constructor = obj.constructor;
    var proto = (_.isFunction(constructor) && constructor.prototype) || ObjProto;

    // Constructor is a special case.
    var prop = 'constructor';
    if (_.has(obj, prop) && !_.contains(keys, prop)) keys.push(prop);

    while (nonEnumIdx--) {
      prop = nonEnumerableProps[nonEnumIdx];
      if (prop in obj && obj[prop] !== proto[prop] && !_.contains(keys, prop)) {
        keys.push(prop);
      }
    }
  }

  // Retrieve the names of an object's own properties.
  // Delegates to **ECMAScript 5**'s native `Object.keys`
  _.keys = function(obj) {
    if (!_.isObject(obj)) return [];
    if (nativeKeys) return nativeKeys(obj);
    var keys = [];
    for (var key in obj) if (_.has(obj, key)) keys.push(key);
    // Ahem, IE < 9.
    if (hasEnumBug) collectNonEnumProps(obj, keys);
    return keys;
  };

  // Retrieve all the property names of an object.
  _.allKeys = function(obj) {
    if (!_.isObject(obj)) return [];
    var keys = [];
    for (var key in obj) keys.push(key);
    // Ahem, IE < 9.
    if (hasEnumBug) collectNonEnumProps(obj, keys);
    return keys;
  };

  // Retrieve the values of an object's properties.
  _.values = function(obj) {
    var keys = _.keys(obj);
    var length = keys.length;
    var values = Array(length);
    for (var i = 0; i < length; i++) {
      values[i] = obj[keys[i]];
    }
    return values;
  };

  // Returns the results of applying the iteratee to each element of the object
  // In contrast to _.map it returns an object
  _.mapObject = function(obj, iteratee, context) {
    iteratee = cb(iteratee, context);
    var keys =  _.keys(obj),
          length = keys.length,
          results = {},
          currentKey;
      for (var index = 0; index < length; index++) {
        currentKey = keys[index];
        results[currentKey] = iteratee(obj[currentKey], currentKey, obj);
      }
      return results;
  };

  // Convert an object into a list of `[key, value]` pairs.
  _.pairs = function(obj) {
    var keys = _.keys(obj);
    var length = keys.length;
    var pairs = Array(length);
    for (var i = 0; i < length; i++) {
      pairs[i] = [keys[i], obj[keys[i]]];
    }
    return pairs;
  };

  // Invert the keys and values of an object. The values must be serializable.
  _.invert = function(obj) {
    var result = {};
    var keys = _.keys(obj);
    for (var i = 0, length = keys.length; i < length; i++) {
      result[obj[keys[i]]] = keys[i];
    }
    return result;
  };

  // Return a sorted list of the function names available on the object.
  // Aliased as `methods`
  _.functions = _.methods = function(obj) {
    var names = [];
    for (var key in obj) {
      if (_.isFunction(obj[key])) names.push(key);
    }
    return names.sort();
  };

  // Extend a given object with all the properties in passed-in object(s).
  _.extend = createAssigner(_.allKeys);

  // Assigns a given object with all the own properties in the passed-in object(s)
  // (https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
  _.extendOwn = _.assign = createAssigner(_.keys);

  // Returns the first key on an object that passes a predicate test
  _.findKey = function(obj, predicate, context) {
    predicate = cb(predicate, context);
    var keys = _.keys(obj), key;
    for (var i = 0, length = keys.length; i < length; i++) {
      key = keys[i];
      if (predicate(obj[key], key, obj)) return key;
    }
  };

  // Return a copy of the object only containing the whitelisted properties.
  _.pick = function(object, oiteratee, context) {
    var result = {}, obj = object, iteratee, keys;
    if (obj == null) return result;
    if (_.isFunction(oiteratee)) {
      keys = _.allKeys(obj);
      iteratee = optimizeCb(oiteratee, context);
    } else {
      keys = flatten(arguments, false, false, 1);
      iteratee = function(value, key, obj) { return key in obj; };
      obj = Object(obj);
    }
    for (var i = 0, length = keys.length; i < length; i++) {
      var key = keys[i];
      var value = obj[key];
      if (iteratee(value, key, obj)) result[key] = value;
    }
    return result;
  };

   // Return a copy of the object without the blacklisted properties.
  _.omit = function(obj, iteratee, context) {
    if (_.isFunction(iteratee)) {
      iteratee = _.negate(iteratee);
    } else {
      var keys = _.map(flatten(arguments, false, false, 1), String);
      iteratee = function(value, key) {
        return !_.contains(keys, key);
      };
    }
    return _.pick(obj, iteratee, context);
  };

  // Fill in a given object with default properties.
  _.defaults = createAssigner(_.allKeys, true);

  // Creates an object that inherits from the given prototype object.
  // If additional properties are provided then they will be added to the
  // created object.
  _.create = function(prototype, props) {
    var result = baseCreate(prototype);
    if (props) _.extendOwn(result, props);
    return result;
  };

  // Create a (shallow-cloned) duplicate of an object.
  _.clone = function(obj) {
    if (!_.isObject(obj)) return obj;
    return _.isArray(obj) ? obj.slice() : _.extend({}, obj);
  };

  // Invokes interceptor with the obj, and then returns obj.
  // The primary purpose of this method is to "tap into" a method chain, in
  // order to perform operations on intermediate results within the chain.
  _.tap = function(obj, interceptor) {
    interceptor(obj);
    return obj;
  };

  // Returns whether an object has a given set of `key:value` pairs.
  _.isMatch = function(object, attrs) {
    var keys = _.keys(attrs), length = keys.length;
    if (object == null) return !length;
    var obj = Object(object);
    for (var i = 0; i < length; i++) {
      var key = keys[i];
      if (attrs[key] !== obj[key] || !(key in obj)) return false;
    }
    return true;
  };


  // Internal recursive comparison function for `isEqual`.
  var eq = function(a, b, aStack, bStack) {
    // Identical objects are equal. `0 === -0`, but they aren't identical.
    // See the [Harmony `egal` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).
    if (a === b) return a !== 0 || 1 / a === 1 / b;
    // A strict comparison is necessary because `null == undefined`.
    if (a == null || b == null) return a === b;
    // Unwrap any wrapped objects.
    if (a instanceof _) a = a._wrapped;
    if (b instanceof _) b = b._wrapped;
    // Compare `[[Class]]` names.
    var className = toString.call(a);
    if (className !== toString.call(b)) return false;
    switch (className) {
      // Strings, numbers, regular expressions, dates, and booleans are compared by value.
      case '[object RegExp]':
      // RegExps are coerced to strings for comparison (Note: '' + /a/i === '/a/i')
      case '[object String]':
        // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
        // equivalent to `new String("5")`.
        return '' + a === '' + b;
      case '[object Number]':
        // `NaN`s are equivalent, but non-reflexive.
        // Object(NaN) is equivalent to NaN
        if (+a !== +a) return +b !== +b;
        // An `egal` comparison is performed for other numeric values.
        return +a === 0 ? 1 / +a === 1 / b : +a === +b;
      case '[object Date]':
      case '[object Boolean]':
        // Coerce dates and booleans to numeric primitive values. Dates are compared by their
        // millisecond representations. Note that invalid dates with millisecond representations
        // of `NaN` are not equivalent.
        return +a === +b;
    }

    var areArrays = className === '[object Array]';
    if (!areArrays) {
      if (typeof a != 'object' || typeof b != 'object') return false;

      // Objects with different constructors are not equivalent, but `Object`s or `Array`s
      // from different frames are.
      var aCtor = a.constructor, bCtor = b.constructor;
      if (aCtor !== bCtor && !(_.isFunction(aCtor) && aCtor instanceof aCtor &&
                               _.isFunction(bCtor) && bCtor instanceof bCtor)
                          && ('constructor' in a && 'constructor' in b)) {
        return false;
      }
    }
    // Assume equality for cyclic structures. The algorithm for detecting cyclic
    // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.

    // Initializing stack of traversed objects.
    // It's done here since we only need them for objects and arrays comparison.
    aStack = aStack || [];
    bStack = bStack || [];
    var length = aStack.length;
    while (length--) {
      // Linear search. Performance is inversely proportional to the number of
      // unique nested structures.
      if (aStack[length] === a) return bStack[length] === b;
    }

    // Add the first object to the stack of traversed objects.
    aStack.push(a);
    bStack.push(b);

    // Recursively compare objects and arrays.
    if (areArrays) {
      // Compare array lengths to determine if a deep comparison is necessary.
      length = a.length;
      if (length !== b.length) return false;
      // Deep compare the contents, ignoring non-numeric properties.
      while (length--) {
        if (!eq(a[length], b[length], aStack, bStack)) return false;
      }
    } else {
      // Deep compare objects.
      var keys = _.keys(a), key;
      length = keys.length;
      // Ensure that both objects contain the same number of properties before comparing deep equality.
      if (_.keys(b).length !== length) return false;
      while (length--) {
        // Deep compare each member
        key = keys[length];
        if (!(_.has(b, key) && eq(a[key], b[key], aStack, bStack))) return false;
      }
    }
    // Remove the first object from the stack of traversed objects.
    aStack.pop();
    bStack.pop();
    return true;
  };

  // Perform a deep comparison to check if two objects are equal.
  _.isEqual = function(a, b) {
    return eq(a, b);
  };

  // Is a given array, string, or object empty?
  // An "empty" object has no enumerable own-properties.
  _.isEmpty = function(obj) {
    if (obj == null) return true;
    if (isArrayLike(obj) && (_.isArray(obj) || _.isString(obj) || _.isArguments(obj))) return obj.length === 0;
    return _.keys(obj).length === 0;
  };

  // Is a given value a DOM element?
  _.isElement = function(obj) {
    return !!(obj && obj.nodeType === 1);
  };

  // Is a given value an array?
  // Delegates to ECMA5's native Array.isArray
  _.isArray = nativeIsArray || function(obj) {
    return toString.call(obj) === '[object Array]';
  };

  // Is a given variable an object?
  _.isObject = function(obj) {
    var type = typeof obj;
    return type === 'function' || type === 'object' && !!obj;
  };

  // Add some isType methods: isArguments, isFunction, isString, isNumber, isDate, isRegExp, isError.
  _.each(['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp', 'Error'], function(name) {
    _['is' + name] = function(obj) {
      return toString.call(obj) === '[object ' + name + ']';
    };
  });

  // Define a fallback version of the method in browsers (ahem, IE < 9), where
  // there isn't any inspectable "Arguments" type.
  if (!_.isArguments(arguments)) {
    _.isArguments = function(obj) {
      return _.has(obj, 'callee');
    };
  }

  // Optimize `isFunction` if appropriate. Work around some typeof bugs in old v8,
  // IE 11 (#1621), and in Safari 8 (#1929).
  if (typeof /./ != 'function' && typeof Int8Array != 'object') {
    _.isFunction = function(obj) {
      return typeof obj == 'function' || false;
    };
  }

  // Is a given object a finite number?
  _.isFinite = function(obj) {
    return isFinite(obj) && !isNaN(parseFloat(obj));
  };

  // Is the given value `NaN`? (NaN is the only number which does not equal itself).
  _.isNaN = function(obj) {
    return _.isNumber(obj) && obj !== +obj;
  };

  // Is a given value a boolean?
  _.isBoolean = function(obj) {
    return obj === true || obj === false || toString.call(obj) === '[object Boolean]';
  };

  // Is a given value equal to null?
  _.isNull = function(obj) {
    return obj === null;
  };

  // Is a given variable undefined?
  _.isUndefined = function(obj) {
    return obj === void 0;
  };

  // Shortcut function for checking if an object has a given property directly
  // on itself (in other words, not on a prototype).
  _.has = function(obj, key) {
    return obj != null && hasOwnProperty.call(obj, key);
  };

  // Utility Functions
  // -----------------

  // Run Underscore.js in *noConflict* mode, returning the `_` variable to its
  // previous owner. Returns a reference to the Underscore object.
  _.noConflict = function() {
    root._ = previousUnderscore;
    return this;
  };

  // Keep the identity function around for default iteratees.
  _.identity = function(value) {
    return value;
  };

  // Predicate-generating functions. Often useful outside of Underscore.
  _.constant = function(value) {
    return function() {
      return value;
    };
  };

  _.noop = function(){};

  _.property = property;

  // Generates a function for a given object that returns a given property.
  _.propertyOf = function(obj) {
    return obj == null ? function(){} : function(key) {
      return obj[key];
    };
  };

  // Returns a predicate for checking whether an object has a given set of
  // `key:value` pairs.
  _.matcher = _.matches = function(attrs) {
    attrs = _.extendOwn({}, attrs);
    return function(obj) {
      return _.isMatch(obj, attrs);
    };
  };

  // Run a function **n** times.
  _.times = function(n, iteratee, context) {
    var accum = Array(Math.max(0, n));
    iteratee = optimizeCb(iteratee, context, 1);
    for (var i = 0; i < n; i++) accum[i] = iteratee(i);
    return accum;
  };

  // Return a random integer between min and max (inclusive).
  _.random = function(min, max) {
    if (max == null) {
      max = min;
      min = 0;
    }
    return min + Math.floor(Math.random() * (max - min + 1));
  };

  // A (possibly faster) way to get the current timestamp as an integer.
  _.now = Date.now || function() {
    return new Date().getTime();
  };

   // List of HTML entities for escaping.
  var escapeMap = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#x27;',
    '`': '&#x60;'
  };
  var unescapeMap = _.invert(escapeMap);

  // Functions for escaping and unescaping strings to/from HTML interpolation.
  var createEscaper = function(map) {
    var escaper = function(match) {
      return map[match];
    };
    // Regexes for identifying a key that needs to be escaped
    var source = '(?:' + _.keys(map).join('|') + ')';
    var testRegexp = RegExp(source);
    var replaceRegexp = RegExp(source, 'g');
    return function(string) {
      string = string == null ? '' : '' + string;
      return testRegexp.test(string) ? string.replace(replaceRegexp, escaper) : string;
    };
  };
  _.escape = createEscaper(escapeMap);
  _.unescape = createEscaper(unescapeMap);

  // If the value of the named `property` is a function then invoke it with the
  // `object` as context; otherwise, return it.
  _.result = function(object, property, fallback) {
    var value = object == null ? void 0 : object[property];
    if (value === void 0) {
      value = fallback;
    }
    return _.isFunction(value) ? value.call(object) : value;
  };

  // Generate a unique integer id (unique within the entire client session).
  // Useful for temporary DOM ids.
  var idCounter = 0;
  _.uniqueId = function(prefix) {
    var id = ++idCounter + '';
    return prefix ? prefix + id : id;
  };

  // By default, Underscore uses ERB-style template delimiters, change the
  // following template settings to use alternative delimiters.
  _.templateSettings = {
    evaluate    : /<%([\s\S]+?)%>/g,
    interpolate : /<%=([\s\S]+?)%>/g,
    escape      : /<%-([\s\S]+?)%>/g
  };

  // When customizing `templateSettings`, if you don't want to define an
  // interpolation, evaluation or escaping regex, we need one that is
  // guaranteed not to match.
  var noMatch = /(.)^/;

  // Certain characters need to be escaped so that they can be put into a
  // string literal.
  var escapes = {
    "'":      "'",
    '\\':     '\\',
    '\r':     'r',
    '\n':     'n',
    '\u2028': 'u2028',
    '\u2029': 'u2029'
  };

  var escaper = /\\|'|\r|\n|\u2028|\u2029/g;

  var escapeChar = function(match) {
    return '\\' + escapes[match];
  };

  // JavaScript micro-templating, similar to John Resig's implementation.
  // Underscore templating handles arbitrary delimiters, preserves whitespace,
  // and correctly escapes quotes within interpolated code.
  // NB: `oldSettings` only exists for backwards compatibility.
  _.template = function(text, settings, oldSettings) {
    if (!settings && oldSettings) settings = oldSettings;
    settings = _.defaults({}, settings, _.templateSettings);

    // Combine delimiters into one regular expression via alternation.
    var matcher = RegExp([
      (settings.escape || noMatch).source,
      (settings.interpolate || noMatch).source,
      (settings.evaluate || noMatch).source
    ].join('|') + '|$', 'g');

    // Compile the template source, escaping string literals appropriately.
    var index = 0;
    var source = "__p+='";
    text.replace(matcher, function(match, escape, interpolate, evaluate, offset) {
      source += text.slice(index, offset).replace(escaper, escapeChar);
      index = offset + match.length;

      if (escape) {
        source += "'+\n((__t=(" + escape + "))==null?'':_.escape(__t))+\n'";
      } else if (interpolate) {
        source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'";
      } else if (evaluate) {
        source += "';\n" + evaluate + "\n__p+='";
      }

      // Adobe VMs need the match returned to produce the correct offest.
      return match;
    });
    source += "';\n";

    // If a variable is not specified, place data values in local scope.
    if (!settings.variable) source = 'with(obj||{}){\n' + source + '}\n';

    source = "var __t,__p='',__j=Array.prototype.join," +
      "print=function(){__p+=__j.call(arguments,'');};\n" +
      source + 'return __p;\n';

    try {
      var render = new Function(settings.variable || 'obj', '_', source);
    } catch (e) {
      e.source = source;
      throw e;
    }

    var template = function(data) {
      return render.call(this, data, _);
    };

    // Provide the compiled source as a convenience for precompilation.
    var argument = settings.variable || 'obj';
    template.source = 'function(' + argument + '){\n' + source + '}';

    return template;
  };

  // Add a "chain" function. Start chaining a wrapped Underscore object.
  _.chain = function(obj) {
    var instance = _(obj);
    instance._chain = true;
    return instance;
  };

  // OOP
  // ---------------
  // If Underscore is called as a function, it returns a wrapped object that
  // can be used OO-style. This wrapper holds altered versions of all the
  // underscore functions. Wrapped objects may be chained.

  // Helper function to continue chaining intermediate results.
  var result = function(instance, obj) {
    return instance._chain ? _(obj).chain() : obj;
  };

  // Add your own custom functions to the Underscore object.
  _.mixin = function(obj) {
    _.each(_.functions(obj), function(name) {
      var func = _[name] = obj[name];
      _.prototype[name] = function() {
        var args = [this._wrapped];
        push.apply(args, arguments);
        return result(this, func.apply(_, args));
      };
    });
  };

  // Add all of the Underscore functions to the wrapper object.
  _.mixin(_);

  // Add all mutator Array functions to the wrapper.
  _.each(['pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift'], function(name) {
    var method = ArrayProto[name];
    _.prototype[name] = function() {
      var obj = this._wrapped;
      method.apply(obj, arguments);
      if ((name === 'shift' || name === 'splice') && obj.length === 0) delete obj[0];
      return result(this, obj);
    };
  });

  // Add all accessor Array functions to the wrapper.
  _.each(['concat', 'join', 'slice'], function(name) {
    var method = ArrayProto[name];
    _.prototype[name] = function() {
      return result(this, method.apply(this._wrapped, arguments));
    };
  });

  // Extracts the result from a wrapped and chained object.
  _.prototype.value = function() {
    return this._wrapped;
  };

  // Provide unwrapping proxy for some methods used in engine operations
  // such as arithmetic and JSON stringification.
  _.prototype.valueOf = _.prototype.toJSON = _.prototype.value;

  _.prototype.toString = function() {
    return '' + this._wrapped;
  };

  // AMD registration happens at the end for compatibility with AMD loaders
  // that may not enforce next-turn semantics on modules. Even though general
  // practice for AMD registration is to be anonymous, underscore registers
  // as a named module because, like jQuery, it is a base library that is
  // popular enough to be bundled in a third party lib, but not be part of
  // an AMD load request. Those cases could generate an error when an
  // anonymous define() is called outside of a loader request.
  if (typeof define === 'function' && define.amd) {
    define('underscore', [], function() {
      return _;
    });
  }
}.call(this));

},{}],3:[function(require,module,exports){
'use strict';
/*global window */

Object.defineProperty(exports, '__esModule', {
	value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _libBackbone = require('./../../lib/backbone');

var _libBackbone2 = _interopRequireDefault(_libBackbone);

var _libLodash = require('./../../lib/lodash');

var _libLodash2 = _interopRequireDefault(_libLodash);

var _viewCoreBase = require('./../view/core/base');

var _viewCoreBase2 = _interopRequireDefault(_viewCoreBase);

var _viewHome = require('./../view/home');

var _viewHome2 = _interopRequireDefault(_viewHome);

var _viewAds = require('./../view/ads');

var _viewAds2 = _interopRequireDefault(_viewAds);

var _servicesMediator = require('./../../services/mediator');

var _servicesMediator2 = _interopRequireDefault(_servicesMediator);

var win = window,
    router,
    Router = _libBackbone2['default'].Router.extend({

	routes: {
		'': 'home',
		'ads-page': 'ads-page'
	},

	'home': function home() {
		new _viewHome2['default']();
	},

	'ads-page': function adsPage() {
		new _viewAds2['default']();
	},

	//page: function () {
	//	new win.APP.BB.PageView();
	//},

	url: {
		popup: 'show-popup=popup'
	},

	getAction: function getAction() {

		var router = this,
		    e = window.event || {},
		    newURL = e.newURL || '',
		    oldURL = e.oldURL || '',
		    popupPart = router.url.popup,
		    viewAction;

		if (newURL.indexOf(popupPart) !== -1) {
			viewAction = 'showPopup';
		}

		if (oldURL.indexOf(popupPart) !== -1) {
			viewAction = 'hidePopup';
		}

		// other action is here
		return viewAction;
	},

	constructor: function constructor() {

		var router = this,
		    originalFunctions = {},
		    proto = Router.prototype;

		_libLodash2['default'].each(router.routes, function (value) {

			originalFunctions[value] = proto[value];

			proto[value] = function () {

				var viewAction = router.getAction();

				if (!viewAction) {
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

		return _libBackbone2['default'].Router.prototype.constructor.apply(router, arguments);
	},

	routeToPopup: function routeToPopup() {
		this.navigate(_libBackbone2['default'].history.fragment + '?' + this.url.popup, false);
	},

	hidePopup: function hidePopup() {

		var router = this;

		if (_libBackbone2['default'].history.fragment.indexOf(router.url.popup) !== -1) {
			win.history.back();
		} else {
			router.publish('hide-popup');
		}
	}

});

router = new Router();

_servicesMediator2['default'].installTo(router);

router.subscribe('route-to-popup', router.routeToPopup);
router.subscribe('router-hide-popup', router.hidePopup);
router.subscribe('navigate', router.navigate);

exports['default'] = router;
module.exports = exports['default'];

},{"./../../lib/backbone":11,"./../../lib/lodash":15,"./../../services/mediator":24,"./../view/ads":4,"./../view/core/base":5,"./../view/home":8}],4:[function(require,module,exports){
'use strict';
/*global window */

Object.defineProperty(exports, '__esModule', {
	value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _libJquery = require('./../../lib/jquery');

var _libJquery2 = _interopRequireDefault(_libJquery);

var _servicesInfo = require('./../../services/info');

var _servicesInfo2 = _interopRequireDefault(_servicesInfo);

var _servicesLang = require('./../../services/lang');

var _servicesLang2 = _interopRequireDefault(_servicesLang);

var _servicesDevice = require('./../../services/device');

var _servicesDevice2 = _interopRequireDefault(_servicesDevice);

var _servicesTemplateMaster = require('./../../services/template-master');

var _servicesTemplateMaster2 = _interopRequireDefault(_servicesTemplateMaster);

var _coreBase = require('./core/base');

var _coreBase2 = _interopRequireDefault(_coreBase);

var _servicesAndroidAds = require('./../../services/android-ads');

var _servicesAndroidAds2 = _interopRequireDefault(_servicesAndroidAds);

var win = window,
    AdsView = _coreBase2['default'].extend({

	events: {},

	getRandomColor: function getRandomColor(number) {

		var color = (Math.random() * 255 | 0).toString(number || 16);

		return color.length < 2 ? 0 + color : color;
	},

	getRandomHEXColor: function getRandomHEXColor() {

		var view = this,
		    getRandomColor = view.getRandomColor;

		return [getRandomColor(), getRandomColor(), getRandomColor()].join('');
	},

	initialize: function initialize() {

		var view = this,
		    width = _servicesDevice2['default'].get('width'),
		    height = _servicesDevice2['default'].get('height'),
		    bgColor = view.getRandomHEXColor(),
		    textColor = view.getRandomHEXColor();

		view.setElement(_servicesTemplateMaster2['default'].tmplFn['ads-page']({
			width: width,
			height: height,
			src: 'http://dummyimage.com/' + width + 'x' + height + '/' + bgColor + '/' + textColor + '.png&text=' + Math.random()
		}));

		view.render();

		setTimeout(function () {
			_servicesAndroidAds2['default'].showAd();

			setTimeout(function () {
				view.backTo('');
			}, 30e3);
		}, 5e3);

		return _coreBase2['default'].prototype.initialize.apply(view, arguments);
	}

	//testShowPopup: function () {
	//
	//	var view = this;
	//
	//	view.showPopup({
	//		name: 'popup-text',
	//		//timeout: 2.5e3,
	//		sound: {
	//			sound: 'good-answer.mp3',
	//			isLoop: false,
	//			road: 3
	//		},
	//		data: {
	//			text: 'TEXT!!!!!!!!!'
	//		}
	//		//,onHide: { // see popup view source code
	//		//	fn: 'newQuestion',
	//		//	context: view
	//		//}
	//	});
	//
	//}

});

exports['default'] = AdsView;
module.exports = exports['default'];

},{"./../../lib/jquery":14,"./../../services/android-ads":19,"./../../services/device":20,"./../../services/info":21,"./../../services/lang":22,"./../../services/template-master":25,"./core/base":5}],5:[function(require,module,exports){
'use strict';
/*global window */

Object.defineProperty(exports, '__esModule', {
	value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _libBackbone = require('./../../../lib/backbone');

var _libBackbone2 = _interopRequireDefault(_libBackbone);

var _libJquery = require('./../../../lib/jquery');

var _libJquery2 = _interopRequireDefault(_libJquery);

var _libLodash = require('./../../../lib/lodash');

var _libLodash2 = _interopRequireDefault(_libLodash);

var _servicesInfo = require('./../../../services/info');

var _servicesInfo2 = _interopRequireDefault(_servicesInfo);

//import tm from './../../../services/template-master';

var _servicesUtil = require('./../../../services/util');

var _servicesUtil2 = _interopRequireDefault(_servicesUtil);

var _servicesMediator = require('./../../../services/mediator');

var _servicesMediator2 = _interopRequireDefault(_servicesMediator);

var _soundSoundMaster = require('./../../../sound/sound-master');

var _soundSoundMaster2 = _interopRequireDefault(_soundSoundMaster);

var _servicesLang = require('./../../../services/lang');

var _servicesLang2 = _interopRequireDefault(_servicesLang);

var win = window,
    doc = win.document,
    docElem = doc.documentElement,
    BaseView = _libBackbone2['default'].View.extend({

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

	initStatic: function initStatic() {

		var view = this,
		    isTouch = _servicesInfo2['default'].get('isTouch', true),
		    eventTypesIndex = Number(isTouch),
		    types = view.eventTypes,
		    fontSize,
		    proto = BaseView.prototype;

		proto.$wrapper = (0, _libJquery2['default'])(view.selectors.wrapper);

		// adjust font size
		fontSize = Math.round(14 * Math.pow(docElem.clientWidth * docElem.clientHeight / 153600, 0.5)); // 153600 = 320 * 480
		fontSize = Math.min(fontSize, 24);
		fontSize = Math.max(fontSize, 14);
		fontSize = Math.round(fontSize / 2) * 2;
		docElem.style.fontSize = fontSize + 'px';

		_servicesInfo2['default'].set('remSize', fontSize, true);

		_libLodash2['default'].each(types, function (typesArr, key) {
			types[key] = typesArr[eventTypesIndex];
		});

		(0, _libJquery2['default'])(doc.body).on('contextmenu', view.stopEvent);
	},

	constructor: function constructor() {

		var view = this,
		    proto = BaseView.prototype,
		    newEvents = {},
		    noScrollEvents = proto.extraEvents.noScroll,
		    noScrollSelector = proto.selectors.noScroll;

		view.events = _libJquery2['default'].extend({}, proto.events, view.events);

		// prepare extra events from eventTypes
		_libLodash2['default'].each(view.events, function (functionName, eventAndSelector) {
			newEvents[view.getFullEventNameAndSelector(eventAndSelector)] = functionName;
		});

		_libLodash2['default'].each(noScrollEvents, function (name) {
			newEvents[name + ' ' + noScrollSelector] = 'stopEvent';
		});

		if (newEvents.scroll === 'stopEvent') {
			newEvents.scroll = null; // let gc clean ram
			delete newEvents.scroll;
			_libLodash2['default'].each(noScrollEvents, function (name) {
				newEvents[name] = 'stopEvent';
			});
		}

		view.events = newEvents;

		view.selectors = _libJquery2['default'].extend({}, proto.selectors, view.selectors);

		view.attr = {};

		view.setClassNames();

		_servicesMediator2['default'].installTo(view);

		return _libBackbone2['default'].View.prototype.constructor.apply(view, arguments);
	},

	setClassNames: function setClassNames() {

		this.classNames = {};

		_libLodash2['default'].each(this.selectors, function (value, key) {
			this[key] = value.replace(/\./g, ' ').trim();
		}, this.classNames);
	},

	getFullEventNameAndSelector: function getFullEventNameAndSelector(eventNameAndSelector) {

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

	changeSelect: function changeSelect(e) {
		// external

		var $this = (0, _libJquery2['default'])(e.currentTarget),
		    direction = $this.hasClass('js-list-backward') ? -1 : 1,
		    groupName = $this.attr('data-group-name'),
		    $container = this.$el.find('.js-list-changed-item[data-full-list][data-group-name="' + groupName + '"]'),
		    listData = JSON.parse(decodeURI($container.attr('data-full-list'))),
		    listLength = listData.length,
		    currentKey = $container.attr('data-key'),
		    followIndex = 0,
		    followData;

		// find current index
		listData.every(function (obj, i) {
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

	destroyView: function destroyView() {

		var view = this;

		view.$el.removeData().unbind().remove().empty();

		view.remove();
		view.unbind();

		_libBackbone2['default'].View.prototype.remove.call(view);
	},

	hide: function hide() {

		var view = this,
		    $el = view.$el,
		    animationEnd = _servicesInfo2['default'].get('animationEnd', true),
		    isScreenAnimation = _servicesInfo2['default'].get('screenAnimation') === 'on',
		    deferred = _libJquery2['default'].Deferred();

		view.unsubscribe();

		view.undelegateEvents();

		if (view.unbindEventListeners) {
			view.unbindEventListeners();
		}

		if (isScreenAnimation && $el.hasClass('show-view-animation')) {
			$el.one(animationEnd, function () {
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

	render: function render() {

		var view = this;

		view.publish('hide-main-view');
		view.subscribe('hide-main-view', view.hide);

		view.$wrapper.append(view.$el);
		//view.util.setSizes();
		//view.util.toTop();
		return view.showAppearAnimation();
	},

	showAppearAnimation: function showAppearAnimation() {

		var view = this,
		    isScreenAnimation = _servicesInfo2['default'].get('screenAnimation') === 'on',
		    $el = view.$el,
		    deferred = _libJquery2['default'].Deferred(),
		    animationEnd = _servicesInfo2['default'].get('animationEnd', true);

		if (isScreenAnimation) {
			$el.one(animationEnd, function () {
				deferred.resolve();
			});
			$el.addClass('show-view-animation');
		} else {
			$el.addClass('show-view-no-animation');
			deferred.resolve();
		}

		return deferred.promise();
	},

	routeTo: function routeTo(e) {

		var view = this,
		    $this = (0, _libJquery2['default'])(e.currentTarget),
		    route = $this.attr('data-route');

		view.publish('navigate', route, true);
	},

	routeBack: function routeBack(e) {

		this.stopEvent(e);

		if (win.location.hash) {
			_libBackbone2['default'].history.history.back();
		}
	},

	//backTo: function (url, data) {
	backTo: function backTo(url) {

		//data = data || {};

		var view = this;

		(function backTo() {
			win.setTimeout(function () {
				if (_libBackbone2['default'].history.fragment === url || !_libBackbone2['default'].history.fragment) {
					// needed url or ''
					//router.isForce = false;
					return;
				}
				view.routeBack();
				backTo();
			}, 10);
		})();
	},

	showPopup: function showPopup(data) {

		var view = this,
		    deferred = _libJquery2['default'].Deferred(),
		    popup = {};

		view.hidePopupByRouter();

		view.publish('showPopup', data, popup);

		popup.view.set('deferred', deferred);

		return deferred.promise();
	},

	hidePopupByRouter: function hidePopupByRouter() {

		this.publish('router-hide-popup');
	},

	isPopupExist: function isPopupExist() {

		var view = this,
		    url = win.location.href,
		    popupPart = view.popupUrl;

		return url.indexOf(popupPart) !== -1;
	},

	stopEvent: function stopEvent(e) {

		if (!e) {
			return;
		}

		e.preventDefault();
		e.stopPropagation();
	},

	toExternalLink: function toExternalLink(e) {

		var view = this,
		    $this = (0, _libJquery2['default'])(e.currentTarget),
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

	needConfirmLinkPrompt: function needConfirmLinkPrompt(data) {

		var view = this,
		    getRandomBetween = _servicesUtil2['default'].getRandomBetween,
		    a = getRandomBetween(5, 9),
		    b = getRandomBetween(5, 9),
		    answer = a + b,
		    i,
		    len,
		    answers = [];

		if (a < b) {
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
				answers: _servicesUtil2['default'].assortArray(answers),
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

	checkConnection: function checkConnection() {

		var deferred = _libJquery2['default'].Deferred(),
		    src = 'https://www.gstatic.com/android/market_images/web/play_one_bar_logo.png?t=' + Math.random(),
		    $img = (0, _libJquery2['default'])('<img alt=""/>');

		$img.on('load', function () {
			(0, _libJquery2['default'])(this).off().remove();
			deferred.resolve();
		});

		$img.on('error', function () {
			(0, _libJquery2['default'])(this).off().remove();
			deferred.reject();
		});

		$img.attr('src', src);

		return deferred.promise();
	},

	rateUsPopup: function rateUsPopup() {

		var view = this,
		    dateUsData = _servicesInfo2['default'].get('rate-us') || {},
		    now = Date.now(),
		    lastShow = dateUsData.lastShow,
		   
		//lastRemindMeLater = dateUsData.lastRemindMeLater,
		lastNoThanks = dateUsData.lastNoThanks,
		    lastRateNow = dateUsData.lastRateNow,
		    showPeriod = 86400e3 * 2,
		    noThanksPeriod = showPeriod * 3; // try to show every two days

		if (lastShow && now - lastShow < showPeriod) {
			// do not show popup too often
			//console.log('do not show popup too often');
			return;
		}

		if (lastRateNow) {
			// rate by rate now
			//console.log('it had been rate by rate now');
			return;
		}

		if (lastNoThanks && now - lastShow < noThanksPeriod) {
			//console.log('no thanks - 3 * showPeriod');
			return;
		}

		// do not show any popup if user is offline
		view.checkConnection().done(function () {

			// set last show time
			dateUsData.lastShow = now;

			// save date-us data
			_servicesInfo2['default'].set('rate-us', dateUsData);

			return view.showPopup({
				name: 'rate-us',
				cssClass: 'popup-title',
				extraEvents: [{
					selector: '.js-rate-us-rate-now',
					event: 'click',
					fn: function fn() {
						var dateUsData = _servicesInfo2['default'].get('rate-us') || {};
						dateUsData.lastRateNow = Date.now();
						_servicesInfo2['default'].set('rate-us', dateUsData);
					}
				}, {
					selector: '.js-rate-us-no-thanks',
					event: 'click',
					fn: function fn() {
						var dateUsData = _servicesInfo2['default'].get('rate-us') || {};
						dateUsData.lastNoThanks = Date.now();
						_servicesInfo2['default'].set('rate-us', dateUsData);
					}
				}],
				data: {
					lang: _servicesLang2['default'],
					url: _servicesInfo2['default'].getLinkToStore()
				}
			});
		});
	},

	loadUrl: function loadUrl() {
		_libBackbone2['default'].history.loadUrl();
	},

	changeBy: function changeBy(key, delta) {
		return this.set(key, this.get(key) + delta);
	},

	set: function set(key, value) {
		this.attr[key] = value;
		return value;
	},
	get: function get(key) {
		return this.attr[key];
	},

	extendFromObj: function extendFromObj(data) {
		_libLodash2['default'].extend(this.attr, data);
	},

	setVerticalSwiper: function setVerticalSwiper() {

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

	scrollToTop: function scrollToTop() {
		doc.body.scrollTop = 0;
	},

	touchStartAutoScroll: function touchStartAutoScroll(e) {

		if (!_servicesInfo2['default'].get('isIOS', true)) {
			// do for IOS only
			return;
		}

		var $wrapper = (0, _libJquery2['default'])(e.currentTarget),
		    $scrollArea = $wrapper.find('> div'),
		    scrollTop = $wrapper.scrollTop(),
		    wrapperHeight,
		    scrollAreaHeight,
		    maxScrollTop;

		if (scrollTop <= 0) {
			$wrapper.scrollTop(1);
			return;
		}

		wrapperHeight = $wrapper.outerHeight();
		scrollAreaHeight = $scrollArea.outerHeight();
		maxScrollTop = scrollAreaHeight - wrapperHeight;

		if (scrollTop >= maxScrollTop) {
			$wrapper.scrollTop(maxScrollTop - 1);
		}
	},

	tabAction: function tabAction(e) {

		var view = this,
		    $el = view.$el,
		    $button = (0, _libJquery2['default'])(e.currentTarget),
		    tabId = $button.attr('data-tab-id'),
		    tabState = $button.attr('data-tab-state'),
		    tabButtonClassPrefix = 'tab-button-',
		    tabBlockSelector = '.js-tab-block',
		    tabButtonSelector = '.js-tab-button',
		    $block = $el.find(tabBlockSelector + '[data-tab-id="' + tabId + '"]'),
		    $blocks = $el.find(tabBlockSelector),
		    $buttons = $el.find(tabButtonSelector);

		$blocks.addClass('hidden');
		$buttons.addClass(tabButtonClassPrefix + 'close').removeClass(tabButtonClassPrefix + 'open').attr('data-tab-state', 'close');

		if (tabState === 'close') {
			$button.attr('data-tab-state', 'open').removeClass(tabButtonClassPrefix + 'close').addClass(tabButtonClassPrefix + 'open');
			$block.removeClass('hidden');
		}
	},

	tabClose: function tabClose() {

		var view = this,
		    $el = view.$el,
		    tabButtonClassPrefix = 'tab-button-',
		    tabBlockSelector = '.js-tab-block',
		    tabButtonSelector = '.js-tab-button',
		    $blocks = $el.find(tabBlockSelector),
		    $buttons = $el.find(tabButtonSelector);

		$blocks.addClass('hidden');
		$buttons.addClass(tabButtonClassPrefix + 'close').removeClass(tabButtonClassPrefix + 'open').attr('data-tab-state', 'close');
	},

	playSound: function playSound(e) {

		var $this = (0, _libJquery2['default'])(e.currentTarget),
		    sound = $this.attr('data-sound');

		_soundSoundMaster2['default'].play({
			sound: sound,
			road: 3,
			isLoop: false
		});
	}

});

exports['default'] = BaseView;
module.exports = exports['default'];

},{"./../../../lib/backbone":11,"./../../../lib/jquery":14,"./../../../lib/lodash":15,"./../../../services/info":21,"./../../../services/lang":22,"./../../../services/mediator":24,"./../../../services/util":26,"./../../../sound/sound-master":30}],6:[function(require,module,exports){
'use strict';
/*global window */

Object.defineProperty(exports, '__esModule', {
	value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _base = require('./base');

var _base2 = _interopRequireDefault(_base);

var _libJquery = require('./../../../lib/jquery');

var _libJquery2 = _interopRequireDefault(_libJquery);

var _libLodash = require('./../../../lib/lodash');

var _libLodash2 = _interopRequireDefault(_libLodash);

var _servicesLang = require('./../../../services/lang');

var _servicesLang2 = _interopRequireDefault(_servicesLang);

var _servicesInfo = require('./../../../services/info');

var _servicesInfo2 = _interopRequireDefault(_servicesInfo);

var _servicesDevice = require('./../../../services/device');

var _servicesDevice2 = _interopRequireDefault(_servicesDevice);

var _servicesTemplateMaster = require('./../../../services/template-master');

var _servicesTemplateMaster2 = _interopRequireDefault(_servicesTemplateMaster);

var _servicesMediator = require('./../../../services/mediator');

var _servicesMediator2 = _interopRequireDefault(_servicesMediator);

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

HintView = _base2['default'].extend({

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

	initialize: function initialize(data) {

		var view = this,
		    hintName = data.name;

		view.extendFromObj(data);
		view.extendFromObj(hintsMap[hintName]);

		view.setElement(_servicesTemplateMaster2['default'].tmplFn.hint({
			text: _servicesLang2['default'].get('hint')[hintName]
		}));

		_base2['default'].prototype.initialize.apply(view, arguments);

		view.bindEventListeners();

		view.subscribe('hide-hint', view.hide);

		view.render();
	},

	render: function render() {

		var view = this,
		    $wrapper = view.$wrapper,
		    isAndroid = _servicesInfo2['default'].get('isAndroid', true),
		    execute;

		if (isAndroid) {
			execute = function (fn, timeout) {
				setTimeout(fn, timeout);
			};
		} else {
			execute = function (fn) {
				fn();
			};
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

	showInAnimation: function showInAnimation() {

		var view = this,
		    isScreenAnimation = _servicesInfo2['default'].get('screenAnimation') === 'on';

		if (isScreenAnimation) {
			view.$el.addClass('hint-container-show-in');
		} else {
			view.$el.addClass('hint-container-show-in-no-animation');
		}
	},

	showOutAnimation: function showOutAnimation() {

		var view = this,
		    $el = view.$el,
		    deferred = _libJquery2['default'].Deferred(),
		    animationEnd = _servicesInfo2['default'].get('animationEnd', true),
		    isScreenAnimation = _servicesInfo2['default'].get('screenAnimation') === 'on';

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

	setCoordinates: function setCoordinates(data) {

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

	setHintCoordinates: function setHintCoordinates(data) {

		var view = this,
		    textWidth = 12,
		    halfTextWidth = textWidth / 2,
		    xys = data.allCoordinates,
		    maxWidth = xys.maxWidth,
		   
		//maxHeight = xys.maxHeight,
		minX1 = 1,
		    maxX2 = maxWidth - minX1,
		    x1,
		    y1,
		    x2,
		    dx = 0;
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

	setFadeCoordinates: function setFadeCoordinates(data) {

		var view = this,
		    isScreenAnimation = _servicesInfo2['default'].get('screenAnimation') === 'on',
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

	getAllCoordinates: function getAllCoordinates(data) {

		var view = this,
		    remSize = _servicesInfo2['default'].get('remSize', true),
		    maxWidth = _servicesDevice2['default'].get('width') / remSize,
		    maxHeight = _servicesDevice2['default'].get('height') / remSize,
		    coordinates = data.coordinates,
		    width = coordinates.width,
		    height = coordinates.height,
		    x1 = coordinates.x1,
		    y1 = coordinates.y1,
		    x2,
		    y2;

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

	hide: function hide(evt, dataArg) {

		var view = this,
		    data = dataArg || {},
		    submitType = view.get('submitType'),
		    hints = _servicesInfo2['default'].get('hint'),
		    hintName = view.get('name');

		hints[hintName] = hints[hintName] || {};

		if (data.doNotTrack) {
			view.clearOnHides();
		} else {
			if (submitType === 'normal') {
				hints[hintName].state = 'done';
				_servicesInfo2['default'].set('hint', hints);
			}
		}

		view.showOutAnimation().then(function () {
			_base2['default'].prototype.hide.call(view);
			view.runOnHides();
		});
	},

	bindEventListeners: function bindEventListeners() {},

	unbindEventListeners: function unbindEventListeners() {},

	onHide: function onHide(fn, args, context) {

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

	runOnHides: function runOnHides() {

		var view = this,
		    onHides = view.get('onHides') || [];

		_libLodash2['default'].each(onHides, function (item) {
			item.fn.apply(item.context, item.args);
		});

		view.set('onHides', null);
	},

	clearOnHides: function clearOnHides() {
		this.set('onHides', null);
	}

});

hintMaster = {
	showHint: function showHint(data, result) {
		return result ? result.view = new HintView(data) : new HintView(data);
	}
};

_servicesMediator2['default'].installTo(hintMaster);

hintMaster.subscribe('showHint', hintMaster.showHint);

exports['default'] = hintMaster;
module.exports = exports['default'];

},{"./../../../lib/jquery":14,"./../../../lib/lodash":15,"./../../../services/device":20,"./../../../services/info":21,"./../../../services/lang":22,"./../../../services/mediator":24,"./../../../services/template-master":25,"./base":5}],7:[function(require,module,exports){
'use strict';
/*global window */

Object.defineProperty(exports, '__esModule', {
	value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _base = require('./base');

var _base2 = _interopRequireDefault(_base);

var _libJquery = require('./../../../lib/jquery');

var _libJquery2 = _interopRequireDefault(_libJquery);

var _libLodash = require('./../../../lib/lodash');

var _libLodash2 = _interopRequireDefault(_libLodash);

var _soundSoundMaster = require('./../../../sound/sound-master');

var _soundSoundMaster2 = _interopRequireDefault(_soundSoundMaster);

var _servicesTemplateMaster = require('./../../../services/template-master');

var _servicesTemplateMaster2 = _interopRequireDefault(_servicesTemplateMaster);

var _servicesInfo = require('./../../../services/info');

var _servicesInfo2 = _interopRequireDefault(_servicesInfo);

var _servicesMediator = require('./../../../services/mediator');

var _servicesMediator2 = _interopRequireDefault(_servicesMediator);

var win = window,
    PopupView,
    popupMaster;

PopupView = _base2['default'].extend({

	events: {
		//'click .js-popup-container': 'stopEvent'
		'click': 'hidePopupByRouter',
		'scroll': 'stopEvent'
	},

	selectors: {
		popupContainer: '.js-popup-container'
	},

	initialize: function initialize(data) {
		// timeout, cssClass, from, data {text, header ...}, append$el, sound, onShow {context, fn}, onHide {context, fn}

		var view = this,
		    popupUrl = view.popupUrl,
		    url = win.location.href;

		if (url.indexOf(popupUrl) === -1) {
			view.publish('route-to-popup');
		}

		view.extendFromObj(data); // name, parentView, data(objToView)

		view.setElement(_servicesTemplateMaster2['default'].tmplFn['popup-wrapper']());

		if (data.cssClass) {
			view.$el.addClass(data.cssClass);
		}

		_base2['default'].prototype.initialize.apply(this, arguments);

		view.render();

		view.showInAnimation();

		view.bindEventListeners();

		view.subscribe('hide-popup', view.hide);
	},

	bindEventListeners: function bindEventListeners() {

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

	unbindEventListeners: function unbindEventListeners() {

		var view = this,
		    timeout = view.get('timeout');

		if (timeout) {
			clearTimeout(view.get('timeoutId'));
		}

		view.unbindExtraEvents();
	},

	bindExtraEvents: function bindExtraEvents() {

		var view = this,
		    $el = view.$el,
		    events = view.get('extraEvents');

		_libLodash2['default'].each(events, function (data) {
			$el.find(data.selector).on(data.event, data.fn);
		});
	},

	unbindExtraEvents: function unbindExtraEvents() {

		var view = this,
		    $el = view.$el,
		    events = view.get('extraEvents');

		_libLodash2['default'].each(events, function (data) {
			$el.find(data.selector).off(data.event, data.fn);
		});
	},

	render: function render() {

		var view = this,
		    append$el = view.get('append$el'),
		    data = view.get('data') || {},
		    sound = view.get('sound'),
		    $content = (0, _libJquery2['default'])(_servicesTemplateMaster2['default'].tmplFn[view.get('name')](data)),
		    $container = view.$el.find(view.selectors.popupContainer),
		    onShow = view.get('onShow'),
		    context;

		if (sound) {
			_soundSoundMaster2['default'].play(sound);
		}

		$container.append($content);

		view.$wrapper.append(view.$el);

		if (onShow) {
			context = onShow.context || view;
			context[onShow.fn].apply(context, onShow.args);
		}
	},

	hide: function hide() {

		var view = this;

		view.showOutAnimation().then(function () {

			var onHide = view.get('onHide'),
			    context;

			if (onHide) {
				context = onHide.context || view;
				context[onHide.fn].apply(context, onHide.args);
			}

			_base2['default'].prototype.hide.call(view);

			view.get('deferred').resolve();
		});
	},

	// actions
	showInAnimation: function showInAnimation() {
		var view = this;
		view.$el.addClass('popup-show-in');
	},

	showOutAnimation: function showOutAnimation() {

		var view = this,
		    $el = view.$el,
		    deferred = _libJquery2['default'].Deferred(),
		    animationEnd = _servicesInfo2['default'].get('animationEnd', true);

		$el.one(animationEnd, function () {
			deferred.resolve();
		}); // work only one time

		$el.addClass('popup-show-out');

		return deferred.promise();
	}

});

popupMaster = {
	showPopup: function showPopup(data, result) {
		return result ? result.view = new PopupView(data) : new PopupView(data);
	}
};

_servicesMediator2['default'].installTo(popupMaster);

popupMaster.subscribe('showPopup', popupMaster.showPopup);

exports['default'] = popupMaster;
module.exports = exports['default'];

},{"./../../../lib/jquery":14,"./../../../lib/lodash":15,"./../../../services/info":21,"./../../../services/mediator":24,"./../../../services/template-master":25,"./../../../sound/sound-master":30,"./base":5}],8:[function(require,module,exports){
'use strict';
/*global window */

Object.defineProperty(exports, '__esModule', {
	value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _libJquery = require('./../../lib/jquery');

var _libJquery2 = _interopRequireDefault(_libJquery);

var _servicesInfo = require('./../../services/info');

var _servicesInfo2 = _interopRequireDefault(_servicesInfo);

var _servicesLang = require('./../../services/lang');

var _servicesLang2 = _interopRequireDefault(_servicesLang);

var _servicesDevice = require('./../../services/device');

var _servicesDevice2 = _interopRequireDefault(_servicesDevice);

var _servicesTemplateMaster = require('./../../services/template-master');

var _servicesTemplateMaster2 = _interopRequireDefault(_servicesTemplateMaster);

var _coreBase = require('./core/base');

var _coreBase2 = _interopRequireDefault(_coreBase);

var win = window,
    HomeView = _coreBase2['default'].extend({

	events: {
		'click .js-story-by-story': 'setStoryByStory',
		'click .js-title-book-wrapper': 'openBook'
		//'click .js-show-popup': 'testShowPopup'
	},

	initialize: function initialize() {

		var view = this;
		view.setElement(_servicesTemplateMaster2['default'].tmplFn.home());

		view.render();

		view.scrollToTop();

		return _coreBase2['default'].prototype.initialize.apply(view, arguments);
	}

	//testShowPopup: function () {
	//
	//	var view = this;
	//
	//	view.showPopup({
	//		name: 'popup-text',
	//		//timeout: 2.5e3,
	//		sound: {
	//			sound: 'good-answer.mp3',
	//			isLoop: false,
	//			road: 3
	//		},
	//		data: {
	//			text: 'TEXT!!!!!!!!!'
	//		}
	//		//,onHide: { // see popup view source code
	//		//	fn: 'newQuestion',
	//		//	context: view
	//		//}
	//	});
	//
	//}

});

exports['default'] = HomeView;
module.exports = exports['default'];

},{"./../../lib/jquery":14,"./../../services/device":20,"./../../services/info":21,"./../../services/lang":22,"./../../services/template-master":25,"./core/base":5}],9:[function(require,module,exports){
'use strict';
/*global window */

Object.defineProperty(exports, '__esModule', {
	value: true
});
var en = {
	language: 'Language',
	languageName: 'English',
	shortLanguageName: 'Eng',
	appName: 'CB',

	notification: {
		storyByStoryOn: 'Mode "story by story" is enabled',
		storyByStoryOff: 'Mode "story by story" is disabled'
	},

	// rate us block
	rateUs: {
		header: 'If you like out app, please rate it. Thanks!',
		rateNow: 'Rate Now',
		remindMeLater: 'Remind Me Later',
		noThanks: 'No, Thanks'
	}

};

exports['default'] = en;
module.exports = exports['default'];

},{}],10:[function(require,module,exports){
'use strict';
/*global window */

Object.defineProperty(exports, '__esModule', {
	value: true
});
var ru = {
	language: 'Язык',
	languageName: 'Русский',
	shortLanguageName: 'Рус',
	appName: 'CB',

	notification: {
		storyByStoryOn: 'Режим "сказка за сказкой" - включён',
		storyByStoryOff: 'Режим "сказка за сказкой" - отключён'
	},

	hint: {
		autoplay: 'Включить\/выклюить режим|"сказка за сказкой".|(Доступно только в платной версии приложения)',
		removeAds: 'Отключить рекламу.|Купить приложение.',
		thanksForBuy: 'Поздровляем!|Вы являетесь обладателем полной версии приложения!',
		showTitle: 'Если название не помещается полностью, то кликните по нему.',
		showText: 'Что бы увидеть текст сказки - дважды кликните по картинке.',
		stopAndStartPlay: 'Остановить\/начать воспроизведение.'
	},

	// rate us block
	rateUs: {
		header: 'Если Вам понравилось наше приложение, пожалуйста, оцените его. Спасибо!',
		rateNow: 'Оценить',
		remindMeLater: 'Напомнить позже',
		noThanks: 'Нет, спасибо'
	}

};

exports['default'] = ru;
module.exports = exports['default'];

},{}],11:[function(require,module,exports){
(function (global){
"use strict";

(function (t) {
  var e = typeof self == "object" && self.self == self && self || typeof global == "object" && global.global == global && global;if (typeof define === "function" && define.amd) {
    define(["underscore", "jquery", "exports"], function (i, r, n) {
      e.Backbone = t(e, n, i, r);
    });
  } else if (typeof exports !== "undefined") {
    var i = require("underscore"),
        r;try {
      r = require("jquery");
    } catch (n) {}t(e, exports, i, r);
  } else {
    e.Backbone = t(e, {}, e._, e.jQuery || e.Zepto || e.ender || e.$);
  }
})(function (t, e, i, r) {
  var n = t.Backbone;var s = Array.prototype.slice;e.VERSION = "1.2.3";e.$ = r;e.noConflict = function () {
    t.Backbone = n;return this;
  };e.emulateHTTP = false;e.emulateJSON = false;var a = function a(t, e, r) {
    switch (t) {case 1:
        return function () {
          return i[e](this[r]);
        };case 2:
        return function (t) {
          return i[e](this[r], t);
        };case 3:
        return function (t, n) {
          return i[e](this[r], h(t, this), n);
        };case 4:
        return function (t, n, s) {
          return i[e](this[r], h(t, this), n, s);
        };default:
        return function () {
          var t = s.call(arguments);t.unshift(this[r]);return i[e].apply(i, t);
        };}
  };var o = function o(t, e, r) {
    i.each(e, function (e, n) {
      if (i[n]) t.prototype[n] = a(e, n, r);
    });
  };var h = function h(t, e) {
    if (i.isFunction(t)) return t;if (i.isObject(t) && !e._isModel(t)) return u(t);if (i.isString(t)) return function (e) {
      return e.get(t);
    };return t;
  };var u = function u(t) {
    var e = i.matches(t);return function (t) {
      return e(t.attributes);
    };
  };var l = e.Events = {};var c = /\s+/;var f = function f(t, e, r, n, s) {
    var a = 0,
        o;if (r && typeof r === "object") {
      if (n !== void 0 && "context" in s && s.context === void 0) s.context = n;for (o = i.keys(r); a < o.length; a++) {
        e = f(t, e, o[a], r[o[a]], s);
      }
    } else if (r && c.test(r)) {
      for (o = r.split(c); a < o.length; a++) {
        e = t(e, o[a], n, s);
      }
    } else {
      e = t(e, r, n, s);
    }return e;
  };l.on = function (t, e, i) {
    return d(this, t, e, i);
  };var d = function d(t, e, i, r, n) {
    t._events = f(v, t._events || {}, e, i, { context: r, ctx: t, listening: n });if (n) {
      var s = t._listeners || (t._listeners = {});s[n.id] = n;
    }return t;
  };l.listenTo = function (t, e, r) {
    if (!t) return this;var n = t._listenId || (t._listenId = i.uniqueId("l"));var s = this._listeningTo || (this._listeningTo = {});var a = s[n];if (!a) {
      var o = this._listenId || (this._listenId = i.uniqueId("l"));a = s[n] = { obj: t, objId: n, id: o, listeningTo: s, count: 0 };
    }d(t, e, r, this, a);return this;
  };var v = function v(t, e, i, r) {
    if (i) {
      var n = t[e] || (t[e] = []);var s = r.context,
          a = r.ctx,
          o = r.listening;if (o) o.count++;n.push({ callback: i, context: s, ctx: s || a, listening: o });
    }return t;
  };l.off = function (t, e, i) {
    if (!this._events) return this;this._events = f(g, this._events, t, e, { context: i, listeners: this._listeners });return this;
  };l.stopListening = function (t, e, r) {
    var n = this._listeningTo;if (!n) return this;var s = t ? [t._listenId] : i.keys(n);for (var a = 0; a < s.length; a++) {
      var o = n[s[a]];if (!o) break;o.obj.off(e, r, this);
    }if (i.isEmpty(n)) this._listeningTo = void 0;return this;
  };var g = function g(t, e, r, n) {
    if (!t) return;var s = 0,
        a;var o = n.context,
        h = n.listeners;if (!e && !r && !o) {
      var u = i.keys(h);for (; s < u.length; s++) {
        a = h[u[s]];delete h[a.id];delete a.listeningTo[a.objId];
      }return;
    }var l = e ? [e] : i.keys(t);for (; s < l.length; s++) {
      e = l[s];var c = t[e];if (!c) break;var f = [];for (var d = 0; d < c.length; d++) {
        var v = c[d];if (r && r !== v.callback && r !== v.callback._callback || o && o !== v.context) {
          f.push(v);
        } else {
          a = v.listening;if (a && --a.count === 0) {
            delete h[a.id];delete a.listeningTo[a.objId];
          }
        }
      }if (f.length) {
        t[e] = f;
      } else {
        delete t[e];
      }
    }if (i.size(t)) return t;
  };l.once = function (t, e, r) {
    var n = f(p, {}, t, e, i.bind(this.off, this));return this.on(n, void 0, r);
  };l.listenToOnce = function (t, e, r) {
    var n = f(p, {}, e, r, i.bind(this.stopListening, this, t));return this.listenTo(t, n);
  };var p = function p(t, e, r, n) {
    if (r) {
      var s = t[e] = i.once(function () {
        n(e, s);r.apply(this, arguments);
      });s._callback = r;
    }return t;
  };l.trigger = function (t) {
    if (!this._events) return this;var e = Math.max(0, arguments.length - 1);var i = Array(e);for (var r = 0; r < e; r++) i[r] = arguments[r + 1];f(m, this._events, t, void 0, i);return this;
  };var m = function m(t, e, i, r) {
    if (t) {
      var n = t[e];var s = t.all;if (n && s) s = s.slice();if (n) _(n, r);if (s) _(s, [e].concat(r));
    }return t;
  };var _ = function _(t, e) {
    var i,
        r = -1,
        n = t.length,
        s = e[0],
        a = e[1],
        o = e[2];switch (e.length) {case 0:
        while (++r < n) (i = t[r]).callback.call(i.ctx);return;case 1:
        while (++r < n) (i = t[r]).callback.call(i.ctx, s);return;case 2:
        while (++r < n) (i = t[r]).callback.call(i.ctx, s, a);return;case 3:
        while (++r < n) (i = t[r]).callback.call(i.ctx, s, a, o);return;default:
        while (++r < n) (i = t[r]).callback.apply(i.ctx, e);return;}
  };l.bind = l.on;l.unbind = l.off;i.extend(e, l);var y = e.Model = function (t, e) {
    var r = t || {};e || (e = {});this.cid = i.uniqueId(this.cidPrefix);this.attributes = {};if (e.collection) this.collection = e.collection;if (e.parse) r = this.parse(r, e) || {};r = i.defaults({}, r, i.result(this, "defaults"));this.set(r, e);this.changed = {};this.initialize.apply(this, arguments);
  };i.extend(y.prototype, l, { changed: null, validationError: null, idAttribute: "id", cidPrefix: "c", initialize: function initialize() {}, toJSON: function toJSON(t) {
      return i.clone(this.attributes);
    }, sync: function sync() {
      return e.sync.apply(this, arguments);
    }, get: function get(t) {
      return this.attributes[t];
    }, escape: function escape(t) {
      return i.escape(this.get(t));
    }, has: function has(t) {
      return this.get(t) != null;
    }, matches: function matches(t) {
      return !!i.iteratee(t, this)(this.attributes);
    }, set: function set(t, e, r) {
      if (t == null) return this;var n;if (typeof t === "object") {
        n = t;r = e;
      } else {
        (n = {})[t] = e;
      }r || (r = {});if (!this._validate(n, r)) return false;var s = r.unset;var a = r.silent;var o = [];var h = this._changing;this._changing = true;if (!h) {
        this._previousAttributes = i.clone(this.attributes);this.changed = {};
      }var u = this.attributes;var l = this.changed;var c = this._previousAttributes;for (var f in n) {
        e = n[f];if (!i.isEqual(u[f], e)) o.push(f);if (!i.isEqual(c[f], e)) {
          l[f] = e;
        } else {
          delete l[f];
        }s ? delete u[f] : u[f] = e;
      }this.id = this.get(this.idAttribute);if (!a) {
        if (o.length) this._pending = r;for (var d = 0; d < o.length; d++) {
          this.trigger("change:" + o[d], this, u[o[d]], r);
        }
      }if (h) return this;if (!a) {
        while (this._pending) {
          r = this._pending;this._pending = false;this.trigger("change", this, r);
        }
      }this._pending = false;this._changing = false;return this;
    }, unset: function unset(t, e) {
      return this.set(t, void 0, i.extend({}, e, { unset: true }));
    }, clear: function clear(t) {
      var e = {};for (var r in this.attributes) e[r] = void 0;return this.set(e, i.extend({}, t, { unset: true }));
    }, hasChanged: function hasChanged(t) {
      if (t == null) return !i.isEmpty(this.changed);return i.has(this.changed, t);
    }, changedAttributes: function changedAttributes(t) {
      if (!t) return this.hasChanged() ? i.clone(this.changed) : false;var e = this._changing ? this._previousAttributes : this.attributes;var r = {};for (var n in t) {
        var s = t[n];if (i.isEqual(e[n], s)) continue;r[n] = s;
      }return i.size(r) ? r : false;
    }, previous: function previous(t) {
      if (t == null || !this._previousAttributes) return null;return this._previousAttributes[t];
    }, previousAttributes: function previousAttributes() {
      return i.clone(this._previousAttributes);
    }, fetch: function fetch(t) {
      t = i.extend({ parse: true }, t);var e = this;var r = t.success;t.success = function (i) {
        var n = t.parse ? e.parse(i, t) : i;if (!e.set(n, t)) return false;if (r) r.call(t.context, e, i, t);e.trigger("sync", e, i, t);
      };z(this, t);return this.sync("read", this, t);
    }, save: function save(t, e, r) {
      var n;if (t == null || typeof t === "object") {
        n = t;r = e;
      } else {
        (n = {})[t] = e;
      }r = i.extend({ validate: true, parse: true }, r);var s = r.wait;if (n && !s) {
        if (!this.set(n, r)) return false;
      } else {
        if (!this._validate(n, r)) return false;
      }var a = this;var o = r.success;var h = this.attributes;r.success = function (t) {
        a.attributes = h;var e = r.parse ? a.parse(t, r) : t;if (s) e = i.extend({}, n, e);if (e && !a.set(e, r)) return false;if (o) o.call(r.context, a, t, r);a.trigger("sync", a, t, r);
      };z(this, r);if (n && s) this.attributes = i.extend({}, h, n);var u = this.isNew() ? "create" : r.patch ? "patch" : "update";if (u === "patch" && !r.attrs) r.attrs = n;var l = this.sync(u, this, r);this.attributes = h;return l;
    }, destroy: function destroy(t) {
      t = t ? i.clone(t) : {};var e = this;var r = t.success;var n = t.wait;var s = function s() {
        e.stopListening();e.trigger("destroy", e, e.collection, t);
      };t.success = function (i) {
        if (n) s();if (r) r.call(t.context, e, i, t);if (!e.isNew()) e.trigger("sync", e, i, t);
      };var a = false;if (this.isNew()) {
        i.defer(t.success);
      } else {
        z(this, t);a = this.sync("delete", this, t);
      }if (!n) s();return a;
    }, url: function url() {
      var t = i.result(this, "urlRoot") || i.result(this.collection, "url") || F();if (this.isNew()) return t;var e = this.get(this.idAttribute);return t.replace(/[^\/]$/, "$&/") + encodeURIComponent(e);
    }, parse: function parse(t, e) {
      return t;
    }, clone: function clone() {
      return new this.constructor(this.attributes);
    }, isNew: function isNew() {
      return !this.has(this.idAttribute);
    }, isValid: function isValid(t) {
      return this._validate({}, i.defaults({ validate: true }, t));
    }, _validate: function _validate(t, e) {
      if (!e.validate || !this.validate) return true;t = i.extend({}, this.attributes, t);var r = this.validationError = this.validate(t, e) || null;if (!r) return true;this.trigger("invalid", this, r, i.extend(e, { validationError: r }));return false;
    } });var b = { keys: 1, values: 1, pairs: 1, invert: 1, pick: 0, omit: 0, chain: 1, isEmpty: 1 };o(y, b, "attributes");var x = e.Collection = function (t, e) {
    e || (e = {});if (e.model) this.model = e.model;if (e.comparator !== void 0) this.comparator = e.comparator;this._reset();this.initialize.apply(this, arguments);if (t) this.reset(t, i.extend({ silent: true }, e));
  };var w = { add: true, remove: true, merge: true };var E = { add: true, remove: false };var k = function k(t, e, i) {
    i = Math.min(Math.max(i, 0), t.length);var r = Array(t.length - i);var n = e.length;for (var s = 0; s < r.length; s++) r[s] = t[s + i];for (s = 0; s < n; s++) t[s + i] = e[s];for (s = 0; s < r.length; s++) t[s + n + i] = r[s];
  };i.extend(x.prototype, l, { model: y, initialize: function initialize() {}, toJSON: function toJSON(t) {
      return this.map(function (e) {
        return e.toJSON(t);
      });
    }, sync: function sync() {
      return e.sync.apply(this, arguments);
    }, add: function add(t, e) {
      return this.set(t, i.extend({ merge: false }, e, E));
    }, remove: function remove(t, e) {
      e = i.extend({}, e);var r = !i.isArray(t);t = r ? [t] : i.clone(t);var n = this._removeModels(t, e);if (!e.silent && n) this.trigger("update", this, e);return r ? n[0] : n;
    }, set: function set(t, e) {
      if (t == null) return;e = i.defaults({}, e, w);if (e.parse && !this._isModel(t)) t = this.parse(t, e);var r = !i.isArray(t);t = r ? [t] : t.slice();var n = e.at;if (n != null) n = +n;if (n < 0) n += this.length + 1;var s = [];var a = [];var o = [];var h = {};var u = e.add;var l = e.merge;var c = e.remove;var f = false;var d = this.comparator && n == null && e.sort !== false;var v = i.isString(this.comparator) ? this.comparator : null;var g;for (var p = 0; p < t.length; p++) {
        g = t[p];var m = this.get(g);if (m) {
          if (l && g !== m) {
            var _ = this._isModel(g) ? g.attributes : g;if (e.parse) _ = m.parse(_, e);m.set(_, e);if (d && !f) f = m.hasChanged(v);
          }if (!h[m.cid]) {
            h[m.cid] = true;s.push(m);
          }t[p] = m;
        } else if (u) {
          g = t[p] = this._prepareModel(g, e);if (g) {
            a.push(g);this._addReference(g, e);h[g.cid] = true;s.push(g);
          }
        }
      }if (c) {
        for (p = 0; p < this.length; p++) {
          g = this.models[p];if (!h[g.cid]) o.push(g);
        }if (o.length) this._removeModels(o, e);
      }var y = false;var b = !d && u && c;if (s.length && b) {
        y = this.length != s.length || i.some(this.models, function (t, e) {
          return t !== s[e];
        });this.models.length = 0;k(this.models, s, 0);this.length = this.models.length;
      } else if (a.length) {
        if (d) f = true;k(this.models, a, n == null ? this.length : n);this.length = this.models.length;
      }if (f) this.sort({ silent: true });if (!e.silent) {
        for (p = 0; p < a.length; p++) {
          if (n != null) e.index = n + p;g = a[p];g.trigger("add", g, this, e);
        }if (f || y) this.trigger("sort", this, e);if (a.length || o.length) this.trigger("update", this, e);
      }return r ? t[0] : t;
    }, reset: function reset(t, e) {
      e = e ? i.clone(e) : {};for (var r = 0; r < this.models.length; r++) {
        this._removeReference(this.models[r], e);
      }e.previousModels = this.models;this._reset();t = this.add(t, i.extend({ silent: true }, e));if (!e.silent) this.trigger("reset", this, e);return t;
    }, push: function push(t, e) {
      return this.add(t, i.extend({ at: this.length }, e));
    }, pop: function pop(t) {
      var e = this.at(this.length - 1);return this.remove(e, t);
    }, unshift: function unshift(t, e) {
      return this.add(t, i.extend({ at: 0 }, e));
    }, shift: function shift(t) {
      var e = this.at(0);return this.remove(e, t);
    }, slice: function slice() {
      return s.apply(this.models, arguments);
    }, get: function get(t) {
      if (t == null) return void 0;var e = this.modelId(this._isModel(t) ? t.attributes : t);return this._byId[t] || this._byId[e] || this._byId[t.cid];
    }, at: function at(t) {
      if (t < 0) t += this.length;return this.models[t];
    }, where: function where(t, e) {
      return this[e ? "find" : "filter"](t);
    }, findWhere: function findWhere(t) {
      return this.where(t, true);
    }, sort: function sort(t) {
      var e = this.comparator;if (!e) throw new Error("Cannot sort a set without a comparator");t || (t = {});var r = e.length;if (i.isFunction(e)) e = i.bind(e, this);if (r === 1 || i.isString(e)) {
        this.models = this.sortBy(e);
      } else {
        this.models.sort(e);
      }if (!t.silent) this.trigger("sort", this, t);return this;
    }, pluck: function pluck(t) {
      return i.invoke(this.models, "get", t);
    }, fetch: function fetch(t) {
      t = i.extend({ parse: true }, t);var e = t.success;var r = this;t.success = function (i) {
        var n = t.reset ? "reset" : "set";r[n](i, t);if (e) e.call(t.context, r, i, t);r.trigger("sync", r, i, t);
      };z(this, t);return this.sync("read", this, t);
    }, create: function create(t, e) {
      e = e ? i.clone(e) : {};var r = e.wait;t = this._prepareModel(t, e);if (!t) return false;if (!r) this.add(t, e);var n = this;var s = e.success;e.success = function (t, e, i) {
        if (r) n.add(t, i);if (s) s.call(i.context, t, e, i);
      };t.save(null, e);return t;
    }, parse: function parse(t, e) {
      return t;
    }, clone: function clone() {
      return new this.constructor(this.models, { model: this.model, comparator: this.comparator });
    }, modelId: function modelId(t) {
      return t[this.model.prototype.idAttribute || "id"];
    }, _reset: function _reset() {
      this.length = 0;this.models = [];this._byId = {};
    }, _prepareModel: function _prepareModel(t, e) {
      if (this._isModel(t)) {
        if (!t.collection) t.collection = this;return t;
      }e = e ? i.clone(e) : {};e.collection = this;var r = new this.model(t, e);if (!r.validationError) return r;this.trigger("invalid", this, r.validationError, e);return false;
    }, _removeModels: function _removeModels(t, e) {
      var i = [];for (var r = 0; r < t.length; r++) {
        var n = this.get(t[r]);if (!n) continue;var s = this.indexOf(n);this.models.splice(s, 1);this.length--;if (!e.silent) {
          e.index = s;n.trigger("remove", n, this, e);
        }i.push(n);this._removeReference(n, e);
      }return i.length ? i : false;
    }, _isModel: function _isModel(t) {
      return t instanceof y;
    }, _addReference: function _addReference(t, e) {
      this._byId[t.cid] = t;var i = this.modelId(t.attributes);if (i != null) this._byId[i] = t;t.on("all", this._onModelEvent, this);
    }, _removeReference: function _removeReference(t, e) {
      delete this._byId[t.cid];var i = this.modelId(t.attributes);if (i != null) delete this._byId[i];if (this === t.collection) delete t.collection;t.off("all", this._onModelEvent, this);
    }, _onModelEvent: function _onModelEvent(t, e, i, r) {
      if ((t === "add" || t === "remove") && i !== this) return;if (t === "destroy") this.remove(e, r);if (t === "change") {
        var n = this.modelId(e.previousAttributes());var s = this.modelId(e.attributes);if (n !== s) {
          if (n != null) delete this._byId[n];if (s != null) this._byId[s] = e;
        }
      }this.trigger.apply(this, arguments);
    } });var S = { forEach: 3, each: 3, map: 3, collect: 3, reduce: 4, foldl: 4, inject: 4, reduceRight: 4, foldr: 4, find: 3, detect: 3, filter: 3, select: 3, reject: 3, every: 3, all: 3, some: 3, any: 3, include: 3, includes: 3, contains: 3, invoke: 0, max: 3, min: 3, toArray: 1, size: 1, first: 3, head: 3, take: 3, initial: 3, rest: 3, tail: 3, drop: 3, last: 3, without: 0, difference: 0, indexOf: 3, shuffle: 1, lastIndexOf: 3, isEmpty: 1, chain: 1, sample: 3, partition: 3, groupBy: 3, countBy: 3, sortBy: 3, indexBy: 3 };o(x, S, "models");var I = e.View = function (t) {
    this.cid = i.uniqueId("view");i.extend(this, i.pick(t, P));this._ensureElement();this.initialize.apply(this, arguments);
  };var T = /^(\S+)\s*(.*)$/;var P = ["model", "collection", "el", "id", "attributes", "className", "tagName", "events"];i.extend(I.prototype, l, { tagName: "div", $: function $(t) {
      return this.$el.find(t);
    }, initialize: function initialize() {}, render: function render() {
      return this;
    }, remove: function remove() {
      this._removeElement();this.stopListening();return this;
    }, _removeElement: function _removeElement() {
      this.$el.remove();
    }, setElement: function setElement(t) {
      this.undelegateEvents();this._setElement(t);this.delegateEvents();return this;
    }, _setElement: function _setElement(t) {
      this.$el = t instanceof e.$ ? t : e.$(t);this.el = this.$el[0];
    }, delegateEvents: function delegateEvents(t) {
      t || (t = i.result(this, "events"));if (!t) return this;this.undelegateEvents();for (var e in t) {
        var r = t[e];if (!i.isFunction(r)) r = this[r];if (!r) continue;var n = e.match(T);this.delegate(n[1], n[2], i.bind(r, this));
      }return this;
    }, delegate: function delegate(t, e, i) {
      this.$el.on(t + ".delegateEvents" + this.cid, e, i);return this;
    }, undelegateEvents: function undelegateEvents() {
      if (this.$el) this.$el.off(".delegateEvents" + this.cid);return this;
    }, undelegate: function undelegate(t, e, i) {
      this.$el.off(t + ".delegateEvents" + this.cid, e, i);return this;
    }, _createElement: function _createElement(t) {
      return document.createElement(t);
    }, _ensureElement: function _ensureElement() {
      if (!this.el) {
        var t = i.extend({}, i.result(this, "attributes"));if (this.id) t.id = i.result(this, "id");if (this.className) t["class"] = i.result(this, "className");this.setElement(this._createElement(i.result(this, "tagName")));this._setAttributes(t);
      } else {
        this.setElement(i.result(this, "el"));
      }
    }, _setAttributes: function _setAttributes(t) {
      this.$el.attr(t);
    } });e.sync = function (t, r, n) {
    var s = H[t];i.defaults(n || (n = {}), { emulateHTTP: e.emulateHTTP, emulateJSON: e.emulateJSON });var a = { type: s, dataType: "json" };if (!n.url) {
      a.url = i.result(r, "url") || F();
    }if (n.data == null && r && (t === "create" || t === "update" || t === "patch")) {
      a.contentType = "application/json";a.data = JSON.stringify(n.attrs || r.toJSON(n));
    }if (n.emulateJSON) {
      a.contentType = "application/x-www-form-urlencoded";a.data = a.data ? { model: a.data } : {};
    }if (n.emulateHTTP && (s === "PUT" || s === "DELETE" || s === "PATCH")) {
      a.type = "POST";if (n.emulateJSON) a.data._method = s;var o = n.beforeSend;n.beforeSend = function (t) {
        t.setRequestHeader("X-HTTP-Method-Override", s);if (o) return o.apply(this, arguments);
      };
    }if (a.type !== "GET" && !n.emulateJSON) {
      a.processData = false;
    }var h = n.error;n.error = function (t, e, i) {
      n.textStatus = e;n.errorThrown = i;if (h) h.call(n.context, t, e, i);
    };var u = n.xhr = e.ajax(i.extend(a, n));r.trigger("request", r, u, n);return u;
  };var H = { create: "POST", update: "PUT", patch: "PATCH", "delete": "DELETE", read: "GET" };e.ajax = function () {
    return e.$.ajax.apply(e.$, arguments);
  };var $ = e.Router = function (t) {
    t || (t = {});if (t.routes) this.routes = t.routes;this._bindRoutes();this.initialize.apply(this, arguments);
  };var A = /\((.*?)\)/g;var C = /(\(\?)?:\w+/g;var R = /\*\w+/g;var j = /[\-{}\[\]+?.,\\\^$|#\s]/g;i.extend($.prototype, l, { initialize: function initialize() {}, route: function route(t, r, n) {
      if (!i.isRegExp(t)) t = this._routeToRegExp(t);if (i.isFunction(r)) {
        n = r;r = "";
      }if (!n) n = this[r];var s = this;e.history.route(t, function (i) {
        var a = s._extractParameters(t, i);if (s.execute(n, a, r) !== false) {
          s.trigger.apply(s, ["route:" + r].concat(a));s.trigger("route", r, a);e.history.trigger("route", s, r, a);
        }
      });return this;
    }, execute: function execute(t, e, i) {
      if (t) t.apply(this, e);
    }, navigate: function navigate(t, i) {
      e.history.navigate(t, i);return this;
    }, _bindRoutes: function _bindRoutes() {
      if (!this.routes) return;this.routes = i.result(this, "routes");var t,
          e = i.keys(this.routes);while ((t = e.pop()) != null) {
        this.route(t, this.routes[t]);
      }
    }, _routeToRegExp: function _routeToRegExp(t) {
      t = t.replace(j, "\\$&").replace(A, "(?:$1)?").replace(C, function (t, e) {
        return e ? t : "([^/?]+)";
      }).replace(R, "([^?]*?)");return new RegExp("^" + t + "(?:\\?([\\s\\S]*))?$");
    }, _extractParameters: function _extractParameters(t, e) {
      var r = t.exec(e).slice(1);return i.map(r, function (t, e) {
        if (e === r.length - 1) return t || null;return t ? decodeURIComponent(t) : null;
      });
    } });var M = e.History = function () {
    this.handlers = [];this.checkUrl = i.bind(this.checkUrl, this);if (typeof window !== "undefined") {
      this.location = window.location;this.history = window.history;
    }
  };var N = /^[#\/]|\s+$/g;var O = /^\/+|\/+$/g;var U = /#.*$/;M.started = false;i.extend(M.prototype, l, { interval: 50, atRoot: function atRoot() {
      var t = this.location.pathname.replace(/[^\/]$/, "$&/");return t === this.root && !this.getSearch();
    }, matchRoot: function matchRoot() {
      var t = this.decodeFragment(this.location.pathname);var e = t.slice(0, this.root.length - 1) + "/";return e === this.root;
    }, decodeFragment: function decodeFragment(t) {
      return decodeURI(t.replace(/%25/g, "%2525"));
    }, getSearch: function getSearch() {
      var t = this.location.href.replace(/#.*/, "").match(/\?.+/);return t ? t[0] : "";
    }, getHash: function getHash(t) {
      var e = (t || this).location.href.match(/#(.*)$/);return e ? e[1] : "";
    }, getPath: function getPath() {
      var t = this.decodeFragment(this.location.pathname + this.getSearch()).slice(this.root.length - 1);return t.charAt(0) === "/" ? t.slice(1) : t;
    }, getFragment: function getFragment(t) {
      if (t == null) {
        if (this._usePushState || !this._wantsHashChange) {
          t = this.getPath();
        } else {
          t = this.getHash();
        }
      }return t.replace(N, "");
    }, start: function start(t) {
      if (M.started) throw new Error("Backbone.history has already been started");M.started = true;this.options = i.extend({ root: "/" }, this.options, t);this.root = this.options.root;this._wantsHashChange = this.options.hashChange !== false;this._hasHashChange = "onhashchange" in window && (document.documentMode === void 0 || document.documentMode > 7);this._useHashChange = this._wantsHashChange && this._hasHashChange;this._wantsPushState = !!this.options.pushState;this._hasPushState = !!(this.history && this.history.pushState);this._usePushState = this._wantsPushState && this._hasPushState;this.fragment = this.getFragment();this.root = ("/" + this.root + "/").replace(O, "/");if (this._wantsHashChange && this._wantsPushState) {
        if (!this._hasPushState && !this.atRoot()) {
          var e = this.root.slice(0, -1) || "/";this.location.replace(e + "#" + this.getPath());return true;
        } else if (this._hasPushState && this.atRoot()) {
          this.navigate(this.getHash(), { replace: true });
        }
      }if (!this._hasHashChange && this._wantsHashChange && !this._usePushState) {
        this.iframe = document.createElement("iframe");this.iframe.src = "javascript:0";this.iframe.style.display = "none";this.iframe.tabIndex = -1;var r = document.body;var n = r.insertBefore(this.iframe, r.firstChild).contentWindow;n.document.open();n.document.close();n.location.hash = "#" + this.fragment;
      }var s = window.addEventListener || function (t, e) {
        return attachEvent("on" + t, e);
      };if (this._usePushState) {
        s("popstate", this.checkUrl, false);
      } else if (this._useHashChange && !this.iframe) {
        s("hashchange", this.checkUrl, false);
      } else if (this._wantsHashChange) {
        this._checkUrlInterval = setInterval(this.checkUrl, this.interval);
      }if (!this.options.silent) return this.loadUrl();
    }, stop: function stop() {
      var t = window.removeEventListener || function (t, e) {
        return detachEvent("on" + t, e);
      };if (this._usePushState) {
        t("popstate", this.checkUrl, false);
      } else if (this._useHashChange && !this.iframe) {
        t("hashchange", this.checkUrl, false);
      }if (this.iframe) {
        document.body.removeChild(this.iframe);this.iframe = null;
      }if (this._checkUrlInterval) clearInterval(this._checkUrlInterval);M.started = false;
    }, route: function route(t, e) {
      this.handlers.unshift({ route: t, callback: e });
    }, checkUrl: function checkUrl(t) {
      var e = this.getFragment();if (e === this.fragment && this.iframe) {
        e = this.getHash(this.iframe.contentWindow);
      }if (e === this.fragment) return false;if (this.iframe) this.navigate(e);this.loadUrl();
    }, loadUrl: function loadUrl(t) {
      if (!this.matchRoot()) return false;t = this.fragment = this.getFragment(t);return i.some(this.handlers, function (e) {
        if (e.route.test(t)) {
          e.callback(t);return true;
        }
      });
    }, navigate: function navigate(t, e) {
      if (!M.started) return false;if (!e || e === true) e = { trigger: !!e };t = this.getFragment(t || "");var i = this.root;if (t === "" || t.charAt(0) === "?") {
        i = i.slice(0, -1) || "/";
      }var r = i + t;t = this.decodeFragment(t.replace(U, ""));if (this.fragment === t) return;this.fragment = t;if (this._usePushState) {
        this.history[e.replace ? "replaceState" : "pushState"]({}, document.title, r);
      } else if (this._wantsHashChange) {
        this._updateHash(this.location, t, e.replace);if (this.iframe && t !== this.getHash(this.iframe.contentWindow)) {
          var n = this.iframe.contentWindow;if (!e.replace) {
            n.document.open();n.document.close();
          }this._updateHash(n.location, t, e.replace);
        }
      } else {
        return this.location.assign(r);
      }if (e.trigger) return this.loadUrl(t);
    }, _updateHash: function _updateHash(t, e, i) {
      if (i) {
        var r = t.href.replace(/(javascript:|#).*$/, "");t.replace(r + "#" + e);
      } else {
        t.hash = "#" + e;
      }
    } });e.history = new M();var q = function q(t, e) {
    var r = this;var n;if (t && i.has(t, "constructor")) {
      n = t.constructor;
    } else {
      n = function () {
        return r.apply(this, arguments);
      };
    }i.extend(n, r, e);var s = function s() {
      this.constructor = n;
    };s.prototype = r.prototype;n.prototype = new s();if (t) i.extend(n.prototype, t);n.__super__ = r.prototype;return n;
  };y.extend = x.extend = $.extend = I.extend = M.extend = q;var F = function F() {
    throw new Error('A "url" property or function must be specified');
  };var z = function z(t, e) {
    var i = e.error;e.error = function (r) {
      if (i) i.call(e.context, t, r, e);t.trigger("error", t, r, e);
    };
  };return e;
});


}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"jquery":1,"underscore":2}],12:[function(require,module,exports){
"use strict";

(function () {
	function n(a, b, e) {
		return ("string" === typeof b ? b : b.toString()).replace(a.define || h, function (b, c, d, g) {
			0 === c.indexOf("def.") && (c = c.substring(4));c in e || (":" === d ? (a.defineParams && g.replace(a.defineParams, function (b, a, d) {
				e[c] = { arg: a, text: d };
			}), c in e || (e[c] = g)) : new Function("def", "def['" + c + "']=" + g)(e));return "";
		}).replace(a.use || h, function (b, c) {
			a.useParams && (c = c.replace(a.useParams, function (b, a, c, d) {
				if (e[c] && e[c].arg && d) return (b = (c + ":" + d).replace(/'|\\/g, "_"), e.__exp = e.__exp || {}, e.__exp[b] = e[c].text.replace(new RegExp("(^|[^\\w$])" + e[c].arg + "([^\\w$])", "g"), "$1" + d + "$2"), a + "def.__exp['" + b + "']");
			}));var d = new Function("def", "return " + c)(e);return d ? n(a, d, e) : d;
		});
	}function k(a) {
		return a.replace(/\\('|\\)/g, "$1").replace(/[\r\t\n]/g, " ");
	}var f = { version: "1.0.3", templateSettings: { evaluate: /\{\{([\s\S]+?(\}?)+)\}\}/g, interpolate: /\{\{=([\s\S]+?)\}\}/g, encode: /\{\{!([\s\S]+?)\}\}/g, use: /\{\{#([\s\S]+?)\}\}/g, useParams: /(^|[^\w$])def(?:\.|\[[\'\"])([\w$\.]+)(?:[\'\"]\])?\s*\:\s*([\w$\.]+|\"[^\"]+\"|\'[^\']+\'|\{[^\}]+\})/g,
			define: /\{\{##\s*([\w\.$]+)\s*(\:|=)([\s\S]+?)#\}\}/g, defineParams: /^\s*([\w$]+):([\s\S]+)/, conditional: /\{\{\?(\?)?\s*([\s\S]*?)\s*\}\}/g, iterate: /\{\{~\s*(?:\}\}|([\s\S]+?)\s*\:\s*([\w$]+)\s*(?:\:\s*([\w$]+))?\s*\}\})/g, varname: "it", strip: !0, append: !0, selfcontained: !1, doNotSkipEncoded: !1 }, template: void 0, compile: void 0 },
	    l;f.encodeHTMLSource = function (a) {
		var b = { "&": "&#38;", "<": "&#60;", ">": "&#62;", '"': "&#34;", "'": "&#39;", "/": "&#47;" },
		    e = a ? /[&<>"'\/]/g : /&(?!#?\w+;)|<|>|"|'|\//g;return function (a) {
			return a ? a.toString().replace(e, function (a) {
				return b[a] || a;
			}) : "";
		};
	};l = (function () {
		return this || (0, eval)("this");
	})();"undefined" !== typeof module && module.exports ? module.exports = f : "function" === typeof define && define.amd ? define(function () {
		return f;
	}) : l.doT = f;var p = { start: "'+(", end: ")+'", startencode: "'+encodeHTML(" },
	    q = { start: "';out+=(", end: ");out+='", startencode: "';out+=encodeHTML(" },
	    h = /$^/;f.template = function (a, b, e) {
		b = b || f.templateSettings;var m = b.append ? p : q,
		    c,
		    d = 0,
		    g;a = b.use || b.define ? n(b, a, e || {}) : a;a = ("var out='" + (b.strip ? a.replace(/(^|\r|\n)\t* +| +\t*(\r|\n|$)/g, " ").replace(/\r|\n|\t|\/\*[\s\S]*?\*\//g, "") : a).replace(/'|\\/g, "\\$&").replace(b.interpolate || h, function (a, b) {
			return m.start + k(b) + m.end;
		}).replace(b.encode || h, function (a, b) {
			c = !0;return m.startencode + k(b) + m.end;
		}).replace(b.conditional || h, function (a, b, c) {
			return b ? c ? "';}else if(" + k(c) + "){out+='" : "';}else{out+='" : c ? "';if(" + k(c) + "){out+='" : "';}out+='";
		}).replace(b.iterate || h, function (b, a, c, e) {
			if (!a) return "';} } out+='";d += 1;g = e || "i" + d;a = k(a);return "';var arr" + d + "=" + a + ";if(arr" + d + "){var " + c + "," + g + "=-1,l" + d + "=arr" + d + ".length-1;while(" + g + "<l" + d + "){" + c + "=arr" + d + "[" + g + "+=1];out+='";
		}).replace(b.evaluate || h, function (a, b) {
			return "';" + k(b) + "out+='";
		}) + "';return out;").replace(/\n/g, "\\n").replace(/\t/g, "\\t").replace(/\r/g, "\\r").replace(/(\s|;|\}|^|\{)out\+='';/g, "$1").replace(/\+''/g, "");c && (b.selfcontained || !l || l._encodeHTML || (l._encodeHTML = f.encodeHTMLSource(b.doNotSkipEncoded)), a = "var encodeHTML = typeof _encodeHTML !== 'undefined' ? _encodeHTML : (" + f.encodeHTMLSource.toString() + "(" + (b.doNotSkipEncoded || "") + "));" + a);return new Function(b.varname, a);
	};f.compile = function (a, b) {
		return f.template(a, null, b);
	};
})();

},{}],13:[function(require,module,exports){
"use strict";

!(function () {
  "use strict";function t(e, o) {
    function i(t, e) {
      return function () {
        return t.apply(e, arguments);
      };
    }var r;if ((o = o || {}, this.trackingClick = !1, this.trackingClickStart = 0, this.targetElement = null, this.touchStartX = 0, this.touchStartY = 0, this.lastTouchIdentifier = 0, this.touchBoundary = o.touchBoundary || 10, this.layer = e, this.tapDelay = o.tapDelay || 200, this.tapTimeout = o.tapTimeout || 700, !t.notNeeded(e))) {
      for (var a = ["onMouse", "onClick", "onTouchStart", "onTouchMove", "onTouchEnd", "onTouchCancel"], c = this, s = 0, u = a.length; u > s; s++) c[a[s]] = i(c[a[s]], c);n && (e.addEventListener("mouseover", this.onMouse, !0), e.addEventListener("mousedown", this.onMouse, !0), e.addEventListener("mouseup", this.onMouse, !0)), e.addEventListener("click", this.onClick, !0), e.addEventListener("touchstart", this.onTouchStart, !1), e.addEventListener("touchmove", this.onTouchMove, !1), e.addEventListener("touchend", this.onTouchEnd, !1), e.addEventListener("touchcancel", this.onTouchCancel, !1), Event.prototype.stopImmediatePropagation || (e.removeEventListener = function (t, n, o) {
        var i = Node.prototype.removeEventListener;"click" === t ? i.call(e, t, n.hijacked || n, o) : i.call(e, t, n, o);
      }, e.addEventListener = function (t, n, o) {
        var i = Node.prototype.addEventListener;"click" === t ? i.call(e, t, n.hijacked || (n.hijacked = function (t) {
          t.propagationStopped || n(t);
        }), o) : i.call(e, t, n, o);
      }), "function" == typeof e.onclick && (r = e.onclick, e.addEventListener("click", function (t) {
        r(t);
      }, !1), e.onclick = null);
    }
  }var e = navigator.userAgent.indexOf("Windows Phone") >= 0,
      n = navigator.userAgent.indexOf("Android") > 0 && !e,
      o = /iP(ad|hone|od)/.test(navigator.userAgent) && !e,
      i = o && /OS 4_\d(_\d)?/.test(navigator.userAgent),
      r = o && /OS [6-7]_\d/.test(navigator.userAgent),
      a = navigator.userAgent.indexOf("BB10") > 0;t.prototype.needsClick = function (t) {
    switch (t.nodeName.toLowerCase()) {case "button":case "select":case "textarea":
        if (t.disabled) return !0;break;case "input":
        if (o && "file" === t.type || t.disabled) return !0;break;case "label":case "iframe":case "video":
        return !0;}return (/\bneedsclick\b/.test(t.className)
    );
  }, t.prototype.needsFocus = function (t) {
    switch (t.nodeName.toLowerCase()) {case "textarea":
        return !0;case "select":
        return !n;case "input":
        switch (t.type) {case "button":case "checkbox":case "file":case "image":case "radio":case "submit":
            return !1;}return !t.disabled && !t.readOnly;default:
        return (/\bneedsfocus\b/.test(t.className)
        );}
  }, t.prototype.sendClick = function (t, e) {
    var n, o;document.activeElement && document.activeElement !== t && document.activeElement.blur(), o = e.changedTouches[0], n = document.createEvent("MouseEvents"), n.initMouseEvent(this.determineEventType(t), !0, !0, window, 1, o.screenX, o.screenY, o.clientX, o.clientY, !1, !1, !1, !1, 0, null), n.forwardedTouchEvent = !0, t.dispatchEvent(n);
  }, t.prototype.determineEventType = function (t) {
    return n && "select" === t.tagName.toLowerCase() ? "mousedown" : "click";
  }, t.prototype.focus = function (t) {
    var e;o && t.setSelectionRange && 0 !== t.type.indexOf("date") && "time" !== t.type && "month" !== t.type ? (e = t.value.length, t.setSelectionRange(e, e)) : t.focus();
  }, t.prototype.updateScrollParent = function (t) {
    var e, n;if ((e = t.fastClickScrollParent, !e || !e.contains(t))) {
      n = t;do {
        if (n.scrollHeight > n.offsetHeight) {
          e = n, t.fastClickScrollParent = n;break;
        }n = n.parentElement;
      } while (n);
    }e && (e.fastClickLastScrollTop = e.scrollTop);
  }, t.prototype.getTargetElementFromEventTarget = function (t) {
    return t.nodeType === Node.TEXT_NODE ? t.parentNode : t;
  }, t.prototype.onTouchStart = function (t) {
    var e, n, r;if (t.targetTouches.length > 1) return !0;if ((e = this.getTargetElementFromEventTarget(t.target), n = t.targetTouches[0], o)) {
      if ((r = window.getSelection(), r.rangeCount && !r.isCollapsed)) return !0;if (!i) {
        if (n.identifier && n.identifier === this.lastTouchIdentifier) return (t.preventDefault(), !1);this.lastTouchIdentifier = n.identifier, this.updateScrollParent(e);
      }
    }return (this.trackingClick = !0, this.trackingClickStart = t.timeStamp, this.targetElement = e, this.touchStartX = n.pageX, this.touchStartY = n.pageY, t.timeStamp - this.lastClickTime < this.tapDelay && t.preventDefault(), !0);
  }, t.prototype.touchHasMoved = function (t) {
    var e = t.changedTouches[0],
        n = this.touchBoundary;return Math.abs(e.pageX - this.touchStartX) > n || Math.abs(e.pageY - this.touchStartY) > n ? !0 : !1;
  }, t.prototype.onTouchMove = function (t) {
    return this.trackingClick ? ((this.targetElement !== this.getTargetElementFromEventTarget(t.target) || this.touchHasMoved(t)) && (this.trackingClick = !1, this.targetElement = null), !0) : !0;
  }, t.prototype.findControl = function (t) {
    return void 0 !== t.control ? t.control : t.htmlFor ? document.getElementById(t.htmlFor) : t.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea");
  }, t.prototype.onTouchEnd = function (t) {
    var e,
        a,
        c,
        s,
        u,
        l = this.targetElement;if (!this.trackingClick) return !0;if (t.timeStamp - this.lastClickTime < this.tapDelay) return (this.cancelNextClick = !0, !0);if (t.timeStamp - this.trackingClickStart > this.tapTimeout) return !0;if ((this.cancelNextClick = !1, this.lastClickTime = t.timeStamp, a = this.trackingClickStart, this.trackingClick = !1, this.trackingClickStart = 0, r && (u = t.changedTouches[0], l = document.elementFromPoint(u.pageX - window.pageXOffset, u.pageY - window.pageYOffset) || l, l.fastClickScrollParent = this.targetElement.fastClickScrollParent), c = l.tagName.toLowerCase(), "label" === c)) {
      if (e = this.findControl(l)) {
        if ((this.focus(l), n)) return !1;l = e;
      }
    } else if (this.needsFocus(l)) return t.timeStamp - a > 100 || o && window.top !== window && "input" === c ? (this.targetElement = null, !1) : (this.focus(l), this.sendClick(l, t), o && "select" === c || (this.targetElement = null, t.preventDefault()), !1);return o && !i && (s = l.fastClickScrollParent, s && s.fastClickLastScrollTop !== s.scrollTop) ? !0 : (this.needsClick(l) || (t.preventDefault(), this.sendClick(l, t)), !1);
  }, t.prototype.onTouchCancel = function () {
    this.trackingClick = !1, this.targetElement = null;
  }, t.prototype.onMouse = function (t) {
    return this.targetElement ? t.forwardedTouchEvent ? !0 : t.cancelable && (!this.needsClick(this.targetElement) || this.cancelNextClick) ? (t.stopImmediatePropagation ? t.stopImmediatePropagation() : t.propagationStopped = !0, t.stopPropagation(), t.preventDefault(), !1) : !0 : !0;
  }, t.prototype.onClick = function (t) {
    var e;return this.trackingClick ? (this.targetElement = null, this.trackingClick = !1, !0) : "submit" === t.target.type && 0 === t.detail ? !0 : (e = this.onMouse(t), e || (this.targetElement = null), e);
  }, t.prototype.destroy = function () {
    var t = this.layer;n && (t.removeEventListener("mouseover", this.onMouse, !0), t.removeEventListener("mousedown", this.onMouse, !0), t.removeEventListener("mouseup", this.onMouse, !0)), t.removeEventListener("click", this.onClick, !0), t.removeEventListener("touchstart", this.onTouchStart, !1), t.removeEventListener("touchmove", this.onTouchMove, !1), t.removeEventListener("touchend", this.onTouchEnd, !1), t.removeEventListener("touchcancel", this.onTouchCancel, !1);
  }, t.notNeeded = function (t) {
    var e, o, i, r;if ("undefined" == typeof window.ontouchstart) return !0;if (o = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1]) {
      if (!n) return !0;if (e = document.querySelector("meta[name=viewport]")) {
        if (-1 !== e.content.indexOf("user-scalable=no")) return !0;if (o > 31 && document.documentElement.scrollWidth <= window.outerWidth) return !0;
      }
    }if (a && (i = navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/), i[1] >= 10 && i[2] >= 3 && (e = document.querySelector("meta[name=viewport]")))) {
      if (-1 !== e.content.indexOf("user-scalable=no")) return !0;if (document.documentElement.scrollWidth <= window.outerWidth) return !0;
    }return "none" === t.style.msTouchAction || "manipulation" === t.style.touchAction ? !0 : (r = +(/Firefox\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1], r >= 27 && (e = document.querySelector("meta[name=viewport]"), e && (-1 !== e.content.indexOf("user-scalable=no") || document.documentElement.scrollWidth <= window.outerWidth)) ? !0 : "none" === t.style.touchAction || "manipulation" === t.style.touchAction ? !0 : !1);
  }, t.attach = function (e, n) {
    return new t(e, n);
  }, "function" == typeof define && "object" == typeof define.amd && define.amd ? define(function () {
    return t;
  }) : "undefined" != typeof module && module.exports ? (module.exports = t.attach, module.exports.FastClick = t) : window.FastClick = t;
})();

},{}],14:[function(require,module,exports){
/*! jQuery v2.1.4 | (c) 2005, 2015 jQuery Foundation, Inc. | jquery.org/license */
"use strict";

!(function (a, b) {
	"object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function (a) {
		if (!a.document) throw new Error("jQuery requires a window with a document");return b(a);
	} : b(a);
})("undefined" != typeof window ? window : undefined, function (a, b) {
	var c = [],
	    d = c.slice,
	    e = c.concat,
	    f = c.push,
	    g = c.indexOf,
	    h = {},
	    i = h.toString,
	    j = h.hasOwnProperty,
	    k = {},
	    l = a.document,
	    m = "2.1.4",
	    n = function n(a, b) {
		return new n.fn.init(a, b);
	},
	    o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
	    p = /^-ms-/,
	    q = /-([\da-z])/gi,
	    r = function r(a, b) {
		return b.toUpperCase();
	};n.fn = n.prototype = { jquery: m, constructor: n, selector: "", length: 0, toArray: function toArray() {
			return d.call(this);
		}, get: function get(a) {
			return null != a ? 0 > a ? this[a + this.length] : this[a] : d.call(this);
		}, pushStack: function pushStack(a) {
			var b = n.merge(this.constructor(), a);return (b.prevObject = this, b.context = this.context, b);
		}, each: function each(a, b) {
			return n.each(this, a, b);
		}, map: function map(a) {
			return this.pushStack(n.map(this, function (b, c) {
				return a.call(b, c, b);
			}));
		}, slice: function slice() {
			return this.pushStack(d.apply(this, arguments));
		}, first: function first() {
			return this.eq(0);
		}, last: function last() {
			return this.eq(-1);
		}, eq: function eq(a) {
			var b = this.length,
			    c = +a + (0 > a ? b : 0);return this.pushStack(c >= 0 && b > c ? [this[c]] : []);
		}, end: function end() {
			return this.prevObject || this.constructor(null);
		}, push: f, sort: c.sort, splice: c.splice }, n.extend = n.fn.extend = function () {
		var a,
		    b,
		    c,
		    d,
		    e,
		    f,
		    g = arguments[0] || {},
		    h = 1,
		    i = arguments.length,
		    j = !1;for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || n.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++) if (null != (a = arguments[h])) for (b in a) c = g[b], d = a[b], g !== d && (j && d && (n.isPlainObject(d) || (e = n.isArray(d))) ? (e ? (e = !1, f = c && n.isArray(c) ? c : []) : f = c && n.isPlainObject(c) ? c : {}, g[b] = n.extend(j, f, d)) : void 0 !== d && (g[b] = d));return g;
	}, n.extend({ expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""), isReady: !0, error: function error(a) {
			throw new Error(a);
		}, noop: function noop() {}, isFunction: function isFunction(a) {
			return "function" === n.type(a);
		}, isArray: Array.isArray, isWindow: function isWindow(a) {
			return null != a && a === a.window;
		}, isNumeric: function isNumeric(a) {
			return !n.isArray(a) && a - parseFloat(a) + 1 >= 0;
		}, isPlainObject: function isPlainObject(a) {
			return "object" !== n.type(a) || a.nodeType || n.isWindow(a) ? !1 : a.constructor && !j.call(a.constructor.prototype, "isPrototypeOf") ? !1 : !0;
		}, isEmptyObject: function isEmptyObject(a) {
			var b;for (b in a) return !1;return !0;
		}, type: function type(a) {
			return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? h[i.call(a)] || "object" : typeof a;
		}, globalEval: function globalEval(a) {
			var b,
			    c = eval;a = n.trim(a), a && (1 === a.indexOf("use strict") ? (b = l.createElement("script"), b.text = a, l.head.appendChild(b).parentNode.removeChild(b)) : c(a));
		}, camelCase: function camelCase(a) {
			return a.replace(p, "ms-").replace(q, r);
		}, nodeName: function nodeName(a, b) {
			return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase();
		}, each: function each(a, b, c) {
			var d,
			    e = 0,
			    f = a.length,
			    g = s(a);if (c) {
				if (g) {
					for (; f > e; e++) if ((d = b.apply(a[e], c), d === !1)) break;
				} else for (e in a) if ((d = b.apply(a[e], c), d === !1)) break;
			} else if (g) {
				for (; f > e; e++) if ((d = b.call(a[e], e, a[e]), d === !1)) break;
			} else for (e in a) if ((d = b.call(a[e], e, a[e]), d === !1)) break;return a;
		}, trim: function trim(a) {
			return null == a ? "" : (a + "").replace(o, "");
		}, makeArray: function makeArray(a, b) {
			var c = b || [];return (null != a && (s(Object(a)) ? n.merge(c, "string" == typeof a ? [a] : a) : f.call(c, a)), c);
		}, inArray: function inArray(a, b, c) {
			return null == b ? -1 : g.call(b, a, c);
		}, merge: function merge(a, b) {
			for (var c = +b.length, d = 0, e = a.length; c > d; d++) a[e++] = b[d];return (a.length = e, a);
		}, grep: function grep(a, b, c) {
			for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) d = !b(a[f], f), d !== h && e.push(a[f]);return e;
		}, map: function map(a, b, c) {
			var d,
			    f = 0,
			    g = a.length,
			    h = s(a),
			    i = [];if (h) for (; g > f; f++) d = b(a[f], f, c), null != d && i.push(d);else for (f in a) d = b(a[f], f, c), null != d && i.push(d);return e.apply([], i);
		}, guid: 1, proxy: function proxy(a, b) {
			var c, e, f;return ("string" == typeof b && (c = a[b], b = a, a = c), n.isFunction(a) ? (e = d.call(arguments, 2), f = function () {
				return a.apply(b || this, e.concat(d.call(arguments)));
			}, f.guid = a.guid = a.guid || n.guid++, f) : void 0);
		}, now: Date.now, support: k }), n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (a, b) {
		h["[object " + b + "]"] = b.toLowerCase();
	});function s(a) {
		var b = "length" in a && a.length,
		    c = n.type(a);return "function" === c || n.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a;
	}var t = (function (a) {
		var b,
		    c,
		    d,
		    e,
		    f,
		    g,
		    h,
		    i,
		    j,
		    k,
		    l,
		    m,
		    n,
		    o,
		    p,
		    q,
		    r,
		    s,
		    t,
		    u = "sizzle" + 1 * new Date(),
		    v = a.document,
		    w = 0,
		    x = 0,
		    y = ha(),
		    z = ha(),
		    A = ha(),
		    B = function B(a, b) {
			return (a === b && (l = !0), 0);
		},
		    C = 1 << 31,
		    D = ({}).hasOwnProperty,
		    E = [],
		    F = E.pop,
		    G = E.push,
		    H = E.push,
		    I = E.slice,
		    J = function J(a, b) {
			for (var c = 0, d = a.length; d > c; c++) if (a[c] === b) return c;return -1;
		},
		    K = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
		    L = "[\\x20\\t\\r\\n\\f]",
		    M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
		    N = M.replace("w", "w#"),
		    O = "\\[" + L + "*(" + M + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + N + "))|)" + L + "*\\]",
		    P = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + O + ")*)|.*)\\)|)",
		    Q = new RegExp(L + "+", "g"),
		    R = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"),
		    S = new RegExp("^" + L + "*," + L + "*"),
		    T = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"),
		    U = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"),
		    V = new RegExp(P),
		    W = new RegExp("^" + N + "$"),
		    X = { ID: new RegExp("^#(" + M + ")"), CLASS: new RegExp("^\\.(" + M + ")"), TAG: new RegExp("^(" + M.replace("w", "w*") + ")"), ATTR: new RegExp("^" + O), PSEUDO: new RegExp("^" + P), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)", "i"), bool: new RegExp("^(?:" + K + ")$", "i"), needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)", "i") },
		    Y = /^(?:input|select|textarea|button)$/i,
		    Z = /^h\d$/i,
		    $ = /^[^{]+\{\s*\[native \w/,
		    _ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
		    aa = /[+~]/,
		    ba = /'|\\/g,
		    ca = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"),
		    da = function da(a, b, c) {
			var d = "0x" + b - 65536;return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320);
		},
		    ea = function ea() {
			m();
		};try {
			H.apply(E = I.call(v.childNodes), v.childNodes), E[v.childNodes.length].nodeType;
		} catch (fa) {
			H = { apply: E.length ? function (a, b) {
					G.apply(a, I.call(b));
				} : function (a, b) {
					var c = a.length,
					    d = 0;while (a[c++] = b[d++]);a.length = c - 1;
				} };
		}function ga(a, b, d, e) {
			var f, h, j, k, l, o, r, s, w, x;if (((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, d = d || [], k = b.nodeType, "string" != typeof a || !a || 1 !== k && 9 !== k && 11 !== k)) return d;if (!e && p) {
				if (11 !== k && (f = _.exec(a))) if (j = f[1]) {
					if (9 === k) {
						if ((h = b.getElementById(j), !h || !h.parentNode)) return d;if (h.id === j) return (d.push(h), d);
					} else if (b.ownerDocument && (h = b.ownerDocument.getElementById(j)) && t(b, h) && h.id === j) return (d.push(h), d);
				} else {
					if (f[2]) return (H.apply(d, b.getElementsByTagName(a)), d);if ((j = f[3]) && c.getElementsByClassName) return (H.apply(d, b.getElementsByClassName(j)), d);
				}if (c.qsa && (!q || !q.test(a))) {
					if ((s = r = u, w = b, x = 1 !== k && a, 1 === k && "object" !== b.nodeName.toLowerCase())) {
						o = g(a), (r = b.getAttribute("id")) ? s = r.replace(ba, "\\$&") : b.setAttribute("id", s), s = "[id='" + s + "'] ", l = o.length;while (l--) o[l] = s + ra(o[l]);w = aa.test(a) && pa(b.parentNode) || b, x = o.join(",");
					}if (x) try {
						return (H.apply(d, w.querySelectorAll(x)), d);
					} catch (y) {} finally {
						r || b.removeAttribute("id");
					}
				}
			}return i(a.replace(R, "$1"), b, d, e);
		}function ha() {
			var a = [];function b(c, e) {
				return (a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e);
			}return b;
		}function ia(a) {
			return (a[u] = !0, a);
		}function ja(a) {
			var b = n.createElement("div");try {
				return !!a(b);
			} catch (c) {
				return !1;
			} finally {
				b.parentNode && b.parentNode.removeChild(b), b = null;
			}
		}function ka(a, b) {
			var c = a.split("|"),
			    e = a.length;while (e--) d.attrHandle[c[e]] = b;
		}function la(a, b) {
			var c = b && a,
			    d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || C) - (~a.sourceIndex || C);if (d) return d;if (c) while (c = c.nextSibling) if (c === b) return -1;return a ? 1 : -1;
		}function ma(a) {
			return function (b) {
				var c = b.nodeName.toLowerCase();return "input" === c && b.type === a;
			};
		}function na(a) {
			return function (b) {
				var c = b.nodeName.toLowerCase();return ("input" === c || "button" === c) && b.type === a;
			};
		}function oa(a) {
			return ia(function (b) {
				return (b = +b, ia(function (c, d) {
					var e,
					    f = a([], c.length, b),
					    g = f.length;while (g--) c[e = f[g]] && (c[e] = !(d[e] = c[e]));
				}));
			});
		}function pa(a) {
			return a && "undefined" != typeof a.getElementsByTagName && a;
		}c = ga.support = {}, f = ga.isXML = function (a) {
			var b = a && (a.ownerDocument || a).documentElement;return b ? "HTML" !== b.nodeName : !1;
		}, m = ga.setDocument = function (a) {
			var b,
			    e,
			    g = a ? a.ownerDocument || a : v;return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = g.documentElement, e = g.defaultView, e && e !== e.top && (e.addEventListener ? e.addEventListener("unload", ea, !1) : e.attachEvent && e.attachEvent("onunload", ea)), p = !f(g), c.attributes = ja(function (a) {
				return (a.className = "i", !a.getAttribute("className"));
			}), c.getElementsByTagName = ja(function (a) {
				return (a.appendChild(g.createComment("")), !a.getElementsByTagName("*").length);
			}), c.getElementsByClassName = $.test(g.getElementsByClassName), c.getById = ja(function (a) {
				return (o.appendChild(a).id = u, !g.getElementsByName || !g.getElementsByName(u).length);
			}), c.getById ? (d.find.ID = function (a, b) {
				if ("undefined" != typeof b.getElementById && p) {
					var c = b.getElementById(a);return c && c.parentNode ? [c] : [];
				}
			}, d.filter.ID = function (a) {
				var b = a.replace(ca, da);return function (a) {
					return a.getAttribute("id") === b;
				};
			}) : (delete d.find.ID, d.filter.ID = function (a) {
				var b = a.replace(ca, da);return function (a) {
					var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");return c && c.value === b;
				};
			}), d.find.TAG = c.getElementsByTagName ? function (a, b) {
				return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0;
			} : function (a, b) {
				var c,
				    d = [],
				    e = 0,
				    f = b.getElementsByTagName(a);if ("*" === a) {
					while (c = f[e++]) 1 === c.nodeType && d.push(c);return d;
				}return f;
			}, d.find.CLASS = c.getElementsByClassName && function (a, b) {
				return p ? b.getElementsByClassName(a) : void 0;
			}, r = [], q = [], (c.qsa = $.test(g.querySelectorAll)) && (ja(function (a) {
				o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\f]' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + L + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + L + "*(?:value|" + K + ")"), a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]");
			}), ja(function (a) {
				var b = g.createElement("input");b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + L + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:");
			})), (c.matchesSelector = $.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ja(function (a) {
				c.disconnectedMatch = s.call(a, "div"), s.call(a, "[s!='']:x"), r.push("!=", P);
			}), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = $.test(o.compareDocumentPosition), t = b || $.test(o.contains) ? function (a, b) {
				var c = 9 === a.nodeType ? a.documentElement : a,
				    d = b && b.parentNode;return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)));
			} : function (a, b) {
				if (b) while (b = b.parentNode) if (b === a) return !0;return !1;
			}, B = b ? function (a, b) {
				if (a === b) return (l = !0, 0);var d = !a.compareDocumentPosition - !b.compareDocumentPosition;return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === g || a.ownerDocument === v && t(v, a) ? -1 : b === g || b.ownerDocument === v && t(v, b) ? 1 : k ? J(k, a) - J(k, b) : 0 : 4 & d ? -1 : 1);
			} : function (a, b) {
				if (a === b) return (l = !0, 0);var c,
				    d = 0,
				    e = a.parentNode,
				    f = b.parentNode,
				    h = [a],
				    i = [b];if (!e || !f) return a === g ? -1 : b === g ? 1 : e ? -1 : f ? 1 : k ? J(k, a) - J(k, b) : 0;if (e === f) return la(a, b);c = a;while (c = c.parentNode) h.unshift(c);c = b;while (c = c.parentNode) i.unshift(c);while (h[d] === i[d]) d++;return d ? la(h[d], i[d]) : h[d] === v ? -1 : i[d] === v ? 1 : 0;
			}, g) : n;
		}, ga.matches = function (a, b) {
			return ga(a, null, null, b);
		}, ga.matchesSelector = function (a, b) {
			if (((a.ownerDocument || a) !== n && m(a), b = b.replace(U, "='$1']"), !(!c.matchesSelector || !p || r && r.test(b) || q && q.test(b)))) try {
				var d = s.call(a, b);if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d;
			} catch (e) {}return ga(b, n, null, [a]).length > 0;
		}, ga.contains = function (a, b) {
			return ((a.ownerDocument || a) !== n && m(a), t(a, b));
		}, ga.attr = function (a, b) {
			(a.ownerDocument || a) !== n && m(a);var e = d.attrHandle[b.toLowerCase()],
			    f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null;
		}, ga.error = function (a) {
			throw new Error("Syntax error, unrecognized expression: " + a);
		}, ga.uniqueSort = function (a) {
			var b,
			    d = [],
			    e = 0,
			    f = 0;if ((l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l)) {
				while (b = a[f++]) b === a[f] && (e = d.push(f));while (e--) a.splice(d[e], 1);
			}return (k = null, a);
		}, e = ga.getText = function (a) {
			var b,
			    c = "",
			    d = 0,
			    f = a.nodeType;if (f) {
				if (1 === f || 9 === f || 11 === f) {
					if ("string" == typeof a.textContent) return a.textContent;for (a = a.firstChild; a; a = a.nextSibling) c += e(a);
				} else if (3 === f || 4 === f) return a.nodeValue;
			} else while (b = a[d++]) c += e(b);return c;
		}, d = ga.selectors = { cacheLength: 50, createPseudo: ia, match: X, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function ATTR(a) {
					return (a[1] = a[1].replace(ca, da), a[3] = (a[3] || a[4] || a[5] || "").replace(ca, da), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4));
				}, CHILD: function CHILD(a) {
					return (a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || ga.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && ga.error(a[0]), a);
				}, PSEUDO: function PSEUDO(a) {
					var b,
					    c = !a[6] && a[2];return X.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && V.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3));
				} }, filter: { TAG: function TAG(a) {
					var b = a.replace(ca, da).toLowerCase();return "*" === a ? function () {
						return !0;
					} : function (a) {
						return a.nodeName && a.nodeName.toLowerCase() === b;
					};
				}, CLASS: function CLASS(a) {
					var b = y[a + " "];return b || (b = new RegExp("(^|" + L + ")" + a + "(" + L + "|$)")) && y(a, function (a) {
						return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "");
					});
				}, ATTR: function ATTR(a, b, c) {
					return function (d) {
						var e = ga.attr(d, a);return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(Q, " ") + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0;
					};
				}, CHILD: function CHILD(a, b, c, d, e) {
					var f = "nth" !== a.slice(0, 3),
					    g = "last" !== a.slice(-4),
					    h = "of-type" === b;return 1 === d && 0 === e ? function (a) {
						return !!a.parentNode;
					} : function (b, c, i) {
						var j,
						    k,
						    l,
						    m,
						    n,
						    o,
						    p = f !== g ? "nextSibling" : "previousSibling",
						    q = b.parentNode,
						    r = h && b.nodeName.toLowerCase(),
						    s = !i && !h;if (q) {
							if (f) {
								while (p) {
									l = b;while (l = l[p]) if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) return !1;o = p = "only" === a && !o && "nextSibling";
								}return !0;
							}if ((o = [g ? q.firstChild : q.lastChild], g && s)) {
								k = q[u] || (q[u] = {}), j = k[a] || [], n = j[0] === w && j[1], m = j[0] === w && j[2], l = n && q.childNodes[n];while (l = ++n && l && l[p] || (m = n = 0) || o.pop()) if (1 === l.nodeType && ++m && l === b) {
									k[a] = [w, n, m];break;
								}
							} else if (s && (j = (b[u] || (b[u] = {}))[a]) && j[0] === w) m = j[1];else while (l = ++n && l && l[p] || (m = n = 0) || o.pop()) if ((h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) && ++m && (s && ((l[u] || (l[u] = {}))[a] = [w, m]), l === b)) break;return (m -= e, m === d || m % d === 0 && m / d >= 0);
						}
					};
				}, PSEUDO: function PSEUDO(a, b) {
					var c,
					    e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || ga.error("unsupported pseudo: " + a);return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ia(function (a, c) {
						var d,
						    f = e(a, b),
						    g = f.length;while (g--) d = J(a, f[g]), a[d] = !(c[d] = f[g]);
					}) : function (a) {
						return e(a, 0, c);
					}) : e;
				} }, pseudos: { not: ia(function (a) {
					var b = [],
					    c = [],
					    d = h(a.replace(R, "$1"));return d[u] ? ia(function (a, b, c, e) {
						var f,
						    g = d(a, null, e, []),
						    h = a.length;while (h--) (f = g[h]) && (a[h] = !(b[h] = f));
					}) : function (a, e, f) {
						return (b[0] = a, d(b, null, f, c), b[0] = null, !c.pop());
					};
				}), has: ia(function (a) {
					return function (b) {
						return ga(a, b).length > 0;
					};
				}), contains: ia(function (a) {
					return (a = a.replace(ca, da), function (b) {
						return (b.textContent || b.innerText || e(b)).indexOf(a) > -1;
					});
				}), lang: ia(function (a) {
					return (W.test(a || "") || ga.error("unsupported lang: " + a), a = a.replace(ca, da).toLowerCase(), function (b) {
						var c;do if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return (c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-")); while ((b = b.parentNode) && 1 === b.nodeType);return !1;
					});
				}), target: function target(b) {
					var c = a.location && a.location.hash;return c && c.slice(1) === b.id;
				}, root: function root(a) {
					return a === o;
				}, focus: function focus(a) {
					return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex);
				}, enabled: function enabled(a) {
					return a.disabled === !1;
				}, disabled: function disabled(a) {
					return a.disabled === !0;
				}, checked: function checked(a) {
					var b = a.nodeName.toLowerCase();return "input" === b && !!a.checked || "option" === b && !!a.selected;
				}, selected: function selected(a) {
					return (a.parentNode && a.parentNode.selectedIndex, a.selected === !0);
				}, empty: function empty(a) {
					for (a = a.firstChild; a; a = a.nextSibling) if (a.nodeType < 6) return !1;return !0;
				}, parent: function parent(a) {
					return !d.pseudos.empty(a);
				}, header: function header(a) {
					return Z.test(a.nodeName);
				}, input: function input(a) {
					return Y.test(a.nodeName);
				}, button: function button(a) {
					var b = a.nodeName.toLowerCase();return "input" === b && "button" === a.type || "button" === b;
				}, text: function text(a) {
					var b;return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase());
				}, first: oa(function () {
					return [0];
				}), last: oa(function (a, b) {
					return [b - 1];
				}), eq: oa(function (a, b, c) {
					return [0 > c ? c + b : c];
				}), even: oa(function (a, b) {
					for (var c = 0; b > c; c += 2) a.push(c);return a;
				}), odd: oa(function (a, b) {
					for (var c = 1; b > c; c += 2) a.push(c);return a;
				}), lt: oa(function (a, b, c) {
					for (var d = 0 > c ? c + b : c; --d >= 0;) a.push(d);return a;
				}), gt: oa(function (a, b, c) {
					for (var d = 0 > c ? c + b : c; ++d < b;) a.push(d);return a;
				}) } }, d.pseudos.nth = d.pseudos.eq;for (b in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) d.pseudos[b] = ma(b);for (b in { submit: !0, reset: !0 }) d.pseudos[b] = na(b);function qa() {}qa.prototype = d.filters = d.pseudos, d.setFilters = new qa(), g = ga.tokenize = function (a, b) {
			var c,
			    e,
			    f,
			    g,
			    h,
			    i,
			    j,
			    k = z[a + " "];if (k) return b ? 0 : k.slice(0);h = a, i = [], j = d.preFilter;while (h) {
				(!c || (e = S.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = T.exec(h)) && (c = e.shift(), f.push({ value: c, type: e[0].replace(R, " ") }), h = h.slice(c.length));for (g in d.filter) !(e = X[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({ value: c, type: g, matches: e }), h = h.slice(c.length));if (!c) break;
			}return b ? h.length : h ? ga.error(a) : z(a, i).slice(0);
		};function ra(a) {
			for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;return d;
		}function sa(a, b, c) {
			var d = b.dir,
			    e = c && "parentNode" === d,
			    f = x++;return b.first ? function (b, c, f) {
				while (b = b[d]) if (1 === b.nodeType || e) return a(b, c, f);
			} : function (b, c, g) {
				var h,
				    i,
				    j = [w, f];if (g) {
					while (b = b[d]) if ((1 === b.nodeType || e) && a(b, c, g)) return !0;
				} else while (b = b[d]) if (1 === b.nodeType || e) {
					if ((i = b[u] || (b[u] = {}), (h = i[d]) && h[0] === w && h[1] === f)) return j[2] = h[2];if ((i[d] = j, j[2] = a(b, c, g))) return !0;
				}
			};
		}function ta(a) {
			return a.length > 1 ? function (b, c, d) {
				var e = a.length;while (e--) if (!a[e](b, c, d)) return !1;return !0;
			} : a[0];
		}function ua(a, b, c) {
			for (var d = 0, e = b.length; e > d; d++) ga(a, b[d], c);return c;
		}function va(a, b, c, d, e) {
			for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++) (f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));return g;
		}function wa(a, b, c, d, e, f) {
			return (d && !d[u] && (d = wa(d)), e && !e[u] && (e = wa(e, f)), ia(function (f, g, h, i) {
				var j,
				    k,
				    l,
				    m = [],
				    n = [],
				    o = g.length,
				    p = f || ua(b || "*", h.nodeType ? [h] : h, []),
				    q = !a || !f && b ? p : va(p, m, a, h, i),
				    r = c ? e || (f ? a : o || d) ? [] : g : q;if ((c && c(q, r, h, i), d)) {
					j = va(r, n), d(j, [], h, i), k = j.length;while (k--) (l = j[k]) && (r[n[k]] = !(q[n[k]] = l));
				}if (f) {
					if (e || a) {
						if (e) {
							j = [], k = r.length;while (k--) (l = r[k]) && j.push(q[k] = l);e(null, r = [], j, i);
						}k = r.length;while (k--) (l = r[k]) && (j = e ? J(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l));
					}
				} else r = va(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : H.apply(g, r);
			}));
		}function xa(a) {
			for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = sa(function (a) {
				return a === b;
			}, h, !0), l = sa(function (a) {
				return J(b, a) > -1;
			}, h, !0), m = [function (a, c, d) {
				var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));return (b = null, e);
			}]; f > i; i++) if (c = d.relative[a[i].type]) m = [sa(ta(m), c)];else {
				if ((c = d.filter[a[i].type].apply(null, a[i].matches), c[u])) {
					for (e = ++i; f > e; e++) if (d.relative[a[e].type]) break;return wa(i > 1 && ta(m), i > 1 && ra(a.slice(0, i - 1).concat({ value: " " === a[i - 2].type ? "*" : "" })).replace(R, "$1"), c, e > i && xa(a.slice(i, e)), f > e && xa(a = a.slice(e)), f > e && ra(a));
				}m.push(c);
			}return ta(m);
		}function ya(a, b) {
			var c = b.length > 0,
			    e = a.length > 0,
			    f = function f(_f, g, h, i, k) {
				var l,
				    m,
				    o,
				    p = 0,
				    q = "0",
				    r = _f && [],
				    s = [],
				    t = j,
				    u = _f || e && d.find.TAG("*", k),
				    v = w += null == t ? 1 : Math.random() || .1,
				    x = u.length;for (k && (j = g !== n && g); q !== x && null != (l = u[q]); q++) {
					if (e && l) {
						m = 0;while (o = a[m++]) if (o(l, g, h)) {
							i.push(l);break;
						}k && (w = v);
					}c && ((l = !o && l) && p--, _f && r.push(l));
				}if ((p += q, c && q !== p)) {
					m = 0;while (o = b[m++]) o(r, s, g, h);if (_f) {
						if (p > 0) while (q--) r[q] || s[q] || (s[q] = F.call(i));s = va(s);
					}H.apply(i, s), k && !_f && s.length > 0 && p + b.length > 1 && ga.uniqueSort(i);
				}return (k && (w = v, j = t), r);
			};return c ? ia(f) : f;
		}return (h = ga.compile = function (a, b) {
			var c,
			    d = [],
			    e = [],
			    f = A[a + " "];if (!f) {
				b || (b = g(a)), c = b.length;while (c--) f = xa(b[c]), f[u] ? d.push(f) : e.push(f);f = A(a, ya(e, d)), f.selector = a;
			}return f;
		}, i = ga.select = function (a, b, e, f) {
			var i,
			    j,
			    k,
			    l,
			    m,
			    n = "function" == typeof a && a,
			    o = !f && g(a = n.selector || a);if ((e = e || [], 1 === o.length)) {
				if ((j = o[0] = o[0].slice(0), j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type])) {
					if ((b = (d.find.ID(k.matches[0].replace(ca, da), b) || [])[0], !b)) return e;n && (b = b.parentNode), a = a.slice(j.shift().value.length);
				}i = X.needsContext.test(a) ? 0 : j.length;while (i--) {
					if ((k = j[i], d.relative[l = k.type])) break;if ((m = d.find[l]) && (f = m(k.matches[0].replace(ca, da), aa.test(j[0].type) && pa(b.parentNode) || b))) {
						if ((j.splice(i, 1), a = f.length && ra(j), !a)) return (H.apply(e, f), e);break;
					}
				}
			}return ((n || h(a, o))(f, b, !p, e, aa.test(a) && pa(b.parentNode) || b), e);
		}, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ja(function (a) {
			return 1 & a.compareDocumentPosition(n.createElement("div"));
		}), ja(function (a) {
			return (a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href"));
		}) || ka("type|href|height|width", function (a, b, c) {
			return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2);
		}), c.attributes && ja(function (a) {
			return (a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value"));
		}) || ka("value", function (a, b, c) {
			return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue;
		}), ja(function (a) {
			return null == a.getAttribute("disabled");
		}) || ka(K, function (a, b, c) {
			var d;return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null;
		}), ga);
	})(a);n.find = t, n.expr = t.selectors, n.expr[":"] = n.expr.pseudos, n.unique = t.uniqueSort, n.text = t.getText, n.isXMLDoc = t.isXML, n.contains = t.contains;var u = n.expr.match.needsContext,
	    v = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
	    w = /^.[^:#\[\.,]*$/;function x(a, b, c) {
		if (n.isFunction(b)) return n.grep(a, function (a, d) {
			return !!b.call(a, d, a) !== c;
		});if (b.nodeType) return n.grep(a, function (a) {
			return a === b !== c;
		});if ("string" == typeof b) {
			if (w.test(b)) return n.filter(b, a, c);b = n.filter(b, a);
		}return n.grep(a, function (a) {
			return g.call(b, a) >= 0 !== c;
		});
	}n.filter = function (a, b, c) {
		var d = b[0];return (c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? n.find.matchesSelector(d, a) ? [d] : [] : n.find.matches(a, n.grep(b, function (a) {
			return 1 === a.nodeType;
		})));
	}, n.fn.extend({ find: function find(a) {
			var b,
			    c = this.length,
			    d = [],
			    e = this;if ("string" != typeof a) return this.pushStack(n(a).filter(function () {
				for (b = 0; c > b; b++) if (n.contains(e[b], this)) return !0;
			}));for (b = 0; c > b; b++) n.find(a, e[b], d);return (d = this.pushStack(c > 1 ? n.unique(d) : d), d.selector = this.selector ? this.selector + " " + a : a, d);
		}, filter: function filter(a) {
			return this.pushStack(x(this, a || [], !1));
		}, not: function not(a) {
			return this.pushStack(x(this, a || [], !0));
		}, is: function is(a) {
			return !!x(this, "string" == typeof a && u.test(a) ? n(a) : a || [], !1).length;
		} });var y,
	    z = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
	    A = n.fn.init = function (a, b) {
		var c, d;if (!a) return this;if ("string" == typeof a) {
			if ((c = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : z.exec(a), !c || !c[1] && b)) return !b || b.jquery ? (b || y).find(a) : this.constructor(b).find(a);if (c[1]) {
				if ((b = b instanceof n ? b[0] : b, n.merge(this, n.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : l, !0)), v.test(c[1]) && n.isPlainObject(b))) for (c in b) n.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);return this;
			}return (d = l.getElementById(c[2]), d && d.parentNode && (this.length = 1, this[0] = d), this.context = l, this.selector = a, this);
		}return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : n.isFunction(a) ? "undefined" != typeof y.ready ? y.ready(a) : a(n) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), n.makeArray(a, this));
	};A.prototype = n.fn, y = n(l);var B = /^(?:parents|prev(?:Until|All))/,
	    C = { children: !0, contents: !0, next: !0, prev: !0 };n.extend({ dir: function dir(a, b, c) {
			var d = [],
			    e = void 0 !== c;while ((a = a[b]) && 9 !== a.nodeType) if (1 === a.nodeType) {
				if (e && n(a).is(c)) break;d.push(a);
			}return d;
		}, sibling: function sibling(a, b) {
			for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);return c;
		} }), n.fn.extend({ has: function has(a) {
			var b = n(a, this),
			    c = b.length;return this.filter(function () {
				for (var a = 0; c > a; a++) if (n.contains(this, b[a])) return !0;
			});
		}, closest: function closest(a, b) {
			for (var c, d = 0, e = this.length, f = [], g = u.test(a) || "string" != typeof a ? n(a, b || this.context) : 0; e > d; d++) for (c = this[d]; c && c !== b; c = c.parentNode) if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && n.find.matchesSelector(c, a))) {
				f.push(c);break;
			}return this.pushStack(f.length > 1 ? n.unique(f) : f);
		}, index: function index(a) {
			return a ? "string" == typeof a ? g.call(n(a), this[0]) : g.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
		}, add: function add(a, b) {
			return this.pushStack(n.unique(n.merge(this.get(), n(a, b))));
		}, addBack: function addBack(a) {
			return this.add(null == a ? this.prevObject : this.prevObject.filter(a));
		} });function D(a, b) {
		while ((a = a[b]) && 1 !== a.nodeType);return a;
	}n.each({ parent: function parent(a) {
			var b = a.parentNode;return b && 11 !== b.nodeType ? b : null;
		}, parents: function parents(a) {
			return n.dir(a, "parentNode");
		}, parentsUntil: function parentsUntil(a, b, c) {
			return n.dir(a, "parentNode", c);
		}, next: function next(a) {
			return D(a, "nextSibling");
		}, prev: function prev(a) {
			return D(a, "previousSibling");
		}, nextAll: function nextAll(a) {
			return n.dir(a, "nextSibling");
		}, prevAll: function prevAll(a) {
			return n.dir(a, "previousSibling");
		}, nextUntil: function nextUntil(a, b, c) {
			return n.dir(a, "nextSibling", c);
		}, prevUntil: function prevUntil(a, b, c) {
			return n.dir(a, "previousSibling", c);
		}, siblings: function siblings(a) {
			return n.sibling((a.parentNode || {}).firstChild, a);
		}, children: function children(a) {
			return n.sibling(a.firstChild);
		}, contents: function contents(a) {
			return a.contentDocument || n.merge([], a.childNodes);
		} }, function (a, b) {
		n.fn[a] = function (c, d) {
			var e = n.map(this, b, c);return ("Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = n.filter(d, e)), this.length > 1 && (C[a] || n.unique(e), B.test(a) && e.reverse()), this.pushStack(e));
		};
	});var E = /\S+/g,
	    F = {};function G(a) {
		var b = F[a] = {};return (n.each(a.match(E) || [], function (a, c) {
			b[c] = !0;
		}), b);
	}n.Callbacks = function (a) {
		a = "string" == typeof a ? F[a] || G(a) : n.extend({}, a);var b,
		    c,
		    d,
		    e,
		    f,
		    g,
		    h = [],
		    i = !a.once && [],
		    j = function j(l) {
			for (b = a.memory && l, c = !0, g = e || 0, e = 0, f = h.length, d = !0; h && f > g; g++) if (h[g].apply(l[0], l[1]) === !1 && a.stopOnFalse) {
				b = !1;break;
			}d = !1, h && (i ? i.length && j(i.shift()) : b ? h = [] : k.disable());
		},
		    k = { add: function add() {
				if (h) {
					var c = h.length;!(function g(b) {
						n.each(b, function (b, c) {
							var d = n.type(c);"function" === d ? a.unique && k.has(c) || h.push(c) : c && c.length && "string" !== d && g(c);
						});
					})(arguments), d ? f = h.length : b && (e = c, j(b));
				}return this;
			}, remove: function remove() {
				return (h && n.each(arguments, function (a, b) {
					var c;while ((c = n.inArray(b, h, c)) > -1) h.splice(c, 1), d && (f >= c && f--, g >= c && g--);
				}), this);
			}, has: function has(a) {
				return a ? n.inArray(a, h) > -1 : !(!h || !h.length);
			}, empty: function empty() {
				return (h = [], f = 0, this);
			}, disable: function disable() {
				return (h = i = b = void 0, this);
			}, disabled: function disabled() {
				return !h;
			}, lock: function lock() {
				return (i = void 0, b || k.disable(), this);
			}, locked: function locked() {
				return !i;
			}, fireWith: function fireWith(a, b) {
				return (!h || c && !i || (b = b || [], b = [a, b.slice ? b.slice() : b], d ? i.push(b) : j(b)), this);
			}, fire: function fire() {
				return (k.fireWith(this, arguments), this);
			}, fired: function fired() {
				return !!c;
			} };return k;
	}, n.extend({ Deferred: function Deferred(a) {
			var b = [["resolve", "done", n.Callbacks("once memory"), "resolved"], ["reject", "fail", n.Callbacks("once memory"), "rejected"], ["notify", "progress", n.Callbacks("memory")]],
			    c = "pending",
			    d = { state: function state() {
					return c;
				}, always: function always() {
					return (e.done(arguments).fail(arguments), this);
				}, then: function then() {
					var a = arguments;return n.Deferred(function (c) {
						n.each(b, function (b, f) {
							var g = n.isFunction(a[b]) && a[b];e[f[1]](function () {
								var a = g && g.apply(this, arguments);a && n.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments);
							});
						}), a = null;
					}).promise();
				}, promise: function promise(a) {
					return null != a ? n.extend(a, d) : d;
				} },
			    e = {};return (d.pipe = d.then, n.each(b, function (a, f) {
				var g = f[2],
				    h = f[3];d[f[1]] = g.add, h && g.add(function () {
					c = h;
				}, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function () {
					return (e[f[0] + "With"](this === e ? d : this, arguments), this);
				}, e[f[0] + "With"] = g.fireWith;
			}), d.promise(e), a && a.call(e, e), e);
		}, when: function when(a) {
			var b = 0,
			    c = d.call(arguments),
			    e = c.length,
			    f = 1 !== e || a && n.isFunction(a.promise) ? e : 0,
			    g = 1 === f ? a : n.Deferred(),
			    h = function h(a, b, c) {
				return function (e) {
					b[a] = this, c[a] = arguments.length > 1 ? d.call(arguments) : e, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c);
				};
			},
			    i,
			    j,
			    k;if (e > 1) for (i = new Array(e), j = new Array(e), k = new Array(e); e > b; b++) c[b] && n.isFunction(c[b].promise) ? c[b].promise().done(h(b, k, c)).fail(g.reject).progress(h(b, j, i)) : --f;return (f || g.resolveWith(k, c), g.promise());
		} });var H;n.fn.ready = function (a) {
		return (n.ready.promise().done(a), this);
	}, n.extend({ isReady: !1, readyWait: 1, holdReady: function holdReady(a) {
			a ? n.readyWait++ : n.ready(!0);
		}, ready: function ready(a) {
			(a === !0 ? --n.readyWait : n.isReady) || (n.isReady = !0, a !== !0 && --n.readyWait > 0 || (H.resolveWith(l, [n]), n.fn.triggerHandler && (n(l).triggerHandler("ready"), n(l).off("ready"))));
		} });function I() {
		l.removeEventListener("DOMContentLoaded", I, !1), a.removeEventListener("load", I, !1), n.ready();
	}n.ready.promise = function (b) {
		return (H || (H = n.Deferred(), "complete" === l.readyState ? setTimeout(n.ready) : (l.addEventListener("DOMContentLoaded", I, !1), a.addEventListener("load", I, !1))), H.promise(b));
	}, n.ready.promise();var J = n.access = function (a, b, c, d, e, f, g) {
		var h = 0,
		    i = a.length,
		    j = null == c;if ("object" === n.type(c)) {
			e = !0;for (h in c) n.access(a, b, h, c[h], !0, f, g);
		} else if (void 0 !== d && (e = !0, n.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function (a, b, c) {
			return j.call(n(a), c);
		})), b)) for (; i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));return e ? a : j ? b.call(a) : i ? b(a[0], c) : f;
	};n.acceptData = function (a) {
		return 1 === a.nodeType || 9 === a.nodeType || ! +a.nodeType;
	};function K() {
		Object.defineProperty(this.cache = {}, 0, { get: function get() {
				return {};
			} }), this.expando = n.expando + K.uid++;
	}K.uid = 1, K.accepts = n.acceptData, K.prototype = { key: function key(a) {
			if (!K.accepts(a)) return 0;var b = {},
			    c = a[this.expando];if (!c) {
				c = K.uid++;try {
					b[this.expando] = { value: c }, Object.defineProperties(a, b);
				} catch (d) {
					b[this.expando] = c, n.extend(a, b);
				}
			}return (this.cache[c] || (this.cache[c] = {}), c);
		}, set: function set(a, b, c) {
			var d,
			    e = this.key(a),
			    f = this.cache[e];if ("string" == typeof b) f[b] = c;else if (n.isEmptyObject(f)) n.extend(this.cache[e], b);else for (d in b) f[d] = b[d];return f;
		}, get: function get(a, b) {
			var c = this.cache[this.key(a)];return void 0 === b ? c : c[b];
		}, access: function access(a, b, c) {
			var d;return void 0 === b || b && "string" == typeof b && void 0 === c ? (d = this.get(a, b), void 0 !== d ? d : this.get(a, n.camelCase(b))) : (this.set(a, b, c), void 0 !== c ? c : b);
		}, remove: function remove(a, b) {
			var c,
			    d,
			    e,
			    f = this.key(a),
			    g = this.cache[f];if (void 0 === b) this.cache[f] = {};else {
				n.isArray(b) ? d = b.concat(b.map(n.camelCase)) : (e = n.camelCase(b), b in g ? d = [b, e] : (d = e, d = d in g ? [d] : d.match(E) || [])), c = d.length;while (c--) delete g[d[c]];
			}
		}, hasData: function hasData(a) {
			return !n.isEmptyObject(this.cache[a[this.expando]] || {});
		}, discard: function discard(a) {
			a[this.expando] && delete this.cache[a[this.expando]];
		} };var L = new K(),
	    M = new K(),
	    N = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	    O = /([A-Z])/g;function P(a, b, c) {
		var d;if (void 0 === c && 1 === a.nodeType) if ((d = "data-" + b.replace(O, "-$1").toLowerCase(), c = a.getAttribute(d), "string" == typeof c)) {
			try {
				c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : N.test(c) ? n.parseJSON(c) : c;
			} catch (e) {}M.set(a, b, c);
		} else c = void 0;return c;
	}n.extend({ hasData: function hasData(a) {
			return M.hasData(a) || L.hasData(a);
		}, data: function data(a, b, c) {
			return M.access(a, b, c);
		}, removeData: function removeData(a, b) {
			M.remove(a, b);
		}, _data: function _data(a, b, c) {
			return L.access(a, b, c);
		}, _removeData: function _removeData(a, b) {
			L.remove(a, b);
		} }), n.fn.extend({ data: function data(a, b) {
			var c,
			    d,
			    e,
			    f = this[0],
			    g = f && f.attributes;if (void 0 === a) {
				if (this.length && (e = M.get(f), 1 === f.nodeType && !L.get(f, "hasDataAttrs"))) {
					c = g.length;while (c--) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = n.camelCase(d.slice(5)), P(f, d, e[d])));L.set(f, "hasDataAttrs", !0);
				}return e;
			}return "object" == typeof a ? this.each(function () {
				M.set(this, a);
			}) : J(this, function (b) {
				var c,
				    d = n.camelCase(a);if (f && void 0 === b) {
					if ((c = M.get(f, a), void 0 !== c)) return c;if ((c = M.get(f, d), void 0 !== c)) return c;if ((c = P(f, d, void 0), void 0 !== c)) return c;
				} else this.each(function () {
					var c = M.get(this, d);M.set(this, d, b), -1 !== a.indexOf("-") && void 0 !== c && M.set(this, a, b);
				});
			}, null, b, arguments.length > 1, null, !0);
		}, removeData: function removeData(a) {
			return this.each(function () {
				M.remove(this, a);
			});
		} }), n.extend({ queue: function queue(a, b, c) {
			var d;return a ? (b = (b || "fx") + "queue", d = L.get(a, b), c && (!d || n.isArray(c) ? d = L.access(a, b, n.makeArray(c)) : d.push(c)), d || []) : void 0;
		}, dequeue: function dequeue(a, b) {
			b = b || "fx";var c = n.queue(a, b),
			    d = c.length,
			    e = c.shift(),
			    f = n._queueHooks(a, b),
			    g = function g() {
				n.dequeue(a, b);
			};"inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire();
		}, _queueHooks: function _queueHooks(a, b) {
			var c = b + "queueHooks";return L.get(a, c) || L.access(a, c, { empty: n.Callbacks("once memory").add(function () {
					L.remove(a, [b + "queue", c]);
				}) });
		} }), n.fn.extend({ queue: function queue(a, b) {
			var c = 2;return ("string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? n.queue(this[0], a) : void 0 === b ? this : this.each(function () {
				var c = n.queue(this, a, b);n._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && n.dequeue(this, a);
			}));
		}, dequeue: function dequeue(a) {
			return this.each(function () {
				n.dequeue(this, a);
			});
		}, clearQueue: function clearQueue(a) {
			return this.queue(a || "fx", []);
		}, promise: function promise(a, b) {
			var c,
			    d = 1,
			    e = n.Deferred(),
			    f = this,
			    g = this.length,
			    h = function h() {
				--d || e.resolveWith(f, [f]);
			};"string" != typeof a && (b = a, a = void 0), a = a || "fx";while (g--) c = L.get(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));return (h(), e.promise(b));
		} });var Q = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
	    R = ["Top", "Right", "Bottom", "Left"],
	    S = function S(a, b) {
		return (a = b || a, "none" === n.css(a, "display") || !n.contains(a.ownerDocument, a));
	},
	    T = /^(?:checkbox|radio)$/i;!(function () {
		var a = l.createDocumentFragment(),
		    b = a.appendChild(l.createElement("div")),
		    c = l.createElement("input");c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), b.appendChild(c), k.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = "<textarea>x</textarea>", k.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue;
	})();var U = "undefined";k.focusinBubbles = "onfocusin" in a;var V = /^key/,
	    W = /^(?:mouse|pointer|contextmenu)|click/,
	    X = /^(?:focusinfocus|focusoutblur)$/,
	    Y = /^([^.]*)(?:\.(.+)|)$/;function Z() {
		return !0;
	}function $() {
		return !1;
	}function _() {
		try {
			return l.activeElement;
		} catch (a) {}
	}n.event = { global: {}, add: function add(a, b, c, d, e) {
			var f,
			    g,
			    h,
			    i,
			    j,
			    k,
			    l,
			    m,
			    o,
			    p,
			    q,
			    r = L.get(a);if (r) {
				c.handler && (f = c, c = f.handler, e = f.selector), c.guid || (c.guid = n.guid++), (i = r.events) || (i = r.events = {}), (g = r.handle) || (g = r.handle = function (b) {
					return typeof n !== U && n.event.triggered !== b.type ? n.event.dispatch.apply(a, arguments) : void 0;
				}), b = (b || "").match(E) || [""], j = b.length;while (j--) h = Y.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o && (l = n.event.special[o] || {}, o = (e ? l.delegateType : l.bindType) || o, l = n.event.special[o] || {}, k = n.extend({ type: o, origType: q, data: d, handler: c, guid: c.guid, selector: e, needsContext: e && n.expr.match.needsContext.test(e), namespace: p.join(".") }, f), (m = i[o]) || (m = i[o] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, p, g) !== !1 || a.addEventListener && a.addEventListener(o, g, !1)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), n.event.global[o] = !0);
			}
		}, remove: function remove(a, b, c, d, e) {
			var f,
			    g,
			    h,
			    i,
			    j,
			    k,
			    l,
			    m,
			    o,
			    p,
			    q,
			    r = L.hasData(a) && L.get(a);if (r && (i = r.events)) {
				b = (b || "").match(E) || [""], j = b.length;while (j--) if ((h = Y.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o)) {
					l = n.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, m = i[o] || [], h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length;while (f--) k = m[f], !e && q !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));g && !m.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || n.removeEvent(a, o, r.handle), delete i[o]);
				} else for (o in i) n.event.remove(a, o + b[j], c, d, !0);n.isEmptyObject(i) && (delete r.handle, L.remove(a, "events"));
			}
		}, trigger: function trigger(b, c, d, e) {
			var f,
			    g,
			    h,
			    i,
			    k,
			    m,
			    o,
			    p = [d || l],
			    q = j.call(b, "type") ? b.type : b,
			    r = j.call(b, "namespace") ? b.namespace.split(".") : [];if ((g = h = d = d || l, 3 !== d.nodeType && 8 !== d.nodeType && !X.test(q + n.event.triggered) && (q.indexOf(".") >= 0 && (r = q.split("."), q = r.shift(), r.sort()), k = q.indexOf(":") < 0 && "on" + q, b = b[n.expando] ? b : new n.Event(q, "object" == typeof b && b), b.isTrigger = e ? 2 : 3, b.namespace = r.join("."), b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = d), c = null == c ? [b] : n.makeArray(c, [b]), o = n.event.special[q] || {}, e || !o.trigger || o.trigger.apply(d, c) !== !1))) {
				if (!e && !o.noBubble && !n.isWindow(d)) {
					for (i = o.delegateType || q, X.test(i + q) || (g = g.parentNode); g; g = g.parentNode) p.push(g), h = g;h === (d.ownerDocument || l) && p.push(h.defaultView || h.parentWindow || a);
				}f = 0;while ((g = p[f++]) && !b.isPropagationStopped()) b.type = f > 1 ? i : o.bindType || q, m = (L.get(g, "events") || {})[b.type] && L.get(g, "handle"), m && m.apply(g, c), m = k && g[k], m && m.apply && n.acceptData(g) && (b.result = m.apply(g, c), b.result === !1 && b.preventDefault());return (b.type = q, e || b.isDefaultPrevented() || o._default && o._default.apply(p.pop(), c) !== !1 || !n.acceptData(d) || k && n.isFunction(d[q]) && !n.isWindow(d) && (h = d[k], h && (d[k] = null), n.event.triggered = q, d[q](), n.event.triggered = void 0, h && (d[k] = h)), b.result);
			}
		}, dispatch: function dispatch(a) {
			a = n.event.fix(a);var b,
			    c,
			    e,
			    f,
			    g,
			    h = [],
			    i = d.call(arguments),
			    j = (L.get(this, "events") || {})[a.type] || [],
			    k = n.event.special[a.type] || {};if ((i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1)) {
				h = n.event.handlers.call(this, a, j), b = 0;while ((f = h[b++]) && !a.isPropagationStopped()) {
					a.currentTarget = f.elem, c = 0;while ((g = f.handlers[c++]) && !a.isImmediatePropagationStopped()) (!a.namespace_re || a.namespace_re.test(g.namespace)) && (a.handleObj = g, a.data = g.data, e = ((n.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), void 0 !== e && (a.result = e) === !1 && (a.preventDefault(), a.stopPropagation()));
				}return (k.postDispatch && k.postDispatch.call(this, a), a.result);
			}
		}, handlers: function handlers(a, b) {
			var c,
			    d,
			    e,
			    f,
			    g = [],
			    h = b.delegateCount,
			    i = a.target;if (h && i.nodeType && (!a.button || "click" !== a.type)) for (; i !== this; i = i.parentNode || this) if (i.disabled !== !0 || "click" !== a.type) {
				for (d = [], c = 0; h > c; c++) f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? n(e, this).index(i) >= 0 : n.find(e, this, null, [i]).length), d[e] && d.push(f);d.length && g.push({ elem: i, handlers: d });
			}return (h < b.length && g.push({ elem: this, handlers: b.slice(h) }), g);
		}, props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "), fixHooks: {}, keyHooks: { props: "char charCode key keyCode".split(" "), filter: function filter(a, b) {
				return (null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a);
			} }, mouseHooks: { props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "), filter: function filter(a, b) {
				var c,
				    d,
				    e,
				    f = b.button;return (null == a.pageX && null != b.clientX && (c = a.target.ownerDocument || l, d = c.documentElement, e = c.body, a.pageX = b.clientX + (d && d.scrollLeft || e && e.scrollLeft || 0) - (d && d.clientLeft || e && e.clientLeft || 0), a.pageY = b.clientY + (d && d.scrollTop || e && e.scrollTop || 0) - (d && d.clientTop || e && e.clientTop || 0)), a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), a);
			} }, fix: function fix(a) {
			if (a[n.expando]) return a;var b,
			    c,
			    d,
			    e = a.type,
			    f = a,
			    g = this.fixHooks[e];g || (this.fixHooks[e] = g = W.test(e) ? this.mouseHooks : V.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new n.Event(f), b = d.length;while (b--) c = d[b], a[c] = f[c];return (a.target || (a.target = l), 3 === a.target.nodeType && (a.target = a.target.parentNode), g.filter ? g.filter(a, f) : a);
		}, special: { load: { noBubble: !0 }, focus: { trigger: function trigger() {
					return this !== _() && this.focus ? (this.focus(), !1) : void 0;
				}, delegateType: "focusin" }, blur: { trigger: function trigger() {
					return this === _() && this.blur ? (this.blur(), !1) : void 0;
				}, delegateType: "focusout" }, click: { trigger: function trigger() {
					return "checkbox" === this.type && this.click && n.nodeName(this, "input") ? (this.click(), !1) : void 0;
				}, _default: function _default(a) {
					return n.nodeName(a.target, "a");
				} }, beforeunload: { postDispatch: function postDispatch(a) {
					void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result);
				} } }, simulate: function simulate(a, b, c, d) {
			var e = n.extend(new n.Event(), c, { type: a, isSimulated: !0, originalEvent: {} });d ? n.event.trigger(e, null, b) : n.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault();
		} }, n.removeEvent = function (a, b, c) {
		a.removeEventListener && a.removeEventListener(b, c, !1);
	}, n.Event = function (a, b) {
		return this instanceof n.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? Z : $) : this.type = a, b && n.extend(this, b), this.timeStamp = a && a.timeStamp || n.now(), void (this[n.expando] = !0)) : new n.Event(a, b);
	}, n.Event.prototype = { isDefaultPrevented: $, isPropagationStopped: $, isImmediatePropagationStopped: $, preventDefault: function preventDefault() {
			var a = this.originalEvent;this.isDefaultPrevented = Z, a && a.preventDefault && a.preventDefault();
		}, stopPropagation: function stopPropagation() {
			var a = this.originalEvent;this.isPropagationStopped = Z, a && a.stopPropagation && a.stopPropagation();
		}, stopImmediatePropagation: function stopImmediatePropagation() {
			var a = this.originalEvent;this.isImmediatePropagationStopped = Z, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), this.stopPropagation();
		} }, n.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (a, b) {
		n.event.special[a] = { delegateType: b, bindType: b, handle: function handle(a) {
				var c,
				    d = this,
				    e = a.relatedTarget,
				    f = a.handleObj;return ((!e || e !== d && !n.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c);
			} };
	}), k.focusinBubbles || n.each({ focus: "focusin", blur: "focusout" }, function (a, b) {
		var c = function c(a) {
			n.event.simulate(b, a.target, n.event.fix(a), !0);
		};n.event.special[b] = { setup: function setup() {
				var d = this.ownerDocument || this,
				    e = L.access(d, b);e || d.addEventListener(a, c, !0), L.access(d, b, (e || 0) + 1);
			}, teardown: function teardown() {
				var d = this.ownerDocument || this,
				    e = L.access(d, b) - 1;e ? L.access(d, b, e) : (d.removeEventListener(a, c, !0), L.remove(d, b));
			} };
	}), n.fn.extend({ on: function on(a, b, c, d, e) {
			var f, g;if ("object" == typeof a) {
				"string" != typeof b && (c = c || b, b = void 0);for (g in a) this.on(g, b, c, a[g], e);return this;
			}if ((null == c && null == d ? (d = b, c = b = void 0) : null == d && ("string" == typeof b ? (d = c, c = void 0) : (d = c, c = b, b = void 0)), d === !1)) d = $;else if (!d) return this;return (1 === e && (f = d, d = function (a) {
				return (n().off(a), f.apply(this, arguments));
			}, d.guid = f.guid || (f.guid = n.guid++)), this.each(function () {
				n.event.add(this, a, d, c, b);
			}));
		}, one: function one(a, b, c, d) {
			return this.on(a, b, c, d, 1);
		}, off: function off(a, b, c) {
			var d, e;if (a && a.preventDefault && a.handleObj) return (d = a.handleObj, n(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this);if ("object" == typeof a) {
				for (e in a) this.off(e, b, a[e]);return this;
			}return ((b === !1 || "function" == typeof b) && (c = b, b = void 0), c === !1 && (c = $), this.each(function () {
				n.event.remove(this, a, c, b);
			}));
		}, trigger: function trigger(a, b) {
			return this.each(function () {
				n.event.trigger(a, b, this);
			});
		}, triggerHandler: function triggerHandler(a, b) {
			var c = this[0];return c ? n.event.trigger(a, b, c, !0) : void 0;
		} });var aa = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
	    ba = /<([\w:]+)/,
	    ca = /<|&#?\w+;/,
	    da = /<(?:script|style|link)/i,
	    ea = /checked\s*(?:[^=]|=\s*.checked.)/i,
	    fa = /^$|\/(?:java|ecma)script/i,
	    ga = /^true\/(.*)/,
	    ha = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
	    ia = { option: [1, "<select multiple='multiple'>", "</select>"], thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };ia.optgroup = ia.option, ia.tbody = ia.tfoot = ia.colgroup = ia.caption = ia.thead, ia.th = ia.td;function ja(a, b) {
		return n.nodeName(a, "table") && n.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a;
	}function ka(a) {
		return (a.type = (null !== a.getAttribute("type")) + "/" + a.type, a);
	}function la(a) {
		var b = ga.exec(a.type);return (b ? a.type = b[1] : a.removeAttribute("type"), a);
	}function ma(a, b) {
		for (var c = 0, d = a.length; d > c; c++) L.set(a[c], "globalEval", !b || L.get(b[c], "globalEval"));
	}function na(a, b) {
		var c, d, e, f, g, h, i, j;if (1 === b.nodeType) {
			if (L.hasData(a) && (f = L.access(a), g = L.set(b, f), j = f.events)) {
				delete g.handle, g.events = {};for (e in j) for (c = 0, d = j[e].length; d > c; c++) n.event.add(b, e, j[e][c]);
			}M.hasData(a) && (h = M.access(a), i = n.extend({}, h), M.set(b, i));
		}
	}function oa(a, b) {
		var c = a.getElementsByTagName ? a.getElementsByTagName(b || "*") : a.querySelectorAll ? a.querySelectorAll(b || "*") : [];return void 0 === b || b && n.nodeName(a, b) ? n.merge([a], c) : c;
	}function pa(a, b) {
		var c = b.nodeName.toLowerCase();"input" === c && T.test(a.type) ? b.checked = a.checked : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue);
	}n.extend({ clone: function clone(a, b, c) {
			var d,
			    e,
			    f,
			    g,
			    h = a.cloneNode(!0),
			    i = n.contains(a.ownerDocument, a);if (!(k.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || n.isXMLDoc(a))) for (g = oa(h), f = oa(a), d = 0, e = f.length; e > d; d++) pa(f[d], g[d]);if (b) if (c) for (f = f || oa(a), g = g || oa(h), d = 0, e = f.length; e > d; d++) na(f[d], g[d]);else na(a, h);return (g = oa(h, "script"), g.length > 0 && ma(g, !i && oa(a, "script")), h);
		}, buildFragment: function buildFragment(a, b, c, d) {
			for (var e, f, g, h, i, j, k = b.createDocumentFragment(), l = [], m = 0, o = a.length; o > m; m++) if ((e = a[m], e || 0 === e)) if ("object" === n.type(e)) n.merge(l, e.nodeType ? [e] : e);else if (ca.test(e)) {
				f = f || k.appendChild(b.createElement("div")), g = (ba.exec(e) || ["", ""])[1].toLowerCase(), h = ia[g] || ia._default, f.innerHTML = h[1] + e.replace(aa, "<$1></$2>") + h[2], j = h[0];while (j--) f = f.lastChild;n.merge(l, f.childNodes), f = k.firstChild, f.textContent = "";
			} else l.push(b.createTextNode(e));k.textContent = "", m = 0;while (e = l[m++]) if ((!d || -1 === n.inArray(e, d)) && (i = n.contains(e.ownerDocument, e), f = oa(k.appendChild(e), "script"), i && ma(f), c)) {
				j = 0;while (e = f[j++]) fa.test(e.type || "") && c.push(e);
			}return k;
		}, cleanData: function cleanData(a) {
			for (var b, c, d, e, f = n.event.special, g = 0; void 0 !== (c = a[g]); g++) {
				if (n.acceptData(c) && (e = c[L.expando], e && (b = L.cache[e]))) {
					if (b.events) for (d in b.events) f[d] ? n.event.remove(c, d) : n.removeEvent(c, d, b.handle);L.cache[e] && delete L.cache[e];
				}delete M.cache[c[M.expando]];
			}
		} }), n.fn.extend({ text: function text(a) {
			return J(this, function (a) {
				return void 0 === a ? n.text(this) : this.empty().each(function () {
					(1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = a);
				});
			}, null, a, arguments.length);
		}, append: function append() {
			return this.domManip(arguments, function (a) {
				if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
					var b = ja(this, a);b.appendChild(a);
				}
			});
		}, prepend: function prepend() {
			return this.domManip(arguments, function (a) {
				if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
					var b = ja(this, a);b.insertBefore(a, b.firstChild);
				}
			});
		}, before: function before() {
			return this.domManip(arguments, function (a) {
				this.parentNode && this.parentNode.insertBefore(a, this);
			});
		}, after: function after() {
			return this.domManip(arguments, function (a) {
				this.parentNode && this.parentNode.insertBefore(a, this.nextSibling);
			});
		}, remove: function remove(a, b) {
			for (var c, d = a ? n.filter(a, this) : this, e = 0; null != (c = d[e]); e++) b || 1 !== c.nodeType || n.cleanData(oa(c)), c.parentNode && (b && n.contains(c.ownerDocument, c) && ma(oa(c, "script")), c.parentNode.removeChild(c));return this;
		}, empty: function empty() {
			for (var a, b = 0; null != (a = this[b]); b++) 1 === a.nodeType && (n.cleanData(oa(a, !1)), a.textContent = "");return this;
		}, clone: function clone(a, b) {
			return (a = null == a ? !1 : a, b = null == b ? a : b, this.map(function () {
				return n.clone(this, a, b);
			}));
		}, html: function html(a) {
			return J(this, function (a) {
				var b = this[0] || {},
				    c = 0,
				    d = this.length;if (void 0 === a && 1 === b.nodeType) return b.innerHTML;if ("string" == typeof a && !da.test(a) && !ia[(ba.exec(a) || ["", ""])[1].toLowerCase()]) {
					a = a.replace(aa, "<$1></$2>");try {
						for (; d > c; c++) b = this[c] || {}, 1 === b.nodeType && (n.cleanData(oa(b, !1)), b.innerHTML = a);b = 0;
					} catch (e) {}
				}b && this.empty().append(a);
			}, null, a, arguments.length);
		}, replaceWith: function replaceWith() {
			var a = arguments[0];return (this.domManip(arguments, function (b) {
				a = this.parentNode, n.cleanData(oa(this)), a && a.replaceChild(b, this);
			}), a && (a.length || a.nodeType) ? this : this.remove());
		}, detach: function detach(a) {
			return this.remove(a, !0);
		}, domManip: function domManip(a, b) {
			a = e.apply([], a);var c,
			    d,
			    f,
			    g,
			    h,
			    i,
			    j = 0,
			    l = this.length,
			    m = this,
			    o = l - 1,
			    p = a[0],
			    q = n.isFunction(p);if (q || l > 1 && "string" == typeof p && !k.checkClone && ea.test(p)) return this.each(function (c) {
				var d = m.eq(c);q && (a[0] = p.call(this, c, d.html())), d.domManip(a, b);
			});if (l && (c = n.buildFragment(a, this[0].ownerDocument, !1, this), d = c.firstChild, 1 === c.childNodes.length && (c = d), d)) {
				for (f = n.map(oa(c, "script"), ka), g = f.length; l > j; j++) h = c, j !== o && (h = n.clone(h, !0, !0), g && n.merge(f, oa(h, "script"))), b.call(this[j], h, j);if (g) for (i = f[f.length - 1].ownerDocument, n.map(f, la), j = 0; g > j; j++) h = f[j], fa.test(h.type || "") && !L.access(h, "globalEval") && n.contains(i, h) && (h.src ? n._evalUrl && n._evalUrl(h.src) : n.globalEval(h.textContent.replace(ha, "")));
			}return this;
		} }), n.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (a, b) {
		n.fn[a] = function (a) {
			for (var c, d = [], e = n(a), g = e.length - 1, h = 0; g >= h; h++) c = h === g ? this : this.clone(!0), n(e[h])[b](c), f.apply(d, c.get());return this.pushStack(d);
		};
	});var qa,
	    ra = {};function sa(b, c) {
		var d,
		    e = n(c.createElement(b)).appendTo(c.body),
		    f = a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0])) ? d.display : n.css(e[0], "display");return (e.detach(), f);
	}function ta(a) {
		var b = l,
		    c = ra[a];return (c || (c = sa(a, b), "none" !== c && c || (qa = (qa || n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = qa[0].contentDocument, b.write(), b.close(), c = sa(a, b), qa.detach()), ra[a] = c), c);
	}var ua = /^margin/,
	    va = new RegExp("^(" + Q + ")(?!px)[a-z%]+$", "i"),
	    wa = function wa(b) {
		return b.ownerDocument.defaultView.opener ? b.ownerDocument.defaultView.getComputedStyle(b, null) : a.getComputedStyle(b, null);
	};function xa(a, b, c) {
		var d,
		    e,
		    f,
		    g,
		    h = a.style;return (c = c || wa(a), c && (g = c.getPropertyValue(b) || c[b]), c && ("" !== g || n.contains(a.ownerDocument, a) || (g = n.style(a, b)), va.test(g) && ua.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 !== g ? g + "" : g);
	}function ya(a, b) {
		return { get: function get() {
				return a() ? void delete this.get : (this.get = b).apply(this, arguments);
			} };
	}!(function () {
		var b,
		    c,
		    d = l.documentElement,
		    e = l.createElement("div"),
		    f = l.createElement("div");if (f.style) {
			(function () {
				var g = function g() {
					f.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", f.innerHTML = "", d.appendChild(e);var g = a.getComputedStyle(f, null);b = "1%" !== g.top, c = "4px" === g.width, d.removeChild(e);
				};

				f.style.backgroundClip = "content-box", f.cloneNode(!0).style.backgroundClip = "", k.clearCloneStyle = "content-box" === f.style.backgroundClip, e.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", e.appendChild(f);a.getComputedStyle && n.extend(k, { pixelPosition: function pixelPosition() {
						return (g(), b);
					}, boxSizingReliable: function boxSizingReliable() {
						return (null == c && g(), c);
					}, reliableMarginRight: function reliableMarginRight() {
						var b,
						    c = f.appendChild(l.createElement("div"));return (c.style.cssText = f.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", c.style.marginRight = c.style.width = "0", f.style.width = "1px", d.appendChild(e), b = !parseFloat(a.getComputedStyle(c, null).marginRight), d.removeChild(e), f.removeChild(c), b);
					} });
			})();
		}
	})(), n.swap = function (a, b, c, d) {
		var e,
		    f,
		    g = {};for (f in b) g[f] = a.style[f], a.style[f] = b[f];e = c.apply(a, d || []);for (f in b) a.style[f] = g[f];return e;
	};var za = /^(none|table(?!-c[ea]).+)/,
	    Aa = new RegExp("^(" + Q + ")(.*)$", "i"),
	    Ba = new RegExp("^([+-])=(" + Q + ")", "i"),
	    Ca = { position: "absolute", visibility: "hidden", display: "block" },
	    Da = { letterSpacing: "0", fontWeight: "400" },
	    Ea = ["Webkit", "O", "Moz", "ms"];function Fa(a, b) {
		if (b in a) return b;var c = b[0].toUpperCase() + b.slice(1),
		    d = b,
		    e = Ea.length;while (e--) if ((b = Ea[e] + c, b in a)) return b;return d;
	}function Ga(a, b, c) {
		var d = Aa.exec(b);return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b;
	}function Ha(a, b, c, d, e) {
		for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) "margin" === c && (g += n.css(a, c + R[f], !0, e)), d ? ("content" === c && (g -= n.css(a, "padding" + R[f], !0, e)), "margin" !== c && (g -= n.css(a, "border" + R[f] + "Width", !0, e))) : (g += n.css(a, "padding" + R[f], !0, e), "padding" !== c && (g += n.css(a, "border" + R[f] + "Width", !0, e)));return g;
	}function Ia(a, b, c) {
		var d = !0,
		    e = "width" === b ? a.offsetWidth : a.offsetHeight,
		    f = wa(a),
		    g = "border-box" === n.css(a, "boxSizing", !1, f);if (0 >= e || null == e) {
			if ((e = xa(a, b, f), (0 > e || null == e) && (e = a.style[b]), va.test(e))) return e;d = g && (k.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0;
		}return e + Ha(a, b, c || (g ? "border" : "content"), d, f) + "px";
	}function Ja(a, b) {
		for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) d = a[g], d.style && (f[g] = L.get(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && S(d) && (f[g] = L.access(d, "olddisplay", ta(d.nodeName)))) : (e = S(d), "none" === c && e || L.set(d, "olddisplay", e ? c : n.css(d, "display"))));for (g = 0; h > g; g++) d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));return a;
	}n.extend({ cssHooks: { opacity: { get: function get(a, b) {
					if (b) {
						var c = xa(a, "opacity");return "" === c ? "1" : c;
					}
				} } }, cssNumber: { columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: { "float": "cssFloat" }, style: function style(a, b, c, d) {
			if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
				var e,
				    f,
				    g,
				    h = n.camelCase(b),
				    i = a.style;return (b = n.cssProps[h] || (n.cssProps[h] = Fa(i, h)), g = n.cssHooks[b] || n.cssHooks[h], void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b] : (f = typeof c, "string" === f && (e = Ba.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(n.css(a, b)), f = "number"), null != c && c === c && ("number" !== f || n.cssNumber[h] || (c += "px"), k.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i[b] = c)), void 0));
			}
		}, css: function css(a, b, c, d) {
			var e,
			    f,
			    g,
			    h = n.camelCase(b);return (b = n.cssProps[h] || (n.cssProps[h] = Fa(a.style, h)), g = n.cssHooks[b] || n.cssHooks[h], g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = xa(a, b, d)), "normal" === e && b in Da && (e = Da[b]), "" === c || c ? (f = parseFloat(e), c === !0 || n.isNumeric(f) ? f || 0 : e) : e);
		} }), n.each(["height", "width"], function (a, b) {
		n.cssHooks[b] = { get: function get(a, c, d) {
				return c ? za.test(n.css(a, "display")) && 0 === a.offsetWidth ? n.swap(a, Ca, function () {
					return Ia(a, b, d);
				}) : Ia(a, b, d) : void 0;
			}, set: function set(a, c, d) {
				var e = d && wa(a);return Ga(a, c, d ? Ha(a, b, d, "border-box" === n.css(a, "boxSizing", !1, e), e) : 0);
			} };
	}), n.cssHooks.marginRight = ya(k.reliableMarginRight, function (a, b) {
		return b ? n.swap(a, { display: "inline-block" }, xa, [a, "marginRight"]) : void 0;
	}), n.each({ margin: "", padding: "", border: "Width" }, function (a, b) {
		n.cssHooks[a + b] = { expand: function expand(c) {
				for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) e[a + R[d] + b] = f[d] || f[d - 2] || f[0];return e;
			} }, ua.test(a) || (n.cssHooks[a + b].set = Ga);
	}), n.fn.extend({ css: function css(a, b) {
			return J(this, function (a, b, c) {
				var d,
				    e,
				    f = {},
				    g = 0;if (n.isArray(b)) {
					for (d = wa(a), e = b.length; e > g; g++) f[b[g]] = n.css(a, b[g], !1, d);return f;
				}return void 0 !== c ? n.style(a, b, c) : n.css(a, b);
			}, a, b, arguments.length > 1);
		}, show: function show() {
			return Ja(this, !0);
		}, hide: function hide() {
			return Ja(this);
		}, toggle: function toggle(a) {
			return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function () {
				S(this) ? n(this).show() : n(this).hide();
			});
		} });function Ka(a, b, c, d, e) {
		return new Ka.prototype.init(a, b, c, d, e);
	}n.Tween = Ka, Ka.prototype = { constructor: Ka, init: function init(a, b, c, d, e, f) {
			this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (n.cssNumber[c] ? "" : "px");
		}, cur: function cur() {
			var a = Ka.propHooks[this.prop];return a && a.get ? a.get(this) : Ka.propHooks._default.get(this);
		}, run: function run(a) {
			var b,
			    c = Ka.propHooks[this.prop];return (this.options.duration ? this.pos = b = n.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : Ka.propHooks._default.set(this), this);
		} }, Ka.prototype.init.prototype = Ka.prototype, Ka.propHooks = { _default: { get: function get(a) {
				var b;return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = n.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) : a.elem[a.prop];
			}, set: function set(a) {
				n.fx.step[a.prop] ? n.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[n.cssProps[a.prop]] || n.cssHooks[a.prop]) ? n.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now;
			} } }, Ka.propHooks.scrollTop = Ka.propHooks.scrollLeft = { set: function set(a) {
			a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now);
		} }, n.easing = { linear: function linear(a) {
			return a;
		}, swing: function swing(a) {
			return .5 - Math.cos(a * Math.PI) / 2;
		} }, n.fx = Ka.prototype.init, n.fx.step = {};var La,
	    Ma,
	    Na = /^(?:toggle|show|hide)$/,
	    Oa = new RegExp("^(?:([+-])=|)(" + Q + ")([a-z%]*)$", "i"),
	    Pa = /queueHooks$/,
	    Qa = [Va],
	    Ra = { "*": [function (a, b) {
			var c = this.createTween(a, b),
			    d = c.cur(),
			    e = Oa.exec(b),
			    f = e && e[3] || (n.cssNumber[a] ? "" : "px"),
			    g = (n.cssNumber[a] || "px" !== f && +d) && Oa.exec(n.css(c.elem, a)),
			    h = 1,
			    i = 20;if (g && g[3] !== f) {
				f = f || g[3], e = e || [], g = +d || 1;do h = h || ".5", g /= h, n.style(c.elem, a, g + f); while (h !== (h = c.cur() / d) && 1 !== h && --i);
			}return (e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), c);
		}] };function Sa() {
		return (setTimeout(function () {
			La = void 0;
		}), La = n.now());
	}function Ta(a, b) {
		var c,
		    d = 0,
		    e = { height: a };for (b = b ? 1 : 0; 4 > d; d += 2 - b) c = R[d], e["margin" + c] = e["padding" + c] = a;return (b && (e.opacity = e.width = a), e);
	}function Ua(a, b, c) {
		for (var d, e = (Ra[b] || []).concat(Ra["*"]), f = 0, g = e.length; g > f; f++) if (d = e[f].call(c, b, a)) return d;
	}function Va(a, b, c) {
		var d,
		    e,
		    f,
		    g,
		    h,
		    i,
		    j,
		    k,
		    l = this,
		    m = {},
		    o = a.style,
		    p = a.nodeType && S(a),
		    q = L.get(a, "fxshow");c.queue || (h = n._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function () {
			h.unqueued || i();
		}), h.unqueued++, l.always(function () {
			l.always(function () {
				h.unqueued--, n.queue(a, "fx").length || h.empty.fire();
			});
		})), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [o.overflow, o.overflowX, o.overflowY], j = n.css(a, "display"), k = "none" === j ? L.get(a, "olddisplay") || ta(a.nodeName) : j, "inline" === k && "none" === n.css(a, "float") && (o.display = "inline-block")), c.overflow && (o.overflow = "hidden", l.always(function () {
			o.overflow = c.overflow[0], o.overflowX = c.overflow[1], o.overflowY = c.overflow[2];
		}));for (d in b) if ((e = b[d], Na.exec(e))) {
			if ((delete b[d], f = f || "toggle" === e, e === (p ? "hide" : "show"))) {
				if ("show" !== e || !q || void 0 === q[d]) continue;p = !0;
			}m[d] = q && q[d] || n.style(a, d);
		} else j = void 0;if (n.isEmptyObject(m)) "inline" === ("none" === j ? ta(a.nodeName) : j) && (o.display = j);else {
			q ? "hidden" in q && (p = q.hidden) : q = L.access(a, "fxshow", {}), f && (q.hidden = !p), p ? n(a).show() : l.done(function () {
				n(a).hide();
			}), l.done(function () {
				var b;L.remove(a, "fxshow");for (b in m) n.style(a, b, m[b]);
			});for (d in m) g = Ua(p ? q[d] : 0, d, l), d in q || (q[d] = g.start, p && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0));
		}
	}function Wa(a, b) {
		var c, d, e, f, g;for (c in a) if ((d = n.camelCase(c), e = b[d], f = a[c], n.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = n.cssHooks[d], g && "expand" in g)) {
			f = g.expand(f), delete a[d];for (c in f) c in a || (a[c] = f[c], b[c] = e);
		} else b[d] = e;
	}function Xa(a, b, c) {
		var d,
		    e,
		    f = 0,
		    g = Qa.length,
		    h = n.Deferred().always(function () {
			delete i.elem;
		}),
		    i = function i() {
			if (e) return !1;for (var b = La || Sa(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f);return (h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1));
		},
		    j = h.promise({ elem: a, props: n.extend({}, b), opts: n.extend(!0, { specialEasing: {} }, c), originalProperties: b, originalOptions: c, startTime: La || Sa(), duration: c.duration, tweens: [], createTween: function createTween(b, c) {
				var d = n.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);return (j.tweens.push(d), d);
			}, stop: function stop(b) {
				var c = 0,
				    d = b ? j.tweens.length : 0;if (e) return this;for (e = !0; d > c; c++) j.tweens[c].run(1);return (b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this);
			} }),
		    k = j.props;for (Wa(k, j.opts.specialEasing); g > f; f++) if (d = Qa[f].call(j, a, k, j.opts)) return d;return (n.map(k, Ua, j), n.isFunction(j.opts.start) && j.opts.start.call(a, j), n.fx.timer(n.extend(i, { elem: a, anim: j, queue: j.opts.queue })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always));
	}n.Animation = n.extend(Xa, { tweener: function tweener(a, b) {
			n.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");for (var c, d = 0, e = a.length; e > d; d++) c = a[d], Ra[c] = Ra[c] || [], Ra[c].unshift(b);
		}, prefilter: function prefilter(a, b) {
			b ? Qa.unshift(a) : Qa.push(a);
		} }), n.speed = function (a, b, c) {
		var d = a && "object" == typeof a ? n.extend({}, a) : { complete: c || !c && b || n.isFunction(a) && a, duration: a, easing: c && b || b && !n.isFunction(b) && b };return (d.duration = n.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in n.fx.speeds ? n.fx.speeds[d.duration] : n.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function () {
			n.isFunction(d.old) && d.old.call(this), d.queue && n.dequeue(this, d.queue);
		}, d);
	}, n.fn.extend({ fadeTo: function fadeTo(a, b, c, d) {
			return this.filter(S).css("opacity", 0).show().end().animate({ opacity: b }, a, c, d);
		}, animate: function animate(a, b, c, d) {
			var e = n.isEmptyObject(a),
			    f = n.speed(b, c, d),
			    g = function g() {
				var b = Xa(this, n.extend({}, a), f);(e || L.get(this, "finish")) && b.stop(!0);
			};return (g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g));
		}, stop: function stop(a, b, c) {
			var d = function d(a) {
				var b = a.stop;delete a.stop, b(c);
			};return ("string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function () {
				var b = !0,
				    e = null != a && a + "queueHooks",
				    f = n.timers,
				    g = L.get(this);if (e) g[e] && g[e].stop && d(g[e]);else for (e in g) g[e] && g[e].stop && Pa.test(e) && d(g[e]);for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));(b || !c) && n.dequeue(this, a);
			}));
		}, finish: function finish(a) {
			return (a !== !1 && (a = a || "fx"), this.each(function () {
				var b,
				    c = L.get(this),
				    d = c[a + "queue"],
				    e = c[a + "queueHooks"],
				    f = n.timers,
				    g = d ? d.length : 0;for (c.finish = !0, n.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);delete c.finish;
			}));
		} }), n.each(["toggle", "show", "hide"], function (a, b) {
		var c = n.fn[b];n.fn[b] = function (a, d, e) {
			return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(Ta(b, !0), a, d, e);
		};
	}), n.each({ slideDown: Ta("show"), slideUp: Ta("hide"), slideToggle: Ta("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (a, b) {
		n.fn[a] = function (a, c, d) {
			return this.animate(b, a, c, d);
		};
	}), n.timers = [], n.fx.tick = function () {
		var a,
		    b = 0,
		    c = n.timers;for (La = n.now(); b < c.length; b++) a = c[b], a() || c[b] !== a || c.splice(b--, 1);c.length || n.fx.stop(), La = void 0;
	}, n.fx.timer = function (a) {
		n.timers.push(a), a() ? n.fx.start() : n.timers.pop();
	}, n.fx.interval = 13, n.fx.start = function () {
		Ma || (Ma = setInterval(n.fx.tick, n.fx.interval));
	}, n.fx.stop = function () {
		clearInterval(Ma), Ma = null;
	}, n.fx.speeds = { slow: 600, fast: 200, _default: 400 }, n.fn.delay = function (a, b) {
		return (a = n.fx ? n.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function (b, c) {
			var d = setTimeout(b, a);c.stop = function () {
				clearTimeout(d);
			};
		}));
	}, (function () {
		var a = l.createElement("input"),
		    b = l.createElement("select"),
		    c = b.appendChild(l.createElement("option"));a.type = "checkbox", k.checkOn = "" !== a.value, k.optSelected = c.selected, b.disabled = !0, k.optDisabled = !c.disabled, a = l.createElement("input"), a.value = "t", a.type = "radio", k.radioValue = "t" === a.value;
	})();var Ya,
	    Za,
	    $a = n.expr.attrHandle;n.fn.extend({ attr: function attr(a, b) {
			return J(this, n.attr, a, b, arguments.length > 1);
		}, removeAttr: function removeAttr(a) {
			return this.each(function () {
				n.removeAttr(this, a);
			});
		} }), n.extend({ attr: function attr(a, b, c) {
			var d,
			    e,
			    f = a.nodeType;if (a && 3 !== f && 8 !== f && 2 !== f) return typeof a.getAttribute === U ? n.prop(a, b, c) : (1 === f && n.isXMLDoc(a) || (b = b.toLowerCase(), d = n.attrHooks[b] || (n.expr.match.bool.test(b) ? Za : Ya)), void 0 === c ? d && "get" in d && null !== (e = d.get(a, b)) ? e : (e = n.find.attr(a, b), null == e ? void 0 : e) : null !== c ? d && "set" in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""), c) : void n.removeAttr(a, b));
		}, removeAttr: function removeAttr(a, b) {
			var c,
			    d,
			    e = 0,
			    f = b && b.match(E);if (f && 1 === a.nodeType) while (c = f[e++]) d = n.propFix[c] || c, n.expr.match.bool.test(c) && (a[d] = !1), a.removeAttribute(c);
		}, attrHooks: { type: { set: function set(a, b) {
					if (!k.radioValue && "radio" === b && n.nodeName(a, "input")) {
						var c = a.value;return (a.setAttribute("type", b), c && (a.value = c), b);
					}
				} } } }), Za = { set: function set(a, b, c) {
			return (b === !1 ? n.removeAttr(a, c) : a.setAttribute(c, c), c);
		} }, n.each(n.expr.match.bool.source.match(/\w+/g), function (a, b) {
		var c = $a[b] || n.find.attr;$a[b] = function (a, b, d) {
			var e, f;return (d || (f = $a[b], $a[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, $a[b] = f), e);
		};
	});var _a = /^(?:input|select|textarea|button)$/i;n.fn.extend({ prop: function prop(a, b) {
			return J(this, n.prop, a, b, arguments.length > 1);
		}, removeProp: function removeProp(a) {
			return this.each(function () {
				delete this[n.propFix[a] || a];
			});
		} }), n.extend({ propFix: { "for": "htmlFor", "class": "className" }, prop: function prop(a, b, c) {
			var d,
			    e,
			    f,
			    g = a.nodeType;if (a && 3 !== g && 8 !== g && 2 !== g) return (f = 1 !== g || !n.isXMLDoc(a), f && (b = n.propFix[b] || b, e = n.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]);
		}, propHooks: { tabIndex: { get: function get(a) {
					return a.hasAttribute("tabindex") || _a.test(a.nodeName) || a.href ? a.tabIndex : -1;
				} } } }), k.optSelected || (n.propHooks.selected = { get: function get(a) {
			var b = a.parentNode;return (b && b.parentNode && b.parentNode.selectedIndex, null);
		} }), n.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
		n.propFix[this.toLowerCase()] = this;
	});var ab = /[\t\r\n\f]/g;n.fn.extend({ addClass: function addClass(a) {
			var b,
			    c,
			    d,
			    e,
			    f,
			    g,
			    h = "string" == typeof a && a,
			    i = 0,
			    j = this.length;if (n.isFunction(a)) return this.each(function (b) {
				n(this).addClass(a.call(this, b, this.className));
			});if (h) for (b = (a || "").match(E) || []; j > i; i++) if ((c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(ab, " ") : " "))) {
				f = 0;while (e = b[f++]) d.indexOf(" " + e + " ") < 0 && (d += e + " ");g = n.trim(d), c.className !== g && (c.className = g);
			}return this;
		}, removeClass: function removeClass(a) {
			var b,
			    c,
			    d,
			    e,
			    f,
			    g,
			    h = 0 === arguments.length || "string" == typeof a && a,
			    i = 0,
			    j = this.length;if (n.isFunction(a)) return this.each(function (b) {
				n(this).removeClass(a.call(this, b, this.className));
			});if (h) for (b = (a || "").match(E) || []; j > i; i++) if ((c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(ab, " ") : ""))) {
				f = 0;while (e = b[f++]) while (d.indexOf(" " + e + " ") >= 0) d = d.replace(" " + e + " ", " ");g = a ? n.trim(d) : "", c.className !== g && (c.className = g);
			}return this;
		}, toggleClass: function toggleClass(a, b) {
			var c = typeof a;return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(n.isFunction(a) ? function (c) {
				n(this).toggleClass(a.call(this, c, this.className, b), b);
			} : function () {
				if ("string" === c) {
					var b,
					    d = 0,
					    e = n(this),
					    f = a.match(E) || [];while (b = f[d++]) e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
				} else (c === U || "boolean" === c) && (this.className && L.set(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : L.get(this, "__className__") || "");
			});
		}, hasClass: function hasClass(a) {
			for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++) if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(ab, " ").indexOf(b) >= 0) return !0;return !1;
		} });var bb = /\r/g;n.fn.extend({ val: function val(a) {
			var b,
			    c,
			    d,
			    e = this[0];{
				if (arguments.length) return (d = n.isFunction(a), this.each(function (c) {
					var e;1 === this.nodeType && (e = d ? a.call(this, c, n(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : n.isArray(e) && (e = n.map(e, function (a) {
						return null == a ? "" : a + "";
					})), b = n.valHooks[this.type] || n.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e));
				}));if (e) return (b = n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(bb, "") : null == c ? "" : c));
			}
		} }), n.extend({ valHooks: { option: { get: function get(a) {
					var b = n.find.attr(a, "value");return null != b ? b : n.trim(n.text(a));
				} }, select: { get: function get(a) {
					for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++) if ((c = d[i], !(!c.selected && i !== e || (k.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && n.nodeName(c.parentNode, "optgroup")))) {
						if ((b = n(c).val(), f)) return b;g.push(b);
					}return g;
				}, set: function set(a, b) {
					var c,
					    d,
					    e = a.options,
					    f = n.makeArray(b),
					    g = e.length;while (g--) d = e[g], (d.selected = n.inArray(d.value, f) >= 0) && (c = !0);return (c || (a.selectedIndex = -1), f);
				} } } }), n.each(["radio", "checkbox"], function () {
		n.valHooks[this] = { set: function set(a, b) {
				return n.isArray(b) ? a.checked = n.inArray(n(a).val(), b) >= 0 : void 0;
			} }, k.checkOn || (n.valHooks[this].get = function (a) {
			return null === a.getAttribute("value") ? "on" : a.value;
		});
	}), n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (a, b) {
		n.fn[b] = function (a, c) {
			return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b);
		};
	}), n.fn.extend({ hover: function hover(a, b) {
			return this.mouseenter(a).mouseleave(b || a);
		}, bind: function bind(a, b, c) {
			return this.on(a, null, b, c);
		}, unbind: function unbind(a, b) {
			return this.off(a, null, b);
		}, delegate: function delegate(a, b, c, d) {
			return this.on(b, a, c, d);
		}, undelegate: function undelegate(a, b, c) {
			return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c);
		} });var cb = n.now(),
	    db = /\?/;n.parseJSON = function (a) {
		return JSON.parse(a + "");
	}, n.parseXML = function (a) {
		var b, c;if (!a || "string" != typeof a) return null;try {
			c = new DOMParser(), b = c.parseFromString(a, "text/xml");
		} catch (d) {
			b = void 0;
		}return ((!b || b.getElementsByTagName("parsererror").length) && n.error("Invalid XML: " + a), b);
	};var eb = /#.*$/,
	    fb = /([?&])_=[^&]*/,
	    gb = /^(.*?):[ \t]*([^\r\n]*)$/gm,
	    hb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	    ib = /^(?:GET|HEAD)$/,
	    jb = /^\/\//,
	    kb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
	    lb = {},
	    mb = {},
	    nb = "*/".concat("*"),
	    ob = a.location.href,
	    pb = kb.exec(ob.toLowerCase()) || [];function qb(a) {
		return function (b, c) {
			"string" != typeof b && (c = b, b = "*");var d,
			    e = 0,
			    f = b.toLowerCase().match(E) || [];if (n.isFunction(c)) while (d = f[e++]) "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c);
		};
	}function rb(a, b, c, d) {
		var e = {},
		    f = a === mb;function g(h) {
			var i;return (e[h] = !0, n.each(a[h] || [], function (a, h) {
				var j = h(b, c, d);return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1);
			}), i);
		}return g(b.dataTypes[0]) || !e["*"] && g("*");
	}function sb(a, b) {
		var c,
		    d,
		    e = n.ajaxSettings.flatOptions || {};for (c in b) void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);return (d && n.extend(!0, a, d), a);
	}function tb(a, b, c) {
		var d,
		    e,
		    f,
		    g,
		    h = a.contents,
		    i = a.dataTypes;while ("*" === i[0]) i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));if (d) for (e in h) if (h[e] && h[e].test(d)) {
			i.unshift(e);break;
		}if (i[0] in c) f = i[0];else {
			for (e in c) {
				if (!i[0] || a.converters[e + " " + i[0]]) {
					f = e;break;
				}g || (g = e);
			}f = f || g;
		}return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0;
	}function ub(a, b, c, d) {
		var e,
		    f,
		    g,
		    h,
		    i,
		    j = {},
		    k = a.dataTypes.slice();if (k[1]) for (g in a.converters) j[g.toLowerCase()] = a.converters[g];f = k.shift();while (f) if ((a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())) if ("*" === f) f = i;else if ("*" !== i && i !== f) {
			if ((g = j[i + " " + f] || j["* " + f], !g)) for (e in j) if ((h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]]))) {
				g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));break;
			}if (g !== !0) if (g && a["throws"]) b = g(b);else try {
				b = g(b);
			} catch (l) {
				return { state: "parsererror", error: g ? l : "No conversion from " + i + " to " + f };
			}
		}return { state: "success", data: b };
	}n.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: ob, type: "GET", isLocal: hb.test(pb[1]), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": nb, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /xml/, html: /html/, json: /json/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": n.parseJSON, "text xml": n.parseXML }, flatOptions: { url: !0, context: !0 } }, ajaxSetup: function ajaxSetup(a, b) {
			return b ? sb(sb(a, n.ajaxSettings), b) : sb(n.ajaxSettings, a);
		}, ajaxPrefilter: qb(lb), ajaxTransport: qb(mb), ajax: function ajax(a, b) {
			"object" == typeof a && (b = a, a = void 0), b = b || {};var c,
			    d,
			    e,
			    f,
			    g,
			    h,
			    i,
			    j,
			    k = n.ajaxSetup({}, b),
			    l = k.context || k,
			    m = k.context && (l.nodeType || l.jquery) ? n(l) : n.event,
			    o = n.Deferred(),
			    p = n.Callbacks("once memory"),
			    q = k.statusCode || {},
			    r = {},
			    s = {},
			    t = 0,
			    u = "canceled",
			    v = { readyState: 0, getResponseHeader: function getResponseHeader(a) {
					var b;if (2 === t) {
						if (!f) {
							f = {};while (b = gb.exec(e)) f[b[1].toLowerCase()] = b[2];
						}b = f[a.toLowerCase()];
					}return null == b ? null : b;
				}, getAllResponseHeaders: function getAllResponseHeaders() {
					return 2 === t ? e : null;
				}, setRequestHeader: function setRequestHeader(a, b) {
					var c = a.toLowerCase();return (t || (a = s[c] = s[c] || a, r[a] = b), this);
				}, overrideMimeType: function overrideMimeType(a) {
					return (t || (k.mimeType = a), this);
				}, statusCode: function statusCode(a) {
					var b;if (a) if (2 > t) for (b in a) q[b] = [q[b], a[b]];else v.always(a[v.status]);return this;
				}, abort: function abort(a) {
					var b = a || u;return (c && c.abort(b), x(0, b), this);
				} };if ((o.promise(v).complete = p.add, v.success = v.done, v.error = v.fail, k.url = ((a || k.url || ob) + "").replace(eb, "").replace(jb, pb[1] + "//"), k.type = b.method || b.type || k.method || k.type, k.dataTypes = n.trim(k.dataType || "*").toLowerCase().match(E) || [""], null == k.crossDomain && (h = kb.exec(k.url.toLowerCase()), k.crossDomain = !(!h || h[1] === pb[1] && h[2] === pb[2] && (h[3] || ("http:" === h[1] ? "80" : "443")) === (pb[3] || ("http:" === pb[1] ? "80" : "443")))), k.data && k.processData && "string" != typeof k.data && (k.data = n.param(k.data, k.traditional)), rb(lb, k, b, v), 2 === t)) return v;i = n.event && k.global, i && 0 === n.active++ && n.event.trigger("ajaxStart"), k.type = k.type.toUpperCase(), k.hasContent = !ib.test(k.type), d = k.url, k.hasContent || (k.data && (d = k.url += (db.test(d) ? "&" : "?") + k.data, delete k.data), k.cache === !1 && (k.url = fb.test(d) ? d.replace(fb, "$1_=" + cb++) : d + (db.test(d) ? "&" : "?") + "_=" + cb++)), k.ifModified && (n.lastModified[d] && v.setRequestHeader("If-Modified-Since", n.lastModified[d]), n.etag[d] && v.setRequestHeader("If-None-Match", n.etag[d])), (k.data && k.hasContent && k.contentType !== !1 || b.contentType) && v.setRequestHeader("Content-Type", k.contentType), v.setRequestHeader("Accept", k.dataTypes[0] && k.accepts[k.dataTypes[0]] ? k.accepts[k.dataTypes[0]] + ("*" !== k.dataTypes[0] ? ", " + nb + "; q=0.01" : "") : k.accepts["*"]);for (j in k.headers) v.setRequestHeader(j, k.headers[j]);if (k.beforeSend && (k.beforeSend.call(l, v, k) === !1 || 2 === t)) return v.abort();u = "abort";for (j in { success: 1, error: 1, complete: 1 }) v[j](k[j]);if (c = rb(mb, k, b, v)) {
				v.readyState = 1, i && m.trigger("ajaxSend", [v, k]), k.async && k.timeout > 0 && (g = setTimeout(function () {
					v.abort("timeout");
				}, k.timeout));try {
					t = 1, c.send(r, x);
				} catch (w) {
					if (!(2 > t)) throw w;x(-1, w);
				}
			} else x(-1, "No Transport");function x(a, b, f, h) {
				var j,
				    r,
				    s,
				    u,
				    w,
				    x = b;2 !== t && (t = 2, g && clearTimeout(g), c = void 0, e = h || "", v.readyState = a > 0 ? 4 : 0, j = a >= 200 && 300 > a || 304 === a, f && (u = tb(k, v, f)), u = ub(k, u, v, j), j ? (k.ifModified && (w = v.getResponseHeader("Last-Modified"), w && (n.lastModified[d] = w), w = v.getResponseHeader("etag"), w && (n.etag[d] = w)), 204 === a || "HEAD" === k.type ? x = "nocontent" : 304 === a ? x = "notmodified" : (x = u.state, r = u.data, s = u.error, j = !s)) : (s = x, (a || !x) && (x = "error", 0 > a && (a = 0))), v.status = a, v.statusText = (b || x) + "", j ? o.resolveWith(l, [r, x, v]) : o.rejectWith(l, [v, x, s]), v.statusCode(q), q = void 0, i && m.trigger(j ? "ajaxSuccess" : "ajaxError", [v, k, j ? r : s]), p.fireWith(l, [v, x]), i && (m.trigger("ajaxComplete", [v, k]), --n.active || n.event.trigger("ajaxStop")));
			}return v;
		}, getJSON: function getJSON(a, b, c) {
			return n.get(a, b, c, "json");
		}, getScript: function getScript(a, b) {
			return n.get(a, void 0, b, "script");
		} }), n.each(["get", "post"], function (a, b) {
		n[b] = function (a, c, d, e) {
			return (n.isFunction(c) && (e = e || d, d = c, c = void 0), n.ajax({ url: a, type: b, dataType: e, data: c, success: d }));
		};
	}), n._evalUrl = function (a) {
		return n.ajax({ url: a, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0 });
	}, n.fn.extend({ wrapAll: function wrapAll(a) {
			var b;return n.isFunction(a) ? this.each(function (b) {
				n(this).wrapAll(a.call(this, b));
			}) : (this[0] && (b = n(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function () {
				var a = this;while (a.firstElementChild) a = a.firstElementChild;return a;
			}).append(this)), this);
		}, wrapInner: function wrapInner(a) {
			return this.each(n.isFunction(a) ? function (b) {
				n(this).wrapInner(a.call(this, b));
			} : function () {
				var b = n(this),
				    c = b.contents();c.length ? c.wrapAll(a) : b.append(a);
			});
		}, wrap: function wrap(a) {
			var b = n.isFunction(a);return this.each(function (c) {
				n(this).wrapAll(b ? a.call(this, c) : a);
			});
		}, unwrap: function unwrap() {
			return this.parent().each(function () {
				n.nodeName(this, "body") || n(this).replaceWith(this.childNodes);
			}).end();
		} }), n.expr.filters.hidden = function (a) {
		return a.offsetWidth <= 0 && a.offsetHeight <= 0;
	}, n.expr.filters.visible = function (a) {
		return !n.expr.filters.hidden(a);
	};var vb = /%20/g,
	    wb = /\[\]$/,
	    xb = /\r?\n/g,
	    yb = /^(?:submit|button|image|reset|file)$/i,
	    zb = /^(?:input|select|textarea|keygen)/i;function Ab(a, b, c, d) {
		var e;if (n.isArray(b)) n.each(b, function (b, e) {
			c || wb.test(a) ? d(a, e) : Ab(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d);
		});else if (c || "object" !== n.type(b)) d(a, b);else for (e in b) Ab(a + "[" + e + "]", b[e], c, d);
	}n.param = function (a, b) {
		var c,
		    d = [],
		    e = function e(a, b) {
			b = n.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b);
		};if ((void 0 === b && (b = n.ajaxSettings && n.ajaxSettings.traditional), n.isArray(a) || a.jquery && !n.isPlainObject(a))) n.each(a, function () {
			e(this.name, this.value);
		});else for (c in a) Ab(c, a[c], b, e);return d.join("&").replace(vb, "+");
	}, n.fn.extend({ serialize: function serialize() {
			return n.param(this.serializeArray());
		}, serializeArray: function serializeArray() {
			return this.map(function () {
				var a = n.prop(this, "elements");return a ? n.makeArray(a) : this;
			}).filter(function () {
				var a = this.type;return this.name && !n(this).is(":disabled") && zb.test(this.nodeName) && !yb.test(a) && (this.checked || !T.test(a));
			}).map(function (a, b) {
				var c = n(this).val();return null == c ? null : n.isArray(c) ? n.map(c, function (a) {
					return { name: b.name, value: a.replace(xb, "\r\n") };
				}) : { name: b.name, value: c.replace(xb, "\r\n") };
			}).get();
		} }), n.ajaxSettings.xhr = function () {
		try {
			return new XMLHttpRequest();
		} catch (a) {}
	};var Bb = 0,
	    Cb = {},
	    Db = { 0: 200, 1223: 204 },
	    Eb = n.ajaxSettings.xhr();a.attachEvent && a.attachEvent("onunload", function () {
		for (var a in Cb) Cb[a]();
	}), k.cors = !!Eb && "withCredentials" in Eb, k.ajax = Eb = !!Eb, n.ajaxTransport(function (a) {
		var b;return k.cors || Eb && !a.crossDomain ? { send: function send(c, d) {
				var e,
				    f = a.xhr(),
				    g = ++Bb;if ((f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields)) for (e in a.xhrFields) f[e] = a.xhrFields[e];a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType), a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");for (e in c) f.setRequestHeader(e, c[e]);b = function (a) {
					return function () {
						b && (delete Cb[g], b = f.onload = f.onerror = null, "abort" === a ? f.abort() : "error" === a ? d(f.status, f.statusText) : d(Db[f.status] || f.status, f.statusText, "string" == typeof f.responseText ? { text: f.responseText } : void 0, f.getAllResponseHeaders()));
					};
				}, f.onload = b(), f.onerror = b("error"), b = Cb[g] = b("abort");try {
					f.send(a.hasContent && a.data || null);
				} catch (h) {
					if (b) throw h;
				}
			}, abort: function abort() {
				b && b();
			} } : void 0;
	}), n.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /(?:java|ecma)script/ }, converters: { "text script": function textScript(a) {
				return (n.globalEval(a), a);
			} } }), n.ajaxPrefilter("script", function (a) {
		void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET");
	}), n.ajaxTransport("script", function (a) {
		if (a.crossDomain) {
			var b, c;return { send: function send(d, e) {
					b = n("<script>").prop({ async: !0, charset: a.scriptCharset, src: a.url }).on("load error", c = function (a) {
						b.remove(), c = null, a && e("error" === a.type ? 404 : 200, a.type);
					}), l.head.appendChild(b[0]);
				}, abort: function abort() {
					c && c();
				} };
		}
	});var Fb = [],
	    Gb = /(=)\?(?=&|$)|\?\?/;n.ajaxSetup({ jsonp: "callback", jsonpCallback: function jsonpCallback() {
			var a = Fb.pop() || n.expando + "_" + cb++;return (this[a] = !0, a);
		} }), n.ajaxPrefilter("json jsonp", function (b, c, d) {
		var e,
		    f,
		    g,
		    h = b.jsonp !== !1 && (Gb.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && Gb.test(b.data) && "data");return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = n.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(Gb, "$1" + e) : b.jsonp !== !1 && (b.url += (db.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function () {
			return (g || n.error(e + " was not called"), g[0]);
		}, b.dataTypes[0] = "json", f = a[e], a[e] = function () {
			g = arguments;
		}, d.always(function () {
			a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Fb.push(e)), g && n.isFunction(f) && f(g[0]), g = f = void 0;
		}), "script") : void 0;
	}), n.parseHTML = function (a, b, c) {
		if (!a || "string" != typeof a) return null;"boolean" == typeof b && (c = b, b = !1), b = b || l;var d = v.exec(a),
		    e = !c && [];return d ? [b.createElement(d[1])] : (d = n.buildFragment([a], b, e), e && e.length && n(e).remove(), n.merge([], d.childNodes));
	};var Hb = n.fn.load;n.fn.load = function (a, b, c) {
		if ("string" != typeof a && Hb) return Hb.apply(this, arguments);var d,
		    e,
		    f,
		    g = this,
		    h = a.indexOf(" ");return (h >= 0 && (d = n.trim(a.slice(h)), a = a.slice(0, h)), n.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && n.ajax({ url: a, type: e, dataType: "html", data: b }).done(function (a) {
			f = arguments, g.html(d ? n("<div>").append(n.parseHTML(a)).find(d) : a);
		}).complete(c && function (a, b) {
			g.each(c, f || [a.responseText, b, a]);
		}), this);
	}, n.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (a, b) {
		n.fn[b] = function (a) {
			return this.on(b, a);
		};
	}), n.expr.filters.animated = function (a) {
		return n.grep(n.timers, function (b) {
			return a === b.elem;
		}).length;
	};var Ib = a.document.documentElement;function Jb(a) {
		return n.isWindow(a) ? a : 9 === a.nodeType && a.defaultView;
	}n.offset = { setOffset: function setOffset(a, b, c) {
			var d,
			    e,
			    f,
			    g,
			    h,
			    i,
			    j,
			    k = n.css(a, "position"),
			    l = n(a),
			    m = {};"static" === k && (a.style.position = "relative"), h = l.offset(), f = n.css(a, "top"), i = n.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), n.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m);
		} }, n.fn.extend({ offset: function offset(a) {
			if (arguments.length) return void 0 === a ? this : this.each(function (b) {
				n.offset.setOffset(this, a, b);
			});var b,
			    c,
			    d = this[0],
			    e = { top: 0, left: 0 },
			    f = d && d.ownerDocument;if (f) return (b = f.documentElement, n.contains(b, d) ? (typeof d.getBoundingClientRect !== U && (e = d.getBoundingClientRect()), c = Jb(f), { top: e.top + c.pageYOffset - b.clientTop, left: e.left + c.pageXOffset - b.clientLeft }) : e);
		}, position: function position() {
			if (this[0]) {
				var a,
				    b,
				    c = this[0],
				    d = { top: 0, left: 0 };return ("fixed" === n.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), n.nodeName(a[0], "html") || (d = a.offset()), d.top += n.css(a[0], "borderTopWidth", !0), d.left += n.css(a[0], "borderLeftWidth", !0)), { top: b.top - d.top - n.css(c, "marginTop", !0), left: b.left - d.left - n.css(c, "marginLeft", !0) });
			}
		}, offsetParent: function offsetParent() {
			return this.map(function () {
				var a = this.offsetParent || Ib;while (a && !n.nodeName(a, "html") && "static" === n.css(a, "position")) a = a.offsetParent;return a || Ib;
			});
		} }), n.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (b, c) {
		var d = "pageYOffset" === c;n.fn[b] = function (e) {
			return J(this, function (b, e, f) {
				var g = Jb(b);return void 0 === f ? g ? g[c] : b[e] : void (g ? g.scrollTo(d ? a.pageXOffset : f, d ? f : a.pageYOffset) : b[e] = f);
			}, b, e, arguments.length, null);
		};
	}), n.each(["top", "left"], function (a, b) {
		n.cssHooks[b] = ya(k.pixelPosition, function (a, c) {
			return c ? (c = xa(a, b), va.test(c) ? n(a).position()[b] + "px" : c) : void 0;
		});
	}), n.each({ Height: "height", Width: "width" }, function (a, b) {
		n.each({ padding: "inner" + a, content: b, "": "outer" + a }, function (c, d) {
			n.fn[d] = function (d, e) {
				var f = arguments.length && (c || "boolean" != typeof d),
				    g = c || (d === !0 || e === !0 ? "margin" : "border");return J(this, function (b, c, d) {
					var e;return n.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? n.css(b, c, g) : n.style(b, c, d, g);
				}, b, f ? d : void 0, f, null);
			};
		});
	}), n.fn.size = function () {
		return this.length;
	}, n.fn.andSelf = n.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
		return n;
	});var Kb = a.jQuery,
	    Lb = a.$;return (n.noConflict = function (b) {
		return (a.$ === n && (a.$ = Lb), b && a.jQuery === n && (a.jQuery = Kb), n);
	}, typeof b === U && (a.jQuery = a.$ = n), n);
});

},{}],15:[function(require,module,exports){
(function (global){
/**
 * @license
 * lodash 3.10.1 (Custom Build) lodash.com/license | Underscore.js 1.8.3 underscorejs.org/LICENSE
 * Build: `lodash compat -o ./lodash.js`
 */
"use strict";

;(function () {
    function n(n, t) {
        if (n !== t) {
            var r = null === n,
                e = n === w,
                u = n === n,
                o = null === t,
                i = t === w,
                f = t === t;if (n > t && !o || !u || r && !i && f || e && f) return 1;if (n < t && !r || !f || o && !e && u || i && u) return -1;
        }return 0;
    }function t(n, t, r) {
        for (var e = n.length, u = r ? e : -1; r ? u-- : ++u < e;) if (t(n[u], u, n)) return u;return -1;
    }function r(n, t, r) {
        if (t !== t) return p(n, r);r -= 1;for (var e = n.length; ++r < e;) if (n[r] === t) return r;return -1;
    }function e(n) {
        return typeof n == "function" || false;
    }function u(n) {
        return null == n ? "" : n + "";
    }function o(n, t) {
        for (var r = -1, e = n.length; ++r < e && -1 < t.indexOf(n.charAt(r)););
        return r;
    }function i(n, t) {
        for (var r = n.length; r-- && -1 < t.indexOf(n.charAt(r)););return r;
    }function f(t, r) {
        return n(t.a, r.a) || t.b - r.b;
    }function a(n) {
        return Nn[n];
    }function c(n) {
        return Tn[n];
    }function l(n, t, r) {
        return (t ? n = Bn[n] : r && (n = Dn[n]), "\\" + n);
    }function s(n) {
        return "\\" + Dn[n];
    }function p(n, t, r) {
        var e = n.length;for (t += r ? 0 : -1; r ? t-- : ++t < e;) {
            var u = n[t];if (u !== u) return t;
        }return -1;
    }function h(n) {
        return !!n && typeof n == "object";
    }function _(n) {
        return 160 >= n && 9 <= n && 13 >= n || 32 == n || 160 == n || 5760 == n || 6158 == n || 8192 <= n && (8202 >= n || 8232 == n || 8233 == n || 8239 == n || 8287 == n || 12288 == n || 65279 == n);
    }function v(n, t) {
        for (var r = -1, e = n.length, u = -1, o = []; ++r < e;) n[r] === t && (n[r] = P, o[++u] = r);return o;
    }function g(n) {
        for (var t = -1, r = n.length; ++t < r && _(n.charCodeAt(t)););return t;
    }function y(n) {
        for (var t = n.length; t-- && _(n.charCodeAt(t)););return t;
    }function d(n) {
        return Pn[n];
    }function m(_) {
        function Nn(n) {
            if (h(n) && !(Wo(n) || n instanceof zn)) {
                if (n instanceof Pn) return n;if (eu.call(n, "__chain__") && eu.call(n, "__wrapped__")) return qr(n);
            }return new Pn(n);
        }function Tn() {}function Pn(n, t, r) {
            this.__wrapped__ = n, this.__actions__ = r || [], this.__chain__ = !!t;
        }function zn(n) {
            this.__wrapped__ = n, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = false, this.__iteratees__ = [], this.__takeCount__ = Cu, this.__views__ = [];
        }function Bn() {
            this.__data__ = {};
        }function Dn(n) {
            var t = n ? n.length : 0;for (this.data = { hash: mu(null), set: new hu() }; t--;) this.push(n[t]);
        }function Mn(n, t) {
            var r = n.data;return (typeof t == "string" || de(t) ? r.set.has(t) : r.hash[t]) ? 0 : -1;
        }function qn(n, t) {
            var r = -1,
                e = n.length;for (t || (t = De(e)); ++r < e;) t[r] = n[r];return t;
        }function Kn(n, t) {
            for (var r = -1, e = n.length; ++r < e && false !== t(n[r], r, n););
            return n;
        }function Vn(n, t) {
            for (var r = -1, e = n.length; ++r < e;) if (!t(n[r], r, n)) return false;return true;
        }function Zn(n, t) {
            for (var r = -1, e = n.length, u = -1, o = []; ++r < e;) {
                var i = n[r];t(i, r, n) && (o[++u] = i);
            }return o;
        }function Xn(n, t) {
            for (var r = -1, e = n.length, u = De(e); ++r < e;) u[r] = t(n[r], r, n);return u;
        }function Hn(n, t) {
            for (var r = -1, e = t.length, u = n.length; ++r < e;) n[u + r] = t[r];return n;
        }function Qn(n, t, r, e) {
            var u = -1,
                o = n.length;for (e && o && (r = n[++u]); ++u < o;) r = t(r, n[u], u, n);return r;
        }function nt(n, t) {
            for (var r = -1, e = n.length; ++r < e;) if (t(n[r], r, n)) return true;
            return false;
        }function tt(n, t, r, e) {
            return n !== w && eu.call(e, r) ? n : t;
        }function rt(n, t, r) {
            for (var e = -1, u = Ko(t), o = u.length; ++e < o;) {
                var i = u[e],
                    f = n[i],
                    a = r(f, t[i], i, n, t);(a === a ? a === f : f !== f) && (f !== w || i in n) || (n[i] = a);
            }return n;
        }function et(n, t) {
            return null == t ? n : ot(t, Ko(t), n);
        }function ut(n, t) {
            for (var r = -1, e = null == n, u = !e && Sr(n), o = u ? n.length : 0, i = t.length, f = De(i); ++r < i;) {
                var a = t[r];f[r] = u ? Ur(a, o) ? n[a] : w : e ? w : n[a];
            }return f;
        }function ot(n, t, r) {
            r || (r = {});for (var e = -1, u = t.length; ++e < u;) {
                var o = t[e];r[o] = n[o];
            }return r;
        }function it(n, t, r) {
            var e = typeof n;return "function" == e ? t === w ? n : Dt(n, t, r) : null == n ? Ne : "object" == e ? At(n) : t === w ? Be(n) : jt(n, t);
        }function ft(n, t, r, e, u, o, i) {
            var f;if ((r && (f = u ? r(n, e, u) : r(n)), f !== w)) return f;if (!de(n)) return n;if (e = Wo(n)) {
                if ((f = Ir(n), !t)) return qn(n, f);
            } else {
                var a = ou.call(n),
                    c = a == K;if (a != Z && a != z && (!c || u)) return Ln[a] ? Er(n, a, t) : u ? n : {};if (Gn(n)) return u ? n : {};if ((f = Rr(c ? {} : n), !t)) return et(f, n);
            }for (o || (o = []), i || (i = []), u = o.length; u--;) if (o[u] == n) return i[u];return (o.push(n), i.push(f), (e ? Kn : gt)(n, function (e, u) {
                f[u] = ft(e, t, r, u, n, o, i);
            }), f);
        }function at(n, t, r) {
            if (typeof n != "function") throw new Xe(T);return _u(function () {
                n.apply(w, r);
            }, t);
        }function ct(n, t) {
            var e = n ? n.length : 0,
                u = [];if (!e) return u;var o = -1,
                i = jr(),
                f = i === r,
                a = f && t.length >= F && mu && hu ? new Dn(t) : null,
                c = t.length;a && (i = Mn, f = false, t = a);n: for (; ++o < e;) if ((a = n[o], f && a === a)) {
                for (var l = c; l--;) if (t[l] === a) continue n;u.push(a);
            } else 0 > i(t, a, 0) && u.push(a);return u;
        }function lt(n, t) {
            var r = true;return (zu(n, function (n, e, u) {
                return r = !!t(n, e, u);
            }), r);
        }function st(n, t, r, e) {
            var u = e,
                o = u;return (zu(n, function (n, i, f) {
                i = +t(n, i, f), (r(i, u) || i === e && i === o) && (u = i, o = n);
            }), o);
        }function pt(n, t) {
            var r = [];return (zu(n, function (n, e, u) {
                t(n, e, u) && r.push(n);
            }), r);
        }function ht(n, t, r, e) {
            var u;return (r(n, function (n, r, o) {
                return t(n, r, o) ? (u = e ? r : n, false) : void 0;
            }), u);
        }function _t(n, t, r, e) {
            e || (e = []);for (var u = -1, o = n.length; ++u < o;) {
                var i = n[u];h(i) && Sr(i) && (r || Wo(i) || _e(i)) ? t ? _t(i, t, r, e) : Hn(e, i) : r || (e[e.length] = i);
            }return e;
        }function vt(n, t) {
            return Du(n, t, Ee);
        }function gt(n, t) {
            return Du(n, t, Ko);
        }function yt(n, t) {
            return Mu(n, t, Ko);
        }function dt(n, t) {
            for (var r = -1, e = t.length, u = -1, o = []; ++r < e;) {
                var i = t[r];ye(n[i]) && (o[++u] = i);
            }return o;
        }function mt(n, t, r) {
            if (null != n) {
                n = Dr(n), r !== w && r in n && (t = [r]), r = 0;for (var e = t.length; null != n && r < e;) n = Dr(n)[t[r++]];return r && r == e ? n : w;
            }
        }function wt(n, t, r, e, u, o) {
            if (n === t) return true;if (null == n || null == t || !de(n) && !h(t)) return n !== n && t !== t;n: {
                var i = wt,
                    f = Wo(n),
                    a = Wo(t),
                    c = B,
                    l = B;f || (c = ou.call(n), c == z ? c = Z : c != Z && (f = je(n))), a || (l = ou.call(t), l == z ? l = Z : l != Z && je(t));var s = c == Z && !Gn(n),
                    a = l == Z && !Gn(t),
                    l = c == l;if (!l || f || s) {
                    if (!e && (c = s && eu.call(n, "__wrapped__"), a = a && eu.call(t, "__wrapped__"), c || a)) {
                        n = i(c ? n.value() : n, a ? t.value() : t, r, e, u, o);break n;
                    }if (l) {
                        for (u || (u = []), o || (o = []), c = u.length; c--;) if (u[c] == n) {
                            n = o[c] == t;break n;
                        }u.push(n), o.push(t), n = (f ? mr : xr)(n, t, i, r, e, u, o), u.pop(), o.pop();
                    } else n = false;
                } else n = wr(n, t, c);
            }return n;
        }function xt(n, t, r) {
            var e = t.length,
                u = e,
                o = !r;if (null == n) return !u;for (n = Dr(n); e--;) {
                var i = t[e];if (o && i[2] ? i[1] !== n[i[0]] : !(i[0] in n)) return false;
            }for (; ++e < u;) {
                var i = t[e],
                    f = i[0],
                    a = n[f],
                    c = i[1];if (o && i[2]) {
                    if (a === w && !(f in n)) return false;
                } else if ((i = r ? r(a, c, f) : w, i === w ? !wt(c, a, r, true) : !i)) return false;
            }return true;
        }function bt(n, t) {
            var r = -1,
                e = Sr(n) ? De(n.length) : [];return (zu(n, function (n, u, o) {
                e[++r] = t(n, u, o);
            }), e);
        }function At(n) {
            var t = kr(n);if (1 == t.length && t[0][2]) {
                var r = t[0][0],
                    e = t[0][1];return function (n) {
                    return null == n ? false : (n = Dr(n), n[r] === e && (e !== w || r in n));
                };
            }return function (n) {
                return xt(n, t);
            };
        }function jt(n, t) {
            var r = Wo(n),
                e = Wr(n) && t === t && !de(t),
                u = n + "";return (n = Mr(n), function (o) {
                if (null == o) return false;var i = u;if ((o = Dr(o), !(!r && e || i in o))) {
                    if ((o = 1 == n.length ? o : mt(o, St(n, 0, -1)), null == o)) return false;i = Gr(n), o = Dr(o);
                }return o[i] === t ? t !== w || i in o : wt(t, o[i], w, true);
            });
        }function kt(n, t, r, e, u) {
            if (!de(n)) return n;var o = Sr(t) && (Wo(t) || je(t)),
                i = o ? w : Ko(t);return (Kn(i || t, function (f, a) {
                if ((i && (a = f, f = t[a]), h(f))) {
                    e || (e = []), u || (u = []);n: {
                        for (var c = a, l = e, s = u, p = l.length, _ = t[c]; p--;) if (l[p] == _) {
                            n[c] = s[p];break n;
                        }var p = n[c],
                            v = r ? r(p, _, c, n, t) : w,
                            g = v === w;g && (v = _, Sr(_) && (Wo(_) || je(_)) ? v = Wo(p) ? p : Sr(p) ? qn(p) : [] : xe(_) || _e(_) ? v = _e(p) ? Ie(p) : xe(p) ? p : {} : g = false), l.push(_), s.push(v), g ? n[c] = kt(v, _, r, l, s) : (v === v ? v !== p : p === p) && (n[c] = v);
                    }
                } else c = n[a], l = r ? r(c, f, a, n, t) : w, (s = l === w) && (l = f), l === w && (!o || a in n) || !s && (l === l ? l === c : c !== c) || (n[a] = l);
            }), n);
        }function Ot(n) {
            return function (t) {
                return null == t ? w : Dr(t)[n];
            };
        }function It(n) {
            var t = n + "";return (n = Mr(n), function (r) {
                return mt(r, n, t);
            });
        }function Rt(n, t) {
            for (var r = n ? t.length : 0; r--;) {
                var e = t[r];if (e != u && Ur(e)) {
                    var u = e;vu.call(n, e, 1);
                }
            }return n;
        }function Et(n, t) {
            return n + wu(Ru() * (t - n + 1));
        }function Ct(n, t, r, e, u) {
            return (u(n, function (n, u, o) {
                r = e ? (e = false, n) : t(r, n, u, o);
            }), r);
        }function St(n, t, r) {
            var e = -1,
                u = n.length;for (t = null == t ? 0 : +t || 0, 0 > t && (t = -t > u ? 0 : u + t), r = r === w || r > u ? u : +r || 0, 0 > r && (r += u), u = t > r ? 0 : r - t >>> 0, t >>>= 0, r = De(u); ++e < u;) r[e] = n[e + t];return r;
        }function Ut(n, t) {
            var r;return (zu(n, function (n, e, u) {
                return (r = t(n, e, u), !r);
            }), !!r);
        }function $t(n, t) {
            var r = n.length;for (n.sort(t); r--;) n[r] = n[r].c;return n;
        }function Wt(t, r, e) {
            var u = br(),
                o = -1;return (r = Xn(r, function (n) {
                return u(n);
            }), t = bt(t, function (n) {
                return { a: Xn(r, function (t) {
                        return t(n);
                    }), b: ++o, c: n };
            }), $t(t, function (t, r) {
                var u;n: {
                    for (var o = -1, i = t.a, f = r.a, a = i.length, c = e.length; ++o < a;) if (u = n(i[o], f[o])) {
                        if (o >= c) break n;o = e[o], u *= "asc" === o || true === o ? 1 : -1;break n;
                    }u = t.b - r.b;
                }return u;
            }));
        }function Ft(n, t) {
            var r = 0;return (zu(n, function (n, e, u) {
                r += +t(n, e, u) || 0;
            }), r);
        }function Lt(n, t) {
            var e = -1,
                u = jr(),
                o = n.length,
                i = u === r,
                f = i && o >= F,
                a = f && mu && hu ? new Dn(void 0) : null,
                c = [];a ? (u = Mn, i = false) : (f = false, a = t ? [] : c);n: for (; ++e < o;) {
                var l = n[e],
                    s = t ? t(l, e, n) : l;if (i && l === l) {
                    for (var p = a.length; p--;) if (a[p] === s) continue n;t && a.push(s), c.push(l);
                } else 0 > u(a, s, 0) && ((t || f) && a.push(s), c.push(l));
            }return c;
        }function Nt(n, t) {
            for (var r = -1, e = t.length, u = De(e); ++r < e;) u[r] = n[t[r]];
            return u;
        }function Tt(n, t, r, e) {
            for (var u = n.length, o = e ? u : -1; (e ? o-- : ++o < u) && t(n[o], o, n););return r ? St(n, e ? 0 : o, e ? o + 1 : u) : St(n, e ? o + 1 : 0, e ? u : o);
        }function Pt(n, t) {
            var r = n;r instanceof zn && (r = r.value());for (var e = -1, u = t.length; ++e < u;) var o = t[e], r = o.func.apply(o.thisArg, Hn([r], o.args));return r;
        }function zt(n, t, r) {
            var e = 0,
                u = n ? n.length : e;if (typeof t == "number" && t === t && u <= Uu) {
                for (; e < u;) {
                    var o = e + u >>> 1,
                        i = n[o];(r ? i <= t : i < t) && null !== i ? e = o + 1 : u = o;
                }return u;
            }return Bt(n, t, Ne, r);
        }function Bt(n, t, r, e) {
            t = r(t);for (var u = 0, o = n ? n.length : 0, i = t !== t, f = null === t, a = t === w; u < o;) {
                var c = wu((u + o) / 2),
                    l = r(n[c]),
                    s = l !== w,
                    p = l === l;(i ? p || e : f ? p && s && (e || null != l) : a ? p && (e || s) : null == l ? 0 : e ? l <= t : l < t) ? u = c + 1 : o = c;
            }return ku(o, Su);
        }function Dt(n, t, r) {
            if (typeof n != "function") return Ne;if (t === w) return n;switch (r) {case 1:
                    return function (r) {
                        return n.call(t, r);
                    };case 3:
                    return function (r, e, u) {
                        return n.call(t, r, e, u);
                    };case 4:
                    return function (r, e, u, o) {
                        return n.call(t, r, e, u, o);
                    };case 5:
                    return function (r, e, u, o, i) {
                        return n.call(t, r, e, u, o, i);
                    };}return function () {
                return n.apply(t, arguments);
            };
        }function Mt(n) {
            var t = new au(n.byteLength);
            return (new gu(t).set(new gu(n)), t);
        }function qt(n, t, r) {
            for (var e = r.length, u = -1, o = ju(n.length - e, 0), i = -1, f = t.length, a = De(f + o); ++i < f;) a[i] = t[i];for (; ++u < e;) a[r[u]] = n[u];for (; o--;) a[i++] = n[u++];return a;
        }function Kt(n, t, r) {
            for (var e = -1, u = r.length, o = -1, i = ju(n.length - u, 0), f = -1, a = t.length, c = De(i + a); ++o < i;) c[o] = n[o];for (i = o; ++f < a;) c[i + f] = t[f];for (; ++e < u;) c[i + r[e]] = n[o++];return c;
        }function Vt(n, t) {
            return function (r, e, u) {
                var o = t ? t() : {};if ((e = br(e, u, 3), Wo(r))) {
                    u = -1;for (var i = r.length; ++u < i;) {
                        var f = r[u];n(o, f, e(f, u, r), r);
                    }
                } else zu(r, function (t, r, u) {
                    n(o, t, e(t, r, u), u);
                });return o;
            };
        }function Zt(n) {
            return pe(function (t, r) {
                var e = -1,
                    u = null == t ? 0 : r.length,
                    o = 2 < u ? r[u - 2] : w,
                    i = 2 < u ? r[2] : w,
                    f = 1 < u ? r[u - 1] : w;for (typeof o == "function" ? (o = Dt(o, f, 5), u -= 2) : (o = typeof f == "function" ? f : w, u -= o ? 1 : 0), i && $r(r[0], r[1], i) && (o = 3 > u ? w : o, u = 1); ++e < u;) (i = r[e]) && n(t, i, o);return t;
            });
        }function Yt(n, t) {
            return function (r, e) {
                var u = r ? Vu(r) : 0;if (!Lr(u)) return n(r, e);for (var o = t ? u : -1, i = Dr(r); (t ? o-- : ++o < u) && false !== e(i[o], o, i););return r;
            };
        }function Gt(n) {
            return function (t, r, e) {
                var u = Dr(t);e = e(t);for (var o = e.length, i = n ? o : -1; n ? i-- : ++i < o;) {
                    var f = e[i];if (false === r(u[f], f, u)) break;
                }return t;
            };
        }function Jt(n, t) {
            function r() {
                return (this && this !== Yn && this instanceof r ? e : n).apply(t, arguments);
            }var e = Ht(n);return r;
        }function Xt(n) {
            return function (t) {
                var r = -1;t = Fe(Ue(t));for (var e = t.length, u = ""; ++r < e;) u = n(u, t[r], r);return u;
            };
        }function Ht(n) {
            return function () {
                var t = arguments;switch (t.length) {case 0:
                        return new n();case 1:
                        return new n(t[0]);case 2:
                        return new n(t[0], t[1]);case 3:
                        return new n(t[0], t[1], t[2]);
                    case 4:
                        return new n(t[0], t[1], t[2], t[3]);case 5:
                        return new n(t[0], t[1], t[2], t[3], t[4]);case 6:
                        return new n(t[0], t[1], t[2], t[3], t[4], t[5]);case 7:
                        return new n(t[0], t[1], t[2], t[3], t[4], t[5], t[6]);}var r = Pu(n.prototype),
                    t = n.apply(r, t);return de(t) ? t : r;
            };
        }function Qt(n) {
            function t(r, e, u) {
                return (u && $r(r, e, u) && (e = w), r = dr(r, n, w, w, w, w, w, e), r.placeholder = t.placeholder, r);
            }return t;
        }function nr(n, t) {
            return pe(function (r) {
                var e = r[0];return null == e ? e : (r.push(t), n.apply(w, r));
            });
        }function tr(n, t) {
            return function (r, e, u) {
                if ((u && $r(r, e, u) && (e = w), e = br(e, u, 3), 1 == e.length)) {
                    u = r = Wo(r) ? r : Br(r);for (var o = e, i = -1, f = u.length, a = t, c = a; ++i < f;) {
                        var l = u[i],
                            s = +o(l);n(s, a) && (a = s, c = l);
                    }if ((u = c, !r.length || u !== t)) return u;
                }return st(r, e, n, t);
            };
        }function rr(n, r) {
            return function (e, u, o) {
                return (u = br(u, o, 3), Wo(e) ? (u = t(e, u, r), -1 < u ? e[u] : w) : ht(e, u, n));
            };
        }function er(n) {
            return function (r, e, u) {
                return r && r.length ? (e = br(e, u, 3), t(r, e, n)) : -1;
            };
        }function ur(n) {
            return function (t, r, e) {
                return (r = br(r, e, 3), ht(t, r, n, true));
            };
        }function or(n) {
            return function () {
                for (var t, r = arguments.length, e = n ? r : -1, u = 0, o = De(r); n ? e-- : ++e < r;) {
                    var i = o[u++] = arguments[e];if (typeof i != "function") throw new Xe(T);!t && Pn.prototype.thru && "wrapper" == Ar(i) && (t = new Pn([], true));
                }for (e = t ? -1 : r; ++e < r;) {
                    var i = o[e],
                        u = Ar(i),
                        f = "wrapper" == u ? Ku(i) : w;t = f && Fr(f[0]) && f[1] == (E | k | I | C) && !f[4].length && 1 == f[9] ? t[Ar(f[0])].apply(t, f[3]) : 1 == i.length && Fr(i) ? t[u]() : t.thru(i);
                }return function () {
                    var n = arguments,
                        e = n[0];if (t && 1 == n.length && Wo(e) && e.length >= F) return t.plant(e).value();for (var u = 0, n = r ? o[u].apply(this, n) : e; ++u < r;) n = o[u].call(this, n);return n;
                };
            };
        }function ir(n, t) {
            return function (r, e, u) {
                return typeof e == "function" && u === w && Wo(r) ? n(r, e) : t(r, Dt(e, u, 3));
            };
        }function fr(n) {
            return function (t, r, e) {
                return ((typeof r != "function" || e !== w) && (r = Dt(r, e, 3)), n(t, r, Ee));
            };
        }function ar(n) {
            return function (t, r, e) {
                return ((typeof r != "function" || e !== w) && (r = Dt(r, e, 3)), n(t, r));
            };
        }function cr(n) {
            return function (t, r, e) {
                var u = {};return (r = br(r, e, 3), gt(t, function (t, e, o) {
                    o = r(t, e, o), e = n ? o : e, t = n ? t : o, u[e] = t;
                }), u);
            };
        }function lr(n) {
            return function (t, r, e) {
                return (t = u(t), (n ? t : "") + _r(t, r, e) + (n ? "" : t));
            };
        }function sr(n) {
            var t = pe(function (r, e) {
                var u = v(e, t.placeholder);return dr(r, n, w, e, u);
            });return t;
        }function pr(n, t) {
            return function (r, e, u, o) {
                var i = 3 > arguments.length;return typeof e == "function" && o === w && Wo(r) ? n(r, e, u, i) : Ct(r, br(e, o, 4), u, i, t);
            };
        }function hr(n, t, r, e, u, o, i, f, a, c) {
            function l() {
                for (var m = arguments.length, x = m, j = De(m); x--;) j[x] = arguments[x];if ((e && (j = qt(j, e, u)), o && (j = Kt(j, o, i)), _ || y)) {
                    var x = l.placeholder,
                        k = v(j, x),
                        m = m - k.length;if (m < c) {
                        var O = f ? qn(f) : w,
                            m = ju(c - m, 0),
                            E = _ ? k : w,
                            k = _ ? w : k,
                            C = _ ? j : w,
                            j = _ ? w : j;return (t |= _ ? I : R, t &= ~(_ ? R : I), g || (t &= ~(b | A)), j = [n, t, r, C, E, j, k, O, a, m], O = hr.apply(w, j), Fr(n) && Zu(O, j), O.placeholder = x, O);
                    }
                }if ((x = p ? r : this, O = h ? x[n] : n, f)) for (m = j.length, E = ku(f.length, m), k = qn(j); E--;) C = f[E], j[E] = Ur(C, m) ? k[C] : w;return (s && a < j.length && (j.length = a), this && this !== Yn && this instanceof l && (O = d || Ht(n)), O.apply(x, j));
            }var s = t & E,
                p = t & b,
                h = t & A,
                _ = t & k,
                g = t & j,
                y = t & O,
                d = h ? w : Ht(n);return l;
        }function _r(n, t, r) {
            return (n = n.length, t = +t, n < t && bu(t) ? (t -= n, r = null == r ? " " : r + "", $e(r, du(t / r.length)).slice(0, t)) : "");
        }function vr(n, t, r, e) {
            function u() {
                for (var t = -1, f = arguments.length, a = -1, c = e.length, l = De(c + f); ++a < c;) l[a] = e[a];
                for (; f--;) l[a++] = arguments[++t];return (this && this !== Yn && this instanceof u ? i : n).apply(o ? r : this, l);
            }var o = t & b,
                i = Ht(n);return u;
        }function gr(n) {
            var t = Ve[n];return function (n, r) {
                return (r = r === w ? 0 : +r || 0) ? (r = su(10, r), t(n * r) / r) : t(n);
            };
        }function yr(n) {
            return function (t, r, e, u) {
                var o = br(e);return null == e && o === it ? zt(t, r, n) : Bt(t, r, o(e, u, 1), n);
            };
        }function dr(n, t, r, e, u, o, i, f) {
            var a = t & A;if (!a && typeof n != "function") throw new Xe(T);var c = e ? e.length : 0;if ((c || (t &= ~(I | R), e = u = w), c -= u ? u.length : 0, t & R)) {
                var l = e,
                    s = u;e = u = w;
            }var p = a ? w : Ku(n);
            return (r = [n, t, r, e, u, l, s, o, i, f], p && (e = r[1], t = p[1], f = e | t, u = t == E && e == k || t == E && e == C && r[7].length <= p[8] || t == (E | C) && e == k, (f < E || u) && (t & b && (r[2] = p[2], f |= e & b ? 0 : j), (e = p[3]) && (u = r[3], r[3] = u ? qt(u, e, p[4]) : qn(e), r[4] = u ? v(r[3], P) : qn(p[4])), (e = p[5]) && (u = r[5], r[5] = u ? Kt(u, e, p[6]) : qn(e), r[6] = u ? v(r[5], P) : qn(p[6])), (e = p[7]) && (r[7] = qn(e)), t & E && (r[8] = null == r[8] ? p[8] : ku(r[8], p[8])), null == r[9] && (r[9] = p[9]), r[0] = p[0], r[1] = f), t = r[1], f = r[9]), r[9] = null == f ? a ? 0 : n.length : ju(f - c, 0) || 0, n = t == b ? Jt(r[0], r[2]) : t != I && t != (b | I) || r[4].length ? hr.apply(w, r) : vr.apply(w, r), (p ? qu : Zu)(n, r));
        }function mr(n, t, r, e, u, o, i) {
            var f = -1,
                a = n.length,
                c = t.length;if (a != c && (!u || c <= a)) return false;for (; ++f < a;) {
                var l = n[f],
                    c = t[f],
                    s = e ? e(u ? c : l, u ? l : c, f) : w;if (s !== w) {
                    if (s) continue;return false;
                }if (u) {
                    if (!nt(t, function (n) {
                        return l === n || r(l, n, e, u, o, i);
                    })) return false;
                } else if (l !== c && !r(l, c, e, u, o, i)) return false;
            }return true;
        }function wr(n, t, r) {
            switch (r) {case D:case M:
                    return +n == +t;case q:
                    return n.name == t.name && n.message == t.message;case V:
                    return n != +n ? t != +t : n == +t;case Y:case G:
                    return n == t + "";}return false;
        }function xr(n, t, r, e, u, o, i) {
            var f = Ko(n),
                a = f.length,
                c = Ko(t).length;if (a != c && !u) return false;for (c = a; c--;) {
                var l = f[c];if (!(u ? l in t : eu.call(t, l))) return false;
            }for (var s = u; ++c < a;) {
                var l = f[c],
                    p = n[l],
                    h = t[l],
                    _ = e ? e(u ? h : p, u ? p : h, l) : w;if (_ === w ? !r(p, h, e, u, o, i) : !_) return false;s || (s = "constructor" == l);
            }return s || (r = n.constructor, e = t.constructor, !(r != e && "constructor" in n && "constructor" in t) || typeof r == "function" && r instanceof r && typeof e == "function" && e instanceof e) ? true : false;
        }function br(n, t, r) {
            var e = Nn.callback || Le,
                e = e === Le ? it : e;return r ? e(n, t, r) : e;
        }function Ar(n) {
            for (var t = n.name + "", r = Fu[t], e = r ? r.length : 0; e--;) {
                var u = r[e],
                    o = u.func;if (null == o || o == n) return u.name;
            }return t;
        }function jr(n, t, e) {
            var u = Nn.indexOf || Yr,
                u = u === Yr ? r : u;return n ? u(n, t, e) : u;
        }function kr(n) {
            n = Ce(n);for (var t = n.length; t--;) {
                var r,
                    e = n[t];r = n[t][1], r = r === r && !de(r), e[2] = r;
            }return n;
        }function Or(n, t) {
            var r = null == n ? w : n[t];return me(r) ? r : w;
        }function Ir(n) {
            var t = n.length,
                r = new n.constructor(t);return (t && "string" == typeof n[0] && eu.call(n, "index") && (r.index = n.index, r.input = n.input), r);
        }function Rr(n) {
            return (n = n.constructor, typeof n == "function" && n instanceof n || (n = Ye), new n());
        }function Er(n, t, r) {
            var e = n.constructor;switch (t) {case J:
                    return Mt(n);case D:case M:
                    return new e(+n);case X:case H:case Q:case nn:case tn:case rn:case en:case un:case on:
                    return (e instanceof e && (e = Lu[t]), t = n.buffer, new e(r ? Mt(t) : t, n.byteOffset, n.length));case V:case G:
                    return new e(n);case Y:
                    var u = new e(n.source, kn.exec(n));u.lastIndex = n.lastIndex;}return u;
        }function Cr(n, t, r) {
            return (null == n || Wr(t, n) || (t = Mr(t), n = 1 == t.length ? n : mt(n, St(t, 0, -1)), t = Gr(t)), t = null == n ? n : n[t], null == t ? w : t.apply(n, r));
        }function Sr(n) {
            return null != n && Lr(Vu(n));
        }function Ur(n, t) {
            return (n = typeof n == "number" || Rn.test(n) ? +n : -1, t = null == t ? $u : t, -1 < n && 0 == n % 1 && n < t);
        }function $r(n, t, r) {
            if (!de(r)) return false;var e = typeof t;return ("number" == e ? Sr(r) && Ur(t, r.length) : "string" == e && t in r) ? (t = r[t], n === n ? n === t : t !== t) : false;
        }function Wr(n, t) {
            var r = typeof n;return "string" == r && dn.test(n) || "number" == r ? true : Wo(n) ? false : !yn.test(n) || null != t && n in Dr(t);
        }function Fr(n) {
            var t = Ar(n),
                r = Nn[t];return typeof r == "function" && t in zn.prototype ? n === r ? true : (t = Ku(r), !!t && n === t[0]) : false;
        }function Lr(n) {
            return typeof n == "number" && -1 < n && 0 == n % 1 && n <= $u;
        }function Nr(n, t) {
            return n === w ? t : Fo(n, t, Nr);
        }function Tr(n, t) {
            n = Dr(n);for (var r = -1, e = t.length, u = {}; ++r < e;) {
                var o = t[r];o in n && (u[o] = n[o]);
            }return u;
        }function Pr(n, t) {
            var r = {};return (vt(n, function (n, e, u) {
                t(n, e, u) && (r[e] = n);
            }), r);
        }function zr(n) {
            for (var t = Ee(n), r = t.length, e = r && n.length, u = !!e && Lr(e) && (Wo(n) || _e(n) || Ae(n)), o = -1, i = []; ++o < r;) {
                var f = t[o];(u && Ur(f, e) || eu.call(n, f)) && i.push(f);
            }return i;
        }function Br(n) {
            return null == n ? [] : Sr(n) ? Nn.support.unindexedChars && Ae(n) ? n.split("") : de(n) ? n : Ye(n) : Se(n);
        }function Dr(n) {
            if (Nn.support.unindexedChars && Ae(n)) {
                for (var t = -1, r = n.length, e = Ye(n); ++t < r;) e[t] = n.charAt(t);return e;
            }return de(n) ? n : Ye(n);
        }function Mr(n) {
            if (Wo(n)) return n;var t = [];return (u(n).replace(mn, function (n, r, e, u) {
                t.push(e ? u.replace(An, "$1") : r || n);
            }), t);
        }function qr(n) {
            return n instanceof zn ? n.clone() : new Pn(n.__wrapped__, n.__chain__, qn(n.__actions__));
        }function Kr(n, t, r) {
            return n && n.length ? ((r ? $r(n, t, r) : null == t) && (t = 1), St(n, 0 > t ? 0 : t)) : [];
        }function Vr(n, t, r) {
            var e = n ? n.length : 0;return e ? ((r ? $r(n, t, r) : null == t) && (t = 1), t = e - (+t || 0), St(n, 0, 0 > t ? 0 : t)) : [];
        }function Zr(n) {
            return n ? n[0] : w;
        }function Yr(n, t, e) {
            var u = n ? n.length : 0;if (!u) return -1;if (typeof e == "number") e = 0 > e ? ju(u + e, 0) : e;else if (e) return (e = zt(n, t), e < u && (t === t ? t === n[e] : n[e] !== n[e]) ? e : -1);return r(n, t, e || 0);
        }function Gr(n) {
            var t = n ? n.length : 0;return t ? n[t - 1] : w;
        }function Jr(n) {
            return Kr(n, 1);
        }function Xr(n, t, e, u) {
            if (!n || !n.length) return [];null != t && typeof t != "boolean" && (u = e, e = $r(n, t, u) ? w : t, t = false);var o = br();if (((null != e || o !== it) && (e = o(e, u, 3)), t && jr() === r)) {
                t = e;var i;e = -1, u = n.length;for (var o = -1, f = []; ++e < u;) {
                    var a = n[e],
                        c = t ? t(a, e, n) : a;e && i === c || (i = c, f[++o] = a);
                }n = f;
            } else n = Lt(n, e);return n;
        }function Hr(n) {
            if (!n || !n.length) return [];var t = -1,
                r = 0;n = Zn(n, function (n) {
                return Sr(n) ? (r = ju(n.length, r), true) : void 0;
            });for (var e = De(r); ++t < r;) e[t] = Xn(n, Ot(t));return e;
        }function Qr(n, t, r) {
            return n && n.length ? (n = Hr(n), null == t ? n : (t = Dt(t, r, 4), Xn(n, function (n) {
                return Qn(n, t, w, true);
            }))) : [];
        }function ne(n, t) {
            var r = -1,
                e = n ? n.length : 0,
                u = {};for (!e || t || Wo(n[0]) || (t = []); ++r < e;) {
                var o = n[r];t ? u[o] = t[r] : o && (u[o[0]] = o[1]);
            }return u;
        }function te(n) {
            return (n = Nn(n), n.__chain__ = true, n);
        }function re(n, t, r) {
            return t.call(r, n);
        }function ee(n, t, r) {
            var e = Wo(n) ? Vn : lt;return (r && $r(n, t, r) && (t = w), (typeof t != "function" || r !== w) && (t = br(t, r, 3)), e(n, t));
        }function ue(n, t, r) {
            var e = Wo(n) ? Zn : pt;return (t = br(t, r, 3), e(n, t));
        }function oe(n, t, r, e) {
            var u = n ? Vu(n) : 0;return (Lr(u) || (n = Se(n), u = n.length), r = typeof r != "number" || e && $r(t, r, e) ? 0 : 0 > r ? ju(u + r, 0) : r || 0, typeof n == "string" || !Wo(n) && Ae(n) ? r <= u && -1 < n.indexOf(t, r) : !!u && -1 < jr(n, t, r));
        }function ie(n, t, r) {
            var e = Wo(n) ? Xn : bt;
            return (t = br(t, r, 3), e(n, t));
        }function fe(n, t, r) {
            if (r ? $r(n, t, r) : null == t) {
                n = Br(n);var e = n.length;return 0 < e ? n[Et(0, e - 1)] : w;
            }r = -1, n = Oe(n);var e = n.length,
                u = e - 1;for (t = ku(0 > t ? 0 : +t || 0, e); ++r < t;) {
                var e = Et(r, u),
                    o = n[e];n[e] = n[r], n[r] = o;
            }return (n.length = t, n);
        }function ae(n, t, r) {
            var e = Wo(n) ? nt : Ut;return (r && $r(n, t, r) && (t = w), (typeof t != "function" || r !== w) && (t = br(t, r, 3)), e(n, t));
        }function ce(n, t) {
            var r;if (typeof t != "function") {
                if (typeof n != "function") throw new Xe(T);var e = n;n = t, t = e;
            }return function () {
                return (0 < --n && (r = t.apply(this, arguments)), 1 >= n && (t = w), r);
            };
        }function le(n, t, r) {
            function e(t, r) {
                r && cu(r), a = p = h = w, t && (_ = wo(), c = n.apply(s, f), p || a || (f = s = w));
            }function u() {
                var n = t - (wo() - l);0 >= n || n > t ? e(h, a) : p = _u(u, n);
            }function o() {
                e(g, p);
            }function i() {
                if ((f = arguments, l = wo(), s = this, h = g && (p || !y), false === v)) var r = y && !p;else {
                    a || y || (_ = l);var e = v - (l - _),
                        i = 0 >= e || e > v;i ? (a && (a = cu(a)), _ = l, c = n.apply(s, f)) : a || (a = _u(o, e));
                }return (i && p ? p = cu(p) : p || t === v || (p = _u(u, t)), r && (i = true, c = n.apply(s, f)), !i || p || a || (f = s = w), c);
            }var f,
                a,
                c,
                l,
                s,
                p,
                h,
                _ = 0,
                v = false,
                g = true;if (typeof n != "function") throw new Xe(T);
            if ((t = 0 > t ? 0 : +t || 0, true === r)) var y = true,
                g = false;else de(r) && (y = !!r.leading, v = "maxWait" in r && ju(+r.maxWait || 0, t), g = "trailing" in r ? !!r.trailing : g);return (i.cancel = function () {
                p && cu(p), a && cu(a), _ = 0, a = p = h = w;
            }, i);
        }function se(n, t) {
            if (typeof n != "function" || t && typeof t != "function") throw new Xe(T);var r = function r() {
                var e = arguments,
                    u = t ? t.apply(this, e) : e[0],
                    o = r.cache;return o.has(u) ? o.get(u) : (e = n.apply(this, e), r.cache = o.set(u, e), e);
            };return (r.cache = new se.Cache(), r);
        }function pe(n, t) {
            if (typeof n != "function") throw new Xe(T);return (t = ju(t === w ? n.length - 1 : +t || 0, 0), function () {
                for (var r = arguments, e = -1, u = ju(r.length - t, 0), o = De(u); ++e < u;) o[e] = r[t + e];switch (t) {case 0:
                        return n.call(this, o);case 1:
                        return n.call(this, r[0], o);case 2:
                        return n.call(this, r[0], r[1], o);}for (u = De(t + 1), e = -1; ++e < t;) u[e] = r[e];return (u[t] = o, n.apply(this, u));
            });
        }function he(n, t) {
            return n > t;
        }function _e(n) {
            return h(n) && Sr(n) && eu.call(n, "callee") && !pu.call(n, "callee");
        }function ve(n, t, r, e) {
            return (e = (r = typeof r == "function" ? Dt(r, e, 3) : w) ? r(n, t) : w, e === w ? wt(n, t, r) : !!e);
        }function ge(n) {
            return h(n) && typeof n.message == "string" && ou.call(n) == q;
        }function ye(n) {
            return de(n) && ou.call(n) == K;
        }function de(n) {
            var t = typeof n;return !!n && ("object" == t || "function" == t);
        }function me(n) {
            return null == n ? false : ye(n) ? fu.test(ru.call(n)) : h(n) && (Gn(n) ? fu : In).test(n);
        }function we(n) {
            return typeof n == "number" || h(n) && ou.call(n) == V;
        }function xe(n) {
            var t;if (!h(n) || ou.call(n) != Z || Gn(n) || _e(n) || !(eu.call(n, "constructor") || (t = n.constructor, typeof t != "function" || t instanceof t))) return false;var r;return Nn.support.ownLast ? (vt(n, function (n, t, e) {
                return (r = eu.call(e, t), false);
            }), false !== r) : (vt(n, function (n, t) {
                r = t;
            }), r === w || eu.call(n, r));
        }function be(n) {
            return de(n) && ou.call(n) == Y;
        }function Ae(n) {
            return typeof n == "string" || h(n) && ou.call(n) == G;
        }function je(n) {
            return h(n) && Lr(n.length) && !!Fn[ou.call(n)];
        }function ke(n, t) {
            return n < t;
        }function Oe(n) {
            var t = n ? Vu(n) : 0;return Lr(t) ? t ? Nn.support.unindexedChars && Ae(n) ? n.split("") : qn(n) : [] : Se(n);
        }function Ie(n) {
            return ot(n, Ee(n));
        }function Re(n) {
            return dt(n, Ee(n));
        }function Ee(n) {
            if (null == n) return [];de(n) || (n = Ye(n));for (var t = n.length, r = Nn.support, t = t && Lr(t) && (Wo(n) || _e(n) || Ae(n)) && t || 0, e = n.constructor, u = -1, e = ye(e) && e.prototype || nu, o = e === n, i = De(t), f = 0 < t, a = r.enumErrorProps && (n === Qe || n instanceof qe), c = r.enumPrototypes && ye(n); ++u < t;) i[u] = u + "";
            for (var l in n) c && "prototype" == l || a && ("message" == l || "name" == l) || f && Ur(l, t) || "constructor" == l && (o || !eu.call(n, l)) || i.push(l);if (r.nonEnumShadows && n !== nu) for (t = n === tu ? G : n === Qe ? q : ou.call(n), r = Nu[t] || Nu[Z], t == Z && (e = nu), t = Wn.length; t--;) l = Wn[t], u = r[l], o && u || (u ? !eu.call(n, l) : n[l] === e[l]) || i.push(l);return i;
        }function Ce(n) {
            n = Dr(n);for (var t = -1, r = Ko(n), e = r.length, u = De(e); ++t < e;) {
                var o = r[t];u[t] = [o, n[o]];
            }return u;
        }function Se(n) {
            return Nt(n, Ko(n));
        }function Ue(n) {
            return (n = u(n)) && n.replace(En, a).replace(bn, "");
        }function $e(n, t) {
            var r = "";if ((n = u(n), t = +t, 1 > t || !n || !bu(t))) return r;do t % 2 && (r += n), t = wu(t / 2), n += n; while (t);return r;
        }function We(n, t, r) {
            var e = n;return (n = u(n)) ? (r ? $r(e, t, r) : null == t) ? n.slice(g(n), y(n) + 1) : (t += "", n.slice(o(n, t), i(n, t) + 1)) : n;
        }function Fe(n, t, r) {
            return (r && $r(n, t, r) && (t = w), n = u(n), n.match(t || Un) || []);
        }function Le(n, t, r) {
            return (r && $r(n, t, r) && (t = w), h(n) ? Te(n) : it(n, t));
        }function Ne(n) {
            return n;
        }function Te(n) {
            return At(ft(n, true));
        }function Pe(n, t, r) {
            if (null == r) {
                var e = de(t),
                    u = e ? Ko(t) : w;((u = u && u.length ? dt(t, u) : w) ? u.length : e) || (u = false, r = t, t = n, n = this);
            }u || (u = dt(t, Ko(t)));var o = true,
                e = -1,
                i = ye(n),
                f = u.length;false === r ? o = false : de(r) && "chain" in r && (o = r.chain);for (; ++e < f;) {
                r = u[e];var a = t[r];n[r] = a, i && (n.prototype[r] = (function (t) {
                    return function () {
                        var r = this.__chain__;if (o || r) {
                            var e = n(this.__wrapped__);return ((e.__actions__ = qn(this.__actions__)).push({ func: t, args: arguments, thisArg: n }), e.__chain__ = r, e);
                        }return t.apply(n, Hn([this.value()], arguments));
                    };
                })(a));
            }return n;
        }function ze() {}function Be(n) {
            return Wr(n) ? Ot(n) : It(n);
        }_ = _ ? Jn.defaults(Yn.Object(), _, Jn.pick(Yn, $n)) : Yn;
        var De = _.Array,
            Me = _.Date,
            qe = _.Error,
            Ke = _.Function,
            Ve = _.Math,
            Ze = _.Number,
            Ye = _.Object,
            Ge = _.RegExp,
            Je = _.String,
            Xe = _.TypeError,
            He = De.prototype,
            Qe = qe.prototype,
            nu = Ye.prototype,
            tu = Je.prototype,
            ru = Ke.prototype.toString,
            eu = nu.hasOwnProperty,
            uu = 0,
            ou = nu.toString,
            iu = Yn._,
            fu = Ge("^" + ru.call(eu).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
            au = _.ArrayBuffer,
            cu = _.clearTimeout,
            lu = _.parseFloat,
            su = Ve.pow,
            pu = nu.propertyIsEnumerable,
            hu = Or(_, "Set"),
            _u = _.setTimeout,
            vu = He.splice,
            gu = _.Uint8Array,
            yu = Or(_, "WeakMap"),
            du = Ve.ceil,
            mu = Or(Ye, "create"),
            wu = Ve.floor,
            xu = Or(De, "isArray"),
            bu = _.isFinite,
            Au = Or(Ye, "keys"),
            ju = Ve.max,
            ku = Ve.min,
            Ou = Or(Me, "now"),
            Iu = _.parseInt,
            Ru = Ve.random,
            Eu = Ze.NEGATIVE_INFINITY,
            Cu = Ze.POSITIVE_INFINITY,
            Su = 4294967294,
            Uu = 2147483647,
            $u = 9007199254740991,
            Wu = yu && new yu(),
            Fu = {},
            Lu = {};
        Lu[X] = _.Float32Array, Lu[H] = _.Float64Array, Lu[Q] = _.Int8Array, Lu[nn] = _.Int16Array, Lu[tn] = _.Int32Array, Lu[rn] = gu, Lu[en] = _.Uint8ClampedArray, Lu[un] = _.Uint16Array, Lu[on] = _.Uint32Array;var Nu = {};Nu[B] = Nu[M] = Nu[V] = { constructor: true, toLocaleString: true, toString: true, valueOf: true }, Nu[D] = Nu[G] = { constructor: true, toString: true, valueOf: true }, Nu[q] = Nu[K] = Nu[Y] = { constructor: true, toString: true }, Nu[Z] = { constructor: true }, Kn(Wn, function (n) {
            for (var t in Nu) if (eu.call(Nu, t)) {
                var r = Nu[t];r[n] = eu.call(r, n);
            }
        });var Tu = Nn.support = {};!(function (n) {
            var t = function t() {
                this.x = n;
            },
                r = { 0: n, length: n },
                e = [];t.prototype = { valueOf: n, y: n };for (var u in new t()) e.push(u);Tu.enumErrorProps = pu.call(Qe, "message") || pu.call(Qe, "name"), Tu.enumPrototypes = pu.call(t, "prototype"), Tu.nonEnumShadows = !/valueOf/.test(e), Tu.ownLast = "x" != e[0], Tu.spliceObjects = (vu.call(r, 0, 1), !r[0]), Tu.unindexedChars = "xx" != "x"[0] + Ye("x")[0];
        })(1, 0), Nn.templateSettings = { escape: _n, evaluate: vn, interpolate: gn, variable: "", imports: { _: Nn } };var Pu = (function () {
            function n() {}return function (t) {
                if (de(t)) {
                    n.prototype = t;
                    var r = new n();n.prototype = w;
                }return r || {};
            };
        })(),
            zu = Yt(gt),
            Bu = Yt(yt, true),
            Du = Gt(),
            Mu = Gt(true),
            qu = Wu ? function (n, t) {
            return (Wu.set(n, t), n);
        } : Ne,
            Ku = Wu ? function (n) {
            return Wu.get(n);
        } : ze,
            Vu = Ot("length"),
            Zu = (function () {
            var n = 0,
                t = 0;return function (r, e) {
                var u = wo(),
                    o = W - (u - t);if ((t = u, 0 < o)) {
                    if (++n >= $) return r;
                } else n = 0;return qu(r, e);
            };
        })(),
            Yu = pe(function (n, t) {
            return h(n) && Sr(n) ? ct(n, _t(t, false, true)) : [];
        }),
            Gu = er(),
            Ju = er(true),
            Xu = pe(function (n) {
            for (var t = n.length, e = t, u = De(l), o = jr(), i = o === r, f = []; e--;) {
                var a = n[e] = Sr(a = n[e]) ? a : [];u[e] = i && 120 <= a.length && mu && hu ? new Dn(e && a) : null;
            }var i = n[0],
                c = -1,
                l = i ? i.length : 0,
                s = u[0];n: for (; ++c < l;) if ((a = i[c], 0 > (s ? Mn(s, a) : o(f, a, 0)))) {
                for (e = t; --e;) {
                    var p = u[e];if (0 > (p ? Mn(p, a) : o(n[e], a, 0))) continue n;
                }s && s.push(a), f.push(a);
            }return f;
        }),
            Hu = pe(function (t, r) {
            r = _t(r);var e = ut(t, r);return (Rt(t, r.sort(n)), e);
        }),
            Qu = yr(),
            no = yr(true),
            to = pe(function (n) {
            return Lt(_t(n, false, true));
        }),
            ro = pe(function (n, t) {
            return Sr(n) ? ct(n, t) : [];
        }),
            eo = pe(Hr),
            uo = pe(function (n) {
            var t = n.length,
                r = 2 < t ? n[t - 2] : w,
                e = 1 < t ? n[t - 1] : w;return (2 < t && typeof r == "function" ? t -= 2 : (r = 1 < t && typeof e == "function" ? (--t, e) : w, e = w), n.length = t, Qr(n, r, e));
        }),
            oo = pe(function (n) {
            return (n = _t(n), this.thru(function (t) {
                t = Wo(t) ? t : [Dr(t)];for (var r = n, e = -1, u = t.length, o = -1, i = r.length, f = De(u + i); ++e < u;) f[e] = t[e];for (; ++o < i;) f[e++] = r[o];return f;
            }));
        }),
            io = pe(function (n, t) {
            return (Sr(n) && (n = Br(n)), ut(n, _t(t)));
        }),
            fo = Vt(function (n, t, r) {
            eu.call(n, r) ? ++n[r] : n[r] = 1;
        }),
            ao = rr(zu),
            co = rr(Bu, true),
            lo = ir(Kn, zu),
            so = ir(function (n, t) {
            for (var r = n.length; r-- && false !== t(n[r], r, n););return n;
        }, Bu),
            po = Vt(function (n, t, r) {
            eu.call(n, r) ? n[r].push(t) : n[r] = [t];
        }),
            ho = Vt(function (n, t, r) {
            n[r] = t;
        }),
            _o = pe(function (n, t, r) {
            var e = -1,
                u = typeof t == "function",
                o = Wr(t),
                i = Sr(n) ? De(n.length) : [];return (zu(n, function (n) {
                var f = u ? t : o && null != n ? n[t] : w;i[++e] = f ? f.apply(n, r) : Cr(n, t, r);
            }), i);
        }),
            vo = Vt(function (n, t, r) {
            n[r ? 0 : 1].push(t);
        }, function () {
            return [[], []];
        }),
            go = pr(Qn, zu),
            yo = pr(function (n, t, r, e) {
            var u = n.length;for (e && u && (r = n[--u]); u--;) r = t(r, n[u], u, n);return r;
        }, Bu),
            mo = pe(function (n, t) {
            if (null == n) return [];var r = t[2];return (r && $r(t[0], t[1], r) && (t.length = 1), Wt(n, _t(t), []));
        }),
            wo = Ou || function () {
            return new Me().getTime();
        },
            xo = pe(function (n, t, r) {
            var e = b;if (r.length) var u = v(r, xo.placeholder),
                e = e | I;return dr(n, e, t, r, u);
        }),
            bo = pe(function (n, t) {
            t = t.length ? _t(t) : Re(n);for (var r = -1, e = t.length; ++r < e;) {
                var u = t[r];n[u] = dr(n[u], b, n);
            }return n;
        }),
            Ao = pe(function (n, t, r) {
            var e = b | A;if (r.length) var u = v(r, Ao.placeholder),
                e = e | I;return dr(t, e, n, r, u);
        }),
            jo = Qt(k),
            ko = Qt(O),
            Oo = pe(function (n, t) {
            return at(n, 1, t);
        }),
            Io = pe(function (n, t, r) {
            return at(n, t, r);
        }),
            Ro = or(),
            Eo = or(true),
            Co = pe(function (n, t) {
            if ((t = _t(t), typeof n != "function" || !Vn(t, e))) throw new Xe(T);
            var r = t.length;return pe(function (e) {
                for (var u = ku(e.length, r); u--;) e[u] = t[u](e[u]);return n.apply(this, e);
            });
        }),
            So = sr(I),
            Uo = sr(R),
            $o = pe(function (n, t) {
            return dr(n, C, w, w, w, _t(t));
        }),
            Wo = xu || function (n) {
            return h(n) && Lr(n.length) && ou.call(n) == B;
        },
            Fo = Zt(kt),
            Lo = Zt(function (n, t, r) {
            return r ? rt(n, t, r) : et(n, t);
        }),
            No = nr(Lo, function (n, t) {
            return n === w ? t : n;
        }),
            To = nr(Fo, Nr),
            Po = ur(gt),
            zo = ur(yt),
            Bo = fr(Du),
            Do = fr(Mu),
            Mo = ar(gt),
            qo = ar(yt),
            Ko = Au ? function (n) {
            var t = null == n ? w : n.constructor;return typeof t == "function" && t.prototype === n || (typeof n == "function" ? Nn.support.enumPrototypes : Sr(n)) ? zr(n) : de(n) ? Au(n) : [];
        } : zr,
            Vo = cr(true),
            Zo = cr(),
            Yo = pe(function (n, t) {
            if (null == n) return {};if ("function" != typeof t[0]) return (t = Xn(_t(t), Je), Tr(n, ct(Ee(n), t)));var r = Dt(t[0], t[1], 3);return Pr(n, function (n, t, e) {
                return !r(n, t, e);
            });
        }),
            Go = pe(function (n, t) {
            return null == n ? {} : "function" == typeof t[0] ? Pr(n, Dt(t[0], t[1], 3)) : Tr(n, _t(t));
        }),
            Jo = Xt(function (n, t, r) {
            return (t = t.toLowerCase(), n + (r ? t.charAt(0).toUpperCase() + t.slice(1) : t));
        }),
            Xo = Xt(function (n, t, r) {
            return n + (r ? "-" : "") + t.toLowerCase();
        }),
            Ho = lr(),
            Qo = lr(true),
            ni = Xt(function (n, t, r) {
            return n + (r ? "_" : "") + t.toLowerCase();
        }),
            ti = Xt(function (n, t, r) {
            return n + (r ? " " : "") + (t.charAt(0).toUpperCase() + t.slice(1));
        }),
            ri = pe(function (n, t) {
            try {
                return n.apply(w, t);
            } catch (r) {
                return ge(r) ? r : new qe(r);
            }
        }),
            ei = pe(function (n, t) {
            return function (r) {
                return Cr(r, n, t);
            };
        }),
            ui = pe(function (n, t) {
            return function (r) {
                return Cr(n, r, t);
            };
        }),
            oi = gr("ceil"),
            ii = gr("floor"),
            fi = tr(he, Eu),
            ai = tr(ke, Cu),
            ci = gr("round");return (Nn.prototype = Tn.prototype, Pn.prototype = Pu(Tn.prototype), Pn.prototype.constructor = Pn, zn.prototype = Pu(Tn.prototype), zn.prototype.constructor = zn, Bn.prototype["delete"] = function (n) {
            return this.has(n) && delete this.__data__[n];
        }, Bn.prototype.get = function (n) {
            return "__proto__" == n ? w : this.__data__[n];
        }, Bn.prototype.has = function (n) {
            return "__proto__" != n && eu.call(this.__data__, n);
        }, Bn.prototype.set = function (n, t) {
            return ("__proto__" != n && (this.__data__[n] = t), this);
        }, Dn.prototype.push = function (n) {
            var t = this.data;typeof n == "string" || de(n) ? t.set.add(n) : t.hash[n] = true;
        }, se.Cache = Bn, Nn.after = function (n, t) {
            if (typeof t != "function") {
                if (typeof n != "function") throw new Xe(T);
                var r = n;n = t, t = r;
            }return (n = bu(n = +n) ? n : 0, function () {
                return 1 > --n ? t.apply(this, arguments) : void 0;
            });
        }, Nn.ary = function (n, t, r) {
            return (r && $r(n, t, r) && (t = w), t = n && null == t ? n.length : ju(+t || 0, 0), dr(n, E, w, w, w, w, t));
        }, Nn.assign = Lo, Nn.at = io, Nn.before = ce, Nn.bind = xo, Nn.bindAll = bo, Nn.bindKey = Ao, Nn.callback = Le, Nn.chain = te, Nn.chunk = function (n, t, r) {
            t = (r ? $r(n, t, r) : null == t) ? 1 : ju(wu(t) || 1, 1), r = 0;for (var e = n ? n.length : 0, u = -1, o = De(du(e / t)); r < e;) o[++u] = St(n, r, r += t);return o;
        }, Nn.compact = function (n) {
            for (var t = -1, r = n ? n.length : 0, e = -1, u = []; ++t < r;) {
                var o = n[t];o && (u[++e] = o);
            }return u;
        }, Nn.constant = function (n) {
            return function () {
                return n;
            };
        }, Nn.countBy = fo, Nn.create = function (n, t, r) {
            var e = Pu(n);return (r && $r(n, t, r) && (t = w), t ? et(e, t) : e);
        }, Nn.curry = jo, Nn.curryRight = ko, Nn.debounce = le, Nn.defaults = No, Nn.defaultsDeep = To, Nn.defer = Oo, Nn.delay = Io, Nn.difference = Yu, Nn.drop = Kr, Nn.dropRight = Vr, Nn.dropRightWhile = function (n, t, r) {
            return n && n.length ? Tt(n, br(t, r, 3), true, true) : [];
        }, Nn.dropWhile = function (n, t, r) {
            return n && n.length ? Tt(n, br(t, r, 3), true) : [];
        }, Nn.fill = function (n, t, r, e) {
            var u = n ? n.length : 0;if (!u) return [];for (r && typeof r != "number" && $r(n, t, r) && (r = 0, e = u), u = n.length, r = null == r ? 0 : +r || 0, 0 > r && (r = -r > u ? 0 : u + r), e = e === w || e > u ? u : +e || 0, 0 > e && (e += u), u = r > e ? 0 : e >>> 0, r >>>= 0; r < u;) n[r++] = t;return n;
        }, Nn.filter = ue, Nn.flatten = function (n, t, r) {
            var e = n ? n.length : 0;return (r && $r(n, t, r) && (t = false), e ? _t(n, t) : []);
        }, Nn.flattenDeep = function (n) {
            return n && n.length ? _t(n, true) : [];
        }, Nn.flow = Ro, Nn.flowRight = Eo, Nn.forEach = lo, Nn.forEachRight = so, Nn.forIn = Bo, Nn.forInRight = Do, Nn.forOwn = Mo, Nn.forOwnRight = qo, Nn.functions = Re, Nn.groupBy = po, Nn.indexBy = ho, Nn.initial = function (n) {
            return Vr(n, 1);
        }, Nn.intersection = Xu, Nn.invert = function (n, t, r) {
            r && $r(n, t, r) && (t = w), r = -1;for (var e = Ko(n), u = e.length, o = {}; ++r < u;) {
                var i = e[r],
                    f = n[i];t ? eu.call(o, f) ? o[f].push(i) : o[f] = [i] : o[f] = i;
            }return o;
        }, Nn.invoke = _o, Nn.keys = Ko, Nn.keysIn = Ee, Nn.map = ie, Nn.mapKeys = Vo, Nn.mapValues = Zo, Nn.matches = Te, Nn.matchesProperty = function (n, t) {
            return jt(n, ft(t, true));
        }, Nn.memoize = se, Nn.merge = Fo, Nn.method = ei, Nn.methodOf = ui, Nn.mixin = Pe, Nn.modArgs = Co, Nn.negate = function (n) {
            if (typeof n != "function") throw new Xe(T);
            return function () {
                return !n.apply(this, arguments);
            };
        }, Nn.omit = Yo, Nn.once = function (n) {
            return ce(2, n);
        }, Nn.pairs = Ce, Nn.partial = So, Nn.partialRight = Uo, Nn.partition = vo, Nn.pick = Go, Nn.pluck = function (n, t) {
            return ie(n, Be(t));
        }, Nn.property = Be, Nn.propertyOf = function (n) {
            return function (t) {
                return mt(n, Mr(t), t + "");
            };
        }, Nn.pull = function () {
            var n = arguments,
                t = n[0];if (!t || !t.length) return t;for (var r = 0, e = jr(), u = n.length; ++r < u;) for (var o = 0, i = n[r]; -1 < (o = e(t, i, o));) vu.call(t, o, 1);return t;
        }, Nn.pullAt = Hu, Nn.range = function (n, t, r) {
            r && $r(n, t, r) && (t = r = w), n = +n || 0, r = null == r ? 1 : +r || 0, null == t ? (t = n, n = 0) : t = +t || 0;var e = -1;t = ju(du((t - n) / (r || 1)), 0);for (var u = De(t); ++e < t;) u[e] = n, n += r;return u;
        }, Nn.rearg = $o, Nn.reject = function (n, t, r) {
            var e = Wo(n) ? Zn : pt;return (t = br(t, r, 3), e(n, function (n, r, e) {
                return !t(n, r, e);
            }));
        }, Nn.remove = function (n, t, r) {
            var e = [];if (!n || !n.length) return e;var u = -1,
                o = [],
                i = n.length;for (t = br(t, r, 3); ++u < i;) r = n[u], t(r, u, n) && (e.push(r), o.push(u));return (Rt(n, o), e);
        }, Nn.rest = Jr, Nn.restParam = pe, Nn.set = function (n, t, r) {
            if (null == n) return n;
            var e = t + "";t = null != n[e] || Wr(t, n) ? [e] : Mr(t);for (var e = -1, u = t.length, o = u - 1, i = n; null != i && ++e < u;) {
                var f = t[e];de(i) && (e == o ? i[f] = r : null == i[f] && (i[f] = Ur(t[e + 1]) ? [] : {})), i = i[f];
            }return n;
        }, Nn.shuffle = function (n) {
            return fe(n, Cu);
        }, Nn.slice = function (n, t, r) {
            var e = n ? n.length : 0;return e ? (r && typeof r != "number" && $r(n, t, r) && (t = 0, r = e), St(n, t, r)) : [];
        }, Nn.sortBy = function (n, t, r) {
            if (null == n) return [];r && $r(n, t, r) && (t = w);var e = -1;return (t = br(t, r, 3), n = bt(n, function (n, r, u) {
                return { a: t(n, r, u), b: ++e, c: n };
            }), $t(n, f));
        }, Nn.sortByAll = mo, Nn.sortByOrder = function (n, t, r, e) {
            return null == n ? [] : (e && $r(t, r, e) && (r = w), Wo(t) || (t = null == t ? [] : [t]), Wo(r) || (r = null == r ? [] : [r]), Wt(n, t, r));
        }, Nn.spread = function (n) {
            if (typeof n != "function") throw new Xe(T);return function (t) {
                return n.apply(this, t);
            };
        }, Nn.take = function (n, t, r) {
            return n && n.length ? ((r ? $r(n, t, r) : null == t) && (t = 1), St(n, 0, 0 > t ? 0 : t)) : [];
        }, Nn.takeRight = function (n, t, r) {
            var e = n ? n.length : 0;return e ? ((r ? $r(n, t, r) : null == t) && (t = 1), t = e - (+t || 0), St(n, 0 > t ? 0 : t)) : [];
        }, Nn.takeRightWhile = function (n, t, r) {
            return n && n.length ? Tt(n, br(t, r, 3), false, true) : [];
        }, Nn.takeWhile = function (n, t, r) {
            return n && n.length ? Tt(n, br(t, r, 3)) : [];
        }, Nn.tap = function (n, t, r) {
            return (t.call(r, n), n);
        }, Nn.throttle = function (n, t, r) {
            var e = true,
                u = true;if (typeof n != "function") throw new Xe(T);return (false === r ? e = false : de(r) && (e = "leading" in r ? !!r.leading : e, u = "trailing" in r ? !!r.trailing : u), le(n, t, { leading: e, maxWait: +t, trailing: u }));
        }, Nn.thru = re, Nn.times = function (n, t, r) {
            if ((n = wu(n), 1 > n || !bu(n))) return [];var e = -1,
                u = De(ku(n, 4294967295));for (t = Dt(t, r, 1); ++e < n;) 4294967295 > e ? u[e] = t(e) : t(e);return u;
        }, Nn.toArray = Oe, Nn.toPlainObject = Ie, Nn.transform = function (n, t, r, e) {
            var u = Wo(n) || je(n);return (t = br(t, e, 4), null == r && (u || de(n) ? (e = n.constructor, r = u ? Wo(n) ? new e() : [] : Pu(ye(e) ? e.prototype : w)) : r = {}), (u ? Kn : gt)(n, function (n, e, u) {
                return t(r, n, e, u);
            }), r);
        }, Nn.union = to, Nn.uniq = Xr, Nn.unzip = Hr, Nn.unzipWith = Qr, Nn.values = Se, Nn.valuesIn = function (n) {
            return Nt(n, Ee(n));
        }, Nn.where = function (n, t) {
            return ue(n, At(t));
        }, Nn.without = ro, Nn.wrap = function (n, t) {
            return (t = null == t ? Ne : t, dr(t, I, w, [n], []));
        }, Nn.xor = function () {
            for (var n = -1, t = arguments.length; ++n < t;) {
                var r = arguments[n];if (Sr(r)) var e = e ? Hn(ct(e, r), ct(r, e)) : r;
            }return e ? Lt(e) : [];
        }, Nn.zip = eo, Nn.zipObject = ne, Nn.zipWith = uo, Nn.backflow = Eo, Nn.collect = ie, Nn.compose = Eo, Nn.each = lo, Nn.eachRight = so, Nn.extend = Lo, Nn.iteratee = Le, Nn.methods = Re, Nn.object = ne, Nn.select = ue, Nn.tail = Jr, Nn.unique = Xr, Pe(Nn, Nn), Nn.add = function (n, t) {
            return (+n || 0) + (+t || 0);
        }, Nn.attempt = ri, Nn.camelCase = Jo, Nn.capitalize = function (n) {
            return (n = u(n)) && n.charAt(0).toUpperCase() + n.slice(1);
        }, Nn.ceil = oi, Nn.clone = function (n, t, r, e) {
            return (t && typeof t != "boolean" && $r(n, t, r) ? t = false : typeof t == "function" && (e = r, r = t, t = false), typeof r == "function" ? ft(n, t, Dt(r, e, 3)) : ft(n, t));
        }, Nn.cloneDeep = function (n, t, r) {
            return typeof t == "function" ? ft(n, true, Dt(t, r, 3)) : ft(n, true);
        }, Nn.deburr = Ue, Nn.endsWith = function (n, t, r) {
            n = u(n), t += "";var e = n.length;return (r = r === w ? e : ku(0 > r ? 0 : +r || 0, e), r -= t.length, 0 <= r && n.indexOf(t, r) == r);
        }, Nn.escape = function (n) {
            return (n = u(n)) && hn.test(n) ? n.replace(sn, c) : n;
        }, Nn.escapeRegExp = function (n) {
            return (n = u(n)) && xn.test(n) ? n.replace(wn, l) : n || "(?:)";
        }, Nn.every = ee, Nn.find = ao, Nn.findIndex = Gu, Nn.findKey = Po, Nn.findLast = co, Nn.findLastIndex = Ju, Nn.findLastKey = zo, Nn.findWhere = function (n, t) {
            return ao(n, At(t));
        }, Nn.first = Zr, Nn.floor = ii, Nn.get = function (n, t, r) {
            return (n = null == n ? w : mt(n, Mr(t), t + ""), n === w ? r : n);
        }, Nn.gt = he, Nn.gte = function (n, t) {
            return n >= t;
        }, Nn.has = function (n, t) {
            if (null == n) return false;var r = eu.call(n, t);if (!r && !Wr(t)) {
                if ((t = Mr(t), n = 1 == t.length ? n : mt(n, St(t, 0, -1)), null == n)) return false;t = Gr(t), r = eu.call(n, t);
            }return r || Lr(n.length) && Ur(t, n.length) && (Wo(n) || _e(n) || Ae(n));
        }, Nn.identity = Ne, Nn.includes = oe, Nn.indexOf = Yr, Nn.inRange = function (n, t, r) {
            return (t = +t || 0, r === w ? (r = t, t = 0) : r = +r || 0, n >= ku(t, r) && n < ju(t, r));
        }, Nn.isArguments = _e, Nn.isArray = Wo, Nn.isBoolean = function (n) {
            return true === n || false === n || h(n) && ou.call(n) == D;
        }, Nn.isDate = function (n) {
            return h(n) && ou.call(n) == M;
        }, Nn.isElement = function (n) {
            return !!n && 1 === n.nodeType && h(n) && !xe(n);
        }, Nn.isEmpty = function (n) {
            return null == n ? true : Sr(n) && (Wo(n) || Ae(n) || _e(n) || h(n) && ye(n.splice)) ? !n.length : !Ko(n).length;
        }, Nn.isEqual = ve, Nn.isError = ge, Nn.isFinite = function (n) {
            return typeof n == "number" && bu(n);
        }, Nn.isFunction = ye, Nn.isMatch = function (n, t, r, e) {
            return (r = typeof r == "function" ? Dt(r, e, 3) : w, xt(n, kr(t), r));
        }, Nn.isNaN = function (n) {
            return we(n) && n != +n;
        }, Nn.isNative = me, Nn.isNull = function (n) {
            return null === n;
        }, Nn.isNumber = we, Nn.isObject = de, Nn.isPlainObject = xe, Nn.isRegExp = be, Nn.isString = Ae, Nn.isTypedArray = je, Nn.isUndefined = function (n) {
            return n === w;
        }, Nn.kebabCase = Xo, Nn.last = Gr, Nn.lastIndexOf = function (n, t, r) {
            var e = n ? n.length : 0;if (!e) return -1;var u = e;if (typeof r == "number") u = (0 > r ? ju(e + r, 0) : ku(r || 0, e - 1)) + 1;else if (r) return (u = zt(n, t, true) - 1, n = n[u], (t === t ? t === n : n !== n) ? u : -1);
            if (t !== t) return p(n, u, true);for (; u--;) if (n[u] === t) return u;return -1;
        }, Nn.lt = ke, Nn.lte = function (n, t) {
            return n <= t;
        }, Nn.max = fi, Nn.min = ai, Nn.noConflict = function () {
            return (Yn._ = iu, this);
        }, Nn.noop = ze, Nn.now = wo, Nn.pad = function (n, t, r) {
            n = u(n), t = +t;var e = n.length;return e < t && bu(t) ? (e = (t - e) / 2, t = wu(e), e = du(e), r = _r("", e, r), r.slice(0, t) + n + r) : n;
        }, Nn.padLeft = Ho, Nn.padRight = Qo, Nn.parseInt = function (n, t, r) {
            return ((r ? $r(n, t, r) : null == t) ? t = 0 : t && (t = +t), n = We(n), Iu(n, t || (On.test(n) ? 16 : 10)));
        }, Nn.random = function (n, t, r) {
            r && $r(n, t, r) && (t = r = w);
            var e = null == n,
                u = null == t;return (null == r && (u && typeof n == "boolean" ? (r = n, n = 1) : typeof t == "boolean" && (r = t, u = true)), e && u && (t = 1, u = false), n = +n || 0, u ? (t = n, n = 0) : t = +t || 0, r || n % 1 || t % 1 ? (r = Ru(), ku(n + r * (t - n + lu("1e-" + ((r + "").length - 1))), t)) : Et(n, t));
        }, Nn.reduce = go, Nn.reduceRight = yo, Nn.repeat = $e, Nn.result = function (n, t, r) {
            var e = null == n ? w : Dr(n)[t];return (e === w && (null == n || Wr(t, n) || (t = Mr(t), n = 1 == t.length ? n : mt(n, St(t, 0, -1)), e = null == n ? w : Dr(n)[Gr(t)]), e = e === w ? r : e), ye(e) ? e.call(n) : e);
        }, Nn.round = ci, Nn.runInContext = m, Nn.size = function (n) {
            var t = n ? Vu(n) : 0;return Lr(t) ? t : Ko(n).length;
        }, Nn.snakeCase = ni, Nn.some = ae, Nn.sortedIndex = Qu, Nn.sortedLastIndex = no, Nn.startCase = ti, Nn.startsWith = function (n, t, r) {
            return (n = u(n), r = null == r ? 0 : ku(0 > r ? 0 : +r || 0, n.length), n.lastIndexOf(t, r) == r);
        }, Nn.sum = function (n, t, r) {
            if ((r && $r(n, t, r) && (t = w), t = br(t, r, 3), 1 == t.length)) {
                n = Wo(n) ? n : Br(n), r = n.length;for (var e = 0; r--;) e += +t(n[r]) || 0;n = e;
            } else n = Ft(n, t);return n;
        }, Nn.template = function (n, t, r) {
            var e = Nn.templateSettings;r && $r(n, t, r) && (t = r = w), n = u(n), t = rt(et({}, r || t), e, tt), r = rt(et({}, t.imports), e.imports, tt);
            var o,
                i,
                f = Ko(r),
                a = Nt(r, f),
                c = 0;r = t.interpolate || Cn;var l = "__p+='";r = Ge((t.escape || Cn).source + "|" + r.source + "|" + (r === gn ? jn : Cn).source + "|" + (t.evaluate || Cn).source + "|$", "g");var p = "sourceURL" in t ? "//# sourceURL=" + t.sourceURL + "\n" : "";if ((n.replace(r, function (t, r, e, u, f, a) {
                return (e || (e = u), l += n.slice(c, a).replace(Sn, s), r && (o = true, l += "'+__e(" + r + ")+'"), f && (i = true, l += "';" + f + ";\n__p+='"), e && (l += "'+((__t=(" + e + "))==null?'':__t)+'"), c = a + t.length, t);
            }), l += "';", (t = t.variable) || (l = "with(obj){" + l + "}"), l = (i ? l.replace(fn, "") : l).replace(an, "$1").replace(cn, "$1;"), l = "function(" + (t || "obj") + "){" + (t ? "" : "obj||(obj={});") + "var __t,__p=''" + (o ? ",__e=_.escape" : "") + (i ? ",__j=Array.prototype.join;function print(){__p+=__j.call(arguments,'')}" : ";") + l + "return __p}", t = ri(function () {
                return Ke(f, p + "return " + l).apply(w, a);
            }), t.source = l, ge(t))) throw t;return t;
        }, Nn.trim = We, Nn.trimLeft = function (n, t, r) {
            var e = n;return (n = u(n)) ? n.slice((r ? $r(e, t, r) : null == t) ? g(n) : o(n, t + "")) : n;
        }, Nn.trimRight = function (n, t, r) {
            var e = n;return (n = u(n)) ? (r ? $r(e, t, r) : null == t) ? n.slice(0, y(n) + 1) : n.slice(0, i(n, t + "") + 1) : n;
        }, Nn.trunc = function (n, t, r) {
            r && $r(n, t, r) && (t = w);var e = S;if ((r = U, null != t)) if (de(t)) {
                var o = "separator" in t ? t.separator : o,
                    e = "length" in t ? +t.length || 0 : e;r = "omission" in t ? u(t.omission) : r;
            } else e = +t || 0;if ((n = u(n), e >= n.length)) return n;if ((e -= r.length, 1 > e)) return r;if ((t = n.slice(0, e), null == o)) return t + r;if (be(o)) {
                if (n.slice(e).search(o)) {
                    var i,
                        f = n.slice(0, e);for (o.global || (o = Ge(o.source, (kn.exec(o) || "") + "g")), o.lastIndex = 0; n = o.exec(f);) i = n.index;t = t.slice(0, null == i ? e : i);
                }
            } else n.indexOf(o, e) != e && (o = t.lastIndexOf(o), -1 < o && (t = t.slice(0, o)));return t + r;
        }, Nn.unescape = function (n) {
            return (n = u(n)) && pn.test(n) ? n.replace(ln, d) : n;
        }, Nn.uniqueId = function (n) {
            var t = ++uu;return u(n) + t;
        }, Nn.words = Fe, Nn.all = ee, Nn.any = ae, Nn.contains = oe, Nn.eq = ve, Nn.detect = ao, Nn.foldl = go, Nn.foldr = yo, Nn.head = Zr, Nn.include = oe, Nn.inject = go, Pe(Nn, (function () {
            var n = {};return (gt(Nn, function (t, r) {
                Nn.prototype[r] || (n[r] = t);
            }), n);
        })(), false), Nn.sample = fe, Nn.prototype.sample = function (n) {
            return this.__chain__ || null != n ? this.thru(function (t) {
                return fe(t, n);
            }) : fe(this.value());
        }, Nn.VERSION = x, Kn("bind bindKey curry curryRight partial partialRight".split(" "), function (n) {
            Nn[n].placeholder = Nn;
        }), Kn(["drop", "take"], function (n, t) {
            zn.prototype[n] = function (r) {
                var e = this.__filtered__;if (e && !t) return new zn(this);r = null == r ? 1 : ju(wu(r) || 0, 0);var u = this.clone();return (e ? u.__takeCount__ = ku(u.__takeCount__, r) : u.__views__.push({ size: r, type: n + (0 > u.__dir__ ? "Right" : "") }), u);
            }, zn.prototype[n + "Right"] = function (t) {
                return this.reverse()[n](t).reverse();
            };
        }), Kn(["filter", "map", "takeWhile"], function (n, t) {
            var r = t + 1,
                e = r != N;zn.prototype[n] = function (n, t) {
                var u = this.clone();return (u.__iteratees__.push({ iteratee: br(n, t, 1), type: r }), u.__filtered__ = u.__filtered__ || e, u);
            };
        }), Kn(["first", "last"], function (n, t) {
            var r = "take" + (t ? "Right" : "");zn.prototype[n] = function () {
                return this[r](1).value()[0];
            };
        }), Kn(["initial", "rest"], function (n, t) {
            var r = "drop" + (t ? "" : "Right");zn.prototype[n] = function () {
                return this.__filtered__ ? new zn(this) : this[r](1);
            };
        }), Kn(["pluck", "where"], function (n, t) {
            var r = t ? "filter" : "map",
                e = t ? At : Be;zn.prototype[n] = function (n) {
                return this[r](e(n));
            };
        }), zn.prototype.compact = function () {
            return this.filter(Ne);
        }, zn.prototype.reject = function (n, t) {
            return (n = br(n, t, 1), this.filter(function (t) {
                return !n(t);
            }));
        }, zn.prototype.slice = function (n, t) {
            n = null == n ? 0 : +n || 0;var r = this;return r.__filtered__ && (0 < n || 0 > t) ? new zn(r) : (0 > n ? r = r.takeRight(-n) : n && (r = r.drop(n)), t !== w && (t = +t || 0, r = 0 > t ? r.dropRight(-t) : r.take(t - n)), r);
        }, zn.prototype.takeRightWhile = function (n, t) {
            return this.reverse().takeWhile(n, t).reverse();
        }, zn.prototype.toArray = function () {
            return this.take(Cu);
        }, gt(zn.prototype, function (n, t) {
            var r = /^(?:filter|map|reject)|While$/.test(t),
                e = /^(?:first|last)$/.test(t),
                u = Nn[e ? "take" + ("last" == t ? "Right" : "") : t];u && (Nn.prototype[t] = function () {
                var t = e ? [1] : arguments,
                    o = this.__chain__,
                    i = this.__wrapped__,
                    f = !!this.__actions__.length,
                    a = i instanceof zn,
                    c = t[0],
                    l = a || Wo(i);l && r && typeof c == "function" && 1 != c.length && (a = l = false);var s = function s(n) {
                    return e && o ? u(n, 1)[0] : u.apply(w, Hn([n], t));
                },
                    c = { func: re, args: [s], thisArg: w },
                    f = a && !f;return e && !o ? f ? (i = i.clone(), i.__actions__.push(c), n.call(i)) : u.call(w, this.value())[0] : !e && l ? (i = f ? i : new zn(this), i = n.apply(i, t), i.__actions__.push(c), new Pn(i, o)) : this.thru(s);
            });
        }), Kn("join pop push replace shift sort splice split unshift".split(" "), function (n) {
            var t = (/^(?:replace|split)$/.test(n) ? tu : He)[n],
                r = /^(?:push|sort|unshift)$/.test(n) ? "tap" : "thru",
                e = !Tu.spliceObjects && /^(?:pop|shift|splice)$/.test(n),
                u = /^(?:join|pop|replace|shift)$/.test(n),
                o = e ? function () {
                var n = t.apply(this, arguments);return (0 === this.length && delete this[0], n);
            } : t;Nn.prototype[n] = function () {
                var n = arguments;return u && !this.__chain__ ? o.apply(this.value(), n) : this[r](function (t) {
                    return o.apply(t, n);
                });
            };
        }), gt(zn.prototype, function (n, t) {
            var r = Nn[t];if (r) {
                var e = r.name + "";(Fu[e] || (Fu[e] = [])).push({ name: t, func: r });
            }
        }), Fu[hr(w, A).name] = [{ name: "wrapper", func: w }], zn.prototype.clone = function () {
            var n = new zn(this.__wrapped__);return (n.__actions__ = qn(this.__actions__), n.__dir__ = this.__dir__, n.__filtered__ = this.__filtered__, n.__iteratees__ = qn(this.__iteratees__), n.__takeCount__ = this.__takeCount__, n.__views__ = qn(this.__views__), n);
        }, zn.prototype.reverse = function () {
            if (this.__filtered__) {
                var n = new zn(this);n.__dir__ = -1, n.__filtered__ = true;
            } else n = this.clone(), n.__dir__ *= -1;return n;
        }, zn.prototype.value = function () {
            var n,
                t = this.__wrapped__.value(),
                r = this.__dir__,
                e = Wo(t),
                u = 0 > r,
                o = e ? t.length : 0;n = 0;for (var i = o, f = this.__views__, a = -1, c = f.length; ++a < c;) {
                var l = f[a],
                    s = l.size;switch (l.type) {case "drop":
                        n += s;break;case "dropRight":
                        i -= s;break;case "take":
                        i = ku(i, n + s);break;case "takeRight":
                        n = ju(n, i - s);}
            }if ((n = { start: n, end: i }, i = n.start, f = n.end, n = f - i, u = u ? f : i - 1, i = this.__iteratees__, f = i.length, a = 0, c = ku(n, this.__takeCount__), !e || o < F || o == n && c == n)) return Pt(t, this.__actions__);e = [];n: for (; n-- && a < c;) {
                for (u += r, o = -1, l = t[u]; ++o < f;) {
                    var p = i[o],
                        s = p.type,
                        p = p.iteratee(l);if (s == N) l = p;else if (!p) {
                        if (s == L) continue n;break n;
                    }
                }e[a++] = l;
            }return e;
        }, Nn.prototype.chain = function () {
            return te(this);
        }, Nn.prototype.commit = function () {
            return new Pn(this.value(), this.__chain__);
        }, Nn.prototype.concat = oo, Nn.prototype.plant = function (n) {
            for (var t, r = this; r instanceof Tn;) {
                var e = qr(r);
                t ? u.__wrapped__ = e : t = e;var u = e,
                    r = r.__wrapped__;
            }return (u.__wrapped__ = n, t);
        }, Nn.prototype.reverse = function () {
            var n = this.__wrapped__,
                t = function t(n) {
                return n.reverse();
            };return n instanceof zn ? (this.__actions__.length && (n = new zn(this)), n = n.reverse(), n.__actions__.push({ func: re, args: [t], thisArg: w }), new Pn(n, this.__chain__)) : this.thru(t);
        }, Nn.prototype.toString = function () {
            return this.value() + "";
        }, Nn.prototype.run = Nn.prototype.toJSON = Nn.prototype.valueOf = Nn.prototype.value = function () {
            return Pt(this.__wrapped__, this.__actions__);
        }, Nn.prototype.collect = Nn.prototype.map, Nn.prototype.head = Nn.prototype.first, Nn.prototype.select = Nn.prototype.filter, Nn.prototype.tail = Nn.prototype.rest, Nn);
    }var w,
        x = "3.10.1",
        b = 1,
        A = 2,
        j = 4,
        k = 8,
        O = 16,
        I = 32,
        R = 64,
        E = 128,
        C = 256,
        S = 30,
        U = "...",
        $ = 150,
        W = 16,
        F = 200,
        L = 1,
        N = 2,
        T = "Expected a function",
        P = "__lodash_placeholder__",
        z = "[object Arguments]",
        B = "[object Array]",
        D = "[object Boolean]",
        M = "[object Date]",
        q = "[object Error]",
        K = "[object Function]",
        V = "[object Number]",
        Z = "[object Object]",
        Y = "[object RegExp]",
        G = "[object String]",
        J = "[object ArrayBuffer]",
        X = "[object Float32Array]",
        H = "[object Float64Array]",
        Q = "[object Int8Array]",
        nn = "[object Int16Array]",
        tn = "[object Int32Array]",
        rn = "[object Uint8Array]",
        en = "[object Uint8ClampedArray]",
        un = "[object Uint16Array]",
        on = "[object Uint32Array]",
        fn = /\b__p\+='';/g,
        an = /\b(__p\+=)''\+/g,
        cn = /(__e\(.*?\)|\b__t\))\+'';/g,
        ln = /&(?:amp|lt|gt|quot|#39|#96);/g,
        sn = /[&<>"'`]/g,
        pn = RegExp(ln.source),
        hn = RegExp(sn.source),
        _n = /<%-([\s\S]+?)%>/g,
        vn = /<%([\s\S]+?)%>/g,
        gn = /<%=([\s\S]+?)%>/g,
        yn = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\n\\]|\\.)*?\1)\]/,
        dn = /^\w*$/,
        mn = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\n\\]|\\.)*?)\2)\]/g,
        wn = /^[:!,]|[\\^$.*+?()[\]{}|\/]|(^[0-9a-fA-Fnrtuvx])|([\n\r\u2028\u2029])/g,
        xn = RegExp(wn.source),
        bn = /[\u0300-\u036f\ufe20-\ufe23]/g,
        An = /\\(\\)?/g,
        jn = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
        kn = /\w*$/,
        On = /^0[xX]/,
        In = /^\[object .+?Constructor\]$/,
        Rn = /^\d+$/,
        En = /[\xc0-\xd6\xd8-\xde\xdf-\xf6\xf8-\xff]/g,
        Cn = /($^)/,
        Sn = /['\n\r\u2028\u2029\\]/g,
        Un = RegExp("[A-Z\\xc0-\\xd6\\xd8-\\xde]+(?=[A-Z\\xc0-\\xd6\\xd8-\\xde][a-z\\xdf-\\xf6\\xf8-\\xff]+)|[A-Z\\xc0-\\xd6\\xd8-\\xde]?[a-z\\xdf-\\xf6\\xf8-\\xff]+|[A-Z\\xc0-\\xd6\\xd8-\\xde]+|[0-9]+", "g"),
        $n = "Array ArrayBuffer Date Error Float32Array Float64Array Function Int8Array Int16Array Int32Array Math Number Object RegExp Set String _ clearTimeout isFinite parseFloat parseInt setTimeout TypeError Uint8Array Uint8ClampedArray Uint16Array Uint32Array WeakMap".split(" "),
        Wn = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "),
        Fn = {};
    Fn[X] = Fn[H] = Fn[Q] = Fn[nn] = Fn[tn] = Fn[rn] = Fn[en] = Fn[un] = Fn[on] = true, Fn[z] = Fn[B] = Fn[J] = Fn[D] = Fn[M] = Fn[q] = Fn[K] = Fn["[object Map]"] = Fn[V] = Fn[Z] = Fn[Y] = Fn["[object Set]"] = Fn[G] = Fn["[object WeakMap]"] = false;var Ln = {};Ln[z] = Ln[B] = Ln[J] = Ln[D] = Ln[M] = Ln[X] = Ln[H] = Ln[Q] = Ln[nn] = Ln[tn] = Ln[V] = Ln[Z] = Ln[Y] = Ln[G] = Ln[rn] = Ln[en] = Ln[un] = Ln[on] = true, Ln[q] = Ln[K] = Ln["[object Map]"] = Ln["[object Set]"] = Ln["[object WeakMap]"] = false;var Nn = { "\xc0": "A", "\xc1": "A", "\xc2": "A", "\xc3": "A", "\xc4": "A", "\xc5": "A", "\xe0": "a", "\xe1": "a", "\xe2": "a",
        "\xe3": "a", "\xe4": "a", "\xe5": "a", "\xc7": "C", "\xe7": "c", "\xd0": "D", "\xf0": "d", "\xc8": "E", "\xc9": "E", "\xca": "E", "\xcb": "E", "\xe8": "e", "\xe9": "e", "\xea": "e", "\xeb": "e", "\xcc": "I", "\xcd": "I", "\xce": "I", "\xcf": "I", "\xec": "i", "\xed": "i", "\xee": "i", "\xef": "i", "\xd1": "N", "\xf1": "n", "\xd2": "O", "\xd3": "O", "\xd4": "O", "\xd5": "O", "\xd6": "O", "\xd8": "O", "\xf2": "o", "\xf3": "o", "\xf4": "o", "\xf5": "o", "\xf6": "o", "\xf8": "o", "\xd9": "U", "\xda": "U", "\xdb": "U", "\xdc": "U", "\xf9": "u", "\xfa": "u", "\xfb": "u", "\xfc": "u", "\xdd": "Y",
        "\xfd": "y", "\xff": "y", "\xc6": "Ae", "\xe6": "ae", "\xde": "Th", "\xfe": "th", "\xdf": "ss" },
        Tn = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;", "`": "&#96;" },
        Pn = { "&amp;": "&", "&lt;": "<", "&gt;": ">", "&quot;": '"', "&#39;": "'", "&#96;": "`" },
        zn = { "function": true, object: true },
        Bn = { 0: "x30", 1: "x31", 2: "x32", 3: "x33", 4: "x34", 5: "x35", 6: "x36", 7: "x37", 8: "x38", 9: "x39", A: "x41", B: "x42", C: "x43", D: "x44", E: "x45", F: "x46", a: "x61", b: "x62", c: "x63", d: "x64", e: "x65", f: "x66", n: "x6e", r: "x72", t: "x74", u: "x75", v: "x76", x: "x78" },
        Dn = { "\\": "\\",
        "'": "'", "\n": "n", "\r": "r", "\u2028": "u2028", "\u2029": "u2029" },
        Mn = zn[typeof exports] && exports && !exports.nodeType && exports,
        qn = zn[typeof module] && module && !module.nodeType && module,
        Kn = zn[typeof self] && self && self.Object && self,
        Vn = zn[typeof window] && window && window.Object && window,
        Zn = qn && qn.exports === Mn && Mn,
        Yn = Mn && qn && typeof global == "object" && global && global.Object && global || Vn !== (this && this.window) && Vn || Kn || this,
        Gn = (function () {
        try {
            Object({ toString: 0 } + "");
        } catch (n) {
            return function () {
                return false;
            };
        }return function (n) {
            return typeof n.toString != "function" && typeof (n + "") == "string";
        };
    })(),
        Jn = m();typeof define == "function" && typeof define.amd == "object" && define.amd ? (Yn._ = Jn, define(function () {
        return Jn;
    })) : Mn && qn ? Zn ? (qn.exports = Jn)._ = Jn : Mn._ = Jn : Yn._ = Jn;
}).call(undefined);

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],16:[function(require,module,exports){
"use strict";

Function.prototype.bind || (Function.prototype.bind = function (b) {
	if ("function" !== typeof this) throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");var e = Array.prototype.slice.call(arguments, 1),
	    h = this,
	    d = function d() {},
	    g = function g() {
		return h.apply(this instanceof d && b ? this : b, e.concat(Array.prototype.slice.call(arguments)));
	};d.prototype = this.prototype;g.prototype = new d();return g;
});
(function () {
	var b = Object.prototype,
	    e = b.__defineGetter__,
	    h = b.__defineSetter__,
	    d = b.__lookupGetter__,
	    g = b.__lookupSetter__,
	    k = b.hasOwnProperty;e && h && d && g && (Object.defineProperty || (Object.defineProperty = function (f, c, a) {
		if (3 > arguments.length) throw new TypeError("Arguments not optional");c += "";if (k.call(a, "value") && (d.call(f, c) || g.call(f, c) || (f[c] = a.value), k.call(a, "get") || k.call(a, "set"))) throw new TypeError("Cannot specify an accessor and a value");if (!(a.writable && a.enumerable && a.configurable)) throw new TypeError("This implementation of Object.defineProperty does not support false for configurable, enumerable, or writable.");
		a.get && e.call(f, c, a.get);a.set && h.call(f, c, a.set);return f;
	}), Object.getOwnPropertyDescriptor || (Object.getOwnPropertyDescriptor = function (f, c) {
		if (2 > arguments.length) throw new TypeError("Arguments not optional.");c += "";var a = { configurable: !0, enumerable: !0, writable: !0 },
		    b = d.call(f, c),
		    e = g.call(f, c);if (!k.call(f, c)) return a;if (!b && !e) return (a.value = f[c], a);delete a.writable;a.get = a.set = void 0;b && (a.get = b);e && (a.set = e);return a;
	}), Object.defineProperties || (Object.defineProperties = function (b, c) {
		for (var a in c) k.call(c, a) && Object.defineProperty(b, a, c[a]);
	}));
})();
if (!(document.documentElement.dataset || Object.getOwnPropertyDescriptor(Element.prototype, "dataset") && Object.getOwnPropertyDescriptor(Element.prototype, "dataset").get)) {
	var propDescriptor = { enumerable: !0, get: function get() {
			var b,
			    e,
			    h,
			    d,
			    g,
			    k = this.attributes,
			    f = k.length,
			    c = function c(a) {
				return a.charAt(1).toUpperCase();
			},
			    a = function a() {
				return this;
			},
			    l = function l(a, b) {
				return "undefined" !== typeof b ? this.setAttribute(a, b) : this.removeAttribute(a);
			};try {
				({}).__defineGetter__("test", function () {}), e = {};
			} catch (m) {
				e = document.createElement("div");
			}for (b = 0; b < f; b++) if ((d = k[b]) && d.name && /^data-\w[\w\-]*$/.test(d.name)) {
				h = d.value;d = d.name;g = d.substr(5).replace(/-./g, c);try {
					Object.defineProperty(e, g, { enumerable: this.enumerable, get: a.bind(h || ""), set: l.bind(this, d) });
				} catch (m) {
					e[g] = h;
				}
			}return e;
		} };try {
		Object.defineProperty(Element.prototype, "dataset", propDescriptor);
	} catch (b) {
		propDescriptor.enumerable = !1, Object.defineProperty(Element.prototype, "dataset", propDescriptor);
	}
};

},{}],17:[function(require,module,exports){
/**
 * Swiper 3.1.7
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 *
 * http://www.idangero.us/swiper/
 *
 * Copyright 2015, Vladimir Kharlampidi
 * The iDangero.us
 * http://www.idangero.us/
 *
 * Licensed under MIT
 *
 * Released on: October 10, 2015
 */
"use strict";

!(function () {
  "use strict";function e(e) {
    e.fn.swiper = function (a) {
      var r;return (e(this).each(function () {
        var e = new t(this, a);r || (r = e);
      }), r);
    };
  }var a,
      t = (function (_t) {
    function t(_x, _x2) {
      return _t.apply(this, arguments);
    }

    t.toString = function () {
      return _t.toString();
    };

    return t;
  })(function (e, s) {
    function i() {
      return "horizontal" === w.params.direction;
    }function n(e) {
      return Math.floor(e);
    }function o() {
      w.autoplayTimeoutId = setTimeout(function () {
        w.params.loop ? (w.fixLoop(), w._slideNext()) : w.isEnd ? s.autoplayStopOnLast ? w.stopAutoplay() : w._slideTo(0) : w._slideNext();
      }, w.params.autoplay);
    }function l(e, t) {
      var r = a(e.target);if (!r.is(t)) if ("string" == typeof t) r = r.parents(t);else if (t.nodeType) {
        var s;return (r.parents().each(function (e, a) {
          a === t && (s = t);
        }), s ? t : void 0);
      }return 0 === r.length ? void 0 : r[0];
    }function d(e, a) {
      a = a || {};var t = window.MutationObserver || window.WebkitMutationObserver,
          r = new t(function (e) {
        e.forEach(function (e) {
          w.onResize(!0), w.emit("onObserverUpdate", w, e);
        });
      });r.observe(e, { attributes: "undefined" == typeof a.attributes ? !0 : a.attributes, childList: "undefined" == typeof a.childList ? !0 : a.childList, characterData: "undefined" == typeof a.characterData ? !0 : a.characterData }), w.observers.push(r);
    }function p(e) {
      e.originalEvent && (e = e.originalEvent);var a = e.keyCode || e.charCode;if (!w.params.allowSwipeToNext && (i() && 39 === a || !i() && 40 === a)) return !1;if (!w.params.allowSwipeToPrev && (i() && 37 === a || !i() && 38 === a)) return !1;if (!(e.shiftKey || e.altKey || e.ctrlKey || e.metaKey || document.activeElement && document.activeElement.nodeName && ("input" === document.activeElement.nodeName.toLowerCase() || "textarea" === document.activeElement.nodeName.toLowerCase()))) {
        if (37 === a || 39 === a || 38 === a || 40 === a) {
          var t = !1;if (w.container.parents(".swiper-slide").length > 0 && 0 === w.container.parents(".swiper-slide-active").length) return;var r = { left: window.pageXOffset, top: window.pageYOffset },
              s = window.innerWidth,
              n = window.innerHeight,
              o = w.container.offset();w.rtl && (o.left = o.left - w.container[0].scrollLeft);for (var l = [[o.left, o.top], [o.left + w.width, o.top], [o.left, o.top + w.height], [o.left + w.width, o.top + w.height]], d = 0; d < l.length; d++) {
            var p = l[d];p[0] >= r.left && p[0] <= r.left + s && p[1] >= r.top && p[1] <= r.top + n && (t = !0);
          }if (!t) return;
        }i() ? ((37 === a || 39 === a) && (e.preventDefault ? e.preventDefault() : e.returnValue = !1), (39 === a && !w.rtl || 37 === a && w.rtl) && w.slideNext(), (37 === a && !w.rtl || 39 === a && w.rtl) && w.slidePrev()) : ((38 === a || 40 === a) && (e.preventDefault ? e.preventDefault() : e.returnValue = !1), 40 === a && w.slideNext(), 38 === a && w.slidePrev());
      }
    }function u(e) {
      e.originalEvent && (e = e.originalEvent);var a = w.mousewheel.event,
          t = 0;if (e.detail) t = -e.detail;else if ("mousewheel" === a) if (w.params.mousewheelForceToAxis) if (i()) {
        if (!(Math.abs(e.wheelDeltaX) > Math.abs(e.wheelDeltaY))) return;t = e.wheelDeltaX;
      } else {
        if (!(Math.abs(e.wheelDeltaY) > Math.abs(e.wheelDeltaX))) return;t = e.wheelDeltaY;
      } else t = e.wheelDelta;else if ("DOMMouseScroll" === a) t = -e.detail;else if ("wheel" === a) if (w.params.mousewheelForceToAxis) if (i()) {
        if (!(Math.abs(e.deltaX) > Math.abs(e.deltaY))) return;t = -e.deltaX;
      } else {
        if (!(Math.abs(e.deltaY) > Math.abs(e.deltaX))) return;t = -e.deltaY;
      } else t = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? -e.deltaX : -e.deltaY;if ((w.params.mousewheelInvert && (t = -t), w.params.freeMode)) {
        var r = w.getWrapperTranslate() + t * w.params.mousewheelSensitivity;if ((r > w.minTranslate() && (r = w.minTranslate()), r < w.maxTranslate() && (r = w.maxTranslate()), w.setWrapperTransition(0), w.setWrapperTranslate(r), w.updateProgress(), w.updateActiveIndex(), w.params.freeModeSticky && (clearTimeout(w.mousewheel.timeout), w.mousewheel.timeout = setTimeout(function () {
          w.slideReset();
        }, 300)), 0 === r || r === w.maxTranslate())) return;
      } else {
        if (new window.Date().getTime() - w.mousewheel.lastScrollTime > 60) if (0 > t) if (w.isEnd && !w.params.loop || w.animating) {
          if (w.params.mousewheelReleaseOnEdges) return !0;
        } else w.slideNext();else if (w.isBeginning && !w.params.loop || w.animating) {
          if (w.params.mousewheelReleaseOnEdges) return !0;
        } else w.slidePrev();w.mousewheel.lastScrollTime = new window.Date().getTime();
      }return (w.params.autoplay && w.stopAutoplay(), e.preventDefault ? e.preventDefault() : e.returnValue = !1, !1);
    }function c(e, t) {
      e = a(e);var r, s, n;r = e.attr("data-swiper-parallax") || "0", s = e.attr("data-swiper-parallax-x"), n = e.attr("data-swiper-parallax-y"), s || n ? (s = s || "0", n = n || "0") : i() ? (s = r, n = "0") : (n = r, s = "0"), s = s.indexOf("%") >= 0 ? parseInt(s, 10) * t + "%" : s * t + "px", n = n.indexOf("%") >= 0 ? parseInt(n, 10) * t + "%" : n * t + "px", e.transform("translate3d(" + s + ", " + n + ",0px)");
    }function m(e) {
      return (0 !== e.indexOf("on") && (e = e[0] !== e[0].toUpperCase() ? "on" + e[0].toUpperCase() + e.substring(1) : "on" + e), e);
    }if (!(this instanceof t)) return new t(e, s);var f = { direction: "horizontal", touchEventsTarget: "container", initialSlide: 0, speed: 300, autoplay: !1, autoplayDisableOnInteraction: !0, iOSEdgeSwipeDetection: !1, iOSEdgeSwipeThreshold: 20, freeMode: !1, freeModeMomentum: !0, freeModeMomentumRatio: 1, freeModeMomentumBounce: !0, freeModeMomentumBounceRatio: 1, freeModeSticky: !1, freeModeMinimumVelocity: .02, setWrapperSize: !1, virtualTranslate: !1, effect: "slide", coverflow: { rotate: 50, stretch: 0, depth: 100, modifier: 1, slideShadows: !0 }, cube: { slideShadows: !0, shadow: !0, shadowOffset: 20, shadowScale: .94 }, fade: { crossFade: !1 }, parallax: !1, scrollbar: null, scrollbarHide: !0, scrollbarDraggable: !1, scrollbarSnapOnRelease: !1, keyboardControl: !1, mousewheelControl: !1, mousewheelReleaseOnEdges: !1, mousewheelInvert: !1, mousewheelForceToAxis: !1, mousewheelSensitivity: 1, hashnav: !1, spaceBetween: 0, slidesPerView: 1, slidesPerColumn: 1, slidesPerColumnFill: "column", slidesPerGroup: 1, centeredSlides: !1, slidesOffsetBefore: 0, slidesOffsetAfter: 0, roundLengths: !1, touchRatio: 1, touchAngle: 45, simulateTouch: !0, shortSwipes: !0, longSwipes: !0, longSwipesRatio: .5, longSwipesMs: 300, followFinger: !0, onlyExternal: !1, threshold: 0, touchMoveStopPropagation: !0, pagination: null, paginationElement: "span", paginationClickable: !1, paginationHide: !1, paginationBulletRender: null, resistance: !0, resistanceRatio: .85, nextButton: null, prevButton: null, watchSlidesProgress: !1, watchSlidesVisibility: !1, grabCursor: !1, preventClicks: !0, preventClicksPropagation: !0, slideToClickedSlide: !1, lazyLoading: !1, lazyLoadingInPrevNext: !1, lazyLoadingOnTransitionStart: !1, preloadImages: !0, updateOnImagesReady: !0, loop: !1, loopAdditionalSlides: 0, loopedSlides: null, control: void 0, controlInverse: !1, controlBy: "slide", allowSwipeToPrev: !0, allowSwipeToNext: !0, swipeHandler: null, noSwiping: !0, noSwipingClass: "swiper-no-swiping", slideClass: "swiper-slide", slideActiveClass: "swiper-slide-active", slideVisibleClass: "swiper-slide-visible", slideDuplicateClass: "swiper-slide-duplicate", slideNextClass: "swiper-slide-next", slidePrevClass: "swiper-slide-prev", wrapperClass: "swiper-wrapper", bulletClass: "swiper-pagination-bullet", bulletActiveClass: "swiper-pagination-bullet-active", buttonDisabledClass: "swiper-button-disabled", paginationHiddenClass: "swiper-pagination-hidden", observer: !1, observeParents: !1, a11y: !1, prevSlideMessage: "Previous slide", nextSlideMessage: "Next slide", firstSlideMessage: "This is the first slide", lastSlideMessage: "This is the last slide", paginationBulletMessage: "Go to slide {{index}}", runCallbacksOnInit: !0 },
        h = s && s.virtualTranslate;s = s || {};for (var g in f) if ("undefined" == typeof s[g]) s[g] = f[g];else if ("object" == typeof s[g]) for (var v in f[g]) "undefined" == typeof s[g][v] && (s[g][v] = f[g][v]);var w = this;if ((w.params = s, w.classNames = [], "undefined" != typeof a && "undefined" != typeof r && (a = r), ("undefined" != typeof a || (a = "undefined" == typeof r ? window.Dom7 || window.Zepto || window.jQuery : r)) && (w.$ = a, w.container = a(e), 0 !== w.container.length))) {
      if (w.container.length > 1) return void w.container.each(function () {
        new t(this, s);
      });w.container[0].swiper = w, w.container.data("swiper", w), w.classNames.push("swiper-container-" + w.params.direction), w.params.freeMode && w.classNames.push("swiper-container-free-mode"), w.support.flexbox || (w.classNames.push("swiper-container-no-flexbox"), w.params.slidesPerColumn = 1), (w.params.parallax || w.params.watchSlidesVisibility) && (w.params.watchSlidesProgress = !0), ["cube", "coverflow"].indexOf(w.params.effect) >= 0 && (w.support.transforms3d ? (w.params.watchSlidesProgress = !0, w.classNames.push("swiper-container-3d")) : w.params.effect = "slide"), "slide" !== w.params.effect && w.classNames.push("swiper-container-" + w.params.effect), "cube" === w.params.effect && (w.params.resistanceRatio = 0, w.params.slidesPerView = 1, w.params.slidesPerColumn = 1, w.params.slidesPerGroup = 1, w.params.centeredSlides = !1, w.params.spaceBetween = 0, w.params.virtualTranslate = !0, w.params.setWrapperSize = !1), "fade" === w.params.effect && (w.params.slidesPerView = 1, w.params.slidesPerColumn = 1, w.params.slidesPerGroup = 1, w.params.watchSlidesProgress = !0, w.params.spaceBetween = 0, "undefined" == typeof h && (w.params.virtualTranslate = !0)), w.params.grabCursor && w.support.touch && (w.params.grabCursor = !1), w.wrapper = w.container.children("." + w.params.wrapperClass), w.params.pagination && (w.paginationContainer = a(w.params.pagination), w.params.paginationClickable && w.paginationContainer.addClass("swiper-pagination-clickable")), w.rtl = i() && ("rtl" === w.container[0].dir.toLowerCase() || "rtl" === w.container.css("direction")), w.rtl && w.classNames.push("swiper-container-rtl"), w.rtl && (w.wrongRTL = "-webkit-box" === w.wrapper.css("display")), w.params.slidesPerColumn > 1 && w.classNames.push("swiper-container-multirow"), w.device.android && w.classNames.push("swiper-container-android"), w.container.addClass(w.classNames.join(" ")), w.translate = 0, w.progress = 0, w.velocity = 0, w.lockSwipeToNext = function () {
        w.params.allowSwipeToNext = !1;
      }, w.lockSwipeToPrev = function () {
        w.params.allowSwipeToPrev = !1;
      }, w.lockSwipes = function () {
        w.params.allowSwipeToNext = w.params.allowSwipeToPrev = !1;
      }, w.unlockSwipeToNext = function () {
        w.params.allowSwipeToNext = !0;
      }, w.unlockSwipeToPrev = function () {
        w.params.allowSwipeToPrev = !0;
      }, w.unlockSwipes = function () {
        w.params.allowSwipeToNext = w.params.allowSwipeToPrev = !0;
      }, w.params.grabCursor && (w.container[0].style.cursor = "move", w.container[0].style.cursor = "-webkit-grab", w.container[0].style.cursor = "-moz-grab", w.container[0].style.cursor = "grab"), w.imagesToLoad = [], w.imagesLoaded = 0, w.loadImage = function (e, a, t, r, s) {
        function i() {
          s && s();
        }var n;e.complete && r ? i() : a ? (n = new window.Image(), n.onload = i, n.onerror = i, t && (n.srcset = t), a && (n.src = a)) : i();
      }, w.preloadImages = function () {
        function e() {
          "undefined" != typeof w && null !== w && (void 0 !== w.imagesLoaded && w.imagesLoaded++, w.imagesLoaded === w.imagesToLoad.length && (w.params.updateOnImagesReady && w.update(), w.emit("onImagesReady", w)));
        }w.imagesToLoad = w.container.find("img");for (var a = 0; a < w.imagesToLoad.length; a++) w.loadImage(w.imagesToLoad[a], w.imagesToLoad[a].currentSrc || w.imagesToLoad[a].getAttribute("src"), w.imagesToLoad[a].srcset || w.imagesToLoad[a].getAttribute("srcset"), !0, e);
      }, w.autoplayTimeoutId = void 0, w.autoplaying = !1, w.autoplayPaused = !1, w.startAutoplay = function () {
        return "undefined" != typeof w.autoplayTimeoutId ? !1 : w.params.autoplay ? w.autoplaying ? !1 : (w.autoplaying = !0, w.emit("onAutoplayStart", w), void o()) : !1;
      }, w.stopAutoplay = function (e) {
        w.autoplayTimeoutId && (w.autoplayTimeoutId && clearTimeout(w.autoplayTimeoutId), w.autoplaying = !1, w.autoplayTimeoutId = void 0, w.emit("onAutoplayStop", w));
      }, w.pauseAutoplay = function (e) {
        w.autoplayPaused || (w.autoplayTimeoutId && clearTimeout(w.autoplayTimeoutId), w.autoplayPaused = !0, 0 === e ? (w.autoplayPaused = !1, o()) : w.wrapper.transitionEnd(function () {
          w && (w.autoplayPaused = !1, w.autoplaying ? o() : w.stopAutoplay());
        }));
      }, w.minTranslate = function () {
        return -w.snapGrid[0];
      }, w.maxTranslate = function () {
        return -w.snapGrid[w.snapGrid.length - 1];
      }, w.updateContainerSize = function () {
        var e, a;e = "undefined" != typeof w.params.width ? w.params.width : w.container[0].clientWidth, a = "undefined" != typeof w.params.height ? w.params.height : w.container[0].clientHeight, 0 === e && i() || 0 === a && !i() || (e = e - parseInt(w.container.css("padding-left"), 10) - parseInt(w.container.css("padding-right"), 10), a = a - parseInt(w.container.css("padding-top"), 10) - parseInt(w.container.css("padding-bottom"), 10), w.width = e, w.height = a, w.size = i() ? w.width : w.height);
      }, w.updateSlidesSize = function () {
        w.slides = w.wrapper.children("." + w.params.slideClass), w.snapGrid = [], w.slidesGrid = [], w.slidesSizesGrid = [];var e,
            a = w.params.spaceBetween,
            t = -w.params.slidesOffsetBefore,
            r = 0,
            s = 0;"string" == typeof a && a.indexOf("%") >= 0 && (a = parseFloat(a.replace("%", "")) / 100 * w.size), w.virtualSize = -a, w.rtl ? w.slides.css({ marginLeft: "", marginTop: "" }) : w.slides.css({ marginRight: "", marginBottom: "" });var o;w.params.slidesPerColumn > 1 && (o = Math.floor(w.slides.length / w.params.slidesPerColumn) === w.slides.length / w.params.slidesPerColumn ? w.slides.length : Math.ceil(w.slides.length / w.params.slidesPerColumn) * w.params.slidesPerColumn, "auto" !== w.params.slidesPerView && "row" === w.params.slidesPerColumnFill && (o = Math.max(o, w.params.slidesPerView * w.params.slidesPerColumn)));var l,
            d = w.params.slidesPerColumn,
            p = o / d,
            u = p - (w.params.slidesPerColumn * p - w.slides.length);for (e = 0; e < w.slides.length; e++) {
          l = 0;var c = w.slides.eq(e);if (w.params.slidesPerColumn > 1) {
            var m, f, h;"column" === w.params.slidesPerColumnFill ? (f = Math.floor(e / d), h = e - f * d, (f > u || f === u && h === d - 1) && ++h >= d && (h = 0, f++), m = f + h * o / d, c.css({ "-webkit-box-ordinal-group": m, "-moz-box-ordinal-group": m, "-ms-flex-order": m, "-webkit-order": m, order: m })) : (h = Math.floor(e / p), f = e - h * p), c.css({ "margin-top": 0 !== h && w.params.spaceBetween && w.params.spaceBetween + "px" }).attr("data-swiper-column", f).attr("data-swiper-row", h);
          }"none" !== c.css("display") && ("auto" === w.params.slidesPerView ? (l = i() ? c.outerWidth(!0) : c.outerHeight(!0), w.params.roundLengths && (l = n(l))) : (l = (w.size - (w.params.slidesPerView - 1) * a) / w.params.slidesPerView, w.params.roundLengths && (l = n(l)), i() ? w.slides[e].style.width = l + "px" : w.slides[e].style.height = l + "px"), w.slides[e].swiperSlideSize = l, w.slidesSizesGrid.push(l), w.params.centeredSlides ? (t = t + l / 2 + r / 2 + a, 0 === e && (t = t - w.size / 2 - a), Math.abs(t) < .001 && (t = 0), s % w.params.slidesPerGroup === 0 && w.snapGrid.push(t), w.slidesGrid.push(t)) : (s % w.params.slidesPerGroup === 0 && w.snapGrid.push(t), w.slidesGrid.push(t), t = t + l + a), w.virtualSize += l + a, r = l, s++);
        }w.virtualSize = Math.max(w.virtualSize, w.size) + w.params.slidesOffsetAfter;var g;if ((w.rtl && w.wrongRTL && ("slide" === w.params.effect || "coverflow" === w.params.effect) && w.wrapper.css({ width: w.virtualSize + w.params.spaceBetween + "px" }), (!w.support.flexbox || w.params.setWrapperSize) && (i() ? w.wrapper.css({ width: w.virtualSize + w.params.spaceBetween + "px" }) : w.wrapper.css({ height: w.virtualSize + w.params.spaceBetween + "px" })), w.params.slidesPerColumn > 1 && (w.virtualSize = (l + w.params.spaceBetween) * o, w.virtualSize = Math.ceil(w.virtualSize / w.params.slidesPerColumn) - w.params.spaceBetween, w.wrapper.css({ width: w.virtualSize + w.params.spaceBetween + "px" }), w.params.centeredSlides))) {
          for (g = [], e = 0; e < w.snapGrid.length; e++) w.snapGrid[e] < w.virtualSize + w.snapGrid[0] && g.push(w.snapGrid[e]);w.snapGrid = g;
        }if (!w.params.centeredSlides) {
          for (g = [], e = 0; e < w.snapGrid.length; e++) w.snapGrid[e] <= w.virtualSize - w.size && g.push(w.snapGrid[e]);w.snapGrid = g, Math.floor(w.virtualSize - w.size) > Math.floor(w.snapGrid[w.snapGrid.length - 1]) && w.snapGrid.push(w.virtualSize - w.size);
        }0 === w.snapGrid.length && (w.snapGrid = [0]), 0 !== w.params.spaceBetween && (i() ? w.rtl ? w.slides.css({ marginLeft: a + "px" }) : w.slides.css({ marginRight: a + "px" }) : w.slides.css({ marginBottom: a + "px" })), w.params.watchSlidesProgress && w.updateSlidesOffset();
      }, w.updateSlidesOffset = function () {
        for (var e = 0; e < w.slides.length; e++) w.slides[e].swiperSlideOffset = i() ? w.slides[e].offsetLeft : w.slides[e].offsetTop;
      }, w.updateSlidesProgress = function (e) {
        if (("undefined" == typeof e && (e = w.translate || 0), 0 !== w.slides.length)) {
          "undefined" == typeof w.slides[0].swiperSlideOffset && w.updateSlidesOffset();var a = -e;w.rtl && (a = e);w.container[0].getBoundingClientRect(), i() ? "left" : "top", i() ? "right" : "bottom";w.slides.removeClass(w.params.slideVisibleClass);for (var t = 0; t < w.slides.length; t++) {
            var r = w.slides[t],
                s = (a - r.swiperSlideOffset) / (r.swiperSlideSize + w.params.spaceBetween);if (w.params.watchSlidesVisibility) {
              var n = -(a - r.swiperSlideOffset),
                  o = n + w.slidesSizesGrid[t],
                  l = n >= 0 && n < w.size || o > 0 && o <= w.size || 0 >= n && o >= w.size;l && w.slides.eq(t).addClass(w.params.slideVisibleClass);
            }r.progress = w.rtl ? -s : s;
          }
        }
      }, w.updateProgress = function (e) {
        "undefined" == typeof e && (e = w.translate || 0);var a = w.maxTranslate() - w.minTranslate();0 === a ? (w.progress = 0, w.isBeginning = w.isEnd = !0) : (w.progress = (e - w.minTranslate()) / a, w.isBeginning = w.progress <= 0, w.isEnd = w.progress >= 1), w.isBeginning && w.emit("onReachBeginning", w), w.isEnd && w.emit("onReachEnd", w), w.params.watchSlidesProgress && w.updateSlidesProgress(e), w.emit("onProgress", w, w.progress);
      }, w.updateActiveIndex = function () {
        var e,
            a,
            t,
            r = w.rtl ? w.translate : -w.translate;for (a = 0; a < w.slidesGrid.length; a++) "undefined" != typeof w.slidesGrid[a + 1] ? r >= w.slidesGrid[a] && r < w.slidesGrid[a + 1] - (w.slidesGrid[a + 1] - w.slidesGrid[a]) / 2 ? e = a : r >= w.slidesGrid[a] && r < w.slidesGrid[a + 1] && (e = a + 1) : r >= w.slidesGrid[a] && (e = a);(0 > e || "undefined" == typeof e) && (e = 0), t = Math.floor(e / w.params.slidesPerGroup), t >= w.snapGrid.length && (t = w.snapGrid.length - 1), e !== w.activeIndex && (w.snapIndex = t, w.previousIndex = w.activeIndex, w.activeIndex = e, w.updateClasses());
      }, w.updateClasses = function () {
        w.slides.removeClass(w.params.slideActiveClass + " " + w.params.slideNextClass + " " + w.params.slidePrevClass);var e = w.slides.eq(w.activeIndex);if ((e.addClass(w.params.slideActiveClass), e.next("." + w.params.slideClass).addClass(w.params.slideNextClass), e.prev("." + w.params.slideClass).addClass(w.params.slidePrevClass), w.bullets && w.bullets.length > 0)) {
          w.bullets.removeClass(w.params.bulletActiveClass);var t;w.params.loop ? (t = Math.ceil(w.activeIndex - w.loopedSlides) / w.params.slidesPerGroup, t > w.slides.length - 1 - 2 * w.loopedSlides && (t -= w.slides.length - 2 * w.loopedSlides), t > w.bullets.length - 1 && (t -= w.bullets.length)) : t = "undefined" != typeof w.snapIndex ? w.snapIndex : w.activeIndex || 0, w.paginationContainer.length > 1 ? w.bullets.each(function () {
            a(this).index() === t && a(this).addClass(w.params.bulletActiveClass);
          }) : w.bullets.eq(t).addClass(w.params.bulletActiveClass);
        }w.params.loop || (w.params.prevButton && (w.isBeginning ? (a(w.params.prevButton).addClass(w.params.buttonDisabledClass), w.params.a11y && w.a11y && w.a11y.disable(a(w.params.prevButton))) : (a(w.params.prevButton).removeClass(w.params.buttonDisabledClass), w.params.a11y && w.a11y && w.a11y.enable(a(w.params.prevButton)))), w.params.nextButton && (w.isEnd ? (a(w.params.nextButton).addClass(w.params.buttonDisabledClass), w.params.a11y && w.a11y && w.a11y.disable(a(w.params.nextButton))) : (a(w.params.nextButton).removeClass(w.params.buttonDisabledClass), w.params.a11y && w.a11y && w.a11y.enable(a(w.params.nextButton)))));
      }, w.updatePagination = function () {
        if (w.params.pagination && w.paginationContainer && w.paginationContainer.length > 0) {
          for (var e = "", a = w.params.loop ? Math.ceil((w.slides.length - 2 * w.loopedSlides) / w.params.slidesPerGroup) : w.snapGrid.length, t = 0; a > t; t++) e += w.params.paginationBulletRender ? w.params.paginationBulletRender(t, w.params.bulletClass) : "<" + w.params.paginationElement + ' class="' + w.params.bulletClass + '"></' + w.params.paginationElement + ">";w.paginationContainer.html(e), w.bullets = w.paginationContainer.find("." + w.params.bulletClass), w.params.paginationClickable && w.params.a11y && w.a11y && w.a11y.initPagination();
        }
      }, w.update = function (e) {
        function a() {
          r = Math.min(Math.max(w.translate, w.maxTranslate()), w.minTranslate()), w.setWrapperTranslate(r), w.updateActiveIndex(), w.updateClasses();
        }if ((w.updateContainerSize(), w.updateSlidesSize(), w.updateProgress(), w.updatePagination(), w.updateClasses(), w.params.scrollbar && w.scrollbar && w.scrollbar.set(), e)) {
          var t, r;w.controller && w.controller.spline && (w.controller.spline = void 0), w.params.freeMode ? a() : (t = ("auto" === w.params.slidesPerView || w.params.slidesPerView > 1) && w.isEnd && !w.params.centeredSlides ? w.slideTo(w.slides.length - 1, 0, !1, !0) : w.slideTo(w.activeIndex, 0, !1, !0), t || a());
        }
      }, w.onResize = function (e) {
        var a = w.params.allowSwipeToPrev,
            t = w.params.allowSwipeToNext;if ((w.params.allowSwipeToPrev = w.params.allowSwipeToNext = !0, w.updateContainerSize(), w.updateSlidesSize(), ("auto" === w.params.slidesPerView || w.params.freeMode || e) && w.updatePagination(), w.params.scrollbar && w.scrollbar && w.scrollbar.set(), w.controller && w.controller.spline && (w.controller.spline = void 0), w.params.freeMode)) {
          var r = Math.min(Math.max(w.translate, w.maxTranslate()), w.minTranslate());w.setWrapperTranslate(r), w.updateActiveIndex(), w.updateClasses();
        } else w.updateClasses(), ("auto" === w.params.slidesPerView || w.params.slidesPerView > 1) && w.isEnd && !w.params.centeredSlides ? w.slideTo(w.slides.length - 1, 0, !1, !0) : w.slideTo(w.activeIndex, 0, !1, !0);w.params.allowSwipeToPrev = a, w.params.allowSwipeToNext = t;
      };var y = ["mousedown", "mousemove", "mouseup"];window.navigator.pointerEnabled ? y = ["pointerdown", "pointermove", "pointerup"] : window.navigator.msPointerEnabled && (y = ["MSPointerDown", "MSPointerMove", "MSPointerUp"]), w.touchEvents = { start: w.support.touch || !w.params.simulateTouch ? "touchstart" : y[0], move: w.support.touch || !w.params.simulateTouch ? "touchmove" : y[1], end: w.support.touch || !w.params.simulateTouch ? "touchend" : y[2] }, (window.navigator.pointerEnabled || window.navigator.msPointerEnabled) && ("container" === w.params.touchEventsTarget ? w.container : w.wrapper).addClass("swiper-wp8-" + w.params.direction), w.initEvents = function (e) {
        var t = e ? "off" : "on",
            r = e ? "removeEventListener" : "addEventListener",
            i = "container" === w.params.touchEventsTarget ? w.container[0] : w.wrapper[0],
            n = w.support.touch ? i : document,
            o = w.params.nested ? !0 : !1;w.browser.ie ? (i[r](w.touchEvents.start, w.onTouchStart, !1), n[r](w.touchEvents.move, w.onTouchMove, o), n[r](w.touchEvents.end, w.onTouchEnd, !1)) : (w.support.touch && (i[r](w.touchEvents.start, w.onTouchStart, !1), i[r](w.touchEvents.move, w.onTouchMove, o), i[r](w.touchEvents.end, w.onTouchEnd, !1)), !s.simulateTouch || w.device.ios || w.device.android || (i[r]("mousedown", w.onTouchStart, !1), document[r]("mousemove", w.onTouchMove, o), document[r]("mouseup", w.onTouchEnd, !1))), window[r]("resize", w.onResize), w.params.nextButton && (a(w.params.nextButton)[t]("click", w.onClickNext), w.params.a11y && w.a11y && a(w.params.nextButton)[t]("keydown", w.a11y.onEnterKey)), w.params.prevButton && (a(w.params.prevButton)[t]("click", w.onClickPrev), w.params.a11y && w.a11y && a(w.params.prevButton)[t]("keydown", w.a11y.onEnterKey)), w.params.pagination && w.params.paginationClickable && (a(w.paginationContainer)[t]("click", "." + w.params.bulletClass, w.onClickIndex), w.params.a11y && w.a11y && a(w.paginationContainer)[t]("keydown", "." + w.params.bulletClass, w.a11y.onEnterKey)), (w.params.preventClicks || w.params.preventClicksPropagation) && i[r]("click", w.preventClicks, !0);
      }, w.attachEvents = function (e) {
        w.initEvents();
      }, w.detachEvents = function () {
        w.initEvents(!0);
      }, w.allowClick = !0, w.preventClicks = function (e) {
        w.allowClick || (w.params.preventClicks && e.preventDefault(), w.params.preventClicksPropagation && w.animating && (e.stopPropagation(), e.stopImmediatePropagation()));
      }, w.onClickNext = function (e) {
        e.preventDefault(), (!w.isEnd || w.params.loop) && w.slideNext();
      }, w.onClickPrev = function (e) {
        e.preventDefault(), (!w.isBeginning || w.params.loop) && w.slidePrev();
      }, w.onClickIndex = function (e) {
        e.preventDefault();var t = a(this).index() * w.params.slidesPerGroup;w.params.loop && (t += w.loopedSlides), w.slideTo(t);
      }, w.updateClickedSlide = function (e) {
        var t = l(e, "." + w.params.slideClass),
            r = !1;if (t) for (var s = 0; s < w.slides.length; s++) w.slides[s] === t && (r = !0);if (!t || !r) return (w.clickedSlide = void 0, void (w.clickedIndex = void 0));if ((w.clickedSlide = t, w.clickedIndex = a(t).index(), w.params.slideToClickedSlide && void 0 !== w.clickedIndex && w.clickedIndex !== w.activeIndex)) {
          var i,
              n = w.clickedIndex;if (w.params.loop) {
            if (w.animating) return;i = a(w.clickedSlide).attr("data-swiper-slide-index"), w.params.centeredSlides ? n < w.loopedSlides - w.params.slidesPerView / 2 || n > w.slides.length - w.loopedSlides + w.params.slidesPerView / 2 ? (w.fixLoop(), n = w.wrapper.children("." + w.params.slideClass + '[data-swiper-slide-index="' + i + '"]:not(.swiper-slide-duplicate)').eq(0).index(), setTimeout(function () {
              w.slideTo(n);
            }, 0)) : w.slideTo(n) : n > w.slides.length - w.params.slidesPerView ? (w.fixLoop(), n = w.wrapper.children("." + w.params.slideClass + '[data-swiper-slide-index="' + i + '"]:not(.swiper-slide-duplicate)').eq(0).index(), setTimeout(function () {
              w.slideTo(n);
            }, 0)) : w.slideTo(n);
          } else w.slideTo(n);
        }
      };var b,
          T,
          x,
          S,
          C,
          M,
          E,
          P,
          z,
          I = "input, select, textarea, button",
          k = Date.now(),
          L = [];w.animating = !1, w.touches = { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 };var D, B;if ((w.onTouchStart = function (e) {
        if ((e.originalEvent && (e = e.originalEvent), D = "touchstart" === e.type, D || !("which" in e) || 3 !== e.which)) {
          if (w.params.noSwiping && l(e, "." + w.params.noSwipingClass)) return void (w.allowClick = !0);if (!w.params.swipeHandler || l(e, w.params.swipeHandler)) {
            var t = w.touches.currentX = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX,
                r = w.touches.currentY = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY;if (!(w.device.ios && w.params.iOSEdgeSwipeDetection && t <= w.params.iOSEdgeSwipeThreshold)) {
              if ((b = !0, T = !1, S = void 0, B = void 0, w.touches.startX = t, w.touches.startY = r, x = Date.now(), w.allowClick = !0, w.updateContainerSize(), w.swipeDirection = void 0, w.params.threshold > 0 && (E = !1), "touchstart" !== e.type)) {
                var s = !0;a(e.target).is(I) && (s = !1), document.activeElement && a(document.activeElement).is(I) && document.activeElement.blur(), s && e.preventDefault();
              }w.emit("onTouchStart", w, e);
            }
          }
        }
      }, w.onTouchMove = function (e) {
        if ((e.originalEvent && (e = e.originalEvent), !(D && "mousemove" === e.type || e.preventedByNestedSwiper))) {
          if (w.params.onlyExternal) return (w.allowClick = !1, void (b && (w.touches.startX = w.touches.currentX = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, w.touches.startY = w.touches.currentY = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, x = Date.now())));if (D && document.activeElement && e.target === document.activeElement && a(e.target).is(I)) return (T = !0, void (w.allowClick = !1));if ((w.emit("onTouchMove", w, e), !(e.targetTouches && e.targetTouches.length > 1))) {
            if ((w.touches.currentX = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, w.touches.currentY = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, "undefined" == typeof S)) {
              var t = 180 * Math.atan2(Math.abs(w.touches.currentY - w.touches.startY), Math.abs(w.touches.currentX - w.touches.startX)) / Math.PI;S = i() ? t > w.params.touchAngle : 90 - t > w.params.touchAngle;
            }if ((S && w.emit("onTouchMoveOpposite", w, e), "undefined" == typeof B && w.browser.ieTouch && (w.touches.currentX !== w.touches.startX || w.touches.currentY !== w.touches.startY) && (B = !0), b)) {
              if (S) return void (b = !1);if (B || !w.browser.ieTouch) {
                w.allowClick = !1, w.emit("onSliderMove", w, e), e.preventDefault(), w.params.touchMoveStopPropagation && !w.params.nested && e.stopPropagation(), T || (s.loop && w.fixLoop(), M = w.getWrapperTranslate(), w.setWrapperTransition(0), w.animating && w.wrapper.trigger("webkitTransitionEnd transitionend oTransitionEnd MSTransitionEnd msTransitionEnd"), w.params.autoplay && w.autoplaying && (w.params.autoplayDisableOnInteraction ? w.stopAutoplay() : w.pauseAutoplay()), z = !1, w.params.grabCursor && (w.container[0].style.cursor = "move", w.container[0].style.cursor = "-webkit-grabbing", w.container[0].style.cursor = "-moz-grabbin", w.container[0].style.cursor = "grabbing")), T = !0;var r = w.touches.diff = i() ? w.touches.currentX - w.touches.startX : w.touches.currentY - w.touches.startY;r *= w.params.touchRatio, w.rtl && (r = -r), w.swipeDirection = r > 0 ? "prev" : "next", C = r + M;var n = !0;if ((r > 0 && C > w.minTranslate() ? (n = !1, w.params.resistance && (C = w.minTranslate() - 1 + Math.pow(-w.minTranslate() + M + r, w.params.resistanceRatio))) : 0 > r && C < w.maxTranslate() && (n = !1, w.params.resistance && (C = w.maxTranslate() + 1 - Math.pow(w.maxTranslate() - M - r, w.params.resistanceRatio))), n && (e.preventedByNestedSwiper = !0), !w.params.allowSwipeToNext && "next" === w.swipeDirection && M > C && (C = M), !w.params.allowSwipeToPrev && "prev" === w.swipeDirection && C > M && (C = M), w.params.followFinger)) {
                  if (w.params.threshold > 0) {
                    if (!(Math.abs(r) > w.params.threshold || E)) return void (C = M);if (!E) return (E = !0, w.touches.startX = w.touches.currentX, w.touches.startY = w.touches.currentY, C = M, void (w.touches.diff = i() ? w.touches.currentX - w.touches.startX : w.touches.currentY - w.touches.startY));
                  }(w.params.freeMode || w.params.watchSlidesProgress) && w.updateActiveIndex(), w.params.freeMode && (0 === L.length && L.push({ position: w.touches[i() ? "startX" : "startY"], time: x }), L.push({ position: w.touches[i() ? "currentX" : "currentY"], time: new window.Date().getTime() })), w.updateProgress(C), w.setWrapperTranslate(C);
                }
              }
            }
          }
        }
      }, w.onTouchEnd = function (e) {
        if ((e.originalEvent && (e = e.originalEvent), w.emit("onTouchEnd", w, e), b)) {
          w.params.grabCursor && T && b && (w.container[0].style.cursor = "move", w.container[0].style.cursor = "-webkit-grab", w.container[0].style.cursor = "-moz-grab", w.container[0].style.cursor = "grab");var t = Date.now(),
              r = t - x;if ((w.allowClick && (w.updateClickedSlide(e), w.emit("onTap", w, e), 300 > r && t - k > 300 && (P && clearTimeout(P), P = setTimeout(function () {
            w && (w.params.paginationHide && w.paginationContainer.length > 0 && !a(e.target).hasClass(w.params.bulletClass) && w.paginationContainer.toggleClass(w.params.paginationHiddenClass), w.emit("onClick", w, e));
          }, 300)), 300 > r && 300 > t - k && (P && clearTimeout(P), w.emit("onDoubleTap", w, e))), k = Date.now(), setTimeout(function () {
            w && (w.allowClick = !0);
          }, 0), !b || !T || !w.swipeDirection || 0 === w.touches.diff || C === M)) return void (b = T = !1);b = T = !1;var s;if ((s = w.params.followFinger ? w.rtl ? w.translate : -w.translate : -C, w.params.freeMode)) {
            if (s < -w.minTranslate()) return void w.slideTo(w.activeIndex);if (s > -w.maxTranslate()) return void (w.slides.length < w.snapGrid.length ? w.slideTo(w.snapGrid.length - 1) : w.slideTo(w.slides.length - 1));if (w.params.freeModeMomentum) {
              if (L.length > 1) {
                var i = L.pop(),
                    n = L.pop(),
                    o = i.position - n.position,
                    l = i.time - n.time;w.velocity = o / l, w.velocity = w.velocity / 2, Math.abs(w.velocity) < w.params.freeModeMinimumVelocity && (w.velocity = 0), (l > 150 || new window.Date().getTime() - i.time > 300) && (w.velocity = 0);
              } else w.velocity = 0;L.length = 0;var d = 1e3 * w.params.freeModeMomentumRatio,
                  p = w.velocity * d,
                  u = w.translate + p;w.rtl && (u = -u);var c,
                  m = !1,
                  f = 20 * Math.abs(w.velocity) * w.params.freeModeMomentumBounceRatio;if (u < w.maxTranslate()) w.params.freeModeMomentumBounce ? (u + w.maxTranslate() < -f && (u = w.maxTranslate() - f), c = w.maxTranslate(), m = !0, z = !0) : u = w.maxTranslate();else if (u > w.minTranslate()) w.params.freeModeMomentumBounce ? (u - w.minTranslate() > f && (u = w.minTranslate() + f), c = w.minTranslate(), m = !0, z = !0) : u = w.minTranslate();else if (w.params.freeModeSticky) {
                var h,
                    g = 0;for (g = 0; g < w.snapGrid.length; g += 1) if (w.snapGrid[g] > -u) {
                  h = g;break;
                }u = Math.abs(w.snapGrid[h] - u) < Math.abs(w.snapGrid[h - 1] - u) || "next" === w.swipeDirection ? w.snapGrid[h] : w.snapGrid[h - 1], w.rtl || (u = -u);
              }if (0 !== w.velocity) d = w.rtl ? Math.abs((-u - w.translate) / w.velocity) : Math.abs((u - w.translate) / w.velocity);else if (w.params.freeModeSticky) return void w.slideReset();w.params.freeModeMomentumBounce && m ? (w.updateProgress(c), w.setWrapperTransition(d), w.setWrapperTranslate(u), w.onTransitionStart(), w.animating = !0, w.wrapper.transitionEnd(function () {
                w && z && (w.emit("onMomentumBounce", w), w.setWrapperTransition(w.params.speed), w.setWrapperTranslate(c), w.wrapper.transitionEnd(function () {
                  w && w.onTransitionEnd();
                }));
              })) : w.velocity ? (w.updateProgress(u), w.setWrapperTransition(d), w.setWrapperTranslate(u), w.onTransitionStart(), w.animating || (w.animating = !0, w.wrapper.transitionEnd(function () {
                w && w.onTransitionEnd();
              }))) : w.updateProgress(u), w.updateActiveIndex();
            }return void ((!w.params.freeModeMomentum || r >= w.params.longSwipesMs) && (w.updateProgress(), w.updateActiveIndex()));
          }var v,
              y = 0,
              S = w.slidesSizesGrid[0];for (v = 0; v < w.slidesGrid.length; v += w.params.slidesPerGroup) "undefined" != typeof w.slidesGrid[v + w.params.slidesPerGroup] ? s >= w.slidesGrid[v] && s < w.slidesGrid[v + w.params.slidesPerGroup] && (y = v, S = w.slidesGrid[v + w.params.slidesPerGroup] - w.slidesGrid[v]) : s >= w.slidesGrid[v] && (y = v, S = w.slidesGrid[w.slidesGrid.length - 1] - w.slidesGrid[w.slidesGrid.length - 2]);var E = (s - w.slidesGrid[y]) / S;if (r > w.params.longSwipesMs) {
            if (!w.params.longSwipes) return void w.slideTo(w.activeIndex);"next" === w.swipeDirection && (E >= w.params.longSwipesRatio ? w.slideTo(y + w.params.slidesPerGroup) : w.slideTo(y)), "prev" === w.swipeDirection && (E > 1 - w.params.longSwipesRatio ? w.slideTo(y + w.params.slidesPerGroup) : w.slideTo(y));
          } else {
            if (!w.params.shortSwipes) return void w.slideTo(w.activeIndex);"next" === w.swipeDirection && w.slideTo(y + w.params.slidesPerGroup), "prev" === w.swipeDirection && w.slideTo(y);
          }
        }
      }, w._slideTo = function (e, a) {
        return w.slideTo(e, a, !0, !0);
      }, w.slideTo = function (e, a, t, r) {
        "undefined" == typeof t && (t = !0), "undefined" == typeof e && (e = 0), 0 > e && (e = 0), w.snapIndex = Math.floor(e / w.params.slidesPerGroup), w.snapIndex >= w.snapGrid.length && (w.snapIndex = w.snapGrid.length - 1);var s = -w.snapGrid[w.snapIndex];w.params.autoplay && w.autoplaying && (r || !w.params.autoplayDisableOnInteraction ? w.pauseAutoplay(a) : w.stopAutoplay()), w.updateProgress(s);for (var n = 0; n < w.slidesGrid.length; n++) -Math.floor(100 * s) >= Math.floor(100 * w.slidesGrid[n]) && (e = n);if (!w.params.allowSwipeToNext && s < w.translate && s < w.minTranslate()) return !1;
        if (!w.params.allowSwipeToPrev && s > w.translate && s > w.maxTranslate() && (w.activeIndex || 0) !== e) return !1;if (("undefined" == typeof a && (a = w.params.speed), w.previousIndex = w.activeIndex || 0, w.activeIndex = e, s === w.translate)) return (w.updateClasses(), !1);w.updateClasses(), w.onTransitionStart(t);i() ? s : 0, i() ? 0 : s;return (0 === a ? (w.setWrapperTransition(0), w.setWrapperTranslate(s), w.onTransitionEnd(t)) : (w.setWrapperTransition(a), w.setWrapperTranslate(s), w.animating || (w.animating = !0, w.wrapper.transitionEnd(function () {
          w && w.onTransitionEnd(t);
        }))), !0);
      }, w.onTransitionStart = function (e) {
        "undefined" == typeof e && (e = !0), w.lazy && w.lazy.onTransitionStart(), e && (w.emit("onTransitionStart", w), w.activeIndex !== w.previousIndex && w.emit("onSlideChangeStart", w));
      }, w.onTransitionEnd = function (e) {
        w.animating = !1, w.setWrapperTransition(0), "undefined" == typeof e && (e = !0), w.lazy && w.lazy.onTransitionEnd(), e && (w.emit("onTransitionEnd", w), w.activeIndex !== w.previousIndex && w.emit("onSlideChangeEnd", w)), w.params.hashnav && w.hashnav && w.hashnav.setHash();
      }, w.slideNext = function (e, a, t) {
        if (w.params.loop) {
          if (w.animating) return !1;w.fixLoop();w.container[0].clientLeft;return w.slideTo(w.activeIndex + w.params.slidesPerGroup, a, e, t);
        }return w.slideTo(w.activeIndex + w.params.slidesPerGroup, a, e, t);
      }, w._slideNext = function (e) {
        return w.slideNext(!0, e, !0);
      }, w.slidePrev = function (e, a, t) {
        if (w.params.loop) {
          if (w.animating) return !1;w.fixLoop();w.container[0].clientLeft;return w.slideTo(w.activeIndex - 1, a, e, t);
        }return w.slideTo(w.activeIndex - 1, a, e, t);
      }, w._slidePrev = function (e) {
        return w.slidePrev(!0, e, !0);
      }, w.slideReset = function (e, a, t) {
        return w.slideTo(w.activeIndex, a, e);
      }, w.setWrapperTransition = function (e, a) {
        w.wrapper.transition(e), "slide" !== w.params.effect && w.effects[w.params.effect] && w.effects[w.params.effect].setTransition(e), w.params.parallax && w.parallax && w.parallax.setTransition(e), w.params.scrollbar && w.scrollbar && w.scrollbar.setTransition(e), w.params.control && w.controller && w.controller.setTransition(e, a), w.emit("onSetTransition", w, e);
      }, w.setWrapperTranslate = function (e, a, t) {
        var r = 0,
            s = 0,
            o = 0;i() ? r = w.rtl ? -e : e : s = e, w.params.roundLengths && (r = n(r), s = n(s)), w.params.virtualTranslate || (w.support.transforms3d ? w.wrapper.transform("translate3d(" + r + "px, " + s + "px, " + o + "px)") : w.wrapper.transform("translate(" + r + "px, " + s + "px)")), w.translate = i() ? r : s, a && w.updateActiveIndex(), "slide" !== w.params.effect && w.effects[w.params.effect] && w.effects[w.params.effect].setTranslate(w.translate), w.params.parallax && w.parallax && w.parallax.setTranslate(w.translate), w.params.scrollbar && w.scrollbar && w.scrollbar.setTranslate(w.translate), w.params.control && w.controller && w.controller.setTranslate(w.translate, t), w.emit("onSetTranslate", w, w.translate);
      }, w.getTranslate = function (e, a) {
        var t, r, s, i;return ("undefined" == typeof a && (a = "x"), w.params.virtualTranslate ? w.rtl ? -w.translate : w.translate : (s = window.getComputedStyle(e, null), window.WebKitCSSMatrix ? (r = s.transform || s.webkitTransform, r.split(",").length > 6 && (r = r.split(", ").map(function (e) {
          return e.replace(",", ".");
        }).join(", ")), i = new window.WebKitCSSMatrix("none" === r ? "" : r)) : (i = s.MozTransform || s.OTransform || s.MsTransform || s.msTransform || s.transform || s.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), t = i.toString().split(",")), "x" === a && (r = window.WebKitCSSMatrix ? i.m41 : 16 === t.length ? parseFloat(t[12]) : parseFloat(t[4])), "y" === a && (r = window.WebKitCSSMatrix ? i.m42 : 16 === t.length ? parseFloat(t[13]) : parseFloat(t[5])), w.rtl && r && (r = -r), r || 0));
      }, w.getWrapperTranslate = function (e) {
        return ("undefined" == typeof e && (e = i() ? "x" : "y"), w.getTranslate(w.wrapper[0], e));
      }, w.observers = [], w.initObservers = function () {
        if (w.params.observeParents) for (var e = w.container.parents(), a = 0; a < e.length; a++) d(e[a]);d(w.container[0], { childList: !1 }), d(w.wrapper[0], { attributes: !1 });
      }, w.disconnectObservers = function () {
        for (var e = 0; e < w.observers.length; e++) w.observers[e].disconnect();w.observers = [];
      }, w.createLoop = function () {
        w.wrapper.children("." + w.params.slideClass + "." + w.params.slideDuplicateClass).remove();var e = w.wrapper.children("." + w.params.slideClass);"auto" !== w.params.slidesPerView || w.params.loopedSlides || (w.params.loopedSlides = e.length), w.loopedSlides = parseInt(w.params.loopedSlides || w.params.slidesPerView, 10), w.loopedSlides = w.loopedSlides + w.params.loopAdditionalSlides, w.loopedSlides > e.length && (w.loopedSlides = e.length);var t,
            r = [],
            s = [];for (e.each(function (t, i) {
          var n = a(this);t < w.loopedSlides && s.push(i), t < e.length && t >= e.length - w.loopedSlides && r.push(i), n.attr("data-swiper-slide-index", t);
        }), t = 0; t < s.length; t++) w.wrapper.append(a(s[t].cloneNode(!0)).addClass(w.params.slideDuplicateClass));for (t = r.length - 1; t >= 0; t--) w.wrapper.prepend(a(r[t].cloneNode(!0)).addClass(w.params.slideDuplicateClass));
      }, w.destroyLoop = function () {
        w.wrapper.children("." + w.params.slideClass + "." + w.params.slideDuplicateClass).remove(), w.slides.removeAttr("data-swiper-slide-index");
      }, w.fixLoop = function () {
        var e;w.activeIndex < w.loopedSlides ? (e = w.slides.length - 3 * w.loopedSlides + w.activeIndex, e += w.loopedSlides, w.slideTo(e, 0, !1, !0)) : ("auto" === w.params.slidesPerView && w.activeIndex >= 2 * w.loopedSlides || w.activeIndex > w.slides.length - 2 * w.params.slidesPerView) && (e = -w.slides.length + w.activeIndex + w.loopedSlides, e += w.loopedSlides, w.slideTo(e, 0, !1, !0));
      }, w.appendSlide = function (e) {
        if ((w.params.loop && w.destroyLoop(), "object" == typeof e && e.length)) for (var a = 0; a < e.length; a++) e[a] && w.wrapper.append(e[a]);else w.wrapper.append(e);w.params.loop && w.createLoop(), w.params.observer && w.support.observer || w.update(!0);
      }, w.prependSlide = function (e) {
        w.params.loop && w.destroyLoop();var a = w.activeIndex + 1;if ("object" == typeof e && e.length) {
          for (var t = 0; t < e.length; t++) e[t] && w.wrapper.prepend(e[t]);a = w.activeIndex + e.length;
        } else w.wrapper.prepend(e);w.params.loop && w.createLoop(), w.params.observer && w.support.observer || w.update(!0), w.slideTo(a, 0, !1);
      }, w.removeSlide = function (e) {
        w.params.loop && (w.destroyLoop(), w.slides = w.wrapper.children("." + w.params.slideClass));var a,
            t = w.activeIndex;if ("object" == typeof e && e.length) {
          for (var r = 0; r < e.length; r++) a = e[r], w.slides[a] && w.slides.eq(a).remove(), t > a && t--;t = Math.max(t, 0);
        } else a = e, w.slides[a] && w.slides.eq(a).remove(), t > a && t--, t = Math.max(t, 0);w.params.loop && w.createLoop(), w.params.observer && w.support.observer || w.update(!0), w.params.loop ? w.slideTo(t + w.loopedSlides, 0, !1) : w.slideTo(t, 0, !1);
      }, w.removeAllSlides = function () {
        for (var e = [], a = 0; a < w.slides.length; a++) e.push(a);w.removeSlide(e);
      }, w.effects = { fade: { setTranslate: function setTranslate() {
            for (var e = 0; e < w.slides.length; e++) {
              var a = w.slides.eq(e),
                  t = a[0].swiperSlideOffset,
                  r = -t;w.params.virtualTranslate || (r -= w.translate);var s = 0;i() || (s = r, r = 0);var n = w.params.fade.crossFade ? Math.max(1 - Math.abs(a[0].progress), 0) : 1 + Math.min(Math.max(a[0].progress, -1), 0);a.css({ opacity: n }).transform("translate3d(" + r + "px, " + s + "px, 0px)");
            }
          }, setTransition: function setTransition(e) {
            if ((w.slides.transition(e), w.params.virtualTranslate && 0 !== e)) {
              var a = !1;w.slides.transitionEnd(function () {
                if (!a && w) {
                  a = !0, w.animating = !1;for (var e = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"], t = 0; t < e.length; t++) w.wrapper.trigger(e[t]);
                }
              });
            }
          } }, cube: { setTranslate: function setTranslate() {
            var e,
                t = 0;w.params.cube.shadow && (i() ? (e = w.wrapper.find(".swiper-cube-shadow"), 0 === e.length && (e = a('<div class="swiper-cube-shadow"></div>'), w.wrapper.append(e)), e.css({ height: w.width + "px" })) : (e = w.container.find(".swiper-cube-shadow"), 0 === e.length && (e = a('<div class="swiper-cube-shadow"></div>'), w.container.append(e))));for (var r = 0; r < w.slides.length; r++) {
              var s = w.slides.eq(r),
                  n = 90 * r,
                  o = Math.floor(n / 360);w.rtl && (n = -n, o = Math.floor(-n / 360));var l = Math.max(Math.min(s[0].progress, 1), -1),
                  d = 0,
                  p = 0,
                  u = 0;r % 4 === 0 ? (d = 4 * -o * w.size, u = 0) : (r - 1) % 4 === 0 ? (d = 0, u = 4 * -o * w.size) : (r - 2) % 4 === 0 ? (d = w.size + 4 * o * w.size, u = w.size) : (r - 3) % 4 === 0 && (d = -w.size, u = 3 * w.size + 4 * w.size * o), w.rtl && (d = -d), i() || (p = d, d = 0);var c = "rotateX(" + (i() ? 0 : -n) + "deg) rotateY(" + (i() ? n : 0) + "deg) translate3d(" + d + "px, " + p + "px, " + u + "px)";if ((1 >= l && l > -1 && (t = 90 * r + 90 * l, w.rtl && (t = 90 * -r - 90 * l)), s.transform(c), w.params.cube.slideShadows)) {
                var m = i() ? s.find(".swiper-slide-shadow-left") : s.find(".swiper-slide-shadow-top"),
                    f = i() ? s.find(".swiper-slide-shadow-right") : s.find(".swiper-slide-shadow-bottom");0 === m.length && (m = a('<div class="swiper-slide-shadow-' + (i() ? "left" : "top") + '"></div>'), s.append(m)), 0 === f.length && (f = a('<div class="swiper-slide-shadow-' + (i() ? "right" : "bottom") + '"></div>'), s.append(f));s[0].progress;m.length && (m[0].style.opacity = -s[0].progress), f.length && (f[0].style.opacity = s[0].progress);
              }
            }if ((w.wrapper.css({ "-webkit-transform-origin": "50% 50% -" + w.size / 2 + "px", "-moz-transform-origin": "50% 50% -" + w.size / 2 + "px", "-ms-transform-origin": "50% 50% -" + w.size / 2 + "px", "transform-origin": "50% 50% -" + w.size / 2 + "px" }), w.params.cube.shadow)) if (i()) e.transform("translate3d(0px, " + (w.width / 2 + w.params.cube.shadowOffset) + "px, " + -w.width / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + w.params.cube.shadowScale + ")");else {
              var h = Math.abs(t) - 90 * Math.floor(Math.abs(t) / 90),
                  g = 1.5 - (Math.sin(2 * h * Math.PI / 360) / 2 + Math.cos(2 * h * Math.PI / 360) / 2),
                  v = w.params.cube.shadowScale,
                  y = w.params.cube.shadowScale / g,
                  b = w.params.cube.shadowOffset;e.transform("scale3d(" + v + ", 1, " + y + ") translate3d(0px, " + (w.height / 2 + b) + "px, " + -w.height / 2 / y + "px) rotateX(-90deg)");
            }var T = w.isSafari || w.isUiWebView ? -w.size / 2 : 0;w.wrapper.transform("translate3d(0px,0," + T + "px) rotateX(" + (i() ? 0 : t) + "deg) rotateY(" + (i() ? -t : 0) + "deg)");
          }, setTransition: function setTransition(e) {
            w.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), w.params.cube.shadow && !i() && w.container.find(".swiper-cube-shadow").transition(e);
          } }, coverflow: { setTranslate: function setTranslate() {
            for (var e = w.translate, t = i() ? -e + w.width / 2 : -e + w.height / 2, r = i() ? w.params.coverflow.rotate : -w.params.coverflow.rotate, s = w.params.coverflow.depth, n = 0, o = w.slides.length; o > n; n++) {
              var l = w.slides.eq(n),
                  d = w.slidesSizesGrid[n],
                  p = l[0].swiperSlideOffset,
                  u = (t - p - d / 2) / d * w.params.coverflow.modifier,
                  c = i() ? r * u : 0,
                  m = i() ? 0 : r * u,
                  f = -s * Math.abs(u),
                  h = i() ? 0 : w.params.coverflow.stretch * u,
                  g = i() ? w.params.coverflow.stretch * u : 0;Math.abs(g) < .001 && (g = 0), Math.abs(h) < .001 && (h = 0), Math.abs(f) < .001 && (f = 0), Math.abs(c) < .001 && (c = 0), Math.abs(m) < .001 && (m = 0);var v = "translate3d(" + g + "px," + h + "px," + f + "px)  rotateX(" + m + "deg) rotateY(" + c + "deg)";if ((l.transform(v), l[0].style.zIndex = -Math.abs(Math.round(u)) + 1, w.params.coverflow.slideShadows)) {
                var y = i() ? l.find(".swiper-slide-shadow-left") : l.find(".swiper-slide-shadow-top"),
                    b = i() ? l.find(".swiper-slide-shadow-right") : l.find(".swiper-slide-shadow-bottom");0 === y.length && (y = a('<div class="swiper-slide-shadow-' + (i() ? "left" : "top") + '"></div>'), l.append(y)), 0 === b.length && (b = a('<div class="swiper-slide-shadow-' + (i() ? "right" : "bottom") + '"></div>'), l.append(b)), y.length && (y[0].style.opacity = u > 0 ? u : 0), b.length && (b[0].style.opacity = -u > 0 ? -u : 0);
              }
            }if (w.browser.ie) {
              var T = w.wrapper[0].style;T.perspectiveOrigin = t + "px 50%";
            }
          }, setTransition: function setTransition(e) {
            w.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e);
          } } }, w.lazy = { initialImageLoaded: !1, loadImageInSlide: function loadImageInSlide(e, t) {
          if ("undefined" != typeof e && ("undefined" == typeof t && (t = !0), 0 !== w.slides.length)) {
            var r = w.slides.eq(e),
                s = r.find(".swiper-lazy:not(.swiper-lazy-loaded):not(.swiper-lazy-loading)");!r.hasClass("swiper-lazy") || r.hasClass("swiper-lazy-loaded") || r.hasClass("swiper-lazy-loading") || (s = s.add(r[0])), 0 !== s.length && s.each(function () {
              var e = a(this);e.addClass("swiper-lazy-loading");var s = e.attr("data-background"),
                  i = e.attr("data-src"),
                  n = e.attr("data-srcset");w.loadImage(e[0], i || s, n, !1, function () {
                if ((s ? (e.css("background-image", "url(" + s + ")"), e.removeAttr("data-background")) : (n && (e.attr("srcset", n), e.removeAttr("data-srcset")), i && (e.attr("src", i), e.removeAttr("data-src"))), e.addClass("swiper-lazy-loaded").removeClass("swiper-lazy-loading"), r.find(".swiper-lazy-preloader, .preloader").remove(), w.params.loop && t)) {
                  var a = r.attr("data-swiper-slide-index");if (r.hasClass(w.params.slideDuplicateClass)) {
                    var o = w.wrapper.children('[data-swiper-slide-index="' + a + '"]:not(.' + w.params.slideDuplicateClass + ")");w.lazy.loadImageInSlide(o.index(), !1);
                  } else {
                    var l = w.wrapper.children("." + w.params.slideDuplicateClass + '[data-swiper-slide-index="' + a + '"]');w.lazy.loadImageInSlide(l.index(), !1);
                  }
                }w.emit("onLazyImageReady", w, r[0], e[0]);
              }), w.emit("onLazyImageLoad", w, r[0], e[0]);
            });
          }
        }, load: function load() {
          var e;if (w.params.watchSlidesVisibility) w.wrapper.children("." + w.params.slideVisibleClass).each(function () {
            w.lazy.loadImageInSlide(a(this).index());
          });else if (w.params.slidesPerView > 1) for (e = w.activeIndex; e < w.activeIndex + w.params.slidesPerView; e++) w.slides[e] && w.lazy.loadImageInSlide(e);else w.lazy.loadImageInSlide(w.activeIndex);if (w.params.lazyLoadingInPrevNext) if (w.params.slidesPerView > 1) {
            for (e = w.activeIndex + w.params.slidesPerView; e < w.activeIndex + w.params.slidesPerView + w.params.slidesPerView; e++) w.slides[e] && w.lazy.loadImageInSlide(e);for (e = w.activeIndex - w.params.slidesPerView; e < w.activeIndex; e++) w.slides[e] && w.lazy.loadImageInSlide(e);
          } else {
            var t = w.wrapper.children("." + w.params.slideNextClass);t.length > 0 && w.lazy.loadImageInSlide(t.index());var r = w.wrapper.children("." + w.params.slidePrevClass);r.length > 0 && w.lazy.loadImageInSlide(r.index());
          }
        }, onTransitionStart: function onTransitionStart() {
          w.params.lazyLoading && (w.params.lazyLoadingOnTransitionStart || !w.params.lazyLoadingOnTransitionStart && !w.lazy.initialImageLoaded) && w.lazy.load();
        }, onTransitionEnd: function onTransitionEnd() {
          w.params.lazyLoading && !w.params.lazyLoadingOnTransitionStart && w.lazy.load();
        } }, w.scrollbar = { isTouched: !1, setDragPosition: function setDragPosition(e) {
          var a = w.scrollbar,
              t = i() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX || e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY || e.clientY,
              r = t - a.track.offset()[i() ? "left" : "top"] - a.dragSize / 2,
              s = -w.minTranslate() * a.moveDivider,
              n = -w.maxTranslate() * a.moveDivider;s > r ? r = s : r > n && (r = n), r = -r / a.moveDivider, w.updateProgress(r), w.setWrapperTranslate(r, !0);
        }, dragStart: function dragStart(e) {
          var a = w.scrollbar;a.isTouched = !0, e.preventDefault(), e.stopPropagation(), a.setDragPosition(e), clearTimeout(a.dragTimeout), a.track.transition(0), w.params.scrollbarHide && a.track.css("opacity", 1), w.wrapper.transition(100), a.drag.transition(100), w.emit("onScrollbarDragStart", w);
        }, dragMove: function dragMove(e) {
          var a = w.scrollbar;a.isTouched && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, a.setDragPosition(e), w.wrapper.transition(0), a.track.transition(0), a.drag.transition(0), w.emit("onScrollbarDragMove", w));
        }, dragEnd: function dragEnd(e) {
          var a = w.scrollbar;a.isTouched && (a.isTouched = !1, w.params.scrollbarHide && (clearTimeout(a.dragTimeout), a.dragTimeout = setTimeout(function () {
            a.track.css("opacity", 0), a.track.transition(400);
          }, 1e3)), w.emit("onScrollbarDragEnd", w), w.params.scrollbarSnapOnRelease && w.slideReset());
        }, enableDraggable: function enableDraggable() {
          var e = w.scrollbar,
              t = w.support.touch ? e.track : document;a(e.track).on(w.touchEvents.start, e.dragStart), a(t).on(w.touchEvents.move, e.dragMove), a(t).on(w.touchEvents.end, e.dragEnd);
        }, disableDraggable: function disableDraggable() {
          var e = w.scrollbar,
              t = w.support.touch ? e.track : document;a(e.track).off(w.touchEvents.start, e.dragStart), a(t).off(w.touchEvents.move, e.dragMove), a(t).off(w.touchEvents.end, e.dragEnd);
        }, set: function set() {
          if (w.params.scrollbar) {
            var e = w.scrollbar;e.track = a(w.params.scrollbar), e.drag = e.track.find(".swiper-scrollbar-drag"), 0 === e.drag.length && (e.drag = a('<div class="swiper-scrollbar-drag"></div>'), e.track.append(e.drag)), e.drag[0].style.width = "", e.drag[0].style.height = "", e.trackSize = i() ? e.track[0].offsetWidth : e.track[0].offsetHeight, e.divider = w.size / w.virtualSize, e.moveDivider = e.divider * (e.trackSize / w.size), e.dragSize = e.trackSize * e.divider, i() ? e.drag[0].style.width = e.dragSize + "px" : e.drag[0].style.height = e.dragSize + "px", e.divider >= 1 ? e.track[0].style.display = "none" : e.track[0].style.display = "", w.params.scrollbarHide && (e.track[0].style.opacity = 0);
          }
        }, setTranslate: function setTranslate() {
          if (w.params.scrollbar) {
            var e,
                a = w.scrollbar,
                t = (w.translate || 0, a.dragSize);e = (a.trackSize - a.dragSize) * w.progress, w.rtl && i() ? (e = -e, e > 0 ? (t = a.dragSize - e, e = 0) : -e + a.dragSize > a.trackSize && (t = a.trackSize + e)) : 0 > e ? (t = a.dragSize + e, e = 0) : e + a.dragSize > a.trackSize && (t = a.trackSize - e), i() ? (w.support.transforms3d ? a.drag.transform("translate3d(" + e + "px, 0, 0)") : a.drag.transform("translateX(" + e + "px)"), a.drag[0].style.width = t + "px") : (w.support.transforms3d ? a.drag.transform("translate3d(0px, " + e + "px, 0)") : a.drag.transform("translateY(" + e + "px)"), a.drag[0].style.height = t + "px"), w.params.scrollbarHide && (clearTimeout(a.timeout), a.track[0].style.opacity = 1, a.timeout = setTimeout(function () {
              a.track[0].style.opacity = 0, a.track.transition(400);
            }, 1e3));
          }
        }, setTransition: function setTransition(e) {
          w.params.scrollbar && w.scrollbar.drag.transition(e);
        } }, w.controller = { LinearSpline: function LinearSpline(e, a) {
          this.x = e, this.y = a, this.lastIndex = e.length - 1;var t, r;this.x.length;this.interpolate = function (e) {
            return e ? (r = s(this.x, e), t = r - 1, (e - this.x[t]) * (this.y[r] - this.y[t]) / (this.x[r] - this.x[t]) + this.y[t]) : 0;
          };var s = (function () {
            var e, a, t;return function (r, s) {
              for (a = -1, e = r.length; e - a > 1;) r[t = e + a >> 1] <= s ? a = t : e = t;return e;
            };
          })();
        }, getInterpolateFunction: function getInterpolateFunction(e) {
          w.controller.spline || (w.controller.spline = w.params.loop ? new w.controller.LinearSpline(w.slidesGrid, e.slidesGrid) : new w.controller.LinearSpline(w.snapGrid, e.snapGrid));
        }, setTranslate: function setTranslate(e, a) {
          function r(a) {
            e = a.rtl && "horizontal" === a.params.direction ? -w.translate : w.translate, "slide" === w.params.controlBy && (w.controller.getInterpolateFunction(a), i = -w.controller.spline.interpolate(-e)), i && "container" !== w.params.controlBy || (s = (a.maxTranslate() - a.minTranslate()) / (w.maxTranslate() - w.minTranslate()), i = (e - w.minTranslate()) * s + a.minTranslate()), w.params.controlInverse && (i = a.maxTranslate() - i), a.updateProgress(i), a.setWrapperTranslate(i, !1, w), a.updateActiveIndex();
          }var s,
              i,
              n = w.params.control;if (w.isArray(n)) for (var o = 0; o < n.length; o++) n[o] !== a && n[o] instanceof t && r(n[o]);else n instanceof t && a !== n && r(n);
        }, setTransition: function setTransition(e, a) {
          function r(a) {
            a.setWrapperTransition(e, w), 0 !== e && (a.onTransitionStart(), a.wrapper.transitionEnd(function () {
              i && (a.params.loop && "slide" === w.params.controlBy && a.fixLoop(), a.onTransitionEnd());
            }));
          }var s,
              i = w.params.control;if (w.isArray(i)) for (s = 0; s < i.length; s++) i[s] !== a && i[s] instanceof t && r(i[s]);else i instanceof t && a !== i && r(i);
        } }, w.hashnav = { init: function init() {
          if (w.params.hashnav) {
            w.hashnav.initialized = !0;var e = document.location.hash.replace("#", "");if (e) for (var a = 0, t = 0, r = w.slides.length; r > t; t++) {
              var s = w.slides.eq(t),
                  i = s.attr("data-hash");if (i === e && !s.hasClass(w.params.slideDuplicateClass)) {
                var n = s.index();w.slideTo(n, a, w.params.runCallbacksOnInit, !0);
              }
            }
          }
        }, setHash: function setHash() {
          w.hashnav.initialized && w.params.hashnav && (document.location.hash = w.slides.eq(w.activeIndex).attr("data-hash") || "");
        } }, w.disableKeyboardControl = function () {
        a(document).off("keydown", p);
      }, w.enableKeyboardControl = function () {
        a(document).on("keydown", p);
      }, w.mousewheel = { event: !1, lastScrollTime: new window.Date().getTime() }, w.params.mousewheelControl)) {
        try {
          new window.WheelEvent("wheel"), w.mousewheel.event = "wheel";
        } catch (G) {}w.mousewheel.event || void 0 === document.onmousewheel || (w.mousewheel.event = "mousewheel"), w.mousewheel.event || (w.mousewheel.event = "DOMMouseScroll");
      }w.disableMousewheelControl = function () {
        return w.mousewheel.event ? (w.container.off(w.mousewheel.event, u), !0) : !1;
      }, w.enableMousewheelControl = function () {
        return w.mousewheel.event ? (w.container.on(w.mousewheel.event, u), !0) : !1;
      }, w.parallax = { setTranslate: function setTranslate() {
          w.container.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function () {
            c(this, w.progress);
          }), w.slides.each(function () {
            var e = a(this);e.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function () {
              var a = Math.min(Math.max(e[0].progress, -1), 1);c(this, a);
            });
          });
        }, setTransition: function setTransition(e) {
          "undefined" == typeof e && (e = w.params.speed), w.container.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function () {
            var t = a(this),
                r = parseInt(t.attr("data-swiper-parallax-duration"), 10) || e;0 === e && (r = 0), t.transition(r);
          });
        } }, w._plugins = [];for (var O in w.plugins) {
        var A = w.plugins[O](w, w.params[O]);A && w._plugins.push(A);
      }return (w.callPlugins = function (e) {
        for (var a = 0; a < w._plugins.length; a++) e in w._plugins[a] && w._plugins[a][e](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
      }, w.emitterEventListeners = {}, w.emit = function (e) {
        w.params[e] && w.params[e](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);var a;if (w.emitterEventListeners[e]) for (a = 0; a < w.emitterEventListeners[e].length; a++) w.emitterEventListeners[e][a](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);w.callPlugins && w.callPlugins(e, arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
      }, w.on = function (e, a) {
        return (e = m(e), w.emitterEventListeners[e] || (w.emitterEventListeners[e] = []), w.emitterEventListeners[e].push(a), w);
      }, w.off = function (e, a) {
        var t;if ((e = m(e), "undefined" == typeof a)) return (w.emitterEventListeners[e] = [], w);if (w.emitterEventListeners[e] && 0 !== w.emitterEventListeners[e].length) {
          for (t = 0; t < w.emitterEventListeners[e].length; t++) w.emitterEventListeners[e][t] === a && w.emitterEventListeners[e].splice(t, 1);return w;
        }
      }, w.once = function (e, a) {
        e = m(e);var t = function t() {
          a(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]), w.off(e, t);
        };return (w.on(e, t), w);
      }, w.a11y = { makeFocusable: function makeFocusable(e) {
          return (e.attr("tabIndex", "0"), e);
        }, addRole: function addRole(e, a) {
          return (e.attr("role", a), e);
        }, addLabel: function addLabel(e, a) {
          return (e.attr("aria-label", a), e);
        }, disable: function disable(e) {
          return (e.attr("aria-disabled", !0), e);
        }, enable: function enable(e) {
          return (e.attr("aria-disabled", !1), e);
        }, onEnterKey: function onEnterKey(e) {
          13 === e.keyCode && (a(e.target).is(w.params.nextButton) ? (w.onClickNext(e), w.isEnd ? w.a11y.notify(w.params.lastSlideMessage) : w.a11y.notify(w.params.nextSlideMessage)) : a(e.target).is(w.params.prevButton) && (w.onClickPrev(e), w.isBeginning ? w.a11y.notify(w.params.firstSlideMessage) : w.a11y.notify(w.params.prevSlideMessage)), a(e.target).is("." + w.params.bulletClass) && a(e.target)[0].click());
        }, liveRegion: a('<span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>'), notify: function notify(e) {
          var a = w.a11y.liveRegion;0 !== a.length && (a.html(""), a.html(e));
        }, init: function init() {
          if (w.params.nextButton) {
            var e = a(w.params.nextButton);w.a11y.makeFocusable(e), w.a11y.addRole(e, "button"), w.a11y.addLabel(e, w.params.nextSlideMessage);
          }if (w.params.prevButton) {
            var t = a(w.params.prevButton);w.a11y.makeFocusable(t), w.a11y.addRole(t, "button"), w.a11y.addLabel(t, w.params.prevSlideMessage);
          }a(w.container).append(w.a11y.liveRegion);
        }, initPagination: function initPagination() {
          w.params.pagination && w.params.paginationClickable && w.bullets && w.bullets.length && w.bullets.each(function () {
            var e = a(this);w.a11y.makeFocusable(e), w.a11y.addRole(e, "button"), w.a11y.addLabel(e, w.params.paginationBulletMessage.replace(/{{index}}/, e.index() + 1));
          });
        }, destroy: function destroy() {
          w.a11y.liveRegion && w.a11y.liveRegion.length > 0 && w.a11y.liveRegion.remove();
        } }, w.init = function () {
        w.params.loop && w.createLoop(), w.updateContainerSize(), w.updateSlidesSize(), w.updatePagination(), w.params.scrollbar && w.scrollbar && (w.scrollbar.set(), w.params.scrollbarDraggable && w.scrollbar.enableDraggable()), "slide" !== w.params.effect && w.effects[w.params.effect] && (w.params.loop || w.updateProgress(), w.effects[w.params.effect].setTranslate()), w.params.loop ? w.slideTo(w.params.initialSlide + w.loopedSlides, 0, w.params.runCallbacksOnInit) : (w.slideTo(w.params.initialSlide, 0, w.params.runCallbacksOnInit), 0 === w.params.initialSlide && (w.parallax && w.params.parallax && w.parallax.setTranslate(), w.lazy && w.params.lazyLoading && (w.lazy.load(), w.lazy.initialImageLoaded = !0))), w.attachEvents(), w.params.observer && w.support.observer && w.initObservers(), w.params.preloadImages && !w.params.lazyLoading && w.preloadImages(), w.params.autoplay && w.startAutoplay(), w.params.keyboardControl && w.enableKeyboardControl && w.enableKeyboardControl(), w.params.mousewheelControl && w.enableMousewheelControl && w.enableMousewheelControl(), w.params.hashnav && w.hashnav && w.hashnav.init(), w.params.a11y && w.a11y && w.a11y.init(), w.emit("onInit", w);
      }, w.cleanupStyles = function () {
        w.container.removeClass(w.classNames.join(" ")).removeAttr("style"), w.wrapper.removeAttr("style"), w.slides && w.slides.length && w.slides.removeClass([w.params.slideVisibleClass, w.params.slideActiveClass, w.params.slideNextClass, w.params.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-column").removeAttr("data-swiper-row"), w.paginationContainer && w.paginationContainer.length && w.paginationContainer.removeClass(w.params.paginationHiddenClass), w.bullets && w.bullets.length && w.bullets.removeClass(w.params.bulletActiveClass), w.params.prevButton && a(w.params.prevButton).removeClass(w.params.buttonDisabledClass), w.params.nextButton && a(w.params.nextButton).removeClass(w.params.buttonDisabledClass), w.params.scrollbar && w.scrollbar && (w.scrollbar.track && w.scrollbar.track.length && w.scrollbar.track.removeAttr("style"), w.scrollbar.drag && w.scrollbar.drag.length && w.scrollbar.drag.removeAttr("style"));
      }, w.destroy = function (e, a) {
        w.detachEvents(), w.stopAutoplay(), w.params.scrollbar && w.scrollbar && w.params.scrollbarDraggable && w.scrollbar.disableDraggable(), w.params.loop && w.destroyLoop(), a && w.cleanupStyles(), w.disconnectObservers(), w.params.keyboardControl && w.disableKeyboardControl && w.disableKeyboardControl(), w.params.mousewheelControl && w.disableMousewheelControl && w.disableMousewheelControl(), w.params.a11y && w.a11y && w.a11y.destroy(), w.emit("onDestroy"), e !== !1 && (w = null);
      }, w.init(), w);
    }
  });t.prototype = { isSafari: (function () {
      var e = navigator.userAgent.toLowerCase();return e.indexOf("safari") >= 0 && e.indexOf("chrome") < 0 && e.indexOf("android") < 0;
    })(), isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(navigator.userAgent), isArray: function isArray(e) {
      return "[object Array]" === Object.prototype.toString.apply(e);
    }, browser: { ie: window.navigator.pointerEnabled || window.navigator.msPointerEnabled, ieTouch: window.navigator.msPointerEnabled && window.navigator.msMaxTouchPoints > 1 || window.navigator.pointerEnabled && window.navigator.maxTouchPoints > 1 }, device: (function () {
      var e = navigator.userAgent,
          a = e.match(/(Android);?[\s\/]+([\d.]+)?/),
          t = e.match(/(iPad).*OS\s([\d_]+)/),
          r = e.match(/(iPod)(.*OS\s([\d_]+))?/),
          s = !t && e.match(/(iPhone\sOS)\s([\d_]+)/);return { ios: t || s || r, android: a };
    })(), support: { touch: window.Modernizr && Modernizr.touch === !0 || (function () {
        return !!("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch);
      })(), transforms3d: window.Modernizr && Modernizr.csstransforms3d === !0 || (function () {
        var e = document.createElement("div").style;return "webkitPerspective" in e || "MozPerspective" in e || "OPerspective" in e || "MsPerspective" in e || "perspective" in e;
      })(), flexbox: (function () {
        for (var e = document.createElement("div").style, a = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "), t = 0; t < a.length; t++) if (a[t] in e) return !0;
      })(), observer: (function () {
        return "MutationObserver" in window || "WebkitMutationObserver" in window;
      })() }, plugins: {} };for (var r = (function () {
    var e = function e(_e) {
      var a = this,
          t = 0;for (t = 0; t < _e.length; t++) a[t] = _e[t];return (a.length = _e.length, this);
    },
        a = function a(_a, t) {
      var r = [],
          s = 0;if (_a && !t && _a instanceof e) return _a;if (_a) if ("string" == typeof _a) {
        var i,
            n,
            o = _a.trim();if (o.indexOf("<") >= 0 && o.indexOf(">") >= 0) {
          var l = "div";for (0 === o.indexOf("<li") && (l = "ul"), 0 === o.indexOf("<tr") && (l = "tbody"), (0 === o.indexOf("<td") || 0 === o.indexOf("<th")) && (l = "tr"), 0 === o.indexOf("<tbody") && (l = "table"), 0 === o.indexOf("<option") && (l = "select"), n = document.createElement(l), n.innerHTML = _a, s = 0; s < n.childNodes.length; s++) r.push(n.childNodes[s]);
        } else for (i = t || "#" !== _a[0] || _a.match(/[ .<>:~]/) ? (t || document).querySelectorAll(_a) : [document.getElementById(_a.split("#")[1])], s = 0; s < i.length; s++) i[s] && r.push(i[s]);
      } else if (_a.nodeType || _a === window || _a === document) r.push(_a);else if (_a.length > 0 && _a[0].nodeType) for (s = 0; s < _a.length; s++) r.push(_a[s]);return new e(r);
    };return (e.prototype = { addClass: function addClass(e) {
        if ("undefined" == typeof e) return this;for (var a = e.split(" "), t = 0; t < a.length; t++) for (var r = 0; r < this.length; r++) this[r].classList.add(a[t]);return this;
      }, removeClass: function removeClass(e) {
        for (var a = e.split(" "), t = 0; t < a.length; t++) for (var r = 0; r < this.length; r++) this[r].classList.remove(a[t]);return this;
      }, hasClass: function hasClass(e) {
        return this[0] ? this[0].classList.contains(e) : !1;
      }, toggleClass: function toggleClass(e) {
        for (var a = e.split(" "), t = 0; t < a.length; t++) for (var r = 0; r < this.length; r++) this[r].classList.toggle(a[t]);return this;
      }, attr: function attr(e, a) {
        if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;for (var t = 0; t < this.length; t++) if (2 === arguments.length) this[t].setAttribute(e, a);else for (var r in e) this[t][r] = e[r], this[t].setAttribute(r, e[r]);return this;
      }, removeAttr: function removeAttr(e) {
        for (var a = 0; a < this.length; a++) this[a].removeAttribute(e);return this;
      }, data: function data(e, a) {
        if ("undefined" == typeof a) {
          if (this[0]) {
            var t = this[0].getAttribute("data-" + e);return t ? t : this[0].dom7ElementDataStorage && e in this[0].dom7ElementDataStorage ? this[0].dom7ElementDataStorage[e] : void 0;
          }return void 0;
        }for (var r = 0; r < this.length; r++) {
          var s = this[r];s.dom7ElementDataStorage || (s.dom7ElementDataStorage = {}), s.dom7ElementDataStorage[e] = a;
        }return this;
      }, transform: function transform(e) {
        for (var a = 0; a < this.length; a++) {
          var t = this[a].style;t.webkitTransform = t.MsTransform = t.msTransform = t.MozTransform = t.OTransform = t.transform = e;
        }return this;
      }, transition: function transition(e) {
        "string" != typeof e && (e += "ms");for (var a = 0; a < this.length; a++) {
          var t = this[a].style;t.webkitTransitionDuration = t.MsTransitionDuration = t.msTransitionDuration = t.MozTransitionDuration = t.OTransitionDuration = t.transitionDuration = e;
        }return this;
      }, on: function on(e, t, r, s) {
        function i(e) {
          var s = e.target;if (a(s).is(t)) r.call(s, e);else for (var i = a(s).parents(), n = 0; n < i.length; n++) a(i[n]).is(t) && r.call(i[n], e);
        }var n,
            o,
            l = e.split(" ");for (n = 0; n < this.length; n++) if ("function" == typeof t || t === !1) for ("function" == typeof t && (r = arguments[1], s = arguments[2] || !1), o = 0; o < l.length; o++) this[n].addEventListener(l[o], r, s);else for (o = 0; o < l.length; o++) this[n].dom7LiveListeners || (this[n].dom7LiveListeners = []), this[n].dom7LiveListeners.push({ listener: r, liveListener: i }), this[n].addEventListener(l[o], i, s);return this;
      }, off: function off(e, a, t, r) {
        for (var s = e.split(" "), i = 0; i < s.length; i++) for (var n = 0; n < this.length; n++) if ("function" == typeof a || a === !1) "function" == typeof a && (t = arguments[1], r = arguments[2] || !1), this[n].removeEventListener(s[i], t, r);else if (this[n].dom7LiveListeners) for (var o = 0; o < this[n].dom7LiveListeners.length; o++) this[n].dom7LiveListeners[o].listener === t && this[n].removeEventListener(s[i], this[n].dom7LiveListeners[o].liveListener, r);return this;
      }, once: function once(e, a, t, r) {
        function s(n) {
          t(n), i.off(e, a, s, r);
        }var i = this;"function" == typeof a && (a = !1, t = arguments[1], r = arguments[2]), i.on(e, a, s, r);
      }, trigger: function trigger(e, a) {
        for (var t = 0; t < this.length; t++) {
          var r;try {
            r = new window.CustomEvent(e, { detail: a, bubbles: !0, cancelable: !0 });
          } catch (s) {
            r = document.createEvent("Event"), r.initEvent(e, !0, !0), r.detail = a;
          }this[t].dispatchEvent(r);
        }return this;
      }, transitionEnd: function transitionEnd(e) {
        function a(i) {
          if (i.target === this) for (e.call(this, i), t = 0; t < r.length; t++) s.off(r[t], a);
        }var t,
            r = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"],
            s = this;if (e) for (t = 0; t < r.length; t++) s.on(r[t], a);return this;
      }, width: function width() {
        return this[0] === window ? window.innerWidth : this.length > 0 ? parseFloat(this.css("width")) : null;
      }, outerWidth: function outerWidth(e) {
        return this.length > 0 ? e ? this[0].offsetWidth + parseFloat(this.css("margin-right")) + parseFloat(this.css("margin-left")) : this[0].offsetWidth : null;
      }, height: function height() {
        return this[0] === window ? window.innerHeight : this.length > 0 ? parseFloat(this.css("height")) : null;
      }, outerHeight: function outerHeight(e) {
        return this.length > 0 ? e ? this[0].offsetHeight + parseFloat(this.css("margin-top")) + parseFloat(this.css("margin-bottom")) : this[0].offsetHeight : null;
      }, offset: function offset() {
        if (this.length > 0) {
          var e = this[0],
              a = e.getBoundingClientRect(),
              t = document.body,
              r = e.clientTop || t.clientTop || 0,
              s = e.clientLeft || t.clientLeft || 0,
              i = window.pageYOffset || e.scrollTop,
              n = window.pageXOffset || e.scrollLeft;return { top: a.top + i - r, left: a.left + n - s };
        }return null;
      }, css: function css(e, a) {
        var t;if (1 === arguments.length) {
          if ("string" != typeof e) {
            for (t = 0; t < this.length; t++) for (var r in e) this[t].style[r] = e[r];
            return this;
          }if (this[0]) return window.getComputedStyle(this[0], null).getPropertyValue(e);
        }if (2 === arguments.length && "string" == typeof e) {
          for (t = 0; t < this.length; t++) this[t].style[e] = a;return this;
        }return this;
      }, each: function each(e) {
        for (var a = 0; a < this.length; a++) e.call(this[a], a, this[a]);return this;
      }, html: function html(e) {
        if ("undefined" == typeof e) return this[0] ? this[0].innerHTML : void 0;for (var a = 0; a < this.length; a++) this[a].innerHTML = e;return this;
      }, is: function is(t) {
        if (!this[0]) return !1;var r, s;if ("string" == typeof t) {
          var i = this[0];if (i === document) return t === document;if (i === window) return t === window;if (i.matches) return i.matches(t);if (i.webkitMatchesSelector) return i.webkitMatchesSelector(t);if (i.mozMatchesSelector) return i.mozMatchesSelector(t);if (i.msMatchesSelector) return i.msMatchesSelector(t);for (r = a(t), s = 0; s < r.length; s++) if (r[s] === this[0]) return !0;return !1;
        }if (t === document) return this[0] === document;if (t === window) return this[0] === window;if (t.nodeType || t instanceof e) {
          for (r = t.nodeType ? [t] : t, s = 0; s < r.length; s++) if (r[s] === this[0]) return !0;return !1;
        }return !1;
      }, index: function index() {
        if (this[0]) {
          for (var e = this[0], a = 0; null !== (e = e.previousSibling);) 1 === e.nodeType && a++;return a;
        }return void 0;
      }, eq: function eq(a) {
        if ("undefined" == typeof a) return this;var t,
            r = this.length;return a > r - 1 ? new e([]) : 0 > a ? (t = r + a, new e(0 > t ? [] : [this[t]])) : new e([this[a]]);
      }, append: function append(a) {
        var t, r;for (t = 0; t < this.length; t++) if ("string" == typeof a) {
          var s = document.createElement("div");for (s.innerHTML = a; s.firstChild;) this[t].appendChild(s.firstChild);
        } else if (a instanceof e) for (r = 0; r < a.length; r++) this[t].appendChild(a[r]);else this[t].appendChild(a);return this;
      }, prepend: function prepend(a) {
        var t, r;for (t = 0; t < this.length; t++) if ("string" == typeof a) {
          var s = document.createElement("div");for (s.innerHTML = a, r = s.childNodes.length - 1; r >= 0; r--) this[t].insertBefore(s.childNodes[r], this[t].childNodes[0]);
        } else if (a instanceof e) for (r = 0; r < a.length; r++) this[t].insertBefore(a[r], this[t].childNodes[0]);else this[t].insertBefore(a, this[t].childNodes[0]);return this;
      }, insertBefore: function insertBefore(e) {
        for (var t = a(e), r = 0; r < this.length; r++) if (1 === t.length) t[0].parentNode.insertBefore(this[r], t[0]);else if (t.length > 1) for (var s = 0; s < t.length; s++) t[s].parentNode.insertBefore(this[r].cloneNode(!0), t[s]);
      }, insertAfter: function insertAfter(e) {
        for (var t = a(e), r = 0; r < this.length; r++) if (1 === t.length) t[0].parentNode.insertBefore(this[r], t[0].nextSibling);else if (t.length > 1) for (var s = 0; s < t.length; s++) t[s].parentNode.insertBefore(this[r].cloneNode(!0), t[s].nextSibling);
      }, next: function next(t) {
        return new e(this.length > 0 ? t ? this[0].nextElementSibling && a(this[0].nextElementSibling).is(t) ? [this[0].nextElementSibling] : [] : this[0].nextElementSibling ? [this[0].nextElementSibling] : [] : []);
      }, nextAll: function nextAll(t) {
        var r = [],
            s = this[0];if (!s) return new e([]);for (; s.nextElementSibling;) {
          var i = s.nextElementSibling;t ? a(i).is(t) && r.push(i) : r.push(i), s = i;
        }return new e(r);
      }, prev: function prev(t) {
        return new e(this.length > 0 ? t ? this[0].previousElementSibling && a(this[0].previousElementSibling).is(t) ? [this[0].previousElementSibling] : [] : this[0].previousElementSibling ? [this[0].previousElementSibling] : [] : []);
      }, prevAll: function prevAll(t) {
        var r = [],
            s = this[0];if (!s) return new e([]);for (; s.previousElementSibling;) {
          var i = s.previousElementSibling;t ? a(i).is(t) && r.push(i) : r.push(i), s = i;
        }return new e(r);
      }, parent: function parent(e) {
        for (var t = [], r = 0; r < this.length; r++) e ? a(this[r].parentNode).is(e) && t.push(this[r].parentNode) : t.push(this[r].parentNode);return a(a.unique(t));
      }, parents: function parents(e) {
        for (var t = [], r = 0; r < this.length; r++) for (var s = this[r].parentNode; s;) e ? a(s).is(e) && t.push(s) : t.push(s), s = s.parentNode;return a(a.unique(t));
      }, find: function find(a) {
        for (var t = [], r = 0; r < this.length; r++) for (var s = this[r].querySelectorAll(a), i = 0; i < s.length; i++) t.push(s[i]);return new e(t);
      }, children: function children(t) {
        for (var r = [], s = 0; s < this.length; s++) for (var i = this[s].childNodes, n = 0; n < i.length; n++) t ? 1 === i[n].nodeType && a(i[n]).is(t) && r.push(i[n]) : 1 === i[n].nodeType && r.push(i[n]);return new e(a.unique(r));
      }, remove: function remove() {
        for (var e = 0; e < this.length; e++) this[e].parentNode && this[e].parentNode.removeChild(this[e]);return this;
      }, add: function add() {
        var e,
            t,
            r = this;for (e = 0; e < arguments.length; e++) {
          var s = a(arguments[e]);for (t = 0; t < s.length; t++) r[r.length] = s[t], r.length++;
        }return r;
      } }, a.fn = e.prototype, a.unique = function (e) {
      for (var a = [], t = 0; t < e.length; t++) -1 === a.indexOf(e[t]) && a.push(e[t]);return a;
    }, a);
  })(), s = ["jQuery", "Zepto", "Dom7"], i = 0; i < s.length; i++) window[s[i]] && e(window[s[i]]);var n;n = "undefined" == typeof r ? window.Dom7 || window.Zepto || window.jQuery : r, n && ("transitionEnd" in n.fn || (n.fn.transitionEnd = function (e) {
    function a(i) {
      if (i.target === this) for (e.call(this, i), t = 0; t < r.length; t++) s.off(r[t], a);
    }var t,
        r = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"],
        s = this;if (e) for (t = 0; t < r.length; t++) s.on(r[t], a);return this;
  }), "transform" in n.fn || (n.fn.transform = function (e) {
    for (var a = 0; a < this.length; a++) {
      var t = this[a].style;t.webkitTransform = t.MsTransform = t.msTransform = t.MozTransform = t.OTransform = t.transform = e;
    }return this;
  }), "transition" in n.fn || (n.fn.transition = function (e) {
    "string" != typeof e && (e += "ms");for (var a = 0; a < this.length; a++) {
      var t = this[a].style;t.webkitTransitionDuration = t.MsTransitionDuration = t.msTransitionDuration = t.MozTransitionDuration = t.OTransitionDuration = t.transitionDuration = e;
    }return this;
  })), window.Swiper = t;
})(), "undefined" != typeof module ? module.exports = window.Swiper : "function" == typeof define && define.amd && define([], function () {
  "use strict";return window.Swiper;
});


},{}],18:[function(require,module,exports){
'use strict';
/*global window */

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _servicesMediator = require('./services/mediator');

var _servicesMediator2 = _interopRequireDefault(_servicesMediator);

// init all librares

var _libShim = require('./lib/shim');

var _libShim2 = _interopRequireDefault(_libShim);

var _libLodash = require('./lib/lodash');

var _libLodash2 = _interopRequireDefault(_libLodash);

var _libJquery = require('./lib/jquery');

var _libJquery2 = _interopRequireDefault(_libJquery);

var _libBackbone = require('./lib/backbone');

var _libBackbone2 = _interopRequireDefault(_libBackbone);

var _libFastclick = require('./lib/fastclick');

var _libFastclick2 = _interopRequireDefault(_libFastclick);

//import doT from './lib/dot';

var _libSwiper = require('./lib/swiper');

var _libSwiper2 = _interopRequireDefault(_libSwiper);

// init all services

var _servicesInfo = require('./services/info');

var _servicesInfo2 = _interopRequireDefault(_servicesInfo);

var _servicesDevice = require('./services/device');

var _servicesDevice2 = _interopRequireDefault(_servicesDevice);

var _servicesAndroidAds = require('./services/android-ads');

var _servicesAndroidAds2 = _interopRequireDefault(_servicesAndroidAds);

var _servicesLang = require('./services/lang');

var _servicesLang2 = _interopRequireDefault(_servicesLang);

var _servicesLog = require('./services/log');

var _servicesLog2 = _interopRequireDefault(_servicesLog);

var _servicesTemplateMaster = require('./services/template-master');

var _servicesTemplateMaster2 = _interopRequireDefault(_servicesTemplateMaster);

var _servicesUtil = require('./services/util');

var _servicesUtil2 = _interopRequireDefault(_servicesUtil);

// init sound players

var _soundSoundMaster = require('./sound/sound-master');

var _soundSoundMaster2 = _interopRequireDefault(_soundSoundMaster);

var _appRouterRouter = require('./app/router/router');

var _appRouterRouter2 = _interopRequireDefault(_appRouterRouter);

var _appViewCoreBase = require('./app/view/core/base');

var _appViewCoreBase2 = _interopRequireDefault(_appViewCoreBase);

var _appViewCoreHint = require('./app/view/core/hint');

var _appViewCoreHint2 = _interopRequireDefault(_appViewCoreHint);

var _appViewCorePopup = require('./app/view/core/popup');

var _appViewCorePopup2 = _interopRequireDefault(_appViewCorePopup);

// todo: - test - enable fast click
var win = window,
    doc = win.document;

new _libFastclick2['default'](doc.body); // test it decide

(function back() {

	if (win.location.hash) {
		win.history.back();
		return win.setTimeout(back, 50);
	}

	_appViewCoreBase2['default'].prototype.initStatic();

	_libBackbone2['default'].history.start();
})();

},{"./app/router/router":3,"./app/view/core/base":5,"./app/view/core/hint":6,"./app/view/core/popup":7,"./lib/backbone":11,"./lib/fastclick":13,"./lib/jquery":14,"./lib/lodash":15,"./lib/shim":16,"./lib/swiper":17,"./services/android-ads":19,"./services/device":20,"./services/info":21,"./services/lang":22,"./services/log":23,"./services/mediator":24,"./services/template-master":25,"./services/util":26,"./sound/sound-master":30}],19:[function(require,module,exports){
'use strict';
/*global window */

Object.defineProperty(exports, '__esModule', {
	value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _info = require('./info');

var _info2 = _interopRequireDefault(_info);

var win = window,
    androidAds = {
	attr: {},
	period: 3e3 * 60,
	set: function set(key, value) {
		this.attr[key] = value;
		return this;
	},
	get: function get(key) {
		return this.attr[key];
	},
	showAd: function showAd() {
		console.log('--------');
		console.log('show ads');
		console.log(win.Android);
		return win.Android && win.Android.displayInterstitial();
	},
	init: function init() {

		// ads will be show by view only
		return;

		if (!_info2['default'].isNormal) {
			return;
		}

		var androidAds = this,
		    intervalId = win.setInterval(androidAds.showAd, androidAds.period);

		androidAds.set('intervalId', intervalId);
	}

};

androidAds.init();

exports['default'] = androidAds;
module.exports = exports['default'];

},{"./info":21}],20:[function(require,module,exports){
'use strict';
/*global window */

Object.defineProperty(exports, '__esModule', {
	value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _libBackbone = require('./../lib/backbone');

var _libBackbone2 = _interopRequireDefault(_libBackbone);

var win = window,
    doc = win.document,
    docElem = doc.documentElement,
    device,
    Device = _libBackbone2['default'].Model.extend({

	defaults: {
		width: 0,
		height: 0,
		orientation: ''
	},

	initialize: function initialize() {

		var device = this;

		device.bindEventListeners();

		device.onResize();
	},

	bindEventListeners: function bindEventListeners() {

		var device = this;

		win.addEventListener('resize', function () {
			device.onResize();
		}, false);
	},

	onResize: function onResize() {

		var device = this,
		    width = docElem.clientWidth,
		    height = docElem.clientHeight,
		    orientation = width > height ? '-' : '|';

		device.set({
			width: width,
			height: height,
			orientation: orientation
		});

		device.trigger('resize');
	}

});

device = new Device();

exports['default'] = device;
module.exports = exports['default'];

},{"./../lib/backbone":11}],21:[function(require,module,exports){
'use strict';
/*global window */

Object.defineProperty(exports, '__esModule', {
	value: true
});
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
			normal: 'https://play.google.com/store/apps/details?id=com.elitapp.coolbook',
			pro: 'https://play.google.com/store/apps/details?id=com.elitapp.coolbookpro'
		}
	},

	ls: win.localStorage,
	savedItem: 'cool-book-stories',
	attr: {},
	systemAttr: {},
	defaultLanguage: 'ru',
	availableLanguages: ['ru'],
	//availableLanguages: ['ru', 'en'],

	init: function init() {

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

	setLanguage: function setLanguage() {

		var info = this,
		    lang;

		lang = info.get('language') || navigator.language || navigator.userLanguage || this.defaultLanguage;
		lang = lang.split('-')[0].toLowerCase();
		lang = info.availableLanguages.indexOf(lang) === -1 ? info.defaultLanguage : lang;
		lang = lang.toLowerCase();
		info.set('language', lang);
	},

	setOS: function setOS() {

		var info = this,
		    ua = win.navigator.userAgent,
		    isIE = /MSIE/.test(ua),
		    isAndroid = /android/i.test(ua),
		    isIOS = /iPad|iPhone|iPod/.test(ua);

		info.set('isIE', isIE, true);
		info.set('isAndroid', isAndroid, true);
		info.set('isIOS', isIOS, true);

		if (isIE) {
			info.set('os', 'wp', true);
		}

		if (isAndroid) {
			info.set('os', 'android', true);
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

	detectCssJsPrefix: function detectCssJsPrefix() {

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

	detectTransitionEndEventName: function detectTransitionEndEventName() {

		var i,
		    el = doc.createElement('div'),
		    transitions = {
			'transition': 'transitionend',
			'OTransition': 'otransitionend', // oTransitionEnd in very old Opera
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

	detectAnimationEndEventName: function detectAnimationEndEventName() {
		var i,
		    el = doc.createElement('div'),
		    animations = {
			'animation': 'animationend',
			'OAnimation': 'oAnimationEnd', // oAnimationEnd in very old Opera
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

	set: function set(key, value, isSystem) {

		if (isSystem) {
			this.systemAttr[key] = value;
		} else {
			this.attr[key] = value;
			this.ls.setItem(this.savedItem, JSON.stringify(this.attr));
		}

		return key;
	},

	get: function get(key, isSystem) {
		return isSystem ? this.systemAttr[key] : this.attr[key];
	},

	remove: function remove(key, isSystem) {
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

	setSettings: function setSettings() {

		var info = this,
		    defaultSettings = {
			installTime: Date.now(),
			versionCode: 1,
			//screenAnimation: info.get('isAndroid', true) ? 'off' : 'on',
			screenAnimation: 'off',
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

	hintIsDone: function hintIsDone(hintName) {

		var info = this,
		    hint = info.get('hint')[hintName];

		return Boolean(hint && hint.state === 'done');
	},

	getLinkToStore: function getLinkToStore(type) {
		// pro or normal
		return this.link[this.get('os', true)][type || 'normal'];
		//return this.link[this.get('os', true)][type || (this.isNormal ? 'normal' : 'pro')];
	}

};

info.init();

exports['default'] = info;
module.exports = exports['default'];

},{}],22:[function(require,module,exports){
'use strict';
/*global window */

Object.defineProperty(exports, '__esModule', {
	value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _info = require('./info');

var _info2 = _interopRequireDefault(_info);

var _i18nEn = require('./../i18n/en');

var _i18nEn2 = _interopRequireDefault(_i18nEn);

var _i18nRu = require('./../i18n/ru');

var _i18nRu2 = _interopRequireDefault(_i18nRu);

var lang = {

	attr: {},

	languages: { en: _i18nEn2['default'], ru: _i18nRu2['default'] },

	set: function set(lang) {
		this.attr = this.languages[lang];
	},

	get: function get(key) {
		return key ? this.attr[key] : this.attr;
	}

};

lang.set(_info2['default'].get('language'));

exports['default'] = lang;
module.exports = exports['default'];

},{"./../i18n/en":9,"./../i18n/ru":10,"./info":21}],23:[function(require,module,exports){
'use strict';
/*global console */

Object.defineProperty(exports, '__esModule', {
	value: true
});
var logger = {
	isEnable: false,
	log: function log() {
		return this.isEnable && console.log.apply(console, arguments);
	}
};

function log() {
	return logger.log.apply(logger, arguments);
}

exports['default'] = log;
module.exports = exports['default'];

},{}],24:[function(require,module,exports){
'use strict';
/*global window */

Object.defineProperty(exports, '__esModule', {
	value: true
});
var mediator;

function subscribe(channel, fn) {

	var channels = mediator.channels;

	if (!channels[channel]) {
		channels[channel] = [];
	}

	channels[channel].push({ context: this, callback: fn });

	return this;
}

function publish(channel) {

	var list = mediator.channels[channel],
	    args;

	if (!list) {
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
	installTo: function installTo(obj) {
		obj.subscribe = subscribe;
		obj.publish = publish;
		obj.unsubscribe = unsubscribe;
	}
};

exports['default'] = mediator;
module.exports = exports['default'];

},{}],25:[function(require,module,exports){
'use strict';
/*global window */

Object.defineProperty(exports, '__esModule', {
	value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _libDot = require('./../lib/dot');

var _libDot2 = _interopRequireDefault(_libDot);

var doc = window.document,
    templateMaster = {
	templateSelector: '.js-template',
	mainJsSelector: '.js-main-js',
	tmplText: {},
	tmplFn: {},
	getSymbolByMap: function getSymbolByMap(match, p1) {
		return ({ 'amp': '&', 'gt': '>', 'lt': '<' })[p1];
	},
	init: function init() {

		var tm = this,
		    templates = doc.querySelectorAll(tm.templateSelector),
		    mainJs = doc.querySelector(tm.mainJsSelector);

		Array.prototype.forEach.call(templates, function (tmplNode) {

			var name = tmplNode.getAttribute('data-name'),
			    text = tmplNode.innerHTML.replace(/\&(amp|gt|lt)\;/gi, tm.getSymbolByMap);

			tm.tmplText[name] = text;
			tm.tmplFn[name] = _libDot2['default'].template(text);

			tmplNode.parentNode.removeChild(tmplNode);
		});

		mainJs.parentNode.removeChild(mainJs);
	}

};

templateMaster.init();

exports['default'] = templateMaster;
module.exports = exports['default'];

},{"./../lib/dot":12}],26:[function(require,module,exports){
'use strict';
/*global window */

Object.defineProperty(exports, '__esModule', {
	value: true
});
var win = window,
    doc = win.document,
    docElem = doc.documentElement,
    util = {

	assortArray: function assortArray(arr) {
		return arr.sort(function () {
			return 0.5 - Math.random();
		});
	},

	getPath: function getPath(folder, index, type) {

		index += 1;

		if (index < 10) {
			index = '0' + index;
		}

		return folder + '/' + folder + '-' + index + '.' + type;
	},

	arrayRemoveByValue: function arrayRemoveByValue(arr, value) {
		var index = arr.indexOf(value);
		if (index !== -1) {
			arr.splice(index, 1);
		}
		return arr;
	},

	getBetween: function getBetween(min, current, max) {
		current = Math.min(current, max);
		current = Math.max(current, min);
		return current;
	},

	getRandomBetween: function getRandomBetween(min, max) {
		return Math.round(Math.random() * (max - min) + min);
	},

	toTop: function toTop() {
		win.scrollTo(0, 0);
	},

	copyJSON: function copyJSON(obj) {
		// external
		return JSON.parse(JSON.stringify(obj));
	}

};

exports['default'] = util;
module.exports = exports['default'];

},{}],27:[function(require,module,exports){
'use strict';
/*global window */

Object.defineProperty(exports, '__esModule', {
	value: true
});
var win = window,
    androidPlayer = {

	pathPrefix: 'www/',

	init: function init() {},

	play: function play(data) {

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

	stop: function stop(data) {

		var roadNumber = data.road,
		    andAud = win['AndAud_' + roadNumber];

		andAud.stop();
	}

};

exports['default'] = androidPlayer;
module.exports = exports['default'];

},{}],28:[function(require,module,exports){
'use strict';
/*global window */

Object.defineProperty(exports, '__esModule', {
	value: true
});
var win = window,
    iosPlayer = {

	roads: new Array(4),

	pathPrefix: '',

	init: function init() {},

	play: function play(data) {

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

	stop: function stop(data) {

		var player = this,
		    roadNumber = data.road,
		    road = player.roads[roadNumber];

		if (road && road.release) {
			player.roads[roadNumber].stop();
			player.roads[roadNumber].release();
		}
	}

};

exports['default'] = iosPlayer;
module.exports = exports['default'];

},{}],29:[function(require,module,exports){
'use strict';
/*global window */

Object.defineProperty(exports, '__esModule', {
	value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _servicesInfo = require('./../services/info');

var _servicesInfo2 = _interopRequireDefault(_servicesInfo);

var win = window,
    webPlayer = {

	roads: undefined,

	pathPrefix: '',

	init: function init() {

		var player = this;

		player.roads = new Array(4).fill(new Audio());
	},

	play: function play(data) {

		var player = this,
		    roadNumber = data.road,
		    isLoop = data.isLoop,
		    sound = data.sound,
		    newAudio;

		player.stop(data);

		newAudio = new Audio();
		if (isLoop) {
			newAudio.addEventListener('ended', function () {
				if (_servicesInfo2['default'].get('music') === 'off') {
					return;
				}
				var audio = this;
				audio.currentTime = 0;
				audio.play();
			}, false);
		}

		newAudio.addEventListener('canplay', function () {
			if (_servicesInfo2['default'].get('music') === 'off') {
				return;
			}
			var audio = this;
			audio.play();
		});

		player.roads[roadNumber].src = '';
		player.roads[roadNumber] = newAudio;

		newAudio.src = player.pathPrefix + sound;
	},

	stop: function stop(data) {

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

exports['default'] = webPlayer;
module.exports = exports['default'];

},{"./../services/info":21}],30:[function(require,module,exports){
'use strict';
/*global window */

Object.defineProperty(exports, '__esModule', {
	value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _playerAndroid = require('./player-android');

var _playerAndroid2 = _interopRequireDefault(_playerAndroid);

var _playerIos = require('./player-ios');

var _playerIos2 = _interopRequireDefault(_playerIos);

var _playerWeb = require('./player-web');

var _playerWeb2 = _interopRequireDefault(_playerWeb);

var _servicesInfo = require('./../services/info');

var _servicesInfo2 = _interopRequireDefault(_servicesInfo);

var win = window,
    soundMaster = {

	init: function init() {

		var soundMaster = this;

		soundMaster.initPlayers();

		win.addEventListener('hashchange', soundMaster.playBgSound.bind(soundMaster), false);
	},

	roads: [{}, {}, {}, {}], // 4 roads

	initPlayers: function initPlayers() {

		var soundMaster = this,
		    isAndroidPlayer = win.AndAud_0,
		    isIosPlayer = win.Media,
		    // detect cordova Media
		player;

		if (isAndroidPlayer) {
			player = _playerAndroid2['default'];
		}

		if (isIosPlayer) {
			player = _playerIos2['default'];
		}

		player = player || _playerWeb2['default']; // get system player or use web player

		player.init();

		soundMaster.player = player;
	},

	getPlayer: function getPlayer() {
		return this.player;
	},

	playBgSound: function playBgSound() {

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

	getCurrentBgSound: function getCurrentBgSound() {

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

	play: function play(data) {

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

		if (_servicesInfo2['default'].get('music') === 'off') {
			return;
		}

		player.play(data);
	},

	stop: function stop(data) {

		var soundMaster = this,
		    player = soundMaster.getPlayer();

		player.stop(data);
	},

	stopBgSound: function stopBgSound() {

		var soundMaster = this,
		    state = soundMaster.roads[0]; // 0 is bg sound

		soundMaster.stop(state);
	},

	restoreBgSound: function restoreBgSound() {

		var soundMaster = this,
		    state = JSON.parse(JSON.stringify(soundMaster.roads[0])); // 0 is bg sound

		soundMaster.roads[0] = {}; // wipe previous state to force play sound

		soundMaster.play(state);
	}

};

soundMaster.init();

exports['default'] = soundMaster;
module.exports = exports['default'];

},{"./../services/info":21,"./player-android":27,"./player-ios":28,"./player-web":29}]},{},[18]);
