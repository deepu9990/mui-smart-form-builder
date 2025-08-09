'use strict';

var jsxRuntime = require('react/jsx-runtime');
var material = require('@mui/material');
var React = require('react');
var styles = require('@mui/material/styles');
var useMediaQuery = require('@mui/material/useMediaQuery');
var Typography = require('@mui/material/Typography');
var Fade = require('@mui/material/Fade');
var ReactDOM = require('react-dom');
var ButtonBase = require('@mui/material/ButtonBase');
var IconButton = require('@mui/material/IconButton');
var utils = require('@mui/material/utils');
var MuiTextField = require('@mui/material/TextField');
var MuiInputAdornment = require('@mui/material/InputAdornment');
var InputLabel = require('@mui/material/InputLabel');
var FormHelperText = require('@mui/material/FormHelperText');
var FormControl = require('@mui/material/FormControl');
var Grow = require('@mui/material/Grow');
var MuiPaper = require('@mui/material/Paper');
var MuiPopper = require('@mui/material/Popper');
var BaseFocusTrap = require('@mui/material/Unstable_TrapFocus');
var Button = require('@mui/material/Button');
var DialogActions = require('@mui/material/DialogActions');
var List = require('@mui/material/List');
var ListItem = require('@mui/material/ListItem');
var Chip = require('@mui/material/Chip');
var DialogContent = require('@mui/material/DialogContent');
var MuiDialog = require('@mui/material/Dialog');
var Divider = require('@mui/material/Divider');
var Tab = require('@mui/material/Tab');
var Tabs = require('@mui/material/Tabs');
var MenuItem = require('@mui/material/MenuItem');
var MenuList = require('@mui/material/MenuList');

function _interopNamespaceDefault(e) {
    var n = Object.create(null);
    if (e) {
        Object.keys(e).forEach(function (k) {
            if (k !== 'default') {
                var d = Object.getOwnPropertyDescriptor(e, k);
                Object.defineProperty(n, k, d.get ? d : {
                    enumerable: true,
                    get: function () { return e[k]; }
                });
            }
        });
    }
    n.default = e;
    return Object.freeze(n);
}

var React__namespace = /*#__PURE__*/_interopNamespaceDefault(React);

/**
 * Normalizes options to ensure consistent FieldOption format
 */
const normalizeOptions = (options) => {
    if (!options)
        return [];
    return options.map(option => {
        if (typeof option === 'string') {
            return { label: option, value: option };
        }
        return option;
    });
};
/**
 * Gets the display value for form fields
 */
const getDisplayValue = (value, type) => {
    if (value === null || value === undefined) {
        return type === 'multiCheckbox' ? [] : '';
    }
    switch (type) {
        case 'multiCheckbox':
            return Array.isArray(value) ? value : [];
        case 'checkbox':
            return Boolean(value);
        case 'switch':
            return Boolean(value);
        case 'slider':
            return Number(value) || 0;
        case 'number':
            return value === '' ? '' : Number(value);
        default:
            return value;
    }
};
/**
 * Validates if a field value is empty for required field validation
 */
const isFieldEmpty = (value, type) => {
    if (value === null || value === undefined)
        return true;
    switch (type) {
        case 'multiCheckbox':
            return !Array.isArray(value) || value.length === 0;
        case 'checkbox':
        case 'switch':
            return false; // These always have a boolean value
        case 'file':
            return !value || (value instanceof FileList && value.length === 0);
        default:
            return String(value).trim() === '';
    }
};
/**
 * Debounce function for search inputs
 */
const debounce = (func, wait) => {
    let timeout;
    return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => func(...args), wait);
    };
};

function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}

function _objectWithoutPropertiesLoose(r, e) {
  if (null == r) return {};
  var t = {};
  for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
    if (-1 !== e.indexOf(n)) continue;
    t[n] = r[n];
  }
  return t;
}

function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);}else for(f in e)e[f]&&(n&&(n+=" "),n+=f);return n}function clsx(){for(var e,t,f=0,n="",o=arguments.length;f<o;f++)(e=arguments[f])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

var propTypes = {exports: {}};

var reactIs$1 = {exports: {}};

var reactIs_production_min = {};

/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactIs_production_min;

function requireReactIs_production_min () {
	if (hasRequiredReactIs_production_min) return reactIs_production_min;
	hasRequiredReactIs_production_min = 1;
var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?
	Symbol.for("react.suspense_list"):60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.block"):60121,w=b?Symbol.for("react.fundamental"):60117,x=b?Symbol.for("react.responder"):60118,y=b?Symbol.for("react.scope"):60119;
	function z(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case t:case r:case h:return a;default:return u}}case d:return u}}}function A(a){return z(a)===m}reactIs_production_min.AsyncMode=l;reactIs_production_min.ConcurrentMode=m;reactIs_production_min.ContextConsumer=k;reactIs_production_min.ContextProvider=h;reactIs_production_min.Element=c;reactIs_production_min.ForwardRef=n;reactIs_production_min.Fragment=e;reactIs_production_min.Lazy=t;reactIs_production_min.Memo=r;reactIs_production_min.Portal=d;
	reactIs_production_min.Profiler=g;reactIs_production_min.StrictMode=f;reactIs_production_min.Suspense=p;reactIs_production_min.isAsyncMode=function(a){return A(a)||z(a)===l};reactIs_production_min.isConcurrentMode=A;reactIs_production_min.isContextConsumer=function(a){return z(a)===k};reactIs_production_min.isContextProvider=function(a){return z(a)===h};reactIs_production_min.isElement=function(a){return "object"===typeof a&&null!==a&&a.$$typeof===c};reactIs_production_min.isForwardRef=function(a){return z(a)===n};reactIs_production_min.isFragment=function(a){return z(a)===e};reactIs_production_min.isLazy=function(a){return z(a)===t};
	reactIs_production_min.isMemo=function(a){return z(a)===r};reactIs_production_min.isPortal=function(a){return z(a)===d};reactIs_production_min.isProfiler=function(a){return z(a)===g};reactIs_production_min.isStrictMode=function(a){return z(a)===f};reactIs_production_min.isSuspense=function(a){return z(a)===p};
	reactIs_production_min.isValidElementType=function(a){return "string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===w||a.$$typeof===x||a.$$typeof===y||a.$$typeof===v)};reactIs_production_min.typeOf=z;
	return reactIs_production_min;
}

var reactIs_development$1 = {};

/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactIs_development$1;

function requireReactIs_development$1 () {
	if (hasRequiredReactIs_development$1) return reactIs_development$1;
	hasRequiredReactIs_development$1 = 1;



	if (process.env.NODE_ENV !== "production") {
	  (function() {

	// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
	// nor polyfill, then a plain number is used for performance.
	var hasSymbol = typeof Symbol === 'function' && Symbol.for;
	var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
	var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
	var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
	var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
	var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
	var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
	var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
	// (unstable) APIs that have been removed. Can we remove the symbols?

	var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
	var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
	var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
	var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
	var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
	var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
	var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
	var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
	var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
	var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
	var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

	function isValidElementType(type) {
	  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
	  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
	}

	function typeOf(object) {
	  if (typeof object === 'object' && object !== null) {
	    var $$typeof = object.$$typeof;

	    switch ($$typeof) {
	      case REACT_ELEMENT_TYPE:
	        var type = object.type;

	        switch (type) {
	          case REACT_ASYNC_MODE_TYPE:
	          case REACT_CONCURRENT_MODE_TYPE:
	          case REACT_FRAGMENT_TYPE:
	          case REACT_PROFILER_TYPE:
	          case REACT_STRICT_MODE_TYPE:
	          case REACT_SUSPENSE_TYPE:
	            return type;

	          default:
	            var $$typeofType = type && type.$$typeof;

	            switch ($$typeofType) {
	              case REACT_CONTEXT_TYPE:
	              case REACT_FORWARD_REF_TYPE:
	              case REACT_LAZY_TYPE:
	              case REACT_MEMO_TYPE:
	              case REACT_PROVIDER_TYPE:
	                return $$typeofType;

	              default:
	                return $$typeof;
	            }

	        }

	      case REACT_PORTAL_TYPE:
	        return $$typeof;
	    }
	  }

	  return undefined;
	} // AsyncMode is deprecated along with isAsyncMode

	var AsyncMode = REACT_ASYNC_MODE_TYPE;
	var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
	var ContextConsumer = REACT_CONTEXT_TYPE;
	var ContextProvider = REACT_PROVIDER_TYPE;
	var Element = REACT_ELEMENT_TYPE;
	var ForwardRef = REACT_FORWARD_REF_TYPE;
	var Fragment = REACT_FRAGMENT_TYPE;
	var Lazy = REACT_LAZY_TYPE;
	var Memo = REACT_MEMO_TYPE;
	var Portal = REACT_PORTAL_TYPE;
	var Profiler = REACT_PROFILER_TYPE;
	var StrictMode = REACT_STRICT_MODE_TYPE;
	var Suspense = REACT_SUSPENSE_TYPE;
	var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

	function isAsyncMode(object) {
	  {
	    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
	      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

	      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
	    }
	  }

	  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
	}
	function isConcurrentMode(object) {
	  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
	}
	function isContextConsumer(object) {
	  return typeOf(object) === REACT_CONTEXT_TYPE;
	}
	function isContextProvider(object) {
	  return typeOf(object) === REACT_PROVIDER_TYPE;
	}
	function isElement(object) {
	  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
	}
	function isForwardRef(object) {
	  return typeOf(object) === REACT_FORWARD_REF_TYPE;
	}
	function isFragment(object) {
	  return typeOf(object) === REACT_FRAGMENT_TYPE;
	}
	function isLazy(object) {
	  return typeOf(object) === REACT_LAZY_TYPE;
	}
	function isMemo(object) {
	  return typeOf(object) === REACT_MEMO_TYPE;
	}
	function isPortal(object) {
	  return typeOf(object) === REACT_PORTAL_TYPE;
	}
	function isProfiler(object) {
	  return typeOf(object) === REACT_PROFILER_TYPE;
	}
	function isStrictMode(object) {
	  return typeOf(object) === REACT_STRICT_MODE_TYPE;
	}
	function isSuspense(object) {
	  return typeOf(object) === REACT_SUSPENSE_TYPE;
	}

	reactIs_development$1.AsyncMode = AsyncMode;
	reactIs_development$1.ConcurrentMode = ConcurrentMode;
	reactIs_development$1.ContextConsumer = ContextConsumer;
	reactIs_development$1.ContextProvider = ContextProvider;
	reactIs_development$1.Element = Element;
	reactIs_development$1.ForwardRef = ForwardRef;
	reactIs_development$1.Fragment = Fragment;
	reactIs_development$1.Lazy = Lazy;
	reactIs_development$1.Memo = Memo;
	reactIs_development$1.Portal = Portal;
	reactIs_development$1.Profiler = Profiler;
	reactIs_development$1.StrictMode = StrictMode;
	reactIs_development$1.Suspense = Suspense;
	reactIs_development$1.isAsyncMode = isAsyncMode;
	reactIs_development$1.isConcurrentMode = isConcurrentMode;
	reactIs_development$1.isContextConsumer = isContextConsumer;
	reactIs_development$1.isContextProvider = isContextProvider;
	reactIs_development$1.isElement = isElement;
	reactIs_development$1.isForwardRef = isForwardRef;
	reactIs_development$1.isFragment = isFragment;
	reactIs_development$1.isLazy = isLazy;
	reactIs_development$1.isMemo = isMemo;
	reactIs_development$1.isPortal = isPortal;
	reactIs_development$1.isProfiler = isProfiler;
	reactIs_development$1.isStrictMode = isStrictMode;
	reactIs_development$1.isSuspense = isSuspense;
	reactIs_development$1.isValidElementType = isValidElementType;
	reactIs_development$1.typeOf = typeOf;
	  })();
	}
	return reactIs_development$1;
}

var hasRequiredReactIs;

function requireReactIs () {
	if (hasRequiredReactIs) return reactIs$1.exports;
	hasRequiredReactIs = 1;

	if (process.env.NODE_ENV === 'production') {
	  reactIs$1.exports = requireReactIs_production_min();
	} else {
	  reactIs$1.exports = requireReactIs_development$1();
	}
	return reactIs$1.exports;
}

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/

var objectAssign;
var hasRequiredObjectAssign;

function requireObjectAssign () {
	if (hasRequiredObjectAssign) return objectAssign;
	hasRequiredObjectAssign = 1;
	/* eslint-disable no-unused-vars */
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;

	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}

		return Object(val);
	}

	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}

			// Detect buggy property enumeration order in older V8 versions.

			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !==
					'abcdefghijklmnopqrst') {
				return false;
			}

			return true;
		} catch (err) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}

	objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;

		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);

			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}

			if (getOwnPropertySymbols) {
				symbols = getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}

		return to;
	};
	return objectAssign;
}

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret_1;
var hasRequiredReactPropTypesSecret;

function requireReactPropTypesSecret () {
	if (hasRequiredReactPropTypesSecret) return ReactPropTypesSecret_1;
	hasRequiredReactPropTypesSecret = 1;

	var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

	ReactPropTypesSecret_1 = ReactPropTypesSecret;
	return ReactPropTypesSecret_1;
}

var has;
var hasRequiredHas;

function requireHas () {
	if (hasRequiredHas) return has;
	hasRequiredHas = 1;
	has = Function.call.bind(Object.prototype.hasOwnProperty);
	return has;
}

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var checkPropTypes_1;
var hasRequiredCheckPropTypes;

function requireCheckPropTypes () {
	if (hasRequiredCheckPropTypes) return checkPropTypes_1;
	hasRequiredCheckPropTypes = 1;

	var printWarning = function() {};

	if (process.env.NODE_ENV !== 'production') {
	  var ReactPropTypesSecret = requireReactPropTypesSecret();
	  var loggedTypeFailures = {};
	  var has = requireHas();

	  printWarning = function(text) {
	    var message = 'Warning: ' + text;
	    if (typeof console !== 'undefined') {
	      console.error(message);
	    }
	    try {
	      // --- Welcome to debugging React ---
	      // This error was thrown as a convenience so that you can use this stack
	      // to find the callsite that caused this warning to fire.
	      throw new Error(message);
	    } catch (x) { /**/ }
	  };
	}

	/**
	 * Assert that the values match with the type specs.
	 * Error messages are memorized and will only be shown once.
	 *
	 * @param {object} typeSpecs Map of name to a ReactPropType
	 * @param {object} values Runtime values that need to be type-checked
	 * @param {string} location e.g. "prop", "context", "child context"
	 * @param {string} componentName Name of the component for error messages.
	 * @param {?Function} getStack Returns the component stack.
	 * @private
	 */
	function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
	  if (process.env.NODE_ENV !== 'production') {
	    for (var typeSpecName in typeSpecs) {
	      if (has(typeSpecs, typeSpecName)) {
	        var error;
	        // Prop type validation may throw. In case they do, we don't want to
	        // fail the render phase where it didn't fail before. So we log it.
	        // After these have been cleaned up, we'll let them throw.
	        try {
	          // This is intentionally an invariant that gets caught. It's the same
	          // behavior as without this statement except with a better message.
	          if (typeof typeSpecs[typeSpecName] !== 'function') {
	            var err = Error(
	              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
	              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' +
	              'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.'
	            );
	            err.name = 'Invariant Violation';
	            throw err;
	          }
	          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
	        } catch (ex) {
	          error = ex;
	        }
	        if (error && !(error instanceof Error)) {
	          printWarning(
	            (componentName || 'React class') + ': type specification of ' +
	            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
	            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
	            'You may have forgotten to pass an argument to the type checker ' +
	            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
	            'shape all require an argument).'
	          );
	        }
	        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
	          // Only monitor this failure once because there tends to be a lot of the
	          // same error.
	          loggedTypeFailures[error.message] = true;

	          var stack = getStack ? getStack() : '';

	          printWarning(
	            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
	          );
	        }
	      }
	    }
	  }
	}

	/**
	 * Resets warning cache when testing.
	 *
	 * @private
	 */
	checkPropTypes.resetWarningCache = function() {
	  if (process.env.NODE_ENV !== 'production') {
	    loggedTypeFailures = {};
	  }
	};

	checkPropTypes_1 = checkPropTypes;
	return checkPropTypes_1;
}

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var factoryWithTypeCheckers;
var hasRequiredFactoryWithTypeCheckers;

function requireFactoryWithTypeCheckers () {
	if (hasRequiredFactoryWithTypeCheckers) return factoryWithTypeCheckers;
	hasRequiredFactoryWithTypeCheckers = 1;

	var ReactIs = requireReactIs();
	var assign = requireObjectAssign();

	var ReactPropTypesSecret = requireReactPropTypesSecret();
	var has = requireHas();
	var checkPropTypes = requireCheckPropTypes();

	var printWarning = function() {};

	if (process.env.NODE_ENV !== 'production') {
	  printWarning = function(text) {
	    var message = 'Warning: ' + text;
	    if (typeof console !== 'undefined') {
	      console.error(message);
	    }
	    try {
	      // --- Welcome to debugging React ---
	      // This error was thrown as a convenience so that you can use this stack
	      // to find the callsite that caused this warning to fire.
	      throw new Error(message);
	    } catch (x) {}
	  };
	}

	function emptyFunctionThatReturnsNull() {
	  return null;
	}

	factoryWithTypeCheckers = function(isValidElement, throwOnDirectAccess) {
	  /* global Symbol */
	  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
	  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

	  /**
	   * Returns the iterator method function contained on the iterable object.
	   *
	   * Be sure to invoke the function with the iterable as context:
	   *
	   *     var iteratorFn = getIteratorFn(myIterable);
	   *     if (iteratorFn) {
	   *       var iterator = iteratorFn.call(myIterable);
	   *       ...
	   *     }
	   *
	   * @param {?object} maybeIterable
	   * @return {?function}
	   */
	  function getIteratorFn(maybeIterable) {
	    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
	    if (typeof iteratorFn === 'function') {
	      return iteratorFn;
	    }
	  }

	  /**
	   * Collection of methods that allow declaration and validation of props that are
	   * supplied to React components. Example usage:
	   *
	   *   var Props = require('ReactPropTypes');
	   *   var MyArticle = React.createClass({
	   *     propTypes: {
	   *       // An optional string prop named "description".
	   *       description: Props.string,
	   *
	   *       // A required enum prop named "category".
	   *       category: Props.oneOf(['News','Photos']).isRequired,
	   *
	   *       // A prop named "dialog" that requires an instance of Dialog.
	   *       dialog: Props.instanceOf(Dialog).isRequired
	   *     },
	   *     render: function() { ... }
	   *   });
	   *
	   * A more formal specification of how these methods are used:
	   *
	   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
	   *   decl := ReactPropTypes.{type}(.isRequired)?
	   *
	   * Each and every declaration produces a function with the same signature. This
	   * allows the creation of custom validation functions. For example:
	   *
	   *  var MyLink = React.createClass({
	   *    propTypes: {
	   *      // An optional string or URI prop named "href".
	   *      href: function(props, propName, componentName) {
	   *        var propValue = props[propName];
	   *        if (propValue != null && typeof propValue !== 'string' &&
	   *            !(propValue instanceof URI)) {
	   *          return new Error(
	   *            'Expected a string or an URI for ' + propName + ' in ' +
	   *            componentName
	   *          );
	   *        }
	   *      }
	   *    },
	   *    render: function() {...}
	   *  });
	   *
	   * @internal
	   */

	  var ANONYMOUS = '<<anonymous>>';

	  // Important!
	  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
	  var ReactPropTypes = {
	    array: createPrimitiveTypeChecker('array'),
	    bigint: createPrimitiveTypeChecker('bigint'),
	    bool: createPrimitiveTypeChecker('boolean'),
	    func: createPrimitiveTypeChecker('function'),
	    number: createPrimitiveTypeChecker('number'),
	    object: createPrimitiveTypeChecker('object'),
	    string: createPrimitiveTypeChecker('string'),
	    symbol: createPrimitiveTypeChecker('symbol'),

	    any: createAnyTypeChecker(),
	    arrayOf: createArrayOfTypeChecker,
	    element: createElementTypeChecker(),
	    elementType: createElementTypeTypeChecker(),
	    instanceOf: createInstanceTypeChecker,
	    node: createNodeChecker(),
	    objectOf: createObjectOfTypeChecker,
	    oneOf: createEnumTypeChecker,
	    oneOfType: createUnionTypeChecker,
	    shape: createShapeTypeChecker,
	    exact: createStrictShapeTypeChecker,
	  };

	  /**
	   * inlined Object.is polyfill to avoid requiring consumers ship their own
	   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
	   */
	  /*eslint-disable no-self-compare*/
	  function is(x, y) {
	    // SameValue algorithm
	    if (x === y) {
	      // Steps 1-5, 7-10
	      // Steps 6.b-6.e: +0 != -0
	      return x !== 0 || 1 / x === 1 / y;
	    } else {
	      // Step 6.a: NaN == NaN
	      return x !== x && y !== y;
	    }
	  }
	  /*eslint-enable no-self-compare*/

	  /**
	   * We use an Error-like object for backward compatibility as people may call
	   * PropTypes directly and inspect their output. However, we don't use real
	   * Errors anymore. We don't inspect their stack anyway, and creating them
	   * is prohibitively expensive if they are created too often, such as what
	   * happens in oneOfType() for any type before the one that matched.
	   */
	  function PropTypeError(message, data) {
	    this.message = message;
	    this.data = data && typeof data === 'object' ? data: {};
	    this.stack = '';
	  }
	  // Make `instanceof Error` still work for returned errors.
	  PropTypeError.prototype = Error.prototype;

	  function createChainableTypeChecker(validate) {
	    if (process.env.NODE_ENV !== 'production') {
	      var manualPropTypeCallCache = {};
	      var manualPropTypeWarningCount = 0;
	    }
	    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
	      componentName = componentName || ANONYMOUS;
	      propFullName = propFullName || propName;

	      if (secret !== ReactPropTypesSecret) {
	        if (throwOnDirectAccess) {
	          // New behavior only for users of `prop-types` package
	          var err = new Error(
	            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
	            'Use `PropTypes.checkPropTypes()` to call them. ' +
	            'Read more at http://fb.me/use-check-prop-types'
	          );
	          err.name = 'Invariant Violation';
	          throw err;
	        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
	          // Old behavior for people using React.PropTypes
	          var cacheKey = componentName + ':' + propName;
	          if (
	            !manualPropTypeCallCache[cacheKey] &&
	            // Avoid spamming the console because they are often not actionable except for lib authors
	            manualPropTypeWarningCount < 3
	          ) {
	            printWarning(
	              'You are manually calling a React.PropTypes validation ' +
	              'function for the `' + propFullName + '` prop on `' + componentName + '`. This is deprecated ' +
	              'and will throw in the standalone `prop-types` package. ' +
	              'You may be seeing this warning due to a third-party PropTypes ' +
	              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
	            );
	            manualPropTypeCallCache[cacheKey] = true;
	            manualPropTypeWarningCount++;
	          }
	        }
	      }
	      if (props[propName] == null) {
	        if (isRequired) {
	          if (props[propName] === null) {
	            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
	          }
	          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
	        }
	        return null;
	      } else {
	        return validate(props, propName, componentName, location, propFullName);
	      }
	    }

	    var chainedCheckType = checkType.bind(null, false);
	    chainedCheckType.isRequired = checkType.bind(null, true);

	    return chainedCheckType;
	  }

	  function createPrimitiveTypeChecker(expectedType) {
	    function validate(props, propName, componentName, location, propFullName, secret) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== expectedType) {
	        // `propValue` being instance of, say, date/regexp, pass the 'object'
	        // check, but we can offer a more precise error message here rather than
	        // 'of type `object`'.
	        var preciseType = getPreciseType(propValue);

	        return new PropTypeError(
	          'Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'),
	          {expectedType: expectedType}
	        );
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createAnyTypeChecker() {
	    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
	  }

	  function createArrayOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (typeof typeChecker !== 'function') {
	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
	      }
	      var propValue = props[propName];
	      if (!Array.isArray(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
	      }
	      for (var i = 0; i < propValue.length; i++) {
	        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
	        if (error instanceof Error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createElementTypeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      if (!isValidElement(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createElementTypeTypeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      if (!ReactIs.isValidElementType(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createInstanceTypeChecker(expectedClass) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!(props[propName] instanceof expectedClass)) {
	        var expectedClassName = expectedClass.name || ANONYMOUS;
	        var actualClassName = getClassName(props[propName]);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createEnumTypeChecker(expectedValues) {
	    if (!Array.isArray(expectedValues)) {
	      if (process.env.NODE_ENV !== 'production') {
	        if (arguments.length > 1) {
	          printWarning(
	            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
	            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
	          );
	        } else {
	          printWarning('Invalid argument supplied to oneOf, expected an array.');
	        }
	      }
	      return emptyFunctionThatReturnsNull;
	    }

	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      for (var i = 0; i < expectedValues.length; i++) {
	        if (is(propValue, expectedValues[i])) {
	          return null;
	        }
	      }

	      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
	        var type = getPreciseType(value);
	        if (type === 'symbol') {
	          return String(value);
	        }
	        return value;
	      });
	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createObjectOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (typeof typeChecker !== 'function') {
	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
	      }
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
	      }
	      for (var key in propValue) {
	        if (has(propValue, key)) {
	          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	          if (error instanceof Error) {
	            return error;
	          }
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createUnionTypeChecker(arrayOfTypeCheckers) {
	    if (!Array.isArray(arrayOfTypeCheckers)) {
	      process.env.NODE_ENV !== 'production' ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
	      return emptyFunctionThatReturnsNull;
	    }

	    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	      var checker = arrayOfTypeCheckers[i];
	      if (typeof checker !== 'function') {
	        printWarning(
	          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
	          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
	        );
	        return emptyFunctionThatReturnsNull;
	      }
	    }

	    function validate(props, propName, componentName, location, propFullName) {
	      var expectedTypes = [];
	      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	        var checker = arrayOfTypeCheckers[i];
	        var checkerResult = checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
	        if (checkerResult == null) {
	          return null;
	        }
	        if (checkerResult.data && has(checkerResult.data, 'expectedType')) {
	          expectedTypes.push(checkerResult.data.expectedType);
	        }
	      }
	      var expectedTypesMessage = (expectedTypes.length > 0) ? ', expected one of type [' + expectedTypes.join(', ') + ']': '';
	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`' + expectedTypesMessage + '.'));
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createNodeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!isNode(props[propName])) {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function invalidValidatorError(componentName, location, propFullName, key, type) {
	    return new PropTypeError(
	      (componentName || 'React class') + ': ' + location + ' type `' + propFullName + '.' + key + '` is invalid; ' +
	      'it must be a function, usually from the `prop-types` package, but received `' + type + '`.'
	    );
	  }

	  function createShapeTypeChecker(shapeTypes) {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
	      }
	      for (var key in shapeTypes) {
	        var checker = shapeTypes[key];
	        if (typeof checker !== 'function') {
	          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
	        }
	        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	        if (error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createStrictShapeTypeChecker(shapeTypes) {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
	      }
	      // We need to check all keys in case some are required but missing from props.
	      var allKeys = assign({}, props[propName], shapeTypes);
	      for (var key in allKeys) {
	        var checker = shapeTypes[key];
	        if (has(shapeTypes, key) && typeof checker !== 'function') {
	          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
	        }
	        if (!checker) {
	          return new PropTypeError(
	            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
	            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
	            '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  ')
	          );
	        }
	        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	        if (error) {
	          return error;
	        }
	      }
	      return null;
	    }

	    return createChainableTypeChecker(validate);
	  }

	  function isNode(propValue) {
	    switch (typeof propValue) {
	      case 'number':
	      case 'string':
	      case 'undefined':
	        return true;
	      case 'boolean':
	        return !propValue;
	      case 'object':
	        if (Array.isArray(propValue)) {
	          return propValue.every(isNode);
	        }
	        if (propValue === null || isValidElement(propValue)) {
	          return true;
	        }

	        var iteratorFn = getIteratorFn(propValue);
	        if (iteratorFn) {
	          var iterator = iteratorFn.call(propValue);
	          var step;
	          if (iteratorFn !== propValue.entries) {
	            while (!(step = iterator.next()).done) {
	              if (!isNode(step.value)) {
	                return false;
	              }
	            }
	          } else {
	            // Iterator will provide entry [k,v] tuples rather than values.
	            while (!(step = iterator.next()).done) {
	              var entry = step.value;
	              if (entry) {
	                if (!isNode(entry[1])) {
	                  return false;
	                }
	              }
	            }
	          }
	        } else {
	          return false;
	        }

	        return true;
	      default:
	        return false;
	    }
	  }

	  function isSymbol(propType, propValue) {
	    // Native Symbol.
	    if (propType === 'symbol') {
	      return true;
	    }

	    // falsy value can't be a Symbol
	    if (!propValue) {
	      return false;
	    }

	    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
	    if (propValue['@@toStringTag'] === 'Symbol') {
	      return true;
	    }

	    // Fallback for non-spec compliant Symbols which are polyfilled.
	    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
	      return true;
	    }

	    return false;
	  }

	  // Equivalent of `typeof` but with special handling for array and regexp.
	  function getPropType(propValue) {
	    var propType = typeof propValue;
	    if (Array.isArray(propValue)) {
	      return 'array';
	    }
	    if (propValue instanceof RegExp) {
	      // Old webkits (at least until Android 4.0) return 'function' rather than
	      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
	      // passes PropTypes.object.
	      return 'object';
	    }
	    if (isSymbol(propType, propValue)) {
	      return 'symbol';
	    }
	    return propType;
	  }

	  // This handles more types than `getPropType`. Only used for error messages.
	  // See `createPrimitiveTypeChecker`.
	  function getPreciseType(propValue) {
	    if (typeof propValue === 'undefined' || propValue === null) {
	      return '' + propValue;
	    }
	    var propType = getPropType(propValue);
	    if (propType === 'object') {
	      if (propValue instanceof Date) {
	        return 'date';
	      } else if (propValue instanceof RegExp) {
	        return 'regexp';
	      }
	    }
	    return propType;
	  }

	  // Returns a string that is postfixed to a warning about an invalid type.
	  // For example, "undefined" or "of type array"
	  function getPostfixForTypeWarning(value) {
	    var type = getPreciseType(value);
	    switch (type) {
	      case 'array':
	      case 'object':
	        return 'an ' + type;
	      case 'boolean':
	      case 'date':
	      case 'regexp':
	        return 'a ' + type;
	      default:
	        return type;
	    }
	  }

	  // Returns class name of the object, if any.
	  function getClassName(propValue) {
	    if (!propValue.constructor || !propValue.constructor.name) {
	      return ANONYMOUS;
	    }
	    return propValue.constructor.name;
	  }

	  ReactPropTypes.checkPropTypes = checkPropTypes;
	  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
	  ReactPropTypes.PropTypes = ReactPropTypes;

	  return ReactPropTypes;
	};
	return factoryWithTypeCheckers;
}

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var factoryWithThrowingShims;
var hasRequiredFactoryWithThrowingShims;

function requireFactoryWithThrowingShims () {
	if (hasRequiredFactoryWithThrowingShims) return factoryWithThrowingShims;
	hasRequiredFactoryWithThrowingShims = 1;

	var ReactPropTypesSecret = requireReactPropTypesSecret();

	function emptyFunction() {}
	function emptyFunctionWithReset() {}
	emptyFunctionWithReset.resetWarningCache = emptyFunction;

	factoryWithThrowingShims = function() {
	  function shim(props, propName, componentName, location, propFullName, secret) {
	    if (secret === ReactPropTypesSecret) {
	      // It is still safe when called from React.
	      return;
	    }
	    var err = new Error(
	      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
	      'Use PropTypes.checkPropTypes() to call them. ' +
	      'Read more at http://fb.me/use-check-prop-types'
	    );
	    err.name = 'Invariant Violation';
	    throw err;
	  }	  shim.isRequired = shim;
	  function getShim() {
	    return shim;
	  }	  // Important!
	  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
	  var ReactPropTypes = {
	    array: shim,
	    bigint: shim,
	    bool: shim,
	    func: shim,
	    number: shim,
	    object: shim,
	    string: shim,
	    symbol: shim,

	    any: shim,
	    arrayOf: getShim,
	    element: shim,
	    elementType: shim,
	    instanceOf: getShim,
	    node: shim,
	    objectOf: getShim,
	    oneOf: getShim,
	    oneOfType: getShim,
	    shape: getShim,
	    exact: getShim,

	    checkPropTypes: emptyFunctionWithReset,
	    resetWarningCache: emptyFunction
	  };

	  ReactPropTypes.PropTypes = ReactPropTypes;

	  return ReactPropTypes;
	};
	return factoryWithThrowingShims;
}

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (process.env.NODE_ENV !== 'production') {
  var ReactIs = requireReactIs();

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  propTypes.exports = requireFactoryWithTypeCheckers()(ReactIs.isElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  propTypes.exports = requireFactoryWithThrowingShims()();
}

var propTypesExports = propTypes.exports;
var PropTypes = /*@__PURE__*/getDefaultExportFromCjs(propTypesExports);

/* eslint no-restricted-syntax: 0, prefer-template: 0, guard-for-in: 0
   ---
   These rules are preventing the performance optimizations below.
 */

/**
 * Compose classes from multiple sources.
 *
 * @example
 * ```tsx
 * const slots = {
 *  root: ['root', 'primary'],
 *  label: ['label'],
 * };
 *
 * const getUtilityClass = (slot) => `MuiButton-${slot}`;
 *
 * const classes = {
 *   root: 'my-root-class',
 * };
 *
 * const output = composeClasses(slots, getUtilityClass, classes);
 * // {
 * //   root: 'MuiButton-root MuiButton-primary my-root-class',
 * //   label: 'MuiButton-label',
 * // }
 * ```
 *
 * @param slots a list of classes for each possible slot
 * @param getUtilityClass a function to resolve the class based on the slot name
 * @param classes the input classes from props
 * @returns the resolved classes for all slots
 */
function composeClasses(slots, getUtilityClass, classes = undefined) {
  const output = {};
  for (const slotName in slots) {
    const slot = slots[slotName];
    let buffer = '';
    let start = true;
    for (let i = 0; i < slot.length; i += 1) {
      const value = slot[i];
      if (value) {
        buffer += (start === true ? '' : ' ') + getUtilityClass(value);
        start = false;
        if (classes && classes[value]) {
          buffer += ' ' + classes[value];
        }
      }
    }
    output[slotName] = buffer;
  }
  return output;
}

let globalId = 0;

// TODO React 17: Remove `useGlobalId` once React 17 support is removed
function useGlobalId(idOverride) {
  const [defaultId, setDefaultId] = React__namespace.useState(idOverride);
  const id = idOverride || defaultId;
  React__namespace.useEffect(() => {
    if (defaultId == null) {
      // Fallback to this default id when possible.
      // Use the incrementing value for client-side rendering only.
      // We can't use it server-side.
      // If you want to use random values please consider the Birthday Problem: https://en.wikipedia.org/wiki/Birthday_problem
      globalId += 1;
      setDefaultId(`mui-${globalId}`);
    }
  }, [defaultId]);
  return id;
}

// See https://github.com/mui/material-ui/issues/41190#issuecomment-2040873379 for why
const safeReact = {
  ...React__namespace
};
const maybeReactUseId = safeReact.useId;

/**
 *
 * @example <div id={useId()} />
 * @param idOverride
 * @returns {string}
 */
function useId(idOverride) {
  // React.useId() is only available from React 17.0.0.
  if (maybeReactUseId !== undefined) {
    const reactId = maybeReactUseId();
    return idOverride ?? reactId;
  }

  // TODO: uncomment once we enable eslint-plugin-react-compiler // eslint-disable-next-line react-compiler/react-compiler
  // eslint-disable-next-line react-hooks/rules-of-hooks -- `React.useId` is invariant at runtime.
  return useGlobalId(idOverride);
}

const getPickersLocalization = pickersTranslations => {
  return {
    components: {
      MuiLocalizationProvider: {
        defaultProps: {
          localeText: _extends({}, pickersTranslations)
        }
      }
    }
  };
};

// This object is not Partial<PickersLocaleText> because it is the default values

const enUSPickers = {
  // Calendar navigation
  previousMonth: 'Previous month',
  nextMonth: 'Next month',
  // View navigation
  openPreviousView: 'Open previous view',
  openNextView: 'Open next view',
  calendarViewSwitchingButtonAriaLabel: view => view === 'year' ? 'year view is open, switch to calendar view' : 'calendar view is open, switch to year view',
  // DateRange labels
  start: 'Start',
  end: 'End',
  startDate: 'Start date',
  startTime: 'Start time',
  endDate: 'End date',
  endTime: 'End time',
  // Action bar
  cancelButtonLabel: 'Cancel',
  clearButtonLabel: 'Clear',
  okButtonLabel: 'OK',
  todayButtonLabel: 'Today',
  nextStepButtonLabel: 'Next',
  // Toolbar titles
  datePickerToolbarTitle: 'Select date',
  dateTimePickerToolbarTitle: 'Select date & time',
  timePickerToolbarTitle: 'Select time',
  dateRangePickerToolbarTitle: 'Select date range',
  timeRangePickerToolbarTitle: 'Select time range',
  // Clock labels
  clockLabelText: (view, formattedTime) => `Select ${view}. ${!formattedTime ? 'No time selected' : `Selected time is ${formattedTime}`}`,
  hoursClockNumberText: hours => `${hours} hours`,
  minutesClockNumberText: minutes => `${minutes} minutes`,
  secondsClockNumberText: seconds => `${seconds} seconds`,
  // Digital clock labels
  selectViewText: view => `Select ${view}`,
  // Calendar labels
  calendarWeekNumberHeaderLabel: 'Week number',
  calendarWeekNumberHeaderText: '#',
  calendarWeekNumberAriaLabelText: weekNumber => `Week ${weekNumber}`,
  calendarWeekNumberText: weekNumber => `${weekNumber}`,
  // Open Picker labels
  openDatePickerDialogue: formattedDate => formattedDate ? `Choose date, selected date is ${formattedDate}` : 'Choose date',
  openTimePickerDialogue: formattedTime => formattedTime ? `Choose time, selected time is ${formattedTime}` : 'Choose time',
  openRangePickerDialogue: formattedRange => formattedRange ? `Choose range, selected range is ${formattedRange}` : 'Choose range',
  fieldClearLabel: 'Clear',
  // Table labels
  timeTableLabel: 'pick time',
  dateTableLabel: 'pick date',
  // Field section placeholders
  fieldYearPlaceholder: params => 'Y'.repeat(params.digitAmount),
  fieldMonthPlaceholder: params => params.contentType === 'letter' ? 'MMMM' : 'MM',
  fieldDayPlaceholder: () => 'DD',
  fieldWeekDayPlaceholder: params => params.contentType === 'letter' ? 'EEEE' : 'EE',
  fieldHoursPlaceholder: () => 'hh',
  fieldMinutesPlaceholder: () => 'mm',
  fieldSecondsPlaceholder: () => 'ss',
  fieldMeridiemPlaceholder: () => 'aa',
  // View names
  year: 'Year',
  month: 'Month',
  day: 'Day',
  weekDay: 'Week day',
  hours: 'Hours',
  minutes: 'Minutes',
  seconds: 'Seconds',
  meridiem: 'Meridiem',
  // Common
  empty: 'Empty'
};
const DEFAULT_LOCALE = enUSPickers;
getPickersLocalization(enUSPickers);

const _excluded$L = ["localeText"];
const PickerAdapterContext = /*#__PURE__*/React__namespace.createContext(null);

// TODO v9: Remove this public export
/**
 * The context that provides the date adapter and default dates to the pickers.
 * @deprecated Use `usePickersAdapter` hook if you need access to the adapter instead.
 */
if (process.env.NODE_ENV !== "production") PickerAdapterContext.displayName = "PickerAdapterContext";
/**
 * Demos:
 *
 * - [Date format and localization](https://mui.com/x/react-date-pickers/adapters-locale/)
 * - [Calendar systems](https://mui.com/x/react-date-pickers/calendar-systems/)
 * - [Translated components](https://mui.com/x/react-date-pickers/localization/)
 * - [UTC and timezones](https://mui.com/x/react-date-pickers/timezone/)
 *
 * API:
 *
 * - [LocalizationProvider API](https://mui.com/x/api/date-pickers/localization-provider/)
 */
const LocalizationProvider = function LocalizationProvider(inProps) {
  const {
      localeText: inLocaleText
    } = inProps,
    otherInProps = _objectWithoutPropertiesLoose(inProps, _excluded$L);
  const {
    adapter: parentAdapter,
    localeText: parentLocaleText
  } = React__namespace.useContext(PickerAdapterContext) ?? {
    utils: undefined,
    adapter: undefined,
    localeText: undefined
  };
  const props = styles.useThemeProps({
    // We don't want to pass the `localeText` prop to the theme, that way it will always return the theme value,
    // We will then merge this theme value with our value manually
    props: otherInProps,
    name: 'MuiLocalizationProvider'
  });
  const {
    children,
    dateAdapter: DateAdapter,
    dateFormats,
    dateLibInstance,
    adapterLocale,
    localeText: themeLocaleText
  } = props;
  const localeText = React__namespace.useMemo(() => _extends({}, themeLocaleText, parentLocaleText, inLocaleText), [themeLocaleText, parentLocaleText, inLocaleText]);
  const adapter = React__namespace.useMemo(() => {
    if (!DateAdapter) {
      if (parentAdapter) {
        return parentAdapter;
      }
      return null;
    }
    const dateAdapter = new DateAdapter({
      locale: adapterLocale,
      formats: dateFormats,
      instance: dateLibInstance
    });
    if (!dateAdapter.isMUIAdapter) {
      throw new Error(['MUI X: The date adapter should be imported from `@mui/x-date-pickers` or `@mui/x-date-pickers-pro`, not from `@date-io`', "For example, `import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'` instead of `import AdapterDayjs from '@date-io/dayjs'`", 'More information on the installation documentation: https://mui.com/x/react-date-pickers/quickstart/#installation'].join(`\n`));
    }
    return dateAdapter;
  }, [DateAdapter, adapterLocale, dateFormats, dateLibInstance, parentAdapter]);
  const defaultDates = React__namespace.useMemo(() => {
    if (!adapter) {
      return null;
    }
    return {
      minDate: adapter.date('1900-01-01T00:00:00.000'),
      maxDate: adapter.date('2099-12-31T00:00:00.000')
    };
  }, [adapter]);
  const contextValue = React__namespace.useMemo(() => {
    return {
      utils: adapter,
      adapter,
      defaultDates,
      localeText
    };
  }, [defaultDates, adapter, localeText]);
  return /*#__PURE__*/jsxRuntime.jsx(PickerAdapterContext.Provider, {
    value: contextValue,
    children: children
  });
};
if (process.env.NODE_ENV !== "production") LocalizationProvider.displayName = "LocalizationProvider";
process.env.NODE_ENV !== "production" ? LocalizationProvider.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * Locale for the date library you are using
   */
  adapterLocale: PropTypes.any,
  children: PropTypes.node,
  /**
   * Date library adapter class function.
   * @see See the localization provider {@link https://mui.com/x/react-date-pickers/quickstart/#integrate-provider-and-adapter date adapter setup section} for more details.
   */
  dateAdapter: PropTypes.func,
  /**
   * Formats that are used for any child pickers
   */
  dateFormats: PropTypes.shape({
    dayOfMonth: PropTypes.string,
    dayOfMonthFull: PropTypes.string,
    fullDate: PropTypes.string,
    fullTime12h: PropTypes.string,
    fullTime24h: PropTypes.string,
    hours12h: PropTypes.string,
    hours24h: PropTypes.string,
    keyboardDate: PropTypes.string,
    keyboardDateTime12h: PropTypes.string,
    keyboardDateTime24h: PropTypes.string,
    meridiem: PropTypes.string,
    minutes: PropTypes.string,
    month: PropTypes.string,
    monthShort: PropTypes.string,
    normalDate: PropTypes.string,
    normalDateWithWeekday: PropTypes.string,
    seconds: PropTypes.string,
    shortDate: PropTypes.string,
    weekday: PropTypes.string,
    weekdayShort: PropTypes.string,
    year: PropTypes.string
  }),
  /**
   * Date library instance you are using, if it has some global overrides
   * ```jsx
   * dateLibInstance={momentTimeZone}
   * ```
   */
  dateLibInstance: PropTypes.any,
  /**
   * Locale for components texts
   */
  localeText: PropTypes.object
} : void 0;

const useLocalizationContext = () => {
  const localization = React__namespace.useContext(PickerAdapterContext);
  if (localization === null) {
    throw new Error(['MUI X: Can not find the date and time pickers localization context.', 'It looks like you forgot to wrap your component in LocalizationProvider.', 'This can also happen if you are bundling multiple versions of the `@mui/x-date-pickers` package'].join('\n'));
  }
  if (localization.adapter === null) {
    throw new Error(['MUI X: Can not find the date and time pickers adapter from its localization context.', 'It looks like you forgot to pass a `dateAdapter` to your LocalizationProvider.'].join('\n'));
  }
  const localeText = React__namespace.useMemo(() => _extends({}, DEFAULT_LOCALE, localization.localeText), [localization.localeText]);
  return React__namespace.useMemo(() => _extends({}, localization, {
    localeText
  }), [localization, localeText]);
};
const usePickerAdapter = () => useLocalizationContext().adapter;

const usePickerTranslations = () => useLocalizationContext().localeText;

const DATE_VALIDATION_PROP_NAMES = ['disablePast', 'disableFuture', 'minDate', 'maxDate', 'shouldDisableDate', 'shouldDisableMonth', 'shouldDisableYear'];
const TIME_VALIDATION_PROP_NAMES = ['disablePast', 'disableFuture', 'minTime', 'maxTime', 'shouldDisableTime', 'minutesStep', 'ampm', 'disableIgnoringDatePartForTimeValidation'];
const DATE_TIME_VALIDATION_PROP_NAMES = ['minDateTime', 'maxDateTime'];
const VALIDATION_PROP_NAMES = [...DATE_VALIDATION_PROP_NAMES, ...TIME_VALIDATION_PROP_NAMES, ...DATE_TIME_VALIDATION_PROP_NAMES];
/**
 * Extract the validation props for the props received by a component.
 * Limit the risk of forgetting some of them and reduce the bundle size.
 */
const extractValidationProps = props => VALIDATION_PROP_NAMES.reduce((extractedProps, propName) => {
  if (props.hasOwnProperty(propName)) {
    extractedProps[propName] = props[propName];
  }
  return extractedProps;
}, {});

const SHARED_FIELD_INTERNAL_PROP_NAMES = ['value', 'defaultValue', 'referenceDate', 'format', 'formatDensity', 'onChange', 'timezone', 'onError', 'shouldRespectLeadingZeros', 'selectedSections', 'onSelectedSectionsChange', 'unstableFieldRef', 'unstableStartFieldRef', 'unstableEndFieldRef', 'enableAccessibleFieldDOMStructure', 'disabled', 'readOnly', 'dateSeparator', 'autoFocus', 'focused'];
/**
 * Split the props received by the field component into:
 * - `internalProps` which are used by the various hooks called by the field component.
 * - `forwardedProps` which are passed to the underlying component.
 * Note that some forwarded props might be used by the hooks as well.
 * For instance, hooks like `useDateField` need props like `onKeyDown` to merge the default event handler and the one provided by the application.
 * @template TProps, TValueType
 * @param {TProps} props The props received by the field component.
 * @param {TValueType} valueType The type of the field value ('date', 'time', or 'date-time').
 */
const useSplitFieldProps = (props, valueType) => {
  return React__namespace.useMemo(() => {
    const forwardedProps = _extends({}, props);
    const internalProps = {};
    const extractProp = propName => {
      if (forwardedProps.hasOwnProperty(propName)) {
        // @ts-ignore
        internalProps[propName] = forwardedProps[propName];
        delete forwardedProps[propName];
      }
    };
    SHARED_FIELD_INTERNAL_PROP_NAMES.forEach(extractProp);
    if (valueType === 'date') {
      DATE_VALIDATION_PROP_NAMES.forEach(extractProp);
    } else if (valueType === 'time') {
      TIME_VALIDATION_PROP_NAMES.forEach(extractProp);
    } else if (valueType === 'date-time') {
      DATE_VALIDATION_PROP_NAMES.forEach(extractProp);
      TIME_VALIDATION_PROP_NAMES.forEach(extractProp);
      DATE_TIME_VALIDATION_PROP_NAMES.forEach(extractProp);
    }
    return {
      forwardedProps,
      internalProps
    };
  }, [props, valueType]);
};

/**
 * Extract the internal props from the props received by the field component.
 * This makes sure that the internal props not defined in the props are not present in the result.
 */

const RtlContext = /*#__PURE__*/React__namespace.createContext();
process.env.NODE_ENV !== "production" ? {
  children: PropTypes.node,
  value: PropTypes.bool
} : void 0;
const useRtl = () => {
  const value = React__namespace.useContext(RtlContext);
  return value ?? false;
};

const areViewsEqual = (views, expectedViews) => {
  if (views.length !== expectedViews.length) {
    return false;
  }
  return expectedViews.every(expectedView => views.includes(expectedView));
};
const applyDefaultViewProps = ({
  openTo,
  defaultOpenTo,
  views,
  defaultViews
}) => {
  const viewsWithDefault = views ?? defaultViews;
  let openToWithDefault;
  if (openTo != null) {
    openToWithDefault = openTo;
  } else if (viewsWithDefault.includes(defaultOpenTo)) {
    openToWithDefault = defaultOpenTo;
  } else if (viewsWithDefault.length > 0) {
    openToWithDefault = viewsWithDefault[0];
  } else {
    throw new Error('MUI X: The `views` prop must contain at least one view.');
  }
  return {
    views: viewsWithDefault,
    openTo: openToWithDefault
  };
};

const mergeDateAndTime = (adapter, dateParam, timeParam) => {
  let mergedDate = dateParam;
  mergedDate = adapter.setHours(mergedDate, adapter.getHours(timeParam));
  mergedDate = adapter.setMinutes(mergedDate, adapter.getMinutes(timeParam));
  mergedDate = adapter.setSeconds(mergedDate, adapter.getSeconds(timeParam));
  mergedDate = adapter.setMilliseconds(mergedDate, adapter.getMilliseconds(timeParam));
  return mergedDate;
};
const findClosestEnabledDate = ({
  date,
  disableFuture,
  disablePast,
  maxDate,
  minDate,
  isDateDisabled,
  adapter,
  timezone
}) => {
  const today = mergeDateAndTime(adapter, adapter.date(undefined, timezone), date);
  if (disablePast && adapter.isBefore(minDate, today)) {
    minDate = today;
  }
  if (disableFuture && adapter.isAfter(maxDate, today)) {
    maxDate = today;
  }
  let forward = date;
  let backward = date;
  if (adapter.isBefore(date, minDate)) {
    forward = minDate;
    backward = null;
  }
  if (adapter.isAfter(date, maxDate)) {
    if (backward) {
      backward = maxDate;
    }
    forward = null;
  }
  while (forward || backward) {
    if (forward && adapter.isAfter(forward, maxDate)) {
      forward = null;
    }
    if (backward && adapter.isBefore(backward, minDate)) {
      backward = null;
    }
    if (forward) {
      if (!isDateDisabled(forward)) {
        return forward;
      }
      forward = adapter.addDays(forward, 1);
    }
    if (backward) {
      if (!isDateDisabled(backward)) {
        return backward;
      }
      backward = adapter.addDays(backward, -1);
    }
  }
  return null;
};
const replaceInvalidDateByNull = (adapter, value) => !adapter.isValid(value) ? null : value;
const applyDefaultDate = (adapter, value, defaultValue) => {
  if (value == null || !adapter.isValid(value)) {
    return defaultValue;
  }
  return value;
};
const areDatesEqual = (adapter, a, b) => {
  if (!adapter.isValid(a) && a != null && !adapter.isValid(b) && b != null) {
    return true;
  }
  return adapter.isEqual(a, b);
};
const getMonthsInYear = (adapter, year) => {
  const firstMonth = adapter.startOfYear(year);
  const months = [firstMonth];
  while (months.length < 12) {
    const prevMonth = months[months.length - 1];
    months.push(adapter.addMonths(prevMonth, 1));
  }
  return months;
};
const getTodayDate = (adapter, timezone, valueType) => valueType === 'date' ? adapter.startOfDay(adapter.date(undefined, timezone)) : adapter.date(undefined, timezone);
const formatMeridiem = (adapter, meridiem) => {
  const date = adapter.setHours(adapter.date(), meridiem === 'am' ? 2 : 14);
  return adapter.format(date, 'meridiem');
};
const DATE_VIEWS = ['year', 'month', 'day'];
const isDatePickerView = view => DATE_VIEWS.includes(view);
const resolveDateFormat = (adapter, {
  format,
  views
}, isInToolbar) => {
  if (format != null) {
    return format;
  }
  const formats = adapter.formats;
  if (areViewsEqual(views, ['year'])) {
    return formats.year;
  }
  if (areViewsEqual(views, ['month'])) {
    return formats.month;
  }
  if (areViewsEqual(views, ['day'])) {
    return formats.dayOfMonth;
  }
  if (areViewsEqual(views, ['month', 'year'])) {
    return `${formats.month} ${formats.year}`;
  }
  if (areViewsEqual(views, ['day', 'month'])) {
    return `${formats.month} ${formats.dayOfMonth}`;
  }
  if (isInToolbar) {
    // Little localization hack (Google is doing the same for android native pickers):
    // For english localization it is convenient to include weekday into the date "Mon, Jun 1".
    // For other locales using strings like "June 1", without weekday.
    return /en/.test(adapter.getCurrentLocaleCode()) ? formats.normalDateWithWeekday : formats.normalDate;
  }
  return formats.keyboardDate;
};
const getWeekdays = (adapter, date) => {
  const start = adapter.startOfWeek(date);
  return [0, 1, 2, 3, 4, 5, 6].map(diff => adapter.addDays(start, diff));
};

const getDateSectionConfigFromFormatToken = (adapter, formatToken) => {
  const config = adapter.formatTokenMap[formatToken];
  if (config == null) {
    throw new Error([`MUI X: The token "${formatToken}" is not supported by the Date and Time Pickers.`, 'Please try using another token or open an issue on https://github.com/mui/mui-x/issues/new/choose if you think it should be supported.'].join('\n'));
  }
  if (typeof config === 'string') {
    return {
      type: config,
      contentType: config === 'meridiem' ? 'letter' : 'digit',
      maxLength: undefined
    };
  }
  return {
    type: config.sectionType,
    contentType: config.contentType,
    maxLength: config.maxLength
  };
};
const getDaysInWeekStr = (adapter, format) => {
  const elements = [];
  const now = adapter.date(undefined, 'default');
  const startDate = adapter.startOfWeek(now);
  const endDate = adapter.endOfWeek(now);
  let current = startDate;
  while (adapter.isBefore(current, endDate)) {
    elements.push(current);
    current = adapter.addDays(current, 1);
  }
  return elements.map(weekDay => adapter.formatByString(weekDay, format));
};
const getLetterEditingOptions = (adapter, timezone, sectionType, format) => {
  switch (sectionType) {
    case 'month':
      {
        return getMonthsInYear(adapter, adapter.date(undefined, timezone)).map(month => adapter.formatByString(month, format));
      }
    case 'weekDay':
      {
        return getDaysInWeekStr(adapter, format);
      }
    case 'meridiem':
      {
        const now = adapter.date(undefined, timezone);
        return [adapter.startOfDay(now), adapter.endOfDay(now)].map(date => adapter.formatByString(date, format));
      }
    default:
      {
        return [];
      }
  }
};

// This format should be the same on all the adapters
// If some adapter does not respect this convention, then we will need to hardcode the format on each adapter.
const FORMAT_SECONDS_NO_LEADING_ZEROS = 's';
const NON_LOCALIZED_DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const getLocalizedDigits = adapter => {
  const today = adapter.date(undefined);
  const formattedZero = adapter.formatByString(adapter.setSeconds(today, 0), FORMAT_SECONDS_NO_LEADING_ZEROS);
  if (formattedZero === '0') {
    return NON_LOCALIZED_DIGITS;
  }
  return Array.from({
    length: 10
  }).map((_, index) => adapter.formatByString(adapter.setSeconds(today, index), FORMAT_SECONDS_NO_LEADING_ZEROS));
};
const removeLocalizedDigits = (valueStr, localizedDigits) => {
  if (localizedDigits[0] === '0') {
    return valueStr;
  }
  const digits = [];
  let currentFormattedDigit = '';
  for (let i = 0; i < valueStr.length; i += 1) {
    currentFormattedDigit += valueStr[i];
    const matchingDigitIndex = localizedDigits.indexOf(currentFormattedDigit);
    if (matchingDigitIndex > -1) {
      digits.push(matchingDigitIndex.toString());
      currentFormattedDigit = '';
    }
  }
  return digits.join('');
};
const applyLocalizedDigits = (valueStr, localizedDigits) => {
  if (localizedDigits[0] === '0') {
    return valueStr;
  }
  return valueStr.split('').map(char => localizedDigits[Number(char)]).join('');
};
const isStringNumber = (valueStr, localizedDigits) => {
  const nonLocalizedValueStr = removeLocalizedDigits(valueStr, localizedDigits);
  // `Number(' ')` returns `0` even if ' ' is not a valid number.
  return nonLocalizedValueStr !== ' ' && !Number.isNaN(Number(nonLocalizedValueStr));
};

/**
 * Make sure the value of a digit section have the right amount of leading zeros.
 * E.g.: `03` => `3`
 * Warning: Should only be called with non-localized digits. Call `removeLocalizedDigits` with your value if needed.
 */
const cleanLeadingZeros = (valueStr, size) => {
  // Remove the leading zeros and then add back as many as needed.
  return Number(valueStr).toString().padStart(size, '0');
};
const cleanDigitSectionValue = (adapter, value, sectionBoundaries, localizedDigits, section) => {
  if (process.env.NODE_ENV !== 'production') {
    if (section.type !== 'day' && section.contentType === 'digit-with-letter') {
      throw new Error([`MUI X: The token "${section.format}" is a digit format with letter in it.'
             This type of format is only supported for 'day' sections`].join('\n'));
    }
  }
  if (section.type === 'day' && section.contentType === 'digit-with-letter') {
    const date = adapter.setDate(sectionBoundaries.longestMonth, value);
    return adapter.formatByString(date, section.format);
  }

  // queryValue without leading `0` (`01` => `1`)
  let valueStr = value.toString();
  if (section.hasLeadingZerosInInput) {
    valueStr = cleanLeadingZeros(valueStr, section.maxLength);
  }
  return applyLocalizedDigits(valueStr, localizedDigits);
};
const getSectionVisibleValue = (section, target, localizedDigits) => {
  let value = section.value || section.placeholder;
  const hasLeadingZeros = target === 'non-input' ? section.hasLeadingZerosInFormat : section.hasLeadingZerosInInput;
  if (target === 'non-input' && section.hasLeadingZerosInInput && !section.hasLeadingZerosInFormat) {
    value = Number(removeLocalizedDigits(value, localizedDigits)).toString();
  }

  // In the input, we add an empty character at the end of each section without leading zeros.
  // This makes sure that `onChange` will always be fired.
  // Otherwise, when your input value equals `1/dd/yyyy` (format `M/DD/YYYY` on DayJs),
  // If you press `1`, on the first section, the new value is also `1/dd/yyyy`,
  // So the browser will not fire the input `onChange`.
  const shouldAddInvisibleSpace = ['input-rtl', 'input-ltr'].includes(target) && section.contentType === 'digit' && !hasLeadingZeros && value.length === 1;
  if (shouldAddInvisibleSpace) {
    value = `${value}\u200e`;
  }
  if (target === 'input-rtl') {
    value = `\u2068${value}\u2069`;
  }
  return value;
};
const changeSectionValueFormat = (adapter, valueStr, currentFormat, newFormat) => {
  if (process.env.NODE_ENV !== 'production') {
    if (getDateSectionConfigFromFormatToken(adapter, currentFormat).type === 'weekDay') {
      throw new Error("changeSectionValueFormat doesn't support week day formats");
    }
  }
  return adapter.formatByString(adapter.parse(valueStr, currentFormat), newFormat);
};
const isFourDigitYearFormat = (adapter, format) => adapter.formatByString(adapter.date(undefined, 'system'), format).length === 4;
const doesSectionFormatHaveLeadingZeros = (adapter, contentType, sectionType, format) => {
  if (contentType !== 'digit') {
    return false;
  }
  const now = adapter.date(undefined, 'default');
  switch (sectionType) {
    // We can't use `changeSectionValueFormat`, because  `adapter.parse('1', 'YYYY')` returns `1971` instead of `1`.
    case 'year':
      {
        // Remove once https://github.com/iamkun/dayjs/pull/2847 is merged and bump dayjs version
        if (adapter.lib === 'dayjs' && format === 'YY') {
          return true;
        }
        return adapter.formatByString(adapter.setYear(now, 1), format).startsWith('0');
      }
    case 'month':
      {
        return adapter.formatByString(adapter.startOfYear(now), format).length > 1;
      }
    case 'day':
      {
        return adapter.formatByString(adapter.startOfMonth(now), format).length > 1;
      }
    case 'weekDay':
      {
        return adapter.formatByString(adapter.startOfWeek(now), format).length > 1;
      }
    case 'hours':
      {
        return adapter.formatByString(adapter.setHours(now, 1), format).length > 1;
      }
    case 'minutes':
      {
        return adapter.formatByString(adapter.setMinutes(now, 1), format).length > 1;
      }
    case 'seconds':
      {
        return adapter.formatByString(adapter.setSeconds(now, 1), format).length > 1;
      }
    default:
      {
        throw new Error('Invalid section type');
      }
  }
};

/**
 * Some date libraries like `dayjs` don't support parsing from date with escaped characters.
 * To make sure that the parsing works, we are building a format and a date without any separator.
 */
const getDateFromDateSections = (adapter, sections, localizedDigits) => {
  // If we have both a day and a weekDay section,
  // Then we skip the weekDay in the parsing because libraries like dayjs can't parse complicated formats containing a weekDay.
  // dayjs(dayjs().format('dddd MMMM D YYYY'), 'dddd MMMM D YYYY')) // returns `Invalid Date` even if the format is valid.
  const shouldSkipWeekDays = sections.some(section => section.type === 'day');
  const sectionFormats = [];
  const sectionValues = [];
  for (let i = 0; i < sections.length; i += 1) {
    const section = sections[i];
    const shouldSkip = shouldSkipWeekDays && section.type === 'weekDay';
    if (!shouldSkip) {
      sectionFormats.push(section.format);
      sectionValues.push(getSectionVisibleValue(section, 'non-input', localizedDigits));
    }
  }
  const formatWithoutSeparator = sectionFormats.join(' ');
  const dateWithoutSeparatorStr = sectionValues.join(' ');
  return adapter.parse(dateWithoutSeparatorStr, formatWithoutSeparator);
};
const createDateStrForV7HiddenInputFromSections = sections => sections.map(section => {
  return `${section.startSeparator}${section.value || section.placeholder}${section.endSeparator}`;
}).join('');
const createDateStrForV6InputFromSections = (sections, localizedDigits, isRtl) => {
  const formattedSections = sections.map(section => {
    const dateValue = getSectionVisibleValue(section, isRtl ? 'input-rtl' : 'input-ltr', localizedDigits);
    return `${section.startSeparator}${dateValue}${section.endSeparator}`;
  });
  const dateStr = formattedSections.join('');
  if (!isRtl) {
    return dateStr;
  }

  // \u2066: start left-to-right isolation
  // \u2067: start right-to-left isolation
  // \u2068: start first strong character isolation
  // \u2069: pop isolation
  // wrap into an isolated group such that separators can split the string in smaller ones by adding \u2069\u2068
  return `\u2066${dateStr}\u2069`;
};
const getSectionsBoundaries = (adapter, localizedDigits, timezone) => {
  const today = adapter.date(undefined, timezone);
  const endOfYear = adapter.endOfYear(today);
  const endOfDay = adapter.endOfDay(today);
  const {
    maxDaysInMonth,
    longestMonth
  } = getMonthsInYear(adapter, today).reduce((acc, month) => {
    const daysInMonth = adapter.getDaysInMonth(month);
    if (daysInMonth > acc.maxDaysInMonth) {
      return {
        maxDaysInMonth: daysInMonth,
        longestMonth: month
      };
    }
    return acc;
  }, {
    maxDaysInMonth: 0,
    longestMonth: null
  });
  return {
    year: ({
      format
    }) => ({
      minimum: 0,
      maximum: isFourDigitYearFormat(adapter, format) ? 9999 : 99
    }),
    month: () => ({
      minimum: 1,
      // Assumption: All years have the same amount of months
      maximum: adapter.getMonth(endOfYear) + 1
    }),
    day: ({
      currentDate
    }) => ({
      minimum: 1,
      maximum: adapter.isValid(currentDate) ? adapter.getDaysInMonth(currentDate) : maxDaysInMonth,
      longestMonth: longestMonth
    }),
    weekDay: ({
      format,
      contentType
    }) => {
      if (contentType === 'digit') {
        const daysInWeek = getDaysInWeekStr(adapter, format).map(Number);
        return {
          minimum: Math.min(...daysInWeek),
          maximum: Math.max(...daysInWeek)
        };
      }
      return {
        minimum: 1,
        maximum: 7
      };
    },
    hours: ({
      format
    }) => {
      const lastHourInDay = adapter.getHours(endOfDay);
      const hasMeridiem = removeLocalizedDigits(adapter.formatByString(adapter.endOfDay(today), format), localizedDigits) !== lastHourInDay.toString();
      if (hasMeridiem) {
        return {
          minimum: 1,
          maximum: Number(removeLocalizedDigits(adapter.formatByString(adapter.startOfDay(today), format), localizedDigits))
        };
      }
      return {
        minimum: 0,
        maximum: lastHourInDay
      };
    },
    minutes: () => ({
      minimum: 0,
      // Assumption: All years have the same amount of minutes
      maximum: adapter.getMinutes(endOfDay)
    }),
    seconds: () => ({
      minimum: 0,
      // Assumption: All years have the same amount of seconds
      maximum: adapter.getSeconds(endOfDay)
    }),
    meridiem: () => ({
      minimum: 0,
      maximum: 1
    }),
    empty: () => ({
      minimum: 0,
      maximum: 0
    })
  };
};
let warnedOnceInvalidSection = false;
const validateSections = (sections, valueType) => {
  if (process.env.NODE_ENV !== 'production') {
    if (!warnedOnceInvalidSection) {
      const supportedSections = ['empty'];
      if (['date', 'date-time'].includes(valueType)) {
        supportedSections.push('weekDay', 'day', 'month', 'year');
      }
      if (['time', 'date-time'].includes(valueType)) {
        supportedSections.push('hours', 'minutes', 'seconds', 'meridiem');
      }
      const invalidSection = sections.find(section => !supportedSections.includes(section.type));
      if (invalidSection) {
        console.warn(`MUI X: The field component you are using is not compatible with the "${invalidSection.type}" date section.`, `The supported date sections are ["${supportedSections.join('", "')}"]\`.`);
        warnedOnceInvalidSection = true;
      }
    }
  }
};
const transferDateSectionValue = (adapter, section, dateToTransferFrom, dateToTransferTo) => {
  switch (section.type) {
    case 'year':
      {
        return adapter.setYear(dateToTransferTo, adapter.getYear(dateToTransferFrom));
      }
    case 'month':
      {
        return adapter.setMonth(dateToTransferTo, adapter.getMonth(dateToTransferFrom));
      }
    case 'weekDay':
      {
        let dayInWeekStrOfActiveDate = adapter.formatByString(dateToTransferFrom, section.format);
        if (section.hasLeadingZerosInInput) {
          dayInWeekStrOfActiveDate = cleanLeadingZeros(dayInWeekStrOfActiveDate, section.maxLength);
        }
        const formattedDaysInWeek = getDaysInWeekStr(adapter, section.format);
        const dayInWeekOfActiveDate = formattedDaysInWeek.indexOf(dayInWeekStrOfActiveDate);
        const dayInWeekOfNewSectionValue = formattedDaysInWeek.indexOf(section.value);
        const diff = dayInWeekOfNewSectionValue - dayInWeekOfActiveDate;
        return adapter.addDays(dateToTransferFrom, diff);
      }
    case 'day':
      {
        return adapter.setDate(dateToTransferTo, adapter.getDate(dateToTransferFrom));
      }
    case 'meridiem':
      {
        const isAM = adapter.getHours(dateToTransferFrom) < 12;
        const mergedDateHours = adapter.getHours(dateToTransferTo);
        if (isAM && mergedDateHours >= 12) {
          return adapter.addHours(dateToTransferTo, -12);
        }
        if (!isAM && mergedDateHours < 12) {
          return adapter.addHours(dateToTransferTo, 12);
        }
        return dateToTransferTo;
      }
    case 'hours':
      {
        return adapter.setHours(dateToTransferTo, adapter.getHours(dateToTransferFrom));
      }
    case 'minutes':
      {
        return adapter.setMinutes(dateToTransferTo, adapter.getMinutes(dateToTransferFrom));
      }
    case 'seconds':
      {
        return adapter.setSeconds(dateToTransferTo, adapter.getSeconds(dateToTransferFrom));
      }
    default:
      {
        return dateToTransferTo;
      }
  }
};
const reliableSectionModificationOrder = {
  year: 1,
  month: 2,
  day: 3,
  weekDay: 4,
  hours: 5,
  minutes: 6,
  seconds: 7,
  meridiem: 8,
  empty: 9
};
const mergeDateIntoReferenceDate = (adapter, dateToTransferFrom, sections, referenceDate, shouldLimitToEditedSections) =>
// cloning sections before sort to avoid mutating it
[...sections].sort((a, b) => reliableSectionModificationOrder[a.type] - reliableSectionModificationOrder[b.type]).reduce((mergedDate, section) => {
  if (!shouldLimitToEditedSections || section.modified) {
    return transferDateSectionValue(adapter, section, dateToTransferFrom, mergedDate);
  }
  return mergedDate;
}, referenceDate);
const isAndroid = () => navigator.userAgent.toLowerCase().includes('android');

// TODO v9: Remove
const getSectionOrder = (sections, shouldApplyRTL) => {
  const neighbors = {};
  if (!shouldApplyRTL) {
    sections.forEach((_, index) => {
      const leftIndex = index === 0 ? null : index - 1;
      const rightIndex = index === sections.length - 1 ? null : index + 1;
      neighbors[index] = {
        leftIndex,
        rightIndex
      };
    });
    return {
      neighbors,
      startIndex: 0,
      endIndex: sections.length - 1
    };
  }
  const rtl2ltr = {};
  const ltr2rtl = {};
  let groupedSectionsStart = 0;
  let groupedSectionsEnd = 0;
  let RTLIndex = sections.length - 1;
  while (RTLIndex >= 0) {
    groupedSectionsEnd = sections.findIndex(
    // eslint-disable-next-line @typescript-eslint/no-loop-func
    (section, index) => index >= groupedSectionsStart && section.endSeparator?.includes(' ') &&
    // Special case where the spaces were not there in the initial input
    section.endSeparator !== ' / ');
    if (groupedSectionsEnd === -1) {
      groupedSectionsEnd = sections.length - 1;
    }
    for (let i = groupedSectionsEnd; i >= groupedSectionsStart; i -= 1) {
      ltr2rtl[i] = RTLIndex;
      rtl2ltr[RTLIndex] = i;
      RTLIndex -= 1;
    }
    groupedSectionsStart = groupedSectionsEnd + 1;
  }
  sections.forEach((_, index) => {
    const rtlIndex = ltr2rtl[index];
    const leftIndex = rtlIndex === 0 ? null : rtl2ltr[rtlIndex - 1];
    const rightIndex = rtlIndex === sections.length - 1 ? null : rtl2ltr[rtlIndex + 1];
    neighbors[index] = {
      leftIndex,
      rightIndex
    };
  });
  return {
    neighbors,
    startIndex: rtl2ltr[0],
    endIndex: rtl2ltr[sections.length - 1]
  };
};
const parseSelectedSections = (selectedSections, sections) => {
  if (selectedSections == null) {
    return null;
  }
  if (selectedSections === 'all') {
    return 'all';
  }
  if (typeof selectedSections === 'string') {
    const index = sections.findIndex(section => section.type === selectedSections);
    return index === -1 ? null : index;
  }
  return selectedSections;
};

const expandFormat = ({
  adapter,
  format
}) => {
  // Expand the provided format
  let formatExpansionOverflow = 10;
  let prevFormat = format;
  let nextFormat = adapter.expandFormat(format);
  while (nextFormat !== prevFormat) {
    prevFormat = nextFormat;
    nextFormat = adapter.expandFormat(prevFormat);
    formatExpansionOverflow -= 1;
    if (formatExpansionOverflow < 0) {
      throw new Error('MUI X: The format expansion seems to be in an infinite loop. Please open an issue with the format passed to the component.');
    }
  }
  return nextFormat;
};
const getEscapedPartsFromFormat = ({
  adapter,
  expandedFormat
}) => {
  const escapedParts = [];
  const {
    start: startChar,
    end: endChar
  } = adapter.escapedCharacters;
  const regExp = new RegExp(`(\\${startChar}[^\\${endChar}]*\\${endChar})+`, 'g');
  let match = null;
  // eslint-disable-next-line no-cond-assign
  while (match = regExp.exec(expandedFormat)) {
    escapedParts.push({
      start: match.index,
      end: regExp.lastIndex - 1
    });
  }
  return escapedParts;
};
const getSectionPlaceholder = (adapter, localeText, sectionConfig, sectionFormat) => {
  switch (sectionConfig.type) {
    case 'year':
      {
        return localeText.fieldYearPlaceholder({
          digitAmount: adapter.formatByString(adapter.date(undefined, 'default'), sectionFormat).length,
          format: sectionFormat
        });
      }
    case 'month':
      {
        return localeText.fieldMonthPlaceholder({
          contentType: sectionConfig.contentType,
          format: sectionFormat
        });
      }
    case 'day':
      {
        return localeText.fieldDayPlaceholder({
          format: sectionFormat
        });
      }
    case 'weekDay':
      {
        return localeText.fieldWeekDayPlaceholder({
          contentType: sectionConfig.contentType,
          format: sectionFormat
        });
      }
    case 'hours':
      {
        return localeText.fieldHoursPlaceholder({
          format: sectionFormat
        });
      }
    case 'minutes':
      {
        return localeText.fieldMinutesPlaceholder({
          format: sectionFormat
        });
      }
    case 'seconds':
      {
        return localeText.fieldSecondsPlaceholder({
          format: sectionFormat
        });
      }
    case 'meridiem':
      {
        return localeText.fieldMeridiemPlaceholder({
          format: sectionFormat
        });
      }
    default:
      {
        return sectionFormat;
      }
  }
};
const createSection = ({
  adapter,
  date,
  shouldRespectLeadingZeros,
  localeText,
  localizedDigits,
  now,
  token,
  startSeparator
}) => {
  if (token === '') {
    throw new Error('MUI X: Should not call `commitToken` with an empty token');
  }
  const sectionConfig = getDateSectionConfigFromFormatToken(adapter, token);
  const hasLeadingZerosInFormat = doesSectionFormatHaveLeadingZeros(adapter, sectionConfig.contentType, sectionConfig.type, token);
  const hasLeadingZerosInInput = shouldRespectLeadingZeros ? hasLeadingZerosInFormat : sectionConfig.contentType === 'digit';
  const isValidDate = adapter.isValid(date);
  let sectionValue = isValidDate ? adapter.formatByString(date, token) : '';
  let maxLength = null;
  if (hasLeadingZerosInInput) {
    if (hasLeadingZerosInFormat) {
      maxLength = sectionValue === '' ? adapter.formatByString(now, token).length : sectionValue.length;
    } else {
      if (sectionConfig.maxLength == null) {
        throw new Error(`MUI X: The token ${token} should have a 'maxLength' property on it's adapter`);
      }
      maxLength = sectionConfig.maxLength;
      if (isValidDate) {
        sectionValue = applyLocalizedDigits(cleanLeadingZeros(removeLocalizedDigits(sectionValue, localizedDigits), maxLength), localizedDigits);
      }
    }
  }
  return _extends({}, sectionConfig, {
    format: token,
    maxLength,
    value: sectionValue,
    placeholder: getSectionPlaceholder(adapter, localeText, sectionConfig, token),
    hasLeadingZerosInFormat,
    hasLeadingZerosInInput,
    startSeparator,
    endSeparator: '',
    modified: false
  });
};
const buildSections = parameters => {
  const {
    adapter,
    expandedFormat,
    escapedParts
  } = parameters;
  const now = adapter.date(undefined);
  const sections = [];
  let startSeparator = '';

  // This RegExp tests if the beginning of a string corresponds to a supported token
  const validTokens = Object.keys(adapter.formatTokenMap).sort((a, b) => b.length - a.length); // Sort to put longest word first

  const regExpFirstWordInFormat = /^([a-zA-Z]+)/;
  const regExpWordOnlyComposedOfTokens = new RegExp(`^(${validTokens.join('|')})*$`);
  const regExpFirstTokenInWord = new RegExp(`^(${validTokens.join('|')})`);
  const getEscapedPartOfCurrentChar = i => escapedParts.find(escapeIndex => escapeIndex.start <= i && escapeIndex.end >= i);
  let i = 0;
  while (i < expandedFormat.length) {
    const escapedPartOfCurrentChar = getEscapedPartOfCurrentChar(i);
    const isEscapedChar = escapedPartOfCurrentChar != null;
    const firstWordInFormat = regExpFirstWordInFormat.exec(expandedFormat.slice(i))?.[1];

    // The first word in the format is only composed of tokens.
    // We extract those tokens to create a new sections.
    if (!isEscapedChar && firstWordInFormat != null && regExpWordOnlyComposedOfTokens.test(firstWordInFormat)) {
      let word = firstWordInFormat;
      while (word.length > 0) {
        const firstWord = regExpFirstTokenInWord.exec(word)[1];
        word = word.slice(firstWord.length);
        sections.push(createSection(_extends({}, parameters, {
          now,
          token: firstWord,
          startSeparator
        })));
        startSeparator = '';
      }
      i += firstWordInFormat.length;
    }
    // The remaining format does not start with a token,
    // We take the first character and add it to the current section's end separator.
    else {
      const char = expandedFormat[i];

      // If we are on the opening or closing character of an escaped part of the format,
      // Then we ignore this character.
      const isEscapeBoundary = isEscapedChar && escapedPartOfCurrentChar?.start === i || escapedPartOfCurrentChar?.end === i;
      if (!isEscapeBoundary) {
        if (sections.length === 0) {
          startSeparator += char;
        } else {
          sections[sections.length - 1].endSeparator += char;
          sections[sections.length - 1].isEndFormatSeparator = true;
        }
      }
      i += 1;
    }
  }
  if (sections.length === 0 && startSeparator.length > 0) {
    sections.push({
      type: 'empty',
      contentType: 'letter',
      maxLength: null,
      format: '',
      value: '',
      placeholder: '',
      hasLeadingZerosInFormat: false,
      hasLeadingZerosInInput: false,
      startSeparator,
      endSeparator: '',
      modified: false
    });
  }
  return sections;
};
const postProcessSections = ({
  isRtl,
  formatDensity,
  sections
}) => {
  return sections.map(section => {
    const cleanSeparator = separator => {
      let cleanedSeparator = separator;
      if (isRtl && cleanedSeparator !== null && cleanedSeparator.includes(' ')) {
        cleanedSeparator = `\u2069${cleanedSeparator}\u2066`;
      }
      if (formatDensity === 'spacious' && ['/', '.', '-'].includes(cleanedSeparator)) {
        cleanedSeparator = ` ${cleanedSeparator} `;
      }
      return cleanedSeparator;
    };
    section.startSeparator = cleanSeparator(section.startSeparator);
    section.endSeparator = cleanSeparator(section.endSeparator);
    return section;
  });
};
const buildSectionsFromFormat = parameters => {
  let expandedFormat = expandFormat(parameters);
  if (parameters.isRtl && parameters.enableAccessibleFieldDOMStructure) {
    expandedFormat = expandedFormat.split(' ').reverse().join(' ');
  }
  const escapedParts = getEscapedPartsFromFormat(_extends({}, parameters, {
    expandedFormat
  }));
  const sections = buildSections(_extends({}, parameters, {
    expandedFormat,
    escapedParts
  }));
  return postProcessSections(_extends({}, parameters, {
    sections
  }));
};

const PickerContext = /*#__PURE__*/React__namespace.createContext(null);

/**
 * Returns the context passed by the Picker wrapping the current component.
 */
if (process.env.NODE_ENV !== "production") PickerContext.displayName = "PickerContext";
const usePickerContext = () => {
  const value = React__namespace.useContext(PickerContext);
  if (value == null) {
    throw new Error('MUI X: The `usePickerContext` hook can only be called inside the context of a Picker component');
  }
  return value;
};

/**
 * Returns the context passed by the Picker wrapping the current component.
 * If the context is not found, returns `null`.
 */
const useNullablePickerContext = () => React__namespace.useContext(PickerContext);

const IsValidValueContext = /*#__PURE__*/React__namespace.createContext(() => true);

/**
 * Returns a function to check if a value is valid according to the validation props passed to the parent Picker.
 */
if (process.env.NODE_ENV !== "production") IsValidValueContext.displayName = "IsValidValueContext";
function useIsValidValue() {
  return React__namespace.useContext(IsValidValueContext);
}

const PickerFieldPrivateContext = /*#__PURE__*/React__namespace.createContext(null);
if (process.env.NODE_ENV !== "production") PickerFieldPrivateContext.displayName = "PickerFieldPrivateContext";
function useNullableFieldPrivateContext() {
  return React__namespace.useContext(PickerFieldPrivateContext);
}

const PickerActionsContext = /*#__PURE__*/React__namespace.createContext(null);
if (process.env.NODE_ENV !== "production") PickerActionsContext.displayName = "PickerActionsContext";
const PickerPrivateContext = /*#__PURE__*/React__namespace.createContext({
  ownerState: {
    isPickerDisabled: false,
    isPickerReadOnly: false,
    isPickerValueEmpty: false,
    isPickerOpen: false,
    pickerVariant: 'desktop',
    pickerOrientation: 'portrait'
  },
  rootRefObject: {
    current: null
  },
  labelId: undefined,
  dismissViews: () => {},
  hasUIView: true,
  getCurrentViewMode: () => 'UI',
  triggerElement: null,
  viewContainerRole: null,
  defaultActionBarActions: [],
  onPopperExited: undefined
});

/**
 * Provides the context for the various parts of a Picker component:
 * - contextValue: the context for the Picker sub-components.
 * - localizationProvider: the translations passed through the props and through a parent LocalizationProvider.
 *
 * @ignore - do not document.
 */
if (process.env.NODE_ENV !== "production") PickerPrivateContext.displayName = "PickerPrivateContext";
function PickerProvider(props) {
  const {
    contextValue,
    actionsContextValue,
    privateContextValue,
    fieldPrivateContextValue,
    isValidContextValue,
    localeText,
    children
  } = props;
  return /*#__PURE__*/jsxRuntime.jsx(PickerContext.Provider, {
    value: contextValue,
    children: /*#__PURE__*/jsxRuntime.jsx(PickerActionsContext.Provider, {
      value: actionsContextValue,
      children: /*#__PURE__*/jsxRuntime.jsx(PickerPrivateContext.Provider, {
        value: privateContextValue,
        children: /*#__PURE__*/jsxRuntime.jsx(PickerFieldPrivateContext.Provider, {
          value: fieldPrivateContextValue,
          children: /*#__PURE__*/jsxRuntime.jsx(IsValidValueContext.Provider, {
            value: isValidContextValue,
            children: /*#__PURE__*/jsxRuntime.jsx(LocalizationProvider, {
              localeText: localeText,
              children: children
            })
          })
        })
      })
    })
  });
}

/**
 * Returns a subset of the context passed by the Picker wrapping the current component.
 * It only contains the actions and never causes a re-render of the component using it.
 */
const usePickerActionsContext = () => {
  const value = React__namespace.useContext(PickerActionsContext);
  if (value == null) {
    throw new Error(['MUI X: The `usePickerActionsContext` can only be called in fields that are used as a slot of a Picker component'].join('\n'));
  }
  return value;
};

const useDefaultDates = () => useLocalizationContext().defaultDates;
const useNow = timezone => {
  const adapter = usePickerAdapter();
  const now = React__namespace.useRef(undefined);
  if (now.current === undefined) {
    now.current = adapter.date(undefined, timezone);
  }
  return now.current;
};

/**
 * Merges refs into a single memoized callback ref or `null`.
 *
 * ```tsx
 * const rootRef = React.useRef<Instance>(null);
 * const refFork = useForkRef(rootRef, props.ref);
 *
 * return (
 *   <Root {...props} ref={refFork} />
 * );
 * ```
 *
 * @param {Array<React.Ref<Instance> | undefined>} refs The ref array.
 * @returns {React.RefCallback<Instance> | null} The new ref callback.
 */
function useForkRef(...refs) {
  const cleanupRef = React__namespace.useRef(undefined);
  const refEffect = React__namespace.useCallback(instance => {
    const cleanups = refs.map(ref => {
      if (ref == null) {
        return null;
      }
      if (typeof ref === 'function') {
        const refCallback = ref;
        const refCleanup = refCallback(instance);
        return typeof refCleanup === 'function' ? refCleanup : () => {
          refCallback(null);
        };
      }
      ref.current = instance;
      return () => {
        ref.current = null;
      };
    });
    return () => {
      cleanups.forEach(refCleanup => refCleanup?.());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, refs);
  return React__namespace.useMemo(() => {
    if (refs.every(ref => ref == null)) {
      return null;
    }
    return value => {
      if (cleanupRef.current) {
        cleanupRef.current();
        cleanupRef.current = undefined;
      }
      if (value != null) {
        cleanupRef.current = refEffect(value);
      }
    };
    // TODO: uncomment once we enable eslint-plugin-react-compiler // eslint-disable-next-line react-compiler/react-compiler -- intentionally ignoring that the dependency array must be an array literal
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, refs);
}

/**
 * Determines if a given element is a DOM element name (i.e. not a React component).
 */
function isHostComponent(element) {
  return typeof element === 'string';
}

/**
 * Type of the ownerState based on the type of an element it applies to.
 * This resolves to the provided OwnerState for React components and `undefined` for host components.
 * Falls back to `OwnerState | undefined` when the exact type can't be determined in development time.
 */

/**
 * Appends the ownerState object to the props, merging with the existing one if necessary.
 *
 * @param elementType Type of the element that owns the `existingProps`. If the element is a DOM node or undefined, `ownerState` is not applied.
 * @param otherProps Props of the element.
 * @param ownerState
 */
function appendOwnerState(elementType, otherProps, ownerState) {
  if (elementType === undefined || isHostComponent(elementType)) {
    return otherProps;
  }
  return {
    ...otherProps,
    ownerState: {
      ...otherProps.ownerState,
      ...ownerState
    }
  };
}

/**
 * Extracts event handlers from a given object.
 * A prop is considered an event handler if it is a function and its name starts with `on`.
 *
 * @param object An object to extract event handlers from.
 * @param excludeKeys An array of keys to exclude from the returned object.
 */
function extractEventHandlers(object, excludeKeys = []) {
  if (object === undefined) {
    return {};
  }
  const result = {};
  Object.keys(object).filter(prop => prop.match(/^on[A-Z]/) && typeof object[prop] === 'function' && !excludeKeys.includes(prop)).forEach(prop => {
    result[prop] = object[prop];
  });
  return result;
}

/**
 * Removes event handlers from the given object.
 * A field is considered an event handler if it is a function with a name beginning with `on`.
 *
 * @param object Object to remove event handlers from.
 * @returns Object with event handlers removed.
 */
function omitEventHandlers(object) {
  if (object === undefined) {
    return {};
  }
  const result = {};
  Object.keys(object).filter(prop => !(prop.match(/^on[A-Z]/) && typeof object[prop] === 'function')).forEach(prop => {
    result[prop] = object[prop];
  });
  return result;
}

/**
 * Merges the slot component internal props (usually coming from a hook)
 * with the externally provided ones.
 *
 * The merge order is (the latter overrides the former):
 * 1. The internal props (specified as a getter function to work with get*Props hook result)
 * 2. Additional props (specified internally on a Base UI component)
 * 3. External props specified on the owner component. These should only be used on a root slot.
 * 4. External props specified in the `slotProps.*` prop.
 * 5. The `className` prop - combined from all the above.
 * @param parameters
 * @returns
 */
function mergeSlotProps$1(parameters) {
  const {
    getSlotProps,
    additionalProps,
    externalSlotProps,
    externalForwardedProps,
    className
  } = parameters;
  if (!getSlotProps) {
    // The simpler case - getSlotProps is not defined, so no internal event handlers are defined,
    // so we can simply merge all the props without having to worry about extracting event handlers.
    const joinedClasses = clsx(additionalProps?.className, className, externalForwardedProps?.className, externalSlotProps?.className);
    const mergedStyle = {
      ...additionalProps?.style,
      ...externalForwardedProps?.style,
      ...externalSlotProps?.style
    };
    const props = {
      ...additionalProps,
      ...externalForwardedProps,
      ...externalSlotProps
    };
    if (joinedClasses.length > 0) {
      props.className = joinedClasses;
    }
    if (Object.keys(mergedStyle).length > 0) {
      props.style = mergedStyle;
    }
    return {
      props,
      internalRef: undefined
    };
  }

  // In this case, getSlotProps is responsible for calling the external event handlers.
  // We don't need to include them in the merged props because of this.

  const eventHandlers = extractEventHandlers({
    ...externalForwardedProps,
    ...externalSlotProps
  });
  const componentsPropsWithoutEventHandlers = omitEventHandlers(externalSlotProps);
  const otherPropsWithoutEventHandlers = omitEventHandlers(externalForwardedProps);
  const internalSlotProps = getSlotProps(eventHandlers);

  // The order of classes is important here.
  // Emotion (that we use in libraries consuming Base UI) depends on this order
  // to properly override style. It requires the most important classes to be last
  // (see https://github.com/mui/material-ui/pull/33205) for the related discussion.
  const joinedClasses = clsx(internalSlotProps?.className, additionalProps?.className, className, externalForwardedProps?.className, externalSlotProps?.className);
  const mergedStyle = {
    ...internalSlotProps?.style,
    ...additionalProps?.style,
    ...externalForwardedProps?.style,
    ...externalSlotProps?.style
  };
  const props = {
    ...internalSlotProps,
    ...additionalProps,
    ...otherPropsWithoutEventHandlers,
    ...componentsPropsWithoutEventHandlers
  };
  if (joinedClasses.length > 0) {
    props.className = joinedClasses;
  }
  if (Object.keys(mergedStyle).length > 0) {
    props.style = mergedStyle;
  }
  return {
    props,
    internalRef: internalSlotProps.ref
  };
}

/**
 * If `componentProps` is a function, calls it with the provided `ownerState`.
 * Otherwise, just returns `componentProps`.
 */
function resolveComponentProps(componentProps, ownerState, slotState) {
  if (typeof componentProps === 'function') {
    return componentProps(ownerState, slotState);
  }
  return componentProps;
}

/**
 * @ignore - do not document.
 * Builds the props to be passed into the slot of an unstyled component.
 * It merges the internal props of the component with the ones supplied by the user, allowing to customize the behavior.
 * If the slot component is not a host component, it also merges in the `ownerState`.
 *
 * @param parameters.getSlotProps - A function that returns the props to be passed to the slot component.
 */
function useSlotProps(parameters) {
  const {
    elementType,
    externalSlotProps,
    ownerState,
    skipResolvingSlotProps = false,
    ...other
  } = parameters;
  const resolvedComponentsProps = skipResolvingSlotProps ? {} : resolveComponentProps(externalSlotProps, ownerState);
  const {
    props: mergedProps,
    internalRef
  } = mergeSlotProps$1({
    ...other,
    externalSlotProps: resolvedComponentsProps
  });
  const ref = useForkRef(internalRef, resolvedComponentsProps?.ref, parameters.additionalProps?.ref);
  const props = appendOwnerState(elementType, {
    ...mergedProps,
    ref
  }, ownerState);
  return props;
}

const ArrowDropDownIcon = utils.createSvgIcon(/*#__PURE__*/jsxRuntime.jsx("path", {
  d: "M7 10l5 5 5-5z"
}), 'ArrowDropDown');

/**
 * @ignore - internal component.
 */
const ArrowLeftIcon = utils.createSvgIcon(/*#__PURE__*/jsxRuntime.jsx("path", {
  d: "M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"
}), 'ArrowLeft');

/**
 * @ignore - internal component.
 */
const ArrowRightIcon = utils.createSvgIcon(/*#__PURE__*/jsxRuntime.jsx("path", {
  d: "M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"
}), 'ArrowRight');

/**
 * @ignore - internal component.
 */
const CalendarIcon = utils.createSvgIcon(/*#__PURE__*/jsxRuntime.jsx("path", {
  d: "M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"
}), 'Calendar');

/**
 * @ignore - internal component.
 */
const ClockIcon = utils.createSvgIcon(/*#__PURE__*/jsxRuntime.jsxs(React__namespace.Fragment, {
  children: [/*#__PURE__*/jsxRuntime.jsx("path", {
    d: "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
  }), /*#__PURE__*/jsxRuntime.jsx("path", {
    d: "M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"
  })]
}), 'Clock');

/**
 * @ignore - internal component.
 */
const DateRangeIcon = utils.createSvgIcon(/*#__PURE__*/jsxRuntime.jsx("path", {
  d: "M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"
}), 'DateRange');

/**
 * @ignore - internal component.
 */
const TimeIcon = utils.createSvgIcon(/*#__PURE__*/jsxRuntime.jsxs(React__namespace.Fragment, {
  children: [/*#__PURE__*/jsxRuntime.jsx("path", {
    d: "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
  }), /*#__PURE__*/jsxRuntime.jsx("path", {
    d: "M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"
  })]
}), 'Time');

/**
 * @ignore - internal component.
 */
const ClearIcon = utils.createSvgIcon(/*#__PURE__*/jsxRuntime.jsx("path", {
  d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
}), 'Clear');

const defaultGenerator = componentName => componentName;
const createClassNameGenerator = () => {
  let generate = defaultGenerator;
  return {
    configure(generator) {
      generate = generator;
    },
    generate(componentName) {
      return generate(componentName);
    },
    reset() {
      generate = defaultGenerator;
    }
  };
};
const ClassNameGenerator = createClassNameGenerator();
var ClassNameGenerator$1 = ClassNameGenerator;

const globalStateClasses = {
  active: 'active',
  checked: 'checked',
  completed: 'completed',
  disabled: 'disabled',
  error: 'error',
  expanded: 'expanded',
  focused: 'focused',
  focusVisible: 'focusVisible',
  open: 'open',
  readOnly: 'readOnly',
  required: 'required',
  selected: 'selected'
};
function generateUtilityClass(componentName, slot, globalStatePrefix = 'Mui') {
  const globalStateClass = globalStateClasses[slot];
  return globalStateClass ? `${globalStatePrefix}-${globalStateClass}` : `${ClassNameGenerator$1.generate(componentName)}-${slot}`;
}

function generateUtilityClasses(componentName, slots, globalStatePrefix = 'Mui') {
  const result = {};
  slots.forEach(slot => {
    result[slot] = generateUtilityClass(componentName, slot, globalStatePrefix);
  });
  return result;
}

function getPickersArrowSwitcherUtilityClass(slot) {
  return generateUtilityClass('MuiPickersArrowSwitcher', slot);
}
generateUtilityClasses('MuiPickersArrowSwitcher', ['root', 'spacer', 'button', 'previousIconButton', 'nextIconButton', 'leftArrowIcon', 'rightArrowIcon']);

/**
 * Returns the private context passed by the Picker wrapping the current component.
 */
const usePickerPrivateContext = () => React__namespace.useContext(PickerPrivateContext);

const _excluded$K = ["children", "className", "slots", "slotProps", "isNextDisabled", "isNextHidden", "onGoToNext", "nextLabel", "isPreviousDisabled", "isPreviousHidden", "onGoToPrevious", "previousLabel", "labelId", "classes"],
  _excluded2$6 = ["ownerState"],
  _excluded3$1 = ["ownerState"];
const PickersArrowSwitcherRoot = styles.styled('div', {
  name: 'MuiPickersArrowSwitcher',
  slot: 'Root'
})({
  display: 'flex'
});
const PickersArrowSwitcherSpacer = styles.styled('div', {
  name: 'MuiPickersArrowSwitcher',
  slot: 'Spacer'
})(({
  theme
}) => ({
  width: theme.spacing(3)
}));
const PickersArrowSwitcherButton = styles.styled(IconButton, {
  name: 'MuiPickersArrowSwitcher',
  slot: 'Button'
})({
  variants: [{
    props: {
      isButtonHidden: true
    },
    style: {
      visibility: 'hidden'
    }
  }]
});
const useUtilityClasses$x = classes => {
  const slots = {
    root: ['root'],
    spacer: ['spacer'],
    button: ['button'],
    previousIconButton: ['previousIconButton'],
    nextIconButton: ['nextIconButton'],
    leftArrowIcon: ['leftArrowIcon'],
    rightArrowIcon: ['rightArrowIcon']
  };
  return composeClasses(slots, getPickersArrowSwitcherUtilityClass, classes);
};
const PickersArrowSwitcher = /*#__PURE__*/React__namespace.forwardRef(function PickersArrowSwitcher(inProps, ref) {
  const isRtl = useRtl();
  const props = styles.useThemeProps({
    props: inProps,
    name: 'MuiPickersArrowSwitcher'
  });
  const {
      children,
      className,
      slots,
      slotProps,
      isNextDisabled,
      isNextHidden,
      onGoToNext,
      nextLabel,
      isPreviousDisabled,
      isPreviousHidden,
      onGoToPrevious,
      previousLabel,
      labelId,
      classes: classesProp
    } = props,
    other = _objectWithoutPropertiesLoose(props, _excluded$K);
  const {
    ownerState
  } = usePickerPrivateContext();
  const classes = useUtilityClasses$x(classesProp);
  const nextProps = {
    isDisabled: isNextDisabled,
    isHidden: isNextHidden,
    goTo: onGoToNext,
    label: nextLabel
  };
  const previousProps = {
    isDisabled: isPreviousDisabled,
    isHidden: isPreviousHidden,
    goTo: onGoToPrevious,
    label: previousLabel
  };
  const PreviousIconButton = slots?.previousIconButton ?? PickersArrowSwitcherButton;
  const previousIconButtonProps = useSlotProps({
    elementType: PreviousIconButton,
    externalSlotProps: slotProps?.previousIconButton,
    additionalProps: {
      size: 'medium',
      title: previousProps.label,
      'aria-label': previousProps.label,
      disabled: previousProps.isDisabled,
      edge: 'end',
      onClick: previousProps.goTo
    },
    ownerState: _extends({}, ownerState, {
      isButtonHidden: previousProps.isHidden ?? false
    }),
    className: clsx(classes.button, classes.previousIconButton)
  });
  const NextIconButton = slots?.nextIconButton ?? PickersArrowSwitcherButton;
  const nextIconButtonProps = useSlotProps({
    elementType: NextIconButton,
    externalSlotProps: slotProps?.nextIconButton,
    additionalProps: {
      size: 'medium',
      title: nextProps.label,
      'aria-label': nextProps.label,
      disabled: nextProps.isDisabled,
      edge: 'start',
      onClick: nextProps.goTo
    },
    ownerState: _extends({}, ownerState, {
      isButtonHidden: nextProps.isHidden ?? false
    }),
    className: clsx(classes.button, classes.nextIconButton)
  });
  const LeftArrowIcon = slots?.leftArrowIcon ?? ArrowLeftIcon;
  // The spread is here to avoid this bug mui/material-ui#34056
  const _useSlotProps = useSlotProps({
      elementType: LeftArrowIcon,
      externalSlotProps: slotProps?.leftArrowIcon,
      additionalProps: {
        fontSize: 'inherit'
      },
      ownerState,
      className: classes.leftArrowIcon
    }),
    leftArrowIconProps = _objectWithoutPropertiesLoose(_useSlotProps, _excluded2$6);
  const RightArrowIcon = slots?.rightArrowIcon ?? ArrowRightIcon;
  // The spread is here to avoid this bug mui/material-ui#34056
  const _useSlotProps2 = useSlotProps({
      elementType: RightArrowIcon,
      externalSlotProps: slotProps?.rightArrowIcon,
      additionalProps: {
        fontSize: 'inherit'
      },
      ownerState,
      className: classes.rightArrowIcon
    }),
    rightArrowIconProps = _objectWithoutPropertiesLoose(_useSlotProps2, _excluded3$1);
  return /*#__PURE__*/jsxRuntime.jsxs(PickersArrowSwitcherRoot, _extends({
    ref: ref,
    className: clsx(classes.root, className),
    ownerState: ownerState
  }, other, {
    children: [/*#__PURE__*/jsxRuntime.jsx(PreviousIconButton, _extends({}, previousIconButtonProps, {
      children: isRtl ? /*#__PURE__*/jsxRuntime.jsx(RightArrowIcon, _extends({}, rightArrowIconProps)) : /*#__PURE__*/jsxRuntime.jsx(LeftArrowIcon, _extends({}, leftArrowIconProps))
    })), children ? /*#__PURE__*/jsxRuntime.jsx(Typography, {
      variant: "subtitle1",
      component: "span",
      id: labelId,
      children: children
    }) : /*#__PURE__*/jsxRuntime.jsx(PickersArrowSwitcherSpacer, {
      className: classes.spacer,
      ownerState: ownerState
    }), /*#__PURE__*/jsxRuntime.jsx(NextIconButton, _extends({}, nextIconButtonProps, {
      children: isRtl ? /*#__PURE__*/jsxRuntime.jsx(LeftArrowIcon, _extends({}, leftArrowIconProps)) : /*#__PURE__*/jsxRuntime.jsx(RightArrowIcon, _extends({}, rightArrowIconProps))
    }))]
  }));
});
if (process.env.NODE_ENV !== "production") PickersArrowSwitcher.displayName = "PickersArrowSwitcher";

const EXPORTED_TIME_VIEWS = ['hours', 'minutes', 'seconds'];
const TIME_VIEWS = ['hours', 'minutes', 'seconds', 'meridiem'];
const isTimeView = view => EXPORTED_TIME_VIEWS.includes(view);
const isInternalTimeView = view => TIME_VIEWS.includes(view);
const getMeridiem = (date, adapter) => {
  if (!date) {
    return null;
  }
  return adapter.getHours(date) >= 12 ? 'pm' : 'am';
};
const convertValueToMeridiem = (value, meridiem, ampm) => {
  if (ampm) {
    const currentMeridiem = value >= 12 ? 'pm' : 'am';
    if (currentMeridiem !== meridiem) {
      return meridiem === 'am' ? value - 12 : value + 12;
    }
  }
  return value;
};
const convertToMeridiem = (time, meridiem, ampm, adapter) => {
  const newHoursAmount = convertValueToMeridiem(adapter.getHours(time), meridiem, ampm);
  return adapter.setHours(time, newHoursAmount);
};
const getSecondsInDay = (date, adapter) => {
  return adapter.getHours(date) * 3600 + adapter.getMinutes(date) * 60 + adapter.getSeconds(date);
};
const createIsAfterIgnoreDatePart = (disableIgnoringDatePartForTimeValidation, adapter) => (dateLeft, dateRight) => {
  if (disableIgnoringDatePartForTimeValidation) {
    return adapter.isAfter(dateLeft, dateRight);
  }
  return getSecondsInDay(dateLeft, adapter) > getSecondsInDay(dateRight, adapter);
};
const resolveTimeFormat = (adapter, {
  format,
  views,
  ampm
}) => {
  if (format != null) {
    return format;
  }
  const formats = adapter.formats;
  if (areViewsEqual(views, ['hours'])) {
    return ampm ? `${formats.hours12h} ${formats.meridiem}` : formats.hours24h;
  }
  if (areViewsEqual(views, ['minutes'])) {
    return formats.minutes;
  }
  if (areViewsEqual(views, ['seconds'])) {
    return formats.seconds;
  }
  if (areViewsEqual(views, ['minutes', 'seconds'])) {
    return `${formats.minutes}:${formats.seconds}`;
  }
  if (areViewsEqual(views, ['hours', 'minutes', 'seconds'])) {
    return ampm ? `${formats.hours12h}:${formats.minutes}:${formats.seconds} ${formats.meridiem}` : `${formats.hours24h}:${formats.minutes}:${formats.seconds}`;
  }
  return ampm ? `${formats.hours12h}:${formats.minutes} ${formats.meridiem}` : `${formats.hours24h}:${formats.minutes}`;
};

/**
 * A version of `React.useLayoutEffect` that does not show a warning when server-side rendering.
 * This is useful for effects that are only needed for client-side rendering but not for SSR.
 *
 * Before you use this hook, make sure to read https://gist.github.com/gaearon/e7d97cdf38a2907924ea12e4ebdf3c85
 * and confirm it doesn't apply to your use-case.
 */
const useEnhancedEffect = typeof window !== 'undefined' ? React__namespace.useLayoutEffect : React__namespace.useEffect;
var useEnhancedEffect$1 = useEnhancedEffect;

/**
 * Inspired by https://github.com/facebook/react/issues/14099#issuecomment-440013892
 * See RFC in https://github.com/reactjs/rfcs/pull/220
 */

function useEventCallback(fn) {
  const ref = React__namespace.useRef(fn);
  useEnhancedEffect$1(() => {
    ref.current = fn;
  });
  return React__namespace.useRef((...args) =>
  // @ts-expect-error hide `this`
  (0, ref.current)(...args)).current;
}

function useControlled(props) {
  const {
    controlled,
    default: defaultProp,
    name,
    state = 'value'
  } = props;
  // isControlled is ignored in the hook dependency lists as it should never change.
  const {
    current: isControlled
  } = React__namespace.useRef(controlled !== undefined);
  const [valueState, setValue] = React__namespace.useState(defaultProp);
  const value = isControlled ? controlled : valueState;
  if (process.env.NODE_ENV !== 'production') {
    React__namespace.useEffect(() => {
      if (isControlled !== (controlled !== undefined)) {
        console.error([`MUI: A component is changing the ${isControlled ? '' : 'un'}controlled ${state} state of ${name} to be ${isControlled ? 'un' : ''}controlled.`, 'Elements should not switch from uncontrolled to controlled (or vice versa).', `Decide between using a controlled or uncontrolled ${name} ` + 'element for the lifetime of the component.', "The nature of the state is determined during the first render. It's considered controlled if the value is not `undefined`.", 'More info: https://fb.me/react-controlled-components'].join('\n'));
      }
    }, [state, name, controlled]);
    const {
      current: defaultValue
    } = React__namespace.useRef(defaultProp);
    React__namespace.useEffect(() => {
      // Object.is() is not equivalent to the === operator.
      // See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is for more details.
      if (!isControlled && !Object.is(defaultValue, defaultProp)) {
        console.error([`MUI: A component is changing the default ${state} state of an uncontrolled ${name} after being initialized. ` + `To suppress this warning opt to use a controlled ${name}.`].join('\n'));
      }
    }, [JSON.stringify(defaultProp)]);
  }
  const setValueIfUncontrolled = React__namespace.useCallback(newValue => {
    if (!isControlled) {
      setValue(newValue);
    }
  }, []);

  // TODO: provide overloads for the useControlled function to account for the case where either
  // controlled or default is not undefiend.
  // In that case the return type should be [T, React.Dispatch<React.SetStateAction<T>>]
  // otherwise it should be [T | undefined, React.Dispatch<React.SetStateAction<T | undefined>>]
  return [value, setValueIfUncontrolled];
}

const DEFAULT_STEP_NAVIGATION = {
  hasNextStep: false,
  hasSeveralSteps: false,
  goToNextStep: () => {},
  areViewsInSameStep: () => true
};

/**
 * Create an object that determines whether there is a next step and allows to go to the next step.
 * @param {CreateStepNavigationParameters<TStep>} parameters The parameters of the createStepNavigation function
 * @returns {CreateStepNavigationReturnValue} The return value of the createStepNavigation function
 */
function createStepNavigation(parameters) {
  const {
    steps,
    isViewMatchingStep,
    onStepChange
  } = parameters;
  return parametersBis => {
    if (steps == null) {
      return DEFAULT_STEP_NAVIGATION;
    }
    const currentStepIndex = steps.findIndex(step => isViewMatchingStep(parametersBis.view, step));
    const nextStep = currentStepIndex === -1 || currentStepIndex === steps.length - 1 ? null : steps[currentStepIndex + 1];
    return {
      hasNextStep: nextStep != null,
      hasSeveralSteps: steps.length > 1,
      goToNextStep: () => {
        if (nextStep == null) {
          return;
        }
        onStepChange(_extends({}, parametersBis, {
          step: nextStep
        }));
      },
      areViewsInSameStep: (viewA, viewB) => {
        const stepA = steps.find(step => isViewMatchingStep(viewA, step));
        const stepB = steps.find(step => isViewMatchingStep(viewB, step));
        return stepA === stepB;
      }
    };
  };
}

let warnedOnceNotValidView = false;
function useViews({
  onChange,
  onViewChange,
  openTo,
  view: inView,
  views,
  autoFocus,
  focusedView: inFocusedView,
  onFocusedViewChange,
  getStepNavigation
}) {
  if (process.env.NODE_ENV !== 'production') {
    if (!warnedOnceNotValidView) {
      if (inView != null && !views.includes(inView)) {
        console.warn(`MUI X: \`view="${inView}"\` is not a valid prop.`, `It must be an element of \`views=["${views.join('", "')}"]\`.`);
        warnedOnceNotValidView = true;
      }
      if (inView == null && openTo != null && !views.includes(openTo)) {
        console.warn(`MUI X: \`openTo="${openTo}"\` is not a valid prop.`, `It must be an element of \`views=["${views.join('", "')}"]\`.`);
        warnedOnceNotValidView = true;
      }
    }
  }
  const previousOpenTo = React__namespace.useRef(openTo);
  const previousViews = React__namespace.useRef(views);
  const defaultView = React__namespace.useRef(views.includes(openTo) ? openTo : views[0]);
  const [view, setView] = useControlled({
    name: 'useViews',
    state: 'view',
    controlled: inView,
    default: defaultView.current
  });
  const defaultFocusedView = React__namespace.useRef(autoFocus ? view : null);
  const [focusedView, setFocusedView] = useControlled({
    name: 'useViews',
    state: 'focusedView',
    controlled: inFocusedView,
    default: defaultFocusedView.current
  });
  const stepNavigation = getStepNavigation ? getStepNavigation({
    setView,
    view,
    defaultView: defaultView.current,
    views
  }) : DEFAULT_STEP_NAVIGATION;
  React__namespace.useEffect(() => {
    // Update the current view when `openTo` or `views` props change
    if (previousOpenTo.current && previousOpenTo.current !== openTo || previousViews.current && previousViews.current.some(previousView => !views.includes(previousView))) {
      setView(views.includes(openTo) ? openTo : views[0]);
      previousViews.current = views;
      previousOpenTo.current = openTo;
    }
  }, [openTo, setView, view, views]);
  const viewIndex = views.indexOf(view);
  const previousView = views[viewIndex - 1] ?? null;
  const nextView = views[viewIndex + 1] ?? null;
  const handleFocusedViewChange = useEventCallback((viewToFocus, hasFocus) => {
    if (hasFocus) {
      // Focus event
      setFocusedView(viewToFocus);
    } else {
      // Blur event
      setFocusedView(prevFocusedView => viewToFocus === prevFocusedView ? null : prevFocusedView // If false the blur is due to view switching
      );
    }
    onFocusedViewChange?.(viewToFocus, hasFocus);
  });
  const handleChangeView = useEventCallback(newView => {
    // always keep the focused view in sync
    handleFocusedViewChange(newView, true);
    if (newView === view) {
      return;
    }
    setView(newView);
    if (onViewChange) {
      onViewChange(newView);
    }
  });
  const goToNextView = useEventCallback(() => {
    if (nextView) {
      handleChangeView(nextView);
    }
  });
  const setValueAndGoToNextView = useEventCallback((value, currentViewSelectionState, selectedView) => {
    const isSelectionFinishedOnCurrentView = currentViewSelectionState === 'finish';
    const hasMoreViews = selectedView ?
    // handles case like `DateTimePicker`, where a view might return a `finish` selection state
    // but when it's not the final view given all `views` -> overall selection state should be `partial`.
    views.indexOf(selectedView) < views.length - 1 : Boolean(nextView);
    const globalSelectionState = isSelectionFinishedOnCurrentView && hasMoreViews ? 'partial' : currentViewSelectionState;
    onChange(value, globalSelectionState, selectedView);

    // The selected view can be different from the active view,
    // This can happen if multiple views are displayed, like in `DesktopDateTimePicker` or `MultiSectionDigitalClock`.
    let currentView = null;
    if (selectedView != null && selectedView !== view) {
      currentView = selectedView;
    } else if (isSelectionFinishedOnCurrentView) {
      currentView = view;
    }
    if (currentView == null) {
      return;
    }
    const viewToNavigateTo = views[views.indexOf(currentView) + 1];
    if (viewToNavigateTo == null || !stepNavigation.areViewsInSameStep(currentView, viewToNavigateTo)) {
      return;
    }
    handleChangeView(viewToNavigateTo);
  });
  return _extends({}, stepNavigation, {
    view,
    setView: handleChangeView,
    focusedView,
    setFocusedView: handleFocusedViewChange,
    nextView,
    previousView,
    // Always return up-to-date default view instead of the initial one (i.e. defaultView.current)
    defaultView: views.includes(openTo) ? openTo : views[0],
    goToNextView,
    setValueAndGoToNextView
  });
}

function useNextMonthDisabled(month, {
  disableFuture,
  maxDate,
  timezone
}) {
  const adapter = usePickerAdapter();
  return React__namespace.useMemo(() => {
    const now = adapter.date(undefined, timezone);
    const lastEnabledMonth = adapter.startOfMonth(disableFuture && adapter.isBefore(now, maxDate) ? now : maxDate);
    return !adapter.isAfter(lastEnabledMonth, month);
  }, [disableFuture, maxDate, month, adapter, timezone]);
}
function usePreviousMonthDisabled(month, {
  disablePast,
  minDate,
  timezone
}) {
  const adapter = usePickerAdapter();
  return React__namespace.useMemo(() => {
    const now = adapter.date(undefined, timezone);
    const firstEnabledMonth = adapter.startOfMonth(disablePast && adapter.isAfter(now, minDate) ? now : minDate);
    return !adapter.isBefore(firstEnabledMonth, month);
  }, [disablePast, minDate, month, adapter, timezone]);
}
function useMeridiemMode(date, ampm, onChange, selectionState) {
  const adapter = usePickerAdapter();
  const cleanDate = React__namespace.useMemo(() => !adapter.isValid(date) ? null : date, [adapter, date]);
  const meridiemMode = getMeridiem(cleanDate, adapter);
  const handleMeridiemChange = React__namespace.useCallback(mode => {
    const timeWithMeridiem = cleanDate == null ? null : convertToMeridiem(cleanDate, mode, Boolean(ampm), adapter);
    onChange(timeWithMeridiem, selectionState ?? 'partial');
  }, [ampm, cleanDate, onChange, selectionState, adapter]);
  return {
    meridiemMode,
    handleMeridiemChange
  };
}

const DAY_SIZE = 36;
const DAY_MARGIN = 2;
const DIALOG_WIDTH = 320;
const MAX_CALENDAR_HEIGHT = 280;
const VIEW_HEIGHT = 336;
const DIGITAL_CLOCK_VIEW_HEIGHT = 232;
const MULTI_SECTION_CLOCK_SECTION_WIDTH = 48;

const PickerViewRoot = styles.styled('div')({
  overflow: 'hidden',
  width: DIALOG_WIDTH,
  maxHeight: VIEW_HEIGHT,
  display: 'flex',
  flexDirection: 'column',
  margin: '0 auto'
});

function getTimeClockUtilityClass(slot) {
  return generateUtilityClass('MuiTimeClock', slot);
}
generateUtilityClasses('MuiTimeClock', ['root', 'arrowSwitcher']);

const CLOCK_WIDTH = 220;
const CLOCK_HOUR_WIDTH = 36;
const clockCenter = {
  x: CLOCK_WIDTH / 2,
  y: CLOCK_WIDTH / 2
};
const baseClockPoint = {
  x: clockCenter.x,
  y: 0
};
const cx = baseClockPoint.x - clockCenter.x;
const cy = baseClockPoint.y - clockCenter.y;
const rad2deg = rad => rad * (180 / Math.PI);
const getAngleValue = (step, offsetX, offsetY) => {
  const x = offsetX - clockCenter.x;
  const y = offsetY - clockCenter.y;
  const atan = Math.atan2(cx, cy) - Math.atan2(x, y);
  let deg = rad2deg(atan);
  deg = Math.round(deg / step) * step;
  deg %= 360;
  const value = Math.floor(deg / step) || 0;
  const delta = x ** 2 + y ** 2;
  const distance = Math.sqrt(delta);
  return {
    value,
    distance
  };
};
const getMinutes = (offsetX, offsetY, step = 1) => {
  const angleStep = step * 6;
  let {
    value
  } = getAngleValue(angleStep, offsetX, offsetY);
  value = value * step % 60;
  return value;
};
const getHours = (offsetX, offsetY, ampm) => {
  const {
    value,
    distance
  } = getAngleValue(30, offsetX, offsetY);
  let hour = value || 12;
  if (!ampm) {
    if (distance < CLOCK_WIDTH / 2 - CLOCK_HOUR_WIDTH) {
      hour += 12;
      hour %= 24;
    }
  } else {
    hour %= 12;
  }
  return hour;
};

function getClockPointerUtilityClass(slot) {
  return generateUtilityClass('MuiClockPointer', slot);
}
generateUtilityClasses('MuiClockPointer', ['root', 'thumb']);

const _excluded$J = ["className", "classes", "isBetweenTwoClockValues", "isInner", "type", "viewValue"];
const useUtilityClasses$w = classes => {
  const slots = {
    root: ['root'],
    thumb: ['thumb']
  };
  return composeClasses(slots, getClockPointerUtilityClass, classes);
};
const ClockPointerRoot = styles.styled('div', {
  name: 'MuiClockPointer',
  slot: 'Root'
})(({
  theme
}) => ({
  width: 2,
  backgroundColor: (theme.vars || theme).palette.primary.main,
  position: 'absolute',
  left: 'calc(50% - 1px)',
  bottom: '50%',
  transformOrigin: 'center bottom 0px',
  variants: [{
    props: {
      isClockPointerAnimated: true
    },
    style: {
      transition: theme.transitions.create(['transform', 'height'])
    }
  }]
}));
const ClockPointerThumb = styles.styled('div', {
  name: 'MuiClockPointer',
  slot: 'Thumb'
})(({
  theme
}) => ({
  width: 4,
  height: 4,
  backgroundColor: (theme.vars || theme).palette.primary.contrastText,
  borderRadius: '50%',
  position: 'absolute',
  top: -21,
  left: `calc(50% - ${CLOCK_HOUR_WIDTH / 2}px)`,
  border: `${(CLOCK_HOUR_WIDTH - 4) / 2}px solid ${(theme.vars || theme).palette.primary.main}`,
  boxSizing: 'content-box',
  variants: [{
    props: {
      isClockPointerBetweenTwoValues: false
    },
    style: {
      backgroundColor: (theme.vars || theme).palette.primary.main
    }
  }]
}));

/**
 * @ignore - internal component.
 */
function ClockPointer(inProps) {
  const props = styles.useThemeProps({
    props: inProps,
    name: 'MuiClockPointer'
  });
  const {
      className,
      classes: classesProp,
      isBetweenTwoClockValues,
      isInner,
      type,
      viewValue
    } = props,
    other = _objectWithoutPropertiesLoose(props, _excluded$J);
  const previousType = React__namespace.useRef(type);
  React__namespace.useEffect(() => {
    previousType.current = type;
  }, [type]);
  const {
    ownerState: pickerOwnerState
  } = usePickerPrivateContext();
  const ownerState = _extends({}, pickerOwnerState, {
    isClockPointerAnimated: previousType.current !== type,
    isClockPointerBetweenTwoValues: isBetweenTwoClockValues
  });
  const classes = useUtilityClasses$w(classesProp);
  const getAngleStyle = () => {
    const max = type === 'hours' ? 12 : 60;
    let angle = 360 / max * viewValue;
    if (type === 'hours' && viewValue > 12) {
      angle -= 360; // round up angle to max 360 degrees
    }
    return {
      height: Math.round((isInner ? 0.26 : 0.4) * CLOCK_WIDTH),
      transform: `rotateZ(${angle}deg)`
    };
  };
  return /*#__PURE__*/jsxRuntime.jsx(ClockPointerRoot, _extends({
    style: getAngleStyle(),
    className: clsx(classes.root, className),
    ownerState: ownerState
  }, other, {
    children: /*#__PURE__*/jsxRuntime.jsx(ClockPointerThumb, {
      ownerState: ownerState,
      className: classes.thumb
    })
  }));
}

function getClockUtilityClass(slot) {
  return generateUtilityClass('MuiClock', slot);
}
generateUtilityClasses('MuiClock', ['root', 'clock', 'wrapper', 'squareMask', 'pin', 'amButton', 'pmButton', 'meridiemText', 'selected']);

const useUtilityClasses$v = (classes, ownerState) => {
  const slots = {
    root: ['root'],
    clock: ['clock'],
    wrapper: ['wrapper'],
    squareMask: ['squareMask'],
    pin: ['pin'],
    amButton: ['amButton', ownerState.clockMeridiemMode === 'am' && 'selected'],
    pmButton: ['pmButton', ownerState.clockMeridiemMode === 'pm' && 'selected'],
    meridiemText: ['meridiemText']
  };
  return composeClasses(slots, getClockUtilityClass, classes);
};
const ClockRoot = styles.styled('div', {
  name: 'MuiClock',
  slot: 'Root'
})(({
  theme
}) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: theme.spacing(2)
}));
const ClockClock = styles.styled('div', {
  name: 'MuiClock',
  slot: 'Clock'
})({
  backgroundColor: 'rgba(0,0,0,.07)',
  borderRadius: '50%',
  height: 220,
  width: 220,
  flexShrink: 0,
  position: 'relative',
  pointerEvents: 'none'
});
const ClockWrapper = styles.styled('div', {
  name: 'MuiClock',
  slot: 'Wrapper'
})({
  '&:focus': {
    outline: 'none'
  }
});
const ClockSquareMask = styles.styled('div', {
  name: 'MuiClock',
  slot: 'SquareMask'
})({
  width: '100%',
  height: '100%',
  position: 'absolute',
  pointerEvents: 'auto',
  outline: 0,
  // Disable scroll capabilities.
  touchAction: 'none',
  userSelect: 'none',
  variants: [{
    props: {
      isClockDisabled: false
    },
    style: {
      '@media (pointer: fine)': {
        cursor: 'pointer',
        borderRadius: '50%'
      },
      '&:active': {
        cursor: 'move'
      }
    }
  }]
});
const ClockPin = styles.styled('div', {
  name: 'MuiClock',
  slot: 'Pin'
})(({
  theme
}) => ({
  width: 6,
  height: 6,
  borderRadius: '50%',
  backgroundColor: (theme.vars || theme).palette.primary.main,
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)'
}));
const meridiemButtonCommonStyles = (theme, clockMeridiemMode) => ({
  zIndex: 1,
  bottom: 8,
  paddingLeft: 4,
  paddingRight: 4,
  width: CLOCK_HOUR_WIDTH,
  variants: [{
    props: {
      clockMeridiemMode
    },
    style: {
      backgroundColor: (theme.vars || theme).palette.primary.main,
      color: (theme.vars || theme).palette.primary.contrastText,
      '&:hover': {
        backgroundColor: (theme.vars || theme).palette.primary.light
      }
    }
  }]
});
const ClockAmButton = styles.styled(IconButton, {
  name: 'MuiClock',
  slot: 'AmButton'
})(({
  theme
}) => _extends({}, meridiemButtonCommonStyles(theme, 'am'), {
  // keeping it here to make TS happy
  position: 'absolute',
  left: 8
}));
const ClockPmButton = styles.styled(IconButton, {
  name: 'MuiClock',
  slot: 'PmButton'
})(({
  theme
}) => _extends({}, meridiemButtonCommonStyles(theme, 'pm'), {
  // keeping it here to make TS happy
  position: 'absolute',
  right: 8
}));
const ClockMeridiemText = styles.styled(Typography, {
  name: 'MuiClock',
  slot: 'MeridiemText'
})({
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis'
});

/**
 * @ignore - internal component.
 */
function Clock(inProps) {
  const props = styles.useThemeProps({
    props: inProps,
    name: 'MuiClock'
  });
  const {
    ampm,
    ampmInClock,
    autoFocus,
    children,
    value,
    handleMeridiemChange,
    isTimeDisabled,
    meridiemMode,
    minutesStep = 1,
    onChange,
    selectedId,
    type,
    viewValue,
    viewRange: [minViewValue, maxViewValue],
    disabled = false,
    readOnly,
    className,
    classes: classesProp
  } = props;
  const adapter = usePickerAdapter();
  const translations = usePickerTranslations();
  const {
    ownerState: pickerOwnerState
  } = usePickerPrivateContext();
  const ownerState = _extends({}, pickerOwnerState, {
    isClockDisabled: disabled,
    clockMeridiemMode: meridiemMode
  });
  const isMoving = React__namespace.useRef(false);
  const classes = useUtilityClasses$v(classesProp, ownerState);
  const isSelectedTimeDisabled = isTimeDisabled(viewValue, type);
  const isPointerInner = !ampm && type === 'hours' && (viewValue < 1 || viewValue > 12);
  const handleValueChange = (newValue, isFinish) => {
    if (disabled || readOnly) {
      return;
    }
    if (isTimeDisabled(newValue, type)) {
      return;
    }
    onChange(newValue, isFinish);
  };
  const setTime = (event, isFinish) => {
    let {
      offsetX,
      offsetY
    } = event;
    if (offsetX === undefined) {
      const rect = event.target.getBoundingClientRect();
      offsetX = event.changedTouches[0].clientX - rect.left;
      offsetY = event.changedTouches[0].clientY - rect.top;
    }
    const newSelectedValue = type === 'seconds' || type === 'minutes' ? getMinutes(offsetX, offsetY, minutesStep) : getHours(offsetX, offsetY, Boolean(ampm));
    handleValueChange(newSelectedValue, isFinish);
  };
  const handleTouchSelection = event => {
    isMoving.current = true;
    setTime(event, 'shallow');
  };
  const handleTouchEnd = event => {
    if (isMoving.current) {
      setTime(event, 'finish');
      isMoving.current = false;
    }
    event.preventDefault();
  };
  const handleMouseMove = event => {
    // event.buttons & PRIMARY_MOUSE_BUTTON
    if (event.buttons > 0) {
      setTime(event.nativeEvent, 'shallow');
    }
  };
  const handleMouseUp = event => {
    if (isMoving.current) {
      isMoving.current = false;
    }
    setTime(event.nativeEvent, 'finish');
  };
  const isPointerBetweenTwoClockValues = type === 'hours' ? false : viewValue % 5 !== 0;
  const keyboardControlStep = type === 'minutes' ? minutesStep : 1;
  const listboxRef = React__namespace.useRef(null);
  // Since this is rendered when a Popper is opened we can't use passive effects.
  // Focusing in passive effects in Popper causes scroll jump.
  useEnhancedEffect$1(() => {
    if (autoFocus) {
      // The ref not being resolved would be a bug in MUI.
      listboxRef.current.focus();
    }
  }, [autoFocus]);
  const clampValue = newValue => Math.max(minViewValue, Math.min(maxViewValue, newValue));
  const circleValue = newValue => (newValue + (maxViewValue + 1)) % (maxViewValue + 1);
  const handleKeyDown = event => {
    // TODO: Why this early exit?
    if (isMoving.current) {
      return;
    }
    switch (event.key) {
      case 'Home':
        // reset both hours and minutes
        handleValueChange(minViewValue, 'partial');
        event.preventDefault();
        break;
      case 'End':
        handleValueChange(maxViewValue, 'partial');
        event.preventDefault();
        break;
      case 'ArrowUp':
        handleValueChange(circleValue(viewValue + keyboardControlStep), 'partial');
        event.preventDefault();
        break;
      case 'ArrowDown':
        handleValueChange(circleValue(viewValue - keyboardControlStep), 'partial');
        event.preventDefault();
        break;
      case 'PageUp':
        handleValueChange(clampValue(viewValue + 5), 'partial');
        event.preventDefault();
        break;
      case 'PageDown':
        handleValueChange(clampValue(viewValue - 5), 'partial');
        event.preventDefault();
        break;
      case 'Enter':
      case ' ':
        handleValueChange(viewValue, 'finish');
        event.preventDefault();
        break;
      // do nothing
    }
  };
  return /*#__PURE__*/jsxRuntime.jsxs(ClockRoot, {
    className: clsx(classes.root, className),
    children: [/*#__PURE__*/jsxRuntime.jsxs(ClockClock, {
      className: classes.clock,
      children: [/*#__PURE__*/jsxRuntime.jsx(ClockSquareMask, {
        onTouchMove: handleTouchSelection,
        onTouchStart: handleTouchSelection,
        onTouchEnd: handleTouchEnd,
        onMouseUp: handleMouseUp,
        onMouseMove: handleMouseMove,
        ownerState: ownerState,
        className: classes.squareMask
      }), !isSelectedTimeDisabled && /*#__PURE__*/jsxRuntime.jsxs(React__namespace.Fragment, {
        children: [/*#__PURE__*/jsxRuntime.jsx(ClockPin, {
          className: classes.pin
        }), value != null && /*#__PURE__*/jsxRuntime.jsx(ClockPointer, {
          type: type,
          viewValue: viewValue,
          isInner: isPointerInner,
          isBetweenTwoClockValues: isPointerBetweenTwoClockValues
        })]
      }), /*#__PURE__*/jsxRuntime.jsx(ClockWrapper, {
        "aria-activedescendant": selectedId,
        "aria-label": translations.clockLabelText(type, value == null ? null : adapter.format(value, ampm ? 'fullTime12h' : 'fullTime24h')),
        ref: listboxRef,
        role: "listbox",
        onKeyDown: handleKeyDown,
        tabIndex: 0,
        className: classes.wrapper,
        children: children
      })]
    }), ampm && ampmInClock && /*#__PURE__*/jsxRuntime.jsxs(React__namespace.Fragment, {
      children: [/*#__PURE__*/jsxRuntime.jsx(ClockAmButton, {
        onClick: readOnly ? undefined : () => handleMeridiemChange('am'),
        disabled: disabled || meridiemMode === null,
        ownerState: ownerState,
        className: classes.amButton,
        title: formatMeridiem(adapter, 'am'),
        children: /*#__PURE__*/jsxRuntime.jsx(ClockMeridiemText, {
          variant: "caption",
          className: classes.meridiemText,
          children: formatMeridiem(adapter, 'am')
        })
      }), /*#__PURE__*/jsxRuntime.jsx(ClockPmButton, {
        disabled: disabled || meridiemMode === null,
        onClick: readOnly ? undefined : () => handleMeridiemChange('pm'),
        ownerState: ownerState,
        className: classes.pmButton,
        title: formatMeridiem(adapter, 'pm'),
        children: /*#__PURE__*/jsxRuntime.jsx(ClockMeridiemText, {
          variant: "caption",
          className: classes.meridiemText,
          children: formatMeridiem(adapter, 'pm')
        })
      })]
    })]
  });
}

function getClockNumberUtilityClass(slot) {
  return generateUtilityClass('MuiClockNumber', slot);
}
const clockNumberClasses = generateUtilityClasses('MuiClockNumber', ['root', 'selected', 'disabled']);

const _excluded$I = ["className", "classes", "disabled", "index", "inner", "label", "selected"];
const useUtilityClasses$u = (classes, ownerState) => {
  const slots = {
    root: ['root', ownerState.isClockNumberSelected && 'selected', ownerState.isClockNumberDisabled && 'disabled']
  };
  return composeClasses(slots, getClockNumberUtilityClass, classes);
};
const ClockNumberRoot = styles.styled('span', {
  name: 'MuiClockNumber',
  slot: 'Root',
  overridesResolver: (_, styles) => [styles.root, {
    [`&.${clockNumberClasses.disabled}`]: styles.disabled
  }, {
    [`&.${clockNumberClasses.selected}`]: styles.selected
  }]
})(({
  theme
}) => ({
  height: CLOCK_HOUR_WIDTH,
  width: CLOCK_HOUR_WIDTH,
  position: 'absolute',
  left: `calc((100% - ${CLOCK_HOUR_WIDTH}px) / 2)`,
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '50%',
  color: (theme.vars || theme).palette.text.primary,
  fontFamily: theme.typography.fontFamily,
  '&:focused': {
    backgroundColor: (theme.vars || theme).palette.background.paper
  },
  [`&.${clockNumberClasses.selected}`]: {
    color: (theme.vars || theme).palette.primary.contrastText
  },
  [`&.${clockNumberClasses.disabled}`]: {
    pointerEvents: 'none',
    color: (theme.vars || theme).palette.text.disabled
  },
  variants: [{
    props: {
      isClockNumberInInnerRing: true
    },
    style: _extends({}, theme.typography.body2, {
      color: (theme.vars || theme).palette.text.secondary
    })
  }]
}));

/**
 * @ignore - internal component.
 */
function ClockNumber(inProps) {
  const props = styles.useThemeProps({
    props: inProps,
    name: 'MuiClockNumber'
  });
  const {
      className,
      classes: classesProp,
      disabled,
      index,
      inner,
      label,
      selected
    } = props,
    other = _objectWithoutPropertiesLoose(props, _excluded$I);
  const {
    ownerState: pickerOwnerState
  } = usePickerPrivateContext();
  const ownerState = _extends({}, pickerOwnerState, {
    isClockNumberInInnerRing: inner,
    isClockNumberSelected: selected,
    isClockNumberDisabled: disabled
  });
  const classes = useUtilityClasses$u(classesProp, ownerState);
  const angle = index % 12 / 12 * Math.PI * 2 - Math.PI / 2;
  const length = (CLOCK_WIDTH - CLOCK_HOUR_WIDTH - 2) / 2 * (inner ? 0.65 : 1);
  const x = Math.round(Math.cos(angle) * length);
  const y = Math.round(Math.sin(angle) * length);
  return /*#__PURE__*/jsxRuntime.jsx(ClockNumberRoot, _extends({
    className: clsx(classes.root, className),
    "aria-disabled": disabled ? true : undefined,
    "aria-selected": selected ? true : undefined,
    role: "option",
    style: {
      transform: `translate(${x}px, ${y + (CLOCK_WIDTH - CLOCK_HOUR_WIDTH) / 2}px`
    },
    ownerState: ownerState
  }, other, {
    children: label
  }));
}

/**
 * @ignore - internal component.
 */
const getHourNumbers = ({
  ampm,
  value,
  getClockNumberText,
  isDisabled,
  selectedId,
  adapter
}) => {
  const currentHours = value ? adapter.getHours(value) : null;
  const hourNumbers = [];
  const startHour = ampm ? 1 : 0;
  const endHour = ampm ? 12 : 23;
  const isSelected = hour => {
    if (currentHours === null) {
      return false;
    }
    if (ampm) {
      if (hour === 12) {
        return currentHours === 12 || currentHours === 0;
      }
      return currentHours === hour || currentHours - 12 === hour;
    }
    return currentHours === hour;
  };
  for (let hour = startHour; hour <= endHour; hour += 1) {
    let label = hour.toString();
    if (hour === 0) {
      label = '00';
    }
    const inner = !ampm && (hour === 0 || hour > 12);
    label = adapter.formatNumber(label);
    const selected = isSelected(hour);
    hourNumbers.push(/*#__PURE__*/jsxRuntime.jsx(ClockNumber, {
      id: selected ? selectedId : undefined,
      index: hour,
      inner: inner,
      selected: selected,
      disabled: isDisabled(hour),
      label: label,
      "aria-label": getClockNumberText(label)
    }, hour));
  }
  return hourNumbers;
};
const getMinutesNumbers = ({
  adapter,
  value,
  isDisabled,
  getClockNumberText,
  selectedId
}) => {
  const f = adapter.formatNumber;
  return [[5, f('05')], [10, f('10')], [15, f('15')], [20, f('20')], [25, f('25')], [30, f('30')], [35, f('35')], [40, f('40')], [45, f('45')], [50, f('50')], [55, f('55')], [0, f('00')]].map(([numberValue, label], index) => {
    const selected = numberValue === value;
    return /*#__PURE__*/jsxRuntime.jsx(ClockNumber, {
      label: label,
      id: selected ? selectedId : undefined,
      index: index + 1,
      inner: false,
      disabled: isDisabled(numberValue),
      selected: selected,
      "aria-label": getClockNumberText(label)
    }, numberValue);
  });
};

/**
 * Hooks controlling the value while making sure that:
 * - The value returned by `onChange` always have the timezone of `props.value` or `props.defaultValue` if defined
 * - The value rendered is always the one from `props.timezone` if defined
 */
const useControlledValue = ({
  name,
  timezone: timezoneProp,
  value: valueProp,
  defaultValue,
  referenceDate,
  onChange: onChangeProp,
  valueManager
}) => {
  const adapter = usePickerAdapter();
  const [valueWithInputTimezone, setValue] = useControlled({
    name,
    state: 'value',
    controlled: valueProp,
    default: defaultValue ?? valueManager.emptyValue
  });
  const inputTimezone = React__namespace.useMemo(() => valueManager.getTimezone(adapter, valueWithInputTimezone), [adapter, valueManager, valueWithInputTimezone]);
  const setInputTimezone = useEventCallback(newValue => {
    if (inputTimezone == null) {
      return newValue;
    }
    return valueManager.setTimezone(adapter, inputTimezone, newValue);
  });
  const timezoneToRender = React__namespace.useMemo(() => {
    if (timezoneProp) {
      return timezoneProp;
    }
    if (inputTimezone) {
      return inputTimezone;
    }
    if (referenceDate) {
      return adapter.getTimezone(Array.isArray(referenceDate) ? referenceDate[0] : referenceDate);
    }
    return 'default';
  }, [timezoneProp, inputTimezone, referenceDate, adapter]);
  const valueWithTimezoneToRender = React__namespace.useMemo(() => valueManager.setTimezone(adapter, timezoneToRender, valueWithInputTimezone), [valueManager, adapter, timezoneToRender, valueWithInputTimezone]);
  const handleValueChange = useEventCallback((newValue, ...otherParams) => {
    const newValueWithInputTimezone = setInputTimezone(newValue);
    setValue(newValueWithInputTimezone);
    onChangeProp?.(newValueWithInputTimezone, ...otherParams);
  });
  return {
    value: valueWithTimezoneToRender,
    handleValueChange,
    timezone: timezoneToRender
  };
};

const SECTION_TYPE_GRANULARITY = {
  year: 1,
  month: 2,
  day: 3,
  hours: 4,
  minutes: 5,
  seconds: 6,
  milliseconds: 7
};
const getSectionTypeGranularity = sections => Math.max(...sections.map(section => SECTION_TYPE_GRANULARITY[section.type] ?? 1));
const roundDate = (adapter, granularity, date) => {
  if (granularity === SECTION_TYPE_GRANULARITY.year) {
    return adapter.startOfYear(date);
  }
  if (granularity === SECTION_TYPE_GRANULARITY.month) {
    return adapter.startOfMonth(date);
  }
  if (granularity === SECTION_TYPE_GRANULARITY.day) {
    return adapter.startOfDay(date);
  }

  // We don't have startOfHour / startOfMinute / startOfSecond
  let roundedDate = date;
  if (granularity < SECTION_TYPE_GRANULARITY.minutes) {
    roundedDate = adapter.setMinutes(roundedDate, 0);
  }
  if (granularity < SECTION_TYPE_GRANULARITY.seconds) {
    roundedDate = adapter.setSeconds(roundedDate, 0);
  }
  if (granularity < SECTION_TYPE_GRANULARITY.milliseconds) {
    roundedDate = adapter.setMilliseconds(roundedDate, 0);
  }
  return roundedDate;
};
const getDefaultReferenceDate = ({
  props,
  adapter,
  granularity,
  timezone,
  getTodayDate: inGetTodayDate
}) => {
  let referenceDate = inGetTodayDate ? inGetTodayDate() : roundDate(adapter, granularity, getTodayDate(adapter, timezone));
  if (props.minDate != null && adapter.isAfterDay(props.minDate, referenceDate)) {
    referenceDate = roundDate(adapter, granularity, props.minDate);
  }
  if (props.maxDate != null && adapter.isBeforeDay(props.maxDate, referenceDate)) {
    referenceDate = roundDate(adapter, granularity, props.maxDate);
  }
  const isAfter = createIsAfterIgnoreDatePart(props.disableIgnoringDatePartForTimeValidation ?? false, adapter);
  if (props.minTime != null && isAfter(props.minTime, referenceDate)) {
    referenceDate = roundDate(adapter, granularity, props.disableIgnoringDatePartForTimeValidation ? props.minTime : mergeDateAndTime(adapter, referenceDate, props.minTime));
  }
  if (props.maxTime != null && isAfter(referenceDate, props.maxTime)) {
    referenceDate = roundDate(adapter, granularity, props.disableIgnoringDatePartForTimeValidation ? props.maxTime : mergeDateAndTime(adapter, referenceDate, props.maxTime));
  }
  return referenceDate;
};

const _excluded$H = ["value", "referenceDate"];
const singleItemValueManager = {
  emptyValue: null,
  getTodayValue: getTodayDate,
  getInitialReferenceValue: _ref => {
    let {
        value,
        referenceDate
      } = _ref,
      params = _objectWithoutPropertiesLoose(_ref, _excluded$H);
    if (params.adapter.isValid(value)) {
      return value;
    }
    if (referenceDate != null) {
      return referenceDate;
    }
    return getDefaultReferenceDate(params);
  },
  cleanValue: replaceInvalidDateByNull,
  areValuesEqual: areDatesEqual,
  isSameError: (a, b) => a === b,
  hasError: error => error != null,
  defaultErrorState: null,
  getTimezone: (adapter, value) => adapter.isValid(value) ? adapter.getTimezone(value) : null,
  setTimezone: (adapter, timezone, value) => value == null ? null : adapter.setTimezone(value, timezone)
};
const singleItemFieldValueManager = {
  updateReferenceValue: (adapter, value, prevReferenceValue) => adapter.isValid(value) ? value : prevReferenceValue,
  getSectionsFromValue: (date, getSectionsFromDate) => getSectionsFromDate(date),
  getV7HiddenInputValueFromSections: createDateStrForV7HiddenInputFromSections,
  getV6InputValueFromSections: createDateStrForV6InputFromSections,
  parseValueStr: (valueStr, referenceValue, parseDate) => parseDate(valueStr.trim(), referenceValue),
  getDateFromSection: value => value,
  getDateSectionsFromValue: sections => sections,
  updateDateInValue: (value, activeSection, activeDate) => activeDate,
  clearDateSections: sections => sections.map(section => _extends({}, section, {
    value: ''
  }))
};

const useClockReferenceDate = ({
  value,
  referenceDate: referenceDateProp,
  adapter,
  props,
  timezone
}) => {
  const referenceDate = React__namespace.useMemo(() => singleItemValueManager.getInitialReferenceValue({
    value,
    adapter,
    props,
    referenceDate: referenceDateProp,
    granularity: SECTION_TYPE_GRANULARITY.day,
    timezone,
    getTodayDate: () => getTodayDate(adapter, timezone, 'date')
  }),
  // We want the `referenceDate` to update on prop and `timezone` change (https://github.com/mui/mui-x/issues/10804)
  [referenceDateProp, timezone] // eslint-disable-line react-hooks/exhaustive-deps
  );
  return value ?? referenceDate;
};

const _excluded$G = ["ampm", "ampmInClock", "autoFocus", "slots", "slotProps", "value", "defaultValue", "referenceDate", "disableIgnoringDatePartForTimeValidation", "maxTime", "minTime", "disableFuture", "disablePast", "minutesStep", "shouldDisableTime", "showViewSwitcher", "onChange", "view", "views", "openTo", "onViewChange", "focusedView", "onFocusedViewChange", "className", "classes", "disabled", "readOnly", "timezone"];
const useUtilityClasses$t = classes => {
  const slots = {
    root: ['root'],
    arrowSwitcher: ['arrowSwitcher']
  };
  return composeClasses(slots, getTimeClockUtilityClass, classes);
};
const TimeClockRoot = styles.styled(PickerViewRoot, {
  name: 'MuiTimeClock',
  slot: 'Root'
})({
  display: 'flex',
  flexDirection: 'column',
  position: 'relative'
});
const TimeClockArrowSwitcher = styles.styled(PickersArrowSwitcher, {
  name: 'MuiTimeClock',
  slot: 'ArrowSwitcher'
})({
  position: 'absolute',
  right: 12,
  top: 15
});
const TIME_CLOCK_DEFAULT_VIEWS = ['hours', 'minutes'];

/**
 * Demos:
 *
 * - [TimePicker](https://mui.com/x/react-date-pickers/time-picker/)
 * - [TimeClock](https://mui.com/x/react-date-pickers/time-clock/)
 *
 * API:
 *
 * - [TimeClock API](https://mui.com/x/api/date-pickers/time-clock/)
 */
const TimeClock = /*#__PURE__*/React__namespace.forwardRef(function TimeClock(inProps, ref) {
  const adapter = usePickerAdapter();
  const props = styles.useThemeProps({
    props: inProps,
    name: 'MuiTimeClock'
  });
  const {
      ampm = adapter.is12HourCycleInCurrentLocale(),
      ampmInClock = false,
      autoFocus,
      slots,
      slotProps,
      value: valueProp,
      defaultValue,
      referenceDate: referenceDateProp,
      disableIgnoringDatePartForTimeValidation = false,
      maxTime,
      minTime,
      disableFuture,
      disablePast,
      minutesStep = 1,
      shouldDisableTime,
      showViewSwitcher,
      onChange,
      view: inView,
      views = TIME_CLOCK_DEFAULT_VIEWS,
      openTo,
      onViewChange,
      focusedView,
      onFocusedViewChange,
      className,
      classes: classesProp,
      disabled,
      readOnly,
      timezone: timezoneProp
    } = props,
    other = _objectWithoutPropertiesLoose(props, _excluded$G);
  const {
    value,
    handleValueChange,
    timezone
  } = useControlledValue({
    name: 'TimeClock',
    timezone: timezoneProp,
    value: valueProp,
    defaultValue,
    referenceDate: referenceDateProp,
    onChange,
    valueManager: singleItemValueManager
  });
  const valueOrReferenceDate = useClockReferenceDate({
    value,
    referenceDate: referenceDateProp,
    adapter,
    props,
    timezone
  });
  const translations = usePickerTranslations();
  const now = useNow(timezone);
  const selectedId = useId();
  const {
    ownerState
  } = usePickerPrivateContext();
  const {
    view,
    setView,
    previousView,
    nextView,
    setValueAndGoToNextView
  } = useViews({
    view: inView,
    views,
    openTo,
    onViewChange,
    onChange: handleValueChange,
    focusedView,
    onFocusedViewChange
  });
  const {
    meridiemMode,
    handleMeridiemChange
  } = useMeridiemMode(valueOrReferenceDate, ampm, setValueAndGoToNextView);
  const isTimeDisabled = React__namespace.useCallback((rawValue, viewType) => {
    const isAfter = createIsAfterIgnoreDatePart(disableIgnoringDatePartForTimeValidation, adapter);
    const shouldCheckPastEnd = viewType === 'hours' || viewType === 'minutes' && views.includes('seconds');
    const containsValidTime = ({
      start,
      end
    }) => {
      if (minTime && isAfter(minTime, end)) {
        return false;
      }
      if (maxTime && isAfter(start, maxTime)) {
        return false;
      }
      if (disableFuture && isAfter(start, now)) {
        return false;
      }
      if (disablePast && isAfter(now, shouldCheckPastEnd ? end : start)) {
        return false;
      }
      return true;
    };
    const isValidValue = (timeValue, step = 1) => {
      if (timeValue % step !== 0) {
        return false;
      }
      if (shouldDisableTime) {
        switch (viewType) {
          case 'hours':
            return !shouldDisableTime(adapter.setHours(valueOrReferenceDate, timeValue), 'hours');
          case 'minutes':
            return !shouldDisableTime(adapter.setMinutes(valueOrReferenceDate, timeValue), 'minutes');
          case 'seconds':
            return !shouldDisableTime(adapter.setSeconds(valueOrReferenceDate, timeValue), 'seconds');
          default:
            return false;
        }
      }
      return true;
    };
    switch (viewType) {
      case 'hours':
        {
          const valueWithMeridiem = convertValueToMeridiem(rawValue, meridiemMode, ampm);
          const dateWithNewHours = adapter.setHours(valueOrReferenceDate, valueWithMeridiem);
          if (adapter.getHours(dateWithNewHours) !== valueWithMeridiem) {
            return true;
          }
          const start = adapter.setSeconds(adapter.setMinutes(dateWithNewHours, 0), 0);
          const end = adapter.setSeconds(adapter.setMinutes(dateWithNewHours, 59), 59);
          return !containsValidTime({
            start,
            end
          }) || !isValidValue(valueWithMeridiem);
        }
      case 'minutes':
        {
          const dateWithNewMinutes = adapter.setMinutes(valueOrReferenceDate, rawValue);
          const start = adapter.setSeconds(dateWithNewMinutes, 0);
          const end = adapter.setSeconds(dateWithNewMinutes, 59);
          return !containsValidTime({
            start,
            end
          }) || !isValidValue(rawValue, minutesStep);
        }
      case 'seconds':
        {
          const dateWithNewSeconds = adapter.setSeconds(valueOrReferenceDate, rawValue);
          const start = dateWithNewSeconds;
          const end = dateWithNewSeconds;
          return !containsValidTime({
            start,
            end
          }) || !isValidValue(rawValue);
        }
      default:
        throw new Error('not supported');
    }
  }, [ampm, valueOrReferenceDate, disableIgnoringDatePartForTimeValidation, maxTime, meridiemMode, minTime, minutesStep, shouldDisableTime, adapter, disableFuture, disablePast, now, views]);
  const viewProps = React__namespace.useMemo(() => {
    switch (view) {
      case 'hours':
        {
          const handleHoursChange = (hourValue, isFinish) => {
            const valueWithMeridiem = convertValueToMeridiem(hourValue, meridiemMode, ampm);
            setValueAndGoToNextView(adapter.setHours(valueOrReferenceDate, valueWithMeridiem), isFinish, 'hours');
          };
          const viewValue = adapter.getHours(valueOrReferenceDate);
          let viewRange;
          if (ampm) {
            if (viewValue > 12) {
              viewRange = [12, 23];
            } else {
              viewRange = [0, 11];
            }
          } else {
            viewRange = [0, 23];
          }
          return {
            onChange: handleHoursChange,
            viewValue,
            children: getHourNumbers({
              value,
              adapter,
              ampm,
              onChange: handleHoursChange,
              getClockNumberText: translations.hoursClockNumberText,
              isDisabled: hourValue => disabled || isTimeDisabled(hourValue, 'hours'),
              selectedId
            }),
            viewRange
          };
        }
      case 'minutes':
        {
          const minutesValue = adapter.getMinutes(valueOrReferenceDate);
          const handleMinutesChange = (minuteValue, isFinish) => {
            setValueAndGoToNextView(adapter.setMinutes(valueOrReferenceDate, minuteValue), isFinish, 'minutes');
          };
          return {
            viewValue: minutesValue,
            onChange: handleMinutesChange,
            children: getMinutesNumbers({
              adapter,
              value: minutesValue,
              onChange: handleMinutesChange,
              getClockNumberText: translations.minutesClockNumberText,
              isDisabled: minuteValue => disabled || isTimeDisabled(minuteValue, 'minutes'),
              selectedId
            }),
            viewRange: [0, 59]
          };
        }
      case 'seconds':
        {
          const secondsValue = adapter.getSeconds(valueOrReferenceDate);
          const handleSecondsChange = (secondValue, isFinish) => {
            setValueAndGoToNextView(adapter.setSeconds(valueOrReferenceDate, secondValue), isFinish, 'seconds');
          };
          return {
            viewValue: secondsValue,
            onChange: handleSecondsChange,
            children: getMinutesNumbers({
              adapter,
              value: secondsValue,
              onChange: handleSecondsChange,
              getClockNumberText: translations.secondsClockNumberText,
              isDisabled: secondValue => disabled || isTimeDisabled(secondValue, 'seconds'),
              selectedId
            }),
            viewRange: [0, 59]
          };
        }
      default:
        throw new Error('You must provide the type for ClockView');
    }
  }, [view, adapter, value, ampm, translations.hoursClockNumberText, translations.minutesClockNumberText, translations.secondsClockNumberText, meridiemMode, setValueAndGoToNextView, valueOrReferenceDate, isTimeDisabled, selectedId, disabled]);
  const classes = useUtilityClasses$t(classesProp);
  return /*#__PURE__*/jsxRuntime.jsxs(TimeClockRoot, _extends({
    ref: ref,
    className: clsx(classes.root, className),
    ownerState: ownerState
  }, other, {
    children: [/*#__PURE__*/jsxRuntime.jsx(Clock, _extends({
      autoFocus: autoFocus ?? !!focusedView,
      ampmInClock: ampmInClock && views.includes('hours'),
      value: value,
      type: view,
      ampm: ampm,
      minutesStep: minutesStep,
      isTimeDisabled: isTimeDisabled,
      meridiemMode: meridiemMode,
      handleMeridiemChange: handleMeridiemChange,
      selectedId: selectedId,
      disabled: disabled,
      readOnly: readOnly
    }, viewProps)), showViewSwitcher && /*#__PURE__*/jsxRuntime.jsx(TimeClockArrowSwitcher, {
      className: classes.arrowSwitcher,
      slots: slots,
      slotProps: slotProps,
      onGoToPrevious: () => setView(previousView),
      isPreviousDisabled: !previousView,
      previousLabel: translations.openPreviousView,
      onGoToNext: () => setView(nextView),
      isNextDisabled: !nextView,
      nextLabel: translations.openNextView,
      ownerState: ownerState
    })]
  }));
});
if (process.env.NODE_ENV !== "production") TimeClock.displayName = "TimeClock";
process.env.NODE_ENV !== "production" ? TimeClock.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * 12h/24h view for hour selection clock.
   * @default adapter.is12HourCycleInCurrentLocale()
   */
  ampm: PropTypes.bool,
  /**
   * Display ampm controls under the clock (instead of in the toolbar).
   * @default false
   */
  ampmInClock: PropTypes.bool,
  /**
   * If `true`, the main element is focused during the first mount.
   * This main element is:
   * - the element chosen by the visible view if any (i.e: the selected day on the `day` view).
   * - the `input` element if there is a field rendered.
   */
  autoFocus: PropTypes.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,
  className: PropTypes.string,
  /**
   * The default selected value.
   * Used when the component is not controlled.
   */
  defaultValue: PropTypes.object,
  /**
   * If `true`, the component is disabled.
   * When disabled, the value cannot be changed and no interaction is possible.
   * @default false
   */
  disabled: PropTypes.bool,
  /**
   * If `true`, disable values after the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disableFuture: PropTypes.bool,
  /**
   * Do not ignore date part when validating min/max time.
   * @default false
   */
  disableIgnoringDatePartForTimeValidation: PropTypes.bool,
  /**
   * If `true`, disable values before the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disablePast: PropTypes.bool,
  /**
   * Controlled focused view.
   */
  focusedView: PropTypes.oneOf(['hours', 'minutes', 'seconds']),
  /**
   * Maximal selectable time.
   * The date part of the object will be ignored unless `props.disableIgnoringDatePartForTimeValidation === true`.
   */
  maxTime: PropTypes.object,
  /**
   * Minimal selectable time.
   * The date part of the object will be ignored unless `props.disableIgnoringDatePartForTimeValidation === true`.
   */
  minTime: PropTypes.object,
  /**
   * Step over minutes.
   * @default 1
   */
  minutesStep: PropTypes.number,
  /**
   * Callback fired when the value changes.
   * @template TValue The value type. It will be the same type as `value` or `null`. It can be in `[start, end]` format in case of range value.
   * @template TView The view type. Will be one of date or time views.
   * @param {TValue} value The new value.
   * @param {PickerSelectionState | undefined} selectionState Indicates if the date selection is complete.
   * @param {TView | undefined} selectedView Indicates the view in which the selection has been made.
   */
  onChange: PropTypes.func,
  /**
   * Callback fired on focused view change.
   * @template TView Type of the view. It will vary based on the Picker type and the `views` it uses.
   * @param {TView} view The new view to focus or not.
   * @param {boolean} hasFocus `true` if the view should be focused.
   */
  onFocusedViewChange: PropTypes.func,
  /**
   * Callback fired on view change.
   * @template TView Type of the view. It will vary based on the Picker type and the `views` it uses.
   * @param {TView} view The new view.
   */
  onViewChange: PropTypes.func,
  /**
   * The default visible view.
   * Used when the component view is not controlled.
   * Must be a valid option from `views` list.
   */
  openTo: PropTypes.oneOf(['hours', 'minutes', 'seconds']),
  /**
   * If `true`, the component is read-only.
   * When read-only, the value cannot be changed but the user can interact with the interface.
   * @default false
   */
  readOnly: PropTypes.bool,
  /**
   * The date used to generate the new value when both `value` and `defaultValue` are empty.
   * @default The closest valid time using the validation props, except callbacks such as `shouldDisableTime`.
   */
  referenceDate: PropTypes.object,
  /**
   * Disable specific time.
   * @param {PickerValidDate} value The value to check.
   * @param {TimeView} view The clock type of the timeValue.
   * @returns {boolean} If `true` the time will be disabled.
   */
  shouldDisableTime: PropTypes.func,
  showViewSwitcher: PropTypes.bool,
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: PropTypes.object,
  /**
   * Overridable component slots.
   * @default {}
   */
  slots: PropTypes.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])), PropTypes.func, PropTypes.object]),
  /**
   * Choose which timezone to use for the value.
   * Example: "default", "system", "UTC", "America/New_York".
   * If you pass values from other timezones to some props, they will be converted to this timezone before being used.
   * @see See the {@link https://mui.com/x/react-date-pickers/timezone/ timezones documentation} for more details.
   * @default The timezone of the `value` or `defaultValue` prop is defined, 'default' otherwise.
   */
  timezone: PropTypes.string,
  /**
   * The selected value.
   * Used when the component is controlled.
   */
  value: PropTypes.object,
  /**
   * The visible view.
   * Used when the component view is controlled.
   * Must be a valid option from `views` list.
   */
  view: PropTypes.oneOf(['hours', 'minutes', 'seconds']),
  /**
   * Available views.
   * @default ['hours', 'minutes']
   */
  views: PropTypes.arrayOf(PropTypes.oneOf(['hours', 'minutes', 'seconds']).isRequired)
} : void 0;

function getDigitalClockUtilityClass(slot) {
  return generateUtilityClass('MuiDigitalClock', slot);
}
const digitalClockClasses = generateUtilityClasses('MuiDigitalClock', ['root', 'list', 'item']);

function ownerDocument(node) {
  return node && node.ownerDocument || document;
}

/* Use it instead of .includes method for IE support */
function arrayIncludes(array, itemOrItems) {
  if (Array.isArray(itemOrItems)) {
    return itemOrItems.every(item => array.indexOf(item) !== -1);
  }
  return array.indexOf(itemOrItems) !== -1;
}
const executeInTheNextEventLoopTick = fn => {
  setTimeout(fn, 0);
};

// https://www.abeautifulsite.net/posts/finding-the-active-element-in-a-shadow-root/
const getActiveElementInternal = (root = document) => {
  const activeEl = root.activeElement;
  if (!activeEl) {
    return null;
  }
  if (activeEl.shadowRoot) {
    return getActiveElementInternal(activeEl.shadowRoot);
  }
  return activeEl;
};

/**
 * Gets the currently active element within a given node's document.
 * This function traverses shadow DOM if necessary.
 * @param node - The node from which to get the active element.
 * @returns The currently active element, or null if none is found.
 */
const getActiveElement = node => {
  return getActiveElementInternal(ownerDocument(node));
};

/**
 * Gets the index of the focused list item in a given ul list element.
 *
 * @param {HTMLUListElement} listElement - The list element to search within.
 * @returns {number} The index of the focused list item, or -1 if none is focused.
 */
const getFocusedListItemIndex = listElement => {
  const children = Array.from(listElement.children);
  return children.indexOf(getActiveElement(listElement));
};
const DEFAULT_DESKTOP_MODE_MEDIA_QUERY = '@media (pointer: fine)';
function mergeSx(...sxProps) {
  return sxProps.reduce((acc, sxProp) => {
    if (Array.isArray(sxProp)) {
      acc.push(...sxProp);
    } else if (sxProp != null) {
      acc.push(sxProp);
    }
    return acc;
  }, []);
}

const _excluded$F = ["ampm", "timeStep", "autoFocus", "slots", "slotProps", "value", "defaultValue", "referenceDate", "disableIgnoringDatePartForTimeValidation", "maxTime", "minTime", "disableFuture", "disablePast", "minutesStep", "shouldDisableTime", "onChange", "view", "openTo", "onViewChange", "focusedView", "onFocusedViewChange", "className", "classes", "disabled", "readOnly", "views", "skipDisabled", "timezone"];
const useUtilityClasses$s = classes => {
  const slots = {
    root: ['root'],
    list: ['list'],
    item: ['item']
  };
  return composeClasses(slots, getDigitalClockUtilityClass, classes);
};
const DigitalClockRoot = styles.styled(PickerViewRoot, {
  name: 'MuiDigitalClock',
  slot: 'Root'
})({
  overflowY: 'auto',
  width: '100%',
  scrollbarWidth: 'thin',
  '@media (prefers-reduced-motion: no-preference)': {
    scrollBehavior: 'auto'
  },
  maxHeight: DIGITAL_CLOCK_VIEW_HEIGHT,
  variants: [{
    props: {
      hasDigitalClockAlreadyBeenRendered: true
    },
    style: {
      '@media (prefers-reduced-motion: no-preference)': {
        scrollBehavior: 'smooth'
      }
    }
  }]
});
const DigitalClockList = styles.styled(MenuList, {
  name: 'MuiDigitalClock',
  slot: 'List'
})({
  padding: 0
});
const DigitalClockItem = styles.styled(MenuItem, {
  name: 'MuiDigitalClock',
  slot: 'Item',
  shouldForwardProp: prop => prop !== 'itemValue' && prop !== 'formattedValue'
})(({
  theme
}) => ({
  padding: '8px 16px',
  margin: '2px 4px',
  '&:first-of-type': {
    marginTop: 4
  },
  '&:hover': {
    backgroundColor: theme.vars ? `rgba(${theme.vars.palette.primary.mainChannel} / ${theme.vars.palette.action.hoverOpacity})` : styles.alpha(theme.palette.primary.main, theme.palette.action.hoverOpacity)
  },
  '&.Mui-selected': {
    backgroundColor: (theme.vars || theme).palette.primary.main,
    color: (theme.vars || theme).palette.primary.contrastText,
    '&:focus-visible, &:hover': {
      backgroundColor: (theme.vars || theme).palette.primary.dark
    }
  },
  '&.Mui-focusVisible': {
    backgroundColor: theme.vars ? `rgba(${theme.vars.palette.primary.mainChannel} / ${theme.vars.palette.action.focusOpacity})` : styles.alpha(theme.palette.primary.main, theme.palette.action.focusOpacity)
  }
}));
/**
 * Demos:
 *
 * - [TimePicker](https://mui.com/x/react-date-pickers/time-picker/)
 * - [DigitalClock](https://mui.com/x/react-date-pickers/digital-clock/)
 *
 * API:
 *
 * - [DigitalClock API](https://mui.com/x/api/date-pickers/digital-clock/)
 */
const DigitalClock = /*#__PURE__*/React__namespace.forwardRef(function DigitalClock(inProps, ref) {
  const adapter = usePickerAdapter();
  const containerRef = React__namespace.useRef(null);
  const handleRef = useForkRef(ref, containerRef);
  const listRef = React__namespace.useRef(null);
  const props = styles.useThemeProps({
    props: inProps,
    name: 'MuiDigitalClock'
  });
  const {
      ampm = adapter.is12HourCycleInCurrentLocale(),
      timeStep = 30,
      autoFocus,
      slots,
      slotProps,
      value: valueProp,
      defaultValue,
      referenceDate: referenceDateProp,
      disableIgnoringDatePartForTimeValidation = false,
      maxTime,
      minTime,
      disableFuture,
      disablePast,
      minutesStep = 1,
      shouldDisableTime,
      onChange,
      view: inView,
      openTo,
      onViewChange,
      focusedView,
      onFocusedViewChange,
      className,
      classes: classesProp,
      disabled,
      readOnly,
      views = ['hours'],
      skipDisabled = false,
      timezone: timezoneProp
    } = props,
    other = _objectWithoutPropertiesLoose(props, _excluded$F);
  const {
    value,
    handleValueChange: handleRawValueChange,
    timezone
  } = useControlledValue({
    name: 'DigitalClock',
    timezone: timezoneProp,
    value: valueProp,
    defaultValue,
    referenceDate: referenceDateProp,
    onChange,
    valueManager: singleItemValueManager
  });
  const translations = usePickerTranslations();
  const now = useNow(timezone);
  const {
    ownerState: pickerOwnerState
  } = usePickerPrivateContext();
  const ownerState = _extends({}, pickerOwnerState, {
    hasDigitalClockAlreadyBeenRendered: !!containerRef.current
  });
  const classes = useUtilityClasses$s(classesProp);
  const ClockItem = slots?.digitalClockItem ?? DigitalClockItem;
  const clockItemProps = useSlotProps({
    elementType: ClockItem,
    externalSlotProps: slotProps?.digitalClockItem,
    ownerState,
    className: classes.item
  });
  const valueOrReferenceDate = useClockReferenceDate({
    value,
    referenceDate: referenceDateProp,
    adapter,
    props,
    timezone
  });
  const handleValueChange = useEventCallback(newValue => handleRawValueChange(newValue, 'finish', 'hours'));
  const {
    setValueAndGoToNextView
  } = useViews({
    view: inView,
    views,
    openTo,
    onViewChange,
    onChange: handleValueChange,
    focusedView,
    onFocusedViewChange
  });
  const handleItemSelect = useEventCallback(newValue => {
    setValueAndGoToNextView(newValue, 'finish');
  });
  useEnhancedEffect$1(() => {
    if (containerRef.current === null) {
      return;
    }
    const activeItem = containerRef.current.querySelector('[role="listbox"] [role="option"][tabindex="0"], [role="listbox"] [role="option"][aria-selected="true"]');
    if (!activeItem) {
      return;
    }
    const offsetTop = activeItem.offsetTop;
    if (autoFocus || !!focusedView) {
      activeItem.focus();
    }

    // Subtracting the 4px of extra margin intended for the first visible section item
    containerRef.current.scrollTop = offsetTop - 4;
  });
  const isTimeDisabled = React__namespace.useCallback(valueToCheck => {
    const isAfter = createIsAfterIgnoreDatePart(disableIgnoringDatePartForTimeValidation, adapter);
    const containsValidTime = () => {
      if (minTime && isAfter(minTime, valueToCheck)) {
        return false;
      }
      if (maxTime && isAfter(valueToCheck, maxTime)) {
        return false;
      }
      if (disableFuture && isAfter(valueToCheck, now)) {
        return false;
      }
      if (disablePast && isAfter(now, valueToCheck)) {
        return false;
      }
      return true;
    };
    const isValidValue = () => {
      if (adapter.getMinutes(valueToCheck) % minutesStep !== 0) {
        return false;
      }
      if (shouldDisableTime) {
        return !shouldDisableTime(valueToCheck, 'hours');
      }
      return true;
    };
    return !containsValidTime() || !isValidValue();
  }, [disableIgnoringDatePartForTimeValidation, adapter, minTime, maxTime, disableFuture, now, disablePast, minutesStep, shouldDisableTime]);
  const timeOptions = React__namespace.useMemo(() => {
    const result = [];
    const startOfDay = adapter.startOfDay(valueOrReferenceDate);
    let nextTimeStepOption = startOfDay;
    while (adapter.isSameDay(valueOrReferenceDate, nextTimeStepOption)) {
      result.push(nextTimeStepOption);
      nextTimeStepOption = adapter.addMinutes(nextTimeStepOption, timeStep);
    }
    return result;
  }, [valueOrReferenceDate, timeStep, adapter]);
  const focusedOptionIndex = timeOptions.findIndex(option => adapter.isEqual(option, valueOrReferenceDate));
  const handleKeyDown = event => {
    switch (event.key) {
      case 'PageUp':
        {
          const newIndex = getFocusedListItemIndex(listRef.current) - 5;
          const children = listRef.current.children;
          const newFocusedIndex = Math.max(0, newIndex);
          const childToFocus = children[newFocusedIndex];
          if (childToFocus) {
            childToFocus.focus();
          }
          event.preventDefault();
          break;
        }
      case 'PageDown':
        {
          const newIndex = getFocusedListItemIndex(listRef.current) + 5;
          const children = listRef.current.children;
          const newFocusedIndex = Math.min(children.length - 1, newIndex);
          const childToFocus = children[newFocusedIndex];
          if (childToFocus) {
            childToFocus.focus();
          }
          event.preventDefault();
          break;
        }
    }
  };
  return /*#__PURE__*/jsxRuntime.jsx(DigitalClockRoot, _extends({
    ref: handleRef,
    className: clsx(classes.root, className),
    ownerState: ownerState
  }, other, {
    children: /*#__PURE__*/jsxRuntime.jsx(DigitalClockList, {
      ref: listRef,
      role: "listbox",
      "aria-label": translations.timePickerToolbarTitle,
      className: classes.list,
      onKeyDown: handleKeyDown,
      children: timeOptions.map((option, index) => {
        const optionDisabled = isTimeDisabled(option);
        if (skipDisabled && optionDisabled) {
          return null;
        }
        const isSelected = adapter.isEqual(option, value);
        const formattedValue = adapter.format(option, ampm ? 'fullTime12h' : 'fullTime24h');
        const isFocused = focusedOptionIndex === index || focusedOptionIndex === -1 && index === 0;
        const tabIndex = isFocused ? 0 : -1;
        return /*#__PURE__*/jsxRuntime.jsx(ClockItem, _extends({
          onClick: () => !readOnly && handleItemSelect(option),
          selected: isSelected,
          disabled: disabled || optionDisabled,
          disableRipple: readOnly,
          role: "option"
          // aria-readonly is not supported here and does not have any effect
          ,
          "aria-disabled": readOnly,
          "aria-selected": isSelected,
          tabIndex: tabIndex,
          itemValue: option,
          formattedValue: formattedValue
        }, clockItemProps, {
          children: formattedValue
        }), `${option.valueOf()}-${formattedValue}`);
      })
    })
  }));
});
if (process.env.NODE_ENV !== "production") DigitalClock.displayName = "DigitalClock";
process.env.NODE_ENV !== "production" ? DigitalClock.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * 12h/24h view for hour selection clock.
   * @default adapter.is12HourCycleInCurrentLocale()
   */
  ampm: PropTypes.bool,
  /**
   * If `true`, the main element is focused during the first mount.
   * This main element is:
   * - the element chosen by the visible view if any (i.e: the selected day on the `day` view).
   * - the `input` element if there is a field rendered.
   */
  autoFocus: PropTypes.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,
  className: PropTypes.string,
  /**
   * The default selected value.
   * Used when the component is not controlled.
   */
  defaultValue: PropTypes.object,
  /**
   * If `true`, the component is disabled.
   * When disabled, the value cannot be changed and no interaction is possible.
   * @default false
   */
  disabled: PropTypes.bool,
  /**
   * If `true`, disable values after the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disableFuture: PropTypes.bool,
  /**
   * Do not ignore date part when validating min/max time.
   * @default false
   */
  disableIgnoringDatePartForTimeValidation: PropTypes.bool,
  /**
   * If `true`, disable values before the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disablePast: PropTypes.bool,
  /**
   * Controlled focused view.
   */
  focusedView: PropTypes.oneOf(['hours']),
  /**
   * Maximal selectable time.
   * The date part of the object will be ignored unless `props.disableIgnoringDatePartForTimeValidation === true`.
   */
  maxTime: PropTypes.object,
  /**
   * Minimal selectable time.
   * The date part of the object will be ignored unless `props.disableIgnoringDatePartForTimeValidation === true`.
   */
  minTime: PropTypes.object,
  /**
   * Step over minutes.
   * @default 1
   */
  minutesStep: PropTypes.number,
  /**
   * Callback fired when the value changes.
   * @template TValue The value type. It will be the same type as `value` or `null`. It can be in `[start, end]` format in case of range value.
   * @template TView The view type. Will be one of date or time views.
   * @param {TValue} value The new value.
   * @param {PickerSelectionState | undefined} selectionState Indicates if the date selection is complete.
   * @param {TView | undefined} selectedView Indicates the view in which the selection has been made.
   */
  onChange: PropTypes.func,
  /**
   * Callback fired on focused view change.
   * @template TView Type of the view. It will vary based on the Picker type and the `views` it uses.
   * @param {TView} view The new view to focus or not.
   * @param {boolean} hasFocus `true` if the view should be focused.
   */
  onFocusedViewChange: PropTypes.func,
  /**
   * Callback fired on view change.
   * @template TView Type of the view. It will vary based on the Picker type and the `views` it uses.
   * @param {TView} view The new view.
   */
  onViewChange: PropTypes.func,
  /**
   * The default visible view.
   * Used when the component view is not controlled.
   * Must be a valid option from `views` list.
   */
  openTo: PropTypes.oneOf(['hours']),
  /**
   * If `true`, the component is read-only.
   * When read-only, the value cannot be changed but the user can interact with the interface.
   * @default false
   */
  readOnly: PropTypes.bool,
  /**
   * The date used to generate the new value when both `value` and `defaultValue` are empty.
   * @default The closest valid time using the validation props, except callbacks such as `shouldDisableTime`.
   */
  referenceDate: PropTypes.object,
  /**
   * Disable specific time.
   * @param {PickerValidDate} value The value to check.
   * @param {TimeView} view The clock type of the timeValue.
   * @returns {boolean} If `true` the time will be disabled.
   */
  shouldDisableTime: PropTypes.func,
  /**
   * If `true`, disabled digital clock items will not be rendered.
   * @default false
   */
  skipDisabled: PropTypes.bool,
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: PropTypes.object,
  /**
   * Overrideable component slots.
   * @default {}
   */
  slots: PropTypes.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])), PropTypes.func, PropTypes.object]),
  /**
   * The time steps between two time options.
   * For example, if `timeStep = 45`, then the available time options will be `[00:00, 00:45, 01:30, 02:15, 03:00, etc.]`.
   * @default 30
   */
  timeStep: PropTypes.number,
  /**
   * Choose which timezone to use for the value.
   * Example: "default", "system", "UTC", "America/New_York".
   * If you pass values from other timezones to some props, they will be converted to this timezone before being used.
   * @see See the {@link https://mui.com/x/react-date-pickers/timezone/ timezones documentation} for more details.
   * @default The timezone of the `value` or `defaultValue` prop is defined, 'default' otherwise.
   */
  timezone: PropTypes.string,
  /**
   * The selected value.
   * Used when the component is controlled.
   */
  value: PropTypes.object,
  /**
   * The visible view.
   * Used when the component view is controlled.
   * Must be a valid option from `views` list.
   */
  view: PropTypes.oneOf(['hours']),
  /**
   * Available views.
   * @default ['hours']
   */
  views: PropTypes.arrayOf(PropTypes.oneOf(['hours']))
} : void 0;

function getMultiSectionDigitalClockUtilityClass(slot) {
  return generateUtilityClass('MuiMultiSectionDigitalClock', slot);
}
const multiSectionDigitalClockClasses = generateUtilityClasses('MuiMultiSectionDigitalClock', ['root']);

function getMultiSectionDigitalClockSectionUtilityClass(slot) {
  return generateUtilityClass('MuiMultiSectionDigitalClockSection', slot);
}
const multiSectionDigitalClockSectionClasses = generateUtilityClasses('MuiMultiSectionDigitalClockSection', ['root', 'item']);

const _excluded$E = ["autoFocus", "onChange", "className", "classes", "disabled", "readOnly", "items", "active", "slots", "slotProps", "skipDisabled"];
const useUtilityClasses$r = classes => {
  const slots = {
    root: ['root'],
    item: ['item']
  };
  return composeClasses(slots, getMultiSectionDigitalClockSectionUtilityClass, classes);
};
const MultiSectionDigitalClockSectionRoot = styles.styled(MenuList, {
  name: 'MuiMultiSectionDigitalClockSection',
  slot: 'Root'
})(({
  theme
}) => ({
  maxHeight: DIGITAL_CLOCK_VIEW_HEIGHT,
  width: 56,
  padding: 0,
  overflow: 'hidden',
  scrollbarWidth: 'thin',
  '@media (prefers-reduced-motion: no-preference)': {
    scrollBehavior: 'auto'
  },
  '@media (pointer: fine)': {
    '&:hover': {
      overflowY: 'auto'
    }
  },
  '@media (pointer: none), (pointer: coarse)': {
    overflowY: 'auto'
  },
  '&:not(:first-of-type)': {
    borderLeft: `1px solid ${(theme.vars || theme).palette.divider}`
  },
  '&::after': {
    display: 'block',
    content: '""',
    // subtracting the height of one item, extra margin and borders to make sure the max height is correct
    height: 'calc(100% - 40px - 6px)'
  },
  variants: [{
    props: {
      hasDigitalClockAlreadyBeenRendered: true
    },
    style: {
      '@media (prefers-reduced-motion: no-preference)': {
        scrollBehavior: 'smooth'
      }
    }
  }]
}));
const MultiSectionDigitalClockSectionItem = styles.styled(MenuItem, {
  name: 'MuiMultiSectionDigitalClockSection',
  slot: 'Item'
})(({
  theme
}) => ({
  padding: 8,
  margin: '2px 4px',
  width: MULTI_SECTION_CLOCK_SECTION_WIDTH,
  justifyContent: 'center',
  '&:first-of-type': {
    marginTop: 4
  },
  '&:hover': {
    backgroundColor: theme.vars ? `rgba(${theme.vars.palette.primary.mainChannel} / ${theme.vars.palette.action.hoverOpacity})` : styles.alpha(theme.palette.primary.main, theme.palette.action.hoverOpacity)
  },
  '&.Mui-selected': {
    backgroundColor: (theme.vars || theme).palette.primary.main,
    color: (theme.vars || theme).palette.primary.contrastText,
    '&:focus-visible, &:hover': {
      backgroundColor: (theme.vars || theme).palette.primary.dark
    }
  },
  '&.Mui-focusVisible': {
    backgroundColor: theme.vars ? `rgba(${theme.vars.palette.primary.mainChannel} / ${theme.vars.palette.action.focusOpacity})` : styles.alpha(theme.palette.primary.main, theme.palette.action.focusOpacity)
  }
}));
/**
 * @ignore - internal component.
 */
const MultiSectionDigitalClockSection = /*#__PURE__*/React__namespace.forwardRef(function MultiSectionDigitalClockSection(inProps, ref) {
  const containerRef = React__namespace.useRef(null);
  const handleRef = useForkRef(ref, containerRef);
  const previousActive = React__namespace.useRef(null);
  const props = styles.useThemeProps({
    props: inProps,
    name: 'MuiMultiSectionDigitalClockSection'
  });
  const {
      autoFocus,
      onChange,
      className,
      classes: classesProp,
      disabled,
      readOnly,
      items,
      active,
      slots,
      slotProps,
      skipDisabled
    } = props,
    other = _objectWithoutPropertiesLoose(props, _excluded$E);
  const {
    ownerState: pickerOwnerState
  } = usePickerPrivateContext();
  const ownerState = _extends({}, pickerOwnerState, {
    hasDigitalClockAlreadyBeenRendered: !!containerRef.current
  });
  const classes = useUtilityClasses$r(classesProp);
  const DigitalClockSectionItem = slots?.digitalClockSectionItem ?? MultiSectionDigitalClockSectionItem;
  useEnhancedEffect$1(() => {
    if (containerRef.current === null) {
      return;
    }
    const activeItem = containerRef.current.querySelector('[role="option"][tabindex="0"], [role="option"][aria-selected="true"]');
    if (active && autoFocus && activeItem) {
      activeItem.focus();
    }
    if (!activeItem || previousActive.current === activeItem) {
      return;
    }
    previousActive.current = activeItem;
    const offsetTop = activeItem.offsetTop;

    // Subtracting the 4px of extra margin intended for the first visible section item
    containerRef.current.scrollTop = offsetTop - 4;
  });
  const focusedOptionIndex = items.findIndex(item => item.isFocused(item.value));
  const handleKeyDown = event => {
    switch (event.key) {
      case 'PageUp':
        {
          const newIndex = getFocusedListItemIndex(containerRef.current) - 5;
          const children = containerRef.current.children;
          const newFocusedIndex = Math.max(0, newIndex);
          const childToFocus = children[newFocusedIndex];
          if (childToFocus) {
            childToFocus.focus();
          }
          event.preventDefault();
          break;
        }
      case 'PageDown':
        {
          const newIndex = getFocusedListItemIndex(containerRef.current) + 5;
          const children = containerRef.current.children;
          const newFocusedIndex = Math.min(children.length - 1, newIndex);
          const childToFocus = children[newFocusedIndex];
          if (childToFocus) {
            childToFocus.focus();
          }
          event.preventDefault();
          break;
        }
    }
  };
  return /*#__PURE__*/jsxRuntime.jsx(MultiSectionDigitalClockSectionRoot, _extends({
    ref: handleRef,
    className: clsx(classes.root, className),
    ownerState: ownerState,
    autoFocusItem: autoFocus && active,
    role: "listbox",
    onKeyDown: handleKeyDown
  }, other, {
    children: items.map((option, index) => {
      const isItemDisabled = option.isDisabled?.(option.value);
      const isDisabled = disabled || isItemDisabled;
      if (skipDisabled && isDisabled) {
        return null;
      }
      const isSelected = option.isSelected(option.value);
      const tabIndex = focusedOptionIndex === index || focusedOptionIndex === -1 && index === 0 ? 0 : -1;
      return /*#__PURE__*/jsxRuntime.jsx(DigitalClockSectionItem, _extends({
        onClick: () => !readOnly && onChange(option.value),
        selected: isSelected,
        disabled: isDisabled,
        disableRipple: readOnly,
        role: "option"
        // aria-readonly is not supported here and does not have any effect
        ,
        "aria-disabled": readOnly || isDisabled || undefined,
        "aria-label": option.ariaLabel,
        "aria-selected": isSelected,
        tabIndex: tabIndex,
        className: classes.item
      }, slotProps?.digitalClockSectionItem, {
        children: option.label
      }), option.label);
    })
  }));
});
if (process.env.NODE_ENV !== "production") MultiSectionDigitalClockSection.displayName = "MultiSectionDigitalClockSection";

const getHourSectionOptions = ({
  now,
  value,
  adapter,
  ampm,
  isDisabled,
  resolveAriaLabel,
  timeStep,
  valueOrReferenceDate
}) => {
  const currentHours = value ? adapter.getHours(value) : null;
  const result = [];
  const isSelected = (hour, overriddenCurrentHours) => {
    const resolvedCurrentHours = overriddenCurrentHours ?? currentHours;
    if (resolvedCurrentHours === null) {
      return false;
    }
    if (ampm) {
      if (hour === 12) {
        return resolvedCurrentHours === 12 || resolvedCurrentHours === 0;
      }
      return resolvedCurrentHours === hour || resolvedCurrentHours - 12 === hour;
    }
    return resolvedCurrentHours === hour;
  };
  const isFocused = hour => {
    return isSelected(hour, adapter.getHours(valueOrReferenceDate));
  };
  const endHour = ampm ? 11 : 23;
  for (let hour = 0; hour <= endHour; hour += timeStep) {
    let label = adapter.format(adapter.setHours(now, hour), ampm ? 'hours12h' : 'hours24h');
    const ariaLabel = resolveAriaLabel(parseInt(label, 10).toString());
    label = adapter.formatNumber(label);
    result.push({
      value: hour,
      label,
      isSelected,
      isDisabled,
      isFocused,
      ariaLabel
    });
  }
  return result;
};
const getTimeSectionOptions = ({
  value,
  adapter,
  isDisabled,
  timeStep,
  resolveLabel,
  resolveAriaLabel,
  hasValue = true
}) => {
  const isSelected = timeValue => {
    if (value === null) {
      return false;
    }
    return hasValue && value === timeValue;
  };
  const isFocused = timeValue => {
    return value === timeValue;
  };
  return [...Array.from({
    length: Math.ceil(60 / timeStep)
  }, (_, index) => {
    const timeValue = timeStep * index;
    return {
      value: timeValue,
      label: adapter.formatNumber(resolveLabel(timeValue)),
      isDisabled,
      isSelected,
      isFocused,
      ariaLabel: resolveAriaLabel(timeValue.toString())
    };
  })];
};

const _excluded$D = ["ampm", "timeSteps", "autoFocus", "slots", "slotProps", "value", "defaultValue", "referenceDate", "disableIgnoringDatePartForTimeValidation", "maxTime", "minTime", "disableFuture", "disablePast", "minutesStep", "shouldDisableTime", "onChange", "view", "views", "openTo", "onViewChange", "focusedView", "onFocusedViewChange", "className", "classes", "disabled", "readOnly", "skipDisabled", "timezone"];
const useUtilityClasses$q = classes => {
  const slots = {
    root: ['root']
  };
  return composeClasses(slots, getMultiSectionDigitalClockUtilityClass, classes);
};
const MultiSectionDigitalClockRoot = styles.styled(PickerViewRoot, {
  name: 'MuiMultiSectionDigitalClock',
  slot: 'Root'
})(({
  theme
}) => ({
  flexDirection: 'row',
  width: '100%',
  borderBottom: `1px solid ${(theme.vars || theme).palette.divider}`
}));
/**
 * Demos:
 *
 * - [TimePicker](https://mui.com/x/react-date-pickers/time-picker/)
 * - [DigitalClock](https://mui.com/x/react-date-pickers/digital-clock/)
 *
 * API:
 *
 * - [MultiSectionDigitalClock API](https://mui.com/x/api/date-pickers/multi-section-digital-clock/)
 */
const MultiSectionDigitalClock = /*#__PURE__*/React__namespace.forwardRef(function MultiSectionDigitalClock(inProps, ref) {
  const adapter = usePickerAdapter();
  const isRtl = useRtl();
  const props = styles.useThemeProps({
    props: inProps,
    name: 'MuiMultiSectionDigitalClock'
  });
  const {
      ampm = adapter.is12HourCycleInCurrentLocale(),
      timeSteps: inTimeSteps,
      autoFocus,
      slots,
      slotProps,
      value: valueProp,
      defaultValue,
      referenceDate: referenceDateProp,
      disableIgnoringDatePartForTimeValidation = false,
      maxTime,
      minTime,
      disableFuture,
      disablePast,
      minutesStep = 1,
      shouldDisableTime,
      onChange,
      view: inView,
      views: inViews = ['hours', 'minutes'],
      openTo,
      onViewChange,
      focusedView: inFocusedView,
      onFocusedViewChange,
      className,
      classes: classesProp,
      disabled,
      readOnly,
      skipDisabled = false,
      timezone: timezoneProp
    } = props,
    other = _objectWithoutPropertiesLoose(props, _excluded$D);
  const {
    value,
    handleValueChange: handleRawValueChange,
    timezone
  } = useControlledValue({
    name: 'MultiSectionDigitalClock',
    timezone: timezoneProp,
    value: valueProp,
    defaultValue,
    referenceDate: referenceDateProp,
    onChange,
    valueManager: singleItemValueManager
  });
  const translations = usePickerTranslations();
  const now = useNow(timezone);
  const timeSteps = React__namespace.useMemo(() => _extends({
    hours: 1,
    minutes: 5,
    seconds: 5
  }, inTimeSteps), [inTimeSteps]);
  const valueOrReferenceDate = useClockReferenceDate({
    value,
    referenceDate: referenceDateProp,
    adapter,
    props,
    timezone
  });
  const handleValueChange = useEventCallback((newValue, selectionState, selectedView) => handleRawValueChange(newValue, selectionState, selectedView));
  const views = React__namespace.useMemo(() => {
    if (!ampm || !inViews.includes('hours')) {
      return inViews;
    }
    return inViews.includes('meridiem') ? inViews : [...inViews, 'meridiem'];
  }, [ampm, inViews]);
  const {
    view,
    setValueAndGoToNextView,
    focusedView
  } = useViews({
    view: inView,
    views,
    openTo,
    onViewChange,
    onChange: handleValueChange,
    focusedView: inFocusedView,
    onFocusedViewChange
  });
  const handleMeridiemValueChange = useEventCallback(newValue => {
    setValueAndGoToNextView(newValue, 'finish', 'meridiem');
  });
  const {
    meridiemMode,
    handleMeridiemChange
  } = useMeridiemMode(valueOrReferenceDate, ampm, handleMeridiemValueChange, 'finish');
  const isTimeDisabled = React__namespace.useCallback((rawValue, viewType) => {
    const isAfter = createIsAfterIgnoreDatePart(disableIgnoringDatePartForTimeValidation, adapter);
    const shouldCheckPastEnd = viewType === 'hours' || viewType === 'minutes' && views.includes('seconds');
    const containsValidTime = ({
      start,
      end
    }) => {
      if (minTime && isAfter(minTime, end)) {
        return false;
      }
      if (maxTime && isAfter(start, maxTime)) {
        return false;
      }
      if (disableFuture && isAfter(start, now)) {
        return false;
      }
      if (disablePast && isAfter(now, shouldCheckPastEnd ? end : start)) {
        return false;
      }
      return true;
    };
    const isValidValue = (timeValue, step = 1) => {
      if (timeValue % step !== 0) {
        return false;
      }
      if (shouldDisableTime) {
        switch (viewType) {
          case 'hours':
            return !shouldDisableTime(adapter.setHours(valueOrReferenceDate, timeValue), 'hours');
          case 'minutes':
            return !shouldDisableTime(adapter.setMinutes(valueOrReferenceDate, timeValue), 'minutes');
          case 'seconds':
            return !shouldDisableTime(adapter.setSeconds(valueOrReferenceDate, timeValue), 'seconds');
          default:
            return false;
        }
      }
      return true;
    };
    switch (viewType) {
      case 'hours':
        {
          const valueWithMeridiem = convertValueToMeridiem(rawValue, meridiemMode, ampm);
          const dateWithNewHours = adapter.setHours(valueOrReferenceDate, valueWithMeridiem);
          if (adapter.getHours(dateWithNewHours) !== valueWithMeridiem) {
            return true;
          }
          const start = adapter.setSeconds(adapter.setMinutes(dateWithNewHours, 0), 0);
          const end = adapter.setSeconds(adapter.setMinutes(dateWithNewHours, 59), 59);
          return !containsValidTime({
            start,
            end
          }) || !isValidValue(valueWithMeridiem);
        }
      case 'minutes':
        {
          const dateWithNewMinutes = adapter.setMinutes(valueOrReferenceDate, rawValue);
          const start = adapter.setSeconds(dateWithNewMinutes, 0);
          const end = adapter.setSeconds(dateWithNewMinutes, 59);
          return !containsValidTime({
            start,
            end
          }) || !isValidValue(rawValue, minutesStep);
        }
      case 'seconds':
        {
          const dateWithNewSeconds = adapter.setSeconds(valueOrReferenceDate, rawValue);
          const start = dateWithNewSeconds;
          const end = dateWithNewSeconds;
          return !containsValidTime({
            start,
            end
          }) || !isValidValue(rawValue);
        }
      default:
        throw new Error('not supported');
    }
  }, [ampm, valueOrReferenceDate, disableIgnoringDatePartForTimeValidation, maxTime, meridiemMode, minTime, minutesStep, shouldDisableTime, adapter, disableFuture, disablePast, now, views]);
  const buildViewProps = React__namespace.useCallback(viewToBuild => {
    switch (viewToBuild) {
      case 'hours':
        {
          return {
            onChange: hours => {
              const valueWithMeridiem = convertValueToMeridiem(hours, meridiemMode, ampm);
              setValueAndGoToNextView(adapter.setHours(valueOrReferenceDate, valueWithMeridiem), 'finish', 'hours');
            },
            items: getHourSectionOptions({
              now,
              value,
              ampm,
              adapter,
              isDisabled: hours => isTimeDisabled(hours, 'hours'),
              timeStep: timeSteps.hours,
              resolveAriaLabel: translations.hoursClockNumberText,
              valueOrReferenceDate
            })
          };
        }
      case 'minutes':
        {
          return {
            onChange: minutes => {
              setValueAndGoToNextView(adapter.setMinutes(valueOrReferenceDate, minutes), 'finish', 'minutes');
            },
            items: getTimeSectionOptions({
              value: adapter.getMinutes(valueOrReferenceDate),
              adapter,
              isDisabled: minutes => isTimeDisabled(minutes, 'minutes'),
              resolveLabel: minutes => adapter.format(adapter.setMinutes(now, minutes), 'minutes'),
              timeStep: timeSteps.minutes,
              hasValue: !!value,
              resolveAriaLabel: translations.minutesClockNumberText
            })
          };
        }
      case 'seconds':
        {
          return {
            onChange: seconds => {
              setValueAndGoToNextView(adapter.setSeconds(valueOrReferenceDate, seconds), 'finish', 'seconds');
            },
            items: getTimeSectionOptions({
              value: adapter.getSeconds(valueOrReferenceDate),
              adapter,
              isDisabled: seconds => isTimeDisabled(seconds, 'seconds'),
              resolveLabel: seconds => adapter.format(adapter.setSeconds(now, seconds), 'seconds'),
              timeStep: timeSteps.seconds,
              hasValue: !!value,
              resolveAriaLabel: translations.secondsClockNumberText
            })
          };
        }
      case 'meridiem':
        {
          const amLabel = formatMeridiem(adapter, 'am');
          const pmLabel = formatMeridiem(adapter, 'pm');
          return {
            onChange: handleMeridiemChange,
            items: [{
              value: 'am',
              label: amLabel,
              isSelected: () => !!value && meridiemMode === 'am',
              isFocused: () => !!valueOrReferenceDate && meridiemMode === 'am',
              ariaLabel: amLabel
            }, {
              value: 'pm',
              label: pmLabel,
              isSelected: () => !!value && meridiemMode === 'pm',
              isFocused: () => !!valueOrReferenceDate && meridiemMode === 'pm',
              ariaLabel: pmLabel
            }]
          };
        }
      default:
        throw new Error(`Unknown view: ${viewToBuild} found.`);
    }
  }, [now, value, ampm, adapter, timeSteps.hours, timeSteps.minutes, timeSteps.seconds, translations.hoursClockNumberText, translations.minutesClockNumberText, translations.secondsClockNumberText, meridiemMode, setValueAndGoToNextView, valueOrReferenceDate, isTimeDisabled, handleMeridiemChange]);
  const viewsToRender = React__namespace.useMemo(() => {
    if (!isRtl) {
      return views;
    }
    const digitViews = views.filter(v => v !== 'meridiem');
    digitViews.reverse();
    if (views.includes('meridiem')) {
      digitViews.push('meridiem');
    }
    return digitViews;
  }, [isRtl, views]);
  const viewTimeOptions = React__namespace.useMemo(() => {
    return views.reduce((result, currentView) => {
      return _extends({}, result, {
        [currentView]: buildViewProps(currentView)
      });
    }, {});
  }, [views, buildViewProps]);
  const {
    ownerState
  } = usePickerPrivateContext();
  const classes = useUtilityClasses$q(classesProp);
  return /*#__PURE__*/jsxRuntime.jsx(MultiSectionDigitalClockRoot, _extends({
    ref: ref,
    className: clsx(classes.root, className),
    ownerState: ownerState,
    role: "group"
  }, other, {
    children: viewsToRender.map(timeView => /*#__PURE__*/jsxRuntime.jsx(MultiSectionDigitalClockSection, {
      items: viewTimeOptions[timeView].items,
      onChange: viewTimeOptions[timeView].onChange,
      active: view === timeView,
      autoFocus: autoFocus || focusedView === timeView,
      disabled: disabled,
      readOnly: readOnly,
      slots: slots,
      slotProps: slotProps,
      skipDisabled: skipDisabled,
      "aria-label": translations.selectViewText(timeView)
    }, timeView))
  }));
});
if (process.env.NODE_ENV !== "production") MultiSectionDigitalClock.displayName = "MultiSectionDigitalClock";
process.env.NODE_ENV !== "production" ? MultiSectionDigitalClock.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * 12h/24h view for hour selection clock.
   * @default adapter.is12HourCycleInCurrentLocale()
   */
  ampm: PropTypes.bool,
  /**
   * If `true`, the main element is focused during the first mount.
   * This main element is:
   * - the element chosen by the visible view if any (i.e: the selected day on the `day` view).
   * - the `input` element if there is a field rendered.
   */
  autoFocus: PropTypes.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,
  className: PropTypes.string,
  /**
   * The default selected value.
   * Used when the component is not controlled.
   */
  defaultValue: PropTypes.object,
  /**
   * If `true`, the component is disabled.
   * When disabled, the value cannot be changed and no interaction is possible.
   * @default false
   */
  disabled: PropTypes.bool,
  /**
   * If `true`, disable values after the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disableFuture: PropTypes.bool,
  /**
   * Do not ignore date part when validating min/max time.
   * @default false
   */
  disableIgnoringDatePartForTimeValidation: PropTypes.bool,
  /**
   * If `true`, disable values before the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disablePast: PropTypes.bool,
  /**
   * Controlled focused view.
   */
  focusedView: PropTypes.oneOf(['hours', 'meridiem', 'minutes', 'seconds']),
  /**
   * Maximal selectable time.
   * The date part of the object will be ignored unless `props.disableIgnoringDatePartForTimeValidation === true`.
   */
  maxTime: PropTypes.object,
  /**
   * Minimal selectable time.
   * The date part of the object will be ignored unless `props.disableIgnoringDatePartForTimeValidation === true`.
   */
  minTime: PropTypes.object,
  /**
   * Step over minutes.
   * @default 1
   */
  minutesStep: PropTypes.number,
  /**
   * Callback fired when the value changes.
   * @template TValue The value type. It will be the same type as `value` or `null`. It can be in `[start, end]` format in case of range value.
   * @template TView The view type. Will be one of date or time views.
   * @param {TValue} value The new value.
   * @param {PickerSelectionState | undefined} selectionState Indicates if the date selection is complete.
   * @param {TView | undefined} selectedView Indicates the view in which the selection has been made.
   */
  onChange: PropTypes.func,
  /**
   * Callback fired on focused view change.
   * @template TView Type of the view. It will vary based on the Picker type and the `views` it uses.
   * @param {TView} view The new view to focus or not.
   * @param {boolean} hasFocus `true` if the view should be focused.
   */
  onFocusedViewChange: PropTypes.func,
  /**
   * Callback fired on view change.
   * @template TView Type of the view. It will vary based on the Picker type and the `views` it uses.
   * @param {TView} view The new view.
   */
  onViewChange: PropTypes.func,
  /**
   * The default visible view.
   * Used when the component view is not controlled.
   * Must be a valid option from `views` list.
   */
  openTo: PropTypes.oneOf(['hours', 'meridiem', 'minutes', 'seconds']),
  /**
   * If `true`, the component is read-only.
   * When read-only, the value cannot be changed but the user can interact with the interface.
   * @default false
   */
  readOnly: PropTypes.bool,
  /**
   * The date used to generate the new value when both `value` and `defaultValue` are empty.
   * @default The closest valid time using the validation props, except callbacks such as `shouldDisableTime`.
   */
  referenceDate: PropTypes.object,
  /**
   * Disable specific time.
   * @param {PickerValidDate} value The value to check.
   * @param {TimeView} view The clock type of the timeValue.
   * @returns {boolean} If `true` the time will be disabled.
   */
  shouldDisableTime: PropTypes.func,
  /**
   * If `true`, disabled digital clock items will not be rendered.
   * @default false
   */
  skipDisabled: PropTypes.bool,
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: PropTypes.object,
  /**
   * Overrideable component slots.
   * @default {}
   */
  slots: PropTypes.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])), PropTypes.func, PropTypes.object]),
  /**
   * The time steps between two time unit options.
   * For example, if `timeSteps.minutes = 8`, then the available minute options will be `[0, 8, 16, 24, 32, 40, 48, 56]`.
   * @default{ hours: 1, minutes: 5, seconds: 5 }
   */
  timeSteps: PropTypes.shape({
    hours: PropTypes.number,
    minutes: PropTypes.number,
    seconds: PropTypes.number
  }),
  /**
   * Choose which timezone to use for the value.
   * Example: "default", "system", "UTC", "America/New_York".
   * If you pass values from other timezones to some props, they will be converted to this timezone before being used.
   * @see See the {@link https://mui.com/x/react-date-pickers/timezone/ timezones documentation} for more details.
   * @default The timezone of the `value` or `defaultValue` prop is defined, 'default' otherwise.
   */
  timezone: PropTypes.string,
  /**
   * The selected value.
   * Used when the component is controlled.
   */
  value: PropTypes.object,
  /**
   * The visible view.
   * Used when the component view is controlled.
   * Must be a valid option from `views` list.
   */
  view: PropTypes.oneOf(['hours', 'meridiem', 'minutes', 'seconds']),
  /**
   * Available views.
   * @default ['hours', 'minutes']
   */
  views: PropTypes.arrayOf(PropTypes.oneOf(['hours', 'meridiem', 'minutes', 'seconds']).isRequired)
} : void 0;

function getPickersDayUtilityClass(slot) {
  return generateUtilityClass('MuiPickersDay', slot);
}
const pickersDayClasses = generateUtilityClasses('MuiPickersDay', ['root', 'dayWithMargin', 'dayOutsideMonth', 'hiddenDaySpacingFiller', 'today', 'selected', 'disabled']);

function usePickerDayOwnerState(parameters) {
  const {
    disabled,
    selected,
    today,
    outsideCurrentMonth,
    day,
    disableMargin,
    disableHighlightToday,
    showDaysOutsideCurrentMonth
  } = parameters;
  const adapter = usePickerAdapter();
  const {
    ownerState: pickerOwnerState
  } = usePickerPrivateContext();
  return React__namespace.useMemo(() => _extends({}, pickerOwnerState, {
    day,
    isDaySelected: selected ?? false,
    isDayDisabled: disabled ?? false,
    isDayCurrent: today ?? false,
    isDayOutsideMonth: outsideCurrentMonth ?? false,
    isDayStartOfWeek: adapter.isSameDay(day, adapter.startOfWeek(day)),
    isDayEndOfWeek: adapter.isSameDay(day, adapter.endOfWeek(day)),
    disableMargin: disableMargin ?? false,
    disableHighlightToday: disableHighlightToday ?? false,
    showDaysOutsideCurrentMonth: showDaysOutsideCurrentMonth ?? false
  }), [adapter, pickerOwnerState, day, selected, disabled, today, outsideCurrentMonth, disableMargin, disableHighlightToday, showDaysOutsideCurrentMonth]);
}

const _excluded$C = ["autoFocus", "className", "classes", "hidden", "isAnimating", "onClick", "onDaySelect", "onFocus", "onBlur", "onKeyDown", "onMouseDown", "onMouseEnter", "children", "isFirstVisibleCell", "isLastVisibleCell", "day", "selected", "disabled", "today", "outsideCurrentMonth", "disableMargin", "disableHighlightToday", "showDaysOutsideCurrentMonth"];
const useUtilityClasses$p = (classes, ownerState) => {
  const {
    isDaySelected,
    isDayDisabled,
    isDayCurrent,
    isDayOutsideMonth,
    disableMargin,
    disableHighlightToday,
    showDaysOutsideCurrentMonth
  } = ownerState;
  const isHiddenDaySpacingFiller = isDayOutsideMonth && !showDaysOutsideCurrentMonth;
  const slots = {
    root: ['root', isDaySelected && !isHiddenDaySpacingFiller && 'selected', isDayDisabled && 'disabled', !disableMargin && 'dayWithMargin', !disableHighlightToday && isDayCurrent && 'today', isDayOutsideMonth && showDaysOutsideCurrentMonth && 'dayOutsideMonth', isHiddenDaySpacingFiller && 'hiddenDaySpacingFiller'],
    hiddenDaySpacingFiller: ['hiddenDaySpacingFiller']
  };
  return composeClasses(slots, getPickersDayUtilityClass, classes);
};
const styleArg = ({
  theme
}) => _extends({}, theme.typography.caption, {
  width: DAY_SIZE,
  height: DAY_SIZE,
  borderRadius: '50%',
  padding: 0,
  // explicitly setting to `transparent` to avoid potentially getting impacted by change from the overridden component
  backgroundColor: 'transparent',
  transition: theme.transitions.create('background-color', {
    duration: theme.transitions.duration.short
  }),
  color: (theme.vars || theme).palette.text.primary,
  '@media (pointer: fine)': {
    '&:hover': {
      backgroundColor: theme.vars ? `rgba(${theme.vars.palette.primary.mainChannel} / ${theme.vars.palette.action.hoverOpacity})` : styles.alpha(theme.palette.primary.main, theme.palette.action.hoverOpacity)
    }
  },
  '&:focus': {
    backgroundColor: theme.vars ? `rgba(${theme.vars.palette.primary.mainChannel} / ${theme.vars.palette.action.focusOpacity})` : styles.alpha(theme.palette.primary.main, theme.palette.action.focusOpacity),
    [`&.${pickersDayClasses.selected}`]: {
      willChange: 'background-color',
      backgroundColor: (theme.vars || theme).palette.primary.dark
    }
  },
  [`&.${pickersDayClasses.selected}`]: {
    color: (theme.vars || theme).palette.primary.contrastText,
    backgroundColor: (theme.vars || theme).palette.primary.main,
    fontWeight: theme.typography.fontWeightMedium,
    '&:hover': {
      willChange: 'background-color',
      backgroundColor: (theme.vars || theme).palette.primary.dark
    }
  },
  [`&.${pickersDayClasses.disabled}:not(.${pickersDayClasses.selected})`]: {
    color: (theme.vars || theme).palette.text.disabled
  },
  [`&.${pickersDayClasses.disabled}&.${pickersDayClasses.selected}`]: {
    opacity: 0.6
  },
  variants: [{
    props: {
      disableMargin: false
    },
    style: {
      margin: `0 ${DAY_MARGIN}px`
    }
  }, {
    props: {
      isDayOutsideMonth: true,
      showDaysOutsideCurrentMonth: true
    },
    style: {
      color: (theme.vars || theme).palette.text.secondary
    }
  }, {
    props: {
      disableHighlightToday: false,
      isDayCurrent: true
    },
    style: {
      [`&:not(.${pickersDayClasses.selected})`]: {
        border: `1px solid ${(theme.vars || theme).palette.text.secondary}`
      }
    }
  }]
});
const overridesResolver = (props, styles) => {
  const {
    ownerState
  } = props;
  return [styles.root, !ownerState.disableMargin && styles.dayWithMargin, !ownerState.disableHighlightToday && ownerState.isDayCurrent && styles.today, !ownerState.isDayOutsideMonth && ownerState.showDaysOutsideCurrentMonth && styles.dayOutsideMonth, ownerState.isDayOutsideMonth && !ownerState.showDaysOutsideCurrentMonth && styles.hiddenDaySpacingFiller];
};
const PickersDayRoot = styles.styled(ButtonBase, {
  name: 'MuiPickersDay',
  slot: 'Root',
  overridesResolver
})(styleArg);
const PickersDayFiller = styles.styled('div', {
  name: 'MuiPickersDay',
  slot: 'Root',
  overridesResolver
})(({
  theme
}) => _extends({}, styleArg({
  theme
}), {
  // visibility: 'hidden' does not work here as it hides the element from screen readers as well
  opacity: 0,
  pointerEvents: 'none'
}));
const noop$1 = () => {};
const PickersDayRaw = /*#__PURE__*/React__namespace.forwardRef(function PickersDay(inProps, forwardedRef) {
  const props = styles.useThemeProps({
    props: inProps,
    name: 'MuiPickersDay'
  });
  const {
      autoFocus = false,
      className,
      classes: classesProp,
      isAnimating,
      onClick,
      onDaySelect,
      onFocus = noop$1,
      onBlur = noop$1,
      onKeyDown = noop$1,
      onMouseDown = noop$1,
      onMouseEnter = noop$1,
      children,
      day,
      selected,
      disabled,
      today,
      outsideCurrentMonth,
      disableMargin,
      disableHighlightToday,
      showDaysOutsideCurrentMonth
    } = props,
    other = _objectWithoutPropertiesLoose(props, _excluded$C);
  const ownerState = usePickerDayOwnerState({
    day,
    selected,
    disabled,
    today,
    outsideCurrentMonth,
    disableMargin,
    disableHighlightToday,
    showDaysOutsideCurrentMonth
  });
  const classes = useUtilityClasses$p(classesProp, ownerState);
  const adapter = usePickerAdapter();
  const ref = React__namespace.useRef(null);
  const handleRef = useForkRef(ref, forwardedRef);

  // Since this is rendered when a Popper is opened we can't use passive effects.
  // Focusing in passive effects in Popper causes scroll jump.
  useEnhancedEffect$1(() => {
    if (autoFocus && !disabled && !isAnimating && !outsideCurrentMonth) {
      // ref.current being null would be a bug in MUI
      ref.current.focus();
    }
  }, [autoFocus, disabled, isAnimating, outsideCurrentMonth]);

  // For a day outside the current month, move the focus from mouseDown to mouseUp
  // Goal: have the onClick ends before sliding to the new month
  const handleMouseDown = event => {
    onMouseDown(event);
    if (outsideCurrentMonth) {
      event.preventDefault();
    }
  };
  const handleClick = event => {
    event.defaultMuiPrevented = true;
    if (!disabled) {
      onDaySelect(day);
    }
    if (outsideCurrentMonth) {
      event.currentTarget.focus();
    }
    if (onClick) {
      onClick(event);
    }
  };
  if (outsideCurrentMonth && !showDaysOutsideCurrentMonth) {
    return /*#__PURE__*/jsxRuntime.jsx(PickersDayFiller, {
      className: clsx(classes.root, classes.hiddenDaySpacingFiller, className),
      ownerState: ownerState,
      role: other.role
    });
  }
  return /*#__PURE__*/jsxRuntime.jsx(PickersDayRoot, _extends({
    className: clsx(classes.root, className),
    ref: handleRef,
    centerRipple: true,
    disabled: disabled,
    tabIndex: selected ? 0 : -1,
    onKeyDown: event => onKeyDown(event, day),
    onFocus: event => onFocus(event, day),
    onBlur: event => onBlur(event, day),
    onMouseEnter: event => onMouseEnter(event, day),
    onClick: handleClick,
    onMouseDown: handleMouseDown
  }, other, {
    ownerState: ownerState,
    children: children ?? adapter.format(day, 'dayOfMonth')
  }));
});
if (process.env.NODE_ENV !== "production") PickersDayRaw.displayName = "PickersDayRaw";
process.env.NODE_ENV !== "production" ? PickersDayRaw.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * A ref for imperative actions.
   * It currently only supports `focusVisible()` action.
   */
  action: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({
    current: PropTypes.shape({
      focusVisible: PropTypes.func.isRequired
    })
  })]),
  /**
   * If `true`, the ripples are centered.
   * They won't start at the cursor interaction position.
   * @default false
   */
  centerRipple: PropTypes.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,
  className: PropTypes.string,
  component: PropTypes.elementType,
  /**
   * The date to show.
   */
  day: PropTypes.object.isRequired,
  /**
   * If `true`, renders as disabled.
   * @default false
   */
  disabled: PropTypes.bool,
  /**
   * If `true`, today's date is rendering without highlighting with circle.
   * @default false
   */
  disableHighlightToday: PropTypes.bool,
  /**
   * If `true`, days are rendering without margin. Useful for displaying linked range of days.
   * @default false
   */
  disableMargin: PropTypes.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: PropTypes.bool,
  /**
   * If `true`, the touch ripple effect is disabled.
   * @default false
   */
  disableTouchRipple: PropTypes.bool,
  /**
   * If `true`, the base button will have a keyboard focus ripple.
   * @default false
   */
  focusRipple: PropTypes.bool,
  /**
   * This prop can help identify which element has keyboard focus.
   * The class name will be applied when the element gains the focus through keyboard interaction.
   * It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
   * The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
   * A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components
   * if needed.
   */
  focusVisibleClassName: PropTypes.string,
  isAnimating: PropTypes.bool,
  /**
   * If `true`, day is the first visible cell of the month.
   * Either the first day of the month or the first day of the week depending on `showDaysOutsideCurrentMonth`.
   */
  isFirstVisibleCell: PropTypes.bool.isRequired,
  /**
   * If `true`, day is the last visible cell of the month.
   * Either the last day of the month or the last day of the week depending on `showDaysOutsideCurrentMonth`.
   */
  isLastVisibleCell: PropTypes.bool.isRequired,
  onBlur: PropTypes.func,
  onDaySelect: PropTypes.func.isRequired,
  onFocus: PropTypes.func,
  /**
   * Callback fired when the component is focused with a keyboard.
   * We trigger a `onFocus` callback too.
   */
  onFocusVisible: PropTypes.func,
  onKeyDown: PropTypes.func,
  onMouseEnter: PropTypes.func,
  /**
   * If `true`, day is outside of month and will be hidden.
   */
  outsideCurrentMonth: PropTypes.bool.isRequired,
  /**
   * If `true`, renders as selected.
   * @default false
   */
  selected: PropTypes.bool,
  /**
   * If `true`, days outside the current month are rendered:
   *
   * - if `fixedWeekNumber` is defined, renders days to have the weeks requested.
   *
   * - if `fixedWeekNumber` is not defined, renders day to fill the first and last week of the current month.
   *
   * - ignored if `calendars` equals more than `1` on range pickers.
   * @default false
   */
  showDaysOutsideCurrentMonth: PropTypes.bool,
  style: PropTypes.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])), PropTypes.func, PropTypes.object]),
  /**
   * @default 0
   */
  tabIndex: PropTypes.number,
  /**
   * If `true`, renders as today date.
   * @default false
   */
  today: PropTypes.bool,
  /**
   * Props applied to the `TouchRipple` element.
   */
  TouchRippleProps: PropTypes.object,
  /**
   * A ref that points to the `TouchRipple` element.
   */
  touchRippleRef: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({
    current: PropTypes.shape({
      pulsate: PropTypes.func.isRequired,
      start: PropTypes.func.isRequired,
      stop: PropTypes.func.isRequired
    })
  })])
} : void 0;

/**
 * Demos:
 *
 * - [DateCalendar](https://mui.com/x/react-date-pickers/date-calendar/)
 * API:
 *
 * - [PickersDay API](https://mui.com/x/api/date-pickers/pickers-day/)
 */
const PickersDay = /*#__PURE__*/React__namespace.memo(PickersDayRaw);
if (process.env.NODE_ENV !== "production") PickersDay.displayName = "PickersDay";

const refType = PropTypes.oneOfType([PropTypes.func, PropTypes.object]);
var refType$1 = refType;

const isQueryResponseWithoutValue = response => response.saveQuery != null;

/**
 * Update the active section value when the user pressed a key that is not a navigation key (arrow key for example).
 * This hook has two main editing behaviors
 *
 * 1. The numeric editing when the user presses a digit
 * 2. The letter editing when the user presses another key
 */
const useFieldCharacterEditing = ({
  stateResponse: {
    // States and derived states
    localizedDigits,
    sectionsValueBoundaries,
    state,
    timezone,
    // Methods to update the states
    setCharacterQuery,
    setTempAndroidValueStr,
    updateSectionValue
  }
}) => {
  const adapter = usePickerAdapter();
  const applyQuery = ({
    keyPressed,
    sectionIndex
  }, getFirstSectionValueMatchingWithQuery, isValidQueryValue) => {
    const cleanKeyPressed = keyPressed.toLowerCase();
    const activeSection = state.sections[sectionIndex];

    // The current query targets the section being editing
    // We can try to concatenate the value
    if (state.characterQuery != null && (!isValidQueryValue || isValidQueryValue(state.characterQuery.value)) && state.characterQuery.sectionIndex === sectionIndex) {
      const concatenatedQueryValue = `${state.characterQuery.value}${cleanKeyPressed}`;
      const queryResponse = getFirstSectionValueMatchingWithQuery(concatenatedQueryValue, activeSection);
      if (!isQueryResponseWithoutValue(queryResponse)) {
        setCharacterQuery({
          sectionIndex,
          value: concatenatedQueryValue,
          sectionType: activeSection.type
        });
        return queryResponse;
      }
    }
    const queryResponse = getFirstSectionValueMatchingWithQuery(cleanKeyPressed, activeSection);
    if (isQueryResponseWithoutValue(queryResponse) && !queryResponse.saveQuery) {
      setCharacterQuery(null);
      return null;
    }
    setCharacterQuery({
      sectionIndex,
      value: cleanKeyPressed,
      sectionType: activeSection.type
    });
    if (isQueryResponseWithoutValue(queryResponse)) {
      return null;
    }
    return queryResponse;
  };
  const applyLetterEditing = params => {
    const findMatchingOptions = (format, options, queryValue) => {
      const matchingValues = options.filter(option => option.toLowerCase().startsWith(queryValue));
      if (matchingValues.length === 0) {
        return {
          saveQuery: false
        };
      }
      return {
        sectionValue: matchingValues[0],
        shouldGoToNextSection: matchingValues.length === 1
      };
    };
    const testQueryOnFormatAndFallbackFormat = (queryValue, activeSection, fallbackFormat, formatFallbackValue) => {
      const getOptions = format => getLetterEditingOptions(adapter, timezone, activeSection.type, format);
      if (activeSection.contentType === 'letter') {
        return findMatchingOptions(activeSection.format, getOptions(activeSection.format), queryValue);
      }

      // When editing a digit-format month / weekDay and the user presses a letter,
      // We can support the letter editing by using the letter-format month / weekDay and re-formatting the result.
      // We just have to make sure that the default month / weekDay format is a letter format,
      if (fallbackFormat && formatFallbackValue != null && getDateSectionConfigFromFormatToken(adapter, fallbackFormat).contentType === 'letter') {
        const fallbackOptions = getOptions(fallbackFormat);
        const response = findMatchingOptions(fallbackFormat, fallbackOptions, queryValue);
        if (isQueryResponseWithoutValue(response)) {
          return {
            saveQuery: false
          };
        }
        return _extends({}, response, {
          sectionValue: formatFallbackValue(response.sectionValue, fallbackOptions)
        });
      }
      return {
        saveQuery: false
      };
    };
    const getFirstSectionValueMatchingWithQuery = (queryValue, activeSection) => {
      switch (activeSection.type) {
        case 'month':
          {
            const formatFallbackValue = fallbackValue => changeSectionValueFormat(adapter, fallbackValue, adapter.formats.month, activeSection.format);
            return testQueryOnFormatAndFallbackFormat(queryValue, activeSection, adapter.formats.month, formatFallbackValue);
          }
        case 'weekDay':
          {
            const formatFallbackValue = (fallbackValue, fallbackOptions) => fallbackOptions.indexOf(fallbackValue).toString();
            return testQueryOnFormatAndFallbackFormat(queryValue, activeSection, adapter.formats.weekday, formatFallbackValue);
          }
        case 'meridiem':
          {
            return testQueryOnFormatAndFallbackFormat(queryValue, activeSection);
          }
        default:
          {
            return {
              saveQuery: false
            };
          }
      }
    };
    return applyQuery(params, getFirstSectionValueMatchingWithQuery);
  };
  const applyNumericEditing = params => {
    const getNewSectionValue = ({
      queryValue,
      skipIfBelowMinimum,
      section
    }) => {
      const cleanQueryValue = removeLocalizedDigits(queryValue, localizedDigits);
      const queryValueNumber = Number(cleanQueryValue);
      const sectionBoundaries = sectionsValueBoundaries[section.type]({
        currentDate: null,
        format: section.format,
        contentType: section.contentType
      });
      if (queryValueNumber > sectionBoundaries.maximum) {
        return {
          saveQuery: false
        };
      }

      // If the user types `0` on a month section,
      // It is below the minimum, but we want to store the `0` in the query,
      // So that when he pressed `1`, it will store `01` and move to the next section.
      if (skipIfBelowMinimum && queryValueNumber < sectionBoundaries.minimum) {
        return {
          saveQuery: true
        };
      }
      const shouldGoToNextSection = queryValueNumber * 10 > sectionBoundaries.maximum || cleanQueryValue.length === sectionBoundaries.maximum.toString().length;
      const newSectionValue = cleanDigitSectionValue(adapter, queryValueNumber, sectionBoundaries, localizedDigits, section);
      return {
        sectionValue: newSectionValue,
        shouldGoToNextSection
      };
    };
    const getFirstSectionValueMatchingWithQuery = (queryValue, activeSection) => {
      if (activeSection.contentType === 'digit' || activeSection.contentType === 'digit-with-letter') {
        return getNewSectionValue({
          queryValue,
          skipIfBelowMinimum: false,
          section: activeSection
        });
      }

      // When editing a letter-format month and the user presses a digit,
      // We can support the numeric editing by using the digit-format month and re-formatting the result.
      if (activeSection.type === 'month') {
        const hasLeadingZerosInFormat = doesSectionFormatHaveLeadingZeros(adapter, 'digit', 'month', 'MM');
        const response = getNewSectionValue({
          queryValue,
          skipIfBelowMinimum: true,
          section: {
            type: activeSection.type,
            format: 'MM',
            hasLeadingZerosInFormat,
            hasLeadingZerosInInput: true,
            contentType: 'digit',
            maxLength: 2
          }
        });
        if (isQueryResponseWithoutValue(response)) {
          return response;
        }
        const formattedValue = changeSectionValueFormat(adapter, response.sectionValue, 'MM', activeSection.format);
        return _extends({}, response, {
          sectionValue: formattedValue
        });
      }

      // When editing a letter-format weekDay and the user presses a digit,
      // We can support the numeric editing by returning the nth day in the week day array.
      if (activeSection.type === 'weekDay') {
        const response = getNewSectionValue({
          queryValue,
          skipIfBelowMinimum: true,
          section: activeSection
        });
        if (isQueryResponseWithoutValue(response)) {
          return response;
        }
        const formattedValue = getDaysInWeekStr(adapter, activeSection.format)[Number(response.sectionValue) - 1];
        return _extends({}, response, {
          sectionValue: formattedValue
        });
      }
      return {
        saveQuery: false
      };
    };
    return applyQuery(params, getFirstSectionValueMatchingWithQuery, queryValue => isStringNumber(queryValue, localizedDigits));
  };
  return useEventCallback(params => {
    const section = state.sections[params.sectionIndex];
    const isNumericEditing = isStringNumber(params.keyPressed, localizedDigits);
    const response = isNumericEditing ? applyNumericEditing(_extends({}, params, {
      keyPressed: applyLocalizedDigits(params.keyPressed, localizedDigits)
    })) : applyLetterEditing(params);
    if (response == null) {
      setTempAndroidValueStr(null);
      return;
    }
    updateSectionValue({
      section,
      newSectionValue: response.sectionValue,
      shouldGoToNextSection: response.shouldGoToNextSection
    });
  });
};

/**
 * The letter editing and the numeric editing each define a `CharacterEditingApplier`.
 * This function decides what the new section value should be and if the focus should switch to the next section.
 *
 * If it returns `null`, then the section value is not updated and the focus does not move.
 */

/**
 * Function called by `applyQuery` which decides:
 * - what is the new section value ?
 * - should the query used to get this value be stored for the next key press ?
 *
 * If it returns `{ sectionValue: string; shouldGoToNextSection: boolean }`,
 * Then we store the query and update the section with the new value.
 *
 * If it returns `{ saveQuery: true` },
 * Then we store the query and don't update the section.
 *
 * If it returns `{ saveQuery: false },
 * Then we do nothing.
 */

const UNINITIALIZED = {};

/**
 * A React.useRef() that is initialized lazily with a function. Note that it accepts an optional
 * initialization argument, so the initialization function doesn't need to be an inline closure.
 *
 * @usage
 *   const ref = useLazyRef(sortColumns, columns)
 */
function useLazyRef(init, initArg) {
  const ref = React__namespace.useRef(UNINITIALIZED);
  if (ref.current === UNINITIALIZED) {
    ref.current = init(initArg);
  }
  return ref;
}

const EMPTY = [];

/**
 * A React.useEffect equivalent that runs once, when the component is mounted.
 */
function useOnMount(fn) {
  // TODO: uncomment once we enable eslint-plugin-react-compiler // eslint-disable-next-line react-compiler/react-compiler -- no need to put `fn` in the dependency array
  /* eslint-disable react-hooks/exhaustive-deps */
  React__namespace.useEffect(fn, EMPTY);
  /* eslint-enable react-hooks/exhaustive-deps */
}

class Timeout {
  static create() {
    return new Timeout();
  }
  currentId = null;

  /**
   * Executes `fn` after `delay`, clearing any previously scheduled call.
   */
  start(delay, fn) {
    this.clear();
    this.currentId = setTimeout(() => {
      this.currentId = null;
      fn();
    }, delay);
  }
  clear = () => {
    if (this.currentId !== null) {
      clearTimeout(this.currentId);
      this.currentId = null;
    }
  };
  disposeEffect = () => {
    return this.clear;
  };
}
function useTimeout() {
  const timeout = useLazyRef(Timeout.create).current;
  useOnMount(timeout.disposeEffect);
  return timeout;
}

/**
 * Validation props used by the Date Picker, Date Field and Date Calendar components.
 */

/**
 * Validation props as received by the validateDate method.
 */

/**
 * Name of the props that should be defaulted before being passed to the validateDate method.
 */

const validateDate = ({
  props,
  value,
  timezone,
  adapter
}) => {
  if (value === null) {
    return null;
  }
  const {
    shouldDisableDate,
    shouldDisableMonth,
    shouldDisableYear,
    disablePast,
    disableFuture,
    minDate,
    maxDate
  } = props;
  const now = adapter.date(undefined, timezone);
  switch (true) {
    case !adapter.isValid(value):
      return 'invalidDate';
    case Boolean(shouldDisableDate && shouldDisableDate(value)):
      return 'shouldDisableDate';
    case Boolean(shouldDisableMonth && shouldDisableMonth(value)):
      return 'shouldDisableMonth';
    case Boolean(shouldDisableYear && shouldDisableYear(value)):
      return 'shouldDisableYear';
    case Boolean(disableFuture && adapter.isAfterDay(value, now)):
      return 'disableFuture';
    case Boolean(disablePast && adapter.isBeforeDay(value, now)):
      return 'disablePast';
    case Boolean(minDate && adapter.isBeforeDay(value, minDate)):
      return 'minDate';
    case Boolean(maxDate && adapter.isAfterDay(value, maxDate)):
      return 'maxDate';
    default:
      return null;
  }
};
validateDate.valueManager = singleItemValueManager;

/**
 * Validation props used by the Time Picker, Time Field and Clock components.
 */

/**
 * Validation props as received by the validateTime method.
 */

/**
 * Name of the props that should be defaulted before being passed to the validateTime method.
 */

const validateTime = ({
  adapter,
  value,
  timezone,
  props
}) => {
  if (value === null) {
    return null;
  }
  const {
    minTime,
    maxTime,
    minutesStep,
    shouldDisableTime,
    disableIgnoringDatePartForTimeValidation = false,
    disablePast,
    disableFuture
  } = props;
  const now = adapter.date(undefined, timezone);
  const isAfter = createIsAfterIgnoreDatePart(disableIgnoringDatePartForTimeValidation, adapter);
  switch (true) {
    case !adapter.isValid(value):
      return 'invalidDate';
    case Boolean(minTime && isAfter(minTime, value)):
      return 'minTime';
    case Boolean(maxTime && isAfter(value, maxTime)):
      return 'maxTime';
    case Boolean(disableFuture && adapter.isAfter(value, now)):
      return 'disableFuture';
    case Boolean(disablePast && adapter.isBefore(value, now)):
      return 'disablePast';
    case Boolean(shouldDisableTime && shouldDisableTime(value, 'hours')):
      return 'shouldDisableTime-hours';
    case Boolean(shouldDisableTime && shouldDisableTime(value, 'minutes')):
      return 'shouldDisableTime-minutes';
    case Boolean(shouldDisableTime && shouldDisableTime(value, 'seconds')):
      return 'shouldDisableTime-seconds';
    case Boolean(minutesStep && adapter.getMinutes(value) % minutesStep !== 0):
      return 'minutesStep';
    default:
      return null;
  }
};
validateTime.valueManager = singleItemValueManager;

/**
 * Validation props used by the Date Time Picker and Date Time Field components.
 */

/**
 * Validation props as received by the validateDateTime method.
 */

/**
 * Name of the props that should be defaulted before being passed to the validateDateTime method.
 */

const validateDateTime = ({
  adapter,
  value,
  timezone,
  props
}) => {
  const dateValidationResult = validateDate({
    adapter,
    value,
    timezone,
    props
  });
  if (dateValidationResult !== null) {
    return dateValidationResult;
  }
  return validateTime({
    adapter,
    value,
    timezone,
    props
  });
};
validateDateTime.valueManager = singleItemValueManager;

/**
 * Utility hook to check if a given value is valid based on the provided validation props.
 * @template TValue The value type. It will be the same type as `value` or `null`. It can be in `[start, end]` format in case of range value.
 * @template TError The validation error type. It will be either `string` or a `null`. It can be in `[start, end]` format in case of range value.
 * @param {UseValidationOptions<TValue, TError, TValidationProps>} options The options to configure the hook.
 * @param {TValue} options.value The value to validate.
 * @param {PickersTimezone} options.timezone The timezone to use for the validation.
 * @param {Validator<TValue, TError, TValidationProps>} options.validator The validator function to use.
 * @param {TValidationProps} options.props The validation props, they differ depending on the component.
 * @param {(error: TError, value: TValue) => void} options.onError Callback fired when the error associated with the current value changes.
 */
function useValidation(options) {
  const {
    props,
    validator,
    value,
    timezone,
    onError
  } = options;
  const adapter = usePickerAdapter();
  const previousValidationErrorRef = React__namespace.useRef(validator.valueManager.defaultErrorState);
  const validationError = validator({
    adapter,
    value,
    timezone,
    props
  });
  const hasValidationError = validator.valueManager.hasError(validationError);
  React__namespace.useEffect(() => {
    if (onError && !validator.valueManager.isSameError(validationError, previousValidationErrorRef.current)) {
      onError(validationError, value);
    }
    previousValidationErrorRef.current = validationError;
  }, [validator, onError, validationError, value]);
  const getValidationErrorForNewValue = useEventCallback(newValue => {
    return validator({
      adapter,
      value: newValue,
      timezone,
      props
    });
  });
  return {
    validationError,
    hasValidationError,
    getValidationErrorForNewValue
  };
}

const QUERY_LIFE_DURATION_MS = 5000;
const useFieldState = parameters => {
  const adapter = usePickerAdapter();
  const translations = usePickerTranslations();
  const isRtl = useRtl();
  const {
    manager: {
      validator,
      valueType,
      internal_valueManager: valueManager,
      internal_fieldValueManager: fieldValueManager
    },
    internalPropsWithDefaults,
    internalPropsWithDefaults: {
      value: valueProp,
      defaultValue,
      referenceDate: referenceDateProp,
      onChange,
      format,
      formatDensity = 'dense',
      selectedSections: selectedSectionsProp,
      onSelectedSectionsChange,
      shouldRespectLeadingZeros = false,
      timezone: timezoneProp,
      enableAccessibleFieldDOMStructure = true
    },
    forwardedProps: {
      error: errorProp
    }
  } = parameters;
  const {
    value,
    handleValueChange,
    timezone
  } = useControlledValue({
    name: 'a field component',
    timezone: timezoneProp,
    value: valueProp,
    defaultValue,
    referenceDate: referenceDateProp,
    onChange,
    valueManager
  });
  const valueRef = React__namespace.useRef(value);
  React__namespace.useEffect(() => {
    valueRef.current = value;
  }, [value]);
  const {
    hasValidationError
  } = useValidation({
    props: internalPropsWithDefaults,
    validator,
    timezone,
    value,
    onError: internalPropsWithDefaults.onError
  });
  const error = React__namespace.useMemo(() => {
    // only override when `error` is undefined.
    // in case of multi input fields, the `error` value is provided externally and will always be defined.
    if (errorProp !== undefined) {
      return errorProp;
    }
    return hasValidationError;
  }, [hasValidationError, errorProp]);
  const localizedDigits = React__namespace.useMemo(() => getLocalizedDigits(adapter), [adapter]);
  const sectionsValueBoundaries = React__namespace.useMemo(() => getSectionsBoundaries(adapter, localizedDigits, timezone), [adapter, localizedDigits, timezone]);
  const getSectionsFromValue = React__namespace.useCallback(valueToAnalyze => fieldValueManager.getSectionsFromValue(valueToAnalyze, date => buildSectionsFromFormat({
    adapter,
    localeText: translations,
    localizedDigits,
    format,
    date,
    formatDensity,
    shouldRespectLeadingZeros,
    enableAccessibleFieldDOMStructure,
    isRtl
  })), [fieldValueManager, format, translations, localizedDigits, isRtl, shouldRespectLeadingZeros, adapter, formatDensity, enableAccessibleFieldDOMStructure]);
  const [state, setState] = React__namespace.useState(() => {
    const sections = getSectionsFromValue(value);
    validateSections(sections, valueType);
    const stateWithoutReferenceDate = {
      sections,
      lastExternalValue: value,
      lastSectionsDependencies: {
        format,
        isRtl,
        locale: adapter.locale
      },
      tempValueStrAndroid: null,
      characterQuery: null
    };
    const granularity = getSectionTypeGranularity(sections);
    const referenceValue = valueManager.getInitialReferenceValue({
      referenceDate: referenceDateProp,
      value,
      adapter,
      props: internalPropsWithDefaults,
      granularity,
      timezone
    });
    return _extends({}, stateWithoutReferenceDate, {
      referenceValue
    });
  });
  const [selectedSections, innerSetSelectedSections] = useControlled({
    controlled: selectedSectionsProp,
    default: null,
    name: 'useField',
    state: 'selectedSections'
  });
  const setSelectedSections = newSelectedSections => {
    innerSetSelectedSections(newSelectedSections);
    onSelectedSectionsChange?.(newSelectedSections);
  };
  const parsedSelectedSections = React__namespace.useMemo(() => parseSelectedSections(selectedSections, state.sections), [selectedSections, state.sections]);
  const activeSectionIndex = parsedSelectedSections === 'all' ? 0 : parsedSelectedSections;
  const sectionOrder = React__namespace.useMemo(() => getSectionOrder(state.sections, isRtl && !enableAccessibleFieldDOMStructure), [state.sections, isRtl, enableAccessibleFieldDOMStructure]);
  const areAllSectionsEmpty = React__namespace.useMemo(() => state.sections.every(section => section.value === ''), [state.sections]);
  const publishValue = newValue => {
    const context = {
      validationError: validator({
        adapter,
        value: newValue,
        timezone,
        props: internalPropsWithDefaults
      })
    };
    handleValueChange(newValue, context);
  };
  const setSectionValue = (sectionIndex, newSectionValue) => {
    const newSections = [...state.sections];
    newSections[sectionIndex] = _extends({}, newSections[sectionIndex], {
      value: newSectionValue,
      modified: true
    });
    return newSections;
  };
  const sectionToUpdateOnNextInvalidDateRef = React__namespace.useRef(null);
  const updateSectionValueOnNextInvalidDateTimeout = useTimeout();
  const setSectionUpdateToApplyOnNextInvalidDate = newSectionValue => {
    if (activeSectionIndex == null) {
      return;
    }
    sectionToUpdateOnNextInvalidDateRef.current = {
      sectionIndex: activeSectionIndex,
      value: newSectionValue
    };
    updateSectionValueOnNextInvalidDateTimeout.start(0, () => {
      sectionToUpdateOnNextInvalidDateRef.current = null;
    });
  };
  const clearValue = () => {
    if (valueManager.areValuesEqual(adapter, value, valueManager.emptyValue)) {
      setState(prevState => _extends({}, prevState, {
        sections: prevState.sections.map(section => _extends({}, section, {
          value: ''
        })),
        tempValueStrAndroid: null,
        characterQuery: null
      }));
    } else {
      setState(prevState => _extends({}, prevState, {
        characterQuery: null
      }));
      publishValue(valueManager.emptyValue);
    }
  };
  const clearActiveSection = () => {
    if (activeSectionIndex == null) {
      return;
    }
    const activeSection = state.sections[activeSectionIndex];
    if (activeSection.value === '') {
      return;
    }
    setSectionUpdateToApplyOnNextInvalidDate('');
    if (fieldValueManager.getDateFromSection(value, activeSection) === null) {
      setState(prevState => _extends({}, prevState, {
        sections: setSectionValue(activeSectionIndex, ''),
        tempValueStrAndroid: null,
        characterQuery: null
      }));
    } else {
      setState(prevState => _extends({}, prevState, {
        characterQuery: null
      }));
      publishValue(fieldValueManager.updateDateInValue(value, activeSection, null));
    }
  };
  const updateValueFromValueStr = valueStr => {
    const parseDateStr = (dateStr, referenceDate) => {
      const date = adapter.parse(dateStr, format);
      if (!adapter.isValid(date)) {
        return null;
      }
      const sections = buildSectionsFromFormat({
        adapter,
        localeText: translations,
        localizedDigits,
        format,
        date,
        formatDensity,
        shouldRespectLeadingZeros,
        enableAccessibleFieldDOMStructure,
        isRtl
      });
      return mergeDateIntoReferenceDate(adapter, date, sections, referenceDate, false);
    };
    const newValue = fieldValueManager.parseValueStr(valueStr, state.referenceValue, parseDateStr);
    publishValue(newValue);
  };
  const cleanActiveDateSectionsIfValueNullTimeout = useTimeout();
  const updateSectionValue = ({
    section,
    newSectionValue,
    shouldGoToNextSection
  }) => {
    updateSectionValueOnNextInvalidDateTimeout.clear();
    cleanActiveDateSectionsIfValueNullTimeout.clear();
    const activeDate = fieldValueManager.getDateFromSection(value, section);

    /**
     * Decide which section should be focused
     */
    if (shouldGoToNextSection && activeSectionIndex < state.sections.length - 1) {
      setSelectedSections(activeSectionIndex + 1);
    }

    /**
     * Try to build a valid date from the new section value
     */
    const newSections = setSectionValue(activeSectionIndex, newSectionValue);
    const newActiveDateSections = fieldValueManager.getDateSectionsFromValue(newSections, section);
    const newActiveDate = getDateFromDateSections(adapter, newActiveDateSections, localizedDigits);

    /**
     * If the new date is valid,
     * Then we merge the value of the modified sections into the reference date.
     * This makes sure that we don't lose some information of the initial date (like the time on a date field).
     */
    if (adapter.isValid(newActiveDate)) {
      const mergedDate = mergeDateIntoReferenceDate(adapter, newActiveDate, newActiveDateSections, fieldValueManager.getDateFromSection(state.referenceValue, section), true);
      if (activeDate == null) {
        cleanActiveDateSectionsIfValueNullTimeout.start(0, () => {
          if (valueRef.current === value) {
            setState(prevState => _extends({}, prevState, {
              sections: fieldValueManager.clearDateSections(state.sections, section),
              tempValueStrAndroid: null
            }));
          }
        });
      }
      return publishValue(fieldValueManager.updateDateInValue(value, section, mergedDate));
    }

    /**
     * If all the sections are filled but the date is invalid and the previous date is valid or null,
     * Then we publish an invalid date.
     */
    if (newActiveDateSections.every(sectionBis => sectionBis.value !== '') && (activeDate == null || adapter.isValid(activeDate))) {
      setSectionUpdateToApplyOnNextInvalidDate(newSectionValue);
      return publishValue(fieldValueManager.updateDateInValue(value, section, newActiveDate));
    }

    /**
     * If the previous date is not null,
     * Then we publish the date as `null`.
     */
    if (activeDate != null) {
      setSectionUpdateToApplyOnNextInvalidDate(newSectionValue);
      return publishValue(fieldValueManager.updateDateInValue(value, section, null));
    }

    /**
     * If the previous date is already null,
     * Then we don't publish the date and we update the sections.
     */
    return setState(prevState => _extends({}, prevState, {
      sections: newSections,
      tempValueStrAndroid: null
    }));
  };
  const setTempAndroidValueStr = tempValueStrAndroid => setState(prevState => _extends({}, prevState, {
    tempValueStrAndroid
  }));
  const setCharacterQuery = useEventCallback(newCharacterQuery => {
    setState(prevState => _extends({}, prevState, {
      characterQuery: newCharacterQuery
    }));
  });

  // If `prop.value` changes, we update the state to reflect the new value
  if (value !== state.lastExternalValue) {
    let sections;
    if (sectionToUpdateOnNextInvalidDateRef.current != null && !adapter.isValid(fieldValueManager.getDateFromSection(value, state.sections[sectionToUpdateOnNextInvalidDateRef.current.sectionIndex]))) {
      sections = setSectionValue(sectionToUpdateOnNextInvalidDateRef.current.sectionIndex, sectionToUpdateOnNextInvalidDateRef.current.value);
    } else {
      sections = getSectionsFromValue(value);
    }
    setState(prevState => _extends({}, prevState, {
      lastExternalValue: value,
      sections,
      sectionsDependencies: {
        format,
        isRtl,
        locale: adapter.locale
      },
      referenceValue: fieldValueManager.updateReferenceValue(adapter, value, prevState.referenceValue),
      tempValueStrAndroid: null
    }));
  }
  if (isRtl !== state.lastSectionsDependencies.isRtl || format !== state.lastSectionsDependencies.format || adapter.locale !== state.lastSectionsDependencies.locale) {
    const sections = getSectionsFromValue(value);
    validateSections(sections, valueType);
    setState(prevState => _extends({}, prevState, {
      lastSectionsDependencies: {
        format,
        isRtl,
        locale: adapter.locale
      },
      sections,
      tempValueStrAndroid: null,
      characterQuery: null
    }));
  }
  if (state.characterQuery != null && !error && activeSectionIndex == null) {
    setCharacterQuery(null);
  }
  if (state.characterQuery != null && state.sections[state.characterQuery.sectionIndex]?.type !== state.characterQuery.sectionType) {
    setCharacterQuery(null);
  }
  React__namespace.useEffect(() => {
    if (sectionToUpdateOnNextInvalidDateRef.current != null) {
      sectionToUpdateOnNextInvalidDateRef.current = null;
    }
  });
  const cleanCharacterQueryTimeout = useTimeout();
  React__namespace.useEffect(() => {
    if (state.characterQuery != null) {
      cleanCharacterQueryTimeout.start(QUERY_LIFE_DURATION_MS, () => setCharacterQuery(null));
    }
    return () => {};
  }, [state.characterQuery, setCharacterQuery, cleanCharacterQueryTimeout]);

  // If `tempValueStrAndroid` is still defined for some section when running `useEffect`,
  // Then `onChange` has only been called once, which means the user pressed `Backspace` to reset the section.
  // This causes a small flickering on Android,
  // But we can't use `useEnhancedEffect` which is always called before the second `onChange` call and then would cause false positives.
  React__namespace.useEffect(() => {
    if (state.tempValueStrAndroid != null && activeSectionIndex != null) {
      clearActiveSection();
    }
  }, [state.sections]); // eslint-disable-line react-hooks/exhaustive-deps

  return {
    // States and derived states
    activeSectionIndex,
    areAllSectionsEmpty,
    error,
    localizedDigits,
    parsedSelectedSections,
    sectionOrder,
    sectionsValueBoundaries,
    state,
    timezone,
    value,
    // Methods to update the states
    clearValue,
    clearActiveSection,
    setCharacterQuery,
    setSelectedSections,
    setTempAndroidValueStr,
    updateSectionValue,
    updateValueFromValueStr,
    // Utilities methods
    getSectionsFromValue
  };
};

/**
 * Applies the default values to the field internal props.
 * This is a temporary hook that will be removed during a follow up when `useField` will receive the internal props without the defaults.
 * It is only here to allow the migration to be done in smaller steps.
 */
function useFieldInternalPropsWithDefaults(parameters) {
  const {
    manager: {
      internal_useApplyDefaultValuesToFieldInternalProps: useApplyDefaultValuesToFieldInternalProps
    },
    internalProps,
    skipContextFieldRefAssignment
  } = parameters;
  const pickerContext = useNullablePickerContext();
  const fieldPrivateContext = useNullableFieldPrivateContext();
  const handleFieldRef = useForkRef(internalProps.unstableFieldRef, skipContextFieldRefAssignment ? null : fieldPrivateContext?.fieldRef);
  const setValue = pickerContext?.setValue;
  const handleChangeFromPicker = React__namespace.useCallback((newValue, ctx) => {
    return setValue?.(newValue, {
      validationError: ctx.validationError,
      shouldClose: false
    });
  }, [setValue]);
  const internalPropsWithDefaultsFromContext = React__namespace.useMemo(() => {
    // If one of the context is null,
    // Then the field is used as a standalone component and the other context will be null as well.
    if (fieldPrivateContext != null && pickerContext != null) {
      return _extends({
        value: pickerContext.value,
        onChange: handleChangeFromPicker,
        timezone: pickerContext.timezone,
        disabled: pickerContext.disabled,
        readOnly: pickerContext.readOnly,
        autoFocus: pickerContext.autoFocus && !pickerContext.open,
        focused: pickerContext.open ? true : undefined,
        format: pickerContext.fieldFormat,
        formatDensity: fieldPrivateContext.formatDensity,
        enableAccessibleFieldDOMStructure: fieldPrivateContext.enableAccessibleFieldDOMStructure,
        selectedSections: fieldPrivateContext.selectedSections,
        onSelectedSectionsChange: fieldPrivateContext.onSelectedSectionsChange,
        unstableFieldRef: handleFieldRef
      }, internalProps);
    }
    return internalProps;
  }, [pickerContext, fieldPrivateContext, internalProps, handleChangeFromPicker, handleFieldRef]);
  return useApplyDefaultValuesToFieldInternalProps(internalPropsWithDefaultsFromContext);
}

function syncSelectionToDOM(parameters) {
  const {
    focused,
    domGetters,
    stateResponse: {
      // States and derived states
      parsedSelectedSections,
      state
    }
  } = parameters;
  if (!domGetters.isReady()) {
    return;
  }
  const selection = ownerDocument(domGetters.getRoot()).getSelection();
  if (!selection) {
    return;
  }
  if (parsedSelectedSections == null) {
    // If the selection contains an element inside the field, we reset it.
    if (selection.rangeCount > 0 && domGetters.getRoot().contains(selection.getRangeAt(0).startContainer)) {
      selection.removeAllRanges();
    }
    if (focused) {
      domGetters.getRoot().blur();
    }
    return;
  }

  // On multi input range pickers we want to update selection range only for the active input
  if (!domGetters.getRoot().contains(getActiveElement(domGetters.getRoot()))) {
    return;
  }
  const range = new window.Range();
  let target;
  if (parsedSelectedSections === 'all') {
    target = domGetters.getRoot();
  } else {
    const section = state.sections[parsedSelectedSections];
    if (section.type === 'empty') {
      target = domGetters.getSectionContainer(parsedSelectedSections);
    } else {
      target = domGetters.getSectionContent(parsedSelectedSections);
    }
  }
  range.selectNodeContents(target);
  target.focus();
  selection.removeAllRanges();
  selection.addRange(range);
}

/**
 * Returns the `onKeyDown` handler to pass to the root element of the field.
 */
function useFieldRootHandleKeyDown(parameters) {
  const adapter = usePickerAdapter();
  const {
    manager: {
      internal_fieldValueManager: fieldValueManager
    },
    internalPropsWithDefaults: {
      minutesStep,
      disabled,
      readOnly
    },
    stateResponse: {
      // States and derived states
      state,
      value,
      activeSectionIndex,
      parsedSelectedSections,
      sectionsValueBoundaries,
      localizedDigits,
      timezone,
      sectionOrder,
      // Methods to update the states
      clearValue,
      clearActiveSection,
      setSelectedSections,
      updateSectionValue
    }
  } = parameters;
  return useEventCallback(event => {
    if (disabled) {
      return;
    }

    // eslint-disable-next-line default-case
    switch (true) {
      // Select all
      case (event.ctrlKey || event.metaKey) && String.fromCharCode(event.keyCode) === 'A' && !event.shiftKey && !event.altKey:
        {
          // prevent default to make sure that the next line "select all" while updating
          // the internal state at the same time.
          event.preventDefault();
          setSelectedSections('all');
          break;
        }

      // Move selection to next section
      case event.key === 'ArrowRight':
        {
          event.preventDefault();
          if (parsedSelectedSections == null) {
            setSelectedSections(sectionOrder.startIndex);
          } else if (parsedSelectedSections === 'all') {
            setSelectedSections(sectionOrder.endIndex);
          } else {
            const nextSectionIndex = sectionOrder.neighbors[parsedSelectedSections].rightIndex;
            if (nextSectionIndex !== null) {
              setSelectedSections(nextSectionIndex);
            }
          }
          break;
        }

      // Move selection to previous section
      case event.key === 'ArrowLeft':
        {
          event.preventDefault();
          if (parsedSelectedSections == null) {
            setSelectedSections(sectionOrder.endIndex);
          } else if (parsedSelectedSections === 'all') {
            setSelectedSections(sectionOrder.startIndex);
          } else {
            const nextSectionIndex = sectionOrder.neighbors[parsedSelectedSections].leftIndex;
            if (nextSectionIndex !== null) {
              setSelectedSections(nextSectionIndex);
            }
          }
          break;
        }

      // Reset the value of the selected section
      case event.key === 'Delete':
        {
          event.preventDefault();
          if (readOnly) {
            break;
          }
          if (parsedSelectedSections == null || parsedSelectedSections === 'all') {
            clearValue();
          } else {
            clearActiveSection();
          }
          break;
        }

      // Increment / decrement the selected section value
      case ['ArrowUp', 'ArrowDown', 'Home', 'End', 'PageUp', 'PageDown'].includes(event.key):
        {
          event.preventDefault();
          if (readOnly || activeSectionIndex == null) {
            break;
          }

          // if all sections are selected, mark the currently editing one as selected
          if (parsedSelectedSections === 'all') {
            setSelectedSections(activeSectionIndex);
          }
          const activeSection = state.sections[activeSectionIndex];
          const newSectionValue = adjustSectionValue(adapter, timezone, activeSection, event.key, sectionsValueBoundaries, localizedDigits, fieldValueManager.getDateFromSection(value, activeSection), {
            minutesStep
          });
          updateSectionValue({
            section: activeSection,
            newSectionValue,
            shouldGoToNextSection: false
          });
          break;
        }
    }
  });
}
function getDeltaFromKeyCode(keyCode) {
  switch (keyCode) {
    case 'ArrowUp':
      return 1;
    case 'ArrowDown':
      return -1;
    case 'PageUp':
      return 5;
    case 'PageDown':
      return -5;
    default:
      return 0;
  }
}
function adjustSectionValue(adapter, timezone, section, keyCode, sectionsValueBoundaries, localizedDigits, activeDate, stepsAttributes) {
  const delta = getDeltaFromKeyCode(keyCode);
  const isStart = keyCode === 'Home';
  const isEnd = keyCode === 'End';
  const shouldSetAbsolute = section.value === '' || isStart || isEnd;
  const adjustDigitSection = () => {
    const sectionBoundaries = sectionsValueBoundaries[section.type]({
      currentDate: activeDate,
      format: section.format,
      contentType: section.contentType
    });
    const getCleanValue = value => cleanDigitSectionValue(adapter, value, sectionBoundaries, localizedDigits, section);
    const step = section.type === 'minutes' && stepsAttributes?.minutesStep ? stepsAttributes.minutesStep : 1;
    let newSectionValueNumber;
    if (shouldSetAbsolute) {
      if (section.type === 'year' && !isEnd && !isStart) {
        return adapter.formatByString(adapter.date(undefined, timezone), section.format);
      }
      if (delta > 0 || isStart) {
        newSectionValueNumber = sectionBoundaries.minimum;
      } else {
        newSectionValueNumber = sectionBoundaries.maximum;
      }
    } else {
      const currentSectionValue = parseInt(removeLocalizedDigits(section.value, localizedDigits), 10);
      newSectionValueNumber = currentSectionValue + delta * step;
    }
    if (newSectionValueNumber % step !== 0) {
      if (delta < 0 || isStart) {
        newSectionValueNumber += step - (step + newSectionValueNumber) % step; // for JS -3 % 5 = -3 (should be 2)
      }
      if (delta > 0 || isEnd) {
        newSectionValueNumber -= newSectionValueNumber % step;
      }
    }
    if (newSectionValueNumber > sectionBoundaries.maximum) {
      return getCleanValue(sectionBoundaries.minimum + (newSectionValueNumber - sectionBoundaries.maximum - 1) % (sectionBoundaries.maximum - sectionBoundaries.minimum + 1));
    }
    if (newSectionValueNumber < sectionBoundaries.minimum) {
      return getCleanValue(sectionBoundaries.maximum - (sectionBoundaries.minimum - newSectionValueNumber - 1) % (sectionBoundaries.maximum - sectionBoundaries.minimum + 1));
    }
    return getCleanValue(newSectionValueNumber);
  };
  const adjustLetterSection = () => {
    const options = getLetterEditingOptions(adapter, timezone, section.type, section.format);
    if (options.length === 0) {
      return section.value;
    }
    if (shouldSetAbsolute) {
      if (delta > 0 || isStart) {
        return options[0];
      }
      return options[options.length - 1];
    }
    const currentOptionIndex = options.indexOf(section.value);
    const newOptionIndex = (currentOptionIndex + delta) % options.length;
    const clampedIndex = (newOptionIndex + options.length) % options.length;
    return options[clampedIndex];
  };
  if (section.contentType === 'digit' || section.contentType === 'digit-with-letter') {
    return adjustDigitSection();
  }
  return adjustLetterSection();
}

/**
 * Generate the props to pass to the root element of the field.
 * It is not used by the non-accessible DOM structure (with an <input /> element for editing).
 * It should be used in the MUI accessible DOM structure and the Base UI implementation.
 * @param {UseFieldRootPropsParameters} parameters The parameters of the hook.
 * @returns {UseFieldRootPropsReturnValue} The props to forward to the root element of the field.
 */
function useFieldRootProps(parameters) {
  const {
    manager,
    focused,
    setFocused,
    domGetters,
    stateResponse,
    applyCharacterEditing,
    internalPropsWithDefaults,
    stateResponse: {
      // States and derived states
      parsedSelectedSections,
      sectionOrder,
      state,
      // Methods to update the states
      clearValue,
      setCharacterQuery,
      setSelectedSections,
      updateValueFromValueStr
    },
    internalPropsWithDefaults: {
      disabled = false,
      readOnly = false
    }
  } = parameters;

  // TODO: Inline onContainerKeyDown once the old DOM structure is removed
  const handleKeyDown = useFieldRootHandleKeyDown({
    manager,
    internalPropsWithDefaults,
    stateResponse
  });
  const containerClickTimeout = useTimeout();
  const handleClick = useEventCallback(event => {
    if (disabled || !domGetters.isReady()) {
      return;
    }
    setFocused(true);
    if (parsedSelectedSections === 'all') {
      containerClickTimeout.start(0, () => {
        const cursorPosition = document.getSelection().getRangeAt(0).startOffset;
        if (cursorPosition === 0) {
          setSelectedSections(sectionOrder.startIndex);
          return;
        }
        let sectionIndex = 0;
        let cursorOnStartOfSection = 0;
        while (cursorOnStartOfSection < cursorPosition && sectionIndex < state.sections.length) {
          const section = state.sections[sectionIndex];
          sectionIndex += 1;
          cursorOnStartOfSection += `${section.startSeparator}${section.value || section.placeholder}${section.endSeparator}`.length;
        }
        setSelectedSections(sectionIndex - 1);
      });
    } else if (!focused) {
      setFocused(true);
      setSelectedSections(sectionOrder.startIndex);
    } else {
      const hasClickedOnASection = domGetters.getRoot().contains(event.target);
      if (!hasClickedOnASection) {
        setSelectedSections(sectionOrder.startIndex);
      }
    }
  });
  const handleInput = useEventCallback(event => {
    if (!domGetters.isReady() || parsedSelectedSections !== 'all') {
      return;
    }
    const target = event.target;
    const keyPressed = target.textContent ?? '';
    domGetters.getRoot().innerHTML = state.sections.map(section => `${section.startSeparator}${section.value || section.placeholder}${section.endSeparator}`).join('');
    syncSelectionToDOM({
      focused,
      domGetters,
      stateResponse
    });
    if (keyPressed.length === 0 || keyPressed.charCodeAt(0) === 10) {
      clearValue();
      setSelectedSections('all');
    } else if (keyPressed.length > 1) {
      updateValueFromValueStr(keyPressed);
    } else {
      if (parsedSelectedSections === 'all') {
        setSelectedSections(0);
      }
      applyCharacterEditing({
        keyPressed,
        sectionIndex: 0
      });
    }
  });
  const handlePaste = useEventCallback(event => {
    if (readOnly || parsedSelectedSections !== 'all') {
      event.preventDefault();
      return;
    }
    const pastedValue = event.clipboardData.getData('text');
    event.preventDefault();
    setCharacterQuery(null);
    updateValueFromValueStr(pastedValue);
  });
  const handleFocus = useEventCallback(() => {
    if (focused || disabled || !domGetters.isReady()) {
      return;
    }
    const activeElement = getActiveElement(domGetters.getRoot());
    setFocused(true);
    const isFocusInsideASection = domGetters.getSectionIndexFromDOMElement(activeElement) != null;
    if (!isFocusInsideASection) {
      setSelectedSections(sectionOrder.startIndex);
    }
  });
  const handleBlur = useEventCallback(() => {
    setTimeout(() => {
      if (!domGetters.isReady()) {
        return;
      }
      const activeElement = getActiveElement(domGetters.getRoot());
      const shouldBlur = !domGetters.getRoot().contains(activeElement);
      if (shouldBlur) {
        setFocused(false);
        setSelectedSections(null);
      }
    });
  });
  return {
    // Event handlers
    onKeyDown: handleKeyDown,
    onBlur: handleBlur,
    onFocus: handleFocus,
    onClick: handleClick,
    onPaste: handlePaste,
    onInput: handleInput,
    // Other
    contentEditable: parsedSelectedSections === 'all',
    tabIndex: parsedSelectedSections === 0 ? -1 : 0 // TODO: Try to set to undefined when there is a section selected.
  };
}

/**
 * Generate the props to pass to the hidden input element of the field.
 * It is not used by the non-accessible DOM structure (with an <input /> element for editing).
 * It should be used in the MUI accessible DOM structure and the Base UI implementation.
 * @param {UseFieldHiddenInputPropsParameters} parameters The parameters of the hook.
 * @returns {UseFieldHiddenInputPropsReturnValue} The props to forward to the hidden input element of the field.
 */
function useFieldHiddenInputProps(parameters) {
  const {
    manager: {
      internal_fieldValueManager: fieldValueManager
    },
    stateResponse: {
      // States and derived states
      areAllSectionsEmpty,
      state,
      // Methods to update the states
      updateValueFromValueStr
    }
  } = parameters;
  const handleChange = useEventCallback(event => {
    updateValueFromValueStr(event.target.value);
  });
  const valueStr = React__namespace.useMemo(() => areAllSectionsEmpty ? '' : fieldValueManager.getV7HiddenInputValueFromSections(state.sections), [areAllSectionsEmpty, state.sections, fieldValueManager]);
  return {
    value: valueStr,
    onChange: handleChange
  };
}

/**
 * Generate the props to pass to the container element of each section of the field.
 * It is not used by the non-accessible DOM structure (with an <input /> element for editing).
 * It should be used in the MUI accessible DOM structure and the Base UI implementation.
 * @param {UseFieldRootPropsParameters} parameters The parameters of the hook.
 * @returns {UseFieldRootPropsReturnValue} The props to forward to the container element of each section of the field.
 */
function useFieldSectionContainerProps(parameters) {
  const {
    stateResponse: {
      // Methods to update the states
      setSelectedSections
    },
    internalPropsWithDefaults: {
      disabled = false
    }
  } = parameters;
  const createHandleClick = React__namespace.useCallback(sectionIndex => event => {
    // The click event on the clear button would propagate to the input, trigger this handler and result in a wrong section selection.
    // We avoid this by checking if the call to this function is actually intended, or a side effect.
    if (disabled || event.isDefaultPrevented()) {
      return;
    }
    setSelectedSections(sectionIndex);
  }, [disabled, setSelectedSections]);
  return React__namespace.useCallback(sectionIndex => ({
    'data-sectionindex': sectionIndex,
    onClick: createHandleClick(sectionIndex)
  }), [createHandleClick]);
}

/**
 * Generate the props to pass to the content element of each section of the field.
 * It is not used by the non-accessible DOM structure (with an <input /> element for editing).
 * It should be used in the MUI accessible DOM structure and the Base UI implementation.
 * @param {UseFieldRootPropsParameters} parameters The parameters of the hook.
 * @returns {UseFieldRootPropsReturnValue} The props to forward to the content element of each section of the field.
 */
function useFieldSectionContentProps(parameters) {
  const adapter = usePickerAdapter();
  const translations = usePickerTranslations();
  const id = useId();
  const {
    focused,
    domGetters,
    stateResponse,
    applyCharacterEditing,
    manager: {
      internal_fieldValueManager: fieldValueManager
    },
    stateResponse: {
      // States and derived states
      parsedSelectedSections,
      sectionsValueBoundaries,
      state,
      value,
      // Methods to update the states
      clearActiveSection,
      setCharacterQuery,
      setSelectedSections,
      updateSectionValue,
      updateValueFromValueStr
    },
    internalPropsWithDefaults: {
      disabled = false,
      readOnly = false
    }
  } = parameters;
  const isContainerEditable = parsedSelectedSections === 'all';
  const isEditable = !isContainerEditable && !disabled && !readOnly;

  /**
   * If a section content has been updated with a value we don't want to keep,
   * Then we need to imperatively revert it (we can't let React do it because the value did not change in his internal representation).
   */
  const revertDOMSectionChange = useEventCallback(sectionIndex => {
    if (!domGetters.isReady()) {
      return;
    }
    const section = state.sections[sectionIndex];
    domGetters.getSectionContent(sectionIndex).innerHTML = section.value || section.placeholder;
    syncSelectionToDOM({
      focused,
      domGetters,
      stateResponse
    });
  });
  const handleInput = useEventCallback(event => {
    if (!domGetters.isReady()) {
      return;
    }
    const target = event.target;
    const keyPressed = target.textContent ?? '';
    const sectionIndex = domGetters.getSectionIndexFromDOMElement(target);
    const section = state.sections[sectionIndex];
    if (readOnly) {
      revertDOMSectionChange(sectionIndex);
      return;
    }
    if (keyPressed.length === 0) {
      if (section.value === '') {
        revertDOMSectionChange(sectionIndex);
        return;
      }
      const inputType = event.nativeEvent.inputType;
      if (inputType === 'insertParagraph' || inputType === 'insertLineBreak') {
        revertDOMSectionChange(sectionIndex);
        return;
      }
      revertDOMSectionChange(sectionIndex);
      clearActiveSection();
      return;
    }
    applyCharacterEditing({
      keyPressed,
      sectionIndex
    });

    // The DOM value needs to remain the one React is expecting.
    revertDOMSectionChange(sectionIndex);
  });
  const handleMouseUp = useEventCallback(event => {
    // Without this, the browser will remove the selected when clicking inside an already-selected section.
    event.preventDefault();
  });
  const handlePaste = useEventCallback(event => {
    // prevent default to avoid the input `onInput` handler being called
    event.preventDefault();
    if (readOnly || disabled || typeof parsedSelectedSections !== 'number') {
      return;
    }
    const activeSection = state.sections[parsedSelectedSections];
    const pastedValue = event.clipboardData.getData('text');
    const lettersOnly = /^[a-zA-Z]+$/.test(pastedValue);
    const digitsOnly = /^[0-9]+$/.test(pastedValue);
    const digitsAndLetterOnly = /^(([a-zA-Z]+)|)([0-9]+)(([a-zA-Z]+)|)$/.test(pastedValue);
    const isValidPastedValue = activeSection.contentType === 'letter' && lettersOnly || activeSection.contentType === 'digit' && digitsOnly || activeSection.contentType === 'digit-with-letter' && digitsAndLetterOnly;
    if (isValidPastedValue) {
      setCharacterQuery(null);
      updateSectionValue({
        section: activeSection,
        newSectionValue: pastedValue,
        shouldGoToNextSection: true
      });
    }
    // If the pasted value corresponds to a single section, but not the expected type, we skip the modification
    else if (!lettersOnly && !digitsOnly) {
      setCharacterQuery(null);
      updateValueFromValueStr(pastedValue);
    }
  });
  const handleDragOver = useEventCallback(event => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'none';
  });
  const createFocusHandler = React__namespace.useCallback(sectionIndex => () => {
    if (disabled) {
      return;
    }
    setSelectedSections(sectionIndex);
  }, [disabled, setSelectedSections]);
  return React__namespace.useCallback((section, sectionIndex) => {
    const sectionBoundaries = sectionsValueBoundaries[section.type]({
      currentDate: fieldValueManager.getDateFromSection(value, section),
      contentType: section.contentType,
      format: section.format
    });
    return {
      // Event handlers
      onInput: handleInput,
      onPaste: handlePaste,
      onMouseUp: handleMouseUp,
      onDragOver: handleDragOver,
      onFocus: createFocusHandler(sectionIndex),
      // Aria attributes
      'aria-labelledby': `${id}-${section.type}`,
      'aria-readonly': readOnly,
      'aria-valuenow': getSectionValueNow(section, adapter),
      'aria-valuemin': sectionBoundaries.minimum,
      'aria-valuemax': sectionBoundaries.maximum,
      'aria-valuetext': section.value ? getSectionValueText(section, adapter) : translations.empty,
      'aria-label': translations[section.type],
      'aria-disabled': disabled,
      // Other
      tabIndex: isContainerEditable || sectionIndex > 0 ? -1 : 0,
      contentEditable: !isContainerEditable && !disabled && !readOnly,
      role: 'spinbutton',
      id: `${id}-${section.type}`,
      'data-range-position': section.dateName || undefined,
      spellCheck: isEditable ? false : undefined,
      autoCapitalize: isEditable ? 'off' : undefined,
      autoCorrect: isEditable ? 'off' : undefined,
      children: section.value || section.placeholder,
      inputMode: section.contentType === 'letter' ? 'text' : 'numeric'
    };
  }, [sectionsValueBoundaries, id, isContainerEditable, disabled, readOnly, isEditable, translations, adapter, handleInput, handlePaste, handleMouseUp, handleDragOver, createFocusHandler, fieldValueManager, value]);
}
function getSectionValueText(section, adapter) {
  if (!section.value) {
    return undefined;
  }
  switch (section.type) {
    case 'month':
      {
        if (section.contentType === 'digit') {
          return adapter.format(adapter.setMonth(adapter.date(), Number(section.value) - 1), 'month');
        }
        const parsedDate = adapter.parse(section.value, section.format);
        return parsedDate ? adapter.format(parsedDate, 'month') : undefined;
      }
    case 'day':
      return section.contentType === 'digit' ? adapter.format(adapter.setDate(adapter.startOfYear(adapter.date()), Number(section.value)), 'dayOfMonthFull') : section.value;
    case 'weekDay':
      // TODO: improve by providing the label of the week day
      return undefined;
    default:
      return undefined;
  }
}
function getSectionValueNow(section, adapter) {
  if (!section.value) {
    return undefined;
  }
  switch (section.type) {
    case 'weekDay':
      {
        if (section.contentType === 'letter') {
          // TODO: improve by resolving the week day number from a letter week day
          return undefined;
        }
        return Number(section.value);
      }
    case 'meridiem':
      {
        const parsedDate = adapter.parse(`01:00 ${section.value}`, `${adapter.formats.hours12h}:${adapter.formats.minutes} ${section.format}`);
        if (parsedDate) {
          return adapter.getHours(parsedDate) >= 12 ? 1 : 0;
        }
        return undefined;
      }
    case 'day':
      return section.contentType === 'digit-with-letter' ? parseInt(section.value, 10) : Number(section.value);
    case 'month':
      {
        if (section.contentType === 'digit') {
          return Number(section.value);
        }
        const parsedDate = adapter.parse(section.value, section.format);
        return parsedDate ? adapter.getMonth(parsedDate) + 1 : undefined;
      }
    default:
      return section.contentType !== 'letter' ? Number(section.value) : undefined;
  }
}

const useFieldV7TextField = parameters => {
  const {
    props,
    manager,
    skipContextFieldRefAssignment,
    manager: {
      valueType,
      internal_useOpenPickerButtonAriaLabel: useOpenPickerButtonAriaLabel
    }
  } = parameters;
  const {
    internalProps,
    forwardedProps
  } = useSplitFieldProps(props, valueType);
  const internalPropsWithDefaults = useFieldInternalPropsWithDefaults({
    manager,
    internalProps,
    skipContextFieldRefAssignment
  });
  const {
    sectionListRef: sectionListRefProp,
    onBlur,
    onClick,
    onFocus,
    onInput,
    onPaste,
    onKeyDown,
    onClear,
    clearable
  } = forwardedProps;
  const {
    disabled = false,
    readOnly = false,
    autoFocus = false,
    focused: focusedProp,
    unstableFieldRef
  } = internalPropsWithDefaults;
  const sectionListRef = React__namespace.useRef(null);
  const handleSectionListRef = useForkRef(sectionListRefProp, sectionListRef);
  const domGetters = React__namespace.useMemo(() => ({
    isReady: () => sectionListRef.current != null,
    getRoot: () => sectionListRef.current.getRoot(),
    getSectionContainer: sectionIndex => sectionListRef.current.getSectionContainer(sectionIndex),
    getSectionContent: sectionIndex => sectionListRef.current.getSectionContent(sectionIndex),
    getSectionIndexFromDOMElement: element => sectionListRef.current.getSectionIndexFromDOMElement(element)
  }), [sectionListRef]);
  const stateResponse = useFieldState({
    manager,
    internalPropsWithDefaults,
    forwardedProps
  });
  const {
    // States and derived states
    areAllSectionsEmpty,
    error,
    parsedSelectedSections,
    sectionOrder,
    state,
    value,
    // Methods to update the states
    clearValue,
    setSelectedSections
  } = stateResponse;
  const applyCharacterEditing = useFieldCharacterEditing({
    stateResponse
  });
  const openPickerAriaLabel = useOpenPickerButtonAriaLabel(value);
  const [focused, setFocused] = React__namespace.useState(false);
  function focusField(newSelectedSections = 0) {
    if (disabled || !sectionListRef.current ||
    // if the field is already focused, we don't need to focus it again
    getActiveSectionIndex(sectionListRef) != null) {
      return;
    }
    const newParsedSelectedSections = parseSelectedSections(newSelectedSections, state.sections);
    setFocused(true);
    sectionListRef.current.getSectionContent(newParsedSelectedSections).focus();
  }
  const rootProps = useFieldRootProps({
    manager,
    internalPropsWithDefaults,
    stateResponse,
    applyCharacterEditing,
    focused,
    setFocused,
    domGetters
  });
  const hiddenInputProps = useFieldHiddenInputProps({
    manager,
    stateResponse
  });
  const createSectionContainerProps = useFieldSectionContainerProps({
    stateResponse,
    internalPropsWithDefaults
  });
  const createSectionContentProps = useFieldSectionContentProps({
    manager,
    stateResponse,
    applyCharacterEditing,
    internalPropsWithDefaults,
    domGetters,
    focused
  });
  const handleRootKeyDown = useEventCallback(event => {
    onKeyDown?.(event);
    rootProps.onKeyDown(event);
  });
  const handleRootBlur = useEventCallback(event => {
    onBlur?.(event);
    rootProps.onBlur(event);
  });
  const handleRootFocus = useEventCallback(event => {
    onFocus?.(event);
    rootProps.onFocus(event);
  });
  const handleRootClick = useEventCallback(event => {
    // The click event on the clear or open button would propagate to the input, trigger this handler and result in an inadvertent section selection.
    // We avoid this by checking if the call of `handleInputClick` is actually intended, or a propagated call, which should be skipped.
    if (event.isDefaultPrevented()) {
      return;
    }
    onClick?.(event);
    rootProps.onClick(event);
  });
  const handleRootPaste = useEventCallback(event => {
    onPaste?.(event);
    rootProps.onPaste(event);
  });
  const handleRootInput = useEventCallback(event => {
    onInput?.(event);
    rootProps.onInput(event);
  });
  const handleClear = useEventCallback((event, ...args) => {
    event.preventDefault();
    onClear?.(event, ...args);
    clearValue();
    if (!isFieldFocused$1(sectionListRef)) {
      // setSelectedSections is called internally
      focusField(0);
    } else {
      setSelectedSections(sectionOrder.startIndex);
    }
  });
  const elements = React__namespace.useMemo(() => {
    return state.sections.map((section, sectionIndex) => {
      const content = createSectionContentProps(section, sectionIndex);
      return {
        container: createSectionContainerProps(sectionIndex),
        content: createSectionContentProps(section, sectionIndex),
        before: {
          children: section.startSeparator
        },
        after: {
          children: section.endSeparator,
          'data-range-position': section.isEndFormatSeparator ? content['data-range-position'] : undefined
        }
      };
    });
  }, [state.sections, createSectionContainerProps, createSectionContentProps]);
  React__namespace.useEffect(() => {
    if (sectionListRef.current == null) {
      throw new Error(['MUI X: The `sectionListRef` prop has not been initialized by `PickersSectionList`', 'You probably tried to pass a component to the `textField` slot that contains an `<input />` element instead of a `PickersSectionList`.', '', 'If you want to keep using an `<input />` HTML element for the editing, please add the `enableAccessibleFieldDOMStructure={false}` prop to your Picker or Field component:', '', '<DatePicker enableAccessibleFieldDOMStructure={false} slots={{ textField: MyCustomTextField }} />', '', 'Learn more about the field accessible DOM structure on the MUI documentation: https://mui.com/x/react-date-pickers/fields/#fields-to-edit-a-single-element'].join('\n'));
    }
    if (autoFocus && !disabled && sectionListRef.current) {
      sectionListRef.current.getSectionContent(sectionOrder.startIndex).focus();
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEnhancedEffect$1(() => {
    if (!focused || !sectionListRef.current) {
      return;
    }
    if (parsedSelectedSections === 'all') {
      sectionListRef.current.getRoot().focus();
    } else if (typeof parsedSelectedSections === 'number') {
      const domElement = sectionListRef.current.getSectionContent(parsedSelectedSections);
      if (domElement) {
        domElement.focus();
      }
    }
  }, [parsedSelectedSections, focused]);
  useEnhancedEffect$1(() => {
    syncSelectionToDOM({
      focused,
      domGetters,
      stateResponse
    });
  });
  React__namespace.useImperativeHandle(unstableFieldRef, () => ({
    getSections: () => state.sections,
    getActiveSectionIndex: () => getActiveSectionIndex(sectionListRef),
    setSelectedSections: newSelectedSections => {
      if (disabled || !sectionListRef.current) {
        return;
      }
      const newParsedSelectedSections = parseSelectedSections(newSelectedSections, state.sections);
      const newActiveSectionIndex = newParsedSelectedSections === 'all' ? 0 : newParsedSelectedSections;
      setFocused(newActiveSectionIndex !== null);
      setSelectedSections(newSelectedSections);
    },
    focusField,
    isFieldFocused: () => isFieldFocused$1(sectionListRef)
  }));
  return _extends({}, forwardedProps, rootProps, {
    onBlur: handleRootBlur,
    onClick: handleRootClick,
    onFocus: handleRootFocus,
    onInput: handleRootInput,
    onPaste: handleRootPaste,
    onKeyDown: handleRootKeyDown,
    onClear: handleClear
  }, hiddenInputProps, {
    error,
    clearable: Boolean(clearable && !areAllSectionsEmpty && !readOnly && !disabled),
    focused: focusedProp ?? focused,
    sectionListRef: handleSectionListRef,
    // Additional
    enableAccessibleFieldDOMStructure: true,
    elements,
    areAllSectionsEmpty,
    disabled,
    readOnly,
    autoFocus,
    openPickerAriaLabel
  });
};
function getActiveSectionIndex(sectionListRef) {
  const activeElement = getActiveElement(sectionListRef.current?.getRoot());
  if (!activeElement || !sectionListRef.current || !sectionListRef.current.getRoot().contains(activeElement)) {
    return null;
  }
  return sectionListRef.current.getSectionIndexFromDOMElement(activeElement);
}
function isFieldFocused$1(sectionListRef) {
  const activeElement = getActiveElement(sectionListRef.current?.getRoot());
  return !!sectionListRef.current && sectionListRef.current.getRoot().contains(activeElement);
}

const cleanString = dirtyString => dirtyString.replace(/[\u2066\u2067\u2068\u2069]/g, '');
const addPositionPropertiesToSections = (sections, localizedDigits, isRtl) => {
  let position = 0;
  let positionInInput = isRtl ? 1 : 0;
  const newSections = [];
  for (let i = 0; i < sections.length; i += 1) {
    const section = sections[i];
    const renderedValue = getSectionVisibleValue(section, isRtl ? 'input-rtl' : 'input-ltr', localizedDigits);
    const sectionStr = `${section.startSeparator}${renderedValue}${section.endSeparator}`;
    const sectionLength = cleanString(sectionStr).length;
    const sectionLengthInInput = sectionStr.length;

    // The ...InInput values consider the unicode characters but do include them in their indexes
    const cleanedValue = cleanString(renderedValue);
    const startInInput = positionInInput + (cleanedValue === '' ? 0 : renderedValue.indexOf(cleanedValue[0])) + section.startSeparator.length;
    const endInInput = startInInput + cleanedValue.length;
    newSections.push(_extends({}, section, {
      start: position,
      end: position + sectionLength,
      startInInput,
      endInInput
    }));
    position += sectionLength;
    // Move position to the end of string associated to the current section
    positionInInput += sectionLengthInInput;
  }
  return newSections;
};
const useFieldV6TextField = parameters => {
  const isRtl = useRtl();
  const focusTimeout = useTimeout();
  const selectionSyncTimeout = useTimeout();
  const {
    props,
    manager,
    skipContextFieldRefAssignment,
    manager: {
      valueType,
      internal_valueManager: valueManager,
      internal_fieldValueManager: fieldValueManager,
      internal_useOpenPickerButtonAriaLabel: useOpenPickerButtonAriaLabel
    }
  } = parameters;
  const {
    internalProps,
    forwardedProps
  } = useSplitFieldProps(props, valueType);
  const internalPropsWithDefaults = useFieldInternalPropsWithDefaults({
    manager,
    internalProps,
    skipContextFieldRefAssignment
  });
  const {
    onFocus,
    onClick,
    onPaste,
    onBlur,
    onKeyDown,
    onClear,
    clearable,
    inputRef: inputRefProp,
    placeholder: inPlaceholder
  } = forwardedProps;
  const {
    readOnly = false,
    disabled = false,
    autoFocus = false,
    focused,
    unstableFieldRef
  } = internalPropsWithDefaults;
  const inputRef = React__namespace.useRef(null);
  const handleRef = useForkRef(inputRefProp, inputRef);
  const stateResponse = useFieldState({
    manager,
    internalPropsWithDefaults,
    forwardedProps
  });
  const {
    // States and derived states
    activeSectionIndex,
    areAllSectionsEmpty,
    error,
    localizedDigits,
    parsedSelectedSections,
    sectionOrder,
    state,
    value,
    // Methods to update the states
    clearValue,
    clearActiveSection,
    setCharacterQuery,
    setSelectedSections,
    setTempAndroidValueStr,
    updateSectionValue,
    updateValueFromValueStr,
    // Utilities methods
    getSectionsFromValue
  } = stateResponse;
  const applyCharacterEditing = useFieldCharacterEditing({
    stateResponse
  });
  const openPickerAriaLabel = useOpenPickerButtonAriaLabel(value);
  const sections = React__namespace.useMemo(() => addPositionPropertiesToSections(state.sections, localizedDigits, isRtl), [state.sections, localizedDigits, isRtl]);
  function syncSelectionFromDOM() {
    const browserStartIndex = inputRef.current.selectionStart ?? 0;
    let nextSectionIndex;
    if (browserStartIndex <= sections[0].startInInput) {
      // Special case if browser index is in invisible characters at the beginning
      nextSectionIndex = 1;
    } else if (browserStartIndex >= sections[sections.length - 1].endInInput) {
      // If the click is after the last character of the input, then we want to select the 1st section.
      nextSectionIndex = 1;
    } else {
      nextSectionIndex = sections.findIndex(section => section.startInInput - section.startSeparator.length > browserStartIndex);
    }
    const sectionIndex = nextSectionIndex === -1 ? sections.length - 1 : nextSectionIndex - 1;
    setSelectedSections(sectionIndex);
  }
  function focusField(newSelectedSection = 0) {
    if (getActiveElement(inputRef.current) === inputRef.current) {
      return;
    }
    inputRef.current?.focus();
    setSelectedSections(newSelectedSection);
  }
  const handleInputFocus = useEventCallback(event => {
    onFocus?.(event);
    // The ref is guaranteed to be resolved at this point.
    const input = inputRef.current;
    focusTimeout.start(0, () => {
      // The ref changed, the component got remounted, the focus event is no longer relevant.
      if (!input || input !== inputRef.current) {
        return;
      }
      if (activeSectionIndex != null) {
        return;
      }
      if (
      // avoid selecting all sections when focusing empty field without value
      input.value.length && Number(input.selectionEnd) - Number(input.selectionStart) === input.value.length) {
        setSelectedSections('all');
      } else {
        syncSelectionFromDOM();
      }
    });
  });
  const handleInputClick = useEventCallback((event, ...args) => {
    // The click event on the clear button would propagate to the input, trigger this handler and result in a wrong section selection.
    // We avoid this by checking if the call of `handleInputClick` is actually intended, or a side effect.
    if (event.isDefaultPrevented()) {
      return;
    }
    onClick?.(event, ...args);
    syncSelectionFromDOM();
  });
  const handleInputPaste = useEventCallback(event => {
    onPaste?.(event);

    // prevent default to avoid the input `onChange` handler being called
    event.preventDefault();
    if (readOnly || disabled) {
      return;
    }
    const pastedValue = event.clipboardData.getData('text');
    if (typeof parsedSelectedSections === 'number') {
      const activeSection = state.sections[parsedSelectedSections];
      const lettersOnly = /^[a-zA-Z]+$/.test(pastedValue);
      const digitsOnly = /^[0-9]+$/.test(pastedValue);
      const digitsAndLetterOnly = /^(([a-zA-Z]+)|)([0-9]+)(([a-zA-Z]+)|)$/.test(pastedValue);
      const isValidPastedValue = activeSection.contentType === 'letter' && lettersOnly || activeSection.contentType === 'digit' && digitsOnly || activeSection.contentType === 'digit-with-letter' && digitsAndLetterOnly;
      if (isValidPastedValue) {
        setCharacterQuery(null);
        updateSectionValue({
          section: activeSection,
          newSectionValue: pastedValue,
          shouldGoToNextSection: true
        });
        return;
      }
      if (lettersOnly || digitsOnly) {
        // The pasted value corresponds to a single section, but not the expected type,
        // skip the modification
        return;
      }
    }
    setCharacterQuery(null);
    updateValueFromValueStr(pastedValue);
  });
  const handleContainerBlur = useEventCallback(event => {
    onBlur?.(event);
    setSelectedSections(null);
  });
  const handleInputChange = useEventCallback(event => {
    if (readOnly) {
      return;
    }
    const targetValue = event.target.value;
    if (targetValue === '') {
      clearValue();
      return;
    }
    const eventData = event.nativeEvent.data;
    // Calling `.fill(04/11/2022)` in playwright will trigger a change event with the requested content to insert in `event.nativeEvent.data`
    // usual changes have only the currently typed character in the `event.nativeEvent.data`
    const shouldUseEventData = eventData && eventData.length > 1;
    const valueStr = shouldUseEventData ? eventData : targetValue;
    const cleanValueStr = cleanString(valueStr);
    if (parsedSelectedSections === 'all') {
      setSelectedSections(activeSectionIndex);
    }

    // If no section is selected or eventData should be used, we just try to parse the new value
    // This line is mostly triggered by imperative code / application tests.
    if (activeSectionIndex == null || shouldUseEventData) {
      updateValueFromValueStr(shouldUseEventData ? eventData : cleanValueStr);
      return;
    }
    let keyPressed;
    if (parsedSelectedSections === 'all' && cleanValueStr.length === 1) {
      keyPressed = cleanValueStr;
    } else {
      const prevValueStr = cleanString(fieldValueManager.getV6InputValueFromSections(sections, localizedDigits, isRtl));
      let startOfDiffIndex = -1;
      let endOfDiffIndex = -1;
      for (let i = 0; i < prevValueStr.length; i += 1) {
        if (startOfDiffIndex === -1 && prevValueStr[i] !== cleanValueStr[i]) {
          startOfDiffIndex = i;
        }
        if (endOfDiffIndex === -1 && prevValueStr[prevValueStr.length - i - 1] !== cleanValueStr[cleanValueStr.length - i - 1]) {
          endOfDiffIndex = i;
        }
      }
      const activeSection = sections[activeSectionIndex];
      const hasDiffOutsideOfActiveSection = startOfDiffIndex < activeSection.start || prevValueStr.length - endOfDiffIndex - 1 > activeSection.end;
      if (hasDiffOutsideOfActiveSection) {
        // TODO: Support if the new date is valid
        return;
      }

      // The active section being selected, the browser has replaced its value with the key pressed by the user.
      const activeSectionEndRelativeToNewValue = cleanValueStr.length - prevValueStr.length + activeSection.end - cleanString(activeSection.endSeparator || '').length;
      keyPressed = cleanValueStr.slice(activeSection.start + cleanString(activeSection.startSeparator || '').length, activeSectionEndRelativeToNewValue);
    }
    if (keyPressed.length === 0) {
      if (isAndroid()) {
        setTempAndroidValueStr(valueStr);
      }
      clearActiveSection();
      return;
    }
    applyCharacterEditing({
      keyPressed,
      sectionIndex: activeSectionIndex
    });
  });
  const handleClear = useEventCallback((event, ...args) => {
    event.preventDefault();
    onClear?.(event, ...args);
    clearValue();
    if (!isFieldFocused(inputRef)) {
      // setSelectedSections is called internally
      focusField(0);
    } else {
      setSelectedSections(sectionOrder.startIndex);
    }
  });
  const handleContainerKeyDown = useFieldRootHandleKeyDown({
    manager,
    internalPropsWithDefaults,
    stateResponse
  });
  const wrappedHandleContainerKeyDown = useEventCallback(event => {
    onKeyDown?.(event);
    handleContainerKeyDown(event);
  });
  const placeholder = React__namespace.useMemo(() => {
    if (inPlaceholder !== undefined) {
      return inPlaceholder;
    }
    return fieldValueManager.getV6InputValueFromSections(getSectionsFromValue(valueManager.emptyValue), localizedDigits, isRtl);
  }, [inPlaceholder, fieldValueManager, getSectionsFromValue, valueManager.emptyValue, localizedDigits, isRtl]);
  const valueStr = React__namespace.useMemo(() => state.tempValueStrAndroid ?? fieldValueManager.getV6InputValueFromSections(state.sections, localizedDigits, isRtl), [state.sections, fieldValueManager, state.tempValueStrAndroid, localizedDigits, isRtl]);
  React__namespace.useEffect(() => {
    // Select all the sections when focused on mount (`autoFocus = true` on the input)
    if (inputRef.current && inputRef.current === getActiveElement(inputRef.current)) {
      setSelectedSections('all');
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEnhancedEffect$1(() => {
    function syncSelectionToDOM() {
      if (!inputRef.current) {
        return;
      }
      if (parsedSelectedSections == null) {
        if (inputRef.current.scrollLeft) {
          // Ensure that input content is not marked as selected.
          // setting selection range to 0 causes issues in Safari.
          // https://bugs.webkit.org/show_bug.cgi?id=224425
          inputRef.current.scrollLeft = 0;
        }
        return;
      }

      // On multi input range pickers we want to update selection range only for the active input
      // This helps to avoid the focus jumping on Safari https://github.com/mui/mui-x/issues/9003
      // because WebKit implements the `setSelectionRange` based on the spec: https://bugs.webkit.org/show_bug.cgi?id=224425
      if (inputRef.current !== getActiveElement(inputRef.current)) {
        return;
      }

      // Fix scroll jumping on iOS browser: https://github.com/mui/mui-x/issues/8321
      const currentScrollTop = inputRef.current.scrollTop;
      if (parsedSelectedSections === 'all') {
        inputRef.current.select();
      } else {
        const selectedSection = sections[parsedSelectedSections];
        const selectionStart = selectedSection.type === 'empty' ? selectedSection.startInInput - selectedSection.startSeparator.length : selectedSection.startInInput;
        const selectionEnd = selectedSection.type === 'empty' ? selectedSection.endInInput + selectedSection.endSeparator.length : selectedSection.endInInput;
        if (selectionStart !== inputRef.current.selectionStart || selectionEnd !== inputRef.current.selectionEnd) {
          if (inputRef.current === getActiveElement(inputRef.current)) {
            inputRef.current.setSelectionRange(selectionStart, selectionEnd);
          }
        }
        selectionSyncTimeout.start(0, () => {
          // handle case when the selection is not updated correctly
          // could happen on Android
          if (inputRef.current && inputRef.current === getActiveElement(inputRef.current) &&
          // The section might loose all selection, where `selectionStart === selectionEnd`
          // https://github.com/mui/mui-x/pull/13652
          inputRef.current.selectionStart === inputRef.current.selectionEnd && (inputRef.current.selectionStart !== selectionStart || inputRef.current.selectionEnd !== selectionEnd)) {
            syncSelectionToDOM();
          }
        });
      }

      // Even reading this variable seems to do the trick, but also setting it just to make use of it
      inputRef.current.scrollTop = currentScrollTop;
    }
    syncSelectionToDOM();
  });
  const inputMode = React__namespace.useMemo(() => {
    if (activeSectionIndex == null) {
      return 'text';
    }
    if (state.sections[activeSectionIndex].contentType === 'letter') {
      return 'text';
    }
    return 'numeric';
  }, [activeSectionIndex, state.sections]);
  const inputHasFocus = inputRef.current && inputRef.current === getActiveElement(inputRef.current);
  const shouldShowPlaceholder = !inputHasFocus && areAllSectionsEmpty;
  React__namespace.useImperativeHandle(unstableFieldRef, () => ({
    getSections: () => state.sections,
    getActiveSectionIndex: () => {
      const browserStartIndex = inputRef.current.selectionStart ?? 0;
      const browserEndIndex = inputRef.current.selectionEnd ?? 0;
      if (browserStartIndex === 0 && browserEndIndex === 0) {
        return null;
      }
      const nextSectionIndex = browserStartIndex <= sections[0].startInInput ? 1 // Special case if browser index is in invisible characters at the beginning.
      : sections.findIndex(section => section.startInInput - section.startSeparator.length > browserStartIndex);
      return nextSectionIndex === -1 ? sections.length - 1 : nextSectionIndex - 1;
    },
    setSelectedSections: newSelectedSections => setSelectedSections(newSelectedSections),
    focusField,
    isFieldFocused: () => isFieldFocused(inputRef)
  }));
  return _extends({}, forwardedProps, {
    error,
    clearable: Boolean(clearable && !areAllSectionsEmpty && !readOnly && !disabled),
    onBlur: handleContainerBlur,
    onClick: handleInputClick,
    onFocus: handleInputFocus,
    onPaste: handleInputPaste,
    onKeyDown: wrappedHandleContainerKeyDown,
    onClear: handleClear,
    inputRef: handleRef,
    // Additional
    enableAccessibleFieldDOMStructure: false,
    placeholder,
    inputMode,
    autoComplete: 'off',
    value: shouldShowPlaceholder ? '' : valueStr,
    onChange: handleInputChange,
    focused,
    disabled,
    readOnly,
    autoFocus,
    openPickerAriaLabel
  });
};
function isFieldFocused(inputRef) {
  return inputRef.current === getActiveElement(inputRef.current);
}

const useField = parameters => {
  const fieldPrivateContext = useNullableFieldPrivateContext();
  const enableAccessibleFieldDOMStructure = parameters.props.enableAccessibleFieldDOMStructure ?? fieldPrivateContext?.enableAccessibleFieldDOMStructure ?? true;
  const useFieldTextField = enableAccessibleFieldDOMStructure ? useFieldV7TextField : useFieldV6TextField;
  return useFieldTextField(parameters);
};

function useDateManager(parameters = {}) {
  const {
    enableAccessibleFieldDOMStructure = true
  } = parameters;
  return React__namespace.useMemo(() => ({
    valueType: 'date',
    validator: validateDate,
    internal_valueManager: singleItemValueManager,
    internal_fieldValueManager: singleItemFieldValueManager,
    internal_enableAccessibleFieldDOMStructure: enableAccessibleFieldDOMStructure,
    internal_useApplyDefaultValuesToFieldInternalProps: useApplyDefaultValuesToDateFieldInternalProps,
    internal_useOpenPickerButtonAriaLabel: useOpenPickerButtonAriaLabel$1
  }), [enableAccessibleFieldDOMStructure]);
}
function useOpenPickerButtonAriaLabel$1(value) {
  const adapter = usePickerAdapter();
  const translations = usePickerTranslations();
  return React__namespace.useMemo(() => {
    const formattedValue = adapter.isValid(value) ? adapter.format(value, 'fullDate') : null;
    return translations.openDatePickerDialogue(formattedValue);
  }, [value, translations, adapter]);
}
function useApplyDefaultValuesToDateFieldInternalProps(internalProps) {
  const adapter = usePickerAdapter();
  const validationProps = useApplyDefaultValuesToDateValidationProps(internalProps);
  return React__namespace.useMemo(() => _extends({}, internalProps, validationProps, {
    format: internalProps.format ?? adapter.formats.keyboardDate
  }), [internalProps, validationProps, adapter]);
}
function useApplyDefaultValuesToDateValidationProps(props) {
  const adapter = usePickerAdapter();
  const defaultDates = useDefaultDates();
  return React__namespace.useMemo(() => ({
    disablePast: props.disablePast ?? false,
    disableFuture: props.disableFuture ?? false,
    minDate: applyDefaultDate(adapter, props.minDate, defaultDates.minDate),
    maxDate: applyDefaultDate(adapter, props.maxDate, defaultDates.maxDate)
  }), [props.minDate, props.maxDate, props.disableFuture, props.disablePast, adapter, defaultDates]);
}

function useTimeManager(parameters = {}) {
  const {
    enableAccessibleFieldDOMStructure = true,
    ampm
  } = parameters;
  return React__namespace.useMemo(() => ({
    valueType: 'time',
    validator: validateTime,
    internal_valueManager: singleItemValueManager,
    internal_fieldValueManager: singleItemFieldValueManager,
    internal_enableAccessibleFieldDOMStructure: enableAccessibleFieldDOMStructure,
    internal_useApplyDefaultValuesToFieldInternalProps: useApplyDefaultValuesToTimeFieldInternalProps,
    internal_useOpenPickerButtonAriaLabel: createUseOpenPickerButtonAriaLabel(ampm)
  }), [ampm, enableAccessibleFieldDOMStructure]);
}
function createUseOpenPickerButtonAriaLabel(ampm) {
  return function useOpenPickerButtonAriaLabel(value) {
    const adapter = usePickerAdapter();
    const translations = usePickerTranslations();
    return React__namespace.useMemo(() => {
      const formatKey = ampm ?? adapter.is12HourCycleInCurrentLocale() ? 'fullTime12h' : 'fullTime24h';
      const formattedValue = adapter.isValid(value) ? adapter.format(value, formatKey) : null;
      return translations.openTimePickerDialogue(formattedValue);
    }, [value, translations, adapter]);
  };
}
function useApplyDefaultValuesToTimeFieldInternalProps(internalProps) {
  const adapter = usePickerAdapter();
  const validationProps = useApplyDefaultValuesToTimeValidationProps(internalProps);
  const ampm = React__namespace.useMemo(() => internalProps.ampm ?? adapter.is12HourCycleInCurrentLocale(), [internalProps.ampm, adapter]);
  return React__namespace.useMemo(() => _extends({}, internalProps, validationProps, {
    format: internalProps.format ?? (ampm ? adapter.formats.fullTime12h : adapter.formats.fullTime24h)
  }), [internalProps, validationProps, ampm, adapter]);
}
function useApplyDefaultValuesToTimeValidationProps(props) {
  return React__namespace.useMemo(() => ({
    disablePast: props.disablePast ?? false,
    disableFuture: props.disableFuture ?? false
  }), [props.disablePast, props.disableFuture]);
}

function useDateTimeManager(parameters = {}) {
  const {
    enableAccessibleFieldDOMStructure = true
  } = parameters;
  return React__namespace.useMemo(() => ({
    valueType: 'date-time',
    validator: validateDateTime,
    internal_valueManager: singleItemValueManager,
    internal_fieldValueManager: singleItemFieldValueManager,
    internal_enableAccessibleFieldDOMStructure: enableAccessibleFieldDOMStructure,
    internal_useApplyDefaultValuesToFieldInternalProps: useApplyDefaultValuesToDateTimeFieldInternalProps,
    internal_useOpenPickerButtonAriaLabel: useOpenPickerButtonAriaLabel
  }), [enableAccessibleFieldDOMStructure]);
}
function useOpenPickerButtonAriaLabel(value) {
  const adapter = usePickerAdapter();
  const translations = usePickerTranslations();
  return React__namespace.useMemo(() => {
    const formattedValue = adapter.isValid(value) ? adapter.format(value, 'fullDate') : null;
    return translations.openDatePickerDialogue(formattedValue);
  }, [value, translations, adapter]);
}
function useApplyDefaultValuesToDateTimeFieldInternalProps(internalProps) {
  const adapter = usePickerAdapter();
  const validationProps = useApplyDefaultValuesToDateTimeValidationProps(internalProps);
  const ampm = React__namespace.useMemo(() => internalProps.ampm ?? adapter.is12HourCycleInCurrentLocale(), [internalProps.ampm, adapter]);
  return React__namespace.useMemo(() => _extends({}, internalProps, validationProps, {
    format: internalProps.format ?? (ampm ? adapter.formats.keyboardDateTime12h : adapter.formats.keyboardDateTime24h)
  }), [internalProps, validationProps, ampm, adapter]);
}
function useApplyDefaultValuesToDateTimeValidationProps(props) {
  const adapter = usePickerAdapter();
  const defaultDates = useDefaultDates();
  return React__namespace.useMemo(() => ({
    disablePast: props.disablePast ?? false,
    disableFuture: props.disableFuture ?? false,
    // TODO: Explore if we can remove it from the public API
    disableIgnoringDatePartForTimeValidation: !!props.minDateTime || !!props.maxDateTime || !!props.disableFuture || !!props.disablePast,
    minDate: applyDefaultDate(adapter, props.minDateTime ?? props.minDate, defaultDates.minDate),
    maxDate: applyDefaultDate(adapter, props.maxDateTime ?? props.maxDate, defaultDates.maxDate),
    minTime: props.minDateTime ?? props.minTime,
    maxTime: props.maxDateTime ?? props.maxTime
  }), [props.minDateTime, props.maxDateTime, props.minTime, props.maxTime, props.minDate, props.maxDate, props.disableFuture, props.disablePast, adapter, defaultDates]);
}

const useDateField = props => {
  const manager = useDateManager(props);
  return useField({
    manager,
    props
  });
};

function useFieldOwnerState(parameters) {
  const {
    ownerState: pickerOwnerState
  } = usePickerPrivateContext();
  const isRtl = useRtl();
  return React__namespace.useMemo(() => _extends({}, pickerOwnerState, {
    isFieldDisabled: parameters.disabled ?? false,
    isFieldReadOnly: parameters.readOnly ?? false,
    isFieldRequired: parameters.required ?? false,
    fieldDirection: isRtl ? 'rtl' : 'ltr'
  }), [pickerOwnerState, parameters.disabled, parameters.readOnly, parameters.required, isRtl]);
}

function getPickersTextFieldUtilityClass(slot) {
  return generateUtilityClass('MuiPickersTextField', slot);
}
generateUtilityClasses('MuiPickersTextField', ['root', 'focused', 'disabled', 'error', 'required']);

/**
 * WARNING: Don't import this directly. It's imported by the code generated by
 * `@mui/interal-babel-plugin-minify-errors`. Make sure to always use string literals in `Error`
 * constructors to ensure the plugin works as expected. Supported patterns include:
 *   throw new Error('My message');
 *   throw new Error(`My message: ${foo}`);
 *   throw new Error(`My message: ${foo}` + 'another string');
 *   ...
 * @param {number} code
 */
function formatMuiErrorMessage(code, ...args) {
  const url = new URL(`https://mui.com/production-error/?code=${code}`);
  args.forEach(arg => url.searchParams.append('args[]', arg));
  return `Minified MUI error #${code}; visit ${url} for the full message.`;
}

// It should to be noted that this function isn't equivalent to `text-transform: capitalize`.
//
// A strict capitalization should uppercase the first letter of each word in the sentence.
// We only handle the first word.
function capitalize(string) {
  if (typeof string !== 'string') {
    throw new Error(process.env.NODE_ENV !== "production" ? 'MUI: `capitalize(string)` expects a string argument.' : formatMuiErrorMessage(7));
  }
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const visuallyHidden = {
  border: 0,
  clip: 'rect(0 0 0 0)',
  height: '1px',
  margin: '-1px',
  overflow: 'hidden',
  padding: 0,
  position: 'absolute',
  whiteSpace: 'nowrap',
  width: '1px'
};
var visuallyHidden$1 = visuallyHidden;

function getPickersInputBaseUtilityClass(slot) {
  return generateUtilityClass('MuiPickersInputBase', slot);
}
const pickersInputBaseClasses = generateUtilityClasses('MuiPickersInputBase', ['root', 'focused', 'disabled', 'error', 'notchedOutline', 'sectionContent', 'sectionBefore', 'sectionAfter', 'adornedStart', 'adornedEnd', 'input', 'inputSizeSmall', 'activeBar']);

function getPickersSectionListUtilityClass(slot) {
  return generateUtilityClass('MuiPickersSectionList', slot);
}
const pickersSectionListClasses = generateUtilityClasses('MuiPickersSectionList', ['root', 'section', 'sectionContent']);

const _excluded$B = ["slots", "slotProps", "elements", "sectionListRef", "classes"];
const PickersSectionListRoot = styles.styled('div', {
  name: 'MuiPickersSectionList',
  slot: 'Root'
})({
  direction: 'ltr /*! @noflip */',
  outline: 'none'
});
const PickersSectionListSection = styles.styled('span', {
  name: 'MuiPickersSectionList',
  slot: 'Section'
})({});
const PickersSectionListSectionSeparator = styles.styled('span', {
  name: 'MuiPickersSectionList',
  slot: 'SectionSeparator'
})({
  whiteSpace: 'pre'
});
const PickersSectionListSectionContent = styles.styled('span', {
  name: 'MuiPickersSectionList',
  slot: 'SectionContent'
})({
  outline: 'none'
});
const useUtilityClasses$o = classes => {
  const slots = {
    root: ['root'],
    section: ['section'],
    sectionContent: ['sectionContent']
  };
  return composeClasses(slots, getPickersSectionListUtilityClass, classes);
};
function PickersSection(props) {
  const {
    slots,
    slotProps,
    element,
    classes
  } = props;
  const {
    ownerState
  } = usePickerPrivateContext();
  const Section = slots?.section ?? PickersSectionListSection;
  const sectionProps = useSlotProps({
    elementType: Section,
    externalSlotProps: slotProps?.section,
    externalForwardedProps: element.container,
    className: classes.section,
    ownerState
  });
  const SectionContent = slots?.sectionContent ?? PickersSectionListSectionContent;
  const sectionContentProps = useSlotProps({
    elementType: SectionContent,
    externalSlotProps: slotProps?.sectionContent,
    externalForwardedProps: element.content,
    additionalProps: {
      suppressContentEditableWarning: true
    },
    className: classes.sectionContent,
    ownerState
  });
  const SectionSeparator = slots?.sectionSeparator ?? PickersSectionListSectionSeparator;
  const sectionSeparatorBeforeProps = useSlotProps({
    elementType: SectionSeparator,
    externalSlotProps: slotProps?.sectionSeparator,
    externalForwardedProps: element.before,
    ownerState: _extends({}, ownerState, {
      separatorPosition: 'before'
    })
  });
  const sectionSeparatorAfterProps = useSlotProps({
    elementType: SectionSeparator,
    externalSlotProps: slotProps?.sectionSeparator,
    externalForwardedProps: element.after,
    ownerState: _extends({}, ownerState, {
      separatorPosition: 'after'
    })
  });
  return /*#__PURE__*/jsxRuntime.jsxs(Section, _extends({}, sectionProps, {
    children: [/*#__PURE__*/jsxRuntime.jsx(SectionSeparator, _extends({}, sectionSeparatorBeforeProps)), /*#__PURE__*/jsxRuntime.jsx(SectionContent, _extends({}, sectionContentProps)), /*#__PURE__*/jsxRuntime.jsx(SectionSeparator, _extends({}, sectionSeparatorAfterProps))]
  }));
}
process.env.NODE_ENV !== "production" ? PickersSection.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  classes: PropTypes.object.isRequired,
  element: PropTypes.shape({
    after: PropTypes.object.isRequired,
    before: PropTypes.object.isRequired,
    container: PropTypes.object.isRequired,
    content: PropTypes.object.isRequired
  }).isRequired,
  /**
   * The props used for each component slot.
   */
  slotProps: PropTypes.object,
  /**
   * Overridable component slots.
   */
  slots: PropTypes.object
} : void 0;
/**
 * Demos:
 *
 * - [Custom field](https://mui.com/x/react-date-pickers/custom-field/)
 *
 * API:
 *
 * - [PickersSectionList API](https://mui.com/x/api/date-pickers/pickers-section-list/)
 */
const PickersSectionList = /*#__PURE__*/React__namespace.forwardRef(function PickersSectionList(inProps, ref) {
  const props = styles.useThemeProps({
    props: inProps,
    name: 'MuiPickersSectionList'
  });
  const {
      slots,
      slotProps,
      elements,
      sectionListRef,
      classes: classesProp
    } = props,
    other = _objectWithoutPropertiesLoose(props, _excluded$B);
  const classes = useUtilityClasses$o(classesProp);
  const {
    ownerState
  } = usePickerPrivateContext();
  const rootRef = React__namespace.useRef(null);
  const handleRootRef = useForkRef(ref, rootRef);
  const getRoot = methodName => {
    if (!rootRef.current) {
      throw new Error(`MUI X: Cannot call sectionListRef.${methodName} before the mount of the component.`);
    }
    return rootRef.current;
  };
  React__namespace.useImperativeHandle(sectionListRef, () => ({
    getRoot() {
      return getRoot('getRoot');
    },
    getSectionContainer(index) {
      const root = getRoot('getSectionContainer');
      return root.querySelector(`.${pickersSectionListClasses.section}[data-sectionindex="${index}"]`);
    },
    getSectionContent(index) {
      const root = getRoot('getSectionContent');
      return root.querySelector(`.${pickersSectionListClasses.section}[data-sectionindex="${index}"] .${pickersSectionListClasses.sectionContent}`);
    },
    getSectionIndexFromDOMElement(element) {
      const root = getRoot('getSectionIndexFromDOMElement');
      if (element == null || !root.contains(element)) {
        return null;
      }
      let sectionContainer = null;
      if (element.classList.contains(pickersSectionListClasses.section)) {
        sectionContainer = element;
      } else if (element.classList.contains(pickersSectionListClasses.sectionContent)) {
        sectionContainer = element.parentElement;
      }
      if (sectionContainer == null) {
        return null;
      }
      return Number(sectionContainer.dataset.sectionindex);
    }
  }));
  const Root = slots?.root ?? PickersSectionListRoot;
  const rootProps = useSlotProps({
    elementType: Root,
    externalSlotProps: slotProps?.root,
    externalForwardedProps: other,
    additionalProps: {
      ref: handleRootRef,
      suppressContentEditableWarning: true
    },
    className: classes.root,
    ownerState
  });
  return /*#__PURE__*/jsxRuntime.jsx(Root, _extends({}, rootProps, {
    children: rootProps.contentEditable ? elements.map(({
      content,
      before,
      after
    }) => `${before.children}${content.children}${after.children}`).join('') : /*#__PURE__*/jsxRuntime.jsx(React__namespace.Fragment, {
      children: elements.map((element, elementIndex) => /*#__PURE__*/jsxRuntime.jsx(PickersSection, {
        slots: slots,
        slotProps: slotProps,
        element: element,
        classes: classes
      }, elementIndex))
    })
  }));
});
if (process.env.NODE_ENV !== "production") PickersSectionList.displayName = "PickersSectionList";
process.env.NODE_ENV !== "production" ? PickersSectionList.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,
  /**
   * If true, the whole element is editable.
   * Useful when all the sections are selected.
   */
  contentEditable: PropTypes.bool.isRequired,
  /**
   * The elements to render.
   * Each element contains the prop to edit a section of the value.
   */
  elements: PropTypes.arrayOf(PropTypes.shape({
    after: PropTypes.object.isRequired,
    before: PropTypes.object.isRequired,
    container: PropTypes.object.isRequired,
    content: PropTypes.object.isRequired
  })).isRequired,
  sectionListRef: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({
    current: PropTypes.shape({
      getRoot: PropTypes.func.isRequired,
      getSectionContainer: PropTypes.func.isRequired,
      getSectionContent: PropTypes.func.isRequired,
      getSectionIndexFromDOMElement: PropTypes.func.isRequired
    })
  })]),
  /**
   * The props used for each component slot.
   */
  slotProps: PropTypes.object,
  /**
   * Overridable component slots.
   */
  slots: PropTypes.object
} : void 0;

const PickerTextFieldOwnerStateContext = /*#__PURE__*/React__namespace.createContext(null);
if (process.env.NODE_ENV !== "production") PickerTextFieldOwnerStateContext.displayName = "PickerTextFieldOwnerStateContext";
const usePickerTextFieldOwnerState = () => {
  const value = React__namespace.useContext(PickerTextFieldOwnerStateContext);
  if (value == null) {
    throw new Error(['MUI X: The `usePickerTextFieldOwnerState` can only be called in components that are used inside a PickerTextField component'].join('\n'));
  }
  return value;
};

const _excluded$A = ["elements", "areAllSectionsEmpty", "defaultValue", "label", "value", "onChange", "id", "autoFocus", "endAdornment", "startAdornment", "renderSuffix", "slots", "slotProps", "contentEditable", "tabIndex", "onInput", "onPaste", "onKeyDown", "fullWidth", "name", "readOnly", "inputProps", "inputRef", "sectionListRef", "onFocus", "onBlur", "classes", "ownerState"];
const round = value => Math.round(value * 1e5) / 1e5;
const PickersInputBaseRoot = styles.styled('div', {
  name: 'MuiPickersInputBase',
  slot: 'Root'
})(({
  theme
}) => _extends({}, theme.typography.body1, {
  color: (theme.vars || theme).palette.text.primary,
  cursor: 'text',
  padding: 0,
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  position: 'relative',
  boxSizing: 'border-box',
  // Prevent padding issue with fullWidth.
  letterSpacing: `${round(0.15 / 16)}em`,
  variants: [{
    props: {
      isInputInFullWidth: true
    },
    style: {
      width: '100%'
    }
  }]
}));
const PickersInputBaseSectionsContainer = styles.styled(PickersSectionListRoot, {
  name: 'MuiPickersInputBase',
  slot: 'SectionsContainer'
})(({
  theme
}) => ({
  padding: '4px 0 5px',
  fontFamily: theme.typography.fontFamily,
  fontSize: 'inherit',
  lineHeight: '1.4375em',
  // 23px
  flexGrow: 1,
  outline: 'none',
  display: 'flex',
  flexWrap: 'nowrap',
  overflow: 'hidden',
  letterSpacing: 'inherit',
  // Baseline behavior
  width: '182px',
  variants: [{
    props: {
      fieldDirection: 'rtl'
    },
    style: {
      textAlign: 'right /*! @noflip */'
    }
  }, {
    props: {
      inputSize: 'small'
    },
    style: {
      paddingTop: 1
    }
  }, {
    props: {
      hasStartAdornment: false,
      isFieldFocused: false,
      isFieldValueEmpty: true
    },
    style: {
      color: 'currentColor',
      opacity: 0
    }
  }, {
    props: {
      hasStartAdornment: false,
      isFieldFocused: false,
      isFieldValueEmpty: true,
      inputHasLabel: false
    },
    style: theme.vars ? {
      opacity: theme.vars.opacity.inputPlaceholder
    } : {
      opacity: theme.palette.mode === 'light' ? 0.42 : 0.5
    }
  }]
}));
const PickersInputBaseSection = styles.styled(PickersSectionListSection, {
  name: 'MuiPickersInputBase',
  slot: 'Section'
})(({
  theme
}) => ({
  fontFamily: theme.typography.fontFamily,
  fontSize: 'inherit',
  letterSpacing: 'inherit',
  lineHeight: '1.4375em',
  // 23px
  display: 'inline-block',
  whiteSpace: 'nowrap'
}));
const PickersInputBaseSectionContent = styles.styled(PickersSectionListSectionContent, {
  name: 'MuiPickersInputBase',
  slot: 'SectionContent',
  overridesResolver: (props, styles) => styles.content // FIXME: Inconsistent naming with slot
})(({
  theme
}) => ({
  fontFamily: theme.typography.fontFamily,
  lineHeight: '1.4375em',
  // 23px
  letterSpacing: 'inherit',
  width: 'fit-content',
  outline: 'none'
}));
const PickersInputBaseSectionSeparator = styles.styled(PickersSectionListSectionSeparator, {
  name: 'MuiPickersInputBase',
  slot: 'Separator'
})(() => ({
  whiteSpace: 'pre',
  letterSpacing: 'inherit'
}));
const PickersInputBaseInput = styles.styled('input', {
  name: 'MuiPickersInputBase',
  slot: 'Input',
  overridesResolver: (props, styles) => styles.hiddenInput // FIXME: Inconsistent naming with slot
})(_extends({}, visuallyHidden$1));
const PickersInputBaseActiveBar = styles.styled('div', {
  name: 'MuiPickersInputBase',
  slot: 'ActiveBar'
})(({
  theme,
  ownerState
}) => ({
  display: 'none',
  position: 'absolute',
  height: 2,
  bottom: 2,
  borderTopLeftRadius: 2,
  borderTopRightRadius: 2,
  transition: theme.transitions.create(['width', 'left'], {
    duration: theme.transitions.duration.shortest
  }),
  backgroundColor: (theme.vars || theme).palette.primary.main,
  '[data-active-range-position="start"] &, [data-active-range-position="end"] &': {
    display: 'block'
  },
  '[data-active-range-position="start"] &': {
    left: ownerState.sectionOffsets[0]
  },
  '[data-active-range-position="end"] &': {
    left: ownerState.sectionOffsets[1]
  }
}));
const useUtilityClasses$n = (classes, ownerState) => {
  const {
    isFieldFocused,
    isFieldDisabled,
    isFieldReadOnly,
    hasFieldError,
    inputSize,
    isInputInFullWidth,
    inputColor,
    hasStartAdornment,
    hasEndAdornment
  } = ownerState;
  const slots = {
    root: ['root', isFieldFocused && !isFieldDisabled && 'focused', isFieldDisabled && 'disabled', isFieldReadOnly && 'readOnly', hasFieldError && 'error', isInputInFullWidth && 'fullWidth', `color${capitalize(inputColor)}`, inputSize === 'small' && 'inputSizeSmall', hasStartAdornment && 'adornedStart', hasEndAdornment && 'adornedEnd'],
    notchedOutline: ['notchedOutline'],
    input: ['input'],
    sectionsContainer: ['sectionsContainer'],
    sectionContent: ['sectionContent'],
    sectionBefore: ['sectionBefore'],
    sectionAfter: ['sectionAfter'],
    activeBar: ['activeBar']
  };
  return composeClasses(slots, getPickersInputBaseUtilityClass, classes);
};
function resolveSectionElementWidth(sectionElement, rootRef, index, dateRangePosition) {
  if (sectionElement.content.id) {
    const activeSectionElements = rootRef.current?.querySelectorAll(`[data-sectionindex="${index}"] [data-range-position="${dateRangePosition}"]`);
    if (activeSectionElements) {
      return Array.from(activeSectionElements).reduce((currentActiveBarWidth, element) => {
        return currentActiveBarWidth + element.offsetWidth;
      }, 0);
    }
  }
  return 0;
}
function resolveSectionWidthAndOffsets(elements, rootRef) {
  let activeBarWidth = 0;
  const activeRangePosition = rootRef.current?.getAttribute('data-active-range-position');
  if (activeRangePosition === 'end') {
    for (let i = elements.length - 1; i >= elements.length / 2; i -= 1) {
      activeBarWidth += resolveSectionElementWidth(elements[i], rootRef, i, 'end');
    }
  } else {
    for (let i = 0; i < elements.length / 2; i += 1) {
      activeBarWidth += resolveSectionElementWidth(elements[i], rootRef, i, 'start');
    }
  }
  return {
    activeBarWidth,
    sectionOffsets: [rootRef.current?.querySelector(`[data-sectionindex="0"]`)?.offsetLeft || 0, rootRef.current?.querySelector(`[data-sectionindex="${elements.length / 2}"]`)?.offsetLeft || 0]
  };
}

/**
 * @ignore - internal component.
 */
const PickersInputBase = /*#__PURE__*/React__namespace.forwardRef(function PickersInputBase(inProps, ref) {
  const props = styles.useThemeProps({
    props: inProps,
    name: 'MuiPickersInputBase'
  });
  const {
      elements,
      areAllSectionsEmpty,
      value,
      onChange,
      id,
      endAdornment,
      startAdornment,
      renderSuffix,
      slots,
      slotProps,
      contentEditable,
      tabIndex,
      onInput,
      onPaste,
      onKeyDown,
      name,
      readOnly,
      inputProps,
      inputRef,
      sectionListRef,
      onFocus,
      onBlur,
      classes: classesProp,
      ownerState: ownerStateProp
    } = props,
    other = _objectWithoutPropertiesLoose(props, _excluded$A);
  const ownerStateContext = usePickerTextFieldOwnerState();
  const rootRef = React__namespace.useRef(null);
  const activeBarRef = React__namespace.useRef(null);
  const sectionOffsetsRef = React__namespace.useRef([]);
  const handleRootRef = useForkRef(ref, rootRef);
  const handleInputRef = useForkRef(inputProps?.ref, inputRef);
  const muiFormControl = FormControl.useFormControl();
  if (!muiFormControl) {
    throw new Error('MUI X: PickersInputBase should always be used inside a PickersTextField component');
  }
  const ownerState = ownerStateProp ?? ownerStateContext;
  const handleInputFocus = event => {
    muiFormControl.onFocus?.(event);
    onFocus?.(event);
  };
  const handleHiddenInputFocus = event => {
    handleInputFocus(event);
  };
  const handleKeyDown = event => {
    onKeyDown?.(event);
    if (event.key === 'Enter' && !event.defaultMuiPrevented) {
      // Do nothing if it's a multi input field
      if (rootRef.current?.dataset.multiInput) {
        return;
      }
      const closestForm = rootRef.current?.closest('form');
      const submitTrigger = closestForm?.querySelector('[type="submit"]');
      if (!closestForm || !submitTrigger) {
        // do nothing if there is no form or no submit button (trigger)
        return;
      }
      event.preventDefault();
      // native input trigger submit with the `submitter` field set
      closestForm.requestSubmit(submitTrigger);
    }
  };
  const handleInputBlur = event => {
    muiFormControl.onBlur?.(event);
    onBlur?.(event);
  };
  React__namespace.useEffect(() => {
    if (muiFormControl) {
      muiFormControl.setAdornedStart(Boolean(startAdornment));
    }
  }, [muiFormControl, startAdornment]);
  React__namespace.useEffect(() => {
    if (!muiFormControl) {
      return;
    }
    if (areAllSectionsEmpty) {
      muiFormControl.onEmpty();
    } else {
      muiFormControl.onFilled();
    }
  }, [muiFormControl, areAllSectionsEmpty]);
  const classes = useUtilityClasses$n(classesProp, ownerState);
  const InputRoot = slots?.root || PickersInputBaseRoot;
  const inputRootProps = useSlotProps({
    elementType: InputRoot,
    externalSlotProps: slotProps?.root,
    externalForwardedProps: other,
    additionalProps: {
      'aria-invalid': muiFormControl.error,
      ref: handleRootRef
    },
    className: classes.root,
    ownerState
  });
  const InputSectionsContainer = slots?.input || PickersInputBaseSectionsContainer;
  const isSingleInputRange = elements.some(element => element.content['data-range-position'] !== undefined);
  React__namespace.useEffect(() => {
    if (!isSingleInputRange || !ownerState.isPickerOpen) {
      return;
    }
    const {
      activeBarWidth,
      sectionOffsets
    } = resolveSectionWidthAndOffsets(elements, rootRef);
    sectionOffsetsRef.current = [sectionOffsets[0], sectionOffsets[1]];
    if (activeBarRef.current) {
      activeBarRef.current.style.width = `${activeBarWidth}px`;
    }
  }, [elements, isSingleInputRange, ownerState.isPickerOpen]);
  return /*#__PURE__*/jsxRuntime.jsxs(InputRoot, _extends({}, inputRootProps, {
    children: [startAdornment, /*#__PURE__*/jsxRuntime.jsx(PickersSectionList, {
      sectionListRef: sectionListRef,
      elements: elements,
      contentEditable: contentEditable,
      tabIndex: tabIndex,
      className: classes.sectionsContainer,
      onFocus: handleInputFocus,
      onBlur: handleInputBlur,
      onInput: onInput,
      onPaste: onPaste,
      onKeyDown: handleKeyDown,
      slots: {
        root: InputSectionsContainer,
        section: PickersInputBaseSection,
        sectionContent: PickersInputBaseSectionContent,
        sectionSeparator: PickersInputBaseSectionSeparator
      },
      slotProps: {
        root: _extends({}, slotProps?.input, {
          ownerState
        }),
        sectionContent: {
          className: pickersInputBaseClasses.sectionContent
        },
        sectionSeparator: ({
          separatorPosition
        }) => ({
          className: separatorPosition === 'before' ? pickersInputBaseClasses.sectionBefore : pickersInputBaseClasses.sectionAfter
        })
      }
    }), endAdornment, renderSuffix ? renderSuffix(_extends({}, muiFormControl)) : null, /*#__PURE__*/jsxRuntime.jsx(PickersInputBaseInput, _extends({
      name: name,
      className: classes.input,
      value: value,
      onChange: onChange,
      id: id,
      "aria-hidden": "true",
      tabIndex: -1,
      readOnly: readOnly,
      required: muiFormControl.required,
      disabled: muiFormControl.disabled
      // Hidden input element cannot be focused, trigger the root focus instead
      // This allows to maintain the ability to do `inputRef.current.focus()` to focus the field
      ,
      onFocus: handleHiddenInputFocus
    }, inputProps, {
      ref: handleInputRef
    })), isSingleInputRange && /*#__PURE__*/jsxRuntime.jsx(PickersInputBaseActiveBar, {
      className: classes.activeBar,
      ref: activeBarRef,
      ownerState: {
        sectionOffsets: sectionOffsetsRef.current
      }
    })]
  }));
});
if (process.env.NODE_ENV !== "production") PickersInputBase.displayName = "PickersInputBase";
process.env.NODE_ENV !== "production" ? PickersInputBase.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * Is `true` if the current values equals the empty value.
   * For a single item value, it means that `value === null`
   * For a range value, it means that `value === [null, null]`
   */
  areAllSectionsEmpty: PropTypes.bool.isRequired,
  className: PropTypes.string,
  component: PropTypes.elementType,
  /**
   * If true, the whole element is editable.
   * Useful when all the sections are selected.
   */
  contentEditable: PropTypes.bool.isRequired,
  'data-multi-input': PropTypes.string,
  /**
   * The elements to render.
   * Each element contains the prop to edit a section of the value.
   */
  elements: PropTypes.arrayOf(PropTypes.shape({
    after: PropTypes.object.isRequired,
    before: PropTypes.object.isRequired,
    container: PropTypes.object.isRequired,
    content: PropTypes.object.isRequired
  })).isRequired,
  endAdornment: PropTypes.node,
  fullWidth: PropTypes.bool,
  id: PropTypes.string,
  inputProps: PropTypes.object,
  inputRef: refType$1,
  label: PropTypes.node,
  margin: PropTypes.oneOf(['dense', 'none', 'normal']),
  name: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
  onInput: PropTypes.func.isRequired,
  onKeyDown: PropTypes.func.isRequired,
  onPaste: PropTypes.func.isRequired,
  ownerState: PropTypes /* @typescript-to-proptypes-ignore */.any,
  readOnly: PropTypes.bool,
  renderSuffix: PropTypes.func,
  sectionListRef: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({
    current: PropTypes.shape({
      getRoot: PropTypes.func.isRequired,
      getSectionContainer: PropTypes.func.isRequired,
      getSectionContent: PropTypes.func.isRequired,
      getSectionIndexFromDOMElement: PropTypes.func.isRequired
    })
  })]),
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: PropTypes.object,
  /**
   * The components used for each slot inside.
   *
   * @default {}
   */
  slots: PropTypes.object,
  startAdornment: PropTypes.node,
  style: PropTypes.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])), PropTypes.func, PropTypes.object]),
  value: PropTypes.string.isRequired
} : void 0;

function getPickersOutlinedInputUtilityClass(slot) {
  return generateUtilityClass('MuiPickersOutlinedInput', slot);
}
const pickersOutlinedInputClasses = _extends({}, pickersInputBaseClasses, generateUtilityClasses('MuiPickersOutlinedInput', ['root', 'notchedOutline', 'input']));

var reactIs = {exports: {}};

var reactIs_production = {};

/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactIs_production;

function requireReactIs_production () {
	if (hasRequiredReactIs_production) return reactIs_production;
	hasRequiredReactIs_production = 1;
	var REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"),
	  REACT_PORTAL_TYPE = Symbol.for("react.portal"),
	  REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"),
	  REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"),
	  REACT_PROFILER_TYPE = Symbol.for("react.profiler");
	var REACT_CONSUMER_TYPE = Symbol.for("react.consumer"),
	  REACT_CONTEXT_TYPE = Symbol.for("react.context"),
	  REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"),
	  REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"),
	  REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"),
	  REACT_MEMO_TYPE = Symbol.for("react.memo"),
	  REACT_LAZY_TYPE = Symbol.for("react.lazy"),
	  REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"),
	  REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference");
	function typeOf(object) {
	  if ("object" === typeof object && null !== object) {
	    var $$typeof = object.$$typeof;
	    switch ($$typeof) {
	      case REACT_ELEMENT_TYPE:
	        switch (((object = object.type), object)) {
	          case REACT_FRAGMENT_TYPE:
	          case REACT_PROFILER_TYPE:
	          case REACT_STRICT_MODE_TYPE:
	          case REACT_SUSPENSE_TYPE:
	          case REACT_SUSPENSE_LIST_TYPE:
	          case REACT_VIEW_TRANSITION_TYPE:
	            return object;
	          default:
	            switch (((object = object && object.$$typeof), object)) {
	              case REACT_CONTEXT_TYPE:
	              case REACT_FORWARD_REF_TYPE:
	              case REACT_LAZY_TYPE:
	              case REACT_MEMO_TYPE:
	                return object;
	              case REACT_CONSUMER_TYPE:
	                return object;
	              default:
	                return $$typeof;
	            }
	        }
	      case REACT_PORTAL_TYPE:
	        return $$typeof;
	    }
	  }
	}
	reactIs_production.ContextConsumer = REACT_CONSUMER_TYPE;
	reactIs_production.ContextProvider = REACT_CONTEXT_TYPE;
	reactIs_production.Element = REACT_ELEMENT_TYPE;
	reactIs_production.ForwardRef = REACT_FORWARD_REF_TYPE;
	reactIs_production.Fragment = REACT_FRAGMENT_TYPE;
	reactIs_production.Lazy = REACT_LAZY_TYPE;
	reactIs_production.Memo = REACT_MEMO_TYPE;
	reactIs_production.Portal = REACT_PORTAL_TYPE;
	reactIs_production.Profiler = REACT_PROFILER_TYPE;
	reactIs_production.StrictMode = REACT_STRICT_MODE_TYPE;
	reactIs_production.Suspense = REACT_SUSPENSE_TYPE;
	reactIs_production.SuspenseList = REACT_SUSPENSE_LIST_TYPE;
	reactIs_production.isContextConsumer = function (object) {
	  return typeOf(object) === REACT_CONSUMER_TYPE;
	};
	reactIs_production.isContextProvider = function (object) {
	  return typeOf(object) === REACT_CONTEXT_TYPE;
	};
	reactIs_production.isElement = function (object) {
	  return (
	    "object" === typeof object &&
	    null !== object &&
	    object.$$typeof === REACT_ELEMENT_TYPE
	  );
	};
	reactIs_production.isForwardRef = function (object) {
	  return typeOf(object) === REACT_FORWARD_REF_TYPE;
	};
	reactIs_production.isFragment = function (object) {
	  return typeOf(object) === REACT_FRAGMENT_TYPE;
	};
	reactIs_production.isLazy = function (object) {
	  return typeOf(object) === REACT_LAZY_TYPE;
	};
	reactIs_production.isMemo = function (object) {
	  return typeOf(object) === REACT_MEMO_TYPE;
	};
	reactIs_production.isPortal = function (object) {
	  return typeOf(object) === REACT_PORTAL_TYPE;
	};
	reactIs_production.isProfiler = function (object) {
	  return typeOf(object) === REACT_PROFILER_TYPE;
	};
	reactIs_production.isStrictMode = function (object) {
	  return typeOf(object) === REACT_STRICT_MODE_TYPE;
	};
	reactIs_production.isSuspense = function (object) {
	  return typeOf(object) === REACT_SUSPENSE_TYPE;
	};
	reactIs_production.isSuspenseList = function (object) {
	  return typeOf(object) === REACT_SUSPENSE_LIST_TYPE;
	};
	reactIs_production.isValidElementType = function (type) {
	  return "string" === typeof type ||
	    "function" === typeof type ||
	    type === REACT_FRAGMENT_TYPE ||
	    type === REACT_PROFILER_TYPE ||
	    type === REACT_STRICT_MODE_TYPE ||
	    type === REACT_SUSPENSE_TYPE ||
	    type === REACT_SUSPENSE_LIST_TYPE ||
	    ("object" === typeof type &&
	      null !== type &&
	      (type.$$typeof === REACT_LAZY_TYPE ||
	        type.$$typeof === REACT_MEMO_TYPE ||
	        type.$$typeof === REACT_CONTEXT_TYPE ||
	        type.$$typeof === REACT_CONSUMER_TYPE ||
	        type.$$typeof === REACT_FORWARD_REF_TYPE ||
	        type.$$typeof === REACT_CLIENT_REFERENCE ||
	        void 0 !== type.getModuleId))
	    ? !0
	    : !1;
	};
	reactIs_production.typeOf = typeOf;
	return reactIs_production;
}

var reactIs_development = {};

/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactIs_development;

function requireReactIs_development () {
	if (hasRequiredReactIs_development) return reactIs_development;
	hasRequiredReactIs_development = 1;
	"production" !== process.env.NODE_ENV &&
	  (function () {
	    function typeOf(object) {
	      if ("object" === typeof object && null !== object) {
	        var $$typeof = object.$$typeof;
	        switch ($$typeof) {
	          case REACT_ELEMENT_TYPE:
	            switch (((object = object.type), object)) {
	              case REACT_FRAGMENT_TYPE:
	              case REACT_PROFILER_TYPE:
	              case REACT_STRICT_MODE_TYPE:
	              case REACT_SUSPENSE_TYPE:
	              case REACT_SUSPENSE_LIST_TYPE:
	              case REACT_VIEW_TRANSITION_TYPE:
	                return object;
	              default:
	                switch (((object = object && object.$$typeof), object)) {
	                  case REACT_CONTEXT_TYPE:
	                  case REACT_FORWARD_REF_TYPE:
	                  case REACT_LAZY_TYPE:
	                  case REACT_MEMO_TYPE:
	                    return object;
	                  case REACT_CONSUMER_TYPE:
	                    return object;
	                  default:
	                    return $$typeof;
	                }
	            }
	          case REACT_PORTAL_TYPE:
	            return $$typeof;
	        }
	      }
	    }
	    var REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"),
	      REACT_PORTAL_TYPE = Symbol.for("react.portal"),
	      REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"),
	      REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"),
	      REACT_PROFILER_TYPE = Symbol.for("react.profiler");
	    var REACT_CONSUMER_TYPE = Symbol.for("react.consumer"),
	      REACT_CONTEXT_TYPE = Symbol.for("react.context"),
	      REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"),
	      REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"),
	      REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"),
	      REACT_MEMO_TYPE = Symbol.for("react.memo"),
	      REACT_LAZY_TYPE = Symbol.for("react.lazy"),
	      REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"),
	      REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference");
	    reactIs_development.ContextConsumer = REACT_CONSUMER_TYPE;
	    reactIs_development.ContextProvider = REACT_CONTEXT_TYPE;
	    reactIs_development.Element = REACT_ELEMENT_TYPE;
	    reactIs_development.ForwardRef = REACT_FORWARD_REF_TYPE;
	    reactIs_development.Fragment = REACT_FRAGMENT_TYPE;
	    reactIs_development.Lazy = REACT_LAZY_TYPE;
	    reactIs_development.Memo = REACT_MEMO_TYPE;
	    reactIs_development.Portal = REACT_PORTAL_TYPE;
	    reactIs_development.Profiler = REACT_PROFILER_TYPE;
	    reactIs_development.StrictMode = REACT_STRICT_MODE_TYPE;
	    reactIs_development.Suspense = REACT_SUSPENSE_TYPE;
	    reactIs_development.SuspenseList = REACT_SUSPENSE_LIST_TYPE;
	    reactIs_development.isContextConsumer = function (object) {
	      return typeOf(object) === REACT_CONSUMER_TYPE;
	    };
	    reactIs_development.isContextProvider = function (object) {
	      return typeOf(object) === REACT_CONTEXT_TYPE;
	    };
	    reactIs_development.isElement = function (object) {
	      return (
	        "object" === typeof object &&
	        null !== object &&
	        object.$$typeof === REACT_ELEMENT_TYPE
	      );
	    };
	    reactIs_development.isForwardRef = function (object) {
	      return typeOf(object) === REACT_FORWARD_REF_TYPE;
	    };
	    reactIs_development.isFragment = function (object) {
	      return typeOf(object) === REACT_FRAGMENT_TYPE;
	    };
	    reactIs_development.isLazy = function (object) {
	      return typeOf(object) === REACT_LAZY_TYPE;
	    };
	    reactIs_development.isMemo = function (object) {
	      return typeOf(object) === REACT_MEMO_TYPE;
	    };
	    reactIs_development.isPortal = function (object) {
	      return typeOf(object) === REACT_PORTAL_TYPE;
	    };
	    reactIs_development.isProfiler = function (object) {
	      return typeOf(object) === REACT_PROFILER_TYPE;
	    };
	    reactIs_development.isStrictMode = function (object) {
	      return typeOf(object) === REACT_STRICT_MODE_TYPE;
	    };
	    reactIs_development.isSuspense = function (object) {
	      return typeOf(object) === REACT_SUSPENSE_TYPE;
	    };
	    reactIs_development.isSuspenseList = function (object) {
	      return typeOf(object) === REACT_SUSPENSE_LIST_TYPE;
	    };
	    reactIs_development.isValidElementType = function (type) {
	      return "string" === typeof type ||
	        "function" === typeof type ||
	        type === REACT_FRAGMENT_TYPE ||
	        type === REACT_PROFILER_TYPE ||
	        type === REACT_STRICT_MODE_TYPE ||
	        type === REACT_SUSPENSE_TYPE ||
	        type === REACT_SUSPENSE_LIST_TYPE ||
	        ("object" === typeof type &&
	          null !== type &&
	          (type.$$typeof === REACT_LAZY_TYPE ||
	            type.$$typeof === REACT_MEMO_TYPE ||
	            type.$$typeof === REACT_CONTEXT_TYPE ||
	            type.$$typeof === REACT_CONSUMER_TYPE ||
	            type.$$typeof === REACT_FORWARD_REF_TYPE ||
	            type.$$typeof === REACT_CLIENT_REFERENCE ||
	            void 0 !== type.getModuleId))
	        ? !0
	        : !1;
	    };
	    reactIs_development.typeOf = typeOf;
	  })();
	return reactIs_development;
}

if (process.env.NODE_ENV === 'production') {
  reactIs.exports = requireReactIs_production();
} else {
  reactIs.exports = requireReactIs_development();
}

var reactIsExports = reactIs.exports;

// https://github.com/sindresorhus/is-plain-obj/blob/main/index.js
function isPlainObject(item) {
  if (typeof item !== 'object' || item === null) {
    return false;
  }
  const prototype = Object.getPrototypeOf(item);
  return (prototype === null || prototype === Object.prototype || Object.getPrototypeOf(prototype) === null) && !(Symbol.toStringTag in item) && !(Symbol.iterator in item);
}
function deepClone(source) {
  if (/*#__PURE__*/React__namespace.isValidElement(source) || reactIsExports.isValidElementType(source) || !isPlainObject(source)) {
    return source;
  }
  const output = {};
  Object.keys(source).forEach(key => {
    output[key] = deepClone(source[key]);
  });
  return output;
}

/**
 * Merge objects deeply.
 * It will shallow copy React elements.
 *
 * If `options.clone` is set to `false` the source object will be merged directly into the target object.
 *
 * @example
 * ```ts
 * deepmerge({ a: { b: 1 }, d: 2 }, { a: { c: 2 }, d: 4 });
 * // => { a: { b: 1, c: 2 }, d: 4 }
 * ````
 *
 * @param target The target object.
 * @param source The source object.
 * @param options The merge options.
 * @param options.clone Set to `false` to merge the source object directly into the target object.
 * @returns The merged object.
 */
function deepmerge(target, source, options = {
  clone: true
}) {
  const output = options.clone ? {
    ...target
  } : target;
  if (isPlainObject(target) && isPlainObject(source)) {
    Object.keys(source).forEach(key => {
      if (/*#__PURE__*/React__namespace.isValidElement(source[key]) || reactIsExports.isValidElementType(source[key])) {
        output[key] = source[key];
      } else if (isPlainObject(source[key]) &&
      // Avoid prototype pollution
      Object.prototype.hasOwnProperty.call(target, key) && isPlainObject(target[key])) {
        // Since `output` is a clone of `target` and we have narrowed `target` in this block we can cast to the same type.
        output[key] = deepmerge(target[key], source[key], options);
      } else if (options.clone) {
        output[key] = isPlainObject(source[key]) ? deepClone(source[key]) : source[key];
      } else {
        output[key] = source[key];
      }
    });
  }
  return output;
}

// Sorted ASC by size. That's important.
// It can't be configured as it's used statically for propTypes.
const sortBreakpointsValues = values => {
  const breakpointsAsArray = Object.keys(values).map(key => ({
    key,
    val: values[key]
  })) || [];
  // Sort in ascending order
  breakpointsAsArray.sort((breakpoint1, breakpoint2) => breakpoint1.val - breakpoint2.val);
  return breakpointsAsArray.reduce((acc, obj) => {
    return {
      ...acc,
      [obj.key]: obj.val
    };
  }, {});
};

// Keep in mind that @media is inclusive by the CSS specification.
function createBreakpoints(breakpoints) {
  const {
    // The breakpoint **start** at this value.
    // For instance with the first breakpoint xs: [xs, sm).
    values = {
      xs: 0,
      // phone
      sm: 600,
      // tablet
      md: 900,
      // small laptop
      lg: 1200,
      // desktop
      xl: 1536 // large screen
    },
    unit = 'px',
    step = 5,
    ...other
  } = breakpoints;
  const sortedValues = sortBreakpointsValues(values);
  const keys = Object.keys(sortedValues);
  function up(key) {
    const value = typeof values[key] === 'number' ? values[key] : key;
    return `@media (min-width:${value}${unit})`;
  }
  function down(key) {
    const value = typeof values[key] === 'number' ? values[key] : key;
    return `@media (max-width:${value - step / 100}${unit})`;
  }
  function between(start, end) {
    const endIndex = keys.indexOf(end);
    return `@media (min-width:${typeof values[start] === 'number' ? values[start] : start}${unit}) and ` + `(max-width:${(endIndex !== -1 && typeof values[keys[endIndex]] === 'number' ? values[keys[endIndex]] : end) - step / 100}${unit})`;
  }
  function only(key) {
    if (keys.indexOf(key) + 1 < keys.length) {
      return between(key, keys[keys.indexOf(key) + 1]);
    }
    return up(key);
  }
  function not(key) {
    // handle first and last key separately, for better readability
    const keyIndex = keys.indexOf(key);
    if (keyIndex === 0) {
      return up(keys[1]);
    }
    if (keyIndex === keys.length - 1) {
      return down(keys[keyIndex]);
    }
    return between(key, keys[keys.indexOf(key) + 1]).replace('@media', '@media not all and');
  }
  return {
    keys,
    values: sortedValues,
    up,
    down,
    between,
    only,
    not,
    unit,
    ...other
  };
}

/**
 * For using in `sx` prop to sort the breakpoint from low to high.
 * Note: this function does not work and will not support multiple units.
 *       e.g. input: { '@container (min-width:300px)': '1rem', '@container (min-width:40rem)': '2rem' }
 *            output: { '@container (min-width:40rem)': '2rem', '@container (min-width:300px)': '1rem' } // since 40 < 300 eventhough 40rem > 300px
 */
function sortContainerQueries(theme, css) {
  if (!theme.containerQueries) {
    return css;
  }
  const sorted = Object.keys(css).filter(key => key.startsWith('@container')).sort((a, b) => {
    const regex = /min-width:\s*([0-9.]+)/;
    return +(a.match(regex)?.[1] || 0) - +(b.match(regex)?.[1] || 0);
  });
  if (!sorted.length) {
    return css;
  }
  return sorted.reduce((acc, key) => {
    const value = css[key];
    delete acc[key];
    acc[key] = value;
    return acc;
  }, {
    ...css
  });
}
function isCqShorthand(breakpointKeys, value) {
  return value === '@' || value.startsWith('@') && (breakpointKeys.some(key => value.startsWith(`@${key}`)) || !!value.match(/^@\d/));
}
function getContainerQuery(theme, shorthand) {
  const matches = shorthand.match(/^@([^/]+)?\/?(.+)?$/);
  if (!matches) {
    if (process.env.NODE_ENV !== 'production') {
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The provided shorthand ${`(${shorthand})`} is invalid. The format should be \`@<breakpoint | number>\` or \`@<breakpoint | number>/<container>\`.\n` + 'For example, `@sm` or `@600` or `@40rem/sidebar`.' : formatMuiErrorMessage(18, `(${shorthand})`));
    }
    return null;
  }
  const [, containerQuery, containerName] = matches;
  const value = Number.isNaN(+containerQuery) ? containerQuery || 0 : +containerQuery;
  return theme.containerQueries(containerName).up(value);
}
function cssContainerQueries(themeInput) {
  const toContainerQuery = (mediaQuery, name) => mediaQuery.replace('@media', name ? `@container ${name}` : '@container');
  function attachCq(node, name) {
    node.up = (...args) => toContainerQuery(themeInput.breakpoints.up(...args), name);
    node.down = (...args) => toContainerQuery(themeInput.breakpoints.down(...args), name);
    node.between = (...args) => toContainerQuery(themeInput.breakpoints.between(...args), name);
    node.only = (...args) => toContainerQuery(themeInput.breakpoints.only(...args), name);
    node.not = (...args) => {
      const result = toContainerQuery(themeInput.breakpoints.not(...args), name);
      if (result.includes('not all and')) {
        // `@container` does not work with `not all and`, so need to invert the logic
        return result.replace('not all and ', '').replace('min-width:', 'width<').replace('max-width:', 'width>').replace('and', 'or');
      }
      return result;
    };
  }
  const node = {};
  const containerQueries = name => {
    attachCq(node, name);
    return node;
  };
  attachCq(containerQueries);
  return {
    ...themeInput,
    containerQueries
  };
}

const shape = {
  borderRadius: 4
};
var shape$1 = shape;

const responsivePropType = process.env.NODE_ENV !== 'production' ? PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.object, PropTypes.array]) : {};
var responsivePropType$1 = responsivePropType;

function merge(acc, item) {
  if (!item) {
    return acc;
  }
  return deepmerge(acc, item, {
    clone: false // No need to clone deep, it's way faster.
  });
}

// The breakpoint **start** at this value.
// For instance with the first breakpoint xs: [xs, sm[.
const values$1 = {
  xs: 0,
  // phone
  sm: 600,
  // tablet
  md: 900,
  // small laptop
  lg: 1200,
  // desktop
  xl: 1536 // large screen
};
const defaultBreakpoints = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ['xs', 'sm', 'md', 'lg', 'xl'],
  up: key => `@media (min-width:${values$1[key]}px)`
};
const defaultContainerQueries = {
  containerQueries: containerName => ({
    up: key => {
      let result = typeof key === 'number' ? key : values$1[key] || key;
      if (typeof result === 'number') {
        result = `${result}px`;
      }
      return containerName ? `@container ${containerName} (min-width:${result})` : `@container (min-width:${result})`;
    }
  })
};
function handleBreakpoints(props, propValue, styleFromPropValue) {
  const theme = props.theme || {};
  if (Array.isArray(propValue)) {
    const themeBreakpoints = theme.breakpoints || defaultBreakpoints;
    return propValue.reduce((acc, item, index) => {
      acc[themeBreakpoints.up(themeBreakpoints.keys[index])] = styleFromPropValue(propValue[index]);
      return acc;
    }, {});
  }
  if (typeof propValue === 'object') {
    const themeBreakpoints = theme.breakpoints || defaultBreakpoints;
    return Object.keys(propValue).reduce((acc, breakpoint) => {
      if (isCqShorthand(themeBreakpoints.keys, breakpoint)) {
        const containerKey = getContainerQuery(theme.containerQueries ? theme : defaultContainerQueries, breakpoint);
        if (containerKey) {
          acc[containerKey] = styleFromPropValue(propValue[breakpoint], breakpoint);
        }
      }
      // key is breakpoint
      else if (Object.keys(themeBreakpoints.values || values$1).includes(breakpoint)) {
        const mediaKey = themeBreakpoints.up(breakpoint);
        acc[mediaKey] = styleFromPropValue(propValue[breakpoint], breakpoint);
      } else {
        const cssKey = breakpoint;
        acc[cssKey] = propValue[cssKey];
      }
      return acc;
    }, {});
  }
  const output = styleFromPropValue(propValue);
  return output;
}
function createEmptyBreakpointObject(breakpointsInput = {}) {
  const breakpointsInOrder = breakpointsInput.keys?.reduce((acc, key) => {
    const breakpointStyleKey = breakpointsInput.up(key);
    acc[breakpointStyleKey] = {};
    return acc;
  }, {});
  return breakpointsInOrder || {};
}
function removeUnusedBreakpoints(breakpointKeys, style) {
  return breakpointKeys.reduce((acc, key) => {
    const breakpointOutput = acc[key];
    const isBreakpointUnused = !breakpointOutput || Object.keys(breakpointOutput).length === 0;
    if (isBreakpointUnused) {
      delete acc[key];
    }
    return acc;
  }, style);
}

function getPath(obj, path, checkVars = true) {
  if (!path || typeof path !== 'string') {
    return null;
  }

  // Check if CSS variables are used
  if (obj && obj.vars && checkVars) {
    const val = `vars.${path}`.split('.').reduce((acc, item) => acc && acc[item] ? acc[item] : null, obj);
    if (val != null) {
      return val;
    }
  }
  return path.split('.').reduce((acc, item) => {
    if (acc && acc[item] != null) {
      return acc[item];
    }
    return null;
  }, obj);
}
function getStyleValue(themeMapping, transform, propValueFinal, userValue = propValueFinal) {
  let value;
  if (typeof themeMapping === 'function') {
    value = themeMapping(propValueFinal);
  } else if (Array.isArray(themeMapping)) {
    value = themeMapping[propValueFinal] || userValue;
  } else {
    value = getPath(themeMapping, propValueFinal) || userValue;
  }
  if (transform) {
    value = transform(value, userValue, themeMapping);
  }
  return value;
}
function style$1(options) {
  const {
    prop,
    cssProperty = options.prop,
    themeKey,
    transform
  } = options;

  // false positive
  // eslint-disable-next-line react/function-component-definition
  const fn = props => {
    if (props[prop] == null) {
      return null;
    }
    const propValue = props[prop];
    const theme = props.theme;
    const themeMapping = getPath(theme, themeKey) || {};
    const styleFromPropValue = propValueFinal => {
      let value = getStyleValue(themeMapping, transform, propValueFinal);
      if (propValueFinal === value && typeof propValueFinal === 'string') {
        // Haven't found value
        value = getStyleValue(themeMapping, transform, `${prop}${propValueFinal === 'default' ? '' : capitalize(propValueFinal)}`, propValueFinal);
      }
      if (cssProperty === false) {
        return value;
      }
      return {
        [cssProperty]: value
      };
    };
    return handleBreakpoints(props, propValue, styleFromPropValue);
  };
  fn.propTypes = process.env.NODE_ENV !== 'production' ? {
    [prop]: responsivePropType$1
  } : {};
  fn.filterProps = [prop];
  return fn;
}

function memoize(fn) {
  const cache = {};
  return arg => {
    if (cache[arg] === undefined) {
      cache[arg] = fn(arg);
    }
    return cache[arg];
  };
}

const properties = {
  m: 'margin',
  p: 'padding'
};
const directions = {
  t: 'Top',
  r: 'Right',
  b: 'Bottom',
  l: 'Left',
  x: ['Left', 'Right'],
  y: ['Top', 'Bottom']
};
const aliases = {
  marginX: 'mx',
  marginY: 'my',
  paddingX: 'px',
  paddingY: 'py'
};

// memoize() impact:
// From 300,000 ops/sec
// To 350,000 ops/sec
const getCssProperties = memoize(prop => {
  // It's not a shorthand notation.
  if (prop.length > 2) {
    if (aliases[prop]) {
      prop = aliases[prop];
    } else {
      return [prop];
    }
  }
  const [a, b] = prop.split('');
  const property = properties[a];
  const direction = directions[b] || '';
  return Array.isArray(direction) ? direction.map(dir => property + dir) : [property + direction];
});
const marginKeys = ['m', 'mt', 'mr', 'mb', 'ml', 'mx', 'my', 'margin', 'marginTop', 'marginRight', 'marginBottom', 'marginLeft', 'marginX', 'marginY', 'marginInline', 'marginInlineStart', 'marginInlineEnd', 'marginBlock', 'marginBlockStart', 'marginBlockEnd'];
const paddingKeys = ['p', 'pt', 'pr', 'pb', 'pl', 'px', 'py', 'padding', 'paddingTop', 'paddingRight', 'paddingBottom', 'paddingLeft', 'paddingX', 'paddingY', 'paddingInline', 'paddingInlineStart', 'paddingInlineEnd', 'paddingBlock', 'paddingBlockStart', 'paddingBlockEnd'];
const spacingKeys = [...marginKeys, ...paddingKeys];
function createUnaryUnit(theme, themeKey, defaultValue, propName) {
  const themeSpacing = getPath(theme, themeKey, true) ?? defaultValue;
  if (typeof themeSpacing === 'number' || typeof themeSpacing === 'string') {
    return val => {
      if (typeof val === 'string') {
        return val;
      }
      if (process.env.NODE_ENV !== 'production') {
        if (typeof val !== 'number') {
          console.error(`MUI: Expected ${propName} argument to be a number or a string, got ${val}.`);
        }
      }
      if (typeof themeSpacing === 'string') {
        if (themeSpacing.startsWith('var(') && val === 0) {
          return 0;
        }
        if (themeSpacing.startsWith('var(') && val === 1) {
          return themeSpacing;
        }
        return `calc(${val} * ${themeSpacing})`;
      }
      return themeSpacing * val;
    };
  }
  if (Array.isArray(themeSpacing)) {
    return val => {
      if (typeof val === 'string') {
        return val;
      }
      const abs = Math.abs(val);
      if (process.env.NODE_ENV !== 'production') {
        if (!Number.isInteger(abs)) {
          console.error([`MUI: The \`theme.${themeKey}\` array type cannot be combined with non integer values.` + `You should either use an integer value that can be used as index, or define the \`theme.${themeKey}\` as a number.`].join('\n'));
        } else if (abs > themeSpacing.length - 1) {
          console.error([`MUI: The value provided (${abs}) overflows.`, `The supported values are: ${JSON.stringify(themeSpacing)}.`, `${abs} > ${themeSpacing.length - 1}, you need to add the missing values.`].join('\n'));
        }
      }
      const transformed = themeSpacing[abs];
      if (val >= 0) {
        return transformed;
      }
      if (typeof transformed === 'number') {
        return -transformed;
      }
      if (typeof transformed === 'string' && transformed.startsWith('var(')) {
        return `calc(-1 * ${transformed})`;
      }
      return `-${transformed}`;
    };
  }
  if (typeof themeSpacing === 'function') {
    return themeSpacing;
  }
  if (process.env.NODE_ENV !== 'production') {
    console.error([`MUI: The \`theme.${themeKey}\` value (${themeSpacing}) is invalid.`, 'It should be a number, an array or a function.'].join('\n'));
  }
  return () => undefined;
}
function createUnarySpacing(theme) {
  return createUnaryUnit(theme, 'spacing', 8, 'spacing');
}
function getValue(transformer, propValue) {
  if (typeof propValue === 'string' || propValue == null) {
    return propValue;
  }
  return transformer(propValue);
}
function getStyleFromPropValue(cssProperties, transformer) {
  return propValue => cssProperties.reduce((acc, cssProperty) => {
    acc[cssProperty] = getValue(transformer, propValue);
    return acc;
  }, {});
}
function resolveCssProperty(props, keys, prop, transformer) {
  // Using a hash computation over an array iteration could be faster, but with only 28 items,
  // it's doesn't worth the bundle size.
  if (!keys.includes(prop)) {
    return null;
  }
  const cssProperties = getCssProperties(prop);
  const styleFromPropValue = getStyleFromPropValue(cssProperties, transformer);
  const propValue = props[prop];
  return handleBreakpoints(props, propValue, styleFromPropValue);
}
function style(props, keys) {
  const transformer = createUnarySpacing(props.theme);
  return Object.keys(props).map(prop => resolveCssProperty(props, keys, prop, transformer)).reduce(merge, {});
}
function margin(props) {
  return style(props, marginKeys);
}
margin.propTypes = process.env.NODE_ENV !== 'production' ? marginKeys.reduce((obj, key) => {
  obj[key] = responsivePropType$1;
  return obj;
}, {}) : {};
margin.filterProps = marginKeys;
function padding(props) {
  return style(props, paddingKeys);
}
padding.propTypes = process.env.NODE_ENV !== 'production' ? paddingKeys.reduce((obj, key) => {
  obj[key] = responsivePropType$1;
  return obj;
}, {}) : {};
padding.filterProps = paddingKeys;
process.env.NODE_ENV !== 'production' ? spacingKeys.reduce((obj, key) => {
  obj[key] = responsivePropType$1;
  return obj;
}, {}) : {};

// The different signatures imply different meaning for their arguments that can't be expressed structurally.
// We express the difference with variable names.

function createSpacing(spacingInput = 8,
// Material Design layouts are visually balanced. Most measurements align to an 8dp grid, which aligns both spacing and the overall layout.
// Smaller components, such as icons, can align to a 4dp grid.
// https://m2.material.io/design/layout/understanding-layout.html
transform = createUnarySpacing({
  spacing: spacingInput
})) {
  // Already transformed.
  if (spacingInput.mui) {
    return spacingInput;
  }
  const spacing = (...argsInput) => {
    if (process.env.NODE_ENV !== 'production') {
      if (!(argsInput.length <= 4)) {
        console.error(`MUI: Too many arguments provided, expected between 0 and 4, got ${argsInput.length}`);
      }
    }
    const args = argsInput.length === 0 ? [1] : argsInput;
    return args.map(argument => {
      const output = transform(argument);
      return typeof output === 'number' ? `${output}px` : output;
    }).join(' ');
  };
  spacing.mui = true;
  return spacing;
}

function compose(...styles) {
  const handlers = styles.reduce((acc, style) => {
    style.filterProps.forEach(prop => {
      acc[prop] = style;
    });
    return acc;
  }, {});

  // false positive
  // eslint-disable-next-line react/function-component-definition
  const fn = props => {
    return Object.keys(props).reduce((acc, prop) => {
      if (handlers[prop]) {
        return merge(acc, handlers[prop](props));
      }
      return acc;
    }, {});
  };
  fn.propTypes = process.env.NODE_ENV !== 'production' ? styles.reduce((acc, style) => Object.assign(acc, style.propTypes), {}) : {};
  fn.filterProps = styles.reduce((acc, style) => acc.concat(style.filterProps), []);
  return fn;
}

function borderTransform(value) {
  if (typeof value !== 'number') {
    return value;
  }
  return `${value}px solid`;
}
function createBorderStyle(prop, transform) {
  return style$1({
    prop,
    themeKey: 'borders',
    transform
  });
}
const border = createBorderStyle('border', borderTransform);
const borderTop = createBorderStyle('borderTop', borderTransform);
const borderRight = createBorderStyle('borderRight', borderTransform);
const borderBottom = createBorderStyle('borderBottom', borderTransform);
const borderLeft = createBorderStyle('borderLeft', borderTransform);
const borderColor = createBorderStyle('borderColor');
const borderTopColor = createBorderStyle('borderTopColor');
const borderRightColor = createBorderStyle('borderRightColor');
const borderBottomColor = createBorderStyle('borderBottomColor');
const borderLeftColor = createBorderStyle('borderLeftColor');
const outline = createBorderStyle('outline', borderTransform);
const outlineColor = createBorderStyle('outlineColor');

// false positive
// eslint-disable-next-line react/function-component-definition
const borderRadius = props => {
  if (props.borderRadius !== undefined && props.borderRadius !== null) {
    const transformer = createUnaryUnit(props.theme, 'shape.borderRadius', 4, 'borderRadius');
    const styleFromPropValue = propValue => ({
      borderRadius: getValue(transformer, propValue)
    });
    return handleBreakpoints(props, props.borderRadius, styleFromPropValue);
  }
  return null;
};
borderRadius.propTypes = process.env.NODE_ENV !== 'production' ? {
  borderRadius: responsivePropType$1
} : {};
borderRadius.filterProps = ['borderRadius'];
compose(border, borderTop, borderRight, borderBottom, borderLeft, borderColor, borderTopColor, borderRightColor, borderBottomColor, borderLeftColor, borderRadius, outline, outlineColor);

// false positive
// eslint-disable-next-line react/function-component-definition
const gap = props => {
  if (props.gap !== undefined && props.gap !== null) {
    const transformer = createUnaryUnit(props.theme, 'spacing', 8, 'gap');
    const styleFromPropValue = propValue => ({
      gap: getValue(transformer, propValue)
    });
    return handleBreakpoints(props, props.gap, styleFromPropValue);
  }
  return null;
};
gap.propTypes = process.env.NODE_ENV !== 'production' ? {
  gap: responsivePropType$1
} : {};
gap.filterProps = ['gap'];

// false positive
// eslint-disable-next-line react/function-component-definition
const columnGap = props => {
  if (props.columnGap !== undefined && props.columnGap !== null) {
    const transformer = createUnaryUnit(props.theme, 'spacing', 8, 'columnGap');
    const styleFromPropValue = propValue => ({
      columnGap: getValue(transformer, propValue)
    });
    return handleBreakpoints(props, props.columnGap, styleFromPropValue);
  }
  return null;
};
columnGap.propTypes = process.env.NODE_ENV !== 'production' ? {
  columnGap: responsivePropType$1
} : {};
columnGap.filterProps = ['columnGap'];

// false positive
// eslint-disable-next-line react/function-component-definition
const rowGap = props => {
  if (props.rowGap !== undefined && props.rowGap !== null) {
    const transformer = createUnaryUnit(props.theme, 'spacing', 8, 'rowGap');
    const styleFromPropValue = propValue => ({
      rowGap: getValue(transformer, propValue)
    });
    return handleBreakpoints(props, props.rowGap, styleFromPropValue);
  }
  return null;
};
rowGap.propTypes = process.env.NODE_ENV !== 'production' ? {
  rowGap: responsivePropType$1
} : {};
rowGap.filterProps = ['rowGap'];
const gridColumn = style$1({
  prop: 'gridColumn'
});
const gridRow = style$1({
  prop: 'gridRow'
});
const gridAutoFlow = style$1({
  prop: 'gridAutoFlow'
});
const gridAutoColumns = style$1({
  prop: 'gridAutoColumns'
});
const gridAutoRows = style$1({
  prop: 'gridAutoRows'
});
const gridTemplateColumns = style$1({
  prop: 'gridTemplateColumns'
});
const gridTemplateRows = style$1({
  prop: 'gridTemplateRows'
});
const gridTemplateAreas = style$1({
  prop: 'gridTemplateAreas'
});
const gridArea = style$1({
  prop: 'gridArea'
});
compose(gap, columnGap, rowGap, gridColumn, gridRow, gridAutoFlow, gridAutoColumns, gridAutoRows, gridTemplateColumns, gridTemplateRows, gridTemplateAreas, gridArea);

function paletteTransform(value, userValue) {
  if (userValue === 'grey') {
    return userValue;
  }
  return value;
}
const color = style$1({
  prop: 'color',
  themeKey: 'palette',
  transform: paletteTransform
});
const bgcolor = style$1({
  prop: 'bgcolor',
  cssProperty: 'backgroundColor',
  themeKey: 'palette',
  transform: paletteTransform
});
const backgroundColor = style$1({
  prop: 'backgroundColor',
  themeKey: 'palette',
  transform: paletteTransform
});
compose(color, bgcolor, backgroundColor);

function sizingTransform(value) {
  return value <= 1 && value !== 0 ? `${value * 100}%` : value;
}
const width = style$1({
  prop: 'width',
  transform: sizingTransform
});
const maxWidth = props => {
  if (props.maxWidth !== undefined && props.maxWidth !== null) {
    const styleFromPropValue = propValue => {
      const breakpoint = props.theme?.breakpoints?.values?.[propValue] || values$1[propValue];
      if (!breakpoint) {
        return {
          maxWidth: sizingTransform(propValue)
        };
      }
      if (props.theme?.breakpoints?.unit !== 'px') {
        return {
          maxWidth: `${breakpoint}${props.theme.breakpoints.unit}`
        };
      }
      return {
        maxWidth: breakpoint
      };
    };
    return handleBreakpoints(props, props.maxWidth, styleFromPropValue);
  }
  return null;
};
maxWidth.filterProps = ['maxWidth'];
const minWidth = style$1({
  prop: 'minWidth',
  transform: sizingTransform
});
const height = style$1({
  prop: 'height',
  transform: sizingTransform
});
const maxHeight = style$1({
  prop: 'maxHeight',
  transform: sizingTransform
});
const minHeight = style$1({
  prop: 'minHeight',
  transform: sizingTransform
});
style$1({
  prop: 'size',
  cssProperty: 'width',
  transform: sizingTransform
});
style$1({
  prop: 'size',
  cssProperty: 'height',
  transform: sizingTransform
});
const boxSizing = style$1({
  prop: 'boxSizing'
});
compose(width, maxWidth, minWidth, height, maxHeight, minHeight, boxSizing);

const defaultSxConfig = {
  // borders
  border: {
    themeKey: 'borders',
    transform: borderTransform
  },
  borderTop: {
    themeKey: 'borders',
    transform: borderTransform
  },
  borderRight: {
    themeKey: 'borders',
    transform: borderTransform
  },
  borderBottom: {
    themeKey: 'borders',
    transform: borderTransform
  },
  borderLeft: {
    themeKey: 'borders',
    transform: borderTransform
  },
  borderColor: {
    themeKey: 'palette'
  },
  borderTopColor: {
    themeKey: 'palette'
  },
  borderRightColor: {
    themeKey: 'palette'
  },
  borderBottomColor: {
    themeKey: 'palette'
  },
  borderLeftColor: {
    themeKey: 'palette'
  },
  outline: {
    themeKey: 'borders',
    transform: borderTransform
  },
  outlineColor: {
    themeKey: 'palette'
  },
  borderRadius: {
    themeKey: 'shape.borderRadius',
    style: borderRadius
  },
  // palette
  color: {
    themeKey: 'palette',
    transform: paletteTransform
  },
  bgcolor: {
    themeKey: 'palette',
    cssProperty: 'backgroundColor',
    transform: paletteTransform
  },
  backgroundColor: {
    themeKey: 'palette',
    transform: paletteTransform
  },
  // spacing
  p: {
    style: padding
  },
  pt: {
    style: padding
  },
  pr: {
    style: padding
  },
  pb: {
    style: padding
  },
  pl: {
    style: padding
  },
  px: {
    style: padding
  },
  py: {
    style: padding
  },
  padding: {
    style: padding
  },
  paddingTop: {
    style: padding
  },
  paddingRight: {
    style: padding
  },
  paddingBottom: {
    style: padding
  },
  paddingLeft: {
    style: padding
  },
  paddingX: {
    style: padding
  },
  paddingY: {
    style: padding
  },
  paddingInline: {
    style: padding
  },
  paddingInlineStart: {
    style: padding
  },
  paddingInlineEnd: {
    style: padding
  },
  paddingBlock: {
    style: padding
  },
  paddingBlockStart: {
    style: padding
  },
  paddingBlockEnd: {
    style: padding
  },
  m: {
    style: margin
  },
  mt: {
    style: margin
  },
  mr: {
    style: margin
  },
  mb: {
    style: margin
  },
  ml: {
    style: margin
  },
  mx: {
    style: margin
  },
  my: {
    style: margin
  },
  margin: {
    style: margin
  },
  marginTop: {
    style: margin
  },
  marginRight: {
    style: margin
  },
  marginBottom: {
    style: margin
  },
  marginLeft: {
    style: margin
  },
  marginX: {
    style: margin
  },
  marginY: {
    style: margin
  },
  marginInline: {
    style: margin
  },
  marginInlineStart: {
    style: margin
  },
  marginInlineEnd: {
    style: margin
  },
  marginBlock: {
    style: margin
  },
  marginBlockStart: {
    style: margin
  },
  marginBlockEnd: {
    style: margin
  },
  // display
  displayPrint: {
    cssProperty: false,
    transform: value => ({
      '@media print': {
        display: value
      }
    })
  },
  display: {},
  overflow: {},
  textOverflow: {},
  visibility: {},
  whiteSpace: {},
  // flexbox
  flexBasis: {},
  flexDirection: {},
  flexWrap: {},
  justifyContent: {},
  alignItems: {},
  alignContent: {},
  order: {},
  flex: {},
  flexGrow: {},
  flexShrink: {},
  alignSelf: {},
  justifyItems: {},
  justifySelf: {},
  // grid
  gap: {
    style: gap
  },
  rowGap: {
    style: rowGap
  },
  columnGap: {
    style: columnGap
  },
  gridColumn: {},
  gridRow: {},
  gridAutoFlow: {},
  gridAutoColumns: {},
  gridAutoRows: {},
  gridTemplateColumns: {},
  gridTemplateRows: {},
  gridTemplateAreas: {},
  gridArea: {},
  // positions
  position: {},
  zIndex: {
    themeKey: 'zIndex'
  },
  top: {},
  right: {},
  bottom: {},
  left: {},
  // shadows
  boxShadow: {
    themeKey: 'shadows'
  },
  // sizing
  width: {
    transform: sizingTransform
  },
  maxWidth: {
    style: maxWidth
  },
  minWidth: {
    transform: sizingTransform
  },
  height: {
    transform: sizingTransform
  },
  maxHeight: {
    transform: sizingTransform
  },
  minHeight: {
    transform: sizingTransform
  },
  boxSizing: {},
  // typography
  font: {
    themeKey: 'font'
  },
  fontFamily: {
    themeKey: 'typography'
  },
  fontSize: {
    themeKey: 'typography'
  },
  fontStyle: {
    themeKey: 'typography'
  },
  fontWeight: {
    themeKey: 'typography'
  },
  letterSpacing: {},
  textTransform: {},
  lineHeight: {},
  textAlign: {},
  typography: {
    cssProperty: false,
    themeKey: 'typography'
  }
};
var defaultSxConfig$1 = defaultSxConfig;

function objectsHaveSameKeys(...objects) {
  const allKeys = objects.reduce((keys, object) => keys.concat(Object.keys(object)), []);
  const union = new Set(allKeys);
  return objects.every(object => union.size === Object.keys(object).length);
}
function callIfFn(maybeFn, arg) {
  return typeof maybeFn === 'function' ? maybeFn(arg) : maybeFn;
}

// eslint-disable-next-line @typescript-eslint/naming-convention
function unstable_createStyleFunctionSx() {
  function getThemeValue(prop, val, theme, config) {
    const props = {
      [prop]: val,
      theme
    };
    const options = config[prop];
    if (!options) {
      return {
        [prop]: val
      };
    }
    const {
      cssProperty = prop,
      themeKey,
      transform,
      style
    } = options;
    if (val == null) {
      return null;
    }

    // TODO v6: remove, see https://github.com/mui/material-ui/pull/38123
    if (themeKey === 'typography' && val === 'inherit') {
      return {
        [prop]: val
      };
    }
    const themeMapping = getPath(theme, themeKey) || {};
    if (style) {
      return style(props);
    }
    const styleFromPropValue = propValueFinal => {
      let value = getStyleValue(themeMapping, transform, propValueFinal);
      if (propValueFinal === value && typeof propValueFinal === 'string') {
        // Haven't found value
        value = getStyleValue(themeMapping, transform, `${prop}${propValueFinal === 'default' ? '' : capitalize(propValueFinal)}`, propValueFinal);
      }
      if (cssProperty === false) {
        return value;
      }
      return {
        [cssProperty]: value
      };
    };
    return handleBreakpoints(props, val, styleFromPropValue);
  }
  function styleFunctionSx(props) {
    const {
      sx,
      theme = {},
      nested
    } = props || {};
    if (!sx) {
      return null; // Emotion & styled-components will neglect null
    }
    const config = theme.unstable_sxConfig ?? defaultSxConfig$1;

    /*
     * Receive `sxInput` as object or callback
     * and then recursively check keys & values to create media query object styles.
     * (the result will be used in `styled`)
     */
    function traverse(sxInput) {
      let sxObject = sxInput;
      if (typeof sxInput === 'function') {
        sxObject = sxInput(theme);
      } else if (typeof sxInput !== 'object') {
        // value
        return sxInput;
      }
      if (!sxObject) {
        return null;
      }
      const emptyBreakpoints = createEmptyBreakpointObject(theme.breakpoints);
      const breakpointsKeys = Object.keys(emptyBreakpoints);
      let css = emptyBreakpoints;
      Object.keys(sxObject).forEach(styleKey => {
        const value = callIfFn(sxObject[styleKey], theme);
        if (value !== null && value !== undefined) {
          if (typeof value === 'object') {
            if (config[styleKey]) {
              css = merge(css, getThemeValue(styleKey, value, theme, config));
            } else {
              const breakpointsValues = handleBreakpoints({
                theme
              }, value, x => ({
                [styleKey]: x
              }));
              if (objectsHaveSameKeys(breakpointsValues, value)) {
                css[styleKey] = styleFunctionSx({
                  sx: value,
                  theme,
                  nested: true
                });
              } else {
                css = merge(css, breakpointsValues);
              }
            }
          } else {
            css = merge(css, getThemeValue(styleKey, value, theme, config));
          }
        }
      });
      if (!nested && theme.modularCssLayers) {
        return {
          '@layer sx': sortContainerQueries(theme, removeUnusedBreakpoints(breakpointsKeys, css))
        };
      }
      return sortContainerQueries(theme, removeUnusedBreakpoints(breakpointsKeys, css));
    }
    return Array.isArray(sx) ? sx.map(traverse) : traverse(sx);
  }
  return styleFunctionSx;
}
const styleFunctionSx = unstable_createStyleFunctionSx();
styleFunctionSx.filterProps = ['sx'];
var styleFunctionSx$1 = styleFunctionSx;

/**
 * A universal utility to style components with multiple color modes. Always use it from the theme object.
 * It works with:
 *  - [Basic theme](https://mui.com/material-ui/customization/dark-mode/)
 *  - [CSS theme variables](https://mui.com/material-ui/customization/css-theme-variables/overview/)
 *  - Zero-runtime engine
 *
 * Tips: Use an array over object spread and place `theme.applyStyles()` last.
 *
 * With the styled function:
 * ✅ [{ background: '#e5e5e5' }, theme.applyStyles('dark', { background: '#1c1c1c' })]
 * 🚫 { background: '#e5e5e5', ...theme.applyStyles('dark', { background: '#1c1c1c' })}
 *
 * With the sx prop:
 * ✅ [{ background: '#e5e5e5' }, theme => theme.applyStyles('dark', { background: '#1c1c1c' })]
 * 🚫 { background: '#e5e5e5', ...theme => theme.applyStyles('dark', { background: '#1c1c1c' })}
 *
 * @example
 * 1. using with `styled`:
 * ```jsx
 *   const Component = styled('div')(({ theme }) => [
 *     { background: '#e5e5e5' },
 *     theme.applyStyles('dark', {
 *       background: '#1c1c1c',
 *       color: '#fff',
 *     }),
 *   ]);
 * ```
 *
 * @example
 * 2. using with `sx` prop:
 * ```jsx
 *   <Box sx={[
 *     { background: '#e5e5e5' },
 *     theme => theme.applyStyles('dark', {
 *        background: '#1c1c1c',
 *        color: '#fff',
 *      }),
 *     ]}
 *   />
 * ```
 *
 * @example
 * 3. theming a component:
 * ```jsx
 *   extendTheme({
 *     components: {
 *       MuiButton: {
 *         styleOverrides: {
 *           root: ({ theme }) => [
 *             { background: '#e5e5e5' },
 *             theme.applyStyles('dark', {
 *               background: '#1c1c1c',
 *               color: '#fff',
 *             }),
 *           ],
 *         },
 *       }
 *     }
 *   })
 *```
 */
function applyStyles(key, styles) {
  // @ts-expect-error this is 'any' type
  const theme = this;
  if (theme.vars) {
    if (!theme.colorSchemes?.[key] || typeof theme.getColorSchemeSelector !== 'function') {
      return {};
    }
    // If CssVarsProvider is used as a provider, returns '*:where({selector}) &'
    let selector = theme.getColorSchemeSelector(key);
    if (selector === '&') {
      return styles;
    }
    if (selector.includes('data-') || selector.includes('.')) {
      // '*' is required as a workaround for Emotion issue (https://github.com/emotion-js/emotion/issues/2836)
      selector = `*:where(${selector.replace(/\s*&$/, '')}) &`;
    }
    return {
      [selector]: styles
    };
  }
  if (theme.palette.mode === key) {
    return styles;
  }
  return {};
}

function createTheme(options = {}, ...args) {
  const {
    breakpoints: breakpointsInput = {},
    palette: paletteInput = {},
    spacing: spacingInput,
    shape: shapeInput = {},
    ...other
  } = options;
  const breakpoints = createBreakpoints(breakpointsInput);
  const spacing = createSpacing(spacingInput);
  let muiTheme = deepmerge({
    breakpoints,
    direction: 'ltr',
    components: {},
    // Inject component definitions.
    palette: {
      mode: 'light',
      ...paletteInput
    },
    spacing,
    shape: {
      ...shape$1,
      ...shapeInput
    }
  }, other);
  muiTheme = cssContainerQueries(muiTheme);
  muiTheme.applyStyles = applyStyles;
  muiTheme = args.reduce((acc, argument) => deepmerge(acc, argument), muiTheme);
  muiTheme.unstable_sxConfig = {
    ...defaultSxConfig$1,
    ...other?.unstable_sxConfig
  };
  muiTheme.unstable_sx = function sx(props) {
    return styleFunctionSx$1({
      sx: props,
      theme: this
    });
  };
  return muiTheme;
}

/* eslint-disable no-underscore-dangle */
/* eslint-disable no-labels */
/* eslint-disable no-lone-blocks */

createTheme();

// Update /system/styled/#api in case if this changes
function shouldForwardProp(prop) {
  return prop !== 'ownerState' && prop !== 'theme' && prop !== 'sx' && prop !== 'as';
}

const _excluded$z = ["children", "className", "label", "notched", "shrink"];
const OutlineRoot = styles.styled('fieldset', {
  name: 'MuiPickersOutlinedInput',
  slot: 'NotchedOutline'
})(({
  theme
}) => {
  const borderColor = theme.palette.mode === 'light' ? 'rgba(0, 0, 0, 0.23)' : 'rgba(255, 255, 255, 0.23)';
  return {
    textAlign: 'left',
    position: 'absolute',
    bottom: 0,
    right: 0,
    top: -5,
    left: 0,
    margin: 0,
    padding: '0 8px',
    pointerEvents: 'none',
    borderRadius: 'inherit',
    borderStyle: 'solid',
    borderWidth: 1,
    overflow: 'hidden',
    minWidth: '0%',
    borderColor: theme.vars ? `rgba(${theme.vars.palette.common.onBackgroundChannel} / 0.23)` : borderColor
  };
});
const OutlineLabel = styles.styled('span')(({
  theme
}) => ({
  fontFamily: theme.typography.fontFamily,
  fontSize: 'inherit'
}));
const OutlineLegend = styles.styled('legend', {
  shouldForwardProp: prop => shouldForwardProp(prop) && prop !== 'notched'
})(({
  theme
}) => ({
  float: 'unset',
  // Fix conflict with bootstrap
  width: 'auto',
  // Fix conflict with bootstrap
  overflow: 'hidden',
  // Fix Horizontal scroll when label too long
  variants: [{
    props: {
      inputHasLabel: false
    },
    style: {
      padding: 0,
      lineHeight: '11px',
      // sync with `height` in `legend` styles
      transition: theme.transitions.create('width', {
        duration: 150,
        easing: theme.transitions.easing.easeOut
      })
    }
  }, {
    props: {
      inputHasLabel: true
    },
    style: {
      display: 'block',
      // Fix conflict with normalize.css and sanitize.css
      padding: 0,
      height: 11,
      // sync with `lineHeight` in `legend` styles
      fontSize: '0.75em',
      visibility: 'hidden',
      maxWidth: 0.01,
      transition: theme.transitions.create('max-width', {
        duration: 50,
        easing: theme.transitions.easing.easeOut
      }),
      whiteSpace: 'nowrap',
      '& > span': {
        paddingLeft: 5,
        paddingRight: 5,
        display: 'inline-block',
        opacity: 0,
        visibility: 'visible'
      }
    }
  }, {
    props: {
      inputHasLabel: true,
      notched: true
    },
    style: {
      maxWidth: '100%',
      transition: theme.transitions.create('max-width', {
        duration: 100,
        easing: theme.transitions.easing.easeOut,
        delay: 50
      })
    }
  }]
}));

/**
 * @ignore - internal component.
 */
function Outline(props) {
  const {
      className,
      label,
      notched
    } = props,
    other = _objectWithoutPropertiesLoose(props, _excluded$z);
  const ownerState = usePickerTextFieldOwnerState();
  return /*#__PURE__*/jsxRuntime.jsx(OutlineRoot, _extends({
    "aria-hidden": true,
    className: className
  }, other, {
    ownerState: ownerState,
    children: /*#__PURE__*/jsxRuntime.jsx(OutlineLegend, {
      ownerState: ownerState,
      notched: notched,
      children: label ? /*#__PURE__*/jsxRuntime.jsx(OutlineLabel, {
        children: label
      }) :
      /*#__PURE__*/
      // notranslate needed while Google Translate will not fix zero-width space issue
      jsxRuntime.jsx(OutlineLabel, {
        className: "notranslate",
        children: "\u200B"
      })
    })
  }));
}

const _excluded$y = ["label", "autoFocus", "ownerState", "classes", "notched"];
const PickersOutlinedInputRoot = styles.styled(PickersInputBaseRoot, {
  name: 'MuiPickersOutlinedInput',
  slot: 'Root'
})(({
  theme
}) => {
  const borderColor = theme.palette.mode === 'light' ? 'rgba(0, 0, 0, 0.23)' : 'rgba(255, 255, 255, 0.23)';
  return {
    padding: '0 14px',
    borderRadius: (theme.vars || theme).shape.borderRadius,
    [`&:hover .${pickersOutlinedInputClasses.notchedOutline}`]: {
      borderColor: (theme.vars || theme).palette.text.primary
    },
    // Reset on touch devices, it doesn't add specificity
    '@media (hover: none)': {
      [`&:hover .${pickersOutlinedInputClasses.notchedOutline}`]: {
        borderColor: theme.vars ? `rgba(${theme.vars.palette.common.onBackgroundChannel} / 0.23)` : borderColor
      }
    },
    [`&.${pickersOutlinedInputClasses.focused} .${pickersOutlinedInputClasses.notchedOutline}`]: {
      borderStyle: 'solid',
      borderWidth: 2
    },
    [`&.${pickersOutlinedInputClasses.disabled}`]: {
      [`& .${pickersOutlinedInputClasses.notchedOutline}`]: {
        borderColor: (theme.vars || theme).palette.action.disabled
      },
      '*': {
        color: (theme.vars || theme).palette.action.disabled
      }
    },
    [`&.${pickersOutlinedInputClasses.error} .${pickersOutlinedInputClasses.notchedOutline}`]: {
      borderColor: (theme.vars || theme).palette.error.main
    },
    variants: Object.keys((theme.vars ?? theme).palette)
    // @ts-ignore
    .filter(key => (theme.vars ?? theme).palette[key]?.main ?? false).map(color => ({
      props: {
        inputColor: color
      },
      style: {
        [`&.${pickersOutlinedInputClasses.focused}:not(.${pickersOutlinedInputClasses.error}) .${pickersOutlinedInputClasses.notchedOutline}`]: {
          // @ts-ignore
          borderColor: (theme.vars || theme).palette[color].main
        }
      }
    }))
  };
});
const PickersOutlinedInputSectionsContainer = styles.styled(PickersInputBaseSectionsContainer, {
  name: 'MuiPickersOutlinedInput',
  slot: 'SectionsContainer'
})({
  padding: '16.5px 0',
  variants: [{
    props: {
      inputSize: 'small'
    },
    style: {
      padding: '8.5px 0'
    }
  }]
});
const useUtilityClasses$m = classes => {
  const slots = {
    root: ['root'],
    notchedOutline: ['notchedOutline'],
    input: ['input']
  };
  const composedClasses = composeClasses(slots, getPickersOutlinedInputUtilityClass, classes);
  return _extends({}, classes, composedClasses);
};

/**
 * @ignore - internal component.
 */
const PickersOutlinedInput = /*#__PURE__*/React__namespace.forwardRef(function PickersOutlinedInput(inProps, ref) {
  const props = styles.useThemeProps({
    props: inProps,
    name: 'MuiPickersOutlinedInput'
  });
  const {
      label,
      classes: classesProp,
      notched
    } = props,
    other = _objectWithoutPropertiesLoose(props, _excluded$y);
  const muiFormControl = FormControl.useFormControl();
  const classes = useUtilityClasses$m(classesProp);
  return /*#__PURE__*/jsxRuntime.jsx(PickersInputBase, _extends({
    slots: {
      root: PickersOutlinedInputRoot,
      input: PickersOutlinedInputSectionsContainer
    },
    renderSuffix: state => /*#__PURE__*/jsxRuntime.jsx(Outline, {
      shrink: Boolean(notched || state.adornedStart || state.focused || state.filled),
      notched: Boolean(notched || state.adornedStart || state.focused || state.filled),
      className: classes.notchedOutline,
      label: label != null && label !== '' && muiFormControl?.required ? /*#__PURE__*/jsxRuntime.jsxs(React__namespace.Fragment, {
        children: [label, "\u2009", '*']
      }) : label
    })
  }, other, {
    label: label,
    classes: classes,
    ref: ref
  }));
});
if (process.env.NODE_ENV !== "production") PickersOutlinedInput.displayName = "PickersOutlinedInput";
process.env.NODE_ENV !== "production" ? PickersOutlinedInput.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * Is `true` if the current values equals the empty value.
   * For a single item value, it means that `value === null`
   * For a range value, it means that `value === [null, null]`
   */
  areAllSectionsEmpty: PropTypes.bool.isRequired,
  className: PropTypes.string,
  component: PropTypes.elementType,
  /**
   * If true, the whole element is editable.
   * Useful when all the sections are selected.
   */
  contentEditable: PropTypes.bool.isRequired,
  'data-multi-input': PropTypes.string,
  /**
   * The elements to render.
   * Each element contains the prop to edit a section of the value.
   */
  elements: PropTypes.arrayOf(PropTypes.shape({
    after: PropTypes.object.isRequired,
    before: PropTypes.object.isRequired,
    container: PropTypes.object.isRequired,
    content: PropTypes.object.isRequired
  })).isRequired,
  endAdornment: PropTypes.node,
  fullWidth: PropTypes.bool,
  id: PropTypes.string,
  inputProps: PropTypes.object,
  inputRef: refType$1,
  label: PropTypes.node,
  margin: PropTypes.oneOf(['dense', 'none', 'normal']),
  name: PropTypes.string,
  notched: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
  onInput: PropTypes.func.isRequired,
  onKeyDown: PropTypes.func.isRequired,
  onPaste: PropTypes.func.isRequired,
  ownerState: PropTypes /* @typescript-to-proptypes-ignore */.any,
  readOnly: PropTypes.bool,
  renderSuffix: PropTypes.func,
  sectionListRef: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({
    current: PropTypes.shape({
      getRoot: PropTypes.func.isRequired,
      getSectionContainer: PropTypes.func.isRequired,
      getSectionContent: PropTypes.func.isRequired,
      getSectionIndexFromDOMElement: PropTypes.func.isRequired
    })
  })]),
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: PropTypes.object,
  /**
   * The components used for each slot inside.
   *
   * @default {}
   */
  slots: PropTypes.object,
  startAdornment: PropTypes.node,
  style: PropTypes.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])), PropTypes.func, PropTypes.object]),
  value: PropTypes.string.isRequired
} : void 0;
PickersOutlinedInput.muiName = 'Input';

function getPickersFilledInputUtilityClass(slot) {
  return generateUtilityClass('MuiPickersFilledInput', slot);
}
const pickersFilledInputClasses = _extends({}, pickersInputBaseClasses, generateUtilityClasses('MuiPickersFilledInput', ['root', 'underline', 'input']));

const _excluded$x = ["label", "autoFocus", "disableUnderline", "hiddenLabel", "classes"];
const PickersFilledInputRoot = styles.styled(PickersInputBaseRoot, {
  name: 'MuiPickersFilledInput',
  slot: 'Root',
  shouldForwardProp: prop => shouldForwardProp(prop) && prop !== 'disableUnderline'
})(({
  theme
}) => {
  const light = theme.palette.mode === 'light';
  const bottomLineColor = light ? 'rgba(0, 0, 0, 0.42)' : 'rgba(255, 255, 255, 0.7)';
  const backgroundColor = light ? 'rgba(0, 0, 0, 0.06)' : 'rgba(255, 255, 255, 0.09)';
  const hoverBackground = light ? 'rgba(0, 0, 0, 0.09)' : 'rgba(255, 255, 255, 0.13)';
  const disabledBackground = light ? 'rgba(0, 0, 0, 0.12)' : 'rgba(255, 255, 255, 0.12)';
  return {
    backgroundColor: theme.vars ? theme.vars.palette.FilledInput.bg : backgroundColor,
    borderTopLeftRadius: (theme.vars || theme).shape.borderRadius,
    borderTopRightRadius: (theme.vars || theme).shape.borderRadius,
    transition: theme.transitions.create('background-color', {
      duration: theme.transitions.duration.shorter,
      easing: theme.transitions.easing.easeOut
    }),
    '&:hover': {
      backgroundColor: theme.vars ? theme.vars.palette.FilledInput.hoverBg : hoverBackground,
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        backgroundColor: theme.vars ? theme.vars.palette.FilledInput.bg : backgroundColor
      }
    },
    [`&.${pickersFilledInputClasses.focused}`]: {
      backgroundColor: theme.vars ? theme.vars.palette.FilledInput.bg : backgroundColor
    },
    [`&.${pickersFilledInputClasses.disabled}`]: {
      backgroundColor: theme.vars ? theme.vars.palette.FilledInput.disabledBg : disabledBackground
    },
    variants: [...Object.keys((theme.vars ?? theme).palette)
    // @ts-ignore
    .filter(key => (theme.vars ?? theme).palette[key].main).map(color => ({
      props: {
        inputColor: color,
        disableUnderline: false
      },
      style: {
        '&::after': {
          // @ts-ignore
          borderBottom: `2px solid ${(theme.vars || theme).palette[color]?.main}`
        }
      }
    })), {
      props: {
        disableUnderline: false
      },
      style: {
        '&::after': {
          left: 0,
          bottom: 0,
          // Doing the other way around crash on IE11 "''" https://github.com/cssinjs/jss/issues/242
          content: '""',
          position: 'absolute',
          right: 0,
          transform: 'scaleX(0)',
          transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shorter,
            easing: theme.transitions.easing.easeOut
          }),
          pointerEvents: 'none' // Transparent to the hover style.
        },
        [`&.${pickersFilledInputClasses.focused}:after`]: {
          // translateX(0) is a workaround for Safari transform scale bug
          // See https://github.com/mui/material-ui/issues/31766
          transform: 'scaleX(1) translateX(0)'
        },
        [`&.${pickersFilledInputClasses.error}`]: {
          '&:before, &:after': {
            borderBottomColor: (theme.vars || theme).palette.error.main
          }
        },
        '&::before': {
          borderBottom: `1px solid ${theme.vars ? `rgba(${theme.vars.palette.common.onBackgroundChannel} / ${theme.vars.opacity.inputUnderline})` : bottomLineColor}`,
          left: 0,
          bottom: 0,
          // Doing the other way around crash on IE11 "''" https://github.com/cssinjs/jss/issues/242
          content: '"\\00a0"',
          position: 'absolute',
          right: 0,
          transition: theme.transitions.create('border-bottom-color', {
            duration: theme.transitions.duration.shorter
          }),
          pointerEvents: 'none' // Transparent to the hover style.
        },
        [`&:hover:not(.${pickersFilledInputClasses.disabled}, .${pickersFilledInputClasses.error}):before`]: {
          borderBottom: `1px solid ${(theme.vars || theme).palette.text.primary}`
        },
        [`&.${pickersFilledInputClasses.disabled}:before`]: {
          borderBottomStyle: 'dotted'
        }
      }
    }, {
      props: {
        hasStartAdornment: true
      },
      style: {
        paddingLeft: 12
      }
    }, {
      props: {
        hasEndAdornment: true
      },
      style: {
        paddingRight: 12
      }
    }]
  };
});
const PickersFilledSectionsContainer = styles.styled(PickersInputBaseSectionsContainer, {
  name: 'MuiPickersFilledInput',
  slot: 'sectionsContainer',
  shouldForwardProp: prop => shouldForwardProp(prop) && prop !== 'hiddenLabel'
})({
  paddingTop: 25,
  paddingRight: 12,
  paddingBottom: 8,
  paddingLeft: 12,
  variants: [{
    props: {
      inputSize: 'small'
    },
    style: {
      paddingTop: 21,
      paddingBottom: 4
    }
  }, {
    props: {
      hasStartAdornment: true
    },
    style: {
      paddingLeft: 0
    }
  }, {
    props: {
      hasEndAdornment: true
    },
    style: {
      paddingRight: 0
    }
  }, {
    props: {
      hiddenLabel: true
    },
    style: {
      paddingTop: 16,
      paddingBottom: 17
    }
  }, {
    props: {
      hiddenLabel: true,
      inputSize: 'small'
    },
    style: {
      paddingTop: 8,
      paddingBottom: 9
    }
  }]
});
const useUtilityClasses$l = (classes, ownerState) => {
  const {
    inputHasUnderline
  } = ownerState;
  const slots = {
    root: ['root', inputHasUnderline && 'underline'],
    input: ['input']
  };
  const composedClasses = composeClasses(slots, getPickersFilledInputUtilityClass, classes);
  return _extends({}, classes, composedClasses);
};

/**
 * @ignore - internal component.
 */
const PickersFilledInput = /*#__PURE__*/React__namespace.forwardRef(function PickersFilledInput(inProps, ref) {
  const props = styles.useThemeProps({
    props: inProps,
    name: 'MuiPickersFilledInput'
  });
  const {
      label,
      disableUnderline = false,
      hiddenLabel = false,
      classes: classesProp
    } = props,
    other = _objectWithoutPropertiesLoose(props, _excluded$x);
  const pickerTextFieldOwnerState = usePickerTextFieldOwnerState();
  const ownerState = _extends({}, pickerTextFieldOwnerState, {
    inputHasUnderline: !disableUnderline
  });
  const classes = useUtilityClasses$l(classesProp, ownerState);
  return /*#__PURE__*/jsxRuntime.jsx(PickersInputBase, _extends({
    slots: {
      root: PickersFilledInputRoot,
      input: PickersFilledSectionsContainer
    },
    slotProps: {
      root: {
        disableUnderline
      },
      input: {
        hiddenLabel
      }
    }
  }, other, {
    label: label,
    classes: classes,
    ref: ref,
    ownerState: ownerState
  }));
});
if (process.env.NODE_ENV !== "production") PickersFilledInput.displayName = "PickersFilledInput";
process.env.NODE_ENV !== "production" ? PickersFilledInput.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * Is `true` if the current values equals the empty value.
   * For a single item value, it means that `value === null`
   * For a range value, it means that `value === [null, null]`
   */
  areAllSectionsEmpty: PropTypes.bool.isRequired,
  className: PropTypes.string,
  component: PropTypes.elementType,
  /**
   * If true, the whole element is editable.
   * Useful when all the sections are selected.
   */
  contentEditable: PropTypes.bool.isRequired,
  'data-multi-input': PropTypes.string,
  disableUnderline: PropTypes.bool,
  /**
   * The elements to render.
   * Each element contains the prop to edit a section of the value.
   */
  elements: PropTypes.arrayOf(PropTypes.shape({
    after: PropTypes.object.isRequired,
    before: PropTypes.object.isRequired,
    container: PropTypes.object.isRequired,
    content: PropTypes.object.isRequired
  })).isRequired,
  endAdornment: PropTypes.node,
  fullWidth: PropTypes.bool,
  hiddenLabel: PropTypes.bool,
  id: PropTypes.string,
  inputProps: PropTypes.object,
  inputRef: refType$1,
  label: PropTypes.node,
  margin: PropTypes.oneOf(['dense', 'none', 'normal']),
  name: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
  onInput: PropTypes.func.isRequired,
  onKeyDown: PropTypes.func.isRequired,
  onPaste: PropTypes.func.isRequired,
  ownerState: PropTypes /* @typescript-to-proptypes-ignore */.any,
  readOnly: PropTypes.bool,
  renderSuffix: PropTypes.func,
  sectionListRef: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({
    current: PropTypes.shape({
      getRoot: PropTypes.func.isRequired,
      getSectionContainer: PropTypes.func.isRequired,
      getSectionContent: PropTypes.func.isRequired,
      getSectionIndexFromDOMElement: PropTypes.func.isRequired
    })
  })]),
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: PropTypes.object,
  /**
   * The components used for each slot inside.
   *
   * @default {}
   */
  slots: PropTypes.object,
  startAdornment: PropTypes.node,
  style: PropTypes.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])), PropTypes.func, PropTypes.object]),
  value: PropTypes.string.isRequired
} : void 0;
PickersFilledInput.muiName = 'Input';

function getPickersInputUtilityClass(slot) {
  return generateUtilityClass('MuiPickersFilledInput', slot);
}
const pickersInputClasses = _extends({}, pickersInputBaseClasses, generateUtilityClasses('MuiPickersInput', ['root', 'underline', 'input']));

const _excluded$w = ["label", "autoFocus", "disableUnderline", "ownerState", "classes"];
const PickersInputRoot = styles.styled(PickersInputBaseRoot, {
  name: 'MuiPickersInput',
  slot: 'Root',
  shouldForwardProp: prop => shouldForwardProp(prop) && prop !== 'disableUnderline'
})(({
  theme
}) => {
  const light = theme.palette.mode === 'light';
  let bottomLineColor = light ? 'rgba(0, 0, 0, 0.42)' : 'rgba(255, 255, 255, 0.7)';
  if (theme.vars) {
    bottomLineColor = `rgba(${theme.vars.palette.common.onBackgroundChannel} / ${theme.vars.opacity.inputUnderline})`;
  }
  return {
    'label + &': {
      marginTop: 16
    },
    variants: [...Object.keys((theme.vars ?? theme).palette)
    // @ts-ignore
    .filter(key => (theme.vars ?? theme).palette[key].main).map(color => ({
      props: {
        inputColor: color,
        inputHasUnderline: true
      },
      style: {
        '&::after': {
          // @ts-ignore
          borderBottom: `2px solid ${(theme.vars || theme).palette[color].main}`
        }
      }
    })), {
      props: {
        inputHasUnderline: true
      },
      style: {
        '&::after': {
          background: 'red',
          left: 0,
          bottom: 0,
          // Doing the other way around crash on IE11 "''" https://github.com/cssinjs/jss/issues/242
          content: '""',
          position: 'absolute',
          right: 0,
          transform: 'scaleX(0)',
          transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shorter,
            easing: theme.transitions.easing.easeOut
          }),
          pointerEvents: 'none' // Transparent to the hover style.
        },
        [`&.${pickersInputClasses.focused}:after`]: {
          // translateX(0) is a workaround for Safari transform scale bug
          // See https://github.com/mui/material-ui/issues/31766
          transform: 'scaleX(1) translateX(0)'
        },
        [`&.${pickersInputClasses.error}`]: {
          '&:before, &:after': {
            borderBottomColor: (theme.vars || theme).palette.error.main
          }
        },
        '&::before': {
          borderBottom: `1px solid ${bottomLineColor}`,
          left: 0,
          bottom: 0,
          // Doing the other way around crash on IE11 "''" https://github.com/cssinjs/jss/issues/242
          content: '"\\00a0"',
          position: 'absolute',
          right: 0,
          transition: theme.transitions.create('border-bottom-color', {
            duration: theme.transitions.duration.shorter
          }),
          pointerEvents: 'none' // Transparent to the hover style.
        },
        [`&:hover:not(.${pickersInputClasses.disabled}, .${pickersInputClasses.error}):before`]: {
          borderBottom: `2px solid ${(theme.vars || theme).palette.text.primary}`,
          // Reset on touch devices, it doesn't add specificity
          '@media (hover: none)': {
            borderBottom: `1px solid ${bottomLineColor}`
          }
        },
        [`&.${pickersInputClasses.disabled}:before`]: {
          borderBottomStyle: 'dotted'
        }
      }
    }]
  };
});
const useUtilityClasses$k = (classes, ownerState) => {
  const {
    inputHasUnderline
  } = ownerState;
  const slots = {
    root: ['root', !inputHasUnderline && 'underline'],
    input: ['input']
  };
  const composedClasses = composeClasses(slots, getPickersInputUtilityClass, classes);
  return _extends({}, classes, composedClasses);
};

/**
 * @ignore - internal component.
 */
const PickersInput = /*#__PURE__*/React__namespace.forwardRef(function PickersInput(inProps, ref) {
  const props = styles.useThemeProps({
    props: inProps,
    name: 'MuiPickersInput'
  });
  const {
      label,
      disableUnderline = false,
      classes: classesProp
    } = props,
    other = _objectWithoutPropertiesLoose(props, _excluded$w);
  const pickerTextFieldOwnerState = usePickerTextFieldOwnerState();
  const ownerState = _extends({}, pickerTextFieldOwnerState, {
    inputHasUnderline: !disableUnderline
  });
  const classes = useUtilityClasses$k(classesProp, ownerState);
  return /*#__PURE__*/jsxRuntime.jsx(PickersInputBase, _extends({
    slots: {
      root: PickersInputRoot
    },
    slotProps: {
      root: {
        disableUnderline
      }
    }
  }, other, {
    ownerState: ownerState,
    label: label,
    classes: classes,
    ref: ref
  }));
});
if (process.env.NODE_ENV !== "production") PickersInput.displayName = "PickersInput";
process.env.NODE_ENV !== "production" ? PickersInput.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * Is `true` if the current values equals the empty value.
   * For a single item value, it means that `value === null`
   * For a range value, it means that `value === [null, null]`
   */
  areAllSectionsEmpty: PropTypes.bool.isRequired,
  className: PropTypes.string,
  component: PropTypes.elementType,
  /**
   * If true, the whole element is editable.
   * Useful when all the sections are selected.
   */
  contentEditable: PropTypes.bool.isRequired,
  'data-multi-input': PropTypes.string,
  disableUnderline: PropTypes.bool,
  /**
   * The elements to render.
   * Each element contains the prop to edit a section of the value.
   */
  elements: PropTypes.arrayOf(PropTypes.shape({
    after: PropTypes.object.isRequired,
    before: PropTypes.object.isRequired,
    container: PropTypes.object.isRequired,
    content: PropTypes.object.isRequired
  })).isRequired,
  endAdornment: PropTypes.node,
  fullWidth: PropTypes.bool,
  id: PropTypes.string,
  inputProps: PropTypes.object,
  inputRef: refType$1,
  label: PropTypes.node,
  margin: PropTypes.oneOf(['dense', 'none', 'normal']),
  name: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
  onInput: PropTypes.func.isRequired,
  onKeyDown: PropTypes.func.isRequired,
  onPaste: PropTypes.func.isRequired,
  ownerState: PropTypes /* @typescript-to-proptypes-ignore */.any,
  readOnly: PropTypes.bool,
  renderSuffix: PropTypes.func,
  sectionListRef: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({
    current: PropTypes.shape({
      getRoot: PropTypes.func.isRequired,
      getSectionContainer: PropTypes.func.isRequired,
      getSectionContent: PropTypes.func.isRequired,
      getSectionIndexFromDOMElement: PropTypes.func.isRequired
    })
  })]),
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: PropTypes.object,
  /**
   * The components used for each slot inside.
   *
   * @default {}
   */
  slots: PropTypes.object,
  startAdornment: PropTypes.node,
  style: PropTypes.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])), PropTypes.func, PropTypes.object]),
  value: PropTypes.string.isRequired
} : void 0;
PickersInput.muiName = 'Input';

const _excluded$v = ["onFocus", "onBlur", "className", "classes", "color", "disabled", "error", "variant", "required", "hiddenLabel", "InputProps", "inputProps", "inputRef", "sectionListRef", "elements", "areAllSectionsEmpty", "onClick", "onKeyDown", "onKeyUp", "onPaste", "onInput", "endAdornment", "startAdornment", "tabIndex", "contentEditable", "focused", "value", "onChange", "fullWidth", "id", "name", "helperText", "FormHelperTextProps", "label", "InputLabelProps", "data-active-range-position"];
const VARIANT_COMPONENT = {
  standard: PickersInput,
  filled: PickersFilledInput,
  outlined: PickersOutlinedInput
};
const PickersTextFieldRoot = styles.styled(FormControl, {
  name: 'MuiPickersTextField',
  slot: 'Root'
})({
  maxWidth: '100%'
});
const useUtilityClasses$j = (classes, ownerState) => {
  const {
    isFieldFocused,
    isFieldDisabled,
    isFieldRequired
  } = ownerState;
  const slots = {
    root: ['root', isFieldFocused && !isFieldDisabled && 'focused', isFieldDisabled && 'disabled', isFieldRequired && 'required']
  };
  return composeClasses(slots, getPickersTextFieldUtilityClass, classes);
};
const PickersTextField = /*#__PURE__*/React__namespace.forwardRef(function PickersTextField(inProps, ref) {
  const props = styles.useThemeProps({
    props: inProps,
    name: 'MuiPickersTextField'
  });
  const {
      // Props used by FormControl
      onFocus,
      onBlur,
      className,
      classes: classesProp,
      color = 'primary',
      disabled = false,
      error = false,
      variant = 'outlined',
      required = false,
      hiddenLabel = false,
      // Props used by PickersInput
      InputProps,
      inputProps,
      inputRef,
      sectionListRef,
      elements,
      areAllSectionsEmpty,
      onClick,
      onKeyDown,
      onKeyUp,
      onPaste,
      onInput,
      endAdornment,
      startAdornment,
      tabIndex,
      contentEditable,
      focused,
      value,
      onChange,
      fullWidth,
      id: idProp,
      name,
      // Props used by FormHelperText
      helperText,
      FormHelperTextProps,
      // Props used by InputLabel
      label,
      InputLabelProps,
      // @ts-ignore
      'data-active-range-position': dataActiveRangePosition
    } = props,
    other = _objectWithoutPropertiesLoose(props, _excluded$v);
  const rootRef = React__namespace.useRef(null);
  const handleRootRef = useForkRef(ref, rootRef);
  const id = useId(idProp);
  const helperTextId = helperText && id ? `${id}-helper-text` : undefined;
  const inputLabelId = label && id ? `${id}-label` : undefined;
  const fieldOwnerState = useFieldOwnerState({
    disabled: props.disabled,
    required: props.required,
    readOnly: InputProps?.readOnly
  });
  const ownerState = React__namespace.useMemo(() => _extends({}, fieldOwnerState, {
    isFieldValueEmpty: areAllSectionsEmpty,
    isFieldFocused: focused ?? false,
    hasFieldError: error ?? false,
    inputSize: props.size ?? 'medium',
    inputColor: color ?? 'primary',
    isInputInFullWidth: fullWidth ?? false,
    hasStartAdornment: Boolean(startAdornment ?? InputProps?.startAdornment),
    hasEndAdornment: Boolean(endAdornment ?? InputProps?.endAdornment),
    inputHasLabel: !!label
  }), [fieldOwnerState, areAllSectionsEmpty, focused, error, props.size, color, fullWidth, startAdornment, endAdornment, InputProps?.startAdornment, InputProps?.endAdornment, label]);
  const classes = useUtilityClasses$j(classesProp, ownerState);
  const PickersInputComponent = VARIANT_COMPONENT[variant];
  const inputAdditionalProps = {};
  if (variant === 'outlined') {
    if (InputLabelProps && typeof InputLabelProps.shrink !== 'undefined') {
      inputAdditionalProps.notched = InputLabelProps.shrink;
    }
    inputAdditionalProps.label = label;
  } else if (variant === 'filled') {
    inputAdditionalProps.hiddenLabel = hiddenLabel;
  }
  return /*#__PURE__*/jsxRuntime.jsx(PickerTextFieldOwnerStateContext.Provider, {
    value: ownerState,
    children: /*#__PURE__*/jsxRuntime.jsxs(PickersTextFieldRoot, _extends({
      className: clsx(classes.root, className),
      ref: handleRootRef,
      focused: focused,
      disabled: disabled,
      variant: variant,
      error: error,
      color: color,
      fullWidth: fullWidth,
      required: required,
      ownerState: ownerState
    }, other, {
      children: [label != null && label !== '' && /*#__PURE__*/jsxRuntime.jsx(InputLabel, _extends({
        htmlFor: id,
        id: inputLabelId
      }, InputLabelProps, {
        children: label
      })), /*#__PURE__*/jsxRuntime.jsx(PickersInputComponent, _extends({
        elements: elements,
        areAllSectionsEmpty: areAllSectionsEmpty,
        onClick: onClick,
        onKeyDown: onKeyDown,
        onKeyUp: onKeyUp,
        onInput: onInput,
        onPaste: onPaste,
        onFocus: onFocus,
        onBlur: onBlur,
        endAdornment: endAdornment,
        startAdornment: startAdornment,
        tabIndex: tabIndex,
        contentEditable: contentEditable,
        value: value,
        onChange: onChange,
        id: id,
        fullWidth: fullWidth,
        inputProps: inputProps,
        inputRef: inputRef,
        sectionListRef: sectionListRef,
        label: label,
        name: name,
        role: "group",
        "aria-labelledby": inputLabelId,
        "aria-describedby": helperTextId,
        "aria-live": helperTextId ? 'polite' : undefined,
        "data-active-range-position": dataActiveRangePosition
      }, inputAdditionalProps, InputProps)), helperText && /*#__PURE__*/jsxRuntime.jsx(FormHelperText, _extends({
        id: helperTextId
      }, FormHelperTextProps, {
        children: helperText
      }))]
    }))
  });
});
if (process.env.NODE_ENV !== "production") PickersTextField.displayName = "PickersTextField";
process.env.NODE_ENV !== "production" ? PickersTextField.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * Is `true` if the current values equals the empty value.
   * For a single item value, it means that `value === null`
   * For a range value, it means that `value === [null, null]`
   */
  areAllSectionsEmpty: PropTypes.bool.isRequired,
  className: PropTypes.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: PropTypes.oneOf(['error', 'info', 'primary', 'secondary', 'success', 'warning']),
  component: PropTypes.elementType,
  /**
   * If true, the whole element is editable.
   * Useful when all the sections are selected.
   */
  contentEditable: PropTypes.bool.isRequired,
  disabled: PropTypes.bool.isRequired,
  /**
   * The elements to render.
   * Each element contains the prop to edit a section of the value.
   */
  elements: PropTypes.arrayOf(PropTypes.shape({
    after: PropTypes.object.isRequired,
    before: PropTypes.object.isRequired,
    container: PropTypes.object.isRequired,
    content: PropTypes.object.isRequired
  })).isRequired,
  endAdornment: PropTypes.node,
  error: PropTypes.bool.isRequired,
  /**
   * If `true`, the component is displayed in focused state.
   */
  focused: PropTypes.bool,
  FormHelperTextProps: PropTypes.object,
  fullWidth: PropTypes.bool,
  /**
   * The helper text content.
   */
  helperText: PropTypes.node,
  /**
   * If `true`, the label is hidden.
   * This is used to increase density for a `FilledInput`.
   * Be sure to add `aria-label` to the `input` element.
   * @default false
   */
  hiddenLabel: PropTypes.bool,
  id: PropTypes.string,
  InputLabelProps: PropTypes.object,
  inputProps: PropTypes.object,
  /**
   * Props applied to the Input element.
   * It will be a [`FilledInput`](/material-ui/api/filled-input/),
   * [`OutlinedInput`](/material-ui/api/outlined-input/) or [`Input`](/material-ui/api/input/)
   * component depending on the `variant` prop value.
   */
  InputProps: PropTypes.object,
  inputRef: refType$1,
  label: PropTypes.node,
  /**
   * If `dense` or `normal`, will adjust vertical spacing of this and contained components.
   * @default 'none'
   */
  margin: PropTypes.oneOf(['dense', 'none', 'normal']),
  name: PropTypes.string,
  onBlur: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
  onFocus: PropTypes.func.isRequired,
  onInput: PropTypes.func.isRequired,
  onKeyDown: PropTypes.func.isRequired,
  onPaste: PropTypes.func.isRequired,
  readOnly: PropTypes.bool,
  /**
   * If `true`, the label will indicate that the `input` is required.
   * @default false
   */
  required: PropTypes.bool,
  sectionListRef: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({
    current: PropTypes.shape({
      getRoot: PropTypes.func.isRequired,
      getSectionContainer: PropTypes.func.isRequired,
      getSectionContent: PropTypes.func.isRequired,
      getSectionIndexFromDOMElement: PropTypes.func.isRequired
    })
  })]),
  /**
   * The size of the component.
   * @default 'medium'
   */
  size: PropTypes.oneOf(['medium', 'small']),
  startAdornment: PropTypes.node,
  style: PropTypes.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])), PropTypes.func, PropTypes.object]),
  value: PropTypes.string.isRequired,
  /**
   * The variant to use.
   * @default 'outlined'
   */
  variant: PropTypes.oneOf(['filled', 'outlined', 'standard'])
} : void 0;

const _excluded$u = ["enableAccessibleFieldDOMStructure"],
  _excluded2$5 = ["InputProps", "readOnly", "onClear", "clearable", "clearButtonPosition", "openPickerButtonPosition", "openPickerAriaLabel"],
  _excluded3 = ["onPaste", "onKeyDown", "inputMode", "readOnly", "InputProps", "inputProps", "inputRef", "onClear", "clearable", "clearButtonPosition", "openPickerButtonPosition", "openPickerAriaLabel"],
  _excluded4 = ["ownerState"],
  _excluded5 = ["ownerState"],
  _excluded6 = ["ownerState"],
  _excluded7 = ["ownerState"],
  _excluded8 = ["InputProps", "inputProps"];
const cleanFieldResponse = _ref => {
  let {
      enableAccessibleFieldDOMStructure
    } = _ref,
    fieldResponse = _objectWithoutPropertiesLoose(_ref, _excluded$u);
  if (enableAccessibleFieldDOMStructure) {
    const {
        InputProps,
        readOnly,
        onClear,
        clearable,
        clearButtonPosition,
        openPickerButtonPosition,
        openPickerAriaLabel
      } = fieldResponse,
      other = _objectWithoutPropertiesLoose(fieldResponse, _excluded2$5);
    return {
      clearable,
      onClear,
      clearButtonPosition,
      openPickerButtonPosition,
      openPickerAriaLabel,
      textFieldProps: _extends({}, other, {
        InputProps: _extends({}, InputProps ?? {}, {
          readOnly
        })
      })
    };
  }
  const {
      onPaste,
      onKeyDown,
      inputMode,
      readOnly,
      InputProps,
      inputProps,
      inputRef,
      onClear,
      clearable,
      clearButtonPosition,
      openPickerButtonPosition,
      openPickerAriaLabel
    } = fieldResponse,
    other = _objectWithoutPropertiesLoose(fieldResponse, _excluded3);
  return {
    clearable,
    onClear,
    clearButtonPosition,
    openPickerButtonPosition,
    openPickerAriaLabel,
    textFieldProps: _extends({}, other, {
      InputProps: _extends({}, InputProps ?? {}, {
        readOnly
      }),
      inputProps: _extends({}, inputProps ?? {}, {
        inputMode,
        onPaste,
        onKeyDown,
        ref: inputRef
      })
    })
  };
};
const PickerFieldUIContext = /*#__PURE__*/React__namespace.createContext({
  slots: {},
  slotProps: {},
  inputRef: undefined
});

/**
 * Adds the button to open the Picker and the button to clear the value of the field.
 * @ignore - internal component.
 */
if (process.env.NODE_ENV !== "production") PickerFieldUIContext.displayName = "PickerFieldUIContext";
function PickerFieldUI(props) {
  const {
    slots,
    slotProps,
    fieldResponse,
    defaultOpenPickerIcon
  } = props;
  const translations = usePickerTranslations();
  const pickerContext = useNullablePickerContext();
  const pickerFieldUIContext = React__namespace.useContext(PickerFieldUIContext);
  const {
    textFieldProps,
    onClear,
    clearable,
    openPickerAriaLabel,
    clearButtonPosition: clearButtonPositionProp = 'end',
    openPickerButtonPosition: openPickerButtonPositionProp = 'end'
  } = cleanFieldResponse(fieldResponse);
  const ownerState = useFieldOwnerState(textFieldProps);
  const handleClickOpeningButton = useEventCallback(event => {
    event.preventDefault();
    pickerContext?.setOpen(prev => !prev);
  });
  const triggerStatus = pickerContext ? pickerContext.triggerStatus : 'hidden';
  const clearButtonPosition = clearable ? clearButtonPositionProp : null;
  const openPickerButtonPosition = triggerStatus !== 'hidden' ? openPickerButtonPositionProp : null;
  const TextField = slots?.textField ?? pickerFieldUIContext.slots.textField ?? (fieldResponse.enableAccessibleFieldDOMStructure === false ? MuiTextField : PickersTextField);
  const InputAdornment = slots?.inputAdornment ?? pickerFieldUIContext.slots.inputAdornment ?? MuiInputAdornment;
  const _useSlotProps = useSlotProps({
      elementType: InputAdornment,
      externalSlotProps: mergeSlotProps(pickerFieldUIContext.slotProps.inputAdornment, slotProps?.inputAdornment),
      additionalProps: {
        position: 'start'
      },
      ownerState: _extends({}, ownerState, {
        position: 'start'
      })
    }),
    startInputAdornmentProps = _objectWithoutPropertiesLoose(_useSlotProps, _excluded4);
  const _useSlotProps2 = useSlotProps({
      elementType: InputAdornment,
      externalSlotProps: slotProps?.inputAdornment,
      additionalProps: {
        position: 'end'
      },
      ownerState: _extends({}, ownerState, {
        position: 'end'
      })
    }),
    endInputAdornmentProps = _objectWithoutPropertiesLoose(_useSlotProps2, _excluded5);
  const OpenPickerButton = pickerFieldUIContext.slots.openPickerButton ?? IconButton;
  // We don't want to forward the `ownerState` to the `<IconButton />` component, see mui/material-ui#34056
  const _useSlotProps3 = useSlotProps({
      elementType: OpenPickerButton,
      externalSlotProps: pickerFieldUIContext.slotProps.openPickerButton,
      additionalProps: {
        disabled: triggerStatus === 'disabled',
        onClick: handleClickOpeningButton,
        'aria-label': openPickerAriaLabel,
        edge:
        // open button is always rendered at the edge
        textFieldProps.variant !== 'standard' ? openPickerButtonPosition : false
      },
      ownerState
    }),
    openPickerButtonProps = _objectWithoutPropertiesLoose(_useSlotProps3, _excluded6);
  const OpenPickerIcon = pickerFieldUIContext.slots.openPickerIcon ?? defaultOpenPickerIcon;
  const openPickerIconProps = useSlotProps({
    elementType: OpenPickerIcon,
    externalSlotProps: pickerFieldUIContext.slotProps.openPickerIcon,
    ownerState
  });
  const ClearButton = slots?.clearButton ?? pickerFieldUIContext.slots.clearButton ?? IconButton;
  // We don't want to forward the `ownerState` to the `<IconButton />` component, see mui/material-ui#34056
  const _useSlotProps4 = useSlotProps({
      elementType: ClearButton,
      externalSlotProps: mergeSlotProps(pickerFieldUIContext.slotProps.clearButton, slotProps?.clearButton),
      className: 'clearButton',
      additionalProps: {
        title: translations.fieldClearLabel,
        tabIndex: -1,
        onClick: onClear,
        disabled: fieldResponse.disabled || fieldResponse.readOnly,
        edge:
        // clear button can only be at the edge if it's position differs from the open button
        textFieldProps.variant !== 'standard' && clearButtonPosition !== openPickerButtonPosition ? clearButtonPosition : false
      },
      ownerState
    }),
    clearButtonProps = _objectWithoutPropertiesLoose(_useSlotProps4, _excluded7);
  const ClearIcon$1 = slots?.clearIcon ?? pickerFieldUIContext.slots.clearIcon ?? ClearIcon;
  const clearIconProps = useSlotProps({
    elementType: ClearIcon$1,
    externalSlotProps: mergeSlotProps(pickerFieldUIContext.slotProps.clearIcon, slotProps?.clearIcon),
    additionalProps: {
      fontSize: 'small'
    },
    ownerState
  });
  textFieldProps.ref = useForkRef(textFieldProps.ref, pickerContext?.rootRef);
  if (!textFieldProps.InputProps) {
    textFieldProps.InputProps = {};
  }
  if (pickerContext) {
    textFieldProps.InputProps.ref = pickerContext.triggerRef;
  }
  if (!textFieldProps.InputProps?.startAdornment && (clearButtonPosition === 'start' || openPickerButtonPosition === 'start')) {
    textFieldProps.InputProps.startAdornment = /*#__PURE__*/jsxRuntime.jsxs(InputAdornment, _extends({}, startInputAdornmentProps, {
      children: [openPickerButtonPosition === 'start' && /*#__PURE__*/jsxRuntime.jsx(OpenPickerButton, _extends({}, openPickerButtonProps, {
        children: /*#__PURE__*/jsxRuntime.jsx(OpenPickerIcon, _extends({}, openPickerIconProps))
      })), clearButtonPosition === 'start' && /*#__PURE__*/jsxRuntime.jsx(ClearButton, _extends({}, clearButtonProps, {
        children: /*#__PURE__*/jsxRuntime.jsx(ClearIcon$1, _extends({}, clearIconProps))
      }))]
    }));
  }
  if (!textFieldProps.InputProps?.endAdornment && (clearButtonPosition === 'end' || openPickerButtonPosition === 'end')) {
    textFieldProps.InputProps.endAdornment = /*#__PURE__*/jsxRuntime.jsxs(InputAdornment, _extends({}, endInputAdornmentProps, {
      children: [clearButtonPosition === 'end' && /*#__PURE__*/jsxRuntime.jsx(ClearButton, _extends({}, clearButtonProps, {
        children: /*#__PURE__*/jsxRuntime.jsx(ClearIcon$1, _extends({}, clearIconProps))
      })), openPickerButtonPosition === 'end' && /*#__PURE__*/jsxRuntime.jsx(OpenPickerButton, _extends({}, openPickerButtonProps, {
        children: /*#__PURE__*/jsxRuntime.jsx(OpenPickerIcon, _extends({}, openPickerIconProps))
      }))]
    }));
  }
  if (clearButtonPosition != null) {
    textFieldProps.sx = [{
      '& .clearButton': {
        opacity: 1
      },
      '@media (pointer: fine)': {
        '& .clearButton': {
          opacity: 0
        },
        '&:hover, &:focus-within': {
          '.clearButton': {
            opacity: 1
          }
        }
      }
    }, ...(Array.isArray(textFieldProps.sx) ? textFieldProps.sx : [textFieldProps.sx])];
  }
  return /*#__PURE__*/jsxRuntime.jsx(TextField, _extends({}, textFieldProps));
}
function mergeSlotProps(slotPropsA, slotPropsB) {
  if (!slotPropsA) {
    return slotPropsB;
  }
  if (!slotPropsB) {
    return slotPropsA;
  }
  return ownerState => {
    return _extends({}, resolveComponentProps(slotPropsB, ownerState), resolveComponentProps(slotPropsA, ownerState));
  };
}

/**
 * The `textField` slot props cannot be handled inside `PickerFieldUI` because it would be a breaking change to not pass the enriched props to `useField`.
 * Once the non-accessible DOM structure will be removed, we will be able to remove the `textField` slot and clean this logic.
 */
function useFieldTextFieldProps(parameters) {
  const {
    ref,
    externalForwardedProps,
    slotProps
  } = parameters;
  const pickerFieldUIContext = React__namespace.useContext(PickerFieldUIContext);
  const pickerContext = useNullablePickerContext();
  const ownerState = useFieldOwnerState(externalForwardedProps);
  const {
      InputProps,
      inputProps
    } = externalForwardedProps,
    otherExternalForwardedProps = _objectWithoutPropertiesLoose(externalForwardedProps, _excluded8);
  const textFieldProps = useSlotProps({
    elementType: PickersTextField,
    externalSlotProps: mergeSlotProps(pickerFieldUIContext.slotProps.textField, slotProps?.textField),
    externalForwardedProps: otherExternalForwardedProps,
    additionalProps: {
      ref,
      sx: pickerContext?.rootSx,
      label: pickerContext?.label,
      name: pickerContext?.name,
      className: pickerContext?.rootClassName,
      inputRef: pickerFieldUIContext.inputRef
    },
    ownerState
  });

  // TODO: Remove when mui/material-ui#35088 will be merged
  textFieldProps.inputProps = _extends({}, inputProps, textFieldProps.inputProps);
  textFieldProps.InputProps = _extends({}, InputProps, textFieldProps.InputProps);
  return textFieldProps;
}
function PickerFieldUIContextProvider(props) {
  const {
    slots = {},
    slotProps = {},
    inputRef,
    children
  } = props;
  const contextValue = React__namespace.useMemo(() => ({
    inputRef,
    slots: {
      openPickerButton: slots.openPickerButton,
      openPickerIcon: slots.openPickerIcon,
      textField: slots.textField,
      inputAdornment: slots.inputAdornment,
      clearIcon: slots.clearIcon,
      clearButton: slots.clearButton
    },
    slotProps: {
      openPickerButton: slotProps.openPickerButton,
      openPickerIcon: slotProps.openPickerIcon,
      textField: slotProps.textField,
      inputAdornment: slotProps.inputAdornment,
      clearIcon: slotProps.clearIcon,
      clearButton: slotProps.clearButton
    }
  }), [inputRef, slots.openPickerButton, slots.openPickerIcon, slots.textField, slots.inputAdornment, slots.clearIcon, slots.clearButton, slotProps.openPickerButton, slotProps.openPickerIcon, slotProps.textField, slotProps.inputAdornment, slotProps.clearIcon, slotProps.clearButton]);
  return /*#__PURE__*/jsxRuntime.jsx(PickerFieldUIContext.Provider, {
    value: contextValue,
    children: children
  });
}

const _excluded$t = ["slots", "slotProps"];
/**
 * Demos:
 *
 * - [DateField](http://mui.com/x/react-date-pickers/date-field/)
 * - [Fields](https://mui.com/x/react-date-pickers/fields/)
 *
 * API:
 *
 * - [DateField API](https://mui.com/x/api/date-pickers/date-field/)
 */
const DateField = /*#__PURE__*/React__namespace.forwardRef(function DateField(inProps, inRef) {
  const themeProps = styles.useThemeProps({
    props: inProps,
    name: 'MuiDateField'
  });
  const {
      slots,
      slotProps
    } = themeProps,
    other = _objectWithoutPropertiesLoose(themeProps, _excluded$t);
  const textFieldProps = useFieldTextFieldProps({
    slotProps,
    ref: inRef,
    externalForwardedProps: other
  });
  const fieldResponse = useDateField(textFieldProps);
  return /*#__PURE__*/jsxRuntime.jsx(PickerFieldUI, {
    slots: slots,
    slotProps: slotProps,
    fieldResponse: fieldResponse,
    defaultOpenPickerIcon: CalendarIcon
  });
});
if (process.env.NODE_ENV !== "production") DateField.displayName = "DateField";
process.env.NODE_ENV !== "production" ? DateField.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * If `true`, the `input` element is focused during the first mount.
   * @default false
   */
  autoFocus: PropTypes.bool,
  className: PropTypes.string,
  /**
   * If `true`, a clear button will be shown in the field allowing value clearing.
   * @default false
   */
  clearable: PropTypes.bool,
  /**
   * The position at which the clear button is placed.
   * If the field is not clearable, the button is not rendered.
   * @default 'end'
   */
  clearButtonPosition: PropTypes.oneOf(['end', 'start']),
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: PropTypes.oneOf(['error', 'info', 'primary', 'secondary', 'success', 'warning']),
  component: PropTypes.elementType,
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: PropTypes.object,
  /**
   * If `true`, the component is disabled.
   * When disabled, the value cannot be changed and no interaction is possible.
   * @default false
   */
  disabled: PropTypes.bool,
  /**
   * If `true`, disable values after the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disableFuture: PropTypes.bool,
  /**
   * If `true`, disable values before the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disablePast: PropTypes.bool,
  /**
   * @default true
   */
  enableAccessibleFieldDOMStructure: PropTypes.bool,
  /**
   * If `true`, the component is displayed in focused state.
   */
  focused: PropTypes.bool,
  /**
   * Format of the date when rendered in the input(s).
   */
  format: PropTypes.string,
  /**
   * Density of the format when rendered in the input.
   * Setting `formatDensity` to `"spacious"` will add a space before and after each `/`, `-` and `.` character.
   * @default "dense"
   */
  formatDensity: PropTypes.oneOf(['dense', 'spacious']),
  /**
   * Props applied to the [`FormHelperText`](https://mui.com/material-ui/api/form-helper-text/) element.
   * @deprecated Use `slotProps.formHelperText` instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  FormHelperTextProps: PropTypes.object,
  /**
   * If `true`, the input will take up the full width of its container.
   * @default false
   */
  fullWidth: PropTypes.bool,
  /**
   * The helper text content.
   */
  helperText: PropTypes.node,
  /**
   * If `true`, the label is hidden.
   * This is used to increase density for a `FilledInput`.
   * Be sure to add `aria-label` to the `input` element.
   * @default false
   */
  hiddenLabel: PropTypes.bool,
  /**
   * The id of the `input` element.
   * Use this prop to make `label` and `helperText` accessible for screen readers.
   */
  id: PropTypes.string,
  /**
   * Props applied to the [`InputLabel`](https://mui.com/material-ui/api/input-label/) element.
   * Pointer events like `onClick` are enabled if and only if `shrink` is `true`.
   * @deprecated Use `slotProps.inputLabel` instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  InputLabelProps: PropTypes.object,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input#attributes) applied to the `input` element.
   * @deprecated Use `slotProps.htmlInput` instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  inputProps: PropTypes.object,
  /**
   * Props applied to the Input element.
   * It will be a [`FilledInput`](https://mui.com/material-ui/api/filled-input/),
   * [`OutlinedInput`](https://mui.com/material-ui/api/outlined-input/) or [`Input`](https://mui.com/material-ui/api/input/)
   * component depending on the `variant` prop value.
   * @deprecated Use `slotProps.input` instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  InputProps: PropTypes.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: refType$1,
  /**
   * The label content.
   */
  label: PropTypes.node,
  /**
   * If `dense` or `normal`, will adjust vertical spacing of this and contained components.
   * @default 'none'
   */
  margin: PropTypes.oneOf(['dense', 'none', 'normal']),
  /**
   * Maximal selectable date.
   * @default 2099-12-31
   */
  maxDate: PropTypes.object,
  /**
   * Minimal selectable date.
   * @default 1900-01-01
   */
  minDate: PropTypes.object,
  /**
   * Name attribute of the `input` element.
   */
  name: PropTypes.string,
  onBlur: PropTypes.func,
  /**
   * Callback fired when the value changes.
   * @template TValue The value type. It will be the same type as `value` or `null`. It can be in `[start, end]` format in case of range value.
   * @template TError The validation error type. It will be either `string` or a `null`. It can be in `[start, end]` format in case of range value.
   * @param {TValue} value The new value.
   * @param {FieldChangeHandlerContext<TError>} context The context containing the validation result of the current value.
   */
  onChange: PropTypes.func,
  /**
   * Callback fired when the clear button is clicked.
   */
  onClear: PropTypes.func,
  /**
   * Callback fired when the error associated with the current value changes.
   * When a validation error is detected, the `error` parameter contains a non-null value.
   * This can be used to render an appropriate form error.
   * @template TError The validation error type. It will be either `string` or a `null`. It can be in `[start, end]` format in case of range value.
   * @template TValue The value type. It will be the same type as `value` or `null`. It can be in `[start, end]` format in case of range value.
   * @param {TError} error The reason why the current value is not valid.
   * @param {TValue} value The value associated with the error.
   */
  onError: PropTypes.func,
  onFocus: PropTypes.func,
  /**
   * Callback fired when the selected sections change.
   * @param {FieldSelectedSections} newValue The new selected sections.
   */
  onSelectedSectionsChange: PropTypes.func,
  /**
   * The position at which the opening button is placed.
   * If there is no Picker to open, the button is not rendered
   * @default 'end'
   */
  openPickerButtonPosition: PropTypes.oneOf(['end', 'start']),
  /**
   * If `true`, the component is read-only.
   * When read-only, the value cannot be changed but the user can interact with the interface.
   * @default false
   */
  readOnly: PropTypes.bool,
  /**
   * The date used to generate a part of the new value that is not present in the format when both `value` and `defaultValue` are empty.
   * For example, on time fields it will be used to determine the date to set.
   * @default The closest valid date using the validation props, except callbacks such as `shouldDisableDate`. Value is rounded to the most granular section used.
   */
  referenceDate: PropTypes.object,
  /**
   * If `true`, the label is displayed as required and the `input` element is required.
   * @default false
   */
  required: PropTypes.bool,
  /**
   * The currently selected sections.
   * This prop accepts four formats:
   * 1. If a number is provided, the section at this index will be selected.
   * 2. If a string of type `FieldSectionType` is provided, the first section with that name will be selected.
   * 3. If `"all"` is provided, all the sections will be selected.
   * 4. If `null` is provided, no section will be selected.
   * If not provided, the selected sections will be handled internally.
   */
  selectedSections: PropTypes.oneOfType([PropTypes.oneOf(['all', 'day', 'empty', 'hours', 'meridiem', 'minutes', 'month', 'seconds', 'weekDay', 'year']), PropTypes.number]),
  /**
   * Disable specific date.
   *
   * Warning: This function can be called multiple times (for example when rendering date calendar, checking if focus can be moved to a certain date, etc.). Expensive computations can impact performance.
   *
   * @param {PickerValidDate} day The date to test.
   * @returns {boolean} If `true` the date will be disabled.
   */
  shouldDisableDate: PropTypes.func,
  /**
   * Disable specific month.
   * @param {PickerValidDate} month The month to test.
   * @returns {boolean} If `true`, the month will be disabled.
   */
  shouldDisableMonth: PropTypes.func,
  /**
   * Disable specific year.
   * @param {PickerValidDate} year The year to test.
   * @returns {boolean} If `true`, the year will be disabled.
   */
  shouldDisableYear: PropTypes.func,
  /**
   * If `true`, the format will respect the leading zeroes (for example on dayjs, the format `M/D/YYYY` will render `8/16/2018`)
   * If `false`, the format will always add leading zeroes (for example on dayjs, the format `M/D/YYYY` will render `08/16/2018`)
   *
   * Warning n°1: Luxon is not able to respect the leading zeroes when using macro tokens (for example "DD"), so `shouldRespectLeadingZeros={true}` might lead to inconsistencies when using `AdapterLuxon`.
   *
   * Warning n°2: When `shouldRespectLeadingZeros={true}`, the field will add an invisible character on the sections containing a single digit to make sure `onChange` is fired.
   * If you need to get the clean value from the input, you can remove this character using `input.value.replace(/\u200e/g, '')`.
   *
   * Warning n°3: When used in strict mode, dayjs and moment require to respect the leading zeros.
   * This mean that when using `shouldRespectLeadingZeros={false}`, if you retrieve the value directly from the input (not listening to `onChange`) and your format contains tokens without leading zeros, the value will not be parsed by your library.
   *
   * @default false
   */
  shouldRespectLeadingZeros: PropTypes.bool,
  /**
   * The size of the component.
   * @default 'medium'
   */
  size: PropTypes.oneOf(['medium', 'small']),
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: PropTypes.object,
  /**
   * Overridable component slots.
   * @default {}
   */
  slots: PropTypes.object,
  style: PropTypes.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])), PropTypes.func, PropTypes.object]),
  /**
   * Choose which timezone to use for the value.
   * Example: "default", "system", "UTC", "America/New_York".
   * If you pass values from other timezones to some props, they will be converted to this timezone before being used.
   * @see See the {@link https://mui.com/x/react-date-pickers/timezone/ timezones documentation} for more details.
   * @default The timezone of the `value` or `defaultValue` prop is defined, 'default' otherwise.
   */
  timezone: PropTypes.string,
  /**
   * The ref object used to imperatively interact with the field.
   */
  unstableFieldRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  /**
   * The selected value.
   * Used when the component is controlled.
   */
  value: PropTypes.object,
  /**
   * The variant to use.
   * @default 'outlined'
   */
  variant: PropTypes.oneOf(['filled', 'outlined', 'standard'])
} : void 0;

const useTimeField = props => {
  const manager = useTimeManager(props);
  return useField({
    manager,
    props
  });
};

const _excluded$s = ["slots", "slotProps", "InputProps", "inputProps"];
/**
 * Demos:
 *
 * - [TimeField](http://mui.com/x/react-date-pickers/time-field/)
 * - [Fields](https://mui.com/x/react-date-pickers/fields/)
 *
 * API:
 *
 * - [TimeField API](https://mui.com/x/api/date-pickers/time-field/)
 */
const TimeField = /*#__PURE__*/React__namespace.forwardRef(function TimeField(inProps, inRef) {
  const themeProps = styles.useThemeProps({
    props: inProps,
    name: 'MuiTimeField'
  });
  const {
      slots,
      slotProps
    } = themeProps,
    other = _objectWithoutPropertiesLoose(themeProps, _excluded$s);
  const textFieldProps = useFieldTextFieldProps({
    slotProps,
    ref: inRef,
    externalForwardedProps: other
  });
  const fieldResponse = useTimeField(textFieldProps);
  return /*#__PURE__*/jsxRuntime.jsx(PickerFieldUI, {
    slots: slots,
    slotProps: slotProps,
    fieldResponse: fieldResponse,
    defaultOpenPickerIcon: ClockIcon
  });
});
if (process.env.NODE_ENV !== "production") TimeField.displayName = "TimeField";
process.env.NODE_ENV !== "production" ? TimeField.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * 12h/24h view for hour selection clock.
   * @default adapter.is12HourCycleInCurrentLocale()
   */
  ampm: PropTypes.bool,
  /**
   * If `true`, the `input` element is focused during the first mount.
   * @default false
   */
  autoFocus: PropTypes.bool,
  className: PropTypes.string,
  /**
   * If `true`, a clear button will be shown in the field allowing value clearing.
   * @default false
   */
  clearable: PropTypes.bool,
  /**
   * The position at which the clear button is placed.
   * If the field is not clearable, the button is not rendered.
   * @default 'end'
   */
  clearButtonPosition: PropTypes.oneOf(['end', 'start']),
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: PropTypes.oneOf(['error', 'info', 'primary', 'secondary', 'success', 'warning']),
  component: PropTypes.elementType,
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: PropTypes.object,
  /**
   * If `true`, the component is disabled.
   * When disabled, the value cannot be changed and no interaction is possible.
   * @default false
   */
  disabled: PropTypes.bool,
  /**
   * If `true`, disable values after the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disableFuture: PropTypes.bool,
  /**
   * Do not ignore date part when validating min/max time.
   * @default false
   */
  disableIgnoringDatePartForTimeValidation: PropTypes.bool,
  /**
   * If `true`, disable values before the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disablePast: PropTypes.bool,
  /**
   * @default true
   */
  enableAccessibleFieldDOMStructure: PropTypes.bool,
  /**
   * If `true`, the component is displayed in focused state.
   */
  focused: PropTypes.bool,
  /**
   * Format of the date when rendered in the input(s).
   */
  format: PropTypes.string,
  /**
   * Density of the format when rendered in the input.
   * Setting `formatDensity` to `"spacious"` will add a space before and after each `/`, `-` and `.` character.
   * @default "dense"
   */
  formatDensity: PropTypes.oneOf(['dense', 'spacious']),
  /**
   * Props applied to the [`FormHelperText`](https://mui.com/material-ui/api/form-helper-text/) element.
   * @deprecated Use `slotProps.formHelperText` instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  FormHelperTextProps: PropTypes.object,
  /**
   * If `true`, the input will take up the full width of its container.
   * @default false
   */
  fullWidth: PropTypes.bool,
  /**
   * The helper text content.
   */
  helperText: PropTypes.node,
  /**
   * If `true`, the label is hidden.
   * This is used to increase density for a `FilledInput`.
   * Be sure to add `aria-label` to the `input` element.
   * @default false
   */
  hiddenLabel: PropTypes.bool,
  /**
   * The id of the `input` element.
   * Use this prop to make `label` and `helperText` accessible for screen readers.
   */
  id: PropTypes.string,
  /**
   * Props applied to the [`InputLabel`](https://mui.com/material-ui/api/input-label/) element.
   * Pointer events like `onClick` are enabled if and only if `shrink` is `true`.
   * @deprecated Use `slotProps.inputLabel` instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  InputLabelProps: PropTypes.object,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input#attributes) applied to the `input` element.
   * @deprecated Use `slotProps.htmlInput` instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  inputProps: PropTypes.object,
  /**
   * Props applied to the Input element.
   * It will be a [`FilledInput`](https://mui.com/material-ui/api/filled-input/),
   * [`OutlinedInput`](https://mui.com/material-ui/api/outlined-input/) or [`Input`](https://mui.com/material-ui/api/input/)
   * component depending on the `variant` prop value.
   * @deprecated Use `slotProps.input` instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  InputProps: PropTypes.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: refType$1,
  /**
   * The label content.
   */
  label: PropTypes.node,
  /**
   * If `dense` or `normal`, will adjust vertical spacing of this and contained components.
   * @default 'none'
   */
  margin: PropTypes.oneOf(['dense', 'none', 'normal']),
  /**
   * Maximal selectable time.
   * The date part of the object will be ignored unless `props.disableIgnoringDatePartForTimeValidation === true`.
   */
  maxTime: PropTypes.object,
  /**
   * Minimal selectable time.
   * The date part of the object will be ignored unless `props.disableIgnoringDatePartForTimeValidation === true`.
   */
  minTime: PropTypes.object,
  /**
   * Step over minutes.
   * @default 1
   */
  minutesStep: PropTypes.number,
  /**
   * Name attribute of the `input` element.
   */
  name: PropTypes.string,
  onBlur: PropTypes.func,
  /**
   * Callback fired when the value changes.
   * @template TValue The value type. It will be the same type as `value` or `null`. It can be in `[start, end]` format in case of range value.
   * @template TError The validation error type. It will be either `string` or a `null`. It can be in `[start, end]` format in case of range value.
   * @param {TValue} value The new value.
   * @param {FieldChangeHandlerContext<TError>} context The context containing the validation result of the current value.
   */
  onChange: PropTypes.func,
  /**
   * Callback fired when the clear button is clicked.
   */
  onClear: PropTypes.func,
  /**
   * Callback fired when the error associated with the current value changes.
   * When a validation error is detected, the `error` parameter contains a non-null value.
   * This can be used to render an appropriate form error.
   * @template TError The validation error type. It will be either `string` or a `null`. It can be in `[start, end]` format in case of range value.
   * @template TValue The value type. It will be the same type as `value` or `null`. It can be in `[start, end]` format in case of range value.
   * @param {TError} error The reason why the current value is not valid.
   * @param {TValue} value The value associated with the error.
   */
  onError: PropTypes.func,
  onFocus: PropTypes.func,
  /**
   * Callback fired when the selected sections change.
   * @param {FieldSelectedSections} newValue The new selected sections.
   */
  onSelectedSectionsChange: PropTypes.func,
  /**
   * The position at which the opening button is placed.
   * If there is no Picker to open, the button is not rendered
   * @default 'end'
   */
  openPickerButtonPosition: PropTypes.oneOf(['end', 'start']),
  /**
   * If `true`, the component is read-only.
   * When read-only, the value cannot be changed but the user can interact with the interface.
   * @default false
   */
  readOnly: PropTypes.bool,
  /**
   * The date used to generate a part of the new value that is not present in the format when both `value` and `defaultValue` are empty.
   * For example, on time fields it will be used to determine the date to set.
   * @default The closest valid date using the validation props, except callbacks such as `shouldDisableDate`. Value is rounded to the most granular section used.
   */
  referenceDate: PropTypes.object,
  /**
   * If `true`, the label is displayed as required and the `input` element is required.
   * @default false
   */
  required: PropTypes.bool,
  /**
   * The currently selected sections.
   * This prop accepts four formats:
   * 1. If a number is provided, the section at this index will be selected.
   * 2. If a string of type `FieldSectionType` is provided, the first section with that name will be selected.
   * 3. If `"all"` is provided, all the sections will be selected.
   * 4. If `null` is provided, no section will be selected.
   * If not provided, the selected sections will be handled internally.
   */
  selectedSections: PropTypes.oneOfType([PropTypes.oneOf(['all', 'day', 'empty', 'hours', 'meridiem', 'minutes', 'month', 'seconds', 'weekDay', 'year']), PropTypes.number]),
  /**
   * Disable specific time.
   * @param {PickerValidDate} value The value to check.
   * @param {TimeView} view The clock type of the timeValue.
   * @returns {boolean} If `true` the time will be disabled.
   */
  shouldDisableTime: PropTypes.func,
  /**
   * If `true`, the format will respect the leading zeroes (for example on dayjs, the format `M/D/YYYY` will render `8/16/2018`)
   * If `false`, the format will always add leading zeroes (for example on dayjs, the format `M/D/YYYY` will render `08/16/2018`)
   *
   * Warning n°1: Luxon is not able to respect the leading zeroes when using macro tokens (for example "DD"), so `shouldRespectLeadingZeros={true}` might lead to inconsistencies when using `AdapterLuxon`.
   *
   * Warning n°2: When `shouldRespectLeadingZeros={true}`, the field will add an invisible character on the sections containing a single digit to make sure `onChange` is fired.
   * If you need to get the clean value from the input, you can remove this character using `input.value.replace(/\u200e/g, '')`.
   *
   * Warning n°3: When used in strict mode, dayjs and moment require to respect the leading zeros.
   * This mean that when using `shouldRespectLeadingZeros={false}`, if you retrieve the value directly from the input (not listening to `onChange`) and your format contains tokens without leading zeros, the value will not be parsed by your library.
   *
   * @default false
   */
  shouldRespectLeadingZeros: PropTypes.bool,
  /**
   * The size of the component.
   * @default 'medium'
   */
  size: PropTypes.oneOf(['medium', 'small']),
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: PropTypes.object,
  /**
   * Overridable component slots.
   * @default {}
   */
  slots: PropTypes.object,
  style: PropTypes.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])), PropTypes.func, PropTypes.object]),
  /**
   * Choose which timezone to use for the value.
   * Example: "default", "system", "UTC", "America/New_York".
   * If you pass values from other timezones to some props, they will be converted to this timezone before being used.
   * @see See the {@link https://mui.com/x/react-date-pickers/timezone/ timezones documentation} for more details.
   * @default The timezone of the `value` or `defaultValue` prop is defined, 'default' otherwise.
   */
  timezone: PropTypes.string,
  /**
   * The ref object used to imperatively interact with the field.
   */
  unstableFieldRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  /**
   * The selected value.
   * Used when the component is controlled.
   */
  value: PropTypes.object,
  /**
   * The variant to use.
   * @default 'outlined'
   */
  variant: PropTypes.oneOf(['filled', 'outlined', 'standard'])
} : void 0;

const useDateTimeField = props => {
  const manager = useDateTimeManager(props);
  return useField({
    manager,
    props
  });
};

const _excluded$r = ["slots", "slotProps"];
/**
 * Demos:
 *
 * - [DateTimeField](http://mui.com/x/react-date-pickers/date-time-field/)
 * - [Fields](https://mui.com/x/react-date-pickers/fields/)
 *
 * API:
 *
 * - [DateTimeField API](https://mui.com/x/api/date-pickers/date-time-field/)
 */
const DateTimeField = /*#__PURE__*/React__namespace.forwardRef(function DateTimeField(inProps, inRef) {
  const themeProps = styles.useThemeProps({
    props: inProps,
    name: 'MuiDateTimeField'
  });
  const {
      slots,
      slotProps
    } = themeProps,
    other = _objectWithoutPropertiesLoose(themeProps, _excluded$r);
  const textFieldProps = useFieldTextFieldProps({
    slotProps,
    ref: inRef,
    externalForwardedProps: other
  });
  const fieldResponse = useDateTimeField(textFieldProps);
  return /*#__PURE__*/jsxRuntime.jsx(PickerFieldUI, {
    slots: slots,
    slotProps: slotProps,
    fieldResponse: fieldResponse,
    defaultOpenPickerIcon: CalendarIcon
  });
});
if (process.env.NODE_ENV !== "production") DateTimeField.displayName = "DateTimeField";
process.env.NODE_ENV !== "production" ? DateTimeField.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * 12h/24h view for hour selection clock.
   * @default adapter.is12HourCycleInCurrentLocale()
   */
  ampm: PropTypes.bool,
  /**
   * If `true`, the `input` element is focused during the first mount.
   * @default false
   */
  autoFocus: PropTypes.bool,
  className: PropTypes.string,
  /**
   * If `true`, a clear button will be shown in the field allowing value clearing.
   * @default false
   */
  clearable: PropTypes.bool,
  /**
   * The position at which the clear button is placed.
   * If the field is not clearable, the button is not rendered.
   * @default 'end'
   */
  clearButtonPosition: PropTypes.oneOf(['end', 'start']),
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: PropTypes.oneOf(['error', 'info', 'primary', 'secondary', 'success', 'warning']),
  component: PropTypes.elementType,
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: PropTypes.object,
  /**
   * If `true`, the component is disabled.
   * When disabled, the value cannot be changed and no interaction is possible.
   * @default false
   */
  disabled: PropTypes.bool,
  /**
   * If `true`, disable values after the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disableFuture: PropTypes.bool,
  /**
   * Do not ignore date part when validating min/max time.
   * @default false
   */
  disableIgnoringDatePartForTimeValidation: PropTypes.bool,
  /**
   * If `true`, disable values before the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disablePast: PropTypes.bool,
  /**
   * @default true
   */
  enableAccessibleFieldDOMStructure: PropTypes.bool,
  /**
   * If `true`, the component is displayed in focused state.
   */
  focused: PropTypes.bool,
  /**
   * Format of the date when rendered in the input(s).
   */
  format: PropTypes.string,
  /**
   * Density of the format when rendered in the input.
   * Setting `formatDensity` to `"spacious"` will add a space before and after each `/`, `-` and `.` character.
   * @default "dense"
   */
  formatDensity: PropTypes.oneOf(['dense', 'spacious']),
  /**
   * Props applied to the [`FormHelperText`](https://mui.com/material-ui/api/form-helper-text/) element.
   * @deprecated Use `slotProps.formHelperText` instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  FormHelperTextProps: PropTypes.object,
  /**
   * If `true`, the input will take up the full width of its container.
   * @default false
   */
  fullWidth: PropTypes.bool,
  /**
   * The helper text content.
   */
  helperText: PropTypes.node,
  /**
   * If `true`, the label is hidden.
   * This is used to increase density for a `FilledInput`.
   * Be sure to add `aria-label` to the `input` element.
   * @default false
   */
  hiddenLabel: PropTypes.bool,
  /**
   * The id of the `input` element.
   * Use this prop to make `label` and `helperText` accessible for screen readers.
   */
  id: PropTypes.string,
  /**
   * Props applied to the [`InputLabel`](https://mui.com/material-ui/api/input-label/) element.
   * Pointer events like `onClick` are enabled if and only if `shrink` is `true`.
   * @deprecated Use `slotProps.inputLabel` instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  InputLabelProps: PropTypes.object,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input#attributes) applied to the `input` element.
   * @deprecated Use `slotProps.htmlInput` instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  inputProps: PropTypes.object,
  /**
   * Props applied to the Input element.
   * It will be a [`FilledInput`](https://mui.com/material-ui/api/filled-input/),
   * [`OutlinedInput`](https://mui.com/material-ui/api/outlined-input/) or [`Input`](https://mui.com/material-ui/api/input/)
   * component depending on the `variant` prop value.
   * @deprecated Use `slotProps.input` instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  InputProps: PropTypes.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: refType$1,
  /**
   * The label content.
   */
  label: PropTypes.node,
  /**
   * If `dense` or `normal`, will adjust vertical spacing of this and contained components.
   * @default 'none'
   */
  margin: PropTypes.oneOf(['dense', 'none', 'normal']),
  /**
   * Maximal selectable date.
   * @default 2099-12-31
   */
  maxDate: PropTypes.object,
  /**
   * Maximal selectable moment of time with binding to date, to set max time in each day use `maxTime`.
   */
  maxDateTime: PropTypes.object,
  /**
   * Maximal selectable time.
   * The date part of the object will be ignored unless `props.disableIgnoringDatePartForTimeValidation === true`.
   */
  maxTime: PropTypes.object,
  /**
   * Minimal selectable date.
   * @default 1900-01-01
   */
  minDate: PropTypes.object,
  /**
   * Minimal selectable moment of time with binding to date, to set min time in each day use `minTime`.
   */
  minDateTime: PropTypes.object,
  /**
   * Minimal selectable time.
   * The date part of the object will be ignored unless `props.disableIgnoringDatePartForTimeValidation === true`.
   */
  minTime: PropTypes.object,
  /**
   * Step over minutes.
   * @default 1
   */
  minutesStep: PropTypes.number,
  /**
   * Name attribute of the `input` element.
   */
  name: PropTypes.string,
  onBlur: PropTypes.func,
  /**
   * Callback fired when the value changes.
   * @template TValue The value type. It will be the same type as `value` or `null`. It can be in `[start, end]` format in case of range value.
   * @template TError The validation error type. It will be either `string` or a `null`. It can be in `[start, end]` format in case of range value.
   * @param {TValue} value The new value.
   * @param {FieldChangeHandlerContext<TError>} context The context containing the validation result of the current value.
   */
  onChange: PropTypes.func,
  /**
   * Callback fired when the clear button is clicked.
   */
  onClear: PropTypes.func,
  /**
   * Callback fired when the error associated with the current value changes.
   * When a validation error is detected, the `error` parameter contains a non-null value.
   * This can be used to render an appropriate form error.
   * @template TError The validation error type. It will be either `string` or a `null`. It can be in `[start, end]` format in case of range value.
   * @template TValue The value type. It will be the same type as `value` or `null`. It can be in `[start, end]` format in case of range value.
   * @param {TError} error The reason why the current value is not valid.
   * @param {TValue} value The value associated with the error.
   */
  onError: PropTypes.func,
  onFocus: PropTypes.func,
  /**
   * Callback fired when the selected sections change.
   * @param {FieldSelectedSections} newValue The new selected sections.
   */
  onSelectedSectionsChange: PropTypes.func,
  /**
   * The position at which the opening button is placed.
   * If there is no Picker to open, the button is not rendered
   * @default 'end'
   */
  openPickerButtonPosition: PropTypes.oneOf(['end', 'start']),
  /**
   * If `true`, the component is read-only.
   * When read-only, the value cannot be changed but the user can interact with the interface.
   * @default false
   */
  readOnly: PropTypes.bool,
  /**
   * The date used to generate a part of the new value that is not present in the format when both `value` and `defaultValue` are empty.
   * For example, on time fields it will be used to determine the date to set.
   * @default The closest valid date using the validation props, except callbacks such as `shouldDisableDate`. Value is rounded to the most granular section used.
   */
  referenceDate: PropTypes.object,
  /**
   * If `true`, the label is displayed as required and the `input` element is required.
   * @default false
   */
  required: PropTypes.bool,
  /**
   * The currently selected sections.
   * This prop accepts four formats:
   * 1. If a number is provided, the section at this index will be selected.
   * 2. If a string of type `FieldSectionType` is provided, the first section with that name will be selected.
   * 3. If `"all"` is provided, all the sections will be selected.
   * 4. If `null` is provided, no section will be selected.
   * If not provided, the selected sections will be handled internally.
   */
  selectedSections: PropTypes.oneOfType([PropTypes.oneOf(['all', 'day', 'empty', 'hours', 'meridiem', 'minutes', 'month', 'seconds', 'weekDay', 'year']), PropTypes.number]),
  /**
   * Disable specific date.
   *
   * Warning: This function can be called multiple times (for example when rendering date calendar, checking if focus can be moved to a certain date, etc.). Expensive computations can impact performance.
   *
   * @param {PickerValidDate} day The date to test.
   * @returns {boolean} If `true` the date will be disabled.
   */
  shouldDisableDate: PropTypes.func,
  /**
   * Disable specific month.
   * @param {PickerValidDate} month The month to test.
   * @returns {boolean} If `true`, the month will be disabled.
   */
  shouldDisableMonth: PropTypes.func,
  /**
   * Disable specific time.
   * @param {PickerValidDate} value The value to check.
   * @param {TimeView} view The clock type of the timeValue.
   * @returns {boolean} If `true` the time will be disabled.
   */
  shouldDisableTime: PropTypes.func,
  /**
   * Disable specific year.
   * @param {PickerValidDate} year The year to test.
   * @returns {boolean} If `true`, the year will be disabled.
   */
  shouldDisableYear: PropTypes.func,
  /**
   * If `true`, the format will respect the leading zeroes (for example on dayjs, the format `M/D/YYYY` will render `8/16/2018`)
   * If `false`, the format will always add leading zeroes (for example on dayjs, the format `M/D/YYYY` will render `08/16/2018`)
   *
   * Warning n°1: Luxon is not able to respect the leading zeroes when using macro tokens (for example "DD"), so `shouldRespectLeadingZeros={true}` might lead to inconsistencies when using `AdapterLuxon`.
   *
   * Warning n°2: When `shouldRespectLeadingZeros={true}`, the field will add an invisible character on the sections containing a single digit to make sure `onChange` is fired.
   * If you need to get the clean value from the input, you can remove this character using `input.value.replace(/\u200e/g, '')`.
   *
   * Warning n°3: When used in strict mode, dayjs and moment require to respect the leading zeros.
   * This mean that when using `shouldRespectLeadingZeros={false}`, if you retrieve the value directly from the input (not listening to `onChange`) and your format contains tokens without leading zeros, the value will not be parsed by your library.
   *
   * @default false
   */
  shouldRespectLeadingZeros: PropTypes.bool,
  /**
   * The size of the component.
   * @default 'medium'
   */
  size: PropTypes.oneOf(['medium', 'small']),
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: PropTypes.object,
  /**
   * Overridable component slots.
   * @default {}
   */
  slots: PropTypes.object,
  style: PropTypes.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])), PropTypes.func, PropTypes.object]),
  /**
   * Choose which timezone to use for the value.
   * Example: "default", "system", "UTC", "America/New_York".
   * If you pass values from other timezones to some props, they will be converted to this timezone before being used.
   * @see See the {@link https://mui.com/x/react-date-pickers/timezone/ timezones documentation} for more details.
   * @default The timezone of the `value` or `defaultValue` prop is defined, 'default' otherwise.
   */
  timezone: PropTypes.string,
  /**
   * The ref object used to imperatively interact with the field.
   */
  unstableFieldRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  /**
   * The selected value.
   * Used when the component is controlled.
   */
  value: PropTypes.object,
  /**
   * The variant to use.
   * @default 'outlined'
   */
  variant: PropTypes.oneOf(['filled', 'outlined', 'standard'])
} : void 0;

const useIsDateDisabled = ({
  shouldDisableDate,
  shouldDisableMonth,
  shouldDisableYear,
  minDate,
  maxDate,
  disableFuture,
  disablePast,
  timezone
}) => {
  const adapter = usePickerAdapter();
  return React__namespace.useCallback(day => validateDate({
    adapter,
    value: day,
    timezone,
    props: {
      shouldDisableDate,
      shouldDisableMonth,
      shouldDisableYear,
      minDate,
      maxDate,
      disableFuture,
      disablePast
    }
  }) !== null, [adapter, shouldDisableDate, shouldDisableMonth, shouldDisableYear, minDate, maxDate, disableFuture, disablePast, timezone]);
};

const createCalendarStateReducer = (reduceAnimations, adapter) => (state, action) => {
  switch (action.type) {
    case 'setVisibleDate':
      return _extends({}, state, {
        slideDirection: action.direction,
        currentMonth: action.month,
        isMonthSwitchingAnimating: !adapter.isSameMonth(action.month, state.currentMonth) && !reduceAnimations && !action.skipAnimation,
        focusedDay: action.focusedDay
      });
    case 'changeMonthTimezone':
      {
        const newTimezone = action.newTimezone;
        if (adapter.getTimezone(state.currentMonth) === newTimezone) {
          return state;
        }
        let newCurrentMonth = adapter.setTimezone(state.currentMonth, newTimezone);
        if (adapter.getMonth(newCurrentMonth) !== adapter.getMonth(state.currentMonth)) {
          newCurrentMonth = adapter.setMonth(newCurrentMonth, adapter.getMonth(state.currentMonth));
        }
        return _extends({}, state, {
          currentMonth: newCurrentMonth
        });
      }
    case 'finishMonthSwitchingAnimation':
      return _extends({}, state, {
        isMonthSwitchingAnimating: false
      });
    default:
      throw new Error('missing support');
  }
};
const useCalendarState = params => {
  const {
    value,
    referenceDate: referenceDateProp,
    disableFuture,
    disablePast,
    maxDate,
    minDate,
    onMonthChange,
    onYearChange,
    reduceAnimations,
    shouldDisableDate,
    timezone,
    getCurrentMonthFromVisibleDate
  } = params;
  const adapter = usePickerAdapter();
  const reducerFn = React__namespace.useRef(createCalendarStateReducer(Boolean(reduceAnimations), adapter)).current;
  const referenceDate = React__namespace.useMemo(() => {
    return singleItemValueManager.getInitialReferenceValue({
      value,
      adapter,
      timezone,
      props: params,
      referenceDate: referenceDateProp,
      granularity: SECTION_TYPE_GRANULARITY.day
    });
  },
  // We want the `referenceDate` to update on prop and `timezone` change (https://github.com/mui/mui-x/issues/10804)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  [referenceDateProp, timezone]);
  const [calendarState, dispatch] = React__namespace.useReducer(reducerFn, {
    isMonthSwitchingAnimating: false,
    focusedDay: referenceDate,
    currentMonth: adapter.startOfMonth(referenceDate),
    slideDirection: 'left'
  });
  const isDateDisabled = useIsDateDisabled({
    shouldDisableDate,
    minDate,
    maxDate,
    disableFuture,
    disablePast,
    timezone
  });

  // Ensure that `calendarState.currentMonth` timezone is updated when `referenceDate` (or timezone changes)
  // https://github.com/mui/mui-x/issues/10804
  React__namespace.useEffect(() => {
    dispatch({
      type: 'changeMonthTimezone',
      newTimezone: adapter.getTimezone(referenceDate)
    });
  }, [referenceDate, adapter]);
  const setVisibleDate = useEventCallback(({
    target,
    reason
  }) => {
    if (reason === 'cell-interaction' && calendarState.focusedDay != null && adapter.isSameDay(target, calendarState.focusedDay)) {
      return;
    }
    const skipAnimation = reason === 'cell-interaction';
    let month;
    let focusedDay;
    if (reason === 'cell-interaction') {
      month = getCurrentMonthFromVisibleDate(target, calendarState.currentMonth);
      focusedDay = target;
    } else {
      month = adapter.isSameMonth(target, calendarState.currentMonth) ? calendarState.currentMonth : adapter.startOfMonth(target);
      focusedDay = target;

      // If the date is disabled, we try to find a non-disabled date inside the same month.
      if (isDateDisabled(focusedDay)) {
        const startOfMonth = adapter.startOfMonth(target);
        const endOfMonth = adapter.endOfMonth(target);
        focusedDay = findClosestEnabledDate({
          adapter,
          date: focusedDay,
          minDate: adapter.isBefore(minDate, startOfMonth) ? startOfMonth : minDate,
          maxDate: adapter.isAfter(maxDate, endOfMonth) ? endOfMonth : maxDate,
          disablePast,
          disableFuture,
          isDateDisabled,
          timezone
        });
      }
    }
    const hasChangedMonth = !adapter.isSameMonth(calendarState.currentMonth, month);
    const hasChangedYear = !adapter.isSameYear(calendarState.currentMonth, month);
    if (hasChangedMonth) {
      onMonthChange?.(month);
    }
    if (hasChangedYear) {
      onYearChange?.(adapter.startOfYear(month));
    }
    dispatch({
      type: 'setVisibleDate',
      month,
      direction: adapter.isAfterDay(month, calendarState.currentMonth) ? 'left' : 'right',
      focusedDay: calendarState.focusedDay != null && focusedDay != null && adapter.isSameDay(focusedDay, calendarState.focusedDay) ? calendarState.focusedDay : focusedDay,
      skipAnimation
    });
  });
  const onMonthSwitchingAnimationEnd = React__namespace.useCallback(() => {
    dispatch({
      type: 'finishMonthSwitchingAnimation'
    });
  }, []);
  return {
    referenceDate,
    calendarState,
    setVisibleDate,
    isDateDisabled,
    onMonthSwitchingAnimationEnd
  };
};

function _setPrototypeOf(t, e) {
  return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
    return t.__proto__ = e, t;
  }, _setPrototypeOf(t, e);
}

function _inheritsLoose(t, o) {
  t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o);
}

/**
 * Checks if a given element has a CSS class.
 * 
 * @param element the element
 * @param className the CSS class name
 */
function hasClass(element, className) {
  if (element.classList) return !!className && element.classList.contains(className);
  return (" " + (element.className.baseVal || element.className) + " ").indexOf(" " + className + " ") !== -1;
}

/**
 * Adds a CSS class to a given element.
 * 
 * @param element the element
 * @param className the CSS class name
 */

function addClass(element, className) {
  if (element.classList) element.classList.add(className);else if (!hasClass(element, className)) if (typeof element.className === 'string') element.className = element.className + " " + className;else element.setAttribute('class', (element.className && element.className.baseVal || '') + " " + className);
}

function replaceClassName(origClass, classToRemove) {
  return origClass.replace(new RegExp("(^|\\s)" + classToRemove + "(?:\\s|$)", 'g'), '$1').replace(/\s+/g, ' ').replace(/^\s*|\s*$/g, '');
}
/**
 * Removes a CSS class from a given element.
 * 
 * @param element the element
 * @param className the CSS class name
 */


function removeClass$1(element, className) {
  if (element.classList) {
    element.classList.remove(className);
  } else if (typeof element.className === 'string') {
    element.className = replaceClassName(element.className, className);
  } else {
    element.setAttribute('class', replaceClassName(element.className && element.className.baseVal || '', className));
  }
}

var config = {
  disabled: false
};

var timeoutsShape = process.env.NODE_ENV !== 'production' ? PropTypes.oneOfType([PropTypes.number, PropTypes.shape({
  enter: PropTypes.number,
  exit: PropTypes.number,
  appear: PropTypes.number
}).isRequired]) : null;
var classNamesShape = process.env.NODE_ENV !== 'production' ? PropTypes.oneOfType([PropTypes.string, PropTypes.shape({
  enter: PropTypes.string,
  exit: PropTypes.string,
  active: PropTypes.string
}), PropTypes.shape({
  enter: PropTypes.string,
  enterDone: PropTypes.string,
  enterActive: PropTypes.string,
  exit: PropTypes.string,
  exitDone: PropTypes.string,
  exitActive: PropTypes.string
})]) : null;

var TransitionGroupContext = React.createContext(null);

var forceReflow = function forceReflow(node) {
  return node.scrollTop;
};

var UNMOUNTED = 'unmounted';
var EXITED = 'exited';
var ENTERING = 'entering';
var ENTERED = 'entered';
var EXITING = 'exiting';
/**
 * The Transition component lets you describe a transition from one component
 * state to another _over time_ with a simple declarative API. Most commonly
 * it's used to animate the mounting and unmounting of a component, but can also
 * be used to describe in-place transition states as well.
 *
 * ---
 *
 * **Note**: `Transition` is a platform-agnostic base component. If you're using
 * transitions in CSS, you'll probably want to use
 * [`CSSTransition`](https://reactcommunity.org/react-transition-group/css-transition)
 * instead. It inherits all the features of `Transition`, but contains
 * additional features necessary to play nice with CSS transitions (hence the
 * name of the component).
 *
 * ---
 *
 * By default the `Transition` component does not alter the behavior of the
 * component it renders, it only tracks "enter" and "exit" states for the
 * components. It's up to you to give meaning and effect to those states. For
 * example we can add styles to a component when it enters or exits:
 *
 * ```jsx
 * import { Transition } from 'react-transition-group';
 *
 * const duration = 300;
 *
 * const defaultStyle = {
 *   transition: `opacity ${duration}ms ease-in-out`,
 *   opacity: 0,
 * }
 *
 * const transitionStyles = {
 *   entering: { opacity: 1 },
 *   entered:  { opacity: 1 },
 *   exiting:  { opacity: 0 },
 *   exited:  { opacity: 0 },
 * };
 *
 * const Fade = ({ in: inProp }) => (
 *   <Transition in={inProp} timeout={duration}>
 *     {state => (
 *       <div style={{
 *         ...defaultStyle,
 *         ...transitionStyles[state]
 *       }}>
 *         I'm a fade Transition!
 *       </div>
 *     )}
 *   </Transition>
 * );
 * ```
 *
 * There are 4 main states a Transition can be in:
 *  - `'entering'`
 *  - `'entered'`
 *  - `'exiting'`
 *  - `'exited'`
 *
 * Transition state is toggled via the `in` prop. When `true` the component
 * begins the "Enter" stage. During this stage, the component will shift from
 * its current transition state, to `'entering'` for the duration of the
 * transition and then to the `'entered'` stage once it's complete. Let's take
 * the following example (we'll use the
 * [useState](https://reactjs.org/docs/hooks-reference.html#usestate) hook):
 *
 * ```jsx
 * function App() {
 *   const [inProp, setInProp] = useState(false);
 *   return (
 *     <div>
 *       <Transition in={inProp} timeout={500}>
 *         {state => (
 *           // ...
 *         )}
 *       </Transition>
 *       <button onClick={() => setInProp(true)}>
 *         Click to Enter
 *       </button>
 *     </div>
 *   );
 * }
 * ```
 *
 * When the button is clicked the component will shift to the `'entering'` state
 * and stay there for 500ms (the value of `timeout`) before it finally switches
 * to `'entered'`.
 *
 * When `in` is `false` the same thing happens except the state moves from
 * `'exiting'` to `'exited'`.
 */

var Transition = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(Transition, _React$Component);

  function Transition(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;
    var parentGroup = context; // In the context of a TransitionGroup all enters are really appears

    var appear = parentGroup && !parentGroup.isMounting ? props.enter : props.appear;
    var initialStatus;
    _this.appearStatus = null;

    if (props.in) {
      if (appear) {
        initialStatus = EXITED;
        _this.appearStatus = ENTERING;
      } else {
        initialStatus = ENTERED;
      }
    } else {
      if (props.unmountOnExit || props.mountOnEnter) {
        initialStatus = UNMOUNTED;
      } else {
        initialStatus = EXITED;
      }
    }

    _this.state = {
      status: initialStatus
    };
    _this.nextCallback = null;
    return _this;
  }

  Transition.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
    var nextIn = _ref.in;

    if (nextIn && prevState.status === UNMOUNTED) {
      return {
        status: EXITED
      };
    }

    return null;
  } // getSnapshotBeforeUpdate(prevProps) {
  //   let nextStatus = null
  //   if (prevProps !== this.props) {
  //     const { status } = this.state
  //     if (this.props.in) {
  //       if (status !== ENTERING && status !== ENTERED) {
  //         nextStatus = ENTERING
  //       }
  //     } else {
  //       if (status === ENTERING || status === ENTERED) {
  //         nextStatus = EXITING
  //       }
  //     }
  //   }
  //   return { nextStatus }
  // }
  ;

  var _proto = Transition.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.updateStatus(true, this.appearStatus);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var nextStatus = null;

    if (prevProps !== this.props) {
      var status = this.state.status;

      if (this.props.in) {
        if (status !== ENTERING && status !== ENTERED) {
          nextStatus = ENTERING;
        }
      } else {
        if (status === ENTERING || status === ENTERED) {
          nextStatus = EXITING;
        }
      }
    }

    this.updateStatus(false, nextStatus);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.cancelNextCallback();
  };

  _proto.getTimeouts = function getTimeouts() {
    var timeout = this.props.timeout;
    var exit, enter, appear;
    exit = enter = appear = timeout;

    if (timeout != null && typeof timeout !== 'number') {
      exit = timeout.exit;
      enter = timeout.enter; // TODO: remove fallback for next major

      appear = timeout.appear !== undefined ? timeout.appear : enter;
    }

    return {
      exit: exit,
      enter: enter,
      appear: appear
    };
  };

  _proto.updateStatus = function updateStatus(mounting, nextStatus) {
    if (mounting === void 0) {
      mounting = false;
    }

    if (nextStatus !== null) {
      // nextStatus will always be ENTERING or EXITING.
      this.cancelNextCallback();

      if (nextStatus === ENTERING) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var node = this.props.nodeRef ? this.props.nodeRef.current : ReactDOM.findDOMNode(this); // https://github.com/reactjs/react-transition-group/pull/749
          // With unmountOnExit or mountOnEnter, the enter animation should happen at the transition between `exited` and `entering`.
          // To make the animation happen,  we have to separate each rendering and avoid being processed as batched.

          if (node) forceReflow(node);
        }

        this.performEnter(mounting);
      } else {
        this.performExit();
      }
    } else if (this.props.unmountOnExit && this.state.status === EXITED) {
      this.setState({
        status: UNMOUNTED
      });
    }
  };

  _proto.performEnter = function performEnter(mounting) {
    var _this2 = this;

    var enter = this.props.enter;
    var appearing = this.context ? this.context.isMounting : mounting;

    var _ref2 = this.props.nodeRef ? [appearing] : [ReactDOM.findDOMNode(this), appearing],
        maybeNode = _ref2[0],
        maybeAppearing = _ref2[1];

    var timeouts = this.getTimeouts();
    var enterTimeout = appearing ? timeouts.appear : timeouts.enter; // no enter animation skip right to ENTERED
    // if we are mounting and running this it means appear _must_ be set

    if (!mounting && !enter || config.disabled) {
      this.safeSetState({
        status: ENTERED
      }, function () {
        _this2.props.onEntered(maybeNode);
      });
      return;
    }

    this.props.onEnter(maybeNode, maybeAppearing);
    this.safeSetState({
      status: ENTERING
    }, function () {
      _this2.props.onEntering(maybeNode, maybeAppearing);

      _this2.onTransitionEnd(enterTimeout, function () {
        _this2.safeSetState({
          status: ENTERED
        }, function () {
          _this2.props.onEntered(maybeNode, maybeAppearing);
        });
      });
    });
  };

  _proto.performExit = function performExit() {
    var _this3 = this;

    var exit = this.props.exit;
    var timeouts = this.getTimeouts();
    var maybeNode = this.props.nodeRef ? undefined : ReactDOM.findDOMNode(this); // no exit animation skip right to EXITED

    if (!exit || config.disabled) {
      this.safeSetState({
        status: EXITED
      }, function () {
        _this3.props.onExited(maybeNode);
      });
      return;
    }

    this.props.onExit(maybeNode);
    this.safeSetState({
      status: EXITING
    }, function () {
      _this3.props.onExiting(maybeNode);

      _this3.onTransitionEnd(timeouts.exit, function () {
        _this3.safeSetState({
          status: EXITED
        }, function () {
          _this3.props.onExited(maybeNode);
        });
      });
    });
  };

  _proto.cancelNextCallback = function cancelNextCallback() {
    if (this.nextCallback !== null) {
      this.nextCallback.cancel();
      this.nextCallback = null;
    }
  };

  _proto.safeSetState = function safeSetState(nextState, callback) {
    // This shouldn't be necessary, but there are weird race conditions with
    // setState callbacks and unmounting in testing, so always make sure that
    // we can cancel any pending setState callbacks after we unmount.
    callback = this.setNextCallback(callback);
    this.setState(nextState, callback);
  };

  _proto.setNextCallback = function setNextCallback(callback) {
    var _this4 = this;

    var active = true;

    this.nextCallback = function (event) {
      if (active) {
        active = false;
        _this4.nextCallback = null;
        callback(event);
      }
    };

    this.nextCallback.cancel = function () {
      active = false;
    };

    return this.nextCallback;
  };

  _proto.onTransitionEnd = function onTransitionEnd(timeout, handler) {
    this.setNextCallback(handler);
    var node = this.props.nodeRef ? this.props.nodeRef.current : ReactDOM.findDOMNode(this);
    var doesNotHaveTimeoutOrListener = timeout == null && !this.props.addEndListener;

    if (!node || doesNotHaveTimeoutOrListener) {
      setTimeout(this.nextCallback, 0);
      return;
    }

    if (this.props.addEndListener) {
      var _ref3 = this.props.nodeRef ? [this.nextCallback] : [node, this.nextCallback],
          maybeNode = _ref3[0],
          maybeNextCallback = _ref3[1];

      this.props.addEndListener(maybeNode, maybeNextCallback);
    }

    if (timeout != null) {
      setTimeout(this.nextCallback, timeout);
    }
  };

  _proto.render = function render() {
    var status = this.state.status;

    if (status === UNMOUNTED) {
      return null;
    }

    var _this$props = this.props,
        children = _this$props.children;
        _this$props.in;
        _this$props.mountOnEnter;
        _this$props.unmountOnExit;
        _this$props.appear;
        _this$props.enter;
        _this$props.exit;
        _this$props.timeout;
        _this$props.addEndListener;
        _this$props.onEnter;
        _this$props.onEntering;
        _this$props.onEntered;
        _this$props.onExit;
        _this$props.onExiting;
        _this$props.onExited;
        _this$props.nodeRef;
        var childProps = _objectWithoutPropertiesLoose(_this$props, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);

    return (
      /*#__PURE__*/
      // allows for nested Transitions
      React.createElement(TransitionGroupContext.Provider, {
        value: null
      }, typeof children === 'function' ? children(status, childProps) : React.cloneElement(React.Children.only(children), childProps))
    );
  };

  return Transition;
}(React.Component);

Transition.contextType = TransitionGroupContext;
Transition.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * A React reference to DOM element that need to transition:
   * https://stackoverflow.com/a/51127130/4671932
   *
   *   - When `nodeRef` prop is used, `node` is not passed to callback functions
   *      (e.g. `onEnter`) because user already has direct access to the node.
   *   - When changing `key` prop of `Transition` in a `TransitionGroup` a new
   *     `nodeRef` need to be provided to `Transition` with changed `key` prop
   *     (see
   *     [test/CSSTransition-test.js](https://github.com/reactjs/react-transition-group/blob/13435f897b3ab71f6e19d724f145596f5910581c/test/CSSTransition-test.js#L362-L437)).
   */
  nodeRef: PropTypes.shape({
    current: typeof Element === 'undefined' ? PropTypes.any : function (propValue, key, componentName, location, propFullName, secret) {
      var value = propValue[key];
      return PropTypes.instanceOf(value && 'ownerDocument' in value ? value.ownerDocument.defaultView.Element : Element)(propValue, key, componentName, location, propFullName, secret);
    }
  }),

  /**
   * A `function` child can be used instead of a React element. This function is
   * called with the current transition status (`'entering'`, `'entered'`,
   * `'exiting'`, `'exited'`), which can be used to apply context
   * specific props to a component.
   *
   * ```jsx
   * <Transition in={this.state.in} timeout={150}>
   *   {state => (
   *     <MyComponent className={`fade fade-${state}`} />
   *   )}
   * </Transition>
   * ```
   */
  children: PropTypes.oneOfType([PropTypes.func.isRequired, PropTypes.element.isRequired]).isRequired,

  /**
   * Show the component; triggers the enter or exit states
   */
  in: PropTypes.bool,

  /**
   * By default the child component is mounted immediately along with
   * the parent `Transition` component. If you want to "lazy mount" the component on the
   * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
   * mounted, even on "exited", unless you also specify `unmountOnExit`.
   */
  mountOnEnter: PropTypes.bool,

  /**
   * By default the child component stays mounted after it reaches the `'exited'` state.
   * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
   */
  unmountOnExit: PropTypes.bool,

  /**
   * By default the child component does not perform the enter transition when
   * it first mounts, regardless of the value of `in`. If you want this
   * behavior, set both `appear` and `in` to `true`.
   *
   * > **Note**: there are no special appear states like `appearing`/`appeared`, this prop
   * > only adds an additional enter transition. However, in the
   * > `<CSSTransition>` component that first enter transition does result in
   * > additional `.appear-*` classes, that way you can choose to style it
   * > differently.
   */
  appear: PropTypes.bool,

  /**
   * Enable or disable enter transitions.
   */
  enter: PropTypes.bool,

  /**
   * Enable or disable exit transitions.
   */
  exit: PropTypes.bool,

  /**
   * The duration of the transition, in milliseconds.
   * Required unless `addEndListener` is provided.
   *
   * You may specify a single timeout for all transitions:
   *
   * ```jsx
   * timeout={500}
   * ```
   *
   * or individually:
   *
   * ```jsx
   * timeout={{
   *  appear: 500,
   *  enter: 300,
   *  exit: 500,
   * }}
   * ```
   *
   * - `appear` defaults to the value of `enter`
   * - `enter` defaults to `0`
   * - `exit` defaults to `0`
   *
   * @type {number | { enter?: number, exit?: number, appear?: number }}
   */
  timeout: function timeout(props) {
    var pt = timeoutsShape;
    if (!props.addEndListener) pt = pt.isRequired;

    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return pt.apply(void 0, [props].concat(args));
  },

  /**
   * Add a custom transition end trigger. Called with the transitioning
   * DOM node and a `done` callback. Allows for more fine grained transition end
   * logic. Timeouts are still used as a fallback if provided.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * ```jsx
   * addEndListener={(node, done) => {
   *   // use the css transitionend event to mark the finish of a transition
   *   node.addEventListener('transitionend', done, false);
   * }}
   * ```
   */
  addEndListener: PropTypes.func,

  /**
   * Callback fired before the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEnter: PropTypes.func,

  /**
   * Callback fired after the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: PropTypes.func,

  /**
   * Callback fired after the "entered" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEntered: PropTypes.func,

  /**
   * Callback fired before the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExit: PropTypes.func,

  /**
   * Callback fired after the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExiting: PropTypes.func,

  /**
   * Callback fired after the "exited" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExited: PropTypes.func
} : {}; // Name the function so it is clearer in the documentation

function noop() {}

Transition.defaultProps = {
  in: false,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false,
  enter: true,
  exit: true,
  onEnter: noop,
  onEntering: noop,
  onEntered: noop,
  onExit: noop,
  onExiting: noop,
  onExited: noop
};
Transition.UNMOUNTED = UNMOUNTED;
Transition.EXITED = EXITED;
Transition.ENTERING = ENTERING;
Transition.ENTERED = ENTERED;
Transition.EXITING = EXITING;
var Transition$1 = Transition;

var _addClass = function addClass$1(node, classes) {
  return node && classes && classes.split(' ').forEach(function (c) {
    return addClass(node, c);
  });
};

var removeClass = function removeClass(node, classes) {
  return node && classes && classes.split(' ').forEach(function (c) {
    return removeClass$1(node, c);
  });
};
/**
 * A transition component inspired by the excellent
 * [ng-animate](https://docs.angularjs.org/api/ngAnimate) library, you should
 * use it if you're using CSS transitions or animations. It's built upon the
 * [`Transition`](https://reactcommunity.org/react-transition-group/transition)
 * component, so it inherits all of its props.
 *
 * `CSSTransition` applies a pair of class names during the `appear`, `enter`,
 * and `exit` states of the transition. The first class is applied and then a
 * second `*-active` class in order to activate the CSS transition. After the
 * transition, matching `*-done` class names are applied to persist the
 * transition state.
 *
 * ```jsx
 * function App() {
 *   const [inProp, setInProp] = useState(false);
 *   return (
 *     <div>
 *       <CSSTransition in={inProp} timeout={200} classNames="my-node">
 *         <div>
 *           {"I'll receive my-node-* classes"}
 *         </div>
 *       </CSSTransition>
 *       <button type="button" onClick={() => setInProp(true)}>
 *         Click to Enter
 *       </button>
 *     </div>
 *   );
 * }
 * ```
 *
 * When the `in` prop is set to `true`, the child component will first receive
 * the class `example-enter`, then the `example-enter-active` will be added in
 * the next tick. `CSSTransition` [forces a
 * reflow](https://github.com/reactjs/react-transition-group/blob/5007303e729a74be66a21c3e2205e4916821524b/src/CSSTransition.js#L208-L215)
 * between before adding the `example-enter-active`. This is an important trick
 * because it allows us to transition between `example-enter` and
 * `example-enter-active` even though they were added immediately one after
 * another. Most notably, this is what makes it possible for us to animate
 * _appearance_.
 *
 * ```css
 * .my-node-enter {
 *   opacity: 0;
 * }
 * .my-node-enter-active {
 *   opacity: 1;
 *   transition: opacity 200ms;
 * }
 * .my-node-exit {
 *   opacity: 1;
 * }
 * .my-node-exit-active {
 *   opacity: 0;
 *   transition: opacity 200ms;
 * }
 * ```
 *
 * `*-active` classes represent which styles you want to animate **to**, so it's
 * important to add `transition` declaration only to them, otherwise transitions
 * might not behave as intended! This might not be obvious when the transitions
 * are symmetrical, i.e. when `*-enter-active` is the same as `*-exit`, like in
 * the example above (minus `transition`), but it becomes apparent in more
 * complex transitions.
 *
 * **Note**: If you're using the
 * [`appear`](http://reactcommunity.org/react-transition-group/transition#Transition-prop-appear)
 * prop, make sure to define styles for `.appear-*` classes as well.
 */


var CSSTransition = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(CSSTransition, _React$Component);

  function CSSTransition() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.appliedClasses = {
      appear: {},
      enter: {},
      exit: {}
    };

    _this.onEnter = function (maybeNode, maybeAppearing) {
      var _this$resolveArgument = _this.resolveArguments(maybeNode, maybeAppearing),
          node = _this$resolveArgument[0],
          appearing = _this$resolveArgument[1];

      _this.removeClasses(node, 'exit');

      _this.addClass(node, appearing ? 'appear' : 'enter', 'base');

      if (_this.props.onEnter) {
        _this.props.onEnter(maybeNode, maybeAppearing);
      }
    };

    _this.onEntering = function (maybeNode, maybeAppearing) {
      var _this$resolveArgument2 = _this.resolveArguments(maybeNode, maybeAppearing),
          node = _this$resolveArgument2[0],
          appearing = _this$resolveArgument2[1];

      var type = appearing ? 'appear' : 'enter';

      _this.addClass(node, type, 'active');

      if (_this.props.onEntering) {
        _this.props.onEntering(maybeNode, maybeAppearing);
      }
    };

    _this.onEntered = function (maybeNode, maybeAppearing) {
      var _this$resolveArgument3 = _this.resolveArguments(maybeNode, maybeAppearing),
          node = _this$resolveArgument3[0],
          appearing = _this$resolveArgument3[1];

      var type = appearing ? 'appear' : 'enter';

      _this.removeClasses(node, type);

      _this.addClass(node, type, 'done');

      if (_this.props.onEntered) {
        _this.props.onEntered(maybeNode, maybeAppearing);
      }
    };

    _this.onExit = function (maybeNode) {
      var _this$resolveArgument4 = _this.resolveArguments(maybeNode),
          node = _this$resolveArgument4[0];

      _this.removeClasses(node, 'appear');

      _this.removeClasses(node, 'enter');

      _this.addClass(node, 'exit', 'base');

      if (_this.props.onExit) {
        _this.props.onExit(maybeNode);
      }
    };

    _this.onExiting = function (maybeNode) {
      var _this$resolveArgument5 = _this.resolveArguments(maybeNode),
          node = _this$resolveArgument5[0];

      _this.addClass(node, 'exit', 'active');

      if (_this.props.onExiting) {
        _this.props.onExiting(maybeNode);
      }
    };

    _this.onExited = function (maybeNode) {
      var _this$resolveArgument6 = _this.resolveArguments(maybeNode),
          node = _this$resolveArgument6[0];

      _this.removeClasses(node, 'exit');

      _this.addClass(node, 'exit', 'done');

      if (_this.props.onExited) {
        _this.props.onExited(maybeNode);
      }
    };

    _this.resolveArguments = function (maybeNode, maybeAppearing) {
      return _this.props.nodeRef ? [_this.props.nodeRef.current, maybeNode] // here `maybeNode` is actually `appearing`
      : [maybeNode, maybeAppearing];
    };

    _this.getClassNames = function (type) {
      var classNames = _this.props.classNames;
      var isStringClassNames = typeof classNames === 'string';
      var prefix = isStringClassNames && classNames ? classNames + "-" : '';
      var baseClassName = isStringClassNames ? "" + prefix + type : classNames[type];
      var activeClassName = isStringClassNames ? baseClassName + "-active" : classNames[type + "Active"];
      var doneClassName = isStringClassNames ? baseClassName + "-done" : classNames[type + "Done"];
      return {
        baseClassName: baseClassName,
        activeClassName: activeClassName,
        doneClassName: doneClassName
      };
    };

    return _this;
  }

  var _proto = CSSTransition.prototype;

  _proto.addClass = function addClass(node, type, phase) {
    var className = this.getClassNames(type)[phase + "ClassName"];

    var _this$getClassNames = this.getClassNames('enter'),
        doneClassName = _this$getClassNames.doneClassName;

    if (type === 'appear' && phase === 'done' && doneClassName) {
      className += " " + doneClassName;
    } // This is to force a repaint,
    // which is necessary in order to transition styles when adding a class name.


    if (phase === 'active') {
      if (node) forceReflow(node);
    }

    if (className) {
      this.appliedClasses[type][phase] = className;

      _addClass(node, className);
    }
  };

  _proto.removeClasses = function removeClasses(node, type) {
    var _this$appliedClasses$ = this.appliedClasses[type],
        baseClassName = _this$appliedClasses$.base,
        activeClassName = _this$appliedClasses$.active,
        doneClassName = _this$appliedClasses$.done;
    this.appliedClasses[type] = {};

    if (baseClassName) {
      removeClass(node, baseClassName);
    }

    if (activeClassName) {
      removeClass(node, activeClassName);
    }

    if (doneClassName) {
      removeClass(node, doneClassName);
    }
  };

  _proto.render = function render() {
    var _this$props = this.props;
        _this$props.classNames;
        var props = _objectWithoutPropertiesLoose(_this$props, ["classNames"]);

    return /*#__PURE__*/React.createElement(Transition$1, _extends({}, props, {
      onEnter: this.onEnter,
      onEntered: this.onEntered,
      onEntering: this.onEntering,
      onExit: this.onExit,
      onExiting: this.onExiting,
      onExited: this.onExited
    }));
  };

  return CSSTransition;
}(React.Component);

CSSTransition.defaultProps = {
  classNames: ''
};
CSSTransition.propTypes = process.env.NODE_ENV !== "production" ? _extends({}, Transition$1.propTypes, {
  /**
   * The animation classNames applied to the component as it appears, enters,
   * exits or has finished the transition. A single name can be provided, which
   * will be suffixed for each stage, e.g. `classNames="fade"` applies:
   *
   * - `fade-appear`, `fade-appear-active`, `fade-appear-done`
   * - `fade-enter`, `fade-enter-active`, `fade-enter-done`
   * - `fade-exit`, `fade-exit-active`, `fade-exit-done`
   *
   * A few details to note about how these classes are applied:
   *
   * 1. They are _joined_ with the ones that are already defined on the child
   *    component, so if you want to add some base styles, you can use
   *    `className` without worrying that it will be overridden.
   *
   * 2. If the transition component mounts with `in={false}`, no classes are
   *    applied yet. You might be expecting `*-exit-done`, but if you think
   *    about it, a component cannot finish exiting if it hasn't entered yet.
   *
   * 2. `fade-appear-done` and `fade-enter-done` will _both_ be applied. This
   *    allows you to define different behavior for when appearing is done and
   *    when regular entering is done, using selectors like
   *    `.fade-enter-done:not(.fade-appear-done)`. For example, you could apply
   *    an epic entrance animation when element first appears in the DOM using
   *    [Animate.css](https://daneden.github.io/animate.css/). Otherwise you can
   *    simply use `fade-enter-done` for defining both cases.
   *
   * Each individual classNames can also be specified independently like:
   *
   * ```js
   * classNames={{
   *  appear: 'my-appear',
   *  appearActive: 'my-active-appear',
   *  appearDone: 'my-done-appear',
   *  enter: 'my-enter',
   *  enterActive: 'my-active-enter',
   *  enterDone: 'my-done-enter',
   *  exit: 'my-exit',
   *  exitActive: 'my-active-exit',
   *  exitDone: 'my-done-exit',
   * }}
   * ```
   *
   * If you want to set these classes using CSS Modules:
   *
   * ```js
   * import styles from './styles.css';
   * ```
   *
   * you might want to use camelCase in your CSS file, that way could simply
   * spread them instead of listing them one by one:
   *
   * ```js
   * classNames={{ ...styles }}
   * ```
   *
   * @type {string | {
   *  appear?: string,
   *  appearActive?: string,
   *  appearDone?: string,
   *  enter?: string,
   *  enterActive?: string,
   *  enterDone?: string,
   *  exit?: string,
   *  exitActive?: string,
   *  exitDone?: string,
   * }}
   */
  classNames: classNamesShape,

  /**
   * A `<Transition>` callback fired immediately after the 'enter' or 'appear' class is
   * applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEnter: PropTypes.func,

  /**
   * A `<Transition>` callback fired immediately after the 'enter-active' or
   * 'appear-active' class is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: PropTypes.func,

  /**
   * A `<Transition>` callback fired immediately after the 'enter' or
   * 'appear' classes are **removed** and the `done` class is added to the DOM node.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntered: PropTypes.func,

  /**
   * A `<Transition>` callback fired immediately after the 'exit' class is
   * applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement)
   */
  onExit: PropTypes.func,

  /**
   * A `<Transition>` callback fired immediately after the 'exit-active' is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement)
   */
  onExiting: PropTypes.func,

  /**
   * A `<Transition>` callback fired immediately after the 'exit' classes
   * are **removed** and the `exit-done` class is added to the DOM node.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement)
   */
  onExited: PropTypes.func
}) : {};
var CSSTransition$1 = CSSTransition;

function _assertThisInitialized(e) {
  if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}

/**
 * Given `this.props.children`, return an object mapping key to child.
 *
 * @param {*} children `this.props.children`
 * @return {object} Mapping of key to child
 */

function getChildMapping(children, mapFn) {
  var mapper = function mapper(child) {
    return mapFn && React.isValidElement(child) ? mapFn(child) : child;
  };

  var result = Object.create(null);
  if (children) React.Children.map(children, function (c) {
    return c;
  }).forEach(function (child) {
    // run the map function here instead so that the key is the computed one
    result[child.key] = mapper(child);
  });
  return result;
}
/**
 * When you're adding or removing children some may be added or removed in the
 * same render pass. We want to show *both* since we want to simultaneously
 * animate elements in and out. This function takes a previous set of keys
 * and a new set of keys and merges them with its best guess of the correct
 * ordering. In the future we may expose some of the utilities in
 * ReactMultiChild to make this easy, but for now React itself does not
 * directly have this concept of the union of prevChildren and nextChildren
 * so we implement it here.
 *
 * @param {object} prev prev children as returned from
 * `ReactTransitionChildMapping.getChildMapping()`.
 * @param {object} next next children as returned from
 * `ReactTransitionChildMapping.getChildMapping()`.
 * @return {object} a key set that contains all keys in `prev` and all keys
 * in `next` in a reasonable order.
 */

function mergeChildMappings(prev, next) {
  prev = prev || {};
  next = next || {};

  function getValueForKey(key) {
    return key in next ? next[key] : prev[key];
  } // For each key of `next`, the list of keys to insert before that key in
  // the combined list


  var nextKeysPending = Object.create(null);
  var pendingKeys = [];

  for (var prevKey in prev) {
    if (prevKey in next) {
      if (pendingKeys.length) {
        nextKeysPending[prevKey] = pendingKeys;
        pendingKeys = [];
      }
    } else {
      pendingKeys.push(prevKey);
    }
  }

  var i;
  var childMapping = {};

  for (var nextKey in next) {
    if (nextKeysPending[nextKey]) {
      for (i = 0; i < nextKeysPending[nextKey].length; i++) {
        var pendingNextKey = nextKeysPending[nextKey][i];
        childMapping[nextKeysPending[nextKey][i]] = getValueForKey(pendingNextKey);
      }
    }

    childMapping[nextKey] = getValueForKey(nextKey);
  } // Finally, add the keys which didn't appear before any key in `next`


  for (i = 0; i < pendingKeys.length; i++) {
    childMapping[pendingKeys[i]] = getValueForKey(pendingKeys[i]);
  }

  return childMapping;
}

function getProp(child, prop, props) {
  return props[prop] != null ? props[prop] : child.props[prop];
}

function getInitialChildMapping(props, onExited) {
  return getChildMapping(props.children, function (child) {
    return React.cloneElement(child, {
      onExited: onExited.bind(null, child),
      in: true,
      appear: getProp(child, 'appear', props),
      enter: getProp(child, 'enter', props),
      exit: getProp(child, 'exit', props)
    });
  });
}
function getNextChildMapping(nextProps, prevChildMapping, onExited) {
  var nextChildMapping = getChildMapping(nextProps.children);
  var children = mergeChildMappings(prevChildMapping, nextChildMapping);
  Object.keys(children).forEach(function (key) {
    var child = children[key];
    if (!React.isValidElement(child)) return;
    var hasPrev = (key in prevChildMapping);
    var hasNext = (key in nextChildMapping);
    var prevChild = prevChildMapping[key];
    var isLeaving = React.isValidElement(prevChild) && !prevChild.props.in; // item is new (entering)

    if (hasNext && (!hasPrev || isLeaving)) {
      // console.log('entering', key)
      children[key] = React.cloneElement(child, {
        onExited: onExited.bind(null, child),
        in: true,
        exit: getProp(child, 'exit', nextProps),
        enter: getProp(child, 'enter', nextProps)
      });
    } else if (!hasNext && hasPrev && !isLeaving) {
      // item is old (exiting)
      // console.log('leaving', key)
      children[key] = React.cloneElement(child, {
        in: false
      });
    } else if (hasNext && hasPrev && React.isValidElement(prevChild)) {
      // item hasn't changed transition states
      // copy over the last transition props;
      // console.log('unchanged', key)
      children[key] = React.cloneElement(child, {
        onExited: onExited.bind(null, child),
        in: prevChild.props.in,
        exit: getProp(child, 'exit', nextProps),
        enter: getProp(child, 'enter', nextProps)
      });
    }
  });
  return children;
}

var values = Object.values || function (obj) {
  return Object.keys(obj).map(function (k) {
    return obj[k];
  });
};

var defaultProps = {
  component: 'div',
  childFactory: function childFactory(child) {
    return child;
  }
};
/**
 * The `<TransitionGroup>` component manages a set of transition components
 * (`<Transition>` and `<CSSTransition>`) in a list. Like with the transition
 * components, `<TransitionGroup>` is a state machine for managing the mounting
 * and unmounting of components over time.
 *
 * Consider the example below. As items are removed or added to the TodoList the
 * `in` prop is toggled automatically by the `<TransitionGroup>`.
 *
 * Note that `<TransitionGroup>`  does not define any animation behavior!
 * Exactly _how_ a list item animates is up to the individual transition
 * component. This means you can mix and match animations across different list
 * items.
 */

var TransitionGroup = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(TransitionGroup, _React$Component);

  function TransitionGroup(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;

    var handleExited = _this.handleExited.bind(_assertThisInitialized(_this)); // Initial children should all be entering, dependent on appear


    _this.state = {
      contextValue: {
        isMounting: true
      },
      handleExited: handleExited,
      firstRender: true
    };
    return _this;
  }

  var _proto = TransitionGroup.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.mounted = true;
    this.setState({
      contextValue: {
        isMounting: false
      }
    });
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.mounted = false;
  };

  TransitionGroup.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, _ref) {
    var prevChildMapping = _ref.children,
        handleExited = _ref.handleExited,
        firstRender = _ref.firstRender;
    return {
      children: firstRender ? getInitialChildMapping(nextProps, handleExited) : getNextChildMapping(nextProps, prevChildMapping, handleExited),
      firstRender: false
    };
  } // node is `undefined` when user provided `nodeRef` prop
  ;

  _proto.handleExited = function handleExited(child, node) {
    var currentChildMapping = getChildMapping(this.props.children);
    if (child.key in currentChildMapping) return;

    if (child.props.onExited) {
      child.props.onExited(node);
    }

    if (this.mounted) {
      this.setState(function (state) {
        var children = _extends({}, state.children);

        delete children[child.key];
        return {
          children: children
        };
      });
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        Component = _this$props.component,
        childFactory = _this$props.childFactory,
        props = _objectWithoutPropertiesLoose(_this$props, ["component", "childFactory"]);

    var contextValue = this.state.contextValue;
    var children = values(this.state.children).map(childFactory);
    delete props.appear;
    delete props.enter;
    delete props.exit;

    if (Component === null) {
      return /*#__PURE__*/React.createElement(TransitionGroupContext.Provider, {
        value: contextValue
      }, children);
    }

    return /*#__PURE__*/React.createElement(TransitionGroupContext.Provider, {
      value: contextValue
    }, /*#__PURE__*/React.createElement(Component, props, children));
  };

  return TransitionGroup;
}(React.Component);

TransitionGroup.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * `<TransitionGroup>` renders a `<div>` by default. You can change this
   * behavior by providing a `component` prop.
   * If you use React v16+ and would like to avoid a wrapping `<div>` element
   * you can pass in `component={null}`. This is useful if the wrapping div
   * borks your css styles.
   */
  component: PropTypes.any,

  /**
   * A set of `<Transition>` components, that are toggled `in` and out as they
   * leave. the `<TransitionGroup>` will inject specific transition props, so
   * remember to spread them through if you are wrapping the `<Transition>` as
   * with our `<Fade>` example.
   *
   * While this component is meant for multiple `Transition` or `CSSTransition`
   * children, sometimes you may want to have a single transition child with
   * content that you want to be transitioned out and in when you change it
   * (e.g. routes, images etc.) In that case you can change the `key` prop of
   * the transition child as you change its content, this will cause
   * `TransitionGroup` to transition the child out and back in.
   */
  children: PropTypes.node,

  /**
   * A convenience prop that enables or disables appear animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  appear: PropTypes.bool,

  /**
   * A convenience prop that enables or disables enter animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  enter: PropTypes.bool,

  /**
   * A convenience prop that enables or disables exit animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  exit: PropTypes.bool,

  /**
   * You may need to apply reactive updates to a child as it is exiting.
   * This is generally done by using `cloneElement` however in the case of an exiting
   * child the element has already been removed and not accessible to the consumer.
   *
   * If you do need to update a child as it leaves you can provide a `childFactory`
   * to wrap every child, even the ones that are leaving.
   *
   * @type Function(child: ReactElement) -> ReactElement
   */
  childFactory: PropTypes.func
} : {};
TransitionGroup.defaultProps = defaultProps;
var TransitionGroup$1 = TransitionGroup;

const getPickersFadeTransitionGroupUtilityClass = slot => generateUtilityClass('MuiPickersFadeTransitionGroup', slot);
generateUtilityClasses('MuiPickersFadeTransitionGroup', ['root']);

const _excluded$q = ["children"];
const useUtilityClasses$i = classes => {
  const slots = {
    root: ['root']
  };
  return composeClasses(slots, getPickersFadeTransitionGroupUtilityClass, classes);
};
const PickersFadeTransitionGroupRoot = styles.styled(TransitionGroup$1, {
  name: 'MuiPickersFadeTransitionGroup',
  slot: 'Root'
})({
  display: 'block',
  position: 'relative'
});

/**
 * @ignore - do not document.
 */
function PickersFadeTransitionGroup(inProps) {
  const props = styles.useThemeProps({
    props: inProps,
    name: 'MuiPickersFadeTransitionGroup'
  });
  const {
    className,
    reduceAnimations,
    transKey,
    classes: classesProp
  } = props;
  const {
      children
    } = props,
    other = _objectWithoutPropertiesLoose(props, _excluded$q);
  const classes = useUtilityClasses$i(classesProp);
  const theme = styles.useTheme();
  if (reduceAnimations) {
    return children;
  }
  return /*#__PURE__*/jsxRuntime.jsx(PickersFadeTransitionGroupRoot, {
    className: clsx(classes.root, className),
    ownerState: other,
    children: /*#__PURE__*/jsxRuntime.jsx(Fade, {
      appear: false,
      mountOnEnter: true,
      unmountOnExit: true,
      timeout: {
        appear: theme.transitions.duration.enteringScreen,
        enter: theme.transitions.duration.enteringScreen,
        exit: 0
      },
      children: children
    }, transKey)
  });
}

const getPickersSlideTransitionUtilityClass = slot => generateUtilityClass('MuiPickersSlideTransition', slot);
const pickersSlideTransitionClasses = generateUtilityClasses('MuiPickersSlideTransition', ['root', 'slideEnter-left', 'slideEnter-right', 'slideEnterActive', 'slideExit', 'slideExitActiveLeft-left', 'slideExitActiveLeft-right']);

const _excluded$p = ["children", "className", "reduceAnimations", "slideDirection", "transKey", "classes"];
const useUtilityClasses$h = (classes, ownerState) => {
  const {
    slideDirection
  } = ownerState;
  const slots = {
    root: ['root'],
    exit: ['slideExit'],
    enterActive: ['slideEnterActive'],
    enter: [`slideEnter-${slideDirection}`],
    exitActive: [`slideExitActiveLeft-${slideDirection}`]
  };
  return composeClasses(slots, getPickersSlideTransitionUtilityClass, classes);
};
const PickersSlideTransitionRoot = styles.styled(TransitionGroup$1, {
  name: 'MuiPickersSlideTransition',
  slot: 'Root',
  overridesResolver: (_, styles) => [styles.root, {
    [`.${pickersSlideTransitionClasses['slideEnter-left']}`]: styles['slideEnter-left']
  }, {
    [`.${pickersSlideTransitionClasses['slideEnter-right']}`]: styles['slideEnter-right']
  }, {
    [`.${pickersSlideTransitionClasses.slideEnterActive}`]: styles.slideEnterActive
  }, {
    [`.${pickersSlideTransitionClasses.slideExit}`]: styles.slideExit
  }, {
    [`.${pickersSlideTransitionClasses['slideExitActiveLeft-left']}`]: styles['slideExitActiveLeft-left']
  }, {
    [`.${pickersSlideTransitionClasses['slideExitActiveLeft-right']}`]: styles['slideExitActiveLeft-right']
  }]
})(({
  theme
}) => {
  const slideTransition = theme.transitions.create('transform', {
    duration: theme.transitions.duration.complex,
    easing: 'cubic-bezier(0.35, 0.8, 0.4, 1)'
  });
  return {
    display: 'block',
    position: 'relative',
    overflowX: 'hidden',
    '& > *': {
      position: 'absolute',
      top: 0,
      right: 0,
      left: 0
    },
    [`& .${pickersSlideTransitionClasses['slideEnter-left']}`]: {
      willChange: 'transform',
      transform: 'translate(100%)',
      zIndex: 1
    },
    [`& .${pickersSlideTransitionClasses['slideEnter-right']}`]: {
      willChange: 'transform',
      transform: 'translate(-100%)',
      zIndex: 1
    },
    [`& .${pickersSlideTransitionClasses.slideEnterActive}`]: {
      transform: 'translate(0%)',
      transition: slideTransition
    },
    [`& .${pickersSlideTransitionClasses.slideExit}`]: {
      transform: 'translate(0%)'
    },
    [`& .${pickersSlideTransitionClasses['slideExitActiveLeft-left']}`]: {
      willChange: 'transform',
      transform: 'translate(-100%)',
      transition: slideTransition,
      zIndex: 0
    },
    [`& .${pickersSlideTransitionClasses['slideExitActiveLeft-right']}`]: {
      willChange: 'transform',
      transform: 'translate(100%)',
      transition: slideTransition,
      zIndex: 0
    }
  };
});

/**
 * @ignore - do not document.
 */
function PickersSlideTransition(inProps) {
  const props = styles.useThemeProps({
    props: inProps,
    name: 'MuiPickersSlideTransition'
  });
  const {
      children,
      className,
      reduceAnimations,
      slideDirection,
      transKey,
      classes: classesProp
    } = props,
    other = _objectWithoutPropertiesLoose(props, _excluded$p);
  const {
    ownerState: pickerOwnerState
  } = usePickerPrivateContext();
  const ownerState = _extends({}, pickerOwnerState, {
    slideDirection
  });
  const classes = useUtilityClasses$h(classesProp, ownerState);
  const theme = styles.useTheme();
  if (reduceAnimations) {
    return /*#__PURE__*/jsxRuntime.jsx("div", {
      className: clsx(classes.root, className),
      children: children
    });
  }
  const transitionClasses = {
    exit: classes.exit,
    enterActive: classes.enterActive,
    enter: classes.enter,
    exitActive: classes.exitActive
  };
  return /*#__PURE__*/jsxRuntime.jsx(PickersSlideTransitionRoot, {
    className: clsx(classes.root, className),
    childFactory: element => /*#__PURE__*/React__namespace.cloneElement(element, {
      classNames: transitionClasses
    }),
    role: "presentation",
    ownerState: ownerState,
    children: /*#__PURE__*/jsxRuntime.jsx(CSSTransition$1, _extends({
      mountOnEnter: true,
      unmountOnExit: true,
      timeout: theme.transitions.duration.complex,
      classNames: transitionClasses
    }, other, {
      children: children
    }), transKey)
  });
}

const getDayCalendarUtilityClass = slot => generateUtilityClass('MuiDayCalendar', slot);
generateUtilityClasses('MuiDayCalendar', ['root', 'header', 'weekDayLabel', 'loadingContainer', 'slideTransition', 'monthContainer', 'weekContainer', 'weekNumberLabel', 'weekNumber']);

const _excluded$o = ["parentProps", "day", "focusedDay", "selectedDays", "isDateDisabled", "currentMonthNumber", "isViewFocused"],
  _excluded2$4 = ["ownerState"];
const useUtilityClasses$g = classes => {
  const slots = {
    root: ['root'],
    header: ['header'],
    weekDayLabel: ['weekDayLabel'],
    loadingContainer: ['loadingContainer'],
    slideTransition: ['slideTransition'],
    monthContainer: ['monthContainer'],
    weekContainer: ['weekContainer'],
    weekNumberLabel: ['weekNumberLabel'],
    weekNumber: ['weekNumber']
  };
  return composeClasses(slots, getDayCalendarUtilityClass, classes);
};
const weeksContainerHeight = (DAY_SIZE + DAY_MARGIN * 2) * 6;
const PickersCalendarDayRoot = styles.styled('div', {
  name: 'MuiDayCalendar',
  slot: 'Root'
})({});
const PickersCalendarDayHeader = styles.styled('div', {
  name: 'MuiDayCalendar',
  slot: 'Header'
})({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
});
const PickersCalendarWeekDayLabel = styles.styled(Typography, {
  name: 'MuiDayCalendar',
  slot: 'WeekDayLabel'
})(({
  theme
}) => ({
  width: 36,
  height: 40,
  margin: '0 2px',
  textAlign: 'center',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: (theme.vars || theme).palette.text.secondary
}));
const PickersCalendarWeekNumberLabel = styles.styled(Typography, {
  name: 'MuiDayCalendar',
  slot: 'WeekNumberLabel'
})(({
  theme
}) => ({
  width: 36,
  height: 40,
  margin: '0 2px',
  textAlign: 'center',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: (theme.vars || theme).palette.text.disabled
}));
const PickersCalendarWeekNumber = styles.styled(Typography, {
  name: 'MuiDayCalendar',
  slot: 'WeekNumber'
})(({
  theme
}) => _extends({}, theme.typography.caption, {
  width: DAY_SIZE,
  height: DAY_SIZE,
  padding: 0,
  margin: `0 ${DAY_MARGIN}px`,
  color: (theme.vars || theme).palette.text.disabled,
  fontSize: '0.75rem',
  alignItems: 'center',
  justifyContent: 'center',
  display: 'inline-flex'
}));
const PickersCalendarLoadingContainer = styles.styled('div', {
  name: 'MuiDayCalendar',
  slot: 'LoadingContainer'
})({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: weeksContainerHeight
});
const PickersCalendarSlideTransition = styles.styled(PickersSlideTransition, {
  name: 'MuiDayCalendar',
  slot: 'SlideTransition'
})({
  minHeight: weeksContainerHeight
});
const PickersCalendarWeekContainer = styles.styled('div', {
  name: 'MuiDayCalendar',
  slot: 'MonthContainer'
})({
  overflow: 'hidden'
});
const PickersCalendarWeek = styles.styled('div', {
  name: 'MuiDayCalendar',
  slot: 'WeekContainer'
})({
  margin: `${DAY_MARGIN}px 0`,
  display: 'flex',
  justifyContent: 'center'
});
function WrappedDay(_ref) {
  let {
      parentProps,
      day,
      focusedDay,
      selectedDays,
      isDateDisabled,
      currentMonthNumber,
      isViewFocused
    } = _ref,
    other = _objectWithoutPropertiesLoose(_ref, _excluded$o);
  const {
    disabled,
    disableHighlightToday,
    isMonthSwitchingAnimating,
    showDaysOutsideCurrentMonth,
    slots,
    slotProps,
    timezone
  } = parentProps;
  const adapter = usePickerAdapter();
  const now = useNow(timezone);
  const isFocusableDay = focusedDay != null && adapter.isSameDay(day, focusedDay);
  const isFocusedDay = isViewFocused && isFocusableDay;
  const isSelected = selectedDays.some(selectedDay => adapter.isSameDay(selectedDay, day));
  const isToday = adapter.isSameDay(day, now);
  const isDisabled = React__namespace.useMemo(() => disabled || isDateDisabled(day), [disabled, isDateDisabled, day]);
  const isOutsideCurrentMonth = React__namespace.useMemo(() => adapter.getMonth(day) !== currentMonthNumber, [adapter, day, currentMonthNumber]);
  const ownerState = usePickerDayOwnerState({
    day,
    selected: isSelected,
    disabled: isDisabled,
    today: isToday,
    outsideCurrentMonth: isOutsideCurrentMonth,
    disableMargin: undefined,
    // This prop can only be defined using slotProps.day so the ownerState for useSlotProps cannot have its value.
    disableHighlightToday,
    showDaysOutsideCurrentMonth
  });
  const Day = slots?.day ?? PickersDay;
  // We don't want to pass to ownerState down, to avoid re-rendering all the day whenever a prop changes.
  const _useSlotProps = useSlotProps({
      elementType: Day,
      externalSlotProps: slotProps?.day,
      additionalProps: _extends({
        disableHighlightToday,
        showDaysOutsideCurrentMonth,
        role: 'gridcell',
        isAnimating: isMonthSwitchingAnimating,
        // it is used in date range dragging logic by accessing `dataset.timestamp`
        'data-timestamp': adapter.toJsDate(day).valueOf()
      }, other),
      ownerState: _extends({}, ownerState, {
        day,
        isDayDisabled: isDisabled,
        isDaySelected: isSelected
      })
    }),
    dayProps = _objectWithoutPropertiesLoose(_useSlotProps, _excluded2$4);
  const isFirstVisibleCell = React__namespace.useMemo(() => {
    const startOfMonth = adapter.startOfMonth(adapter.setMonth(day, currentMonthNumber));
    if (!showDaysOutsideCurrentMonth) {
      return adapter.isSameDay(day, startOfMonth);
    }
    return adapter.isSameDay(day, adapter.startOfWeek(startOfMonth));
  }, [currentMonthNumber, day, showDaysOutsideCurrentMonth, adapter]);
  const isLastVisibleCell = React__namespace.useMemo(() => {
    const endOfMonth = adapter.endOfMonth(adapter.setMonth(day, currentMonthNumber));
    if (!showDaysOutsideCurrentMonth) {
      return adapter.isSameDay(day, endOfMonth);
    }
    return adapter.isSameDay(day, adapter.endOfWeek(endOfMonth));
  }, [currentMonthNumber, day, showDaysOutsideCurrentMonth, adapter]);
  return /*#__PURE__*/jsxRuntime.jsx(Day, _extends({}, dayProps, {
    day: day,
    disabled: isDisabled,
    autoFocus: !isOutsideCurrentMonth && isFocusedDay,
    today: isToday,
    outsideCurrentMonth: isOutsideCurrentMonth,
    isFirstVisibleCell: isFirstVisibleCell,
    isLastVisibleCell: isLastVisibleCell,
    selected: isSelected,
    tabIndex: isFocusableDay ? 0 : -1,
    "aria-selected": isSelected,
    "aria-current": isToday ? 'date' : undefined
  }));
}

/**
 * @ignore - do not document.
 */
function DayCalendar(inProps) {
  const props = styles.useThemeProps({
    props: inProps,
    name: 'MuiDayCalendar'
  });
  const adapter = usePickerAdapter();
  const {
    onFocusedDayChange,
    className,
    classes: classesProp,
    currentMonth,
    selectedDays,
    focusedDay,
    loading,
    onSelectedDaysChange,
    onMonthSwitchingAnimationEnd,
    readOnly,
    reduceAnimations,
    renderLoading = () => /*#__PURE__*/jsxRuntime.jsx("span", {
      children: "..."
    }),
    slideDirection,
    TransitionProps,
    disablePast,
    disableFuture,
    minDate,
    maxDate,
    shouldDisableDate,
    shouldDisableMonth,
    shouldDisableYear,
    dayOfWeekFormatter = date => adapter.format(date, 'weekdayShort').charAt(0).toUpperCase(),
    hasFocus,
    onFocusedViewChange,
    gridLabelId,
    displayWeekNumber,
    fixedWeekNumber,
    timezone
  } = props;
  const now = useNow(timezone);
  const classes = useUtilityClasses$g(classesProp);
  const isRtl = useRtl();
  const isDateDisabled = useIsDateDisabled({
    shouldDisableDate,
    shouldDisableMonth,
    shouldDisableYear,
    minDate,
    maxDate,
    disablePast,
    disableFuture,
    timezone
  });
  const translations = usePickerTranslations();
  const handleDaySelect = useEventCallback(day => {
    if (readOnly) {
      return;
    }
    onSelectedDaysChange(day);
  });
  const focusDay = day => {
    if (!isDateDisabled(day)) {
      onFocusedDayChange(day);
      onFocusedViewChange?.(true);
    }
  };
  const handleKeyDown = useEventCallback((event, day) => {
    switch (event.key) {
      case 'ArrowUp':
        focusDay(adapter.addDays(day, -7));
        event.preventDefault();
        break;
      case 'ArrowDown':
        focusDay(adapter.addDays(day, 7));
        event.preventDefault();
        break;
      case 'ArrowLeft':
        {
          const newFocusedDayDefault = adapter.addDays(day, isRtl ? 1 : -1);
          const nextAvailableMonth = adapter.addMonths(day, isRtl ? 1 : -1);
          const closestDayToFocus = findClosestEnabledDate({
            adapter,
            date: newFocusedDayDefault,
            minDate: isRtl ? newFocusedDayDefault : adapter.startOfMonth(nextAvailableMonth),
            maxDate: isRtl ? adapter.endOfMonth(nextAvailableMonth) : newFocusedDayDefault,
            isDateDisabled,
            timezone
          });
          focusDay(closestDayToFocus || newFocusedDayDefault);
          event.preventDefault();
          break;
        }
      case 'ArrowRight':
        {
          const newFocusedDayDefault = adapter.addDays(day, isRtl ? -1 : 1);
          const nextAvailableMonth = adapter.addMonths(day, isRtl ? -1 : 1);
          const closestDayToFocus = findClosestEnabledDate({
            adapter,
            date: newFocusedDayDefault,
            minDate: isRtl ? adapter.startOfMonth(nextAvailableMonth) : newFocusedDayDefault,
            maxDate: isRtl ? newFocusedDayDefault : adapter.endOfMonth(nextAvailableMonth),
            isDateDisabled,
            timezone
          });
          focusDay(closestDayToFocus || newFocusedDayDefault);
          event.preventDefault();
          break;
        }
      case 'Home':
        focusDay(adapter.startOfWeek(day));
        event.preventDefault();
        break;
      case 'End':
        focusDay(adapter.endOfWeek(day));
        event.preventDefault();
        break;
      case 'PageUp':
        focusDay(adapter.addMonths(day, 1));
        event.preventDefault();
        break;
      case 'PageDown':
        focusDay(adapter.addMonths(day, -1));
        event.preventDefault();
        break;
    }
  });
  const handleFocus = useEventCallback((event, day) => focusDay(day));
  const handleBlur = useEventCallback((event, day) => {
    if (focusedDay != null && adapter.isSameDay(focusedDay, day)) {
      onFocusedViewChange?.(false);
    }
  });
  const currentMonthNumber = adapter.getMonth(currentMonth);
  const currentYearNumber = adapter.getYear(currentMonth);
  const validSelectedDays = React__namespace.useMemo(() => selectedDays.filter(day => !!day).map(day => adapter.startOfDay(day)), [adapter, selectedDays]);

  // need a new ref whenever the `key` of the transition changes: https://reactcommunity.org/react-transition-group/transition/#Transition-prop-nodeRef.
  const transitionKey = `${currentYearNumber}-${currentMonthNumber}`;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const slideNodeRef = React__namespace.useMemo(() => /*#__PURE__*/React__namespace.createRef(), [transitionKey]);
  const weeksToDisplay = React__namespace.useMemo(() => {
    const toDisplay = adapter.getWeekArray(currentMonth);
    let nextMonth = adapter.addMonths(currentMonth, 1);
    while (fixedWeekNumber && toDisplay.length < fixedWeekNumber) {
      const additionalWeeks = adapter.getWeekArray(nextMonth);
      const hasCommonWeek = adapter.isSameDay(toDisplay[toDisplay.length - 1][0], additionalWeeks[0][0]);
      additionalWeeks.slice(hasCommonWeek ? 1 : 0).forEach(week => {
        if (toDisplay.length < fixedWeekNumber) {
          toDisplay.push(week);
        }
      });
      nextMonth = adapter.addMonths(nextMonth, 1);
    }
    return toDisplay;
  }, [currentMonth, fixedWeekNumber, adapter]);
  return /*#__PURE__*/jsxRuntime.jsxs(PickersCalendarDayRoot, {
    role: "grid",
    "aria-labelledby": gridLabelId,
    className: classes.root,
    children: [/*#__PURE__*/jsxRuntime.jsxs(PickersCalendarDayHeader, {
      role: "row",
      className: classes.header,
      children: [displayWeekNumber && /*#__PURE__*/jsxRuntime.jsx(PickersCalendarWeekNumberLabel, {
        variant: "caption",
        role: "columnheader",
        "aria-label": translations.calendarWeekNumberHeaderLabel,
        className: classes.weekNumberLabel,
        children: translations.calendarWeekNumberHeaderText
      }), getWeekdays(adapter, now).map((weekday, i) => /*#__PURE__*/jsxRuntime.jsx(PickersCalendarWeekDayLabel, {
        variant: "caption",
        role: "columnheader",
        "aria-label": adapter.format(weekday, 'weekday'),
        className: classes.weekDayLabel,
        children: dayOfWeekFormatter(weekday)
      }, i.toString()))]
    }), loading ? /*#__PURE__*/jsxRuntime.jsx(PickersCalendarLoadingContainer, {
      className: classes.loadingContainer,
      children: renderLoading()
    }) : /*#__PURE__*/jsxRuntime.jsx(PickersCalendarSlideTransition, _extends({
      transKey: transitionKey,
      onExited: onMonthSwitchingAnimationEnd,
      reduceAnimations: reduceAnimations,
      slideDirection: slideDirection,
      className: clsx(className, classes.slideTransition)
    }, TransitionProps, {
      nodeRef: slideNodeRef,
      children: /*#__PURE__*/jsxRuntime.jsx(PickersCalendarWeekContainer, {
        ref: slideNodeRef,
        role: "rowgroup",
        className: classes.monthContainer,
        children: weeksToDisplay.map((week, index) => /*#__PURE__*/jsxRuntime.jsxs(PickersCalendarWeek, {
          role: "row",
          className: classes.weekContainer
          // fix issue of announcing row 1 as row 2
          // caused by week day labels row
          ,
          "aria-rowindex": index + 1,
          children: [displayWeekNumber && /*#__PURE__*/jsxRuntime.jsx(PickersCalendarWeekNumber, {
            className: classes.weekNumber,
            role: "rowheader",
            "aria-label": translations.calendarWeekNumberAriaLabelText(adapter.getWeekNumber(week[0])),
            children: translations.calendarWeekNumberText(adapter.getWeekNumber(week[0]))
          }), week.map((day, dayIndex) => /*#__PURE__*/jsxRuntime.jsx(WrappedDay, {
            parentProps: props,
            day: day,
            selectedDays: validSelectedDays,
            isViewFocused: hasFocus,
            focusedDay: focusedDay,
            onKeyDown: handleKeyDown,
            onFocus: handleFocus,
            onBlur: handleBlur,
            onDaySelect: handleDaySelect,
            isDateDisabled: isDateDisabled,
            currentMonthNumber: currentMonthNumber
            // fix issue of announcing column 1 as column 2 when `displayWeekNumber` is enabled
            ,
            "aria-colindex": dayIndex + 1
          }, day.toString()))]
        }, `week-${week[0]}`))
      })
    }))]
  });
}

function getMonthCalendarUtilityClass(slot) {
  return generateUtilityClass('MuiMonthCalendar', slot);
}
const monthCalendarClasses = generateUtilityClasses('MuiMonthCalendar', ['root', 'button', 'disabled', 'selected']);

const _excluded$n = ["autoFocus", "classes", "disabled", "selected", "value", "onClick", "onKeyDown", "onFocus", "onBlur", "slots", "slotProps"];
const useUtilityClasses$f = (classes, ownerState) => {
  const slots = {
    button: ['button', ownerState.isMonthDisabled && 'disabled', ownerState.isMonthSelected && 'selected']
  };
  return composeClasses(slots, getMonthCalendarUtilityClass, classes);
};
const DefaultMonthButton = styles.styled('button', {
  name: 'MuiMonthCalendar',
  slot: 'Button',
  overridesResolver: (_, styles) => [styles.button, {
    [`&.${monthCalendarClasses.disabled}`]: styles.disabled
  }, {
    [`&.${monthCalendarClasses.selected}`]: styles.selected
  }]
})(({
  theme
}) => _extends({
  color: 'unset',
  backgroundColor: 'transparent',
  border: 0,
  outline: 0
}, theme.typography.subtitle1, {
  height: 36,
  width: 72,
  borderRadius: 18,
  cursor: 'pointer',
  '&:focus': {
    backgroundColor: theme.vars ? `rgba(${theme.vars.palette.action.activeChannel} / ${theme.vars.palette.action.hoverOpacity})` : styles.alpha(theme.palette.action.active, theme.palette.action.hoverOpacity)
  },
  '&:hover': {
    backgroundColor: theme.vars ? `rgba(${theme.vars.palette.action.activeChannel} / ${theme.vars.palette.action.hoverOpacity})` : styles.alpha(theme.palette.action.active, theme.palette.action.hoverOpacity)
  },
  '&:disabled': {
    cursor: 'auto',
    pointerEvents: 'none'
  },
  [`&.${monthCalendarClasses.disabled}`]: {
    color: (theme.vars || theme).palette.text.secondary
  },
  [`&.${monthCalendarClasses.selected}`]: {
    color: (theme.vars || theme).palette.primary.contrastText,
    backgroundColor: (theme.vars || theme).palette.primary.main,
    '&:focus, &:hover': {
      backgroundColor: (theme.vars || theme).palette.primary.dark
    }
  }
}));

/**
 * @ignore - do not document.
 */
const MonthCalendarButton = /*#__PURE__*/React__namespace.memo(function MonthCalendarButton(props) {
  const {
      autoFocus,
      classes: classesProp,
      disabled,
      selected,
      value,
      onClick,
      onKeyDown,
      onFocus,
      onBlur,
      slots,
      slotProps
    } = props,
    other = _objectWithoutPropertiesLoose(props, _excluded$n);
  const ref = React__namespace.useRef(null);
  const {
    ownerState: pickerOwnerState
  } = usePickerPrivateContext();
  const ownerState = _extends({}, pickerOwnerState, {
    isMonthDisabled: disabled,
    isMonthSelected: selected
  });
  const classes = useUtilityClasses$f(classesProp, ownerState);

  // We can't forward the `autoFocus` to the button because it is a native button, not a MUI Button
  useEnhancedEffect$1(() => {
    if (autoFocus) {
      // `ref.current` being `null` would be a bug in MUI.
      ref.current?.focus();
    }
  }, [autoFocus]);
  const MonthButton = slots?.monthButton ?? DefaultMonthButton;
  const monthButtonProps = useSlotProps({
    elementType: MonthButton,
    externalSlotProps: slotProps?.monthButton,
    externalForwardedProps: other,
    additionalProps: {
      disabled,
      ref,
      type: 'button',
      role: 'radio',
      'aria-checked': selected,
      onClick: event => onClick(event, value),
      onKeyDown: event => onKeyDown(event, value),
      onFocus: event => onFocus(event, value),
      onBlur: event => onBlur(event, value)
    },
    ownerState,
    className: classes.button
  });
  return /*#__PURE__*/jsxRuntime.jsx(MonthButton, _extends({}, monthButtonProps));
});
if (process.env.NODE_ENV !== "production") MonthCalendarButton.displayName = "MonthCalendarButton";

const _excluded$m = ["autoFocus", "className", "classes", "value", "defaultValue", "referenceDate", "disabled", "disableFuture", "disablePast", "maxDate", "minDate", "onChange", "shouldDisableMonth", "readOnly", "disableHighlightToday", "onMonthFocus", "hasFocus", "onFocusedViewChange", "monthsPerRow", "timezone", "gridLabelId", "slots", "slotProps"];
const useUtilityClasses$e = classes => {
  const slots = {
    root: ['root']
  };
  return composeClasses(slots, getMonthCalendarUtilityClass, classes);
};
function useMonthCalendarDefaultizedProps(props, name) {
  const themeProps = styles.useThemeProps({
    props,
    name
  });
  const validationProps = useApplyDefaultValuesToDateValidationProps(themeProps);
  return _extends({}, themeProps, validationProps, {
    monthsPerRow: themeProps.monthsPerRow ?? 3
  });
}
const MonthCalendarRoot = styles.styled('div', {
  name: 'MuiMonthCalendar',
  slot: 'Root',
  shouldForwardProp: prop => shouldForwardProp(prop) && prop !== 'monthsPerRow'
})({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-evenly',
  rowGap: 16,
  padding: '8px 0',
  width: DIALOG_WIDTH,
  // avoid padding increasing width over defined
  boxSizing: 'border-box',
  variants: [{
    props: {
      monthsPerRow: 3
    },
    style: {
      columnGap: 24
    }
  }, {
    props: {
      monthsPerRow: 4
    },
    style: {
      columnGap: 0
    }
  }]
});
/**
 * Demos:
 *
 * - [DateCalendar](https://mui.com/x/react-date-pickers/date-calendar/)
 *
 * API:
 *
 * - [MonthCalendar API](https://mui.com/x/api/date-pickers/month-calendar/)
 */
const MonthCalendar = /*#__PURE__*/React__namespace.forwardRef(function MonthCalendar(inProps, ref) {
  const props = useMonthCalendarDefaultizedProps(inProps, 'MuiMonthCalendar');
  const {
      autoFocus,
      className,
      classes: classesProp,
      value: valueProp,
      defaultValue,
      referenceDate: referenceDateProp,
      disabled,
      disableFuture,
      disablePast,
      maxDate,
      minDate,
      onChange,
      shouldDisableMonth,
      readOnly,
      onMonthFocus,
      hasFocus,
      onFocusedViewChange,
      monthsPerRow,
      timezone: timezoneProp,
      gridLabelId,
      slots,
      slotProps
    } = props,
    other = _objectWithoutPropertiesLoose(props, _excluded$m);
  const {
    value,
    handleValueChange,
    timezone
  } = useControlledValue({
    name: 'MonthCalendar',
    timezone: timezoneProp,
    value: valueProp,
    defaultValue,
    referenceDate: referenceDateProp,
    onChange,
    valueManager: singleItemValueManager
  });
  const now = useNow(timezone);
  const isRtl = useRtl();
  const adapter = usePickerAdapter();
  const {
    ownerState
  } = usePickerPrivateContext();
  const referenceDate = React__namespace.useMemo(() => singleItemValueManager.getInitialReferenceValue({
    value,
    adapter,
    props,
    timezone,
    referenceDate: referenceDateProp,
    granularity: SECTION_TYPE_GRANULARITY.month
  }), [] // eslint-disable-line react-hooks/exhaustive-deps
  );
  const classes = useUtilityClasses$e(classesProp);
  const todayMonth = React__namespace.useMemo(() => adapter.getMonth(now), [adapter, now]);
  const selectedMonth = React__namespace.useMemo(() => {
    if (value != null) {
      return adapter.getMonth(value);
    }
    return null;
  }, [value, adapter]);
  const [focusedMonth, setFocusedMonth] = React__namespace.useState(() => selectedMonth || adapter.getMonth(referenceDate));
  const [internalHasFocus, setInternalHasFocus] = useControlled({
    name: 'MonthCalendar',
    state: 'hasFocus',
    controlled: hasFocus,
    default: autoFocus ?? false
  });
  const changeHasFocus = useEventCallback(newHasFocus => {
    setInternalHasFocus(newHasFocus);
    if (onFocusedViewChange) {
      onFocusedViewChange(newHasFocus);
    }
  });
  const isMonthDisabled = React__namespace.useCallback(dateToValidate => {
    const firstEnabledMonth = adapter.startOfMonth(disablePast && adapter.isAfter(now, minDate) ? now : minDate);
    const lastEnabledMonth = adapter.startOfMonth(disableFuture && adapter.isBefore(now, maxDate) ? now : maxDate);
    const monthToValidate = adapter.startOfMonth(dateToValidate);
    if (adapter.isBefore(monthToValidate, firstEnabledMonth)) {
      return true;
    }
    if (adapter.isAfter(monthToValidate, lastEnabledMonth)) {
      return true;
    }
    if (!shouldDisableMonth) {
      return false;
    }
    return shouldDisableMonth(monthToValidate);
  }, [disableFuture, disablePast, maxDate, minDate, now, shouldDisableMonth, adapter]);
  const handleMonthSelection = useEventCallback((event, month) => {
    if (readOnly) {
      return;
    }
    const newDate = adapter.setMonth(value ?? referenceDate, month);
    handleValueChange(newDate);
  });
  const focusMonth = useEventCallback(month => {
    if (!isMonthDisabled(adapter.setMonth(value ?? referenceDate, month))) {
      setFocusedMonth(month);
      changeHasFocus(true);
      if (onMonthFocus) {
        onMonthFocus(month);
      }
    }
  });
  React__namespace.useEffect(() => {
    setFocusedMonth(prevFocusedMonth => selectedMonth !== null && prevFocusedMonth !== selectedMonth ? selectedMonth : prevFocusedMonth);
  }, [selectedMonth]);
  const handleKeyDown = useEventCallback((event, month) => {
    const monthsInYear = 12;
    const monthsInRow = 3;
    switch (event.key) {
      case 'ArrowUp':
        focusMonth((monthsInYear + month - monthsInRow) % monthsInYear);
        event.preventDefault();
        break;
      case 'ArrowDown':
        focusMonth((monthsInYear + month + monthsInRow) % monthsInYear);
        event.preventDefault();
        break;
      case 'ArrowLeft':
        focusMonth((monthsInYear + month + (isRtl ? 1 : -1)) % monthsInYear);
        event.preventDefault();
        break;
      case 'ArrowRight':
        focusMonth((monthsInYear + month + (isRtl ? -1 : 1)) % monthsInYear);
        event.preventDefault();
        break;
    }
  });
  const handleMonthFocus = useEventCallback((event, month) => {
    focusMonth(month);
  });
  const handleMonthBlur = useEventCallback((event, month) => {
    if (focusedMonth === month) {
      changeHasFocus(false);
    }
  });
  return /*#__PURE__*/jsxRuntime.jsx(MonthCalendarRoot, _extends({
    ref: ref,
    className: clsx(classes.root, className),
    ownerState: ownerState,
    role: "radiogroup",
    "aria-labelledby": gridLabelId,
    monthsPerRow: monthsPerRow
  }, other, {
    children: getMonthsInYear(adapter, value ?? referenceDate).map(month => {
      const monthNumber = adapter.getMonth(month);
      const monthText = adapter.format(month, 'monthShort');
      const monthLabel = adapter.format(month, 'month');
      const isSelected = monthNumber === selectedMonth;
      const isDisabled = disabled || isMonthDisabled(month);
      return /*#__PURE__*/jsxRuntime.jsx(MonthCalendarButton, {
        selected: isSelected,
        value: monthNumber,
        onClick: handleMonthSelection,
        onKeyDown: handleKeyDown,
        autoFocus: internalHasFocus && monthNumber === focusedMonth,
        disabled: isDisabled,
        tabIndex: monthNumber === focusedMonth && !isDisabled ? 0 : -1,
        onFocus: handleMonthFocus,
        onBlur: handleMonthBlur,
        "aria-current": todayMonth === monthNumber ? 'date' : undefined,
        "aria-label": monthLabel,
        slots: slots,
        slotProps: slotProps,
        classes: classesProp,
        children: monthText
      }, monthText);
    })
  }));
});
if (process.env.NODE_ENV !== "production") MonthCalendar.displayName = "MonthCalendar";
process.env.NODE_ENV !== "production" ? MonthCalendar.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  autoFocus: PropTypes.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,
  className: PropTypes.string,
  /**
   * The default selected value.
   * Used when the component is not controlled.
   */
  defaultValue: PropTypes.object,
  /**
   * If `true`, the component is disabled.
   * When disabled, the value cannot be changed and no interaction is possible.
   * @default false
   */
  disabled: PropTypes.bool,
  /**
   * If `true`, disable values after the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disableFuture: PropTypes.bool,
  /**
   * If `true`, today's date is rendering without highlighting with circle.
   * @default false
   */
  disableHighlightToday: PropTypes.bool,
  /**
   * If `true`, disable values before the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disablePast: PropTypes.bool,
  gridLabelId: PropTypes.string,
  hasFocus: PropTypes.bool,
  /**
   * Maximal selectable date.
   * @default 2099-12-31
   */
  maxDate: PropTypes.object,
  /**
   * Minimal selectable date.
   * @default 1900-01-01
   */
  minDate: PropTypes.object,
  /**
   * Months rendered per row.
   * @default 3
   */
  monthsPerRow: PropTypes.oneOf([3, 4]),
  /**
   * Callback fired when the value changes.
   * @param {PickerValidDate} value The new value.
   */
  onChange: PropTypes.func,
  onFocusedViewChange: PropTypes.func,
  onMonthFocus: PropTypes.func,
  /**
   * If `true`, the component is read-only.
   * When read-only, the value cannot be changed but the user can interact with the interface.
   * @default false
   */
  readOnly: PropTypes.bool,
  /**
   * The date used to generate the new value when both `value` and `defaultValue` are empty.
   * @default The closest valid month using the validation props, except callbacks such as `shouldDisableMonth`.
   */
  referenceDate: PropTypes.object,
  /**
   * Disable specific month.
   * @param {PickerValidDate} month The month to test.
   * @returns {boolean} If `true`, the month will be disabled.
   */
  shouldDisableMonth: PropTypes.func,
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: PropTypes.object,
  /**
   * Overridable component slots.
   * @default {}
   */
  slots: PropTypes.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])), PropTypes.func, PropTypes.object]),
  /**
   * Choose which timezone to use for the value.
   * Example: "default", "system", "UTC", "America/New_York".
   * If you pass values from other timezones to some props, they will be converted to this timezone before being used.
   * @see See the {@link https://mui.com/x/react-date-pickers/timezone/ timezones documentation} for more details.
   * @default The timezone of the `value` or `defaultValue` prop is defined, 'default' otherwise.
   */
  timezone: PropTypes.string,
  /**
   * The selected value.
   * Used when the component is controlled.
   */
  value: PropTypes.object
} : void 0;

function getYearCalendarUtilityClass(slot) {
  return generateUtilityClass('MuiYearCalendar', slot);
}
const yearCalendarClasses = generateUtilityClasses('MuiYearCalendar', ['root', 'button', 'disabled', 'selected']);

const _excluded$l = ["autoFocus", "classes", "disabled", "selected", "value", "onClick", "onKeyDown", "onFocus", "onBlur", "slots", "slotProps"];
const useUtilityClasses$d = (classes, ownerState) => {
  const slots = {
    button: ['button', ownerState.isYearDisabled && 'disabled', ownerState.isYearSelected && 'selected']
  };
  return composeClasses(slots, getYearCalendarUtilityClass, classes);
};
const DefaultYearButton = styles.styled('button', {
  name: 'MuiYearCalendar',
  slot: 'Button',
  overridesResolver: (_, styles) => [styles.button, {
    [`&.${yearCalendarClasses.disabled}`]: styles.disabled
  }, {
    [`&.${yearCalendarClasses.selected}`]: styles.selected
  }]
})(({
  theme
}) => _extends({
  color: 'unset',
  backgroundColor: 'transparent',
  border: 0,
  outline: 0
}, theme.typography.subtitle1, {
  height: 36,
  width: 72,
  borderRadius: 18,
  cursor: 'pointer',
  '&:focus': {
    backgroundColor: theme.vars ? `rgba(${theme.vars.palette.action.activeChannel} / ${theme.vars.palette.action.focusOpacity})` : styles.alpha(theme.palette.action.active, theme.palette.action.focusOpacity)
  },
  '&:hover': {
    backgroundColor: theme.vars ? `rgba(${theme.vars.palette.action.activeChannel} / ${theme.vars.palette.action.hoverOpacity})` : styles.alpha(theme.palette.action.active, theme.palette.action.hoverOpacity)
  },
  '&:disabled': {
    cursor: 'auto',
    pointerEvents: 'none'
  },
  [`&.${yearCalendarClasses.disabled}`]: {
    color: (theme.vars || theme).palette.text.secondary
  },
  [`&.${yearCalendarClasses.selected}`]: {
    color: (theme.vars || theme).palette.primary.contrastText,
    backgroundColor: (theme.vars || theme).palette.primary.main,
    '&:focus, &:hover': {
      backgroundColor: (theme.vars || theme).palette.primary.dark
    }
  }
}));

/**
 * @ignore - internal component.
 */
const YearCalendarButton = /*#__PURE__*/React__namespace.memo(function YearCalendarButton(props) {
  const {
      autoFocus,
      classes: classesProp,
      disabled,
      selected,
      value,
      onClick,
      onKeyDown,
      onFocus,
      onBlur,
      slots,
      slotProps
    } = props,
    other = _objectWithoutPropertiesLoose(props, _excluded$l);
  const ref = React__namespace.useRef(null);
  const {
    ownerState: pickerOwnerState
  } = usePickerPrivateContext();
  const ownerState = _extends({}, pickerOwnerState, {
    isYearDisabled: disabled,
    isYearSelected: selected
  });
  const classes = useUtilityClasses$d(classesProp, ownerState);

  // We can't forward the `autoFocus` to the button because it is a native button, not a MUI Button
  useEnhancedEffect$1(() => {
    if (autoFocus) {
      // `ref.current` being `null` would be a bug in MUI.
      ref.current?.focus();
    }
  }, [autoFocus]);
  const YearButton = slots?.yearButton ?? DefaultYearButton;
  const yearButtonProps = useSlotProps({
    elementType: YearButton,
    externalSlotProps: slotProps?.yearButton,
    externalForwardedProps: other,
    additionalProps: {
      disabled,
      ref,
      type: 'button',
      role: 'radio',
      'aria-checked': selected,
      onClick: event => onClick(event, value),
      onKeyDown: event => onKeyDown(event, value),
      onFocus: event => onFocus(event, value),
      onBlur: event => onBlur(event, value)
    },
    ownerState,
    className: classes.button
  });
  return /*#__PURE__*/jsxRuntime.jsx(YearButton, _extends({}, yearButtonProps));
});
if (process.env.NODE_ENV !== "production") YearCalendarButton.displayName = "YearCalendarButton";

const _excluded$k = ["autoFocus", "className", "classes", "value", "defaultValue", "referenceDate", "disabled", "disableFuture", "disablePast", "maxDate", "minDate", "onChange", "readOnly", "shouldDisableYear", "disableHighlightToday", "onYearFocus", "hasFocus", "onFocusedViewChange", "yearsOrder", "yearsPerRow", "timezone", "gridLabelId", "slots", "slotProps"];
const useUtilityClasses$c = classes => {
  const slots = {
    root: ['root']
  };
  return composeClasses(slots, getYearCalendarUtilityClass, classes);
};
function useYearCalendarDefaultizedProps(props, name) {
  const themeProps = styles.useThemeProps({
    props,
    name
  });
  const validationProps = useApplyDefaultValuesToDateValidationProps(themeProps);
  return _extends({}, themeProps, validationProps, {
    yearsPerRow: themeProps.yearsPerRow ?? 3,
    yearsOrder: themeProps.yearsOrder ?? 'asc'
  });
}
const YearCalendarRoot = styles.styled('div', {
  name: 'MuiYearCalendar',
  slot: 'Root',
  shouldForwardProp: prop => shouldForwardProp(prop) && prop !== 'yearsPerRow'
})({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-evenly',
  rowGap: 12,
  padding: '6px 0',
  overflowY: 'auto',
  height: '100%',
  width: DIALOG_WIDTH,
  maxHeight: MAX_CALENDAR_HEIGHT,
  // avoid padding increasing width over defined
  boxSizing: 'border-box',
  position: 'relative',
  variants: [{
    props: {
      yearsPerRow: 3
    },
    style: {
      columnGap: 24
    }
  }, {
    props: {
      yearsPerRow: 4
    },
    style: {
      columnGap: 0,
      padding: '0 2px'
    }
  }]
});
const YearCalendarButtonFiller = styles.styled('div', {
  name: 'MuiYearCalendar',
  slot: 'ButtonFiller'
})({
  height: 36,
  width: 72
});
/**
 * Demos:
 *
 * - [DateCalendar](https://mui.com/x/react-date-pickers/date-calendar/)
 *
 * API:
 *
 * - [YearCalendar API](https://mui.com/x/api/date-pickers/year-calendar/)
 */
const YearCalendar = /*#__PURE__*/React__namespace.forwardRef(function YearCalendar(inProps, ref) {
  const props = useYearCalendarDefaultizedProps(inProps, 'MuiYearCalendar');
  const {
      autoFocus,
      className,
      classes: classesProp,
      value: valueProp,
      defaultValue,
      referenceDate: referenceDateProp,
      disabled,
      disableFuture,
      disablePast,
      maxDate,
      minDate,
      onChange,
      readOnly,
      shouldDisableYear,
      onYearFocus,
      hasFocus,
      onFocusedViewChange,
      yearsOrder,
      yearsPerRow,
      timezone: timezoneProp,
      gridLabelId,
      slots,
      slotProps
    } = props,
    other = _objectWithoutPropertiesLoose(props, _excluded$k);
  const {
    value,
    handleValueChange,
    timezone
  } = useControlledValue({
    name: 'YearCalendar',
    timezone: timezoneProp,
    value: valueProp,
    defaultValue,
    referenceDate: referenceDateProp,
    onChange,
    valueManager: singleItemValueManager
  });
  const now = useNow(timezone);
  const isRtl = useRtl();
  const adapter = usePickerAdapter();
  const {
    ownerState
  } = usePickerPrivateContext();
  const referenceDate = React__namespace.useMemo(() => singleItemValueManager.getInitialReferenceValue({
    value,
    adapter,
    props,
    timezone,
    referenceDate: referenceDateProp,
    granularity: SECTION_TYPE_GRANULARITY.year
  }), [] // eslint-disable-line react-hooks/exhaustive-deps
  );
  const classes = useUtilityClasses$c(classesProp);
  const todayYear = React__namespace.useMemo(() => adapter.getYear(now), [adapter, now]);
  const selectedYear = React__namespace.useMemo(() => {
    if (value != null) {
      return adapter.getYear(value);
    }
    return null;
  }, [value, adapter]);
  const [focusedYear, setFocusedYear] = React__namespace.useState(() => selectedYear || adapter.getYear(referenceDate));
  const [internalHasFocus, setInternalHasFocus] = useControlled({
    name: 'YearCalendar',
    state: 'hasFocus',
    controlled: hasFocus,
    default: autoFocus ?? false
  });
  const changeHasFocus = useEventCallback(newHasFocus => {
    setInternalHasFocus(newHasFocus);
    if (onFocusedViewChange) {
      onFocusedViewChange(newHasFocus);
    }
  });
  const isYearDisabled = React__namespace.useCallback(dateToValidate => {
    if (disablePast && adapter.isBeforeYear(dateToValidate, now)) {
      return true;
    }
    if (disableFuture && adapter.isAfterYear(dateToValidate, now)) {
      return true;
    }
    if (minDate && adapter.isBeforeYear(dateToValidate, minDate)) {
      return true;
    }
    if (maxDate && adapter.isAfterYear(dateToValidate, maxDate)) {
      return true;
    }
    if (!shouldDisableYear) {
      return false;
    }
    const yearToValidate = adapter.startOfYear(dateToValidate);
    return shouldDisableYear(yearToValidate);
  }, [disableFuture, disablePast, maxDate, minDate, now, shouldDisableYear, adapter]);
  const handleYearSelection = useEventCallback((event, year) => {
    if (readOnly) {
      return;
    }
    const newDate = adapter.setYear(value ?? referenceDate, year);
    handleValueChange(newDate);
  });
  const focusYear = useEventCallback(year => {
    if (!isYearDisabled(adapter.setYear(value ?? referenceDate, year))) {
      setFocusedYear(year);
      changeHasFocus(true);
      onYearFocus?.(year);
    }
  });
  React__namespace.useEffect(() => {
    setFocusedYear(prevFocusedYear => selectedYear !== null && prevFocusedYear !== selectedYear ? selectedYear : prevFocusedYear);
  }, [selectedYear]);
  const verticalDirection = yearsOrder !== 'desc' ? yearsPerRow * 1 : yearsPerRow * -1;
  const horizontalDirection = isRtl && yearsOrder === 'asc' || !isRtl && yearsOrder === 'desc' ? -1 : 1;
  const handleKeyDown = useEventCallback((event, year) => {
    switch (event.key) {
      case 'ArrowUp':
        focusYear(year - verticalDirection);
        event.preventDefault();
        break;
      case 'ArrowDown':
        focusYear(year + verticalDirection);
        event.preventDefault();
        break;
      case 'ArrowLeft':
        focusYear(year - horizontalDirection);
        event.preventDefault();
        break;
      case 'ArrowRight':
        focusYear(year + horizontalDirection);
        event.preventDefault();
        break;
    }
  });
  const handleYearFocus = useEventCallback((event, year) => {
    focusYear(year);
  });
  const handleYearBlur = useEventCallback((event, year) => {
    if (focusedYear === year) {
      changeHasFocus(false);
    }
  });
  const scrollerRef = React__namespace.useRef(null);
  const handleRef = useForkRef(ref, scrollerRef);
  React__namespace.useEffect(() => {
    if (autoFocus || scrollerRef.current === null) {
      return;
    }
    const tabbableButton = scrollerRef.current.querySelector('[tabindex="0"]');
    if (!tabbableButton) {
      return;
    }

    // Taken from useScroll in x-data-grid, but vertically centered
    const offsetHeight = tabbableButton.offsetHeight;
    const offsetTop = tabbableButton.offsetTop;
    const clientHeight = scrollerRef.current.clientHeight;
    const scrollTop = scrollerRef.current.scrollTop;
    const elementBottom = offsetTop + offsetHeight;
    if (offsetHeight > clientHeight || offsetTop < scrollTop) {
      // Button already visible
      return;
    }
    scrollerRef.current.scrollTop = elementBottom - clientHeight / 2 - offsetHeight / 2;
  }, [autoFocus]);
  const yearRange = adapter.getYearRange([minDate, maxDate]);
  if (yearsOrder === 'desc') {
    yearRange.reverse();
  }
  let fillerAmount = yearsPerRow - yearRange.length % yearsPerRow;
  if (fillerAmount === yearsPerRow) {
    fillerAmount = 0;
  }
  return /*#__PURE__*/jsxRuntime.jsxs(YearCalendarRoot, _extends({
    ref: handleRef,
    className: clsx(classes.root, className),
    ownerState: ownerState,
    role: "radiogroup",
    "aria-labelledby": gridLabelId,
    yearsPerRow: yearsPerRow
  }, other, {
    children: [yearRange.map(year => {
      const yearNumber = adapter.getYear(year);
      const isSelected = yearNumber === selectedYear;
      const isDisabled = disabled || isYearDisabled(year);
      return /*#__PURE__*/jsxRuntime.jsx(YearCalendarButton, {
        selected: isSelected,
        value: yearNumber,
        onClick: handleYearSelection,
        onKeyDown: handleKeyDown,
        autoFocus: internalHasFocus && yearNumber === focusedYear,
        disabled: isDisabled,
        tabIndex: yearNumber === focusedYear && !isDisabled ? 0 : -1,
        onFocus: handleYearFocus,
        onBlur: handleYearBlur,
        "aria-current": todayYear === yearNumber ? 'date' : undefined,
        slots: slots,
        slotProps: slotProps,
        classes: classesProp,
        children: adapter.format(year, 'year')
      }, adapter.format(year, 'year'));
    }), Array.from({
      length: fillerAmount
    }, (_, index) => /*#__PURE__*/jsxRuntime.jsx(YearCalendarButtonFiller, {}, index))]
  }));
});
if (process.env.NODE_ENV !== "production") YearCalendar.displayName = "YearCalendar";
process.env.NODE_ENV !== "production" ? YearCalendar.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  autoFocus: PropTypes.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,
  className: PropTypes.string,
  /**
   * The default selected value.
   * Used when the component is not controlled.
   */
  defaultValue: PropTypes.object,
  /**
   * If `true`, the component is disabled.
   * When disabled, the value cannot be changed and no interaction is possible.
   * @default false
   */
  disabled: PropTypes.bool,
  /**
   * If `true`, disable values after the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disableFuture: PropTypes.bool,
  /**
   * If `true`, today's date is rendering without highlighting with circle.
   * @default false
   */
  disableHighlightToday: PropTypes.bool,
  /**
   * If `true`, disable values before the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disablePast: PropTypes.bool,
  gridLabelId: PropTypes.string,
  hasFocus: PropTypes.bool,
  /**
   * Maximal selectable date.
   * @default 2099-12-31
   */
  maxDate: PropTypes.object,
  /**
   * Minimal selectable date.
   * @default 1900-01-01
   */
  minDate: PropTypes.object,
  /**
   * Callback fired when the value changes.
   * @param {PickerValidDate} value The new value.
   */
  onChange: PropTypes.func,
  onFocusedViewChange: PropTypes.func,
  onYearFocus: PropTypes.func,
  /**
   * If `true`, the component is read-only.
   * When read-only, the value cannot be changed but the user can interact with the interface.
   * @default false
   */
  readOnly: PropTypes.bool,
  /**
   * The date used to generate the new value when both `value` and `defaultValue` are empty.
   * @default The closest valid year using the validation props, except callbacks such as `shouldDisableYear`.
   */
  referenceDate: PropTypes.object,
  /**
   * Disable specific year.
   * @param {PickerValidDate} year The year to test.
   * @returns {boolean} If `true`, the year will be disabled.
   */
  shouldDisableYear: PropTypes.func,
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: PropTypes.object,
  /**
   * Overridable component slots.
   * @default {}
   */
  slots: PropTypes.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])), PropTypes.func, PropTypes.object]),
  /**
   * Choose which timezone to use for the value.
   * Example: "default", "system", "UTC", "America/New_York".
   * If you pass values from other timezones to some props, they will be converted to this timezone before being used.
   * @see See the {@link https://mui.com/x/react-date-pickers/timezone/ timezones documentation} for more details.
   * @default The timezone of the `value` or `defaultValue` prop is defined, 'default' otherwise.
   */
  timezone: PropTypes.string,
  /**
   * The selected value.
   * Used when the component is controlled.
   */
  value: PropTypes.object,
  /**
   * Years are displayed in ascending (chronological) order by default.
   * If `desc`, years are displayed in descending order.
   * @default 'asc'
   */
  yearsOrder: PropTypes.oneOf(['asc', 'desc']),
  /**
   * Years rendered per row.
   * @default 3
   */
  yearsPerRow: PropTypes.oneOf([3, 4])
} : void 0;

const getPickersCalendarHeaderUtilityClass = slot => generateUtilityClass('MuiPickersCalendarHeader', slot);
const pickersCalendarHeaderClasses = generateUtilityClasses('MuiPickersCalendarHeader', ['root', 'labelContainer', 'label', 'switchViewButton', 'switchViewIcon']);

const _excluded$j = ["slots", "slotProps", "currentMonth", "disabled", "disableFuture", "disablePast", "maxDate", "minDate", "onMonthChange", "onViewChange", "view", "reduceAnimations", "views", "labelId", "className", "classes", "timezone", "format"],
  _excluded2$3 = ["ownerState"];
const useUtilityClasses$b = classes => {
  const slots = {
    root: ['root'],
    labelContainer: ['labelContainer'],
    label: ['label'],
    switchViewButton: ['switchViewButton'],
    switchViewIcon: ['switchViewIcon']
  };
  return composeClasses(slots, getPickersCalendarHeaderUtilityClass, classes);
};
const PickersCalendarHeaderRoot = styles.styled('div', {
  name: 'MuiPickersCalendarHeader',
  slot: 'Root'
})({
  display: 'flex',
  alignItems: 'center',
  marginTop: 12,
  marginBottom: 4,
  paddingLeft: 24,
  paddingRight: 12,
  // prevent jumping in safari
  maxHeight: 40,
  minHeight: 40
});
const PickersCalendarHeaderLabelContainer = styles.styled('div', {
  name: 'MuiPickersCalendarHeader',
  slot: 'LabelContainer'
})(({
  theme
}) => _extends({
  display: 'flex',
  overflow: 'hidden',
  alignItems: 'center',
  cursor: 'pointer',
  marginRight: 'auto'
}, theme.typography.body1, {
  fontWeight: theme.typography.fontWeightMedium
}));
const PickersCalendarHeaderLabel = styles.styled('div', {
  name: 'MuiPickersCalendarHeader',
  slot: 'Label'
})({
  marginRight: 6
});
const PickersCalendarHeaderSwitchViewButton = styles.styled(IconButton, {
  name: 'MuiPickersCalendarHeader',
  slot: 'SwitchViewButton'
})({
  marginRight: 'auto',
  variants: [{
    props: {
      view: 'year'
    },
    style: {
      [`.${pickersCalendarHeaderClasses.switchViewIcon}`]: {
        transform: 'rotate(180deg)'
      }
    }
  }]
});
const PickersCalendarHeaderSwitchViewIcon = styles.styled(ArrowDropDownIcon, {
  name: 'MuiPickersCalendarHeader',
  slot: 'SwitchViewIcon'
})(({
  theme
}) => ({
  willChange: 'transform',
  transition: theme.transitions.create('transform'),
  transform: 'rotate(0deg)'
}));
/**
 * Demos:
 *
 * - [DateCalendar](https://mui.com/x/react-date-pickers/date-calendar/)
 * - [DateRangeCalendar](https://mui.com/x/react-date-pickers/date-range-calendar/)
 * - [Custom slots and subcomponents](https://mui.com/x/react-date-pickers/custom-components/)
 *
 * API:
 *
 * - [PickersCalendarHeader API](https://mui.com/x/api/date-pickers/pickers-calendar-header/)
 */
const PickersCalendarHeader = /*#__PURE__*/React__namespace.forwardRef(function PickersCalendarHeader(inProps, ref) {
  const translations = usePickerTranslations();
  const adapter = usePickerAdapter();
  const props = styles.useThemeProps({
    props: inProps,
    name: 'MuiPickersCalendarHeader'
  });
  const {
      slots,
      slotProps,
      currentMonth: month,
      disabled,
      disableFuture,
      disablePast,
      maxDate,
      minDate,
      onMonthChange,
      onViewChange,
      view,
      reduceAnimations,
      views,
      labelId,
      className,
      classes: classesProp,
      timezone,
      format = `${adapter.formats.month} ${adapter.formats.year}`
    } = props,
    other = _objectWithoutPropertiesLoose(props, _excluded$j);
  const {
    ownerState
  } = usePickerPrivateContext();
  const classes = useUtilityClasses$b(classesProp);
  const SwitchViewButton = slots?.switchViewButton ?? PickersCalendarHeaderSwitchViewButton;
  const switchViewButtonProps = useSlotProps({
    elementType: SwitchViewButton,
    externalSlotProps: slotProps?.switchViewButton,
    additionalProps: {
      size: 'small',
      'aria-label': translations.calendarViewSwitchingButtonAriaLabel(view)
    },
    ownerState: _extends({}, ownerState, {
      view
    }),
    className: classes.switchViewButton
  });
  const SwitchViewIcon = slots?.switchViewIcon ?? PickersCalendarHeaderSwitchViewIcon;
  // The spread is here to avoid this bug mui/material-ui#34056
  const _useSlotProps = useSlotProps({
      elementType: SwitchViewIcon,
      externalSlotProps: slotProps?.switchViewIcon,
      ownerState,
      className: classes.switchViewIcon
    }),
    switchViewIconProps = _objectWithoutPropertiesLoose(_useSlotProps, _excluded2$3);
  const selectNextMonth = () => onMonthChange(adapter.addMonths(month, 1));
  const selectPreviousMonth = () => onMonthChange(adapter.addMonths(month, -1));
  const isNextMonthDisabled = useNextMonthDisabled(month, {
    disableFuture,
    maxDate,
    timezone
  });
  const isPreviousMonthDisabled = usePreviousMonthDisabled(month, {
    disablePast,
    minDate,
    timezone
  });
  const handleToggleView = () => {
    if (views.length === 1 || !onViewChange || disabled) {
      return;
    }
    if (views.length === 2) {
      onViewChange(views.find(el => el !== view) || views[0]);
    } else {
      // switching only between first 2
      const nextIndexToOpen = views.indexOf(view) !== 0 ? 0 : 1;
      onViewChange(views[nextIndexToOpen]);
    }
  };

  // No need to display more information
  if (views.length === 1 && views[0] === 'year') {
    return null;
  }
  const label = adapter.formatByString(month, format);
  return /*#__PURE__*/jsxRuntime.jsxs(PickersCalendarHeaderRoot, _extends({}, other, {
    ownerState: ownerState,
    className: clsx(classes.root, className),
    ref: ref,
    children: [/*#__PURE__*/jsxRuntime.jsxs(PickersCalendarHeaderLabelContainer, {
      role: "presentation",
      onClick: handleToggleView,
      ownerState: ownerState
      // putting this on the label item element below breaks when using transition
      ,
      "aria-live": "polite",
      className: classes.labelContainer,
      children: [/*#__PURE__*/jsxRuntime.jsx(PickersFadeTransitionGroup, {
        reduceAnimations: reduceAnimations,
        transKey: label,
        children: /*#__PURE__*/jsxRuntime.jsx(PickersCalendarHeaderLabel, {
          id: labelId,
          ownerState: ownerState,
          className: classes.label,
          children: label
        })
      }), views.length > 1 && !disabled && /*#__PURE__*/jsxRuntime.jsx(SwitchViewButton, _extends({}, switchViewButtonProps, {
        children: /*#__PURE__*/jsxRuntime.jsx(SwitchViewIcon, _extends({}, switchViewIconProps))
      }))]
    }), /*#__PURE__*/jsxRuntime.jsx(Fade, {
      in: view === 'day',
      appear: !reduceAnimations,
      enter: !reduceAnimations,
      children: /*#__PURE__*/jsxRuntime.jsx(PickersArrowSwitcher, {
        slots: slots,
        slotProps: slotProps,
        onGoToPrevious: selectPreviousMonth,
        isPreviousDisabled: isPreviousMonthDisabled,
        previousLabel: translations.previousMonth,
        onGoToNext: selectNextMonth,
        isNextDisabled: isNextMonthDisabled,
        nextLabel: translations.nextMonth
      })
    })]
  }));
});
if (process.env.NODE_ENV !== "production") PickersCalendarHeader.displayName = "PickersCalendarHeader";
process.env.NODE_ENV !== "production" ? PickersCalendarHeader.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,
  className: PropTypes.string,
  currentMonth: PropTypes.object.isRequired,
  disabled: PropTypes.bool,
  disableFuture: PropTypes.bool,
  disablePast: PropTypes.bool,
  /**
   * Format used to display the date.
   * @default `${adapter.formats.month} ${adapter.formats.year}`
   */
  format: PropTypes.string,
  /**
   * Id of the calendar text element.
   * It is used to establish an `aria-labelledby` relationship with the calendar `grid` element.
   */
  labelId: PropTypes.string,
  maxDate: PropTypes.object.isRequired,
  minDate: PropTypes.object.isRequired,
  onMonthChange: PropTypes.func.isRequired,
  onViewChange: PropTypes.func,
  reduceAnimations: PropTypes.bool.isRequired,
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: PropTypes.object,
  /**
   * Overridable component slots.
   * @default {}
   */
  slots: PropTypes.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])), PropTypes.func, PropTypes.object]),
  timezone: PropTypes.string.isRequired,
  view: PropTypes.oneOf(['day', 'month', 'year']).isRequired,
  views: PropTypes.arrayOf(PropTypes.oneOf(['day', 'month', 'year']).isRequired).isRequired
} : void 0;

const PREFERS_REDUCED_MOTION = '@media (prefers-reduced-motion: reduce)';

// detect if user agent has Android version < 10 or iOS version < 13
const mobileVersionMatches = typeof navigator !== 'undefined' && navigator.userAgent.match(/android\s(\d+)|OS\s(\d+)/i);
const androidVersion = mobileVersionMatches && mobileVersionMatches[1] ? parseInt(mobileVersionMatches[1], 10) : null;
const iOSVersion = mobileVersionMatches && mobileVersionMatches[2] ? parseInt(mobileVersionMatches[2], 10) : null;
const slowAnimationDevices = androidVersion && androidVersion < 10 || iOSVersion && iOSVersion < 13 || false;
function useReduceAnimations(customReduceAnimations) {
  const prefersReduced = useMediaQuery(PREFERS_REDUCED_MOTION, {
    defaultMatches: false
  });
  if (customReduceAnimations != null) {
    return customReduceAnimations;
  }
  return prefersReduced || slowAnimationDevices;
}

const getDateCalendarUtilityClass = slot => generateUtilityClass('MuiDateCalendar', slot);
generateUtilityClasses('MuiDateCalendar', ['root', 'viewTransitionContainer']);

const _excluded$i = ["autoFocus", "onViewChange", "value", "defaultValue", "referenceDate", "disableFuture", "disablePast", "onChange", "onYearChange", "onMonthChange", "reduceAnimations", "shouldDisableDate", "shouldDisableMonth", "shouldDisableYear", "view", "views", "openTo", "className", "classes", "disabled", "readOnly", "minDate", "maxDate", "disableHighlightToday", "focusedView", "onFocusedViewChange", "showDaysOutsideCurrentMonth", "fixedWeekNumber", "dayOfWeekFormatter", "slots", "slotProps", "loading", "renderLoading", "displayWeekNumber", "yearsOrder", "yearsPerRow", "monthsPerRow", "timezone"];
const useUtilityClasses$a = classes => {
  const slots = {
    root: ['root'],
    viewTransitionContainer: ['viewTransitionContainer']
  };
  return composeClasses(slots, getDateCalendarUtilityClass, classes);
};
function useDateCalendarDefaultizedProps(props, name) {
  const themeProps = styles.useThemeProps({
    props,
    name
  });
  const reduceAnimations = useReduceAnimations(themeProps.reduceAnimations);
  const validationProps = useApplyDefaultValuesToDateValidationProps(themeProps);
  return _extends({}, themeProps, validationProps, {
    loading: themeProps.loading ?? false,
    openTo: themeProps.openTo ?? 'day',
    views: themeProps.views ?? ['year', 'day'],
    reduceAnimations,
    renderLoading: themeProps.renderLoading ?? (() => /*#__PURE__*/jsxRuntime.jsx("span", {
      children: "..."
    }))
  });
}
const DateCalendarRoot = styles.styled(PickerViewRoot, {
  name: 'MuiDateCalendar',
  slot: 'Root'
})({
  display: 'flex',
  flexDirection: 'column',
  height: VIEW_HEIGHT
});
const DateCalendarViewTransitionContainer = styles.styled(PickersFadeTransitionGroup, {
  name: 'MuiDateCalendar',
  slot: 'ViewTransitionContainer'
})({});
/**
 * Demos:
 *
 * - [DatePicker](https://mui.com/x/react-date-pickers/date-picker/)
 * - [DateCalendar](https://mui.com/x/react-date-pickers/date-calendar/)
 * - [Validation](https://mui.com/x/react-date-pickers/validation/)
 *
 * API:
 *
 * - [DateCalendar API](https://mui.com/x/api/date-pickers/date-calendar/)
 */
const DateCalendar = /*#__PURE__*/React__namespace.forwardRef(function DateCalendar(inProps, ref) {
  const adapter = usePickerAdapter();
  const {
    ownerState
  } = usePickerPrivateContext();
  const id = useId();
  const props = useDateCalendarDefaultizedProps(inProps, 'MuiDateCalendar');
  const {
      autoFocus,
      onViewChange,
      value: valueProp,
      defaultValue,
      referenceDate: referenceDateProp,
      disableFuture,
      disablePast,
      onChange,
      onMonthChange,
      reduceAnimations,
      shouldDisableDate,
      shouldDisableMonth,
      shouldDisableYear,
      view: inView,
      views,
      openTo,
      className,
      classes: classesProp,
      disabled,
      readOnly,
      minDate,
      maxDate,
      disableHighlightToday,
      focusedView: focusedViewProp,
      onFocusedViewChange,
      showDaysOutsideCurrentMonth,
      fixedWeekNumber,
      dayOfWeekFormatter,
      slots,
      slotProps,
      loading,
      renderLoading,
      displayWeekNumber,
      yearsOrder,
      yearsPerRow,
      monthsPerRow,
      timezone: timezoneProp
    } = props,
    other = _objectWithoutPropertiesLoose(props, _excluded$i);
  const {
    value,
    handleValueChange,
    timezone
  } = useControlledValue({
    name: 'DateCalendar',
    timezone: timezoneProp,
    value: valueProp,
    defaultValue,
    referenceDate: referenceDateProp,
    onChange,
    valueManager: singleItemValueManager
  });
  const {
    view,
    setView,
    focusedView,
    setFocusedView,
    goToNextView,
    setValueAndGoToNextView
  } = useViews({
    view: inView,
    views,
    openTo,
    onChange: handleValueChange,
    onViewChange,
    autoFocus,
    focusedView: focusedViewProp,
    onFocusedViewChange
  });
  const {
    referenceDate,
    calendarState,
    setVisibleDate,
    isDateDisabled,
    onMonthSwitchingAnimationEnd
  } = useCalendarState({
    value,
    referenceDate: referenceDateProp,
    reduceAnimations,
    onMonthChange,
    minDate,
    maxDate,
    shouldDisableDate,
    disablePast,
    disableFuture,
    timezone,
    getCurrentMonthFromVisibleDate: (visibleDate, prevMonth) => {
      if (adapter.isSameMonth(visibleDate, prevMonth)) {
        return prevMonth;
      }
      return adapter.startOfMonth(visibleDate);
    }
  });

  // When disabled, limit the view to the selected date
  const minDateWithDisabled = disabled && value || minDate;
  const maxDateWithDisabled = disabled && value || maxDate;
  const gridLabelId = `${id}-grid-label`;
  const hasFocus = focusedView !== null;
  const CalendarHeader = slots?.calendarHeader ?? PickersCalendarHeader;
  const calendarHeaderProps = useSlotProps({
    elementType: CalendarHeader,
    externalSlotProps: slotProps?.calendarHeader,
    additionalProps: {
      views,
      view,
      currentMonth: calendarState.currentMonth,
      onViewChange: setView,
      onMonthChange: month => setVisibleDate({
        target: month,
        reason: 'header-navigation'
      }),
      minDate: minDateWithDisabled,
      maxDate: maxDateWithDisabled,
      disabled,
      disablePast,
      disableFuture,
      reduceAnimations,
      timezone,
      labelId: gridLabelId
    },
    ownerState
  });
  const handleDateMonthChange = useEventCallback(newDate => {
    const startOfMonth = adapter.startOfMonth(newDate);
    const endOfMonth = adapter.endOfMonth(newDate);
    const closestEnabledDate = isDateDisabled(newDate) ? findClosestEnabledDate({
      adapter,
      date: newDate,
      minDate: adapter.isBefore(minDate, startOfMonth) ? startOfMonth : minDate,
      maxDate: adapter.isAfter(maxDate, endOfMonth) ? endOfMonth : maxDate,
      disablePast,
      disableFuture,
      isDateDisabled,
      timezone
    }) : newDate;
    if (closestEnabledDate) {
      setValueAndGoToNextView(closestEnabledDate, 'finish');
      setVisibleDate({
        target: closestEnabledDate,
        reason: 'cell-interaction'
      });
    } else {
      goToNextView();
      setVisibleDate({
        target: startOfMonth,
        reason: 'cell-interaction'
      });
    }
  });
  const handleDateYearChange = useEventCallback(newDate => {
    const startOfYear = adapter.startOfYear(newDate);
    const endOfYear = adapter.endOfYear(newDate);
    const closestEnabledDate = isDateDisabled(newDate) ? findClosestEnabledDate({
      adapter,
      date: newDate,
      minDate: adapter.isBefore(minDate, startOfYear) ? startOfYear : minDate,
      maxDate: adapter.isAfter(maxDate, endOfYear) ? endOfYear : maxDate,
      disablePast,
      disableFuture,
      isDateDisabled,
      timezone
    }) : newDate;
    if (closestEnabledDate) {
      setValueAndGoToNextView(closestEnabledDate, 'finish');
      setVisibleDate({
        target: closestEnabledDate,
        reason: 'cell-interaction'
      });
    } else {
      goToNextView();
      setVisibleDate({
        target: startOfYear,
        reason: 'cell-interaction'
      });
    }
  });
  const handleSelectedDayChange = useEventCallback(day => {
    if (day) {
      // If there is a date already selected, then we want to keep its time
      return handleValueChange(mergeDateAndTime(adapter, day, value ?? referenceDate), 'finish', view);
    }
    return handleValueChange(day, 'finish', view);
  });
  React__namespace.useEffect(() => {
    if (adapter.isValid(value)) {
      setVisibleDate({
        target: value,
        reason: 'controlled-value-change'
      });
    }
  }, [value]); // eslint-disable-line

  const classes = useUtilityClasses$a(classesProp);
  const baseDateValidationProps = {
    disablePast,
    disableFuture,
    maxDate,
    minDate
  };
  const commonViewProps = {
    disableHighlightToday,
    readOnly,
    disabled,
    timezone,
    gridLabelId,
    slots,
    slotProps
  };
  const prevOpenViewRef = React__namespace.useRef(view);
  React__namespace.useEffect(() => {
    // If the view change and the focus was on the previous view
    // Then we update the focus.
    if (prevOpenViewRef.current === view) {
      return;
    }
    if (focusedView === prevOpenViewRef.current) {
      setFocusedView(view, true);
    }
    prevOpenViewRef.current = view;
  }, [focusedView, setFocusedView, view]);
  const selectedDays = React__namespace.useMemo(() => [value], [value]);
  return /*#__PURE__*/jsxRuntime.jsxs(DateCalendarRoot, _extends({
    ref: ref,
    className: clsx(classes.root, className),
    ownerState: ownerState
  }, other, {
    children: [/*#__PURE__*/jsxRuntime.jsx(CalendarHeader, _extends({}, calendarHeaderProps, {
      slots: slots,
      slotProps: slotProps
    })), /*#__PURE__*/jsxRuntime.jsx(DateCalendarViewTransitionContainer, {
      reduceAnimations: reduceAnimations,
      className: classes.viewTransitionContainer,
      transKey: view,
      ownerState: ownerState,
      children: /*#__PURE__*/jsxRuntime.jsxs("div", {
        children: [view === 'year' && /*#__PURE__*/jsxRuntime.jsx(YearCalendar, _extends({}, baseDateValidationProps, commonViewProps, {
          value: value,
          onChange: handleDateYearChange,
          shouldDisableYear: shouldDisableYear,
          hasFocus: hasFocus,
          onFocusedViewChange: isViewFocused => setFocusedView('year', isViewFocused),
          yearsOrder: yearsOrder,
          yearsPerRow: yearsPerRow,
          referenceDate: referenceDate
        })), view === 'month' && /*#__PURE__*/jsxRuntime.jsx(MonthCalendar, _extends({}, baseDateValidationProps, commonViewProps, {
          hasFocus: hasFocus,
          className: className,
          value: value,
          onChange: handleDateMonthChange,
          shouldDisableMonth: shouldDisableMonth,
          onFocusedViewChange: isViewFocused => setFocusedView('month', isViewFocused),
          monthsPerRow: monthsPerRow,
          referenceDate: referenceDate
        })), view === 'day' && /*#__PURE__*/jsxRuntime.jsx(DayCalendar, _extends({}, calendarState, baseDateValidationProps, commonViewProps, {
          onMonthSwitchingAnimationEnd: onMonthSwitchingAnimationEnd,
          hasFocus: hasFocus,
          onFocusedDayChange: focusedDate => setVisibleDate({
            target: focusedDate,
            reason: 'cell-interaction'
          }),
          reduceAnimations: reduceAnimations,
          selectedDays: selectedDays,
          onSelectedDaysChange: handleSelectedDayChange,
          shouldDisableDate: shouldDisableDate,
          shouldDisableMonth: shouldDisableMonth,
          shouldDisableYear: shouldDisableYear,
          onFocusedViewChange: isViewFocused => setFocusedView('day', isViewFocused),
          showDaysOutsideCurrentMonth: showDaysOutsideCurrentMonth,
          fixedWeekNumber: fixedWeekNumber,
          dayOfWeekFormatter: dayOfWeekFormatter,
          displayWeekNumber: displayWeekNumber,
          loading: loading,
          renderLoading: renderLoading
        }))]
      })
    })]
  }));
});
if (process.env.NODE_ENV !== "production") DateCalendar.displayName = "DateCalendar";
process.env.NODE_ENV !== "production" ? DateCalendar.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * If `true`, the main element is focused during the first mount.
   * This main element is:
   * - the element chosen by the visible view if any (i.e: the selected day on the `day` view).
   * - the `input` element if there is a field rendered.
   */
  autoFocus: PropTypes.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,
  className: PropTypes.string,
  /**
   * Formats the day of week displayed in the calendar header.
   * @param {PickerValidDate} date The date of the day of week provided by the adapter.
   * @returns {string} The name to display.
   * @default (date: PickerValidDate) => adapter.format(date, 'weekdayShort').charAt(0).toUpperCase()
   */
  dayOfWeekFormatter: PropTypes.func,
  /**
   * The default selected value.
   * Used when the component is not controlled.
   */
  defaultValue: PropTypes.object,
  /**
   * If `true`, the component is disabled.
   * When disabled, the value cannot be changed and no interaction is possible.
   * @default false
   */
  disabled: PropTypes.bool,
  /**
   * If `true`, disable values after the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disableFuture: PropTypes.bool,
  /**
   * If `true`, today's date is rendering without highlighting with circle.
   * @default false
   */
  disableHighlightToday: PropTypes.bool,
  /**
   * If `true`, disable values before the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disablePast: PropTypes.bool,
  /**
   * If `true`, the week number will be display in the calendar.
   */
  displayWeekNumber: PropTypes.bool,
  /**
   * The day view will show as many weeks as needed after the end of the current month to match this value.
   * Put it to 6 to have a fixed number of weeks in Gregorian calendars
   */
  fixedWeekNumber: PropTypes.number,
  /**
   * Controlled focused view.
   */
  focusedView: PropTypes.oneOf(['day', 'month', 'year']),
  /**
   * If `true`, calls `renderLoading` instead of rendering the day calendar.
   * Can be used to preload information and show it in calendar.
   * @default false
   */
  loading: PropTypes.bool,
  /**
   * Maximal selectable date.
   * @default 2099-12-31
   */
  maxDate: PropTypes.object,
  /**
   * Minimal selectable date.
   * @default 1900-01-01
   */
  minDate: PropTypes.object,
  /**
   * Months rendered per row.
   * @default 3
   */
  monthsPerRow: PropTypes.oneOf([3, 4]),
  /**
   * Callback fired when the value changes.
   * @template TValue The value type. It will be the same type as `value` or `null`. It can be in `[start, end]` format in case of range value.
   * @template TView The view type. Will be one of date or time views.
   * @param {TValue} value The new value.
   * @param {PickerSelectionState | undefined} selectionState Indicates if the date selection is complete.
   * @param {TView | undefined} selectedView Indicates the view in which the selection has been made.
   */
  onChange: PropTypes.func,
  /**
   * Callback fired on focused view change.
   * @template TView Type of the view. It will vary based on the Picker type and the `views` it uses.
   * @param {TView} view The new view to focus or not.
   * @param {boolean} hasFocus `true` if the view should be focused.
   */
  onFocusedViewChange: PropTypes.func,
  /**
   * Callback fired on month change.
   * @param {PickerValidDate} month The new month.
   */
  onMonthChange: PropTypes.func,
  /**
   * Callback fired on view change.
   * @template TView Type of the view. It will vary based on the Picker type and the `views` it uses.
   * @param {TView} view The new view.
   */
  onViewChange: PropTypes.func,
  /**
   * Callback fired on year change.
   * @param {PickerValidDate} year The new year.
   */
  onYearChange: PropTypes.func,
  /**
   * The default visible view.
   * Used when the component view is not controlled.
   * Must be a valid option from `views` list.
   */
  openTo: PropTypes.oneOf(['day', 'month', 'year']),
  /**
   * If `true`, the component is read-only.
   * When read-only, the value cannot be changed but the user can interact with the interface.
   * @default false
   */
  readOnly: PropTypes.bool,
  /**
   * If `true`, disable heavy animations.
   * @default `@media(prefers-reduced-motion: reduce)` || `navigator.userAgent` matches Android <10 or iOS <13
   */
  reduceAnimations: PropTypes.bool,
  /**
   * The date used to generate the new value when both `value` and `defaultValue` are empty.
   * @default The closest valid date using the validation props, except callbacks such as `shouldDisableDate`.
   */
  referenceDate: PropTypes.object,
  /**
   * Component displaying when passed `loading` true.
   * @returns {React.ReactNode} The node to render when loading.
   * @default () => <span>...</span>
   */
  renderLoading: PropTypes.func,
  /**
   * Disable specific date.
   *
   * Warning: This function can be called multiple times (for example when rendering date calendar, checking if focus can be moved to a certain date, etc.). Expensive computations can impact performance.
   *
   * @param {PickerValidDate} day The date to test.
   * @returns {boolean} If `true` the date will be disabled.
   */
  shouldDisableDate: PropTypes.func,
  /**
   * Disable specific month.
   * @param {PickerValidDate} month The month to test.
   * @returns {boolean} If `true`, the month will be disabled.
   */
  shouldDisableMonth: PropTypes.func,
  /**
   * Disable specific year.
   * @param {PickerValidDate} year The year to test.
   * @returns {boolean} If `true`, the year will be disabled.
   */
  shouldDisableYear: PropTypes.func,
  /**
   * If `true`, days outside the current month are rendered:
   *
   * - if `fixedWeekNumber` is defined, renders days to have the weeks requested.
   *
   * - if `fixedWeekNumber` is not defined, renders day to fill the first and last week of the current month.
   *
   * - ignored if `calendars` equals more than `1` on range pickers.
   * @default false
   */
  showDaysOutsideCurrentMonth: PropTypes.bool,
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: PropTypes.object,
  /**
   * Overridable component slots.
   * @default {}
   */
  slots: PropTypes.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])), PropTypes.func, PropTypes.object]),
  /**
   * Choose which timezone to use for the value.
   * Example: "default", "system", "UTC", "America/New_York".
   * If you pass values from other timezones to some props, they will be converted to this timezone before being used.
   * @see See the {@link https://mui.com/x/react-date-pickers/timezone/ timezones documentation} for more details.
   * @default The timezone of the `value` or `defaultValue` prop is defined, 'default' otherwise.
   */
  timezone: PropTypes.string,
  /**
   * The selected value.
   * Used when the component is controlled.
   */
  value: PropTypes.object,
  /**
   * The visible view.
   * Used when the component view is controlled.
   * Must be a valid option from `views` list.
   */
  view: PropTypes.oneOf(['day', 'month', 'year']),
  /**
   * Available views.
   */
  views: PropTypes.arrayOf(PropTypes.oneOf(['day', 'month', 'year']).isRequired),
  /**
   * Years are displayed in ascending (chronological) order by default.
   * If `desc`, years are displayed in descending order.
   * @default 'asc'
   */
  yearsOrder: PropTypes.oneOf(['asc', 'desc']),
  /**
   * Years rendered per row.
   * @default 3
   */
  yearsPerRow: PropTypes.oneOf([3, 4])
} : void 0;

function getPickersToolbarUtilityClass(slot) {
  return generateUtilityClass('MuiPickersToolbar', slot);
}
const pickersToolbarClasses = generateUtilityClasses('MuiPickersToolbar', ['root', 'title', 'content']);

function useToolbarOwnerState() {
  const {
    ownerState: pickerOwnerState
  } = usePickerPrivateContext();
  const isRtl = useRtl();
  return React__namespace.useMemo(() => _extends({}, pickerOwnerState, {
    toolbarDirection: isRtl ? 'rtl' : 'ltr'
  }), [pickerOwnerState, isRtl]);
}

const _excluded$h = ["children", "className", "classes", "toolbarTitle", "hidden", "titleId", "classes", "landscapeDirection"];
const useUtilityClasses$9 = classes => {
  const slots = {
    root: ['root'],
    title: ['title'],
    content: ['content']
  };
  return composeClasses(slots, getPickersToolbarUtilityClass, classes);
};
const PickersToolbarRoot = styles.styled('div', {
  name: 'MuiPickersToolbar',
  slot: 'Root'
})(({
  theme
}) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  padding: theme.spacing(2, 3),
  variants: [{
    props: {
      pickerOrientation: 'landscape'
    },
    style: {
      height: 'auto',
      maxWidth: 160,
      padding: 16,
      justifyContent: 'flex-start',
      flexWrap: 'wrap'
    }
  }]
}));
const PickersToolbarContent = styles.styled('div', {
  name: 'MuiPickersToolbar',
  slot: 'Content',
  shouldForwardProp: prop => shouldForwardProp(prop) && prop !== 'landscapeDirection'
})({
  display: 'flex',
  flexWrap: 'wrap',
  width: '100%',
  flex: 1,
  justifyContent: 'space-between',
  alignItems: 'center',
  flexDirection: 'row',
  variants: [{
    props: {
      pickerOrientation: 'landscape'
    },
    style: {
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      flexDirection: 'column'
    }
  }, {
    props: {
      pickerOrientation: 'landscape',
      landscapeDirection: 'row'
    },
    style: {
      flexDirection: 'row'
    }
  }]
});
const PickersToolbar = /*#__PURE__*/React__namespace.forwardRef(function PickersToolbar(inProps, ref) {
  const props = styles.useThemeProps({
    props: inProps,
    name: 'MuiPickersToolbar'
  });
  const {
      children,
      className,
      classes: classesProp,
      toolbarTitle,
      hidden,
      titleId,
      landscapeDirection
    } = props,
    other = _objectWithoutPropertiesLoose(props, _excluded$h);
  const ownerState = useToolbarOwnerState();
  const classes = useUtilityClasses$9(classesProp);
  if (hidden) {
    return null;
  }
  return /*#__PURE__*/jsxRuntime.jsxs(PickersToolbarRoot, _extends({
    ref: ref,
    className: clsx(classes.root, className),
    ownerState: ownerState
  }, other, {
    children: [/*#__PURE__*/jsxRuntime.jsx(Typography, {
      color: "text.secondary",
      variant: "overline",
      id: titleId,
      className: classes.title,
      children: toolbarTitle
    }), /*#__PURE__*/jsxRuntime.jsx(PickersToolbarContent, {
      className: classes.content,
      ownerState: ownerState,
      landscapeDirection: landscapeDirection,
      children: children
    })]
  }));
});
if (process.env.NODE_ENV !== "production") PickersToolbar.displayName = "PickersToolbar";

function getDatePickerToolbarUtilityClass(slot) {
  return generateUtilityClass('MuiDatePickerToolbar', slot);
}
generateUtilityClasses('MuiDatePickerToolbar', ['root', 'title']);

const _excluded$g = ["toolbarFormat", "toolbarPlaceholder", "className", "classes"];
const useUtilityClasses$8 = classes => {
  const slots = {
    root: ['root'],
    title: ['title']
  };
  return composeClasses(slots, getDatePickerToolbarUtilityClass, classes);
};
const DatePickerToolbarRoot = styles.styled(PickersToolbar, {
  name: 'MuiDatePickerToolbar',
  slot: 'Root'
})({});
const DatePickerToolbarTitle = styles.styled(Typography, {
  name: 'MuiDatePickerToolbar',
  slot: 'Title'
})({
  variants: [{
    props: {
      pickerOrientation: 'landscape'
    },
    style: {
      margin: 'auto 16px auto auto'
    }
  }]
});
/**
 * Demos:
 *
 * - [DatePicker](https://mui.com/x/react-date-pickers/date-picker/)
 * - [Custom components](https://mui.com/x/react-date-pickers/custom-components/)
 *
 * API:
 *
 * - [DatePickerToolbar API](https://mui.com/x/api/date-pickers/date-picker-toolbar/)
 */
const DatePickerToolbar = /*#__PURE__*/React__namespace.forwardRef(function DatePickerToolbar(inProps, ref) {
  const props = styles.useThemeProps({
    props: inProps,
    name: 'MuiDatePickerToolbar'
  });
  const {
      toolbarFormat,
      toolbarPlaceholder = '––',
      className,
      classes: classesProp
    } = props,
    other = _objectWithoutPropertiesLoose(props, _excluded$g);
  const adapter = usePickerAdapter();
  const {
    value,
    views,
    orientation
  } = usePickerContext();
  const translations = usePickerTranslations();
  const ownerState = useToolbarOwnerState();
  const classes = useUtilityClasses$8(classesProp);
  const dateText = React__namespace.useMemo(() => {
    if (!adapter.isValid(value)) {
      return toolbarPlaceholder;
    }
    const formatFromViews = resolveDateFormat(adapter, {
      format: toolbarFormat,
      views
    }, true);
    return adapter.formatByString(value, formatFromViews);
  }, [value, toolbarFormat, toolbarPlaceholder, adapter, views]);
  return /*#__PURE__*/jsxRuntime.jsx(DatePickerToolbarRoot, _extends({
    ref: ref,
    toolbarTitle: translations.datePickerToolbarTitle,
    className: clsx(classes.root, className)
  }, other, {
    children: /*#__PURE__*/jsxRuntime.jsx(DatePickerToolbarTitle, {
      variant: "h4",
      align: orientation === 'landscape' ? 'left' : 'center',
      ownerState: ownerState,
      className: classes.title,
      children: dateText
    })
  }));
});
if (process.env.NODE_ENV !== "production") DatePickerToolbar.displayName = "DatePickerToolbar";
process.env.NODE_ENV !== "production" ? DatePickerToolbar.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,
  className: PropTypes.string,
  /**
   * If `true`, show the toolbar even in desktop mode.
   * @default `true` for Desktop, `false` for Mobile.
   */
  hidden: PropTypes.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])), PropTypes.func, PropTypes.object]),
  titleId: PropTypes.string,
  /**
   * Toolbar date format.
   */
  toolbarFormat: PropTypes.string,
  /**
   * Toolbar value placeholder—it is displayed when the value is empty.
   * @default "––"
   */
  toolbarPlaceholder: PropTypes.node
} : void 0;

function useDatePickerDefaultizedProps(props, name) {
  const themeProps = styles.useThemeProps({
    props,
    name
  });
  const validationProps = useApplyDefaultValuesToDateValidationProps(themeProps);
  const localeText = React__namespace.useMemo(() => {
    if (themeProps.localeText?.toolbarTitle == null) {
      return themeProps.localeText;
    }
    return _extends({}, themeProps.localeText, {
      datePickerToolbarTitle: themeProps.localeText.toolbarTitle
    });
  }, [themeProps.localeText]);
  return _extends({}, themeProps, validationProps, {
    localeText
  }, applyDefaultViewProps({
    views: themeProps.views,
    openTo: themeProps.openTo,
    defaultViews: ['year', 'day'],
    defaultOpenTo: 'day'
  }), {
    slots: _extends({
      toolbar: DatePickerToolbar
    }, themeProps.slots)
  });
}

function getPickerPopperUtilityClass(slot) {
  return generateUtilityClass('MuiPickerPopper', slot);
}
generateUtilityClasses('MuiPickerPopper', ['root', 'paper']);

const _excluded$f = ["PaperComponent", "ownerState", "children", "paperSlotProps", "paperClasses", "onPaperClick", "onPaperTouchStart"];
const useUtilityClasses$7 = classes => {
  const slots = {
    root: ['root'],
    paper: ['paper']
  };
  return composeClasses(slots, getPickerPopperUtilityClass, classes);
};
const PickerPopperRoot = styles.styled(MuiPopper, {
  name: 'MuiPickerPopper',
  slot: 'Root'
})(({
  theme
}) => ({
  zIndex: theme.zIndex.modal
}));
const PickerPopperPaper = styles.styled(MuiPaper, {
  name: 'MuiPickerPopper',
  slot: 'Paper'
})({
  outline: 0,
  transformOrigin: 'top center',
  variants: [{
    props: ({
      popperPlacement
    }) => new Set(['top', 'top-start', 'top-end']).has(popperPlacement),
    style: {
      transformOrigin: 'bottom center'
    }
  }]
});
function clickedRootScrollbar(event, doc) {
  return doc.documentElement.clientWidth < event.clientX || doc.documentElement.clientHeight < event.clientY;
}
/**
 * Based on @mui/material/ClickAwayListener without the customization.
 * We can probably strip away even more since children won't be portaled.
 * @param {boolean} active Only listen to clicks when the popper is opened.
 * @param {(event: MouseEvent | TouchEvent) => void} onClickAway The callback to call when clicking outside the popper.
 * @returns {Array} The ref and event handler to listen to the outside clicks.
 */
function useClickAwayListener(active, onClickAway) {
  const movedRef = React__namespace.useRef(false);
  const syntheticEventRef = React__namespace.useRef(false);
  const nodeRef = React__namespace.useRef(null);
  const activatedRef = React__namespace.useRef(false);
  React__namespace.useEffect(() => {
    if (!active) {
      return undefined;
    }

    // Ensure that this hook is not "activated" synchronously.
    // https://github.com/facebook/react/issues/20074
    function armClickAwayListener() {
      activatedRef.current = true;
    }
    document.addEventListener('mousedown', armClickAwayListener, true);
    document.addEventListener('touchstart', armClickAwayListener, true);
    return () => {
      document.removeEventListener('mousedown', armClickAwayListener, true);
      document.removeEventListener('touchstart', armClickAwayListener, true);
      activatedRef.current = false;
    };
  }, [active]);

  // The handler doesn't take event.defaultPrevented into account:
  //
  // event.preventDefault() is meant to stop default behaviors like
  // clicking a checkbox to check it, hitting a button to submit a form,
  // and hitting left arrow to move the cursor in a text input etc.
  // Only special HTML elements have these default behaviors.
  const handleClickAway = useEventCallback(event => {
    if (!activatedRef.current) {
      return;
    }

    // Given developers can stop the propagation of the synthetic event,
    // we can only be confident with a positive value.
    const insideReactTree = syntheticEventRef.current;
    syntheticEventRef.current = false;
    const doc = ownerDocument(nodeRef.current);

    // 1. IE11 support, which trigger the handleClickAway even after the unbind
    // 2. The child might render null.
    // 3. Behave like a blur listener.
    if (!nodeRef.current ||
    // is a TouchEvent?
    'clientX' in event && clickedRootScrollbar(event, doc)) {
      return;
    }

    // Do not act if user performed touchmove
    if (movedRef.current) {
      movedRef.current = false;
      return;
    }
    let insideDOM;

    // If not enough, can use https://github.com/DieterHolvoet/event-propagation-path/blob/master/propagationPath.js
    if (event.composedPath) {
      insideDOM = event.composedPath().indexOf(nodeRef.current) > -1;
    } else {
      insideDOM = !doc.documentElement.contains(event.target) || nodeRef.current.contains(event.target);
    }
    if (!insideDOM && !insideReactTree) {
      onClickAway(event);
    }
  });

  // Keep track of mouse/touch events that bubbled up through the portal.
  const handleSynthetic = event => {
    // Ignore events handled by our internal components
    if (!event.defaultMuiPrevented) {
      syntheticEventRef.current = true;
    }
  };
  React__namespace.useEffect(() => {
    if (active) {
      const doc = ownerDocument(nodeRef.current);
      const handleTouchMove = () => {
        movedRef.current = true;
      };
      doc.addEventListener('touchstart', handleClickAway);
      doc.addEventListener('touchmove', handleTouchMove);
      return () => {
        doc.removeEventListener('touchstart', handleClickAway);
        doc.removeEventListener('touchmove', handleTouchMove);
      };
    }
    return undefined;
  }, [active, handleClickAway]);
  React__namespace.useEffect(() => {
    // TODO This behavior is not tested automatically
    // It's unclear whether this is due to different update semantics in test (batched in act() vs discrete on click).
    // Or if this is a timing related issues due to different Transition components
    // Once we get rid of all the manual scheduling (for example setTimeout(update, 0)) we can revisit this code+test.
    if (active) {
      const doc = ownerDocument(nodeRef.current);
      doc.addEventListener('click', handleClickAway);
      return () => {
        doc.removeEventListener('click', handleClickAway);
        // cleanup `handleClickAway`
        syntheticEventRef.current = false;
      };
    }
    return undefined;
  }, [active, handleClickAway]);
  return [nodeRef, handleSynthetic, handleSynthetic];
}
const PickerPopperPaperWrapper = /*#__PURE__*/React__namespace.forwardRef((props, ref) => {
  const {
      PaperComponent,
      ownerState,
      children,
      paperSlotProps,
      paperClasses,
      onPaperClick,
      onPaperTouchStart
      // picks up the style props provided by `Transition`
      // https://mui.com/material-ui/transitions/#child-requirement
    } = props,
    other = _objectWithoutPropertiesLoose(props, _excluded$f);
  const paperProps = useSlotProps({
    elementType: PaperComponent,
    externalSlotProps: paperSlotProps,
    additionalProps: {
      tabIndex: -1,
      elevation: 8,
      ref
    },
    className: paperClasses,
    ownerState
  });
  return /*#__PURE__*/jsxRuntime.jsx(PaperComponent, _extends({}, other, paperProps, {
    onClick: event => {
      onPaperClick(event);
      paperProps.onClick?.(event);
    },
    onTouchStart: event => {
      onPaperTouchStart(event);
      paperProps.onTouchStart?.(event);
    },
    ownerState: ownerState,
    children: children
  }));
});
if (process.env.NODE_ENV !== "production") PickerPopperPaperWrapper.displayName = "PickerPopperPaperWrapper";
function PickerPopper(inProps) {
  const props = styles.useThemeProps({
    props: inProps,
    name: 'MuiPickerPopper'
  });
  const {
    children,
    placement = 'bottom-start',
    slots,
    slotProps,
    classes: classesProp
  } = props;
  const {
    open,
    popupRef,
    reduceAnimations
  } = usePickerContext();
  const {
    ownerState: pickerOwnerState,
    rootRefObject
  } = usePickerPrivateContext();
  const {
    dismissViews,
    getCurrentViewMode,
    onPopperExited,
    triggerElement,
    viewContainerRole
  } = usePickerPrivateContext();
  React__namespace.useEffect(() => {
    function handleKeyDown(nativeEvent) {
      if (open && nativeEvent.key === 'Escape') {
        dismissViews();
      }
    }
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [dismissViews, open]);
  const lastFocusedElementRef = React__namespace.useRef(null);
  React__namespace.useEffect(() => {
    if (viewContainerRole === 'tooltip' || getCurrentViewMode() === 'field') {
      return;
    }
    if (open) {
      lastFocusedElementRef.current = getActiveElement(rootRefObject.current);
    } else if (lastFocusedElementRef.current && lastFocusedElementRef.current instanceof HTMLElement) {
      // make sure the button is flushed with updated label, before returning focus to it
      // avoids issue, where screen reader could fail to announce selected date after selection
      setTimeout(() => {
        if (lastFocusedElementRef.current instanceof HTMLElement) {
          lastFocusedElementRef.current.focus();
        }
      });
    }
  }, [open, viewContainerRole, getCurrentViewMode, rootRefObject]);
  const classes = useUtilityClasses$7(classesProp);
  const handleClickAway = useEventCallback(() => {
    if (viewContainerRole === 'tooltip') {
      executeInTheNextEventLoopTick(() => {
        if (rootRefObject.current?.contains(getActiveElement(rootRefObject.current)) || popupRef.current?.contains(getActiveElement(popupRef.current))) {
          return;
        }
        dismissViews();
      });
    } else {
      dismissViews();
    }
  });
  const [clickAwayRef, onPaperClick, onPaperTouchStart] = useClickAwayListener(open, handleClickAway);
  const paperRef = React__namespace.useRef(null);
  const handleRef = useForkRef(paperRef, popupRef);
  const handlePaperRef = useForkRef(handleRef, clickAwayRef);
  const handleKeyDown = event => {
    if (event.key === 'Escape') {
      // stop the propagation to avoid closing parent modal
      event.stopPropagation();
      dismissViews();
    }
  };
  const Transition = slots?.desktopTransition ?? reduceAnimations ? Fade : Grow;
  const FocusTrap = slots?.desktopTrapFocus ?? BaseFocusTrap;
  const Paper = slots?.desktopPaper ?? PickerPopperPaper;
  const Popper = slots?.popper ?? PickerPopperRoot;
  const popperProps = useSlotProps({
    elementType: Popper,
    externalSlotProps: slotProps?.popper,
    additionalProps: {
      transition: true,
      role: viewContainerRole == null ? undefined : viewContainerRole,
      open,
      placement,
      anchorEl: triggerElement,
      onKeyDown: handleKeyDown
    },
    className: classes.root,
    ownerState: pickerOwnerState
  });
  const ownerState = React__namespace.useMemo(() => _extends({}, pickerOwnerState, {
    popperPlacement: popperProps.placement
  }), [pickerOwnerState, popperProps.placement]);
  return /*#__PURE__*/jsxRuntime.jsx(Popper, _extends({}, popperProps, {
    children: ({
      TransitionProps
    }) => /*#__PURE__*/jsxRuntime.jsx(FocusTrap, _extends({
      open: open,
      disableAutoFocus: true
      // pickers are managing focus position manually
      // without this prop the focus is returned to the button before `aria-label` is updated
      // which would force screen readers to read too old label
      ,
      disableRestoreFocus: true,
      disableEnforceFocus: viewContainerRole === 'tooltip',
      isEnabled: () => true
    }, slotProps?.desktopTrapFocus, {
      children: /*#__PURE__*/jsxRuntime.jsx(Transition, _extends({}, TransitionProps, slotProps?.desktopTransition, {
        onExited: event => {
          onPopperExited?.();
          slotProps?.desktopTransition?.onExited?.(event);
          TransitionProps?.onExited?.();
        },
        children: /*#__PURE__*/jsxRuntime.jsx(PickerPopperPaperWrapper, {
          PaperComponent: Paper,
          ownerState: ownerState,
          ref: handlePaperRef,
          onPaperClick: onPaperClick,
          onPaperTouchStart: onPaperTouchStart,
          paperClasses: classes.paper,
          paperSlotProps: slotProps?.desktopPaper,
          children: children
        })
      }))
    }))
  }));
}

function getOrientation() {
  if (typeof window === 'undefined') {
    return 'portrait';
  }
  if (window.screen && window.screen.orientation && window.screen.orientation.angle) {
    return Math.abs(window.screen.orientation.angle) === 90 ? 'landscape' : 'portrait';
  }

  // Support IOS safari
  if (window.orientation) {
    return Math.abs(Number(window.orientation)) === 90 ? 'landscape' : 'portrait';
  }
  return 'portrait';
}
function useOrientation(views, customOrientation) {
  const [orientation, setOrientation] = React__namespace.useState(getOrientation);
  useEnhancedEffect$1(() => {
    const eventHandler = () => {
      setOrientation(getOrientation());
    };
    window.addEventListener('orientationchange', eventHandler);
    return () => {
      window.removeEventListener('orientationchange', eventHandler);
    };
  }, []);
  if (arrayIncludes(views, ['hours', 'minutes', 'seconds'])) {
    // could not display 13:34:44 in landscape mode
    return 'portrait';
  }
  return customOrientation ?? orientation;
}

const warnedOnceCache = new Set();

/**
 * Logs a message to the console on development mode. The warning will only be logged once.
 *
 * The message is the log's cache key. Two identical messages will only be logged once.
 *
 * This function is a no-op in production.
 *
 * @param message the message to log
 * @param gravity the gravity of the warning. Defaults to `'warning'`.
 * @returns
 */
function warnOnce(message, gravity = 'warning') {
  if (process.env.NODE_ENV === 'production') {
    return;
  }
  const cleanMessage = Array.isArray(message) ? message.join('\n') : message;
  if (!warnedOnceCache.has(cleanMessage)) {
    warnedOnceCache.add(cleanMessage);
    if (gravity === 'error') {
      console.error(cleanMessage);
    } else {
      console.warn(cleanMessage);
    }
  }
}

function useValueAndOpenStates(parameters) {
  const {
    props,
    valueManager,
    validator
  } = parameters;
  const {
    value: valueProp,
    defaultValue: defaultValueProp,
    onChange,
    referenceDate,
    timezone: timezoneProp,
    onAccept,
    closeOnSelect,
    open: openProp,
    onOpen,
    onClose
  } = props;
  const {
    current: defaultValue
  } = React__namespace.useRef(defaultValueProp);
  const {
    current: isValueControlled
  } = React__namespace.useRef(valueProp !== undefined);
  const {
    current: isOpenControlled
  } = React__namespace.useRef(openProp !== undefined);
  const adapter = usePickerAdapter();
  if (process.env.NODE_ENV !== 'production') {
    if (props.renderInput != null) {
      warnOnce(['MUI X: The `renderInput` prop has been removed in version 6.0 of the Date and Time Pickers.', 'You can replace it with the `textField` component slot in most cases.', 'For more information, please have a look at the migration guide (https://mui.com/x/migration/migration-pickers-v5/#input-renderer-required-in-v5).']);
    }
  }

  /* eslint-disable react-hooks/rules-of-hooks, react-hooks/exhaustive-deps */
  if (process.env.NODE_ENV !== 'production') {
    React__namespace.useEffect(() => {
      if (isValueControlled !== (valueProp !== undefined)) {
        console.error([`MUI X: A component is changing the ${isValueControlled ? '' : 'un'}controlled value of a Picker to be ${isValueControlled ? 'un' : ''}controlled.`, 'Elements should not switch from uncontrolled to controlled (or vice versa).', `Decide between using a controlled or uncontrolled value` + 'for the lifetime of the component.', "The nature of the state is determined during the first render. It's considered controlled if the value is not `undefined`.", 'More info: https://fb.me/react-controlled-components'].join('\n'));
      }
    }, [valueProp]);
    React__namespace.useEffect(() => {
      if (!isValueControlled && defaultValue !== defaultValueProp) {
        console.error([`MUI X: A component is changing the defaultValue of an uncontrolled Picker after being initialized. ` + `To suppress this warning opt to use a controlled value.`].join('\n'));
      }
    }, [JSON.stringify(defaultValue)]);
  }
  /* eslint-enable react-hooks/rules-of-hooks, react-hooks/exhaustive-deps */

  const {
    timezone,
    value,
    handleValueChange
  } = useControlledValue({
    name: 'a picker component',
    timezone: timezoneProp,
    value: valueProp,
    defaultValue,
    referenceDate,
    onChange,
    valueManager
  });
  const [state, setState] = React__namespace.useState(() => ({
    open: false,
    lastExternalValue: value,
    clockShallowValue: undefined,
    lastCommittedValue: value,
    hasBeenModifiedSinceMount: false
  }));
  const {
    getValidationErrorForNewValue
  } = useValidation({
    props,
    validator,
    timezone,
    value,
    onError: props.onError
  });
  const setOpen = useEventCallback(action => {
    const newOpen = typeof action === 'function' ? action(state.open) : action;
    if (!isOpenControlled) {
      setState(prevState => _extends({}, prevState, {
        open: newOpen
      }));
    }
    if (newOpen && onOpen) {
      onOpen();
    }
    if (!newOpen) {
      onClose?.();
    }
  });
  const setValue = useEventCallback((newValue, options) => {
    const {
      changeImportance = 'accept',
      skipPublicationIfPristine = false,
      validationError,
      shortcut,
      shouldClose = changeImportance === 'accept'
    } = options ?? {};
    let shouldFireOnChange;
    let shouldFireOnAccept;
    if (!skipPublicationIfPristine && !isValueControlled && !state.hasBeenModifiedSinceMount) {
      // If the value is not controlled and the value has never been modified before,
      // Then clicking on any value (including the one equal to `defaultValue`) should call `onChange` and `onAccept`
      shouldFireOnChange = true;
      shouldFireOnAccept = changeImportance === 'accept';
    } else {
      shouldFireOnChange = !valueManager.areValuesEqual(adapter, newValue, value);
      shouldFireOnAccept = changeImportance === 'accept' && !valueManager.areValuesEqual(adapter, newValue, state.lastCommittedValue);
    }
    setState(prevState => _extends({}, prevState, {
      // We reset the shallow value whenever we fire onChange.
      clockShallowValue: shouldFireOnChange ? undefined : prevState.clockShallowValue,
      lastCommittedValue: shouldFireOnAccept ? newValue : prevState.lastCommittedValue,
      hasBeenModifiedSinceMount: true
    }));
    let cachedContext = null;
    const getContext = () => {
      if (!cachedContext) {
        cachedContext = {
          validationError: validationError == null ? getValidationErrorForNewValue(newValue) : validationError
        };
        if (shortcut) {
          cachedContext.shortcut = shortcut;
        }
      }
      return cachedContext;
    };
    if (shouldFireOnChange) {
      handleValueChange(newValue, getContext());
    }
    if (shouldFireOnAccept && onAccept) {
      onAccept(newValue, getContext());
    }
    if (shouldClose) {
      setOpen(false);
    }
  });

  // If `prop.value` changes, we update the state to reflect the new value
  if (value !== state.lastExternalValue) {
    setState(prevState => _extends({}, prevState, {
      lastExternalValue: value,
      clockShallowValue: undefined,
      hasBeenModifiedSinceMount: true
    }));
  }
  const setValueFromView = useEventCallback((newValue, selectionState = 'partial') => {
    // TODO: Expose a new method (private?) like `setView` that only updates the clock shallow value.
    if (selectionState === 'shallow') {
      setState(prev => _extends({}, prev, {
        clockShallowValue: newValue,
        hasBeenModifiedSinceMount: true
      }));
      return;
    }
    setValue(newValue, {
      changeImportance: selectionState === 'finish' && closeOnSelect ? 'accept' : 'set'
    });
  });

  // It is required to update inner state in useEffect in order to avoid situation when
  // Our component is not mounted yet, but `open` state is set to `true` (for example initially opened)
  React__namespace.useEffect(() => {
    if (isOpenControlled) {
      if (openProp === undefined) {
        throw new Error('You must not mix controlling and uncontrolled mode for `open` prop');
      }
      setState(prevState => _extends({}, prevState, {
        open: openProp
      }));
    }
  }, [isOpenControlled, openProp]);
  const viewValue = React__namespace.useMemo(() => valueManager.cleanValue(adapter, state.clockShallowValue === undefined ? value : state.clockShallowValue), [adapter, valueManager, state.clockShallowValue, value]);
  return {
    timezone,
    state,
    setValue,
    setValueFromView,
    setOpen,
    value,
    viewValue
  };
}

const _excluded$e = ["className", "sx"];
const usePicker = ({
  ref,
  props,
  valueManager,
  valueType,
  variant,
  validator,
  onPopperExited,
  autoFocusView,
  rendererInterceptor: RendererInterceptor,
  localeText,
  viewContainerRole,
  getStepNavigation
}) => {
  const {
    // View props
    views,
    view: viewProp,
    openTo,
    onViewChange,
    viewRenderers,
    reduceAnimations: reduceAnimationsProp,
    orientation: orientationProp,
    disableOpenPicker,
    closeOnSelect,
    // Form props
    disabled,
    readOnly,
    // Field props
    formatDensity,
    enableAccessibleFieldDOMStructure,
    selectedSections,
    onSelectedSectionsChange,
    format,
    label,
    // Other props
    autoFocus,
    name
  } = props;
  const {
      className,
      sx
    } = props,
    propsToForwardToView = _objectWithoutPropertiesLoose(props, _excluded$e);

  /**
   * TODO: Improve how we generate the aria-label and aria-labelledby attributes.
   */
  const labelId = useId();
  const adapter = usePickerAdapter();
  const reduceAnimations = useReduceAnimations(reduceAnimationsProp);
  const orientation = useOrientation(views, orientationProp);
  const {
    current: initialView
  } = React__namespace.useRef(openTo ?? null);

  /**
   * Refs
   */
  const [triggerElement, triggerRef] = React__namespace.useState(null);
  const popupRef = React__namespace.useRef(null);
  const fieldRef = React__namespace.useRef(null);
  const rootRefObject = React__namespace.useRef(null);
  const rootRef = useForkRef(ref, rootRefObject);
  const {
    timezone,
    state,
    setOpen,
    setValue,
    setValueFromView,
    value,
    viewValue
  } = useValueAndOpenStates({
    props,
    valueManager,
    validator
  });
  const {
    view,
    setView,
    defaultView,
    focusedView,
    setFocusedView,
    setValueAndGoToNextView,
    goToNextStep,
    hasNextStep,
    hasSeveralSteps
  } = useViews({
    view: viewProp,
    views,
    openTo,
    onChange: setValueFromView,
    onViewChange,
    autoFocus: autoFocusView,
    getStepNavigation
  });
  const clearValue = useEventCallback(() => setValue(valueManager.emptyValue));
  const setValueToToday = useEventCallback(() => setValue(valueManager.getTodayValue(adapter, timezone, valueType)));
  const acceptValueChanges = useEventCallback(() => setValue(value));
  const cancelValueChanges = useEventCallback(() => setValue(state.lastCommittedValue, {
    skipPublicationIfPristine: true
  }));
  const dismissViews = useEventCallback(() => {
    setValue(value, {
      skipPublicationIfPristine: true
    });
  });
  const {
    hasUIView,
    viewModeLookup,
    timeViewsCount
  } = React__namespace.useMemo(() => views.reduce((acc, viewForReduce) => {
    const viewMode = viewRenderers[viewForReduce] == null ? 'field' : 'UI';
    acc.viewModeLookup[viewForReduce] = viewMode;
    if (viewMode === 'UI') {
      acc.hasUIView = true;
      if (isTimeView(viewForReduce)) {
        acc.timeViewsCount += 1;
      }
    }
    return acc;
  }, {
    hasUIView: false,
    viewModeLookup: {},
    timeViewsCount: 0
  }), [viewRenderers, views]);
  const currentViewMode = viewModeLookup[view];
  const getCurrentViewMode = useEventCallback(() => currentViewMode);
  const [popperView, setPopperView] = React__namespace.useState(currentViewMode === 'UI' ? view : null);
  if (popperView !== view && viewModeLookup[view] === 'UI') {
    setPopperView(view);
  }
  useEnhancedEffect$1(() => {
    // Handle case of Date Time Picker without time renderers
    if (currentViewMode === 'field' && state.open) {
      setOpen(false);
      setTimeout(() => {
        fieldRef?.current?.setSelectedSections(view);
        // focusing the input before the range selection is done
        // calling it outside of timeout results in an inconsistent behavior between Safari And Chrome
        fieldRef?.current?.focusField(view);
      });
    }
  }, [view]); // eslint-disable-line react-hooks/exhaustive-deps

  useEnhancedEffect$1(() => {
    if (!state.open) {
      return;
    }
    let newView = view;

    // If the current view is a field view, go to the last popper view
    if (currentViewMode === 'field' && popperView != null) {
      newView = popperView;
    }

    // If the current view is not the default view and both are UI views
    if (newView !== defaultView && viewModeLookup[newView] === 'UI' && viewModeLookup[defaultView] === 'UI') {
      newView = defaultView;
    }
    if (newView !== view) {
      setView(newView);
    }
    setFocusedView(newView, true);
  }, [state.open]); // eslint-disable-line react-hooks/exhaustive-deps

  const ownerState = React__namespace.useMemo(() => ({
    isPickerValueEmpty: valueManager.areValuesEqual(adapter, value, valueManager.emptyValue),
    isPickerOpen: state.open,
    isPickerDisabled: props.disabled ?? false,
    isPickerReadOnly: props.readOnly ?? false,
    pickerOrientation: orientation,
    pickerVariant: variant
  }), [adapter, valueManager, value, state.open, orientation, variant, props.disabled, props.readOnly]);
  const triggerStatus = React__namespace.useMemo(() => {
    if (disableOpenPicker || !hasUIView) {
      return 'hidden';
    }
    if (disabled || readOnly) {
      return 'disabled';
    }
    return 'enabled';
  }, [disableOpenPicker, hasUIView, disabled, readOnly]);
  const wrappedGoToNextStep = useEventCallback(goToNextStep);
  const defaultActionBarActions = React__namespace.useMemo(() => {
    if (closeOnSelect && !hasSeveralSteps) {
      return [];
    }
    return ['cancel', 'nextOrAccept'];
  }, [closeOnSelect, hasSeveralSteps]);
  const actionsContextValue = React__namespace.useMemo(() => ({
    setValue,
    setOpen,
    clearValue,
    setValueToToday,
    acceptValueChanges,
    cancelValueChanges,
    setView,
    goToNextStep: wrappedGoToNextStep
  }), [setValue, setOpen, clearValue, setValueToToday, acceptValueChanges, cancelValueChanges, setView, wrappedGoToNextStep]);
  const contextValue = React__namespace.useMemo(() => _extends({}, actionsContextValue, {
    value,
    timezone,
    open: state.open,
    views,
    view: popperView,
    initialView,
    disabled: disabled ?? false,
    readOnly: readOnly ?? false,
    autoFocus: autoFocus ?? false,
    variant,
    orientation,
    popupRef,
    reduceAnimations,
    triggerRef,
    triggerStatus,
    hasNextStep,
    fieldFormat: format ?? '',
    name,
    label,
    rootSx: sx,
    rootRef,
    rootClassName: className
  }), [actionsContextValue, value, rootRef, variant, orientation, reduceAnimations, disabled, readOnly, format, className, name, label, sx, triggerStatus, hasNextStep, timezone, state.open, popperView, views, initialView, autoFocus]);
  const privateContextValue = React__namespace.useMemo(() => ({
    dismissViews,
    ownerState,
    hasUIView,
    getCurrentViewMode,
    rootRefObject,
    labelId,
    triggerElement,
    viewContainerRole,
    defaultActionBarActions,
    onPopperExited
  }), [dismissViews, ownerState, hasUIView, getCurrentViewMode, labelId, triggerElement, viewContainerRole, defaultActionBarActions, onPopperExited]);
  const fieldPrivateContextValue = React__namespace.useMemo(() => ({
    formatDensity,
    enableAccessibleFieldDOMStructure,
    selectedSections,
    onSelectedSectionsChange,
    fieldRef
  }), [formatDensity, enableAccessibleFieldDOMStructure, selectedSections, onSelectedSectionsChange, fieldRef]);
  const isValidContextValue = testedValue => {
    const error = validator({
      adapter,
      value: testedValue,
      timezone,
      props
    });
    return !valueManager.hasError(error);
  };
  const renderCurrentView = () => {
    if (popperView == null) {
      return null;
    }
    const renderer = viewRenderers[popperView];
    if (renderer == null) {
      return null;
    }
    const rendererProps = _extends({}, propsToForwardToView, {
      views,
      timezone,
      value: viewValue,
      onChange: setValueAndGoToNextView,
      view: popperView,
      onViewChange: setView,
      showViewSwitcher: timeViewsCount > 1,
      timeViewsCount
    }, viewContainerRole === 'tooltip' ? {
      focusedView: null,
      onFocusedViewChange: () => {}
    } : {
      focusedView,
      onFocusedViewChange: setFocusedView
    });
    if (RendererInterceptor) {
      return /*#__PURE__*/jsxRuntime.jsx(RendererInterceptor, {
        viewRenderers: viewRenderers,
        popperView: popperView,
        rendererProps: rendererProps
      });
    }
    return renderer(rendererProps);
  };
  return {
    providerProps: {
      localeText,
      contextValue,
      privateContextValue,
      actionsContextValue,
      fieldPrivateContextValue,
      isValidContextValue
    },
    renderCurrentView,
    ownerState
  };
};

function getPickersLayoutUtilityClass(slot) {
  return generateUtilityClass('MuiPickersLayout', slot);
}
const pickersLayoutClasses = generateUtilityClasses('MuiPickersLayout', ['root', 'landscape', 'contentWrapper', 'toolbar', 'actionBar', 'tabs', 'shortcuts']);

const _excluded$d = ["actions"];
const PickersActionBarRoot = styles.styled(DialogActions, {
  name: 'MuiPickersLayout',
  slot: 'ActionBar'
})({});

/**
 * Demos:
 *
 * - [Custom slots and subcomponents](https://mui.com/x/react-date-pickers/custom-components/)
 * - [Custom layout](https://mui.com/x/react-date-pickers/custom-layout/)
 *
 * API:
 *
 * - [PickersActionBar API](https://mui.com/x/api/date-pickers/pickers-action-bar/)
 */
function PickersActionBarComponent(props) {
  const {
      actions
    } = props,
    other = _objectWithoutPropertiesLoose(props, _excluded$d);
  const translations = usePickerTranslations();
  const {
    clearValue,
    setValueToToday,
    acceptValueChanges,
    cancelValueChanges,
    goToNextStep,
    hasNextStep
  } = usePickerContext();
  if (actions == null || actions.length === 0) {
    return null;
  }
  const buttons = actions?.map(actionType => {
    switch (actionType) {
      case 'clear':
        return /*#__PURE__*/jsxRuntime.jsx(Button, {
          onClick: clearValue,
          children: translations.clearButtonLabel
        }, actionType);
      case 'cancel':
        return /*#__PURE__*/jsxRuntime.jsx(Button, {
          onClick: cancelValueChanges,
          children: translations.cancelButtonLabel
        }, actionType);
      case 'accept':
        return /*#__PURE__*/jsxRuntime.jsx(Button, {
          onClick: acceptValueChanges,
          children: translations.okButtonLabel
        }, actionType);
      case 'today':
        return /*#__PURE__*/jsxRuntime.jsx(Button, {
          onClick: setValueToToday,
          children: translations.todayButtonLabel
        }, actionType);
      case 'next':
        return /*#__PURE__*/jsxRuntime.jsx(Button, {
          onClick: goToNextStep,
          children: translations.nextStepButtonLabel
        }, actionType);
      case 'nextOrAccept':
        if (hasNextStep) {
          return /*#__PURE__*/jsxRuntime.jsx(Button, {
            onClick: goToNextStep,
            children: translations.nextStepButtonLabel
          }, actionType);
        }
        return /*#__PURE__*/jsxRuntime.jsx(Button, {
          onClick: acceptValueChanges,
          children: translations.okButtonLabel
        }, actionType);
      default:
        return null;
    }
  });
  return /*#__PURE__*/jsxRuntime.jsx(PickersActionBarRoot, _extends({}, other, {
    children: buttons
  }));
}
process.env.NODE_ENV !== "production" ? PickersActionBarComponent.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * Ordered array of actions to display.
   * If empty, does not display that action bar.
   * @default
   * - `[]` for Pickers with one selection step which `closeOnSelect`.
   * - `['cancel', 'nextOrAccept']` for all other Pickers.
   */
  actions: PropTypes.arrayOf(PropTypes.oneOf(['accept', 'cancel', 'clear', 'next', 'nextOrAccept', 'today']).isRequired),
  /**
   * If `true`, the actions do not have additional margin.
   * @default false
   */
  disableSpacing: PropTypes.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])), PropTypes.func, PropTypes.object])
} : void 0;
const PickersActionBar = /*#__PURE__*/React__namespace.memo(PickersActionBarComponent);
if (process.env.NODE_ENV !== "production") PickersActionBar.displayName = "PickersActionBar";

const _excluded$c = ["items", "changeImportance"],
  _excluded2$2 = ["getValue"];
const PickersShortcutsRoot = styles.styled(List, {
  name: 'MuiPickersLayout',
  slot: 'Shortcuts'
})({});

/**
 * Demos:
 *
 * - [Shortcuts](https://mui.com/x/react-date-pickers/shortcuts/)
 *
 * API:
 *
 * - [PickersShortcuts API](https://mui.com/x/api/date-pickers/pickers-shortcuts/)
 */
function PickersShortcuts(props) {
  const {
      items,
      changeImportance = 'accept'
    } = props,
    other = _objectWithoutPropertiesLoose(props, _excluded$c);
  const {
    setValue
  } = usePickerActionsContext();
  const isValidValue = useIsValidValue();
  if (items == null || items.length === 0) {
    return null;
  }
  const resolvedItems = items.map(_ref => {
    let {
        getValue
      } = _ref,
      item = _objectWithoutPropertiesLoose(_ref, _excluded2$2);
    const newValue = getValue({
      isValid: isValidValue
    });
    return _extends({}, item, {
      label: item.label,
      onClick: () => {
        setValue(newValue, {
          changeImportance,
          shortcut: item
        });
      },
      disabled: !isValidValue(newValue)
    });
  });
  return /*#__PURE__*/jsxRuntime.jsx(PickersShortcutsRoot, _extends({
    dense: true,
    sx: [{
      maxHeight: VIEW_HEIGHT,
      maxWidth: 200,
      overflow: 'auto'
    }, ...(Array.isArray(other.sx) ? other.sx : [other.sx])]
  }, other, {
    children: resolvedItems.map(item => {
      return /*#__PURE__*/jsxRuntime.jsx(ListItem, {
        children: /*#__PURE__*/jsxRuntime.jsx(Chip, _extends({}, item))
      }, item.id ?? item.label);
    })
  }));
}
process.env.NODE_ENV !== "production" ? PickersShortcuts.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * Importance of the change when picking a shortcut:
   * - "accept": fires `onChange`, fires `onAccept` and closes the Picker.
   * - "set": fires `onChange` but do not fire `onAccept` and does not close the Picker.
   * @default "accept"
   */
  changeImportance: PropTypes.oneOf(['accept', 'set']),
  className: PropTypes.string,
  component: PropTypes.elementType,
  /**
   * If `true`, compact vertical padding designed for keyboard and mouse input is used for
   * the list and list items.
   * The prop is available to descendant components as the `dense` context.
   * @default false
   */
  dense: PropTypes.bool,
  /**
   * If `true`, vertical padding is removed from the list.
   * @default false
   */
  disablePadding: PropTypes.bool,
  /**
   * Ordered array of shortcuts to display.
   * If empty, does not display the shortcuts.
   * @default []
   */
  items: PropTypes.arrayOf(PropTypes.shape({
    getValue: PropTypes.func.isRequired,
    id: PropTypes.string,
    label: PropTypes.string.isRequired
  })),
  style: PropTypes.object,
  /**
   * The content of the subheader, normally `ListSubheader`.
   */
  subheader: PropTypes.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])), PropTypes.func, PropTypes.object])
} : void 0;

const _excluded$b = ["ownerState"];
function toolbarHasView(toolbarProps) {
  return toolbarProps.view !== null;
}
const useUtilityClasses$6 = (classes, ownerState) => {
  const {
    pickerOrientation
  } = ownerState;
  const slots = {
    root: ['root', pickerOrientation === 'landscape' && 'landscape'],
    contentWrapper: ['contentWrapper'],
    toolbar: ['toolbar'],
    actionBar: ['actionBar'],
    tabs: ['tabs'],
    landscape: ['landscape'],
    shortcuts: ['shortcuts']
  };
  return composeClasses(slots, getPickersLayoutUtilityClass, classes);
};
const usePickerLayout = props => {
  const {
    ownerState: pickerOwnerState,
    defaultActionBarActions
  } = usePickerPrivateContext();
  const {
    view
  } = usePickerContext();
  const isRtl = useRtl();
  const {
    children,
    slots,
    slotProps,
    classes: classesProp
  } = props;
  const ownerState = React__namespace.useMemo(() => _extends({}, pickerOwnerState, {
    layoutDirection: isRtl ? 'rtl' : 'ltr',
    hasShortcuts: false
  }), [pickerOwnerState, isRtl]);
  const classes = useUtilityClasses$6(classesProp, ownerState);

  // Action bar
  const ActionBar = slots?.actionBar ?? PickersActionBar;
  const _useSlotProps = useSlotProps({
      elementType: ActionBar,
      externalSlotProps: slotProps?.actionBar,
      additionalProps: {
        actions: defaultActionBarActions
      },
      className: classes.actionBar,
      ownerState
    }),
    actionBarProps = _objectWithoutPropertiesLoose(_useSlotProps, _excluded$b);
  const actionBar = /*#__PURE__*/jsxRuntime.jsx(ActionBar, _extends({}, actionBarProps));

  // Toolbar
  const Toolbar = slots?.toolbar;
  const toolbarProps = useSlotProps({
    elementType: Toolbar,
    externalSlotProps: slotProps?.toolbar,
    className: classes.toolbar,
    ownerState
  });
  const toolbar = toolbarHasView(toolbarProps) && !!Toolbar ? /*#__PURE__*/jsxRuntime.jsx(Toolbar, _extends({}, toolbarProps)) : null;

  // Content
  const content = children;

  // Tabs
  const Tabs = slots?.tabs;
  const tabs = view && Tabs ? /*#__PURE__*/jsxRuntime.jsx(Tabs, _extends({
    className: classes.tabs
  }, slotProps?.tabs)) : null;

  // Shortcuts
  const Shortcuts = slots?.shortcuts ?? PickersShortcuts;
  const shortcutsProps = useSlotProps({
    elementType: Shortcuts,
    externalSlotProps: slotProps?.shortcuts,
    className: classes.shortcuts,
    ownerState
  });
  const hasShortcuts = Array.isArray(shortcutsProps?.items) && shortcutsProps.items.length > 0;
  const shortcuts = view && !!Shortcuts ? /*#__PURE__*/jsxRuntime.jsx(Shortcuts, _extends({}, shortcutsProps)) : null;
  return {
    toolbar,
    content,
    tabs,
    actionBar,
    shortcuts,
    ownerState: _extends({}, ownerState, {
      hasShortcuts
    })
  };
};
var usePickerLayout$1 = usePickerLayout;

const useUtilityClasses$5 = (classes, ownerState) => {
  const {
    pickerOrientation
  } = ownerState;
  const slots = {
    root: ['root', pickerOrientation === 'landscape' && 'landscape'],
    contentWrapper: ['contentWrapper']
  };
  return composeClasses(slots, getPickersLayoutUtilityClass, classes);
};
const PickersLayoutRoot = styles.styled('div', {
  name: 'MuiPickersLayout',
  slot: 'Root'
})({
  display: 'grid',
  gridAutoColumns: 'max-content auto max-content',
  gridAutoRows: 'max-content auto max-content',
  [`& .${pickersLayoutClasses.actionBar}`]: {
    gridColumn: '1 / 4',
    gridRow: 3
  },
  variants: [{
    props: {
      pickerOrientation: 'landscape',
      hasShortcuts: false
    },
    style: {
      [`& .${pickersLayoutClasses.toolbar}`]: {
        gridColumn: 1,
        gridRow: '1 / 3'
      }
    }
  }, {
    props: {
      pickerOrientation: 'landscape',
      hasShortcuts: true
    },
    style: {
      [`& .${pickersLayoutClasses.toolbar}`]: {
        gridColumn: '2 / 4',
        gridRow: 1,
        maxWidth: 'max-content'
      },
      [`& .${pickersLayoutClasses.shortcuts}`]: {
        gridColumn: 1,
        gridRow: 2
      }
    }
  }, {
    props: {
      pickerOrientation: 'portrait'
    },
    style: {
      [`& .${pickersLayoutClasses.toolbar}`]: {
        gridColumn: '2 / 4',
        gridRow: 1
      },
      [`& .${pickersLayoutClasses.shortcuts}`]: {
        gridColumn: 1,
        gridRow: '2 / 3'
      }
    }
  }, {
    props: {
      hasShortcuts: true,
      layoutDirection: 'rtl'
    },
    style: {
      [`& .${pickersLayoutClasses.shortcuts}`]: {
        gridColumn: 4
      }
    }
  }]
});
const PickersLayoutContentWrapper = styles.styled('div', {
  name: 'MuiPickersLayout',
  slot: 'ContentWrapper'
})({
  gridColumn: '2 / 4',
  gridRow: 2,
  display: 'flex',
  flexDirection: 'column'
});
/**
 * Demos:
 *
 * - [Custom layout](https://mui.com/x/react-date-pickers/custom-layout/)
 *
 * API:
 *
 * - [PickersLayout API](https://mui.com/x/api/date-pickers/pickers-layout/)
 */
const PickersLayout = /*#__PURE__*/React__namespace.forwardRef(function PickersLayout(inProps, ref) {
  const props = styles.useThemeProps({
    props: inProps,
    name: 'MuiPickersLayout'
  });
  const {
    toolbar,
    content,
    tabs,
    actionBar,
    shortcuts,
    ownerState
  } = usePickerLayout$1(props);
  const {
    orientation,
    variant
  } = usePickerContext();
  const {
    sx,
    className,
    classes: classesProp
  } = props;
  const classes = useUtilityClasses$5(classesProp, ownerState);
  return /*#__PURE__*/jsxRuntime.jsxs(PickersLayoutRoot, {
    ref: ref,
    sx: sx,
    className: clsx(classes.root, className),
    ownerState: ownerState,
    children: [orientation === 'landscape' ? shortcuts : toolbar, orientation === 'landscape' ? toolbar : shortcuts, /*#__PURE__*/jsxRuntime.jsx(PickersLayoutContentWrapper, {
      className: classes.contentWrapper,
      ownerState: ownerState,
      children: variant === 'desktop' ? /*#__PURE__*/jsxRuntime.jsxs(React__namespace.Fragment, {
        children: [content, tabs]
      }) : /*#__PURE__*/jsxRuntime.jsxs(React__namespace.Fragment, {
        children: [tabs, content]
      })
    }), actionBar]
  });
});
if (process.env.NODE_ENV !== "production") PickersLayout.displayName = "PickersLayout";
process.env.NODE_ENV !== "production" ? PickersLayout.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  children: PropTypes.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,
  className: PropTypes.string,
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: PropTypes.object,
  /**
   * Overridable component slots.
   * @default {}
   */
  slots: PropTypes.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])), PropTypes.func, PropTypes.object])
} : void 0;

function createNonRangePickerStepNavigation(parameters) {
  const {
    steps
  } = parameters;
  return createStepNavigation({
    steps,
    isViewMatchingStep: (view, step) => {
      return step.views == null || step.views.includes(view);
    },
    onStepChange: ({
      step,
      defaultView,
      setView,
      view,
      views
    }) => {
      const targetView = step.views == null ? defaultView : step.views.find(viewBis => views.includes(viewBis));
      if (targetView !== view) {
        setView(targetView);
      }
    }
  });
}

const _excluded$a = ["props", "steps"],
  _excluded2$1 = ["ownerState"];
const useDesktopPicker = _ref => {
  let {
      props,
      steps
    } = _ref,
    pickerParams = _objectWithoutPropertiesLoose(_ref, _excluded$a);
  const {
    slots,
    slotProps: innerSlotProps,
    label,
    inputRef,
    localeText
  } = props;
  const getStepNavigation = createNonRangePickerStepNavigation({
    steps
  });
  const {
    providerProps,
    renderCurrentView,
    ownerState
  } = usePicker(_extends({}, pickerParams, {
    props,
    localeText,
    autoFocusView: true,
    viewContainerRole: 'dialog',
    variant: 'desktop',
    getStepNavigation
  }));
  const labelId = providerProps.privateContextValue.labelId;
  const isToolbarHidden = innerSlotProps?.toolbar?.hidden ?? false;
  const Field = slots.field;
  const _useSlotProps = useSlotProps({
      elementType: Field,
      externalSlotProps: innerSlotProps?.field,
      additionalProps: _extends({}, isToolbarHidden && {
        id: labelId
      }),
      ownerState
    }),
    fieldProps = _objectWithoutPropertiesLoose(_useSlotProps, _excluded2$1);
  const Layout = slots.layout ?? PickersLayout;
  let labelledById = labelId;
  if (isToolbarHidden) {
    if (label) {
      labelledById = `${labelId}-label`;
    } else {
      labelledById = undefined;
    }
  }
  const slotProps = _extends({}, innerSlotProps, {
    toolbar: _extends({}, innerSlotProps?.toolbar, {
      titleId: labelId
    }),
    popper: _extends({
      'aria-labelledby': labelledById
    }, innerSlotProps?.popper)
  });
  const renderPicker = () => /*#__PURE__*/jsxRuntime.jsx(PickerProvider, _extends({}, providerProps, {
    children: /*#__PURE__*/jsxRuntime.jsxs(PickerFieldUIContextProvider, {
      slots: slots,
      slotProps: slotProps,
      inputRef: inputRef,
      children: [/*#__PURE__*/jsxRuntime.jsx(Field, _extends({}, fieldProps)), /*#__PURE__*/jsxRuntime.jsx(PickerPopper, {
        slots: slots,
        slotProps: slotProps,
        children: /*#__PURE__*/jsxRuntime.jsx(Layout, _extends({}, slotProps?.layout, {
          slots: slots,
          slotProps: slotProps,
          children: renderCurrentView()
        }))
      })]
    })
  }));
  if (process.env.NODE_ENV !== "production") renderPicker.displayName = "renderPicker";
  return {
    renderPicker
  };
};

const renderDateViewCalendar = ({
  view,
  onViewChange,
  views,
  focusedView,
  onFocusedViewChange,
  value,
  defaultValue,
  referenceDate,
  onChange,
  className,
  classes,
  disableFuture,
  disablePast,
  minDate,
  maxDate,
  shouldDisableDate,
  shouldDisableMonth,
  shouldDisableYear,
  reduceAnimations,
  onMonthChange,
  monthsPerRow,
  onYearChange,
  yearsOrder,
  yearsPerRow,
  slots,
  slotProps,
  loading,
  renderLoading,
  disableHighlightToday,
  readOnly,
  disabled,
  showDaysOutsideCurrentMonth,
  dayOfWeekFormatter,
  sx,
  autoFocus,
  fixedWeekNumber,
  displayWeekNumber,
  timezone
}) => /*#__PURE__*/jsxRuntime.jsx(DateCalendar, {
  view: view,
  onViewChange: onViewChange,
  views: views.filter(isDatePickerView),
  focusedView: focusedView && isDatePickerView(focusedView) ? focusedView : null,
  onFocusedViewChange: onFocusedViewChange,
  value: value,
  defaultValue: defaultValue,
  referenceDate: referenceDate,
  onChange: onChange,
  className: className,
  classes: classes,
  disableFuture: disableFuture,
  disablePast: disablePast,
  minDate: minDate,
  maxDate: maxDate,
  shouldDisableDate: shouldDisableDate,
  shouldDisableMonth: shouldDisableMonth,
  shouldDisableYear: shouldDisableYear,
  reduceAnimations: reduceAnimations,
  onMonthChange: onMonthChange,
  monthsPerRow: monthsPerRow,
  onYearChange: onYearChange,
  yearsOrder: yearsOrder,
  yearsPerRow: yearsPerRow,
  slots: slots,
  slotProps: slotProps,
  loading: loading,
  renderLoading: renderLoading,
  disableHighlightToday: disableHighlightToday,
  readOnly: readOnly,
  disabled: disabled,
  showDaysOutsideCurrentMonth: showDaysOutsideCurrentMonth,
  dayOfWeekFormatter: dayOfWeekFormatter,
  sx: sx,
  autoFocus: autoFocus,
  fixedWeekNumber: fixedWeekNumber,
  displayWeekNumber: displayWeekNumber,
  timezone: timezone
});
if (process.env.NODE_ENV !== "production") renderDateViewCalendar.displayName = "renderDateViewCalendar";

/**
 * Demos:
 *
 * - [DatePicker](https://mui.com/x/react-date-pickers/date-picker/)
 * - [Validation](https://mui.com/x/react-date-pickers/validation/)
 *
 * API:
 *
 * - [DesktopDatePicker API](https://mui.com/x/api/date-pickers/desktop-date-picker/)
 */
const DesktopDatePicker = /*#__PURE__*/React__namespace.forwardRef(function DesktopDatePicker(inProps, ref) {
  const adapter = usePickerAdapter();

  // Props with the default values common to all date pickers
  const defaultizedProps = useDatePickerDefaultizedProps(inProps, 'MuiDesktopDatePicker');
  const viewRenderers = _extends({
    day: renderDateViewCalendar,
    month: renderDateViewCalendar,
    year: renderDateViewCalendar
  }, defaultizedProps.viewRenderers);

  // Props with the default values specific to the desktop variant
  const props = _extends({}, defaultizedProps, {
    closeOnSelect: defaultizedProps.closeOnSelect ?? true,
    viewRenderers,
    format: resolveDateFormat(adapter, defaultizedProps, false),
    yearsPerRow: defaultizedProps.yearsPerRow ?? 4,
    slots: _extends({
      field: DateField
    }, defaultizedProps.slots),
    slotProps: _extends({}, defaultizedProps.slotProps, {
      field: ownerState => _extends({}, resolveComponentProps(defaultizedProps.slotProps?.field, ownerState), extractValidationProps(defaultizedProps)),
      toolbar: _extends({
        hidden: true
      }, defaultizedProps.slotProps?.toolbar)
    })
  });
  const {
    renderPicker
  } = useDesktopPicker({
    ref,
    props,
    valueManager: singleItemValueManager,
    valueType: 'date',
    validator: validateDate,
    steps: null
  });
  return renderPicker();
});
if (process.env.NODE_ENV !== "production") DesktopDatePicker.displayName = "DesktopDatePicker";
DesktopDatePicker.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * If `true`, the main element is focused during the first mount.
   * This main element is:
   * - the element chosen by the visible view if any (i.e: the selected day on the `day` view).
   * - the `input` element if there is a field rendered.
   */
  autoFocus: PropTypes.bool,
  className: PropTypes.string,
  /**
   * If `true`, the Picker will close after submitting the full date.
   * @default true
   */
  closeOnSelect: PropTypes.bool,
  /**
   * Formats the day of week displayed in the calendar header.
   * @param {PickerValidDate} date The date of the day of week provided by the adapter.
   * @returns {string} The name to display.
   * @default (date: PickerValidDate) => adapter.format(date, 'weekdayShort').charAt(0).toUpperCase()
   */
  dayOfWeekFormatter: PropTypes.func,
  /**
   * The default value.
   * Used when the component is not controlled.
   */
  defaultValue: PropTypes.object,
  /**
   * If `true`, the component is disabled.
   * When disabled, the value cannot be changed and no interaction is possible.
   * @default false
   */
  disabled: PropTypes.bool,
  /**
   * If `true`, disable values after the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disableFuture: PropTypes.bool,
  /**
   * If `true`, today's date is rendering without highlighting with circle.
   * @default false
   */
  disableHighlightToday: PropTypes.bool,
  /**
   * If `true`, the button to open the Picker will not be rendered (it will only render the field).
   * @deprecated Use the [field component](https://mui.com/x/react-date-pickers/fields/) instead.
   * @default false
   */
  disableOpenPicker: PropTypes.bool,
  /**
   * If `true`, disable values before the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disablePast: PropTypes.bool,
  /**
   * If `true`, the week number will be display in the calendar.
   */
  displayWeekNumber: PropTypes.bool,
  /**
   * @default true
   */
  enableAccessibleFieldDOMStructure: PropTypes.any,
  /**
   * The day view will show as many weeks as needed after the end of the current month to match this value.
   * Put it to 6 to have a fixed number of weeks in Gregorian calendars
   */
  fixedWeekNumber: PropTypes.number,
  /**
   * Format of the date when rendered in the input(s).
   * Defaults to localized format based on the used `views`.
   */
  format: PropTypes.string,
  /**
   * Density of the format when rendered in the input.
   * Setting `formatDensity` to `"spacious"` will add a space before and after each `/`, `-` and `.` character.
   * @default "dense"
   */
  formatDensity: PropTypes.oneOf(['dense', 'spacious']),
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: refType$1,
  /**
   * The label content.
   */
  label: PropTypes.node,
  /**
   * If `true`, calls `renderLoading` instead of rendering the day calendar.
   * Can be used to preload information and show it in calendar.
   * @default false
   */
  loading: PropTypes.bool,
  /**
   * Locale for components texts.
   * Allows overriding texts coming from `LocalizationProvider` and `theme`.
   */
  localeText: PropTypes.object,
  /**
   * Maximal selectable date.
   * @default 2099-12-31
   */
  maxDate: PropTypes.object,
  /**
   * Minimal selectable date.
   * @default 1900-01-01
   */
  minDate: PropTypes.object,
  /**
   * Months rendered per row.
   * @default 3
   */
  monthsPerRow: PropTypes.oneOf([3, 4]),
  /**
   * Name attribute used by the `input` element in the Field.
   */
  name: PropTypes.string,
  /**
   * Callback fired when the value is accepted.
   * @template TValue The value type. It will be the same type as `value` or `null`. It can be in `[start, end]` format in case of range value.
   * @template TError The validation error type. It will be either `string` or a `null`. It can be in `[start, end]` format in case of range value.
   * @param {TValue} value The value that was just accepted.
   * @param {FieldChangeHandlerContext<TError>} context The context containing the validation result of the current value.
   */
  onAccept: PropTypes.func,
  /**
   * Callback fired when the value changes.
   * @template TValue The value type. It will be the same type as `value` or `null`. It can be in `[start, end]` format in case of range value.
   * @template TError The validation error type. It will be either `string` or a `null`. It can be in `[start, end]` format in case of range value.
   * @param {TValue} value The new value.
   * @param {FieldChangeHandlerContext<TError>} context The context containing the validation result of the current value.
   */
  onChange: PropTypes.func,
  /**
   * Callback fired when the popup requests to be closed.
   * Use in controlled mode (see `open`).
   */
  onClose: PropTypes.func,
  /**
   * Callback fired when the error associated with the current value changes.
   * When a validation error is detected, the `error` parameter contains a non-null value.
   * This can be used to render an appropriate form error.
   * @template TError The validation error type. It will be either `string` or a `null`. It can be in `[start, end]` format in case of range value.
   * @template TValue The value type. It will be the same type as `value` or `null`. It can be in `[start, end]` format in case of range value.
   * @param {TError} error The reason why the current value is not valid.
   * @param {TValue} value The value associated with the error.
   */
  onError: PropTypes.func,
  /**
   * Callback fired on month change.
   * @param {PickerValidDate} month The new month.
   */
  onMonthChange: PropTypes.func,
  /**
   * Callback fired when the popup requests to be opened.
   * Use in controlled mode (see `open`).
   */
  onOpen: PropTypes.func,
  /**
   * Callback fired when the selected sections change.
   * @param {FieldSelectedSections} newValue The new selected sections.
   */
  onSelectedSectionsChange: PropTypes.func,
  /**
   * Callback fired on view change.
   * @template TView Type of the view. It will vary based on the Picker type and the `views` it uses.
   * @param {TView} view The new view.
   */
  onViewChange: PropTypes.func,
  /**
   * Callback fired on year change.
   * @param {PickerValidDate} year The new year.
   */
  onYearChange: PropTypes.func,
  /**
   * Control the popup or dialog open state.
   * @default false
   */
  open: PropTypes.bool,
  /**
   * The default visible view.
   * Used when the component view is not controlled.
   * Must be a valid option from `views` list.
   */
  openTo: PropTypes.oneOf(['day', 'month', 'year']),
  /**
   * Force rendering in particular orientation.
   */
  orientation: PropTypes.oneOf(['landscape', 'portrait']),
  /**
   * If `true`, the component is read-only.
   * When read-only, the value cannot be changed but the user can interact with the interface.
   * @default false
   */
  readOnly: PropTypes.bool,
  /**
   * If `true`, disable heavy animations.
   * @default `@media(prefers-reduced-motion: reduce)` || `navigator.userAgent` matches Android <10 or iOS <13
   */
  reduceAnimations: PropTypes.bool,
  /**
   * The date used to generate the new value when both `value` and `defaultValue` are empty.
   * @default The closest valid date-time using the validation props, except callbacks like `shouldDisable<...>`.
   */
  referenceDate: PropTypes.object,
  /**
   * Component displaying when passed `loading` true.
   * @returns {React.ReactNode} The node to render when loading.
   * @default () => <span>...</span>
   */
  renderLoading: PropTypes.func,
  /**
   * The currently selected sections.
   * This prop accepts four formats:
   * 1. If a number is provided, the section at this index will be selected.
   * 2. If a string of type `FieldSectionType` is provided, the first section with that name will be selected.
   * 3. If `"all"` is provided, all the sections will be selected.
   * 4. If `null` is provided, no section will be selected.
   * If not provided, the selected sections will be handled internally.
   */
  selectedSections: PropTypes.oneOfType([PropTypes.oneOf(['all', 'day', 'empty', 'hours', 'meridiem', 'minutes', 'month', 'seconds', 'weekDay', 'year']), PropTypes.number]),
  /**
   * Disable specific date.
   *
   * Warning: This function can be called multiple times (for example when rendering date calendar, checking if focus can be moved to a certain date, etc.). Expensive computations can impact performance.
   *
   * @param {PickerValidDate} day The date to test.
   * @returns {boolean} If `true` the date will be disabled.
   */
  shouldDisableDate: PropTypes.func,
  /**
   * Disable specific month.
   * @param {PickerValidDate} month The month to test.
   * @returns {boolean} If `true`, the month will be disabled.
   */
  shouldDisableMonth: PropTypes.func,
  /**
   * Disable specific year.
   * @param {PickerValidDate} year The year to test.
   * @returns {boolean} If `true`, the year will be disabled.
   */
  shouldDisableYear: PropTypes.func,
  /**
   * If `true`, days outside the current month are rendered:
   *
   * - if `fixedWeekNumber` is defined, renders days to have the weeks requested.
   *
   * - if `fixedWeekNumber` is not defined, renders day to fill the first and last week of the current month.
   *
   * - ignored if `calendars` equals more than `1` on range pickers.
   * @default false
   */
  showDaysOutsideCurrentMonth: PropTypes.bool,
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: PropTypes.object,
  /**
   * Overridable component slots.
   * @default {}
   */
  slots: PropTypes.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])), PropTypes.func, PropTypes.object]),
  /**
   * Choose which timezone to use for the value.
   * Example: "default", "system", "UTC", "America/New_York".
   * If you pass values from other timezones to some props, they will be converted to this timezone before being used.
   * @see See the {@link https://mui.com/x/react-date-pickers/timezone/ timezones documentation} for more details.
   * @default The timezone of the `value` or `defaultValue` prop is defined, 'default' otherwise.
   */
  timezone: PropTypes.string,
  /**
   * The selected value.
   * Used when the component is controlled.
   */
  value: PropTypes.object,
  /**
   * The visible view.
   * Used when the component view is controlled.
   * Must be a valid option from `views` list.
   */
  view: PropTypes.oneOf(['day', 'month', 'year']),
  /**
   * Define custom view renderers for each section.
   * If `null`, the section will only have field editing.
   * If `undefined`, internally defined view will be used.
   */
  viewRenderers: PropTypes.shape({
    day: PropTypes.func,
    month: PropTypes.func,
    year: PropTypes.func
  }),
  /**
   * Available views.
   */
  views: PropTypes.arrayOf(PropTypes.oneOf(['day', 'month', 'year']).isRequired),
  /**
   * Years are displayed in ascending (chronological) order by default.
   * If `desc`, years are displayed in descending order.
   * @default 'asc'
   */
  yearsOrder: PropTypes.oneOf(['asc', 'desc']),
  /**
   * Years rendered per row.
   * @default 4
   */
  yearsPerRow: PropTypes.oneOf([3, 4])
};

const PickersModalDialogRoot = styles.styled(MuiDialog)({
  [`& .${MuiDialog.dialogClasses.container}`]: {
    outline: 0
  },
  [`& .${MuiDialog.dialogClasses.paper}`]: {
    outline: 0,
    minWidth: DIALOG_WIDTH
  }
});
const PickersModalDialogContent = styles.styled(DialogContent)({
  '&:first-of-type': {
    padding: 0
  }
});
function PickersModalDialog(props) {
  const {
    children,
    slots,
    slotProps
  } = props;
  const {
    open
  } = usePickerContext();
  const {
    dismissViews,
    onPopperExited
  } = usePickerPrivateContext();
  const Dialog = slots?.dialog ?? PickersModalDialogRoot;
  const Transition = slots?.mobileTransition ?? Fade;
  return /*#__PURE__*/jsxRuntime.jsx(Dialog, _extends({
    open: open,
    onClose: () => {
      dismissViews();
      onPopperExited?.();
    }
  }, slotProps?.dialog, {
    TransitionComponent: Transition,
    TransitionProps: slotProps?.mobileTransition,
    PaperComponent: slots?.mobilePaper,
    PaperProps: slotProps?.mobilePaper,
    children: /*#__PURE__*/jsxRuntime.jsx(PickersModalDialogContent, {
      children: children
    })
  }));
}

const _excluded$9 = ["props", "steps"],
  _excluded2 = ["ownerState"];
const useMobilePicker = _ref => {
  let {
      props,
      steps
    } = _ref,
    pickerParams = _objectWithoutPropertiesLoose(_ref, _excluded$9);
  const {
    slots,
    slotProps: innerSlotProps,
    label,
    inputRef,
    localeText
  } = props;
  const getStepNavigation = createNonRangePickerStepNavigation({
    steps
  });
  const {
    providerProps,
    renderCurrentView,
    ownerState
  } = usePicker(_extends({}, pickerParams, {
    props,
    localeText,
    autoFocusView: true,
    viewContainerRole: 'dialog',
    variant: 'mobile',
    getStepNavigation
  }));
  const labelId = providerProps.privateContextValue.labelId;
  const isToolbarHidden = innerSlotProps?.toolbar?.hidden ?? false;
  const Field = slots.field;
  const _useSlotProps = useSlotProps({
      elementType: Field,
      externalSlotProps: innerSlotProps?.field,
      additionalProps: _extends({}, isToolbarHidden && {
        id: labelId
      }),
      ownerState
    }),
    fieldProps = _objectWithoutPropertiesLoose(_useSlotProps, _excluded2);
  const Layout = slots.layout ?? PickersLayout;
  let labelledById = labelId;
  if (isToolbarHidden) {
    if (label) {
      labelledById = `${labelId}-label`;
    } else {
      labelledById = undefined;
    }
  }
  const slotProps = _extends({}, innerSlotProps, {
    toolbar: _extends({}, innerSlotProps?.toolbar, {
      titleId: labelId
    }),
    mobilePaper: _extends({
      'aria-labelledby': labelledById
    }, innerSlotProps?.mobilePaper)
  });
  const renderPicker = () => /*#__PURE__*/jsxRuntime.jsx(PickerProvider, _extends({}, providerProps, {
    children: /*#__PURE__*/jsxRuntime.jsxs(PickerFieldUIContextProvider, {
      slots: slots,
      slotProps: slotProps,
      inputRef: inputRef,
      children: [/*#__PURE__*/jsxRuntime.jsx(Field, _extends({}, fieldProps)), /*#__PURE__*/jsxRuntime.jsx(PickersModalDialog, {
        slots: slots,
        slotProps: slotProps,
        children: /*#__PURE__*/jsxRuntime.jsx(Layout, _extends({}, slotProps?.layout, {
          slots: slots,
          slotProps: slotProps,
          children: renderCurrentView()
        }))
      })]
    })
  }));
  if (process.env.NODE_ENV !== "production") renderPicker.displayName = "renderPicker";
  return {
    renderPicker
  };
};

/**
 * Demos:
 *
 * - [DatePicker](https://mui.com/x/react-date-pickers/date-picker/)
 * - [Validation](https://mui.com/x/react-date-pickers/validation/)
 *
 * API:
 *
 * - [MobileDatePicker API](https://mui.com/x/api/date-pickers/mobile-date-picker/)
 */
const MobileDatePicker = /*#__PURE__*/React__namespace.forwardRef(function MobileDatePicker(inProps, ref) {
  const adapter = usePickerAdapter();

  // Props with the default values common to all date pickers
  const defaultizedProps = useDatePickerDefaultizedProps(inProps, 'MuiMobileDatePicker');
  const viewRenderers = _extends({
    day: renderDateViewCalendar,
    month: renderDateViewCalendar,
    year: renderDateViewCalendar
  }, defaultizedProps.viewRenderers);

  // Props with the default values specific to the mobile variant
  const props = _extends({}, defaultizedProps, {
    viewRenderers,
    format: resolveDateFormat(adapter, defaultizedProps, false),
    slots: _extends({
      field: DateField
    }, defaultizedProps.slots),
    slotProps: _extends({}, defaultizedProps.slotProps, {
      field: ownerState => _extends({}, resolveComponentProps(defaultizedProps.slotProps?.field, ownerState), extractValidationProps(defaultizedProps)),
      toolbar: _extends({
        hidden: false
      }, defaultizedProps.slotProps?.toolbar)
    })
  });
  const {
    renderPicker
  } = useMobilePicker({
    ref,
    props,
    valueManager: singleItemValueManager,
    valueType: 'date',
    validator: validateDate,
    steps: null
  });
  return renderPicker();
});
if (process.env.NODE_ENV !== "production") MobileDatePicker.displayName = "MobileDatePicker";
MobileDatePicker.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * If `true`, the main element is focused during the first mount.
   * This main element is:
   * - the element chosen by the visible view if any (i.e: the selected day on the `day` view).
   * - the `input` element if there is a field rendered.
   */
  autoFocus: PropTypes.bool,
  className: PropTypes.string,
  /**
   * If `true`, the Picker will close after submitting the full date.
   * @default false
   */
  closeOnSelect: PropTypes.bool,
  /**
   * Formats the day of week displayed in the calendar header.
   * @param {PickerValidDate} date The date of the day of week provided by the adapter.
   * @returns {string} The name to display.
   * @default (date: PickerValidDate) => adapter.format(date, 'weekdayShort').charAt(0).toUpperCase()
   */
  dayOfWeekFormatter: PropTypes.func,
  /**
   * The default value.
   * Used when the component is not controlled.
   */
  defaultValue: PropTypes.object,
  /**
   * If `true`, the component is disabled.
   * When disabled, the value cannot be changed and no interaction is possible.
   * @default false
   */
  disabled: PropTypes.bool,
  /**
   * If `true`, disable values after the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disableFuture: PropTypes.bool,
  /**
   * If `true`, today's date is rendering without highlighting with circle.
   * @default false
   */
  disableHighlightToday: PropTypes.bool,
  /**
   * If `true`, the button to open the Picker will not be rendered (it will only render the field).
   * @deprecated Use the [field component](https://mui.com/x/react-date-pickers/fields/) instead.
   * @default false
   */
  disableOpenPicker: PropTypes.bool,
  /**
   * If `true`, disable values before the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disablePast: PropTypes.bool,
  /**
   * If `true`, the week number will be display in the calendar.
   */
  displayWeekNumber: PropTypes.bool,
  /**
   * @default true
   */
  enableAccessibleFieldDOMStructure: PropTypes.any,
  /**
   * The day view will show as many weeks as needed after the end of the current month to match this value.
   * Put it to 6 to have a fixed number of weeks in Gregorian calendars
   */
  fixedWeekNumber: PropTypes.number,
  /**
   * Format of the date when rendered in the input(s).
   * Defaults to localized format based on the used `views`.
   */
  format: PropTypes.string,
  /**
   * Density of the format when rendered in the input.
   * Setting `formatDensity` to `"spacious"` will add a space before and after each `/`, `-` and `.` character.
   * @default "dense"
   */
  formatDensity: PropTypes.oneOf(['dense', 'spacious']),
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: refType$1,
  /**
   * The label content.
   */
  label: PropTypes.node,
  /**
   * If `true`, calls `renderLoading` instead of rendering the day calendar.
   * Can be used to preload information and show it in calendar.
   * @default false
   */
  loading: PropTypes.bool,
  /**
   * Locale for components texts.
   * Allows overriding texts coming from `LocalizationProvider` and `theme`.
   */
  localeText: PropTypes.object,
  /**
   * Maximal selectable date.
   * @default 2099-12-31
   */
  maxDate: PropTypes.object,
  /**
   * Minimal selectable date.
   * @default 1900-01-01
   */
  minDate: PropTypes.object,
  /**
   * Months rendered per row.
   * @default 3
   */
  monthsPerRow: PropTypes.oneOf([3, 4]),
  /**
   * Name attribute used by the `input` element in the Field.
   */
  name: PropTypes.string,
  /**
   * Callback fired when the value is accepted.
   * @template TValue The value type. It will be the same type as `value` or `null`. It can be in `[start, end]` format in case of range value.
   * @template TError The validation error type. It will be either `string` or a `null`. It can be in `[start, end]` format in case of range value.
   * @param {TValue} value The value that was just accepted.
   * @param {FieldChangeHandlerContext<TError>} context The context containing the validation result of the current value.
   */
  onAccept: PropTypes.func,
  /**
   * Callback fired when the value changes.
   * @template TValue The value type. It will be the same type as `value` or `null`. It can be in `[start, end]` format in case of range value.
   * @template TError The validation error type. It will be either `string` or a `null`. It can be in `[start, end]` format in case of range value.
   * @param {TValue} value The new value.
   * @param {FieldChangeHandlerContext<TError>} context The context containing the validation result of the current value.
   */
  onChange: PropTypes.func,
  /**
   * Callback fired when the popup requests to be closed.
   * Use in controlled mode (see `open`).
   */
  onClose: PropTypes.func,
  /**
   * Callback fired when the error associated with the current value changes.
   * When a validation error is detected, the `error` parameter contains a non-null value.
   * This can be used to render an appropriate form error.
   * @template TError The validation error type. It will be either `string` or a `null`. It can be in `[start, end]` format in case of range value.
   * @template TValue The value type. It will be the same type as `value` or `null`. It can be in `[start, end]` format in case of range value.
   * @param {TError} error The reason why the current value is not valid.
   * @param {TValue} value The value associated with the error.
   */
  onError: PropTypes.func,
  /**
   * Callback fired on month change.
   * @param {PickerValidDate} month The new month.
   */
  onMonthChange: PropTypes.func,
  /**
   * Callback fired when the popup requests to be opened.
   * Use in controlled mode (see `open`).
   */
  onOpen: PropTypes.func,
  /**
   * Callback fired when the selected sections change.
   * @param {FieldSelectedSections} newValue The new selected sections.
   */
  onSelectedSectionsChange: PropTypes.func,
  /**
   * Callback fired on view change.
   * @template TView Type of the view. It will vary based on the Picker type and the `views` it uses.
   * @param {TView} view The new view.
   */
  onViewChange: PropTypes.func,
  /**
   * Callback fired on year change.
   * @param {PickerValidDate} year The new year.
   */
  onYearChange: PropTypes.func,
  /**
   * Control the popup or dialog open state.
   * @default false
   */
  open: PropTypes.bool,
  /**
   * The default visible view.
   * Used when the component view is not controlled.
   * Must be a valid option from `views` list.
   */
  openTo: PropTypes.oneOf(['day', 'month', 'year']),
  /**
   * Force rendering in particular orientation.
   */
  orientation: PropTypes.oneOf(['landscape', 'portrait']),
  /**
   * If `true`, the component is read-only.
   * When read-only, the value cannot be changed but the user can interact with the interface.
   * @default false
   */
  readOnly: PropTypes.bool,
  /**
   * If `true`, disable heavy animations.
   * @default `@media(prefers-reduced-motion: reduce)` || `navigator.userAgent` matches Android <10 or iOS <13
   */
  reduceAnimations: PropTypes.bool,
  /**
   * The date used to generate the new value when both `value` and `defaultValue` are empty.
   * @default The closest valid date-time using the validation props, except callbacks like `shouldDisable<...>`.
   */
  referenceDate: PropTypes.object,
  /**
   * Component displaying when passed `loading` true.
   * @returns {React.ReactNode} The node to render when loading.
   * @default () => <span>...</span>
   */
  renderLoading: PropTypes.func,
  /**
   * The currently selected sections.
   * This prop accepts four formats:
   * 1. If a number is provided, the section at this index will be selected.
   * 2. If a string of type `FieldSectionType` is provided, the first section with that name will be selected.
   * 3. If `"all"` is provided, all the sections will be selected.
   * 4. If `null` is provided, no section will be selected.
   * If not provided, the selected sections will be handled internally.
   */
  selectedSections: PropTypes.oneOfType([PropTypes.oneOf(['all', 'day', 'empty', 'hours', 'meridiem', 'minutes', 'month', 'seconds', 'weekDay', 'year']), PropTypes.number]),
  /**
   * Disable specific date.
   *
   * Warning: This function can be called multiple times (for example when rendering date calendar, checking if focus can be moved to a certain date, etc.). Expensive computations can impact performance.
   *
   * @param {PickerValidDate} day The date to test.
   * @returns {boolean} If `true` the date will be disabled.
   */
  shouldDisableDate: PropTypes.func,
  /**
   * Disable specific month.
   * @param {PickerValidDate} month The month to test.
   * @returns {boolean} If `true`, the month will be disabled.
   */
  shouldDisableMonth: PropTypes.func,
  /**
   * Disable specific year.
   * @param {PickerValidDate} year The year to test.
   * @returns {boolean} If `true`, the year will be disabled.
   */
  shouldDisableYear: PropTypes.func,
  /**
   * If `true`, days outside the current month are rendered:
   *
   * - if `fixedWeekNumber` is defined, renders days to have the weeks requested.
   *
   * - if `fixedWeekNumber` is not defined, renders day to fill the first and last week of the current month.
   *
   * - ignored if `calendars` equals more than `1` on range pickers.
   * @default false
   */
  showDaysOutsideCurrentMonth: PropTypes.bool,
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: PropTypes.object,
  /**
   * Overridable component slots.
   * @default {}
   */
  slots: PropTypes.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])), PropTypes.func, PropTypes.object]),
  /**
   * Choose which timezone to use for the value.
   * Example: "default", "system", "UTC", "America/New_York".
   * If you pass values from other timezones to some props, they will be converted to this timezone before being used.
   * @see See the {@link https://mui.com/x/react-date-pickers/timezone/ timezones documentation} for more details.
   * @default The timezone of the `value` or `defaultValue` prop is defined, 'default' otherwise.
   */
  timezone: PropTypes.string,
  /**
   * The selected value.
   * Used when the component is controlled.
   */
  value: PropTypes.object,
  /**
   * The visible view.
   * Used when the component view is controlled.
   * Must be a valid option from `views` list.
   */
  view: PropTypes.oneOf(['day', 'month', 'year']),
  /**
   * Define custom view renderers for each section.
   * If `null`, the section will only have field editing.
   * If `undefined`, internally defined view will be used.
   */
  viewRenderers: PropTypes.shape({
    day: PropTypes.func,
    month: PropTypes.func,
    year: PropTypes.func
  }),
  /**
   * Available views.
   */
  views: PropTypes.arrayOf(PropTypes.oneOf(['day', 'month', 'year']).isRequired),
  /**
   * Years are displayed in ascending (chronological) order by default.
   * If `desc`, years are displayed in descending order.
   * @default 'asc'
   */
  yearsOrder: PropTypes.oneOf(['asc', 'desc']),
  /**
   * Years rendered per row.
   * @default 3
   */
  yearsPerRow: PropTypes.oneOf([3, 4])
};

const _excluded$8 = ["desktopModeMediaQuery"];
/**
 * Demos:
 *
 * - [DatePicker](https://mui.com/x/react-date-pickers/date-picker/)
 * - [Validation](https://mui.com/x/react-date-pickers/validation/)
 *
 * API:
 *
 * - [DatePicker API](https://mui.com/x/api/date-pickers/date-picker/)
 */
const DatePicker = /*#__PURE__*/React__namespace.forwardRef(function DatePicker(inProps, ref) {
  const props = styles.useThemeProps({
    props: inProps,
    name: 'MuiDatePicker'
  });
  const {
      desktopModeMediaQuery = DEFAULT_DESKTOP_MODE_MEDIA_QUERY
    } = props,
    other = _objectWithoutPropertiesLoose(props, _excluded$8);

  // defaults to `true` in environments where `window.matchMedia` would not be available (i.e. test/jsdom)
  const isDesktop = useMediaQuery(desktopModeMediaQuery, {
    defaultMatches: true
  });
  if (isDesktop) {
    return /*#__PURE__*/jsxRuntime.jsx(DesktopDatePicker, _extends({
      ref: ref
    }, other));
  }
  return /*#__PURE__*/jsxRuntime.jsx(MobileDatePicker, _extends({
    ref: ref
  }, other));
});
if (process.env.NODE_ENV !== "production") DatePicker.displayName = "DatePicker";
process.env.NODE_ENV !== "production" ? DatePicker.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * If `true`, the main element is focused during the first mount.
   * This main element is:
   * - the element chosen by the visible view if any (i.e: the selected day on the `day` view).
   * - the `input` element if there is a field rendered.
   */
  autoFocus: PropTypes.bool,
  className: PropTypes.string,
  /**
   * If `true`, the Picker will close after submitting the full date.
   * @default `true` for desktop, `false` for mobile (based on the chosen wrapper and `desktopModeMediaQuery` prop).
   */
  closeOnSelect: PropTypes.bool,
  /**
   * Formats the day of week displayed in the calendar header.
   * @param {PickerValidDate} date The date of the day of week provided by the adapter.
   * @returns {string} The name to display.
   * @default (date: PickerValidDate) => adapter.format(date, 'weekdayShort').charAt(0).toUpperCase()
   */
  dayOfWeekFormatter: PropTypes.func,
  /**
   * The default value.
   * Used when the component is not controlled.
   */
  defaultValue: PropTypes.object,
  /**
   * CSS media query when `Mobile` mode will be changed to `Desktop`.
   * @default '@media (pointer: fine)'
   * @example '@media (min-width: 720px)' or theme.breakpoints.up("sm")
   */
  desktopModeMediaQuery: PropTypes.string,
  /**
   * If `true`, the component is disabled.
   * When disabled, the value cannot be changed and no interaction is possible.
   * @default false
   */
  disabled: PropTypes.bool,
  /**
   * If `true`, disable values after the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disableFuture: PropTypes.bool,
  /**
   * If `true`, today's date is rendering without highlighting with circle.
   * @default false
   */
  disableHighlightToday: PropTypes.bool,
  /**
   * If `true`, the button to open the Picker will not be rendered (it will only render the field).
   * @deprecated Use the [field component](https://mui.com/x/react-date-pickers/fields/) instead.
   * @default false
   */
  disableOpenPicker: PropTypes.bool,
  /**
   * If `true`, disable values before the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disablePast: PropTypes.bool,
  /**
   * If `true`, the week number will be display in the calendar.
   */
  displayWeekNumber: PropTypes.bool,
  /**
   * @default true
   */
  enableAccessibleFieldDOMStructure: PropTypes.any,
  /**
   * The day view will show as many weeks as needed after the end of the current month to match this value.
   * Put it to 6 to have a fixed number of weeks in Gregorian calendars
   */
  fixedWeekNumber: PropTypes.number,
  /**
   * Format of the date when rendered in the input(s).
   * Defaults to localized format based on the used `views`.
   */
  format: PropTypes.string,
  /**
   * Density of the format when rendered in the input.
   * Setting `formatDensity` to `"spacious"` will add a space before and after each `/`, `-` and `.` character.
   * @default "dense"
   */
  formatDensity: PropTypes.oneOf(['dense', 'spacious']),
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: refType$1,
  /**
   * The label content.
   */
  label: PropTypes.node,
  /**
   * If `true`, calls `renderLoading` instead of rendering the day calendar.
   * Can be used to preload information and show it in calendar.
   * @default false
   */
  loading: PropTypes.bool,
  /**
   * Locale for components texts.
   * Allows overriding texts coming from `LocalizationProvider` and `theme`.
   */
  localeText: PropTypes.object,
  /**
   * Maximal selectable date.
   * @default 2099-12-31
   */
  maxDate: PropTypes.object,
  /**
   * Minimal selectable date.
   * @default 1900-01-01
   */
  minDate: PropTypes.object,
  /**
   * Months rendered per row.
   * @default 3
   */
  monthsPerRow: PropTypes.oneOf([3, 4]),
  /**
   * Name attribute used by the `input` element in the Field.
   */
  name: PropTypes.string,
  /**
   * Callback fired when the value is accepted.
   * @template TValue The value type. It will be the same type as `value` or `null`. It can be in `[start, end]` format in case of range value.
   * @template TError The validation error type. It will be either `string` or a `null`. It can be in `[start, end]` format in case of range value.
   * @param {TValue} value The value that was just accepted.
   * @param {FieldChangeHandlerContext<TError>} context The context containing the validation result of the current value.
   */
  onAccept: PropTypes.func,
  /**
   * Callback fired when the value changes.
   * @template TValue The value type. It will be the same type as `value` or `null`. It can be in `[start, end]` format in case of range value.
   * @template TError The validation error type. It will be either `string` or a `null`. It can be in `[start, end]` format in case of range value.
   * @param {TValue} value The new value.
   * @param {FieldChangeHandlerContext<TError>} context The context containing the validation result of the current value.
   */
  onChange: PropTypes.func,
  /**
   * Callback fired when the popup requests to be closed.
   * Use in controlled mode (see `open`).
   */
  onClose: PropTypes.func,
  /**
   * Callback fired when the error associated with the current value changes.
   * When a validation error is detected, the `error` parameter contains a non-null value.
   * This can be used to render an appropriate form error.
   * @template TError The validation error type. It will be either `string` or a `null`. It can be in `[start, end]` format in case of range value.
   * @template TValue The value type. It will be the same type as `value` or `null`. It can be in `[start, end]` format in case of range value.
   * @param {TError} error The reason why the current value is not valid.
   * @param {TValue} value The value associated with the error.
   */
  onError: PropTypes.func,
  /**
   * Callback fired on month change.
   * @param {PickerValidDate} month The new month.
   */
  onMonthChange: PropTypes.func,
  /**
   * Callback fired when the popup requests to be opened.
   * Use in controlled mode (see `open`).
   */
  onOpen: PropTypes.func,
  /**
   * Callback fired when the selected sections change.
   * @param {FieldSelectedSections} newValue The new selected sections.
   */
  onSelectedSectionsChange: PropTypes.func,
  /**
   * Callback fired on view change.
   * @template TView Type of the view. It will vary based on the Picker type and the `views` it uses.
   * @param {TView} view The new view.
   */
  onViewChange: PropTypes.func,
  /**
   * Callback fired on year change.
   * @param {PickerValidDate} year The new year.
   */
  onYearChange: PropTypes.func,
  /**
   * Control the popup or dialog open state.
   * @default false
   */
  open: PropTypes.bool,
  /**
   * The default visible view.
   * Used when the component view is not controlled.
   * Must be a valid option from `views` list.
   */
  openTo: PropTypes.oneOf(['day', 'month', 'year']),
  /**
   * Force rendering in particular orientation.
   */
  orientation: PropTypes.oneOf(['landscape', 'portrait']),
  /**
   * If `true`, the component is read-only.
   * When read-only, the value cannot be changed but the user can interact with the interface.
   * @default false
   */
  readOnly: PropTypes.bool,
  /**
   * If `true`, disable heavy animations.
   * @default `@media(prefers-reduced-motion: reduce)` || `navigator.userAgent` matches Android <10 or iOS <13
   */
  reduceAnimations: PropTypes.bool,
  /**
   * The date used to generate the new value when both `value` and `defaultValue` are empty.
   * @default The closest valid date-time using the validation props, except callbacks like `shouldDisable<...>`.
   */
  referenceDate: PropTypes.object,
  /**
   * Component displaying when passed `loading` true.
   * @returns {React.ReactNode} The node to render when loading.
   * @default () => <span>...</span>
   */
  renderLoading: PropTypes.func,
  /**
   * The currently selected sections.
   * This prop accepts four formats:
   * 1. If a number is provided, the section at this index will be selected.
   * 2. If a string of type `FieldSectionType` is provided, the first section with that name will be selected.
   * 3. If `"all"` is provided, all the sections will be selected.
   * 4. If `null` is provided, no section will be selected.
   * If not provided, the selected sections will be handled internally.
   */
  selectedSections: PropTypes.oneOfType([PropTypes.oneOf(['all', 'day', 'empty', 'hours', 'meridiem', 'minutes', 'month', 'seconds', 'weekDay', 'year']), PropTypes.number]),
  /**
   * Disable specific date.
   *
   * Warning: This function can be called multiple times (for example when rendering date calendar, checking if focus can be moved to a certain date, etc.). Expensive computations can impact performance.
   *
   * @param {PickerValidDate} day The date to test.
   * @returns {boolean} If `true` the date will be disabled.
   */
  shouldDisableDate: PropTypes.func,
  /**
   * Disable specific month.
   * @param {PickerValidDate} month The month to test.
   * @returns {boolean} If `true`, the month will be disabled.
   */
  shouldDisableMonth: PropTypes.func,
  /**
   * Disable specific year.
   * @param {PickerValidDate} year The year to test.
   * @returns {boolean} If `true`, the year will be disabled.
   */
  shouldDisableYear: PropTypes.func,
  /**
   * If `true`, days outside the current month are rendered:
   *
   * - if `fixedWeekNumber` is defined, renders days to have the weeks requested.
   *
   * - if `fixedWeekNumber` is not defined, renders day to fill the first and last week of the current month.
   *
   * - ignored if `calendars` equals more than `1` on range pickers.
   * @default false
   */
  showDaysOutsideCurrentMonth: PropTypes.bool,
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: PropTypes.object,
  /**
   * Overridable component slots.
   * @default {}
   */
  slots: PropTypes.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])), PropTypes.func, PropTypes.object]),
  /**
   * Choose which timezone to use for the value.
   * Example: "default", "system", "UTC", "America/New_York".
   * If you pass values from other timezones to some props, they will be converted to this timezone before being used.
   * @see See the {@link https://mui.com/x/react-date-pickers/timezone/ timezones documentation} for more details.
   * @default The timezone of the `value` or `defaultValue` prop is defined, 'default' otherwise.
   */
  timezone: PropTypes.string,
  /**
   * The selected value.
   * Used when the component is controlled.
   */
  value: PropTypes.object,
  /**
   * The visible view.
   * Used when the component view is controlled.
   * Must be a valid option from `views` list.
   */
  view: PropTypes.oneOf(['day', 'month', 'year']),
  /**
   * Define custom view renderers for each section.
   * If `null`, the section will only have field editing.
   * If `undefined`, internally defined view will be used.
   */
  viewRenderers: PropTypes.shape({
    day: PropTypes.func,
    month: PropTypes.func,
    year: PropTypes.func
  }),
  /**
   * Available views.
   */
  views: PropTypes.arrayOf(PropTypes.oneOf(['day', 'month', 'year']).isRequired),
  /**
   * Years are displayed in ascending (chronological) order by default.
   * If `desc`, years are displayed in descending order.
   * @default 'asc'
   */
  yearsOrder: PropTypes.oneOf(['asc', 'desc']),
  /**
   * Years rendered per row.
   * @default 4 on desktop, 3 on mobile
   */
  yearsPerRow: PropTypes.oneOf([3, 4])
} : void 0;

function getPickersToolbarTextUtilityClass(slot) {
  return generateUtilityClass('MuiPickersToolbarText', slot);
}
const pickersToolbarTextClasses = generateUtilityClasses('MuiPickersToolbarText', ['root']);

const _excluded$7 = ["className", "classes", "selected", "value"];
const useUtilityClasses$4 = classes => {
  const slots = {
    root: ['root']
  };
  return composeClasses(slots, getPickersToolbarTextUtilityClass, classes);
};
const PickersToolbarTextRoot = styles.styled(Typography, {
  name: 'MuiPickersToolbarText',
  slot: 'Root'
})(({
  theme
}) => ({
  transition: theme.transitions.create('color'),
  color: (theme.vars || theme).palette.text.secondary,
  [`&[data-selected]`]: {
    color: (theme.vars || theme).palette.text.primary
  }
}));
const PickersToolbarText = /*#__PURE__*/React__namespace.forwardRef(function PickersToolbarText(inProps, ref) {
  const props = styles.useThemeProps({
    props: inProps,
    name: 'MuiPickersToolbarText'
  });
  const {
      className,
      classes: classesProp,
      selected,
      value
    } = props,
    other = _objectWithoutPropertiesLoose(props, _excluded$7);
  const classes = useUtilityClasses$4(classesProp);
  return /*#__PURE__*/jsxRuntime.jsx(PickersToolbarTextRoot, _extends({
    ref: ref,
    className: clsx(classes.root, className),
    component: "span",
    ownerState: props
  }, selected && {
    'data-selected': true
  }, other, {
    children: value
  }));
});
if (process.env.NODE_ENV !== "production") PickersToolbarText.displayName = "PickersToolbarText";

const _excluded$6 = ["align", "className", "classes", "selected", "typographyClassName", "value", "variant", "width"];
const useUtilityClasses$3 = classes => {
  const slots = {
    root: ['root']
  };
  return composeClasses(slots, getPickersToolbarUtilityClass, classes);
};
const PickersToolbarButtonRoot = styles.styled(Button, {
  name: 'MuiPickersToolbarButton',
  slot: 'Root'
})({
  padding: 0,
  minWidth: 16,
  textTransform: 'none'
});
const PickersToolbarButton = /*#__PURE__*/React__namespace.forwardRef(function PickersToolbarButton(inProps, ref) {
  const props = styles.useThemeProps({
    props: inProps,
    name: 'MuiPickersToolbarButton'
  });
  const {
      align,
      className,
      classes: classesProp,
      selected,
      typographyClassName,
      value,
      variant,
      width
    } = props,
    other = _objectWithoutPropertiesLoose(props, _excluded$6);
  const classes = useUtilityClasses$3(classesProp);
  return /*#__PURE__*/jsxRuntime.jsx(PickersToolbarButtonRoot, _extends({
    variant: "text",
    ref: ref,
    className: clsx(classes.root, className),
    ownerState: props
  }, width ? {
    sx: {
      width
    }
  } : {}, other, {
    children: /*#__PURE__*/jsxRuntime.jsx(PickersToolbarText, {
      align: align,
      className: typographyClassName,
      variant: variant,
      value: value,
      selected: selected
    })
  }));
});
if (process.env.NODE_ENV !== "production") PickersToolbarButton.displayName = "PickersToolbarButton";

function getTimePickerToolbarUtilityClass(slot) {
  return generateUtilityClass('MuiTimePickerToolbar', slot);
}
const timePickerToolbarClasses = generateUtilityClasses('MuiTimePickerToolbar', ['root', 'separator', 'hourMinuteLabel', 'hourMinuteLabelLandscape', 'hourMinuteLabelReverse', 'ampmSelection', 'ampmLandscape', 'ampmLabel']);

const _excluded$5 = ["ampm", "ampmInClock", "className", "classes"];
const useUtilityClasses$2 = (classes, ownerState) => {
  const {
    pickerOrientation,
    toolbarDirection
  } = ownerState;
  const slots = {
    root: ['root'],
    separator: ['separator'],
    hourMinuteLabel: ['hourMinuteLabel', pickerOrientation === 'landscape' && 'hourMinuteLabelLandscape', toolbarDirection === 'rtl' && 'hourMinuteLabelReverse'],
    ampmSelection: ['ampmSelection', pickerOrientation === 'landscape' && 'ampmLandscape'],
    ampmLabel: ['ampmLabel']
  };
  return composeClasses(slots, getTimePickerToolbarUtilityClass, classes);
};
const TimePickerToolbarRoot = styles.styled(PickersToolbar, {
  name: 'MuiTimePickerToolbar',
  slot: 'Root'
})({});
const TimePickerToolbarSeparator = styles.styled(PickersToolbarText, {
  name: 'MuiTimePickerToolbar',
  slot: 'Separator'
})({
  outline: 0,
  margin: '0 4px 0 2px',
  cursor: 'default'
});
const TimePickerToolbarHourMinuteLabel = styles.styled('div', {
  name: 'MuiTimePickerToolbar',
  slot: 'HourMinuteLabel',
  overridesResolver: (props, styles) => [{
    [`&.${timePickerToolbarClasses.hourMinuteLabelLandscape}`]: styles.hourMinuteLabelLandscape,
    [`&.${timePickerToolbarClasses.hourMinuteLabelReverse}`]: styles.hourMinuteLabelReverse
  }, styles.hourMinuteLabel]
})({
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'flex-end',
  variants: [{
    props: {
      toolbarDirection: 'rtl'
    },
    style: {
      flexDirection: 'row-reverse'
    }
  }, {
    props: {
      pickerOrientation: 'landscape'
    },
    style: {
      marginTop: 'auto'
    }
  }]
});
const TimePickerToolbarAmPmSelection = styles.styled('div', {
  name: 'MuiTimePickerToolbar',
  slot: 'AmPmSelection',
  overridesResolver: (props, styles) => [{
    [`.${timePickerToolbarClasses.ampmLabel}`]: styles.ampmLabel
  }, {
    [`&.${timePickerToolbarClasses.ampmLandscape}`]: styles.ampmLandscape
  }, styles.ampmSelection]
})({
  display: 'flex',
  flexDirection: 'column',
  marginRight: 'auto',
  marginLeft: 12,
  [`& .${timePickerToolbarClasses.ampmLabel}`]: {
    fontSize: 17
  },
  variants: [{
    props: {
      pickerOrientation: 'landscape'
    },
    style: {
      margin: '4px 0 auto',
      flexDirection: 'row',
      justifyContent: 'space-around',
      flexBasis: '100%'
    }
  }]
});

/**
 * Demos:
 *
 * - [TimePicker](https://mui.com/x/react-date-pickers/time-picker/)
 * - [Custom components](https://mui.com/x/react-date-pickers/custom-components/)
 *
 * API:
 *
 * - [TimePickerToolbar API](https://mui.com/x/api/date-pickers/time-picker-toolbar/)
 */
function TimePickerToolbar(inProps) {
  const props = styles.useThemeProps({
    props: inProps,
    name: 'MuiTimePickerToolbar'
  });
  const {
      ampm,
      ampmInClock,
      className,
      classes: classesProp
    } = props,
    other = _objectWithoutPropertiesLoose(props, _excluded$5);
  const adapter = usePickerAdapter();
  const translations = usePickerTranslations();
  const ownerState = useToolbarOwnerState();
  const classes = useUtilityClasses$2(classesProp, ownerState);
  const {
    value,
    setValue,
    disabled,
    readOnly,
    view,
    setView,
    views
  } = usePickerContext();
  const showAmPmControl = Boolean(ampm && !ampmInClock && views.includes('hours'));
  const {
    meridiemMode,
    handleMeridiemChange
  } = useMeridiemMode(value, ampm, newValue => setValue(newValue, {
    changeImportance: 'set'
  }));
  const formatSection = format => {
    if (!adapter.isValid(value)) {
      return '--';
    }
    return adapter.format(value, format);
  };
  const separator = /*#__PURE__*/jsxRuntime.jsx(TimePickerToolbarSeparator, {
    tabIndex: -1,
    value: ":",
    variant: "h3",
    selected: false,
    className: classes.separator
  });
  return /*#__PURE__*/jsxRuntime.jsxs(TimePickerToolbarRoot, _extends({
    landscapeDirection: "row",
    toolbarTitle: translations.timePickerToolbarTitle,
    ownerState: ownerState,
    className: clsx(classes.root, className)
  }, other, {
    children: [/*#__PURE__*/jsxRuntime.jsxs(TimePickerToolbarHourMinuteLabel, {
      className: classes.hourMinuteLabel,
      ownerState: ownerState,
      children: [arrayIncludes(views, 'hours') && /*#__PURE__*/jsxRuntime.jsx(PickersToolbarButton, {
        tabIndex: -1,
        variant: "h3",
        onClick: () => setView('hours'),
        selected: view === 'hours',
        value: formatSection(ampm ? 'hours12h' : 'hours24h')
      }), arrayIncludes(views, ['hours', 'minutes']) && separator, arrayIncludes(views, 'minutes') && /*#__PURE__*/jsxRuntime.jsx(PickersToolbarButton, {
        tabIndex: -1,
        variant: "h3",
        onClick: () => setView('minutes'),
        selected: view === 'minutes',
        value: formatSection('minutes')
      }), arrayIncludes(views, ['minutes', 'seconds']) && separator, arrayIncludes(views, 'seconds') && /*#__PURE__*/jsxRuntime.jsx(PickersToolbarButton, {
        variant: "h3",
        onClick: () => setView('seconds'),
        selected: view === 'seconds',
        value: formatSection('seconds')
      })]
    }), showAmPmControl && /*#__PURE__*/jsxRuntime.jsxs(TimePickerToolbarAmPmSelection, {
      className: classes.ampmSelection,
      ownerState: ownerState,
      children: [/*#__PURE__*/jsxRuntime.jsx(PickersToolbarButton, {
        disableRipple: true,
        variant: "subtitle2",
        selected: meridiemMode === 'am',
        typographyClassName: classes.ampmLabel,
        value: formatMeridiem(adapter, 'am'),
        onClick: readOnly ? undefined : () => handleMeridiemChange('am'),
        disabled: disabled
      }), /*#__PURE__*/jsxRuntime.jsx(PickersToolbarButton, {
        disableRipple: true,
        variant: "subtitle2",
        selected: meridiemMode === 'pm',
        typographyClassName: classes.ampmLabel,
        value: formatMeridiem(adapter, 'pm'),
        onClick: readOnly ? undefined : () => handleMeridiemChange('pm'),
        disabled: disabled
      })]
    })]
  }));
}
process.env.NODE_ENV !== "production" ? TimePickerToolbar.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  ampm: PropTypes.bool,
  ampmInClock: PropTypes.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,
  className: PropTypes.string,
  /**
   * If `true`, show the toolbar even in desktop mode.
   * @default `true` for Desktop, `false` for Mobile.
   */
  hidden: PropTypes.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])), PropTypes.func, PropTypes.object]),
  titleId: PropTypes.string,
  /**
   * Toolbar date format.
   */
  toolbarFormat: PropTypes.string,
  /**
   * Toolbar value placeholder—it is displayed when the value is empty.
   * @default "––"
   */
  toolbarPlaceholder: PropTypes.node
} : void 0;

function useTimePickerDefaultizedProps(props, name) {
  const adapter = usePickerAdapter();
  const themeProps = styles.useThemeProps({
    props,
    name
  });
  const validationProps = useApplyDefaultValuesToTimeValidationProps(themeProps);
  const ampm = themeProps.ampm ?? adapter.is12HourCycleInCurrentLocale();
  const localeText = React__namespace.useMemo(() => {
    if (themeProps.localeText?.toolbarTitle == null) {
      return themeProps.localeText;
    }
    return _extends({}, themeProps.localeText, {
      timePickerToolbarTitle: themeProps.localeText.toolbarTitle
    });
  }, [themeProps.localeText]);
  return _extends({}, themeProps, validationProps, {
    ampm,
    localeText
  }, applyDefaultViewProps({
    views: themeProps.views,
    openTo: themeProps.openTo,
    defaultViews: ['hours', 'minutes'],
    defaultOpenTo: 'hours'
  }), {
    slots: _extends({
      toolbar: TimePickerToolbar
    }, themeProps.slots),
    slotProps: _extends({}, themeProps.slotProps, {
      toolbar: _extends({
        ampm,
        ampmInClock: themeProps.ampmInClock
      }, themeProps.slotProps?.toolbar)
    })
  });
}

const renderTimeViewClock = ({
  view,
  onViewChange,
  focusedView,
  onFocusedViewChange,
  views,
  value,
  defaultValue,
  referenceDate,
  onChange,
  className,
  classes,
  disableFuture,
  disablePast,
  minTime,
  maxTime,
  shouldDisableTime,
  minutesStep,
  ampm,
  ampmInClock,
  slots,
  slotProps,
  readOnly,
  disabled,
  sx,
  autoFocus,
  showViewSwitcher,
  disableIgnoringDatePartForTimeValidation,
  timezone
}) => /*#__PURE__*/jsxRuntime.jsx(TimeClock, {
  view: view,
  onViewChange: onViewChange,
  focusedView: focusedView && isTimeView(focusedView) ? focusedView : null,
  onFocusedViewChange: onFocusedViewChange,
  views: views.filter(isTimeView),
  value: value,
  defaultValue: defaultValue,
  referenceDate: referenceDate,
  onChange: onChange,
  className: className,
  classes: classes,
  disableFuture: disableFuture,
  disablePast: disablePast,
  minTime: minTime,
  maxTime: maxTime,
  shouldDisableTime: shouldDisableTime,
  minutesStep: minutesStep,
  ampm: ampm,
  ampmInClock: ampmInClock,
  slots: slots,
  slotProps: slotProps,
  readOnly: readOnly,
  disabled: disabled,
  sx: sx,
  autoFocus: autoFocus,
  showViewSwitcher: showViewSwitcher,
  disableIgnoringDatePartForTimeValidation: disableIgnoringDatePartForTimeValidation,
  timezone: timezone
});
if (process.env.NODE_ENV !== "production") renderTimeViewClock.displayName = "renderTimeViewClock";
const renderDigitalClockTimeView = ({
  view,
  onViewChange,
  focusedView,
  onFocusedViewChange,
  views,
  value,
  defaultValue,
  referenceDate,
  onChange,
  className,
  classes,
  disableFuture,
  disablePast,
  minTime,
  maxTime,
  shouldDisableTime,
  minutesStep,
  ampm,
  slots,
  slotProps,
  readOnly,
  disabled,
  sx,
  autoFocus,
  disableIgnoringDatePartForTimeValidation,
  timeSteps,
  skipDisabled,
  timezone
}) => /*#__PURE__*/jsxRuntime.jsx(DigitalClock, {
  view: view,
  onViewChange: onViewChange,
  focusedView: focusedView && isTimeView(focusedView) ? focusedView : null,
  onFocusedViewChange: onFocusedViewChange,
  views: views.filter(isTimeView),
  value: value,
  defaultValue: defaultValue,
  referenceDate: referenceDate,
  onChange: onChange,
  className: className,
  classes: classes,
  disableFuture: disableFuture,
  disablePast: disablePast,
  minTime: minTime,
  maxTime: maxTime,
  shouldDisableTime: shouldDisableTime,
  minutesStep: minutesStep,
  ampm: ampm,
  slots: slots,
  slotProps: slotProps,
  readOnly: readOnly,
  disabled: disabled,
  sx: sx,
  autoFocus: autoFocus,
  disableIgnoringDatePartForTimeValidation: disableIgnoringDatePartForTimeValidation,
  timeStep: timeSteps?.minutes,
  skipDisabled: skipDisabled,
  timezone: timezone
});
if (process.env.NODE_ENV !== "production") renderDigitalClockTimeView.displayName = "renderDigitalClockTimeView";
const renderMultiSectionDigitalClockTimeView = ({
  view,
  onViewChange,
  focusedView,
  onFocusedViewChange,
  views,
  value,
  defaultValue,
  referenceDate,
  onChange,
  className,
  classes,
  disableFuture,
  disablePast,
  minTime,
  maxTime,
  shouldDisableTime,
  minutesStep,
  ampm,
  slots,
  slotProps,
  readOnly,
  disabled,
  sx,
  autoFocus,
  disableIgnoringDatePartForTimeValidation,
  timeSteps,
  skipDisabled,
  timezone
}) => /*#__PURE__*/jsxRuntime.jsx(MultiSectionDigitalClock, {
  view: view,
  onViewChange: onViewChange,
  focusedView: focusedView && isInternalTimeView(focusedView) ? focusedView : null,
  onFocusedViewChange: onFocusedViewChange,
  views: views.filter(isTimeView),
  value: value,
  defaultValue: defaultValue,
  referenceDate: referenceDate,
  onChange: onChange,
  className: className,
  classes: classes,
  disableFuture: disableFuture,
  disablePast: disablePast,
  minTime: minTime,
  maxTime: maxTime,
  shouldDisableTime: shouldDisableTime,
  minutesStep: minutesStep,
  ampm: ampm,
  slots: slots,
  slotProps: slotProps,
  readOnly: readOnly,
  disabled: disabled,
  sx: sx,
  autoFocus: autoFocus,
  disableIgnoringDatePartForTimeValidation: disableIgnoringDatePartForTimeValidation,
  timeSteps: timeSteps,
  skipDisabled: skipDisabled,
  timezone: timezone
});
if (process.env.NODE_ENV !== "production") renderMultiSectionDigitalClockTimeView.displayName = "renderMultiSectionDigitalClockTimeView";

const _excluded$4 = ["views", "format"];
const resolveDateTimeFormat = (adapter, _ref, ignoreDateResolving) => {
  let {
      views,
      format
    } = _ref,
    other = _objectWithoutPropertiesLoose(_ref, _excluded$4);
  if (format) {
    return format;
  }
  const dateViews = [];
  const timeViews = [];
  views.forEach(view => {
    if (isTimeView(view)) {
      timeViews.push(view);
    } else if (isDatePickerView(view)) {
      dateViews.push(view);
    }
  });
  if (timeViews.length === 0) {
    return resolveDateFormat(adapter, _extends({
      views: dateViews
    }, other), false);
  }
  if (dateViews.length === 0) {
    return resolveTimeFormat(adapter, _extends({
      views: timeViews
    }, other));
  }
  const timeFormat = resolveTimeFormat(adapter, _extends({
    views: timeViews
  }, other));
  const dateFormat = ignoreDateResolving ? adapter.formats.keyboardDate : resolveDateFormat(adapter, _extends({
    views: dateViews
  }, other), false);
  return `${dateFormat} ${timeFormat}`;
};
const resolveViews = (ampm, views, shouldUseSingleColumn) => {
  if (shouldUseSingleColumn) {
    return views.filter(view => !isInternalTimeView(view) || view === 'hours');
  }
  return ampm ? [...views, 'meridiem'] : views;
};
const resolveShouldRenderTimeInASingleColumn = (timeSteps, threshold) => 24 * 60 / ((timeSteps.hours ?? 1) * (timeSteps.minutes ?? 5)) <= threshold;
function resolveTimeViewsResponse({
  thresholdToRenderTimeInASingleColumn: inThreshold,
  ampm,
  timeSteps: inTimeSteps,
  views
}) {
  const thresholdToRenderTimeInASingleColumn = inThreshold ?? 24;
  const timeSteps = _extends({
    hours: 1,
    minutes: 5,
    seconds: 5
  }, inTimeSteps);
  const shouldRenderTimeInASingleColumn = resolveShouldRenderTimeInASingleColumn(timeSteps, thresholdToRenderTimeInASingleColumn);
  return {
    thresholdToRenderTimeInASingleColumn,
    timeSteps,
    shouldRenderTimeInASingleColumn,
    views: resolveViews(ampm, views, shouldRenderTimeInASingleColumn)
  };
}

/**
 * Demos:
 *
 * - [TimePicker](https://mui.com/x/react-date-pickers/time-picker/)
 * - [Validation](https://mui.com/x/react-date-pickers/validation/)
 *
 * API:
 *
 * - [DesktopTimePicker API](https://mui.com/x/api/date-pickers/desktop-time-picker/)
 */
const DesktopTimePicker = /*#__PURE__*/React__namespace.forwardRef(function DesktopTimePicker(inProps, ref) {
  const adapter = usePickerAdapter();

  // Props with the default values common to all time pickers
  const defaultizedProps = useTimePickerDefaultizedProps(inProps, 'MuiDesktopTimePicker');
  const {
    shouldRenderTimeInASingleColumn,
    views: resolvedViews,
    timeSteps
  } = resolveTimeViewsResponse(defaultizedProps);
  const renderTimeView = shouldRenderTimeInASingleColumn ? renderDigitalClockTimeView : renderMultiSectionDigitalClockTimeView;
  const viewRenderers = _extends({
    hours: renderTimeView,
    minutes: renderTimeView,
    seconds: renderTimeView,
    meridiem: renderTimeView
  }, defaultizedProps.viewRenderers);
  const ampmInClock = defaultizedProps.ampmInClock ?? true;
  // Need to avoid adding the `meridiem` view when unexpected renderer is specified
  const shouldHoursRendererContainMeridiemView = viewRenderers.hours?.name === renderMultiSectionDigitalClockTimeView.name;
  const views = !shouldHoursRendererContainMeridiemView ? resolvedViews.filter(view => view !== 'meridiem') : resolvedViews;

  // Props with the default values specific to the desktop variant
  const props = _extends({}, defaultizedProps, {
    ampmInClock,
    timeSteps,
    viewRenderers,
    format: resolveTimeFormat(adapter, defaultizedProps),
    // Setting only `hours` time view in case of single column time picker
    // Allows for easy view lifecycle management
    views: shouldRenderTimeInASingleColumn ? ['hours'] : views,
    slots: _extends({
      field: TimeField
    }, defaultizedProps.slots),
    slotProps: _extends({}, defaultizedProps.slotProps, {
      field: ownerState => _extends({}, resolveComponentProps(defaultizedProps.slotProps?.field, ownerState), extractValidationProps(defaultizedProps)),
      toolbar: _extends({
        hidden: true,
        ampmInClock
      }, defaultizedProps.slotProps?.toolbar)
    })
  });
  const {
    renderPicker
  } = useDesktopPicker({
    ref,
    props,
    valueManager: singleItemValueManager,
    valueType: 'time',
    validator: validateTime,
    steps: null
  });
  return renderPicker();
});
if (process.env.NODE_ENV !== "production") DesktopTimePicker.displayName = "DesktopTimePicker";
DesktopTimePicker.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * 12h/24h view for hour selection clock.
   * @default adapter.is12HourCycleInCurrentLocale()
   */
  ampm: PropTypes.bool,
  /**
   * Display ampm controls under the clock (instead of in the toolbar).
   * @default true on desktop, false on mobile
   */
  ampmInClock: PropTypes.bool,
  /**
   * If `true`, the main element is focused during the first mount.
   * This main element is:
   * - the element chosen by the visible view if any (i.e: the selected day on the `day` view).
   * - the `input` element if there is a field rendered.
   */
  autoFocus: PropTypes.bool,
  className: PropTypes.string,
  /**
   * If `true`, the Picker will close after submitting the full date.
   * @default false
   */
  closeOnSelect: PropTypes.bool,
  /**
   * The default value.
   * Used when the component is not controlled.
   */
  defaultValue: PropTypes.object,
  /**
   * If `true`, the component is disabled.
   * When disabled, the value cannot be changed and no interaction is possible.
   * @default false
   */
  disabled: PropTypes.bool,
  /**
   * If `true`, disable values after the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disableFuture: PropTypes.bool,
  /**
   * Do not ignore date part when validating min/max time.
   * @default false
   */
  disableIgnoringDatePartForTimeValidation: PropTypes.bool,
  /**
   * If `true`, the button to open the Picker will not be rendered (it will only render the field).
   * @deprecated Use the [field component](https://mui.com/x/react-date-pickers/fields/) instead.
   * @default false
   */
  disableOpenPicker: PropTypes.bool,
  /**
   * If `true`, disable values before the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disablePast: PropTypes.bool,
  /**
   * @default true
   */
  enableAccessibleFieldDOMStructure: PropTypes.any,
  /**
   * Format of the date when rendered in the input(s).
   * Defaults to localized format based on the used `views`.
   */
  format: PropTypes.string,
  /**
   * Density of the format when rendered in the input.
   * Setting `formatDensity` to `"spacious"` will add a space before and after each `/`, `-` and `.` character.
   * @default "dense"
   */
  formatDensity: PropTypes.oneOf(['dense', 'spacious']),
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: refType$1,
  /**
   * The label content.
   */
  label: PropTypes.node,
  /**
   * Locale for components texts.
   * Allows overriding texts coming from `LocalizationProvider` and `theme`.
   */
  localeText: PropTypes.object,
  /**
   * Maximal selectable time.
   * The date part of the object will be ignored unless `props.disableIgnoringDatePartForTimeValidation === true`.
   */
  maxTime: PropTypes.object,
  /**
   * Minimal selectable time.
   * The date part of the object will be ignored unless `props.disableIgnoringDatePartForTimeValidation === true`.
   */
  minTime: PropTypes.object,
  /**
   * Step over minutes.
   * @default 1
   */
  minutesStep: PropTypes.number,
  /**
   * Name attribute used by the `input` element in the Field.
   */
  name: PropTypes.string,
  /**
   * Callback fired when the value is accepted.
   * @template TValue The value type. It will be the same type as `value` or `null`. It can be in `[start, end]` format in case of range value.
   * @template TError The validation error type. It will be either `string` or a `null`. It can be in `[start, end]` format in case of range value.
   * @param {TValue} value The value that was just accepted.
   * @param {FieldChangeHandlerContext<TError>} context The context containing the validation result of the current value.
   */
  onAccept: PropTypes.func,
  /**
   * Callback fired when the value changes.
   * @template TValue The value type. It will be the same type as `value` or `null`. It can be in `[start, end]` format in case of range value.
   * @template TError The validation error type. It will be either `string` or a `null`. It can be in `[start, end]` format in case of range value.
   * @param {TValue} value The new value.
   * @param {FieldChangeHandlerContext<TError>} context The context containing the validation result of the current value.
   */
  onChange: PropTypes.func,
  /**
   * Callback fired when the popup requests to be closed.
   * Use in controlled mode (see `open`).
   */
  onClose: PropTypes.func,
  /**
   * Callback fired when the error associated with the current value changes.
   * When a validation error is detected, the `error` parameter contains a non-null value.
   * This can be used to render an appropriate form error.
   * @template TError The validation error type. It will be either `string` or a `null`. It can be in `[start, end]` format in case of range value.
   * @template TValue The value type. It will be the same type as `value` or `null`. It can be in `[start, end]` format in case of range value.
   * @param {TError} error The reason why the current value is not valid.
   * @param {TValue} value The value associated with the error.
   */
  onError: PropTypes.func,
  /**
   * Callback fired when the popup requests to be opened.
   * Use in controlled mode (see `open`).
   */
  onOpen: PropTypes.func,
  /**
   * Callback fired when the selected sections change.
   * @param {FieldSelectedSections} newValue The new selected sections.
   */
  onSelectedSectionsChange: PropTypes.func,
  /**
   * Callback fired on view change.
   * @template TView Type of the view. It will vary based on the Picker type and the `views` it uses.
   * @param {TView} view The new view.
   */
  onViewChange: PropTypes.func,
  /**
   * Control the popup or dialog open state.
   * @default false
   */
  open: PropTypes.bool,
  /**
   * The default visible view.
   * Used when the component view is not controlled.
   * Must be a valid option from `views` list.
   */
  openTo: PropTypes.oneOf(['hours', 'meridiem', 'minutes', 'seconds']),
  /**
   * Force rendering in particular orientation.
   */
  orientation: PropTypes.oneOf(['landscape', 'portrait']),
  /**
   * If `true`, the component is read-only.
   * When read-only, the value cannot be changed but the user can interact with the interface.
   * @default false
   */
  readOnly: PropTypes.bool,
  /**
   * If `true`, disable heavy animations.
   * @default `@media(prefers-reduced-motion: reduce)` || `navigator.userAgent` matches Android <10 or iOS <13
   */
  reduceAnimations: PropTypes.bool,
  /**
   * The date used to generate the new value when both `value` and `defaultValue` are empty.
   * @default The closest valid date-time using the validation props, except callbacks like `shouldDisable<...>`.
   */
  referenceDate: PropTypes.object,
  /**
   * The currently selected sections.
   * This prop accepts four formats:
   * 1. If a number is provided, the section at this index will be selected.
   * 2. If a string of type `FieldSectionType` is provided, the first section with that name will be selected.
   * 3. If `"all"` is provided, all the sections will be selected.
   * 4. If `null` is provided, no section will be selected.
   * If not provided, the selected sections will be handled internally.
   */
  selectedSections: PropTypes.oneOfType([PropTypes.oneOf(['all', 'day', 'empty', 'hours', 'meridiem', 'minutes', 'month', 'seconds', 'weekDay', 'year']), PropTypes.number]),
  /**
   * Disable specific time.
   * @param {PickerValidDate} value The value to check.
   * @param {TimeView} view The clock type of the timeValue.
   * @returns {boolean} If `true` the time will be disabled.
   */
  shouldDisableTime: PropTypes.func,
  /**
   * If `true`, disabled digital clock items will not be rendered.
   * @default false
   */
  skipDisabled: PropTypes.bool,
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: PropTypes.object,
  /**
   * Overridable component slots.
   * @default {}
   */
  slots: PropTypes.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])), PropTypes.func, PropTypes.object]),
  /**
   * Amount of time options below or at which the single column time renderer is used.
   * @default 24
   */
  thresholdToRenderTimeInASingleColumn: PropTypes.number,
  /**
   * The time steps between two time unit options.
   * For example, if `timeSteps.minutes = 8`, then the available minute options will be `[0, 8, 16, 24, 32, 40, 48, 56]`.
   * When single column time renderer is used, only `timeSteps.minutes` will be used.
   * @default{ hours: 1, minutes: 5, seconds: 5 }
   */
  timeSteps: PropTypes.shape({
    hours: PropTypes.number,
    minutes: PropTypes.number,
    seconds: PropTypes.number
  }),
  /**
   * Choose which timezone to use for the value.
   * Example: "default", "system", "UTC", "America/New_York".
   * If you pass values from other timezones to some props, they will be converted to this timezone before being used.
   * @see See the {@link https://mui.com/x/react-date-pickers/timezone/ timezones documentation} for more details.
   * @default The timezone of the `value` or `defaultValue` prop is defined, 'default' otherwise.
   */
  timezone: PropTypes.string,
  /**
   * The selected value.
   * Used when the component is controlled.
   */
  value: PropTypes.object,
  /**
   * The visible view.
   * Used when the component view is controlled.
   * Must be a valid option from `views` list.
   */
  view: PropTypes.oneOf(['hours', 'meridiem', 'minutes', 'seconds']),
  /**
   * Define custom view renderers for each section.
   * If `null`, the section will only have field editing.
   * If `undefined`, internally defined view will be used.
   */
  viewRenderers: PropTypes.shape({
    hours: PropTypes.func,
    meridiem: PropTypes.func,
    minutes: PropTypes.func,
    seconds: PropTypes.func
  }),
  /**
   * Available views.
   */
  views: PropTypes.arrayOf(PropTypes.oneOf(['hours', 'minutes', 'seconds']).isRequired)
};

/**
 * Demos:
 *
 * - [TimePicker](https://mui.com/x/react-date-pickers/time-picker/)
 * - [Validation](https://mui.com/x/react-date-pickers/validation/)
 *
 * API:
 *
 * - [MobileTimePicker API](https://mui.com/x/api/date-pickers/mobile-time-picker/)
 */
const MobileTimePicker = /*#__PURE__*/React__namespace.forwardRef(function MobileTimePicker(inProps, ref) {
  const adapter = usePickerAdapter();

  // Props with the default values common to all time pickers
  const defaultizedProps = useTimePickerDefaultizedProps(inProps, 'MuiMobileTimePicker');
  const viewRenderers = _extends({
    hours: renderTimeViewClock,
    minutes: renderTimeViewClock,
    seconds: renderTimeViewClock
  }, defaultizedProps.viewRenderers);
  const ampmInClock = defaultizedProps.ampmInClock ?? false;

  // Props with the default values specific to the mobile variant
  const props = _extends({}, defaultizedProps, {
    ampmInClock,
    viewRenderers,
    format: resolveTimeFormat(adapter, defaultizedProps),
    slots: _extends({
      field: TimeField
    }, defaultizedProps.slots),
    slotProps: _extends({}, defaultizedProps.slotProps, {
      field: ownerState => _extends({}, resolveComponentProps(defaultizedProps.slotProps?.field, ownerState), extractValidationProps(defaultizedProps)),
      toolbar: _extends({
        hidden: false,
        ampmInClock
      }, defaultizedProps.slotProps?.toolbar)
    })
  });
  const {
    renderPicker
  } = useMobilePicker({
    ref,
    props,
    valueManager: singleItemValueManager,
    valueType: 'time',
    validator: validateTime,
    steps: null
  });
  return renderPicker();
});
if (process.env.NODE_ENV !== "production") MobileTimePicker.displayName = "MobileTimePicker";
MobileTimePicker.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * 12h/24h view for hour selection clock.
   * @default adapter.is12HourCycleInCurrentLocale()
   */
  ampm: PropTypes.bool,
  /**
   * Display ampm controls under the clock (instead of in the toolbar).
   * @default true on desktop, false on mobile
   */
  ampmInClock: PropTypes.bool,
  /**
   * If `true`, the main element is focused during the first mount.
   * This main element is:
   * - the element chosen by the visible view if any (i.e: the selected day on the `day` view).
   * - the `input` element if there is a field rendered.
   */
  autoFocus: PropTypes.bool,
  className: PropTypes.string,
  /**
   * If `true`, the Picker will close after submitting the full date.
   * @default false
   */
  closeOnSelect: PropTypes.bool,
  /**
   * The default value.
   * Used when the component is not controlled.
   */
  defaultValue: PropTypes.object,
  /**
   * If `true`, the component is disabled.
   * When disabled, the value cannot be changed and no interaction is possible.
   * @default false
   */
  disabled: PropTypes.bool,
  /**
   * If `true`, disable values after the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disableFuture: PropTypes.bool,
  /**
   * Do not ignore date part when validating min/max time.
   * @default false
   */
  disableIgnoringDatePartForTimeValidation: PropTypes.bool,
  /**
   * If `true`, the button to open the Picker will not be rendered (it will only render the field).
   * @deprecated Use the [field component](https://mui.com/x/react-date-pickers/fields/) instead.
   * @default false
   */
  disableOpenPicker: PropTypes.bool,
  /**
   * If `true`, disable values before the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disablePast: PropTypes.bool,
  /**
   * @default true
   */
  enableAccessibleFieldDOMStructure: PropTypes.any,
  /**
   * Format of the date when rendered in the input(s).
   * Defaults to localized format based on the used `views`.
   */
  format: PropTypes.string,
  /**
   * Density of the format when rendered in the input.
   * Setting `formatDensity` to `"spacious"` will add a space before and after each `/`, `-` and `.` character.
   * @default "dense"
   */
  formatDensity: PropTypes.oneOf(['dense', 'spacious']),
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: refType$1,
  /**
   * The label content.
   */
  label: PropTypes.node,
  /**
   * Locale for components texts.
   * Allows overriding texts coming from `LocalizationProvider` and `theme`.
   */
  localeText: PropTypes.object,
  /**
   * Maximal selectable time.
   * The date part of the object will be ignored unless `props.disableIgnoringDatePartForTimeValidation === true`.
   */
  maxTime: PropTypes.object,
  /**
   * Minimal selectable time.
   * The date part of the object will be ignored unless `props.disableIgnoringDatePartForTimeValidation === true`.
   */
  minTime: PropTypes.object,
  /**
   * Step over minutes.
   * @default 1
   */
  minutesStep: PropTypes.number,
  /**
   * Name attribute used by the `input` element in the Field.
   */
  name: PropTypes.string,
  /**
   * Callback fired when the value is accepted.
   * @template TValue The value type. It will be the same type as `value` or `null`. It can be in `[start, end]` format in case of range value.
   * @template TError The validation error type. It will be either `string` or a `null`. It can be in `[start, end]` format in case of range value.
   * @param {TValue} value The value that was just accepted.
   * @param {FieldChangeHandlerContext<TError>} context The context containing the validation result of the current value.
   */
  onAccept: PropTypes.func,
  /**
   * Callback fired when the value changes.
   * @template TValue The value type. It will be the same type as `value` or `null`. It can be in `[start, end]` format in case of range value.
   * @template TError The validation error type. It will be either `string` or a `null`. It can be in `[start, end]` format in case of range value.
   * @param {TValue} value The new value.
   * @param {FieldChangeHandlerContext<TError>} context The context containing the validation result of the current value.
   */
  onChange: PropTypes.func,
  /**
   * Callback fired when the popup requests to be closed.
   * Use in controlled mode (see `open`).
   */
  onClose: PropTypes.func,
  /**
   * Callback fired when the error associated with the current value changes.
   * When a validation error is detected, the `error` parameter contains a non-null value.
   * This can be used to render an appropriate form error.
   * @template TError The validation error type. It will be either `string` or a `null`. It can be in `[start, end]` format in case of range value.
   * @template TValue The value type. It will be the same type as `value` or `null`. It can be in `[start, end]` format in case of range value.
   * @param {TError} error The reason why the current value is not valid.
   * @param {TValue} value The value associated with the error.
   */
  onError: PropTypes.func,
  /**
   * Callback fired when the popup requests to be opened.
   * Use in controlled mode (see `open`).
   */
  onOpen: PropTypes.func,
  /**
   * Callback fired when the selected sections change.
   * @param {FieldSelectedSections} newValue The new selected sections.
   */
  onSelectedSectionsChange: PropTypes.func,
  /**
   * Callback fired on view change.
   * @template TView Type of the view. It will vary based on the Picker type and the `views` it uses.
   * @param {TView} view The new view.
   */
  onViewChange: PropTypes.func,
  /**
   * Control the popup or dialog open state.
   * @default false
   */
  open: PropTypes.bool,
  /**
   * The default visible view.
   * Used when the component view is not controlled.
   * Must be a valid option from `views` list.
   */
  openTo: PropTypes.oneOf(['hours', 'minutes', 'seconds']),
  /**
   * Force rendering in particular orientation.
   */
  orientation: PropTypes.oneOf(['landscape', 'portrait']),
  /**
   * If `true`, the component is read-only.
   * When read-only, the value cannot be changed but the user can interact with the interface.
   * @default false
   */
  readOnly: PropTypes.bool,
  /**
   * If `true`, disable heavy animations.
   * @default `@media(prefers-reduced-motion: reduce)` || `navigator.userAgent` matches Android <10 or iOS <13
   */
  reduceAnimations: PropTypes.bool,
  /**
   * The date used to generate the new value when both `value` and `defaultValue` are empty.
   * @default The closest valid date-time using the validation props, except callbacks like `shouldDisable<...>`.
   */
  referenceDate: PropTypes.object,
  /**
   * The currently selected sections.
   * This prop accepts four formats:
   * 1. If a number is provided, the section at this index will be selected.
   * 2. If a string of type `FieldSectionType` is provided, the first section with that name will be selected.
   * 3. If `"all"` is provided, all the sections will be selected.
   * 4. If `null` is provided, no section will be selected.
   * If not provided, the selected sections will be handled internally.
   */
  selectedSections: PropTypes.oneOfType([PropTypes.oneOf(['all', 'day', 'empty', 'hours', 'meridiem', 'minutes', 'month', 'seconds', 'weekDay', 'year']), PropTypes.number]),
  /**
   * Disable specific time.
   * @param {PickerValidDate} value The value to check.
   * @param {TimeView} view The clock type of the timeValue.
   * @returns {boolean} If `true` the time will be disabled.
   */
  shouldDisableTime: PropTypes.func,
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: PropTypes.object,
  /**
   * Overridable component slots.
   * @default {}
   */
  slots: PropTypes.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])), PropTypes.func, PropTypes.object]),
  /**
   * Choose which timezone to use for the value.
   * Example: "default", "system", "UTC", "America/New_York".
   * If you pass values from other timezones to some props, they will be converted to this timezone before being used.
   * @see See the {@link https://mui.com/x/react-date-pickers/timezone/ timezones documentation} for more details.
   * @default The timezone of the `value` or `defaultValue` prop is defined, 'default' otherwise.
   */
  timezone: PropTypes.string,
  /**
   * The selected value.
   * Used when the component is controlled.
   */
  value: PropTypes.object,
  /**
   * The visible view.
   * Used when the component view is controlled.
   * Must be a valid option from `views` list.
   */
  view: PropTypes.oneOf(['hours', 'minutes', 'seconds']),
  /**
   * Define custom view renderers for each section.
   * If `null`, the section will only have field editing.
   * If `undefined`, internally defined view will be used.
   */
  viewRenderers: PropTypes.shape({
    hours: PropTypes.func,
    minutes: PropTypes.func,
    seconds: PropTypes.func
  }),
  /**
   * Available views.
   */
  views: PropTypes.arrayOf(PropTypes.oneOf(['hours', 'minutes', 'seconds']).isRequired)
};

const _excluded$3 = ["desktopModeMediaQuery"];
/**
 * Demos:
 *
 * - [TimePicker](https://mui.com/x/react-date-pickers/time-picker/)
 * - [Validation](https://mui.com/x/react-date-pickers/validation/)
 *
 * API:
 *
 * - [TimePicker API](https://mui.com/x/api/date-pickers/time-picker/)
 */
const TimePicker = /*#__PURE__*/React__namespace.forwardRef(function TimePicker(inProps, ref) {
  const props = styles.useThemeProps({
    props: inProps,
    name: 'MuiTimePicker'
  });
  const {
      desktopModeMediaQuery = DEFAULT_DESKTOP_MODE_MEDIA_QUERY
    } = props,
    other = _objectWithoutPropertiesLoose(props, _excluded$3);

  // defaults to `true` in environments where `window.matchMedia` would not be available (i.e. test/jsdom)
  const isDesktop = useMediaQuery(desktopModeMediaQuery, {
    defaultMatches: true
  });
  if (isDesktop) {
    return /*#__PURE__*/jsxRuntime.jsx(DesktopTimePicker, _extends({
      ref: ref
    }, other));
  }
  return /*#__PURE__*/jsxRuntime.jsx(MobileTimePicker, _extends({
    ref: ref
  }, other));
});
if (process.env.NODE_ENV !== "production") TimePicker.displayName = "TimePicker";
process.env.NODE_ENV !== "production" ? TimePicker.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * 12h/24h view for hour selection clock.
   * @default adapter.is12HourCycleInCurrentLocale()
   */
  ampm: PropTypes.bool,
  /**
   * Display ampm controls under the clock (instead of in the toolbar).
   * @default true on desktop, false on mobile
   */
  ampmInClock: PropTypes.bool,
  /**
   * If `true`, the main element is focused during the first mount.
   * This main element is:
   * - the element chosen by the visible view if any (i.e: the selected day on the `day` view).
   * - the `input` element if there is a field rendered.
   */
  autoFocus: PropTypes.bool,
  className: PropTypes.string,
  /**
   * If `true`, the Picker will close after submitting the full date.
   * @default false
   */
  closeOnSelect: PropTypes.bool,
  /**
   * The default value.
   * Used when the component is not controlled.
   */
  defaultValue: PropTypes.object,
  /**
   * CSS media query when `Mobile` mode will be changed to `Desktop`.
   * @default '@media (pointer: fine)'
   * @example '@media (min-width: 720px)' or theme.breakpoints.up("sm")
   */
  desktopModeMediaQuery: PropTypes.string,
  /**
   * If `true`, the component is disabled.
   * When disabled, the value cannot be changed and no interaction is possible.
   * @default false
   */
  disabled: PropTypes.bool,
  /**
   * If `true`, disable values after the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disableFuture: PropTypes.bool,
  /**
   * Do not ignore date part when validating min/max time.
   * @default false
   */
  disableIgnoringDatePartForTimeValidation: PropTypes.bool,
  /**
   * If `true`, the button to open the Picker will not be rendered (it will only render the field).
   * @deprecated Use the [field component](https://mui.com/x/react-date-pickers/fields/) instead.
   * @default false
   */
  disableOpenPicker: PropTypes.bool,
  /**
   * If `true`, disable values before the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disablePast: PropTypes.bool,
  /**
   * @default true
   */
  enableAccessibleFieldDOMStructure: PropTypes.any,
  /**
   * Format of the date when rendered in the input(s).
   * Defaults to localized format based on the used `views`.
   */
  format: PropTypes.string,
  /**
   * Density of the format when rendered in the input.
   * Setting `formatDensity` to `"spacious"` will add a space before and after each `/`, `-` and `.` character.
   * @default "dense"
   */
  formatDensity: PropTypes.oneOf(['dense', 'spacious']),
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: refType$1,
  /**
   * The label content.
   */
  label: PropTypes.node,
  /**
   * Locale for components texts.
   * Allows overriding texts coming from `LocalizationProvider` and `theme`.
   */
  localeText: PropTypes.object,
  /**
   * Maximal selectable time.
   * The date part of the object will be ignored unless `props.disableIgnoringDatePartForTimeValidation === true`.
   */
  maxTime: PropTypes.object,
  /**
   * Minimal selectable time.
   * The date part of the object will be ignored unless `props.disableIgnoringDatePartForTimeValidation === true`.
   */
  minTime: PropTypes.object,
  /**
   * Step over minutes.
   * @default 1
   */
  minutesStep: PropTypes.number,
  /**
   * Name attribute used by the `input` element in the Field.
   */
  name: PropTypes.string,
  /**
   * Callback fired when the value is accepted.
   * @template TValue The value type. It will be the same type as `value` or `null`. It can be in `[start, end]` format in case of range value.
   * @template TError The validation error type. It will be either `string` or a `null`. It can be in `[start, end]` format in case of range value.
   * @param {TValue} value The value that was just accepted.
   * @param {FieldChangeHandlerContext<TError>} context The context containing the validation result of the current value.
   */
  onAccept: PropTypes.func,
  /**
   * Callback fired when the value changes.
   * @template TValue The value type. It will be the same type as `value` or `null`. It can be in `[start, end]` format in case of range value.
   * @template TError The validation error type. It will be either `string` or a `null`. It can be in `[start, end]` format in case of range value.
   * @param {TValue} value The new value.
   * @param {FieldChangeHandlerContext<TError>} context The context containing the validation result of the current value.
   */
  onChange: PropTypes.func,
  /**
   * Callback fired when the popup requests to be closed.
   * Use in controlled mode (see `open`).
   */
  onClose: PropTypes.func,
  /**
   * Callback fired when the error associated with the current value changes.
   * When a validation error is detected, the `error` parameter contains a non-null value.
   * This can be used to render an appropriate form error.
   * @template TError The validation error type. It will be either `string` or a `null`. It can be in `[start, end]` format in case of range value.
   * @template TValue The value type. It will be the same type as `value` or `null`. It can be in `[start, end]` format in case of range value.
   * @param {TError} error The reason why the current value is not valid.
   * @param {TValue} value The value associated with the error.
   */
  onError: PropTypes.func,
  /**
   * Callback fired when the popup requests to be opened.
   * Use in controlled mode (see `open`).
   */
  onOpen: PropTypes.func,
  /**
   * Callback fired when the selected sections change.
   * @param {FieldSelectedSections} newValue The new selected sections.
   */
  onSelectedSectionsChange: PropTypes.func,
  /**
   * Callback fired on view change.
   * @template TView Type of the view. It will vary based on the Picker type and the `views` it uses.
   * @param {TView} view The new view.
   */
  onViewChange: PropTypes.func,
  /**
   * Control the popup or dialog open state.
   * @default false
   */
  open: PropTypes.bool,
  /**
   * The default visible view.
   * Used when the component view is not controlled.
   * Must be a valid option from `views` list.
   */
  openTo: PropTypes.oneOf(['hours', 'meridiem', 'minutes', 'seconds']),
  /**
   * Force rendering in particular orientation.
   */
  orientation: PropTypes.oneOf(['landscape', 'portrait']),
  /**
   * If `true`, the component is read-only.
   * When read-only, the value cannot be changed but the user can interact with the interface.
   * @default false
   */
  readOnly: PropTypes.bool,
  /**
   * If `true`, disable heavy animations.
   * @default `@media(prefers-reduced-motion: reduce)` || `navigator.userAgent` matches Android <10 or iOS <13
   */
  reduceAnimations: PropTypes.bool,
  /**
   * The date used to generate the new value when both `value` and `defaultValue` are empty.
   * @default The closest valid date-time using the validation props, except callbacks like `shouldDisable<...>`.
   */
  referenceDate: PropTypes.object,
  /**
   * The currently selected sections.
   * This prop accepts four formats:
   * 1. If a number is provided, the section at this index will be selected.
   * 2. If a string of type `FieldSectionType` is provided, the first section with that name will be selected.
   * 3. If `"all"` is provided, all the sections will be selected.
   * 4. If `null` is provided, no section will be selected.
   * If not provided, the selected sections will be handled internally.
   */
  selectedSections: PropTypes.oneOfType([PropTypes.oneOf(['all', 'day', 'empty', 'hours', 'meridiem', 'minutes', 'month', 'seconds', 'weekDay', 'year']), PropTypes.number]),
  /**
   * Disable specific time.
   * @param {PickerValidDate} value The value to check.
   * @param {TimeView} view The clock type of the timeValue.
   * @returns {boolean} If `true` the time will be disabled.
   */
  shouldDisableTime: PropTypes.func,
  /**
   * If `true`, disabled digital clock items will not be rendered.
   * @default false
   */
  skipDisabled: PropTypes.bool,
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: PropTypes.object,
  /**
   * Overridable component slots.
   * @default {}
   */
  slots: PropTypes.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])), PropTypes.func, PropTypes.object]),
  /**
   * Amount of time options below or at which the single column time renderer is used.
   * @default 24
   */
  thresholdToRenderTimeInASingleColumn: PropTypes.number,
  /**
   * The time steps between two time unit options.
   * For example, if `timeSteps.minutes = 8`, then the available minute options will be `[0, 8, 16, 24, 32, 40, 48, 56]`.
   * When single column time renderer is used, only `timeSteps.minutes` will be used.
   * @default{ hours: 1, minutes: 5, seconds: 5 }
   */
  timeSteps: PropTypes.shape({
    hours: PropTypes.number,
    minutes: PropTypes.number,
    seconds: PropTypes.number
  }),
  /**
   * Choose which timezone to use for the value.
   * Example: "default", "system", "UTC", "America/New_York".
   * If you pass values from other timezones to some props, they will be converted to this timezone before being used.
   * @see See the {@link https://mui.com/x/react-date-pickers/timezone/ timezones documentation} for more details.
   * @default The timezone of the `value` or `defaultValue` prop is defined, 'default' otherwise.
   */
  timezone: PropTypes.string,
  /**
   * The selected value.
   * Used when the component is controlled.
   */
  value: PropTypes.object,
  /**
   * The visible view.
   * Used when the component view is controlled.
   * Must be a valid option from `views` list.
   */
  view: PropTypes.oneOf(['hours', 'meridiem', 'minutes', 'seconds']),
  /**
   * Define custom view renderers for each section.
   * If `null`, the section will only have field editing.
   * If `undefined`, internally defined view will be used.
   */
  viewRenderers: PropTypes.shape({
    hours: PropTypes.func,
    meridiem: PropTypes.func,
    minutes: PropTypes.func,
    seconds: PropTypes.func
  }),
  /**
   * Available views.
   */
  views: PropTypes.arrayOf(PropTypes.oneOf(['hours', 'minutes', 'seconds']).isRequired)
} : void 0;

function getDateTimePickerTabsUtilityClass(slot) {
  return generateUtilityClass('MuiDateTimePickerTabs', slot);
}
generateUtilityClasses('MuiDateTimePickerTabs', ['root']);

const viewToTab = view => {
  if (isDatePickerView(view)) {
    return 'date';
  }
  return 'time';
};
const tabToView = tab => {
  if (tab === 'date') {
    return 'day';
  }
  return 'hours';
};
const useUtilityClasses$1 = classes => {
  const slots = {
    root: ['root']
  };
  return composeClasses(slots, getDateTimePickerTabsUtilityClass, classes);
};
const DateTimePickerTabsRoot = styles.styled(Tabs, {
  name: 'MuiDateTimePickerTabs',
  slot: 'Root'
})(({
  theme
}) => ({
  boxShadow: `0 -1px 0 0 inset ${(theme.vars || theme).palette.divider}`,
  '&:last-child': {
    boxShadow: `0 1px 0 0 inset ${(theme.vars || theme).palette.divider}`,
    [`& .${Tabs.tabsClasses.indicator}`]: {
      bottom: 'auto',
      top: 0
    }
  }
}));

/**
 * Demos:
 *
 * - [DateTimePicker](https://mui.com/x/react-date-pickers/date-time-picker/)
 * - [Custom slots and subcomponents](https://mui.com/x/react-date-pickers/custom-components/)
 *
 * API:
 *
 * - [DateTimePickerTabs API](https://mui.com/x/api/date-pickers/date-time-picker-tabs/)
 */
const DateTimePickerTabs = function DateTimePickerTabs(inProps) {
  const props = styles.useThemeProps({
    props: inProps,
    name: 'MuiDateTimePickerTabs'
  });
  const {
    dateIcon = /*#__PURE__*/jsxRuntime.jsx(DateRangeIcon, {}),
    timeIcon = /*#__PURE__*/jsxRuntime.jsx(TimeIcon, {}),
    hidden = typeof window === 'undefined' || window.innerHeight < 667,
    className,
    classes: classesProp,
    sx
  } = props;
  const translations = usePickerTranslations();
  const {
    ownerState
  } = usePickerPrivateContext();
  const {
    view,
    setView
  } = usePickerContext();
  const classes = useUtilityClasses$1(classesProp);
  const handleChange = (event, value) => {
    setView(tabToView(value));
  };
  if (hidden) {
    return null;
  }
  return /*#__PURE__*/jsxRuntime.jsxs(DateTimePickerTabsRoot, {
    ownerState: ownerState,
    variant: "fullWidth",
    value: viewToTab(view),
    onChange: handleChange,
    className: clsx(className, classes.root),
    sx: sx,
    children: [/*#__PURE__*/jsxRuntime.jsx(Tab, {
      value: "date",
      "aria-label": translations.dateTableLabel,
      icon: /*#__PURE__*/jsxRuntime.jsx(React__namespace.Fragment, {
        children: dateIcon
      })
    }), /*#__PURE__*/jsxRuntime.jsx(Tab, {
      value: "time",
      "aria-label": translations.timeTableLabel,
      icon: /*#__PURE__*/jsxRuntime.jsx(React__namespace.Fragment, {
        children: timeIcon
      })
    })]
  });
};
if (process.env.NODE_ENV !== "production") DateTimePickerTabs.displayName = "DateTimePickerTabs";
process.env.NODE_ENV !== "production" ? DateTimePickerTabs.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,
  className: PropTypes.string,
  /**
   * Date tab icon.
   * @default DateRange
   */
  dateIcon: PropTypes.node,
  /**
   * Toggles visibility of the tabs allowing view switching.
   * @default `window.innerHeight < 667` for `DesktopDateTimePicker` and `MobileDateTimePicker`, `displayStaticWrapperAs === 'desktop'` for `StaticDateTimePicker`
   */
  hidden: PropTypes.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])), PropTypes.func, PropTypes.object]),
  /**
   * Time tab icon.
   * @default Time
   */
  timeIcon: PropTypes.node
} : void 0;

function getDateTimePickerToolbarUtilityClass(slot) {
  return generateUtilityClass('MuiDateTimePickerToolbar', slot);
}
const dateTimePickerToolbarClasses = generateUtilityClasses('MuiDateTimePickerToolbar', ['root', 'dateContainer', 'timeContainer', 'timeDigitsContainer', 'separator', 'timeLabelReverse', 'ampmSelection', 'ampmLandscape', 'ampmLabel']);

const _excluded$2 = ["ampm", "ampmInClock", "toolbarFormat", "toolbarPlaceholder", "toolbarTitle", "className", "classes"];
const useUtilityClasses = (classes, ownerState) => {
  const {
    pickerOrientation,
    toolbarDirection
  } = ownerState;
  const slots = {
    root: ['root'],
    dateContainer: ['dateContainer'],
    timeContainer: ['timeContainer', toolbarDirection === 'rtl' && 'timeLabelReverse'],
    timeDigitsContainer: ['timeDigitsContainer', toolbarDirection === 'rtl' && 'timeLabelReverse'],
    separator: ['separator'],
    ampmSelection: ['ampmSelection', pickerOrientation === 'landscape' && 'ampmLandscape'],
    ampmLabel: ['ampmLabel']
  };
  return composeClasses(slots, getDateTimePickerToolbarUtilityClass, classes);
};
const DateTimePickerToolbarRoot = styles.styled(PickersToolbar, {
  name: 'MuiDateTimePickerToolbar',
  slot: 'Root',
  shouldForwardProp: prop => shouldForwardProp(prop) && prop !== 'toolbarVariant'
})(({
  theme
}) => ({
  paddingLeft: 16,
  paddingRight: 16,
  justifyContent: 'space-around',
  position: 'relative',
  variants: [{
    props: {
      toolbarVariant: 'desktop'
    },
    style: {
      borderBottom: `1px solid ${(theme.vars || theme).palette.divider}`,
      [`& .${pickersToolbarClasses.content} .${pickersToolbarTextClasses.root}[data-selected]`]: {
        color: (theme.vars || theme).palette.primary.main,
        fontWeight: theme.typography.fontWeightBold
      }
    }
  }, {
    props: {
      toolbarVariant: 'desktop',
      pickerOrientation: 'landscape'
    },
    style: {
      borderRight: `1px solid ${(theme.vars || theme).palette.divider}`
    }
  }, {
    props: {
      toolbarVariant: 'desktop',
      pickerOrientation: 'portrait'
    },
    style: {
      paddingLeft: 24,
      paddingRight: 0
    }
  }]
}));
const DateTimePickerToolbarDateContainer = styles.styled('div', {
  name: 'MuiDateTimePickerToolbar',
  slot: 'DateContainer'
})({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start'
});
const DateTimePickerToolbarTimeContainer = styles.styled('div', {
  name: 'MuiDateTimePickerToolbar',
  slot: 'TimeContainer',
  shouldForwardProp: prop => shouldForwardProp(prop) && prop !== 'toolbarVariant'
})({
  display: 'flex',
  flexDirection: 'row',
  variants: [{
    props: {
      toolbarDirection: 'rtl'
    },
    style: {
      flexDirection: 'row-reverse'
    }
  }, {
    props: {
      toolbarVariant: 'desktop',
      pickerOrientation: 'portrait'
    },
    style: {
      gap: 9,
      marginRight: 4,
      alignSelf: 'flex-end'
    }
  }, {
    props: ({
      pickerOrientation,
      toolbarVariant
    }) => pickerOrientation === 'landscape' && toolbarVariant !== 'desktop',
    style: {
      flexDirection: 'column'
    }
  }, {
    props: ({
      pickerOrientation,
      toolbarVariant,
      toolbarDirection
    }) => pickerOrientation === 'landscape' && toolbarVariant !== 'desktop' && toolbarDirection === 'rtl',
    style: {
      flexDirection: 'column-reverse'
    }
  }]
});
const DateTimePickerToolbarTimeDigitsContainer = styles.styled('div', {
  name: 'MuiDateTimePickerToolbar',
  slot: 'TimeDigitsContainer',
  shouldForwardProp: prop => shouldForwardProp(prop) && prop !== 'toolbarVariant'
})({
  display: 'flex',
  variants: [{
    props: {
      toolbarDirection: 'rtl'
    },
    style: {
      flexDirection: 'row-reverse'
    }
  }, {
    props: {
      toolbarVariant: 'desktop'
    },
    style: {
      gap: 1.5
    }
  }]
});
const DateTimePickerToolbarSeparator = styles.styled(PickersToolbarText, {
  name: 'MuiDateTimePickerToolbar',
  slot: 'Separator',
  shouldForwardProp: prop => shouldForwardProp(prop) && prop !== 'toolbarVariant'
})({
  margin: '0 4px 0 2px',
  cursor: 'default',
  variants: [{
    props: {
      toolbarVariant: 'desktop'
    },
    style: {
      margin: 0
    }
  }]
});

// Taken from TimePickerToolbar
const DateTimePickerToolbarAmPmSelection = styles.styled('div', {
  name: 'MuiDateTimePickerToolbar',
  slot: 'AmPmSelection',
  overridesResolver: (props, styles) => [{
    [`.${dateTimePickerToolbarClasses.ampmLabel}`]: styles.ampmLabel
  }, {
    [`&.${dateTimePickerToolbarClasses.ampmLandscape}`]: styles.ampmLandscape
  }, styles.ampmSelection]
})({
  display: 'flex',
  flexDirection: 'column',
  marginRight: 'auto',
  marginLeft: 12,
  [`& .${dateTimePickerToolbarClasses.ampmLabel}`]: {
    fontSize: 17
  },
  variants: [{
    props: {
      pickerOrientation: 'landscape'
    },
    style: {
      margin: '4px 0 auto',
      flexDirection: 'row',
      justifyContent: 'space-around',
      width: '100%'
    }
  }]
});

/**
 * If `forceDesktopVariant` is set to `true`, the toolbar will always be rendered in the desktop mode.
 * If `onViewChange` is defined, the toolbar will call it instead of calling the default handler from `usePickerContext`.
 * This is used by the Date Time Range Picker Toolbar.
 */
const DateTimePickerToolbarOverrideContext = /*#__PURE__*/React__namespace.createContext(null);

/**
 * Demos:
 *
 * - [DateTimePicker](https://mui.com/x/react-date-pickers/date-time-picker/)
 * - [Custom components](https://mui.com/x/react-date-pickers/custom-components/)
 *
 * API:
 *
 * - [DateTimePickerToolbar API](https://mui.com/x/api/date-pickers/date-time-picker-toolbar/)
 */
if (process.env.NODE_ENV !== "production") DateTimePickerToolbarOverrideContext.displayName = "DateTimePickerToolbarOverrideContext";
function DateTimePickerToolbar(inProps) {
  const props = styles.useThemeProps({
    props: inProps,
    name: 'MuiDateTimePickerToolbar'
  });
  const {
      ampm,
      ampmInClock,
      toolbarFormat,
      toolbarPlaceholder = '––',
      toolbarTitle: inToolbarTitle,
      className,
      classes: classesProp
    } = props,
    other = _objectWithoutPropertiesLoose(props, _excluded$2);
  const {
    value: valueContext,
    setValue: setValueContext,
    disabled,
    readOnly,
    variant,
    orientation,
    view: viewContext,
    setView: setViewContext,
    views
  } = usePickerContext();
  const translations = usePickerTranslations();
  const ownerState = useToolbarOwnerState();
  const classes = useUtilityClasses(classesProp, ownerState);
  const adapter = usePickerAdapter();
  const overrides = React__namespace.useContext(DateTimePickerToolbarOverrideContext);
  const value = overrides ? overrides.value : valueContext;
  const setValue = overrides ? overrides.setValue : setValueContext;
  const view = overrides ? overrides.view : viewContext;
  const setView = overrides ? overrides.setView : setViewContext;
  const {
    meridiemMode,
    handleMeridiemChange
  } = useMeridiemMode(value, ampm, newValue => setValue(newValue, {
    changeImportance: 'set'
  }));
  const toolbarVariant = overrides?.forceDesktopVariant ? 'desktop' : variant;
  const isDesktop = toolbarVariant === 'desktop';
  const showAmPmControl = Boolean(ampm && !ampmInClock);
  const toolbarTitle = inToolbarTitle ?? translations.dateTimePickerToolbarTitle;
  const dateText = React__namespace.useMemo(() => {
    if (!adapter.isValid(value)) {
      return toolbarPlaceholder;
    }
    if (toolbarFormat) {
      return adapter.formatByString(value, toolbarFormat);
    }
    return adapter.format(value, 'shortDate');
  }, [value, toolbarFormat, toolbarPlaceholder, adapter]);
  const formatSection = (format, fallback) => {
    if (!adapter.isValid(value)) {
      return fallback;
    }
    return adapter.format(value, format);
  };
  return /*#__PURE__*/jsxRuntime.jsxs(DateTimePickerToolbarRoot, _extends({
    className: clsx(classes.root, className),
    toolbarTitle: toolbarTitle,
    toolbarVariant: toolbarVariant
  }, other, {
    ownerState: ownerState,
    children: [/*#__PURE__*/jsxRuntime.jsxs(DateTimePickerToolbarDateContainer, {
      className: classes.dateContainer,
      ownerState: ownerState,
      children: [views.includes('year') && /*#__PURE__*/jsxRuntime.jsx(PickersToolbarButton, {
        tabIndex: -1,
        variant: "subtitle1",
        onClick: () => setView('year'),
        selected: view === 'year',
        value: formatSection('year', '–')
      }), views.includes('day') && /*#__PURE__*/jsxRuntime.jsx(PickersToolbarButton, {
        tabIndex: -1,
        variant: isDesktop ? 'h5' : 'h4',
        onClick: () => setView('day'),
        selected: view === 'day',
        value: dateText
      })]
    }), /*#__PURE__*/jsxRuntime.jsxs(DateTimePickerToolbarTimeContainer, {
      className: classes.timeContainer,
      ownerState: ownerState,
      toolbarVariant: toolbarVariant,
      children: [/*#__PURE__*/jsxRuntime.jsxs(DateTimePickerToolbarTimeDigitsContainer, {
        className: classes.timeDigitsContainer,
        ownerState: ownerState,
        toolbarVariant: toolbarVariant,
        children: [views.includes('hours') && /*#__PURE__*/jsxRuntime.jsxs(React__namespace.Fragment, {
          children: [/*#__PURE__*/jsxRuntime.jsx(PickersToolbarButton, {
            variant: isDesktop ? 'h5' : 'h3',
            width: isDesktop && orientation === 'portrait' ? MULTI_SECTION_CLOCK_SECTION_WIDTH : undefined,
            onClick: () => setView('hours'),
            selected: view === 'hours',
            value: formatSection(ampm ? 'hours12h' : 'hours24h', '--')
          }), /*#__PURE__*/jsxRuntime.jsx(DateTimePickerToolbarSeparator, {
            variant: isDesktop ? 'h5' : 'h3',
            value: ":",
            className: classes.separator,
            ownerState: ownerState,
            toolbarVariant: toolbarVariant
          }), /*#__PURE__*/jsxRuntime.jsx(PickersToolbarButton, {
            variant: isDesktop ? 'h5' : 'h3',
            width: isDesktop && orientation === 'portrait' ? MULTI_SECTION_CLOCK_SECTION_WIDTH : undefined,
            onClick: () => setView('minutes'),
            selected: view === 'minutes' || !views.includes('minutes') && view === 'hours',
            value: formatSection('minutes', '--'),
            disabled: !views.includes('minutes')
          })]
        }), views.includes('seconds') && /*#__PURE__*/jsxRuntime.jsxs(React__namespace.Fragment, {
          children: [/*#__PURE__*/jsxRuntime.jsx(DateTimePickerToolbarSeparator, {
            variant: isDesktop ? 'h5' : 'h3',
            value: ":",
            className: classes.separator,
            ownerState: ownerState,
            toolbarVariant: toolbarVariant
          }), /*#__PURE__*/jsxRuntime.jsx(PickersToolbarButton, {
            variant: isDesktop ? 'h5' : 'h3',
            width: isDesktop && orientation === 'portrait' ? MULTI_SECTION_CLOCK_SECTION_WIDTH : undefined,
            onClick: () => setView('seconds'),
            selected: view === 'seconds',
            value: formatSection('seconds', '--')
          })]
        })]
      }), showAmPmControl && !isDesktop && /*#__PURE__*/jsxRuntime.jsxs(DateTimePickerToolbarAmPmSelection, {
        className: classes.ampmSelection,
        ownerState: ownerState,
        children: [/*#__PURE__*/jsxRuntime.jsx(PickersToolbarButton, {
          variant: "subtitle2",
          selected: meridiemMode === 'am',
          typographyClassName: classes.ampmLabel,
          value: formatMeridiem(adapter, 'am'),
          onClick: readOnly ? undefined : () => handleMeridiemChange('am'),
          disabled: disabled
        }), /*#__PURE__*/jsxRuntime.jsx(PickersToolbarButton, {
          variant: "subtitle2",
          selected: meridiemMode === 'pm',
          typographyClassName: classes.ampmLabel,
          value: formatMeridiem(adapter, 'pm'),
          onClick: readOnly ? undefined : () => handleMeridiemChange('pm'),
          disabled: disabled
        })]
      }), ampm && isDesktop && /*#__PURE__*/jsxRuntime.jsx(PickersToolbarButton, {
        variant: "h5",
        onClick: () => setView('meridiem'),
        selected: view === 'meridiem',
        value: value && meridiemMode ? formatMeridiem(adapter, meridiemMode) : '--',
        width: MULTI_SECTION_CLOCK_SECTION_WIDTH
      })]
    })]
  }));
}
process.env.NODE_ENV !== "production" ? DateTimePickerToolbar.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  ampm: PropTypes.bool,
  ampmInClock: PropTypes.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,
  className: PropTypes.string,
  /**
   * If `true`, show the toolbar even in desktop mode.
   * @default `true` for Desktop, `false` for Mobile.
   */
  hidden: PropTypes.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])), PropTypes.func, PropTypes.object]),
  titleId: PropTypes.string,
  /**
   * Toolbar date format.
   */
  toolbarFormat: PropTypes.string,
  /**
   * Toolbar value placeholder—it is displayed when the value is empty.
   * @default "––"
   */
  toolbarPlaceholder: PropTypes.node,
  /**
   * If provided, it will be used instead of `dateTimePickerToolbarTitle` from localization.
   */
  toolbarTitle: PropTypes.node
} : void 0;

function useDateTimePickerDefaultizedProps(props, name) {
  const adapter = usePickerAdapter();
  const themeProps = styles.useThemeProps({
    props,
    name
  });
  const validationProps = useApplyDefaultValuesToDateTimeValidationProps(themeProps);
  const ampm = themeProps.ampm ?? adapter.is12HourCycleInCurrentLocale();
  const localeText = React__namespace.useMemo(() => {
    if (themeProps.localeText?.toolbarTitle == null) {
      return themeProps.localeText;
    }
    return _extends({}, themeProps.localeText, {
      dateTimePickerToolbarTitle: themeProps.localeText.toolbarTitle
    });
  }, [themeProps.localeText]);
  const {
    openTo,
    views: defaultViews
  } = applyDefaultViewProps({
    views: themeProps.views,
    openTo: themeProps.openTo,
    defaultViews: ['year', 'day', 'hours', 'minutes'],
    defaultOpenTo: 'day'
  });
  const {
    shouldRenderTimeInASingleColumn,
    thresholdToRenderTimeInASingleColumn,
    views,
    timeSteps
  } = resolveTimeViewsResponse({
    thresholdToRenderTimeInASingleColumn: themeProps.thresholdToRenderTimeInASingleColumn,
    ampm,
    timeSteps: themeProps.timeSteps,
    views: defaultViews
  });
  return _extends({}, themeProps, validationProps, {
    timeSteps,
    openTo,
    shouldRenderTimeInASingleColumn,
    thresholdToRenderTimeInASingleColumn,
    views,
    ampm,
    localeText,
    orientation: themeProps.orientation ?? 'portrait',
    slots: _extends({
      toolbar: DateTimePickerToolbar,
      tabs: DateTimePickerTabs
    }, themeProps.slots),
    slotProps: _extends({}, themeProps.slotProps, {
      toolbar: _extends({
        ampm
      }, themeProps.slotProps?.toolbar)
    })
  });
}

/**
 * @ignore - internal component.
 */
const DesktopDateTimePickerLayout = /*#__PURE__*/React__namespace.forwardRef(function DesktopDateTimePickerLayout(props, ref) {
  const {
    toolbar,
    tabs,
    content,
    actionBar,
    shortcuts,
    ownerState
  } = usePickerLayout$1(props);
  const {
    orientation
  } = usePickerContext();
  const {
    sx,
    className,
    classes
  } = props;
  const isActionBarVisible = actionBar && (actionBar.props.actions?.length ?? 0) > 0;
  return /*#__PURE__*/jsxRuntime.jsxs(PickersLayoutRoot, {
    ref: ref,
    className: clsx(pickersLayoutClasses.root, classes?.root, className),
    sx: [{
      [`& .${pickersLayoutClasses.tabs}`]: {
        gridRow: 4,
        gridColumn: '1 / 4'
      },
      [`& .${pickersLayoutClasses.actionBar}`]: {
        gridRow: 5
      }
    }, ...(Array.isArray(sx) ? sx : [sx])],
    ownerState: ownerState,
    children: [orientation === 'landscape' ? shortcuts : toolbar, orientation === 'landscape' ? toolbar : shortcuts, /*#__PURE__*/jsxRuntime.jsxs(PickersLayoutContentWrapper, {
      className: clsx(pickersLayoutClasses.contentWrapper, classes?.contentWrapper),
      ownerState: ownerState,
      sx: {
        display: 'grid'
      },
      children: [content, tabs, isActionBarVisible && /*#__PURE__*/jsxRuntime.jsx(Divider, {
        sx: {
          gridRow: 3,
          gridColumn: '1 / 4'
        }
      })]
    }), actionBar]
  });
});
if (process.env.NODE_ENV !== "production") DesktopDateTimePickerLayout.displayName = "DesktopDateTimePickerLayout";
process.env.NODE_ENV !== "production" ? DesktopDateTimePickerLayout.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  children: PropTypes.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,
  className: PropTypes.string,
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: PropTypes.object,
  /**
   * Overridable component slots.
   * @default {}
   */
  slots: PropTypes.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])), PropTypes.func, PropTypes.object])
} : void 0;

const _excluded$1 = ["openTo", "focusedView", "timeViewsCount"];
const rendererInterceptor = function RendererInterceptor(props) {
  const {
    viewRenderers,
    popperView,
    rendererProps
  } = props;
  const {
      openTo,
      focusedView,
      timeViewsCount
    } = rendererProps,
    otherProps = _objectWithoutPropertiesLoose(rendererProps, _excluded$1);
  const finalProps = _extends({}, otherProps, {
    // we control the focused view manually
    autoFocus: false,
    focusedView: null,
    sx: [{
      [`&.${multiSectionDigitalClockClasses.root}`]: {
        borderBottom: 0
      },
      [`&.${multiSectionDigitalClockClasses.root}, .${multiSectionDigitalClockSectionClasses.root}, &.${digitalClockClasses.root}`]: {
        maxHeight: VIEW_HEIGHT
      }
    }]
  });
  const isTimeViewActive = isInternalTimeView(popperView);
  const dateView = isTimeViewActive ? 'day' : popperView;
  const timeView = isTimeViewActive ? popperView : 'hours';
  return /*#__PURE__*/jsxRuntime.jsxs(React__namespace.Fragment, {
    children: [viewRenderers[dateView]?.(_extends({}, rendererProps, {
      view: !isTimeViewActive ? popperView : 'day',
      focusedView: focusedView && isDatePickerView(focusedView) ? focusedView : null,
      views: rendererProps.views.filter(isDatePickerView),
      sx: [{
        gridColumn: 1
      }, ...finalProps.sx]
    })), timeViewsCount > 0 && /*#__PURE__*/jsxRuntime.jsxs(React__namespace.Fragment, {
      children: [/*#__PURE__*/jsxRuntime.jsx(Divider, {
        orientation: "vertical",
        sx: {
          gridColumn: 2
        }
      }), viewRenderers[timeView]?.(_extends({}, finalProps, {
        view: isTimeViewActive ? popperView : 'hours',
        focusedView: focusedView && isInternalTimeView(focusedView) ? focusedView : null,
        openTo: isInternalTimeView(openTo) ? openTo : 'hours',
        views: rendererProps.views.filter(isInternalTimeView),
        sx: [{
          gridColumn: 3
        }, ...finalProps.sx]
      }))]
    })]
  });
};
if (process.env.NODE_ENV !== "production") rendererInterceptor.displayName = "rendererInterceptor";
/**
 * Demos:
 *
 * - [DateTimePicker](https://mui.com/x/react-date-pickers/date-time-picker/)
 * - [Validation](https://mui.com/x/react-date-pickers/validation/)
 *
 * API:
 *
 * - [DesktopDateTimePicker API](https://mui.com/x/api/date-pickers/desktop-date-time-picker/)
 */
const DesktopDateTimePicker = /*#__PURE__*/React__namespace.forwardRef(function DesktopDateTimePicker(inProps, ref) {
  const adapter = usePickerAdapter();

  // Props with the default values common to all date time pickers
  const defaultizedProps = useDateTimePickerDefaultizedProps(inProps, 'MuiDesktopDateTimePicker');
  const renderTimeView = defaultizedProps.shouldRenderTimeInASingleColumn ? renderDigitalClockTimeView : renderMultiSectionDigitalClockTimeView;
  const viewRenderers = _extends({
    day: renderDateViewCalendar,
    month: renderDateViewCalendar,
    year: renderDateViewCalendar,
    hours: renderTimeView,
    minutes: renderTimeView,
    seconds: renderTimeView,
    meridiem: renderTimeView
  }, defaultizedProps.viewRenderers);
  const ampmInClock = defaultizedProps.ampmInClock ?? true;
  // Need to avoid adding the `meridiem` view when unexpected renderer is specified
  const shouldHoursRendererContainMeridiemView = viewRenderers.hours?.name === renderMultiSectionDigitalClockTimeView.name;
  const views = !shouldHoursRendererContainMeridiemView ? defaultizedProps.views.filter(view => view !== 'meridiem') : defaultizedProps.views;

  // Props with the default values specific to the desktop variant
  const props = _extends({}, defaultizedProps, {
    viewRenderers,
    format: resolveDateTimeFormat(adapter, defaultizedProps),
    views,
    yearsPerRow: defaultizedProps.yearsPerRow ?? 4,
    ampmInClock,
    slots: _extends({
      field: DateTimeField,
      layout: DesktopDateTimePickerLayout
    }, defaultizedProps.slots),
    slotProps: _extends({}, defaultizedProps.slotProps, {
      field: ownerState => _extends({}, resolveComponentProps(defaultizedProps.slotProps?.field, ownerState), extractValidationProps(defaultizedProps)),
      toolbar: _extends({
        hidden: true,
        ampmInClock
      }, defaultizedProps.slotProps?.toolbar),
      tabs: _extends({
        hidden: true
      }, defaultizedProps.slotProps?.tabs)
    })
  });
  const {
    renderPicker
  } = useDesktopPicker({
    ref,
    props,
    valueManager: singleItemValueManager,
    valueType: 'date-time',
    validator: validateDateTime,
    rendererInterceptor,
    steps: null
  });
  return renderPicker();
});
if (process.env.NODE_ENV !== "production") DesktopDateTimePicker.displayName = "DesktopDateTimePicker";
DesktopDateTimePicker.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * 12h/24h view for hour selection clock.
   * @default adapter.is12HourCycleInCurrentLocale()
   */
  ampm: PropTypes.bool,
  /**
   * Display ampm controls under the clock (instead of in the toolbar).
   * @default true on desktop, false on mobile
   */
  ampmInClock: PropTypes.bool,
  /**
   * If `true`, the main element is focused during the first mount.
   * This main element is:
   * - the element chosen by the visible view if any (i.e: the selected day on the `day` view).
   * - the `input` element if there is a field rendered.
   */
  autoFocus: PropTypes.bool,
  className: PropTypes.string,
  /**
   * If `true`, the Picker will close after submitting the full date.
   * @default false
   */
  closeOnSelect: PropTypes.bool,
  /**
   * Formats the day of week displayed in the calendar header.
   * @param {PickerValidDate} date The date of the day of week provided by the adapter.
   * @returns {string} The name to display.
   * @default (date: PickerValidDate) => adapter.format(date, 'weekdayShort').charAt(0).toUpperCase()
   */
  dayOfWeekFormatter: PropTypes.func,
  /**
   * The default value.
   * Used when the component is not controlled.
   */
  defaultValue: PropTypes.object,
  /**
   * If `true`, the component is disabled.
   * When disabled, the value cannot be changed and no interaction is possible.
   * @default false
   */
  disabled: PropTypes.bool,
  /**
   * If `true`, disable values after the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disableFuture: PropTypes.bool,
  /**
   * If `true`, today's date is rendering without highlighting with circle.
   * @default false
   */
  disableHighlightToday: PropTypes.bool,
  /**
   * Do not ignore date part when validating min/max time.
   * @default false
   */
  disableIgnoringDatePartForTimeValidation: PropTypes.bool,
  /**
   * If `true`, the button to open the Picker will not be rendered (it will only render the field).
   * @deprecated Use the [field component](https://mui.com/x/react-date-pickers/fields/) instead.
   * @default false
   */
  disableOpenPicker: PropTypes.bool,
  /**
   * If `true`, disable values before the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disablePast: PropTypes.bool,
  /**
   * If `true`, the week number will be display in the calendar.
   */
  displayWeekNumber: PropTypes.bool,
  /**
   * @default true
   */
  enableAccessibleFieldDOMStructure: PropTypes.any,
  /**
   * The day view will show as many weeks as needed after the end of the current month to match this value.
   * Put it to 6 to have a fixed number of weeks in Gregorian calendars
   */
  fixedWeekNumber: PropTypes.number,
  /**
   * Format of the date when rendered in the input(s).
   * Defaults to localized format based on the used `views`.
   */
  format: PropTypes.string,
  /**
   * Density of the format when rendered in the input.
   * Setting `formatDensity` to `"spacious"` will add a space before and after each `/`, `-` and `.` character.
   * @default "dense"
   */
  formatDensity: PropTypes.oneOf(['dense', 'spacious']),
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: refType$1,
  /**
   * The label content.
   */
  label: PropTypes.node,
  /**
   * If `true`, calls `renderLoading` instead of rendering the day calendar.
   * Can be used to preload information and show it in calendar.
   * @default false
   */
  loading: PropTypes.bool,
  /**
   * Locale for components texts.
   * Allows overriding texts coming from `LocalizationProvider` and `theme`.
   */
  localeText: PropTypes.object,
  /**
   * Maximal selectable date.
   * @default 2099-12-31
   */
  maxDate: PropTypes.object,
  /**
   * Maximal selectable moment of time with binding to date, to set max time in each day use `maxTime`.
   */
  maxDateTime: PropTypes.object,
  /**
   * Maximal selectable time.
   * The date part of the object will be ignored unless `props.disableIgnoringDatePartForTimeValidation === true`.
   */
  maxTime: PropTypes.object,
  /**
   * Minimal selectable date.
   * @default 1900-01-01
   */
  minDate: PropTypes.object,
  /**
   * Minimal selectable moment of time with binding to date, to set min time in each day use `minTime`.
   */
  minDateTime: PropTypes.object,
  /**
   * Minimal selectable time.
   * The date part of the object will be ignored unless `props.disableIgnoringDatePartForTimeValidation === true`.
   */
  minTime: PropTypes.object,
  /**
   * Step over minutes.
   * @default 1
   */
  minutesStep: PropTypes.number,
  /**
   * Months rendered per row.
   * @default 3
   */
  monthsPerRow: PropTypes.oneOf([3, 4]),
  /**
   * Name attribute used by the `input` element in the Field.
   */
  name: PropTypes.string,
  /**
   * Callback fired when the value is accepted.
   * @template TValue The value type. It will be the same type as `value` or `null`. It can be in `[start, end]` format in case of range value.
   * @template TError The validation error type. It will be either `string` or a `null`. It can be in `[start, end]` format in case of range value.
   * @param {TValue} value The value that was just accepted.
   * @param {FieldChangeHandlerContext<TError>} context The context containing the validation result of the current value.
   */
  onAccept: PropTypes.func,
  /**
   * Callback fired when the value changes.
   * @template TValue The value type. It will be the same type as `value` or `null`. It can be in `[start, end]` format in case of range value.
   * @template TError The validation error type. It will be either `string` or a `null`. It can be in `[start, end]` format in case of range value.
   * @param {TValue} value The new value.
   * @param {FieldChangeHandlerContext<TError>} context The context containing the validation result of the current value.
   */
  onChange: PropTypes.func,
  /**
   * Callback fired when the popup requests to be closed.
   * Use in controlled mode (see `open`).
   */
  onClose: PropTypes.func,
  /**
   * Callback fired when the error associated with the current value changes.
   * When a validation error is detected, the `error` parameter contains a non-null value.
   * This can be used to render an appropriate form error.
   * @template TError The validation error type. It will be either `string` or a `null`. It can be in `[start, end]` format in case of range value.
   * @template TValue The value type. It will be the same type as `value` or `null`. It can be in `[start, end]` format in case of range value.
   * @param {TError} error The reason why the current value is not valid.
   * @param {TValue} value The value associated with the error.
   */
  onError: PropTypes.func,
  /**
   * Callback fired on month change.
   * @param {PickerValidDate} month The new month.
   */
  onMonthChange: PropTypes.func,
  /**
   * Callback fired when the popup requests to be opened.
   * Use in controlled mode (see `open`).
   */
  onOpen: PropTypes.func,
  /**
   * Callback fired when the selected sections change.
   * @param {FieldSelectedSections} newValue The new selected sections.
   */
  onSelectedSectionsChange: PropTypes.func,
  /**
   * Callback fired on view change.
   * @template TView Type of the view. It will vary based on the Picker type and the `views` it uses.
   * @param {TView} view The new view.
   */
  onViewChange: PropTypes.func,
  /**
   * Callback fired on year change.
   * @param {PickerValidDate} year The new year.
   */
  onYearChange: PropTypes.func,
  /**
   * Control the popup or dialog open state.
   * @default false
   */
  open: PropTypes.bool,
  /**
   * The default visible view.
   * Used when the component view is not controlled.
   * Must be a valid option from `views` list.
   */
  openTo: PropTypes.oneOf(['day', 'hours', 'meridiem', 'minutes', 'month', 'seconds', 'year']),
  /**
   * Force rendering in particular orientation.
   */
  orientation: PropTypes.oneOf(['landscape', 'portrait']),
  /**
   * If `true`, the component is read-only.
   * When read-only, the value cannot be changed but the user can interact with the interface.
   * @default false
   */
  readOnly: PropTypes.bool,
  /**
   * If `true`, disable heavy animations.
   * @default `@media(prefers-reduced-motion: reduce)` || `navigator.userAgent` matches Android <10 or iOS <13
   */
  reduceAnimations: PropTypes.bool,
  /**
   * The date used to generate the new value when both `value` and `defaultValue` are empty.
   * @default The closest valid date-time using the validation props, except callbacks like `shouldDisable<...>`.
   */
  referenceDate: PropTypes.object,
  /**
   * Component displaying when passed `loading` true.
   * @returns {React.ReactNode} The node to render when loading.
   * @default () => <span>...</span>
   */
  renderLoading: PropTypes.func,
  /**
   * The currently selected sections.
   * This prop accepts four formats:
   * 1. If a number is provided, the section at this index will be selected.
   * 2. If a string of type `FieldSectionType` is provided, the first section with that name will be selected.
   * 3. If `"all"` is provided, all the sections will be selected.
   * 4. If `null` is provided, no section will be selected.
   * If not provided, the selected sections will be handled internally.
   */
  selectedSections: PropTypes.oneOfType([PropTypes.oneOf(['all', 'day', 'empty', 'hours', 'meridiem', 'minutes', 'month', 'seconds', 'weekDay', 'year']), PropTypes.number]),
  /**
   * Disable specific date.
   *
   * Warning: This function can be called multiple times (for example when rendering date calendar, checking if focus can be moved to a certain date, etc.). Expensive computations can impact performance.
   *
   * @param {PickerValidDate} day The date to test.
   * @returns {boolean} If `true` the date will be disabled.
   */
  shouldDisableDate: PropTypes.func,
  /**
   * Disable specific month.
   * @param {PickerValidDate} month The month to test.
   * @returns {boolean} If `true`, the month will be disabled.
   */
  shouldDisableMonth: PropTypes.func,
  /**
   * Disable specific time.
   * @param {PickerValidDate} value The value to check.
   * @param {TimeView} view The clock type of the timeValue.
   * @returns {boolean} If `true` the time will be disabled.
   */
  shouldDisableTime: PropTypes.func,
  /**
   * Disable specific year.
   * @param {PickerValidDate} year The year to test.
   * @returns {boolean} If `true`, the year will be disabled.
   */
  shouldDisableYear: PropTypes.func,
  /**
   * If `true`, days outside the current month are rendered:
   *
   * - if `fixedWeekNumber` is defined, renders days to have the weeks requested.
   *
   * - if `fixedWeekNumber` is not defined, renders day to fill the first and last week of the current month.
   *
   * - ignored if `calendars` equals more than `1` on range pickers.
   * @default false
   */
  showDaysOutsideCurrentMonth: PropTypes.bool,
  /**
   * If `true`, disabled digital clock items will not be rendered.
   * @default false
   */
  skipDisabled: PropTypes.bool,
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: PropTypes.object,
  /**
   * Overridable component slots.
   * @default {}
   */
  slots: PropTypes.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])), PropTypes.func, PropTypes.object]),
  /**
   * Amount of time options below or at which the single column time renderer is used.
   * @default 24
   */
  thresholdToRenderTimeInASingleColumn: PropTypes.number,
  /**
   * The time steps between two time unit options.
   * For example, if `timeSteps.minutes = 8`, then the available minute options will be `[0, 8, 16, 24, 32, 40, 48, 56]`.
   * When single column time renderer is used, only `timeSteps.minutes` will be used.
   * @default{ hours: 1, minutes: 5, seconds: 5 }
   */
  timeSteps: PropTypes.shape({
    hours: PropTypes.number,
    minutes: PropTypes.number,
    seconds: PropTypes.number
  }),
  /**
   * Choose which timezone to use for the value.
   * Example: "default", "system", "UTC", "America/New_York".
   * If you pass values from other timezones to some props, they will be converted to this timezone before being used.
   * @see See the {@link https://mui.com/x/react-date-pickers/timezone/ timezones documentation} for more details.
   * @default The timezone of the `value` or `defaultValue` prop is defined, 'default' otherwise.
   */
  timezone: PropTypes.string,
  /**
   * The selected value.
   * Used when the component is controlled.
   */
  value: PropTypes.object,
  /**
   * The visible view.
   * Used when the component view is controlled.
   * Must be a valid option from `views` list.
   */
  view: PropTypes.oneOf(['day', 'hours', 'meridiem', 'minutes', 'month', 'seconds', 'year']),
  /**
   * Define custom view renderers for each section.
   * If `null`, the section will only have field editing.
   * If `undefined`, internally defined view will be used.
   */
  viewRenderers: PropTypes.shape({
    day: PropTypes.func,
    hours: PropTypes.func,
    meridiem: PropTypes.func,
    minutes: PropTypes.func,
    month: PropTypes.func,
    seconds: PropTypes.func,
    year: PropTypes.func
  }),
  /**
   * Available views.
   */
  views: PropTypes.arrayOf(PropTypes.oneOf(['day', 'hours', 'minutes', 'month', 'seconds', 'year']).isRequired),
  /**
   * Years are displayed in ascending (chronological) order by default.
   * If `desc`, years are displayed in descending order.
   * @default 'asc'
   */
  yearsOrder: PropTypes.oneOf(['asc', 'desc']),
  /**
   * Years rendered per row.
   * @default 4
   */
  yearsPerRow: PropTypes.oneOf([3, 4])
};

const STEPS = [{
  views: DATE_VIEWS
}, {
  views: EXPORTED_TIME_VIEWS
}];
/**
 * Demos:
 *
 * - [DateTimePicker](https://mui.com/x/react-date-pickers/date-time-picker/)
 * - [Validation](https://mui.com/x/react-date-pickers/validation/)
 *
 * API:
 *
 * - [MobileDateTimePicker API](https://mui.com/x/api/date-pickers/mobile-date-time-picker/)
 */
const MobileDateTimePicker = /*#__PURE__*/React__namespace.forwardRef(function MobileDateTimePicker(inProps, ref) {
  const adapter = usePickerAdapter();

  // Props with the default values common to all date time pickers
  const defaultizedProps = useDateTimePickerDefaultizedProps(inProps, 'MuiMobileDateTimePicker');
  const renderTimeView = defaultizedProps.shouldRenderTimeInASingleColumn ? renderDigitalClockTimeView : renderMultiSectionDigitalClockTimeView;
  const viewRenderers = _extends({
    day: renderDateViewCalendar,
    month: renderDateViewCalendar,
    year: renderDateViewCalendar,
    hours: renderTimeView,
    minutes: renderTimeView,
    seconds: renderTimeView,
    meridiem: renderTimeView
  }, defaultizedProps.viewRenderers);
  const ampmInClock = defaultizedProps.ampmInClock ?? false;
  // Need to avoid adding the `meridiem` view when unexpected renderer is specified
  const shouldHoursRendererContainMeridiemView = viewRenderers.hours?.name === renderMultiSectionDigitalClockTimeView.name;
  const views = !shouldHoursRendererContainMeridiemView ? defaultizedProps.views.filter(view => view !== 'meridiem') : defaultizedProps.views;

  // Props with the default values specific to the mobile variant
  const props = _extends({}, defaultizedProps, {
    viewRenderers,
    format: resolveDateTimeFormat(adapter, defaultizedProps),
    views,
    ampmInClock,
    slots: _extends({
      field: DateTimeField
    }, defaultizedProps.slots),
    slotProps: _extends({}, defaultizedProps.slotProps, {
      field: ownerState => _extends({}, resolveComponentProps(defaultizedProps.slotProps?.field, ownerState), extractValidationProps(defaultizedProps)),
      toolbar: _extends({
        hidden: false,
        ampmInClock
      }, defaultizedProps.slotProps?.toolbar),
      tabs: _extends({
        hidden: false
      }, defaultizedProps.slotProps?.tabs),
      layout: _extends({}, defaultizedProps.slotProps?.layout, {
        sx: mergeSx([{
          [`& .${multiSectionDigitalClockClasses.root}`]: {
            width: DIALOG_WIDTH
          },
          [`& .${multiSectionDigitalClockSectionClasses.root}`]: {
            flex: 1,
            // account for the border on `MultiSectionDigitalClock`
            maxHeight: VIEW_HEIGHT - 1,
            [`.${multiSectionDigitalClockSectionClasses.item}`]: {
              width: 'auto'
            }
          },
          [`& .${digitalClockClasses.root}`]: {
            width: DIALOG_WIDTH,
            maxHeight: VIEW_HEIGHT,
            flex: 1,
            [`.${digitalClockClasses.item}`]: {
              justifyContent: 'center'
            }
          }
        }], defaultizedProps.slotProps?.layout?.sx)
      })
    })
  });
  const {
    renderPicker
  } = useMobilePicker({
    ref,
    props,
    valueManager: singleItemValueManager,
    valueType: 'date-time',
    validator: validateDateTime,
    steps: STEPS
  });
  return renderPicker();
});
if (process.env.NODE_ENV !== "production") MobileDateTimePicker.displayName = "MobileDateTimePicker";
MobileDateTimePicker.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * 12h/24h view for hour selection clock.
   * @default adapter.is12HourCycleInCurrentLocale()
   */
  ampm: PropTypes.bool,
  /**
   * Display ampm controls under the clock (instead of in the toolbar).
   * @default true on desktop, false on mobile
   */
  ampmInClock: PropTypes.bool,
  /**
   * If `true`, the main element is focused during the first mount.
   * This main element is:
   * - the element chosen by the visible view if any (i.e: the selected day on the `day` view).
   * - the `input` element if there is a field rendered.
   */
  autoFocus: PropTypes.bool,
  className: PropTypes.string,
  /**
   * If `true`, the Picker will close after submitting the full date.
   * @default false
   */
  closeOnSelect: PropTypes.bool,
  /**
   * Formats the day of week displayed in the calendar header.
   * @param {PickerValidDate} date The date of the day of week provided by the adapter.
   * @returns {string} The name to display.
   * @default (date: PickerValidDate) => adapter.format(date, 'weekdayShort').charAt(0).toUpperCase()
   */
  dayOfWeekFormatter: PropTypes.func,
  /**
   * The default value.
   * Used when the component is not controlled.
   */
  defaultValue: PropTypes.object,
  /**
   * If `true`, the component is disabled.
   * When disabled, the value cannot be changed and no interaction is possible.
   * @default false
   */
  disabled: PropTypes.bool,
  /**
   * If `true`, disable values after the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disableFuture: PropTypes.bool,
  /**
   * If `true`, today's date is rendering without highlighting with circle.
   * @default false
   */
  disableHighlightToday: PropTypes.bool,
  /**
   * Do not ignore date part when validating min/max time.
   * @default false
   */
  disableIgnoringDatePartForTimeValidation: PropTypes.bool,
  /**
   * If `true`, the button to open the Picker will not be rendered (it will only render the field).
   * @deprecated Use the [field component](https://mui.com/x/react-date-pickers/fields/) instead.
   * @default false
   */
  disableOpenPicker: PropTypes.bool,
  /**
   * If `true`, disable values before the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disablePast: PropTypes.bool,
  /**
   * If `true`, the week number will be display in the calendar.
   */
  displayWeekNumber: PropTypes.bool,
  /**
   * @default true
   */
  enableAccessibleFieldDOMStructure: PropTypes.any,
  /**
   * The day view will show as many weeks as needed after the end of the current month to match this value.
   * Put it to 6 to have a fixed number of weeks in Gregorian calendars
   */
  fixedWeekNumber: PropTypes.number,
  /**
   * Format of the date when rendered in the input(s).
   * Defaults to localized format based on the used `views`.
   */
  format: PropTypes.string,
  /**
   * Density of the format when rendered in the input.
   * Setting `formatDensity` to `"spacious"` will add a space before and after each `/`, `-` and `.` character.
   * @default "dense"
   */
  formatDensity: PropTypes.oneOf(['dense', 'spacious']),
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: refType$1,
  /**
   * The label content.
   */
  label: PropTypes.node,
  /**
   * If `true`, calls `renderLoading` instead of rendering the day calendar.
   * Can be used to preload information and show it in calendar.
   * @default false
   */
  loading: PropTypes.bool,
  /**
   * Locale for components texts.
   * Allows overriding texts coming from `LocalizationProvider` and `theme`.
   */
  localeText: PropTypes.object,
  /**
   * Maximal selectable date.
   * @default 2099-12-31
   */
  maxDate: PropTypes.object,
  /**
   * Maximal selectable moment of time with binding to date, to set max time in each day use `maxTime`.
   */
  maxDateTime: PropTypes.object,
  /**
   * Maximal selectable time.
   * The date part of the object will be ignored unless `props.disableIgnoringDatePartForTimeValidation === true`.
   */
  maxTime: PropTypes.object,
  /**
   * Minimal selectable date.
   * @default 1900-01-01
   */
  minDate: PropTypes.object,
  /**
   * Minimal selectable moment of time with binding to date, to set min time in each day use `minTime`.
   */
  minDateTime: PropTypes.object,
  /**
   * Minimal selectable time.
   * The date part of the object will be ignored unless `props.disableIgnoringDatePartForTimeValidation === true`.
   */
  minTime: PropTypes.object,
  /**
   * Step over minutes.
   * @default 1
   */
  minutesStep: PropTypes.number,
  /**
   * Months rendered per row.
   * @default 3
   */
  monthsPerRow: PropTypes.oneOf([3, 4]),
  /**
   * Name attribute used by the `input` element in the Field.
   */
  name: PropTypes.string,
  /**
   * Callback fired when the value is accepted.
   * @template TValue The value type. It will be the same type as `value` or `null`. It can be in `[start, end]` format in case of range value.
   * @template TError The validation error type. It will be either `string` or a `null`. It can be in `[start, end]` format in case of range value.
   * @param {TValue} value The value that was just accepted.
   * @param {FieldChangeHandlerContext<TError>} context The context containing the validation result of the current value.
   */
  onAccept: PropTypes.func,
  /**
   * Callback fired when the value changes.
   * @template TValue The value type. It will be the same type as `value` or `null`. It can be in `[start, end]` format in case of range value.
   * @template TError The validation error type. It will be either `string` or a `null`. It can be in `[start, end]` format in case of range value.
   * @param {TValue} value The new value.
   * @param {FieldChangeHandlerContext<TError>} context The context containing the validation result of the current value.
   */
  onChange: PropTypes.func,
  /**
   * Callback fired when the popup requests to be closed.
   * Use in controlled mode (see `open`).
   */
  onClose: PropTypes.func,
  /**
   * Callback fired when the error associated with the current value changes.
   * When a validation error is detected, the `error` parameter contains a non-null value.
   * This can be used to render an appropriate form error.
   * @template TError The validation error type. It will be either `string` or a `null`. It can be in `[start, end]` format in case of range value.
   * @template TValue The value type. It will be the same type as `value` or `null`. It can be in `[start, end]` format in case of range value.
   * @param {TError} error The reason why the current value is not valid.
   * @param {TValue} value The value associated with the error.
   */
  onError: PropTypes.func,
  /**
   * Callback fired on month change.
   * @param {PickerValidDate} month The new month.
   */
  onMonthChange: PropTypes.func,
  /**
   * Callback fired when the popup requests to be opened.
   * Use in controlled mode (see `open`).
   */
  onOpen: PropTypes.func,
  /**
   * Callback fired when the selected sections change.
   * @param {FieldSelectedSections} newValue The new selected sections.
   */
  onSelectedSectionsChange: PropTypes.func,
  /**
   * Callback fired on view change.
   * @template TView Type of the view. It will vary based on the Picker type and the `views` it uses.
   * @param {TView} view The new view.
   */
  onViewChange: PropTypes.func,
  /**
   * Callback fired on year change.
   * @param {PickerValidDate} year The new year.
   */
  onYearChange: PropTypes.func,
  /**
   * Control the popup or dialog open state.
   * @default false
   */
  open: PropTypes.bool,
  /**
   * The default visible view.
   * Used when the component view is not controlled.
   * Must be a valid option from `views` list.
   */
  openTo: PropTypes.oneOf(['day', 'hours', 'meridiem', 'minutes', 'month', 'seconds', 'year']),
  /**
   * Force rendering in particular orientation.
   */
  orientation: PropTypes.oneOf(['landscape', 'portrait']),
  /**
   * If `true`, the component is read-only.
   * When read-only, the value cannot be changed but the user can interact with the interface.
   * @default false
   */
  readOnly: PropTypes.bool,
  /**
   * If `true`, disable heavy animations.
   * @default `@media(prefers-reduced-motion: reduce)` || `navigator.userAgent` matches Android <10 or iOS <13
   */
  reduceAnimations: PropTypes.bool,
  /**
   * The date used to generate the new value when both `value` and `defaultValue` are empty.
   * @default The closest valid date-time using the validation props, except callbacks like `shouldDisable<...>`.
   */
  referenceDate: PropTypes.object,
  /**
   * Component displaying when passed `loading` true.
   * @returns {React.ReactNode} The node to render when loading.
   * @default () => <span>...</span>
   */
  renderLoading: PropTypes.func,
  /**
   * The currently selected sections.
   * This prop accepts four formats:
   * 1. If a number is provided, the section at this index will be selected.
   * 2. If a string of type `FieldSectionType` is provided, the first section with that name will be selected.
   * 3. If `"all"` is provided, all the sections will be selected.
   * 4. If `null` is provided, no section will be selected.
   * If not provided, the selected sections will be handled internally.
   */
  selectedSections: PropTypes.oneOfType([PropTypes.oneOf(['all', 'day', 'empty', 'hours', 'meridiem', 'minutes', 'month', 'seconds', 'weekDay', 'year']), PropTypes.number]),
  /**
   * Disable specific date.
   *
   * Warning: This function can be called multiple times (for example when rendering date calendar, checking if focus can be moved to a certain date, etc.). Expensive computations can impact performance.
   *
   * @param {PickerValidDate} day The date to test.
   * @returns {boolean} If `true` the date will be disabled.
   */
  shouldDisableDate: PropTypes.func,
  /**
   * Disable specific month.
   * @param {PickerValidDate} month The month to test.
   * @returns {boolean} If `true`, the month will be disabled.
   */
  shouldDisableMonth: PropTypes.func,
  /**
   * Disable specific time.
   * @param {PickerValidDate} value The value to check.
   * @param {TimeView} view The clock type of the timeValue.
   * @returns {boolean} If `true` the time will be disabled.
   */
  shouldDisableTime: PropTypes.func,
  /**
   * Disable specific year.
   * @param {PickerValidDate} year The year to test.
   * @returns {boolean} If `true`, the year will be disabled.
   */
  shouldDisableYear: PropTypes.func,
  /**
   * If `true`, days outside the current month are rendered:
   *
   * - if `fixedWeekNumber` is defined, renders days to have the weeks requested.
   *
   * - if `fixedWeekNumber` is not defined, renders day to fill the first and last week of the current month.
   *
   * - ignored if `calendars` equals more than `1` on range pickers.
   * @default false
   */
  showDaysOutsideCurrentMonth: PropTypes.bool,
  /**
   * If `true`, disabled digital clock items will not be rendered.
   * @default false
   */
  skipDisabled: PropTypes.bool,
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: PropTypes.object,
  /**
   * Overridable component slots.
   * @default {}
   */
  slots: PropTypes.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])), PropTypes.func, PropTypes.object]),
  /**
   * Amount of time options below or at which the single column time renderer is used.
   * @default 24
   */
  thresholdToRenderTimeInASingleColumn: PropTypes.number,
  /**
   * The time steps between two time unit options.
   * For example, if `timeSteps.minutes = 8`, then the available minute options will be `[0, 8, 16, 24, 32, 40, 48, 56]`.
   * When single column time renderer is used, only `timeSteps.minutes` will be used.
   * @default{ hours: 1, minutes: 5, seconds: 5 }
   */
  timeSteps: PropTypes.shape({
    hours: PropTypes.number,
    minutes: PropTypes.number,
    seconds: PropTypes.number
  }),
  /**
   * Choose which timezone to use for the value.
   * Example: "default", "system", "UTC", "America/New_York".
   * If you pass values from other timezones to some props, they will be converted to this timezone before being used.
   * @see See the {@link https://mui.com/x/react-date-pickers/timezone/ timezones documentation} for more details.
   * @default The timezone of the `value` or `defaultValue` prop is defined, 'default' otherwise.
   */
  timezone: PropTypes.string,
  /**
   * The selected value.
   * Used when the component is controlled.
   */
  value: PropTypes.object,
  /**
   * The visible view.
   * Used when the component view is controlled.
   * Must be a valid option from `views` list.
   */
  view: PropTypes.oneOf(['day', 'hours', 'meridiem', 'minutes', 'month', 'seconds', 'year']),
  /**
   * Define custom view renderers for each section.
   * If `null`, the section will only have field editing.
   * If `undefined`, internally defined view will be used.
   */
  viewRenderers: PropTypes.shape({
    day: PropTypes.func,
    hours: PropTypes.func,
    meridiem: PropTypes.func,
    minutes: PropTypes.func,
    month: PropTypes.func,
    seconds: PropTypes.func,
    year: PropTypes.func
  }),
  /**
   * Available views.
   */
  views: PropTypes.arrayOf(PropTypes.oneOf(['day', 'hours', 'minutes', 'month', 'seconds', 'year']).isRequired),
  /**
   * Years are displayed in ascending (chronological) order by default.
   * If `desc`, years are displayed in descending order.
   * @default 'asc'
   */
  yearsOrder: PropTypes.oneOf(['asc', 'desc']),
  /**
   * Years rendered per row.
   * @default 3
   */
  yearsPerRow: PropTypes.oneOf([3, 4])
};

const _excluded = ["desktopModeMediaQuery"];
/**
 * Demos:
 *
 * - [DateTimePicker](https://mui.com/x/react-date-pickers/date-time-picker/)
 * - [Validation](https://mui.com/x/react-date-pickers/validation/)
 *
 * API:
 *
 * - [DateTimePicker API](https://mui.com/x/api/date-pickers/date-time-picker/)
 */
const DateTimePicker = /*#__PURE__*/React__namespace.forwardRef(function DateTimePicker(inProps, ref) {
  const props = styles.useThemeProps({
    props: inProps,
    name: 'MuiDateTimePicker'
  });
  const {
      desktopModeMediaQuery = DEFAULT_DESKTOP_MODE_MEDIA_QUERY
    } = props,
    other = _objectWithoutPropertiesLoose(props, _excluded);

  // defaults to `true` in environments where `window.matchMedia` would not be available (i.e. test/jsdom)
  const isDesktop = useMediaQuery(desktopModeMediaQuery, {
    defaultMatches: true
  });
  if (isDesktop) {
    return /*#__PURE__*/jsxRuntime.jsx(DesktopDateTimePicker, _extends({
      ref: ref
    }, other));
  }
  return /*#__PURE__*/jsxRuntime.jsx(MobileDateTimePicker, _extends({
    ref: ref
  }, other));
});
if (process.env.NODE_ENV !== "production") DateTimePicker.displayName = "DateTimePicker";
process.env.NODE_ENV !== "production" ? DateTimePicker.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * 12h/24h view for hour selection clock.
   * @default adapter.is12HourCycleInCurrentLocale()
   */
  ampm: PropTypes.bool,
  /**
   * Display ampm controls under the clock (instead of in the toolbar).
   * @default true on desktop, false on mobile
   */
  ampmInClock: PropTypes.bool,
  /**
   * If `true`, the main element is focused during the first mount.
   * This main element is:
   * - the element chosen by the visible view if any (i.e: the selected day on the `day` view).
   * - the `input` element if there is a field rendered.
   */
  autoFocus: PropTypes.bool,
  className: PropTypes.string,
  /**
   * If `true`, the Picker will close after submitting the full date.
   * @default false
   */
  closeOnSelect: PropTypes.bool,
  /**
   * Formats the day of week displayed in the calendar header.
   * @param {PickerValidDate} date The date of the day of week provided by the adapter.
   * @returns {string} The name to display.
   * @default (date: PickerValidDate) => adapter.format(date, 'weekdayShort').charAt(0).toUpperCase()
   */
  dayOfWeekFormatter: PropTypes.func,
  /**
   * The default value.
   * Used when the component is not controlled.
   */
  defaultValue: PropTypes.object,
  /**
   * CSS media query when `Mobile` mode will be changed to `Desktop`.
   * @default '@media (pointer: fine)'
   * @example '@media (min-width: 720px)' or theme.breakpoints.up("sm")
   */
  desktopModeMediaQuery: PropTypes.string,
  /**
   * If `true`, the component is disabled.
   * When disabled, the value cannot be changed and no interaction is possible.
   * @default false
   */
  disabled: PropTypes.bool,
  /**
   * If `true`, disable values after the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disableFuture: PropTypes.bool,
  /**
   * If `true`, today's date is rendering without highlighting with circle.
   * @default false
   */
  disableHighlightToday: PropTypes.bool,
  /**
   * Do not ignore date part when validating min/max time.
   * @default false
   */
  disableIgnoringDatePartForTimeValidation: PropTypes.bool,
  /**
   * If `true`, the button to open the Picker will not be rendered (it will only render the field).
   * @deprecated Use the [field component](https://mui.com/x/react-date-pickers/fields/) instead.
   * @default false
   */
  disableOpenPicker: PropTypes.bool,
  /**
   * If `true`, disable values before the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disablePast: PropTypes.bool,
  /**
   * If `true`, the week number will be display in the calendar.
   */
  displayWeekNumber: PropTypes.bool,
  /**
   * @default true
   */
  enableAccessibleFieldDOMStructure: PropTypes.any,
  /**
   * The day view will show as many weeks as needed after the end of the current month to match this value.
   * Put it to 6 to have a fixed number of weeks in Gregorian calendars
   */
  fixedWeekNumber: PropTypes.number,
  /**
   * Format of the date when rendered in the input(s).
   * Defaults to localized format based on the used `views`.
   */
  format: PropTypes.string,
  /**
   * Density of the format when rendered in the input.
   * Setting `formatDensity` to `"spacious"` will add a space before and after each `/`, `-` and `.` character.
   * @default "dense"
   */
  formatDensity: PropTypes.oneOf(['dense', 'spacious']),
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: refType$1,
  /**
   * The label content.
   */
  label: PropTypes.node,
  /**
   * If `true`, calls `renderLoading` instead of rendering the day calendar.
   * Can be used to preload information and show it in calendar.
   * @default false
   */
  loading: PropTypes.bool,
  /**
   * Locale for components texts.
   * Allows overriding texts coming from `LocalizationProvider` and `theme`.
   */
  localeText: PropTypes.object,
  /**
   * Maximal selectable date.
   * @default 2099-12-31
   */
  maxDate: PropTypes.object,
  /**
   * Maximal selectable moment of time with binding to date, to set max time in each day use `maxTime`.
   */
  maxDateTime: PropTypes.object,
  /**
   * Maximal selectable time.
   * The date part of the object will be ignored unless `props.disableIgnoringDatePartForTimeValidation === true`.
   */
  maxTime: PropTypes.object,
  /**
   * Minimal selectable date.
   * @default 1900-01-01
   */
  minDate: PropTypes.object,
  /**
   * Minimal selectable moment of time with binding to date, to set min time in each day use `minTime`.
   */
  minDateTime: PropTypes.object,
  /**
   * Minimal selectable time.
   * The date part of the object will be ignored unless `props.disableIgnoringDatePartForTimeValidation === true`.
   */
  minTime: PropTypes.object,
  /**
   * Step over minutes.
   * @default 1
   */
  minutesStep: PropTypes.number,
  /**
   * Months rendered per row.
   * @default 3
   */
  monthsPerRow: PropTypes.oneOf([3, 4]),
  /**
   * Name attribute used by the `input` element in the Field.
   */
  name: PropTypes.string,
  /**
   * Callback fired when the value is accepted.
   * @template TValue The value type. It will be the same type as `value` or `null`. It can be in `[start, end]` format in case of range value.
   * @template TError The validation error type. It will be either `string` or a `null`. It can be in `[start, end]` format in case of range value.
   * @param {TValue} value The value that was just accepted.
   * @param {FieldChangeHandlerContext<TError>} context The context containing the validation result of the current value.
   */
  onAccept: PropTypes.func,
  /**
   * Callback fired when the value changes.
   * @template TValue The value type. It will be the same type as `value` or `null`. It can be in `[start, end]` format in case of range value.
   * @template TError The validation error type. It will be either `string` or a `null`. It can be in `[start, end]` format in case of range value.
   * @param {TValue} value The new value.
   * @param {FieldChangeHandlerContext<TError>} context The context containing the validation result of the current value.
   */
  onChange: PropTypes.func,
  /**
   * Callback fired when the popup requests to be closed.
   * Use in controlled mode (see `open`).
   */
  onClose: PropTypes.func,
  /**
   * Callback fired when the error associated with the current value changes.
   * When a validation error is detected, the `error` parameter contains a non-null value.
   * This can be used to render an appropriate form error.
   * @template TError The validation error type. It will be either `string` or a `null`. It can be in `[start, end]` format in case of range value.
   * @template TValue The value type. It will be the same type as `value` or `null`. It can be in `[start, end]` format in case of range value.
   * @param {TError} error The reason why the current value is not valid.
   * @param {TValue} value The value associated with the error.
   */
  onError: PropTypes.func,
  /**
   * Callback fired on month change.
   * @param {PickerValidDate} month The new month.
   */
  onMonthChange: PropTypes.func,
  /**
   * Callback fired when the popup requests to be opened.
   * Use in controlled mode (see `open`).
   */
  onOpen: PropTypes.func,
  /**
   * Callback fired when the selected sections change.
   * @param {FieldSelectedSections} newValue The new selected sections.
   */
  onSelectedSectionsChange: PropTypes.func,
  /**
   * Callback fired on view change.
   * @template TView Type of the view. It will vary based on the Picker type and the `views` it uses.
   * @param {TView} view The new view.
   */
  onViewChange: PropTypes.func,
  /**
   * Callback fired on year change.
   * @param {PickerValidDate} year The new year.
   */
  onYearChange: PropTypes.func,
  /**
   * Control the popup or dialog open state.
   * @default false
   */
  open: PropTypes.bool,
  /**
   * The default visible view.
   * Used when the component view is not controlled.
   * Must be a valid option from `views` list.
   */
  openTo: PropTypes.oneOf(['day', 'hours', 'meridiem', 'minutes', 'month', 'seconds', 'year']),
  /**
   * Force rendering in particular orientation.
   */
  orientation: PropTypes.oneOf(['landscape', 'portrait']),
  /**
   * If `true`, the component is read-only.
   * When read-only, the value cannot be changed but the user can interact with the interface.
   * @default false
   */
  readOnly: PropTypes.bool,
  /**
   * If `true`, disable heavy animations.
   * @default `@media(prefers-reduced-motion: reduce)` || `navigator.userAgent` matches Android <10 or iOS <13
   */
  reduceAnimations: PropTypes.bool,
  /**
   * The date used to generate the new value when both `value` and `defaultValue` are empty.
   * @default The closest valid date-time using the validation props, except callbacks like `shouldDisable<...>`.
   */
  referenceDate: PropTypes.object,
  /**
   * Component displaying when passed `loading` true.
   * @returns {React.ReactNode} The node to render when loading.
   * @default () => <span>...</span>
   */
  renderLoading: PropTypes.func,
  /**
   * The currently selected sections.
   * This prop accepts four formats:
   * 1. If a number is provided, the section at this index will be selected.
   * 2. If a string of type `FieldSectionType` is provided, the first section with that name will be selected.
   * 3. If `"all"` is provided, all the sections will be selected.
   * 4. If `null` is provided, no section will be selected.
   * If not provided, the selected sections will be handled internally.
   */
  selectedSections: PropTypes.oneOfType([PropTypes.oneOf(['all', 'day', 'empty', 'hours', 'meridiem', 'minutes', 'month', 'seconds', 'weekDay', 'year']), PropTypes.number]),
  /**
   * Disable specific date.
   *
   * Warning: This function can be called multiple times (for example when rendering date calendar, checking if focus can be moved to a certain date, etc.). Expensive computations can impact performance.
   *
   * @param {PickerValidDate} day The date to test.
   * @returns {boolean} If `true` the date will be disabled.
   */
  shouldDisableDate: PropTypes.func,
  /**
   * Disable specific month.
   * @param {PickerValidDate} month The month to test.
   * @returns {boolean} If `true`, the month will be disabled.
   */
  shouldDisableMonth: PropTypes.func,
  /**
   * Disable specific time.
   * @param {PickerValidDate} value The value to check.
   * @param {TimeView} view The clock type of the timeValue.
   * @returns {boolean} If `true` the time will be disabled.
   */
  shouldDisableTime: PropTypes.func,
  /**
   * Disable specific year.
   * @param {PickerValidDate} year The year to test.
   * @returns {boolean} If `true`, the year will be disabled.
   */
  shouldDisableYear: PropTypes.func,
  /**
   * If `true`, days outside the current month are rendered:
   *
   * - if `fixedWeekNumber` is defined, renders days to have the weeks requested.
   *
   * - if `fixedWeekNumber` is not defined, renders day to fill the first and last week of the current month.
   *
   * - ignored if `calendars` equals more than `1` on range pickers.
   * @default false
   */
  showDaysOutsideCurrentMonth: PropTypes.bool,
  /**
   * If `true`, disabled digital clock items will not be rendered.
   * @default false
   */
  skipDisabled: PropTypes.bool,
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: PropTypes.object,
  /**
   * Overridable component slots.
   * @default {}
   */
  slots: PropTypes.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])), PropTypes.func, PropTypes.object]),
  /**
   * Amount of time options below or at which the single column time renderer is used.
   * @default 24
   */
  thresholdToRenderTimeInASingleColumn: PropTypes.number,
  /**
   * The time steps between two time unit options.
   * For example, if `timeSteps.minutes = 8`, then the available minute options will be `[0, 8, 16, 24, 32, 40, 48, 56]`.
   * When single column time renderer is used, only `timeSteps.minutes` will be used.
   * @default{ hours: 1, minutes: 5, seconds: 5 }
   */
  timeSteps: PropTypes.shape({
    hours: PropTypes.number,
    minutes: PropTypes.number,
    seconds: PropTypes.number
  }),
  /**
   * Choose which timezone to use for the value.
   * Example: "default", "system", "UTC", "America/New_York".
   * If you pass values from other timezones to some props, they will be converted to this timezone before being used.
   * @see See the {@link https://mui.com/x/react-date-pickers/timezone/ timezones documentation} for more details.
   * @default The timezone of the `value` or `defaultValue` prop is defined, 'default' otherwise.
   */
  timezone: PropTypes.string,
  /**
   * The selected value.
   * Used when the component is controlled.
   */
  value: PropTypes.object,
  /**
   * The visible view.
   * Used when the component view is controlled.
   * Must be a valid option from `views` list.
   */
  view: PropTypes.oneOf(['day', 'hours', 'meridiem', 'minutes', 'month', 'seconds', 'year']),
  /**
   * Define custom view renderers for each section.
   * If `null`, the section will only have field editing.
   * If `undefined`, internally defined view will be used.
   */
  viewRenderers: PropTypes.shape({
    day: PropTypes.func,
    hours: PropTypes.func,
    meridiem: PropTypes.func,
    minutes: PropTypes.func,
    month: PropTypes.func,
    seconds: PropTypes.func,
    year: PropTypes.func
  }),
  /**
   * Available views.
   */
  views: PropTypes.arrayOf(PropTypes.oneOf(['day', 'hours', 'minutes', 'month', 'seconds', 'year']).isRequired),
  /**
   * Years are displayed in ascending (chronological) order by default.
   * If `desc`, years are displayed in descending order.
   * @default 'asc'
   */
  yearsOrder: PropTypes.oneOf(['asc', 'desc']),
  /**
   * Years rendered per row.
   * @default 4 on desktop, 3 on mobile
   */
  yearsPerRow: PropTypes.oneOf([3, 4])
} : void 0;

var dayjs_min = {exports: {}};

(function (module, exports) {
	!function(t,e){module.exports=e();}(commonjsGlobal,(function(){var t=1e3,e=6e4,n=36e5,r="millisecond",i="second",s="minute",u="hour",a="day",o="week",c="month",f="quarter",h="year",d="date",l="Invalid Date",$=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,y=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,M={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return "["+t+(e[(n-20)%10]||e[n]||e[0])+"]"}},m=function(t,e,n){var r=String(t);return !r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},v={s:m,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return (e<=0?"+":"-")+m(r,2,"0")+":"+m(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return -t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,c),s=n-i<0,u=e.clone().add(r+(s?-1:1),c);return +(-(r+(n-i)/(s?i-u:u-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return {M:c,y:h,w:o,d:a,D:d,h:u,m:s,s:i,ms:r,Q:f}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},g="en",D={};D[g]=M;var p="$isDayjsObject",S=function(t){return t instanceof _||!(!t||!t[p])},w=function t(e,n,r){var i;if(!e)return g;if("string"==typeof e){var s=e.toLowerCase();D[s]&&(i=s),n&&(D[s]=n,i=s);var u=e.split("-");if(!i&&u.length>1)return t(u[0])}else {var a=e.name;D[a]=e,i=a;}return !r&&i&&(g=i),i||!r&&g},O=function(t,e){if(S(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new _(n)},b=v;b.l=w,b.i=S,b.w=function(t,e){return O(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var _=function(){function M(t){this.$L=w(t.locale,null,!0),this.parse(t),this.$x=this.$x||t.x||{},this[p]=!0;}var m=M.prototype;return m.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(b.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match($);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.init();},m.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds();},m.$utils=function(){return b},m.isValid=function(){return !(this.$d.toString()===l)},m.isSame=function(t,e){var n=O(t);return this.startOf(e)<=n&&n<=this.endOf(e)},m.isAfter=function(t,e){return O(t)<this.startOf(e)},m.isBefore=function(t,e){return this.endOf(e)<O(t)},m.$g=function(t,e,n){return b.u(t)?this[e]:this.set(n,t)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(t,e){var n=this,r=!!b.u(e)||e,f=b.p(t),l=function(t,e){var i=b.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?i:i.endOf(a)},$=function(t,e){return b.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},y=this.$W,M=this.$M,m=this.$D,v="set"+(this.$u?"UTC":"");switch(f){case h:return r?l(1,0):l(31,11);case c:return r?l(1,M):l(0,M+1);case o:var g=this.$locale().weekStart||0,D=(y<g?y+7:y)-g;return l(r?m-D:m+(6-D),M);case a:case d:return $(v+"Hours",0);case u:return $(v+"Minutes",1);case s:return $(v+"Seconds",2);case i:return $(v+"Milliseconds",3);default:return this.clone()}},m.endOf=function(t){return this.startOf(t,!1)},m.$set=function(t,e){var n,o=b.p(t),f="set"+(this.$u?"UTC":""),l=(n={},n[a]=f+"Date",n[d]=f+"Date",n[c]=f+"Month",n[h]=f+"FullYear",n[u]=f+"Hours",n[s]=f+"Minutes",n[i]=f+"Seconds",n[r]=f+"Milliseconds",n)[o],$=o===a?this.$D+(e-this.$W):e;if(o===c||o===h){var y=this.clone().set(d,1);y.$d[l]($),y.init(),this.$d=y.set(d,Math.min(this.$D,y.daysInMonth())).$d;}else l&&this.$d[l]($);return this.init(),this},m.set=function(t,e){return this.clone().$set(t,e)},m.get=function(t){return this[b.p(t)]()},m.add=function(r,f){var d,l=this;r=Number(r);var $=b.p(f),y=function(t){var e=O(l);return b.w(e.date(e.date()+Math.round(t*r)),l)};if($===c)return this.set(c,this.$M+r);if($===h)return this.set(h,this.$y+r);if($===a)return y(1);if($===o)return y(7);var M=(d={},d[s]=e,d[u]=n,d[i]=t,d)[$]||1,m=this.$d.getTime()+r*M;return b.w(m,this)},m.subtract=function(t,e){return this.add(-1*t,e)},m.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||l;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=b.z(this),s=this.$H,u=this.$m,a=this.$M,o=n.weekdays,c=n.months,f=n.meridiem,h=function(t,n,i,s){return t&&(t[n]||t(e,r))||i[n].slice(0,s)},d=function(t){return b.s(s%12||12,t,"0")},$=f||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r};return r.replace(y,(function(t,r){return r||function(t){switch(t){case"YY":return String(e.$y).slice(-2);case"YYYY":return b.s(e.$y,4,"0");case"M":return a+1;case"MM":return b.s(a+1,2,"0");case"MMM":return h(n.monthsShort,a,c,3);case"MMMM":return h(c,a);case"D":return e.$D;case"DD":return b.s(e.$D,2,"0");case"d":return String(e.$W);case"dd":return h(n.weekdaysMin,e.$W,o,2);case"ddd":return h(n.weekdaysShort,e.$W,o,3);case"dddd":return o[e.$W];case"H":return String(s);case"HH":return b.s(s,2,"0");case"h":return d(1);case"hh":return d(2);case"a":return $(s,u,!0);case"A":return $(s,u,!1);case"m":return String(u);case"mm":return b.s(u,2,"0");case"s":return String(e.$s);case"ss":return b.s(e.$s,2,"0");case"SSS":return b.s(e.$ms,3,"0");case"Z":return i}return null}(t)||i.replace(":","")}))},m.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},m.diff=function(r,d,l){var $,y=this,M=b.p(d),m=O(r),v=(m.utcOffset()-this.utcOffset())*e,g=this-m,D=function(){return b.m(y,m)};switch(M){case h:$=D()/12;break;case c:$=D();break;case f:$=D()/3;break;case o:$=(g-v)/6048e5;break;case a:$=(g-v)/864e5;break;case u:$=g/n;break;case s:$=g/e;break;case i:$=g/t;break;default:$=g;}return l?$:b.a($)},m.daysInMonth=function(){return this.endOf(c).$D},m.$locale=function(){return D[this.$L]},m.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=w(t,e,!0);return r&&(n.$L=r),n},m.clone=function(){return b.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},M}(),k=_.prototype;return O.prototype=k,[["$ms",r],["$s",i],["$m",s],["$H",u],["$W",a],["$M",c],["$y",h],["$D",d]].forEach((function(t){k[t[1]]=function(e){return this.$g(e,t[0],t[1])};})),O.extend=function(t,e){return t.$i||(t(e,_,O),t.$i=!0),O},O.locale=w,O.isDayjs=S,O.unix=function(t){return O(1e3*t)},O.en=D[g],O.Ls=D,O.p={},O})); 
} (dayjs_min));

var dayjs_minExports = dayjs_min.exports;
var dayjs = /*@__PURE__*/getDefaultExportFromCjs(dayjs_minExports);

var weekOfYear = {exports: {}};

(function (module, exports) {
	!function(e,t){module.exports=t();}(commonjsGlobal,(function(){var e="week",t="year";return function(i,n,r){var f=n.prototype;f.week=function(i){if(void 0===i&&(i=null),null!==i)return this.add(7*(i-this.week()),"day");var n=this.$locale().yearStart||1;if(11===this.month()&&this.date()>25){var f=r(this).startOf(t).add(1,t).date(n),s=r(this).endOf(e);if(f.isBefore(s))return 1}var a=r(this).startOf(t).date(n).startOf(e).subtract(1,"millisecond"),o=this.diff(a,e,!0);return o<0?r(this).startOf("week").week():Math.ceil(o)},f.weeks=function(e){return void 0===e&&(e=null),this.week(e)};}})); 
} (weekOfYear));

var weekOfYearExports = weekOfYear.exports;
var weekOfYearPlugin = /*@__PURE__*/getDefaultExportFromCjs(weekOfYearExports);

var customParseFormat = {exports: {}};

(function (module, exports) {
	!function(e,t){module.exports=t();}(commonjsGlobal,(function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,n=/\d/,r=/\d\d/,i=/\d\d?/,o=/\d*[^-_:/,()\s\d]+/,s={},a=function(e){return (e=+e)+(e>68?1900:2e3)};var f=function(e){return function(t){this[e]=+t;}},h=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var t=e.match(/([+-]|\d\d)/g),n=60*t[1]+(+t[2]||0);return 0===n?0:"+"===t[0]?-n:n}(e);}],u=function(e){var t=s[e];return t&&(t.indexOf?t:t.s.concat(t.f))},d=function(e,t){var n,r=s.meridiem;if(r){for(var i=1;i<=24;i+=1)if(e.indexOf(r(i,0,t))>-1){n=i>12;break}}else n=e===(t?"pm":"PM");return n},c={A:[o,function(e){this.afternoon=d(e,!1);}],a:[o,function(e){this.afternoon=d(e,!0);}],Q:[n,function(e){this.month=3*(e-1)+1;}],S:[n,function(e){this.milliseconds=100*+e;}],SS:[r,function(e){this.milliseconds=10*+e;}],SSS:[/\d{3}/,function(e){this.milliseconds=+e;}],s:[i,f("seconds")],ss:[i,f("seconds")],m:[i,f("minutes")],mm:[i,f("minutes")],H:[i,f("hours")],h:[i,f("hours")],HH:[i,f("hours")],hh:[i,f("hours")],D:[i,f("day")],DD:[r,f("day")],Do:[o,function(e){var t=s.ordinal,n=e.match(/\d+/);if(this.day=n[0],t)for(var r=1;r<=31;r+=1)t(r).replace(/\[|\]/g,"")===e&&(this.day=r);}],w:[i,f("week")],ww:[r,f("week")],M:[i,f("month")],MM:[r,f("month")],MMM:[o,function(e){var t=u("months"),n=(u("monthsShort")||t.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(n<1)throw new Error;this.month=n%12||n;}],MMMM:[o,function(e){var t=u("months").indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t;}],Y:[/[+-]?\d+/,f("year")],YY:[r,function(e){this.year=a(e);}],YYYY:[/\d{4}/,f("year")],Z:h,ZZ:h};function l(n){var r,i;r=n,i=s&&s.formats;for(var o=(n=r.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(t,n,r){var o=r&&r.toUpperCase();return n||i[r]||e[r]||i[o].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,t,n){return t||n.slice(1)}))}))).match(t),a=o.length,f=0;f<a;f+=1){var h=o[f],u=c[h],d=u&&u[0],l=u&&u[1];o[f]=l?{regex:d,parser:l}:h.replace(/^\[|\]$/g,"");}return function(e){for(var t={},n=0,r=0;n<a;n+=1){var i=o[n];if("string"==typeof i)r+=i.length;else {var s=i.regex,f=i.parser,h=e.slice(r),u=s.exec(h)[0];f.call(t,u),e=e.replace(u,"");}}return function(e){var t=e.afternoon;if(void 0!==t){var n=e.hours;t?n<12&&(e.hours+=12):12===n&&(e.hours=0),delete e.afternoon;}}(t),t}}return function(e,t,n){n.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(a=e.parseTwoDigitYear);var r=t.prototype,i=r.parse;r.parse=function(e){var t=e.date,r=e.utc,o=e.args;this.$u=r;var a=o[1];if("string"==typeof a){var f=!0===o[2],h=!0===o[3],u=f||h,d=o[2];h&&(d=o[2]),s=this.$locale(),!f&&d&&(s=n.Ls[d]),this.$d=function(e,t,n,r){try{if(["x","X"].indexOf(t)>-1)return new Date(("X"===t?1e3:1)*e);var i=l(t)(e),o=i.year,s=i.month,a=i.day,f=i.hours,h=i.minutes,u=i.seconds,d=i.milliseconds,c=i.zone,m=i.week,M=new Date,Y=a||(o||s?1:M.getDate()),p=o||M.getFullYear(),v=0;o&&!s||(v=s>0?s-1:M.getMonth());var D,w=f||0,g=h||0,y=u||0,L=d||0;return c?new Date(Date.UTC(p,v,Y,w,g,y,L+60*c.offset*1e3)):n?new Date(Date.UTC(p,v,Y,w,g,y,L)):(D=new Date(p,v,Y,w,g,y,L),m&&(D=r(D).week(m).toDate()),D)}catch(e){return new Date("")}}(t,a,r,n),this.init(),d&&!0!==d&&(this.$L=this.locale(d).$L),u&&t!=this.format(a)&&(this.$d=new Date("")),s={};}else if(a instanceof Array)for(var c=a.length,m=1;m<=c;m+=1){o[1]=a[m-1];var M=n.apply(this,o);if(M.isValid()){this.$d=M.$d,this.$L=M.$L,this.init();break}m===c&&(this.$d=new Date(""));}else i.call(this,e);};}})); 
} (customParseFormat));

var customParseFormatExports = customParseFormat.exports;
var customParseFormatPlugin = /*@__PURE__*/getDefaultExportFromCjs(customParseFormatExports);

var localizedFormat = {exports: {}};

(function (module, exports) {
	!function(e,t){module.exports=t();}(commonjsGlobal,(function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"};return function(t,o,n){var r=o.prototype,i=r.format;n.en.formats=e,r.format=function(t){void 0===t&&(t="YYYY-MM-DDTHH:mm:ssZ");var o=this.$locale().formats,n=function(t,o){return t.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(t,n,r){var i=r&&r.toUpperCase();return n||o[r]||e[r]||o[i].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,t,o){return t||o.slice(1)}))}))}(t,void 0===o?{}:o);return i.call(this,n)};}})); 
} (localizedFormat));

var localizedFormatExports = localizedFormat.exports;
var localizedFormatPlugin = /*@__PURE__*/getDefaultExportFromCjs(localizedFormatExports);

var isBetween = {exports: {}};

(function (module, exports) {
	!function(e,i){module.exports=i();}(commonjsGlobal,(function(){return function(e,i,t){i.prototype.isBetween=function(e,i,s,f){var n=t(e),o=t(i),r="("===(f=f||"()")[0],u=")"===f[1];return (r?this.isAfter(n,s):!this.isBefore(n,s))&&(u?this.isBefore(o,s):!this.isAfter(o,s))||(r?this.isBefore(n,s):!this.isAfter(n,s))&&(u?this.isAfter(o,s):!this.isBefore(o,s))};}})); 
} (isBetween));

var isBetweenExports = isBetween.exports;
var isBetweenPlugin = /*@__PURE__*/getDefaultExportFromCjs(isBetweenExports);

var advancedFormat = {exports: {}};

(function (module, exports) {
	!function(e,t){module.exports=t();}(commonjsGlobal,(function(){return function(e,t){var r=t.prototype,n=r.format;r.format=function(e){var t=this,r=this.$locale();if(!this.isValid())return n.bind(this)(e);var s=this.$utils(),a=(e||"YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g,(function(e){switch(e){case"Q":return Math.ceil((t.$M+1)/3);case"Do":return r.ordinal(t.$D);case"gggg":return t.weekYear();case"GGGG":return t.isoWeekYear();case"wo":return r.ordinal(t.week(),"W");case"w":case"ww":return s.s(t.week(),"w"===e?1:2,"0");case"W":case"WW":return s.s(t.isoWeek(),"W"===e?1:2,"0");case"k":case"kk":return s.s(String(0===t.$H?24:t.$H),"k"===e?1:2,"0");case"X":return Math.floor(t.$d.getTime()/1e3);case"x":return t.$d.getTime();case"z":return "["+t.offsetName()+"]";case"zzz":return "["+t.offsetName("long")+"]";default:return e}}));return n.bind(this)(a)};}})); 
} (advancedFormat));

var advancedFormatExports = advancedFormat.exports;
var advancedFormatPlugin = /*@__PURE__*/getDefaultExportFromCjs(advancedFormatExports);

dayjs.extend(localizedFormatPlugin);
dayjs.extend(weekOfYearPlugin);
dayjs.extend(isBetweenPlugin);
dayjs.extend(advancedFormatPlugin);
const formatTokenMap = {
  // Year
  YY: 'year',
  YYYY: {
    sectionType: 'year',
    contentType: 'digit',
    maxLength: 4
  },
  // Month
  M: {
    sectionType: 'month',
    contentType: 'digit',
    maxLength: 2
  },
  MM: 'month',
  MMM: {
    sectionType: 'month',
    contentType: 'letter'
  },
  MMMM: {
    sectionType: 'month',
    contentType: 'letter'
  },
  // Day of the month
  D: {
    sectionType: 'day',
    contentType: 'digit',
    maxLength: 2
  },
  DD: 'day',
  Do: {
    sectionType: 'day',
    contentType: 'digit-with-letter'
  },
  // Day of the week
  d: {
    sectionType: 'weekDay',
    contentType: 'digit',
    maxLength: 2
  },
  dd: {
    sectionType: 'weekDay',
    contentType: 'letter'
  },
  ddd: {
    sectionType: 'weekDay',
    contentType: 'letter'
  },
  dddd: {
    sectionType: 'weekDay',
    contentType: 'letter'
  },
  // Meridiem
  A: 'meridiem',
  a: 'meridiem',
  // Hours
  H: {
    sectionType: 'hours',
    contentType: 'digit',
    maxLength: 2
  },
  HH: 'hours',
  h: {
    sectionType: 'hours',
    contentType: 'digit',
    maxLength: 2
  },
  hh: 'hours',
  // Minutes
  m: {
    sectionType: 'minutes',
    contentType: 'digit',
    maxLength: 2
  },
  mm: 'minutes',
  // Seconds
  s: {
    sectionType: 'seconds',
    contentType: 'digit',
    maxLength: 2
  },
  ss: 'seconds'
};
const defaultFormats = {
  year: 'YYYY',
  month: 'MMMM',
  monthShort: 'MMM',
  dayOfMonth: 'D',
  dayOfMonthFull: 'Do',
  weekday: 'dddd',
  weekdayShort: 'dd',
  hours24h: 'HH',
  hours12h: 'hh',
  meridiem: 'A',
  minutes: 'mm',
  seconds: 'ss',
  fullDate: 'll',
  keyboardDate: 'L',
  shortDate: 'MMM D',
  normalDate: 'D MMMM',
  normalDateWithWeekday: 'ddd, MMM D',
  fullTime12h: 'hh:mm A',
  fullTime24h: 'HH:mm',
  keyboardDateTime12h: 'L hh:mm A',
  keyboardDateTime24h: 'L HH:mm'
};
const MISSING_UTC_PLUGIN = ['Missing UTC plugin', 'To be able to use UTC or timezones, you have to enable the `utc` plugin', 'Find more information on https://mui.com/x/react-date-pickers/timezone/#day-js-and-utc'].join('\n');
const MISSING_TIMEZONE_PLUGIN = ['Missing timezone plugin', 'To be able to use timezones, you have to enable both the `utc` and the `timezone` plugin', 'Find more information on https://mui.com/x/react-date-pickers/timezone/#day-js-and-timezone'].join('\n');
/**
 * Based on `@date-io/dayjs`
 *
 * MIT License
 *
 * Copyright (c) 2017 Dmitriy Kovalenko
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
class AdapterDayjs {
  constructor({
    locale: _locale,
    formats
  } = {}) {
    this.isMUIAdapter = true;
    this.isTimezoneCompatible = true;
    this.lib = 'dayjs';
    this.locale = void 0;
    this.formats = void 0;
    this.escapedCharacters = {
      start: '[',
      end: ']'
    };
    this.formatTokenMap = formatTokenMap;
    this.setLocaleToValue = value => {
      const expectedLocale = this.getCurrentLocaleCode();
      if (expectedLocale === value.locale()) {
        return value;
      }
      return value.locale(expectedLocale);
    };
    this.hasUTCPlugin = () => typeof dayjs.utc !== 'undefined';
    this.hasTimezonePlugin = () => typeof dayjs.tz !== 'undefined';
    this.isSame = (value, comparing, comparisonTemplate) => {
      const comparingInValueTimezone = this.setTimezone(comparing, this.getTimezone(value));
      return value.format(comparisonTemplate) === comparingInValueTimezone.format(comparisonTemplate);
    };
    /**
     * Replaces "default" by undefined and "system" by the system timezone before passing it to `dayjs`.
     */
    this.cleanTimezone = timezone => {
      switch (timezone) {
        case 'default':
          {
            return undefined;
          }
        case 'system':
          {
            return dayjs.tz.guess();
          }
        default:
          {
            return timezone;
          }
      }
    };
    this.createSystemDate = value => {
      let date;
      if (this.hasUTCPlugin() && this.hasTimezonePlugin()) {
        const timezone = dayjs.tz.guess();
        if (timezone === 'UTC') {
          date = dayjs(value);
        } /* v8 ignore next 3 */else {
          // We can't change the system timezone in the tests
          date = dayjs.tz(value, timezone);
        }
      } else {
        date = dayjs(value);
      }
      return this.setLocaleToValue(date);
    };
    this.createUTCDate = value => {
      /* v8 ignore next 3 */
      if (!this.hasUTCPlugin()) {
        throw new Error(MISSING_UTC_PLUGIN);
      }
      return this.setLocaleToValue(dayjs.utc(value));
    };
    this.createTZDate = (value, timezone) => {
      /* v8 ignore next 3 */
      if (!this.hasUTCPlugin()) {
        throw new Error(MISSING_UTC_PLUGIN);
      }

      /* v8 ignore next 3 */
      if (!this.hasTimezonePlugin()) {
        throw new Error(MISSING_TIMEZONE_PLUGIN);
      }
      const keepLocalTime = value !== undefined && !value.endsWith('Z');
      return this.setLocaleToValue(dayjs(value).tz(this.cleanTimezone(timezone), keepLocalTime));
    };
    this.getLocaleFormats = () => {
      const locales = dayjs.Ls;
      const locale = this.locale || 'en';
      let localeObject = locales[locale];
      if (localeObject === undefined) {
        /* v8 ignore start */
        if (process.env.NODE_ENV !== 'production') {
          warnOnce(['MUI X: Your locale has not been found.', 'Either the locale key is not a supported one. Locales supported by dayjs are available here: https://github.com/iamkun/dayjs/tree/dev/src/locale.', "Or you forget to import the locale from 'dayjs/locale/{localeUsed}'", 'fallback on English locale.']);
        }
        /* v8 ignore stop */
        localeObject = locales.en;
      }
      return localeObject.formats;
    };
    /**
     * If the new day does not have the same offset as the old one (when switching to summer day time for example),
     * Then dayjs will not automatically adjust the offset (moment does).
     * We have to parse again the value to make sure the `fixOffset` method is applied.
     * See https://github.com/iamkun/dayjs/blob/b3624de619d6e734cd0ffdbbd3502185041c1b60/src/plugin/timezone/index.js#L72
     */
    this.adjustOffset = value => {
      if (!this.hasTimezonePlugin()) {
        return value;
      }
      const timezone = this.getTimezone(value);
      if (timezone !== 'UTC') {
        const fixedValue = value.tz(this.cleanTimezone(timezone), true);
        // TODO: Simplify the case when we raise the `dayjs` peer dep to 1.11.12 (https://github.com/iamkun/dayjs/releases/tag/v1.11.12)
        /* v8 ignore next 3 */
        // @ts-ignore
        if (fixedValue.$offset === (value.$offset ?? 0)) {
          return value;
        }
        // Change only what is needed to avoid creating a new object with unwanted data
        // Especially important when used in an environment where utc or timezone dates are used only in some places
        // Reference: https://github.com/mui/mui-x/issues/13290
        // @ts-ignore
        value.$offset = fixedValue.$offset;
      }
      return value;
    };
    this.date = (value, timezone = 'default') => {
      if (value === null) {
        return null;
      }
      if (timezone === 'UTC') {
        return this.createUTCDate(value);
      }
      if (timezone === 'system' || timezone === 'default' && !this.hasTimezonePlugin()) {
        return this.createSystemDate(value);
      }
      return this.createTZDate(value, timezone);
    };
    this.getInvalidDate = () => dayjs(new Date('Invalid date'));
    this.getTimezone = value => {
      if (this.hasTimezonePlugin()) {
        // @ts-ignore
        const zone = value.$x?.$timezone;
        if (zone) {
          return zone;
        }
      }
      if (this.hasUTCPlugin() && value.isUTC()) {
        return 'UTC';
      }
      return 'system';
    };
    this.setTimezone = (value, timezone) => {
      if (this.getTimezone(value) === timezone) {
        return value;
      }
      if (timezone === 'UTC') {
        /* v8 ignore next 3 */
        if (!this.hasUTCPlugin()) {
          throw new Error(MISSING_UTC_PLUGIN);
        }
        return value.utc();
      }

      // We know that we have the UTC plugin.
      // Otherwise, the value timezone would always equal "system".
      // And it would be caught by the first "if" of this method.
      if (timezone === 'system') {
        return value.local();
      }
      if (!this.hasTimezonePlugin()) {
        if (timezone === 'default') {
          return value;
        }

        /* v8 ignore next */
        throw new Error(MISSING_TIMEZONE_PLUGIN);
      }
      return this.setLocaleToValue(dayjs.tz(value, this.cleanTimezone(timezone)));
    };
    this.toJsDate = value => {
      return value.toDate();
    };
    this.parse = (value, format) => {
      if (value === '') {
        return null;
      }
      return dayjs(value, format, this.locale, true);
    };
    this.getCurrentLocaleCode = () => {
      return this.locale || 'en';
    };
    this.is12HourCycleInCurrentLocale = () => {
      /* v8 ignore next */
      return /A|a/.test(this.getLocaleFormats().LT || '');
    };
    this.expandFormat = format => {
      const localeFormats = this.getLocaleFormats();

      // @see https://github.com/iamkun/dayjs/blob/dev/src/plugin/localizedFormat/index.js
      const t = formatBis => formatBis.replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, (_, a, b) => a || b.slice(1));
      return format.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, (_, a, b) => {
        const B = b && b.toUpperCase();
        return a || localeFormats[b] || t(localeFormats[B]);
      });
    };
    this.isValid = value => {
      if (value == null) {
        return false;
      }
      return value.isValid();
    };
    this.format = (value, formatKey) => {
      return this.formatByString(value, this.formats[formatKey]);
    };
    this.formatByString = (value, formatString) => {
      return this.setLocaleToValue(value).format(formatString);
    };
    this.formatNumber = numberToFormat => {
      return numberToFormat;
    };
    this.isEqual = (value, comparing) => {
      if (value === null && comparing === null) {
        return true;
      }
      if (value === null || comparing === null) {
        return false;
      }
      return value.toDate().getTime() === comparing.toDate().getTime();
    };
    this.isSameYear = (value, comparing) => {
      return this.isSame(value, comparing, 'YYYY');
    };
    this.isSameMonth = (value, comparing) => {
      return this.isSame(value, comparing, 'YYYY-MM');
    };
    this.isSameDay = (value, comparing) => {
      return this.isSame(value, comparing, 'YYYY-MM-DD');
    };
    this.isSameHour = (value, comparing) => {
      return value.isSame(comparing, 'hour');
    };
    this.isAfter = (value, comparing) => {
      return value > comparing;
    };
    this.isAfterYear = (value, comparing) => {
      if (!this.hasUTCPlugin()) {
        return value.isAfter(comparing, 'year');
      }
      return !this.isSameYear(value, comparing) && value.utc() > comparing.utc();
    };
    this.isAfterDay = (value, comparing) => {
      if (!this.hasUTCPlugin()) {
        return value.isAfter(comparing, 'day');
      }
      return !this.isSameDay(value, comparing) && value.utc() > comparing.utc();
    };
    this.isBefore = (value, comparing) => {
      return value < comparing;
    };
    this.isBeforeYear = (value, comparing) => {
      if (!this.hasUTCPlugin()) {
        return value.isBefore(comparing, 'year');
      }
      return !this.isSameYear(value, comparing) && value.utc() < comparing.utc();
    };
    this.isBeforeDay = (value, comparing) => {
      if (!this.hasUTCPlugin()) {
        return value.isBefore(comparing, 'day');
      }
      return !this.isSameDay(value, comparing) && value.utc() < comparing.utc();
    };
    this.isWithinRange = (value, [start, end]) => {
      return value >= start && value <= end;
    };
    this.startOfYear = value => {
      return this.adjustOffset(value.startOf('year'));
    };
    this.startOfMonth = value => {
      return this.adjustOffset(value.startOf('month'));
    };
    this.startOfWeek = value => {
      return this.adjustOffset(this.setLocaleToValue(value).startOf('week'));
    };
    this.startOfDay = value => {
      return this.adjustOffset(value.startOf('day'));
    };
    this.endOfYear = value => {
      return this.adjustOffset(value.endOf('year'));
    };
    this.endOfMonth = value => {
      return this.adjustOffset(value.endOf('month'));
    };
    this.endOfWeek = value => {
      return this.adjustOffset(this.setLocaleToValue(value).endOf('week'));
    };
    this.endOfDay = value => {
      return this.adjustOffset(value.endOf('day'));
    };
    this.addYears = (value, amount) => {
      return this.adjustOffset(value.add(amount, 'year'));
    };
    this.addMonths = (value, amount) => {
      return this.adjustOffset(value.add(amount, 'month'));
    };
    this.addWeeks = (value, amount) => {
      return this.adjustOffset(value.add(amount, 'week'));
    };
    this.addDays = (value, amount) => {
      return this.adjustOffset(value.add(amount, 'day'));
    };
    this.addHours = (value, amount) => {
      return this.adjustOffset(value.add(amount, 'hour'));
    };
    this.addMinutes = (value, amount) => {
      return this.adjustOffset(value.add(amount, 'minute'));
    };
    this.addSeconds = (value, amount) => {
      return this.adjustOffset(value.add(amount, 'second'));
    };
    this.getYear = value => {
      return value.year();
    };
    this.getMonth = value => {
      return value.month();
    };
    this.getDate = value => {
      return value.date();
    };
    this.getHours = value => {
      return value.hour();
    };
    this.getMinutes = value => {
      return value.minute();
    };
    this.getSeconds = value => {
      return value.second();
    };
    this.getMilliseconds = value => {
      return value.millisecond();
    };
    this.setYear = (value, year) => {
      return this.adjustOffset(value.set('year', year));
    };
    this.setMonth = (value, month) => {
      return this.adjustOffset(value.set('month', month));
    };
    this.setDate = (value, date) => {
      return this.adjustOffset(value.set('date', date));
    };
    this.setHours = (value, hours) => {
      return this.adjustOffset(value.set('hour', hours));
    };
    this.setMinutes = (value, minutes) => {
      return this.adjustOffset(value.set('minute', minutes));
    };
    this.setSeconds = (value, seconds) => {
      return this.adjustOffset(value.set('second', seconds));
    };
    this.setMilliseconds = (value, milliseconds) => {
      return this.adjustOffset(value.set('millisecond', milliseconds));
    };
    this.getDaysInMonth = value => {
      return value.daysInMonth();
    };
    this.getWeekArray = value => {
      const start = this.startOfWeek(this.startOfMonth(value));
      const end = this.endOfWeek(this.endOfMonth(value));
      let count = 0;
      let current = start;
      const nestedWeeks = [];
      while (current < end) {
        const weekNumber = Math.floor(count / 7);
        nestedWeeks[weekNumber] = nestedWeeks[weekNumber] || [];
        nestedWeeks[weekNumber].push(current);
        current = this.addDays(current, 1);
        count += 1;
      }
      return nestedWeeks;
    };
    this.getWeekNumber = value => {
      return value.week();
    };
    this.getYearRange = ([start, end]) => {
      const startDate = this.startOfYear(start);
      const endDate = this.endOfYear(end);
      const years = [];
      let current = startDate;
      while (this.isBefore(current, endDate)) {
        years.push(current);
        current = this.addYears(current, 1);
      }
      return years;
    };
    this.locale = _locale;
    this.formats = _extends({}, defaultFormats, formats);

    // Moved plugins to the constructor to allow for users to use options on the library
    // for reference: https://github.com/mui/mui-x/pull/11151
    dayjs.extend(customParseFormatPlugin);
  }
  getDayOfWeek(value) {
    return value.day() + 1;
  }
}

const FieldRenderer = ({ field, formik, value, error, helperText, onChange }) => {
    const { name = '', label, type, placeholder, options = [], required = false, variant = 'outlined', muiProps = {}, onSearch, min, max, step, marks = false, freeSolo = false, multiple = false, accept, render } = field;
    const displayValue = getDisplayValue(value, type);
    const normalizedOptions = normalizeOptions(options);
    if (render) {
        return render({
            fieldProps: {
                name,
                label,
                value: displayValue,
                error: Boolean(error),
                helperText: error || helperText,
                onChange: (newValue) => onChange(newValue),
                ...muiProps
            },
            formik
        });
    }
    const baseProps = {
        label,
        error: Boolean(error),
        helperText: error || helperText,
        variant,
        ...muiProps
    };
    switch (type) {
        case 'text':
        case 'password':
            return (jsxRuntime.jsx(material.TextField, { ...baseProps, type: type, value: displayValue, placeholder: placeholder, onChange: (e) => onChange(e.target.value), fullWidth: true }));
        case 'textarea':
            return (jsxRuntime.jsx(material.TextField, { ...baseProps, multiline: true, rows: 4, value: displayValue, placeholder: placeholder, onChange: (e) => onChange(e.target.value), fullWidth: true }));
        case 'number':
            return (jsxRuntime.jsx(material.TextField, { ...baseProps, type: "text", value: displayValue, placeholder: placeholder, onChange: (e) => {
                    const value = e.target.value;
                    if (value === '' || /^-?\d*\.?\d*$/.test(value)) {
                        onChange(value === '' ? '' : Number(value));
                    }
                }, fullWidth: true }));
        case 'checkbox':
            return (jsxRuntime.jsx(material.FormControlLabel, { control: jsxRuntime.jsx(material.Checkbox, { checked: displayValue, onChange: (e) => onChange(e.target.checked), ...muiProps }), label: label }));
        case 'multiCheckbox':
            return (jsxRuntime.jsxs(material.FormControl, { component: "fieldset", error: Boolean(error), children: [jsxRuntime.jsx(material.FormLabel, { component: "legend", children: label }), jsxRuntime.jsx(material.FormGroup, { children: normalizedOptions.map((option) => (jsxRuntime.jsx(material.FormControlLabel, { control: jsxRuntime.jsx(material.Checkbox, { checked: displayValue.includes(option.value), onChange: (e) => {
                                    const newValue = e.target.checked
                                        ? [...displayValue, option.value]
                                        : displayValue.filter((v) => v !== option.value);
                                    onChange(newValue);
                                }, ...muiProps }), label: option.label }, option.value))) }), (error || helperText) && jsxRuntime.jsx(material.FormHelperText, { children: error || helperText })] }));
        case 'radio':
            return (jsxRuntime.jsxs(material.FormControl, { component: "fieldset", error: Boolean(error), children: [jsxRuntime.jsx(material.FormLabel, { component: "legend", children: label }), jsxRuntime.jsx(material.RadioGroup, { value: displayValue, onChange: (e) => onChange(e.target.value), children: normalizedOptions.map((option) => (jsxRuntime.jsx(material.FormControlLabel, { value: option.value, control: jsxRuntime.jsx(material.Radio, { ...muiProps }), label: option.label }, option.value))) }), (error || helperText) && jsxRuntime.jsx(material.FormHelperText, { children: error || helperText })] }));
        case 'select':
            return (jsxRuntime.jsxs(material.FormControl, { fullWidth: true, variant: variant, error: Boolean(error), children: [jsxRuntime.jsx(material.InputLabel, { children: label }), jsxRuntime.jsx(material.Select, { value: displayValue, label: label, onChange: (e) => onChange(e.target.value), multiple: multiple, ...muiProps, children: normalizedOptions.map((option) => (jsxRuntime.jsx(material.MenuItem, { value: option.value, children: option.label }, option.value))) }), (error || helperText) && jsxRuntime.jsx(material.FormHelperText, { children: error || helperText })] }));
        case 'autocomplete':
            return (jsxRuntime.jsx(AutocompleteField, { field: field, value: displayValue, onChange: onChange, error: Boolean(error), helperText: error || helperText, options: normalizedOptions, onSearch: onSearch, freeSolo: freeSolo, multiple: multiple, muiProps: muiProps }));
        case 'date':
        case 'time':
        case 'dateTime':
            const parseValue = (val) => {
                if (!val)
                    return null;
                if (dayjs.isDayjs(val))
                    return val;
                return dayjs(val);
            };
            const handleDateChange = (newValue) => {
                if (!newValue) {
                    onChange('');
                    return;
                }
                if (type === 'time') {
                    onChange(newValue.format('HH:mm'));
                }
                else if (type === 'date') {
                    onChange(newValue.format('YYYY-MM-DD'));
                }
                else {
                    onChange(newValue.format('YYYY-MM-DDTHH:mm'));
                }
            };
            const renderDateTimePicker = () => {
                const commonProps = {
                    value: parseValue(displayValue),
                    onChange: handleDateChange,
                    slotProps: {
                        textField: {
                            ...baseProps,
                            fullWidth: true,
                            error: Boolean(error),
                            helperText: error || helperText,
                        }
                    }
                };
                switch (type) {
                    case 'date':
                        return jsxRuntime.jsx(DatePicker, { ...commonProps });
                    case 'time':
                        return jsxRuntime.jsx(TimePicker, { ...commonProps });
                    case 'dateTime':
                        return jsxRuntime.jsx(DateTimePicker, { ...commonProps });
                    default:
                        return jsxRuntime.jsx(DatePicker, { ...commonProps });
                }
            };
            return (jsxRuntime.jsx(LocalizationProvider, { dateAdapter: AdapterDayjs, children: renderDateTimePicker() }));
        case 'switch':
            return (jsxRuntime.jsx(material.FormControlLabel, { control: jsxRuntime.jsx(material.Switch, { checked: displayValue, onChange: (e) => onChange(e.target.checked), ...muiProps }), label: label }));
        case 'slider':
            return (jsxRuntime.jsxs(material.Box, { sx: { px: 2 }, children: [jsxRuntime.jsx(material.Typography, { gutterBottom: true, children: label }), jsxRuntime.jsx(material.Slider, { value: displayValue, onChange: (_, newValue) => onChange(newValue), min: min, max: max, step: step, marks: marks, valueLabelDisplay: "auto", ...muiProps }), (error || helperText) && (jsxRuntime.jsx(material.FormHelperText, { error: Boolean(error), children: error || helperText }))] }));
        case 'file':
            return (jsxRuntime.jsx(material.TextField, { ...baseProps, type: "file", onChange: (e) => {
                    const files = e.target.files;
                    onChange(multiple ? files : files?.[0] || null);
                }, InputLabelProps: { shrink: true }, inputProps: { accept, multiple }, fullWidth: true }));
        case 'empty':
            return jsxRuntime.jsx(material.Box, {});
        default:
            return (jsxRuntime.jsx(material.TextField, { ...baseProps, value: displayValue, placeholder: placeholder, onChange: (e) => onChange(e.target.value), fullWidth: true }));
    }
};
const AutocompleteField = ({ field, value, onChange, error, helperText, options, onSearch, freeSolo, multiple, muiProps }) => {
    const [searchOptions, setSearchOptions] = React.useState(options);
    const [loading, setLoading] = React.useState(false);
    const debouncedSearch = React.useMemo(() => debounce(async (searchTerm) => {
        if (onSearch && searchTerm.length > 0) {
            setLoading(true);
            try {
                const results = await onSearch(searchTerm);
                setSearchOptions(results);
            }
            catch (error) {
                console.error('Search error:', error);
            }
            finally {
                setLoading(false);
            }
        }
        else {
            setSearchOptions(options);
        }
    }, 300), [onSearch, options]);
    return (jsxRuntime.jsx(material.Autocomplete, { value: value, onChange: (_, newValue) => onChange(newValue), onInputChange: (_, inputValue) => {
            if (onSearch) {
                debouncedSearch(inputValue);
            }
        }, options: searchOptions, getOptionLabel: (option) => {
            if (typeof option === 'string')
                return option;
            return option?.label || '';
        }, isOptionEqualToValue: (option, value) => {
            if (typeof option === 'string' && typeof value === 'string') {
                return option === value;
            }
            return option?.value === value?.value;
        }, loading: loading, freeSolo: freeSolo, multiple: multiple, renderTags: (tagValue, getTagProps) => tagValue.map((option, index) => (React.createElement(material.Chip, { label: typeof option === 'string' ? option : option.label, ...getTagProps({ index }), key: index }))), renderInput: (params) => (jsxRuntime.jsx(material.TextField, { ...params, label: field.label, error: error, helperText: helperText, variant: field.variant, placeholder: field.placeholder, ...muiProps })) }));
};

const SmartFormBuilder = ({ formik, fields, buttons = [], title, className, sx, gridSpacing = 2 }) => {
    const handleFieldChange = (fieldName, value, field) => {
        formik.setFieldValue(fieldName, value);
        formik.setFieldTouched(fieldName, true, false);
        if (field.onChange) {
            field.onChange(value, formik);
        }
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        e.stopPropagation();
        const touchedFields = {};
        fields.forEach((field) => {
            if (field.name) {
                touchedFields[field.name] = true;
            }
        });
        await formik.setTouched(touchedFields, true);
        const errors = await formik.validateForm();
        if (Object.keys(errors).length > 0) {
            formik.setErrors(errors);
            return;
        }
        formik.handleSubmit();
    };
    const getFieldError = (fieldName) => {
        const isFieldTouched = formik.touched[fieldName];
        const hasFormBeenSubmitted = formik.submitCount > 0;
        const hasFieldError = formik.errors[fieldName];
        const shouldShowError = isFieldTouched || hasFormBeenSubmitted;
        return shouldShowError && hasFieldError ? String(formik.errors[fieldName]) : undefined;
    };
    const getFieldHelperText = (field, fieldError) => {
        return fieldError;
    };
    return (jsxRuntime.jsxs(material.Box, { className: className, sx: sx, children: [title && (jsxRuntime.jsx(material.Typography, { variant: "h4", component: "h1", gutterBottom: true, children: title })), jsxRuntime.jsxs("form", { onSubmit: handleSubmit, children: [jsxRuntime.jsx(material.Grid, { container: true, spacing: gridSpacing, children: fields.map((field, index) => {
                            const fieldName = field.name || `field_${index}`;
                            const fieldValue = field.name ? formik.values[field.name] : undefined;
                            const fieldError = field.name ? getFieldError(field.name) : undefined;
                            const helperText = getFieldHelperText(field, fieldError);
                            const gridProps = {
                                item: true,
                                xs: field.grid?.xs || 12
                            };
                            if (field.grid?.sm !== undefined)
                                gridProps.sm = field.grid.sm;
                            if (field.grid?.md !== undefined)
                                gridProps.md = field.grid.md;
                            if (field.grid?.lg !== undefined)
                                gridProps.lg = field.grid.lg;
                            if (field.grid?.xl !== undefined)
                                gridProps.xl = field.grid.xl;
                            return (jsxRuntime.jsx(material.Grid, { ...gridProps, children: jsxRuntime.jsx(FieldRenderer, { field: field, formik: formik, value: fieldValue, error: fieldError, helperText: helperText, onChange: (value) => {
                                        if (field.name) {
                                            handleFieldChange(field.name, value, field);
                                        }
                                    } }) }, fieldName));
                        }) }), buttons.length > 0 && (jsxRuntime.jsx(material.Box, { sx: { mt: 3, display: 'flex', gap: 2, justifyContent: 'flex-end' }, children: buttons.map((button, index) => (jsxRuntime.jsx(material.Button, { type: button.type || 'button', variant: button.variant || 'contained', color: button.color || 'primary', onClick: button.onClick ? () => button.onClick(formik) : undefined, ...button.muiProps, children: button.label }, index))) }))] })] }));
};

exports.SmartFormBuilder = SmartFormBuilder;
exports.debounce = debounce;
exports.getDisplayValue = getDisplayValue;
exports.isFieldEmpty = isFieldEmpty;
exports.normalizeOptions = normalizeOptions;
//# sourceMappingURL=index.js.map
