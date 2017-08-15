require('source-map-support').install();

module.exports =
/** ****/ (function (modules) { // webpackBootstrap
/** ****/ 	// The module cache
    /** ****/ 	const installedModules = {};
/** ****/
/** ****/ 	// The require function
    /** ****/ 	function __webpack_require__(moduleId) {
/** ****/
/** ****/ 		// Check if module is in cache
        /** ****/ 		if (installedModules[moduleId])
    /** ****/ 			{ return installedModules[moduleId].exports; }
/** ****/
/** ****/ 		// Create a new module (and put it into the cache)
        /** ****/ 		const module = installedModules[moduleId] = {
            /** ****/ 			exports: {},
            /** ****/ 			id: moduleId,
            /** ****/ 			loaded: false
        /** ****/ 		};
/** ****/
/** ****/ 		// Execute the module function
        /** ****/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/** ****/
/** ****/ 		// Flag the module as loaded
        /** ****/ 		module.loaded = true;
/** ****/
/** ****/ 		// Return the exports of the module
        /** ****/ 		return module.exports;
    /** ****/ 	}
/** ****/
/** ****/
/** ****/ 	// expose the modules object (__webpack_modules__)
    /** ****/ 	__webpack_require__.m = modules;
/** ****/
/** ****/ 	// expose the module cache
    /** ****/ 	__webpack_require__.c = installedModules;
/** ****/
/** ****/ 	// __webpack_public_path__
    /** ****/ 	__webpack_require__.p = '';
/** ****/
/** ****/ 	// Load entry module and return exports
    /** ****/ 	return __webpack_require__(0);
/** ****/ }([
/* 0 */
/** */ (function (module, exports, __webpack_require__) {
    __webpack_require__(1);
    module.exports = __webpack_require__(329);
/** */ }),
/* 1 */
/** */ (function (module, exports, __webpack_require__) {
    __webpack_require__(2);

    __webpack_require__(325);

    __webpack_require__(326);

    if (global._babelPolyfill) {
	  throw new Error('only one instance of babel-polyfill is allowed');
    }
    global._babelPolyfill = true;

    const DEFINE_PROPERTY = 'defineProperty';
    function define(O, key, value) {
	  O[key] || Object[DEFINE_PROPERTY](O, key, {
	    writable: true,
	    configurable: true,
	    value
	  });
    }

    define(String.prototype, 'padLeft', ''.padStart);
    define(String.prototype, 'padRight', ''.padEnd);

    'pop,reverse,shift,keys,values,entries,indexOf,every,some,forEach,map,filter,find,findIndex,includes,join,slice,concat,push,splice,unshift,sort,lastIndexOf,reduce,reduceRight,copyWithin,fill'.split(',').forEach((key) => {
	  [][key] && define(Array, key, Function.call.bind([][key]));
    });
/** */ }),
/* 2 */
/** */ (function (module, exports, __webpack_require__) {
    __webpack_require__(3);
    __webpack_require__(52);
    __webpack_require__(53);
    __webpack_require__(54);
    __webpack_require__(55);
    __webpack_require__(57);
    __webpack_require__(60);
    __webpack_require__(61);
    __webpack_require__(62);
    __webpack_require__(63);
    __webpack_require__(64);
    __webpack_require__(65);
    __webpack_require__(66);
    __webpack_require__(67);
    __webpack_require__(68);
    __webpack_require__(70);
    __webpack_require__(72);
    __webpack_require__(74);
    __webpack_require__(76);
    __webpack_require__(79);
    __webpack_require__(80);
    __webpack_require__(81);
    __webpack_require__(85);
    __webpack_require__(87);
    __webpack_require__(89);
    __webpack_require__(92);
    __webpack_require__(93);
    __webpack_require__(94);
    __webpack_require__(95);
    __webpack_require__(97);
    __webpack_require__(98);
    __webpack_require__(99);
    __webpack_require__(100);
    __webpack_require__(101);
    __webpack_require__(102);
    __webpack_require__(103);
    __webpack_require__(105);
    __webpack_require__(106);
    __webpack_require__(107);
    __webpack_require__(109);
    __webpack_require__(110);
    __webpack_require__(111);
    __webpack_require__(113);
    __webpack_require__(115);
    __webpack_require__(116);
    __webpack_require__(117);
    __webpack_require__(118);
    __webpack_require__(119);
    __webpack_require__(120);
    __webpack_require__(121);
    __webpack_require__(122);
    __webpack_require__(123);
    __webpack_require__(124);
    __webpack_require__(125);
    __webpack_require__(126);
    __webpack_require__(127);
    __webpack_require__(132);
    __webpack_require__(133);
    __webpack_require__(137);
    __webpack_require__(138);
    __webpack_require__(139);
    __webpack_require__(140);
    __webpack_require__(142);
    __webpack_require__(143);
    __webpack_require__(144);
    __webpack_require__(145);
    __webpack_require__(146);
    __webpack_require__(147);
    __webpack_require__(148);
    __webpack_require__(149);
    __webpack_require__(150);
    __webpack_require__(151);
    __webpack_require__(152);
    __webpack_require__(153);
    __webpack_require__(154);
    __webpack_require__(155);
    __webpack_require__(156);
    __webpack_require__(158);
    __webpack_require__(159);
    __webpack_require__(161);
    __webpack_require__(162);
    __webpack_require__(168);
    __webpack_require__(169);
    __webpack_require__(171);
    __webpack_require__(172);
    __webpack_require__(173);
    __webpack_require__(177);
    __webpack_require__(178);
    __webpack_require__(179);
    __webpack_require__(180);
    __webpack_require__(181);
    __webpack_require__(183);
    __webpack_require__(184);
    __webpack_require__(185);
    __webpack_require__(186);
    __webpack_require__(189);
    __webpack_require__(191);
    __webpack_require__(192);
    __webpack_require__(193);
    __webpack_require__(195);
    __webpack_require__(197);
    __webpack_require__(199);
    __webpack_require__(200);
    __webpack_require__(201);
    __webpack_require__(203);
    __webpack_require__(204);
    __webpack_require__(205);
    __webpack_require__(206);
    __webpack_require__(216);
    __webpack_require__(220);
    __webpack_require__(221);
    __webpack_require__(223);
    __webpack_require__(224);
    __webpack_require__(228);
    __webpack_require__(229);
    __webpack_require__(231);
    __webpack_require__(232);
    __webpack_require__(233);
    __webpack_require__(234);
    __webpack_require__(235);
    __webpack_require__(236);
    __webpack_require__(237);
    __webpack_require__(238);
    __webpack_require__(239);
    __webpack_require__(240);
    __webpack_require__(241);
    __webpack_require__(242);
    __webpack_require__(243);
    __webpack_require__(244);
    __webpack_require__(245);
    __webpack_require__(246);
    __webpack_require__(247);
    __webpack_require__(248);
    __webpack_require__(249);
    __webpack_require__(251);
    __webpack_require__(252);
    __webpack_require__(253);
    __webpack_require__(254);
    __webpack_require__(255);
    __webpack_require__(257);
    __webpack_require__(258);
    __webpack_require__(259);
    __webpack_require__(261);
    __webpack_require__(262);
    __webpack_require__(263);
    __webpack_require__(264);
    __webpack_require__(265);
    __webpack_require__(266);
    __webpack_require__(267);
    __webpack_require__(268);
    __webpack_require__(270);
    __webpack_require__(271);
    __webpack_require__(273);
    __webpack_require__(274);
    __webpack_require__(275);
    __webpack_require__(276);
    __webpack_require__(279);
    __webpack_require__(280);
    __webpack_require__(282);
    __webpack_require__(283);
    __webpack_require__(284);
    __webpack_require__(285);
    __webpack_require__(287);
    __webpack_require__(288);
    __webpack_require__(289);
    __webpack_require__(290);
    __webpack_require__(291);
    __webpack_require__(292);
    __webpack_require__(293);
    __webpack_require__(294);
    __webpack_require__(295);
    __webpack_require__(296);
    __webpack_require__(298);
    __webpack_require__(299);
    __webpack_require__(300);
    __webpack_require__(301);
    __webpack_require__(302);
    __webpack_require__(303);
    __webpack_require__(304);
    __webpack_require__(305);
    __webpack_require__(306);
    __webpack_require__(307);
    __webpack_require__(308);
    __webpack_require__(310);
    __webpack_require__(311);
    __webpack_require__(312);
    __webpack_require__(313);
    __webpack_require__(314);
    __webpack_require__(315);
    __webpack_require__(316);
    __webpack_require__(317);
    __webpack_require__(318);
    __webpack_require__(319);
    __webpack_require__(320);
    __webpack_require__(323);
    __webpack_require__(324);
    module.exports = __webpack_require__(9);
/** */ }),
/* 3 */
/** */ (function (module, exports, __webpack_require__) {
	// ECMAScript 6 symbols shim
    const global = __webpack_require__(4);
    const has = __webpack_require__(5);
    const DESCRIPTORS = __webpack_require__(6);
    const $export = __webpack_require__(8);
    const redefine = __webpack_require__(18);
    const META = __webpack_require__(22).KEY;
    const $fails = __webpack_require__(7);
    const shared = __webpack_require__(23);
    const setToStringTag = __webpack_require__(24);
    const uid = __webpack_require__(19);
    const wks = __webpack_require__(25);
    const wksExt = __webpack_require__(26);
    const wksDefine = __webpack_require__(27);
    const keyOf = __webpack_require__(29);
    const enumKeys = __webpack_require__(42);
    const isArray = __webpack_require__(45);
    const anObject = __webpack_require__(12);
    const toIObject = __webpack_require__(32);
    const toPrimitive = __webpack_require__(16);
    const createDesc = __webpack_require__(17);
    const _create = __webpack_require__(46);
    const gOPNExt = __webpack_require__(49);
    const $GOPD = __webpack_require__(51);
    const $DP = __webpack_require__(11);
    const $keys = __webpack_require__(30);
    const gOPD = $GOPD.f;
    const dP = $DP.f;
    const gOPN = gOPNExt.f;
    let $Symbol = global.Symbol;
    const $JSON = global.JSON;
    const _stringify = $JSON && $JSON.stringify;
    const PROTOTYPE = 'prototype';
    const HIDDEN = wks('_hidden');
    const TO_PRIMITIVE = wks('toPrimitive');
    const isEnum = {}.propertyIsEnumerable;
    const SymbolRegistry = shared('symbol-registry');
    const AllSymbols = shared('symbols');
    const OPSymbols = shared('op-symbols');
    const ObjectProto = Object[PROTOTYPE];
    const USE_NATIVE = typeof $Symbol === 'function';
    const QObject = global.QObject;
	// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
    let setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
    const setSymbolDesc = DESCRIPTORS && $fails(() => _create(dP({}, 'a', {
	    get() { return dP(this, 'a', { value: 7 }).a; }
	  })).a != 7) ? function (it, key, D) {
	  const protoDesc = gOPD(ObjectProto, key);
	  if (protoDesc) delete ObjectProto[key];
	  dP(it, key, D);
	  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
  } : dP;

    const wrap = function (tag) {
	  const sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
	  sym._k = tag;
	  return sym;
    };

    const isSymbol = USE_NATIVE && typeof $Symbol.iterator === 'symbol' ? function (it) {
	  return typeof it === 'symbol';
    } : function (it) {
	  return it instanceof $Symbol;
    };

    var $defineProperty = function defineProperty(it, key, D) {
	  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
	  anObject(it);
	  key = toPrimitive(key, true);
	  anObject(D);
	  if (has(AllSymbols, key)) {
	    if (!D.enumerable) {
	      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
	      D = _create(D, { enumerable: createDesc(0, false) });
	    } return setSymbolDesc(it, key, D);
	  } return dP(it, key, D);
    };
    const $defineProperties = function defineProperties(it, P) {
	  anObject(it);
	  const keys = enumKeys(P = toIObject(P));
	  let i = 0;
	  const l = keys.length;
	  let key;
	  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
	  return it;
    };
    const $create = function create(it, P) {
	  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
    };
    const $propertyIsEnumerable = function propertyIsEnumerable(key) {
	  const E = isEnum.call(this, key = toPrimitive(key, true));
	  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
    };
    const $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
	  it = toIObject(it);
	  key = toPrimitive(key, true);
	  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
	  const D = gOPD(it, key);
	  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
	  return D;
    };
    const $getOwnPropertyNames = function getOwnPropertyNames(it) {
	  const names = gOPN(toIObject(it));
	  const result = [];
	  let i = 0;
	  let key;
	  while (names.length > i) {
	    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
	  } return result;
    };
    const $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
	  const IS_OP = it === ObjectProto;
	  const names = gOPN(IS_OP ? OPSymbols : toIObject(it));
	  const result = [];
	  let i = 0;
	  let key;
	  while (names.length > i) {
	    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
	  } return result;
    };

	// 19.4.1.1 Symbol([description])
    if (!USE_NATIVE) {
	  $Symbol = function Symbol() {
	    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
	    const tag = uid(arguments.length > 0 ? arguments[0] : undefined);
	    var $set = function (value) {
	      if (this === ObjectProto) $set.call(OPSymbols, value);
	      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    };
	    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
	    return wrap(tag);
	  };
	  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
	    return this._k;
	  });

	  $GOPD.f = $getOwnPropertyDescriptor;
	  $DP.f = $defineProperty;
	  __webpack_require__(50).f = gOPNExt.f = $getOwnPropertyNames;
	  __webpack_require__(44).f = $propertyIsEnumerable;
	  __webpack_require__(43).f = $getOwnPropertySymbols;

	  if (DESCRIPTORS && !__webpack_require__(28)) {
	    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }

	  wksExt.f = function (name) {
	    return wrap(wks(name));
	  };
    }

    $export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

    for (let es6Symbols = (
	  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
	).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

    for (let wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

    $export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
	  // 19.4.2.1 Symbol.for(key)
	  for(key) {
	    return has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(key) {
	    if (isSymbol(key)) return keyOf(SymbolRegistry, key);
	    throw TypeError(`${key} is not a symbol!`);
	  },
	  useSetter() { setter = true; },
	  useSimple() { setter = false; }
    });

    $export($export.S + $export.F * !USE_NATIVE, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: $create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: $defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: $defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: $getOwnPropertySymbols
    });

	// 24.3.2 JSON.stringify(value [, replacer [, space]])
    $JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(() => {
	  const S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
    })), 'JSON', {
	  stringify: function stringify(it) {
	    if (it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
	    const args = [it];
	    let i = 1;
	    let replacer,
        $replacer;
	    while (arguments.length > i) args.push(arguments[i++]);
	    replacer = args[1];
	    if (typeof replacer === 'function') $replacer = replacer;
	    if ($replacer || !isArray(replacer)) {
        replacer = function (key, value) {
	      if ($replacer) value = $replacer.call(this, key, value);
	      if (!isSymbol(value)) return value;
	    };
    }
	    args[1] = replacer;
	    return _stringify.apply($JSON, args);
	  }
    });

	// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
    $Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(10)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
    setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
    setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
    setToStringTag(global.JSON, 'JSON', true);
/** */ }),
/* 4 */
/** */ (function (module, exports) {
	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
    const global = module.exports = typeof window !== 'undefined' && window.Math == Math
	  ? window : typeof self !== 'undefined' && self.Math == Math ? self
	  // eslint-disable-next-line no-new-func
	  : Function('return this')();
    if (typeof __g === 'number') __g = global; // eslint-disable-line no-undef
/** */ }),
/* 5 */
/** */ (function (module, exports) {
    const hasOwnProperty = {}.hasOwnProperty;
    module.exports = function (it, key) {
	  return hasOwnProperty.call(it, key);
    };
/** */ }),
/* 6 */
/** */ (function (module, exports, __webpack_require__) {
	// Thank's IE8 for his funny defineProperty
    module.exports = !__webpack_require__(7)(() => Object.defineProperty({}, 'a', { get() { return 7; } }).a != 7);
/** */ }),
/* 7 */
/** */ (function (module, exports) {
    module.exports = function (exec) {
	  try {
	    return !!exec();
	  } catch (e) {
	    return true;
	  }
    };
/** */ }),
/* 8 */
/** */ (function (module, exports, __webpack_require__) {
    const global = __webpack_require__(4);
    const core = __webpack_require__(9);
    const hide = __webpack_require__(10);
    const redefine = __webpack_require__(18);
    const ctx = __webpack_require__(20);
    const PROTOTYPE = 'prototype';

    var $export = function (type, name, source) {
	  const IS_FORCED = type & $export.F;
	  const IS_GLOBAL = type & $export.G;
	  const IS_STATIC = type & $export.S;
	  const IS_PROTO = type & $export.P;
	  const IS_BIND = type & $export.B;
	  const target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
	  const exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
	  const expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
	  let key,
      own,
      out,
      exp;
	  if (IS_GLOBAL) source = name;
	  for (key in source) {
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    // export native or passed
	    out = (own ? target : source)[key];
	    // bind timers to global for call from export context
	    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out === 'function' ? ctx(Function.call, out) : out;
	    // extend global
	    if (target) redefine(target, key, out, type & $export.U);
	    // export
	    if (exports[key] != out) hide(exports, key, exp);
	    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
	  }
    };
    global.core = core;
	// type bitmap
    $export.F = 1;   // forced
    $export.G = 2;   // global
    $export.S = 4;   // static
    $export.P = 8;   // proto
    $export.B = 16;  // bind
    $export.W = 32;  // wrap
    $export.U = 64;  // safe
    $export.R = 128; // real proto method for `library`
    module.exports = $export;
/** */ }),
/* 9 */
/** */ (function (module, exports) {
    const core = module.exports = { version: '2.5.0' };
    if (typeof __e === 'number') __e = core; // eslint-disable-line no-undef
/** */ }),
/* 10 */
/** */ (function (module, exports, __webpack_require__) {
    const dP = __webpack_require__(11);
    const createDesc = __webpack_require__(17);
    module.exports = __webpack_require__(6) ? function (object, key, value) {
	  return dP.f(object, key, createDesc(1, value));
    } : function (object, key, value) {
	  object[key] = value;
	  return object;
    };
/** */ }),
/* 11 */
/** */ (function (module, exports, __webpack_require__) {
    const anObject = __webpack_require__(12);
    const IE8_DOM_DEFINE = __webpack_require__(14);
    const toPrimitive = __webpack_require__(16);
    const dP = Object.defineProperty;

    exports.f = __webpack_require__(6) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if (IE8_DOM_DEFINE) {
      try {
	    return dP(O, P, Attributes);
	  } catch (e) { /* empty */ }
  }
	  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
	  if ('value' in Attributes) O[P] = Attributes.value;
	  return O;
    };
/** */ }),
/* 12 */
/** */ (function (module, exports, __webpack_require__) {
    const isObject = __webpack_require__(13);
    module.exports = function (it) {
	  if (!isObject(it)) throw TypeError(`${it} is not an object!`);
	  return it;
    };
/** */ }),
/* 13 */
/** */ (function (module, exports) {
    module.exports = function (it) {
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
    };
/** */ }),
/* 14 */
/** */ (function (module, exports, __webpack_require__) {
    module.exports = !__webpack_require__(6) && !__webpack_require__(7)(() => Object.defineProperty(__webpack_require__(15)('div'), 'a', { get() { return 7; } }).a != 7);
/** */ }),
/* 15 */
/** */ (function (module, exports, __webpack_require__) {
    const isObject = __webpack_require__(13);
    const document = __webpack_require__(4).document;
	// typeof document.createElement is 'object' in old IE
    const is = isObject(document) && isObject(document.createElement);
    module.exports = function (it) {
	  return is ? document.createElement(it) : {};
    };
/** */ }),
/* 16 */
/** */ (function (module, exports, __webpack_require__) {
	// 7.1.1 ToPrimitive(input [, PreferredType])
    const isObject = __webpack_require__(13);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
    module.exports = function (it, S) {
	  if (!isObject(it)) return it;
	  let fn,
      val;
	  if (S && typeof (fn = it.toString) === 'function' && !isObject(val = fn.call(it))) return val;
	  if (typeof (fn = it.valueOf) === 'function' && !isObject(val = fn.call(it))) return val;
	  if (!S && typeof (fn = it.toString) === 'function' && !isObject(val = fn.call(it))) return val;
	  throw TypeError('Can\'t convert object to primitive value');
    };
/** */ }),
/* 17 */
/** */ (function (module, exports) {
    module.exports = function (bitmap, value) {
	  return {
	    enumerable: !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable: !(bitmap & 4),
	    value
	  };
    };
/** */ }),
/* 18 */
/** */ (function (module, exports, __webpack_require__) {
    const global = __webpack_require__(4);
    const hide = __webpack_require__(10);
    const has = __webpack_require__(5);
    const SRC = __webpack_require__(19)('src');
    const TO_STRING = 'toString';
    const $toString = Function[TO_STRING];
    const TPL = (`${$toString}`).split(TO_STRING);

    __webpack_require__(9).inspectSource = function (it) {
	  return $toString.call(it);
    };

    (module.exports = function (O, key, val, safe) {
	  const isFunction = typeof val === 'function';
	  if (isFunction) has(val, 'name') || hide(val, 'name', key);
	  if (O[key] === val) return;
	  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? `${O[key]}` : TPL.join(String(key)));
	  if (O === global) {
	    O[key] = val;
	  } else if (!safe) {
	    delete O[key];
	    hide(O, key, val);
	  } else if (O[key]) {
	    O[key] = val;
	  } else {
	    hide(O, key, val);
	  }
	// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
    })(Function.prototype, TO_STRING, function toString() {
	  return typeof this === 'function' && this[SRC] || $toString.call(this);
    });
/** */ }),
/* 19 */
/** */ (function (module, exports) {
    let id = 0;
    const px = Math.random();
    module.exports = function (key) {
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
    };
/** */ }),
/* 20 */
/** */ (function (module, exports, __webpack_require__) {
	// optional / simple context binding
    const aFunction = __webpack_require__(21);
    module.exports = function (fn, that, length) {
	  aFunction(fn);
	  if (that === undefined) return fn;
	  switch (length) {
	    case 1: return function (a) {
	      return fn.call(that, a);
	    };
	    case 2: return function (a, b) {
	      return fn.call(that, a, b);
	    };
	    case 3: return function (a, b, c) {
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function (/* ...args */) {
	    return fn.apply(that, arguments);
	  };
    };
/** */ }),
/* 21 */
/** */ (function (module, exports) {
    module.exports = function (it) {
	  if (typeof it !== 'function') throw TypeError(`${it} is not a function!`);
	  return it;
    };
/** */ }),
/* 22 */
/** */ (function (module, exports, __webpack_require__) {
    const META = __webpack_require__(19)('meta');
    const isObject = __webpack_require__(13);
    const has = __webpack_require__(5);
    const setDesc = __webpack_require__(11).f;
    let id = 0;
    const isExtensible = Object.isExtensible || function () {
	  return true;
    };
    const FREEZE = !__webpack_require__(7)(() => isExtensible(Object.preventExtensions({})));
    const setMeta = function (it) {
	  setDesc(it, META, { value: {
	    i: `O${++id}`, // object ID
	    w: {}          // weak collections IDs
	  } });
    };
    const fastKey = function (it, create) {
	  // return primitive with prefix
	  if (!isObject(it)) return typeof it === 'symbol' ? it : (typeof it === 'string' ? 'S' : 'P') + it;
	  if (!has(it, META)) {
	    // can't set metadata to uncaught frozen object
	    if (!isExtensible(it)) return 'F';
	    // not necessary to add metadata
	    if (!create) return 'E';
	    // add missing metadata
	    setMeta(it);
	  // return object ID
	  } return it[META].i;
    };
    const getWeak = function (it, create) {
	  if (!has(it, META)) {
	    // can't set metadata to uncaught frozen object
	    if (!isExtensible(it)) return true;
	    // not necessary to add metadata
	    if (!create) return false;
	    // add missing metadata
	    setMeta(it);
	  // return hash weak collections IDs
	  } return it[META].w;
    };
	// add metadata on freeze-family methods calling
    const onFreeze = function (it) {
	  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
	  return it;
    };
    var meta = module.exports = {
	  KEY: META,
	  NEED: false,
	  fastKey,
	  getWeak,
	  onFreeze
    };
/** */ }),
/* 23 */
/** */ (function (module, exports, __webpack_require__) {
    const global = __webpack_require__(4);
    const SHARED = '__core-js_shared__';
    const store = global[SHARED] || (global[SHARED] = {});
    module.exports = function (key) {
	  return store[key] || (store[key] = {});
    };
/** */ }),
/* 24 */
/** */ (function (module, exports, __webpack_require__) {
    const def = __webpack_require__(11).f;
    const has = __webpack_require__(5);
    const TAG = __webpack_require__(25)('toStringTag');

    module.exports = function (it, tag, stat) {
	  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
    };
/** */ }),
/* 25 */
/** */ (function (module, exports, __webpack_require__) {
    const store = __webpack_require__(23)('wks');
    const uid = __webpack_require__(19);
    const Symbol = __webpack_require__(4).Symbol;
    const USE_SYMBOL = typeof Symbol === 'function';

    const $exports = module.exports = function (name) {
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)(`Symbol.${name}`));
    };

    $exports.store = store;
/** */ }),
/* 26 */
/** */ (function (module, exports, __webpack_require__) {
    exports.f = __webpack_require__(25);
/** */ }),
/* 27 */
/** */ (function (module, exports, __webpack_require__) {
    const global = __webpack_require__(4);
    const core = __webpack_require__(9);
    const LIBRARY = __webpack_require__(28);
    const wksExt = __webpack_require__(26);
    const defineProperty = __webpack_require__(11).f;
    module.exports = function (name) {
	  const $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
	  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
    };
/** */ }),
/* 28 */
/** */ (function (module, exports) {
    module.exports = false;
/** */ }),
/* 29 */
/** */ (function (module, exports, __webpack_require__) {
    const getKeys = __webpack_require__(30);
    const toIObject = __webpack_require__(32);
    module.exports = function (object, el) {
	  const O = toIObject(object);
	  const keys = getKeys(O);
	  const length = keys.length;
	  let index = 0;
	  let key;
	  while (length > index) if (O[key = keys[index++]] === el) return key;
    };
/** */ }),
/* 30 */
/** */ (function (module, exports, __webpack_require__) {
	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
    const $keys = __webpack_require__(31);
    const enumBugKeys = __webpack_require__(41);

    module.exports = Object.keys || function keys(O) {
	  return $keys(O, enumBugKeys);
    };
/** */ }),
/* 31 */
/** */ (function (module, exports, __webpack_require__) {
    const has = __webpack_require__(5);
    const toIObject = __webpack_require__(32);
    const arrayIndexOf = __webpack_require__(36)(false);
    const IE_PROTO = __webpack_require__(40)('IE_PROTO');

    module.exports = function (object, names) {
	  const O = toIObject(object);
	  let i = 0;
	  const result = [];
	  let key;
	  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while (names.length > i) {
      if (has(O, key = names[i++])) {
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
  }
	  return result;
    };
/** */ }),
/* 32 */
/** */ (function (module, exports, __webpack_require__) {
	// to indexed object, toObject with fallback for non-array-like ES3 strings
    const IObject = __webpack_require__(33);
    const defined = __webpack_require__(35);
    module.exports = function (it) {
	  return IObject(defined(it));
    };
/** */ }),
/* 33 */
/** */ (function (module, exports, __webpack_require__) {
	// fallback for non-array-like ES3 and non-enumerable old V8 strings
    const cof = __webpack_require__(34);
	// eslint-disable-next-line no-prototype-builtins
    module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
	  return cof(it) == 'String' ? it.split('') : Object(it);
    };
/** */ }),
/* 34 */
/** */ (function (module, exports) {
    const toString = {}.toString;

    module.exports = function (it) {
	  return toString.call(it).slice(8, -1);
    };
/** */ }),
/* 35 */
/** */ (function (module, exports) {
	// 7.2.1 RequireObjectCoercible(argument)
    module.exports = function (it) {
	  if (it == undefined) throw TypeError(`Can't call method on  ${it}`);
	  return it;
    };
/** */ }),
/* 36 */
/** */ (function (module, exports, __webpack_require__) {
	// false -> Array#indexOf
	// true  -> Array#includes
    const toIObject = __webpack_require__(32);
    const toLength = __webpack_require__(37);
    const toAbsoluteIndex = __webpack_require__(39);
    module.exports = function (IS_INCLUDES) {
	  return function ($this, el, fromIndex) {
	    const O = toIObject($this);
	    const length = toLength(O.length);
	    let index = toAbsoluteIndex(fromIndex, length);
	    let value;
	    // Array#includes uses SameValueZero equality algorithm
	    // eslint-disable-next-line no-self-compare
	    if (IS_INCLUDES && el != el) {
        while (length > index) {
	      value = O[index++];
	      // eslint-disable-next-line no-self-compare
	      if (value != value) return true;
	    // Array#indexOf ignores holes, Array#includes - not
	    }
    } else {
        for (;length > index; index++) {
            if (IS_INCLUDES || index in O) {
	      if (O[index] === el) return IS_INCLUDES || index || 0;
	    }
        }
    } return !IS_INCLUDES && -1;
	  };
    };
/** */ }),
/* 37 */
/** */ (function (module, exports, __webpack_require__) {
	// 7.1.15 ToLength
    const toInteger = __webpack_require__(38);
    const min = Math.min;
    module.exports = function (it) {
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
    };
/** */ }),
/* 38 */
/** */ (function (module, exports) {
	// 7.1.4 ToInteger
    const ceil = Math.ceil;
    const floor = Math.floor;
    module.exports = function (it) {
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
    };
/** */ }),
/* 39 */
/** */ (function (module, exports, __webpack_require__) {
    const toInteger = __webpack_require__(38);
    const max = Math.max;
    const min = Math.min;
    module.exports = function (index, length) {
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
    };
/** */ }),
/* 40 */
/** */ (function (module, exports, __webpack_require__) {
    const shared = __webpack_require__(23)('keys');
    const uid = __webpack_require__(19);
    module.exports = function (key) {
	  return shared[key] || (shared[key] = uid(key));
    };
/** */ }),
/* 41 */
/** */ (function (module, exports) {
	// IE 8- don't enum bug keys
    module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');
/** */ }),
/* 42 */
/** */ (function (module, exports, __webpack_require__) {
	// all enumerable object keys, includes symbols
    const getKeys = __webpack_require__(30);
    const gOPS = __webpack_require__(43);
    const pIE = __webpack_require__(44);
    module.exports = function (it) {
	  const result = getKeys(it);
	  const getSymbols = gOPS.f;
	  if (getSymbols) {
	    const symbols = getSymbols(it);
	    const isEnum = pIE.f;
	    let i = 0;
	    let key;
	    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
	  } return result;
    };
/** */ }),
/* 43 */
/** */ (function (module, exports) {
    exports.f = Object.getOwnPropertySymbols;
/** */ }),
/* 44 */
/** */ (function (module, exports) {
    exports.f = {}.propertyIsEnumerable;
/** */ }),
/* 45 */
/** */ (function (module, exports, __webpack_require__) {
	// 7.2.2 IsArray(argument)
    const cof = __webpack_require__(34);
    module.exports = Array.isArray || function isArray(arg) {
	  return cof(arg) == 'Array';
    };
/** */ }),
/* 46 */
/** */ (function (module, exports, __webpack_require__) {
	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
    const anObject = __webpack_require__(12);
    const dPs = __webpack_require__(47);
    const enumBugKeys = __webpack_require__(41);
    const IE_PROTO = __webpack_require__(40)('IE_PROTO');
    const Empty = function () { /* empty */ };
    const PROTOTYPE = 'prototype';

	// Create object with fake `null` prototype: use iframe Object with cleared prototype
    var createDict = function () {
	  // Thrash, waste and sodomy: IE GC bug
	  const iframe = __webpack_require__(15)('iframe');
	  let i = enumBugKeys.length;
	  const lt = '<';
	  const gt = '>';
	  let iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(48).appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(`${lt}script${gt}document.F=Object${lt}/script${gt}`);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
	  return createDict();
    };

    module.exports = Object.create || function create(O, Properties) {
	  let result;
	  if (O !== null) {
	    Empty[PROTOTYPE] = anObject(O);
	    result = new Empty();
	    Empty[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO] = O;
	  } else result = createDict();
	  return Properties === undefined ? result : dPs(result, Properties);
    };
/** */ }),
/* 47 */
/** */ (function (module, exports, __webpack_require__) {
    const dP = __webpack_require__(11);
    const anObject = __webpack_require__(12);
    const getKeys = __webpack_require__(30);

    module.exports = __webpack_require__(6) ? Object.defineProperties : function defineProperties(O, Properties) {
	  anObject(O);
	  const keys = getKeys(Properties);
	  const length = keys.length;
	  let i = 0;
	  let P;
	  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
	  return O;
    };
/** */ }),
/* 48 */
/** */ (function (module, exports, __webpack_require__) {
    const document = __webpack_require__(4).document;
    module.exports = document && document.documentElement;
/** */ }),
/* 49 */
/** */ (function (module, exports, __webpack_require__) {
	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
    const toIObject = __webpack_require__(32);
    const gOPN = __webpack_require__(50).f;
    const toString = {}.toString;

    const windowNames = typeof window === 'object' && window && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];

    const getWindowNames = function (it) {
	  try {
	    return gOPN(it);
	  } catch (e) {
	    return windowNames.slice();
	  }
    };

    module.exports.f = function getOwnPropertyNames(it) {
	  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
    };
/** */ }),
/* 50 */
/** */ (function (module, exports, __webpack_require__) {
	// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
    const $keys = __webpack_require__(31);
    const hiddenKeys = __webpack_require__(41).concat('length', 'prototype');

    exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
	  return $keys(O, hiddenKeys);
    };
/** */ }),
/* 51 */
/** */ (function (module, exports, __webpack_require__) {
    const pIE = __webpack_require__(44);
    const createDesc = __webpack_require__(17);
    const toIObject = __webpack_require__(32);
    const toPrimitive = __webpack_require__(16);
    const has = __webpack_require__(5);
    const IE8_DOM_DEFINE = __webpack_require__(14);
    const gOPD = Object.getOwnPropertyDescriptor;

    exports.f = __webpack_require__(6) ? gOPD : function getOwnPropertyDescriptor(O, P) {
	  O = toIObject(O);
	  P = toPrimitive(P, true);
	  if (IE8_DOM_DEFINE) {
      try {
	    return gOPD(O, P);
	  } catch (e) { /* empty */ }
  }
	  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
    };
/** */ }),
/* 52 */
/** */ (function (module, exports, __webpack_require__) {
    const $export = __webpack_require__(8);
	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
    $export($export.S, 'Object', { create: __webpack_require__(46) });
/** */ }),
/* 53 */
/** */ (function (module, exports, __webpack_require__) {
    const $export = __webpack_require__(8);
	// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
    $export($export.S + $export.F * !__webpack_require__(6), 'Object', { defineProperty: __webpack_require__(11).f });
/** */ }),
/* 54 */
/** */ (function (module, exports, __webpack_require__) {
    const $export = __webpack_require__(8);
	// 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
    $export($export.S + $export.F * !__webpack_require__(6), 'Object', { defineProperties: __webpack_require__(47) });
/** */ }),
/* 55 */
/** */ (function (module, exports, __webpack_require__) {
	// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
    const toIObject = __webpack_require__(32);
    const $getOwnPropertyDescriptor = __webpack_require__(51).f;

    __webpack_require__(56)('getOwnPropertyDescriptor', () => function getOwnPropertyDescriptor(it, key) {
	    return $getOwnPropertyDescriptor(toIObject(it), key);
	  });
/** */ }),
/* 56 */
/** */ (function (module, exports, __webpack_require__) {
	// most Object methods by ES6 should accept primitives
    const $export = __webpack_require__(8);
    const core = __webpack_require__(9);
    const fails = __webpack_require__(7);
    module.exports = function (KEY, exec) {
	  const fn = (core.Object || {})[KEY] || Object[KEY];
	  const exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(() => { fn(1); }), 'Object', exp);
    };
/** */ }),
/* 57 */
/** */ (function (module, exports, __webpack_require__) {
	// 19.1.2.9 Object.getPrototypeOf(O)
    const toObject = __webpack_require__(58);
    const $getPrototypeOf = __webpack_require__(59);

    __webpack_require__(56)('getPrototypeOf', () => function getPrototypeOf(it) {
	    return $getPrototypeOf(toObject(it));
	  });
/** */ }),
/* 58 */
/** */ (function (module, exports, __webpack_require__) {
	// 7.1.13 ToObject(argument)
    const defined = __webpack_require__(35);
    module.exports = function (it) {
	  return Object(defined(it));
    };
/** */ }),
/* 59 */
/** */ (function (module, exports, __webpack_require__) {
	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
    const has = __webpack_require__(5);
    const toObject = __webpack_require__(58);
    const IE_PROTO = __webpack_require__(40)('IE_PROTO');
    const ObjectProto = Object.prototype;

    module.exports = Object.getPrototypeOf || function (O) {
	  O = toObject(O);
	  if (has(O, IE_PROTO)) return O[IE_PROTO];
	  if (typeof O.constructor === 'function' && O instanceof O.constructor) {
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
    };
/** */ }),
/* 60 */
/** */ (function (module, exports, __webpack_require__) {
	// 19.1.2.14 Object.keys(O)
    const toObject = __webpack_require__(58);
    const $keys = __webpack_require__(30);

    __webpack_require__(56)('keys', () => function keys(it) {
	    return $keys(toObject(it));
	  });
/** */ }),
/* 61 */
/** */ (function (module, exports, __webpack_require__) {
	// 19.1.2.7 Object.getOwnPropertyNames(O)
    __webpack_require__(56)('getOwnPropertyNames', () => __webpack_require__(49).f);
/** */ }),
/* 62 */
/** */ (function (module, exports, __webpack_require__) {
	// 19.1.2.5 Object.freeze(O)
    const isObject = __webpack_require__(13);
    const meta = __webpack_require__(22).onFreeze;

    __webpack_require__(56)('freeze', ($freeze) => function freeze(it) {
	    return $freeze && isObject(it) ? $freeze(meta(it)) : it;
	  });
/** */ }),
/* 63 */
/** */ (function (module, exports, __webpack_require__) {
	// 19.1.2.17 Object.seal(O)
    const isObject = __webpack_require__(13);
    const meta = __webpack_require__(22).onFreeze;

    __webpack_require__(56)('seal', ($seal) => function seal(it) {
	    return $seal && isObject(it) ? $seal(meta(it)) : it;
	  });
/** */ }),
/* 64 */
/** */ (function (module, exports, __webpack_require__) {
	// 19.1.2.15 Object.preventExtensions(O)
    const isObject = __webpack_require__(13);
    const meta = __webpack_require__(22).onFreeze;

    __webpack_require__(56)('preventExtensions', ($preventExtensions) => function preventExtensions(it) {
	    return $preventExtensions && isObject(it) ? $preventExtensions(meta(it)) : it;
	  });
/** */ }),
/* 65 */
/** */ (function (module, exports, __webpack_require__) {
	// 19.1.2.12 Object.isFrozen(O)
    const isObject = __webpack_require__(13);

    __webpack_require__(56)('isFrozen', ($isFrozen) => function isFrozen(it) {
	    return isObject(it) ? $isFrozen ? $isFrozen(it) : false : true;
	  });
/** */ }),
/* 66 */
/** */ (function (module, exports, __webpack_require__) {
	// 19.1.2.13 Object.isSealed(O)
    const isObject = __webpack_require__(13);

    __webpack_require__(56)('isSealed', ($isSealed) => function isSealed(it) {
	    return isObject(it) ? $isSealed ? $isSealed(it) : false : true;
	  });
/** */ }),
/* 67 */
/** */ (function (module, exports, __webpack_require__) {
	// 19.1.2.11 Object.isExtensible(O)
    const isObject = __webpack_require__(13);

    __webpack_require__(56)('isExtensible', ($isExtensible) => function isExtensible(it) {
	    return isObject(it) ? $isExtensible ? $isExtensible(it) : true : false;
	  });
/** */ }),
/* 68 */
/** */ (function (module, exports, __webpack_require__) {
	// 19.1.3.1 Object.assign(target, source)
    const $export = __webpack_require__(8);

    $export($export.S + $export.F, 'Object', { assign: __webpack_require__(69) });
/** */ }),
/* 69 */
/** */ (function (module, exports, __webpack_require__) {
	// 19.1.2.1 Object.assign(target, source, ...)
    const getKeys = __webpack_require__(30);
    const gOPS = __webpack_require__(43);
    const pIE = __webpack_require__(44);
    const toObject = __webpack_require__(58);
    const IObject = __webpack_require__(33);
    const $assign = Object.assign;

	// should work with symbols and should have deterministic property order (V8 bug)
    module.exports = !$assign || __webpack_require__(7)(() => {
	  const A = {};
	  const B = {};
	  // eslint-disable-next-line no-undef
	  const S = Symbol();
	  const K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach((k) => { B[k] = k; });
	  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
    }) ? function assign(target, source) { // eslint-disable-line no-unused-vars
	  const T = toObject(target);
	  const aLen = arguments.length;
	  let index = 1;
	  const getSymbols = gOPS.f;
	  const isEnum = pIE.f;
	  while (aLen > index) {
	    const S = IObject(arguments[index++]);
	    const keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
	    const length = keys.length;
	    let j = 0;
	    var key;
	    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
	  } return T;
    } : $assign;
/** */ }),
/* 70 */
/** */ (function (module, exports, __webpack_require__) {
	// 19.1.3.10 Object.is(value1, value2)
    const $export = __webpack_require__(8);
    $export($export.S, 'Object', { is: __webpack_require__(71) });
/** */ }),
/* 71 */
/** */ (function (module, exports) {
	// 7.2.9 SameValue(x, y)
    module.exports = Object.is || function is(x, y) {
	  // eslint-disable-next-line no-self-compare
	  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
    };
/** */ }),
/* 72 */
/** */ (function (module, exports, __webpack_require__) {
	// 19.1.3.19 Object.setPrototypeOf(O, proto)
    const $export = __webpack_require__(8);
    $export($export.S, 'Object', { setPrototypeOf: __webpack_require__(73).set });
/** */ }),
/* 73 */
/** */ (function (module, exports, __webpack_require__) {
	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
    const isObject = __webpack_require__(13);
    const anObject = __webpack_require__(12);
    const check = function (O, proto) {
	  anObject(O);
	  if (!isObject(proto) && proto !== null) throw TypeError(`${proto}: can't set as prototype!`);
    };
    module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	    (function (test, buggy, set) {
	      try {
	        set = __webpack_require__(20)(Function.call, __webpack_require__(51).f(Object.prototype, '__proto__').set, 2);
	        set(test, []);
	        buggy = !(test instanceof Array);
	      } catch (e) { buggy = true; }
	      return function setPrototypeOf(O, proto) {
	        check(O, proto);
	        if (buggy) O.__proto__ = proto;
	        else set(O, proto);
	        return O;
	      };
	    }({}, false)) : undefined),
	  check
    };
/** */ }),
/* 74 */
/** */ (function (module, exports, __webpack_require__) {
	// 19.1.3.6 Object.prototype.toString()
    const classof = __webpack_require__(75);
    const test = {};
    test[__webpack_require__(25)('toStringTag')] = 'z';
    if (`${test}` != '[object z]') {
	  __webpack_require__(18)(Object.prototype, 'toString', function toString() {
	    return `[object ${classof(this)}]`;
	  }, true);
    }
/** */ }),
/* 75 */
/** */ (function (module, exports, __webpack_require__) {
	// getting tag from 19.1.3.6 Object.prototype.toString()
    const cof = __webpack_require__(34);
    const TAG = __webpack_require__(25)('toStringTag');
	// ES3 wrong here
    const ARG = cof(function () { return arguments; }()) == 'Arguments';

	// fallback for IE11 Script Access Denied error
    const tryGet = function (it, key) {
	  try {
	    return it[key];
	  } catch (e) { /* empty */ }
    };

    module.exports = function (it) {
	  let O,
      T,
      B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = tryGet(O = Object(it), TAG)) === 'string' ? T
	    // builtinTag case
	    : ARG ? cof(O)
	    // ES3 arguments fallback
	    : (B = cof(O)) == 'Object' && typeof O.callee === 'function' ? 'Arguments' : B;
    };
/** */ }),
/* 76 */
/** */ (function (module, exports, __webpack_require__) {
	// 19.2.3.2 / 15.3.4.5 Function.prototype.bind(thisArg, args...)
    const $export = __webpack_require__(8);

    $export($export.P, 'Function', { bind: __webpack_require__(77) });
/** */ }),
/* 77 */
/** */ (function (module, exports, __webpack_require__) {
    const aFunction = __webpack_require__(21);
    const isObject = __webpack_require__(13);
    const invoke = __webpack_require__(78);
    const arraySlice = [].slice;
    const factories = {};

    const construct = function (F, len, args) {
	  if (!(len in factories)) {
	    for (var n = [], i = 0; i < len; i++) n[i] = `a[${i}]`;
	    // eslint-disable-next-line no-new-func
	    factories[len] = Function('F,a', `return new F(${n.join(',')})`);
	  } return factories[len](F, args);
    };

    module.exports = Function.bind || function bind(that /* , ...args */) {
	  const fn = aFunction(this);
	  const partArgs = arraySlice.call(arguments, 1);
	  var bound = function (/* args... */) {
	    const args = partArgs.concat(arraySlice.call(arguments));
	    return this instanceof bound ? construct(fn, args.length, args) : invoke(fn, args, that);
	  };
	  if (isObject(fn.prototype)) bound.prototype = fn.prototype;
	  return bound;
    };
/** */ }),
/* 78 */
/** */ (function (module, exports) {
	// fast apply, http://jsperf.lnkit.com/fast-apply/5
    module.exports = function (fn, args, that) {
	  const un = that === undefined;
	  switch (args.length) {
	    case 0: return un ? fn()
	                      : fn.call(that);
	    case 1: return un ? fn(args[0])
	                      : fn.call(that, args[0]);
	    case 2: return un ? fn(args[0], args[1])
	                      : fn.call(that, args[0], args[1]);
	    case 3: return un ? fn(args[0], args[1], args[2])
	                      : fn.call(that, args[0], args[1], args[2]);
	    case 4: return un ? fn(args[0], args[1], args[2], args[3])
	                      : fn.call(that, args[0], args[1], args[2], args[3]);
	  } return fn.apply(that, args);
    };
/** */ }),
/* 79 */
/** */ (function (module, exports, __webpack_require__) {
    const dP = __webpack_require__(11).f;
    const FProto = Function.prototype;
    const nameRE = /^\s*function ([^ (]*)/;
    const NAME = 'name';

	// 19.2.4.2 name
    NAME in FProto || __webpack_require__(6) && dP(FProto, NAME, {
	  configurable: true,
	  get() {
	    try {
	      return (`${this}`).match(nameRE)[1];
	    } catch (e) {
	      return '';
	    }
	  }
    });
/** */ }),
/* 80 */
/** */ (function (module, exports, __webpack_require__) {
    const isObject = __webpack_require__(13);
    const getPrototypeOf = __webpack_require__(59);
    const HAS_INSTANCE = __webpack_require__(25)('hasInstance');
    const FunctionProto = Function.prototype;
	// 19.2.3.6 Function.prototype[@@hasInstance](V)
    if (!(HAS_INSTANCE in FunctionProto)) {
        __webpack_require__(11).f(FunctionProto, HAS_INSTANCE, { value(O) {
	  if (typeof this !== 'function' || !isObject(O)) return false;
	  if (!isObject(this.prototype)) return O instanceof this;
	  // for environment w/o native `@@hasInstance` logic enough `instanceof`, but add this:
	  while (O = getPrototypeOf(O)) if (this.prototype === O) return true;
	  return false;
        } });
    }
/** */ }),
/* 81 */
/** */ (function (module, exports, __webpack_require__) {
    const $export = __webpack_require__(8);
    const $parseInt = __webpack_require__(82);
	// 18.2.5 parseInt(string, radix)
    $export($export.G + $export.F * (parseInt != $parseInt), { parseInt: $parseInt });
/** */ }),
/* 82 */
/** */ (function (module, exports, __webpack_require__) {
    const $parseInt = __webpack_require__(4).parseInt;
    const $trim = __webpack_require__(83).trim;
    const ws = __webpack_require__(84);
    const hex = /^[-+]?0[xX]/;

    module.exports = $parseInt(`${ws}08`) !== 8 || $parseInt(`${ws}0x16`) !== 22 ? function parseInt(str, radix) {
	  const string = $trim(String(str), 3);
	  return $parseInt(string, (radix >>> 0) || (hex.test(string) ? 16 : 10));
    } : $parseInt;
/** */ }),
/* 83 */
/** */ (function (module, exports, __webpack_require__) {
    const $export = __webpack_require__(8);
    const defined = __webpack_require__(35);
    const fails = __webpack_require__(7);
    const spaces = __webpack_require__(84);
    const space = `[${spaces}]`;
    const non = '\u200b\u0085';
    const ltrim = RegExp(`^${space}${space}*`);
    const rtrim = RegExp(`${space + space}*$`);

    const exporter = function (KEY, exec, ALIAS) {
	  const exp = {};
	  const FORCE = fails(() => !!spaces[KEY]() || non[KEY]() != non);
	  const fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
	  if (ALIAS) exp[ALIAS] = fn;
	  $export($export.P + $export.F * FORCE, 'String', exp);
    };

	// 1 -> String#trimLeft
	// 2 -> String#trimRight
	// 3 -> String#trim
    var trim = exporter.trim = function (string, TYPE) {
	  string = String(defined(string));
	  if (TYPE & 1) string = string.replace(ltrim, '');
	  if (TYPE & 2) string = string.replace(rtrim, '');
	  return string;
    };

    module.exports = exporter;
/** */ }),
/* 84 */
/** */ (function (module, exports) {
    module.exports = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
	  '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';
/** */ }),
/* 85 */
/** */ (function (module, exports, __webpack_require__) {
    const $export = __webpack_require__(8);
    const $parseFloat = __webpack_require__(86);
	// 18.2.4 parseFloat(string)
    $export($export.G + $export.F * (parseFloat != $parseFloat), { parseFloat: $parseFloat });
/** */ }),
/* 86 */
/** */ (function (module, exports, __webpack_require__) {
    const $parseFloat = __webpack_require__(4).parseFloat;
    const $trim = __webpack_require__(83).trim;

    module.exports = 1 / $parseFloat(`${__webpack_require__(84)}-0`) !== -Infinity ? function parseFloat(str) {
	  const string = $trim(String(str), 3);
	  const result = $parseFloat(string);
	  return result === 0 && string.charAt(0) == '-' ? -0 : result;
    } : $parseFloat;
/** */ }),
/* 87 */
/** */ (function (module, exports, __webpack_require__) {
    const global = __webpack_require__(4);
    const has = __webpack_require__(5);
    const cof = __webpack_require__(34);
    const inheritIfRequired = __webpack_require__(88);
    const toPrimitive = __webpack_require__(16);
    const fails = __webpack_require__(7);
    const gOPN = __webpack_require__(50).f;
    const gOPD = __webpack_require__(51).f;
    const dP = __webpack_require__(11).f;
    const $trim = __webpack_require__(83).trim;
    const NUMBER = 'Number';
    let $Number = global[NUMBER];
    const Base = $Number;
    const proto = $Number.prototype;
	// Opera ~12 has broken Object#toString
    const BROKEN_COF = cof(__webpack_require__(46)(proto)) == NUMBER;
    const TRIM = 'trim' in String.prototype;

	// 7.1.3 ToNumber(argument)
    const toNumber = function (argument) {
	  let it = toPrimitive(argument, false);
	  if (typeof it === 'string' && it.length > 2) {
	    it = TRIM ? it.trim() : $trim(it, 3);
	    const first = it.charCodeAt(0);
	    let third,
        radix,
        maxCode;
	    if (first === 43 || first === 45) {
	      third = it.charCodeAt(2);
	      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
	    } else if (first === 48) {
	      switch (it.charCodeAt(1)) {
	        case 66: case 98: radix = 2; maxCode = 49; break; // fast equal /^0b[01]+$/i
	        case 79: case 111: radix = 8; maxCode = 55; break; // fast equal /^0o[0-7]+$/i
	        default: return +it;
	      }
	      for (var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++) {
	        code = digits.charCodeAt(i);
	        // parseInt parses a string to a first unavailable symbol
	        // but ToNumber should return NaN if a string contains unavailable symbols
	        if (code < 48 || code > maxCode) return NaN;
	      } return parseInt(digits, radix);
	    }
	  } return +it;
    };

    if (!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')) {
	  $Number = function Number(value) {
	    const it = arguments.length < 1 ? 0 : value;
	    const that = this;
	    return that instanceof $Number
	      // check on 1..constructor(foo) case
	      && (BROKEN_COF ? fails(() => { proto.valueOf.call(that); }) : cof(that) != NUMBER)
	        ? inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it);
	  };
	  for (var keys = __webpack_require__(6) ? gOPN(Base) : (
	    // ES3:
	    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
	    // ES6 (in case, if modules with ES6 Number statics required before):
	    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
	    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
	  ).split(','), j = 0, key; keys.length > j; j++) {
	    if (has(Base, key = keys[j]) && !has($Number, key)) {
	      dP($Number, key, gOPD(Base, key));
	    }
	  }
	  $Number.prototype = proto;
	  proto.constructor = $Number;
	  __webpack_require__(18)(global, NUMBER, $Number);
    }
/** */ }),
/* 88 */
/** */ (function (module, exports, __webpack_require__) {
    const isObject = __webpack_require__(13);
    const setPrototypeOf = __webpack_require__(73).set;
    module.exports = function (that, target, C) {
	  const S = target.constructor;
	  let P;
	  if (S !== C && typeof S === 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf) {
	    setPrototypeOf(that, P);
	  } return that;
    };
/** */ }),
/* 89 */
/** */ (function (module, exports, __webpack_require__) {
    const $export = __webpack_require__(8);
    const toInteger = __webpack_require__(38);
    const aNumberValue = __webpack_require__(90);
    const repeat = __webpack_require__(91);
    const $toFixed = 1.0.toFixed;
    const floor = Math.floor;
    const data = [0, 0, 0, 0, 0, 0];
    const ERROR = 'Number.toFixed: incorrect invocation!';
    const ZERO = '0';

    const multiply = function (n, c) {
	  let i = -1;
	  let c2 = c;
	  while (++i < 6) {
	    c2 += n * data[i];
	    data[i] = c2 % 1e7;
	    c2 = floor(c2 / 1e7);
	  }
    };
    const divide = function (n) {
	  let i = 6;
	  let c = 0;
	  while (--i >= 0) {
	    c += data[i];
	    data[i] = floor(c / n);
	    c = (c % n) * 1e7;
	  }
    };
    const numToString = function () {
	  let i = 6;
	  let s = '';
	  while (--i >= 0) {
	    if (s !== '' || i === 0 || data[i] !== 0) {
	      const t = String(data[i]);
	      s = s === '' ? t : s + repeat.call(ZERO, 7 - t.length) + t;
	    }
	  } return s;
    };
    var pow = function (x, n, acc) {
	  return n === 0 ? acc : n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc);
    };
    const log = function (x) {
	  let n = 0;
	  let x2 = x;
	  while (x2 >= 4096) {
	    n += 12;
	    x2 /= 4096;
	  }
	  while (x2 >= 2) {
	    n += 1;
	    x2 /= 2;
	  } return n;
    };

    $export($export.P + $export.F * (!!$toFixed && (
	  0.00008.toFixed(3) !== '0.000' ||
	  0.9.toFixed(0) !== '1' ||
	  1.255.toFixed(2) !== '1.25' ||
	  1000000000000000128.0.toFixed(0) !== '1000000000000000128'
	) || !__webpack_require__(7)(() => {
	  // V8 ~ Android 4.3-
	  $toFixed.call({});
})), 'Number', {
	  toFixed: function toFixed(fractionDigits) {
	    let x = aNumberValue(this, ERROR);
	    const f = toInteger(fractionDigits);
	    let s = '';
	    let m = ZERO;
	    let e,
        z,
        j,
        k;
	    if (f < 0 || f > 20) throw RangeError(ERROR);
	    // eslint-disable-next-line no-self-compare
	    if (x != x) return 'NaN';
	    if (x <= -1e21 || x >= 1e21) return String(x);
	    if (x < 0) {
	      s = '-';
	      x = -x;
	    }
	    if (x > 1e-21) {
	      e = log(x * pow(2, 69, 1)) - 69;
	      z = e < 0 ? x * pow(2, -e, 1) : x / pow(2, e, 1);
	      z *= 0x10000000000000;
	      e = 52 - e;
	      if (e > 0) {
	        multiply(0, z);
	        j = f;
	        while (j >= 7) {
	          multiply(1e7, 0);
	          j -= 7;
	        }
	        multiply(pow(10, j, 1), 0);
	        j = e - 1;
	        while (j >= 23) {
	          divide(1 << 23);
	          j -= 23;
	        }
	        divide(1 << j);
	        multiply(1, 1);
	        divide(2);
	        m = numToString();
	      } else {
	        multiply(0, z);
	        multiply(1 << -e, 0);
	        m = numToString() + repeat.call(ZERO, f);
	      }
	    }
	    if (f > 0) {
	      k = m.length;
	      m = s + (k <= f ? `0.${repeat.call(ZERO, f - k)}${m}` : `${m.slice(0, k - f)}.${m.slice(k - f)}`);
	    } else {
	      m = s + m;
	    } return m;
	  }
});
/** */ }),
/* 90 */
/** */ (function (module, exports, __webpack_require__) {
    const cof = __webpack_require__(34);
    module.exports = function (it, msg) {
	  if (typeof it !== 'number' && cof(it) != 'Number') throw TypeError(msg);
	  return +it;
    };
/** */ }),
/* 91 */
/** */ (function (module, exports, __webpack_require__) {
    const toInteger = __webpack_require__(38);
    const defined = __webpack_require__(35);

    module.exports = function repeat(count) {
	  let str = String(defined(this));
	  let res = '';
	  let n = toInteger(count);
	  if (n < 0 || n == Infinity) throw RangeError('Count can\'t be negative');
	  for (;n > 0; (n >>>= 1) && (str += str)) if (n & 1) res += str;
	  return res;
    };
/** */ }),
/* 92 */
/** */ (function (module, exports, __webpack_require__) {
    const $export = __webpack_require__(8);
    const $fails = __webpack_require__(7);
    const aNumberValue = __webpack_require__(90);
    const $toPrecision = 1.0.toPrecision;

    $export($export.P + $export.F * ($fails(() =>
	  // IE7-
	   $toPrecision.call(1, undefined) !== '1') || !$fails(() => {
	  // V8 ~ Android 4.3-
	  $toPrecision.call({});
   })), 'Number', {
	  toPrecision: function toPrecision(precision) {
	    const that = aNumberValue(this, 'Number#toPrecision: incorrect invocation!');
	    return precision === undefined ? $toPrecision.call(that) : $toPrecision.call(that, precision);
	  }
   });
/** */ }),
/* 93 */
/** */ (function (module, exports, __webpack_require__) {
	// 20.1.2.1 Number.EPSILON
    const $export = __webpack_require__(8);

    $export($export.S, 'Number', { EPSILON: Math.pow(2, -52) });
/** */ }),
/* 94 */
/** */ (function (module, exports, __webpack_require__) {
	// 20.1.2.2 Number.isFinite(number)
    const $export = __webpack_require__(8);
    const _isFinite = __webpack_require__(4).isFinite;

    $export($export.S, 'Number', {
	  isFinite: function isFinite(it) {
	    return typeof it === 'number' && _isFinite(it);
	  }
    });
/** */ }),
/* 95 */
/** */ (function (module, exports, __webpack_require__) {
	// 20.1.2.3 Number.isInteger(number)
    const $export = __webpack_require__(8);

    $export($export.S, 'Number', { isInteger: __webpack_require__(96) });
/** */ }),
/* 96 */
/** */ (function (module, exports, __webpack_require__) {
	// 20.1.2.3 Number.isInteger(number)
    const isObject = __webpack_require__(13);
    const floor = Math.floor;
    module.exports = function isInteger(it) {
	  return !isObject(it) && isFinite(it) && floor(it) === it;
    };
/** */ }),
/* 97 */
/** */ (function (module, exports, __webpack_require__) {
	// 20.1.2.4 Number.isNaN(number)
    const $export = __webpack_require__(8);

    $export($export.S, 'Number', {
	  isNaN: function isNaN(number) {
	    // eslint-disable-next-line no-self-compare
	    return number != number;
	  }
    });
/** */ }),
/* 98 */
/** */ (function (module, exports, __webpack_require__) {
	// 20.1.2.5 Number.isSafeInteger(number)
    const $export = __webpack_require__(8);
    const isInteger = __webpack_require__(96);
    const abs = Math.abs;

    $export($export.S, 'Number', {
	  isSafeInteger: function isSafeInteger(number) {
	    return isInteger(number) && abs(number) <= 0x1fffffffffffff;
	  }
    });
/** */ }),
/* 99 */
/** */ (function (module, exports, __webpack_require__) {
	// 20.1.2.6 Number.MAX_SAFE_INTEGER
    const $export = __webpack_require__(8);

    $export($export.S, 'Number', { MAX_SAFE_INTEGER: 0x1fffffffffffff });
/** */ }),
/* 100 */
/** */ (function (module, exports, __webpack_require__) {
	// 20.1.2.10 Number.MIN_SAFE_INTEGER
    const $export = __webpack_require__(8);

    $export($export.S, 'Number', { MIN_SAFE_INTEGER: -0x1fffffffffffff });
/** */ }),
/* 101 */
/** */ (function (module, exports, __webpack_require__) {
    const $export = __webpack_require__(8);
    const $parseFloat = __webpack_require__(86);
	// 20.1.2.12 Number.parseFloat(string)
    $export($export.S + $export.F * (Number.parseFloat != $parseFloat), 'Number', { parseFloat: $parseFloat });
/** */ }),
/* 102 */
/** */ (function (module, exports, __webpack_require__) {
    const $export = __webpack_require__(8);
    const $parseInt = __webpack_require__(82);
	// 20.1.2.13 Number.parseInt(string, radix)
    $export($export.S + $export.F * (Number.parseInt != $parseInt), 'Number', { parseInt: $parseInt });
/** */ }),
/* 103 */
/** */ (function (module, exports, __webpack_require__) {
	// 20.2.2.3 Math.acosh(x)
    const $export = __webpack_require__(8);
    const log1p = __webpack_require__(104);
    const sqrt = Math.sqrt;
    const $acosh = Math.acosh;

    $export($export.S + $export.F * !($acosh
	  // V8 bug: https://code.google.com/p/v8/issues/detail?id=3509
	  && Math.floor($acosh(Number.MAX_VALUE)) == 710
	  // Tor Browser bug: Math.acosh(Infinity) -> NaN
	  && $acosh(Infinity) == Infinity
	), 'Math', {
	  acosh: function acosh(x) {
	    return (x = +x) < 1 ? NaN : x > 94906265.62425156
	      ? Math.log(x) + Math.LN2
	      : log1p(x - 1 + sqrt(x - 1) * sqrt(x + 1));
	  }
});
/** */ }),
/* 104 */
/** */ (function (module, exports) {
	// 20.2.2.20 Math.log1p(x)
    module.exports = Math.log1p || function log1p(x) {
	  return (x = +x) > -1e-8 && x < 1e-8 ? x - x * x / 2 : Math.log(1 + x);
    };
/** */ }),
/* 105 */
/** */ (function (module, exports, __webpack_require__) {
	// 20.2.2.5 Math.asinh(x)
    const $export = __webpack_require__(8);
    const $asinh = Math.asinh;

    function asinh(x) {
	  return !isFinite(x = +x) || x == 0 ? x : x < 0 ? -asinh(-x) : Math.log(x + Math.sqrt(x * x + 1));
    }

	// Tor Browser bug: Math.asinh(0) -> -0
    $export($export.S + $export.F * !($asinh && 1 / $asinh(0) > 0), 'Math', { asinh });
/** */ }),
/* 106 */
/** */ (function (module, exports, __webpack_require__) {
	// 20.2.2.7 Math.atanh(x)
    const $export = __webpack_require__(8);
    const $atanh = Math.atanh;

	// Tor Browser bug: Math.atanh(-0) -> 0
    $export($export.S + $export.F * !($atanh && 1 / $atanh(-0) < 0), 'Math', {
	  atanh: function atanh(x) {
	    return (x = +x) == 0 ? x : Math.log((1 + x) / (1 - x)) / 2;
	  }
    });
/** */ }),
/* 107 */
/** */ (function (module, exports, __webpack_require__) {
	// 20.2.2.9 Math.cbrt(x)
    const $export = __webpack_require__(8);
    const sign = __webpack_require__(108);

    $export($export.S, 'Math', {
	  cbrt: function cbrt(x) {
	    return sign(x = +x) * Math.pow(Math.abs(x), 1 / 3);
	  }
    });
/** */ }),
/* 108 */
/** */ (function (module, exports) {
	// 20.2.2.28 Math.sign(x)
    module.exports = Math.sign || function sign(x) {
	  // eslint-disable-next-line no-self-compare
	  return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
    };
/** */ }),
/* 109 */
/** */ (function (module, exports, __webpack_require__) {
	// 20.2.2.11 Math.clz32(x)
    const $export = __webpack_require__(8);

    $export($export.S, 'Math', {
	  clz32: function clz32(x) {
	    return (x >>>= 0) ? 31 - Math.floor(Math.log(x + 0.5) * Math.LOG2E) : 32;
	  }
    });
/** */ }),
/* 110 */
/** */ (function (module, exports, __webpack_require__) {
	// 20.2.2.12 Math.cosh(x)
    const $export = __webpack_require__(8);
    const exp = Math.exp;

    $export($export.S, 'Math', {
	  cosh: function cosh(x) {
	    return (exp(x = +x) + exp(-x)) / 2;
	  }
    });
/** */ }),
/* 111 */
/** */ (function (module, exports, __webpack_require__) {
	// 20.2.2.14 Math.expm1(x)
    const $export = __webpack_require__(8);
    const $expm1 = __webpack_require__(112);

    $export($export.S + $export.F * ($expm1 != Math.expm1), 'Math', { expm1: $expm1 });
/** */ }),
/* 112 */
/** */ (function (module, exports) {
	// 20.2.2.14 Math.expm1(x)
    const $expm1 = Math.expm1;
    module.exports = (!$expm1
	  // Old FF bug
	  || $expm1(10) > 22025.465794806719 || $expm1(10) < 22025.4657948067165168
	  // Tor Browser bug
	  || $expm1(-2e-17) != -2e-17
	) ? function expm1(x) {
	  return (x = +x) == 0 ? x : x > -1e-6 && x < 1e-6 ? x + x * x / 2 : Math.exp(x) - 1;
} : $expm1;
/** */ }),
/* 113 */
/** */ (function (module, exports, __webpack_require__) {
	// 20.2.2.16 Math.fround(x)
    const $export = __webpack_require__(8);

    $export($export.S, 'Math', { fround: __webpack_require__(114) });
/** */ }),
/* 114 */
/** */ (function (module, exports, __webpack_require__) {
	// 20.2.2.16 Math.fround(x)
    const sign = __webpack_require__(108);
    const pow = Math.pow;
    const EPSILON = pow(2, -52);
    const EPSILON32 = pow(2, -23);
    const MAX32 = pow(2, 127) * (2 - EPSILON32);
    const MIN32 = pow(2, -126);

    const roundTiesToEven = function (n) {
	  return n + 1 / EPSILON - 1 / EPSILON;
    };

    module.exports = Math.fround || function fround(x) {
	  const $abs = Math.abs(x);
	  const $sign = sign(x);
	  let a,
      result;
	  if ($abs < MIN32) return $sign * roundTiesToEven($abs / MIN32 / EPSILON32) * MIN32 * EPSILON32;
	  a = (1 + EPSILON32 / EPSILON) * $abs;
	  result = a - (a - $abs);
	  // eslint-disable-next-line no-self-compare
	  if (result > MAX32 || result != result) return $sign * Infinity;
	  return $sign * result;
    };
/** */ }),
/* 115 */
/** */ (function (module, exports, __webpack_require__) {
	// 20.2.2.17 Math.hypot([value1[, value2[, … ]]])
    const $export = __webpack_require__(8);
    const abs = Math.abs;

    $export($export.S, 'Math', {
	  hypot: function hypot(value1, value2) { // eslint-disable-line no-unused-vars
	    let sum = 0;
	    let i = 0;
	    const aLen = arguments.length;
	    let larg = 0;
	    let arg,
        div;
	    while (i < aLen) {
	      arg = abs(arguments[i++]);
	      if (larg < arg) {
	        div = larg / arg;
	        sum = sum * div * div + 1;
	        larg = arg;
	      } else if (arg > 0) {
	        div = arg / larg;
	        sum += div * div;
	      } else sum += arg;
	    }
	    return larg === Infinity ? Infinity : larg * Math.sqrt(sum);
	  }
    });
/** */ }),
/* 116 */
/** */ (function (module, exports, __webpack_require__) {
	// 20.2.2.18 Math.imul(x, y)
    const $export = __webpack_require__(8);
    const $imul = Math.imul;

	// some WebKit versions fails with big numbers, some has wrong arity
    $export($export.S + $export.F * __webpack_require__(7)(() => $imul(0xffffffff, 5) != -5 || $imul.length != 2), 'Math', {
	  imul: function imul(x, y) {
	    const UINT16 = 0xffff;
	    const xn = +x;
	    const yn = +y;
	    const xl = UINT16 & xn;
	    const yl = UINT16 & yn;
	    return 0 | xl * yl + ((UINT16 & xn >>> 16) * yl + xl * (UINT16 & yn >>> 16) << 16 >>> 0);
	  }
    });
/** */ }),
/* 117 */
/** */ (function (module, exports, __webpack_require__) {
	// 20.2.2.21 Math.log10(x)
    const $export = __webpack_require__(8);

    $export($export.S, 'Math', {
	  log10: function log10(x) {
	    return Math.log(x) * Math.LOG10E;
	  }
    });
/** */ }),
/* 118 */
/** */ (function (module, exports, __webpack_require__) {
	// 20.2.2.20 Math.log1p(x)
    const $export = __webpack_require__(8);

    $export($export.S, 'Math', { log1p: __webpack_require__(104) });
/** */ }),
/* 119 */
/** */ (function (module, exports, __webpack_require__) {
	// 20.2.2.22 Math.log2(x)
    const $export = __webpack_require__(8);

    $export($export.S, 'Math', {
	  log2: function log2(x) {
	    return Math.log(x) / Math.LN2;
	  }
    });
/** */ }),
/* 120 */
/** */ (function (module, exports, __webpack_require__) {
	// 20.2.2.28 Math.sign(x)
    const $export = __webpack_require__(8);

    $export($export.S, 'Math', { sign: __webpack_require__(108) });
/** */ }),
/* 121 */
/** */ (function (module, exports, __webpack_require__) {
	// 20.2.2.30 Math.sinh(x)
    const $export = __webpack_require__(8);
    const expm1 = __webpack_require__(112);
    const exp = Math.exp;

	// V8 near Chromium 38 has a problem with very small numbers
    $export($export.S + $export.F * __webpack_require__(7)(() => !Math.sinh(-2e-17) != -2e-17), 'Math', {
	  sinh: function sinh(x) {
	    return Math.abs(x = +x) < 1
	      ? (expm1(x) - expm1(-x)) / 2
	      : (exp(x - 1) - exp(-x - 1)) * (Math.E / 2);
	  }
    });
/** */ }),
/* 122 */
/** */ (function (module, exports, __webpack_require__) {
	// 20.2.2.33 Math.tanh(x)
    const $export = __webpack_require__(8);
    const expm1 = __webpack_require__(112);
    const exp = Math.exp;

    $export($export.S, 'Math', {
	  tanh: function tanh(x) {
	    const a = expm1(x = +x);
	    const b = expm1(-x);
	    return a == Infinity ? 1 : b == Infinity ? -1 : (a - b) / (exp(x) + exp(-x));
	  }
    });
/** */ }),
/* 123 */
/** */ (function (module, exports, __webpack_require__) {
	// 20.2.2.34 Math.trunc(x)
    const $export = __webpack_require__(8);

    $export($export.S, 'Math', {
	  trunc: function trunc(it) {
	    return (it > 0 ? Math.floor : Math.ceil)(it);
	  }
    });
/** */ }),
/* 124 */
/** */ (function (module, exports, __webpack_require__) {
    const $export = __webpack_require__(8);
    const toAbsoluteIndex = __webpack_require__(39);
    const fromCharCode = String.fromCharCode;
    const $fromCodePoint = String.fromCodePoint;

	// length should be 1, old FF problem
    $export($export.S + $export.F * (!!$fromCodePoint && $fromCodePoint.length != 1), 'String', {
	  // 21.1.2.2 String.fromCodePoint(...codePoints)
	  fromCodePoint: function fromCodePoint(x) { // eslint-disable-line no-unused-vars
	    const res = [];
	    const aLen = arguments.length;
	    let i = 0;
	    let code;
	    while (aLen > i) {
	      code = +arguments[i++];
	      if (toAbsoluteIndex(code, 0x10ffff) !== code) throw RangeError(`${code} is not a valid code point`);
	      res.push(code < 0x10000
	        ? fromCharCode(code)
	        : fromCharCode(((code -= 0x10000) >> 10) + 0xd800, code % 0x400 + 0xdc00)
	      );
	    } return res.join('');
	  }
    });
/** */ }),
/* 125 */
/** */ (function (module, exports, __webpack_require__) {
    const $export = __webpack_require__(8);
    const toIObject = __webpack_require__(32);
    const toLength = __webpack_require__(37);

    $export($export.S, 'String', {
	  // 21.1.2.4 String.raw(callSite, ...substitutions)
	  raw: function raw(callSite) {
	    const tpl = toIObject(callSite.raw);
	    const len = toLength(tpl.length);
	    const aLen = arguments.length;
	    const res = [];
	    let i = 0;
	    while (len > i) {
	      res.push(String(tpl[i++]));
	      if (i < aLen) res.push(String(arguments[i]));
	    } return res.join('');
	  }
    });
/** */ }),
/* 126 */
/** */ (function (module, exports, __webpack_require__) {
	// 21.1.3.25 String.prototype.trim()
    __webpack_require__(83)('trim', ($trim) => function trim() {
	    return $trim(this, 3);
	  });
/** */ }),
/* 127 */
/** */ (function (module, exports, __webpack_require__) {
    const $at = __webpack_require__(128)(true);

	// 21.1.3.27 String.prototype[@@iterator]()
    __webpack_require__(129)(String, 'String', function (iterated) {
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
    }, function () {
	  const O = this._t;
	  const index = this._i;
	  let point;
	  if (index >= O.length) return { value: undefined, done: true };
	  point = $at(O, index);
	  this._i += point.length;
	  return { value: point, done: false };
    });
/** */ }),
/* 128 */
/** */ (function (module, exports, __webpack_require__) {
    const toInteger = __webpack_require__(38);
    const defined = __webpack_require__(35);
	// true  -> String#at
	// false -> String#codePointAt
    module.exports = function (TO_STRING) {
	  return function (that, pos) {
	    const s = String(defined(that));
	    const i = toInteger(pos);
	    const l = s.length;
	    let a,
        b;
	    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
    };
/** */ }),
/* 129 */
/** */ (function (module, exports, __webpack_require__) {
    const LIBRARY = __webpack_require__(28);
    const $export = __webpack_require__(8);
    const redefine = __webpack_require__(18);
    const hide = __webpack_require__(10);
    const has = __webpack_require__(5);
    const Iterators = __webpack_require__(130);
    const $iterCreate = __webpack_require__(131);
    const setToStringTag = __webpack_require__(24);
    const getPrototypeOf = __webpack_require__(59);
    const ITERATOR = __webpack_require__(25)('iterator');
    const BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
    const FF_ITERATOR = '@@iterator';
    const KEYS = 'keys';
    const VALUES = 'values';

    const returnThis = function () { return this; };

    module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
	  $iterCreate(Constructor, NAME, next);
	  const getMethod = function (kind) {
	    if (!BUGGY && kind in proto) return proto[kind];
	    switch (kind) {
	      case KEYS: return function keys() { return new Constructor(this, kind); };
	      case VALUES: return function values() { return new Constructor(this, kind); };
	    } return function entries() { return new Constructor(this, kind); };
	  };
	  const TAG = `${NAME} Iterator`;
	  const DEF_VALUES = DEFAULT == VALUES;
	  let VALUES_BUG = false;
	  var proto = Base.prototype;
	  const $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
	  let $default = $native || getMethod(DEFAULT);
	  const $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
	  const $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
	  let methods,
      key,
      IteratorPrototype;
	  // Fix native
	  if ($anyNative) {
	    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
	    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
	      // Set @@toStringTag to native iterators
	      setToStringTag(IteratorPrototype, TAG, true);
	      // fix for some old engines
	      if (!LIBRARY && !has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if (DEF_VALUES && $native && $native.name !== VALUES) {
	    VALUES_BUG = true;
	    $default = function values() { return $native.call(this); };
	  }
	  // Define iterator
	  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG] = returnThis;
	  if (DEFAULT) {
	    methods = {
	      values: DEF_VALUES ? $default : getMethod(VALUES),
	      keys: IS_SET ? $default : getMethod(KEYS),
	      entries: $entries
	    };
	    if (FORCED) {
        for (key in methods) {
	      if (!(key in proto)) redefine(proto, key, methods[key]);
	    }
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
    };
/** */ }),
/* 130 */
/** */ (function (module, exports) {
    module.exports = {};
/** */ }),
/* 131 */
/** */ (function (module, exports, __webpack_require__) {
    const create = __webpack_require__(46);
    const descriptor = __webpack_require__(17);
    const setToStringTag = __webpack_require__(24);
    const IteratorPrototype = {};

	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
    __webpack_require__(10)(IteratorPrototype, __webpack_require__(25)('iterator'), function () { return this; });

    module.exports = function (Constructor, NAME, next) {
	  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
	  setToStringTag(Constructor, `${NAME} Iterator`);
    };
/** */ }),
/* 132 */
/** */ (function (module, exports, __webpack_require__) {
    const $export = __webpack_require__(8);
    const $at = __webpack_require__(128)(false);
    $export($export.P, 'String', {
	  // 21.1.3.3 String.prototype.codePointAt(pos)
	  codePointAt: function codePointAt(pos) {
	    return $at(this, pos);
	  }
    });
/** */ }),
/* 133 */
/** */ (function (module, exports, __webpack_require__) {
	// 21.1.3.6 String.prototype.endsWith(searchString [, endPosition])

    const $export = __webpack_require__(8);
    const toLength = __webpack_require__(37);
    const context = __webpack_require__(134);
    const ENDS_WITH = 'endsWith';
    const $endsWith = ''[ENDS_WITH];

    $export($export.P + $export.F * __webpack_require__(136)(ENDS_WITH), 'String', {
	  endsWith: function endsWith(searchString /* , endPosition = @length */) {
	    const that = context(this, searchString, ENDS_WITH);
	    const endPosition = arguments.length > 1 ? arguments[1] : undefined;
	    const len = toLength(that.length);
	    const end = endPosition === undefined ? len : Math.min(toLength(endPosition), len);
	    const search = String(searchString);
	    return $endsWith
	      ? $endsWith.call(that, search, end)
	      : that.slice(end - search.length, end) === search;
	  }
    });
/** */ }),
/* 134 */
/** */ (function (module, exports, __webpack_require__) {
	// helper for String#{startsWith, endsWith, includes}
    const isRegExp = __webpack_require__(135);
    const defined = __webpack_require__(35);

    module.exports = function (that, searchString, NAME) {
	  if (isRegExp(searchString)) throw TypeError(`String#${NAME} doesn't accept regex!`);
	  return String(defined(that));
    };
/** */ }),
/* 135 */
/** */ (function (module, exports, __webpack_require__) {
	// 7.2.8 IsRegExp(argument)
    const isObject = __webpack_require__(13);
    const cof = __webpack_require__(34);
    const MATCH = __webpack_require__(25)('match');
    module.exports = function (it) {
	  let isRegExp;
	  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
    };
/** */ }),
/* 136 */
/** */ (function (module, exports, __webpack_require__) {
    const MATCH = __webpack_require__(25)('match');
    module.exports = function (KEY) {
	  const re = /./;
	  try {
	    '/./'[KEY](re);
	  } catch (e) {
	    try {
	      re[MATCH] = false;
	      return !'/./'[KEY](re);
	    } catch (f) { /* empty */ }
	  } return true;
    };
/** */ }),
/* 137 */
/** */ (function (module, exports, __webpack_require__) {
	// 21.1.3.7 String.prototype.includes(searchString, position = 0)

    const $export = __webpack_require__(8);
    const context = __webpack_require__(134);
    const INCLUDES = 'includes';

    $export($export.P + $export.F * __webpack_require__(136)(INCLUDES), 'String', {
	  includes: function includes(searchString /* , position = 0 */) {
	    return !!~context(this, searchString, INCLUDES)
	      .indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
	  }
    });
/** */ }),
/* 138 */
/** */ (function (module, exports, __webpack_require__) {
    const $export = __webpack_require__(8);

    $export($export.P, 'String', {
	  // 21.1.3.13 String.prototype.repeat(count)
	  repeat: __webpack_require__(91)
    });
/** */ }),
/* 139 */
/** */ (function (module, exports, __webpack_require__) {
	// 21.1.3.18 String.prototype.startsWith(searchString [, position ])

    const $export = __webpack_require__(8);
    const toLength = __webpack_require__(37);
    const context = __webpack_require__(134);
    const STARTS_WITH = 'startsWith';
    const $startsWith = ''[STARTS_WITH];

    $export($export.P + $export.F * __webpack_require__(136)(STARTS_WITH), 'String', {
	  startsWith: function startsWith(searchString /* , position = 0 */) {
	    const that = context(this, searchString, STARTS_WITH);
	    const index = toLength(Math.min(arguments.length > 1 ? arguments[1] : undefined, that.length));
	    const search = String(searchString);
	    return $startsWith
	      ? $startsWith.call(that, search, index)
	      : that.slice(index, index + search.length) === search;
	  }
    });
/** */ }),
/* 140 */
/** */ (function (module, exports, __webpack_require__) {
	// B.2.3.2 String.prototype.anchor(name)
    __webpack_require__(141)('anchor', (createHTML) => function anchor(name) {
	    return createHTML(this, 'a', 'name', name);
	  });
/** */ }),
/* 141 */
/** */ (function (module, exports, __webpack_require__) {
    const $export = __webpack_require__(8);
    const fails = __webpack_require__(7);
    const defined = __webpack_require__(35);
    const quot = /"/g;
	// B.2.3.2.1 CreateHTML(string, tag, attribute, value)
    const createHTML = function (string, tag, attribute, value) {
	  const S = String(defined(string));
	  let p1 = `<${tag}`;
	  if (attribute !== '') p1 += ` ${attribute}="${String(value).replace(quot, '&quot;')}"`;
	  return `${p1}>${S}</${tag}>`;
    };
    module.exports = function (NAME, exec) {
	  const O = {};
	  O[NAME] = exec(createHTML);
	  $export($export.P + $export.F * fails(() => {
	    const test = ''[NAME]('"');
	    return test !== test.toLowerCase() || test.split('"').length > 3;
	  }), 'String', O);
    };
/** */ }),
/* 142 */
/** */ (function (module, exports, __webpack_require__) {
	// B.2.3.3 String.prototype.big()
    __webpack_require__(141)('big', (createHTML) => function big() {
	    return createHTML(this, 'big', '', '');
	  });
/** */ }),
/* 143 */
/** */ (function (module, exports, __webpack_require__) {
	// B.2.3.4 String.prototype.blink()
    __webpack_require__(141)('blink', (createHTML) => function blink() {
	    return createHTML(this, 'blink', '', '');
	  });
/** */ }),
/* 144 */
/** */ (function (module, exports, __webpack_require__) {
	// B.2.3.5 String.prototype.bold()
    __webpack_require__(141)('bold', (createHTML) => function bold() {
	    return createHTML(this, 'b', '', '');
	  });
/** */ }),
/* 145 */
/** */ (function (module, exports, __webpack_require__) {
	// B.2.3.6 String.prototype.fixed()
    __webpack_require__(141)('fixed', (createHTML) => function fixed() {
	    return createHTML(this, 'tt', '', '');
	  });
/** */ }),
/* 146 */
/** */ (function (module, exports, __webpack_require__) {
	// B.2.3.7 String.prototype.fontcolor(color)
    __webpack_require__(141)('fontcolor', (createHTML) => function fontcolor(color) {
	    return createHTML(this, 'font', 'color', color);
	  });
/** */ }),
/* 147 */
/** */ (function (module, exports, __webpack_require__) {
	// B.2.3.8 String.prototype.fontsize(size)
    __webpack_require__(141)('fontsize', (createHTML) => function fontsize(size) {
	    return createHTML(this, 'font', 'size', size);
	  });
/** */ }),
/* 148 */
/** */ (function (module, exports, __webpack_require__) {
	// B.2.3.9 String.prototype.italics()
    __webpack_require__(141)('italics', (createHTML) => function italics() {
	    return createHTML(this, 'i', '', '');
	  });
/** */ }),
/* 149 */
/** */ (function (module, exports, __webpack_require__) {
	// B.2.3.10 String.prototype.link(url)
    __webpack_require__(141)('link', (createHTML) => function link(url) {
	    return createHTML(this, 'a', 'href', url);
	  });
/** */ }),
/* 150 */
/** */ (function (module, exports, __webpack_require__) {
	// B.2.3.11 String.prototype.small()
    __webpack_require__(141)('small', (createHTML) => function small() {
	    return createHTML(this, 'small', '', '');
	  });
/** */ }),
/* 151 */
/** */ (function (module, exports, __webpack_require__) {
	// B.2.3.12 String.prototype.strike()
    __webpack_require__(141)('strike', (createHTML) => function strike() {
	    return createHTML(this, 'strike', '', '');
	  });
/** */ }),
/* 152 */
/** */ (function (module, exports, __webpack_require__) {
	// B.2.3.13 String.prototype.sub()
    __webpack_require__(141)('sub', (createHTML) => function sub() {
	    return createHTML(this, 'sub', '', '');
	  });
/** */ }),
/* 153 */
/** */ (function (module, exports, __webpack_require__) {
	// B.2.3.14 String.prototype.sup()
    __webpack_require__(141)('sup', (createHTML) => function sup() {
	    return createHTML(this, 'sup', '', '');
	  });
/** */ }),
/* 154 */
/** */ (function (module, exports, __webpack_require__) {
	// 20.3.3.1 / 15.9.4.4 Date.now()
    const $export = __webpack_require__(8);

    $export($export.S, 'Date', { now() { return new Date().getTime(); } });
/** */ }),
/* 155 */
/** */ (function (module, exports, __webpack_require__) {
    const $export = __webpack_require__(8);
    const toObject = __webpack_require__(58);
    const toPrimitive = __webpack_require__(16);

    $export($export.P + $export.F * __webpack_require__(7)(() => new Date(NaN).toJSON() !== null
	    || Date.prototype.toJSON.call({ toISOString() { return 1; } }) !== 1), 'Date', {
	  // eslint-disable-next-line no-unused-vars
	  toJSON: function toJSON(key) {
	    const O = toObject(this);
	    const pv = toPrimitive(O);
	    return typeof pv === 'number' && !isFinite(pv) ? null : O.toISOString();
	  }
    });
/** */ }),
/* 156 */
/** */ (function (module, exports, __webpack_require__) {
	// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()
    const $export = __webpack_require__(8);
    const toISOString = __webpack_require__(157);

	// PhantomJS / old WebKit has a broken implementations
    $export($export.P + $export.F * (Date.prototype.toISOString !== toISOString), 'Date', {
	  toISOString
    });
/** */ }),
/* 157 */
/** */ (function (module, exports, __webpack_require__) {
	// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()
    const fails = __webpack_require__(7);
    const getTime = Date.prototype.getTime;
    const $toISOString = Date.prototype.toISOString;

    const lz = function (num) {
	  return num > 9 ? num : `0${num}`;
    };

	// PhantomJS / old WebKit has a broken implementations
    module.exports = (fails(() => $toISOString.call(new Date(-5e13 - 1)) != '0385-07-25T07:06:39.999Z') || !fails(() => {
	  $toISOString.call(new Date(NaN));
    })) ? function toISOString() {
	  if (!isFinite(getTime.call(this))) throw RangeError('Invalid time value');
	  const d = this;
	  const y = d.getUTCFullYear();
	  const m = d.getUTCMilliseconds();
	  const s = y < 0 ? '-' : y > 9999 ? '+' : '';
	  return `${s + (`00000${Math.abs(y)}`).slice(s ? -6 : -4)
	    }-${lz(d.getUTCMonth() + 1)}-${lz(d.getUTCDate())
	    }T${lz(d.getUTCHours())}:${lz(d.getUTCMinutes())
	    }:${lz(d.getUTCSeconds())}.${m > 99 ? m : `0${lz(m)}`}Z`;
    } : $toISOString;
/** */ }),
/* 158 */
/** */ (function (module, exports, __webpack_require__) {
    const DateProto = Date.prototype;
    const INVALID_DATE = 'Invalid Date';
    const TO_STRING = 'toString';
    const $toString = DateProto[TO_STRING];
    const getTime = DateProto.getTime;
    if (`${new Date(NaN)}` != INVALID_DATE) {
	  __webpack_require__(18)(DateProto, TO_STRING, function toString() {
	    const value = getTime.call(this);
	    // eslint-disable-next-line no-self-compare
	    return value === value ? $toString.call(this) : INVALID_DATE;
	  });
    }
/** */ }),
/* 159 */
/** */ (function (module, exports, __webpack_require__) {
    const TO_PRIMITIVE = __webpack_require__(25)('toPrimitive');
    const proto = Date.prototype;

    if (!(TO_PRIMITIVE in proto)) __webpack_require__(10)(proto, TO_PRIMITIVE, __webpack_require__(160));
/** */ }),
/* 160 */
/** */ (function (module, exports, __webpack_require__) {
    const anObject = __webpack_require__(12);
    const toPrimitive = __webpack_require__(16);
    const NUMBER = 'number';

    module.exports = function (hint) {
	  if (hint !== 'string' && hint !== NUMBER && hint !== 'default') throw TypeError('Incorrect hint');
	  return toPrimitive(anObject(this), hint != NUMBER);
    };
/** */ }),
/* 161 */
/** */ (function (module, exports, __webpack_require__) {
	// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
    const $export = __webpack_require__(8);

    $export($export.S, 'Array', { isArray: __webpack_require__(45) });
/** */ }),
/* 162 */
/** */ (function (module, exports, __webpack_require__) {
    const ctx = __webpack_require__(20);
    const $export = __webpack_require__(8);
    const toObject = __webpack_require__(58);
    const call = __webpack_require__(163);
    const isArrayIter = __webpack_require__(164);
    const toLength = __webpack_require__(37);
    const createProperty = __webpack_require__(165);
    const getIterFn = __webpack_require__(166);

    $export($export.S + $export.F * !__webpack_require__(167)((iter) => { Array.from(iter); }), 'Array', {
	  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
	  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
	    const O = toObject(arrayLike);
	    const C = typeof this === 'function' ? this : Array;
	    const aLen = arguments.length;
	    let mapfn = aLen > 1 ? arguments[1] : undefined;
	    const mapping = mapfn !== undefined;
	    let index = 0;
	    const iterFn = getIterFn(O);
	    let length,
        result,
        step,
        iterator;
	    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
	    // if object isn't iterable or it's array with default iterator - use simple case
	    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
	      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
	        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
	      }
	    } else {
	      length = toLength(O.length);
	      for (result = new C(length); length > index; index++) {
	        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
	      }
	    }
	    result.length = index;
	    return result;
	  }
    });
/** */ }),
/* 163 */
/** */ (function (module, exports, __webpack_require__) {
	// call something on iterator step with safe closing on error
    const anObject = __webpack_require__(12);
    module.exports = function (iterator, fn, value, entries) {
	  try {
	    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
	  // 7.4.6 IteratorClose(iterator, completion)
	  } catch (e) {
	    const ret = iterator.return;
	    if (ret !== undefined) anObject(ret.call(iterator));
	    throw e;
	  }
    };
/** */ }),
/* 164 */
/** */ (function (module, exports, __webpack_require__) {
	// check on default Array iterator
    const Iterators = __webpack_require__(130);
    const ITERATOR = __webpack_require__(25)('iterator');
    const ArrayProto = Array.prototype;

    module.exports = function (it) {
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
    };
/** */ }),
/* 165 */
/** */ (function (module, exports, __webpack_require__) {
    const $defineProperty = __webpack_require__(11);
    const createDesc = __webpack_require__(17);

    module.exports = function (object, index, value) {
	  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
	  else object[index] = value;
    };
/** */ }),
/* 166 */
/** */ (function (module, exports, __webpack_require__) {
    const classof = __webpack_require__(75);
    const ITERATOR = __webpack_require__(25)('iterator');
    const Iterators = __webpack_require__(130);
    module.exports = __webpack_require__(9).getIteratorMethod = function (it) {
	  if (it != undefined) {
      return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
  }
    };
/** */ }),
/* 167 */
/** */ (function (module, exports, __webpack_require__) {
    const ITERATOR = __webpack_require__(25)('iterator');
    let SAFE_CLOSING = false;

    try {
	  const riter = [7][ITERATOR]();
	  riter.return = function () { SAFE_CLOSING = true; };
	  // eslint-disable-next-line no-throw-literal
	  Array.from(riter, () => { throw 2; });
    } catch (e) { /* empty */ }

    module.exports = function (exec, skipClosing) {
	  if (!skipClosing && !SAFE_CLOSING) return false;
	  let safe = false;
	  try {
	    const arr = [7];
	    const iter = arr[ITERATOR]();
	    iter.next = function () { return { done: safe = true }; };
	    arr[ITERATOR] = function () { return iter; };
	    exec(arr);
	  } catch (e) { /* empty */ }
	  return safe;
    };
/** */ }),
/* 168 */
/** */ (function (module, exports, __webpack_require__) {
    const $export = __webpack_require__(8);
    const createProperty = __webpack_require__(165);

	// WebKit Array.of isn't generic
    $export($export.S + $export.F * __webpack_require__(7)(() => {
	  function F() { /* empty */ }
	  return !(Array.of.call(F) instanceof F);
    }), 'Array', {
	  // 22.1.2.3 Array.of( ...items)
	  of: function of(/* ...args */) {
	    let index = 0;
	    const aLen = arguments.length;
	    const result = new (typeof this === 'function' ? this : Array)(aLen);
	    while (aLen > index) createProperty(result, index, arguments[index++]);
	    result.length = aLen;
	    return result;
	  }
    });
/** */ }),
/* 169 */
/** */ (function (module, exports, __webpack_require__) {
	// 22.1.3.13 Array.prototype.join(separator)
    const $export = __webpack_require__(8);
    const toIObject = __webpack_require__(32);
    const arrayJoin = [].join;

	// fallback for not array-like strings
    $export($export.P + $export.F * (__webpack_require__(33) != Object || !__webpack_require__(170)(arrayJoin)), 'Array', {
	  join: function join(separator) {
	    return arrayJoin.call(toIObject(this), separator === undefined ? ',' : separator);
	  }
    });
/** */ }),
/* 170 */
/** */ (function (module, exports, __webpack_require__) {
    const fails = __webpack_require__(7);

    module.exports = function (method, arg) {
	  return !!method && fails(() => {
	    // eslint-disable-next-line no-useless-call
	    arg ? method.call(null, () => { /* empty */ }, 1) : method.call(null);
	  });
    };
/** */ }),
/* 171 */
/** */ (function (module, exports, __webpack_require__) {
    const $export = __webpack_require__(8);
    const html = __webpack_require__(48);
    const cof = __webpack_require__(34);
    const toAbsoluteIndex = __webpack_require__(39);
    const toLength = __webpack_require__(37);
    const arraySlice = [].slice;

	// fallback for not array-like ES3 strings and DOM objects
    $export($export.P + $export.F * __webpack_require__(7)(() => {
	  if (html) arraySlice.call(html);
    }), 'Array', {
	  slice: function slice(begin, end) {
	    const len = toLength(this.length);
	    const klass = cof(this);
	    end = end === undefined ? len : end;
	    if (klass == 'Array') return arraySlice.call(this, begin, end);
	    const start = toAbsoluteIndex(begin, len);
	    const upTo = toAbsoluteIndex(end, len);
	    const size = toLength(upTo - start);
	    const cloned = Array(size);
	    let i = 0;
	    for (; i < size; i++) {
        cloned[i] = klass == 'String'
	      ? this.charAt(start + i)
	      : this[start + i];
    }
	    return cloned;
	  }
    });
/** */ }),
/* 172 */
/** */ (function (module, exports, __webpack_require__) {
    const $export = __webpack_require__(8);
    const aFunction = __webpack_require__(21);
    const toObject = __webpack_require__(58);
    const fails = __webpack_require__(7);
    const $sort = [].sort;
    const test = [1, 2, 3];

    $export($export.P + $export.F * (fails(() => {
	  // IE8-
	  test.sort(undefined);
    }) || !fails(() => {
	  // V8 bug
	  test.sort(null);
	  // Old WebKit
    }) || !__webpack_require__(170)($sort)), 'Array', {
	  // 22.1.3.25 Array.prototype.sort(comparefn)
	  sort: function sort(comparefn) {
	    return comparefn === undefined
	      ? $sort.call(toObject(this))
	      : $sort.call(toObject(this), aFunction(comparefn));
	  }
    });
/** */ }),
/* 173 */
/** */ (function (module, exports, __webpack_require__) {
    const $export = __webpack_require__(8);
    const $forEach = __webpack_require__(174)(0);
    const STRICT = __webpack_require__(170)([].forEach, true);

    $export($export.P + $export.F * !STRICT, 'Array', {
	  // 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])
	  forEach: function forEach(callbackfn /* , thisArg */) {
	    return $forEach(this, callbackfn, arguments[1]);
	  }
    });
/** */ }),
/* 174 */
/** */ (function (module, exports, __webpack_require__) {
	// 0 -> Array#forEach
	// 1 -> Array#map
	// 2 -> Array#filter
	// 3 -> Array#some
	// 4 -> Array#every
	// 5 -> Array#find
	// 6 -> Array#findIndex
    const ctx = __webpack_require__(20);
    const IObject = __webpack_require__(33);
    const toObject = __webpack_require__(58);
    const toLength = __webpack_require__(37);
    const asc = __webpack_require__(175);
    module.exports = function (TYPE, $create) {
	  const IS_MAP = TYPE == 1;
	  const IS_FILTER = TYPE == 2;
	  const IS_SOME = TYPE == 3;
	  const IS_EVERY = TYPE == 4;
	  const IS_FIND_INDEX = TYPE == 6;
	  const NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
	  const create = $create || asc;
	  return function ($this, callbackfn, that) {
	    const O = toObject($this);
	    const self = IObject(O);
	    const f = ctx(callbackfn, that, 3);
	    const length = toLength(self.length);
	    let index = 0;
	    const result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
	    let val,
        res;
	    for (;length > index; index++) {
        if (NO_HOLES || index in self) {
	      val = self[index];
	      res = f(val, index, O);
	      if (TYPE) {
	        if (IS_MAP) result[index] = res;   // map
	        else if (res) {
            switch (TYPE) {
	          case 3: return true;             // some
	          case 5: return val;              // find
	          case 6: return index;            // findIndex
	          case 2: result.push(val);        // filter
	        }
        } else if (IS_EVERY) return false; // every
	      }
	    }
    }
	    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
	  };
    };
/** */ }),
/* 175 */
/** */ (function (module, exports, __webpack_require__) {
	// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
    const speciesConstructor = __webpack_require__(176);

    module.exports = function (original, length) {
	  return new (speciesConstructor(original))(length);
    };
/** */ }),
/* 176 */
/** */ (function (module, exports, __webpack_require__) {
    const isObject = __webpack_require__(13);
    const isArray = __webpack_require__(45);
    const SPECIES = __webpack_require__(25)('species');

    module.exports = function (original) {
	  let C;
	  if (isArray(original)) {
	    C = original.constructor;
	    // cross-realm fallback
	    if (typeof C === 'function' && (C === Array || isArray(C.prototype))) C = undefined;
	    if (isObject(C)) {
	      C = C[SPECIES];
	      if (C === null) C = undefined;
	    }
	  } return C === undefined ? Array : C;
    };
/** */ }),
/* 177 */
/** */ (function (module, exports, __webpack_require__) {
    const $export = __webpack_require__(8);
    const $map = __webpack_require__(174)(1);

    $export($export.P + $export.F * !__webpack_require__(170)([].map, true), 'Array', {
	  // 22.1.3.15 / 15.4.4.19 Array.prototype.map(callbackfn [, thisArg])
	  map: function map(callbackfn /* , thisArg */) {
	    return $map(this, callbackfn, arguments[1]);
	  }
    });
/** */ }),
/* 178 */
/** */ (function (module, exports, __webpack_require__) {
    const $export = __webpack_require__(8);
    const $filter = __webpack_require__(174)(2);

    $export($export.P + $export.F * !__webpack_require__(170)([].filter, true), 'Array', {
	  // 22.1.3.7 / 15.4.4.20 Array.prototype.filter(callbackfn [, thisArg])
	  filter: function filter(callbackfn /* , thisArg */) {
	    return $filter(this, callbackfn, arguments[1]);
	  }
    });
/** */ }),
/* 179 */
/** */ (function (module, exports, __webpack_require__) {
    const $export = __webpack_require__(8);
    const $some = __webpack_require__(174)(3);

    $export($export.P + $export.F * !__webpack_require__(170)([].some, true), 'Array', {
	  // 22.1.3.23 / 15.4.4.17 Array.prototype.some(callbackfn [, thisArg])
	  some: function some(callbackfn /* , thisArg */) {
	    return $some(this, callbackfn, arguments[1]);
	  }
    });
/** */ }),
/* 180 */
/** */ (function (module, exports, __webpack_require__) {
    const $export = __webpack_require__(8);
    const $every = __webpack_require__(174)(4);

    $export($export.P + $export.F * !__webpack_require__(170)([].every, true), 'Array', {
	  // 22.1.3.5 / 15.4.4.16 Array.prototype.every(callbackfn [, thisArg])
	  every: function every(callbackfn /* , thisArg */) {
	    return $every(this, callbackfn, arguments[1]);
	  }
    });
/** */ }),
/* 181 */
/** */ (function (module, exports, __webpack_require__) {
    const $export = __webpack_require__(8);
    const $reduce = __webpack_require__(182);

    $export($export.P + $export.F * !__webpack_require__(170)([].reduce, true), 'Array', {
	  // 22.1.3.18 / 15.4.4.21 Array.prototype.reduce(callbackfn [, initialValue])
	  reduce: function reduce(callbackfn /* , initialValue */) {
	    return $reduce(this, callbackfn, arguments.length, arguments[1], false);
	  }
    });
/** */ }),
/* 182 */
/** */ (function (module, exports, __webpack_require__) {
    const aFunction = __webpack_require__(21);
    const toObject = __webpack_require__(58);
    const IObject = __webpack_require__(33);
    const toLength = __webpack_require__(37);

    module.exports = function (that, callbackfn, aLen, memo, isRight) {
	  aFunction(callbackfn);
	  const O = toObject(that);
	  const self = IObject(O);
	  const length = toLength(O.length);
	  let index = isRight ? length - 1 : 0;
	  const i = isRight ? -1 : 1;
	  if (aLen < 2) {
      for (;;) {
	    if (index in self) {
	      memo = self[index];
	      index += i;
	      break;
	    }
	    index += i;
	    if (isRight ? index < 0 : length <= index) {
	      throw TypeError('Reduce of empty array with no initial value');
	    }
	  }
  }
	  for (;isRight ? index >= 0 : length > index; index += i) {
      if (index in self) {
	    memo = callbackfn(memo, self[index], index, O);
	  }
  }
	  return memo;
    };
/** */ }),
/* 183 */
/** */ (function (module, exports, __webpack_require__) {
    const $export = __webpack_require__(8);
    const $reduce = __webpack_require__(182);

    $export($export.P + $export.F * !__webpack_require__(170)([].reduceRight, true), 'Array', {
	  // 22.1.3.19 / 15.4.4.22 Array.prototype.reduceRight(callbackfn [, initialValue])
	  reduceRight: function reduceRight(callbackfn /* , initialValue */) {
	    return $reduce(this, callbackfn, arguments.length, arguments[1], true);
	  }
    });
/** */ }),
/* 184 */
/** */ (function (module, exports, __webpack_require__) {
    const $export = __webpack_require__(8);
    const $indexOf = __webpack_require__(36)(false);
    const $native = [].indexOf;
    const NEGATIVE_ZERO = !!$native && 1 / [1].indexOf(1, -0) < 0;

    $export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__(170)($native)), 'Array', {
	  // 22.1.3.11 / 15.4.4.14 Array.prototype.indexOf(searchElement [, fromIndex])
	  indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
	    return NEGATIVE_ZERO
	      // convert -0 to +0
	      ? $native.apply(this, arguments) || 0
	      : $indexOf(this, searchElement, arguments[1]);
	  }
    });
/** */ }),
/* 185 */
/** */ (function (module, exports, __webpack_require__) {
    const $export = __webpack_require__(8);
    const toIObject = __webpack_require__(32);
    const toInteger = __webpack_require__(38);
    const toLength = __webpack_require__(37);
    const $native = [].lastIndexOf;
    const NEGATIVE_ZERO = !!$native && 1 / [1].lastIndexOf(1, -0) < 0;

    $export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__(170)($native)), 'Array', {
	  // 22.1.3.14 / 15.4.4.15 Array.prototype.lastIndexOf(searchElement [, fromIndex])
	  lastIndexOf: function lastIndexOf(searchElement /* , fromIndex = @[*-1] */) {
	    // convert -0 to +0
	    if (NEGATIVE_ZERO) return $native.apply(this, arguments) || 0;
	    const O = toIObject(this);
	    const length = toLength(O.length);
	    let index = length - 1;
	    if (arguments.length > 1) index = Math.min(index, toInteger(arguments[1]));
	    if (index < 0) index = length + index;
	    for (;index >= 0; index--) if (index in O) if (O[index] === searchElement) return index || 0;
	    return -1;
	  }
    });
/** */ }),
/* 186 */
/** */ (function (module, exports, __webpack_require__) {
	// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
    const $export = __webpack_require__(8);

    $export($export.P, 'Array', { copyWithin: __webpack_require__(187) });

    __webpack_require__(188)('copyWithin');
/** */ }),
/* 187 */
/** */ (function (module, exports, __webpack_require__) {
	// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)

    const toObject = __webpack_require__(58);
    const toAbsoluteIndex = __webpack_require__(39);
    const toLength = __webpack_require__(37);

    module.exports = [].copyWithin || function copyWithin(target /* = 0 */, start /* = 0, end = @length */) {
	  const O = toObject(this);
	  const len = toLength(O.length);
	  let to = toAbsoluteIndex(target, len);
	  let from = toAbsoluteIndex(start, len);
	  const end = arguments.length > 2 ? arguments[2] : undefined;
	  let count = Math.min((end === undefined ? len : toAbsoluteIndex(end, len)) - from, len - to);
	  let inc = 1;
	  if (from < to && to < from + count) {
	    inc = -1;
	    from += count - 1;
	    to += count - 1;
	  }
	  while (count-- > 0) {
	    if (from in O) O[to] = O[from];
	    else delete O[to];
	    to += inc;
	    from += inc;
	  } return O;
    };
/** */ }),
/* 188 */
/** */ (function (module, exports, __webpack_require__) {
	// 22.1.3.31 Array.prototype[@@unscopables]
    const UNSCOPABLES = __webpack_require__(25)('unscopables');
    const ArrayProto = Array.prototype;
    if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__(10)(ArrayProto, UNSCOPABLES, {});
    module.exports = function (key) {
	  ArrayProto[UNSCOPABLES][key] = true;
    };
/** */ }),
/* 189 */
/** */ (function (module, exports, __webpack_require__) {
	// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
    const $export = __webpack_require__(8);

    $export($export.P, 'Array', { fill: __webpack_require__(190) });

    __webpack_require__(188)('fill');
/** */ }),
/* 190 */
/** */ (function (module, exports, __webpack_require__) {
	// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)

    const toObject = __webpack_require__(58);
    const toAbsoluteIndex = __webpack_require__(39);
    const toLength = __webpack_require__(37);
    module.exports = function fill(value /* , start = 0, end = @length */) {
	  const O = toObject(this);
	  const length = toLength(O.length);
	  const aLen = arguments.length;
	  let index = toAbsoluteIndex(aLen > 1 ? arguments[1] : undefined, length);
	  const end = aLen > 2 ? arguments[2] : undefined;
	  const endPos = end === undefined ? length : toAbsoluteIndex(end, length);
	  while (endPos > index) O[index++] = value;
	  return O;
    };
/** */ }),
/* 191 */
/** */ (function (module, exports, __webpack_require__) {
	// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
    const $export = __webpack_require__(8);
    const $find = __webpack_require__(174)(5);
    const KEY = 'find';
    let forced = true;
	// Shouldn't skip holes
    if (KEY in []) Array(1)[KEY](() => { forced = false; });
    $export($export.P + $export.F * forced, 'Array', {
	  find: function find(callbackfn /* , that = undefined */) {
	    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
    });
    __webpack_require__(188)(KEY);
/** */ }),
/* 192 */
/** */ (function (module, exports, __webpack_require__) {
	// 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)
    const $export = __webpack_require__(8);
    const $find = __webpack_require__(174)(6);
    const KEY = 'findIndex';
    let forced = true;
	// Shouldn't skip holes
    if (KEY in []) Array(1)[KEY](() => { forced = false; });
    $export($export.P + $export.F * forced, 'Array', {
	  findIndex: function findIndex(callbackfn /* , that = undefined */) {
	    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
    });
    __webpack_require__(188)(KEY);
/** */ }),
/* 193 */
/** */ (function (module, exports, __webpack_require__) {
    __webpack_require__(194)('Array');
/** */ }),
/* 194 */
/** */ (function (module, exports, __webpack_require__) {
    const global = __webpack_require__(4);
    const dP = __webpack_require__(11);
    const DESCRIPTORS = __webpack_require__(6);
    const SPECIES = __webpack_require__(25)('species');

    module.exports = function (KEY) {
	  const C = global[KEY];
	  if (DESCRIPTORS && C && !C[SPECIES]) {
      dP.f(C, SPECIES, {
	    configurable: true,
	    get() { return this; }
	  });
  }
    };
/** */ }),
/* 195 */
/** */ (function (module, exports, __webpack_require__) {
    const addToUnscopables = __webpack_require__(188);
    const step = __webpack_require__(196);
    const Iterators = __webpack_require__(130);
    const toIObject = __webpack_require__(32);

	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
    module.exports = __webpack_require__(129)(Array, 'Array', function (iterated, kind) {
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
    }, function () {
	  const O = this._t;
	  const kind = this._k;
	  const index = this._i++;
	  if (!O || index >= O.length) {
	    this._t = undefined;
	    return step(1);
	  }
	  if (kind == 'keys') return step(0, index);
	  if (kind == 'values') return step(0, O[index]);
	  return step(0, [index, O[index]]);
    }, 'values');

	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
    Iterators.Arguments = Iterators.Array;

    addToUnscopables('keys');
    addToUnscopables('values');
    addToUnscopables('entries');
/** */ }),
/* 196 */
/** */ (function (module, exports) {
    module.exports = function (done, value) {
	  return { value, done: !!done };
    };
/** */ }),
/* 197 */
/** */ (function (module, exports, __webpack_require__) {
    const global = __webpack_require__(4);
    const inheritIfRequired = __webpack_require__(88);
    const dP = __webpack_require__(11).f;
    const gOPN = __webpack_require__(50).f;
    const isRegExp = __webpack_require__(135);
    const $flags = __webpack_require__(198);
    let $RegExp = global.RegExp;
    const Base = $RegExp;
    const proto = $RegExp.prototype;
    const re1 = /a/g;
    const re2 = /a/g;
	// "new" creates a new object, old webkit buggy here
    const CORRECT_NEW = new $RegExp(re1) !== re1;

    if (__webpack_require__(6) && (!CORRECT_NEW || __webpack_require__(7)(() => {
	  re2[__webpack_require__(25)('match')] = false;
	  // RegExp constructor can alter flags and IsRegExp works correct with @@match
	  return $RegExp(re1) != re1 || $RegExp(re2) == re2 || $RegExp(re1, 'i') != '/a/i';
    }))) {
	  $RegExp = function RegExp(p, f) {
	    const tiRE = this instanceof $RegExp;
	    let piRE = isRegExp(p);
	    const fiU = f === undefined;
	    return !tiRE && piRE && p.constructor === $RegExp && fiU ? p
	      : inheritIfRequired(CORRECT_NEW
	        ? new Base(piRE && !fiU ? p.source : p, f)
	        : Base((piRE = p instanceof $RegExp) ? p.source : p, piRE && fiU ? $flags.call(p) : f)
	      , tiRE ? this : proto, $RegExp);
	  };
	  const proxy = function (key) {
	    key in $RegExp || dP($RegExp, key, {
	      configurable: true,
	      get() { return Base[key]; },
	      set(it) { Base[key] = it; }
	    });
	  };
	  for (let keys = gOPN(Base), i = 0; keys.length > i;) proxy(keys[i++]);
	  proto.constructor = $RegExp;
	  $RegExp.prototype = proto;
	  __webpack_require__(18)(global, 'RegExp', $RegExp);
    }

    __webpack_require__(194)('RegExp');
/** */ }),
/* 198 */
/** */ (function (module, exports, __webpack_require__) {
	// 21.2.5.3 get RegExp.prototype.flags
    const anObject = __webpack_require__(12);
    module.exports = function () {
	  const that = anObject(this);
	  let result = '';
	  if (that.global) result += 'g';
	  if (that.ignoreCase) result += 'i';
	  if (that.multiline) result += 'm';
	  if (that.unicode) result += 'u';
	  if (that.sticky) result += 'y';
	  return result;
    };
/** */ }),
/* 199 */
/** */ (function (module, exports, __webpack_require__) {
    __webpack_require__(200);
    const anObject = __webpack_require__(12);
    const $flags = __webpack_require__(198);
    const DESCRIPTORS = __webpack_require__(6);
    const TO_STRING = 'toString';
    const $toString = /./[TO_STRING];

    const define = function (fn) {
	  __webpack_require__(18)(RegExp.prototype, TO_STRING, fn, true);
    };

	// 21.2.5.14 RegExp.prototype.toString()
    if (__webpack_require__(7)(() => $toString.call({ source: 'a', flags: 'b' }) != '/a/b')) {
	  define(function toString() {
	    const R = anObject(this);
	    return '/'.concat(R.source, '/',
	      'flags' in R ? R.flags : !DESCRIPTORS && R instanceof RegExp ? $flags.call(R) : undefined);
	  });
	// FF44- RegExp#toString has a wrong name
    } else if ($toString.name != TO_STRING) {
	  define(function toString() {
	    return $toString.call(this);
	  });
    }
/** */ }),
/* 200 */
/** */ (function (module, exports, __webpack_require__) {
	// 21.2.5.3 get RegExp.prototype.flags()
    if (__webpack_require__(6) && /./g.flags != 'g') {
        __webpack_require__(11).f(RegExp.prototype, 'flags', {
	  configurable: true,
	  get: __webpack_require__(198)
        });
    }
/** */ }),
/* 201 */
/** */ (function (module, exports, __webpack_require__) {
	// @@match logic
    __webpack_require__(202)('match', 1, (defined, MATCH, $match) =>
	  // 21.1.3.11 String.prototype.match(regexp)
	   [function match(regexp) {
	    const O = defined(this);
	    const fn = regexp == undefined ? undefined : regexp[MATCH];
	    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
	  }, $match]);
/** */ }),
/* 202 */
/** */ (function (module, exports, __webpack_require__) {
    const hide = __webpack_require__(10);
    const redefine = __webpack_require__(18);
    const fails = __webpack_require__(7);
    const defined = __webpack_require__(35);
    const wks = __webpack_require__(25);

    module.exports = function (KEY, length, exec) {
	  const SYMBOL = wks(KEY);
	  const fns = exec(defined, SYMBOL, ''[KEY]);
	  const strfn = fns[0];
	  const rxfn = fns[1];
	  if (fails(() => {
	    const O = {};
	    O[SYMBOL] = function () { return 7; };
	    return ''[KEY](O) != 7;
	  })) {
	    redefine(String.prototype, KEY, strfn);
	    hide(RegExp.prototype, SYMBOL, length == 2
	      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
	      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
	      ? function (string, arg) { return rxfn.call(string, this, arg); }
	      // 21.2.5.6 RegExp.prototype[@@match](string)
	      // 21.2.5.9 RegExp.prototype[@@search](string)
	      : function (string) { return rxfn.call(string, this); }
	    );
	  }
    };
/** */ }),
/* 203 */
/** */ (function (module, exports, __webpack_require__) {
	// @@replace logic
    __webpack_require__(202)('replace', 2, (defined, REPLACE, $replace) =>
	  // 21.1.3.14 String.prototype.replace(searchValue, replaceValue)
	   [function replace(searchValue, replaceValue) {
	    const O = defined(this);
	    const fn = searchValue == undefined ? undefined : searchValue[REPLACE];
	    return fn !== undefined
	      ? fn.call(searchValue, O, replaceValue)
	      : $replace.call(String(O), searchValue, replaceValue);
	  }, $replace]);
/** */ }),
/* 204 */
/** */ (function (module, exports, __webpack_require__) {
	// @@search logic
    __webpack_require__(202)('search', 1, (defined, SEARCH, $search) =>
	  // 21.1.3.15 String.prototype.search(regexp)
	   [function search(regexp) {
	    const O = defined(this);
	    const fn = regexp == undefined ? undefined : regexp[SEARCH];
	    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
	  }, $search]);
/** */ }),
/* 205 */
/** */ (function (module, exports, __webpack_require__) {
	// @@split logic
    __webpack_require__(202)('split', 2, (defined, SPLIT, $split) => {
	  const isRegExp = __webpack_require__(135);
	  const _split = $split;
	  const $push = [].push;
	  const $SPLIT = 'split';
	  const LENGTH = 'length';
	  const LAST_INDEX = 'lastIndex';
	  if (
	    'abbc'[$SPLIT](/(b)*/)[1] == 'c' ||
	    'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 ||
	    'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 ||
	    '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 ||
	    '.'[$SPLIT](/()()/)[LENGTH] > 1 ||
	    ''[$SPLIT](/.?/)[LENGTH]
	  ) {
	    const NPCG = /()??/.exec('')[1] === undefined; // nonparticipating capturing group
	    // based on es5-shim implementation, need to rework it
	    $split = function (separator, limit) {
	      const string = String(this);
	      if (separator === undefined && limit === 0) return [];
	      // If `separator` is not a regex, use native split
	      if (!isRegExp(separator)) return _split.call(string, separator, limit);
	      const output = [];
	      const flags = (separator.ignoreCase ? 'i' : '') +
	                  (separator.multiline ? 'm' : '') +
	                  (separator.unicode ? 'u' : '') +
	                  (separator.sticky ? 'y' : '');
	      let lastLastIndex = 0;
	      const splitLimit = limit === undefined ? 4294967295 : limit >>> 0;
	      // Make `global` and avoid `lastIndex` issues by working with a copy
	      const separatorCopy = new RegExp(separator.source, `${flags}g`);
	      let separator2,
          match,
          lastIndex,
          lastLength,
          i;
	      // Doesn't need flags gy, but they don't hurt
	      if (!NPCG) separator2 = new RegExp(`^${separatorCopy.source}$(?!\\s)`, flags);
	      while (match = separatorCopy.exec(string)) {
	        // `separatorCopy.lastIndex` is not reliable cross-browser
	        lastIndex = match.index + match[0][LENGTH];
	        if (lastIndex > lastLastIndex) {
	          output.push(string.slice(lastLastIndex, match.index));
	          // Fix browsers whose `exec` methods don't consistently return `undefined` for NPCG
	          // eslint-disable-next-line no-loop-func
	          if (!NPCG && match[LENGTH] > 1) {
              match[0].replace(separator2, function () {
	            for (i = 1; i < arguments[LENGTH] - 2; i++) if (arguments[i] === undefined) match[i] = undefined;
	          });
          }
	          if (match[LENGTH] > 1 && match.index < string[LENGTH]) $push.apply(output, match.slice(1));
	          lastLength = match[0][LENGTH];
	          lastLastIndex = lastIndex;
	          if (output[LENGTH] >= splitLimit) break;
	        }
	        if (separatorCopy[LAST_INDEX] === match.index) separatorCopy[LAST_INDEX]++; // Avoid an infinite loop
	      }
	      if (lastLastIndex === string[LENGTH]) {
	        if (lastLength || !separatorCopy.test('')) output.push('');
	      } else output.push(string.slice(lastLastIndex));
	      return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
	    };
	  // Chakra, V8
	  } else if ('0'[$SPLIT](undefined, 0)[LENGTH]) {
	    $split = function (separator, limit) {
	      return separator === undefined && limit === 0 ? [] : _split.call(this, separator, limit);
	    };
	  }
	  // 21.1.3.17 String.prototype.split(separator, limit)
	  return [function split(separator, limit) {
	    const O = defined(this);
	    const fn = separator == undefined ? undefined : separator[SPLIT];
	    return fn !== undefined ? fn.call(separator, O, limit) : $split.call(String(O), separator, limit);
	  }, $split];
    });
/** */ }),
/* 206 */
/** */ (function (module, exports, __webpack_require__) {
    const LIBRARY = __webpack_require__(28);
    const global = __webpack_require__(4);
    const ctx = __webpack_require__(20);
    const classof = __webpack_require__(75);
    const $export = __webpack_require__(8);
    const isObject = __webpack_require__(13);
    const aFunction = __webpack_require__(21);
    const anInstance = __webpack_require__(207);
    const forOf = __webpack_require__(208);
    const speciesConstructor = __webpack_require__(209);
    const task = __webpack_require__(210).set;
    const microtask = __webpack_require__(211)();
    const newPromiseCapabilityModule = __webpack_require__(212);
    const perform = __webpack_require__(213);
    const promiseResolve = __webpack_require__(214);
    const PROMISE = 'Promise';
    const TypeError = global.TypeError;
    const process = global.process;
    let $Promise = global[PROMISE];
    const isNode = classof(process) == 'process';
    const empty = function () { /* empty */ };
    let Internal,
        newGenericPromiseCapability,
        OwnPromiseCapability,
        Wrapper;
    let newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

    const USE_NATIVE = !!(function () {
	  try {
	    // correct subclassing with @@species support
	    const promise = $Promise.resolve(1);
	    const FakePromise = (promise.constructor = {})[__webpack_require__(25)('species')] = function (exec) {
	      exec(empty, empty);
	    };
	    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
	    return (isNode || typeof PromiseRejectionEvent === 'function') && promise.then(empty) instanceof FakePromise;
	  } catch (e) { /* empty */ }
    }());

	// helpers
    const sameConstructor = LIBRARY ? function (a, b) {
	  // with library wrapper special case
	  return a === b || a === $Promise && b === Wrapper;
    } : function (a, b) {
	  return a === b;
    };
    const isThenable = function (it) {
	  let then;
	  return isObject(it) && typeof (then = it.then) === 'function' ? then : false;
    };
    const notify = function (promise, isReject) {
	  if (promise._n) return;
	  promise._n = true;
	  const chain = promise._c;
	  microtask(() => {
	    const value = promise._v;
	    const ok = promise._s == 1;
	    let i = 0;
	    const run = function (reaction) {
	      const handler = ok ? reaction.ok : reaction.fail;
	      const resolve = reaction.resolve;
	      const reject = reaction.reject;
	      const domain = reaction.domain;
	      let result,
          then;
	      try {
	        if (handler) {
	          if (!ok) {
	            if (promise._h == 2) onHandleUnhandled(promise);
	            promise._h = 1;
	          }
	          if (handler === true) result = value;
	          else {
	            if (domain) domain.enter();
	            result = handler(value);
	            if (domain) domain.exit();
	          }
	          if (result === reaction.promise) {
	            reject(TypeError('Promise-chain cycle'));
	          } else if (then = isThenable(result)) {
	            then.call(result, resolve, reject);
	          } else resolve(result);
	        } else reject(value);
	      } catch (e) {
	        reject(e);
	      }
	    };
	    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
	    promise._c = [];
	    promise._n = false;
	    if (isReject && !promise._h) onUnhandled(promise);
	  });
    };
    var onUnhandled = function (promise) {
	  task.call(global, () => {
	    const value = promise._v;
	    const unhandled = isUnhandled(promise);
	    let result,
        handler,
        console;
	    if (unhandled) {
	      result = perform(() => {
	        if (isNode) {
	          process.emit('unhandledRejection', value, promise);
	        } else if (handler = global.onunhandledrejection) {
	          handler({ promise, reason: value });
	        } else if ((console = global.console) && console.error) {
	          console.error('Unhandled promise rejection', value);
	        }
	      });
	      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
	      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
	    } promise._a = undefined;
	    if (unhandled && result.e) throw result.v;
	  });
    };
    var isUnhandled = function (promise) {
	  if (promise._h == 1) return false;
	  const chain = promise._a || promise._c;
	  let i = 0;
	  let reaction;
	  while (chain.length > i) {
	    reaction = chain[i++];
	    if (reaction.fail || !isUnhandled(reaction.promise)) return false;
	  } return true;
    };
    var onHandleUnhandled = function (promise) {
	  task.call(global, () => {
	    let handler;
	    if (isNode) {
	      process.emit('rejectionHandled', promise);
	    } else if (handler = global.onrejectionhandled) {
	      handler({ promise, reason: promise._v });
	    }
	  });
    };
    const $reject = function (value) {
	  let promise = this;
	  if (promise._d) return;
	  promise._d = true;
	  promise = promise._w || promise; // unwrap
	  promise._v = value;
	  promise._s = 2;
	  if (!promise._a) promise._a = promise._c.slice();
	  notify(promise, true);
    };
    var $resolve = function (value) {
	  let promise = this;
	  let then;
	  if (promise._d) return;
	  promise._d = true;
	  promise = promise._w || promise; // unwrap
	  try {
	    if (promise === value) throw TypeError('Promise can\'t be resolved itself');
	    if (then = isThenable(value)) {
	      microtask(() => {
	        const wrapper = { _w: promise, _d: false }; // wrap
	        try {
	          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
	        } catch (e) {
	          $reject.call(wrapper, e);
	        }
	      });
	    } else {
	      promise._v = value;
	      promise._s = 1;
	      notify(promise, false);
	    }
	  } catch (e) {
	    $reject.call({ _w: promise, _d: false }, e); // wrap
	  }
    };

	// constructor polyfill
    if (!USE_NATIVE) {
	  // 25.4.3.1 Promise(executor)
	  $Promise = function Promise(executor) {
	    anInstance(this, $Promise, PROMISE, '_h');
	    aFunction(executor);
	    Internal.call(this);
	    try {
	      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
	    } catch (err) {
	      $reject.call(this, err);
	    }
	  };
	  // eslint-disable-next-line no-unused-vars
	  Internal = function Promise(executor) {
	    this._c = [];             // <- awaiting reactions
	    this._a = undefined;      // <- checked in isUnhandled reactions
	    this._s = 0;              // <- state
	    this._d = false;          // <- done
	    this._v = undefined;      // <- value
	    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
	    this._n = false;          // <- notify
	  };
	  Internal.prototype = __webpack_require__(215)($Promise.prototype, {
	    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
	    then: function then(onFulfilled, onRejected) {
	      const reaction = newPromiseCapability(speciesConstructor(this, $Promise));
	      reaction.ok = typeof onFulfilled === 'function' ? onFulfilled : true;
	      reaction.fail = typeof onRejected === 'function' && onRejected;
	      reaction.domain = isNode ? process.domain : undefined;
	      this._c.push(reaction);
	      if (this._a) this._a.push(reaction);
	      if (this._s) notify(this, false);
	      return reaction.promise;
	    },
	    // 25.4.5.1 Promise.prototype.catch(onRejected)
	    catch(onRejected) {
	      return this.then(undefined, onRejected);
	    }
	  });
	  OwnPromiseCapability = function () {
	    const promise = new Internal();
	    this.promise = promise;
	    this.resolve = ctx($resolve, promise, 1);
	    this.reject = ctx($reject, promise, 1);
	  };
	  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
	    return sameConstructor($Promise, C)
	      ? new OwnPromiseCapability(C)
	      : newGenericPromiseCapability(C);
	  };
    }

    $export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
    __webpack_require__(24)($Promise, PROMISE);
    __webpack_require__(194)(PROMISE);
    Wrapper = __webpack_require__(9)[PROMISE];

	// statics
    $export($export.S + $export.F * !USE_NATIVE, PROMISE, {
	  // 25.4.4.5 Promise.reject(r)
	  reject: function reject(r) {
	    const capability = newPromiseCapability(this);
	    const $$reject = capability.reject;
	    $$reject(r);
	    return capability.promise;
	  }
    });
    $export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
	  // 25.4.4.6 Promise.resolve(x)
	  resolve: function resolve(x) {
	    // instanceof instead of internal slot check because we should fix it without replacement native Promise core
	    if (x instanceof $Promise && sameConstructor(x.constructor, this)) return x;
	    return promiseResolve(this, x);
	  }
    });
    $export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(167)((iter) => {
	  $Promise.all(iter).catch(empty);
    })), PROMISE, {
	  // 25.4.4.1 Promise.all(iterable)
	  all: function all(iterable) {
	    const C = this;
	    const capability = newPromiseCapability(C);
	    const resolve = capability.resolve;
	    const reject = capability.reject;
	    const result = perform(() => {
	      const values = [];
	      let index = 0;
	      let remaining = 1;
	      forOf(iterable, false, (promise) => {
	        const $index = index++;
	        let alreadyCalled = false;
	        values.push(undefined);
	        remaining++;
	        C.resolve(promise).then((value) => {
	          if (alreadyCalled) return;
	          alreadyCalled = true;
	          values[$index] = value;
	          --remaining || resolve(values);
	        }, reject);
	      });
	      --remaining || resolve(values);
	    });
	    if (result.e) reject(result.v);
	    return capability.promise;
	  },
	  // 25.4.4.4 Promise.race(iterable)
	  race: function race(iterable) {
	    const C = this;
	    const capability = newPromiseCapability(C);
	    const reject = capability.reject;
	    const result = perform(() => {
	      forOf(iterable, false, (promise) => {
	        C.resolve(promise).then(capability.resolve, reject);
	      });
	    });
	    if (result.e) reject(result.v);
	    return capability.promise;
	  }
    });
/** */ }),
/* 207 */
/** */ (function (module, exports) {
    module.exports = function (it, Constructor, name, forbiddenField) {
	  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
	    throw TypeError(`${name}: incorrect invocation!`);
	  } return it;
    };
/** */ }),
/* 208 */
/** */ (function (module, exports, __webpack_require__) {
    const ctx = __webpack_require__(20);
    const call = __webpack_require__(163);
    const isArrayIter = __webpack_require__(164);
    const anObject = __webpack_require__(12);
    const toLength = __webpack_require__(37);
    const getIterFn = __webpack_require__(166);
    const BREAK = {};
    const RETURN = {};
    var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
	  const iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
	  const f = ctx(fn, that, entries ? 2 : 1);
	  let index = 0;
	  let length,
      step,
      iterator,
      result;
	  if (typeof iterFn !== 'function') throw TypeError(`${iterable} is not iterable!`);
	  // fast case for arrays with default iterator
	  if (isArrayIter(iterFn)) {
      for (length = toLength(iterable.length); length > index; index++) {
	    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
	    if (result === BREAK || result === RETURN) return result;
	  }
  } else {
      for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
	    result = call(iterator, f, step.value, entries);
	    if (result === BREAK || result === RETURN) return result;
	  }
  }
    };
    exports.BREAK = BREAK;
    exports.RETURN = RETURN;
/** */ }),
/* 209 */
/** */ (function (module, exports, __webpack_require__) {
	// 7.3.20 SpeciesConstructor(O, defaultConstructor)
    const anObject = __webpack_require__(12);
    const aFunction = __webpack_require__(21);
    const SPECIES = __webpack_require__(25)('species');
    module.exports = function (O, D) {
	  const C = anObject(O).constructor;
	  let S;
	  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
    };
/** */ }),
/* 210 */
/** */ (function (module, exports, __webpack_require__) {
    const ctx = __webpack_require__(20);
    const invoke = __webpack_require__(78);
    const html = __webpack_require__(48);
    const cel = __webpack_require__(15);
    const global = __webpack_require__(4);
    const process = global.process;
    let setTask = global.setImmediate;
    let clearTask = global.clearImmediate;
    const MessageChannel = global.MessageChannel;
    const Dispatch = global.Dispatch;
    let counter = 0;
    const queue = {};
    const ONREADYSTATECHANGE = 'onreadystatechange';
    let defer,
        channel,
        port;
    const run = function () {
	  const id = +this;
	  // eslint-disable-next-line no-prototype-builtins
	  if (queue.hasOwnProperty(id)) {
	    const fn = queue[id];
	    delete queue[id];
	    fn();
	  }
    };
    const listener = function (event) {
	  run.call(event.data);
    };
	// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
    if (!setTask || !clearTask) {
	  setTask = function setImmediate(fn) {
	    const args = [];
	    let i = 1;
	    while (arguments.length > i) args.push(arguments[i++]);
	    queue[++counter] = function () {
	      // eslint-disable-next-line no-new-func
	      invoke(typeof fn === 'function' ? fn : Function(fn), args);
	    };
	    defer(counter);
	    return counter;
	  };
	  clearTask = function clearImmediate(id) {
	    delete queue[id];
	  };
	  // Node.js 0.8-
	  if (__webpack_require__(34)(process) == 'process') {
	    defer = function (id) {
	      process.nextTick(ctx(run, id, 1));
	    };
	  // Sphere (JS game engine) Dispatch API
	  } else if (Dispatch && Dispatch.now) {
	    defer = function (id) {
	      Dispatch.now(ctx(run, id, 1));
	    };
	  // Browsers with MessageChannel, includes WebWorkers
	  } else if (MessageChannel) {
	    channel = new MessageChannel();
	    port = channel.port2;
	    channel.port1.onmessage = listener;
	    defer = ctx(port.postMessage, port, 1);
	  // Browsers with postMessage, skip WebWorkers
	  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
	  } else if (global.addEventListener && typeof postMessage === 'function' && !global.importScripts) {
	    defer = function (id) {
	      global.postMessage(`${id}`, '*');
	    };
	    global.addEventListener('message', listener, false);
	  // IE8-
	  } else if (ONREADYSTATECHANGE in cel('script')) {
	    defer = function (id) {
	      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
	        html.removeChild(this);
	        run.call(id);
	      };
	    };
	  // Rest old browsers
	  } else {
	    defer = function (id) {
	      setTimeout(ctx(run, id, 1), 0);
	    };
	  }
    }
    module.exports = {
	  set: setTask,
	  clear: clearTask
    };
/** */ }),
/* 211 */
/** */ (function (module, exports, __webpack_require__) {
    const global = __webpack_require__(4);
    const macrotask = __webpack_require__(210).set;
    const Observer = global.MutationObserver || global.WebKitMutationObserver;
    const process = global.process;
    const Promise = global.Promise;
    const isNode = __webpack_require__(34)(process) == 'process';

    module.exports = function () {
	  let head,
      last,
      notify;

	  const flush = function () {
	    let parent,
        fn;
	    if (isNode && (parent = process.domain)) parent.exit();
	    while (head) {
	      fn = head.fn;
	      head = head.next;
	      try {
	        fn();
	      } catch (e) {
	        if (head) notify();
	        else last = undefined;
	        throw e;
	      }
	    } last = undefined;
	    if (parent) parent.enter();
	  };

	  // Node.js
	  if (isNode) {
	    notify = function () {
	      process.nextTick(flush);
	    };
	  // browsers with MutationObserver
	  } else if (Observer) {
	    let toggle = true;
	    const node = document.createTextNode('');
	    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
	    notify = function () {
	      node.data = toggle = !toggle;
	    };
	  // environments with maybe non-completely correct, but existent Promise
	  } else if (Promise && Promise.resolve) {
	    const promise = Promise.resolve();
	    notify = function () {
	      promise.then(flush);
	    };
	  // for other environments - macrotask based on:
	  // - setImmediate
	  // - MessageChannel
	  // - window.postMessag
	  // - onreadystatechange
	  // - setTimeout
	  } else {
	    notify = function () {
	      // strange IE + webpack dev server bug - use .call(global)
	      macrotask.call(global, flush);
	    };
	  }

	  return function (fn) {
	    const task = { fn, next: undefined };
	    if (last) last.next = task;
	    if (!head) {
	      head = task;
	      notify();
	    } last = task;
	  };
    };
/** */ }),
/* 212 */
/** */ (function (module, exports, __webpack_require__) {
	// 25.4.1.5 NewPromiseCapability(C)
    const aFunction = __webpack_require__(21);

    function PromiseCapability(C) {
	  let resolve,
      reject;
	  this.promise = new C(($$resolve, $$reject) => {
	    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
	    resolve = $$resolve;
	    reject = $$reject;
	  });
	  this.resolve = aFunction(resolve);
	  this.reject = aFunction(reject);
    }

    module.exports.f = function (C) {
	  return new PromiseCapability(C);
    };
/** */ }),
/* 213 */
/** */ (function (module, exports) {
    module.exports = function (exec) {
	  try {
	    return { e: false, v: exec() };
	  } catch (e) {
	    return { e: true, v: e };
	  }
    };
/** */ }),
/* 214 */
/** */ (function (module, exports, __webpack_require__) {
    const newPromiseCapability = __webpack_require__(212);

    module.exports = function (C, x) {
	  const promiseCapability = newPromiseCapability.f(C);
	  const resolve = promiseCapability.resolve;
	  resolve(x);
	  return promiseCapability.promise;
    };
/** */ }),
/* 215 */
/** */ (function (module, exports, __webpack_require__) {
    const redefine = __webpack_require__(18);
    module.exports = function (target, src, safe) {
	  for (const key in src) redefine(target, key, src[key], safe);
	  return target;
    };
/** */ }),
/* 216 */
/** */ (function (module, exports, __webpack_require__) {
    const strong = __webpack_require__(217);
    const validate = __webpack_require__(218);
    const MAP = 'Map';

	// 23.1 Map Objects
    module.exports = __webpack_require__(219)(MAP, (get) => function Map() { return get(this, arguments.length > 0 ? arguments[0] : undefined); }, {
	  // 23.1.3.6 Map.prototype.get(key)
	  get: function get(key) {
	    const entry = strong.getEntry(validate(this, MAP), key);
	    return entry && entry.v;
	  },
	  // 23.1.3.9 Map.prototype.set(key, value)
	  set: function set(key, value) {
	    return strong.def(validate(this, MAP), key === 0 ? 0 : key, value);
	  }
    }, strong, true);
/** */ }),
/* 217 */
/** */ (function (module, exports, __webpack_require__) {
    const dP = __webpack_require__(11).f;
    const create = __webpack_require__(46);
    const redefineAll = __webpack_require__(215);
    const ctx = __webpack_require__(20);
    const anInstance = __webpack_require__(207);
    const forOf = __webpack_require__(208);
    const $iterDefine = __webpack_require__(129);
    const step = __webpack_require__(196);
    const setSpecies = __webpack_require__(194);
    const DESCRIPTORS = __webpack_require__(6);
    const fastKey = __webpack_require__(22).fastKey;
    const validate = __webpack_require__(218);
    const SIZE = DESCRIPTORS ? '_s' : 'size';

    const getEntry = function (that, key) {
	  // fast case
	  const index = fastKey(key);
	  let entry;
	  if (index !== 'F') return that._i[index];
	  // frozen object case
	  for (entry = that._f; entry; entry = entry.n) {
	    if (entry.k == key) return entry;
	  }
    };

    module.exports = {
	  getConstructor(wrapper, NAME, IS_MAP, ADDER) {
	    var C = wrapper((that, iterable) => {
	      anInstance(that, C, NAME, '_i');
	      that._t = NAME;         // collection type
	      that._i = create(null); // index
	      that._f = undefined;    // first entry
	      that._l = undefined;    // last entry
	      that[SIZE] = 0;         // size
	      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
	    });
	    redefineAll(C.prototype, {
	      // 23.1.3.1 Map.prototype.clear()
	      // 23.2.3.2 Set.prototype.clear()
	      clear: function clear() {
	        for (var that = validate(this, NAME), data = that._i, entry = that._f; entry; entry = entry.n) {
	          entry.r = true;
	          if (entry.p) entry.p = entry.p.n = undefined;
	          delete data[entry.i];
	        }
	        that._f = that._l = undefined;
	        that[SIZE] = 0;
	      },
	      // 23.1.3.3 Map.prototype.delete(key)
	      // 23.2.3.4 Set.prototype.delete(value)
	      delete(key) {
	        const that = validate(this, NAME);
	        const entry = getEntry(that, key);
	        if (entry) {
	          const next = entry.n;
	          const prev = entry.p;
	          delete that._i[entry.i];
	          entry.r = true;
	          if (prev) prev.n = next;
	          if (next) next.p = prev;
	          if (that._f == entry) that._f = next;
	          if (that._l == entry) that._l = prev;
	          that[SIZE]--;
	        } return !!entry;
	      },
	      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
	      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
	      forEach: function forEach(callbackfn /* , that = undefined */) {
	        validate(this, NAME);
	        const f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
	        let entry;
	        while (entry = entry ? entry.n : this._f) {
	          f(entry.v, entry.k, this);
	          // revert to the last existing entry
	          while (entry && entry.r) entry = entry.p;
	        }
	      },
	      // 23.1.3.7 Map.prototype.has(key)
	      // 23.2.3.7 Set.prototype.has(value)
	      has: function has(key) {
	        return !!getEntry(validate(this, NAME), key);
	      }
	    });
	    if (DESCRIPTORS) {
        dP(C.prototype, 'size', {
	      get() {
	        return validate(this, NAME)[SIZE];
	      }
	    });
    }
	    return C;
	  },
	  def(that, key, value) {
	    let entry = getEntry(that, key);
	    let prev,
        index;
	    // change existing entry
	    if (entry) {
	      entry.v = value;
	    // create new entry
	    } else {
	      that._l = entry = {
	        i: index = fastKey(key, true), // <- index
	        k: key,                        // <- key
	        v: value,                      // <- value
	        p: prev = that._l,             // <- previous entry
	        n: undefined,                  // <- next entry
	        r: false                       // <- removed
	      };
	      if (!that._f) that._f = entry;
	      if (prev) prev.n = entry;
	      that[SIZE]++;
	      // add to index
	      if (index !== 'F') that._i[index] = entry;
	    } return that;
	  },
	  getEntry,
	  setStrong(C, NAME, IS_MAP) {
	    // add .keys, .values, .entries, [@@iterator]
	    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
	    $iterDefine(C, NAME, function (iterated, kind) {
	      this._t = validate(iterated, NAME); // target
	      this._k = kind;                     // kind
	      this._l = undefined;                // previous
	    }, function () {
	      const that = this;
	      const kind = that._k;
	      let entry = that._l;
	      // revert to the last existing entry
	      while (entry && entry.r) entry = entry.p;
	      // get next entry
	      if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
	        // or finish the iteration
	        that._t = undefined;
	        return step(1);
	      }
	      // return step by kind
	      if (kind == 'keys') return step(0, entry.k);
	      if (kind == 'values') return step(0, entry.v);
	      return step(0, [entry.k, entry.v]);
	    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

	    // add [@@species], 23.1.2.2, 23.2.2.2
	    setSpecies(NAME);
	  }
    };
/** */ }),
/* 218 */
/** */ (function (module, exports, __webpack_require__) {
    const isObject = __webpack_require__(13);
    module.exports = function (it, TYPE) {
	  if (!isObject(it) || it._t !== TYPE) throw TypeError(`Incompatible receiver, ${TYPE} required!`);
	  return it;
    };
/** */ }),
/* 219 */
/** */ (function (module, exports, __webpack_require__) {
    const global = __webpack_require__(4);
    const $export = __webpack_require__(8);
    const redefine = __webpack_require__(18);
    const redefineAll = __webpack_require__(215);
    const meta = __webpack_require__(22);
    const forOf = __webpack_require__(208);
    const anInstance = __webpack_require__(207);
    const isObject = __webpack_require__(13);
    const fails = __webpack_require__(7);
    const $iterDetect = __webpack_require__(167);
    const setToStringTag = __webpack_require__(24);
    const inheritIfRequired = __webpack_require__(88);

    module.exports = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
	  const Base = global[NAME];
	  let C = Base;
	  const ADDER = IS_MAP ? 'set' : 'add';
	  const proto = C && C.prototype;
	  const O = {};
	  const fixMethod = function (KEY) {
	    const fn = proto[KEY];
	    redefine(proto, KEY,
	      KEY == 'delete' ? function (a) {
	        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
	      } : KEY == 'has' ? function has(a) {
	        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
	      } : KEY == 'get' ? function get(a) {
	        return IS_WEAK && !isObject(a) ? undefined : fn.call(this, a === 0 ? 0 : a);
	      } : KEY == 'add' ? function add(a) { fn.call(this, a === 0 ? 0 : a); return this; }
	        : function set(a, b) { fn.call(this, a === 0 ? 0 : a, b); return this; }
	    );
	  };
	  if (typeof C !== 'function' || !(IS_WEAK || proto.forEach && !fails(() => {
	    new C().entries().next();
	  }))) {
	    // create collection constructor
	    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
	    redefineAll(C.prototype, methods);
	    meta.NEED = true;
	  } else {
	    const instance = new C();
	    // early implementations not supports chaining
	    const HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance;
	    // V8 ~  Chromium 40- weak-collections throws on primitives, but should return false
	    const THROWS_ON_PRIMITIVES = fails(() => { instance.has(1); });
	    // most early implementations doesn't supports iterables, most modern - not close it correctly
	    const ACCEPT_ITERABLES = $iterDetect((iter) => { new C(iter); }); // eslint-disable-line no-new
	    // for early implementations -0 and +0 not the same
	    const BUGGY_ZERO = !IS_WEAK && fails(() => {
	      // V8 ~ Chromium 42- fails only with 5+ elements
	      const $instance = new C();
	      let index = 5;
	      while (index--) $instance[ADDER](index, index);
	      return !$instance.has(-0);
	    });
	    if (!ACCEPT_ITERABLES) {
	      C = wrapper((target, iterable) => {
	        anInstance(target, C, NAME);
	        const that = inheritIfRequired(new Base(), target, C);
	        if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
	        return that;
	      });
	      C.prototype = proto;
	      proto.constructor = C;
	    }
	    if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
	      fixMethod('delete');
	      fixMethod('has');
	      IS_MAP && fixMethod('get');
	    }
	    if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);
	    // weak collections should not contains .clear method
	    if (IS_WEAK && proto.clear) delete proto.clear;
	  }

	  setToStringTag(C, NAME);

	  O[NAME] = C;
	  $export($export.G + $export.W + $export.F * (C != Base), O);

	  if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);

	  return C;
    };
/** */ }),
/* 220 */
/** */ (function (module, exports, __webpack_require__) {
    const strong = __webpack_require__(217);
    const validate = __webpack_require__(218);
    const SET = 'Set';

	// 23.2 Set Objects
    module.exports = __webpack_require__(219)(SET, (get) => function Set() { return get(this, arguments.length > 0 ? arguments[0] : undefined); }, {
	  // 23.2.3.1 Set.prototype.add(value)
	  add: function add(value) {
	    return strong.def(validate(this, SET), value = value === 0 ? 0 : value, value);
	  }
    }, strong);
/** */ }),
/* 221 */
/** */ (function (module, exports, __webpack_require__) {
    const each = __webpack_require__(174)(0);
    const redefine = __webpack_require__(18);
    const meta = __webpack_require__(22);
    const assign = __webpack_require__(69);
    const weak = __webpack_require__(222);
    const isObject = __webpack_require__(13);
    const fails = __webpack_require__(7);
    const validate = __webpack_require__(218);
    const WEAK_MAP = 'WeakMap';
    const getWeak = meta.getWeak;
    const isExtensible = Object.isExtensible;
    const uncaughtFrozenStore = weak.ufstore;
    const tmp = {};
    let InternalMap;

    const wrapper = function (get) {
	  return function WeakMap() {
	    return get(this, arguments.length > 0 ? arguments[0] : undefined);
	  };
    };

    const methods = {
	  // 23.3.3.3 WeakMap.prototype.get(key)
	  get: function get(key) {
	    if (isObject(key)) {
	      const data = getWeak(key);
	      if (data === true) return uncaughtFrozenStore(validate(this, WEAK_MAP)).get(key);
	      return data ? data[this._i] : undefined;
	    }
	  },
	  // 23.3.3.5 WeakMap.prototype.set(key, value)
	  set: function set(key, value) {
	    return weak.def(validate(this, WEAK_MAP), key, value);
	  }
    };

	// 23.3 WeakMap Objects
    const $WeakMap = module.exports = __webpack_require__(219)(WEAK_MAP, wrapper, methods, weak, true, true);

	// IE11 WeakMap frozen keys fix
    if (fails(() => new $WeakMap().set((Object.freeze || Object)(tmp), 7).get(tmp) != 7)) {
	  InternalMap = weak.getConstructor(wrapper, WEAK_MAP);
	  assign(InternalMap.prototype, methods);
	  meta.NEED = true;
	  each(['delete', 'has', 'get', 'set'], (key) => {
	    const proto = $WeakMap.prototype;
	    const method = proto[key];
	    redefine(proto, key, function (a, b) {
	      // store frozen objects on internal weakmap shim
	      if (isObject(a) && !isExtensible(a)) {
	        if (!this._f) this._f = new InternalMap();
	        const result = this._f[key](a, b);
	        return key == 'set' ? this : result;
	      // store all the rest on native weakmap
	      } return method.call(this, a, b);
	    });
	  });
    }
/** */ }),
/* 222 */
/** */ (function (module, exports, __webpack_require__) {
    const redefineAll = __webpack_require__(215);
    const getWeak = __webpack_require__(22).getWeak;
    const anObject = __webpack_require__(12);
    const isObject = __webpack_require__(13);
    const anInstance = __webpack_require__(207);
    const forOf = __webpack_require__(208);
    const createArrayMethod = __webpack_require__(174);
    const $has = __webpack_require__(5);
    const validate = __webpack_require__(218);
    const arrayFind = createArrayMethod(5);
    const arrayFindIndex = createArrayMethod(6);
    let id = 0;

	// fallback for uncaught frozen keys
    const uncaughtFrozenStore = function (that) {
	  return that._l || (that._l = new UncaughtFrozenStore());
    };
    var UncaughtFrozenStore = function () {
	  this.a = [];
    };
    const findUncaughtFrozen = function (store, key) {
	  return arrayFind(store.a, (it) => it[0] === key);
    };
    UncaughtFrozenStore.prototype = {
	  get(key) {
	    const entry = findUncaughtFrozen(this, key);
	    if (entry) return entry[1];
	  },
	  has(key) {
	    return !!findUncaughtFrozen(this, key);
	  },
	  set(key, value) {
	    const entry = findUncaughtFrozen(this, key);
	    if (entry) entry[1] = value;
	    else this.a.push([key, value]);
	  },
	  delete(key) {
	    const index = arrayFindIndex(this.a, (it) => it[0] === key);
	    if (~index) this.a.splice(index, 1);
	    return !!~index;
	  }
    };

    module.exports = {
	  getConstructor(wrapper, NAME, IS_MAP, ADDER) {
	    var C = wrapper((that, iterable) => {
	      anInstance(that, C, NAME, '_i');
	      that._t = NAME;      // collection type
	      that._i = id++;      // collection id
	      that._l = undefined; // leak store for uncaught frozen objects
	      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
	    });
	    redefineAll(C.prototype, {
	      // 23.3.3.2 WeakMap.prototype.delete(key)
	      // 23.4.3.3 WeakSet.prototype.delete(value)
	      delete(key) {
	        if (!isObject(key)) return false;
	        const data = getWeak(key);
	        if (data === true) return uncaughtFrozenStore(validate(this, NAME)).delete(key);
	        return data && $has(data, this._i) && delete data[this._i];
	      },
	      // 23.3.3.4 WeakMap.prototype.has(key)
	      // 23.4.3.4 WeakSet.prototype.has(value)
	      has: function has(key) {
	        if (!isObject(key)) return false;
	        const data = getWeak(key);
	        if (data === true) return uncaughtFrozenStore(validate(this, NAME)).has(key);
	        return data && $has(data, this._i);
	      }
	    });
	    return C;
	  },
	  def(that, key, value) {
	    const data = getWeak(anObject(key), true);
	    if (data === true) uncaughtFrozenStore(that).set(key, value);
	    else data[that._i] = value;
	    return that;
	  },
	  ufstore: uncaughtFrozenStore
    };
/** */ }),
/* 223 */
/** */ (function (module, exports, __webpack_require__) {
    const weak = __webpack_require__(222);
    const validate = __webpack_require__(218);
    const WEAK_SET = 'WeakSet';

	// 23.4 WeakSet Objects
    __webpack_require__(219)(WEAK_SET, (get) => function WeakSet() { return get(this, arguments.length > 0 ? arguments[0] : undefined); }, {
	  // 23.4.3.1 WeakSet.prototype.add(value)
	  add: function add(value) {
	    return weak.def(validate(this, WEAK_SET), value, true);
	  }
    }, weak, false, true);
/** */ }),
/* 224 */
/** */ (function (module, exports, __webpack_require__) {
    const $export = __webpack_require__(8);
    const $typed = __webpack_require__(225);
    const buffer = __webpack_require__(226);
    const anObject = __webpack_require__(12);
    const toAbsoluteIndex = __webpack_require__(39);
    const toLength = __webpack_require__(37);
    const isObject = __webpack_require__(13);
    const ArrayBuffer = __webpack_require__(4).ArrayBuffer;
    const speciesConstructor = __webpack_require__(209);
    const $ArrayBuffer = buffer.ArrayBuffer;
    const $DataView = buffer.DataView;
    const $isView = $typed.ABV && ArrayBuffer.isView;
    const $slice = $ArrayBuffer.prototype.slice;
    const VIEW = $typed.VIEW;
    const ARRAY_BUFFER = 'ArrayBuffer';

    $export($export.G + $export.W + $export.F * (ArrayBuffer !== $ArrayBuffer), { ArrayBuffer: $ArrayBuffer });

    $export($export.S + $export.F * !$typed.CONSTR, ARRAY_BUFFER, {
	  // 24.1.3.1 ArrayBuffer.isView(arg)
	  isView: function isView(it) {
	    return $isView && $isView(it) || isObject(it) && VIEW in it;
	  }
    });

    $export($export.P + $export.U + $export.F * __webpack_require__(7)(() => !new $ArrayBuffer(2).slice(1, undefined).byteLength), ARRAY_BUFFER, {
	  // 24.1.4.3 ArrayBuffer.prototype.slice(start, end)
	  slice: function slice(start, end) {
	    if ($slice !== undefined && end === undefined) return $slice.call(anObject(this), start); // FF fix
	    const len = anObject(this).byteLength;
	    let first = toAbsoluteIndex(start, len);
	    const final = toAbsoluteIndex(end === undefined ? len : end, len);
	    const result = new (speciesConstructor(this, $ArrayBuffer))(toLength(final - first));
	    const viewS = new $DataView(this);
	    const viewT = new $DataView(result);
	    let index = 0;
	    while (first < final) {
	      viewT.setUint8(index++, viewS.getUint8(first++));
	    } return result;
	  }
    });

    __webpack_require__(194)(ARRAY_BUFFER);
/** */ }),
/* 225 */
/** */ (function (module, exports, __webpack_require__) {
    const global = __webpack_require__(4);
    const hide = __webpack_require__(10);
    const uid = __webpack_require__(19);
    const TYPED = uid('typed_array');
    const VIEW = uid('view');
    const ABV = !!(global.ArrayBuffer && global.DataView);
    let CONSTR = ABV;
    let i = 0;
    const l = 9;
    let Typed;

    const TypedArrayConstructors = (
	  'Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array'
	).split(',');

    while (i < l) {
	  if (Typed = global[TypedArrayConstructors[i++]]) {
	    hide(Typed.prototype, TYPED, true);
	    hide(Typed.prototype, VIEW, true);
	  } else CONSTR = false;
    }

    module.exports = {
	  ABV,
	  CONSTR,
	  TYPED,
	  VIEW
    };
/** */ }),
/* 226 */
/** */ (function (module, exports, __webpack_require__) {
    const global = __webpack_require__(4);
    const DESCRIPTORS = __webpack_require__(6);
    const LIBRARY = __webpack_require__(28);
    const $typed = __webpack_require__(225);
    const hide = __webpack_require__(10);
    const redefineAll = __webpack_require__(215);
    const fails = __webpack_require__(7);
    const anInstance = __webpack_require__(207);
    const toInteger = __webpack_require__(38);
    const toLength = __webpack_require__(37);
    const toIndex = __webpack_require__(227);
    const gOPN = __webpack_require__(50).f;
    const dP = __webpack_require__(11).f;
    const arrayFill = __webpack_require__(190);
    const setToStringTag = __webpack_require__(24);
    const ARRAY_BUFFER = 'ArrayBuffer';
    const DATA_VIEW = 'DataView';
    const PROTOTYPE = 'prototype';
    const WRONG_LENGTH = 'Wrong length!';
    const WRONG_INDEX = 'Wrong index!';
    let $ArrayBuffer = global[ARRAY_BUFFER];
    let $DataView = global[DATA_VIEW];
    const Math = global.Math;
    const RangeError = global.RangeError;
	// eslint-disable-next-line no-shadow-restricted-names
    const Infinity = global.Infinity;
    const BaseBuffer = $ArrayBuffer;
    const abs = Math.abs;
    const pow = Math.pow;
    const floor = Math.floor;
    const log = Math.log;
    const LN2 = Math.LN2;
    const BUFFER = 'buffer';
    const BYTE_LENGTH = 'byteLength';
    const BYTE_OFFSET = 'byteOffset';
    const $BUFFER = DESCRIPTORS ? '_b' : BUFFER;
    const $LENGTH = DESCRIPTORS ? '_l' : BYTE_LENGTH;
    const $OFFSET = DESCRIPTORS ? '_o' : BYTE_OFFSET;

	// IEEE754 conversions based on https://github.com/feross/ieee754
    function packIEEE754(value, mLen, nBytes) {
	  const buffer = Array(nBytes);
	  let eLen = nBytes * 8 - mLen - 1;
	  const eMax = (1 << eLen) - 1;
	  const eBias = eMax >> 1;
	  const rt = mLen === 23 ? pow(2, -24) - pow(2, -77) : 0;
	  let i = 0;
	  const s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
	  let e,
      m,
      c;
	  value = abs(value);
	  // eslint-disable-next-line no-self-compare
	  if (value != value || value === Infinity) {
	    // eslint-disable-next-line no-self-compare
	    m = value != value ? 1 : 0;
	    e = eMax;
	  } else {
	    e = floor(log(value) / LN2);
	    if (value * (c = pow(2, -e)) < 1) {
	      e--;
	      c *= 2;
	    }
	    if (e + eBias >= 1) {
	      value += rt / c;
	    } else {
	      value += rt * pow(2, 1 - eBias);
	    }
	    if (value * c >= 2) {
	      e++;
	      c /= 2;
	    }
	    if (e + eBias >= eMax) {
	      m = 0;
	      e = eMax;
	    } else if (e + eBias >= 1) {
	      m = (value * c - 1) * pow(2, mLen);
	      e += eBias;
	    } else {
	      m = value * pow(2, eBias - 1) * pow(2, mLen);
	      e = 0;
	    }
	  }
	  for (; mLen >= 8; buffer[i++] = m & 255, m /= 256, mLen -= 8);
	  e = e << mLen | m;
	  eLen += mLen;
	  for (; eLen > 0; buffer[i++] = e & 255, e /= 256, eLen -= 8);
	  buffer[--i] |= s * 128;
	  return buffer;
    }
    function unpackIEEE754(buffer, mLen, nBytes) {
	  const eLen = nBytes * 8 - mLen - 1;
	  const eMax = (1 << eLen) - 1;
	  const eBias = eMax >> 1;
	  let nBits = eLen - 7;
	  let i = nBytes - 1;
	  let s = buffer[i--];
	  let e = s & 127;
	  let m;
	  s >>= 7;
	  for (; nBits > 0; e = e * 256 + buffer[i], i--, nBits -= 8);
	  m = e & (1 << -nBits) - 1;
	  e >>= -nBits;
	  nBits += mLen;
	  for (; nBits > 0; m = m * 256 + buffer[i], i--, nBits -= 8);
	  if (e === 0) {
	    e = 1 - eBias;
	  } else if (e === eMax) {
	    return m ? NaN : s ? -Infinity : Infinity;
	  } else {
	    m += pow(2, mLen);
	    e -= eBias;
	  } return (s ? -1 : 1) * m * pow(2, e - mLen);
    }

    function unpackI32(bytes) {
	  return bytes[3] << 24 | bytes[2] << 16 | bytes[1] << 8 | bytes[0];
    }
    function packI8(it) {
	  return [it & 0xff];
    }
    function packI16(it) {
	  return [it & 0xff, it >> 8 & 0xff];
    }
    function packI32(it) {
	  return [it & 0xff, it >> 8 & 0xff, it >> 16 & 0xff, it >> 24 & 0xff];
    }
    function packF64(it) {
	  return packIEEE754(it, 52, 8);
    }
    function packF32(it) {
	  return packIEEE754(it, 23, 4);
    }

    function addGetter(C, key, internal) {
	  dP(C[PROTOTYPE], key, { get() { return this[internal]; } });
    }

    function get(view, bytes, index, isLittleEndian) {
	  const numIndex = +index;
	  const intIndex = toIndex(numIndex);
	  if (intIndex + bytes > view[$LENGTH]) throw RangeError(WRONG_INDEX);
	  const store = view[$BUFFER]._b;
	  const start = intIndex + view[$OFFSET];
	  const pack = store.slice(start, start + bytes);
	  return isLittleEndian ? pack : pack.reverse();
    }
    function set(view, bytes, index, conversion, value, isLittleEndian) {
	  const numIndex = +index;
	  const intIndex = toIndex(numIndex);
	  if (intIndex + bytes > view[$LENGTH]) throw RangeError(WRONG_INDEX);
	  const store = view[$BUFFER]._b;
	  const start = intIndex + view[$OFFSET];
	  const pack = conversion(+value);
	  for (let i = 0; i < bytes; i++) store[start + i] = pack[isLittleEndian ? i : bytes - i - 1];
    }

    if (!$typed.ABV) {
	  $ArrayBuffer = function ArrayBuffer(length) {
	    anInstance(this, $ArrayBuffer, ARRAY_BUFFER);
	    const byteLength = toIndex(length);
	    this._b = arrayFill.call(Array(byteLength), 0);
	    this[$LENGTH] = byteLength;
	  };

	  $DataView = function DataView(buffer, byteOffset, byteLength) {
	    anInstance(this, $DataView, DATA_VIEW);
	    anInstance(buffer, $ArrayBuffer, DATA_VIEW);
	    const bufferLength = buffer[$LENGTH];
	    const offset = toInteger(byteOffset);
	    if (offset < 0 || offset > bufferLength) throw RangeError('Wrong offset!');
	    byteLength = byteLength === undefined ? bufferLength - offset : toLength(byteLength);
	    if (offset + byteLength > bufferLength) throw RangeError(WRONG_LENGTH);
	    this[$BUFFER] = buffer;
	    this[$OFFSET] = offset;
	    this[$LENGTH] = byteLength;
	  };

	  if (DESCRIPTORS) {
	    addGetter($ArrayBuffer, BYTE_LENGTH, '_l');
	    addGetter($DataView, BUFFER, '_b');
	    addGetter($DataView, BYTE_LENGTH, '_l');
	    addGetter($DataView, BYTE_OFFSET, '_o');
	  }

	  redefineAll($DataView[PROTOTYPE], {
	    getInt8: function getInt8(byteOffset) {
	      return get(this, 1, byteOffset)[0] << 24 >> 24;
	    },
	    getUint8: function getUint8(byteOffset) {
	      return get(this, 1, byteOffset)[0];
	    },
	    getInt16: function getInt16(byteOffset /* , littleEndian */) {
	      const bytes = get(this, 2, byteOffset, arguments[1]);
	      return (bytes[1] << 8 | bytes[0]) << 16 >> 16;
	    },
	    getUint16: function getUint16(byteOffset /* , littleEndian */) {
	      const bytes = get(this, 2, byteOffset, arguments[1]);
	      return bytes[1] << 8 | bytes[0];
	    },
	    getInt32: function getInt32(byteOffset /* , littleEndian */) {
	      return unpackI32(get(this, 4, byteOffset, arguments[1]));
	    },
	    getUint32: function getUint32(byteOffset /* , littleEndian */) {
	      return unpackI32(get(this, 4, byteOffset, arguments[1])) >>> 0;
	    },
	    getFloat32: function getFloat32(byteOffset /* , littleEndian */) {
	      return unpackIEEE754(get(this, 4, byteOffset, arguments[1]), 23, 4);
	    },
	    getFloat64: function getFloat64(byteOffset /* , littleEndian */) {
	      return unpackIEEE754(get(this, 8, byteOffset, arguments[1]), 52, 8);
	    },
	    setInt8: function setInt8(byteOffset, value) {
	      set(this, 1, byteOffset, packI8, value);
	    },
	    setUint8: function setUint8(byteOffset, value) {
	      set(this, 1, byteOffset, packI8, value);
	    },
	    setInt16: function setInt16(byteOffset, value /* , littleEndian */) {
	      set(this, 2, byteOffset, packI16, value, arguments[2]);
	    },
	    setUint16: function setUint16(byteOffset, value /* , littleEndian */) {
	      set(this, 2, byteOffset, packI16, value, arguments[2]);
	    },
	    setInt32: function setInt32(byteOffset, value /* , littleEndian */) {
	      set(this, 4, byteOffset, packI32, value, arguments[2]);
	    },
	    setUint32: function setUint32(byteOffset, value /* , littleEndian */) {
	      set(this, 4, byteOffset, packI32, value, arguments[2]);
	    },
	    setFloat32: function setFloat32(byteOffset, value /* , littleEndian */) {
	      set(this, 4, byteOffset, packF32, value, arguments[2]);
	    },
	    setFloat64: function setFloat64(byteOffset, value /* , littleEndian */) {
	      set(this, 8, byteOffset, packF64, value, arguments[2]);
	    }
	  });
    } else {
	  if (!fails(() => {
	    $ArrayBuffer(1);
	  }) || !fails(() => {
	    new $ArrayBuffer(-1); // eslint-disable-line no-new
	  }) || fails(() => {
	    new $ArrayBuffer(); // eslint-disable-line no-new
	    new $ArrayBuffer(1.5); // eslint-disable-line no-new
	    new $ArrayBuffer(NaN); // eslint-disable-line no-new
	    return $ArrayBuffer.name != ARRAY_BUFFER;
	  })) {
	    $ArrayBuffer = function ArrayBuffer(length) {
	      anInstance(this, $ArrayBuffer);
	      return new BaseBuffer(toIndex(length));
	    };
	    const ArrayBufferProto = $ArrayBuffer[PROTOTYPE] = BaseBuffer[PROTOTYPE];
	    for (var keys = gOPN(BaseBuffer), j = 0, key; keys.length > j;) {
	      if (!((key = keys[j++]) in $ArrayBuffer)) hide($ArrayBuffer, key, BaseBuffer[key]);
	    }
	    if (!LIBRARY) ArrayBufferProto.constructor = $ArrayBuffer;
	  }
	  // iOS Safari 7.x bug
	  const view = new $DataView(new $ArrayBuffer(2));
	  const $setInt8 = $DataView[PROTOTYPE].setInt8;
	  view.setInt8(0, 2147483648);
	  view.setInt8(1, 2147483649);
	  if (view.getInt8(0) || !view.getInt8(1)) {
      redefineAll($DataView[PROTOTYPE], {
	    setInt8: function setInt8(byteOffset, value) {
	      $setInt8.call(this, byteOffset, value << 24 >> 24);
	    },
	    setUint8: function setUint8(byteOffset, value) {
	      $setInt8.call(this, byteOffset, value << 24 >> 24);
	    }
	  }, true);
  }
    }
    setToStringTag($ArrayBuffer, ARRAY_BUFFER);
    setToStringTag($DataView, DATA_VIEW);
    hide($DataView[PROTOTYPE], $typed.VIEW, true);
    exports[ARRAY_BUFFER] = $ArrayBuffer;
    exports[DATA_VIEW] = $DataView;
/** */ }),
/* 227 */
/** */ (function (module, exports, __webpack_require__) {
	// https://tc39.github.io/ecma262/#sec-toindex
    const toInteger = __webpack_require__(38);
    const toLength = __webpack_require__(37);
    module.exports = function (it) {
	  if (it === undefined) return 0;
	  const number = toInteger(it);
	  const length = toLength(number);
	  if (number !== length) throw RangeError('Wrong length!');
	  return length;
    };
/** */ }),
/* 228 */
/** */ (function (module, exports, __webpack_require__) {
    const $export = __webpack_require__(8);
    $export($export.G + $export.W + $export.F * !__webpack_require__(225).ABV, {
	  DataView: __webpack_require__(226).DataView
    });
/** */ }),
/* 229 */
/** */ (function (module, exports, __webpack_require__) {
    __webpack_require__(230)('Int8', 1, (init) => function Int8Array(data, byteOffset, length) {
	    return init(this, data, byteOffset, length);
	  });
/** */ }),
/* 230 */
/** */ (function (module, exports, __webpack_require__) {
    if (__webpack_require__(6)) {
	  const LIBRARY = __webpack_require__(28);
	  const global = __webpack_require__(4);
	  const fails = __webpack_require__(7);
	  const $export = __webpack_require__(8);
	  const $typed = __webpack_require__(225);
	  const $buffer = __webpack_require__(226);
	  const ctx = __webpack_require__(20);
	  const anInstance = __webpack_require__(207);
	  const propertyDesc = __webpack_require__(17);
	  const hide = __webpack_require__(10);
	  const redefineAll = __webpack_require__(215);
	  const toInteger = __webpack_require__(38);
	  const toLength = __webpack_require__(37);
	  const toIndex = __webpack_require__(227);
	  const toAbsoluteIndex = __webpack_require__(39);
	  const toPrimitive = __webpack_require__(16);
	  const has = __webpack_require__(5);
	  const classof = __webpack_require__(75);
	  const isObject = __webpack_require__(13);
	  const toObject = __webpack_require__(58);
	  const isArrayIter = __webpack_require__(164);
	  const create = __webpack_require__(46);
	  const getPrototypeOf = __webpack_require__(59);
	  const gOPN = __webpack_require__(50).f;
	  const getIterFn = __webpack_require__(166);
	  const uid = __webpack_require__(19);
	  const wks = __webpack_require__(25);
	  const createArrayMethod = __webpack_require__(174);
	  const createArrayIncludes = __webpack_require__(36);
	  const speciesConstructor = __webpack_require__(209);
	  const ArrayIterators = __webpack_require__(195);
	  const Iterators = __webpack_require__(130);
	  const $iterDetect = __webpack_require__(167);
	  const setSpecies = __webpack_require__(194);
	  const arrayFill = __webpack_require__(190);
	  const arrayCopyWithin = __webpack_require__(187);
	  const $DP = __webpack_require__(11);
	  const $GOPD = __webpack_require__(51);
	  const dP = $DP.f;
	  const gOPD = $GOPD.f;
	  const RangeError = global.RangeError;
	  const TypeError = global.TypeError;
	  const Uint8Array = global.Uint8Array;
	  const ARRAY_BUFFER = 'ArrayBuffer';
	  const SHARED_BUFFER = `Shared${ARRAY_BUFFER}`;
	  const BYTES_PER_ELEMENT = 'BYTES_PER_ELEMENT';
	  const PROTOTYPE = 'prototype';
	  const ArrayProto = Array[PROTOTYPE];
	  const $ArrayBuffer = $buffer.ArrayBuffer;
	  const $DataView = $buffer.DataView;
	  const arrayForEach = createArrayMethod(0);
	  const arrayFilter = createArrayMethod(2);
	  const arraySome = createArrayMethod(3);
	  const arrayEvery = createArrayMethod(4);
	  const arrayFind = createArrayMethod(5);
	  const arrayFindIndex = createArrayMethod(6);
	  const arrayIncludes = createArrayIncludes(true);
	  const arrayIndexOf = createArrayIncludes(false);
	  const arrayValues = ArrayIterators.values;
	  const arrayKeys = ArrayIterators.keys;
	  const arrayEntries = ArrayIterators.entries;
	  const arrayLastIndexOf = ArrayProto.lastIndexOf;
	  const arrayReduce = ArrayProto.reduce;
	  const arrayReduceRight = ArrayProto.reduceRight;
	  const arrayJoin = ArrayProto.join;
	  const arraySort = ArrayProto.sort;
	  const arraySlice = ArrayProto.slice;
	  let arrayToString = ArrayProto.toString;
	  let arrayToLocaleString = ArrayProto.toLocaleString;
	  const ITERATOR = wks('iterator');
	  const TAG = wks('toStringTag');
	  const TYPED_CONSTRUCTOR = uid('typed_constructor');
	  const DEF_CONSTRUCTOR = uid('def_constructor');
	  const ALL_CONSTRUCTORS = $typed.CONSTR;
	  const TYPED_ARRAY = $typed.TYPED;
	  const VIEW = $typed.VIEW;
	  const WRONG_LENGTH = 'Wrong length!';

	  const $map = createArrayMethod(1, (O, length) => allocate(speciesConstructor(O, O[DEF_CONSTRUCTOR]), length));

	  const LITTLE_ENDIAN = fails(() =>
	    // eslint-disable-next-line no-undef
	     new Uint8Array(new Uint16Array([1]).buffer)[0] === 1);

	  const FORCED_SET = !!Uint8Array && !!Uint8Array[PROTOTYPE].set && fails(() => {
	    new Uint8Array(1).set({});
	  });

	  const toOffset = function (it, BYTES) {
	    const offset = toInteger(it);
	    if (offset < 0 || offset % BYTES) throw RangeError('Wrong offset!');
	    return offset;
	  };

	  const validate = function (it) {
	    if (isObject(it) && TYPED_ARRAY in it) return it;
	    throw TypeError(`${it} is not a typed array!`);
	  };

	  var allocate = function (C, length) {
	    if (!(isObject(C) && TYPED_CONSTRUCTOR in C)) {
	      throw TypeError('It is not a typed array constructor!');
	    } return new C(length);
	  };

	  const speciesFromList = function (O, list) {
	    return fromList(speciesConstructor(O, O[DEF_CONSTRUCTOR]), list);
	  };

	  var fromList = function (C, list) {
	    let index = 0;
	    const length = list.length;
	    const result = allocate(C, length);
	    while (length > index) result[index] = list[index++];
	    return result;
	  };

	  const addGetter = function (it, key, internal) {
	    dP(it, key, { get() { return this._d[internal]; } });
	  };

	  const $from = function from(source /* , mapfn, thisArg */) {
	    let O = toObject(source);
	    const aLen = arguments.length;
	    let mapfn = aLen > 1 ? arguments[1] : undefined;
	    const mapping = mapfn !== undefined;
	    const iterFn = getIterFn(O);
	    let i,
        length,
        values,
        result,
        step,
        iterator;
	    if (iterFn != undefined && !isArrayIter(iterFn)) {
	      for (iterator = iterFn.call(O), values = [], i = 0; !(step = iterator.next()).done; i++) {
	        values.push(step.value);
	      } O = values;
	    }
	    if (mapping && aLen > 2) mapfn = ctx(mapfn, arguments[2], 2);
	    for (i = 0, length = toLength(O.length), result = allocate(this, length); length > i; i++) {
	      result[i] = mapping ? mapfn(O[i], i) : O[i];
	    }
	    return result;
	  };

	  const $of = function of(/* ...items */) {
	    let index = 0;
	    const length = arguments.length;
	    const result = allocate(this, length);
	    while (length > index) result[index] = arguments[index++];
	    return result;
	  };

	  // iOS Safari 6.x fails here
	  const TO_LOCALE_BUG = !!Uint8Array && fails(() => { arrayToLocaleString.call(new Uint8Array(1)); });

	  const $toLocaleString = function toLocaleString() {
	    return arrayToLocaleString.apply(TO_LOCALE_BUG ? arraySlice.call(validate(this)) : validate(this), arguments);
	  };

	  const proto = {
	    copyWithin: function copyWithin(target, start /* , end */) {
	      return arrayCopyWithin.call(validate(this), target, start, arguments.length > 2 ? arguments[2] : undefined);
	    },
	    every: function every(callbackfn /* , thisArg */) {
	      return arrayEvery(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    fill: function fill(value /* , start, end */) { // eslint-disable-line no-unused-vars
	      return arrayFill.apply(validate(this), arguments);
	    },
	    filter: function filter(callbackfn /* , thisArg */) {
	      return speciesFromList(this, arrayFilter(validate(this), callbackfn,
	        arguments.length > 1 ? arguments[1] : undefined));
	    },
	    find: function find(predicate /* , thisArg */) {
	      return arrayFind(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    findIndex: function findIndex(predicate /* , thisArg */) {
	      return arrayFindIndex(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    forEach: function forEach(callbackfn /* , thisArg */) {
	      arrayForEach(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    indexOf: function indexOf(searchElement /* , fromIndex */) {
	      return arrayIndexOf(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    includes: function includes(searchElement /* , fromIndex */) {
	      return arrayIncludes(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    join: function join(separator) { // eslint-disable-line no-unused-vars
	      return arrayJoin.apply(validate(this), arguments);
	    },
	    lastIndexOf: function lastIndexOf(searchElement /* , fromIndex */) { // eslint-disable-line no-unused-vars
	      return arrayLastIndexOf.apply(validate(this), arguments);
	    },
	    map: function map(mapfn /* , thisArg */) {
	      return $map(validate(this), mapfn, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    reduce: function reduce(callbackfn /* , initialValue */) { // eslint-disable-line no-unused-vars
	      return arrayReduce.apply(validate(this), arguments);
	    },
	    reduceRight: function reduceRight(callbackfn /* , initialValue */) { // eslint-disable-line no-unused-vars
	      return arrayReduceRight.apply(validate(this), arguments);
	    },
	    reverse: function reverse() {
	      const that = this;
	      let length = validate(that).length;
	      const middle = Math.floor(length / 2);
	      let index = 0;
	      let value;
	      while (index < middle) {
	        value = that[index];
	        that[index++] = that[--length];
	        that[length] = value;
	      } return that;
	    },
	    some: function some(callbackfn /* , thisArg */) {
	      return arraySome(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    sort: function sort(comparefn) {
	      return arraySort.call(validate(this), comparefn);
	    },
	    subarray: function subarray(begin, end) {
	      const O = validate(this);
	      const length = O.length;
	      const $begin = toAbsoluteIndex(begin, length);
	      return new (speciesConstructor(O, O[DEF_CONSTRUCTOR]))(
	        O.buffer,
	        O.byteOffset + $begin * O.BYTES_PER_ELEMENT,
	        toLength((end === undefined ? length : toAbsoluteIndex(end, length)) - $begin)
	      );
	    }
	  };

	  const $slice = function slice(start, end) {
	    return speciesFromList(this, arraySlice.call(validate(this), start, end));
	  };

	  const $set = function set(arrayLike /* , offset */) {
	    validate(this);
	    const offset = toOffset(arguments[1], 1);
	    const length = this.length;
	    const src = toObject(arrayLike);
	    const len = toLength(src.length);
	    let index = 0;
	    if (len + offset > length) throw RangeError(WRONG_LENGTH);
	    while (index < len) this[offset + index] = src[index++];
	  };

	  const $iterators = {
	    entries: function entries() {
	      return arrayEntries.call(validate(this));
	    },
	    keys: function keys() {
	      return arrayKeys.call(validate(this));
	    },
	    values: function values() {
	      return arrayValues.call(validate(this));
	    }
	  };

	  const isTAIndex = function (target, key) {
	    return isObject(target)
	      && target[TYPED_ARRAY]
	      && typeof key !== 'symbol'
	      && key in target
	      && String(+key) == String(key);
	  };
	  const $getDesc = function getOwnPropertyDescriptor(target, key) {
	    return isTAIndex(target, key = toPrimitive(key, true))
	      ? propertyDesc(2, target[key])
	      : gOPD(target, key);
	  };
	  const $setDesc = function defineProperty(target, key, desc) {
	    if (isTAIndex(target, key = toPrimitive(key, true))
	      && isObject(desc)
	      && has(desc, 'value')
	      && !has(desc, 'get')
	      && !has(desc, 'set')
	      // TODO: add validation descriptor w/o calling accessors
	      && !desc.configurable
	      && (!has(desc, 'writable') || desc.writable)
	      && (!has(desc, 'enumerable') || desc.enumerable)
	    ) {
	      target[key] = desc.value;
	      return target;
	    } return dP(target, key, desc);
	  };

	  if (!ALL_CONSTRUCTORS) {
	    $GOPD.f = $getDesc;
	    $DP.f = $setDesc;
	  }

	  $export($export.S + $export.F * !ALL_CONSTRUCTORS, 'Object', {
	    getOwnPropertyDescriptor: $getDesc,
	    defineProperty: $setDesc
	  });

	  if (fails(() => { arrayToString.call({}); })) {
	    arrayToString = arrayToLocaleString = function toString() {
	      return arrayJoin.call(this);
	    };
	  }

	  const $TypedArrayPrototype$ = redefineAll({}, proto);
	  redefineAll($TypedArrayPrototype$, $iterators);
	  hide($TypedArrayPrototype$, ITERATOR, $iterators.values);
	  redefineAll($TypedArrayPrototype$, {
	    slice: $slice,
	    set: $set,
	    constructor() { /* noop */ },
	    toString: arrayToString,
	    toLocaleString: $toLocaleString
	  });
	  addGetter($TypedArrayPrototype$, 'buffer', 'b');
	  addGetter($TypedArrayPrototype$, 'byteOffset', 'o');
	  addGetter($TypedArrayPrototype$, 'byteLength', 'l');
	  addGetter($TypedArrayPrototype$, 'length', 'e');
	  dP($TypedArrayPrototype$, TAG, {
	    get() { return this[TYPED_ARRAY]; }
	  });

	  // eslint-disable-next-line max-statements
	  module.exports = function (KEY, BYTES, wrapper, CLAMPED) {
	    CLAMPED = !!CLAMPED;
	    const NAME = `${KEY + (CLAMPED ? 'Clamped' : '')}Array`;
	    const GETTER = `get${KEY}`;
	    const SETTER = `set${KEY}`;
	    let TypedArray = global[NAME];
	    const Base = TypedArray || {};
	    const TAC = TypedArray && getPrototypeOf(TypedArray);
	    const FORCED = !TypedArray || !$typed.ABV;
	    const O = {};
	    let TypedArrayPrototype = TypedArray && TypedArray[PROTOTYPE];
	    const getter = function (that, index) {
	      const data = that._d;
	      return data.v[GETTER](index * BYTES + data.o, LITTLE_ENDIAN);
	    };
	    const setter = function (that, index, value) {
	      const data = that._d;
	      if (CLAMPED) value = (value = Math.round(value)) < 0 ? 0 : value > 0xff ? 0xff : value & 0xff;
	      data.v[SETTER](index * BYTES + data.o, value, LITTLE_ENDIAN);
	    };
	    const addElement = function (that, index) {
	      dP(that, index, {
	        get() {
	          return getter(this, index);
	        },
	        set(value) {
	          return setter(this, index, value);
	        },
	        enumerable: true
	      });
	    };
	    if (FORCED) {
	      TypedArray = wrapper((that, data, $offset, $length) => {
	        anInstance(that, TypedArray, NAME, '_d');
	        let index = 0;
	        let offset = 0;
	        let buffer,
            byteLength,
            length,
            klass;
	        if (!isObject(data)) {
	          length = toIndex(data);
	          byteLength = length * BYTES;
	          buffer = new $ArrayBuffer(byteLength);
	        } else if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {
	          buffer = data;
	          offset = toOffset($offset, BYTES);
	          const $len = data.byteLength;
	          if ($length === undefined) {
	            if ($len % BYTES) throw RangeError(WRONG_LENGTH);
	            byteLength = $len - offset;
	            if (byteLength < 0) throw RangeError(WRONG_LENGTH);
	          } else {
	            byteLength = toLength($length) * BYTES;
	            if (byteLength + offset > $len) throw RangeError(WRONG_LENGTH);
	          }
	          length = byteLength / BYTES;
	        } else if (TYPED_ARRAY in data) {
	          return fromList(TypedArray, data);
	        } else {
	          return $from.call(TypedArray, data);
	        }
	        hide(that, '_d', {
	          b: buffer,
	          o: offset,
	          l: byteLength,
	          e: length,
	          v: new $DataView(buffer)
	        });
	        while (index < length) addElement(that, index++);
	      });
	      TypedArrayPrototype = TypedArray[PROTOTYPE] = create($TypedArrayPrototype$);
	      hide(TypedArrayPrototype, 'constructor', TypedArray);
	    } else if (!fails(() => {
	      TypedArray(1);
	    }) || !fails(() => {
	      new TypedArray(-1); // eslint-disable-line no-new
	    }) || !$iterDetect((iter) => {
	      new TypedArray(); // eslint-disable-line no-new
	      new TypedArray(null); // eslint-disable-line no-new
	      new TypedArray(1.5); // eslint-disable-line no-new
	      new TypedArray(iter); // eslint-disable-line no-new
	    }, true)) {
	      TypedArray = wrapper((that, data, $offset, $length) => {
	        anInstance(that, TypedArray, NAME);
	        let klass;
	        // `ws` module bug, temporarily remove validation length for Uint8Array
	        // https://github.com/websockets/ws/pull/645
	        if (!isObject(data)) return new Base(toIndex(data));
	        if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {
	          return $length !== undefined
	            ? new Base(data, toOffset($offset, BYTES), $length)
	            : $offset !== undefined
	              ? new Base(data, toOffset($offset, BYTES))
	              : new Base(data);
	        }
	        if (TYPED_ARRAY in data) return fromList(TypedArray, data);
	        return $from.call(TypedArray, data);
	      });
	      arrayForEach(TAC !== Function.prototype ? gOPN(Base).concat(gOPN(TAC)) : gOPN(Base), (key) => {
	        if (!(key in TypedArray)) hide(TypedArray, key, Base[key]);
	      });
	      TypedArray[PROTOTYPE] = TypedArrayPrototype;
	      if (!LIBRARY) TypedArrayPrototype.constructor = TypedArray;
	    }
	    const $nativeIterator = TypedArrayPrototype[ITERATOR];
	    const CORRECT_ITER_NAME = !!$nativeIterator
	      && ($nativeIterator.name == 'values' || $nativeIterator.name == undefined);
	    const $iterator = $iterators.values;
	    hide(TypedArray, TYPED_CONSTRUCTOR, true);
	    hide(TypedArrayPrototype, TYPED_ARRAY, NAME);
	    hide(TypedArrayPrototype, VIEW, true);
	    hide(TypedArrayPrototype, DEF_CONSTRUCTOR, TypedArray);

	    if (CLAMPED ? new TypedArray(1)[TAG] != NAME : !(TAG in TypedArrayPrototype)) {
	      dP(TypedArrayPrototype, TAG, {
	        get() { return NAME; }
	      });
	    }

	    O[NAME] = TypedArray;

	    $export($export.G + $export.W + $export.F * (TypedArray != Base), O);

	    $export($export.S, NAME, {
	      BYTES_PER_ELEMENT: BYTES
	    });

	    $export($export.S + $export.F * fails(() => { Base.of.call(TypedArray, 1); }), NAME, {
	      from: $from,
	      of: $of
	    });

	    if (!(BYTES_PER_ELEMENT in TypedArrayPrototype)) hide(TypedArrayPrototype, BYTES_PER_ELEMENT, BYTES);

	    $export($export.P, NAME, proto);

	    setSpecies(NAME);

	    $export($export.P + $export.F * FORCED_SET, NAME, { set: $set });

	    $export($export.P + $export.F * !CORRECT_ITER_NAME, NAME, $iterators);

	    if (!LIBRARY && TypedArrayPrototype.toString != arrayToString) TypedArrayPrototype.toString = arrayToString;

	    $export($export.P + $export.F * fails(() => {
	      new TypedArray(1).slice();
	    }), NAME, { slice: $slice });

	    $export($export.P + $export.F * (fails(() => [1, 2].toLocaleString() != new TypedArray([1, 2]).toLocaleString()) || !fails(() => {
	      TypedArrayPrototype.toLocaleString.call([1, 2]);
	    })), NAME, { toLocaleString: $toLocaleString });

	    Iterators[NAME] = CORRECT_ITER_NAME ? $nativeIterator : $iterator;
	    if (!LIBRARY && !CORRECT_ITER_NAME) hide(TypedArrayPrototype, ITERATOR, $iterator);
	  };
    } else module.exports = function () { /* empty */ };
/** */ }),
/* 231 */
/** */ (function (module, exports, __webpack_require__) {
    __webpack_require__(230)('Uint8', 1, (init) => function Uint8Array(data, byteOffset, length) {
	    return init(this, data, byteOffset, length);
	  });
/** */ }),
/* 232 */
/** */ (function (module, exports, __webpack_require__) {
    __webpack_require__(230)('Uint8', 1, (init) => function Uint8ClampedArray(data, byteOffset, length) {
	    return init(this, data, byteOffset, length);
	  }, true);
/** */ }),
/* 233 */
/** */ (function (module, exports, __webpack_require__) {
    __webpack_require__(230)('Int16', 2, (init) => function Int16Array(data, byteOffset, length) {
	    return init(this, data, byteOffset, length);
	  });
/** */ }),
/* 234 */
/** */ (function (module, exports, __webpack_require__) {
    __webpack_require__(230)('Uint16', 2, (init) => function Uint16Array(data, byteOffset, length) {
	    return init(this, data, byteOffset, length);
	  });
/** */ }),
/* 235 */
/** */ (function (module, exports, __webpack_require__) {
    __webpack_require__(230)('Int32', 4, (init) => function Int32Array(data, byteOffset, length) {
	    return init(this, data, byteOffset, length);
	  });
/** */ }),
/* 236 */
/** */ (function (module, exports, __webpack_require__) {
    __webpack_require__(230)('Uint32', 4, (init) => function Uint32Array(data, byteOffset, length) {
	    return init(this, data, byteOffset, length);
	  });
/** */ }),
/* 237 */
/** */ (function (module, exports, __webpack_require__) {
    __webpack_require__(230)('Float32', 4, (init) => function Float32Array(data, byteOffset, length) {
	    return init(this, data, byteOffset, length);
	  });
/** */ }),
/* 238 */
/** */ (function (module, exports, __webpack_require__) {
    __webpack_require__(230)('Float64', 8, (init) => function Float64Array(data, byteOffset, length) {
	    return init(this, data, byteOffset, length);
	  });
/** */ }),
/* 239 */
/** */ (function (module, exports, __webpack_require__) {
	// 26.1.1 Reflect.apply(target, thisArgument, argumentsList)
    const $export = __webpack_require__(8);
    const aFunction = __webpack_require__(21);
    const anObject = __webpack_require__(12);
    const rApply = (__webpack_require__(4).Reflect || {}).apply;
    const fApply = Function.apply;
	// MS Edge argumentsList argument is optional
    $export($export.S + $export.F * !__webpack_require__(7)(() => {
	  rApply(() => { /* empty */ });
    }), 'Reflect', {
	  apply: function apply(target, thisArgument, argumentsList) {
	    const T = aFunction(target);
	    const L = anObject(argumentsList);
	    return rApply ? rApply(T, thisArgument, L) : fApply.call(T, thisArgument, L);
	  }
    });
/** */ }),
/* 240 */
/** */ (function (module, exports, __webpack_require__) {
	// 26.1.2 Reflect.construct(target, argumentsList [, newTarget])
    const $export = __webpack_require__(8);
    const create = __webpack_require__(46);
    const aFunction = __webpack_require__(21);
    const anObject = __webpack_require__(12);
    const isObject = __webpack_require__(13);
    const fails = __webpack_require__(7);
    const bind = __webpack_require__(77);
    const rConstruct = (__webpack_require__(4).Reflect || {}).construct;

	// MS Edge supports only 2 arguments and argumentsList argument is optional
	// FF Nightly sets third argument as `new.target`, but does not create `this` from it
    const NEW_TARGET_BUG = fails(() => {
	  function F() { /* empty */ }
	  return !(rConstruct(() => { /* empty */ }, [], F) instanceof F);
    });
    const ARGS_BUG = !fails(() => {
	  rConstruct(() => { /* empty */ });
    });

    $export($export.S + $export.F * (NEW_TARGET_BUG || ARGS_BUG), 'Reflect', {
	  construct: function construct(Target, args /* , newTarget */) {
	    aFunction(Target);
	    anObject(args);
	    const newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);
	    if (ARGS_BUG && !NEW_TARGET_BUG) return rConstruct(Target, args, newTarget);
	    if (Target == newTarget) {
	      // w/o altered newTarget, optimization for 0-4 arguments
	      switch (args.length) {
	        case 0: return new Target();
	        case 1: return new Target(args[0]);
	        case 2: return new Target(args[0], args[1]);
	        case 3: return new Target(args[0], args[1], args[2]);
	        case 4: return new Target(args[0], args[1], args[2], args[3]);
	      }
	      // w/o altered newTarget, lot of arguments case
	      const $args = [null];
	      $args.push(...args);
	      return new (bind.apply(Target, $args))();
	    }
	    // with altered newTarget, not support built-in constructors
	    const proto = newTarget.prototype;
	    const instance = create(isObject(proto) ? proto : Object.prototype);
	    const result = Function.apply.call(Target, instance, args);
	    return isObject(result) ? result : instance;
	  }
    });
/** */ }),
/* 241 */
/** */ (function (module, exports, __webpack_require__) {
	// 26.1.3 Reflect.defineProperty(target, propertyKey, attributes)
    const dP = __webpack_require__(11);
    const $export = __webpack_require__(8);
    const anObject = __webpack_require__(12);
    const toPrimitive = __webpack_require__(16);

	// MS Edge has broken Reflect.defineProperty - throwing instead of returning false
    $export($export.S + $export.F * __webpack_require__(7)(() => {
	  // eslint-disable-next-line no-undef
	  Reflect.defineProperty(dP.f({}, 1, { value: 1 }), 1, { value: 2 });
    }), 'Reflect', {
	  defineProperty: function defineProperty(target, propertyKey, attributes) {
	    anObject(target);
	    propertyKey = toPrimitive(propertyKey, true);
	    anObject(attributes);
	    try {
	      dP.f(target, propertyKey, attributes);
	      return true;
	    } catch (e) {
	      return false;
	    }
	  }
    });
/** */ }),
/* 242 */
/** */ (function (module, exports, __webpack_require__) {
	// 26.1.4 Reflect.deleteProperty(target, propertyKey)
    const $export = __webpack_require__(8);
    const gOPD = __webpack_require__(51).f;
    const anObject = __webpack_require__(12);

    $export($export.S, 'Reflect', {
	  deleteProperty: function deleteProperty(target, propertyKey) {
	    const desc = gOPD(anObject(target), propertyKey);
	    return desc && !desc.configurable ? false : delete target[propertyKey];
	  }
    });
/** */ }),
/* 243 */
/** */ (function (module, exports, __webpack_require__) {
	// 26.1.5 Reflect.enumerate(target)
    const $export = __webpack_require__(8);
    const anObject = __webpack_require__(12);
    const Enumerate = function (iterated) {
	  this._t = anObject(iterated); // target
	  this._i = 0;                  // next index
	  const keys = this._k = [];      // keys
	  let key;
	  for (key in iterated) keys.push(key);
    };
    __webpack_require__(131)(Enumerate, 'Object', function () {
	  const that = this;
	  const keys = that._k;
	  let key;
	  do {
	    if (that._i >= keys.length) return { value: undefined, done: true };
	  } while (!((key = keys[that._i++]) in that._t));
	  return { value: key, done: false };
    });

    $export($export.S, 'Reflect', {
	  enumerate: function enumerate(target) {
	    return new Enumerate(target);
	  }
    });
/** */ }),
/* 244 */
/** */ (function (module, exports, __webpack_require__) {
	// 26.1.6 Reflect.get(target, propertyKey [, receiver])
    const gOPD = __webpack_require__(51);
    const getPrototypeOf = __webpack_require__(59);
    const has = __webpack_require__(5);
    const $export = __webpack_require__(8);
    const isObject = __webpack_require__(13);
    const anObject = __webpack_require__(12);

    function get(target, propertyKey /* , receiver */) {
	  const receiver = arguments.length < 3 ? target : arguments[2];
	  let desc,
      proto;
	  if (anObject(target) === receiver) return target[propertyKey];
	  if (desc = gOPD.f(target, propertyKey)) {
      return has(desc, 'value')
	    ? desc.value
	    : desc.get !== undefined
	      ? desc.get.call(receiver)
	      : undefined;
  }
	  if (isObject(proto = getPrototypeOf(target))) return get(proto, propertyKey, receiver);
    }

    $export($export.S, 'Reflect', { get });
/** */ }),
/* 245 */
/** */ (function (module, exports, __webpack_require__) {
	// 26.1.7 Reflect.getOwnPropertyDescriptor(target, propertyKey)
    const gOPD = __webpack_require__(51);
    const $export = __webpack_require__(8);
    const anObject = __webpack_require__(12);

    $export($export.S, 'Reflect', {
	  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey) {
	    return gOPD.f(anObject(target), propertyKey);
	  }
    });
/** */ }),
/* 246 */
/** */ (function (module, exports, __webpack_require__) {
	// 26.1.8 Reflect.getPrototypeOf(target)
    const $export = __webpack_require__(8);
    const getProto = __webpack_require__(59);
    const anObject = __webpack_require__(12);

    $export($export.S, 'Reflect', {
	  getPrototypeOf: function getPrototypeOf(target) {
	    return getProto(anObject(target));
	  }
    });
/** */ }),
/* 247 */
/** */ (function (module, exports, __webpack_require__) {
	// 26.1.9 Reflect.has(target, propertyKey)
    const $export = __webpack_require__(8);

    $export($export.S, 'Reflect', {
	  has: function has(target, propertyKey) {
	    return propertyKey in target;
	  }
    });
/** */ }),
/* 248 */
/** */ (function (module, exports, __webpack_require__) {
	// 26.1.10 Reflect.isExtensible(target)
    const $export = __webpack_require__(8);
    const anObject = __webpack_require__(12);
    const $isExtensible = Object.isExtensible;

    $export($export.S, 'Reflect', {
	  isExtensible: function isExtensible(target) {
	    anObject(target);
	    return $isExtensible ? $isExtensible(target) : true;
	  }
    });
/** */ }),
/* 249 */
/** */ (function (module, exports, __webpack_require__) {
	// 26.1.11 Reflect.ownKeys(target)
    const $export = __webpack_require__(8);

    $export($export.S, 'Reflect', { ownKeys: __webpack_require__(250) });
/** */ }),
/* 250 */
/** */ (function (module, exports, __webpack_require__) {
	// all object keys, includes non-enumerable and symbols
    const gOPN = __webpack_require__(50);
    const gOPS = __webpack_require__(43);
    const anObject = __webpack_require__(12);
    const Reflect = __webpack_require__(4).Reflect;
    module.exports = Reflect && Reflect.ownKeys || function ownKeys(it) {
	  const keys = gOPN.f(anObject(it));
	  const getSymbols = gOPS.f;
	  return getSymbols ? keys.concat(getSymbols(it)) : keys;
    };
/** */ }),
/* 251 */
/** */ (function (module, exports, __webpack_require__) {
	// 26.1.12 Reflect.preventExtensions(target)
    const $export = __webpack_require__(8);
    const anObject = __webpack_require__(12);
    const $preventExtensions = Object.preventExtensions;

    $export($export.S, 'Reflect', {
	  preventExtensions: function preventExtensions(target) {
	    anObject(target);
	    try {
	      if ($preventExtensions) $preventExtensions(target);
	      return true;
	    } catch (e) {
	      return false;
	    }
	  }
    });
/** */ }),
/* 252 */
/** */ (function (module, exports, __webpack_require__) {
	// 26.1.13 Reflect.set(target, propertyKey, V [, receiver])
    const dP = __webpack_require__(11);
    const gOPD = __webpack_require__(51);
    const getPrototypeOf = __webpack_require__(59);
    const has = __webpack_require__(5);
    const $export = __webpack_require__(8);
    const createDesc = __webpack_require__(17);
    const anObject = __webpack_require__(12);
    const isObject = __webpack_require__(13);

    function set(target, propertyKey, V /* , receiver */) {
	  const receiver = arguments.length < 4 ? target : arguments[3];
	  let ownDesc = gOPD.f(anObject(target), propertyKey);
	  let existingDescriptor,
      proto;
	  if (!ownDesc) {
	    if (isObject(proto = getPrototypeOf(target))) {
	      return set(proto, propertyKey, V, receiver);
	    }
	    ownDesc = createDesc(0);
	  }
	  if (has(ownDesc, 'value')) {
	    if (ownDesc.writable === false || !isObject(receiver)) return false;
	    existingDescriptor = gOPD.f(receiver, propertyKey) || createDesc(0);
	    existingDescriptor.value = V;
	    dP.f(receiver, propertyKey, existingDescriptor);
	    return true;
	  }
	  return ownDesc.set === undefined ? false : (ownDesc.set.call(receiver, V), true);
    }

    $export($export.S, 'Reflect', { set });
/** */ }),
/* 253 */
/** */ (function (module, exports, __webpack_require__) {
	// 26.1.14 Reflect.setPrototypeOf(target, proto)
    const $export = __webpack_require__(8);
    const setProto = __webpack_require__(73);

    if (setProto) {
        $export($export.S, 'Reflect', {
	  setPrototypeOf: function setPrototypeOf(target, proto) {
	    setProto.check(target, proto);
	    try {
	      setProto.set(target, proto);
	      return true;
	    } catch (e) {
	      return false;
	    }
	  }
        });
    }
/** */ }),
/* 254 */
/** */ (function (module, exports, __webpack_require__) {
	// https://github.com/tc39/Array.prototype.includes
    const $export = __webpack_require__(8);
    const $includes = __webpack_require__(36)(true);

    $export($export.P, 'Array', {
	  includes: function includes(el /* , fromIndex = 0 */) {
	    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
	  }
    });

    __webpack_require__(188)('includes');
/** */ }),
/* 255 */
/** */ (function (module, exports, __webpack_require__) {
	// https://tc39.github.io/proposal-flatMap/#sec-Array.prototype.flatMap
    const $export = __webpack_require__(8);
    const flattenIntoArray = __webpack_require__(256);
    const toObject = __webpack_require__(58);
    const toLength = __webpack_require__(37);
    const aFunction = __webpack_require__(21);
    const arraySpeciesCreate = __webpack_require__(175);

    $export($export.P, 'Array', {
	  flatMap: function flatMap(callbackfn /* , thisArg */) {
	    const O = toObject(this);
	    let sourceLen,
        A;
	    aFunction(callbackfn);
	    sourceLen = toLength(O.length);
	    A = arraySpeciesCreate(O, 0);
	    flattenIntoArray(A, O, O, sourceLen, 0, 1, callbackfn, arguments[1]);
	    return A;
	  }
    });

    __webpack_require__(188)('flatMap');
/** */ }),
/* 256 */
/** */ (function (module, exports, __webpack_require__) {
	// https://tc39.github.io/proposal-flatMap/#sec-FlattenIntoArray
    const isArray = __webpack_require__(45);
    const isObject = __webpack_require__(13);
    const toLength = __webpack_require__(37);
    const ctx = __webpack_require__(20);
    const IS_CONCAT_SPREADABLE = __webpack_require__(25)('isConcatSpreadable');

    function flattenIntoArray(target, original, source, sourceLen, start, depth, mapper, thisArg) {
	  let targetIndex = start;
	  let sourceIndex = 0;
	  const mapFn = mapper ? ctx(mapper, thisArg, 3) : false;
	  let element,
      spreadable;

	  while (sourceIndex < sourceLen) {
	    if (sourceIndex in source) {
	      element = mapFn ? mapFn(source[sourceIndex], sourceIndex, original) : source[sourceIndex];

	      spreadable = false;
	      if (isObject(element)) {
	        spreadable = element[IS_CONCAT_SPREADABLE];
	        spreadable = spreadable !== undefined ? !!spreadable : isArray(element);
	      }

	      if (spreadable && depth > 0) {
	        targetIndex = flattenIntoArray(target, original, element, toLength(element.length), targetIndex, depth - 1) - 1;
	      } else {
	        if (targetIndex >= 0x1fffffffffffff) throw TypeError();
	        target[targetIndex] = element;
	      }

	      targetIndex++;
	    }
	    sourceIndex++;
	  }
	  return targetIndex;
    }

    module.exports = flattenIntoArray;
/** */ }),
/* 257 */
/** */ (function (module, exports, __webpack_require__) {
	// https://tc39.github.io/proposal-flatMap/#sec-Array.prototype.flatten
    const $export = __webpack_require__(8);
    const flattenIntoArray = __webpack_require__(256);
    const toObject = __webpack_require__(58);
    const toLength = __webpack_require__(37);
    const toInteger = __webpack_require__(38);
    const arraySpeciesCreate = __webpack_require__(175);

    $export($export.P, 'Array', {
	  flatten: function flatten(/* depthArg = 1 */) {
	    const depthArg = arguments[0];
	    const O = toObject(this);
	    const sourceLen = toLength(O.length);
	    const A = arraySpeciesCreate(O, 0);
	    flattenIntoArray(A, O, O, sourceLen, 0, depthArg === undefined ? 1 : toInteger(depthArg));
	    return A;
	  }
    });

    __webpack_require__(188)('flatten');
/** */ }),
/* 258 */
/** */ (function (module, exports, __webpack_require__) {
	// https://github.com/mathiasbynens/String.prototype.at
    const $export = __webpack_require__(8);
    const $at = __webpack_require__(128)(true);

    $export($export.P, 'String', {
	  at: function at(pos) {
	    return $at(this, pos);
	  }
    });
/** */ }),
/* 259 */
/** */ (function (module, exports, __webpack_require__) {
	// https://github.com/tc39/proposal-string-pad-start-end
    const $export = __webpack_require__(8);
    const $pad = __webpack_require__(260);

    $export($export.P, 'String', {
	  padStart: function padStart(maxLength /* , fillString = ' ' */) {
	    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, true);
	  }
    });
/** */ }),
/* 260 */
/** */ (function (module, exports, __webpack_require__) {
	// https://github.com/tc39/proposal-string-pad-start-end
    const toLength = __webpack_require__(37);
    const repeat = __webpack_require__(91);
    const defined = __webpack_require__(35);

    module.exports = function (that, maxLength, fillString, left) {
	  const S = String(defined(that));
	  const stringLength = S.length;
	  const fillStr = fillString === undefined ? ' ' : String(fillString);
	  const intMaxLength = toLength(maxLength);
	  if (intMaxLength <= stringLength || fillStr == '') return S;
	  const fillLen = intMaxLength - stringLength;
	  let stringFiller = repeat.call(fillStr, Math.ceil(fillLen / fillStr.length));
	  if (stringFiller.length > fillLen) stringFiller = stringFiller.slice(0, fillLen);
	  return left ? stringFiller + S : S + stringFiller;
    };
/** */ }),
/* 261 */
/** */ (function (module, exports, __webpack_require__) {
	// https://github.com/tc39/proposal-string-pad-start-end
    const $export = __webpack_require__(8);
    const $pad = __webpack_require__(260);

    $export($export.P, 'String', {
	  padEnd: function padEnd(maxLength /* , fillString = ' ' */) {
	    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, false);
	  }
    });
/** */ }),
/* 262 */
/** */ (function (module, exports, __webpack_require__) {
	// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
    __webpack_require__(83)('trimLeft', ($trim) => function trimLeft() {
	    return $trim(this, 1);
	  }, 'trimStart');
/** */ }),
/* 263 */
/** */ (function (module, exports, __webpack_require__) {
	// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
    __webpack_require__(83)('trimRight', ($trim) => function trimRight() {
	    return $trim(this, 2);
	  }, 'trimEnd');
/** */ }),
/* 264 */
/** */ (function (module, exports, __webpack_require__) {
	// https://tc39.github.io/String.prototype.matchAll/
    const $export = __webpack_require__(8);
    const defined = __webpack_require__(35);
    const toLength = __webpack_require__(37);
    const isRegExp = __webpack_require__(135);
    const getFlags = __webpack_require__(198);
    const RegExpProto = RegExp.prototype;

    const $RegExpStringIterator = function (regexp, string) {
	  this._r = regexp;
	  this._s = string;
    };

    __webpack_require__(131)($RegExpStringIterator, 'RegExp String', function next() {
	  const match = this._r.exec(this._s);
	  return { value: match, done: match === null };
    });

    $export($export.P, 'String', {
	  matchAll: function matchAll(regexp) {
	    defined(this);
	    if (!isRegExp(regexp)) throw TypeError(`${regexp} is not a regexp!`);
	    const S = String(this);
	    const flags = 'flags' in RegExpProto ? String(regexp.flags) : getFlags.call(regexp);
	    const rx = new RegExp(regexp.source, ~flags.indexOf('g') ? flags : `g${flags}`);
	    rx.lastIndex = toLength(regexp.lastIndex);
	    return new $RegExpStringIterator(rx, S);
	  }
    });
/** */ }),
/* 265 */
/** */ (function (module, exports, __webpack_require__) {
    __webpack_require__(27)('asyncIterator');
/** */ }),
/* 266 */
/** */ (function (module, exports, __webpack_require__) {
    __webpack_require__(27)('observable');
/** */ }),
/* 267 */
/** */ (function (module, exports, __webpack_require__) {
	// https://github.com/tc39/proposal-object-getownpropertydescriptors
    const $export = __webpack_require__(8);
    const ownKeys = __webpack_require__(250);
    const toIObject = __webpack_require__(32);
    const gOPD = __webpack_require__(51);
    const createProperty = __webpack_require__(165);

    $export($export.S, 'Object', {
	  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
	    const O = toIObject(object);
	    const getDesc = gOPD.f;
	    const keys = ownKeys(O);
	    const result = {};
	    let i = 0;
	    let key,
        desc;
	    while (keys.length > i) {
	      desc = getDesc(O, key = keys[i++]);
	      if (desc !== undefined) createProperty(result, key, desc);
	    }
	    return result;
	  }
    });
/** */ }),
/* 268 */
/** */ (function (module, exports, __webpack_require__) {
	// https://github.com/tc39/proposal-object-values-entries
    const $export = __webpack_require__(8);
    const $values = __webpack_require__(269)(false);

    $export($export.S, 'Object', {
	  values: function values(it) {
	    return $values(it);
	  }
    });
/** */ }),
/* 269 */
/** */ (function (module, exports, __webpack_require__) {
    const getKeys = __webpack_require__(30);
    const toIObject = __webpack_require__(32);
    const isEnum = __webpack_require__(44).f;
    module.exports = function (isEntries) {
	  return function (it) {
	    const O = toIObject(it);
	    const keys = getKeys(O);
	    const length = keys.length;
	    let i = 0;
	    const result = [];
	    let key;
	    while (length > i) {
        if (isEnum.call(O, key = keys[i++])) {
	      result.push(isEntries ? [key, O[key]] : O[key]);
	    }
    } return result;
	  };
    };
/** */ }),
/* 270 */
/** */ (function (module, exports, __webpack_require__) {
	// https://github.com/tc39/proposal-object-values-entries
    const $export = __webpack_require__(8);
    const $entries = __webpack_require__(269)(true);

    $export($export.S, 'Object', {
	  entries: function entries(it) {
	    return $entries(it);
	  }
    });
/** */ }),
/* 271 */
/** */ (function (module, exports, __webpack_require__) {
    const $export = __webpack_require__(8);
    const toObject = __webpack_require__(58);
    const aFunction = __webpack_require__(21);
    const $defineProperty = __webpack_require__(11);

	// B.2.2.2 Object.prototype.__defineGetter__(P, getter)
    __webpack_require__(6) && $export($export.P + __webpack_require__(272), 'Object', {
	  __defineGetter__: function __defineGetter__(P, getter) {
	    $defineProperty.f(toObject(this), P, { get: aFunction(getter), enumerable: true, configurable: true });
	  }
    });
/** */ }),
/* 272 */
/** */ (function (module, exports, __webpack_require__) {
	// Forced replacement prototype accessors methods
    module.exports = __webpack_require__(28) || !__webpack_require__(7)(() => {
	  const K = Math.random();
	  // In FF throws only define methods
	  // eslint-disable-next-line no-undef, no-useless-call
	  __defineSetter__.call(null, K, () => { /* empty */ });
	  delete __webpack_require__(4)[K];
    });
/** */ }),
/* 273 */
/** */ (function (module, exports, __webpack_require__) {
    const $export = __webpack_require__(8);
    const toObject = __webpack_require__(58);
    const aFunction = __webpack_require__(21);
    const $defineProperty = __webpack_require__(11);

	// B.2.2.3 Object.prototype.__defineSetter__(P, setter)
    __webpack_require__(6) && $export($export.P + __webpack_require__(272), 'Object', {
	  __defineSetter__: function __defineSetter__(P, setter) {
	    $defineProperty.f(toObject(this), P, { set: aFunction(setter), enumerable: true, configurable: true });
	  }
    });
/** */ }),
/* 274 */
/** */ (function (module, exports, __webpack_require__) {
    const $export = __webpack_require__(8);
    const toObject = __webpack_require__(58);
    const toPrimitive = __webpack_require__(16);
    const getPrototypeOf = __webpack_require__(59);
    const getOwnPropertyDescriptor = __webpack_require__(51).f;

	// B.2.2.4 Object.prototype.__lookupGetter__(P)
    __webpack_require__(6) && $export($export.P + __webpack_require__(272), 'Object', {
	  __lookupGetter__: function __lookupGetter__(P) {
	    let O = toObject(this);
	    const K = toPrimitive(P, true);
	    let D;
	    do {
	      if (D = getOwnPropertyDescriptor(O, K)) return D.get;
	    } while (O = getPrototypeOf(O));
	  }
    });
/** */ }),
/* 275 */
/** */ (function (module, exports, __webpack_require__) {
    const $export = __webpack_require__(8);
    const toObject = __webpack_require__(58);
    const toPrimitive = __webpack_require__(16);
    const getPrototypeOf = __webpack_require__(59);
    const getOwnPropertyDescriptor = __webpack_require__(51).f;

	// B.2.2.5 Object.prototype.__lookupSetter__(P)
    __webpack_require__(6) && $export($export.P + __webpack_require__(272), 'Object', {
	  __lookupSetter__: function __lookupSetter__(P) {
	    let O = toObject(this);
	    const K = toPrimitive(P, true);
	    let D;
	    do {
	      if (D = getOwnPropertyDescriptor(O, K)) return D.set;
	    } while (O = getPrototypeOf(O));
	  }
    });
/** */ }),
/* 276 */
/** */ (function (module, exports, __webpack_require__) {
	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
    const $export = __webpack_require__(8);

    $export($export.P + $export.R, 'Map', { toJSON: __webpack_require__(277)('Map') });
/** */ }),
/* 277 */
/** */ (function (module, exports, __webpack_require__) {
	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
    const classof = __webpack_require__(75);
    const from = __webpack_require__(278);
    module.exports = function (NAME) {
	  return function toJSON() {
	    if (classof(this) != NAME) throw TypeError(`${NAME}#toJSON isn't generic`);
	    return from(this);
	  };
    };
/** */ }),
/* 278 */
/** */ (function (module, exports, __webpack_require__) {
    const forOf = __webpack_require__(208);

    module.exports = function (iter, ITERATOR) {
	  const result = [];
	  forOf(iter, false, result.push, result, ITERATOR);
	  return result;
    };
/** */ }),
/* 279 */
/** */ (function (module, exports, __webpack_require__) {
	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
    const $export = __webpack_require__(8);

    $export($export.P + $export.R, 'Set', { toJSON: __webpack_require__(277)('Set') });
/** */ }),
/* 280 */
/** */ (function (module, exports, __webpack_require__) {
	// https://tc39.github.io/proposal-setmap-offrom/#sec-map.of
    __webpack_require__(281)('Map');
/** */ }),
/* 281 */
/** */ (function (module, exports, __webpack_require__) {
	// https://tc39.github.io/proposal-setmap-offrom/
    const $export = __webpack_require__(8);

    module.exports = function (COLLECTION) {
	  $export($export.S, COLLECTION, { of: function of() {
	    let length = arguments.length;
	    const A = Array(length);
	    while (length--) A[length] = arguments[length];
	    return new this(A);
	  } });
    };
/** */ }),
/* 282 */
/** */ (function (module, exports, __webpack_require__) {
	// https://tc39.github.io/proposal-setmap-offrom/#sec-set.of
    __webpack_require__(281)('Set');
/** */ }),
/* 283 */
/** */ (function (module, exports, __webpack_require__) {
	// https://tc39.github.io/proposal-setmap-offrom/#sec-weakmap.of
    __webpack_require__(281)('WeakMap');
/** */ }),
/* 284 */
/** */ (function (module, exports, __webpack_require__) {
	// https://tc39.github.io/proposal-setmap-offrom/#sec-weakset.of
    __webpack_require__(281)('WeakSet');
/** */ }),
/* 285 */
/** */ (function (module, exports, __webpack_require__) {
	// https://tc39.github.io/proposal-setmap-offrom/#sec-map.from
    __webpack_require__(286)('Map');
/** */ }),
/* 286 */
/** */ (function (module, exports, __webpack_require__) {
	// https://tc39.github.io/proposal-setmap-offrom/
    const $export = __webpack_require__(8);
    const aFunction = __webpack_require__(21);
    const ctx = __webpack_require__(20);
    const forOf = __webpack_require__(208);

    module.exports = function (COLLECTION) {
	  $export($export.S, COLLECTION, { from: function from(source /* , mapFn, thisArg */) {
	    const mapFn = arguments[1];
	    let mapping,
        A,
        n,
        cb;
	    aFunction(this);
	    mapping = mapFn !== undefined;
	    if (mapping) aFunction(mapFn);
	    if (source == undefined) return new this();
	    A = [];
	    if (mapping) {
	      n = 0;
	      cb = ctx(mapFn, arguments[2], 2);
	      forOf(source, false, (nextItem) => {
	        A.push(cb(nextItem, n++));
	      });
	    } else {
	      forOf(source, false, A.push, A);
	    }
	    return new this(A);
	  } });
    };
/** */ }),
/* 287 */
/** */ (function (module, exports, __webpack_require__) {
	// https://tc39.github.io/proposal-setmap-offrom/#sec-set.from
    __webpack_require__(286)('Set');
/** */ }),
/* 288 */
/** */ (function (module, exports, __webpack_require__) {
	// https://tc39.github.io/proposal-setmap-offrom/#sec-weakmap.from
    __webpack_require__(286)('WeakMap');
/** */ }),
/* 289 */
/** */ (function (module, exports, __webpack_require__) {
	// https://tc39.github.io/proposal-setmap-offrom/#sec-weakset.from
    __webpack_require__(286)('WeakSet');
/** */ }),
/* 290 */
/** */ (function (module, exports, __webpack_require__) {
	// https://github.com/tc39/proposal-global
    const $export = __webpack_require__(8);

    $export($export.G, { global: __webpack_require__(4) });
/** */ }),
/* 291 */
/** */ (function (module, exports, __webpack_require__) {
	// https://github.com/tc39/proposal-global
    const $export = __webpack_require__(8);

    $export($export.S, 'System', { global: __webpack_require__(4) });
/** */ }),
/* 292 */
/** */ (function (module, exports, __webpack_require__) {
	// https://github.com/ljharb/proposal-is-error
    const $export = __webpack_require__(8);
    const cof = __webpack_require__(34);

    $export($export.S, 'Error', {
	  isError: function isError(it) {
	    return cof(it) === 'Error';
	  }
    });
/** */ }),
/* 293 */
/** */ (function (module, exports, __webpack_require__) {
	// https://rwaldron.github.io/proposal-math-extensions/
    const $export = __webpack_require__(8);

    $export($export.S, 'Math', {
	  clamp: function clamp(x, lower, upper) {
	    return Math.min(upper, Math.max(lower, x));
	  }
    });
/** */ }),
/* 294 */
/** */ (function (module, exports, __webpack_require__) {
	// https://rwaldron.github.io/proposal-math-extensions/
    const $export = __webpack_require__(8);

    $export($export.S, 'Math', { DEG_PER_RAD: Math.PI / 180 });
/** */ }),
/* 295 */
/** */ (function (module, exports, __webpack_require__) {
	// https://rwaldron.github.io/proposal-math-extensions/
    const $export = __webpack_require__(8);
    const RAD_PER_DEG = 180 / Math.PI;

    $export($export.S, 'Math', {
	  degrees: function degrees(radians) {
	    return radians * RAD_PER_DEG;
	  }
    });
/** */ }),
/* 296 */
/** */ (function (module, exports, __webpack_require__) {
	// https://rwaldron.github.io/proposal-math-extensions/
    const $export = __webpack_require__(8);
    const scale = __webpack_require__(297);
    const fround = __webpack_require__(114);

    $export($export.S, 'Math', {
	  fscale: function fscale(x, inLow, inHigh, outLow, outHigh) {
	    return fround(scale(x, inLow, inHigh, outLow, outHigh));
	  }
    });
/** */ }),
/* 297 */
/** */ (function (module, exports) {
	// https://rwaldron.github.io/proposal-math-extensions/
    module.exports = Math.scale || function scale(x, inLow, inHigh, outLow, outHigh) {
	  if (
	    arguments.length === 0
	      // eslint-disable-next-line no-self-compare
	      || x != x
	      // eslint-disable-next-line no-self-compare
	      || inLow != inLow
	      // eslint-disable-next-line no-self-compare
	      || inHigh != inHigh
	      // eslint-disable-next-line no-self-compare
	      || outLow != outLow
	      // eslint-disable-next-line no-self-compare
	      || outHigh != outHigh
	  ) return NaN;
	  if (x === Infinity || x === -Infinity) return x;
	  return (x - inLow) * (outHigh - outLow) / (inHigh - inLow) + outLow;
    };
/** */ }),
/* 298 */
/** */ (function (module, exports, __webpack_require__) {
	// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
    const $export = __webpack_require__(8);

    $export($export.S, 'Math', {
	  iaddh: function iaddh(x0, x1, y0, y1) {
	    const $x0 = x0 >>> 0;
	    const $x1 = x1 >>> 0;
	    const $y0 = y0 >>> 0;
	    return $x1 + (y1 >>> 0) + (($x0 & $y0 | ($x0 | $y0) & ~($x0 + $y0 >>> 0)) >>> 31) | 0;
	  }
    });
/** */ }),
/* 299 */
/** */ (function (module, exports, __webpack_require__) {
	// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
    const $export = __webpack_require__(8);

    $export($export.S, 'Math', {
	  isubh: function isubh(x0, x1, y0, y1) {
	    const $x0 = x0 >>> 0;
	    const $x1 = x1 >>> 0;
	    const $y0 = y0 >>> 0;
	    return $x1 - (y1 >>> 0) - ((~$x0 & $y0 | ~($x0 ^ $y0) & $x0 - $y0 >>> 0) >>> 31) | 0;
	  }
    });
/** */ }),
/* 300 */
/** */ (function (module, exports, __webpack_require__) {
	// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
    const $export = __webpack_require__(8);

    $export($export.S, 'Math', {
	  imulh: function imulh(u, v) {
	    const UINT16 = 0xffff;
	    const $u = +u;
	    const $v = +v;
	    const u0 = $u & UINT16;
	    const v0 = $v & UINT16;
	    const u1 = $u >> 16;
	    const v1 = $v >> 16;
	    const t = (u1 * v0 >>> 0) + (u0 * v0 >>> 16);
	    return u1 * v1 + (t >> 16) + ((u0 * v1 >>> 0) + (t & UINT16) >> 16);
	  }
    });
/** */ }),
/* 301 */
/** */ (function (module, exports, __webpack_require__) {
	// https://rwaldron.github.io/proposal-math-extensions/
    const $export = __webpack_require__(8);

    $export($export.S, 'Math', { RAD_PER_DEG: 180 / Math.PI });
/** */ }),
/* 302 */
/** */ (function (module, exports, __webpack_require__) {
	// https://rwaldron.github.io/proposal-math-extensions/
    const $export = __webpack_require__(8);
    const DEG_PER_RAD = Math.PI / 180;

    $export($export.S, 'Math', {
	  radians: function radians(degrees) {
	    return degrees * DEG_PER_RAD;
	  }
    });
/** */ }),
/* 303 */
/** */ (function (module, exports, __webpack_require__) {
	// https://rwaldron.github.io/proposal-math-extensions/
    const $export = __webpack_require__(8);

    $export($export.S, 'Math', { scale: __webpack_require__(297) });
/** */ }),
/* 304 */
/** */ (function (module, exports, __webpack_require__) {
	// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
    const $export = __webpack_require__(8);

    $export($export.S, 'Math', {
	  umulh: function umulh(u, v) {
	    const UINT16 = 0xffff;
	    const $u = +u;
	    const $v = +v;
	    const u0 = $u & UINT16;
	    const v0 = $v & UINT16;
	    const u1 = $u >>> 16;
	    const v1 = $v >>> 16;
	    const t = (u1 * v0 >>> 0) + (u0 * v0 >>> 16);
	    return u1 * v1 + (t >>> 16) + ((u0 * v1 >>> 0) + (t & UINT16) >>> 16);
	  }
    });
/** */ }),
/* 305 */
/** */ (function (module, exports, __webpack_require__) {
	// http://jfbastien.github.io/papers/Math.signbit.html
    const $export = __webpack_require__(8);

    $export($export.S, 'Math', { signbit: function signbit(x) {
	  // eslint-disable-next-line no-self-compare
	  return (x = +x) != x ? x : x == 0 ? 1 / x == Infinity : x > 0;
    } });
/** */ }),
/* 306 */
/** */ (function (module, exports, __webpack_require__) {
	// https://github.com/tc39/proposal-promise-finally

    const $export = __webpack_require__(8);
    const core = __webpack_require__(9);
    const global = __webpack_require__(4);
    const speciesConstructor = __webpack_require__(209);
    const promiseResolve = __webpack_require__(214);

    $export($export.P + $export.R, 'Promise', { finally(onFinally) {
	  const C = speciesConstructor(this, core.Promise || global.Promise);
	  const isFunction = typeof onFinally === 'function';
	  return this.then(
	    isFunction ? (x) => promiseResolve(C, onFinally()).then(() => x) : onFinally,
	    isFunction ? (e) => promiseResolve(C, onFinally()).then(() => { throw e; }) : onFinally
	  );
    } });
/** */ }),
/* 307 */
/** */ (function (module, exports, __webpack_require__) {
	// https://github.com/tc39/proposal-promise-try
    const $export = __webpack_require__(8);
    const newPromiseCapability = __webpack_require__(212);
    const perform = __webpack_require__(213);

    $export($export.S, 'Promise', { try(callbackfn) {
	  const promiseCapability = newPromiseCapability.f(this);
	  const result = perform(callbackfn);
	  (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
	  return promiseCapability.promise;
    } });
/** */ }),
/* 308 */
/** */ (function (module, exports, __webpack_require__) {
    const metadata = __webpack_require__(309);
    const anObject = __webpack_require__(12);
    const toMetaKey = metadata.key;
    const ordinaryDefineOwnMetadata = metadata.set;

    metadata.exp({ defineMetadata: function defineMetadata(metadataKey, metadataValue, target, targetKey) {
	  ordinaryDefineOwnMetadata(metadataKey, metadataValue, anObject(target), toMetaKey(targetKey));
    } });
/** */ }),
/* 309 */
/** */ (function (module, exports, __webpack_require__) {
    const Map = __webpack_require__(216);
    const $export = __webpack_require__(8);
    const shared = __webpack_require__(23)('metadata');
    const store = shared.store || (shared.store = new (__webpack_require__(221))());

    const getOrCreateMetadataMap = function (target, targetKey, create) {
	  let targetMetadata = store.get(target);
	  if (!targetMetadata) {
	    if (!create) return undefined;
	    store.set(target, targetMetadata = new Map());
	  }
	  let keyMetadata = targetMetadata.get(targetKey);
	  if (!keyMetadata) {
	    if (!create) return undefined;
	    targetMetadata.set(targetKey, keyMetadata = new Map());
	  } return keyMetadata;
    };
    const ordinaryHasOwnMetadata = function (MetadataKey, O, P) {
	  const metadataMap = getOrCreateMetadataMap(O, P, false);
	  return metadataMap === undefined ? false : metadataMap.has(MetadataKey);
    };
    const ordinaryGetOwnMetadata = function (MetadataKey, O, P) {
	  const metadataMap = getOrCreateMetadataMap(O, P, false);
	  return metadataMap === undefined ? undefined : metadataMap.get(MetadataKey);
    };
    const ordinaryDefineOwnMetadata = function (MetadataKey, MetadataValue, O, P) {
	  getOrCreateMetadataMap(O, P, true).set(MetadataKey, MetadataValue);
    };
    const ordinaryOwnMetadataKeys = function (target, targetKey) {
	  const metadataMap = getOrCreateMetadataMap(target, targetKey, false);
	  const keys = [];
	  if (metadataMap) metadataMap.forEach((_, key) => { keys.push(key); });
	  return keys;
    };
    const toMetaKey = function (it) {
	  return it === undefined || typeof it === 'symbol' ? it : String(it);
    };
    const exp = function (O) {
	  $export($export.S, 'Reflect', O);
    };

    module.exports = {
	  store,
	  map: getOrCreateMetadataMap,
	  has: ordinaryHasOwnMetadata,
	  get: ordinaryGetOwnMetadata,
	  set: ordinaryDefineOwnMetadata,
	  keys: ordinaryOwnMetadataKeys,
	  key: toMetaKey,
	  exp
    };
/** */ }),
/* 310 */
/** */ (function (module, exports, __webpack_require__) {
    const metadata = __webpack_require__(309);
    const anObject = __webpack_require__(12);
    const toMetaKey = metadata.key;
    const getOrCreateMetadataMap = metadata.map;
    const store = metadata.store;

    metadata.exp({ deleteMetadata: function deleteMetadata(metadataKey, target /* , targetKey */) {
	  const targetKey = arguments.length < 3 ? undefined : toMetaKey(arguments[2]);
	  const metadataMap = getOrCreateMetadataMap(anObject(target), targetKey, false);
	  if (metadataMap === undefined || !metadataMap.delete(metadataKey)) return false;
	  if (metadataMap.size) return true;
	  const targetMetadata = store.get(target);
	  targetMetadata.delete(targetKey);
	  return !!targetMetadata.size || store.delete(target);
    } });
/** */ }),
/* 311 */
/** */ (function (module, exports, __webpack_require__) {
    const metadata = __webpack_require__(309);
    const anObject = __webpack_require__(12);
    const getPrototypeOf = __webpack_require__(59);
    const ordinaryHasOwnMetadata = metadata.has;
    const ordinaryGetOwnMetadata = metadata.get;
    const toMetaKey = metadata.key;

    var ordinaryGetMetadata = function (MetadataKey, O, P) {
	  const hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
	  if (hasOwn) return ordinaryGetOwnMetadata(MetadataKey, O, P);
	  const parent = getPrototypeOf(O);
	  return parent !== null ? ordinaryGetMetadata(MetadataKey, parent, P) : undefined;
    };

    metadata.exp({ getMetadata: function getMetadata(metadataKey, target /* , targetKey */) {
	  return ordinaryGetMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
    } });
/** */ }),
/* 312 */
/** */ (function (module, exports, __webpack_require__) {
    const Set = __webpack_require__(220);
    const from = __webpack_require__(278);
    const metadata = __webpack_require__(309);
    const anObject = __webpack_require__(12);
    const getPrototypeOf = __webpack_require__(59);
    const ordinaryOwnMetadataKeys = metadata.keys;
    const toMetaKey = metadata.key;

    var ordinaryMetadataKeys = function (O, P) {
	  const oKeys = ordinaryOwnMetadataKeys(O, P);
	  const parent = getPrototypeOf(O);
	  if (parent === null) return oKeys;
	  const pKeys = ordinaryMetadataKeys(parent, P);
	  return pKeys.length ? oKeys.length ? from(new Set(oKeys.concat(pKeys))) : pKeys : oKeys;
    };

    metadata.exp({ getMetadataKeys: function getMetadataKeys(target /* , targetKey */) {
	  return ordinaryMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));
    } });
/** */ }),
/* 313 */
/** */ (function (module, exports, __webpack_require__) {
    const metadata = __webpack_require__(309);
    const anObject = __webpack_require__(12);
    const ordinaryGetOwnMetadata = metadata.get;
    const toMetaKey = metadata.key;

    metadata.exp({ getOwnMetadata: function getOwnMetadata(metadataKey, target /* , targetKey */) {
	  return ordinaryGetOwnMetadata(metadataKey, anObject(target)
	    , arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
    } });
/** */ }),
/* 314 */
/** */ (function (module, exports, __webpack_require__) {
    const metadata = __webpack_require__(309);
    const anObject = __webpack_require__(12);
    const ordinaryOwnMetadataKeys = metadata.keys;
    const toMetaKey = metadata.key;

    metadata.exp({ getOwnMetadataKeys: function getOwnMetadataKeys(target /* , targetKey */) {
	  return ordinaryOwnMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));
    } });
/** */ }),
/* 315 */
/** */ (function (module, exports, __webpack_require__) {
    const metadata = __webpack_require__(309);
    const anObject = __webpack_require__(12);
    const getPrototypeOf = __webpack_require__(59);
    const ordinaryHasOwnMetadata = metadata.has;
    const toMetaKey = metadata.key;

    var ordinaryHasMetadata = function (MetadataKey, O, P) {
	  const hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
	  if (hasOwn) return true;
	  const parent = getPrototypeOf(O);
	  return parent !== null ? ordinaryHasMetadata(MetadataKey, parent, P) : false;
    };

    metadata.exp({ hasMetadata: function hasMetadata(metadataKey, target /* , targetKey */) {
	  return ordinaryHasMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
    } });
/** */ }),
/* 316 */
/** */ (function (module, exports, __webpack_require__) {
    const metadata = __webpack_require__(309);
    const anObject = __webpack_require__(12);
    const ordinaryHasOwnMetadata = metadata.has;
    const toMetaKey = metadata.key;

    metadata.exp({ hasOwnMetadata: function hasOwnMetadata(metadataKey, target /* , targetKey */) {
	  return ordinaryHasOwnMetadata(metadataKey, anObject(target)
	    , arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
    } });
/** */ }),
/* 317 */
/** */ (function (module, exports, __webpack_require__) {
    const $metadata = __webpack_require__(309);
    const anObject = __webpack_require__(12);
    const aFunction = __webpack_require__(21);
    const toMetaKey = $metadata.key;
    const ordinaryDefineOwnMetadata = $metadata.set;

    $metadata.exp({ metadata: function metadata(metadataKey, metadataValue) {
	  return function decorator(target, targetKey) {
	    ordinaryDefineOwnMetadata(
	      metadataKey, metadataValue,
	      (targetKey !== undefined ? anObject : aFunction)(target),
	      toMetaKey(targetKey)
	    );
	  };
    } });
/** */ }),
/* 318 */
/** */ (function (module, exports, __webpack_require__) {
	// https://github.com/rwaldron/tc39-notes/blob/master/es6/2014-09/sept-25.md#510-globalasap-for-enqueuing-a-microtask
    const $export = __webpack_require__(8);
    const microtask = __webpack_require__(211)();
    const process = __webpack_require__(4).process;
    const isNode = __webpack_require__(34)(process) == 'process';

    $export($export.G, {
	  asap: function asap(fn) {
	    const domain = isNode && process.domain;
	    microtask(domain ? domain.bind(fn) : fn);
	  }
    });
/** */ }),
/* 319 */
/** */ (function (module, exports, __webpack_require__) {
	// https://github.com/zenparsing/es-observable
    const $export = __webpack_require__(8);
    const global = __webpack_require__(4);
    const core = __webpack_require__(9);
    const microtask = __webpack_require__(211)();
    const OBSERVABLE = __webpack_require__(25)('observable');
    const aFunction = __webpack_require__(21);
    const anObject = __webpack_require__(12);
    const anInstance = __webpack_require__(207);
    const redefineAll = __webpack_require__(215);
    const hide = __webpack_require__(10);
    const forOf = __webpack_require__(208);
    const RETURN = forOf.RETURN;

    const getMethod = function (fn) {
	  return fn == null ? undefined : aFunction(fn);
    };

    const cleanupSubscription = function (subscription) {
	  const cleanup = subscription._c;
	  if (cleanup) {
	    subscription._c = undefined;
	    cleanup();
	  }
    };

    const subscriptionClosed = function (subscription) {
	  return subscription._o === undefined;
    };

    const closeSubscription = function (subscription) {
	  if (!subscriptionClosed(subscription)) {
	    subscription._o = undefined;
	    cleanupSubscription(subscription);
	  }
    };

    const Subscription = function (observer, subscriber) {
	  anObject(observer);
	  this._c = undefined;
	  this._o = observer;
	  observer = new SubscriptionObserver(this);
	  try {
	    let cleanup = subscriber(observer);
	    const subscription = cleanup;
	    if (cleanup != null) {
	      if (typeof cleanup.unsubscribe === 'function') cleanup = function () { subscription.unsubscribe(); };
	      else aFunction(cleanup);
	      this._c = cleanup;
	    }
	  } catch (e) {
	    observer.error(e);
	    return;
	  } if (subscriptionClosed(this)) cleanupSubscription(this);
    };

    Subscription.prototype = redefineAll({}, {
	  unsubscribe: function unsubscribe() { closeSubscription(this); }
    });

    var SubscriptionObserver = function (subscription) {
	  this._s = subscription;
    };

    SubscriptionObserver.prototype = redefineAll({}, {
	  next: function next(value) {
	    const subscription = this._s;
	    if (!subscriptionClosed(subscription)) {
	      const observer = subscription._o;
	      try {
	        const m = getMethod(observer.next);
	        if (m) return m.call(observer, value);
	      } catch (e) {
	        try {
	          closeSubscription(subscription);
	        } finally {
	          throw e;
	        }
	      }
	    }
	  },
	  error: function error(value) {
	    const subscription = this._s;
	    if (subscriptionClosed(subscription)) throw value;
	    const observer = subscription._o;
	    subscription._o = undefined;
	    try {
	      const m = getMethod(observer.error);
	      if (!m) throw value;
	      value = m.call(observer, value);
	    } catch (e) {
	      try {
	        cleanupSubscription(subscription);
	      } finally {
	        throw e;
	      }
	    } cleanupSubscription(subscription);
	    return value;
	  },
	  complete: function complete(value) {
	    const subscription = this._s;
	    if (!subscriptionClosed(subscription)) {
	      const observer = subscription._o;
	      subscription._o = undefined;
	      try {
	        const m = getMethod(observer.complete);
	        value = m ? m.call(observer, value) : undefined;
	      } catch (e) {
	        try {
	          cleanupSubscription(subscription);
	        } finally {
	          throw e;
	        }
	      } cleanupSubscription(subscription);
	      return value;
	    }
	  }
    });

    var $Observable = function Observable(subscriber) {
	  anInstance(this, $Observable, 'Observable', '_f')._f = aFunction(subscriber);
    };

    redefineAll($Observable.prototype, {
	  subscribe: function subscribe(observer) {
	    return new Subscription(observer, this._f);
	  },
	  forEach: function forEach(fn) {
	    const that = this;
	    return new (core.Promise || global.Promise)((resolve, reject) => {
	      aFunction(fn);
	      var subscription = that.subscribe({
	        next(value) {
	          try {
	            return fn(value);
	          } catch (e) {
	            reject(e);
	            subscription.unsubscribe();
	          }
	        },
	        error: reject,
	        complete: resolve
	      });
	    });
	  }
    });

    redefineAll($Observable, {
	  from: function from(x) {
	    const C = typeof this === 'function' ? this : $Observable;
	    const method = getMethod(anObject(x)[OBSERVABLE]);
	    if (method) {
	      const observable = anObject(method.call(x));
	      return observable.constructor === C ? observable : new C((observer) => observable.subscribe(observer));
	    }
	    return new C((observer) => {
	      let done = false;
	      microtask(() => {
	        if (!done) {
	          try {
	            if (forOf(x, false, (it) => {
	              observer.next(it);
	              if (done) return RETURN;
	            }) === RETURN) return;
	          } catch (e) {
	            if (done) throw e;
	            observer.error(e);
	            return;
	          } observer.complete();
	        }
	      });
	      return function () { done = true; };
	    });
	  },
	  of: function of() {
	    for (var i = 0, l = arguments.length, items = Array(l); i < l;) items[i] = arguments[i++];
	    return new (typeof this === 'function' ? this : $Observable)((observer) => {
	      let done = false;
	      microtask(() => {
	        if (!done) {
	          for (let j = 0; j < items.length; ++j) {
	            observer.next(items[j]);
	            if (done) return;
	          } observer.complete();
	        }
	      });
	      return function () { done = true; };
	    });
	  }
    });

    hide($Observable.prototype, OBSERVABLE, function () { return this; });

    $export($export.G, { Observable: $Observable });

    __webpack_require__(194)('Observable');
/** */ }),
/* 320 */
/** */ (function (module, exports, __webpack_require__) {
	// ie9- setTimeout & setInterval additional parameters fix
    const global = __webpack_require__(4);
    const $export = __webpack_require__(8);
    const invoke = __webpack_require__(78);
    const partial = __webpack_require__(321);
    const navigator = global.navigator;
    const MSIE = !!navigator && /MSIE .\./.test(navigator.userAgent); // <- dirty ie9- check
    const wrap = function (set) {
	  return MSIE ? function (fn, time /* , ...args */) {
	    return set(invoke(
	      partial,
	      [].slice.call(arguments, 2),
	      // eslint-disable-next-line no-new-func
	      typeof fn === 'function' ? fn : Function(fn)
	    ), time);
	  } : set;
    };
    $export($export.G + $export.B + $export.F * MSIE, {
	  setTimeout: wrap(global.setTimeout),
	  setInterval: wrap(global.setInterval)
    });
/** */ }),
/* 321 */
/** */ (function (module, exports, __webpack_require__) {
    const path = __webpack_require__(322);
    const invoke = __webpack_require__(78);
    const aFunction = __webpack_require__(21);
    module.exports = function (/* ...pargs */) {
	  const fn = aFunction(this);
	  const length = arguments.length;
	  const pargs = Array(length);
	  let i = 0;
	  const _ = path._;
	  let holder = false;
	  while (length > i) if ((pargs[i] = arguments[i++]) === _) holder = true;
	  return function (/* ...args */) {
	    const that = this;
	    const aLen = arguments.length;
	    let j = 0;
	    let k = 0;
	    let args;
	    if (!holder && !aLen) return invoke(fn, pargs, that);
	    args = pargs.slice();
	    if (holder) for (;length > j; j++) if (args[j] === _) args[j] = arguments[k++];
	    while (aLen > k) args.push(arguments[k++]);
	    return invoke(fn, args, that);
	  };
    };
/** */ }),
/* 322 */
/** */ (function (module, exports, __webpack_require__) {
    module.exports = __webpack_require__(4);
/** */ }),
/* 323 */
/** */ (function (module, exports, __webpack_require__) {
    const $export = __webpack_require__(8);
    const $task = __webpack_require__(210);
    $export($export.G + $export.B, {
	  setImmediate: $task.set,
	  clearImmediate: $task.clear
    });
/** */ }),
/* 324 */
/** */ (function (module, exports, __webpack_require__) {
    const $iterators = __webpack_require__(195);
    const getKeys = __webpack_require__(30);
    const redefine = __webpack_require__(18);
    const global = __webpack_require__(4);
    const hide = __webpack_require__(10);
    const Iterators = __webpack_require__(130);
    const wks = __webpack_require__(25);
    const ITERATOR = wks('iterator');
    const TO_STRING_TAG = wks('toStringTag');
    const ArrayValues = Iterators.Array;

    const DOMIterables = {
	  CSSRuleList: true, // TODO: Not spec compliant, should be false.
	  CSSStyleDeclaration: false,
	  CSSValueList: false,
	  ClientRectList: false,
	  DOMRectList: false,
	  DOMStringList: false,
	  DOMTokenList: true,
	  DataTransferItemList: false,
	  FileList: false,
	  HTMLAllCollection: false,
	  HTMLCollection: false,
	  HTMLFormElement: false,
	  HTMLSelectElement: false,
	  MediaList: true, // TODO: Not spec compliant, should be false.
	  MimeTypeArray: false,
	  NamedNodeMap: false,
	  NodeList: true,
	  PaintRequestList: false,
	  Plugin: false,
	  PluginArray: false,
	  SVGLengthList: false,
	  SVGNumberList: false,
	  SVGPathSegList: false,
	  SVGPointList: false,
	  SVGStringList: false,
	  SVGTransformList: false,
	  SourceBufferList: false,
	  StyleSheetList: true, // TODO: Not spec compliant, should be false.
	  TextTrackCueList: false,
	  TextTrackList: false,
	  TouchList: false
    };

    for (let collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
	  const NAME = collections[i];
	  const explicit = DOMIterables[NAME];
	  const Collection = global[NAME];
	  const proto = Collection && Collection.prototype;
	  var key;
	  if (proto) {
	    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
	    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
	    Iterators[NAME] = ArrayValues;
	    if (explicit) for (key in $iterators) if (!proto[key]) redefine(proto, key, $iterators[key], true);
	  }
    }
/** */ }),
/* 325 */
/** */ (function (module, exports) {
	/**
	 * Copyright (c) 2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
	 * additional grant of patent rights can be found in the PATENTS file in
	 * the same directory.
	 */

    !(function (global) {
	  const Op = Object.prototype;
	  const hasOwn = Op.hasOwnProperty;
	  let undefined; // More compressible than void 0.
	  const $Symbol = typeof Symbol === 'function' ? Symbol : {};
	  const iteratorSymbol = $Symbol.iterator || '@@iterator';
	  const asyncIteratorSymbol = $Symbol.asyncIterator || '@@asyncIterator';
	  const toStringTagSymbol = $Symbol.toStringTag || '@@toStringTag';

	  const inModule = typeof module === 'object';
	  let runtime = global.regeneratorRuntime;
	  if (runtime) {
	    if (inModule) {
	      // If regeneratorRuntime is defined globally and we're in a module,
	      // make the exports object identical to regeneratorRuntime.
	      module.exports = runtime;
	    }
	    // Don't bother evaluating the rest of this file if the runtime was
	    // already defined globally.
	    return;
	  }

	  // Define the runtime globally (as expected by generated code) as either
	  // module.exports (if we're in a module) or a new, empty object.
	  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

	  function wrap(innerFn, outerFn, self, tryLocsList) {
	    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
	    const protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
	    const generator = Object.create(protoGenerator.prototype);
	    const context = new Context(tryLocsList || []);

	    // The ._invoke method unifies the implementations of the .next,
	    // .throw, and .return methods.
	    generator._invoke = makeInvokeMethod(innerFn, self, context);

	    return generator;
	  }
	  runtime.wrap = wrap;

	  // Try/catch helper to minimize deoptimizations. Returns a completion
	  // record like context.tryEntries[i].completion. This interface could
	  // have been (and was previously) designed to take a closure to be
	  // invoked without arguments, but in all the cases we care about we
	  // already have an existing method we want to call, so there's no need
	  // to create a new function object. We can even get away with assuming
	  // the method takes exactly one argument, since that happens to be true
	  // in every case, so we don't have to touch the arguments object. The
	  // only additional allocation required is the completion record, which
	  // has a stable shape and so hopefully should be cheap to allocate.
	  function tryCatch(fn, obj, arg) {
	    try {
	      return { type: 'normal', arg: fn.call(obj, arg) };
	    } catch (err) {
	      return { type: 'throw', arg: err };
	    }
	  }

	  const GenStateSuspendedStart = 'suspendedStart';
	  const GenStateSuspendedYield = 'suspendedYield';
	  const GenStateExecuting = 'executing';
	  const GenStateCompleted = 'completed';

	  // Returning this object from the innerFn has the same effect as
	  // breaking out of the dispatch switch statement.
	  const ContinueSentinel = {};

	  // Dummy constructor functions that we use as the .constructor and
	  // .constructor.prototype properties for functions that return Generator
	  // objects. For full spec compliance, you may wish to configure your
	  // minifier not to mangle the names of these two functions.
	  function Generator() {}
	  function GeneratorFunction() {}
	  function GeneratorFunctionPrototype() {}

	  // This is a polyfill for %IteratorPrototype% for environments that
	  // don't natively support it.
	  let IteratorPrototype = {};
	  IteratorPrototype[iteratorSymbol] = function () {
	    return this;
	  };

	  const getProto = Object.getPrototypeOf;
	  const NativeIteratorPrototype = getProto && getProto(getProto(values([])));
	  if (NativeIteratorPrototype &&
	      NativeIteratorPrototype !== Op &&
	      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
	    // This environment has a native %IteratorPrototype%; use it instead
	    // of the polyfill.
	    IteratorPrototype = NativeIteratorPrototype;
	  }

	  const Gp = GeneratorFunctionPrototype.prototype =
	    Generator.prototype = Object.create(IteratorPrototype);
	  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
	  GeneratorFunctionPrototype.constructor = GeneratorFunction;
	  GeneratorFunctionPrototype[toStringTagSymbol] =
	    GeneratorFunction.displayName = 'GeneratorFunction';

	  // Helper for defining the .next, .throw, and .return methods of the
	  // Iterator interface in terms of a single ._invoke method.
	  function defineIteratorMethods(prototype) {
	    ['next', 'throw', 'return'].forEach((method) => {
	      prototype[method] = function (arg) {
	        return this._invoke(method, arg);
	      };
	    });
	  }

	  runtime.isGeneratorFunction = function (genFun) {
	    const ctor = typeof genFun === 'function' && genFun.constructor;
	    return ctor
	      ? ctor === GeneratorFunction ||
	        // For the native GeneratorFunction constructor, the best we can
	        // do is to check its .name property.
	        (ctor.displayName || ctor.name) === 'GeneratorFunction'
	      : false;
	  };

	  runtime.mark = function (genFun) {
	    if (Object.setPrototypeOf) {
	      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
	    } else {
	      genFun.__proto__ = GeneratorFunctionPrototype;
	      if (!(toStringTagSymbol in genFun)) {
	        genFun[toStringTagSymbol] = 'GeneratorFunction';
	      }
	    }
	    genFun.prototype = Object.create(Gp);
	    return genFun;
	  };

	  // Within the body of any async function, `await x` is transformed to
	  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
	  // `hasOwn.call(value, "__await")` to determine if the yielded value is
	  // meant to be awaited.
	  runtime.awrap = function (arg) {
	    return { __await: arg };
	  };

	  function AsyncIterator(generator) {
	    function invoke(method, arg, resolve, reject) {
	      const record = tryCatch(generator[method], generator, arg);
	      if (record.type === 'throw') {
	        reject(record.arg);
	      } else {
	        const result = record.arg;
	        const value = result.value;
	        if (value &&
	            typeof value === 'object' &&
	            hasOwn.call(value, '__await')) {
	          return Promise.resolve(value.__await).then((value) => {
	            invoke('next', value, resolve, reject);
	          }, (err) => {
	            invoke('throw', err, resolve, reject);
	          });
	        }

	        return Promise.resolve(value).then((unwrapped) => {
	          // When a yielded Promise is resolved, its final value becomes
	          // the .value of the Promise<{value,done}> result for the
	          // current iteration. If the Promise is rejected, however, the
	          // result for this iteration will be rejected with the same
	          // reason. Note that rejections of yielded Promises are not
	          // thrown back into the generator function, as is the case
	          // when an awaited Promise is rejected. This difference in
	          // behavior between yield and await is important, because it
	          // allows the consumer to decide what to do with the yielded
	          // rejection (swallow it and continue, manually .throw it back
	          // into the generator, abandon iteration, whatever). With
	          // await, by contrast, there is no opportunity to examine the
	          // rejection reason outside the generator function, so the
	          // only option is to throw it from the await expression, and
	          // let the generator function handle the exception.
	          result.value = unwrapped;
	          resolve(result);
	        }, reject);
	      }
	    }

	    if (typeof global.process === 'object' && global.process.domain) {
	      invoke = global.process.domain.bind(invoke);
	    }

	    let previousPromise;

	    function enqueue(method, arg) {
	      function callInvokeWithMethodAndArg() {
	        return new Promise((resolve, reject) => {
	          invoke(method, arg, resolve, reject);
	        });
	      }

	      return previousPromise =
	        // If enqueue has been called before, then we want to wait until
	        // all previous Promises have been resolved before calling invoke,
	        // so that results are always delivered in the correct order. If
	        // enqueue has not been called before, then it is important to
	        // call invoke immediately, without waiting on a callback to fire,
	        // so that the async generator function has the opportunity to do
	        // any necessary setup in a predictable way. This predictability
	        // is why the Promise constructor synchronously invokes its
	        // executor callback, and why async functions synchronously
	        // execute code before the first await. Since we implement simple
	        // async functions in terms of async generators, it is especially
	        // important to get this right, even though it requires care.
	        previousPromise ? previousPromise.then(
	          callInvokeWithMethodAndArg,
	          // Avoid propagating failures to Promises returned by later
	          // invocations of the iterator.
	          callInvokeWithMethodAndArg
	        ) : callInvokeWithMethodAndArg();
	    }

	    // Define the unified helper method that is used to implement .next,
	    // .throw, and .return (see defineIteratorMethods).
	    this._invoke = enqueue;
	  }

	  defineIteratorMethods(AsyncIterator.prototype);
	  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
	    return this;
	  };
	  runtime.AsyncIterator = AsyncIterator;

	  // Note that simple async functions are implemented on top of
	  // AsyncIterator objects; they just return a Promise for the value of
	  // the final result produced by the iterator.
	  runtime.async = function (innerFn, outerFn, self, tryLocsList) {
	    const iter = new AsyncIterator(
	      wrap(innerFn, outerFn, self, tryLocsList)
	    );

	    return runtime.isGeneratorFunction(outerFn)
	      ? iter // If outerFn is a generator, return the full iterator.
	      : iter.next().then((result) => result.done ? result.value : iter.next());
	  };

	  function makeInvokeMethod(innerFn, self, context) {
	    let state = GenStateSuspendedStart;

	    return function invoke(method, arg) {
	      if (state === GenStateExecuting) {
	        throw new Error('Generator is already running');
	      }

	      if (state === GenStateCompleted) {
	        if (method === 'throw') {
	          throw arg;
	        }

	        // Be forgiving, per 25.3.3.3.3 of the spec:
	        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
	        return doneResult();
	      }

	      context.method = method;
	      context.arg = arg;

	      while (true) {
	        const delegate = context.delegate;
	        if (delegate) {
	          const delegateResult = maybeInvokeDelegate(delegate, context);
	          if (delegateResult) {
	            if (delegateResult === ContinueSentinel) continue;
	            return delegateResult;
	          }
	        }

	        if (context.method === 'next') {
	          // Setting context._sent for legacy support of Babel's
	          // function.sent implementation.
	          context.sent = context._sent = context.arg;
	        } else if (context.method === 'throw') {
	          if (state === GenStateSuspendedStart) {
	            state = GenStateCompleted;
	            throw context.arg;
	          }

	          context.dispatchException(context.arg);
	        } else if (context.method === 'return') {
	          context.abrupt('return', context.arg);
	        }

	        state = GenStateExecuting;

	        const record = tryCatch(innerFn, self, context);
	        if (record.type === 'normal') {
	          // If an exception is thrown from innerFn, we leave state ===
	          // GenStateExecuting and loop back for another invocation.
	          state = context.done
	            ? GenStateCompleted
	            : GenStateSuspendedYield;

	          if (record.arg === ContinueSentinel) {
	            continue;
	          }

	          return {
	            value: record.arg,
	            done: context.done
	          };
	        } else if (record.type === 'throw') {
	          state = GenStateCompleted;
	          // Dispatch the exception by looping back around to the
	          // context.dispatchException(context.arg) call above.
	          context.method = 'throw';
	          context.arg = record.arg;
	        }
	      }
	    };
	  }

	  // Call delegate.iterator[context.method](context.arg) and handle the
	  // result, either by returning a { value, done } result from the
	  // delegate iterator, or by modifying context.method and context.arg,
	  // setting context.delegate to null, and returning the ContinueSentinel.
	  function maybeInvokeDelegate(delegate, context) {
	    const method = delegate.iterator[context.method];
	    if (method === undefined) {
	      // A .throw or .return when the delegate iterator has no .throw
	      // method always terminates the yield* loop.
	      context.delegate = null;

	      if (context.method === 'throw') {
	        if (delegate.iterator.return) {
	          // If the delegate iterator has a return method, give it a
	          // chance to clean up.
	          context.method = 'return';
	          context.arg = undefined;
	          maybeInvokeDelegate(delegate, context);

	          if (context.method === 'throw') {
	            // If maybeInvokeDelegate(context) changed context.method from
	            // "return" to "throw", let that override the TypeError below.
	            return ContinueSentinel;
	          }
	        }

	        context.method = 'throw';
	        context.arg = new TypeError(
	          'The iterator does not provide a \'throw\' method');
	      }

	      return ContinueSentinel;
	    }

	    const record = tryCatch(method, delegate.iterator, context.arg);

	    if (record.type === 'throw') {
	      context.method = 'throw';
	      context.arg = record.arg;
	      context.delegate = null;
	      return ContinueSentinel;
	    }

	    const info = record.arg;

	    if (!info) {
	      context.method = 'throw';
	      context.arg = new TypeError('iterator result is not an object');
	      context.delegate = null;
	      return ContinueSentinel;
	    }

	    if (info.done) {
	      // Assign the result of the finished delegate to the temporary
	      // variable specified by delegate.resultName (see delegateYield).
	      context[delegate.resultName] = info.value;

	      // Resume execution at the desired location (see delegateYield).
	      context.next = delegate.nextLoc;

	      // If context.method was "throw" but the delegate handled the
	      // exception, let the outer generator proceed normally. If
	      // context.method was "next", forget context.arg since it has been
	      // "consumed" by the delegate iterator. If context.method was
	      // "return", allow the original .return call to continue in the
	      // outer generator.
	      if (context.method !== 'return') {
	        context.method = 'next';
	        context.arg = undefined;
	      }
	    } else {
	      // Re-yield the result returned by the delegate method.
	      return info;
	    }

	    // The delegate iterator is finished, so forget it and continue with
	    // the outer generator.
	    context.delegate = null;
	    return ContinueSentinel;
	  }

	  // Define Generator.prototype.{next,throw,return} in terms of the
	  // unified ._invoke helper method.
	  defineIteratorMethods(Gp);

	  Gp[toStringTagSymbol] = 'Generator';

	  // A Generator should always return itself as the iterator object when the
	  // @@iterator function is called on it. Some browsers' implementations of the
	  // iterator prototype chain incorrectly implement this, causing the Generator
	  // object to not be returned from this call. This ensures that doesn't happen.
	  // See https://github.com/facebook/regenerator/issues/274 for more details.
	  Gp[iteratorSymbol] = function () {
	    return this;
	  };

	  Gp.toString = function () {
	    return '[object Generator]';
	  };

	  function pushTryEntry(locs) {
	    const entry = { tryLoc: locs[0] };

	    if (1 in locs) {
	      entry.catchLoc = locs[1];
	    }

	    if (2 in locs) {
	      entry.finallyLoc = locs[2];
	      entry.afterLoc = locs[3];
	    }

	    this.tryEntries.push(entry);
	  }

	  function resetTryEntry(entry) {
	    const record = entry.completion || {};
	    record.type = 'normal';
	    delete record.arg;
	    entry.completion = record;
	  }

	  function Context(tryLocsList) {
	    // The root entry object (effectively a try statement without a catch
	    // or a finally block) gives us a place to store values thrown from
	    // locations where there is no enclosing try statement.
	    this.tryEntries = [{ tryLoc: 'root' }];
	    tryLocsList.forEach(pushTryEntry, this);
	    this.reset(true);
	  }

	  runtime.keys = function (object) {
	    const keys = [];
	    for (const key in object) {
	      keys.push(key);
	    }
	    keys.reverse();

	    // Rather than returning an object with a next method, we keep
	    // things simple and return the next function itself.
	    return function next() {
	      while (keys.length) {
	        const key = keys.pop();
	        if (key in object) {
	          next.value = key;
	          next.done = false;
	          return next;
	        }
	      }

	      // To avoid creating an additional object, we just hang the .value
	      // and .done properties off the next function object itself. This
	      // also ensures that the minifier will not anonymize the function.
	      next.done = true;
	      return next;
	    };
	  };

	  function values(iterable) {
	    if (iterable) {
	      const iteratorMethod = iterable[iteratorSymbol];
	      if (iteratorMethod) {
	        return iteratorMethod.call(iterable);
	      }

	      if (typeof iterable.next === 'function') {
	        return iterable;
	      }

	      if (!isNaN(iterable.length)) {
	        let i = -1,
            next = function next() {
	          while (++i < iterable.length) {
	            if (hasOwn.call(iterable, i)) {
	              next.value = iterable[i];
	              next.done = false;
	              return next;
	            }
	          }

	          next.value = undefined;
	          next.done = true;

	          return next;
	        };

	        return next.next = next;
	      }
	    }

	    // Return an iterator with no values.
	    return { next: doneResult };
	  }
	  runtime.values = values;

	  function doneResult() {
	    return { value: undefined, done: true };
	  }

	  Context.prototype = {
	    constructor: Context,

	    reset(skipTempReset) {
	      this.prev = 0;
	      this.next = 0;
	      // Resetting context._sent for legacy support of Babel's
	      // function.sent implementation.
	      this.sent = this._sent = undefined;
	      this.done = false;
	      this.delegate = null;

	      this.method = 'next';
	      this.arg = undefined;

	      this.tryEntries.forEach(resetTryEntry);

	      if (!skipTempReset) {
	        for (const name in this) {
	          // Not sure about the optimal order of these conditions:
	          if (name.charAt(0) === 't' &&
	              hasOwn.call(this, name) &&
	              !isNaN(+name.slice(1))) {
	            this[name] = undefined;
	          }
	        }
	      }
	    },

	    stop() {
	      this.done = true;

	      const rootEntry = this.tryEntries[0];
	      const rootRecord = rootEntry.completion;
	      if (rootRecord.type === 'throw') {
	        throw rootRecord.arg;
	      }

	      return this.rval;
	    },

	    dispatchException(exception) {
	      if (this.done) {
	        throw exception;
	      }

	      const context = this;
	      function handle(loc, caught) {
	        record.type = 'throw';
	        record.arg = exception;
	        context.next = loc;

	        if (caught) {
	          // If the dispatched exception was caught by a catch block,
	          // then let that catch block handle the exception normally.
	          context.method = 'next';
	          context.arg = undefined;
	        }

	        return !!caught;
	      }

	      for (let i = this.tryEntries.length - 1; i >= 0; --i) {
	        const entry = this.tryEntries[i];
	        var record = entry.completion;

	        if (entry.tryLoc === 'root') {
	          // Exception thrown outside of any try block that could handle
	          // it, so set the completion value of the entire function to
	          // throw the exception.
	          return handle('end');
	        }

	        if (entry.tryLoc <= this.prev) {
	          const hasCatch = hasOwn.call(entry, 'catchLoc');
	          const hasFinally = hasOwn.call(entry, 'finallyLoc');

	          if (hasCatch && hasFinally) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            } else if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }
	          } else if (hasCatch) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            }
	          } else if (hasFinally) {
	            if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }
	          } else {
	            throw new Error('try statement without catch or finally');
	          }
	        }
	      }
	    },

	    abrupt(type, arg) {
	      for (let i = this.tryEntries.length - 1; i >= 0; --i) {
	        const entry = this.tryEntries[i];
	        if (entry.tryLoc <= this.prev &&
	            hasOwn.call(entry, 'finallyLoc') &&
	            this.prev < entry.finallyLoc) {
	          var finallyEntry = entry;
	          break;
	        }
	      }

	      if (finallyEntry &&
	          (type === 'break' ||
	           type === 'continue') &&
	          finallyEntry.tryLoc <= arg &&
	          arg <= finallyEntry.finallyLoc) {
	        // Ignore the finally entry if control is not jumping to a
	        // location outside the try/catch block.
	        finallyEntry = null;
	      }

	      const record = finallyEntry ? finallyEntry.completion : {};
	      record.type = type;
	      record.arg = arg;

	      if (finallyEntry) {
	        this.method = 'next';
	        this.next = finallyEntry.finallyLoc;
	        return ContinueSentinel;
	      }

	      return this.complete(record);
	    },

	    complete(record, afterLoc) {
	      if (record.type === 'throw') {
	        throw record.arg;
	      }

	      if (record.type === 'break' ||
	          record.type === 'continue') {
	        this.next = record.arg;
	      } else if (record.type === 'return') {
	        this.rval = this.arg = record.arg;
	        this.method = 'return';
	        this.next = 'end';
	      } else if (record.type === 'normal' && afterLoc) {
	        this.next = afterLoc;
	      }

	      return ContinueSentinel;
	    },

	    finish(finallyLoc) {
	      for (let i = this.tryEntries.length - 1; i >= 0; --i) {
	        const entry = this.tryEntries[i];
	        if (entry.finallyLoc === finallyLoc) {
	          this.complete(entry.completion, entry.afterLoc);
	          resetTryEntry(entry);
	          return ContinueSentinel;
	        }
	      }
	    },

	    catch(tryLoc) {
	      for (let i = this.tryEntries.length - 1; i >= 0; --i) {
	        const entry = this.tryEntries[i];
	        if (entry.tryLoc === tryLoc) {
	          const record = entry.completion;
	          if (record.type === 'throw') {
	            var thrown = record.arg;
	            resetTryEntry(entry);
	          }
	          return thrown;
	        }
	      }

	      // The context.catch method must only be called with a location
	      // argument that corresponds to a known catch block.
	      throw new Error('illegal catch attempt');
	    },

	    delegateYield(iterable, resultName, nextLoc) {
	      this.delegate = {
	        iterator: values(iterable),
	        resultName,
	        nextLoc
	      };

	      if (this.method === 'next') {
	        // Deliberately forget the last sent value so that we don't
	        // accidentally pass it on to the delegate.
	        this.arg = undefined;
	      }

	      return ContinueSentinel;
	    }
	  };
    }(
	  // Among the various tricks for obtaining a reference to the global
	  // object, this seems to be the most reliable technique that does not
	  // use indirect eval (which violates Content Security Policy).
	  typeof global === 'object' ? global :
	  typeof window === 'object' ? window :
	  typeof self === 'object' ? self : this
	));
/** */ }),
/* 326 */
/** */ (function (module, exports, __webpack_require__) {
    __webpack_require__(327);
    module.exports = __webpack_require__(9).RegExp.escape;
/** */ }),
/* 327 */
/** */ (function (module, exports, __webpack_require__) {
	// https://github.com/benjamingr/RexExp.escape
    const $export = __webpack_require__(8);
    const $re = __webpack_require__(328)(/[\\^$*+?.()|[\]{}]/g, '\\$&');

    $export($export.S, 'RegExp', { escape: function escape(it) { return $re(it); } });
/** */ }),
/* 328 */
/** */ (function (module, exports) {
    module.exports = function (regExp, replace) {
	  const replacer = replace === Object(replace) ? function (part) {
	    return replace[part];
	  } : replace;
	  return function (it) {
	    return String(it).replace(regExp, replacer);
	  };
    };
/** */ }),
/* 329 */
/** */ (function (module, exports, __webpack_require__) {
    const _typeof = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj; };

    const _electron = __webpack_require__(330);

    const _electronLog = __webpack_require__(331);

    const _electronLog2 = _interopRequireDefault(_electronLog);

    const _path = __webpack_require__(342);

    const _path2 = _interopRequireDefault(_path);

    const _request = __webpack_require__(349);

    const _request2 = _interopRequireDefault(_request);

    const _config = __webpack_require__(350);

    const _electron2 = __webpack_require__(352);

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

    function _asyncToGenerator(fn) { return function () { const gen = fn.apply(this, arguments); return new Promise((resolve, reject) => { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then((value) => { step('next', value); }, (err) => { step('throw', err); }); } } return step('next'); }); }; } /*
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                               Bootstrap of Electron 🚀
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                           */

    const httpPort = _config.main.httpPort;


	// if (process.env.NODE_ENV === 'development') {
    __webpack_require__(410)(); // eslint-disable-line global-require
	// }

	// Keep a global reference of the window object, if you don't, the window will
	// be closed automatically when the JavaScript object is garbage collected.
    let mainWindow = null;
    let menu = void 0;

	// global shared object
    global.sharedObj = { ffmpegProc: null, livepeerProc: null };

    const installExtensions = (function () {
	  const _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
	    let installer,
        extensions,
        forceDownload,
        _iteratorNormalCompletion,
        _didIteratorError,
        _iteratorError,
        _iterator,
        _step,
        name;

	    return regeneratorRuntime.wrap((_context) => {
	      while (1) {
	        switch (_context.prev = _context.next) {
	          case 0:
	            if (true) {
	              _context.next = 37;
	              break;
	            }

	            installer = __webpack_require__(420); // eslint-disable-line global-require

	            extensions = ['REACT_DEVELOPER_TOOLS', 'REACT_PERF'];
	            forceDownload = !!({ NODE_ENV: 'production' }).UPGRADE_EXTENSIONS;

	            if (extensions && (typeof extensions[Symbol.iterator] === 'function' || Array.isArray(extensions))) {
	              _context.next = 6;
	              break;
	            }

	            throw new TypeError(`Expected extensions to be iterable, got ${_inspect(extensions)}`);

	          case 6:
	            _iteratorNormalCompletion = true;
	            _didIteratorError = false;
	            _iteratorError = undefined;
	            _context.prev = 9;
	            _iterator = extensions[Symbol.iterator]();

	          case 11:
	            if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
	              _context.next = 23;
	              break;
	            }

	            name = _step.value;
	            _context.prev = 13;
	            _context.next = 16;
	            return installer.default(installer[name], forceDownload);

	          case 16:
	            _context.next = 20;
	            break;

	          case 18:
	            _context.prev = 18;
	            _context.t0 = _context.catch(13);

	          case 20:
	            _iteratorNormalCompletion = true;
	            _context.next = 11;
	            break;

	          case 23:
	            _context.next = 29;
	            break;

	          case 25:
	            _context.prev = 25;
	            _context.t1 = _context.catch(9);
	            _didIteratorError = true;
	            _iteratorError = _context.t1;

	          case 29:
	            _context.prev = 29;
	            _context.prev = 30;

	            if (!_iteratorNormalCompletion && _iterator.return) {
	              _iterator.return();
	            }

	          case 32:
	            _context.prev = 32;

	            if (!_didIteratorError) {
	              _context.next = 35;
	              break;
	            }

	            throw _iteratorError;

	          case 35:
	            return _context.finish(32);

	          case 36:
	            return _context.finish(29);

	          case 37:
	          case 'end':
	            return _context.stop();
	        }
	      }
	    }, _callee, undefined, [[9, 25, 29, 37], [13, 18], [30,, 32, 36]]);
	  }));

	  return function installExtensions() {
	    return _ref.apply(this, arguments);
	  };
    }());

	// Quit when all windows are closed.
    _electron.app.on('window-all-closed', () => {
	  // On OS X it is common for applications and their menu bar
	  // to stay active until the user quits explicitly with Cmd + Q
	  _electronLog2.default.info('All windows closed.  Shutting down FFMpeg and Livepeer...');

	  _electron2.windowFFMpeg.stopFFMpeg().then(() => {
	    _electron2.windowLivepeer.stopLivepeer().then(() => {
	      _electron.app.quit();
	    });
	  });
    });

    _electron.app.on('ready', _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
	  return regeneratorRuntime.wrap((_context2) => {
	    while (1) {
	      switch (_context2.prev = _context2.next) {
	        case 0:
	          _context2.next = 2;
	          return installExtensions();

	        case 2:

	          mainWindow = new _electron.BrowserWindow({
	            width: 1024,
	            height: 728,
	            frame: false,
	            backgroundColor: '#04050A',
	            show: false
	          });

	          mainWindow.loadURL(`file://${__dirname}/app/index.html`);

	          mainWindow.webContents.on('did-finish-load', () => {
	            mainWindow.show();
	            mainWindow.focus();
	          });

	          mainWindow.on('closed', () => {
	            mainWindow = null;
	          });

	          mainWindow.on('enter-full-screen', () => {
	            // Send async message to renderer process to update the store
	            mainWindow.webContents.send('fullscreen-toggled', true);
	          });

	          mainWindow.on('leave-full-screen', () => {
	            // Send async message to renderer process to update the store
	            mainWindow.webContents.send('fullscreen-toggled', false);
	          });

	          (0, _electron2.listener)(_electron.app, mainWindow);

	          if (false) {
	            mainWindow.openDevTools();
	            mainWindow.webContents.on('context-menu', (e, props) => {
	              let x = props.x,
	                  y = props.y;


	              _electron.Menu.buildFromTemplate([{
	                label: 'Inspect element',
	                click: function click() {
	                  mainWindow.inspectElement(x, y);
	                }
	              }]).popup(mainWindow);
	            });
	          }

	          menu = _electron.Menu.buildFromTemplate(_electron2.windowMenu);

	          if (process.platform === 'darwin') {
	            _electron.Menu.setApplicationMenu(menu);
	          } else {
	            mainWindow.setMenu(menu);
	          }

	        case 12:
	        case 'end':
	          return _context2.stop();
	      }
	    }
	  }, _callee2, undefined);
    })));

    function _inspect(input, depth) {
	  const maxDepth = 4;
	  const maxKeys = 15;

	  if (depth === undefined) {
	    depth = 0;
	  }

	  depth += 1;

	  if (input === null) {
	    return 'null';
	  } else if (input === undefined) {
	    return 'void';
	  } else if (typeof input === 'string' || typeof input === 'number' || typeof input === 'boolean') {
	    return typeof input === 'undefined' ? 'undefined' : _typeof(input);
	  } else if (Array.isArray(input)) {
	    if (input.length > 0) {
	      if (depth > maxDepth) return '[...]';

	      const first = _inspect(input[0], depth);

	      if (input.every((item) => _inspect(item, depth) === first)) {
	        return `${first.trim()}[]`;
	      }
	        return `[${input.slice(0, maxKeys).map((item) => _inspect(item, depth)).join(', ')}${input.length >= maxKeys ? ', ...' : ''}]`;
	    }
	      return 'Array';
	  }
	    const keys = Object.keys(input);

	    if (!keys.length) {
	      if (input.constructor && input.constructor.name && input.constructor.name !== 'Object') {
	        return input.constructor.name;
	      }
	        return 'Object';
	    }

	    if (depth > maxDepth) return '{...}';
	    const indent = '  '.repeat(depth - 1);
	    let entries = keys.slice(0, maxKeys).map((key) => `${/^([A-Z_$][A-Z0-9_$]*)$/i.test(key) ? key : JSON.stringify(key)}: ${_inspect(input[key], depth)};`).join(`\n  ${indent}`);

	    if (keys.length >= maxKeys) {
	      entries += `\n  ${indent}...`;
	    }

	    if (input.constructor && input.constructor.name && input.constructor.name !== 'Object') {
	      return `${input.constructor.name} {\n  ${indent}${entries}\n${indent}}`;
	    }
	      return `{\n  ${indent}${entries}\n${indent}}`;
    }
/** */ }),
/* 330 */
/** */ (function (module, exports) {
    module.exports = require('electron');
/** */ }),
/* 331 */
/** */ (function (module, exports, __webpack_require__) {
    if (process.type === 'renderer') {
	  module.exports = __webpack_require__(332);
    } else {
	  module.exports = __webpack_require__(333);
    }
/** */ }),
/* 332 */
/** */ (function (module, exports, __webpack_require__) {
    module.exports = null;

    let ipcRenderer;
    try {
	  ipcRenderer = __webpack_require__(330).ipcRenderer;
    } catch (e) {
	  ipcRenderer = null;
    }

    if (ipcRenderer) {
	  module.exports = {
	    error: log.bind(null, 'error'),
	    warn: log.bind(null, 'warn'),
	    info: log.bind(null, 'info'),
	    verbose: log.bind(null, 'verbose'),
	    debug: log.bind(null, 'debug'),
	    silly: log.bind(null, 'silly'),
	    log: log.bind(null, 'info')
	  };

	  module.exports.default = module.exports;

	  ipcRenderer.on('__ELECTRON_LOG_RENDERER__', (event, level, text) => {
	    if (level === 'verbose') {
	      level = 'log';
	    } else if (level === 'silly') {
	      level = 'debug';
	    }

	    console[level](text);
	  });
    }

    function log() {
	  let data = Array.prototype.slice.call(arguments);

	  data = data.map((obj) => {
	    if (obj instanceof Error) {
	      obj = obj.stack || obj;
	    }

	    return obj;
	  });

	  ipcRenderer.send('__ELECTRON_LOG__', data);
    }
/** */ }),
/* 333 */
/** */ (function (module, exports, __webpack_require__) {
    let electron;
    try {
	  electron = __webpack_require__(330);
    } catch (e) {
	  electron = null;
    }

    const log = __webpack_require__(334);
    const transportConsole = __webpack_require__(335);
    const transportFile = __webpack_require__(339);
    const transportLogS = __webpack_require__(344);
    const transportRendererConsole = __webpack_require__(348);

    const transports = {
	  console: transportConsole,
	  file: transportFile,
	  logS: transportLogS,
	  rendererConsole: transportRendererConsole
    };

    module.exports = {
	  transports,

	  error: log.bind(null, transports, 'error'),
	  warn: log.bind(null, transports, 'warn'),
	  info: log.bind(null, transports, 'info'),
	  verbose: log.bind(null, transports, 'verbose'),
	  debug: log.bind(null, transports, 'debug'),
	  silly: log.bind(null, transports, 'silly'),
	  log: log.bind(null, transports, 'info')
    };

    module.exports.default = module.exports;

    if (electron && electron.ipcMain) {
	  electron.ipcMain.on('__ELECTRON_LOG__', onRendererLog);
	  const appName = electron.app.getName();
	  if (appName !== 'Electron') {
	    transportFile.appName = appName;
	  }
    }

    function onRendererLog(event, data) {
	  if (Array.isArray(data)) {
	    data.unshift(transports);
	    log(...data);
	  }
    }
/** */ }),
/* 334 */
/** */ (function (module, exports) {
	// jshint -W040


    const LEVELS = ['error', 'warn', 'info', 'verbose', 'debug', 'silly'];

    module.exports = log;

    function log(transports, level, text) {
	  const data = Array.prototype.slice.call(arguments, 2);

	  const msg = {
	    data,
	    date: new Date(),
	    level
	  };

	  for (const i in transports) {
	    // jshint -W089
	    if (!transports.hasOwnProperty(i) || typeof transports[i] !== 'function') {
	      continue;
	    }

	    const transport = transports[i];

	    if (transport === false || !compareLevels(transport.level, level)) {
	      continue;
	    }

	    if (transport.level === false) continue;

	    transport.call(null, msg);
	  }
    }

    function compareLevels(passLevel, checkLevel) {
	  const pass = LEVELS.indexOf(passLevel);
	  const check = LEVELS.indexOf(checkLevel);
	  if (check === -1 || pass === -1) {
	    return true;
	  }
	  return check <= pass;
    }
/** */ }),
/* 335 */
/** */ (function (module, exports, __webpack_require__) {
    const format = __webpack_require__(336);

    transport.level = 'silly';
    transport.format = formatFn;

    module.exports = transport;

    function transport(msg) {
	  const text = format.format(msg, transport.format);
	  if (console[msg.level]) {
	    console[msg.level](text);
	  } else {
	    console.log(text);
	  }
    }

    function formatFn(msg) {
	  const time =
	    `${format.pad(msg.date.getHours())}:${
	    format.pad(msg.date.getMinutes())}:${
	    format.pad(msg.date.getSeconds())}:${
	    format.pad(msg.date.getMilliseconds(), 4)}`;

	  return `[${time}] [${msg.level}] ${
	    format.stringifyArray(msg.data)}`;
    }
/** */ }),
/* 336 */
/** */ (function (module, exports, __webpack_require__) {
    const util = __webpack_require__(337);
    const EOL = __webpack_require__(338).EOL;

    module.exports = {
	  format,
	  pad,
	  stringifyArray
    };

    function format(msg, formatter) {
	  if (typeof formatter === 'function') {
	    return formatter(msg);
	  }

	  const date = msg.date;

	  return formatter
	    .replace('{level}', msg.level)
	    .replace('{text}', stringifyArray(msg.data))
	    .replace('{y}', date.getFullYear())
	    .replace('{m}', pad(date.getMonth() + 1))
	    .replace('{d}', pad(date.getDate()))
	    .replace('{h}', pad(date.getHours()))
	    .replace('{i}', pad(date.getMinutes()))
	    .replace('{s}', pad(date.getSeconds()))
	    .replace('{ms}', pad(date.getMilliseconds(), 4));
    }

    function stringifyArray(data) {
	  data = data.map((arg) => arg instanceof Error ? arg.stack + EOL : arg);
	  return util.format(...data);
    }

    function pad(number, zeros) {
	  zeros = zeros || 2;
	  return (new Array(zeros + 1).join('0') + number).substr(-zeros, zeros);
    }
/** */ }),
/* 337 */
/** */ (function (module, exports) {
    module.exports = require('util');
/** */ }),
/* 338 */
/** */ (function (module, exports) {
    module.exports = require('os');
/** */ }),
/* 339 */
/** */ (function (module, exports, __webpack_require__) {
    const fs = __webpack_require__(340);
    const EOL = __webpack_require__(338).EOL;
    const format = __webpack_require__(336);
    const consoleTransport = __webpack_require__(335);
    const findLogPath = __webpack_require__(341);

    transport.findLogPath = findLogPath;
    transport.format = formatFn;
    transport.level = 'warn';
    transport.maxSize = 1024 * 1024;
    transport.streamConfig = undefined;

    module.exports = transport;

    function transport(msg) {
	  const text = format.format(msg, transport.format) + EOL;

	  if (transport.stream === undefined) {
	    initSteamConfig();
	    openStream();
	  }

	  if (transport.level === false) {
	    return;
	  }

	  const needLogRotation = transport.maxSize > 0 &&
	    getStreamSize(transport.stream) > transport.maxSize;

	  if (needLogRotation) {
	    archiveLog(transport.stream);
	    openStream();
	  }

	  transport.stream.write(text);
    }

    function initSteamConfig() {
	  transport.file = transport.file || findLogPath(transport.appName);

	  if (!transport.file) {
	    transport.level = false;
	    logConsole('Could not set a log file');
	  }
    }

    function openStream() {
	  if (transport.level === false) {
	    return;
	  }

	  transport.stream = fs.createWriteStream(
	    transport.file,
	    transport.streamConfig || { flags: 'a' }
	  );
    }

    function getStreamSize(stream) {
	  if (!stream) {
	    return 0;
	  }

	  if (stream.logSizeAtStart === undefined) {
	    try {
	      stream.logSizeAtStart = fs.statSync(stream.path).size;
	    } catch (e) {
	      stream.logSizeAtStart = 0;
	    }
	  }

	  return stream.logSizeAtStart + stream.bytesWritten;
    }

    function archiveLog(stream) {
	  if (stream.end) {
	    stream.end();
	  }

	  try {
	    fs.renameSync(stream.path, stream.path.replace(/log$/, 'old.log'));
	  } catch (e) {
	    logConsole('Could not rotate log', e);
	  }
    }

    function formatFn(msg) {
	  const date =
	    `${msg.date.getFullYear()}-${
	    format.pad(msg.date.getMonth() + 1)}-${
	    format.pad(msg.date.getDate())} ${
	    format.pad(msg.date.getHours())}:${
	    format.pad(msg.date.getMinutes())}:${
	    format.pad(msg.date.getSeconds())}:${
	    format.pad(msg.date.getMilliseconds(), 4)}`;

	  return `[${date}] [${msg.level}] ${
	    format.stringifyArray(msg.data)}`;
    }

    function logConsole(message, error) {
	  const data = [`electron-log.transports.file: ${message}`];

	  if (error) {
	    data.push(error);
	  }

	  consoleTransport({ data, date: new Date(), level: 'warn' });
    }
/** */ }),
/* 340 */
/** */ (function (module, exports) {
    module.exports = require('fs');
/** */ }),
/* 341 */
/** */ (function (module, exports, __webpack_require__) {
    const fs = __webpack_require__(340);
    const path = __webpack_require__(342);
    const os = __webpack_require__(338);
    const getAppName = __webpack_require__(343);

    module.exports = findLogPath;

	/**
	 * Try to determine a platform-specific path where can write logs
	 * @param {string} [appName] Used to determine the last part of a log path
	 * @return {string|boolean}
	 */
    function findLogPath(appName) {
	  appName = appName || getAppName();
	  if (!appName) {
	    return false;
	  }

	  const homeDir = os.homedir ? os.homedir() : ({ NODE_ENV: 'production' }).HOME;

	  let dir;
	  switch (process.platform) {
	    case 'linux': {
	      dir = prepareDir(({ NODE_ENV: 'production' }).XDG_CONFIG_HOME, appName)
	        .or(homeDir, '.config', appName)
	        .or(({ NODE_ENV: 'production' }).XDG_DATA_HOME, appName)
	        .or(homeDir, '.local', 'share', appName)
	        .result;
	      break;
	    }

	    case 'darwin': {
	      dir = prepareDir(homeDir, 'Library', 'Logs', appName)
	        .or(homeDir, 'Library', 'Application Support', appName)
	        .result;
	      break;
	    }

	    case 'win32': {
	      dir = prepareDir(({ NODE_ENV: 'production' }).APPDATA, appName)
	        .or(homeDir, 'AppData', 'Roaming', appName)
	        .result;
	      break;
	    }
	  }

	  if (dir) {
	    return path.join(dir, 'log.log');
	  }
	    return false;
    }


    function prepareDir(dirPath) {
	  // jshint -W040
	  if (!this || this.or !== prepareDir || !this.result) {
	    if (!dirPath) {
	      return { or: prepareDir };
	    }

	    // noinspection JSCheckFunctionSignatures
	    dirPath = path.join(...arguments);
	    mkDir(dirPath);

	    try {
	      fs.accessSync(dirPath, fs.W_OK);
	    } catch (e) {
	      return { or: prepareDir };
	    }
	  }

	  return {
	    or: prepareDir,
	    result: (this ? this.result : false) || dirPath
	  };
    }

    function mkDir(dirPath, root) {
	  const dirs = dirPath.split(path.sep);
	  const dir = dirs.shift();
	  root = (root || '') + dir + path.sep;

	  try {
	    fs.mkdirSync(root);
	  } catch (e) {
	    if (!fs.statSync(root).isDirectory()) {
	      throw new Error(e);
	    }
	  }

	  return !dirs.length || mkDir(dirs.join(path.sep), root);
    }
/** */ }),
/* 342 */
/** */ (function (module, exports) {
    module.exports = require('path');
/** */ }),
/* 343 */
/** */ (function (module, exports, __webpack_require__) {
	// jshint -W074


	/** @name process.resourcesPath */

    const fs = __webpack_require__(340);
    const path = __webpack_require__(342);
    const consoleTransport = __webpack_require__(335);

    module.exports = getAppName;

    function getAppName() {
	  try {
	    const name = loadPackageName();
	    if (name) {
	      return name;
	    }
	    return warn('electron-log: unable to load the app name from package.json');
	  } catch (e) {
	    return warn(`electron-log: ${e.message}`);
	  }
    }

	/**
	 * Try to load main app package
	 * @throws {Error}
	 * @return {Object|null}
	 */
    function loadPackageName() {
	  let packageFile;

	  try {
	    if (__webpack_require__.c[0].filename) {
	      packageFile = find(path.dirname(__webpack_require__.c[0].filename));
	    }
	  } catch (e) {}

	  if (!packageFile && process.resourcesPath) {
	    packageFile = find(path.join(process.resourcesPath, 'app.asar'));
	    const electronModule = path.join('node_modules', 'electron', 'package.json');
	    if (packageFile && packageFile.indexOf(electronModule) !== -1) {
	      packageFile = null;
	    }
	  }

	  if (!packageFile) {
	    packageFile = find(process.cwd());
	  }

	  if (!packageFile) {
	    return null;
	  }

	  const content = fs.readFileSync(packageFile, 'utf-8');
	  const packageData = JSON.parse(content);

	  // noinspection JSUnresolvedVariable
	  return packageData ? packageData.productName || packageData.name : false;
    }

    function find(root) {
	  let file;

	  while (!file) {
	    var parent;
	    file = path.join(root, 'package.json');

	    try {
	      fs.statSync(file);
	    } catch (e) {
	      parent = path.resolve(root, '..');
	      file = null;
	    }

	    if (root === parent) {
	      break;
	    }

	    root = parent;
	  }

	  return file;
    }

    function warn(message) {
	  consoleTransport({
	    data: [message],
	    date: new Date(),
	    level: 'warn'
	  });
    }
/** */ }),
/* 344 */
/** */ (function (module, exports, __webpack_require__) {
	// jshint -W074, -W089


    const http = __webpack_require__(345);
    const https = __webpack_require__(346);
    const url = __webpack_require__(347);

    transport.client = { name: 'electron-application' };
    transport.depth = 6;
    transport.level = false;
    transport.url = null;

    module.exports = transport;

    function transport(msg) {
	  if (!transport.url) return;

	  const data = jsonDepth({
	    client: transport.client,
	    data: msg.data,
	    date: msg.date.getTime(),
	    level: msg.level
	  }, transport.depth + 1);

	  post(transport.url, data);
    }

    function post(serverUrl, data) {
	  const urlObject = url.parse(serverUrl);
	  const transport = urlObject.protocol === 'https:' ? https : http;

	  const body = JSON.stringify(data);

	  const options = {
	    hostname: urlObject.hostname,
	    port: urlObject.port,
	    path: urlObject.path,
	    method: 'POST',
	    headers: {
	      'Content-Type': 'application/json',
	      'Content-Length': body.length
	    }
	  };

	  const request = transport.request(options);
	  request.write(body);
	  request.end();
    }

    function jsonDepth(json, depth) {
	  if (depth < 1) {
	    if (Array.isArray(json)) return '[array]';
	    if (typeof json === 'object') return '[object]';
	    return json;
	  }

	  if (Array.isArray(json)) {
	    return json.map((child) => jsonDepth(child, depth - 1));
	  }

	  if (json && typeof json.getMonth === 'function') {
	    return json;
	  }

	  if (json === null) {
	    return null;
	  }

	  if (typeof json === 'object') {
	    if (typeof json.toJSON === 'function') {
	      json = json.toJSON();
	    }

	    const newJson = {};
	    for (const i in json) {
	      // noinspection JSUnfilteredForInLoop
	      newJson[i] = jsonDepth(json[i], depth - 1);
	    }

	    return newJson;
	  }

	  return json;
    }
/** */ }),
/* 345 */
/** */ (function (module, exports) {
    module.exports = require('http');
/** */ }),
/* 346 */
/** */ (function (module, exports) {
    module.exports = require('https');
/** */ }),
/* 347 */
/** */ (function (module, exports) {
    module.exports = require('url');
/** */ }),
/* 348 */
/** */ (function (module, exports, __webpack_require__) {
    let BrowserWindow;
    try {
	  BrowserWindow = __webpack_require__(330).BrowserWindow;
    } catch (e) {
	  BrowserWindow = null;
    }

    const format = __webpack_require__(336);

    transport.level = BrowserWindow ? 'silly' : false;
    transport.format = formatFn;

    module.exports = transport;

    function transport(msg) {
	  if (!BrowserWindow) return;

	  const text = format.format(msg, transport.format);
	  BrowserWindow.getAllWindows().forEach((wnd) => {
	    wnd.webContents.send('__ELECTRON_LOG_RENDERER__', msg.level, text);
	  });
    }

    function formatFn(msg) {
	  const time =
	        `${format.pad(msg.date.getHours())}:${
	        format.pad(msg.date.getMinutes())}:${
	        format.pad(msg.date.getSeconds())}:${
	        format.pad(msg.date.getMilliseconds(), 4)}`;

	  return `[${time}] ${format.stringifyArray(msg.data)}`;
    }
/** */ }),
/* 349 */
/** */ (function (module, exports) {
    module.exports = require('request');
/** */ }),
/* 350 */
/** */ (function (module, exports, __webpack_require__) {
    Object.defineProperty(exports, '__esModule', {
	    value: true
    });
	/*
	    Configuration store for the dependencies and frame config
	*/

    const homeDir = __webpack_require__(338).homedir();
    const appRootDir = __webpack_require__(351).get();
	/*
	https://github.com/electron-userland/electron-builder/wiki/Options#Config-extraResources
	*/
    const frameConfig = [{ framerate: 15, keyint: 75 }, { framerate: 30, keyint: 150 }, { framerate: 60, keyint: 300 }];
    const rtmpPort = '1935';
    const httpPort = '8935';

    exports.default = {
	    main: { homeDir, frameConfig, rtmpPort, httpPort, appRootDir }
    };
    module.exports = exports.default;
/** */ }),
/* 351 */
/** */ (function (module, exports, __webpack_require__) {
    const GLOBAL_KEY = 'app-root-dir';
    let _rootDir;

    exports.get = function () {
	    const dir = global[GLOBAL_KEY];
	    if (dir) {
	        return dir;
	    }

	    if (_rootDir === undefined) {
	        const fs = __webpack_require__(340);
	        const path = __webpack_require__(342);
	        const NODE_MODULES = `${path.sep}node_modules${path.sep}`;
	        const cwd = process.cwd();
	        let pos = cwd.indexOf(NODE_MODULES);
	        if (pos !== -1) {
	            _rootDir = cwd.substring(0, pos);
	        } else if (fs.existsSync(path.join(cwd, 'package.json'))) {
	            _rootDir = cwd;
	        } else {
	            pos = __dirname.indexOf(NODE_MODULES);
	            if (pos === -1) {
	                _rootDir = path.normalize(path.join(__dirname, '..'));
	            } else {
	                _rootDir = __dirname.substring(0, pos);
	            }
	        }
	    }

	    return _rootDir;
    };

    exports.set = function (dir) {
	    global[GLOBAL_KEY] = _rootDir = dir;
    };
/** */ }),
/* 352 */
/** */ (function (module, exports, __webpack_require__) {
    Object.defineProperty(exports, '__esModule', {
	  value: true
    });

    const _electron = __webpack_require__(353);

    Object.keys(_electron).forEach((key) => {
	  if (key === 'default' || key === '__esModule') return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _electron[key];
	    }
	  });
    });

    const _electron2 = __webpack_require__(405);

    Object.keys(_electron2).forEach((key) => {
	  if (key === 'default' || key === '__esModule') return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _electron2[key];
	    }
	  });
    });

    const _electron3 = __webpack_require__(406);

    Object.keys(_electron3).forEach((key) => {
	  if (key === 'default' || key === '__esModule') return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _electron3[key];
	    }
	  });
    });

    const _electron4 = __webpack_require__(408);

    Object.keys(_electron4).forEach((key) => {
	  if (key === 'default' || key === '__esModule') return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _electron4[key];
	    }
	  });
    });

    const _electron5 = __webpack_require__(409);

    Object.keys(_electron5).forEach((key) => {
	  if (key === 'default' || key === '__esModule') return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _electron5[key];
	    }
	  });
    });
/** */ }),
/* 353 */
/** */ (function (module, exports, __webpack_require__) {
    Object.defineProperty(exports, '__esModule', {
	  value: true
    });
	/*
	    Logging
	*/

    const fs = __webpack_require__(340);
    const shell = __webpack_require__(354);

    const setLogging = function setLogging() {
	  // Same as for console transport
	  log.transports.file.level = 'info';
	  log.transports.file.format = '{h}:{i}:{s}:{ms} {text}';

	  // Set approximate maximum log size in bytes. When it exceeds,
	  // the archived log will be saved as the log.old.log file
	  log.transports.file.maxSize = 5 * 1024 * 1024;

	  // Write to this file, must be set before first logging
	  // log.transports.file.file = __dirname + '/log.txt';
	  log.transports.file.file = `${homeDir}/Livepeer/log.txt`;

	  // fs.createWriteStream options, must be set before first logging
	  log.transports.file.streamConfig = { flags: 'w' };

	  // set existed file stream
	  if (!fs.existsSync(`${homeDir}/Livepeer/`)) {
	    console.log('Making Logging Dir');
	    shell.mkdir('-p', `${homeDir}/Livepeer/`);
	  }
	  // Remove log file if it's too big
	  if (fs.existsSync(`${homeDir}/Livepeer/log.txt`)) {
	    const stats = fs.statSync(`${homeDir}/Livepeer/log.txt`);
	    if (stats.size > 10 * 1000 * 1000) {
	      shell.rm(`${homeDir}/Livepeer/log.txt`);
	    }
	  }
	  log.transports.file.stream = fs.createWriteStream(`${homeDir}/Livepeer/log.txt`, { flags: 'a' });

	  log.transports.file.appName = 'LivepeerDesktop';
    };

    const sendBugReport = function sendBugReport() {
	  log.info('Sending logfile to Livepeer');

	  const api_key = 'key-b3ca6551d733367cdb89b04ee6b51f08';
	  const domain = 'sandboxd3a92ba5697e455bb770bf0142cdf741.mailgun.org';
	  // var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});

	  let
	  // Local ip address that we're trying to calculate
	  address,	  // Provides a few basic operating-system related utility functions (built-in)

	      os = __webpack_require__(338),	  // Network interfaces

	      ifaces = os.networkInterfaces();

	  for (const dev in ifaces) {
	    // ... and find the one that matches the criteria
	    const iface = ifaces[dev].filter((details) => details.family === 'IPv4' && details.internal === false);
	    if (iface.length > 0) address = iface[0].address;
	  }

	  // fs.readFile( __dirname + '/log.txt', function (err, data) {
	  fs.readFile(`${homeDir}/Livepeer/log.txt`, (err, data) => {
	    if (err) {
	      throw err;
	    }

	    const res = {
	      from: `Bug Reporter ${address} <user@sandboxd3a92ba5697e455bb770bf0142cdf741.mailgun.org>`,
	      to: 'eric@livepeer.org',
	      subject: 'Sending Bug Report',
	      text: data.toString()
	    };

	    // mailgun.messages().send(res, function (error, body) {
	    //   log.info(body);
	    // });
	  });
    };

    exports.default = { windowLogging: { setLogging, sendBugReport } };
    module.exports = exports.default;
/** */ }),
/* 354 */
/** */ (function (module, exports, __webpack_require__) {
	//
	// ShellJS
	// Unix shell commands on top of Node's API
	//
	// Copyright (c) 2012 Artur Adib
	// http://github.com/shelljs/shelljs
	//

    const common = __webpack_require__(355);

	// @
	// @ All commands run synchronously, unless otherwise stated.
	// @ All commands accept standard bash globbing characters (`*`, `?`, etc.),
	// @ compatible with the [node glob module](https://github.com/isaacs/node-glob).
	// @
	// @ For less-commonly used commands and features, please check out our [wiki
	// @ page](https://github.com/shelljs/shelljs/wiki).
	// @

	// Include the docs for all the default commands
	// @commands

	// Load all default commands
    __webpack_require__(372).forEach((command) => {
	  __webpack_require__(373)(`./${command}`);
    });

	// @
	// @ ### exit(code)
	// @ Exits the current process with the given exit code.
    exports.exit = process.exit;

	// @include ./src/error
    exports.error = __webpack_require__(380);

	// @include ./src/common
    exports.ShellString = common.ShellString;

	// @
	// @ ### env['VAR_NAME']
	// @ Object containing environment variables (both getter and setter). Shortcut
	// @ to process.env.
    exports.env = ({ NODE_ENV: 'production' });

	// @
	// @ ### Pipes
	// @
	// @ Examples:
	// @
	// @ ```javascript
	// @ grep('foo', 'file1.txt', 'file2.txt').sed(/o/g, 'a').to('output.txt');
	// @ echo('files with o\'s in the name:\n' + ls().grep('o'));
	// @ cat('test.js').exec('node'); // pipe to exec() call
	// @ ```
	// @
	// @ Commands can send their output to another command in a pipe-like fashion.
	// @ `sed`, `grep`, `cat`, `exec`, `to`, and `toEnd` can appear on the right-hand
	// @ side of a pipe. Pipes can be chained.

	// @
	// @ ## Configuration
	// @

    exports.config = common.config;

	// @
	// @ ### config.silent
	// @
	// @ Example:
	// @
	// @ ```javascript
	// @ var sh = require('shelljs');
	// @ var silentState = sh.config.silent; // save old silent state
	// @ sh.config.silent = true;
	// @ /* ... */
	// @ sh.config.silent = silentState; // restore old silent state
	// @ ```
	// @
	// @ Suppresses all command output if `true`, except for `echo()` calls.
	// @ Default is `false`.

	// @
	// @ ### config.fatal
	// @
	// @ Example:
	// @
	// @ ```javascript
	// @ require('shelljs/global');
	// @ config.fatal = true; // or set('-e');
	// @ cp('this_file_does_not_exist', '/dev/null'); // throws Error here
	// @ /* more commands... */
	// @ ```
	// @
	// @ If `true` the script will throw a Javascript error when any shell.js
	// @ command encounters an error. Default is `false`. This is analogous to
	// @ Bash's `set -e`

	// @
	// @ ### config.verbose
	// @
	// @ Example:
	// @
	// @ ```javascript
	// @ config.verbose = true; // or set('-v');
	// @ cd('dir/');
	// @ rm('-rf', 'foo.txt', 'bar.txt');
	// @ exec('echo hello');
	// @ ```
	// @
	// @ Will print each command as follows:
	// @
	// @ ```
	// @ cd dir/
	// @ rm -rf foo.txt bar.txt
	// @ exec echo hello
	// @ ```

	// @
	// @ ### config.globOptions
	// @
	// @ Example:
	// @
	// @ ```javascript
	// @ config.globOptions = {nodir: true};
	// @ ```
	// @
	// @ Use this value for calls to `glob.sync()` instead of the default options.

	// @
	// @ ### config.reset()
	// @
	// @ Example:
	// @
	// @ ```javascript
	// @ var shell = require('shelljs');
	// @ // Make changes to shell.config, and do stuff...
	// @ /* ... */
	// @ shell.config.reset(); // reset to original state
	// @ // Do more stuff, but with original settings
	// @ /* ... */
	// @ ```
	// @
	// @ Reset shell.config to the defaults:
	// @
	// @ ```javascript
	// @ {
	// @   fatal: false,
	// @   globOptions: {},
	// @   maxdepth: 255,
	// @   noglob: false,
	// @   silent: false,
	// @   verbose: false,
	// @ }
	// @ ```
/** */ }),
/* 355 */
/** */ (function (module, exports, __webpack_require__) {
	// Ignore warning about 'new String()'
	/* eslint no-new-wrappers: 0 */


    const os = __webpack_require__(338);
    const fs = __webpack_require__(340);
    const glob = __webpack_require__(356);
    const shell = __webpack_require__(354);

    const shellMethods = Object.create(shell);

	// objectAssign(target_obj, source_obj1 [, source_obj2 ...])
	// "Ponyfill" for Object.assign
	//    objectAssign({A:1}, {b:2}, {c:3}) returns {A:1, b:2, c:3}
    const objectAssign = typeof Object.assign === 'function' ?
	  Object.assign :
	  function objectAssign(target) {
	    const sources = [].slice.call(arguments, 1);
	    sources.forEach((source) => {
	      Object.keys(source).forEach((key) => {
	        target[key] = source[key];
	      });
	    });

	    return target;
	  };
    exports.extend = objectAssign;

	// Check if we're running under electron
    const isElectron = Boolean(process.versions.electron);

	// Module globals (assume no execPath by default)
    const DEFAULT_CONFIG = {
	  fatal: false,
	  globOptions: {},
	  maxdepth: 255,
	  noglob: false,
	  silent: false,
	  verbose: false,
	  execPath: null,
	  bufLength: 64 * 1024 // 64KB
    };

    const config = {
	  reset() {
	    objectAssign(this, DEFAULT_CONFIG);
	    if (!isElectron) {
	      this.execPath = process.execPath;
	    }
	  },
	  resetForTesting() {
	    this.reset();
	    this.silent = true;
	  }
    };

    config.reset();
    exports.config = config;

    const state = {
	  error: null,
	  errorCode: 0,
	  currentCmd: 'shell.js',
	  tempDir: null
    };
    exports.state = state;

    delete ({ NODE_ENV: 'production' }).OLDPWD; // initially, there's no previous directory

	// This is populated by calls to commonl.wrap()
    const pipeMethods = [];

	// Reliably test if something is any sort of javascript object
    function isObject(a) {
	  return typeof a === 'object' && a !== null;
    }
    exports.isObject = isObject;

    function log() {
	  /* istanbul ignore next */
	  if (!config.silent) {
	    console.error(...arguments);
	  }
    }
    exports.log = log;

	// Converts strings to be equivalent across all platforms. Primarily responsible
	// for making sure we use '/' instead of '\' as path separators, but this may be
	// expanded in the future if necessary
    function convertErrorOutput(msg) {
	  if (typeof msg !== 'string') {
	    throw new TypeError('input must be a string');
	  }
	  return msg.replace(/\\/g, '/');
    }
    exports.convertErrorOutput = convertErrorOutput;

	// Shows error message. Throws if config.fatal is true
    function error(msg, _code, options) {
	  // Validate input
	  if (typeof msg !== 'string') throw new Error('msg must be a string');

	  const DEFAULT_OPTIONS = {
	    continue: false,
	    code: 1,
	    prefix: `${state.currentCmd}: `,
	    silent: false
	  };

	  if (typeof _code === 'number' && isObject(options)) {
	    options.code = _code;
	  } else if (isObject(_code)) { // no 'code'
	    options = _code;
	  } else if (typeof _code === 'number') { // no 'options'
	    options = { code: _code };
	  } else if (typeof _code !== 'number') { // only 'msg'
	    options = {};
	  }
	  options = objectAssign({}, DEFAULT_OPTIONS, options);

	  if (!state.errorCode) state.errorCode = options.code;

	  const logEntry = convertErrorOutput(options.prefix + msg);
	  state.error = state.error ? `${state.error}\n` : '';
	  state.error += logEntry;

	  // Throw an error, or log the entry
	  if (config.fatal) throw new Error(logEntry);
	  if (msg.length > 0 && !options.silent) log(logEntry);

	  if (!options.continue) {
	    throw {
	      msg: 'earlyExit',
	      retValue: (new ShellString('', state.error, state.errorCode))
	    };
	  }
    }
    exports.error = error;

	// @
	// @ ### ShellString(str)
	// @
	// @ Examples:
	// @
	// @ ```javascript
	// @ var foo = ShellString('hello world');
	// @ ```
	// @
	// @ Turns a regular string into a string-like object similar to what each
	// @ command returns. This has special methods, like `.to()` and `.toEnd()`
    function ShellString(stdout, stderr, code) {
	  let that;
	  if (stdout instanceof Array) {
	    that = stdout;
	    that.stdout = stdout.join('\n');
	    if (stdout.length > 0) that.stdout += '\n';
	  } else {
	    that = new String(stdout);
	    that.stdout = stdout;
	  }
	  that.stderr = stderr;
	  that.code = code;
	  // A list of all commands that can appear on the right-hand side of a pipe
	  // (populated by calls to common.wrap())
	  pipeMethods.forEach((cmd) => {
	    that[cmd] = shellMethods[cmd].bind(that);
	  });
	  return that;
    }

    exports.ShellString = ShellString;

	// Return the home directory in a platform-agnostic way, with consideration for
	// older versions of node
    function getUserHome() {
	  let result;
	  if (os.homedir) {
	    result = os.homedir(); // node 3+
	  } else {
	    result = ({ NODE_ENV: 'production' })[(process.platform === 'win32') ? 'USERPROFILE' : 'HOME'];
	  }
	  return result;
    }
    exports.getUserHome = getUserHome;

	// Returns {'alice': true, 'bob': false} when passed a string and dictionary as follows:
	//   parseOptions('-a', {'a':'alice', 'b':'bob'});
	// Returns {'reference': 'string-value', 'bob': false} when passed two dictionaries of the form:
	//   parseOptions({'-r': 'string-value'}, {'r':'reference', 'b':'bob'});
    function parseOptions(opt, map, errorOptions) {
	  // Validate input
	  if (typeof opt !== 'string' && !isObject(opt)) {
	    throw new Error('options must be strings or key-value pairs');
	  } else if (!isObject(map)) {
	    throw new Error('parseOptions() internal error: map must be an object');
	  } else if (errorOptions && !isObject(errorOptions)) {
	    throw new Error('parseOptions() internal error: errorOptions must be object');
	  }

	  // All options are false by default
	  const options = {};
	  Object.keys(map).forEach((letter) => {
	    const optName = map[letter];
	    if (optName[0] !== '!') {
	      options[optName] = false;
	    }
	  });

	  if (opt === '') return options; // defaults

	  if (typeof opt === 'string') {
	    if (opt[0] !== '-') {
	      error('Options string must start with a \'-\'', errorOptions || {});
	    }

	    // e.g. chars = ['R', 'f']
	    const chars = opt.slice(1).split('');

	    chars.forEach((c) => {
	      if (c in map) {
	        const optionName = map[c];
	        if (optionName[0] === '!') {
	          options[optionName.slice(1)] = false;
	        } else {
	          options[optionName] = true;
	        }
	      } else {
	        error(`option not recognized: ${c}`, errorOptions || {});
	      }
	    });
	  } else { // opt is an Object
	    Object.keys(opt).forEach((key) => {
	      // key is a string of the form '-r', '-d', etc.
	      const c = key[1];
	      if (c in map) {
	        const optionName = map[c];
	        options[optionName] = opt[key]; // assign the given value
	      } else {
	        error(`option not recognized: ${c}`, errorOptions || {});
	      }
	    });
	  }
	  return options;
    }
    exports.parseOptions = parseOptions;

	// Expands wildcards with matching (ie. existing) file names.
	// For example:
	//   expand(['file*.js']) = ['file1.js', 'file2.js', ...]
	//   (if the files 'file1.js', 'file2.js', etc, exist in the current dir)
    function expand(list) {
	  if (!Array.isArray(list)) {
	    throw new TypeError('must be an array');
	  }
	  let expanded = [];
	  list.forEach((listEl) => {
	    // Don't expand non-strings
	    if (typeof listEl !== 'string') {
	      expanded.push(listEl);
	    } else {
	      let ret;
	      try {
	        ret = glob.sync(listEl, config.globOptions);
	        // if nothing matched, interpret the string literally
	        ret = ret.length > 0 ? ret : [listEl];
	      } catch (e) {
	        // if glob fails, interpret the string literally
	        ret = [listEl];
	      }
	      expanded = expanded.concat(ret);
	    }
	  });
	  return expanded;
    }
    exports.expand = expand;

	// Normalizes Buffer creation, using Buffer.alloc if possible.
	// Also provides a good default buffer length for most use cases.
    const buffer = typeof Buffer.alloc === 'function' ?
	  function (len) {
	    return Buffer.alloc(len || config.bufLength);
	  } :
	  function (len) {
	    return new Buffer(len || config.bufLength);
	  };
    exports.buffer = buffer;

	// Normalizes _unlinkSync() across platforms to match Unix behavior, i.e.
	// file can be unlinked even if it's read-only, see https://github.com/joyent/node/issues/3006
    function unlinkSync(file) {
	  try {
	    fs.unlinkSync(file);
	  } catch (e) {
	    // Try to override file permission
	    /* istanbul ignore next */
	    if (e.code === 'EPERM') {
	      fs.chmodSync(file, '0666');
	      fs.unlinkSync(file);
	    } else {
	      throw e;
	    }
	  }
    }
    exports.unlinkSync = unlinkSync;

	// e.g. 'shelljs_a5f185d0443ca...'
    function randomFileName() {
	  function randomHash(count) {
	    if (count === 1) {
	      return parseInt(16 * Math.random(), 10).toString(16);
	    }
	    let hash = '';
	    for (let i = 0; i < count; i++) {
	      hash += randomHash(1);
	    }
	    return hash;
	  }

	  return `shelljs_${randomHash(20)}`;
    }
    exports.randomFileName = randomFileName;

	// Common wrapper for all Unix-like commands that performs glob expansion,
	// command-logging, and other nice things
    function wrap(cmd, fn, options) {
	  options = options || {};
	  if (options.canReceivePipe) {
	    pipeMethods.push(cmd);
	  }
	  return function () {
	    let retValue = null;

	    state.currentCmd = cmd;
	    state.error = null;
	    state.errorCode = 0;

	    try {
	      let args = [].slice.call(arguments, 0);

	      // Log the command to stderr, if appropriate
	      if (config.verbose) {
	        console.error(...[cmd].concat(args));
	      }

	      // If this is coming from a pipe, let's set the pipedValue (otherwise, set
	      // it to the empty string)
	      state.pipedValue = (this && typeof this.stdout === 'string') ? this.stdout : '';

	      if (options.unix === false) { // this branch is for exec()
	        retValue = fn.apply(this, args);
	      } else { // and this branch is for everything else
	        if (isObject(args[0]) && args[0].constructor.name === 'Object') {
	          // a no-op, allowing the syntax `touch({'-r': file}, ...)`
	        } else if (args.length === 0 || typeof args[0] !== 'string' || args[0].length <= 1 || args[0][0] !== '-') {
	          args.unshift(''); // only add dummy option if '-option' not already present
	        }

	        // flatten out arrays that are arguments, to make the syntax:
	        //    `cp([file1, file2, file3], dest);`
	        // equivalent to:
	        //    `cp(file1, file2, file3, dest);`
	        args = args.reduce((accum, cur) => {
	          if (Array.isArray(cur)) {
	            return accum.concat(cur);
	          }
	          accum.push(cur);
	          return accum;
	        }, []);

	        // Convert ShellStrings (basically just String objects) to regular strings
	        args = args.map((arg) => {
	          if (isObject(arg) && arg.constructor.name === 'String') {
	            return arg.toString();
	          }
	          return arg;
	        });

	        // Expand the '~' if appropriate
	        const homeDir = getUserHome();
	        args = args.map((arg) => {
	          if (typeof arg === 'string' && arg.slice(0, 2) === '~/' || arg === '~') {
	            return arg.replace(/^~/, homeDir);
	          }
	          return arg;
	        });

	        // Perform glob-expansion on all arguments after globStart, but preserve
	        // the arguments before it (like regexes for sed and grep)
	        if (!config.noglob && options.allowGlobbing === true) {
	          args = args.slice(0, options.globStart).concat(expand(args.slice(options.globStart)));
	        }

	        try {
	          // parse options if options are provided
	          if (isObject(options.cmdOptions)) {
	            args[0] = parseOptions(args[0], options.cmdOptions);
	          }

	          retValue = fn.apply(this, args);
	        } catch (e) {
	          /* istanbul ignore else */
	          if (e.msg === 'earlyExit') {
	            retValue = e.retValue;
	          } else {
	            throw e; // this is probably a bug that should be thrown up the call stack
	          }
	        }
	      }
	    } catch (e) {
	      /* istanbul ignore next */
	      if (!state.error) {
	        // If state.error hasn't been set it's an error thrown by Node, not us - probably a bug...
	        console.error('ShellJS: internal error');
	        console.error(e.stack || e);
	        process.exit(1);
	      }
	      if (config.fatal) throw e;
	    }

	    if (options.wrapOutput &&
	        (typeof retValue === 'string' || Array.isArray(retValue))) {
	      retValue = new ShellString(retValue, state.error, state.errorCode);
	    }

	    state.currentCmd = 'shell.js';
	    return retValue;
	  };
    } // wrap
    exports.wrap = wrap;

	// This returns all the input that is piped into the current command (or the
	// empty string, if this isn't on the right-hand side of a pipe
    function _readFromPipe() {
	  return state.pipedValue;
    }
    exports.readFromPipe = _readFromPipe;

    const DEFAULT_WRAP_OPTIONS = {
	  allowGlobbing: true,
	  canReceivePipe: false,
	  cmdOptions: false,
	  globStart: 1,
	  pipeOnly: false,
	  unix: true,
	  wrapOutput: true,
	  overWrite: false
    };

	// Register a new ShellJS command
    function _register(name, implementation, wrapOptions) {
	  wrapOptions = wrapOptions || {};
	  // If an option isn't specified, use the default
	  wrapOptions = objectAssign({}, DEFAULT_WRAP_OPTIONS, wrapOptions);

	  if (shell[name] && !wrapOptions.overWrite) {
	    throw new Error(`unable to overwrite \`${name}\` command`);
	  }

	  if (wrapOptions.pipeOnly) {
	    wrapOptions.canReceivePipe = true;
	    shellMethods[name] = wrap(name, implementation, wrapOptions);
	  } else {
	    shell[name] = wrap(name, implementation, wrapOptions);
	  }
    }
    exports.register = _register;
/** */ }),
/* 356 */
/** */ (function (module, exports, __webpack_require__) {
	// Approach:
	//
	// 1. Get the minimatch set
	// 2. For each pattern in the set, PROCESS(pattern, false)
	// 3. Store matches per-set, then uniq them
	//
	// PROCESS(pattern, inGlobStar)
	// Get the first [n] items from pattern that are all strings
	// Join these together.  This is PREFIX.
	//   If there is no more remaining, then stat(PREFIX) and
	//   add to matches if it succeeds.  END.
	//
	// If inGlobStar and PREFIX is symlink and points to dir
	//   set ENTRIES = []
	// else readdir(PREFIX) as ENTRIES
	//   If fail, END
	//
	// with ENTRIES
	//   If pattern[n] is GLOBSTAR
	//     // handle the case where the globstar match is empty
	//     // by pruning it out, and testing the resulting pattern
	//     PROCESS(pattern[0..n] + pattern[n+1 .. $], false)
	//     // handle other cases.
	//     for ENTRY in ENTRIES (not dotfiles)
	//       // attach globstar + tail onto the entry
	//       // Mark that this entry is a globstar match
	//       PROCESS(pattern[0..n] + ENTRY + pattern[n .. $], true)
	//
	//   else // not globstar
	//     for ENTRY in ENTRIES (not dotfiles, unless pattern[n] is dot)
	//       Test ENTRY against pattern[n]
	//       If fails, continue
	//       If passes, PROCESS(pattern[0..n] + item + pattern[n+1 .. $])
	//
	// Caveat:
	//   Cache all stats and readdirs results to minimize syscall.  Since all
	//   we ever care about is existence and directory-ness, we can just keep
	//   `true` for files, and [children,...] for directories, or `false` for
	//   things that don't exist.

    module.exports = glob

    const fs = __webpack_require__(340)
    const rp = __webpack_require__(357)
    const minimatch = __webpack_require__(359)
    const Minimatch = minimatch.Minimatch
    const inherits = __webpack_require__(363)
    const EE = __webpack_require__(364).EventEmitter
    const path = __webpack_require__(342)
    const assert = __webpack_require__(365)
    const isAbsolute = __webpack_require__(366)
    const globSync = __webpack_require__(367)
    const common = __webpack_require__(368)
    const alphasort = common.alphasort
    const alphasorti = common.alphasorti
    const setopts = common.setopts
    const ownProp = common.ownProp
    const inflight = __webpack_require__(369)
    const util = __webpack_require__(337)
    const childrenIgnored = common.childrenIgnored
    const isIgnored = common.isIgnored

    const once = __webpack_require__(371)

    function glob(pattern, options, cb) {
	  if (typeof options === 'function') cb = options, options = {}
	  if (!options) options = {}

	  if (options.sync) {
	    if (cb) { throw new TypeError('callback provided to sync glob') }
	    return globSync(pattern, options)
	  }

	  return new Glob(pattern, options, cb)
    }

    glob.sync = globSync
    const GlobSync = glob.GlobSync = globSync.GlobSync

	// old api surface
    glob.glob = glob

    function extend(origin, add) {
	  if (add === null || typeof add !== 'object') {
	    return origin
	  }

	  const keys = Object.keys(add)
	  let i = keys.length
	  while (i--) {
	    origin[keys[i]] = add[keys[i]]
	  }
	  return origin
    }

    glob.hasMagic = function (pattern, options_) {
	  const options = extend({}, options_)
	  options.noprocess = true

	  const g = new Glob(pattern, options)
	  const set = g.minimatch.set

	  if (!pattern) { return false }

	  if (set.length > 1) { return true }

	  for (let j = 0; j < set[0].length; j++) {
	    if (typeof set[0][j] !== 'string') { return true }
	  }

	  return false
    }

    glob.Glob = Glob
    inherits(Glob, EE)
    function Glob(pattern, options, cb) {
	  if (typeof options === 'function') {
	    cb = options
	    options = null
	  }

	  if (options && options.sync) {
	    if (cb) { throw new TypeError('callback provided to sync glob') }
	    return new GlobSync(pattern, options)
	  }

	  if (!(this instanceof Glob)) { return new Glob(pattern, options, cb) }

	  setopts(this, pattern, options)
	  this._didRealPath = false

	  // process each pattern in the minimatch set
	  const n = this.minimatch.set.length

	  // The matches are stored as {<filename>: true,...} so that
	  // duplicates are automagically pruned.
	  // Later, we do an Object.keys() on these.
	  // Keep them as a list so we can fill in when nonull is set.
	  this.matches = new Array(n)

	  if (typeof cb === 'function') {
	    cb = once(cb)
	    this.on('error', cb)
	    this.on('end', (matches) => {
	      cb(null, matches)
	    })
	  }

	  const self = this
	  this._processing = 0

	  this._emitQueue = []
	  this._processQueue = []
	  this.paused = false

	  if (this.noprocess) { return this }

	  if (n === 0) { return done() }

	  let sync = true
	  for (let i = 0; i < n; i++) {
	    this._process(this.minimatch.set[i], i, false, done)
	  }
	  sync = false

	  function done() {
	    --self._processing
	    if (self._processing <= 0) {
	      if (sync) {
	        process.nextTick(() => {
	          self._finish()
	        })
	      } else {
	        self._finish()
	      }
	    }
	  }
    }

    Glob.prototype._finish = function () {
	  assert(this instanceof Glob)
	  if (this.aborted) { return }

	  if (this.realpath && !this._didRealpath) { return this._realpath() }

	  common.finish(this)
	  this.emit('end', this.found)
    }

    Glob.prototype._realpath = function () {
	  if (this._didRealpath) { return }

	  this._didRealpath = true

	  let n = this.matches.length
	  if (n === 0) { return this._finish() }

	  const self = this
	  for (let i = 0; i < this.matches.length; i++) { this._realpathSet(i, next) }

	  function next() {
	    if (--n === 0) { self._finish() }
	  }
    }

    Glob.prototype._realpathSet = function (index, cb) {
	  const matchset = this.matches[index]
	  if (!matchset) { return cb() }

	  const found = Object.keys(matchset)
	  const self = this
	  let n = found.length

	  if (n === 0) { return cb() }

	  const set = this.matches[index] = Object.create(null)
	  found.forEach((p, i) => {
	    // If there's a problem with the stat, then it means that
	    // one or more of the links in the realpath couldn't be
	    // resolved.  just return the abs value in that case.
	    p = self._makeAbs(p)
	    rp.realpath(p, self.realpathCache, (er, real) => {
	      if (!er) { set[real] = true } else if (er.syscall === 'stat') { set[p] = true } else { self.emit('error', er) } // srsly wtf right here

	      if (--n === 0) {
	        self.matches[index] = set
	        cb()
	      }
	    })
	  })
    }

    Glob.prototype._mark = function (p) {
	  return common.mark(this, p)
    }

    Glob.prototype._makeAbs = function (f) {
	  return common.makeAbs(this, f)
    }

    Glob.prototype.abort = function () {
	  this.aborted = true
	  this.emit('abort')
    }

    Glob.prototype.pause = function () {
	  if (!this.paused) {
	    this.paused = true
	    this.emit('pause')
	  }
    }

    Glob.prototype.resume = function () {
	  if (this.paused) {
	    this.emit('resume')
	    this.paused = false
	    if (this._emitQueue.length) {
	      const eq = this._emitQueue.slice(0)
	      this._emitQueue.length = 0
	      for (var i = 0; i < eq.length; i++) {
	        const e = eq[i]
	        this._emitMatch(e[0], e[1])
	      }
	    }
	    if (this._processQueue.length) {
	      const pq = this._processQueue.slice(0)
	      this._processQueue.length = 0
	      for (var i = 0; i < pq.length; i++) {
	        const p = pq[i]
	        this._processing--
	        this._process(p[0], p[1], p[2], p[3])
	      }
	    }
	  }
    }

    Glob.prototype._process = function (pattern, index, inGlobStar, cb) {
	  assert(this instanceof Glob)
	  assert(typeof cb === 'function')

	  if (this.aborted) { return }

	  this._processing++
	  if (this.paused) {
	    this._processQueue.push([pattern, index, inGlobStar, cb])
	    return
	  }

	  // console.error('PROCESS %d', this._processing, pattern)

	  // Get the first [n] parts of pattern that are all strings.
	  let n = 0
	  while (typeof pattern[n] === 'string') {
	    n++
	  }
	  // now n is the index of the first one that is *not* a string.

	  // see if there's anything else
	  let prefix
	  switch (n) {
	    // if not, then this is rather simple
	    case pattern.length:
	      this._processSimple(pattern.join('/'), index, cb)
	      return

	    case 0:
	      // pattern *starts* with some non-trivial item.
	      // going to readdir(cwd), but not include the prefix in matches.
	      prefix = null
	      break

	    default:
	      // pattern has some string bits in the front.
	      // whatever it starts with, whether that's 'absolute' like /foo/bar,
	      // or 'relative' like '../baz'
	      prefix = pattern.slice(0, n).join('/')
	      break
	  }

	  const remain = pattern.slice(n)

	  // get the list of entries.
	  let read
	  if (prefix === null) { read = '.' } else if (isAbsolute(prefix) || isAbsolute(pattern.join('/'))) {
	    if (!prefix || !isAbsolute(prefix)) { prefix = `/${prefix}` }
	    read = prefix
	  } else { read = prefix }

	  const abs = this._makeAbs(read)

	  // if ignored, skip _processing
	  if (childrenIgnored(this, read)) { return cb() }

	  const isGlobStar = remain[0] === minimatch.GLOBSTAR
	  if (isGlobStar) { this._processGlobStar(prefix, read, abs, remain, index, inGlobStar, cb) } else { this._processReaddir(prefix, read, abs, remain, index, inGlobStar, cb) }
    }

    Glob.prototype._processReaddir = function (prefix, read, abs, remain, index, inGlobStar, cb) {
	  const self = this
	  this._readdir(abs, inGlobStar, (er, entries) => self._processReaddir2(prefix, read, abs, remain, index, inGlobStar, entries, cb))
    }

    Glob.prototype._processReaddir2 = function (prefix, read, abs, remain, index, inGlobStar, entries, cb) {
	  // if the abs isn't a dir, then nothing can match!
	  if (!entries) { return cb() }

	  // It will only match dot entries if it starts with a dot, or if
	  // dot is set.  Stuff like @(.foo|.bar) isn't allowed.
	  const pn = remain[0]
	  const negate = !!this.minimatch.negate
	  const rawGlob = pn._glob
	  const dotOk = this.dot || rawGlob.charAt(0) === '.'

	  const matchedEntries = []
	  for (var i = 0; i < entries.length; i++) {
	    var e = entries[i]
	    if (e.charAt(0) !== '.' || dotOk) {
	      var m
	      if (negate && !prefix) {
	        m = !e.match(pn)
	      } else {
	        m = e.match(pn)
	      }
	      if (m) { matchedEntries.push(e) }
	    }
	  }

	  // console.error('prd2', prefix, entries, remain[0]._glob, matchedEntries)

	  const len = matchedEntries.length
	  // If there are no matched entries, then nothing matches.
	  if (len === 0) { return cb() }

	  // if this is the last remaining pattern bit, then no need for
	  // an additional stat *unless* the user has specified mark or
	  // stat explicitly.  We know they exist, since readdir returned
	  // them.

	  if (remain.length === 1 && !this.mark && !this.stat) {
	    if (!this.matches[index]) { this.matches[index] = Object.create(null) }

	    for (var i = 0; i < len; i++) {
	      var e = matchedEntries[i]
	      if (prefix) {
	        if (prefix !== '/') { e = `${prefix}/${e}` } else { e = prefix + e }
	      }

	      if (e.charAt(0) === '/' && !this.nomount) {
	        e = path.join(this.root, e)
	      }
	      this._emitMatch(index, e)
	    }
	    // This was the last one, and no stats were needed
	    return cb()
	  }

	  // now test all matched entries as stand-ins for that part
	  // of the pattern.
	  remain.shift()
	  for (var i = 0; i < len; i++) {
	    var e = matchedEntries[i]
	    var newPattern
	    if (prefix) {
	      if (prefix !== '/') { e = `${prefix}/${e}` } else { e = prefix + e }
	    }
	    this._process([e].concat(remain), index, inGlobStar, cb)
	  }
	  cb()
    }

    Glob.prototype._emitMatch = function (index, e) {
	  if (this.aborted) { return }

	  if (isIgnored(this, e)) { return }

	  if (this.paused) {
	    this._emitQueue.push([index, e])
	    return
	  }

	  const abs = isAbsolute(e) ? e : this._makeAbs(e)

	  if (this.mark) { e = this._mark(e) }

	  if (this.absolute) { e = abs }

	  if (this.matches[index][e]) { return }

	  if (this.nodir) {
	    const c = this.cache[abs]
	    if (c === 'DIR' || Array.isArray(c)) { return }
	  }

	  this.matches[index][e] = true

	  const st = this.statCache[abs]
	  if (st) { this.emit('stat', e, st) }

	  this.emit('match', e)
    }

    Glob.prototype._readdirInGlobStar = function (abs, cb) {
	  if (this.aborted) { return }

	  // follow all symlinked directories forever
	  // just proceed as if this is a non-globstar situation
	  if (this.follow) { return this._readdir(abs, false, cb) }

	  const lstatkey = `lstat\0${abs}`
	  const self = this
	  const lstatcb = inflight(lstatkey, lstatcb_)

	  if (lstatcb) { fs.lstat(abs, lstatcb) }

	  function lstatcb_(er, lstat) {
	    if (er && er.code === 'ENOENT') { return cb() }

	    const isSym = lstat && lstat.isSymbolicLink()
	    self.symlinks[abs] = isSym

	    // If it's not a symlink or a dir, then it's definitely a regular file.
	    // don't bother doing a readdir in that case.
	    if (!isSym && lstat && !lstat.isDirectory()) {
	      self.cache[abs] = 'FILE'
	      cb()
	    } else { self._readdir(abs, false, cb) }
	  }
    }

    Glob.prototype._readdir = function (abs, inGlobStar, cb) {
	  if (this.aborted) { return }

	  cb = inflight(`readdir\0${abs}\0${inGlobStar}`, cb)
	  if (!cb) { return }

	  // console.error('RD %j %j', +inGlobStar, abs)
	  if (inGlobStar && !ownProp(this.symlinks, abs)) { return this._readdirInGlobStar(abs, cb) }

	  if (ownProp(this.cache, abs)) {
	    const c = this.cache[abs]
	    if (!c || c === 'FILE') { return cb() }

	    if (Array.isArray(c)) { return cb(null, c) }
	  }

	  const self = this
	  fs.readdir(abs, readdirCb(this, abs, cb))
    }

    function readdirCb(self, abs, cb) {
	  return function (er, entries) {
	    if (er) { self._readdirError(abs, er, cb) } else { self._readdirEntries(abs, entries, cb) }
	  }
    }

    Glob.prototype._readdirEntries = function (abs, entries, cb) {
	  if (this.aborted) { return }

	  // if we haven't asked to stat everything, then just
	  // assume that everything in there exists, so we can avoid
	  // having to stat it a second time.
	  if (!this.mark && !this.stat) {
	    for (let i = 0; i < entries.length; i++) {
	      let e = entries[i]
	      if (abs === '/') { e = abs + e } else { e = `${abs}/${e}` }
	      this.cache[e] = true
	    }
	  }

	  this.cache[abs] = entries
	  return cb(null, entries)
    }

    Glob.prototype._readdirError = function (f, er, cb) {
	  if (this.aborted) { return }

	  // handle errors, and cache the information
	  switch (er.code) {
	    case 'ENOTSUP': // https://github.com/isaacs/node-glob/issues/205
	    case 'ENOTDIR': // totally normal. means it *does* exist.
	      var abs = this._makeAbs(f)
	      this.cache[abs] = 'FILE'
	      if (abs === this.cwdAbs) {
	        const error = new Error(`${er.code} invalid cwd ${this.cwd}`)
	        error.path = this.cwd
	        error.code = er.code
	        this.emit('error', error)
	        this.abort()
	      }
	      break

	    case 'ENOENT': // not terribly unusual
	    case 'ELOOP':
	    case 'ENAMETOOLONG':
	    case 'UNKNOWN':
	      this.cache[this._makeAbs(f)] = false
	      break

	    default: // some unusual error.  Treat as failure.
	      this.cache[this._makeAbs(f)] = false
	      if (this.strict) {
	        this.emit('error', er)
	        // If the error is handled, then we abort
	        // if not, we threw out of here
	        this.abort()
	      }
	      if (!this.silent) { console.error('glob error', er) }
	      break
	  }

	  return cb()
    }

    Glob.prototype._processGlobStar = function (prefix, read, abs, remain, index, inGlobStar, cb) {
	  const self = this
	  this._readdir(abs, inGlobStar, (er, entries) => {
	    self._processGlobStar2(prefix, read, abs, remain, index, inGlobStar, entries, cb)
	  })
    }


    Glob.prototype._processGlobStar2 = function (prefix, read, abs, remain, index, inGlobStar, entries, cb) {
	  // console.error('pgs2', prefix, remain[0], entries)

	  // no entries means not a dir, so it can never have matches
	  // foo.txt/** doesn't match foo.txt
	  if (!entries) { return cb() }

	  // test without the globstar, and with every child both below
	  // and replacing the globstar.
	  const remainWithoutGlobStar = remain.slice(1)
	  const gspref = prefix ? [prefix] : []
	  const noGlobStar = gspref.concat(remainWithoutGlobStar)

	  // the noGlobStar pattern exits the inGlobStar state
	  this._process(noGlobStar, index, false, cb)

	  const isSym = this.symlinks[abs]
	  const len = entries.length

	  // If it's a symlink, and we're in a globstar, then stop
	  if (isSym && inGlobStar) { return cb() }

	  for (let i = 0; i < len; i++) {
	    const e = entries[i]
	    if (e.charAt(0) === '.' && !this.dot) { continue }

	    // these two cases enter the inGlobStar state
	    const instead = gspref.concat(entries[i], remainWithoutGlobStar)
	    this._process(instead, index, true, cb)

	    const below = gspref.concat(entries[i], remain)
	    this._process(below, index, true, cb)
	  }

	  cb()
    }

    Glob.prototype._processSimple = function (prefix, index, cb) {
	  // XXX review this.  Shouldn't it be doing the mounting etc
	  // before doing stat?  kinda weird?
	  const self = this
	  this._stat(prefix, (er, exists) => {
	    self._processSimple2(prefix, index, er, exists, cb)
	  })
    }
    Glob.prototype._processSimple2 = function (prefix, index, er, exists, cb) {
	  // console.error('ps2', prefix, exists)

	  if (!this.matches[index]) { this.matches[index] = Object.create(null) }

	  // If it doesn't exist, then just mark the lack of results
	  if (!exists) { return cb() }

	  if (prefix && isAbsolute(prefix) && !this.nomount) {
	    const trail = /[\/\\]$/.test(prefix)
	    if (prefix.charAt(0) === '/') {
	      prefix = path.join(this.root, prefix)
	    } else {
	      prefix = path.resolve(this.root, prefix)
	      if (trail) { prefix += '/' }
	    }
	  }

	  if (process.platform === 'win32') { prefix = prefix.replace(/\\/g, '/') }

	  // Mark this as a match
	  this._emitMatch(index, prefix)
	  cb()
    }

	// Returns either 'DIR', 'FILE', or false
    Glob.prototype._stat = function (f, cb) {
	  const abs = this._makeAbs(f)
	  const needDir = f.slice(-1) === '/'

	  if (f.length > this.maxLength) { return cb() }

	  if (!this.stat && ownProp(this.cache, abs)) {
	    let c = this.cache[abs]

	    if (Array.isArray(c)) { c = 'DIR' }

	    // It exists, but maybe not how we need it
	    if (!needDir || c === 'DIR') { return cb(null, c) }

	    if (needDir && c === 'FILE') { return cb() }

	    // otherwise we have to stat, because maybe c=true
	    // if we know it exists, but not what it is.
	  }

	  let exists
	  const stat = this.statCache[abs]
	  if (stat !== undefined) {
	    if (stat === false) { return cb(null, stat) }

	      const type = stat.isDirectory() ? 'DIR' : 'FILE'
	      if (needDir && type === 'FILE') { return cb() }
	      return cb(null, type, stat)
	  }

	  const self = this
	  const statcb = inflight(`stat\0${abs}`, lstatcb_)
	  if (statcb) { fs.lstat(abs, statcb) }

	  function lstatcb_(er, lstat) {
	    if (lstat && lstat.isSymbolicLink()) {
	      // If it's a symlink, then treat it as the target, unless
	      // the target does not exist, then treat it as a file.
	      return fs.stat(abs, (er, stat) => {
	        if (er) { self._stat2(f, abs, null, lstat, cb) } else { self._stat2(f, abs, er, stat, cb) }
	      })
	    }
	      self._stat2(f, abs, er, lstat, cb)
	  }
    }

    Glob.prototype._stat2 = function (f, abs, er, stat, cb) {
	  if (er && (er.code === 'ENOENT' || er.code === 'ENOTDIR')) {
	    this.statCache[abs] = false
	    return cb()
	  }

	  const needDir = f.slice(-1) === '/'
	  this.statCache[abs] = stat

	  if (abs.slice(-1) === '/' && stat && !stat.isDirectory()) { return cb(null, false, stat) }

	  let c = true
	  if (stat) { c = stat.isDirectory() ? 'DIR' : 'FILE' }
	  this.cache[abs] = this.cache[abs] || c

	  if (needDir && c === 'FILE') { return cb() }

	  return cb(null, c, stat)
    }
/** */ }),
/* 357 */
/** */ (function (module, exports, __webpack_require__) {
    module.exports = realpath
    realpath.realpath = realpath
    realpath.sync = realpathSync
    realpath.realpathSync = realpathSync
    realpath.monkeypatch = monkeypatch
    realpath.unmonkeypatch = unmonkeypatch

    const fs = __webpack_require__(340)
    const origRealpath = fs.realpath
    const origRealpathSync = fs.realpathSync

    const version = process.version
    const ok = /^v[0-5]\./.test(version)
    const old = __webpack_require__(358)

    function newError(er) {
	  return er && er.syscall === 'realpath' && (
	    er.code === 'ELOOP' ||
	    er.code === 'ENOMEM' ||
	    er.code === 'ENAMETOOLONG'
	  )
    }

    function realpath(p, cache, cb) {
	  if (ok) {
	    return origRealpath(p, cache, cb)
	  }

	  if (typeof cache === 'function') {
	    cb = cache
	    cache = null
	  }
	  origRealpath(p, cache, (er, result) => {
	    if (newError(er)) {
	      old.realpath(p, cache, cb)
	    } else {
	      cb(er, result)
	    }
	  })
    }

    function realpathSync(p, cache) {
	  if (ok) {
	    return origRealpathSync(p, cache)
	  }

	  try {
	    return origRealpathSync(p, cache)
	  } catch (er) {
	    if (newError(er)) {
	      return old.realpathSync(p, cache)
	    }
	      throw er
	  }
    }

    function monkeypatch() {
	  fs.realpath = realpath
	  fs.realpathSync = realpathSync
    }

    function unmonkeypatch() {
	  fs.realpath = origRealpath
	  fs.realpathSync = origRealpathSync
    }
/** */ }),
/* 358 */
/** */ (function (module, exports, __webpack_require__) {
	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

    const pathModule = __webpack_require__(342);
    const isWindows = process.platform === 'win32';
    const fs = __webpack_require__(340);

	// JavaScript implementation of realpath, ported from node pre-v6

    const DEBUG = ({ NODE_ENV: 'production' }).NODE_DEBUG && /fs/.test(({ NODE_ENV: 'production' }).NODE_DEBUG);

    function rethrow() {
	  // Only enable in debug mode. A backtrace uses ~1000 bytes of heap space and
	  // is fairly slow to generate.
	  let callback;
	  if (DEBUG) {
	    var backtrace = new Error();
	    callback = debugCallback;
	  } else { callback = missingCallback; }

	  return callback;

	  function debugCallback(err) {
	    if (err) {
	      backtrace.message = err.message;
	      err = backtrace;
	      missingCallback(err);
	    }
	  }

	  function missingCallback(err) {
	    if (err) {
	      if (process.throwDeprecation) { throw err; }  // Forgot a callback but don't know where? Use NODE_DEBUG=fs
	      else if (!process.noDeprecation) {
	        const msg = `fs: missing callback ${err.stack || err.message}`;
	        if (process.traceDeprecation) { console.trace(msg); } else { console.error(msg); }
	      }
	    }
	  }
    }

    function maybeCallback(cb) {
	  return typeof cb === 'function' ? cb : rethrow();
    }

    const normalize = pathModule.normalize;

	// Regexp that finds the next partion of a (partial) path
	// result is [base_with_slash, base], e.g. ['somedir/', 'somedir']
    if (isWindows) {
	  var nextPartRe = /(.*?)(?:[\/\\]+|$)/g;
    } else {
	  var nextPartRe = /(.*?)(?:[\/]+|$)/g;
    }

	// Regex to find the device root, including trailing slash. E.g. 'c:\\'.
    if (isWindows) {
	  var splitRootRe = /^(?:[a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/][^\\\/]+)?[\\\/]*/;
    } else {
	  var splitRootRe = /^[\/]*/;
    }

    exports.realpathSync = function realpathSync(p, cache) {
	  // make p is absolute
	  p = pathModule.resolve(p);

	  if (cache && Object.prototype.hasOwnProperty.call(cache, p)) {
	    return cache[p];
	  }

	  let original = p,
	      seenLinks = {},
	      knownHard = {};

	  // current character position in p
	  let pos;
	  // the partial path so far, including a trailing slash if any
	  let current;
	  // the partial path without a trailing slash (except when pointing at a root)
	  let base;
	  // the partial path scanned in the previous round, with slash
	  let previous;

	  start();

	  function start() {
	    // Skip over roots
	    const m = splitRootRe.exec(p);
	    pos = m[0].length;
	    current = m[0];
	    base = m[0];
	    previous = '';

	    // On windows, check that the root exists. On unix there is no need.
	    if (isWindows && !knownHard[base]) {
	      fs.lstatSync(base);
	      knownHard[base] = true;
	    }
	  }

	  // walk down the path, swapping out linked pathparts for their real
	  // values
	  // NB: p.length changes.
	  while (pos < p.length) {
	    // find the next part
	    nextPartRe.lastIndex = pos;
	    const result = nextPartRe.exec(p);
	    previous = current;
	    current += result[0];
	    base = previous + result[1];
	    pos = nextPartRe.lastIndex;

	    // continue if not a symlink
	    if (knownHard[base] || (cache && cache[base] === base)) {
	      continue;
	    }

	    var resolvedLink;
	    if (cache && Object.prototype.hasOwnProperty.call(cache, base)) {
	      // some known symbolic link.  no need to stat again.
	      resolvedLink = cache[base];
	    } else {
	      const stat = fs.lstatSync(base);
	      if (!stat.isSymbolicLink()) {
	        knownHard[base] = true;
	        if (cache) cache[base] = base;
	        continue;
	      }

	      // read the link if it wasn't read before
	      // dev/ino always return 0 on windows, so skip the check.
	      let linkTarget = null;
	      if (!isWindows) {
	        var id = `${stat.dev.toString(32)}:${stat.ino.toString(32)}`;
	        if (seenLinks.hasOwnProperty(id)) {
	          linkTarget = seenLinks[id];
	        }
	      }
	      if (linkTarget === null) {
	        fs.statSync(base);
	        linkTarget = fs.readlinkSync(base);
	      }
	      resolvedLink = pathModule.resolve(previous, linkTarget);
	      // track this, if given a cache.
	      if (cache) cache[base] = resolvedLink;
	      if (!isWindows) seenLinks[id] = linkTarget;
	    }

	    // resolve the link, then start over
	    p = pathModule.resolve(resolvedLink, p.slice(pos));
	    start();
	  }

	  if (cache) cache[original] = p;

	  return p;
    };


    exports.realpath = function realpath(p, cache, cb) {
	  if (typeof cb !== 'function') {
	    cb = maybeCallback(cache);
	    cache = null;
	  }

	  // make p is absolute
	  p = pathModule.resolve(p);

	  if (cache && Object.prototype.hasOwnProperty.call(cache, p)) {
	    return process.nextTick(cb.bind(null, null, cache[p]));
	  }

	  let original = p,
	      seenLinks = {},
	      knownHard = {};

	  // current character position in p
	  let pos;
	  // the partial path so far, including a trailing slash if any
	  let current;
	  // the partial path without a trailing slash (except when pointing at a root)
	  let base;
	  // the partial path scanned in the previous round, with slash
	  let previous;

	  start();

	  function start() {
	    // Skip over roots
	    const m = splitRootRe.exec(p);
	    pos = m[0].length;
	    current = m[0];
	    base = m[0];
	    previous = '';

	    // On windows, check that the root exists. On unix there is no need.
	    if (isWindows && !knownHard[base]) {
	      fs.lstat(base, (err) => {
	        if (err) return cb(err);
	        knownHard[base] = true;
	        LOOP();
	      });
	    } else {
	      process.nextTick(LOOP);
	    }
	  }

	  // walk down the path, swapping out linked pathparts for their real
	  // values
	  function LOOP() {
	    // stop if scanned past end of path
	    if (pos >= p.length) {
	      if (cache) cache[original] = p;
	      return cb(null, p);
	    }

	    // find the next part
	    nextPartRe.lastIndex = pos;
	    const result = nextPartRe.exec(p);
	    previous = current;
	    current += result[0];
	    base = previous + result[1];
	    pos = nextPartRe.lastIndex;

	    // continue if not a symlink
	    if (knownHard[base] || (cache && cache[base] === base)) {
	      return process.nextTick(LOOP);
	    }

	    if (cache && Object.prototype.hasOwnProperty.call(cache, base)) {
	      // known symbolic link.  no need to stat again.
	      return gotResolvedLink(cache[base]);
	    }

	    return fs.lstat(base, gotStat);
	  }

	  function gotStat(err, stat) {
	    if (err) return cb(err);

	    // if not a symlink, skip to the next path part
	    if (!stat.isSymbolicLink()) {
	      knownHard[base] = true;
	      if (cache) cache[base] = base;
	      return process.nextTick(LOOP);
	    }

	    // stat & read the link if not read before
	    // call gotTarget as soon as the link target is known
	    // dev/ino always return 0 on windows, so skip the check.
	    if (!isWindows) {
	      var id = `${stat.dev.toString(32)}:${stat.ino.toString(32)}`;
	      if (seenLinks.hasOwnProperty(id)) {
	        return gotTarget(null, seenLinks[id], base);
	      }
	    }
	    fs.stat(base, (err) => {
	      if (err) return cb(err);

	      fs.readlink(base, (err, target) => {
	        if (!isWindows) seenLinks[id] = target;
	        gotTarget(err, target);
	      });
	    });
	  }

	  function gotTarget(err, target, base) {
	    if (err) return cb(err);

	    const resolvedLink = pathModule.resolve(previous, target);
	    if (cache) cache[base] = resolvedLink;
	    gotResolvedLink(resolvedLink);
	  }

	  function gotResolvedLink(resolvedLink) {
	    // resolve the link, then start over
	    p = pathModule.resolve(resolvedLink, p.slice(pos));
	    start();
	  }
    };
/** */ }),
/* 359 */
/** */ (function (module, exports, __webpack_require__) {
    module.exports = minimatch
    minimatch.Minimatch = Minimatch

    let path = { sep: '/' }
    try {
	  path = __webpack_require__(342)
    } catch (er) {}

    const GLOBSTAR = minimatch.GLOBSTAR = Minimatch.GLOBSTAR = {}
    const expand = __webpack_require__(360)

    const plTypes = {
	  '!': { open: '(?:(?!(?:', close: '))[^/]*?)' },
	  '?': { open: '(?:', close: ')?' },
	  '+': { open: '(?:', close: ')+' },
	  '*': { open: '(?:', close: ')*' },
	  '@': { open: '(?:', close: ')' }
    }

	// any single thing other than /
	// don't need to escape / when using new RegExp()
    const qmark = '[^/]'

	// * => any number of characters
    const star = `${qmark}*?`

	// ** when dots are allowed.  Anything goes, except .. and .
	// not (^ or / followed by one or two dots followed by $ or /),
	// followed by anything, any number of times.
    const twoStarDot = '(?:(?!(?:\\\/|^)(?:\\.{1,2})($|\\\/)).)*?'

	// not a ^ or / followed by a dot,
	// followed by anything, any number of times.
    const twoStarNoDot = '(?:(?!(?:\\\/|^)\\.).)*?'

	// characters that need to be escaped in RegExp.
    const reSpecials = charSet('().*{}+?[]^$\\!')

	// "abc" -> { a:true, b:true, c:true }
    function charSet(s) {
	  return s.split('').reduce((set, c) => {
	    set[c] = true
	    return set
	  }, {})
    }

	// normalizes slashes.
    const slashSplit = /\/+/

    minimatch.filter = filter
    function filter(pattern, options) {
	  options = options || {}
	  return function (p, i, list) {
	    return minimatch(p, pattern, options)
	  }
    }

    function ext(a, b) {
	  a = a || {}
	  b = b || {}
	  const t = {}
	  Object.keys(b).forEach((k) => {
	    t[k] = b[k]
	  })
	  Object.keys(a).forEach((k) => {
	    t[k] = a[k]
	  })
	  return t
    }

    minimatch.defaults = function (def) {
	  if (!def || !Object.keys(def).length) return minimatch

	  const orig = minimatch

	  const m = function minimatch(p, pattern, options) {
	    return orig.minimatch(p, pattern, ext(def, options))
	  }

	  m.Minimatch = function Minimatch(pattern, options) {
	    return new orig.Minimatch(pattern, ext(def, options))
	  }

	  return m
    }

    Minimatch.defaults = function (def) {
	  if (!def || !Object.keys(def).length) return Minimatch
	  return minimatch.defaults(def).Minimatch
    }

    function minimatch(p, pattern, options) {
	  if (typeof pattern !== 'string') {
	    throw new TypeError('glob pattern string required')
	  }

	  if (!options) options = {}

	  // shortcut: comments match nothing.
	  if (!options.nocomment && pattern.charAt(0) === '#') {
	    return false
	  }

	  // "" only matches ""
	  if (pattern.trim() === '') return p === ''

	  return new Minimatch(pattern, options).match(p)
    }

    function Minimatch(pattern, options) {
	  if (!(this instanceof Minimatch)) {
	    return new Minimatch(pattern, options)
	  }

	  if (typeof pattern !== 'string') {
	    throw new TypeError('glob pattern string required')
	  }

	  if (!options) options = {}
	  pattern = pattern.trim()

	  // windows support: need to use /, not \
	  if (path.sep !== '/') {
	    pattern = pattern.split(path.sep).join('/')
	  }

	  this.options = options
	  this.set = []
	  this.pattern = pattern
	  this.regexp = null
	  this.negate = false
	  this.comment = false
	  this.empty = false

	  // make the set of regexps etc.
	  this.make()
    }

    Minimatch.prototype.debug = function () {}

    Minimatch.prototype.make = make
    function make() {
	  // don't do it more than once.
	  if (this._made) return

	  const pattern = this.pattern
	  const options = this.options

	  // empty patterns and comments match nothing.
	  if (!options.nocomment && pattern.charAt(0) === '#') {
	    this.comment = true
	    return
	  }
	  if (!pattern) {
	    this.empty = true
	    return
	  }

	  // step 1: figure out negation, etc.
	  this.parseNegate()

	  // step 2: expand braces
	  let set = this.globSet = this.braceExpand()

	  if (options.debug) this.debug = console.error

	  this.debug(this.pattern, set)

	  // step 3: now we have a set, so turn each one into a series of path-portion
	  // matching patterns.
	  // These will be regexps, except in the case of "**", which is
	  // set to the GLOBSTAR object for globstar behavior,
	  // and will not contain any / characters
	  set = this.globParts = set.map((s) => s.split(slashSplit))

	  this.debug(this.pattern, set)

	  // glob --> regexps
	  set = set.map(function (s, si, set) {
	    return s.map(this.parse, this)
	  }, this)

	  this.debug(this.pattern, set)

	  // filter out everything that didn't compile properly.
	  set = set.filter((s) => s.indexOf(false) === -1)

	  this.debug(this.pattern, set)

	  this.set = set
    }

    Minimatch.prototype.parseNegate = parseNegate
    function parseNegate() {
	  const pattern = this.pattern
	  let negate = false
	  const options = this.options
	  let negateOffset = 0

	  if (options.nonegate) return

	  for (let i = 0, l = pattern.length
	    ; i < l && pattern.charAt(i) === '!'
	    ; i++) {
	    negate = !negate
	    negateOffset++
	  }

	  if (negateOffset) this.pattern = pattern.substr(negateOffset)
	  this.negate = negate
    }

	// Brace expansion:
	// a{b,c}d -> abd acd
	// a{b,}c -> abc ac
	// a{0..3}d -> a0d a1d a2d a3d
	// a{b,c{d,e}f}g -> abg acdfg acefg
	// a{b,c}d{e,f}g -> abdeg acdeg abdeg abdfg
	//
	// Invalid sets are not expanded.
	// a{2..}b -> a{2..}b
	// a{b}c -> a{b}c
    minimatch.braceExpand = function (pattern, options) {
	  return braceExpand(pattern, options)
    }

    Minimatch.prototype.braceExpand = braceExpand

    function braceExpand(pattern, options) {
	  if (!options) {
	    if (this instanceof Minimatch) {
	      options = this.options
	    } else {
	      options = {}
	    }
	  }

	  pattern = typeof pattern === 'undefined'
	    ? this.pattern : pattern

	  if (typeof pattern === 'undefined') {
	    throw new TypeError('undefined pattern')
	  }

	  if (options.nobrace ||
	    !pattern.match(/\{.*\}/)) {
	    // shortcut. no need to expand.
	    return [pattern]
	  }

	  return expand(pattern)
    }

	// parse a component of the expanded set.
	// At this point, no pattern may contain "/" in it
	// so we're going to return a 2d array, where each entry is the full
	// pattern, split on '/', and then turned into a regular expression.
	// A regexp is made at the end which joins each array with an
	// escaped /, and another full one which joins each regexp with |.
	//
	// Following the lead of Bash 4.1, note that "**" only has special meaning
	// when it is the *only* thing in a path portion.  Otherwise, any series
	// of * is equivalent to a single *.  Globstar behavior is enabled by
	// default, and can be disabled by setting options.noglobstar.
    Minimatch.prototype.parse = parse
    const SUBPARSE = {}
    function parse(pattern, isSub) {
	  if (pattern.length > 1024 * 64) {
	    throw new TypeError('pattern is too long')
	  }

	  const options = this.options

	  // shortcuts
	  if (!options.noglobstar && pattern === '**') return GLOBSTAR
	  if (pattern === '') return ''

	  let re = ''
	  let hasMagic = !!options.nocase
	  let escaping = false
	  // ? => one single character
	  const patternListStack = []
	  const negativeLists = []
	  let stateChar
	  let inClass = false
	  let reClassStart = -1
	  let classStart = -1
	  // . and .. never match anything that doesn't start with .,
	  // even when options.dot is set.
	  const patternStart = pattern.charAt(0) === '.' ? '' // anything
	  // not (start or / followed by . or .. followed by / or end)
	  : options.dot ? '(?!(?:^|\\\/)\\.{1,2}(?:$|\\\/))'
	  : '(?!\\.)'
	  const self = this

	  function clearStateChar() {
	    if (stateChar) {
	      // we had some state-tracking character
	      // that wasn't consumed by this pass.
	      switch (stateChar) {
	        case '*':
	          re += star
	          hasMagic = true
	        break
	        case '?':
	          re += qmark
	          hasMagic = true
	        break
	        default:
	          re += `\\${stateChar}`
	        break
	      }
	      self.debug('clearStateChar %j %j', stateChar, re)
	      stateChar = false
	    }
	  }

	  for (var i = 0, len = pattern.length, c
	    ; (i < len) && (c = pattern.charAt(i))
	    ; i++) {
	    this.debug('%s\t%s %s %j', pattern, i, re, c)

	    // skip over any that are escaped.
	    if (escaping && reSpecials[c]) {
	      re += `\\${c}`
	      escaping = false
	      continue
	    }

	    switch (c) {
	      case '/':
	        // completely not allowed, even escaped.
	        // Should already be path-split by now.
	        return false

	      case '\\':
	        clearStateChar()
	        escaping = true
	      continue

	      // the various stateChar values
	      // for the "extglob" stuff.
	      case '?':
	      case '*':
	      case '+':
	      case '@':
	      case '!':
	        this.debug('%s\t%s %s %j <-- stateChar', pattern, i, re, c)

	        // all of those are literals inside a class, except that
	        // the glob [!a] means [^a] in regexp
	        if (inClass) {
	          this.debug('  in class')
	          if (c === '!' && i === classStart + 1) c = '^'
	          re += c
	          continue
	        }

	        // if we already have a stateChar, then it means
	        // that there was something like ** or +? in there.
	        // Handle the stateChar, then proceed with this one.
	        self.debug('call clearStateChar %j', stateChar)
	        clearStateChar()
	        stateChar = c
	        // if extglob is disabled, then +(asdf|foo) isn't a thing.
	        // just clear the statechar *now*, rather than even diving into
	        // the patternList stuff.
	        if (options.noext) clearStateChar()
	      continue

	      case '(':
	        if (inClass) {
	          re += '('
	          continue
	        }

	        if (!stateChar) {
	          re += '\\('
	          continue
	        }

	        patternListStack.push({
	          type: stateChar,
	          start: i - 1,
	          reStart: re.length,
	          open: plTypes[stateChar].open,
	          close: plTypes[stateChar].close
	        })
	        // negation is (?:(?!js)[^/]*)
	        re += stateChar === '!' ? '(?:(?!(?:' : '(?:'
	        this.debug('plType %j %j', stateChar, re)
	        stateChar = false
	      continue

	      case ')':
	        if (inClass || !patternListStack.length) {
	          re += '\\)'
	          continue
	        }

	        clearStateChar()
	        hasMagic = true
	        var pl = patternListStack.pop()
	        // negation is (?:(?!js)[^/]*)
	        // The others are (?:<pattern>)<type>
	        re += pl.close
	        if (pl.type === '!') {
	          negativeLists.push(pl)
	        }
	        pl.reEnd = re.length
	      continue

	      case '|':
	        if (inClass || !patternListStack.length || escaping) {
	          re += '\\|'
	          escaping = false
	          continue
	        }

	        clearStateChar()
	        re += '|'
	      continue

	      // these are mostly the same in regexp and glob
	      case '[':
	        // swallow any state-tracking char before the [
	        clearStateChar()

	        if (inClass) {
	          re += `\\${c}`
	          continue
	        }

	        inClass = true
	        classStart = i
	        reClassStart = re.length
	        re += c
	      continue

	      case ']':
	        //  a right bracket shall lose its special
	        //  meaning and represent itself in
	        //  a bracket expression if it occurs
	        //  first in the list.  -- POSIX.2 2.8.3.2
	        if (i === classStart + 1 || !inClass) {
	          re += `\\${c}`
	          escaping = false
	          continue
	        }

	        // handle the case where we left a class open.
	        // "[z-a]" is valid, equivalent to "\[z-a\]"
	        if (inClass) {
	          // split where the last [ was, make sure we don't have
	          // an invalid re. if so, re-walk the contents of the
	          // would-be class to re-translate any characters that
	          // were passed through as-is
	          // TODO: It would probably be faster to determine this
	          // without a try/catch and a new RegExp, but it's tricky
	          // to do safely.  For now, this is safe and works.
	          var cs = pattern.substring(classStart + 1, i)
	          try {
	            RegExp(`[${cs}]`)
	          } catch (er) {
	            // not a valid class!
	            var sp = this.parse(cs, SUBPARSE)
	            re = `${re.substr(0, reClassStart)}\\[${sp[0]}\\]`
	            hasMagic = hasMagic || sp[1]
	            inClass = false
	            continue
	          }
	        }

	        // finish up the class.
	        hasMagic = true
	        inClass = false
	        re += c
	      continue

	      default:
	        // swallow any state char that wasn't consumed
	        clearStateChar()

	        if (escaping) {
	          // no need
	          escaping = false
	        } else if (reSpecials[c]
	          && !(c === '^' && inClass)) {
	          re += '\\'
	        }

	        re += c

	    } // switch
	  } // for

	  // handle the case where we left a class open.
	  // "[abc" is valid, equivalent to "\[abc"
	  if (inClass) {
	    // split where the last [ was, and escape it
	    // this is a huge pita.  We now have to re-walk
	    // the contents of the would-be class to re-translate
	    // any characters that were passed through as-is
	    cs = pattern.substr(classStart + 1)
	    sp = this.parse(cs, SUBPARSE)
	    re = `${re.substr(0, reClassStart)}\\[${sp[0]}`
	    hasMagic = hasMagic || sp[1]
	  }

	  // handle the case where we had a +( thing at the *end*
	  // of the pattern.
	  // each pattern list stack adds 3 chars, and we need to go through
	  // and escape any | chars that were passed through as-is for the regexp.
	  // Go through and escape them, taking care not to double-escape any
	  // | chars that were already escaped.
	  for (pl = patternListStack.pop(); pl; pl = patternListStack.pop()) {
	    let tail = re.slice(pl.reStart + pl.open.length)
	    this.debug('setting tail', re, pl)
	    // maybe some even number of \, then maybe 1 \, followed by a |
	    tail = tail.replace(/((?:\\{2}){0,64})(\\?)\|/g, (_, $1, $2) => {
	      if (!$2) {
	        // the | isn't already escaped, so escape it.
	        $2 = '\\'
	      }

	      // need to escape all those slashes *again*, without escaping the
	      // one that we need for escaping the | character.  As it works out,
	      // escaping an even number of slashes can be done by simply repeating
	      // it exactly after itself.  That's why this trick works.
	      //
	      // I am sorry that you have to see this.
	      return `${$1 + $1 + $2}|`
	    })

	    this.debug('tail=%j\n   %s', tail, tail, pl, re)
	    const t = pl.type === '*' ? star
	      : pl.type === '?' ? qmark
	      : `\\${pl.type}`

	    hasMagic = true
	    re = `${re.slice(0, pl.reStart) + t}\\(${tail}`
	  }

	  // handle trailing things that only matter at the very end.
	  clearStateChar()
	  if (escaping) {
	    // trailing \\
	    re += '\\\\'
	  }

	  // only need to apply the nodot start if the re starts with
	  // something that could conceivably capture a dot
	  let addPatternStart = false
	  switch (re.charAt(0)) {
	    case '.':
	    case '[':
	    case '(': addPatternStart = true
	  }

	  // Hack to work around lack of negative lookbehind in JS
	  // A pattern like: *.!(x).!(y|z) needs to ensure that a name
	  // like 'a.xyz.yz' doesn't match.  So, the first negative
	  // lookahead, has to look ALL the way ahead, to the end of
	  // the pattern.
	  for (let n = negativeLists.length - 1; n > -1; n--) {
	    const nl = negativeLists[n]

	    const nlBefore = re.slice(0, nl.reStart)
	    const nlFirst = re.slice(nl.reStart, nl.reEnd - 8)
	    let nlLast = re.slice(nl.reEnd - 8, nl.reEnd)
	    let nlAfter = re.slice(nl.reEnd)

	    nlLast += nlAfter

	    // Handle nested stuff like *(*.js|!(*.json)), where open parens
	    // mean that we should *not* include the ) in the bit that is considered
	    // "after" the negated section.
	    const openParensBefore = nlBefore.split('(').length - 1
	    let cleanAfter = nlAfter
	    for (i = 0; i < openParensBefore; i++) {
	      cleanAfter = cleanAfter.replace(/\)[+*?]?/, '')
	    }
	    nlAfter = cleanAfter

	    let dollar = ''
	    if (nlAfter === '' && isSub !== SUBPARSE) {
	      dollar = '$'
	    }
	    const newRe = nlBefore + nlFirst + nlAfter + dollar + nlLast
	    re = newRe
	  }

	  // if the re is not "" at this point, then we need to make sure
	  // it doesn't match against an empty path part.
	  // Otherwise a/* will match a/, which it should not.
	  if (re !== '' && hasMagic) {
	    re = `(?=.)${re}`
	  }

	  if (addPatternStart) {
	    re = patternStart + re
	  }

	  // parsing just a piece of a larger pattern.
	  if (isSub === SUBPARSE) {
	    return [re, hasMagic]
	  }

	  // skip the regexp for non-magical patterns
	  // unescape anything in it, though, so that it'll be
	  // an exact match against a file etc.
	  if (!hasMagic) {
	    return globUnescape(pattern)
	  }

	  const flags = options.nocase ? 'i' : ''
	  try {
	    var regExp = new RegExp(`^${re}$`, flags)
	  } catch (er) {
	    // If it was an invalid regular expression, then it can't match
	    // anything.  This trick looks for a character after the end of
	    // the string, which is of course impossible, except in multi-line
	    // mode, but it's not a /m regex.
	    return new RegExp('$.')
	  }

	  regExp._glob = pattern
	  regExp._src = re

	  return regExp
    }

    minimatch.makeRe = function (pattern, options) {
	  return new Minimatch(pattern, options || {}).makeRe()
    }

    Minimatch.prototype.makeRe = makeRe
    function makeRe() {
	  if (this.regexp || this.regexp === false) return this.regexp

	  // at this point, this.set is a 2d array of partial
	  // pattern strings, or "**".
	  //
	  // It's better to use .match().  This function shouldn't
	  // be used, really, but it's pretty convenient sometimes,
	  // when you just want to work with a regex.
	  const set = this.set

	  if (!set.length) {
	    this.regexp = false
	    return this.regexp
	  }
	  const options = this.options

	  const twoStar = options.noglobstar ? star
	    : options.dot ? twoStarDot
	    : twoStarNoDot
	  const flags = options.nocase ? 'i' : ''

	  let re = set.map((pattern) => pattern.map((p) => (p === GLOBSTAR) ? twoStar
	      : (typeof p === 'string') ? regExpEscape(p)
	      : p._src).join('\\\/')).join('|')

	  // must match entire pattern
	  // ending in a * or ** will make it less strict.
	  re = `^(?:${re})$`

	  // can match anything, as long as it's not this.
	  if (this.negate) re = `^(?!${re}).*$`

	  try {
	    this.regexp = new RegExp(re, flags)
	  } catch (ex) {
	    this.regexp = false
	  }
	  return this.regexp
    }

    minimatch.match = function (list, pattern, options) {
	  options = options || {}
	  const mm = new Minimatch(pattern, options)
	  list = list.filter((f) => mm.match(f))
	  if (mm.options.nonull && !list.length) {
	    list.push(pattern)
	  }
	  return list
    }

    Minimatch.prototype.match = match
    function match(f, partial) {
	  this.debug('match', f, this.pattern)
	  // short-circuit in the case of busted things.
	  // comments, etc.
	  if (this.comment) return false
	  if (this.empty) return f === ''

	  if (f === '/' && partial) return true

	  const options = this.options

	  // windows: need to use /, not \
	  if (path.sep !== '/') {
	    f = f.split(path.sep).join('/')
	  }

	  // treat the test path as a set of pathparts.
	  f = f.split(slashSplit)
	  this.debug(this.pattern, 'split', f)

	  // just ONE of the pattern sets in this.set needs to match
	  // in order for it to be valid.  If negating, then just one
	  // match means that we have failed.
	  // Either way, return on the first hit.

	  const set = this.set
	  this.debug(this.pattern, 'set', set)

	  // Find the basename of the path by looking for the last non-empty segment
	  let filename
	  let i
	  for (i = f.length - 1; i >= 0; i--) {
	    filename = f[i]
	    if (filename) break
	  }

	  for (i = 0; i < set.length; i++) {
	    const pattern = set[i]
	    let file = f
	    if (options.matchBase && pattern.length === 1) {
	      file = [filename]
	    }
	    const hit = this.matchOne(file, pattern, partial)
	    if (hit) {
	      if (options.flipNegate) return true
	      return !this.negate
	    }
	  }

	  // didn't get any hits.  this is success if it's a negative
	  // pattern, failure otherwise.
	  if (options.flipNegate) return false
	  return this.negate
    }

	// set partial to true to test if, for example,
	// "/a/b" matches the start of "/*/b/*/d"
	// Partial means, if you run out of file before you run
	// out of pattern, then that's fine, as long as all
	// the parts match.
    Minimatch.prototype.matchOne = function (file, pattern, partial) {
	  const options = this.options

	  this.debug('matchOne',
	    { this: this, file, pattern })

	  this.debug('matchOne', file.length, pattern.length)

	  for (var fi = 0,
	      pi = 0,
	      fl = file.length,
	      pl = pattern.length
	      ; (fi < fl) && (pi < pl)
	      ; fi++, pi++) {
	    this.debug('matchOne loop')
	    const p = pattern[pi]
	    const f = file[fi]

	    this.debug(pattern, p, f)

	    // should be impossible.
	    // some invalid regexp stuff in the set.
	    if (p === false) return false

	    if (p === GLOBSTAR) {
	      this.debug('GLOBSTAR', [pattern, p, f])

	      // "**"
	      // a/**/b/**/c would match the following:
	      // a/b/x/y/z/c
	      // a/x/y/z/b/c
	      // a/b/x/b/x/c
	      // a/b/c
	      // To do this, take the rest of the pattern after
	      // the **, and see if it would match the file remainder.
	      // If so, return success.
	      // If not, the ** "swallows" a segment, and try again.
	      // This is recursively awful.
	      //
	      // a/**/b/**/c matching a/b/x/y/z/c
	      // - a matches a
	      // - doublestar
	      //   - matchOne(b/x/y/z/c, b/**/c)
	      //     - b matches b
	      //     - doublestar
	      //       - matchOne(x/y/z/c, c) -> no
	      //       - matchOne(y/z/c, c) -> no
	      //       - matchOne(z/c, c) -> no
	      //       - matchOne(c, c) yes, hit
	      let fr = fi
	      const pr = pi + 1
	      if (pr === pl) {
	        this.debug('** at the end')
	        // a ** at the end will just swallow the rest.
	        // We have found a match.
	        // however, it will not swallow /.x, unless
	        // options.dot is set.
	        // . and .. are *never* matched by **, for explosively
	        // exponential reasons.
	        for (; fi < fl; fi++) {
	          if (file[fi] === '.' || file[fi] === '..' ||
	            (!options.dot && file[fi].charAt(0) === '.')) return false
	        }
	        return true
	      }

	      // ok, let's see if we can swallow whatever we can.
	      while (fr < fl) {
	        const swallowee = file[fr]

	        this.debug('\nglobstar while', file, fr, pattern, pr, swallowee)

	        // XXX remove this slice.  Just pass the start index.
	        if (this.matchOne(file.slice(fr), pattern.slice(pr), partial)) {
	          this.debug('globstar found match!', fr, fl, swallowee)
	          // found a match.
	          return true
	        }
	          // can't swallow "." or ".." ever.
	          // can only swallow ".foo" when explicitly asked.
	          if (swallowee === '.' || swallowee === '..' ||
	            (!options.dot && swallowee.charAt(0) === '.')) {
	            this.debug('dot detected!', file, fr, pattern, pr)
	            break
	          }

	          // ** swallows a segment, and continue.
	          this.debug('globstar swallow a segment, and continue')
	          fr++
	      }

	      // no match was found.
	      // However, in partial mode, we can't say this is necessarily over.
	      // If there's more *pattern* left, then
	      if (partial) {
	        // ran out of file
	        this.debug('\n>>> no match, partial?', file, fr, pattern, pr)
	        if (fr === fl) return true
	      }
	      return false
	    }

	    // something other than **
	    // non-magic patterns just have to match exactly
	    // patterns with magic have been turned into regexps.
	    var hit
	    if (typeof p === 'string') {
	      if (options.nocase) {
	        hit = f.toLowerCase() === p.toLowerCase()
	      } else {
	        hit = f === p
	      }
	      this.debug('string match', p, f, hit)
	    } else {
	      hit = f.match(p)
	      this.debug('pattern match', p, f, hit)
	    }

	    if (!hit) return false
	  }

	  // Note: ending in / means that we'll get a final ""
	  // at the end of the pattern.  This can only match a
	  // corresponding "" at the end of the file.
	  // If the file ends in /, then it can only match a
	  // a pattern that ends in /, unless the pattern just
	  // doesn't have any more for it. But, a/b/ should *not*
	  // match "a/b/*", even though "" matches against the
	  // [^/]*? pattern, except in partial mode, where it might
	  // simply not be reached yet.
	  // However, a/b/ should still satisfy a/*

	  // now either we fell off the end of the pattern, or we're done.
	  if (fi === fl && pi === pl) {
	    // ran out of pattern and filename at the same time.
	    // an exact hit!
	    return true
	  } else if (fi === fl) {
	    // ran out of file, but still had pattern left.
	    // this is ok if we're doing the match as part of
	    // a glob fs traversal.
	    return partial
	  } else if (pi === pl) {
	    // ran out of pattern, still have file left.
	    // this is only acceptable if we're on the very last
	    // empty segment of a file with a trailing slash.
	    // a/* should match a/b/
	    const emptyFileEnd = (fi === fl - 1) && (file[fi] === '')
	    return emptyFileEnd
	  }

	  // should be unreachable.
	  throw new Error('wtf?')
    }

	// replace stuff like \* with *
    function globUnescape(s) {
	  return s.replace(/\\(.)/g, '$1')
    }

    function regExpEscape(s) {
	  return s.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&')
    }
/** */ }),
/* 360 */
/** */ (function (module, exports, __webpack_require__) {
    const concatMap = __webpack_require__(361);
    const balanced = __webpack_require__(362);

    module.exports = expandTop;

    const escSlash = `\0SLASH${Math.random()}\0`;
    const escOpen = `\0OPEN${Math.random()}\0`;
    const escClose = `\0CLOSE${Math.random()}\0`;
    const escComma = `\0COMMA${Math.random()}\0`;
    const escPeriod = `\0PERIOD${Math.random()}\0`;

    function numeric(str) {
	  return parseInt(str, 10) == str
	    ? parseInt(str, 10)
	    : str.charCodeAt(0);
    }

    function escapeBraces(str) {
	  return str.split('\\\\').join(escSlash)
	            .split('\\{').join(escOpen)
	            .split('\\}').join(escClose)
	            .split('\\,').join(escComma)
	            .split('\\.').join(escPeriod);
    }

    function unescapeBraces(str) {
	  return str.split(escSlash).join('\\')
	            .split(escOpen).join('{')
	            .split(escClose).join('}')
	            .split(escComma).join(',')
	            .split(escPeriod).join('.');
    }


	// Basically just str.split(","), but handling cases
	// where we have nested braced sections, which should be
	// treated as individual members, like {a,{b,c},d}
    function parseCommaParts(str) {
	  if (!str) { return ['']; }

	  const parts = [];
	  const m = balanced('{', '}', str);

	  if (!m) { return str.split(','); }

	  const pre = m.pre;
	  const body = m.body;
	  const post = m.post;
	  const p = pre.split(',');

	  p[p.length - 1] += `{${body}}`;
	  const postParts = parseCommaParts(post);
	  if (post.length) {
	    p[p.length - 1] += postParts.shift();
	    p.push(...postParts);
	  }

	  parts.push(...p);

	  return parts;
    }

    function expandTop(str) {
	  if (!str) { return []; }

	  // I don't know why Bash 4.3 does this, but it does.
	  // Anything starting with {} will have the first two bytes preserved
	  // but *only* at the top level, so {},a}b will not expand to anything,
	  // but a{},b}c will be expanded to [a}c,abc].
	  // One could argue that this is a bug in Bash, but since the goal of
	  // this module is to match Bash's rules, we escape a leading {}
	  if (str.substr(0, 2) === '{}') {
	    str = `\\{\\}${str.substr(2)}`;
	  }

	  return expand(escapeBraces(str), true).map(unescapeBraces);
    }

    function identity(e) {
	  return e;
    }

    function embrace(str) {
	  return `{${str}}`;
    }
    function isPadded(el) {
	  return /^-?0\d/.test(el);
    }

    function lte(i, y) {
	  return i <= y;
    }
    function gte(i, y) {
	  return i >= y;
    }

    function expand(str, isTop) {
	  const expansions = [];

	  const m = balanced('{', '}', str);
	  if (!m || /\$$/.test(m.pre)) return [str];

	  const isNumericSequence = /^-?\d+\.\.-?\d+(?:\.\.-?\d+)?$/.test(m.body);
	  const isAlphaSequence = /^[a-zA-Z]\.\.[a-zA-Z](?:\.\.-?\d+)?$/.test(m.body);
	  const isSequence = isNumericSequence || isAlphaSequence;
	  const isOptions = m.body.indexOf(',') >= 0;
	  if (!isSequence && !isOptions) {
	    // {a},b}
	    if (m.post.match(/,.*\}/)) {
	      str = `${m.pre}{${m.body}${escClose}${m.post}`;
	      return expand(str);
	    }
	    return [str];
	  }

	  let n;
	  if (isSequence) {
	    n = m.body.split(/\.\./);
	  } else {
	    n = parseCommaParts(m.body);
	    if (n.length === 1) {
	      // x{{a,b}}y ==> x{a}y x{b}y
	      n = expand(n[0], false).map(embrace);
	      if (n.length === 1) {
	        var post = m.post.length
	          ? expand(m.post, false)
	          : [''];
	        return post.map((p) => m.pre + n[0] + p);
	      }
	    }
	  }

	  // at this point, n is the parts, and we know it's not a comma set
	  // with a single entry.

	  // no need to expand pre, since it is guaranteed to be free of brace-sets
	  const pre = m.pre;
	  var post = m.post.length
	    ? expand(m.post, false)
	    : [''];

	  let N;

	  if (isSequence) {
	    const x = numeric(n[0]);
	    const y = numeric(n[1]);
	    const width = Math.max(n[0].length, n[1].length)
	    let incr = n.length == 3
	      ? Math.abs(numeric(n[2]))
	      : 1;
	    let test = lte;
	    const reverse = y < x;
	    if (reverse) {
	      incr *= -1;
	      test = gte;
	    }
	    const pad = n.some(isPadded);

	    N = [];

	    for (let i = x; test(i, y); i += incr) {
	      var c;
	      if (isAlphaSequence) {
	        c = String.fromCharCode(i);
	        if (c === '\\') { c = ''; }
	      } else {
	        c = String(i);
	        if (pad) {
	          const need = width - c.length;
	          if (need > 0) {
	            const z = new Array(need + 1).join('0');
	            if (i < 0) { c = `-${z}${c.slice(1)}`; } else { c = z + c; }
	          }
	        }
	      }
	      N.push(c);
	    }
	  } else {
	    N = concatMap(n, (el) => expand(el, false));
	  }

	  for (let j = 0; j < N.length; j++) {
	    for (let k = 0; k < post.length; k++) {
	      const expansion = pre + N[j] + post[k];
	      if (!isTop || isSequence || expansion) { expansions.push(expansion); }
	    }
	  }

	  return expansions;
    }
/** */ }),
/* 361 */
/** */ (function (module, exports) {
    module.exports = function (xs, fn) {
	    const res = [];
	    for (let i = 0; i < xs.length; i++) {
	        const x = fn(xs[i], i);
	        if (isArray(x)) res.push(...x);
	        else res.push(x);
	    }
	    return res;
    };

    var isArray = Array.isArray || function (xs) {
	    return Object.prototype.toString.call(xs) === '[object Array]';
    };
/** */ }),
/* 362 */
/** */ (function (module, exports) {
    module.exports = balanced;
    function balanced(a, b, str) {
	  if (a instanceof RegExp) a = maybeMatch(a, str);
	  if (b instanceof RegExp) b = maybeMatch(b, str);

	  const r = range(a, b, str);

	  return r && {
	    start: r[0],
	    end: r[1],
	    pre: str.slice(0, r[0]),
	    body: str.slice(r[0] + a.length, r[1]),
	    post: str.slice(r[1] + b.length)
	  };
    }

    function maybeMatch(reg, str) {
	  const m = str.match(reg);
	  return m ? m[0] : null;
    }

    balanced.range = range;
    function range(a, b, str) {
	  let begs,
      beg,
      left,
      right,
      result;
	  let ai = str.indexOf(a);
	  let bi = str.indexOf(b, ai + 1);
	  let i = ai;

	  if (ai >= 0 && bi > 0) {
	    begs = [];
	    left = str.length;

	    while (i >= 0 && !result) {
	      if (i == ai) {
	        begs.push(i);
	        ai = str.indexOf(a, i + 1);
	      } else if (begs.length == 1) {
	        result = [begs.pop(), bi];
	      } else {
	        beg = begs.pop();
	        if (beg < left) {
	          left = beg;
	          right = bi;
	        }

	        bi = str.indexOf(b, i + 1);
	      }

	      i = ai < bi && ai >= 0 ? ai : bi;
	    }

	    if (begs.length) {
	      result = [left, right];
	    }
	  }

	  return result;
    }
/** */ }),
/* 363 */
/** */ (function (module, exports) {
    if (typeof Object.create === 'function') {
	  // implementation from standard node.js 'util' module
	  module.exports = function inherits(ctor, superCtor) {
	    ctor.super_ = superCtor
	    ctor.prototype = Object.create(superCtor.prototype, {
	      constructor: {
	        value: ctor,
	        enumerable: false,
	        writable: true,
	        configurable: true
	      }
	    });
	  };
    } else {
	  // old school shim for old browsers
	  module.exports = function inherits(ctor, superCtor) {
	    ctor.super_ = superCtor
	    const TempCtor = function () {}
	    TempCtor.prototype = superCtor.prototype
	    ctor.prototype = new TempCtor()
	    ctor.prototype.constructor = ctor
	  }
    }
/** */ }),
/* 364 */
/** */ (function (module, exports) {
    module.exports = require('events');
/** */ }),
/* 365 */
/** */ (function (module, exports) {
    module.exports = require('assert');
/** */ }),
/* 366 */
/** */ (function (module, exports) {
    function posix(path) {
        return path.charAt(0) === '/';
    }

    function win32(path) {
		// https://github.com/nodejs/node/blob/b3fcc245fb25539909ef1d5eaa01dbf92e168633/lib/path.js#L56
        const splitDeviceRe = /^([a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+)?([\\\/])?([\s\S]*?)$/;
        const result = splitDeviceRe.exec(path);
        const device = result[1] || '';
        const isUnc = Boolean(device && device.charAt(1) !== ':');

		// UNC paths are always absolute
        return Boolean(result[2] || isUnc);
    }

    module.exports = process.platform === 'win32' ? win32 : posix;
    module.exports.posix = posix;
    module.exports.win32 = win32;
/** */ }),
/* 367 */
/** */ (function (module, exports, __webpack_require__) {
    module.exports = globSync
    globSync.GlobSync = GlobSync

    const fs = __webpack_require__(340)
    const rp = __webpack_require__(357)
    const minimatch = __webpack_require__(359)
    const Minimatch = minimatch.Minimatch
    const Glob = __webpack_require__(356).Glob
    const util = __webpack_require__(337)
    const path = __webpack_require__(342)
    const assert = __webpack_require__(365)
    const isAbsolute = __webpack_require__(366)
    const common = __webpack_require__(368)
    const alphasort = common.alphasort
    const alphasorti = common.alphasorti
    const setopts = common.setopts
    const ownProp = common.ownProp
    const childrenIgnored = common.childrenIgnored
    const isIgnored = common.isIgnored

    function globSync(pattern, options) {
	  if (typeof options === 'function' || arguments.length === 3) {
      throw new TypeError('callback provided to sync glob\n' +
	                        'See: https://github.com/isaacs/node-glob/issues/167')
  }

	  return new GlobSync(pattern, options).found
    }

    function GlobSync(pattern, options) {
	  if (!pattern) { throw new Error('must provide pattern') }

	  if (typeof options === 'function' || arguments.length === 3) {
      throw new TypeError('callback provided to sync glob\n' +
	                        'See: https://github.com/isaacs/node-glob/issues/167')
  }

	  if (!(this instanceof GlobSync)) { return new GlobSync(pattern, options) }

	  setopts(this, pattern, options)

	  if (this.noprocess) { return this }

	  const n = this.minimatch.set.length
	  this.matches = new Array(n)
	  for (let i = 0; i < n; i++) {
	    this._process(this.minimatch.set[i], i, false)
	  }
	  this._finish()
    }

    GlobSync.prototype._finish = function () {
	  assert(this instanceof GlobSync)
	  if (this.realpath) {
	    const self = this
	    this.matches.forEach((matchset, index) => {
	      const set = self.matches[index] = Object.create(null)
	      for (let p in matchset) {
	        try {
	          p = self._makeAbs(p)
	          const real = rp.realpathSync(p, self.realpathCache)
	          set[real] = true
	        } catch (er) {
	          if (er.syscall === 'stat') { set[self._makeAbs(p)] = true } else { throw er }
	        }
	      }
	    })
	  }
	  common.finish(this)
    }


    GlobSync.prototype._process = function (pattern, index, inGlobStar) {
	  assert(this instanceof GlobSync)

	  // Get the first [n] parts of pattern that are all strings.
	  let n = 0
	  while (typeof pattern[n] === 'string') {
	    n++
	  }
	  // now n is the index of the first one that is *not* a string.

	  // See if there's anything else
	  let prefix
	  switch (n) {
	    // if not, then this is rather simple
	    case pattern.length:
	      this._processSimple(pattern.join('/'), index)
	      return

	    case 0:
	      // pattern *starts* with some non-trivial item.
	      // going to readdir(cwd), but not include the prefix in matches.
	      prefix = null
	      break

	    default:
	      // pattern has some string bits in the front.
	      // whatever it starts with, whether that's 'absolute' like /foo/bar,
	      // or 'relative' like '../baz'
	      prefix = pattern.slice(0, n).join('/')
	      break
	  }

	  const remain = pattern.slice(n)

	  // get the list of entries.
	  let read
	  if (prefix === null) { read = '.' } else if (isAbsolute(prefix) || isAbsolute(pattern.join('/'))) {
	    if (!prefix || !isAbsolute(prefix)) { prefix = `/${prefix}` }
	    read = prefix
	  } else { read = prefix }

	  const abs = this._makeAbs(read)

	  // if ignored, skip processing
	  if (childrenIgnored(this, read)) { return }

	  const isGlobStar = remain[0] === minimatch.GLOBSTAR
	  if (isGlobStar) { this._processGlobStar(prefix, read, abs, remain, index, inGlobStar) } else { this._processReaddir(prefix, read, abs, remain, index, inGlobStar) }
    }


    GlobSync.prototype._processReaddir = function (prefix, read, abs, remain, index, inGlobStar) {
	  const entries = this._readdir(abs, inGlobStar)

	  // if the abs isn't a dir, then nothing can match!
	  if (!entries) { return }

	  // It will only match dot entries if it starts with a dot, or if
	  // dot is set.  Stuff like @(.foo|.bar) isn't allowed.
	  const pn = remain[0]
	  const negate = !!this.minimatch.negate
	  const rawGlob = pn._glob
	  const dotOk = this.dot || rawGlob.charAt(0) === '.'

	  const matchedEntries = []
	  for (var i = 0; i < entries.length; i++) {
	    var e = entries[i]
	    if (e.charAt(0) !== '.' || dotOk) {
	      var m
	      if (negate && !prefix) {
	        m = !e.match(pn)
	      } else {
	        m = e.match(pn)
	      }
	      if (m) { matchedEntries.push(e) }
	    }
	  }

	  const len = matchedEntries.length
	  // If there are no matched entries, then nothing matches.
	  if (len === 0) { return }

	  // if this is the last remaining pattern bit, then no need for
	  // an additional stat *unless* the user has specified mark or
	  // stat explicitly.  We know they exist, since readdir returned
	  // them.

	  if (remain.length === 1 && !this.mark && !this.stat) {
	    if (!this.matches[index]) { this.matches[index] = Object.create(null) }

	    for (var i = 0; i < len; i++) {
	      var e = matchedEntries[i]
	      if (prefix) {
	        if (prefix.slice(-1) !== '/') { e = `${prefix}/${e}` } else { e = prefix + e }
	      }

	      if (e.charAt(0) === '/' && !this.nomount) {
	        e = path.join(this.root, e)
	      }
	      this._emitMatch(index, e)
	    }
	    // This was the last one, and no stats were needed
	    return
	  }

	  // now test all matched entries as stand-ins for that part
	  // of the pattern.
	  remain.shift()
	  for (var i = 0; i < len; i++) {
	    var e = matchedEntries[i]
	    var newPattern
	    if (prefix) { newPattern = [prefix, e] } else { newPattern = [e] }
	    this._process(newPattern.concat(remain), index, inGlobStar)
	  }
    }


    GlobSync.prototype._emitMatch = function (index, e) {
	  if (isIgnored(this, e)) { return }

	  const abs = this._makeAbs(e)

	  if (this.mark) { e = this._mark(e) }

	  if (this.absolute) {
	    e = abs
	  }

	  if (this.matches[index][e]) { return }

	  if (this.nodir) {
	    const c = this.cache[abs]
	    if (c === 'DIR' || Array.isArray(c)) { return }
	  }

	  this.matches[index][e] = true

	  if (this.stat) { this._stat(e) }
    }


    GlobSync.prototype._readdirInGlobStar = function (abs) {
	  // follow all symlinked directories forever
	  // just proceed as if this is a non-globstar situation
	  if (this.follow) { return this._readdir(abs, false) }

	  let entries
	  let lstat
	  let stat
	  try {
	    lstat = fs.lstatSync(abs)
	  } catch (er) {
	    if (er.code === 'ENOENT') {
	      // lstat failed, doesn't exist
	      return null
	    }
	  }

	  const isSym = lstat && lstat.isSymbolicLink()
	  this.symlinks[abs] = isSym

	  // If it's not a symlink or a dir, then it's definitely a regular file.
	  // don't bother doing a readdir in that case.
	  if (!isSym && lstat && !lstat.isDirectory()) { this.cache[abs] = 'FILE' } else { entries = this._readdir(abs, false) }

	  return entries
    }

    GlobSync.prototype._readdir = function (abs, inGlobStar) {
	  let entries

	  if (inGlobStar && !ownProp(this.symlinks, abs)) { return this._readdirInGlobStar(abs) }

	  if (ownProp(this.cache, abs)) {
	    const c = this.cache[abs]
	    if (!c || c === 'FILE') { return null }

	    if (Array.isArray(c)) { return c }
	  }

	  try {
	    return this._readdirEntries(abs, fs.readdirSync(abs))
	  } catch (er) {
	    this._readdirError(abs, er)
	    return null
	  }
    }

    GlobSync.prototype._readdirEntries = function (abs, entries) {
	  // if we haven't asked to stat everything, then just
	  // assume that everything in there exists, so we can avoid
	  // having to stat it a second time.
	  if (!this.mark && !this.stat) {
	    for (let i = 0; i < entries.length; i++) {
	      let e = entries[i]
	      if (abs === '/') { e = abs + e } else { e = `${abs}/${e}` }
	      this.cache[e] = true
	    }
	  }

	  this.cache[abs] = entries

	  // mark and cache dir-ness
	  return entries
    }

    GlobSync.prototype._readdirError = function (f, er) {
	  // handle errors, and cache the information
	  switch (er.code) {
	    case 'ENOTSUP': // https://github.com/isaacs/node-glob/issues/205
	    case 'ENOTDIR': // totally normal. means it *does* exist.
	      var abs = this._makeAbs(f)
	      this.cache[abs] = 'FILE'
	      if (abs === this.cwdAbs) {
	        const error = new Error(`${er.code} invalid cwd ${this.cwd}`)
	        error.path = this.cwd
	        error.code = er.code
	        throw error
	      }
	      break

	    case 'ENOENT': // not terribly unusual
	    case 'ELOOP':
	    case 'ENAMETOOLONG':
	    case 'UNKNOWN':
	      this.cache[this._makeAbs(f)] = false
	      break

	    default: // some unusual error.  Treat as failure.
	      this.cache[this._makeAbs(f)] = false
	      if (this.strict) { throw er }
	      if (!this.silent) { console.error('glob error', er) }
	      break
	  }
    }

    GlobSync.prototype._processGlobStar = function (prefix, read, abs, remain, index, inGlobStar) {
	  const entries = this._readdir(abs, inGlobStar)

	  // no entries means not a dir, so it can never have matches
	  // foo.txt/** doesn't match foo.txt
	  if (!entries) { return }

	  // test without the globstar, and with every child both below
	  // and replacing the globstar.
	  const remainWithoutGlobStar = remain.slice(1)
	  const gspref = prefix ? [prefix] : []
	  const noGlobStar = gspref.concat(remainWithoutGlobStar)

	  // the noGlobStar pattern exits the inGlobStar state
	  this._process(noGlobStar, index, false)

	  const len = entries.length
	  const isSym = this.symlinks[abs]

	  // If it's a symlink, and we're in a globstar, then stop
	  if (isSym && inGlobStar) { return }

	  for (let i = 0; i < len; i++) {
	    const e = entries[i]
	    if (e.charAt(0) === '.' && !this.dot) { continue }

	    // these two cases enter the inGlobStar state
	    const instead = gspref.concat(entries[i], remainWithoutGlobStar)
	    this._process(instead, index, true)

	    const below = gspref.concat(entries[i], remain)
	    this._process(below, index, true)
	  }
    }

    GlobSync.prototype._processSimple = function (prefix, index) {
	  // XXX review this.  Shouldn't it be doing the mounting etc
	  // before doing stat?  kinda weird?
	  const exists = this._stat(prefix)

	  if (!this.matches[index]) { this.matches[index] = Object.create(null) }

	  // If it doesn't exist, then just mark the lack of results
	  if (!exists) { return }

	  if (prefix && isAbsolute(prefix) && !this.nomount) {
	    const trail = /[\/\\]$/.test(prefix)
	    if (prefix.charAt(0) === '/') {
	      prefix = path.join(this.root, prefix)
	    } else {
	      prefix = path.resolve(this.root, prefix)
	      if (trail) { prefix += '/' }
	    }
	  }

	  if (process.platform === 'win32') { prefix = prefix.replace(/\\/g, '/') }

	  // Mark this as a match
	  this._emitMatch(index, prefix)
    }

	// Returns either 'DIR', 'FILE', or false
    GlobSync.prototype._stat = function (f) {
	  const abs = this._makeAbs(f)
	  const needDir = f.slice(-1) === '/'

	  if (f.length > this.maxLength) { return false }

	  if (!this.stat && ownProp(this.cache, abs)) {
	    var c = this.cache[abs]

	    if (Array.isArray(c)) { c = 'DIR' }

	    // It exists, but maybe not how we need it
	    if (!needDir || c === 'DIR') { return c }

	    if (needDir && c === 'FILE') { return false }

	    // otherwise we have to stat, because maybe c=true
	    // if we know it exists, but not what it is.
	  }

	  let exists
	  let stat = this.statCache[abs]
	  if (!stat) {
	    let lstat
	    try {
	      lstat = fs.lstatSync(abs)
	    } catch (er) {
	      if (er && (er.code === 'ENOENT' || er.code === 'ENOTDIR')) {
	        this.statCache[abs] = false
	        return false
	      }
	    }

	    if (lstat && lstat.isSymbolicLink()) {
	      try {
	        stat = fs.statSync(abs)
	      } catch (er) {
	        stat = lstat
	      }
	    } else {
	      stat = lstat
	    }
	  }

	  this.statCache[abs] = stat

	  var c = true
	  if (stat) { c = stat.isDirectory() ? 'DIR' : 'FILE' }

	  this.cache[abs] = this.cache[abs] || c

	  if (needDir && c === 'FILE') { return false }

	  return c
    }

    GlobSync.prototype._mark = function (p) {
	  return common.mark(this, p)
    }

    GlobSync.prototype._makeAbs = function (f) {
	  return common.makeAbs(this, f)
    }
/** */ }),
/* 368 */
/** */ (function (module, exports, __webpack_require__) {
    exports.alphasort = alphasort
    exports.alphasorti = alphasorti
    exports.setopts = setopts
    exports.ownProp = ownProp
    exports.makeAbs = makeAbs
    exports.finish = finish
    exports.mark = mark
    exports.isIgnored = isIgnored
    exports.childrenIgnored = childrenIgnored

    function ownProp(obj, field) {
	  return Object.prototype.hasOwnProperty.call(obj, field)
    }

    const path = __webpack_require__(342)
    const minimatch = __webpack_require__(359)
    const isAbsolute = __webpack_require__(366)
    const Minimatch = minimatch.Minimatch

    function alphasorti(a, b) {
	  return a.toLowerCase().localeCompare(b.toLowerCase())
    }

    function alphasort(a, b) {
	  return a.localeCompare(b)
    }

    function setupIgnores(self, options) {
	  self.ignore = options.ignore || []

	  if (!Array.isArray(self.ignore)) { self.ignore = [self.ignore] }

	  if (self.ignore.length) {
	    self.ignore = self.ignore.map(ignoreMap)
	  }
    }

	// ignore patterns are always in dot:true mode.
    function ignoreMap(pattern) {
	  let gmatcher = null
	  if (pattern.slice(-3) === '/**') {
	    const gpattern = pattern.replace(/(\/\*\*)+$/, '')
	    gmatcher = new Minimatch(gpattern, { dot: true })
	  }

	  return {
	    matcher: new Minimatch(pattern, { dot: true }),
	    gmatcher
	  }
    }

    function setopts(self, pattern, options) {
	  if (!options) { options = {} }

	  // base-matching: just use globstar for that.
	  if (options.matchBase && pattern.indexOf('/') === -1) {
	    if (options.noglobstar) {
	      throw new Error('base matching requires globstar')
	    }
	    pattern = `**/${pattern}`
	  }

	  self.silent = !!options.silent
	  self.pattern = pattern
	  self.strict = options.strict !== false
	  self.realpath = !!options.realpath
	  self.realpathCache = options.realpathCache || Object.create(null)
	  self.follow = !!options.follow
	  self.dot = !!options.dot
	  self.mark = !!options.mark
	  self.nodir = !!options.nodir
	  if (self.nodir) { self.mark = true }
	  self.sync = !!options.sync
	  self.nounique = !!options.nounique
	  self.nonull = !!options.nonull
	  self.nosort = !!options.nosort
	  self.nocase = !!options.nocase
	  self.stat = !!options.stat
	  self.noprocess = !!options.noprocess
	  self.absolute = !!options.absolute

	  self.maxLength = options.maxLength || Infinity
	  self.cache = options.cache || Object.create(null)
	  self.statCache = options.statCache || Object.create(null)
	  self.symlinks = options.symlinks || Object.create(null)

	  setupIgnores(self, options)

	  self.changedCwd = false
	  const cwd = process.cwd()
	  if (!ownProp(options, 'cwd')) { self.cwd = cwd } else {
	    self.cwd = path.resolve(options.cwd)
	    self.changedCwd = self.cwd !== cwd
	  }

	  self.root = options.root || path.resolve(self.cwd, '/')
	  self.root = path.resolve(self.root)
	  if (process.platform === 'win32') { self.root = self.root.replace(/\\/g, '/') }

	  // TODO: is an absolute `cwd` supposed to be resolved against `root`?
	  // e.g. { cwd: '/test', root: __dirname } === path.join(__dirname, '/test')
	  self.cwdAbs = isAbsolute(self.cwd) ? self.cwd : makeAbs(self, self.cwd)
	  if (process.platform === 'win32') { self.cwdAbs = self.cwdAbs.replace(/\\/g, '/') }
	  self.nomount = !!options.nomount

	  // disable comments and negation in Minimatch.
	  // Note that they are not supported in Glob itself anyway.
	  options.nonegate = true
	  options.nocomment = true

	  self.minimatch = new Minimatch(pattern, options)
	  self.options = self.minimatch.options
    }

    function finish(self) {
	  const nou = self.nounique
	  let all = nou ? [] : Object.create(null)

	  for (var i = 0, l = self.matches.length; i < l; i++) {
	    const matches = self.matches[i]
	    if (!matches || Object.keys(matches).length === 0) {
	      if (self.nonull) {
	        // do like the shell, and spit out the literal glob
	        const literal = self.minimatch.globSet[i]
	        if (nou) { all.push(literal) } else { all[literal] = true }
	      }
	    } else {
	      // had matches
	      const m = Object.keys(matches)
	      if (nou) { all.push(...m) } else {
          m.forEach((m) => {
	          all[m] = true
	        })
      }
	    }
	  }

	  if (!nou) { all = Object.keys(all) }

	  if (!self.nosort) { all = all.sort(self.nocase ? alphasorti : alphasort) }

	  // at *some* point we statted all of these
	  if (self.mark) {
	    for (var i = 0; i < all.length; i++) {
	      all[i] = self._mark(all[i])
	    }
	    if (self.nodir) {
	      all = all.filter((e) => {
	        let notDir = !(/\/$/.test(e))
	        const c = self.cache[e] || self.cache[makeAbs(self, e)]
	        if (notDir && c) { notDir = c !== 'DIR' && !Array.isArray(c) }
	        return notDir
	      })
	    }
	  }

	  if (self.ignore.length) {
      all = all.filter((m) => !isIgnored(self, m))
  }

	  self.found = all
    }

    function mark(self, p) {
	  const abs = makeAbs(self, p)
	  const c = self.cache[abs]
	  let m = p
	  if (c) {
	    const isDir = c === 'DIR' || Array.isArray(c)
	    const slash = p.slice(-1) === '/'

	    if (isDir && !slash) { m += '/' } else if (!isDir && slash) { m = m.slice(0, -1) }

	    if (m !== p) {
	      const mabs = makeAbs(self, m)
	      self.statCache[mabs] = self.statCache[abs]
	      self.cache[mabs] = self.cache[abs]
	    }
	  }

	  return m
    }

	// lotta situps...
    function makeAbs(self, f) {
	  let abs = f
	  if (f.charAt(0) === '/') {
	    abs = path.join(self.root, f)
	  } else if (isAbsolute(f) || f === '') {
	    abs = f
	  } else if (self.changedCwd) {
	    abs = path.resolve(self.cwd, f)
	  } else {
	    abs = path.resolve(f)
	  }

	  if (process.platform === 'win32') { abs = abs.replace(/\\/g, '/') }

	  return abs
    }


	// Return true, if pattern ends with globstar '**', for the accompanying parent directory.
	// Ex:- If node_modules/** is the pattern, add 'node_modules' to ignore list along with it's contents
    function isIgnored(self, path) {
	  if (!self.ignore.length) { return false }

	  return self.ignore.some((item) => item.matcher.match(path) || !!(item.gmatcher && item.gmatcher.match(path)))
    }

    function childrenIgnored(self, path) {
	  if (!self.ignore.length) { return false }

	  return self.ignore.some((item) => !!(item.gmatcher && item.gmatcher.match(path)))
    }
/** */ }),
/* 369 */
/** */ (function (module, exports, __webpack_require__) {
    const wrappy = __webpack_require__(370)
    const reqs = Object.create(null)
    const once = __webpack_require__(371)

    module.exports = wrappy(inflight)

    function inflight(key, cb) {
	  if (reqs[key]) {
	    reqs[key].push(cb)
	    return null
	  }
	    reqs[key] = [cb]
	    return makeres(key)
    }

    function makeres(key) {
	  return once(function RES() {
	    const cbs = reqs[key]
	    const len = cbs.length
	    const args = slice(arguments)

	    // XXX It's somewhat ambiguous whether a new callback added in this
	    // pass should be queued for later execution if something in the
	    // list of callbacks throws, or if it should just be discarded.
	    // However, it's such an edge case that it hardly matters, and either
	    // choice is likely as surprising as the other.
	    // As it happens, we do go ahead and schedule it for later execution.
	    try {
	      for (let i = 0; i < len; i++) {
	        cbs[i].apply(null, args)
	      }
	    } finally {
	      if (cbs.length > len) {
	        // added more in the interim.
	        // de-zalgo, just in case, but don't call again.
	        cbs.splice(0, len)
	        process.nextTick(() => {
	          RES(...args)
	        })
	      } else {
	        delete reqs[key]
	      }
	    }
	  })
    }

    function slice(args) {
	  const length = args.length
	  const array = []

	  for (let i = 0; i < length; i++) array[i] = args[i]
	  return array
    }
/** */ }),
/* 370 */
/** */ (function (module, exports) {
	// Returns a wrapper function that returns a wrapped callback
	// The wrapper function should do some stuff, and return a
	// presumably different callback function.
	// This makes sure that own properties are retained, so that
	// decorations and such are not lost along the way.
    module.exports = wrappy
    function wrappy(fn, cb) {
	  if (fn && cb) return wrappy(fn)(cb)

	  if (typeof fn !== 'function') { throw new TypeError('need wrapper function') }

	  Object.keys(fn).forEach((k) => {
	    wrapper[k] = fn[k]
	  })

	  return wrapper

	  function wrapper() {
	    const args = new Array(arguments.length)
	    for (let i = 0; i < args.length; i++) {
	      args[i] = arguments[i]
	    }
	    const ret = fn.apply(this, args)
	    const cb = args[args.length - 1]
	    if (typeof ret === 'function' && ret !== cb) {
	      Object.keys(cb).forEach((k) => {
	        ret[k] = cb[k]
	      })
	    }
	    return ret
	  }
    }
/** */ }),
/* 371 */
/** */ (function (module, exports, __webpack_require__) {
    const wrappy = __webpack_require__(370)
    module.exports = wrappy(once)
    module.exports.strict = wrappy(onceStrict)

    once.proto = once(() => {
	  Object.defineProperty(Function.prototype, 'once', {
	    value() {
	      return once(this)
	    },
	    configurable: true
	  })

	  Object.defineProperty(Function.prototype, 'onceStrict', {
	    value() {
	      return onceStrict(this)
	    },
	    configurable: true
	  })
    })

    function once(fn) {
	  var f = function () {
	    if (f.called) return f.value
	    f.called = true
	    return f.value = fn.apply(this, arguments)
	  }
	  f.called = false
	  return f
    }

    function onceStrict(fn) {
	  var f = function () {
	    if (f.called) { throw new Error(f.onceError) }
	    f.called = true
	    return f.value = fn.apply(this, arguments)
	  }
	  const name = fn.name || 'Function wrapped with `once`'
	  f.onceError = `${name} shouldn't be called more than once`
	  f.called = false
	  return f
    }
/** */ }),
/* 372 */
/** */ (function (module, exports) {
    module.exports = [
	  'cat',
	  'cd',
	  'chmod',
	  'cp',
	  'dirs',
	  'echo',
	  'exec',
	  'find',
	  'grep',
	  'head',
	  'ln',
	  'ls',
	  'mkdir',
	  'mv',
	  'pwd',
	  'rm',
	  'sed',
	  'set',
	  'sort',
	  'tail',
	  'tempdir',
	  'test',
	  'to',
	  'toEnd',
	  'touch',
	  'uniq',
	  'which'
    ];
/** */ }),
/* 373 */
/** */ (function (module, exports, __webpack_require__) {
    const map = {
        './cat': 374,
        './cat.js': 374,
        './cd': 375,
        './cd.js': 375,
        './chmod': 376,
        './chmod.js': 376,
        './common': 355,
        './common.js': 355,
        './cp': 377,
        './cp.js': 377,
        './dirs': 378,
        './dirs.js': 378,
        './echo': 379,
        './echo.js': 379,
        './error': 380,
        './error.js': 380,
        './exec': 381,
        './exec.js': 381,
        './find': 385,
        './find.js': 385,
        './grep': 387,
        './grep.js': 387,
        './head': 388,
        './head.js': 388,
        './ln': 389,
        './ln.js': 389,
        './ls': 386,
        './ls.js': 386,
        './mkdir': 390,
        './mkdir.js': 390,
        './mv': 391,
        './mv.js': 391,
        './popd': 393,
        './popd.js': 393,
        './pushd': 394,
        './pushd.js': 394,
        './pwd': 383,
        './pwd.js': 383,
        './rm': 392,
        './rm.js': 392,
        './sed': 395,
        './sed.js': 395,
        './set': 396,
        './set.js': 396,
        './sort': 397,
        './sort.js': 397,
        './tail': 398,
        './tail.js': 398,
        './tempdir': 382,
        './tempdir.js': 382,
        './test': 399,
        './test.js': 399,
        './to': 400,
        './to.js': 400,
        './toEnd': 401,
        './toEnd.js': 401,
        './touch': 402,
        './touch.js': 402,
        './uniq': 403,
        './uniq.js': 403,
        './which': 404,
        './which.js': 404
    };
    function webpackContext(req) {
        return __webpack_require__(webpackContextResolve(req));
    }
    function webpackContextResolve(req) {
        return map[req] || (function () { throw new Error(`Cannot find module '${req}'.`) }());
    }
    webpackContext.keys = function webpackContextKeys() {
        return Object.keys(map);
    };
    webpackContext.resolve = webpackContextResolve;
    module.exports = webpackContext;
    webpackContext.id = 373;
/** */ }),
/* 374 */
/** */ (function (module, exports, __webpack_require__) {
    const common = __webpack_require__(355);
    const fs = __webpack_require__(340);

    common.register('cat', _cat, {
	  canReceivePipe: true
    });

	// @
	// @ ### cat(file [, file ...])
	// @ ### cat(file_array)
	// @
	// @ Examples:
	// @
	// @ ```javascript
	// @ var str = cat('file*.txt');
	// @ var str = cat('file1', 'file2');
	// @ var str = cat(['file1', 'file2']); // same as above
	// @ ```
	// @
	// @ Returns a string containing the given file, or a concatenated string
	// @ containing the files if more than one file is given (a new line character is
	// @ introduced between each file).
    function _cat(options, files) {
	  let cat = common.readFromPipe();

	  if (!files && !cat) common.error('no paths given');

	  files = [].slice.call(arguments, 1);

	  files.forEach((file) => {
	    if (!fs.existsSync(file)) {
	      common.error(`no such file or directory: ${file}`);
	    } else if (fs.statSync(file).isDirectory()) {
	      common.error(`${file}: Is a directory`);
	    }

	    cat += fs.readFileSync(file, 'utf8');
	  });

	  return cat;
    }
    module.exports = _cat;
/** */ }),
/* 375 */
/** */ (function (module, exports, __webpack_require__) {
    const fs = __webpack_require__(340);
    const common = __webpack_require__(355);

    common.register('cd', _cd, {});

	// @
	// @ ### cd([dir])
	// @ Changes to directory `dir` for the duration of the script. Changes to home
	// @ directory if no argument is supplied.
    function _cd(options, dir) {
	  if (!dir) dir = common.getUserHome();

	  if (dir === '-') {
	    if (!({ NODE_ENV: 'production' }).OLDPWD) {
	      common.error('could not find previous directory');
	    } else {
	      dir = ({ NODE_ENV: 'production' }).OLDPWD;
	    }
	  }

	  try {
	    const curDir = process.cwd();
	    process.chdir(dir);
	    ({ NODE_ENV: 'production' }).OLDPWD = curDir;
	  } catch (e) {
	    // something went wrong, let's figure out the error
	    let err;
	    try {
	      fs.statSync(dir); // if this succeeds, it must be some sort of file
	      err = `not a directory: ${dir}`;
	    } catch (e2) {
	      err = `no such file or directory: ${dir}`;
	    }
	    if (err) common.error(err);
	  }
	  return '';
    }
    module.exports = _cd;
/** */ }),
/* 376 */
/** */ (function (module, exports, __webpack_require__) {
    const common = __webpack_require__(355);
    const fs = __webpack_require__(340);
    const path = __webpack_require__(342);

    const PERMS = (function (base) {
	  return {
	    OTHER_EXEC: base.EXEC,
	    OTHER_WRITE: base.WRITE,
	    OTHER_READ: base.READ,

	    GROUP_EXEC: base.EXEC << 3,
	    GROUP_WRITE: base.WRITE << 3,
	    GROUP_READ: base.READ << 3,

	    OWNER_EXEC: base.EXEC << 6,
	    OWNER_WRITE: base.WRITE << 6,
	    OWNER_READ: base.READ << 6,

	    // Literal octal numbers are apparently not allowed in "strict" javascript.
	    STICKY: parseInt('01000', 8),
	    SETGID: parseInt('02000', 8),
	    SETUID: parseInt('04000', 8),

	    TYPE_MASK: parseInt('0770000', 8)
	  };
    }({
	  EXEC: 1,
	  WRITE: 2,
	  READ: 4
    }));

    common.register('chmod', _chmod, {
    });

	// @
	// @ ### chmod([options,] octal_mode || octal_string, file)
	// @ ### chmod([options,] symbolic_mode, file)
	// @
	// @ Available options:
	// @
	// @ + `-v`: output a diagnostic for every file processed//@
	// @ + `-c`: like verbose but report only when a change is made//@
	// @ + `-R`: change files and directories recursively//@
	// @
	// @ Examples:
	// @
	// @ ```javascript
	// @ chmod(755, '/Users/brandon');
	// @ chmod('755', '/Users/brandon'); // same as above
	// @ chmod('u+x', '/Users/brandon');
	// @ chmod('-R', 'a-w', '/Users/brandon');
	// @ ```
	// @
	// @ Alters the permissions of a file or directory by either specifying the
	// @ absolute permissions in octal form or expressing the changes in symbols.
	// @ This command tries to mimic the POSIX behavior as much as possible.
	// @ Notable exceptions:
	// @
	// @ + In symbolic modes, 'a-r' and '-r' are identical.  No consideration is
	// @   given to the umask.
	// @ + There is no "quiet" option since default behavior is to run silent.
    function _chmod(options, mode, filePattern) {
	  if (!filePattern) {
	    if (options.length > 0 && options.charAt(0) === '-') {
	      // Special case where the specified file permissions started with - to subtract perms, which
	      // get picked up by the option parser as command flags.
	      // If we are down by one argument and options starts with -, shift everything over.
	      [].unshift.call(arguments, '');
	    } else {
	      common.error('You must specify a file.');
	    }
	  }

	  options = common.parseOptions(options, {
	    R: 'recursive',
	    c: 'changes',
	    v: 'verbose'
	  });

	  filePattern = [].slice.call(arguments, 2);

	  let files;

	  // TODO: replace this with a call to common.expand()
	  if (options.recursive) {
	    files = [];
	    filePattern.forEach(function addFile(expandedFile) {
	      const stat = fs.lstatSync(expandedFile);

	      if (!stat.isSymbolicLink()) {
	        files.push(expandedFile);

	        if (stat.isDirectory()) {  // intentionally does not follow symlinks.
	          fs.readdirSync(expandedFile).forEach((child) => {
	            addFile(`${expandedFile}/${child}`);
	          });
	        }
	      }
	    });
	  } else {
	    files = filePattern;
	  }

	  files.forEach((file) => {
	    file = path.resolve(file);
	    if (!fs.existsSync(file)) {
	      common.error(`File not found: ${file}`);
	    }

	    // When recursing, don't follow symlinks.
	    if (options.recursive && fs.lstatSync(file).isSymbolicLink()) {
	      return;
	    }

	    const stat = fs.statSync(file);
	    const isDir = stat.isDirectory();
	    let perms = stat.mode;
	    const type = perms & PERMS.TYPE_MASK;

	    let newPerms = perms;

	    if (isNaN(parseInt(mode, 8))) {
	      // parse options
	      mode.split(',').forEach((symbolicMode) => {
	        const pattern = /([ugoa]*)([=\+-])([rwxXst]*)/i;
	        const matches = pattern.exec(symbolicMode);

	        if (matches) {
	          const applyTo = matches[1];
	          const operator = matches[2];
	          const change = matches[3];

	          const changeOwner = applyTo.indexOf('u') !== -1 || applyTo === 'a' || applyTo === '';
	          const changeGroup = applyTo.indexOf('g') !== -1 || applyTo === 'a' || applyTo === '';
	          const changeOther = applyTo.indexOf('o') !== -1 || applyTo === 'a' || applyTo === '';

	          const changeRead = change.indexOf('r') !== -1;
	          const changeWrite = change.indexOf('w') !== -1;
	          let changeExec = change.indexOf('x') !== -1;
	          const changeExecDir = change.indexOf('X') !== -1;
	          const changeSticky = change.indexOf('t') !== -1;
	          const changeSetuid = change.indexOf('s') !== -1;

	          if (changeExecDir && isDir) {
	            changeExec = true;
	          }

	          let mask = 0;
	          if (changeOwner) {
	            mask |= (changeRead ? PERMS.OWNER_READ : 0) + (changeWrite ? PERMS.OWNER_WRITE : 0) + (changeExec ? PERMS.OWNER_EXEC : 0) + (changeSetuid ? PERMS.SETUID : 0);
	          }
	          if (changeGroup) {
	            mask |= (changeRead ? PERMS.GROUP_READ : 0) + (changeWrite ? PERMS.GROUP_WRITE : 0) + (changeExec ? PERMS.GROUP_EXEC : 0) + (changeSetuid ? PERMS.SETGID : 0);
	          }
	          if (changeOther) {
	            mask |= (changeRead ? PERMS.OTHER_READ : 0) + (changeWrite ? PERMS.OTHER_WRITE : 0) + (changeExec ? PERMS.OTHER_EXEC : 0);
	          }

	          // Sticky bit is special - it's not tied to user, group or other.
	          if (changeSticky) {
	            mask |= PERMS.STICKY;
	          }

	          switch (operator) {
	            case '+':
	              newPerms |= mask;
	              break;

	            case '-':
	              newPerms &= ~mask;
	              break;

	            case '=':
	              newPerms = type + mask;

	              // According to POSIX, when using = to explicitly set the
	              // permissions, setuid and setgid can never be cleared.
	              if (fs.statSync(file).isDirectory()) {
	                newPerms |= (PERMS.SETUID + PERMS.SETGID) & perms;
	              }
	              break;
	            default:
	              common.error(`Could not recognize operator: \`${operator}\``);
	          }

	          if (options.verbose) {
	            console.log(`${file} -> ${newPerms.toString(8)}`);
	          }

	          if (perms !== newPerms) {
	            if (!options.verbose && options.changes) {
	              console.log(`${file} -> ${newPerms.toString(8)}`);
	            }
	            fs.chmodSync(file, newPerms);
	            perms = newPerms; // for the next round of changes!
	          }
	        } else {
	          common.error(`Invalid symbolic mode change: ${symbolicMode}`);
	        }
	      });
	    } else {
	      // they gave us a full number
	      newPerms = type + parseInt(mode, 8);

	      // POSIX rules are that setuid and setgid can only be added using numeric
	      // form, but not cleared.
	      if (fs.statSync(file).isDirectory()) {
	        newPerms |= (PERMS.SETUID + PERMS.SETGID) & perms;
	      }

	      fs.chmodSync(file, newPerms);
	    }
	  });
	  return '';
    }
    module.exports = _chmod;
/** */ }),
/* 377 */
/** */ (function (module, exports, __webpack_require__) {
    const fs = __webpack_require__(340);
    const path = __webpack_require__(342);
    const common = __webpack_require__(355);

    common.register('cp', _cp, {
	  cmdOptions: {
	    f: '!no_force',
	    n: 'no_force',
	    u: 'update',
	    R: 'recursive',
	    r: 'recursive',
	    L: 'followsymlink',
	    P: 'noFollowsymlink'
	  },
	  wrapOutput: false
    });

	// Buffered file copy, synchronous
	// (Using readFileSync() + writeFileSync() could easily cause a memory overflow
	//  with large files)
    function copyFileSync(srcFile, destFile, options) {
	  if (!fs.existsSync(srcFile)) {
	    common.error(`copyFileSync: no such file or directory: ${srcFile}`);
	  }

	  const isWindows = process.platform === 'win32';

	  // Check the mtimes of the files if the '-u' flag is provided
	  try {
	    if (options.update && fs.statSync(srcFile).mtime < fs.statSync(destFile).mtime) {
	      return;
	    }
	  } catch (e) {
	    // If we're here, destFile probably doesn't exist, so just do a normal copy
	  }

	  if (fs.lstatSync(srcFile).isSymbolicLink() && !options.followsymlink) {
	    try {
	      fs.lstatSync(destFile);
	      common.unlinkSync(destFile); // re-link it
	    } catch (e) {
	      // it doesn't exist, so no work needs to be done
	    }

	    const symlinkFull = fs.readlinkSync(srcFile);
	    fs.symlinkSync(symlinkFull, destFile, isWindows ? 'junction' : null);
	  } else {
	    const buf = common.buffer();
	    const bufLength = buf.length;
	    let bytesRead = bufLength;
	    let pos = 0;
	    let fdr = null;
	    let fdw = null;

	    try {
	      fdr = fs.openSync(srcFile, 'r');
	    } catch (e) {
	      /* istanbul ignore next */
	      common.error(`copyFileSync: could not read src file (${srcFile})`);
	    }

	    try {
	      fdw = fs.openSync(destFile, 'w');
	    } catch (e) {
	      /* istanbul ignore next */
	      common.error(`copyFileSync: could not write to dest file (code=${e.code}):${destFile}`);
	    }

	    while (bytesRead === bufLength) {
	      bytesRead = fs.readSync(fdr, buf, 0, bufLength, pos);
	      fs.writeSync(fdw, buf, 0, bytesRead);
	      pos += bytesRead;
	    }

	    fs.closeSync(fdr);
	    fs.closeSync(fdw);

	    fs.chmodSync(destFile, fs.statSync(srcFile).mode);
	  }
    }

	// Recursively copies 'sourceDir' into 'destDir'
	// Adapted from https://github.com/ryanmcgrath/wrench-js
	//
	// Copyright (c) 2010 Ryan McGrath
	// Copyright (c) 2012 Artur Adib
	//
	// Licensed under the MIT License
	// http://www.opensource.org/licenses/mit-license.php
    function cpdirSyncRecursive(sourceDir, destDir, currentDepth, opts) {
	  if (!opts) opts = {};

	  // Ensure there is not a run away recursive copy
	  if (currentDepth >= common.config.maxdepth) return;
	  currentDepth++;

	  const isWindows = process.platform === 'win32';

	  // Create the directory where all our junk is moving to; read the mode of the
	  // source directory and mirror it
	  try {
	    const checkDir = fs.statSync(sourceDir);
	    fs.mkdirSync(destDir, checkDir.mode);
	  } catch (e) {
	    // if the directory already exists, that's okay
	    if (e.code !== 'EEXIST') throw e;
	  }

	  const files = fs.readdirSync(sourceDir);

	  for (let i = 0; i < files.length; i++) {
	    const srcFile = `${sourceDir}/${files[i]}`;
	    const destFile = `${destDir}/${files[i]}`;
	    let srcFileStat = fs.lstatSync(srcFile);

	    var symlinkFull;
	    if (opts.followsymlink) {
	      if (cpcheckcycle(sourceDir, srcFile)) {
	        // Cycle link found.
	        console.error('Cycle link found.');
	        symlinkFull = fs.readlinkSync(srcFile);
	        fs.symlinkSync(symlinkFull, destFile, isWindows ? 'junction' : null);
	        continue;
	      }
	    }
	    if (srcFileStat.isDirectory()) {
	      /* recursion this thing right on back. */
	      cpdirSyncRecursive(srcFile, destFile, currentDepth, opts);
	    } else if (srcFileStat.isSymbolicLink() && !opts.followsymlink) {
	      symlinkFull = fs.readlinkSync(srcFile);
	      try {
	        fs.lstatSync(destFile);
	        common.unlinkSync(destFile); // re-link it
	      } catch (e) {
	        // it doesn't exist, so no work needs to be done
	      }
	      fs.symlinkSync(symlinkFull, destFile, isWindows ? 'junction' : null);
	    } else if (srcFileStat.isSymbolicLink() && opts.followsymlink) {
	      srcFileStat = fs.statSync(srcFile);
	      if (srcFileStat.isDirectory()) {
	        cpdirSyncRecursive(srcFile, destFile, currentDepth, opts);
	      } else {
	        copyFileSync(srcFile, destFile, opts);
	      }
	    } else {
	      /* At this point, we've hit a file actually worth copying... so copy it on over. */
	      if (fs.existsSync(destFile) && opts.no_force) {
	        common.log(`skipping existing file: ${files[i]}`);
	      } else {
	        copyFileSync(srcFile, destFile, opts);
	      }
	    }
	  } // for files
    } // cpdirSyncRecursive

	// Checks if cureent file was created recently
    function checkRecentCreated(sources, index) {
	  const lookedSource = sources[index];
	  return sources.slice(0, index).some((src) => path.basename(src) === path.basename(lookedSource));
    }

    function cpcheckcycle(sourceDir, srcFile) {
	  const srcFileStat = fs.lstatSync(srcFile);
	  if (srcFileStat.isSymbolicLink()) {
	    // Do cycle check. For example:
	    //   $ mkdir -p 1/2/3/4
	    //   $ cd  1/2/3/4
	    //   $ ln -s ../../3 link
	    //   $ cd ../../../..
	    //   $ cp -RL 1 copy
	    const cyclecheck = fs.statSync(srcFile);
	    if (cyclecheck.isDirectory()) {
	      const sourcerealpath = fs.realpathSync(sourceDir);
	      const symlinkrealpath = fs.realpathSync(srcFile);
	      const re = new RegExp(symlinkrealpath);
	      if (re.test(sourcerealpath)) {
	        return true;
	      }
	    }
	  }
	  return false;
    }

	// @
	// @ ### cp([options,] source [, source ...], dest)
	// @ ### cp([options,] source_array, dest)
	// @ Available options:
	// @
	// @ + `-f`: force (default behavior)
	// @ + `-n`: no-clobber
	// @ + `-u`: only copy if source is newer than dest
	// @ + `-r`, `-R`: recursive
	// @ + `-L`: follow symlinks
	// @ + `-P`: don't follow symlinks
	// @
	// @ Examples:
	// @
	// @ ```javascript
	// @ cp('file1', 'dir1');
	// @ cp('-R', 'path/to/dir/', '~/newCopy/');
	// @ cp('-Rf', '/tmp/*', '/usr/local/*', '/home/tmp');
	// @ cp('-Rf', ['/tmp/*', '/usr/local/*'], '/home/tmp'); // same as above
	// @ ```
	// @
	// @ Copies files.
    function _cp(options, sources, dest) {
	  // If we're missing -R, it actually implies -L (unless -P is explicit)
	  if (options.followsymlink) {
	    options.noFollowsymlink = false;
	  }
	  if (!options.recursive && !options.noFollowsymlink) {
	    options.followsymlink = true;
	  }

	  // Get sources, dest
	  if (arguments.length < 3) {
	    common.error('missing <source> and/or <dest>');
	  } else {
	    sources = [].slice.call(arguments, 1, arguments.length - 1);
	    dest = arguments[arguments.length - 1];
	  }

	  const destExists = fs.existsSync(dest);
	  const destStat = destExists && fs.statSync(dest);

	  // Dest is not existing dir, but multiple sources given
	  if ((!destExists || !destStat.isDirectory()) && sources.length > 1) {
	    common.error('dest is not a directory (too many sources)');
	  }

	  // Dest is an existing file, but -n is given
	  if (destExists && destStat.isFile() && options.no_force) {
	    return new common.ShellString('', '', 0);
	  }

	  sources.forEach((src, srcIndex) => {
	    if (!fs.existsSync(src)) {
	      if (src === '') src = '\'\''; // if src was empty string, display empty string
	      common.error(`no such file or directory: ${src}`, { continue: true });
	      return; // skip file
	    }
	    const srcStat = fs.statSync(src);
	    if (!options.noFollowsymlink && srcStat.isDirectory()) {
	      if (!options.recursive) {
	        // Non-Recursive
	        common.error(`omitting directory '${src}'`, { continue: true });
	      } else {
	        // Recursive
	        // 'cp /a/source dest' should create 'source' in 'dest'
	        const newDest = (destStat && destStat.isDirectory()) ?
	            path.join(dest, path.basename(src)) :
	            dest;

	        try {
	          fs.statSync(path.dirname(dest));
	          cpdirSyncRecursive(src, newDest, 0, { no_force: options.no_force, followsymlink: options.followsymlink });
	        } catch (e) {
	          /* istanbul ignore next */
	          common.error(`cannot create directory '${dest}': No such file or directory`);
	        }
	      }
	    } else {
	      // If here, src is a file

	      // When copying to '/path/dir':
	      //    thisDest = '/path/dir/file1'
	      let thisDest = dest;
	      if (destStat && destStat.isDirectory()) {
	        thisDest = path.normalize(`${dest}/${path.basename(src)}`);
	      }

	      const thisDestExists = fs.existsSync(thisDest);
	      if (thisDestExists && checkRecentCreated(sources, srcIndex)) {
	        // cannot overwrite file created recently in current execution, but we want to continue copying other files
	        if (!options.no_force) {
	          common.error(`will not overwrite just-created '${thisDest}' with '${src}'`, { continue: true });
	        }
	        return;
	      }

	      if (thisDestExists && options.no_force) {
	        return; // skip file
	      }

	      if (path.relative(src, thisDest) === '') {
	        // a file cannot be copied to itself, but we want to continue copying other files
	        common.error(`'${thisDest}' and '${src}' are the same file`, { continue: true });
	        return;
	      }

	      copyFileSync(src, thisDest, options);
	    }
	  }); // forEach(src)

	  return new common.ShellString('', common.state.error, common.state.errorCode);
    }
    module.exports = _cp;
/** */ }),
/* 378 */
/** */ (function (module, exports, __webpack_require__) {
    const common = __webpack_require__(355);
    const _cd = __webpack_require__(375);
    const path = __webpack_require__(342);

    common.register('dirs', _dirs, {
	  wrapOutput: false
    });
    common.register('pushd', _pushd, {
	  wrapOutput: false
    });
    common.register('popd', _popd, {
	  wrapOutput: false
    });

	// Pushd/popd/dirs internals
    let _dirStack = [];

    function _isStackIndex(index) {
	  return (/^[\-+]\d+$/).test(index);
    }

    function _parseStackIndex(index) {
	  if (_isStackIndex(index)) {
	    if (Math.abs(index) < _dirStack.length + 1) { // +1 for pwd
	      return (/^-/).test(index) ? Number(index) - 1 : Number(index);
	    }
	    common.error(`${index}: directory stack index out of range`);
	  } else {
	    common.error(`${index}: invalid number`);
	  }
    }

    function _actualDirStack() {
	  return [process.cwd()].concat(_dirStack);
    }

	// @
	// @ ### pushd([options,] [dir | '-N' | '+N'])
	// @
	// @ Available options:
	// @
	// @ + `-n`: Suppresses the normal change of directory when adding directories to the stack, so that only the stack is manipulated.
	// @
	// @ Arguments:
	// @
	// @ + `dir`: Makes the current working directory be the top of the stack, and then executes the equivalent of `cd dir`.
	// @ + `+N`: Brings the Nth directory (counting from the left of the list printed by dirs, starting with zero) to the top of the list by rotating the stack.
	// @ + `-N`: Brings the Nth directory (counting from the right of the list printed by dirs, starting with zero) to the top of the list by rotating the stack.
	// @
	// @ Examples:
	// @
	// @ ```javascript
	// @ // process.cwd() === '/usr'
	// @ pushd('/etc'); // Returns /etc /usr
	// @ pushd('+1');   // Returns /usr /etc
	// @ ```
	// @
	// @ Save the current directory on the top of the directory stack and then cd to `dir`. With no arguments, pushd exchanges the top two directories. Returns an array of paths in the stack.
    function _pushd(options, dir) {
	  if (_isStackIndex(options)) {
	    dir = options;
	    options = '';
	  }

	  options = common.parseOptions(options, {
	    n: 'no-cd'
	  });

	  let dirs = _actualDirStack();

	  if (dir === '+0') {
	    return dirs; // +0 is a noop
	  } else if (!dir) {
	    if (dirs.length > 1) {
	      dirs = dirs.splice(1, 1).concat(dirs);
	    } else {
	      return common.error('no other directory');
	    }
	  } else if (_isStackIndex(dir)) {
	    const n = _parseStackIndex(dir);
	    dirs = dirs.slice(n).concat(dirs.slice(0, n));
	  } else if (options['no-cd']) {
	      dirs.splice(1, 0, dir);
	    } else {
	      dirs.unshift(dir);
	    }

	  if (options['no-cd']) {
	    dirs = dirs.slice(1);
	  } else {
	    dir = path.resolve(dirs.shift());
	    _cd('', dir);
	  }

	  _dirStack = dirs;
	  return _dirs('');
    }
    exports.pushd = _pushd;

	// @
	// @ ### popd([options,] ['-N' | '+N'])
	// @
	// @ Available options:
	// @
	// @ + `-n`: Suppresses the normal change of directory when removing directories from the stack, so that only the stack is manipulated.
	// @
	// @ Arguments:
	// @
	// @ + `+N`: Removes the Nth directory (counting from the left of the list printed by dirs), starting with zero.
	// @ + `-N`: Removes the Nth directory (counting from the right of the list printed by dirs), starting with zero.
	// @
	// @ Examples:
	// @
	// @ ```javascript
	// @ echo(process.cwd()); // '/usr'
	// @ pushd('/etc');       // '/etc /usr'
	// @ echo(process.cwd()); // '/etc'
	// @ popd();              // '/usr'
	// @ echo(process.cwd()); // '/usr'
	// @ ```
	// @
	// @ When no arguments are given, popd removes the top directory from the stack and performs a cd to the new top directory. The elements are numbered from 0 starting at the first directory listed with dirs; i.e., popd is equivalent to popd +0. Returns an array of paths in the stack.
    function _popd(options, index) {
	  if (_isStackIndex(options)) {
	    index = options;
	    options = '';
	  }

	  options = common.parseOptions(options, {
	    n: 'no-cd'
	  });

	  if (!_dirStack.length) {
	    return common.error('directory stack empty');
	  }

	  index = _parseStackIndex(index || '+0');

	  if (options['no-cd'] || index > 0 || _dirStack.length + index === 0) {
	    index = index > 0 ? index - 1 : index;
	    _dirStack.splice(index, 1);
	  } else {
	    const dir = path.resolve(_dirStack.shift());
	    _cd('', dir);
	  }

	  return _dirs('');
    }
    exports.popd = _popd;

	// @
	// @ ### dirs([options | '+N' | '-N'])
	// @
	// @ Available options:
	// @
	// @ + `-c`: Clears the directory stack by deleting all of the elements.
	// @
	// @ Arguments:
	// @
	// @ + `+N`: Displays the Nth directory (counting from the left of the list printed by dirs when invoked without options), starting with zero.
	// @ + `-N`: Displays the Nth directory (counting from the right of the list printed by dirs when invoked without options), starting with zero.
	// @
	// @ Display the list of currently remembered directories. Returns an array of paths in the stack, or a single path if +N or -N was specified.
	// @
	// @ See also: pushd, popd
    function _dirs(options, index) {
	  if (_isStackIndex(options)) {
	    index = options;
	    options = '';
	  }

	  options = common.parseOptions(options, {
	    c: 'clear'
	  });

	  if (options.clear) {
	    _dirStack = [];
	    return _dirStack;
	  }

	  const stack = _actualDirStack();

	  if (index) {
	    index = _parseStackIndex(index);

	    if (index < 0) {
	      index = stack.length + index;
	    }

	    common.log(stack[index]);
	    return stack[index];
	  }

	  common.log(stack.join(' '));

	  return stack;
    }
    exports.dirs = _dirs;
/** */ }),
/* 379 */
/** */ (function (module, exports, __webpack_require__) {
    const common = __webpack_require__(355);

    common.register('echo', _echo, {
	  allowGlobbing: false
    });

	// @
	// @ ### echo([options,] string [, string ...])
	// @ Available options:
	// @
	// @ + `-e`: interpret backslash escapes (default)
	// @
	// @ Examples:
	// @
	// @ ```javascript
	// @ echo('hello world');
	// @ var str = echo('hello world');
	// @ ```
	// @
	// @ Prints string to stdout, and returns string with additional utility methods
	// @ like `.to()`.
    function _echo(opts, messages) {
	  // allow strings starting with '-', see issue #20
	  messages = [].slice.call(arguments, opts ? 0 : 1);

	  if (messages[0] === '-e') {
	    // ignore -e
	    messages.shift();
	  }

	  console.log(...messages);
	  return messages.join(' ');
    }
    module.exports = _echo;
/** */ }),
/* 380 */
/** */ (function (module, exports, __webpack_require__) {
    const common = __webpack_require__(355);

	// @
	// @ ### error()
	// @ Tests if error occurred in the last command. Returns a truthy value if an
	// @ error returned and a falsy value otherwise.
	// @
	// @ **Note**: do not rely on the
	// @ return value to be an error message. If you need the last error message, use
	// @ the `.stderr` attribute from the last command's return value instead.
    function error() {
	  return common.state.error;
    }
    module.exports = error;
/** */ }),
/* 381 */
/** */ (function (module, exports, __webpack_require__) {
    const common = __webpack_require__(355);
    const _tempDir = __webpack_require__(382);
    const _pwd = __webpack_require__(383);
    const path = __webpack_require__(342);
    const fs = __webpack_require__(340);
    const child = __webpack_require__(384);

    const DEFAULT_MAXBUFFER_SIZE = 20 * 1024 * 1024;

    common.register('exec', _exec, {
	  unix: false,
	  canReceivePipe: true,
	  wrapOutput: false
    });

	// Hack to run child_process.exec() synchronously (sync avoids callback hell)
	// Uses a custom wait loop that checks for a flag file, created when the child process is done.
	// (Can't do a wait loop that checks for internal Node variables/messages as
	// Node is single-threaded; callbacks and other internal state changes are done in the
	// event loop).
    function execSync(cmd, opts, pipe) {
	  if (!common.config.execPath) {
	    common.error('Unable to find a path to the node binary. Please manually set config.execPath');
	  }

	  const tempDir = _tempDir();
	  const stdoutFile = path.resolve(`${tempDir}/${common.randomFileName()}`);
	  const stderrFile = path.resolve(`${tempDir}/${common.randomFileName()}`);
	  const codeFile = path.resolve(`${tempDir}/${common.randomFileName()}`);
	  const scriptFile = path.resolve(`${tempDir}/${common.randomFileName()}`);
	  const sleepFile = path.resolve(`${tempDir}/${common.randomFileName()}`);

	  opts = common.extend({
	    silent: common.config.silent,
	    cwd: _pwd().toString(),
	    env: ({ NODE_ENV: 'production' }),
	    maxBuffer: DEFAULT_MAXBUFFER_SIZE
	  }, opts);

	  const previousStdoutContent = '';
	  const previousStderrContent = '';
	  // Echoes stdout and stderr changes from running process, if not silent
	  function updateStream(streamFile) {
	    if (opts.silent || !fs.existsSync(streamFile)) {
	      return;
	    }

	    let previousStreamContent;
	    let procStream;
	    if (streamFile === stdoutFile) {
	      previousStreamContent = previousStdoutContent;
	      procStream = process.stdout;
	    } else { // assume stderr
	      previousStreamContent = previousStderrContent;
	      procStream = process.stderr;
	    }

	    const streamContent = fs.readFileSync(streamFile, 'utf8');
	    // No changes since last time?
	    if (streamContent.length <= previousStreamContent.length) {
	      return;
	    }

	    procStream.write(streamContent.substr(previousStreamContent.length));
	    previousStreamContent = streamContent;
	  }

	  if (fs.existsSync(scriptFile)) common.unlinkSync(scriptFile);
	  if (fs.existsSync(stdoutFile)) common.unlinkSync(stdoutFile);
	  if (fs.existsSync(stderrFile)) common.unlinkSync(stderrFile);
	  if (fs.existsSync(codeFile)) common.unlinkSync(codeFile);

	  const execCommand = `${JSON.stringify(common.config.execPath)} ${JSON.stringify(scriptFile)}`;
	  let script;

	  opts.cwd = path.resolve(opts.cwd);
	  const optString = JSON.stringify(opts);

	  if (typeof child.execSync === 'function') {
	    script = [
	      'var child = require(\'child_process\')',
	      '  , fs = require(\'fs\');',
	      `var childProcess = child.exec(${JSON.stringify(cmd)}, ${optString}, function(err) {`,
	      `  var fname = ${JSON.stringify(codeFile)};`,
	      '  if (!err) {',
	      '    fs.writeFileSync(fname, "0");',
	      '  } else if (err.code === undefined) {',
	      '    fs.writeFileSync(fname, "1");',
	      '  } else {',
	      '    fs.writeFileSync(fname, err.code.toString());',
	      '  }',
	      '});',
	      `var stdoutStream = fs.createWriteStream(${JSON.stringify(stdoutFile)});`,
	      `var stderrStream = fs.createWriteStream(${JSON.stringify(stderrFile)});`,
	      'childProcess.stdout.pipe(stdoutStream, {end: false});',
	      'childProcess.stderr.pipe(stderrStream, {end: false});',
	      'childProcess.stdout.pipe(process.stdout);',
	      'childProcess.stderr.pipe(process.stderr);'
	    ].join('\n') +
	      (pipe ? `\nchildProcess.stdin.end(${JSON.stringify(pipe)});\n` : '\n') +
	      [
	        'var stdoutEnded = false, stderrEnded = false;',
	        'function tryClosingStdout(){ if(stdoutEnded){ stdoutStream.end(); } }',
	        'function tryClosingStderr(){ if(stderrEnded){ stderrStream.end(); } }',
	        'childProcess.stdout.on(\'end\', function(){ stdoutEnded = true; tryClosingStdout(); });',
	        'childProcess.stderr.on(\'end\', function(){ stderrEnded = true; tryClosingStderr(); });'
	      ].join('\n');

	    fs.writeFileSync(scriptFile, script);

	    if (opts.silent) {
	      opts.stdio = 'ignore';
	    } else {
	      opts.stdio = [0, 1, 2];
	    }

	    // Welcome to the future
	    try {
	      child.execSync(execCommand, opts);
	    } catch (e) {
	      // Clean up immediately if we have an exception
	      try { common.unlinkSync(scriptFile); } catch (e2) {}
	      try { common.unlinkSync(stdoutFile); } catch (e2) {}
	      try { common.unlinkSync(stderrFile); } catch (e2) {}
	      try { common.unlinkSync(codeFile); } catch (e2) {}
	      throw e;
	    }
	  } else {
	    cmd += ` > ${stdoutFile} 2> ${stderrFile}`; // works on both win/unix

	    script = [
	      'var child = require(\'child_process\')',
	      '  , fs = require(\'fs\');',
	      `var childProcess = child.exec(${JSON.stringify(cmd)}, ${optString}, function(err) {`,
	      `  var fname = ${JSON.stringify(codeFile)};`,
	      '  if (!err) {',
	      '    fs.writeFileSync(fname, "0");',
	      '  } else if (err.code === undefined) {',
	      '    fs.writeFileSync(fname, "1");',
	      '  } else {',
	      '    fs.writeFileSync(fname, err.code.toString());',
	      '  }',
	      '});'
	    ].join('\n') +
	      (pipe ? `\nchildProcess.stdin.end(${JSON.stringify(pipe)});\n` : '\n');

	    fs.writeFileSync(scriptFile, script);

	    child.exec(execCommand, opts);

	    // The wait loop
	    // sleepFile is used as a dummy I/O op to mitigate unnecessary CPU usage
	    // (tried many I/O sync ops, writeFileSync() seems to be only one that is effective in reducing
	    // CPU usage, though apparently not so much on Windows)
	    while (!fs.existsSync(codeFile)) { updateStream(stdoutFile); fs.writeFileSync(sleepFile, 'a'); }
	    while (!fs.existsSync(stdoutFile)) { updateStream(stdoutFile); fs.writeFileSync(sleepFile, 'a'); }
	    while (!fs.existsSync(stderrFile)) { updateStream(stderrFile); fs.writeFileSync(sleepFile, 'a'); }
	    try { common.unlinkSync(sleepFile); } catch (e) {}
	  }

	  // At this point codeFile exists, but it's not necessarily flushed yet.
	  // Keep reading it until it is.
	  let code = parseInt('', 10);
	  while (isNaN(code)) {
	    code = parseInt(fs.readFileSync(codeFile, 'utf8'), 10);
	  }

	  const stdout = fs.readFileSync(stdoutFile, 'utf8');
	  const stderr = fs.readFileSync(stderrFile, 'utf8');

	  // No biggie if we can't erase the files now -- they're in a temp dir anyway
	  try { common.unlinkSync(scriptFile); } catch (e) {}
	  try { common.unlinkSync(stdoutFile); } catch (e) {}
	  try { common.unlinkSync(stderrFile); } catch (e) {}
	  try { common.unlinkSync(codeFile); } catch (e) {}

	  if (code !== 0) {
	    common.error('', code, { continue: true });
	  }
	  const obj = common.ShellString(stdout, stderr, code);
	  return obj;
    } // execSync()

	// Wrapper around exec() to enable echoing output to console in real time
    function execAsync(cmd, opts, pipe, callback) {
	  let stdout = '';
	  let stderr = '';

	  opts = common.extend({
	    silent: common.config.silent,
	    cwd: _pwd().toString(),
	    env: ({ NODE_ENV: 'production' }),
	    maxBuffer: DEFAULT_MAXBUFFER_SIZE
	  }, opts);

	  const c = child.exec(cmd, opts, (err) => {
	    if (callback) {
	      if (!err) {
	        callback(0, stdout, stderr);
	      } else if (err.code === undefined) {
	        // See issue #536
	        callback(1, stdout, stderr);
	      } else {
	        callback(err.code, stdout, stderr);
	      }
	    }
	  });

	  if (pipe) c.stdin.end(pipe);

	  c.stdout.on('data', (data) => {
	    stdout += data;
	    if (!opts.silent) process.stdout.write(data);
	  });

	  c.stderr.on('data', (data) => {
	    stderr += data;
	    if (!opts.silent) process.stderr.write(data);
	  });

	  return c;
    }

	// @
	// @ ### exec(command [, options] [, callback])
	// @ Available options (all `false` by default):
	// @
	// @ + `async`: Asynchronous execution. If a callback is provided, it will be set to
	// @   `true`, regardless of the passed value.
	// @ + `silent`: Do not echo program output to console.
	// @ + and any option available to Node.js's
	// @   [child_process.exec()](https://nodejs.org/api/child_process.html#child_process_child_process_exec_command_options_callback)
	// @
	// @ Examples:
	// @
	// @ ```javascript
	// @ var version = exec('node --version', {silent:true}).stdout;
	// @
	// @ var child = exec('some_long_running_process', {async:true});
	// @ child.stdout.on('data', function(data) {
	// @   /* ... do something with data ... */
	// @ });
	// @
	// @ exec('some_long_running_process', function(code, stdout, stderr) {
	// @   console.log('Exit code:', code);
	// @   console.log('Program output:', stdout);
	// @   console.log('Program stderr:', stderr);
	// @ });
	// @ ```
	// @
	// @ Executes the given `command` _synchronously_, unless otherwise specified.  When in synchronous
	// @ mode, this returns a ShellString (compatible with ShellJS v0.6.x, which returns an object
	// @ of the form `{ code:..., stdout:... , stderr:... }`). Otherwise, this returns the child process
	// @ object, and the `callback` gets the arguments `(code, stdout, stderr)`.
	// @
	// @ Not seeing the behavior you want? `exec()` runs everything through `sh`
	// @ by default (or `cmd.exe` on Windows), which differs from `bash`. If you
	// @ need bash-specific behavior, try out the `{shell: 'path/to/bash'}` option.
	// @
	// @ **Note:** For long-lived processes, it's best to run `exec()` asynchronously as
	// @ the current synchronous implementation uses a lot of CPU. This should be getting
	// @ fixed soon.
    function _exec(command, options, callback) {
	  options = options || {};
	  if (!command) common.error('must specify command');

	  const pipe = common.readFromPipe();

	  // Callback is defined instead of options.
	  if (typeof options === 'function') {
	    callback = options;
	    options = { async: true };
	  }

	  // Callback is defined with options.
	  if (typeof options === 'object' && typeof callback === 'function') {
	    options.async = true;
	  }

	  options = common.extend({
	    silent: common.config.silent,
	    async: false
	  }, options);

	  try {
	    if (options.async) {
	      return execAsync(command, options, pipe, callback);
	    }
	      return execSync(command, options, pipe);
	  } catch (e) {
	    common.error('internal error');
	  }
    }
    module.exports = _exec;
/** */ }),
/* 382 */
/** */ (function (module, exports, __webpack_require__) {
    const common = __webpack_require__(355);
    const os = __webpack_require__(338);
    const fs = __webpack_require__(340);

    common.register('tempdir', _tempDir, {
	  allowGlobbing: false,
	  wrapOutput: false
    });

	// Returns false if 'dir' is not a writeable directory, 'dir' otherwise
    function writeableDir(dir) {
	  if (!dir || !fs.existsSync(dir)) return false;

	  if (!fs.statSync(dir).isDirectory()) return false;

	  const testFile = `${dir}/${common.randomFileName()}`;
	  try {
	    fs.writeFileSync(testFile, ' ');
	    common.unlinkSync(testFile);
	    return dir;
	  } catch (e) {
	    /* istanbul ignore next */
	    return false;
	  }
    }


	// @
	// @ ### tempdir()
	// @
	// @ Examples:
	// @
	// @ ```javascript
	// @ var tmp = tempdir(); // "/tmp" for most *nix platforms
	// @ ```
	// @
	// @ Searches and returns string containing a writeable, platform-dependent temporary directory.
	// @ Follows Python's [tempfile algorithm](http://docs.python.org/library/tempfile.html#tempfile.tempdir).
    function _tempDir() {
	  const state = common.state;
	  if (state.tempDir) return state.tempDir; // from cache

	  state.tempDir = writeableDir(os.tmpdir && os.tmpdir()) || // node 0.10+
	                  writeableDir(os.tmpDir && os.tmpDir()) || // node 0.8+
	                  writeableDir(({ NODE_ENV: 'production' }).TMPDIR) ||
	                  writeableDir(({ NODE_ENV: 'production' }).TEMP) ||
	                  writeableDir(({ NODE_ENV: 'production' }).TMP) ||
	                  writeableDir(({ NODE_ENV: 'production' }).Wimp$ScrapDir) || // RiscOS
	                  writeableDir('C:\\TEMP') || // Windows
	                  writeableDir('C:\\TMP') || // Windows
	                  writeableDir('\\TEMP') || // Windows
	                  writeableDir('\\TMP') || // Windows
	                  writeableDir('/tmp') ||
	                  writeableDir('/var/tmp') ||
	                  writeableDir('/usr/tmp') ||
	                  writeableDir('.'); // last resort

	  return state.tempDir;
    }
    module.exports = _tempDir;
/** */ }),
/* 383 */
/** */ (function (module, exports, __webpack_require__) {
    const path = __webpack_require__(342);
    const common = __webpack_require__(355);

    common.register('pwd', _pwd, {
	  allowGlobbing: false
    });

	// @
	// @ ### pwd()
	// @ Returns the current directory.
    function _pwd() {
	  const pwd = path.resolve(process.cwd());
	  return pwd;
    }
    module.exports = _pwd;
/** */ }),
/* 384 */
/** */ (function (module, exports) {
    module.exports = require('child_process');
/** */ }),
/* 385 */
/** */ (function (module, exports, __webpack_require__) {
    const fs = __webpack_require__(340);
    const path = __webpack_require__(342);
    const common = __webpack_require__(355);
    const _ls = __webpack_require__(386);

    common.register('find', _find, {});

	// @
	// @ ### find(path [, path ...])
	// @ ### find(path_array)
	// @ Examples:
	// @
	// @ ```javascript
	// @ find('src', 'lib');
	// @ find(['src', 'lib']); // same as above
	// @ find('.').filter(function(file) { return file.match(/\.js$/); });
	// @ ```
	// @
	// @ Returns array of all files (however deep) in the given paths.
	// @
	// @ The main difference from `ls('-R', path)` is that the resulting file names
	// @ include the base directories, e.g. `lib/resources/file1` instead of just `file1`.
    function _find(options, paths) {
	  if (!paths) {
	    common.error('no path specified');
	  } else if (typeof paths === 'string') {
	    paths = [].slice.call(arguments, 1);
	  }

	  const list = [];

	  function pushFile(file) {
	    if (process.platform === 'win32') {
	      file = file.replace(/\\/g, '/');
	    }
	    list.push(file);
	  }

	  // why not simply do ls('-R', paths)? because the output wouldn't give the base dirs
	  // to get the base dir in the output, we need instead ls('-R', 'dir/*') for every directory

	  paths.forEach((file) => {
	    let stat;
	    try {
	      stat = fs.statSync(file);
	    } catch (e) {
	      common.error(`no such file or directory: ${file}`);
	    }

	    pushFile(file);

	    if (stat.isDirectory()) {
	      _ls({ recursive: true, all: true }, file).forEach((subfile) => {
	        pushFile(path.join(file, subfile));
	      });
	    }
	  });

	  return list;
    }
    module.exports = _find;
/** */ }),
/* 386 */
/** */ (function (module, exports, __webpack_require__) {
    const path = __webpack_require__(342);
    const fs = __webpack_require__(340);
    const common = __webpack_require__(355);
    const glob = __webpack_require__(356);

    const globPatternRecursive = `${path.sep}**`;

    common.register('ls', _ls, {
	  cmdOptions: {
	    R: 'recursive',
	    A: 'all',
	    L: 'link',
	    a: 'all_deprecated',
	    d: 'directory',
	    l: 'long'
	  }
    });

	// @
	// @ ### ls([options,] [path, ...])
	// @ ### ls([options,] path_array)
	// @ Available options:
	// @
	// @ + `-R`: recursive
	// @ + `-A`: all files (include files beginning with `.`, except for `.` and `..`)
	// @ + `-L`: follow symlinks
	// @ + `-d`: list directories themselves, not their contents
	// @ + `-l`: list objects representing each file, each with fields containing `ls
	// @         -l` output fields. See
	// @         [fs.Stats](https://nodejs.org/api/fs.html#fs_class_fs_stats)
	// @         for more info
	// @
	// @ Examples:
	// @
	// @ ```javascript
	// @ ls('projs/*.js');
	// @ ls('-R', '/users/me', '/tmp');
	// @ ls('-R', ['/users/me', '/tmp']); // same as above
	// @ ls('-l', 'file.txt'); // { name: 'file.txt', mode: 33188, nlink: 1, ...}
	// @ ```
	// @
	// @ Returns array of files in the given path, or in current directory if no path provided.
    function _ls(options, paths) {
	  if (options.all_deprecated) {
	    // We won't support the -a option as it's hard to image why it's useful
	    // (it includes '.' and '..' in addition to '.*' files)
	    // For backwards compatibility we'll dump a deprecated message and proceed as before
	    common.log('ls: Option -a is deprecated. Use -A instead');
	    options.all = true;
	  }

	  if (!paths) {
	    paths = ['.'];
	  } else {
	    paths = [].slice.call(arguments, 1);
	  }

	  const list = [];

	  function pushFile(abs, relName, stat) {
	    if (process.platform === 'win32') {
	      relName = relName.replace(/\\/g, '/');
	    }
	    if (options.long) {
	      stat = stat || (options.link ? fs.statSync(abs) : fs.lstatSync(abs));
	      list.push(addLsAttributes(relName, stat));
	    } else {
	      // list.push(path.relative(rel || '.', file));
	      list.push(relName);
	    }
	  }

	  paths.forEach((p) => {
	    let stat;

	    try {
	      stat = options.link ? fs.statSync(p) : fs.lstatSync(p);
	    } catch (e) {
	      common.error(`no such file or directory: ${p}`, 2, { continue: true });
	      return;
	    }

	    // If the stat succeeded
	    if (stat.isDirectory() && !options.directory) {
	      if (options.recursive) {
	        // use glob, because it's simple
	        glob.sync(p + globPatternRecursive, { dot: options.all, follow: options.link })
	          .forEach((item) => {
	            // Glob pattern returns the directory itself and needs to be filtered out.
	            if (path.relative(p, item)) {
	              pushFile(item, path.relative(p, item));
	            }
	          });
	      } else if (options.all) {
	        // use fs.readdirSync, because it's fast
	        fs.readdirSync(p).forEach((item) => {
	          pushFile(path.join(p, item), item);
	        });
	      } else {
	        // use fs.readdirSync and then filter out secret files
	        fs.readdirSync(p).forEach((item) => {
	          if (item[0] !== '.') {
	            pushFile(path.join(p, item), item);
	          }
	        });
	      }
	    } else {
	      pushFile(p, p, stat);
	    }
	  });

	  // Add methods, to make this more compatible with ShellStrings
	  return list;
    }

    function addLsAttributes(pathName, stats) {
	  // Note: this object will contain more information than .toString() returns
	  stats.name = pathName;
	  stats.toString = function () {
	    // Return a string resembling unix's `ls -l` format
	    return [this.mode, this.nlink, this.uid, this.gid, this.size, this.mtime, this.name].join(' ');
	  };
	  return stats;
    }

    module.exports = _ls;
/** */ }),
/* 387 */
/** */ (function (module, exports, __webpack_require__) {
    const common = __webpack_require__(355);
    const fs = __webpack_require__(340);

    common.register('grep', _grep, {
	  globStart: 2, // don't glob-expand the regex
	  canReceivePipe: true,
	  cmdOptions: {
	    v: 'inverse',
	    l: 'nameOnly'
	  }
    });

	// @
	// @ ### grep([options,] regex_filter, file [, file ...])
	// @ ### grep([options,] regex_filter, file_array)
	// @ Available options:
	// @
	// @ + `-v`: Inverse the sense of the regex and print the lines not matching the criteria.
	// @ + `-l`: Print only filenames of matching files
	// @
	// @ Examples:
	// @
	// @ ```javascript
	// @ grep('-v', 'GLOBAL_VARIABLE', '*.js');
	// @ grep('GLOBAL_VARIABLE', '*.js');
	// @ ```
	// @
	// @ Reads input string from given files and returns a string containing all lines of the
	// @ file that match the given `regex_filter`.
    function _grep(options, regex, files) {
	  // Check if this is coming from a pipe
	  const pipe = common.readFromPipe();

	  if (!files && !pipe) common.error('no paths given', 2);

	  files = [].slice.call(arguments, 2);

	  if (pipe) {
	    files.unshift('-');
	  }

	  const grep = [];
	  files.forEach((file) => {
	    if (!fs.existsSync(file) && file !== '-') {
	      common.error(`no such file or directory: ${file}`, 2, { continue: true });
	      return;
	    }

	    const contents = file === '-' ? pipe : fs.readFileSync(file, 'utf8');
	    const lines = contents.split(/\r*\n/);
	    if (options.nameOnly) {
	      if (contents.match(regex)) {
	        grep.push(file);
	      }
	    } else {
	      lines.forEach((line) => {
	        const matched = line.match(regex);
	        if ((options.inverse && !matched) || (!options.inverse && matched)) {
	          grep.push(line);
	        }
	      });
	    }
	  });

	  return `${grep.join('\n')}\n`;
    }
    module.exports = _grep;
/** */ }),
/* 388 */
/** */ (function (module, exports, __webpack_require__) {
    const common = __webpack_require__(355);
    const fs = __webpack_require__(340);

    common.register('head', _head, {
	  canReceivePipe: true,
	  cmdOptions: {
	    n: 'numLines'
	  }
    });

	// This reads n or more lines, or the entire file, whichever is less.
    function readSomeLines(file, numLines) {
	  const buf = common.buffer();
	  const bufLength = buf.length;
	  let bytesRead = bufLength;
	  let pos = 0;
	  let fdr = null;

	  try {
	    fdr = fs.openSync(file, 'r');
	  } catch (e) {
	    common.error(`cannot read file: ${file}`);
	  }

	  let numLinesRead = 0;
	  let ret = '';
	  while (bytesRead === bufLength && numLinesRead < numLines) {
	    bytesRead = fs.readSync(fdr, buf, 0, bufLength, pos);
	    const bufStr = buf.toString('utf8', 0, bytesRead);
	    numLinesRead += bufStr.split('\n').length - 1;
	    ret += bufStr;
	    pos += bytesRead;
	  }

	  fs.closeSync(fdr);
	  return ret;
    }
	// @
	// @ ### head([{'-n': \<num\>},] file [, file ...])
	// @ ### head([{'-n': \<num\>},] file_array)
	// @ Available options:
	// @
	// @ + `-n <num>`: Show the first `<num>` lines of the files
	// @
	// @ Examples:
	// @
	// @ ```javascript
	// @ var str = head({'-n': 1}, 'file*.txt');
	// @ var str = head('file1', 'file2');
	// @ var str = head(['file1', 'file2']); // same as above
	// @ ```
	// @
	// @ Read the start of a file.
    function _head(options, files) {
	  let head = [];
	  const pipe = common.readFromPipe();

	  if (!files && !pipe) common.error('no paths given');

	  let idx = 1;
	  if (options.numLines === true) {
	    idx = 2;
	    options.numLines = Number(arguments[1]);
	  } else if (options.numLines === false) {
	    options.numLines = 10;
	  }
	  files = [].slice.call(arguments, idx);

	  if (pipe) {
	    files.unshift('-');
	  }

	  let shouldAppendNewline = false;
	  files.forEach((file) => {
	    if (file !== '-') {
	      if (!fs.existsSync(file)) {
	        common.error(`no such file or directory: ${file}`, { continue: true });
	        return;
	      } else if (fs.statSync(file).isDirectory()) {
	        common.error(`error reading '${file}': Is a directory`, {
	          continue: true
	        });
	        return;
	      }
	    }

	    let contents;
	    if (file === '-') {
	      contents = pipe;
	    } else if (options.numLines < 0) {
	      contents = fs.readFileSync(file, 'utf8');
	    } else {
	      contents = readSomeLines(file, options.numLines);
	    }

	    const lines = contents.split('\n');
	    const hasTrailingNewline = (lines[lines.length - 1] === '');
	    if (hasTrailingNewline) {
	      lines.pop();
	    }
	    shouldAppendNewline = (hasTrailingNewline || options.numLines < lines.length);

	    head = head.concat(lines.slice(0, options.numLines));
	  });

	  if (shouldAppendNewline) {
	    head.push(''); // to add a trailing newline once we join
	  }
	  return head.join('\n');
    }
    module.exports = _head;
/** */ }),
/* 389 */
/** */ (function (module, exports, __webpack_require__) {
    const fs = __webpack_require__(340);
    const path = __webpack_require__(342);
    const common = __webpack_require__(355);

    common.register('ln', _ln, {
	  cmdOptions: {
	    s: 'symlink',
	    f: 'force'
	  }
    });

	// @
	// @ ### ln([options,] source, dest)
	// @ Available options:
	// @
	// @ + `-s`: symlink
	// @ + `-f`: force
	// @
	// @ Examples:
	// @
	// @ ```javascript
	// @ ln('file', 'newlink');
	// @ ln('-sf', 'file', 'existing');
	// @ ```
	// @
	// @ Links source to dest. Use -f to force the link, should dest already exist.
    function _ln(options, source, dest) {
	  if (!source || !dest) {
	    common.error('Missing <source> and/or <dest>');
	  }

	  source = String(source);
	  const sourcePath = path.normalize(source).replace(RegExp(`${path.sep}$`), '');
	  const isAbsolute = (path.resolve(source) === sourcePath);
	  dest = path.resolve(process.cwd(), String(dest));

	  if (fs.existsSync(dest)) {
	    if (!options.force) {
	      common.error('Destination file exists', { continue: true });
	    }

	    fs.unlinkSync(dest);
	  }

	  if (options.symlink) {
	    const isWindows = process.platform === 'win32';
	    let linkType = isWindows ? 'file' : null;
	    const resolvedSourcePath = isAbsolute ? sourcePath : path.resolve(process.cwd(), path.dirname(dest), source);
	    if (!fs.existsSync(resolvedSourcePath)) {
	      common.error('Source file does not exist', { continue: true });
	    } else if (isWindows && fs.statSync(resolvedSourcePath).isDirectory()) {
	      linkType = 'junction';
	    }

	    try {
	      fs.symlinkSync(linkType === 'junction' ? resolvedSourcePath : source, dest, linkType);
	    } catch (err) {
	      common.error(err.message);
	    }
	  } else {
	    if (!fs.existsSync(source)) {
	      common.error('Source file does not exist', { continue: true });
	    }
	    try {
	      fs.linkSync(source, dest);
	    } catch (err) {
	      common.error(err.message);
	    }
	  }
	  return '';
    }
    module.exports = _ln;
/** */ }),
/* 390 */
/** */ (function (module, exports, __webpack_require__) {
    const common = __webpack_require__(355);
    const fs = __webpack_require__(340);
    const path = __webpack_require__(342);

    common.register('mkdir', _mkdir, {
	  cmdOptions: {
	    p: 'fullpath'
	  }
    });

	// Recursively creates 'dir'
    function mkdirSyncRecursive(dir) {
	  const baseDir = path.dirname(dir);

	  // Prevents some potential problems arising from malformed UNCs or
	  // insufficient permissions.
	  /* istanbul ignore next */
	  if (baseDir === dir) {
	    common.error(`dirname() failed: [${dir}]`);
	  }

	  // Base dir exists, no recursion necessary
	  if (fs.existsSync(baseDir)) {
	    fs.mkdirSync(dir, parseInt('0777', 8));
	    return;
	  }

	  // Base dir does not exist, go recursive
	  mkdirSyncRecursive(baseDir);

	  // Base dir created, can create dir
	  fs.mkdirSync(dir, parseInt('0777', 8));
    }

	// @
	// @ ### mkdir([options,] dir [, dir ...])
	// @ ### mkdir([options,] dir_array)
	// @ Available options:
	// @
	// @ + `-p`: full path (will create intermediate dirs if necessary)
	// @
	// @ Examples:
	// @
	// @ ```javascript
	// @ mkdir('-p', '/tmp/a/b/c/d', '/tmp/e/f/g');
	// @ mkdir('-p', ['/tmp/a/b/c/d', '/tmp/e/f/g']); // same as above
	// @ ```
	// @
	// @ Creates directories.
    function _mkdir(options, dirs) {
	  if (!dirs) common.error('no paths given');

	  if (typeof dirs === 'string') {
	    dirs = [].slice.call(arguments, 1);
	  }
	  // if it's array leave it as it is

	  dirs.forEach((dir) => {
	    try {
	      const stat = fs.lstatSync(dir);
	      if (!options.fullpath) {
	        common.error(`path already exists: ${dir}`, { continue: true });
	      } else if (stat.isFile()) {
	        common.error(`cannot create directory ${dir}: File exists`, { continue: true });
	      }
	      return; // skip dir
	    } catch (e) {
	      // do nothing
	    }

	    // Base dir does not exist, and no -p option given
	    const baseDir = path.dirname(dir);
	    if (!fs.existsSync(baseDir) && !options.fullpath) {
	      common.error(`no such file or directory: ${baseDir}`, { continue: true });
	      return; // skip dir
	    }

	    try {
	      if (options.fullpath) {
	        mkdirSyncRecursive(path.resolve(dir));
	      } else {
	        fs.mkdirSync(dir, parseInt('0777', 8));
	      }
	    } catch (e) {
	      let reason;
	      if (e.code === 'EACCES') {
	        reason = 'Permission denied';
	      } else if (e.code === 'ENOTDIR' || e.code === 'ENOENT') {
	        reason = 'Not a directory';
	      } else {
	        /* istanbul ignore next */
	        throw e;
	      }
	      common.error(`cannot create directory ${dir}: ${reason}`, { continue: true });
	    }
	  });
	  return '';
    } // mkdir
    module.exports = _mkdir;
/** */ }),
/* 391 */
/** */ (function (module, exports, __webpack_require__) {
    const fs = __webpack_require__(340);
    const path = __webpack_require__(342);
    const common = __webpack_require__(355);
    const cp = __webpack_require__(377);
    const rm = __webpack_require__(392);

    common.register('mv', _mv, {
	  cmdOptions: {
	    f: '!no_force',
	    n: 'no_force'
	  }
    });

	// Checks if cureent file was created recently
    function checkRecentCreated(sources, index) {
	  const lookedSource = sources[index];
	  return sources.slice(0, index).some((src) => path.basename(src) === path.basename(lookedSource));
    }

	// @
	// @ ### mv([options ,] source [, source ...], dest')
	// @ ### mv([options ,] source_array, dest')
	// @ Available options:
	// @
	// @ + `-f`: force (default behavior)
	// @ + `-n`: no-clobber
	// @
	// @ Examples:
	// @
	// @ ```javascript
	// @ mv('-n', 'file', 'dir/');
	// @ mv('file1', 'file2', 'dir/');
	// @ mv(['file1', 'file2'], 'dir/'); // same as above
	// @ ```
	// @
	// @ Moves files.
    function _mv(options, sources, dest) {
	  // Get sources, dest
	  if (arguments.length < 3) {
	    common.error('missing <source> and/or <dest>');
	  } else if (arguments.length > 3) {
	    sources = [].slice.call(arguments, 1, arguments.length - 1);
	    dest = arguments[arguments.length - 1];
	  } else if (typeof sources === 'string') {
	    sources = [sources];
	  } else {
	    // TODO(nate): figure out if we actually need this line
	    common.error('invalid arguments');
	  }

	  const exists = fs.existsSync(dest);
	  const stats = exists && fs.statSync(dest);

	  // Dest is not existing dir, but multiple sources given
	  if ((!exists || !stats.isDirectory()) && sources.length > 1) {
	    common.error('dest is not a directory (too many sources)');
	  }

	  // Dest is an existing file, but no -f given
	  if (exists && stats.isFile() && options.no_force) {
	    common.error(`dest file already exists: ${dest}`);
	  }

	  sources.forEach((src, srcIndex) => {
	    if (!fs.existsSync(src)) {
	      common.error(`no such file or directory: ${src}`, { continue: true });
	      return; // skip file
	    }

	    // If here, src exists

	    // When copying to '/path/dir':
	    //    thisDest = '/path/dir/file1'
	    let thisDest = dest;
	    if (fs.existsSync(dest) && fs.statSync(dest).isDirectory()) {
	      thisDest = path.normalize(`${dest}/${path.basename(src)}`);
	    }

	    const thisDestExists = fs.existsSync(thisDest);

	    if (thisDestExists && checkRecentCreated(sources, srcIndex)) {
	      // cannot overwrite file created recently in current execution, but we want to continue copying other files
	      if (!options.no_force) {
	        common.error(`will not overwrite just-created '${thisDest}' with '${src}'`, { continue: true });
	      }
	      return;
	    }

	    if (fs.existsSync(thisDest) && options.no_force) {
	      common.error(`dest file already exists: ${thisDest}`, { continue: true });
	      return; // skip file
	    }

	    if (path.resolve(src) === path.dirname(path.resolve(thisDest))) {
	      common.error(`cannot move to self: ${src}`, { continue: true });
	      return; // skip file
	    }

	    try {
	      fs.renameSync(src, thisDest);
	    } catch (e) {
	      /* istanbul ignore next */
	      if (e.code === 'EXDEV') {
	        // If we're trying to `mv` to an external partition, we'll actually need
	        // to perform a copy and then clean up the original file. If either the
	        // copy or the rm fails with an exception, we should allow this
	        // exception to pass up to the top level.
	        cp('-r', src, thisDest);
	        rm('-rf', src);
	      }
	    }
	  }); // forEach(src)
	  return '';
    } // mv
    module.exports = _mv;
/** */ }),
/* 392 */
/** */ (function (module, exports, __webpack_require__) {
    const common = __webpack_require__(355);
    const fs = __webpack_require__(340);

    common.register('rm', _rm, {
	  cmdOptions: {
	    f: 'force',
	    r: 'recursive',
	    R: 'recursive'
	  }
    });

	// Recursively removes 'dir'
	// Adapted from https://github.com/ryanmcgrath/wrench-js
	//
	// Copyright (c) 2010 Ryan McGrath
	// Copyright (c) 2012 Artur Adib
	//
	// Licensed under the MIT License
	// http://www.opensource.org/licenses/mit-license.php
    function rmdirSyncRecursive(dir, force, fromSymlink) {
	  let files;

	  files = fs.readdirSync(dir);

	  // Loop through and delete everything in the sub-tree after checking it
	  for (let i = 0; i < files.length; i++) {
	    const file = `${dir}/${files[i]}`;
	    const currFile = fs.lstatSync(file);

	    if (currFile.isDirectory()) { // Recursive function back to the beginning
	      rmdirSyncRecursive(file, force);
	    } else { // Assume it's a file - perhaps a try/catch belongs here?
	      if (force || isWriteable(file)) {
	        try {
	          common.unlinkSync(file);
	        } catch (e) {
	          /* istanbul ignore next */
	          common.error(`could not remove file (code ${e.code}): ${file}`, {
	            continue: true
	          });
	        }
	      }
	    }
	  }

	  // if was directory was referenced through a symbolic link,
	  // the contents should be removed, but not the directory itself
	  if (fromSymlink) return;

	  // Now that we know everything in the sub-tree has been deleted, we can delete the main directory.
	  // Huzzah for the shopkeep.

	  let result;
	  try {
	    // Retry on windows, sometimes it takes a little time before all the files in the directory are gone
	    const start = Date.now();

	    // TODO: replace this with a finite loop
	    for (;;) {
	      try {
	        result = fs.rmdirSync(dir);
	        if (fs.existsSync(dir)) throw { code: 'EAGAIN' };
	        break;
	      } catch (er) {
	        /* istanbul ignore next */
	        // In addition to error codes, also check if the directory still exists and loop again if true
	        if (process.platform === 'win32' && (er.code === 'ENOTEMPTY' || er.code === 'EBUSY' || er.code === 'EPERM' || er.code === 'EAGAIN')) {
	          if (Date.now() - start > 1000) throw er;
	        } else if (er.code === 'ENOENT') {
	          // Directory did not exist, deletion was successful
	          break;
	        } else {
	          throw er;
	        }
	      }
	    }
	  } catch (e) {
	    common.error(`could not remove directory (code ${e.code}): ${dir}`, { continue: true });
	  }

	  return result;
    } // rmdirSyncRecursive

	// Hack to determine if file has write permissions for current user
	// Avoids having to check user, group, etc, but it's probably slow
    function isWriteable(file) {
	  let writePermission = true;
	  try {
	    const __fd = fs.openSync(file, 'a');
	    fs.closeSync(__fd);
	  } catch (e) {
	    writePermission = false;
	  }

	  return writePermission;
    }

    function handleFile(file, options) {
	  if (options.force || isWriteable(file)) {
	    // -f was passed, or file is writable, so it can be removed
	    common.unlinkSync(file);
	  } else {
	    common.error(`permission denied: ${file}`, { continue: true });
	  }
    }

    function handleDirectory(file, options) {
	  if (options.recursive) {
	    // -r was passed, so directory can be removed
	    rmdirSyncRecursive(file, options.force);
	  } else {
	    common.error('path is a directory', { continue: true });
	  }
    }

    function handleSymbolicLink(file, options) {
	  let stats;
	  try {
	    stats = fs.statSync(file);
	  } catch (e) {
	    // symlink is broken, so remove the symlink itself
	    common.unlinkSync(file);
	    return;
	  }

	  if (stats.isFile()) {
	    common.unlinkSync(file);
	  } else if (stats.isDirectory()) {
	    if (file[file.length - 1] === '/') {
	      // trailing separator, so remove the contents, not the link
	      if (options.recursive) {
	        // -r was passed, so directory can be removed
	        const fromSymlink = true;
	        rmdirSyncRecursive(file, options.force, fromSymlink);
	      } else {
	        common.error('path is a directory', { continue: true });
	      }
	    } else {
	      // no trailing separator, so remove the link
	      common.unlinkSync(file);
	    }
	  }
    }

    function handleFIFO(file) {
	  common.unlinkSync(file);
    }

	// @
	// @ ### rm([options,] file [, file ...])
	// @ ### rm([options,] file_array)
	// @ Available options:
	// @
	// @ + `-f`: force
	// @ + `-r, -R`: recursive
	// @
	// @ Examples:
	// @
	// @ ```javascript
	// @ rm('-rf', '/tmp/*');
	// @ rm('some_file.txt', 'another_file.txt');
	// @ rm(['some_file.txt', 'another_file.txt']); // same as above
	// @ ```
	// @
	// @ Removes files.
    function _rm(options, files) {
	  if (!files) common.error('no paths given');

	  // Convert to array
	  files = [].slice.call(arguments, 1);

	  files.forEach((file) => {
	    let lstats;
	    try {
	      const filepath = (file[file.length - 1] === '/')
	        ? file.slice(0, -1) // remove the '/' so lstatSync can detect symlinks
	        : file;
	      lstats = fs.lstatSync(filepath); // test for existence
	    } catch (e) {
	      // Path does not exist, no force flag given
	      if (!options.force) {
	        common.error(`no such file or directory: ${file}`, { continue: true });
	      }
	      return; // skip file
	    }

	    // If here, path exists
	    if (lstats.isFile()) {
	      handleFile(file, options);
	    } else if (lstats.isDirectory()) {
	      handleDirectory(file, options);
	    } else if (lstats.isSymbolicLink()) {
	      handleSymbolicLink(file, options);
	    } else if (lstats.isFIFO()) {
	      handleFIFO(file);
	    }
	  }); // forEach(file)
	  return '';
    } // rm
    module.exports = _rm;
/** */ }),
/* 393 */
/** */ (function (module, exports) {

	// see dirs.js


/** */ }),
/* 394 */
/** */ (function (module, exports) {

	// see dirs.js


/** */ }),
/* 395 */
/** */ (function (module, exports, __webpack_require__) {
    const common = __webpack_require__(355);
    const fs = __webpack_require__(340);

    common.register('sed', _sed, {
	  globStart: 3, // don't glob-expand regexes
	  canReceivePipe: true,
	  cmdOptions: {
	    i: 'inplace'
	  }
    });

	// @
	// @ ### sed([options,] search_regex, replacement, file [, file ...])
	// @ ### sed([options,] search_regex, replacement, file_array)
	// @ Available options:
	// @
	// @ + `-i`: Replace contents of 'file' in-place. _Note that no backups will be created!_
	// @
	// @ Examples:
	// @
	// @ ```javascript
	// @ sed('-i', 'PROGRAM_VERSION', 'v0.1.3', 'source.js');
	// @ sed(/.*DELETE_THIS_LINE.*\n/, '', 'source.js');
	// @ ```
	// @
	// @ Reads an input string from `files` and performs a JavaScript `replace()` on the input
	// @ using the given search regex and replacement string or function. Returns the new string after replacement.
	// @
	// @ Note:
	// @
	// @ Like unix `sed`, ShellJS `sed` supports capture groups. Capture groups are specified
	// @ using the `$n` syntax:
	// @
	// @ ```javascript
	// @ sed(/(\w+)\s(\w+)/, '$2, $1', 'file.txt');
	// @ ```
    function _sed(options, regex, replacement, files) {
	  // Check if this is coming from a pipe
	  const pipe = common.readFromPipe();

	  if (typeof replacement !== 'string' && typeof replacement !== 'function') {
	    if (typeof replacement === 'number') {
	      replacement = replacement.toString(); // fallback
	    } else {
	      common.error('invalid replacement string');
	    }
	  }

	  // Convert all search strings to RegExp
	  if (typeof regex === 'string') {
	    regex = RegExp(regex);
	  }

	  if (!files && !pipe) {
	    common.error('no files given');
	  }

	  files = [].slice.call(arguments, 3);

	  if (pipe) {
	    files.unshift('-');
	  }

	  const sed = [];
	  files.forEach((file) => {
	    if (!fs.existsSync(file) && file !== '-') {
	      common.error(`no such file or directory: ${file}`, 2, { continue: true });
	      return;
	    }

	    const contents = file === '-' ? pipe : fs.readFileSync(file, 'utf8');
	    const lines = contents.split(/\r*\n/);
	    const result = lines.map((line) => line.replace(regex, replacement)).join('\n');

	    sed.push(result);

	    if (options.inplace) {
	      fs.writeFileSync(file, result, 'utf8');
	    }
	  });

	  return sed.join('\n');
    }
    module.exports = _sed;
/** */ }),
/* 396 */
/** */ (function (module, exports, __webpack_require__) {
    const common = __webpack_require__(355);

    common.register('set', _set, {
	  allowGlobbing: false,
	  wrapOutput: false
    });

	// @
	// @ ### set(options)
	// @ Available options:
	// @
	// @ + `+/-e`: exit upon error (`config.fatal`)
	// @ + `+/-v`: verbose: show all commands (`config.verbose`)
	// @ + `+/-f`: disable filename expansion (globbing)
	// @
	// @ Examples:
	// @
	// @ ```javascript
	// @ set('-e'); // exit upon first error
	// @ set('+e'); // this undoes a "set('-e')"
	// @ ```
	// @
	// @ Sets global configuration variables
    function _set(options) {
	  if (!options) {
	    const args = [].slice.call(arguments, 0);
	    if (args.length < 2) common.error('must provide an argument');
	    options = args[1];
	  }
	  const negate = (options[0] === '+');
	  if (negate) {
	    options = `-${options.slice(1)}`; // parseOptions needs a '-' prefix
	  }
	  options = common.parseOptions(options, {
	    e: 'fatal',
	    v: 'verbose',
	    f: 'noglob'
	  });

	  if (negate) {
	    Object.keys(options).forEach((key) => {
	      options[key] = !options[key];
	    });
	  }

	  Object.keys(options).forEach((key) => {
	    // Only change the global config if `negate` is false and the option is true
	    // or if `negate` is true and the option is false (aka negate !== option)
	    if (negate !== options[key]) {
	      common.config[key] = options[key];
	    }
	  });
	  return;
    }
    module.exports = _set;
/** */ }),
/* 397 */
/** */ (function (module, exports, __webpack_require__) {
    const common = __webpack_require__(355);
    const fs = __webpack_require__(340);

    common.register('sort', _sort, {
	  canReceivePipe: true,
	  cmdOptions: {
	    r: 'reverse',
	    n: 'numerical'
	  }
    });

	// parse out the number prefix of a line
    function parseNumber(str) {
	  const match = str.match(/^\s*(\d*)\s*(.*)$/);
	  return { num: Number(match[1]), value: match[2] };
    }

	// compare two strings case-insensitively, but examine case for strings that are
	// case-insensitive equivalent
    function unixCmp(a, b) {
	  const aLower = a.toLowerCase();
	  const bLower = b.toLowerCase();
	  return (aLower === bLower ?
	      -1 * a.localeCompare(b) : // unix sort treats case opposite how javascript does
	      aLower.localeCompare(bLower));
    }

	// compare two strings in the fashion that unix sort's -n option works
    function numericalCmp(a, b) {
	  const objA = parseNumber(a);
	  const objB = parseNumber(b);
	  if (objA.hasOwnProperty('num') && objB.hasOwnProperty('num')) {
	    return ((objA.num !== objB.num) ?
	        (objA.num - objB.num) :
	        unixCmp(objA.value, objB.value));
	  }
	    return unixCmp(objA.value, objB.value);
    }

	// @
	// @ ### sort([options,] file [, file ...])
	// @ ### sort([options,] file_array)
	// @ Available options:
	// @
	// @ + `-r`: Reverse the result of comparisons
	// @ + `-n`: Compare according to numerical value
	// @
	// @ Examples:
	// @
	// @ ```javascript
	// @ sort('foo.txt', 'bar.txt');
	// @ sort('-r', 'foo.txt');
	// @ ```
	// @
	// @ Return the contents of the files, sorted line-by-line. Sorting multiple
	// @ files mixes their content, just like unix sort does.
    function _sort(options, files) {
	  // Check if this is coming from a pipe
	  const pipe = common.readFromPipe();

	  if (!files && !pipe) common.error('no files given');

	  files = [].slice.call(arguments, 1);

	  if (pipe) {
	    files.unshift('-');
	  }

	  let lines = [];
	  files.forEach((file) => {
	    if (file !== '-') {
	      if (!fs.existsSync(file)) {
	        common.error(`no such file or directory: ${file}`, { continue: true });
	        return;
	      } else if (fs.statSync(file).isDirectory()) {
	        common.error(`read failed: ${file}: Is a directory`, {
	          continue: true
	        });
	        return;
	      }
	    }

	    const contents = file === '-' ? pipe : fs.readFileSync(file, 'utf8');
	    lines = lines.concat(contents.trimRight().split(/\r*\n/));
	  });

	  let sorted;
	  sorted = lines.sort(options.numerical ? numericalCmp : unixCmp);

	  if (options.reverse) {
	    sorted = sorted.reverse();
	  }

	  return `${sorted.join('\n')}\n`;
    }

    module.exports = _sort;
/** */ }),
/* 398 */
/** */ (function (module, exports, __webpack_require__) {
    const common = __webpack_require__(355);
    const fs = __webpack_require__(340);

    common.register('tail', _tail, {
	  canReceivePipe: true,
	  cmdOptions: {
	    n: 'numLines'
	  }
    });

	// @
	// @ ### tail([{'-n': \<num\>},] file [, file ...])
	// @ ### tail([{'-n': \<num\>},] file_array)
	// @ Available options:
	// @
	// @ + `-n <num>`: Show the last `<num>` lines of the files
	// @
	// @ Examples:
	// @
	// @ ```javascript
	// @ var str = tail({'-n': 1}, 'file*.txt');
	// @ var str = tail('file1', 'file2');
	// @ var str = tail(['file1', 'file2']); // same as above
	// @ ```
	// @
	// @ Read the end of a file.
    function _tail(options, files) {
	  let tail = [];
	  const pipe = common.readFromPipe();

	  if (!files && !pipe) common.error('no paths given');

	  let idx = 1;
	  if (options.numLines === true) {
	    idx = 2;
	    options.numLines = Number(arguments[1]);
	  } else if (options.numLines === false) {
	    options.numLines = 10;
	  }
	  options.numLines = -1 * Math.abs(options.numLines);
	  files = [].slice.call(arguments, idx);

	  if (pipe) {
	    files.unshift('-');
	  }

	  let shouldAppendNewline = false;
	  files.forEach((file) => {
	    if (file !== '-') {
	      if (!fs.existsSync(file)) {
	        common.error(`no such file or directory: ${file}`, { continue: true });
	        return;
	      } else if (fs.statSync(file).isDirectory()) {
	        common.error(`error reading '${file}': Is a directory`, {
	          continue: true
	        });
	        return;
	      }
	    }

	    const contents = file === '-' ? pipe : fs.readFileSync(file, 'utf8');

	    const lines = contents.split('\n');
	    if (lines[lines.length - 1] === '') {
	      lines.pop();
	      shouldAppendNewline = true;
	    } else {
	      shouldAppendNewline = false;
	    }

	    tail = tail.concat(lines.slice(options.numLines));
	  });

	  if (shouldAppendNewline) {
	    tail.push(''); // to add a trailing newline once we join
	  }
	  return tail.join('\n');
    }
    module.exports = _tail;
/** */ }),
/* 399 */
/** */ (function (module, exports, __webpack_require__) {
    const common = __webpack_require__(355);
    const fs = __webpack_require__(340);

    common.register('test', _test, {
	  cmdOptions: {
	    b: 'block',
	    c: 'character',
	    d: 'directory',
	    e: 'exists',
	    f: 'file',
	    L: 'link',
	    p: 'pipe',
	    S: 'socket'
	  },
	  wrapOutput: false,
	  allowGlobbing: false
    });


	// @
	// @ ### test(expression)
	// @ Available expression primaries:
	// @
	// @ + `'-b', 'path'`: true if path is a block device
	// @ + `'-c', 'path'`: true if path is a character device
	// @ + `'-d', 'path'`: true if path is a directory
	// @ + `'-e', 'path'`: true if path exists
	// @ + `'-f', 'path'`: true if path is a regular file
	// @ + `'-L', 'path'`: true if path is a symbolic link
	// @ + `'-p', 'path'`: true if path is a pipe (FIFO)
	// @ + `'-S', 'path'`: true if path is a socket
	// @
	// @ Examples:
	// @
	// @ ```javascript
	// @ if (test('-d', path)) { /* do something with dir */ };
	// @ if (!test('-f', path)) continue; // skip if it's a regular file
	// @ ```
	// @
	// @ Evaluates expression using the available primaries and returns corresponding value.
    function _test(options, path) {
	  if (!path) common.error('no path given');

	  let canInterpret = false;
	  Object.keys(options).forEach((key) => {
	    if (options[key] === true) {
	      canInterpret = true;
	    }
	  });

	  if (!canInterpret) common.error('could not interpret expression');

	  if (options.link) {
	    try {
	      return fs.lstatSync(path).isSymbolicLink();
	    } catch (e) {
	      return false;
	    }
	  }

	  if (!fs.existsSync(path)) return false;

	  if (options.exists) return true;

	  const stats = fs.statSync(path);

	  if (options.block) return stats.isBlockDevice();

	  if (options.character) return stats.isCharacterDevice();

	  if (options.directory) return stats.isDirectory();

	  if (options.file) return stats.isFile();

	  /* istanbul ignore next */
	  if (options.pipe) return stats.isFIFO();

	  /* istanbul ignore next */
	  if (options.socket) return stats.isSocket();

	  /* istanbul ignore next */
	  return false; // fallback
    } // test
    module.exports = _test;
/** */ }),
/* 400 */
/** */ (function (module, exports, __webpack_require__) {
    const common = __webpack_require__(355);
    const fs = __webpack_require__(340);
    const path = __webpack_require__(342);

    common.register('to', _to, {
	  pipeOnly: true,
	  wrapOutput: false
    });

	// @
	// @ ### ShellString.prototype.to(file)
	// @
	// @ Examples:
	// @
	// @ ```javascript
	// @ cat('input.txt').to('output.txt');
	// @ ```
	// @
	// @ Analogous to the redirection operator `>` in Unix, but works with
	// @ ShellStrings (such as those returned by `cat`, `grep`, etc). _Like Unix
	// @ redirections, `to()` will overwrite any existing file!_
    function _to(options, file) {
	  if (!file) common.error('wrong arguments');

	  if (!fs.existsSync(path.dirname(file))) {
	    common.error(`no such file or directory: ${path.dirname(file)}`);
	  }

	  try {
	    fs.writeFileSync(file, this.stdout || this.toString(), 'utf8');
	    return this;
	  } catch (e) {
	    /* istanbul ignore next */
	    common.error(`could not write to file (code ${e.code}): ${file}`, { continue: true });
	  }
    }
    module.exports = _to;
/** */ }),
/* 401 */
/** */ (function (module, exports, __webpack_require__) {
    const common = __webpack_require__(355);
    const fs = __webpack_require__(340);
    const path = __webpack_require__(342);

    common.register('toEnd', _toEnd, {
	  pipeOnly: true,
	  wrapOutput: false
    });

	// @
	// @ ### ShellString.prototype.toEnd(file)
	// @
	// @ Examples:
	// @
	// @ ```javascript
	// @ cat('input.txt').toEnd('output.txt');
	// @ ```
	// @
	// @ Analogous to the redirect-and-append operator `>>` in Unix, but works with
	// @ ShellStrings (such as those returned by `cat`, `grep`, etc).
    function _toEnd(options, file) {
	  if (!file) common.error('wrong arguments');

	  if (!fs.existsSync(path.dirname(file))) {
	    common.error(`no such file or directory: ${path.dirname(file)}`);
	  }

	  try {
	    fs.appendFileSync(file, this.stdout || this.toString(), 'utf8');
	    return this;
	  } catch (e) {
	    /* istanbul ignore next */
	    common.error(`could not append to file (code ${e.code}): ${file}`, { continue: true });
	  }
    }
    module.exports = _toEnd;
/** */ }),
/* 402 */
/** */ (function (module, exports, __webpack_require__) {
    const common = __webpack_require__(355);
    const fs = __webpack_require__(340);

    common.register('touch', _touch, {
	  cmdOptions: {
	    a: 'atime_only',
	    c: 'no_create',
	    d: 'date',
	    m: 'mtime_only',
	    r: 'reference'
	  }
    });

	// @
	// @ ### touch([options,] file [, file ...])
	// @ ### touch([options,] file_array)
	// @ Available options:
	// @
	// @ + `-a`: Change only the access time
	// @ + `-c`: Do not create any files
	// @ + `-m`: Change only the modification time
	// @ + `-d DATE`: Parse DATE and use it instead of current time
	// @ + `-r FILE`: Use FILE's times instead of current time
	// @
	// @ Examples:
	// @
	// @ ```javascript
	// @ touch('source.js');
	// @ touch('-c', '/path/to/some/dir/source.js');
	// @ touch({ '-r': FILE }, '/path/to/some/dir/source.js');
	// @ ```
	// @
	// @ Update the access and modification times of each FILE to the current time.
	// @ A FILE argument that does not exist is created empty, unless -c is supplied.
	// @ This is a partial implementation of *[touch(1)](http://linux.die.net/man/1/touch)*.
    function _touch(opts, files) {
	  if (!files) {
	    common.error('no files given');
	  } else if (typeof files === 'string') {
	    files = [].slice.call(arguments, 1);
	  } else {
	    common.error('file arg should be a string file path or an Array of string file paths');
	  }

	  files.forEach((f) => {
	    touchFile(opts, f);
	  });
	  return '';
    }

    function touchFile(opts, file) {
	  const stat = tryStatFile(file);

	  if (stat && stat.isDirectory()) {
	    // don't error just exit
	    return;
	  }

	  // if the file doesn't already exist and the user has specified --no-create then
	  // this script is finished
	  if (!stat && opts.no_create) {
	    return;
	  }

	  // open the file and then close it. this will create it if it doesn't exist but will
	  // not truncate the file
	  fs.closeSync(fs.openSync(file, 'a'));

	  //
	  // Set timestamps
	  //

	  // setup some defaults
	  const now = new Date();
	  let mtime = opts.date || now;
	  let atime = opts.date || now;

	  // use reference file
	  if (opts.reference) {
	    const refStat = tryStatFile(opts.reference);
	    if (!refStat) {
	      common.error(`failed to get attributess of ${opts.reference}`);
	    }
	    mtime = refStat.mtime;
	    atime = refStat.atime;
	  } else if (opts.date) {
	    mtime = opts.date;
	    atime = opts.date;
	  }

	  if (opts.atime_only && opts.mtime_only) {
	    // keep the new values of mtime and atime like GNU
	  } else if (opts.atime_only) {
	    mtime = stat.mtime;
	  } else if (opts.mtime_only) {
	    atime = stat.atime;
	  }

	  fs.utimesSync(file, atime, mtime);
    }

    module.exports = _touch;

    function tryStatFile(filePath) {
	  try {
	    return fs.statSync(filePath);
	  } catch (e) {
	    return null;
	  }
    }
/** */ }),
/* 403 */
/** */ (function (module, exports, __webpack_require__) {
    const common = __webpack_require__(355);
    const fs = __webpack_require__(340);

	// add c spaces to the left of str
    function lpad(c, str) {
	  let res = `${str}`;
	  if (res.length < c) {
	    res = Array((c - res.length) + 1).join(' ') + res;
	  }
	  return res;
    }

    common.register('uniq', _uniq, {
	  canReceivePipe: true,
	  cmdOptions: {
	    i: 'ignoreCase',
	    c: 'count',
	    d: 'duplicates'
	  }
    });

	// @
	// @ ### uniq([options,] [input, [output]])
	// @ Available options:
	// @
	// @ + `-i`: Ignore case while comparing
	// @ + `-c`: Prefix lines by the number of occurrences
	// @ + `-d`: Only print duplicate lines, one for each group of identical lines
	// @
	// @ Examples:
	// @
	// @ ```javascript
	// @ uniq('foo.txt');
	// @ uniq('-i', 'foo.txt');
	// @ uniq('-cd', 'foo.txt', 'bar.txt');
	// @ ```
	// @
	// @ Filter adjacent matching lines from input
    function _uniq(options, input, output) {
	  // Check if this is coming from a pipe
	  const pipe = common.readFromPipe();

	  if (!pipe) {
	    if (!input) common.error('no input given');

	    if (!fs.existsSync(input)) {
	      common.error(`${input}: No such file or directory`);
	    } else if (fs.statSync(input).isDirectory()) {
	      common.error(`error reading '${input}'`);
	    }
	  }
	  if (output && fs.existsSync(output) && fs.statSync(output).isDirectory()) {
	    common.error(`${output}: Is a directory`);
	  }

	  const lines = (input ? fs.readFileSync(input, 'utf8') : pipe)
	              .trimRight()
	              .split(/\r*\n/);

	  const compare = function (a, b) {
	    return options.ignoreCase ?
	           a.toLocaleLowerCase().localeCompare(b.toLocaleLowerCase()) :
	           a.localeCompare(b);
	  };
	  const uniqed = `${lines.reduceRight((res, e) => {
	    // Perform uniq -c on the input
	    if (res.length === 0) {
	      return [{ count: 1, ln: e }];
	    } else if (compare(res[0].ln, e) === 0) {
	      return [{ count: res[0].count + 1, ln: e }].concat(res.slice(1));
	    }
	      return [{ count: 1, ln: e }].concat(res);
	  }, []).filter((obj) =>
	                 // Do we want only duplicated objects?
	     options.duplicates ? obj.count > 1 : true).map((obj) =>
	                 // Are we tracking the counts of each line?
	     (options.count ? (`${lpad(7, obj.count)} `) : '') + obj.ln).join('\n')}\n`;

	  if (output) {
	    (new common.ShellString(uniqed)).to(output);
	    // if uniq writes to output, nothing is passed to the next command in the pipeline (if any)
	    return '';
	  }
	    return uniqed;
    }

    module.exports = _uniq;
/** */ }),
/* 404 */
/** */ (function (module, exports, __webpack_require__) {
    const common = __webpack_require__(355);
    const fs = __webpack_require__(340);
    const path = __webpack_require__(342);

    common.register('which', _which, {
	  allowGlobbing: false,
	  cmdOptions: {
	    a: 'all'
	  }
    });

	// XP's system default value for PATHEXT system variable, just in case it's not
	// set on Windows.
    const XP_DEFAULT_PATHEXT = '.com;.exe;.bat;.cmd;.vbs;.vbe;.js;.jse;.wsf;.wsh';

	// Cross-platform method for splitting environment PATH variables
    function splitPath(p) {
	  return p ? p.split(path.delimiter) : [];
    }

    function checkPath(pathName) {
	  return fs.existsSync(pathName) && !fs.statSync(pathName).isDirectory();
    }

	// @
	// @ ### which(command)
	// @
	// @ Examples:
	// @
	// @ ```javascript
	// @ var nodeExec = which('node');
	// @ ```
	// @
	// @ Searches for `command` in the system's PATH. On Windows, this uses the
	// @ `PATHEXT` variable to append the extension if it's not already executable.
	// @ Returns string containing the absolute path to the command.
    function _which(options, cmd) {
	  if (!cmd) common.error('must specify command');

	  const isWindows = process.platform === 'win32';
	  const pathEnv = ({ NODE_ENV: 'production' }).path || ({ NODE_ENV: 'production' }).Path || ({ NODE_ENV: 'production' }).PATH;
	  const pathArray = splitPath(pathEnv);

	  const queryMatches = [];

	  // No relative/absolute paths provided?
	  if (cmd.indexOf('/') === -1) {
	    // Assume that there are no extensions to append to queries (this is the
	    // case for unix)
	    let pathExtArray = [''];
	    if (isWindows) {
	      // In case the PATHEXT variable is somehow not set (e.g.
	      // child_process.spawn with an empty environment), use the XP default.
	      const pathExtEnv = ({ NODE_ENV: 'production' }).PATHEXT || XP_DEFAULT_PATHEXT;
	      pathExtArray = splitPath(pathExtEnv.toUpperCase());
	    }

	    // Search for command in PATH
	    for (let k = 0; k < pathArray.length; k++) {
	      // already found it
	      if (queryMatches.length > 0 && !options.all) break;

	      let attempt = path.resolve(pathArray[k], cmd);

	      if (isWindows) {
	        attempt = attempt.toUpperCase();
	      }

	      const match = attempt.match(/\.[^<>:"/\|?*.]+$/);
	      if (match && pathExtArray.indexOf(match[0]) >= 0) { // this is Windows-only
	        // The user typed a query with the file extension, like
	        // `which('node.exe')`
	        if (checkPath(attempt)) {
	          queryMatches.push(attempt);
	          break;
	        }
	      } else { // All-platforms
	        // Cycle through the PATHEXT array, and check each extension
	        // Note: the array is always [''] on Unix
	        for (let i = 0; i < pathExtArray.length; i++) {
	          const ext = pathExtArray[i];
	          const newAttempt = attempt + ext;
	          if (checkPath(newAttempt)) {
	            queryMatches.push(newAttempt);
	            break;
	          }
	        }
	      }
	    }
	  } else if (checkPath(cmd)) { // a valid absolute or relative path
	    queryMatches.push(path.resolve(cmd));
	  }

	  if (queryMatches.length > 0) {
	    return options.all ? queryMatches : queryMatches[0];
	  }
	  return options.all ? [] : null;
    }
    module.exports = _which;
/** */ }),
/* 405 */
/** */ (function (module, exports, __webpack_require__) {
    Object.defineProperty(exports, '__esModule', {
	    value: true
    });

    const _electronLog = __webpack_require__(331);

    const _electronLog2 = _interopRequireDefault(_electronLog);

    const _path = __webpack_require__(342);

    const _path2 = _interopRequireDefault(_path);

    const _config = __webpack_require__(350);

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// https://discuss.atom.io/t/not-able-to-spawn-npm-modules-from-electron-package-in-os-x-solved/18905/9
    const childProcess = __webpack_require__(384); /*
	                                                 FFMpeg wrapper
	                                             */

    let rtmpPort = _config.main.rtmpPort,
	    appRootDir = _config.main.appRootDir,
	    frameConfig = _config.main.frameConfig;


    function getWithExt(name) {
	    return process.platform === 'win32' ? `${name}.exe` : name;
    }
	// https://github.com/mifi/lossless-cut/blob/master/src/ffmpeg.js
	// const execa = require('execa');
	// function canExecuteFfmpeg(ffmpegPath) {
	//   return execa(ffmpegPath, ['-version']);
	// }
	// return canExecuteFfmpeg(internalFfmpeg)
	//   .then(() => internalFfmpeg)
	//   .catch(() => {
	//     console.log('Internal ffmpeg unavail');
	//     return which('ffmpeg');
	//   });

    let userStopFFmpeg = false;

    const startFFMpeg = function startFFMpeg(sender, rtmpStrmID) {
	    const configIdx = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

	    _electronLog2.default.info(`Launching FFmpeg with config: ${configIdx}`);
	    userStopFFmpeg = false; /* reset !!*/

	    const framerate = frameConfig[configIdx].framerate;
	    const keyint = frameConfig[configIdx].keyint;
	    const internalFFMpeg = _path2.default.join(appRootDir, 'node_modules', 'ffmpeg', getWithExt('ffmpeg'));

	    const broadcastProc = childProcess.spawn(internalFFMpeg, ['-f', 'avfoundation', '-framerate', framerate, '-pixel_format', 'uyvy422', '-i', '0:0', '-vcodec', 'libx264', '-tune', 'zerolatency', '-b', '900k', '-x264-params', `keyint=${keyint}:min-keyint=${keyint}`, '-acodec', 'aac', '-ac', '1', '-b:a', '96k', '-f', 'flv', `rtmp://localhost:${rtmpPort}/stream/${rtmpStrmID}`]);

	    global.sharedObj.ffmpegProc = broadcastProc;

	    broadcastProc.on('close', (code, signal) => {
	        if (userStopFFmpeg) {
	            return _electronLog2.default.info('ffmpeg - terminated by the user (stopFFMpeg)');
	        }
	        _electronLog2.default.info(`ffmpeg - child process terminated due to receipt of signal ${signal}`);
	        sender.send('notifier', { error: 3 });

	        // autorestart ?
	        if (configIdx < frameConfig.length - 1) {
	            console.log('restart FFMPeg');
	            startFFmpeg(rtmpStrmID, configIdx + 1);
	        } else {
	            sender.send('notifier', { error: 3 });
	        }
	    });
    };

    const stopFFMpeg = function stopFFMpeg() {
	    return new Promise((resolve, reject) => {
	        const ffmpegProc = global.sharedObj.ffmpegProc;
	        if (ffmpegProc != null) {
	            _electronLog2.default.info(`Killing FFMPeg pid: ${ffmpegProc.pid}`);
	            userStopFFmpeg = true;
	            global.sharedObj.ffmpegProc.kill();
	            global.sharedObj.ffmpegProc = null;
	        }

	        resolve('FFMpeg Closed');
	    });
    };

    exports.default = { windowFFMpeg: { startFFMpeg, stopFFMpeg } };
    module.exports = exports.default;
/** */ }),
/* 406 */
/** */ (function (module, exports, __webpack_require__) {
    Object.defineProperty(exports, '__esModule', {
	  value: true
    });

    const _shelljs = __webpack_require__(354);

    const _shelljs2 = _interopRequireDefault(_shelljs);

    const _rimraf = __webpack_require__(407);

    const _rimraf2 = _interopRequireDefault(_rimraf);

    const _request = __webpack_require__(349);

    const _request2 = _interopRequireDefault(_request);

    const _electronLog = __webpack_require__(331);

    const _electronLog2 = _interopRequireDefault(_electronLog);

    const _config = __webpack_require__(350);

    const _path = __webpack_require__(342);

    const _path2 = _interopRequireDefault(_path);

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// Do not use import {spawn} >
	// https://discuss.atom.io/t/not-able-to-spawn-npm-modules-from-electron-package-in-os-x-solved/18905/9
	/*
	    LivePeer wrapper
	    https://stackoverflow.com/questions/33152533/bundling-precompiled-binary-into-electron-app
	*/

    const childProcess = __webpack_require__(384);

    let httpPort = _config.main.httpPort,
	    appRootDir = _config.main.appRootDir,
	    homeDir = _config.main.homeDir;


    function getWithExt(name) {
	  return process.platform === 'win32' ? `${name}.exe` : name;
    }

    const startLivepeer = function startLivepeer(sender) {
	  (0, _request2.default)(`http://localhost:${httpPort}/localStreams`, (err, res, body) => {
	    if (err == null) {
	      global.sharedObj.livepeerProc = 'local';
	      console.log('LivePeer is already running.');
	    } else if (global.sharedObj.livepeerProc == null) {
	        const internalLivepeer = _path2.default.join(appRootDir, 'node_modules', 'livepeer', getWithExt('livepeer'));
	        const internalFFMpeg = _path2.default.join(appRootDir, 'node_modules', 'ffmpeg', getWithExt('ffmpeg'));

	        const livepeerProc = childProcess.spawn(internalLivepeer, ['--ffmpegPath', internalFFMpeg, '--datadir', `${homeDir}/Livepeer/livepeernet`]);
	        livepeerProc.stdin.write('\n\n\n\n\n');
	        global.sharedObj.livepeerProc = livepeerProc;

	        // livepeerProc.stderr.on('data', (data) => {
	        //    log.info(`stderr: ${data}`);
	        // });
	        //
	        // livepeerProc.stdout.on('data', (data) => {
	        //           log.info(`stdout: ${data}`);
	        // });

	        livepeerProc.on('close', (code) => {
	          _electronLog2.default.info(`livepeer child process exited with code ${code}`);
	          sender.send('notifier', { error: 2 });
	        });

	        _electronLog2.default.info('Livepeer running on port 8935');
	      }
	  });
    };

    const stopLivepeer = function stopLivepeer() {
	  return new Promise((resolve, reject) => {
	    _electronLog2.default.info('Stopping Livepeer');
	    const livepeerProc = global.sharedObj.livepeerProc;
	    if (livepeerProc != null && livepeerProc != 'local') {
	      _electronLog2.default.info(`Sending SIGTERM to ${livepeerProc.pid}`);
	      global.sharedObj.livepeerProc.kill();
	      global.sharedObj.livepeerProc = null;
	    }
	    resolve('LivePeer Closed');
	  });
    };

    const resetLivepeer = function resetLivepeer(sender) {
	  _electronLog2.default.info('ResetLivepeer - Deleting Livepeer datadir');

	  (0, _rimraf2.default)(`${homeDir}/Livepeer/livepeernet/`, () => {
	    _electronLog2.default.info('Removed livepeer dir');
	  });
	  _shelljs2.default.mkdir('-p', `${homeDir}/Livepeer/livepeernet/`);
	  stopLivepeer();

	  const err = startLivepeer(sender);
	  if (err != null) {
	    return err;
	  }
    };

    const createStream = function createStream(sender) {
	  return new Promise((resolve, reject) => {
	    (0, _request2.default)(`http://localhost:${httpPort}/createStream`, (err, res, body) => {
	      if (err != null) {
	        sender.send('notifier', { error: 4 }); // return;
	        reject({ message: 'Having problem connecting to Livepeer.  Make sure your local node is running.', buttons: ['OK'] });
	      }
	      resolve({ rtmpStrmID: JSON.parse(body).streamID });
	    });
	  });
    };

    const getHlsStrmID = function getHlsStrmID(sender) {
	  (0, _request2.default)(`http://localhost:${httpPort}/localStreams`, (err, res, body) => {
	    if (err != null) {
	      dialog.showMessageBox({ message: 'Having problem getting stream ID.  Make sure your local node is running.', buttons: ['OK'] });
	      return;
	    }

	    const streams = JSON.parse(body);
	    let hlsStrmID;

	    streams.forEach((s, i) => {
	      if (s.source == 'local' && s.format == 'hls') {
	        hlsStrmID = s.streamID;
	      }
	    });

	    if (hlsStrmID == null) {
	      setTimeout(() => getHlsStrmID(sender), 1000);
	      return;
	    }

	    sender.send('broadcast', { hlsStrmID });
	  });
    };

    const getVideo = function getVideo(_ref) {
	  const strmID = _ref.strmID;

	  return new Promise((resolve, reject) => {
	    (0, _request2.default)(`http://localhost:${httpPort}/stream/${strmID}.m3u8`, (err, res, body) => {
	      if (!body) {
	        reject({ error: 1 });
	        return;
	      }
	      resolve({ strmID });
	    });
	  });
    };

    exports.default = { windowLivepeer: { startLivepeer, stopLivepeer, resetLivepeer, createStream, getHlsStrmID, getVideo } };
    module.exports = exports.default;
/** */ }),
/* 407 */
/** */ (function (module, exports, __webpack_require__) {
    module.exports = rimraf
    rimraf.sync = rimrafSync

    const assert = __webpack_require__(365)
    const path = __webpack_require__(342)
    const fs = __webpack_require__(340)
    const glob = __webpack_require__(356)

    const defaultGlobOpts = {
	  nosort: true,
	  silent: true
    }

	// for EMFILE handling
    let timeout = 0

    const isWindows = (process.platform === 'win32')

    function defaults(options) {
	  const methods = [
	    'unlink',
	    'chmod',
	    'stat',
	    'lstat',
	    'rmdir',
	    'readdir'
	  ]
	  methods.forEach((m) => {
	    options[m] = options[m] || fs[m]
	    m += 'Sync'
	    options[m] = options[m] || fs[m]
	  })

	  options.maxBusyTries = options.maxBusyTries || 3
	  options.emfileWait = options.emfileWait || 1000
	  if (options.glob === false) {
	    options.disableGlob = true
	  }
	  options.disableGlob = options.disableGlob || false
	  options.glob = options.glob || defaultGlobOpts
    }

    function rimraf(p, options, cb) {
	  if (typeof options === 'function') {
	    cb = options
	    options = {}
	  }

	  assert(p, 'rimraf: missing path')
	  assert.equal(typeof p, 'string', 'rimraf: path should be a string')
	  assert.equal(typeof cb, 'function', 'rimraf: callback function required')
	  assert(options, 'rimraf: invalid options argument provided')
	  assert.equal(typeof options, 'object', 'rimraf: options should be object')

	  defaults(options)

	  let busyTries = 0
	  let errState = null
	  let n = 0

	  if (options.disableGlob || !glob.hasMagic(p)) { return afterGlob(null, [p]) }

	  options.lstat(p, (er, stat) => {
	    if (!er) { return afterGlob(null, [p]) }

	    glob(p, options.glob, afterGlob)
	  })

	  function next(er) {
	    errState = errState || er
	    if (--n === 0) { cb(errState) }
	  }

	  function afterGlob(er, results) {
	    if (er) { return cb(er) }

	    n = results.length
	    if (n === 0) { return cb() }

	    results.forEach((p) => {
	      rimraf_(p, options, function CB(er) {
	        if (er) {
	          if ((er.code === 'EBUSY' || er.code === 'ENOTEMPTY' || er.code === 'EPERM') &&
	              busyTries < options.maxBusyTries) {
	            busyTries++
	            const time = busyTries * 100
	            // try again, with the same exact callback as this one.
	            return setTimeout(() => {
	              rimraf_(p, options, CB)
	            }, time)
	          }

	          // this one won't happen if graceful-fs is used.
	          if (er.code === 'EMFILE' && timeout < options.emfileWait) {
	            return setTimeout(() => {
	              rimraf_(p, options, CB)
	            }, timeout++)
	          }

	          // already gone
	          if (er.code === 'ENOENT') er = null
	        }

	        timeout = 0
	        next(er)
	      })
	    })
	  }
    }

	// Two possible strategies.
	// 1. Assume it's a file.  unlink it, then do the dir stuff on EPERM or EISDIR
	// 2. Assume it's a directory.  readdir, then do the file stuff on ENOTDIR
	//
	// Both result in an extra syscall when you guess wrong.  However, there
	// are likely far more normal files in the world than directories.  This
	// is based on the assumption that a the average number of files per
	// directory is >= 1.
	//
	// If anyone ever complains about this, then I guess the strategy could
	// be made configurable somehow.  But until then, YAGNI.
    function rimraf_(p, options, cb) {
	  assert(p)
	  assert(options)
	  assert(typeof cb === 'function')

	  // sunos lets the root user unlink directories, which is... weird.
	  // so we have to lstat here and make sure it's not a dir.
	  options.lstat(p, (er, st) => {
	    if (er && er.code === 'ENOENT') { return cb(null) }

	    // Windows can EPERM on stat.  Life is suffering.
	    if (er && er.code === 'EPERM' && isWindows) { fixWinEPERM(p, options, er, cb) }

	    if (st && st.isDirectory()) { return rmdir(p, options, er, cb) }

	    options.unlink(p, (er) => {
	      if (er) {
	        if (er.code === 'ENOENT') { return cb(null) }
	        if (er.code === 'EPERM') {
            return (isWindows)
	            ? fixWinEPERM(p, options, er, cb)
	            : rmdir(p, options, er, cb)
        }
	        if (er.code === 'EISDIR') { return rmdir(p, options, er, cb) }
	      }
	      return cb(er)
	    })
	  })
    }

    function fixWinEPERM(p, options, er, cb) {
	  assert(p)
	  assert(options)
	  assert(typeof cb === 'function')
	  if (er) { assert(er instanceof Error) }

	  options.chmod(p, 666, (er2) => {
	    if (er2) { cb(er2.code === 'ENOENT' ? null : er) } else {
        options.stat(p, (er3, stats) => {
	        if (er3) { cb(er3.code === 'ENOENT' ? null : er) } else if (stats.isDirectory()) { rmdir(p, options, er, cb) } else { options.unlink(p, cb) }
	      })
    }
	  })
    }

    function fixWinEPERMSync(p, options, er) {
	  assert(p)
	  assert(options)
	  if (er) { assert(er instanceof Error) }

	  try {
	    options.chmodSync(p, 666)
	  } catch (er2) {
	    if (er2.code === 'ENOENT') { return }
	    throw er
	  }

	  try {
	    var stats = options.statSync(p)
	  } catch (er3) {
	    if (er3.code === 'ENOENT') { return }
	    throw er
	  }

	  if (stats.isDirectory()) { rmdirSync(p, options, er) } else { options.unlinkSync(p) }
    }

    function rmdir(p, options, originalEr, cb) {
	  assert(p)
	  assert(options)
	  if (originalEr) { assert(originalEr instanceof Error) }
	  assert(typeof cb === 'function')

	  // try to rmdir first, and only readdir on ENOTEMPTY or EEXIST (SunOS)
	  // if we guessed wrong, and it's not a directory, then
	  // raise the original error.
	  options.rmdir(p, (er) => {
	    if (er && (er.code === 'ENOTEMPTY' || er.code === 'EEXIST' || er.code === 'EPERM')) { rmkids(p, options, cb) } else if (er && er.code === 'ENOTDIR') { cb(originalEr) } else { cb(er) }
	  })
    }

    function rmkids(p, options, cb) {
	  assert(p)
	  assert(options)
	  assert(typeof cb === 'function')

	  options.readdir(p, (er, files) => {
	    if (er) { return cb(er) }
	    let n = files.length
	    if (n === 0) { return options.rmdir(p, cb) }
	    let errState
	    files.forEach((f) => {
	      rimraf(path.join(p, f), options, (er) => {
	        if (errState) { return }
	        if (er) { return cb(errState = er) }
	        if (--n === 0) { options.rmdir(p, cb) }
	      })
	    })
	  })
    }

	// this looks simpler, and is strictly *faster*, but will
	// tie up the JavaScript thread and fail on excessively
	// deep directory trees.
    function rimrafSync(p, options) {
	  options = options || {}
	  defaults(options)

	  assert(p, 'rimraf: missing path')
	  assert.equal(typeof p, 'string', 'rimraf: path should be a string')
	  assert(options, 'rimraf: missing options')
	  assert.equal(typeof options, 'object', 'rimraf: options should be object')

	  let results

	  if (options.disableGlob || !glob.hasMagic(p)) {
	    results = [p]
	  } else {
	    try {
	      options.lstatSync(p)
	      results = [p]
	    } catch (er) {
	      results = glob.sync(p, options.glob)
	    }
	  }

	  if (!results.length) { return }

	  for (let i = 0; i < results.length; i++) {
	    var p = results[i]

	    try {
	      var st = options.lstatSync(p)
	    } catch (er) {
	      if (er.code === 'ENOENT') { return }

	      // Windows can EPERM on stat.  Life is suffering.
	      if (er.code === 'EPERM' && isWindows) { fixWinEPERMSync(p, options, er) }
	    }

	    try {
	      // sunos lets the root user unlink directories, which is... weird.
	      if (st && st.isDirectory()) { rmdirSync(p, options, null) } else { options.unlinkSync(p) }
	    } catch (er) {
	      if (er.code === 'ENOENT') { return }
	      if (er.code === 'EPERM') { return isWindows ? fixWinEPERMSync(p, options, er) : rmdirSync(p, options, er) }
	      if (er.code !== 'EISDIR') { throw er }

	      rmdirSync(p, options, er)
	    }
	  }
    }

    function rmdirSync(p, options, originalEr) {
	  assert(p)
	  assert(options)
	  if (originalEr) { assert(originalEr instanceof Error) }

	  try {
	    options.rmdirSync(p)
	  } catch (er) {
	    if (er.code === 'ENOENT') { return }
	    if (er.code === 'ENOTDIR') { throw originalEr }
	    if (er.code === 'ENOTEMPTY' || er.code === 'EEXIST' || er.code === 'EPERM') { rmkidsSync(p, options) }
	  }
    }

    function rmkidsSync(p, options) {
	  assert(p)
	  assert(options)
	  options.readdirSync(p).forEach((f) => {
	    rimrafSync(path.join(p, f), options)
	  })

	  // We only end up here once we got ENOTEMPTY at least once, and
	  // at this point, we are guaranteed to have removed all the kids.
	  // So, we know that it won't be ENOENT or ENOTDIR or anything else.
	  // try really hard to delete stuff on windows, because it has a
	  // PROFOUNDLY annoying habit of not closing handles promptly when
	  // files are deleted, resulting in spurious ENOTEMPTY errors.
	  const retries = isWindows ? 100 : 1
	  let i = 0
	  do {
	    let threw = true
	    try {
	      const ret = options.rmdirSync(p, options)
	      threw = false
	      return ret
	    } finally {
	      if (++i < retries && threw) { continue }
	    }
	  } while (true)
    }
/** */ }),
/* 408 */
/** */ (function (module, exports, __webpack_require__) {
    Object.defineProperty(exports, '__esModule', {
	  value: true
    });
	/*
	    Electron menu
	*/

    const windowMenu = {
	  darwin: [{
	    label: 'Electron',
	    submenu: [{
	      label: 'About ElectronReact',
	      selector: 'orderFrontStandardAboutPanel:'
	    }, {
	      type: 'separator'
	    }, {
	      label: 'Services',
	      submenu: []
	    }, {
	      type: 'separator'
	    }, {
	      label: 'Hide ElectronReact',
	      accelerator: 'Command+H',
	      selector: 'hide:'
	    }, {
	      label: 'Hide Others',
	      accelerator: 'Command+Shift+H',
	      selector: 'hideOtherApplications:'
	    }, {
	      label: 'Show All',
	      selector: 'unhideAllApplications:'
	    }, {
	      type: 'separator'
	    }, {
	      label: 'Quit',
	      accelerator: 'Command+Q',
	      click: function click() {
	        app.quit();
	      }
	    }]
	  }, {
	    label: 'Edit',
	    submenu: [{
	      label: 'Undo',
	      accelerator: 'Command+Z',
	      selector: 'undo:'
	    }, {
	      label: 'Redo',
	      accelerator: 'Shift+Command+Z',
	      selector: 'redo:'
	    }, {
	      type: 'separator'
	    }, {
	      label: 'Cut',
	      accelerator: 'Command+X',
	      selector: 'cut:'
	    }, {
	      label: 'Copy',
	      accelerator: 'Command+C',
	      selector: 'copy:'
	    }, {
	      label: 'Paste',
	      accelerator: 'Command+V',
	      selector: 'paste:'
	    }, {
	      label: 'Select All',
	      accelerator: 'Command+A',
	      selector: 'selectAll:'
	    }]
	  }, {
	    label: 'View',
	    submenu: false ? [{
	      label: 'Reload',
	      accelerator: 'Command+R',
	      click: function click() {
	        mainWindow.webContents.reload();
	      }
	    }, {
	      label: 'Toggle Full Screen',
	      accelerator: 'Ctrl+Command+F',
	      click: function click() {
	        mainWindow.setFullScreen(!mainWindow.isFullScreen());
	      }
	    }, {
	      label: 'Toggle Developer Tools',
	      accelerator: 'Alt+Command+I',
	      click: function click() {
	        mainWindow.toggleDevTools();
	      }
	    }] : [{
	      label: 'Toggle Full Screen',
	      accelerator: 'Ctrl+Command+F',
	      click: function click() {
	        mainWindow.setFullScreen(!mainWindow.isFullScreen());
	      }
	    }]
	  }, {
	    label: 'Window',
	    submenu: [{
	      label: 'Minimize',
	      accelerator: 'Command+M',
	      selector: 'performMiniaturize:'
	    }, {
	      label: 'Close',
	      accelerator: 'Command+W',
	      selector: 'performClose:'
	    }, {
	      type: 'separator'
	    }, {
	      label: 'Bring All to Front',
	      selector: 'arrangeInFront:'
	    }]
	  }, {
	    label: 'Help',
	    submenu: [{
	      label: 'Learn More',
	      click: function click() {
	        shell.openExternal('http://electron.atom.io');
	      }
	    }, {
	      label: 'Documentation',
	      click: function click() {
	        shell.openExternal('https://github.com/atom/electron/tree/master/docs#readme');
	      }
	    }, {
	      label: 'Community Discussions',
	      click: function click() {
	        shell.openExternal('https://discuss.atom.io/c/electron');
	      }
	    }, {
	      label: 'Search Issues',
	      click: function click() {
	        shell.openExternal('https://github.com/atom/electron/issues');
	      }
	    }]
	  }],
	  others: [{
	    label: '&File',
	    submenu: [{
	      label: '&Open',
	      accelerator: 'Ctrl+O'
	    }, {
	      label: '&Close',
	      accelerator: 'Ctrl+W',
	      click: function click() {
	        mainWindow.close();
	      }
	    }]
	  }, {
	    label: '&View',
	    submenu: false ? [{
	      label: '&Reload',
	      accelerator: 'Ctrl+R',
	      click: function click() {
	        mainWindow.webContents.reload();
	      }
	    }, {
	      label: 'Toggle &Full Screen',
	      accelerator: 'F11',
	      click: function click() {
	        mainWindow.setFullScreen(!mainWindow.isFullScreen());
	      }
	    }, {
	      label: 'Toggle &Developer Tools',
	      accelerator: 'Alt+Ctrl+I',
	      click: function click() {
	        mainWindow.toggleDevTools();
	      }
	    }] : [{
	      label: 'Toggle &Full Screen',
	      accelerator: 'F11',
	      click: function click() {
	        mainWindow.setFullScreen(!mainWindow.isFullScreen());
	      }
	    }]
	  }, {
	    label: 'Help',
	    submenu: [{
	      label: 'Learn More',
	      click: function click() {
	        shell.openExternal('http://electron.atom.io');
	      }
	    }, {
	      label: 'Documentation',
	      click: function click() {
	        shell.openExternal('https://github.com/atom/electron/tree/master/docs#readme');
	      }
	    }, {
	      label: 'Community Discussions',
	      click: function click() {
	        shell.openExternal('https://discuss.atom.io/c/electron');
	      }
	    }, {
	      label: 'Search Issues',
	      click: function click() {
	        shell.openExternal('https://github.com/atom/electron/issues');
	      }
	    }]
	  }]
    };

    exports.default = windowMenu;
    module.exports = exports.default;
/** */ }),
/* 409 */
/** */ (function (module, exports, __webpack_require__) {
    Object.defineProperty(exports, '__esModule', {
	    value: true
    });
    exports.listener = undefined;

    const _electron = __webpack_require__(330);

    const _ = __webpack_require__(352);

    const _config = __webpack_require__(350);

    const _electronLog = __webpack_require__(331);

    const _electronLog2 = _interopRequireDefault(_electronLog);

    const _request = __webpack_require__(349);

    const _request2 = _interopRequireDefault(_request);

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

    const httpPort = _config.main.httpPort; /*
	                                          Listener to dialog bettween dependencies (LivePeer, FFMpeg, Electron) and the app
	                                          @return a events received in the stores
	                                      */

    const listener = exports.listener = function listener(app, mainWindow) {
	    // is LP running [hacky] ?
	    const checkIfRunning = setInterval(() => {
	        (0, _request2.default)(`http://localhost:${httpPort}/peersCount`, (err, res, body) => {
	            if (err != null) {
	                err.code == 'ECONNREFUSED' && mainWindow.webContents.send('loading', { type: 'add', key: 1, peerCount: 0 });
	                return;
	            }
	            const peerCount = JSON.parse(body).count;
	            mainWindow.webContents.send('loading', { type: 'delete', key: 1, peerCount });
	        });
	    }, 1500);

	    /*
	        Toggle the broadcaster state
	    */
	    _electron.ipcMain.on('broadcast', (event, arg) => {
	        const fromState = arg.fromState;

	        const sender = event.sender;
	        if (!fromState) {
	            // create a stream, then startFFMpeg
	            _.windowLivepeer.createStream(sender).then((_ref) => {
	                const rtmpStrmID = _ref.rtmpStrmID;

	                _.windowFFMpeg.startFFMpeg(sender, rtmpStrmID, 1);
	                _.windowLivepeer.getHlsStrmID(sender);
	            }).catch((err) => console.error(err));
	        } else if (fromState) {
	            _.windowFFMpeg.stopFFMpeg();
	            event.sender.send('broadcast', 0);
	        }
	    });

	    /*
	        Toggle the player state
	    */
	    _electron.ipcMain.on('play', (event, arg) => {
	        const strmID = arg.strmID;

	        const sender = event.sender;
	        if (strmID) {
	            // create a stream, then startFFMpeg
	            _.windowLivepeer.getVideo({ strmID }).then((_ref2) => {
	                const strmID = _ref2.strmID;

	                const videoURL = `http://localhost:${httpPort}/stream/${strmID}.m3u8`;
	                event.sender.send('play', { videoURL });
	                /**/
	            }).catch((err) => event.sender.send('notifier', err));
	        } else if (!strmID) {
	            event.sender.send('play', { strmID: 0 });
	        }
	    });

	    /*
	        Send bug report
	    */
	    _electron.ipcMain.on('sendBugReport', (event, arg) => {
	        windowLogging.sendBugReport();
	    });

	    /*
	        Start LivePeer
	    */
	    _electron.ipcMain.on('startLivepeer', (event, arg) => {
	        _.windowLivepeer.startLivepeer(event.sender);
	    });

	    /*
	        Reset LivePeer
	    */
	    _electron.ipcMain.on('resetLivepeer', (event, arg) => {
	        _.windowLivepeer.resetLivepeer(event.sender);
	    });

	    /*
	        Forward loading from the app to the LoaderStore
	    */
	    _electron.ipcMain.on('loading', (event, arg) => event.sender.send('loading', arg));

	    /*
	        Forward notifier from the app to the LoaderStore
	    */
	    _electron.ipcMain.on('notifier', (event, arg) => event.sender.send('notifier', arg));

	    /*
	        Refresh window
	    */

	    _electron.ipcMain.on('refresh', () => mainWindow.reload());

	    /*
	        App restart
	    */

	    _electron.ipcMain.on('restart', () => {
	        app.relaunch();
	        app.exit();
	    });

	    /*
	        Toggle the fullscreen mode
	    */
	    _electron.ipcMain.on('toggle-fullscreen-editor-window', () => {
	        mainWindow.setFullScreen(!mainWindow.isFullScreen());
	    });

	    /*
	        Minimize window
	    */

	    _electron.ipcMain.on('minimize', () => mainWindow.minimize());

	    /*
	        Close window
	    */

	    _electron.ipcMain.on('close', () => {
	        /* Remove interval to prevent sending events on a destroyed window :-) */
	        clearInterval(checkIfRunning);
	        mainWindow.close();
	    });
    };
/** */ }),
/* 410 */
/** */ (function (module, exports, __webpack_require__) {
    const electron = __webpack_require__(330);
    const localShortcut = __webpack_require__(411);
    const isDev = __webpack_require__(418);

    const app = electron.app;
    const BrowserWindow = electron.BrowserWindow;
    const isMacOS = process.platform === 'darwin';

    function devTools(win) {
        win = win || BrowserWindow.getFocusedWindow();

        if (win) {
            win.toggleDevTools();
        }
    }

    function openDevTools(win, showDevTools) {
        win = win || BrowserWindow.getFocusedWindow();

        if (win) {
            const mode = showDevTools === true ? undefined : showDevTools;
            win.webContents.openDevTools({ mode });
        }
    }

    function refresh(win) {
        win = win || BrowserWindow.getFocusedWindow();

        if (win) {
            win.webContents.reloadIgnoringCache();
        }
    }

    function inspectElements() {
        const win = BrowserWindow.getFocusedWindow();
        const inspect = () => {
            win.devToolsWebContents.executeJavaScript('DevToolsAPI.enterInspectElementMode()');
        };

        if (win) {
            if (win.webContents.isDevToolsOpened()) {
                inspect();
            } else {
                win.webContents.on('devtools-opened', inspect);
                win.openDevTools();
            }
        }
    }

    module.exports = opts => {
        opts = Object.assign({
            enabled: null,
            showDevTools: false
        }, opts);

        if (opts.enabled === false || (opts.enabled === null && !isDev)) {
            return;
        }

        app.on('browser-window-created', (e, win) => {
            if (opts.showDevTools) {
                openDevTools(win, opts.showDevTools);
            }
        });

        app.on('ready', () => {
			// Activate devtron for the user if they have it installed and it's not already added
            try {
                const devtronAlreadyAdded = BrowserWindow.getDevToolsExtensions &&
					{}.hasOwnProperty.call(BrowserWindow.getDevToolsExtensions(), 'devtron');

                if (!devtronAlreadyAdded) {
                    BrowserWindow.addDevToolsExtension(__webpack_require__(419).path);
                }
            } catch (err) {}

            localShortcut.register('CmdOrCtrl+Shift+C', inspectElements);
            localShortcut.register(isMacOS ? 'Cmd+Alt+I' : 'Ctrl+Shift+I', devTools);
            localShortcut.register('F12', devTools);

            localShortcut.register('CmdOrCtrl+R', refresh);
            localShortcut.register('F5', refresh);
        });
    };

    module.exports.refresh = refresh;
    module.exports.devTools = devTools;
    module.exports.openDevTools = openDevTools;
/** */ }),
/* 411 */
/** */ (function (module, exports, __webpack_require__) {
    const { app, BrowserWindow } = __webpack_require__(330);
    const isAccelerator = __webpack_require__(412);
    const equals = __webpack_require__(413);
    const { toKeyEvent } = __webpack_require__(414);
    const _debug = __webpack_require__(415);

    const debug = _debug('electron-localshortcut');

	// A placeholder to register shortcuts
	// on any window of the app.
    const ANY_WINDOW = {};

    const windowsWithShortcuts = new WeakMap();

    const title = win => {
        if (win) {
            try {
                return win.getTitle();
            } catch (err) {
                return 'A destroyed window';
            }
        }

        return 'An falsy value';
    };

    function _checkAccelerator(accelerator) {
        if (!isAccelerator(accelerator)) {
            const w = {};
            Error.captureStackTrace(w);
            const msg = `
	WARNING: ${accelerator} is not a valid accelerator.

	${w.stack.split('\n').slice(4).join('\n')}
	`;
            console.error(msg);
        }
    }

	/**
	 * Disable all of the shortcuts registered on the BrowserWindow instance.
	 * Registered shortcuts no more works on the `window` instance, but the module
	 * keep a reference on them. You can reactivate them later by calling `enableAll`
	 * method on the same window instance.
	 * @param  {BrowserWindow} win BrowserWindow instance
	 * @return {Undefined}
	 */
    function disableAll(win) {
        debug(`Disabling all shortcuts on window ${title(win)}`);
        const wc = win.webContents;
        const shortcutsOfWindow = windowsWithShortcuts.get(wc);

        for (const shortcut of shortcutsOfWindow) {
            shortcut.enabled = false;
        }
    }

	/**
	 * Enable all of the shortcuts registered on the BrowserWindow instance that
	 * you had previously disabled calling `disableAll` method.
	 * @param  {BrowserWindow} win BrowserWindow instance
	 * @return {Undefined}
	 */
    function enableAll(win) {
        debug(`Enabling all shortcuts on window ${title(win)}`);
        const wc = win.webContents;
        const shortcutsOfWindow = windowsWithShortcuts.get(wc);

        for (const shortcut of shortcutsOfWindow) {
            shortcut.enabled = true;
        }
    }

	/**
	 * Unregisters all of the shortcuts registered on any focused BrowserWindow
	 * instance. This method does not unregister any shortcut you registered on
	 * a particular window instance.
	 * @param  {BrowserWindow} win BrowserWindow instance
	 * @return {Undefined}
	 */
    function unregisterAll(win) {
        debug(`Unregistering all shortcuts on window ${title(win)}`);
        const wc = win.webContents;
        const shortcutsOfWindow = windowsWithShortcuts.get(wc);

		// Remove listener from window
        shortcutsOfWindow.removeListener();

        windowsWithShortcuts.delete(wc);
    }

    function _normalizeEvent(input) {
        const normalizedEvent = {
            code: input.code,
            key: input.key
        };

        ['alt', 'shift', 'meta'].forEach(prop => {
            if (typeof input[prop] !== 'undefined') {
                normalizedEvent[`${prop}Key`] = input[prop];
            }
        });

        if (typeof input.control !== 'undefined') {
            normalizedEvent.ctrlKey = input.control;
        }

        return normalizedEvent;
    }

    function _findShortcut(event, shortcutsOfWindow) {
        let i = 0;
        for (const shortcut of shortcutsOfWindow) {
            if (equals(shortcut.eventStamp, event)) {
                return i;
            }
            i++;
        }
        return -1;
    }

    const _onBeforeInput = shortcutsOfWindow => (e, input) => {
        if (input.type === 'keyUp') {
            return;
        }

        const event = _normalizeEvent(input);

        debug(`before-input-event: ${input} is translated to: ${event}`);
        for (const { eventStamp, callback } of shortcutsOfWindow) {
            if (equals(eventStamp, event)) {
                debug(`eventStamp: ${eventStamp} match`);
                callback();
                return;
            }
            debug(`eventStamp: ${eventStamp} no match`);
        }
    };

	/**
	* Registers the shortcut `accelerator`on the BrowserWindow instance.
	 * @param  {BrowserWindow} win - BrowserWindow instance to register.
	 * This argument could be omitted, in this case the function register
	 * the shortcut on all app windows.
	 * @param  {String} accelerator - the shortcut to register
	 * @param  {Function} callback    This function is called when the shortcut is pressed
	 * and the window is focused and not minimized.
	 * @return {Undefined}
	 */
    function register(win, accelerator, callback) {
        let wc;
        if (typeof callback === 'undefined') {
            wc = ANY_WINDOW;
            callback = accelerator;
            accelerator = win;
        } else {
            wc = win.webContents;
        }

        debug(`Registering callback for ${accelerator} on window ${title(win)}`);
        _checkAccelerator(accelerator);

        debug(`${accelerator} seems a valid shortcut sequence.`);

        let shortcutsOfWindow;
        if (windowsWithShortcuts.has(wc)) {
            debug(`Window has others shortcuts registered.`);
            shortcutsOfWindow = windowsWithShortcuts.get(wc);
        } else {
            debug(`This is the first shortcut of the window.`);
            shortcutsOfWindow = [];
            windowsWithShortcuts.set(wc, shortcutsOfWindow);

            if (wc === ANY_WINDOW) {
                const keyHandler = _onBeforeInput(shortcutsOfWindow);
                const enableAppShortcuts = (e, win) => {
                    const wc = win.webContents;
                    wc.on('before-input-event', keyHandler);
                    wc.once(
						'closed',
						() => wc.removeListener('before-input-event', keyHandler)
					);
                };

				// Enable shortcut on current windows
                const windows = BrowserWindow.getAllWindows();

                windows.forEach(win => enableAppShortcuts(null, win));

				// Enable shortcut on future windows
                app.on(
					'browser-window-created',
					enableAppShortcuts
				);

                shortcutsOfWindow.removeListener = () => {
                    const windows = BrowserWindow.getAllWindows();
                    windows.forEach(win =>
						win.webContents.removeListener(
							'before-input-event',
							keyHandler
						)
					);
                    app.removeListener(
						'browser-window-created',
						enableAppShortcuts
					);
                };
            } else {
                const keyHandler = _onBeforeInput(shortcutsOfWindow);
                wc.on('before-input-event', keyHandler);

				// Save a reference to allow remove of listener from elsewhere
                shortcutsOfWindow.removeListener = () => wc.removeListener('before-input-event', keyHandler);
                wc.once('closed', shortcutsOfWindow.removeListener);
            }
        }

        debug(`Adding shortcut to window set.`);

        const eventStamp = toKeyEvent(accelerator);

        shortcutsOfWindow.push({
            eventStamp,
            callback,
            enabled: true
        });

        debug(`Shortcut registered.`);
    }

	/**
	 * Unregisters the shortcut of `accelerator` registered on the BrowserWindow instance.
	 * @param  {BrowserWindow} win - BrowserWindow instance to unregister.
	 * This argument could be omitted, in this case the function unregister the shortcut
	 * on all app windows. If you registered the shortcut on a particular window instance, it will do nothing.
	 * @param  {String} accelerator - the shortcut to unregister
	 * @return {Undefined}
	 */
    function unregister(win, accelerator) {
        let wc;
        if (typeof accelerator === 'undefined') {
            wc = ANY_WINDOW;
            accelerator = win;
        } else {
            if (win.isDestroyed()) {
                debug(`Early return because window is destroyed.`);
                return;
            }
            wc = win.webContents;
        }

        debug(`Unregistering callback for ${accelerator} on window ${title(win)}`);

        _checkAccelerator(accelerator);

        debug(`${accelerator} seems a valid shortcut sequence.`);

        if (!windowsWithShortcuts.has(wc)) {
            debug(`Early return because window has never had shortcuts registered.`);
            return;
        }

        const shortcutsOfWindow = windowsWithShortcuts.get(wc);

        const eventStamp = toKeyEvent(accelerator);
        const shortcutIdx = _findShortcut(eventStamp, shortcutsOfWindow);
        if (shortcutIdx === -1) {
            return;
        }

        shortcutsOfWindow.splice(shortcutIdx, 1);

		// If the window has no more shortcuts,
		// we remove it early from the WeakMap
		// and unregistering the event listener
        if (shortcutsOfWindow.length === 0) {
			// Remove listener from window
            shortcutsOfWindow.removeListener();

			// Remove window from shrtcuts catalog
            windowsWithShortcuts.delete(wc);
        }
    }

	/**
	 * Returns `true` or `false` depending on whether the shortcut `accelerator`
	 * is registered on `window`.
	 * @param  {BrowserWindow} win - BrowserWindow instance to check. This argument
	 * could be omitted, in this case the function returns whether the shortcut
	 * `accelerator` is registered on all app windows. If you registered the
	 * shortcut on a particular window instance, it return false.
	 * @param  {String} accelerator - the shortcut to check
	 * @return {Boolean} - if the shortcut `accelerator` is registered on `window`.
	 */
    function isRegistered(win, accelerator) {
        _checkAccelerator(accelerator);
    }

    module.exports = {
        register,
        unregister,
        isRegistered,
        unregisterAll,
        enableAll,
        disableAll
    };
/** */ }),
/* 412 */
/** */ (function (module, exports) {
    const modifiers = /^(Command|Cmd|Control|Ctrl|CommandOrControl|CmdOrCtrl|Alt|Option|AltGr|Shift|Super)$/;
    const keyCodes = /^([0-9A-Z)!@#$%^&*(:+<_>?~{|}";=,\-./`[\\\]']|F1*[1-9]|F10|F2[0-4]|Plus|Space|Tab|Backspace|Delete|Insert|Return|Enter|Up|Down|Left|Right|Home|End|PageUp|PageDown|Escape|Esc|VolumeUp|VolumeDown|VolumeMute|MediaNextTrack|MediaPreviousTrack|MediaStop|MediaPlayPause|PrintScreen)$/;

    module.exports = function (str) {
        const parts = str.split('+');
        let keyFound = false;
	    return parts.every((val, index) => {
        const isKey = keyCodes.test(val);
        const isModifier = modifiers.test(val);
        if (isKey) {
				// Key must be unique
            if (keyFound) return false;
            keyFound = true;
        }
			// Key is required
        if (index === parts.length - 1 && !keyFound) return false;
	        return isKey || isModifier;
	    });
    };
/** */ }),
/* 413 */
/** */ (function (module, exports) {
    function _lower(key) {
        if (typeof key !== 'string') {
            return key;
        }
        return key.toLowerCase();
    }

    function areEqual(ev1, ev2) {
        if (ev1 === ev2) {
			// Same object
			// console.log(`Events are same.`)
            return true;
        }

        for (const prop of ['altKey', 'ctrlKey', 'shiftKey', 'metaKey']) {
            const [value1, value2] = [ev1[prop], ev2[prop]];

            if (Boolean(value1) !== Boolean(value2)) {
				// One of the prop is different
				// console.log(`Comparing prop ${prop}: ${value1} ${value2}`);
                return false;
            }
        }

        if ((_lower(ev1.key) === _lower(ev2.key) && ev1.key !== undefined) ||
			(ev1.code === ev2.code && ev1.code !== undefined)) {
			// Events are equals
            return true;
        }

		// Key or code are differents
		// console.log(`key or code are differents. ${ev1.key} !== ${ev2.key} ${ev1.code} !== ${ev2.code}`);

        return false;
    }

    module.exports = areEqual;
/** */ }),
/* 414 */
/** */ (function (module, exports) {
    Object.defineProperty(exports, '__esModule', { value: true });

    const modifiers = /^(CommandOrControl|CmdOrCtrl|Command|Cmd|Control|Ctrl|Alt|Option|AltGr|Shift|Super)/i;
    const keyCodes = /^(Plus|Space|Tab|Backspace|Delete|Insert|Return|Enter|Up|Down|Left|Right|Home|End|PageUp|PageDown|Escape|Esc|VolumeUp|VolumeDown|VolumeMute|MediaNextTrack|MediaPreviousTrack|MediaStop|MediaPlayPause|PrintScreen|F24|F23|F22|F21|F20|F19|F18|F17|F16|F15|F14|F13|F12|F11|F10|F9|F8|F7|F6|F5|F4|F3|F2|F1|[0-9A-Z)!@#$%^&*(:+<_>?~{|}";=,\-./`[\\\]'])/i;

    function reduceModifier({ accelerator, event }, modifier) {
        switch (modifier) {
        case 'command':
        case 'cmd': {
            if (event.metaKey) {
                throw new Error('Double `Command` modifier specified.');
            }

            return {
                event: Object.assign({}, event, { metaKey: true }),
                accelerator: accelerator.slice(modifier.length)
            };
        }
        case 'super': {
            if (event.metaKey) {
                throw new Error('Double `Super` modifier specified.');
            }

            return {
                event: Object.assign({}, event, { metaKey: true }),
                accelerator: accelerator.slice(modifier.length)
            };
        }
        case 'control':
        case 'ctrl': {
            if (event.ctrlKey) {
                throw new Error('Double `Control` modifier specified.');
            }

            return {
                event: Object.assign({}, event, { ctrlKey: true }),
                accelerator: accelerator.slice(modifier.length)
            };
        }
        case 'commandorcontrol':
        case 'cmdorctrl': {
            if (process.platform === 'darwin') {
                if (event.metaKey) {
                    throw new Error('Double `Command` modifier specified.');
                }

                return {
                    event: Object.assign({}, event, { metaKey: true }),
                    accelerator: accelerator.slice(modifier.length)
                };
            }

            if (event.ctrlKey) {
                throw new Error('Double `Control` modifier specified.');
            }

            return {
                event: Object.assign({}, event, { ctrlKey: true }),
                accelerator: accelerator.slice(modifier.length)
            };
        }
        case 'option':
        case 'altgr':
        case 'alt': {
            if (event.altKey) {
                throw new Error('Double `Alt` modifier specified.');
            }

            return {
                event: Object.assign({}, event, { altKey: true }),
                accelerator: accelerator.slice(modifier.length)
            };
        }
        case 'shift': {
            if (event.shiftKey) {
                throw new Error('Double `Shift` modifier specified.');
            }

            return {
                event: Object.assign({}, event, { shiftKey: true }),
                accelerator: accelerator.slice(modifier.length)
            };
        }

        default:
            console.error(modifier);
        }
    }

    function reducePlus({ accelerator, event }) {
        return {
            event,
            accelerator: accelerator.trim().slice(1)
        };
    }

    function reduceKey({ accelerator, event }, key) {
        return {
            event: Object.assign({}, event, { key }),
            accelerator: accelerator.trim().slice(key.length)
        };
    }

    const domKeys = Object.assign(Object.create(null), {
        plus: 'Add',
        space: ' ',
        tab: 'Tab',
        backspace: 'Backspace',
        delete: 'Delete',
        insert: 'Insert',
        return: 'Return',
        enter: 'Return',
        up: 'ArrowUp',
        down: 'ArrowDown',
        left: 'ArrowLeft',
        right: 'ArrowRight',
        home: 'Home',
        end: 'End',
        pageup: 'PageUp',
        pagedown: 'PageDown',
        escape: 'Escape',
        esc: 'Escape',
        volumeup: 'AudioVolumeUp',
        volumedown: 'AudioVolumeDown',
        volumemute: 'AudioVolumeMute',
        medianexttrack: 'MediaTrackNext',
        mediaprevioustrack: 'MediaTrackPrevious',
        mediastop: 'MediaStop',
        mediaplaypause: 'MediaPlayPause',
        printscreen: 'PrintScreen'
    });

	// Add function keys
    for (let i = 1; i <= 24; i++) {
        domKeys[`f${i}`] = `F${i}`;
    }

    function reduceCode({ accelerator, event }, { code, key }) {
        return {
            event: Object.assign({}, event, { key }, code ? { code } : null),
            accelerator: accelerator.trim().slice((key && key.length) || 0)
        };
    }

	/**
	 * This function transform an Electron Accelerator string into
	 * a DOM KeyboardEvent object.
	 *
	 * @param  {string} accelerator an Electron Accelerator string, e.g. `Ctrl+C` or `Shift+Space`.
	 * @return {object} a DOM KeyboardEvent object derivate from the `accelerator` argument.
	 */
    function toKeyEvent(accelerator) {
        let state = { accelerator, event: {} };
        while (state.accelerator !== '') {
            const modifierMatch = state.accelerator.match(modifiers);
            if (modifierMatch) {
                const modifier = modifierMatch[0].toLowerCase();
                state = reduceModifier(state, modifier);
            } else if (state.accelerator.trim()[0] === '+') {
                state = reducePlus(state);
            } else {
                const codeMatch = state.accelerator.match(keyCodes);
                if (codeMatch) {
                    const code = codeMatch[0].toLowerCase();
                    if (code in domKeys) {
                        state = reduceCode(state, {
                            code: domKeys[code],
                            key: code
                        });
                    } else {
                        state = reduceKey(state, code);
                    }
                } else {
                    throw new Error(`Unvalid accelerator: "${state.accelerator}"`);
                }
            }
        }
        return state.event;
    }

    function match(accelerator, keyEvent) {
        if (toKeyEvent(accelerator).code === keyEvent.code) {
            return true;
        }
        return false;
    }

    exports.reduceModifier = reduceModifier;
    exports.reducePlus = reducePlus;
    exports.reduceKey = reduceKey;
    exports.reduceCode = reduceCode;
    exports.toKeyEvent = toKeyEvent;
    exports.match = match;
/** */ }),
/* 415 */
/** */ (function (module, exports, __webpack_require__) {
	/**
	 * This is the web browser implementation of `debug()`.
	 *
	 * Expose `debug()` as the module.
	 */

    exports = module.exports = __webpack_require__(416);
    exports.log = log;
    exports.formatArgs = formatArgs;
    exports.save = save;
    exports.load = load;
    exports.useColors = useColors;
    exports.storage = typeof chrome !== 'undefined'
	               && typeof chrome.storage !== 'undefined'
	                  ? chrome.storage.local
	                  : localstorage();

	/**
	 * Colors.
	 */

    exports.colors = [
	  'lightseagreen',
	  'forestgreen',
	  'goldenrod',
	  'dodgerblue',
	  'darkorchid',
	  'crimson'
    ];

	/**
	 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
	 * and the Firebug extension (any Firefox version) are known
	 * to support "%c" CSS customizations.
	 *
	 * TODO: add a `localStorage` variable to explicitly enable/disable colors
	 */

    function useColors() {
	  // NB: In an Electron preload script, document will be defined but not fully
	  // initialized. Since we know we're in Chrome, we'll just detect this case
	  // explicitly
	  if (typeof window !== 'undefined' && window.process && window.process.type === 'renderer') {
	    return true;
	  }

	  // is webkit? http://stackoverflow.com/a/16459606/376773
	  // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
	  return (typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance) ||
	    // is firebug? http://stackoverflow.com/a/398120/376773
	    (typeof window !== 'undefined' && window.console && (window.console.firebug || (window.console.exception && window.console.table))) ||
	    // is firefox >= v31?
	    // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
	    (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31) ||
	    // double check webkit in userAgent just in case we are in a worker
	    (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
    }

	/**
	 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
	 */

    exports.formatters.j = function (v) {
	  try {
	    return JSON.stringify(v);
	  } catch (err) {
	    return `[UnexpectedJSONParseError]: ${err.message}`;
	  }
    };


	/**
	 * Colorize log arguments if enabled.
	 *
	 * @api public
	 */

    function formatArgs(args) {
	  const useColors = this.useColors;

	  args[0] = `${(useColors ? '%c' : '')
	    + this.namespace
	    + (useColors ? ' %c' : ' ')
	    + args[0]
	    + (useColors ? '%c ' : ' ')
	     }+${exports.humanize(this.diff)}`;

	  if (!useColors) return;

	  const c = `color: ${this.color}`;
	  args.splice(1, 0, c, 'color: inherit')

	  // the final "%c" is somewhat tricky, because there could be other
	  // arguments passed either before or after the %c, so we need to
	  // figure out the correct index to insert the CSS into
	  let index = 0;
	  let lastC = 0;
	  args[0].replace(/%[a-zA-Z%]/g, (match) => {
	    if (match === '%%') return;
	    index++;
	    if (match === '%c') {
	      // we only are interested in the *last* %c
	      // (the user may have provided their own)
	      lastC = index;
	    }
	  });

	  args.splice(lastC, 0, c);
    }

	/**
	 * Invokes `console.log()` when available.
	 * No-op when `console.log` is not a "function".
	 *
	 * @api public
	 */

    function log() {
	  // this hackery is required for IE8/9, where
	  // the `console.log` function doesn't have 'apply'
	  return typeof console === 'object'
	    && console.log
	    && Function.prototype.apply.call(console.log, console, arguments);
    }

	/**
	 * Save `namespaces`.
	 *
	 * @param {String} namespaces
	 * @api private
	 */

    function save(namespaces) {
	  try {
	    if (namespaces == null) {
	      exports.storage.removeItem('debug');
	    } else {
	      exports.storage.debug = namespaces;
	    }
	  } catch (e) {}
    }

	/**
	 * Load `namespaces`.
	 *
	 * @return {String} returns the previously persisted debug modes
	 * @api private
	 */

    function load() {
	  let r;
	  try {
	    r = exports.storage.debug;
	  } catch (e) {}

	  // If debug isn't set in LS, and we're in Electron, try to load $DEBUG
	  if (!r && typeof process !== 'undefined' && 'env' in process) {
	    r = ({ NODE_ENV: 'production' }).DEBUG;
	  }

	  return r;
    }

	/**
	 * Enable namespaces listed in `localStorage.debug` initially.
	 */

    exports.enable(load());

	/**
	 * Localstorage attempts to return the localstorage.
	 *
	 * This is necessary because safari throws
	 * when a user disables cookies/localstorage
	 * and you attempt to access it.
	 *
	 * @return {LocalStorage}
	 * @api private
	 */

    function localstorage() {
	  try {
	    return window.localStorage;
	  } catch (e) {}
    }
/** */ }),
/* 416 */
/** */ (function (module, exports, __webpack_require__) {
	/**
	 * This is the common logic for both the Node.js and web browser
	 * implementations of `debug()`.
	 *
	 * Expose `debug()` as the module.
	 */

    exports = module.exports = createDebug.debug = createDebug.default = createDebug;
    exports.coerce = coerce;
    exports.disable = disable;
    exports.enable = enable;
    exports.enabled = enabled;
    exports.humanize = __webpack_require__(417);

	/**
	 * The currently active debug mode names, and names to skip.
	 */

    exports.names = [];
    exports.skips = [];

	/**
	 * Map of special "%n" handling functions, for the debug "format" argument.
	 *
	 * Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
	 */

    exports.formatters = {};

	/**
	 * Previous log timestamp.
	 */

    let prevTime;

	/**
	 * Select a color.
	 * @param {String} namespace
	 * @return {Number}
	 * @api private
	 */

    function selectColor(namespace) {
	  let hash = 0,
      i;

	  for (i in namespace) {
	    hash = ((hash << 5) - hash) + namespace.charCodeAt(i);
	    hash |= 0; // Convert to 32bit integer
	  }

	  return exports.colors[Math.abs(hash) % exports.colors.length];
    }

	/**
	 * Create a debugger with the given `namespace`.
	 *
	 * @param {String} namespace
	 * @return {Function}
	 * @api public
	 */

    function createDebug(namespace) {
	  function debug() {
	    // disabled?
	    if (!debug.enabled) return;

	    const self = debug;

	    // set `diff` timestamp
	    const curr = +new Date();
	    const ms = curr - (prevTime || curr);
	    self.diff = ms;
	    self.prev = prevTime;
	    self.curr = curr;
	    prevTime = curr;

	    // turn the `arguments` into a proper Array
	    const args = new Array(arguments.length);
	    for (let i = 0; i < args.length; i++) {
	      args[i] = arguments[i];
	    }

	    args[0] = exports.coerce(args[0]);

	    if (typeof args[0] !== 'string') {
	      // anything else let's inspect with %O
	      args.unshift('%O');
	    }

	    // apply any `formatters` transformations
	    let index = 0;
	    args[0] = args[0].replace(/%([a-zA-Z%])/g, (match, format) => {
	      // if we encounter an escaped % then don't increase the array index
	      if (match === '%%') return match;
	      index++;
	      const formatter = exports.formatters[format];
	      if (typeof formatter === 'function') {
	        const val = args[index];
	        match = formatter.call(self, val);

	        // now we need to remove `args[index]` since it's inlined in the `format`
	        args.splice(index, 1);
	        index--;
	      }
	      return match;
	    });

	    // apply env-specific formatting (colors, etc.)
	    exports.formatArgs.call(self, args);

	    const logFn = debug.log || exports.log || console.log.bind(console);
	    logFn.apply(self, args);
	  }

	  debug.namespace = namespace;
	  debug.enabled = exports.enabled(namespace);
	  debug.useColors = exports.useColors();
	  debug.color = selectColor(namespace);

	  // env-specific initialization logic for debug instances
	  if (typeof exports.init === 'function') {
	    exports.init(debug);
	  }

	  return debug;
    }

	/**
	 * Enables a debug mode by namespaces. This can include modes
	 * separated by a colon and wildcards.
	 *
	 * @param {String} namespaces
	 * @api public
	 */

    function enable(namespaces) {
	  exports.save(namespaces);

	  exports.names = [];
	  exports.skips = [];

	  const split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
	  const len = split.length;

	  for (let i = 0; i < len; i++) {
	    if (!split[i]) continue; // ignore empty strings
	    namespaces = split[i].replace(/\*/g, '.*?');
	    if (namespaces[0] === '-') {
	      exports.skips.push(new RegExp(`^${namespaces.substr(1)}$`));
	    } else {
	      exports.names.push(new RegExp(`^${namespaces}$`));
	    }
	  }
    }

	/**
	 * Disable debug output.
	 *
	 * @api public
	 */

    function disable() {
	  exports.enable('');
    }

	/**
	 * Returns true if the given mode name is enabled, false otherwise.
	 *
	 * @param {String} name
	 * @return {Boolean}
	 * @api public
	 */

    function enabled(name) {
	  let i,
      len;
	  for (i = 0, len = exports.skips.length; i < len; i++) {
	    if (exports.skips[i].test(name)) {
	      return false;
	    }
	  }
	  for (i = 0, len = exports.names.length; i < len; i++) {
	    if (exports.names[i].test(name)) {
	      return true;
	    }
	  }
	  return false;
    }

	/**
	 * Coerce `val`.
	 *
	 * @param {Mixed} val
	 * @return {Mixed}
	 * @api private
	 */

    function coerce(val) {
	  if (val instanceof Error) return val.stack || val.message;
	  return val;
    }
/** */ }),
/* 417 */
/** */ (function (module, exports) {
	/**
	 * Helpers.
	 */

    const s = 1000;
    const m = s * 60;
    const h = m * 60;
    const d = h * 24;
    const y = d * 365.25;

	/**
	 * Parse or format the given `val`.
	 *
	 * Options:
	 *
	 *  - `long` verbose formatting [false]
	 *
	 * @param {String|Number} val
	 * @param {Object} [options]
	 * @throws {Error} throw an error if val is not a non-empty string or a number
	 * @return {String|Number}
	 * @api public
	 */

    module.exports = function (val, options) {
	  options = options || {};
	  const type = typeof val;
	  if (type === 'string' && val.length > 0) {
	    return parse(val);
	  } else if (type === 'number' && isNaN(val) === false) {
	    return options.long ? fmtLong(val) : fmtShort(val);
	  }
	  throw new Error(
	    `val is not a non-empty string or a valid number. val=${
	      JSON.stringify(val)}`
	  );
    };

	/**
	 * Parse the given `str` and return milliseconds.
	 *
	 * @param {String} str
	 * @return {Number}
	 * @api private
	 */

    function parse(str) {
	  str = String(str);
	  if (str.length > 100) {
	    return;
	  }
	  const match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(
	    str
	  );
	  if (!match) {
	    return;
	  }
	  const n = parseFloat(match[1]);
	  const type = (match[2] || 'ms').toLowerCase();
	  switch (type) {
	    case 'years':
	    case 'year':
	    case 'yrs':
	    case 'yr':
	    case 'y':
	      return n * y;
	    case 'days':
	    case 'day':
	    case 'd':
	      return n * d;
	    case 'hours':
	    case 'hour':
	    case 'hrs':
	    case 'hr':
	    case 'h':
	      return n * h;
	    case 'minutes':
	    case 'minute':
	    case 'mins':
	    case 'min':
	    case 'm':
	      return n * m;
	    case 'seconds':
	    case 'second':
	    case 'secs':
	    case 'sec':
	    case 's':
	      return n * s;
	    case 'milliseconds':
	    case 'millisecond':
	    case 'msecs':
	    case 'msec':
	    case 'ms':
	      return n;
	    default:
	      return undefined;
	  }
    }

	/**
	 * Short format for `ms`.
	 *
	 * @param {Number} ms
	 * @return {String}
	 * @api private
	 */

    function fmtShort(ms) {
	  if (ms >= d) {
	    return `${Math.round(ms / d)}d`;
	  }
	  if (ms >= h) {
	    return `${Math.round(ms / h)}h`;
	  }
	  if (ms >= m) {
	    return `${Math.round(ms / m)}m`;
	  }
	  if (ms >= s) {
	    return `${Math.round(ms / s)}s`;
	  }
	  return `${ms}ms`;
    }

	/**
	 * Long format for `ms`.
	 *
	 * @param {Number} ms
	 * @return {String}
	 * @api private
	 */

    function fmtLong(ms) {
	  return plural(ms, d, 'day') ||
	    plural(ms, h, 'hour') ||
	    plural(ms, m, 'minute') ||
	    plural(ms, s, 'second') ||
	    `${ms} ms`;
    }

	/**
	 * Pluralization helper.
	 */

    function plural(ms, n, name) {
	  if (ms < n) {
	    return;
	  }
	  if (ms < n * 1.5) {
	    return `${Math.floor(ms / n)} ${name}`;
	  }
	  return `${Math.ceil(ms / n)} ${name}s`;
    }
/** */ }),
/* 418 */
/** */ (function (module, exports, __webpack_require__) {
    const getFromEnv = parseInt(({ NODE_ENV: 'production' }).ELECTRON_IS_DEV, 10) === 1;
    const isEnvSet = 'ELECTRON_IS_DEV' in ({ NODE_ENV: 'production' });

    module.exports = isEnvSet ? getFromEnv : (process.defaultApp || /node_modules[\\/]electron[\\/]/.test(process.execPath));
/** */ }),
/* 419 */
/** */ (function (module, exports, __webpack_require__) {
    const electron = __webpack_require__(330)

    exports.install = () => {
	  if (process.type === 'renderer') {
	    console.log(`Installing Devtron from ${__dirname}`)
	    if (electron.remote.BrowserWindow.getDevToolsExtensions &&
	        electron.remote.BrowserWindow.getDevToolsExtensions().devtron) return true
	    return electron.remote.BrowserWindow.addDevToolsExtension(__dirname)
	  } else if (process.type === 'browser') {
	    console.log(`Installing Devtron from ${__dirname}`)
	    if (electron.BrowserWindow.getDevToolsExtensions &&
	        electron.BrowserWindow.getDevToolsExtensions().devtron) return true
	    return electron.BrowserWindow.addDevToolsExtension(__dirname)
	  }
	    throw new Error('Devtron can only be installed from an Electron process.')
    }

    exports.uninstall = () => {
	  if (process.type === 'renderer') {
	    console.log(`Uninstalling Devtron from ${__dirname}`)
	    return electron.remote.BrowserWindow.removeDevToolsExtension('devtron')
	  } else if (process.type === 'browser') {
	    console.log(`Uninstalling Devtron from ${__dirname}`)
	    return electron.BrowserWindow.removeDevToolsExtension('devtron')
	  }
	    throw new Error('Devtron can only be uninstalled from an Electron process.')
    }

    exports.path = __dirname
/** */ }),
/* 420 */
/** */ (function (module, exports, __webpack_require__) {
    Object.defineProperty(exports, '__esModule', {
	  value: true
    });
    exports.CYCLEJS_DEVTOOL = exports.REACT_PERF = exports.REDUX_DEVTOOLS = exports.VUEJS_DEVTOOLS = exports.ANGULARJS_BATARANG = exports.JQUERY_DEBUGGER = exports.BACKBONE_DEBUGGER = exports.REACT_DEVELOPER_TOOLS = exports.EMBER_INSPECTOR = undefined;

    const _typeof = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj; };

    const _electron = __webpack_require__(330);

    const _electron2 = _interopRequireDefault(_electron);

    const _fs = __webpack_require__(340);

    const _fs2 = _interopRequireDefault(_fs);

    const _path = __webpack_require__(342);

    const _path2 = _interopRequireDefault(_path);

    const _semver = __webpack_require__(421);

    const _semver2 = _interopRequireDefault(_semver);

    const _downloadChromeExtension = __webpack_require__(422);

    const _downloadChromeExtension2 = _interopRequireDefault(_downloadChromeExtension);

    const _utils = __webpack_require__(426);

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

    function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

    let _ref = _electron.remote || _electron2.default,
	    BrowserWindow = _ref.BrowserWindow;

    let IDMap = {};
    const IDMapPath = _path2.default.resolve((0, _utils.getPath)(), 'IDMap.json');
    if (_fs2.default.existsSync(IDMapPath)) {
	  IDMap = JSON.parse(_fs2.default.readFileSync(IDMapPath, 'utf8'));
    }

    const install = function install(extensionReference) {
	  const forceDownload = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

	  if (Array.isArray(extensionReference)) {
	    return Promise.all(extensionReference.map((extension) => install(extension, forceDownload)));
	  }
	  let chromeStoreID = void 0;
	  if ((typeof extensionReference === 'undefined' ? 'undefined' : _typeof(extensionReference)) === 'object' && extensionReference.id) {
	    chromeStoreID = extensionReference.id;
	    if (!_semver2.default.satisfies(process.versions.electron, extensionReference.electron)) {
	      return Promise.reject(new Error(`Version of Electron: ${process.versions.electron} does not match required range ${extensionReference.electron} for extension ${chromeStoreID}`));
	    }
	  } else if (typeof extensionReference === 'string') {
	    chromeStoreID = extensionReference;
	  } else {
	    return Promise.reject(new Error(`Invalid extensionReference passed in: "${extensionReference}"`));
	  }
	  const extensionName = IDMap[chromeStoreID];
	  const extensionInstalled = extensionName && BrowserWindow.getDevToolsExtensions && BrowserWindow.getDevToolsExtensions()[extensionName];
	  if (!forceDownload && extensionInstalled) {
	    return Promise.resolve(IDMap[chromeStoreID]);
	  }
	  return (0, _downloadChromeExtension2.default)(chromeStoreID, forceDownload).then((extensionFolder) => {
	    // Use forceDownload, but already installed
	    if (extensionInstalled) {
	      BrowserWindow.removeDevToolsExtension(extensionName);
	    }
	    var name = BrowserWindow.addDevToolsExtension(extensionFolder); // eslint-disable-line
	    _fs2.default.writeFileSync(IDMapPath, JSON.stringify(Object.assign(IDMap, _defineProperty({}, chromeStoreID, name))));
	    return Promise.resolve(name);
	  });
    };

    exports.default = install;
    const EMBER_INSPECTOR = exports.EMBER_INSPECTOR = {
	  id: 'bmdblncegkenkacieihfhpjfppoconhi',
	  electron: '^1.2.1'
    };
    const REACT_DEVELOPER_TOOLS = exports.REACT_DEVELOPER_TOOLS = {
	  id: 'fmkadmapgofadopljbjfkapdkoienihi',
	  electron: '^1.2.1'
    };
    const BACKBONE_DEBUGGER = exports.BACKBONE_DEBUGGER = {
	  id: 'bhljhndlimiafopmmhjlgfpnnchjjbhd',
	  electron: '^1.2.1'
    };
    const JQUERY_DEBUGGER = exports.JQUERY_DEBUGGER = {
	  id: 'dbhhnnnpaeobfddmlalhnehgclcmjimi',
	  electron: '^1.2.1'
    };
    const ANGULARJS_BATARANG = exports.ANGULARJS_BATARANG = {
	  id: 'ighdmehidhipcmcojjgiloacoafjmpfk',
	  electron: '^1.2.1'
    };
    const VUEJS_DEVTOOLS = exports.VUEJS_DEVTOOLS = {
	  id: 'nhdogjmejiglipccpnnnanhbledajbpd',
	  electron: '^1.2.1'
    };
    const REDUX_DEVTOOLS = exports.REDUX_DEVTOOLS = {
	  id: 'lmhkpmbekcpmknklioeibfkpmmfibljd',
	  electron: '^1.2.1'
    };
    const REACT_PERF = exports.REACT_PERF = {
	  id: 'hacmcodfllhbnekmghgdlplbdnahmhmm',
	  electron: '^1.2.6'
    };
    const CYCLEJS_DEVTOOL = exports.CYCLEJS_DEVTOOL = {
	  id: 'dfgplfmhhmdekalbpejekgfegkonjpfp',
	  electron: '^1.2.1'
    };
/** */ }),
/* 421 */
/** */ (function (module, exports, __webpack_require__) {
    exports = module.exports = SemVer;

	// The debug function is excluded entirely from the minified version.
    /* nomin */ let debug;
    /* nomin */ if (typeof process === 'object' &&
	    /* nomin */ ({ NODE_ENV: 'production' }) &&
	    /* nomin */ ({ NODE_ENV: 'production' }).NODE_DEBUG &&
	    /* nomin */ /\bsemver\b/i.test(({ NODE_ENV: 'production' }).NODE_DEBUG))
	  /* nomin */ {
        debug = function () {
	    /* nomin */ const args = Array.prototype.slice.call(arguments, 0);
	    /* nomin */ args.unshift('SEMVER');
	    /* nomin */ console.log(...args);
	    /* nomin */ };
    }
    /* nomin */ else
	  /* nomin */ { debug = function () {}; }

	// Note: this is the semver.org version of the spec that it implements
	// Not necessarily the package version of this code.
    exports.SEMVER_SPEC_VERSION = '2.0.0';

    const MAX_LENGTH = 256;
    const MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER || 9007199254740991;

	// The actual regexps go on exports.re
    const re = exports.re = [];
    const src = exports.src = [];
    let R = 0;

	// The following Regular Expressions can be used for tokenizing,
	// validating, and parsing SemVer version strings.

	// ## Numeric Identifier
	// A single `0`, or a non-zero digit followed by zero or more digits.

    const NUMERICIDENTIFIER = R++;
    src[NUMERICIDENTIFIER] = '0|[1-9]\\d*';
    const NUMERICIDENTIFIERLOOSE = R++;
    src[NUMERICIDENTIFIERLOOSE] = '[0-9]+';


	// ## Non-numeric Identifier
	// Zero or more digits, followed by a letter or hyphen, and then zero or
	// more letters, digits, or hyphens.

    const NONNUMERICIDENTIFIER = R++;
    src[NONNUMERICIDENTIFIER] = '\\d*[a-zA-Z-][a-zA-Z0-9-]*';


	// ## Main Version
	// Three dot-separated numeric identifiers.

    const MAINVERSION = R++;
    src[MAINVERSION] = `(${src[NUMERICIDENTIFIER]})\\.` +
	                   `(${src[NUMERICIDENTIFIER]})\\.` +
	                   `(${src[NUMERICIDENTIFIER]})`;

    const MAINVERSIONLOOSE = R++;
    src[MAINVERSIONLOOSE] = `(${src[NUMERICIDENTIFIERLOOSE]})\\.` +
	                        `(${src[NUMERICIDENTIFIERLOOSE]})\\.` +
	                        `(${src[NUMERICIDENTIFIERLOOSE]})`;

	// ## Pre-release Version Identifier
	// A numeric identifier, or a non-numeric identifier.

    const PRERELEASEIDENTIFIER = R++;
    src[PRERELEASEIDENTIFIER] = `(?:${src[NUMERICIDENTIFIER]
	                            }|${src[NONNUMERICIDENTIFIER]})`;

    const PRERELEASEIDENTIFIERLOOSE = R++;
    src[PRERELEASEIDENTIFIERLOOSE] = `(?:${src[NUMERICIDENTIFIERLOOSE]
	                                 }|${src[NONNUMERICIDENTIFIER]})`;


	// ## Pre-release Version
	// Hyphen, followed by one or more dot-separated pre-release version
	// identifiers.

    const PRERELEASE = R++;
    src[PRERELEASE] = `(?:-(${src[PRERELEASEIDENTIFIER]
	                  }(?:\\.${src[PRERELEASEIDENTIFIER]})*))`;

    const PRERELEASELOOSE = R++;
    src[PRERELEASELOOSE] = `(?:-?(${src[PRERELEASEIDENTIFIERLOOSE]
	                       }(?:\\.${src[PRERELEASEIDENTIFIERLOOSE]})*))`;

	// ## Build Metadata Identifier
	// Any combination of digits, letters, or hyphens.

    const BUILDIDENTIFIER = R++;
    src[BUILDIDENTIFIER] = '[0-9A-Za-z-]+';

	// ## Build Metadata
	// Plus sign, followed by one or more period-separated build metadata
	// identifiers.

    const BUILD = R++;
    src[BUILD] = `(?:\\+(${src[BUILDIDENTIFIER]
	             }(?:\\.${src[BUILDIDENTIFIER]})*))`;


	// ## Full Version String
	// A main version, followed optionally by a pre-release version and
	// build metadata.

	// Note that the only major, minor, patch, and pre-release sections of
	// the version string are capturing groups.  The build metadata is not a
	// capturing group, because it should not ever be used in version
	// comparison.

    const FULL = R++;
    const FULLPLAIN = `v?${src[MAINVERSION]
	                }${src[PRERELEASE]}?${
	                src[BUILD]}?`;

    src[FULL] = `^${FULLPLAIN}$`;

	// like full, but allows v1.2.3 and =1.2.3, which people do sometimes.
	// also, 1.0.0alpha1 (prerelease without the hyphen) which is pretty
	// common in the npm registry.
    const LOOSEPLAIN = `[v=\\s]*${src[MAINVERSIONLOOSE]
	                 }${src[PRERELEASELOOSE]}?${
	                 src[BUILD]}?`;

    const LOOSE = R++;
    src[LOOSE] = `^${LOOSEPLAIN}$`;

    const GTLT = R++;
    src[GTLT] = '((?:<|>)?=?)';

	// Something like "2.*" or "1.2.x".
	// Note that "x.x" is a valid xRange identifer, meaning "any version"
	// Only the first item is strictly required.
    const XRANGEIDENTIFIERLOOSE = R++;
    src[XRANGEIDENTIFIERLOOSE] = `${src[NUMERICIDENTIFIERLOOSE]}|x|X|\\*`;
    const XRANGEIDENTIFIER = R++;
    src[XRANGEIDENTIFIER] = `${src[NUMERICIDENTIFIER]}|x|X|\\*`;

    const XRANGEPLAIN = R++;
    src[XRANGEPLAIN] = `[v=\\s]*(${src[XRANGEIDENTIFIER]})` +
	                   `(?:\\.(${src[XRANGEIDENTIFIER]})` +
	                   `(?:\\.(${src[XRANGEIDENTIFIER]})` +
	                   `(?:${src[PRERELEASE]})?${
	                   src[BUILD]}?` +
	                   `)?)?`;

    const XRANGEPLAINLOOSE = R++;
    src[XRANGEPLAINLOOSE] = `[v=\\s]*(${src[XRANGEIDENTIFIERLOOSE]})` +
	                        `(?:\\.(${src[XRANGEIDENTIFIERLOOSE]})` +
	                        `(?:\\.(${src[XRANGEIDENTIFIERLOOSE]})` +
	                        `(?:${src[PRERELEASELOOSE]})?${
	                        src[BUILD]}?` +
	                        `)?)?`;

    const XRANGE = R++;
    src[XRANGE] = `^${src[GTLT]}\\s*${src[XRANGEPLAIN]}$`;
    const XRANGELOOSE = R++;
    src[XRANGELOOSE] = `^${src[GTLT]}\\s*${src[XRANGEPLAINLOOSE]}$`;

	// Tilde ranges.
	// Meaning is "reasonably at or greater than"
    const LONETILDE = R++;
    src[LONETILDE] = '(?:~>?)';

    const TILDETRIM = R++;
    src[TILDETRIM] = `(\\s*)${src[LONETILDE]}\\s+`;
    re[TILDETRIM] = new RegExp(src[TILDETRIM], 'g');
    const tildeTrimReplace = '$1~';

    const TILDE = R++;
    src[TILDE] = `^${src[LONETILDE]}${src[XRANGEPLAIN]}$`;
    const TILDELOOSE = R++;
    src[TILDELOOSE] = `^${src[LONETILDE]}${src[XRANGEPLAINLOOSE]}$`;

	// Caret ranges.
	// Meaning is "at least and backwards compatible with"
    const LONECARET = R++;
    src[LONECARET] = '(?:\\^)';

    const CARETTRIM = R++;
    src[CARETTRIM] = `(\\s*)${src[LONECARET]}\\s+`;
    re[CARETTRIM] = new RegExp(src[CARETTRIM], 'g');
    const caretTrimReplace = '$1^';

    const CARET = R++;
    src[CARET] = `^${src[LONECARET]}${src[XRANGEPLAIN]}$`;
    const CARETLOOSE = R++;
    src[CARETLOOSE] = `^${src[LONECARET]}${src[XRANGEPLAINLOOSE]}$`;

	// A simple gt/lt/eq thing, or just "" to indicate "any version"
    const COMPARATORLOOSE = R++;
    src[COMPARATORLOOSE] = `^${src[GTLT]}\\s*(${LOOSEPLAIN})$|^$`;
    const COMPARATOR = R++;
    src[COMPARATOR] = `^${src[GTLT]}\\s*(${FULLPLAIN})$|^$`;


	// An expression to strip any whitespace between the gtlt and the thing
	// it modifies, so that `> 1.2.3` ==> `>1.2.3`
    const COMPARATORTRIM = R++;
    src[COMPARATORTRIM] = `(\\s*)${src[GTLT]
	                      }\\s*(${LOOSEPLAIN}|${src[XRANGEPLAIN]})`;

	// this one has to use the /g flag
    re[COMPARATORTRIM] = new RegExp(src[COMPARATORTRIM], 'g');
    const comparatorTrimReplace = '$1$2$3';


	// Something like `1.2.3 - 1.2.4`
	// Note that these all use the loose form, because they'll be
	// checked against either the strict or loose comparator form
	// later.
    const HYPHENRANGE = R++;
    src[HYPHENRANGE] = `^\\s*(${src[XRANGEPLAIN]})` +
	                   `\\s+-\\s+` +
	                   `(${src[XRANGEPLAIN]})` +
	                   `\\s*$`;

    const HYPHENRANGELOOSE = R++;
    src[HYPHENRANGELOOSE] = `^\\s*(${src[XRANGEPLAINLOOSE]})` +
	                        `\\s+-\\s+` +
	                        `(${src[XRANGEPLAINLOOSE]})` +
	                        `\\s*$`;

	// Star ranges basically just allow anything at all.
    const STAR = R++;
    src[STAR] = '(<|>)?=?\\s*\\*';

	// Compile to actual regexp objects.
	// All are flag-free, unless they were created above with a flag.
    for (let i = 0; i < R; i++) {
	  debug(i, src[i]);
	  if (!re[i]) { re[i] = new RegExp(src[i]); }
    }

    exports.parse = parse;
    function parse(version, loose) {
	  if (version instanceof SemVer) { return version; }

	  if (typeof version !== 'string') { return null; }

	  if (version.length > MAX_LENGTH) { return null; }

	  const r = loose ? re[LOOSE] : re[FULL];
	  if (!r.test(version)) { return null; }

	  try {
	    return new SemVer(version, loose);
	  } catch (er) {
	    return null;
	  }
    }

    exports.valid = valid;
    function valid(version, loose) {
	  const v = parse(version, loose);
	  return v ? v.version : null;
    }


    exports.clean = clean;
    function clean(version, loose) {
	  const s = parse(version.trim().replace(/^[=v]+/, ''), loose);
	  return s ? s.version : null;
    }

    exports.SemVer = SemVer;

    function SemVer(version, loose) {
	  if (version instanceof SemVer) {
	    if (version.loose === loose) { return version; }
	    version = version.version;
	  } else if (typeof version !== 'string') {
	    throw new TypeError(`Invalid Version: ${version}`);
	  }

	  if (version.length > MAX_LENGTH) { throw new TypeError(`version is longer than ${MAX_LENGTH} characters`) }

	  if (!(this instanceof SemVer)) { return new SemVer(version, loose); }

	  debug('SemVer', version, loose);
	  this.loose = loose;
	  const m = version.trim().match(loose ? re[LOOSE] : re[FULL]);

	  if (!m) { throw new TypeError(`Invalid Version: ${version}`); }

	  this.raw = version;

	  // these are actually numbers
	  this.major = +m[1];
	  this.minor = +m[2];
	  this.patch = +m[3];

	  if (this.major > MAX_SAFE_INTEGER || this.major < 0) { throw new TypeError('Invalid major version') }

	  if (this.minor > MAX_SAFE_INTEGER || this.minor < 0) { throw new TypeError('Invalid minor version') }

	  if (this.patch > MAX_SAFE_INTEGER || this.patch < 0) { throw new TypeError('Invalid patch version') }

	  // numberify any prerelease numeric ids
	  if (!m[4]) { this.prerelease = []; } else {
      this.prerelease = m[4].split('.').map((id) => {
	      if (/^[0-9]+$/.test(id)) {
	        const num = +id;
	        if (num >= 0 && num < MAX_SAFE_INTEGER) { return num; }
	      }
	      return id;
	    });
  }

	  this.build = m[5] ? m[5].split('.') : [];
	  this.format();
    }

    SemVer.prototype.format = function () {
	  this.version = `${this.major}.${this.minor}.${this.patch}`;
	  if (this.prerelease.length) { this.version += `-${this.prerelease.join('.')}`; }
	  return this.version;
    };

    SemVer.prototype.toString = function () {
	  return this.version;
    };

    SemVer.prototype.compare = function (other) {
	  debug('SemVer.compare', this.version, this.loose, other);
	  if (!(other instanceof SemVer)) { other = new SemVer(other, this.loose); }

	  return this.compareMain(other) || this.comparePre(other);
    };

    SemVer.prototype.compareMain = function (other) {
	  if (!(other instanceof SemVer)) { other = new SemVer(other, this.loose); }

	  return compareIdentifiers(this.major, other.major) ||
	         compareIdentifiers(this.minor, other.minor) ||
	         compareIdentifiers(this.patch, other.patch);
    };

    SemVer.prototype.comparePre = function (other) {
	  if (!(other instanceof SemVer)) { other = new SemVer(other, this.loose); }

	  // NOT having a prerelease is > having one
	  if (this.prerelease.length && !other.prerelease.length) { return -1; } else if (!this.prerelease.length && other.prerelease.length) { return 1; } else if (!this.prerelease.length && !other.prerelease.length) { return 0; }

	  let i = 0;
	  do {
	    const a = this.prerelease[i];
	    const b = other.prerelease[i];
	    debug('prerelease compare', i, a, b);
	    if (a === undefined && b === undefined) { return 0; } else if (b === undefined) { return 1; } else if (a === undefined) { return -1; } else if (a === b) { continue; } else { return compareIdentifiers(a, b); }
	  } while (++i);
    };

	// preminor will bump the version up to the next minor release, and immediately
	// down to pre-release. premajor and prepatch work the same way.
    SemVer.prototype.inc = function (release, identifier) {
	  switch (release) {
	    case 'premajor':
	      this.prerelease.length = 0;
	      this.patch = 0;
	      this.minor = 0;
	      this.major++;
	      this.inc('pre', identifier);
	      break;
	    case 'preminor':
	      this.prerelease.length = 0;
	      this.patch = 0;
	      this.minor++;
	      this.inc('pre', identifier);
	      break;
	    case 'prepatch':
	      // If this is already a prerelease, it will bump to the next version
	      // drop any prereleases that might already exist, since they are not
	      // relevant at this point.
	      this.prerelease.length = 0;
	      this.inc('patch', identifier);
	      this.inc('pre', identifier);
	      break;
	    // If the input is a non-prerelease version, this acts the same as
	    // prepatch.
	    case 'prerelease':
	      if (this.prerelease.length === 0) { this.inc('patch', identifier); }
	      this.inc('pre', identifier);
	      break;

	    case 'major':
	      // If this is a pre-major version, bump up to the same major version.
	      // Otherwise increment major.
	      // 1.0.0-5 bumps to 1.0.0
	      // 1.1.0 bumps to 2.0.0
	      if (this.minor !== 0 || this.patch !== 0 || this.prerelease.length === 0) { this.major++; }
	      this.minor = 0;
	      this.patch = 0;
	      this.prerelease = [];
	      break;
	    case 'minor':
	      // If this is a pre-minor version, bump up to the same minor version.
	      // Otherwise increment minor.
	      // 1.2.0-5 bumps to 1.2.0
	      // 1.2.1 bumps to 1.3.0
	      if (this.patch !== 0 || this.prerelease.length === 0) { this.minor++; }
	      this.patch = 0;
	      this.prerelease = [];
	      break;
	    case 'patch':
	      // If this is not a pre-release version, it will increment the patch.
	      // If it is a pre-release it will bump up to the same patch version.
	      // 1.2.0-5 patches to 1.2.0
	      // 1.2.0 patches to 1.2.1
	      if (this.prerelease.length === 0) { this.patch++; }
	      this.prerelease = [];
	      break;
	    // This probably shouldn't be used publicly.
	    // 1.0.0 "pre" would become 1.0.0-0 which is the wrong direction.
	    case 'pre':
	      if (this.prerelease.length === 0) { this.prerelease = [0]; } else {
	        let i = this.prerelease.length;
	        while (--i >= 0) {
	          if (typeof this.prerelease[i] === 'number') {
	            this.prerelease[i]++;
	            i = -2;
	          }
	        }
	        if (i === -1) // didn't increment anything
	          { this.prerelease.push(0); }
	      }
	      if (identifier) {
	        // 1.2.0-beta.1 bumps to 1.2.0-beta.2,
	        // 1.2.0-beta.fooblz or 1.2.0-beta bumps to 1.2.0-beta.0
	        if (this.prerelease[0] === identifier) {
	          if (isNaN(this.prerelease[1])) { this.prerelease = [identifier, 0]; }
	        } else { this.prerelease = [identifier, 0]; }
	      }
	      break;

	    default:
	      throw new Error(`invalid increment argument: ${release}`);
	  }
	  this.format();
	  this.raw = this.version;
	  return this;
    };

    exports.inc = inc;
    function inc(version, release, loose, identifier) {
	  if (typeof (loose) === 'string') {
	    identifier = loose;
	    loose = undefined;
	  }

	  try {
	    return new SemVer(version, loose).inc(release, identifier).version;
	  } catch (er) {
	    return null;
	  }
    }

    exports.diff = diff;
    function diff(version1, version2) {
	  if (eq(version1, version2)) {
	    return null;
	  }
	    const v1 = parse(version1);
	    const v2 = parse(version2);
	    if (v1.prerelease.length || v2.prerelease.length) {
	      for (var key in v1) {
	        if (key === 'major' || key === 'minor' || key === 'patch') {
	          if (v1[key] !== v2[key]) {
	            return `pre${key}`;
	          }
	        }
	      }
	      return 'prerelease';
	    }
	    for (var key in v1) {
	      if (key === 'major' || key === 'minor' || key === 'patch') {
	        if (v1[key] !== v2[key]) {
	          return key;
	        }
	      }
	    }
    }

    exports.compareIdentifiers = compareIdentifiers;

    const numeric = /^[0-9]+$/;
    function compareIdentifiers(a, b) {
	  const anum = numeric.test(a);
	  const bnum = numeric.test(b);

	  if (anum && bnum) {
	    a = +a;
	    b = +b;
	  }

	  return (anum && !bnum) ? -1 :
	         (bnum && !anum) ? 1 :
	         a < b ? -1 :
	         a > b ? 1 :
	         0;
    }

    exports.rcompareIdentifiers = rcompareIdentifiers;
    function rcompareIdentifiers(a, b) {
	  return compareIdentifiers(b, a);
    }

    exports.major = major;
    function major(a, loose) {
	  return new SemVer(a, loose).major;
    }

    exports.minor = minor;
    function minor(a, loose) {
	  return new SemVer(a, loose).minor;
    }

    exports.patch = patch;
    function patch(a, loose) {
	  return new SemVer(a, loose).patch;
    }

    exports.compare = compare;
    function compare(a, b, loose) {
	  return new SemVer(a, loose).compare(new SemVer(b, loose));
    }

    exports.compareLoose = compareLoose;
    function compareLoose(a, b) {
	  return compare(a, b, true);
    }

    exports.rcompare = rcompare;
    function rcompare(a, b, loose) {
	  return compare(b, a, loose);
    }

    exports.sort = sort;
    function sort(list, loose) {
	  return list.sort((a, b) => exports.compare(a, b, loose));
    }

    exports.rsort = rsort;
    function rsort(list, loose) {
	  return list.sort((a, b) => exports.rcompare(a, b, loose));
    }

    exports.gt = gt;
    function gt(a, b, loose) {
	  return compare(a, b, loose) > 0;
    }

    exports.lt = lt;
    function lt(a, b, loose) {
	  return compare(a, b, loose) < 0;
    }

    exports.eq = eq;
    function eq(a, b, loose) {
	  return compare(a, b, loose) === 0;
    }

    exports.neq = neq;
    function neq(a, b, loose) {
	  return compare(a, b, loose) !== 0;
    }

    exports.gte = gte;
    function gte(a, b, loose) {
	  return compare(a, b, loose) >= 0;
    }

    exports.lte = lte;
    function lte(a, b, loose) {
	  return compare(a, b, loose) <= 0;
    }

    exports.cmp = cmp;
    function cmp(a, op, b, loose) {
	  let ret;
	  switch (op) {
	    case '===':
	      if (typeof a === 'object') a = a.version;
	      if (typeof b === 'object') b = b.version;
	      ret = a === b;
	      break;
	    case '!==':
	      if (typeof a === 'object') a = a.version;
	      if (typeof b === 'object') b = b.version;
	      ret = a !== b;
	      break;
	    case '': case '=': case '==': ret = eq(a, b, loose); break;
	    case '!=': ret = neq(a, b, loose); break;
	    case '>': ret = gt(a, b, loose); break;
	    case '>=': ret = gte(a, b, loose); break;
	    case '<': ret = lt(a, b, loose); break;
	    case '<=': ret = lte(a, b, loose); break;
	    default: throw new TypeError(`Invalid operator: ${op}`);
	  }
	  return ret;
    }

    exports.Comparator = Comparator;
    function Comparator(comp, loose) {
	  if (comp instanceof Comparator) {
	    if (comp.loose === loose) { return comp; }
	    comp = comp.value;
	  }

	  if (!(this instanceof Comparator)) { return new Comparator(comp, loose); }

	  debug('comparator', comp, loose);
	  this.loose = loose;
	  this.parse(comp);

	  if (this.semver === ANY) { this.value = ''; } else { this.value = this.operator + this.semver.version; }

	  debug('comp', this);
    }

    var ANY = {};
    Comparator.prototype.parse = function (comp) {
	  const r = this.loose ? re[COMPARATORLOOSE] : re[COMPARATOR];
	  const m = comp.match(r);

	  if (!m) { throw new TypeError(`Invalid comparator: ${comp}`); }

	  this.operator = m[1];
	  if (this.operator === '=') { this.operator = ''; }

	  // if it literally is just '>' or '' then allow anything.
	  if (!m[2]) { this.semver = ANY; } else { this.semver = new SemVer(m[2], this.loose); }
    };

    Comparator.prototype.toString = function () {
	  return this.value;
    };

    Comparator.prototype.test = function (version) {
	  debug('Comparator.test', version, this.loose);

	  if (this.semver === ANY) { return true; }

	  if (typeof version === 'string') { version = new SemVer(version, this.loose); }

	  return cmp(version, this.operator, this.semver, this.loose);
    };

    Comparator.prototype.intersects = function (comp, loose) {
	  if (!(comp instanceof Comparator)) {
	    throw new TypeError('a Comparator is required');
	  }

	  let rangeTmp;

	  if (this.operator === '') {
	    rangeTmp = new Range(comp.value, loose);
	    return satisfies(this.value, rangeTmp, loose);
	  } else if (comp.operator === '') {
	    rangeTmp = new Range(this.value, loose);
	    return satisfies(comp.semver, rangeTmp, loose);
	  }

	  const sameDirectionIncreasing =
	    (this.operator === '>=' || this.operator === '>') &&
	    (comp.operator === '>=' || comp.operator === '>');
	  const sameDirectionDecreasing =
	    (this.operator === '<=' || this.operator === '<') &&
	    (comp.operator === '<=' || comp.operator === '<');
	  const sameSemVer = this.semver.version === comp.semver.version;
	  const differentDirectionsInclusive =
	    (this.operator === '>=' || this.operator === '<=') &&
	    (comp.operator === '>=' || comp.operator === '<=');
	  const oppositeDirectionsLessThan =
	    cmp(this.semver, '<', comp.semver, loose) &&
	    ((this.operator === '>=' || this.operator === '>') &&
	    (comp.operator === '<=' || comp.operator === '<'));
	  const oppositeDirectionsGreaterThan =
	    cmp(this.semver, '>', comp.semver, loose) &&
	    ((this.operator === '<=' || this.operator === '<') &&
	    (comp.operator === '>=' || comp.operator === '>'));

	  return sameDirectionIncreasing || sameDirectionDecreasing ||
	    (sameSemVer && differentDirectionsInclusive) ||
	    oppositeDirectionsLessThan || oppositeDirectionsGreaterThan;
    };


    exports.Range = Range;
    function Range(range, loose) {
	  if (range instanceof Range) {
	    if (range.loose === loose) {
	      return range;
	    }
	      return new Range(range.raw, loose);
	  }

	  if (range instanceof Comparator) {
	    return new Range(range.value, loose);
	  }

	  if (!(this instanceof Range)) { return new Range(range, loose); }

	  this.loose = loose;

	  // First, split based on boolean or ||
	  this.raw = range;
	  this.set = range.split(/\s*\|\|\s*/).map(function (range) {
	    return this.parseRange(range.trim());
	  }, this).filter((c) =>
	    // throw out any that are not relevant for whatever reason
	     c.length);

	  if (!this.set.length) {
	    throw new TypeError(`Invalid SemVer Range: ${range}`);
	  }

	  this.format();
    }

    Range.prototype.format = function () {
	  this.range = this.set.map((comps) => comps.join(' ').trim()).join('||').trim();
	  return this.range;
    };

    Range.prototype.toString = function () {
	  return this.range;
    };

    Range.prototype.parseRange = function (range) {
	  const loose = this.loose;
	  range = range.trim();
	  debug('range', range, loose);
	  // `1.2.3 - 1.2.4` => `>=1.2.3 <=1.2.4`
	  const hr = loose ? re[HYPHENRANGELOOSE] : re[HYPHENRANGE];
	  range = range.replace(hr, hyphenReplace);
	  debug('hyphen replace', range);
	  // `> 1.2.3 < 1.2.5` => `>1.2.3 <1.2.5`
	  range = range.replace(re[COMPARATORTRIM], comparatorTrimReplace);
	  debug('comparator trim', range, re[COMPARATORTRIM]);

	  // `~ 1.2.3` => `~1.2.3`
	  range = range.replace(re[TILDETRIM], tildeTrimReplace);

	  // `^ 1.2.3` => `^1.2.3`
	  range = range.replace(re[CARETTRIM], caretTrimReplace);

	  // normalize spaces
	  range = range.split(/\s+/).join(' ');

	  // At this point, the range is completely trimmed and
	  // ready to be split into comparators.

	  const compRe = loose ? re[COMPARATORLOOSE] : re[COMPARATOR];
	  let set = range.split(' ').map((comp) => parseComparator(comp, loose)).join(' ').split(/\s+/);
	  if (this.loose) {
	    // in loose mode, throw out any that are not valid comparators
	    set = set.filter((comp) => !!comp.match(compRe));
	  }
	  set = set.map((comp) => new Comparator(comp, loose));

	  return set;
    };

    Range.prototype.intersects = function (range, loose) {
	  if (!(range instanceof Range)) {
	    throw new TypeError('a Range is required');
	  }

	  return this.set.some((thisComparators) => thisComparators.every((thisComparator) => range.set.some((rangeComparators) => rangeComparators.every((rangeComparator) => thisComparator.intersects(rangeComparator, loose)))));
    };

	// Mostly just for testing and legacy API reasons
    exports.toComparators = toComparators;
    function toComparators(range, loose) {
	  return new Range(range, loose).set.map((comp) => comp.map((c) => c.value).join(' ').trim().split(' '));
    }

	// comprised of xranges, tildes, stars, and gtlt's at this point.
	// already replaced the hyphen ranges
	// turn into a set of JUST comparators.
    function parseComparator(comp, loose) {
	  debug('comp', comp);
	  comp = replaceCarets(comp, loose);
	  debug('caret', comp);
	  comp = replaceTildes(comp, loose);
	  debug('tildes', comp);
	  comp = replaceXRanges(comp, loose);
	  debug('xrange', comp);
	  comp = replaceStars(comp, loose);
	  debug('stars', comp);
	  return comp;
    }

    function isX(id) {
	  return !id || id.toLowerCase() === 'x' || id === '*';
    }

	// ~, ~> --> * (any, kinda silly)
	// ~2, ~2.x, ~2.x.x, ~>2, ~>2.x ~>2.x.x --> >=2.0.0 <3.0.0
	// ~2.0, ~2.0.x, ~>2.0, ~>2.0.x --> >=2.0.0 <2.1.0
	// ~1.2, ~1.2.x, ~>1.2, ~>1.2.x --> >=1.2.0 <1.3.0
	// ~1.2.3, ~>1.2.3 --> >=1.2.3 <1.3.0
	// ~1.2.0, ~>1.2.0 --> >=1.2.0 <1.3.0
    function replaceTildes(comp, loose) {
	  return comp.trim().split(/\s+/).map((comp) => replaceTilde(comp, loose)).join(' ');
    }

    function replaceTilde(comp, loose) {
	  const r = loose ? re[TILDELOOSE] : re[TILDE];
	  return comp.replace(r, (_, M, m, p, pr) => {
	    debug('tilde', comp, _, M, m, p, pr);
	    let ret;

	    if (isX(M)) { ret = ''; } else if (isX(m)) { ret = `>=${M}.0.0 <${+M + 1}.0.0`; } else if (isX(p))
	      // ~1.2 == >=1.2.0 <1.3.0
	      { ret = `>=${M}.${m}.0 <${M}.${+m + 1}.0`; } else if (pr) {
	      debug('replaceTilde pr', pr);
	      if (pr.charAt(0) !== '-') { pr = `-${pr}`; }
	      ret = `>=${M}.${m}.${p}${pr
	            } <${M}.${+m + 1}.0`;
	    } else
	      // ~1.2.3 == >=1.2.3 <1.3.0
	      {
          ret = `>=${M}.${m}.${p
	            } <${M}.${+m + 1}.0`;
      }

	    debug('tilde return', ret);
	    return ret;
	  });
    }

	// ^ --> * (any, kinda silly)
	// ^2, ^2.x, ^2.x.x --> >=2.0.0 <3.0.0
	// ^2.0, ^2.0.x --> >=2.0.0 <3.0.0
	// ^1.2, ^1.2.x --> >=1.2.0 <2.0.0
	// ^1.2.3 --> >=1.2.3 <2.0.0
	// ^1.2.0 --> >=1.2.0 <2.0.0
    function replaceCarets(comp, loose) {
	  return comp.trim().split(/\s+/).map((comp) => replaceCaret(comp, loose)).join(' ');
    }

    function replaceCaret(comp, loose) {
	  debug('caret', comp, loose);
	  const r = loose ? re[CARETLOOSE] : re[CARET];
	  return comp.replace(r, (_, M, m, p, pr) => {
	    debug('caret', comp, _, M, m, p, pr);
	    let ret;

	    if (isX(M)) { ret = ''; } else if (isX(m)) { ret = `>=${M}.0.0 <${+M + 1}.0.0`; } else if (isX(p)) {
	      if (M === '0') { ret = `>=${M}.${m}.0 <${M}.${+m + 1}.0`; } else { ret = `>=${M}.${m}.0 <${+M + 1}.0.0`; }
	    } else if (pr) {
	      debug('replaceCaret pr', pr);
	      if (pr.charAt(0) !== '-') { pr = `-${pr}`; }
	      if (M === '0') {
	        if (m === '0') {
            ret = `>=${M}.${m}.${p}${pr
	                } <${M}.${m}.${+p + 1}`;
        } else {
            ret = `>=${M}.${m}.${p}${pr
	                } <${M}.${+m + 1}.0`;
        }
	      } else {
          ret = `>=${M}.${m}.${p}${pr
	              } <${+M + 1}.0.0`;
      }
	    } else {
	      debug('no pr');
	      if (M === '0') {
	        if (m === '0') {
            ret = `>=${M}.${m}.${p
	                } <${M}.${m}.${+p + 1}`;
        } else {
            ret = `>=${M}.${m}.${p
	                } <${M}.${+m + 1}.0`;
        }
	      } else {
          ret = `>=${M}.${m}.${p
	              } <${+M + 1}.0.0`;
      }
	    }

	    debug('caret return', ret);
	    return ret;
	  });
    }

    function replaceXRanges(comp, loose) {
	  debug('replaceXRanges', comp, loose);
	  return comp.split(/\s+/).map((comp) => replaceXRange(comp, loose)).join(' ');
    }

    function replaceXRange(comp, loose) {
	  comp = comp.trim();
	  const r = loose ? re[XRANGELOOSE] : re[XRANGE];
	  return comp.replace(r, (ret, gtlt, M, m, p, pr) => {
	    debug('xRange', comp, ret, gtlt, M, m, p, pr);
	    const xM = isX(M);
	    const xm = xM || isX(m);
	    const xp = xm || isX(p);
	    const anyX = xp;

	    if (gtlt === '=' && anyX) { gtlt = ''; }

	    if (xM) {
	      if (gtlt === '>' || gtlt === '<') {
	        // nothing is allowed
	        ret = '<0.0.0';
	      } else {
	        // nothing is forbidden
	        ret = '*';
	      }
	    } else if (gtlt && anyX) {
	      // replace X with 0
	      if (xm) { m = 0; }
	      if (xp) { p = 0; }

	      if (gtlt === '>') {
	        // >1 => >=2.0.0
	        // >1.2 => >=1.3.0
	        // >1.2.3 => >= 1.2.4
	        gtlt = '>=';
	        if (xm) {
	          M = +M + 1;
	          m = 0;
	          p = 0;
	        } else if (xp) {
	          m = +m + 1;
	          p = 0;
	        }
	      } else if (gtlt === '<=') {
	        // <=0.7.x is actually <0.8.0, since any 0.7.x should
	        // pass.  Similarly, <=7.x is actually <8.0.0, etc.
	        gtlt = '<';
	        if (xm) { M = +M + 1; } else { m = +m + 1; }
	      }

	      ret = `${gtlt + M}.${m}.${p}`;
	    } else if (xm) {
	      ret = `>=${M}.0.0 <${+M + 1}.0.0`;
	    } else if (xp) {
	      ret = `>=${M}.${m}.0 <${M}.${+m + 1}.0`;
	    }

	    debug('xRange return', ret);

	    return ret;
	  });
    }

	// Because * is AND-ed with everything else in the comparator,
	// and '' means "any version", just remove the *s entirely.
    function replaceStars(comp, loose) {
	  debug('replaceStars', comp, loose);
	  // Looseness is ignored here.  star is always as loose as it gets!
	  return comp.trim().replace(re[STAR], '');
    }

	// This function is passed to string.replace(re[HYPHENRANGE])
	// M, m, patch, prerelease, build
	// 1.2 - 3.4.5 => >=1.2.0 <=3.4.5
	// 1.2.3 - 3.4 => >=1.2.0 <3.5.0 Any 3.4.x will do
	// 1.2 - 3.4 => >=1.2.0 <3.5.0
    function hyphenReplace($0,
	                       from, fM, fm, fp, fpr, fb,
	                       to, tM, tm, tp, tpr, tb) {
	  if (isX(fM)) { from = ''; } else if (isX(fm)) { from = `>=${fM}.0.0`; } else if (isX(fp)) { from = `>=${fM}.${fm}.0`; } else { from = `>=${from}`; }

	  if (isX(tM)) { to = ''; } else if (isX(tm)) { to = `<${+tM + 1}.0.0`; } else if (isX(tp)) { to = `<${tM}.${+tm + 1}.0`; } else if (tpr) { to = `<=${tM}.${tm}.${tp}-${tpr}`; } else { to = `<=${to}`; }

	  return (`${from} ${to}`).trim();
    }


	// if ANY of the sets match ALL of its comparators, then pass
    Range.prototype.test = function (version) {
	  if (!version) { return false; }

	  if (typeof version === 'string') { version = new SemVer(version, this.loose); }

	  for (let i = 0; i < this.set.length; i++) {
	    if (testSet(this.set[i], version)) { return true; }
	  }
	  return false;
    };

    function testSet(set, version) {
	  for (var i = 0; i < set.length; i++) {
	    if (!set[i].test(version)) { return false; }
	  }

	  if (version.prerelease.length) {
	    // Find the set of versions that are allowed to have prereleases
	    // For example, ^1.2.3-pr.1 desugars to >=1.2.3-pr.1 <2.0.0
	    // That should allow `1.2.3-pr.2` to pass.
	    // However, `1.2.4-alpha.notready` should NOT be allowed,
	    // even though it's within the range set by the comparators.
	    for (var i = 0; i < set.length; i++) {
	      debug(set[i].semver);
	      if (set[i].semver === ANY) { continue; }

	      if (set[i].semver.prerelease.length > 0) {
	        const allowed = set[i].semver;
	        if (allowed.major === version.major &&
	            allowed.minor === version.minor &&
	            allowed.patch === version.patch) { return true; }
	      }
	    }

	    // Version has a -pre, but it's not one of the ones we like.
	    return false;
	  }

	  return true;
    }

    exports.satisfies = satisfies;
    function satisfies(version, range, loose) {
	  try {
	    range = new Range(range, loose);
	  } catch (er) {
	    return false;
	  }
	  return range.test(version);
    }

    exports.maxSatisfying = maxSatisfying;
    function maxSatisfying(versions, range, loose) {
	  let max = null;
	  let maxSV = null;
	  try {
	    var rangeObj = new Range(range, loose);
	  } catch (er) {
	    return null;
	  }
	  versions.forEach((v) => {
	    if (rangeObj.test(v)) { // satisfies(v, range, loose)
	      if (!max || maxSV.compare(v) === -1) { // compare(max, v, true)
	        max = v;
	        maxSV = new SemVer(max, loose);
	      }
	    }
	  })
	  return max;
    }

    exports.minSatisfying = minSatisfying;
    function minSatisfying(versions, range, loose) {
	  let min = null;
	  let minSV = null;
	  try {
	    var rangeObj = new Range(range, loose);
	  } catch (er) {
	    return null;
	  }
	  versions.forEach((v) => {
	    if (rangeObj.test(v)) { // satisfies(v, range, loose)
	      if (!min || minSV.compare(v) === 1) { // compare(min, v, true)
	        min = v;
	        minSV = new SemVer(min, loose);
	      }
	    }
	  })
	  return min;
    }

    exports.validRange = validRange;
    function validRange(range, loose) {
	  try {
	    // Return '*' instead of '' so that truthiness works.
	    // This will throw if it's invalid anyway
	    return new Range(range, loose).range || '*';
	  } catch (er) {
	    return null;
	  }
    }

	// Determine if version is less than all the versions possible in the range
    exports.ltr = ltr;
    function ltr(version, range, loose) {
	  return outside(version, range, '<', loose);
    }

	// Determine if version is greater than all the versions possible in the range.
    exports.gtr = gtr;
    function gtr(version, range, loose) {
	  return outside(version, range, '>', loose);
    }

    exports.outside = outside;
    function outside(version, range, hilo, loose) {
	  version = new SemVer(version, loose);
	  range = new Range(range, loose);

	  let gtfn,
      ltefn,
      ltfn,
      comp,
      ecomp;
	  switch (hilo) {
	    case '>':
	      gtfn = gt;
	      ltefn = lte;
	      ltfn = lt;
	      comp = '>';
	      ecomp = '>=';
	      break;
	    case '<':
	      gtfn = lt;
	      ltefn = gte;
	      ltfn = gt;
	      comp = '<';
	      ecomp = '<=';
	      break;
	    default:
	      throw new TypeError('Must provide a hilo val of "<" or ">"');
	  }

	  // If it satisifes the range it is not outside
	  if (satisfies(version, range, loose)) {
	    return false;
	  }

	  // From now on, variable terms are as if we're in "gtr" mode.
	  // but note that everything is flipped for the "ltr" function.

	  for (let i = 0; i < range.set.length; ++i) {
	    const comparators = range.set[i];

	    var high = null;
	    var low = null;

	    comparators.forEach((comparator) => {
	      if (comparator.semver === ANY) {
	        comparator = new Comparator('>=0.0.0')
	      }
	      high = high || comparator;
	      low = low || comparator;
	      if (gtfn(comparator.semver, high.semver, loose)) {
	        high = comparator;
	      } else if (ltfn(comparator.semver, low.semver, loose)) {
	        low = comparator;
	      }
	    });

	    // If the edge version comparator has a operator then our version
	    // isn't outside it
	    if (high.operator === comp || high.operator === ecomp) {
	      return false;
	    }

	    // If the lowest version comparator has an operator and our version
	    // is less than it then it isn't higher than the range
	    if ((!low.operator || low.operator === comp) &&
	        ltefn(version, low.semver)) {
	      return false;
	    } else if (low.operator === ecomp && ltfn(version, low.semver)) {
	      return false;
	    }
	  }
	  return true;
    }

    exports.prerelease = prerelease;
    function prerelease(version, loose) {
	  const parsed = parse(version, loose);
	  return (parsed && parsed.prerelease.length) ? parsed.prerelease : null;
    }

    exports.intersects = intersects;
    function intersects(r1, r2, loose) {
	  r1 = new Range(r1, loose)
	  r2 = new Range(r2, loose)
	  return r1.intersects(r2)
    }
/** */ }),
/* 422 */
/** */ (function (module, exports, __webpack_require__) {
    Object.defineProperty(exports, '__esModule', {
	  value: true
    });

    const _fs = __webpack_require__(340);

    const _fs2 = _interopRequireDefault(_fs);

    const _path = __webpack_require__(342);

    const _path2 = _interopRequireDefault(_path);

    const _rimraf = __webpack_require__(407);

    const _rimraf2 = _interopRequireDefault(_rimraf);

    const _crossUnzip = __webpack_require__(423);

    const _crossUnzip2 = _interopRequireDefault(_crossUnzip);

    const _utils = __webpack_require__(426);

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

    const downloadChromeExtension = function downloadChromeExtension(chromeStoreID, forceDownload) {
	  const attempts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 5;

	  const extensionsStore = (0, _utils.getPath)();
	  if (!_fs2.default.existsSync(extensionsStore)) {
	    _fs2.default.mkdirSync(extensionsStore);
	  }
	  const extensionFolder = _path2.default.resolve(`${extensionsStore}/${chromeStoreID}`);
	  return new Promise((resolve, reject) => {
	    if (!_fs2.default.existsSync(extensionFolder) || forceDownload) {
	      (function () {
	        if (_fs2.default.existsSync(extensionFolder)) {
	          _rimraf2.default.sync(extensionFolder);
	        }
	        var fileURL = 'https://clients2.google.com/service/update2/crx?response=redirect&x=id%3D' + chromeStoreID + '%26uc&prodversion=32'; // eslint-disable-line
	        const filePath = _path2.default.resolve(`${extensionFolder}.crx`);
	        (0, _utils.downloadFile)(fileURL, filePath).then(() => {
	          (0, _crossUnzip2.default)(filePath, extensionFolder, (err) => {
	            if (err && !_fs2.default.existsSync(_path2.default.resolve(extensionFolder, 'manifest.json'))) {
	              return reject(err);
	            }
	            resolve(extensionFolder);
	          });
	        }).catch((err) => {
	          console.log('Failed to fetch extension, trying ' + (attempts - 1) + ' more times'); // eslint-disable-line
	          if (attempts <= 1) {
	            return reject(err);
	          }
	          setTimeout(() => {
	            downloadChromeExtension(chromeStoreID, forceDownload, attempts - 1).then(resolve).catch(reject);
	          }, 200);
	        });
	      }());
	    } else {
	      resolve(extensionFolder);
	    }
	  });
    };

    exports.default = downloadChromeExtension;
/** */ }),
/* 423 */
/** */ (function (module, exports, __webpack_require__) {
    const spawn = __webpack_require__(384).spawn
    const slice = Array.prototype.slice

    const unzip = process.platform === 'win32' ? forWin32 : forUnix
    unzip.unzip = unzip
    module.exports = unzip

	// todo: progress feedback

	// https://github.com/fritx/win-7zip
    function forWin32(inPath, outPath, callback) {
	  const _7z = __webpack_require__(424)['7z']

	  // very 奇葩
	  // eg. 7z x archive.zip -oc:\Doc
	  run(_7z, ['x', inPath, '-y', `-o${outPath}`], callback)
    }

    function forUnix(inPath, outPath, callback) {
	  run('unzip', ['-o', inPath, '-d', outPath], callback)
    }

	// https://nodejs.org/api/child_process.html#child_process_event_error
	// Note that the 'exit' event may or may not fire after an error has occurred.
	// If you are listening to both the 'exit' and 'error' events,
	// it is important to guard against accidentally invoking handler functions multiple times.
    function run(bin, args, callback) {
	  callback = onceify(callback)

	  const prc = spawn(bin, args, {
	    stdio: 'ignore'
	  })
	  prc.on('error', (err) => {
	    callback(err)
	  })
	  prc.on('exit', (code) => {
	    callback(code ? new Error(`Exited with code ${code}`) : null)
	  })
    }

	// http://stackoverflow.com/questions/30234908/javascript-v8-optimisation-and-leaking-arguments
	// javascript V8 optimisation and “leaking arguments”
	// making callback to be invoked only once
    function onceify(fn) {
	  let called = false
	  return function () {
	    if (called) return
	    called = true
	    fn.apply(this, slice.call(arguments)) // slice arguments
	  }
    }
/** */ }),
/* 424 */
/** */ (function (module, exports, __webpack_require__) {
    const resolve = __webpack_require__(342).resolve
    const bin = __webpack_require__(425).bin

    module.exports = map_obj(bin, (v) => resolve(__dirname, v))

    function map_obj(obj, fn) {
	  return Object.keys(obj).reduce((m, k) => {
	    m[k] = fn(obj[k])
	    return m
	  }, {})
    }
/** */ }),
/* 425 */
/** */ (function (module, exports) {
    module.exports = { _args: [[{ raw: '7zip@0.0.6', scope: null, escapedName: '7zip', name: '7zip', rawSpec: '0.0.6', spec: '0.0.6', type: 'version' }, '/Users/builldog/Documents/buildog/LP/node_modules/electron-devtools-installer']], _from: '7zip@0.0.6', _id: '7zip@0.0.6', _inCache: true, _location: '/7zip', _nodeVersion: '5.11.0', _npmOperationalInternal: { host: 'packages-12-west.internal.npmjs.com', tmp: 'tmp/7zip-0.0.6.tgz_1463274735811_0.1922009070403874' }, _npmUser: { name: 'fritx', email: 'uxfritz@163.com' }, _npmVersion: '3.8.6', _phantomChildren: {}, _requested: { raw: '7zip@0.0.6', scope: null, escapedName: '7zip', name: '7zip', rawSpec: '0.0.6', spec: '0.0.6', type: 'version' }, _requiredBy: ['/electron-devtools-installer'], _resolved: 'https://registry.npmjs.org/7zip/-/7zip-0.0.6.tgz', _shasum: '9cafb171af82329490353b4816f03347aa150a30', _shrinkwrap: null, _spec: '7zip@0.0.6', _where: '/Users/builldog/Documents/buildog/LP/node_modules/electron-devtools-installer', bin: { '7z': '7zip-lite/7z.exe' }, bugs: { url: 'https://github.com/fritx/win-7zip/issues' }, dependencies: {}, description: '7zip Windows Package via Node.js', devDependencies: {}, directories: {}, dist: { shasum: '9cafb171af82329490353b4816f03347aa150a30', tarball: 'https://registry.npmjs.org/7zip/-/7zip-0.0.6.tgz' }, gitHead: 'ece5481873f357545c99a9e2f9e1cdb3fe76de2d', homepage: 'https://github.com/fritx/win-7zip#readme', keywords: ['7z', '7zip', '7-zip', 'windows', 'install'], license: 'GNU LGPL', main: 'index.js', maintainers: [{ name: 'fritx', email: 'uxfritz@163.com' }], name: '7zip', optionalDependencies: {}, readme: 'ERROR: No README data found!', repository: { type: 'git', url: 'git+ssh://git@github.com/fritx/win-7zip.git' }, scripts: { test: 'mocha' }, version: '0.0.6' }
/** */ }),
/* 426 */
/** */ (function (module, exports, __webpack_require__) {
    Object.defineProperty(exports, '__esModule', {
	  value: true
    });
    exports.downloadFile = exports.getPath = undefined;

    const _electron = __webpack_require__(330);

    const _electron2 = _interopRequireDefault(_electron);

    const _fs = __webpack_require__(340);

    const _fs2 = _interopRequireDefault(_fs);

    const _path = __webpack_require__(342);

    const _path2 = _interopRequireDefault(_path);

    const _https = __webpack_require__(346);

    const _https2 = _interopRequireDefault(_https);

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

    const getPath = exports.getPath = function getPath() {
	  const savePath = (_electron.remote || _electron2.default).app.getPath('userData');
	  return _path2.default.resolve(`${savePath}/extensions`);
    };

	// Use https.get fallback for Electron < 1.4.5

    let _ref = _electron.remote || _electron2.default,
	    net = _ref.net;

    const request = net ? net.request : _https2.default.get;

    const downloadFile = exports.downloadFile = function downloadFile(from, to) {
	  return new Promise((resolve, reject) => {
	    const req = request(from);
	    req.on('response', (res) => {
	      // Shouldn't handle redirect with `electron.net`, this is for https.get fallback
	      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
	        return downloadFile(res.headers.location, to).then(resolve).catch(reject);
	      }
	      res.pipe(_fs2.default.createWriteStream(to)).on('close', resolve);
	    });
	    req.on('error', reject);
	    req.end();
	  });
    };
/** */ })
/** ****/ ]));
// # sourceMappingURL=main.js.map
