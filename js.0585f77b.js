// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"ZBnv":[function(require,module,exports) {
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;
module.exports["default"] = module.exports, module.exports.__esModule = true;
},{}],"NoOd":[function(require,module,exports) {
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;
module.exports["default"] = module.exports, module.exports.__esModule = true;
},{}],"xwXl":[function(require,module,exports) {
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;
module.exports["default"] = module.exports, module.exports.__esModule = true;
},{}],"fwsn":[function(require,module,exports) {
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;
module.exports["default"] = module.exports, module.exports.__esModule = true;
},{}],"O57Z":[function(require,module,exports) {
function _classApplyDescriptorGet(receiver, descriptor) {
  if (descriptor.get) {
    return descriptor.get.call(receiver);
  }

  return descriptor.value;
}

module.exports = _classApplyDescriptorGet;
module.exports["default"] = module.exports, module.exports.__esModule = true;
},{}],"aIcP":[function(require,module,exports) {
function _classExtractFieldDescriptor(receiver, privateMap, action) {
  if (!privateMap.has(receiver)) {
    throw new TypeError("attempted to " + action + " private field on non-instance");
  }

  return privateMap.get(receiver);
}

module.exports = _classExtractFieldDescriptor;
module.exports["default"] = module.exports, module.exports.__esModule = true;
},{}],"IfMn":[function(require,module,exports) {
var classApplyDescriptorGet = require("./classApplyDescriptorGet.js");

var classExtractFieldDescriptor = require("./classExtractFieldDescriptor.js");

function _classPrivateFieldGet(receiver, privateMap) {
  var descriptor = classExtractFieldDescriptor(receiver, privateMap, "get");
  return classApplyDescriptorGet(receiver, descriptor);
}

module.exports = _classPrivateFieldGet;
module.exports["default"] = module.exports, module.exports.__esModule = true;
},{"./classApplyDescriptorGet.js":"O57Z","./classExtractFieldDescriptor.js":"aIcP"}],"KA2S":[function(require,module,exports) {
var define;
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

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
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = GeneratorFunctionPrototype;
  define(Gp, "constructor", GeneratorFunctionPrototype);
  define(GeneratorFunctionPrototype, "constructor", GeneratorFunction);
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
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
  define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  });
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
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

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
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
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
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
      if (context.method !== "return") {
        context.method = "next";
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

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  define(Gp, iteratorSymbol, function() {
    return this;
  });

  define(Gp, "toString", function() {
    return "[object Generator]";
  });

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

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
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
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
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
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
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

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
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
  typeof module === "object" ? module.exports : {}
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, in modern engines
  // we can explicitly access globalThis. In older engines we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}

},{}],"m4eR":[function(require,module,exports) {
module.exports = require("regenerator-runtime");
},{"regenerator-runtime":"KA2S"}],"PUOG":[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Api = void 0;

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _classPrivateFieldGet2 = _interopRequireDefault(require("@babel/runtime/helpers/classPrivateFieldGet"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _apiUrlSearch = /*#__PURE__*/new WeakMap();

var _apiUrlImage = /*#__PURE__*/new WeakMap();

var _imageSize = /*#__PURE__*/new WeakMap();

var Api = /*#__PURE__*/function () {
  function Api() {
    (0, _classCallCheck2.default)(this, Api);

    _apiUrlSearch.set(this, {
      writable: true,
      value: "https://openlibrary.org"
    });

    _apiUrlImage.set(this, {
      writable: true,
      value: "https://covers.openlibrary.org"
    });

    _imageSize.set(this, {
      writable: true,
      value: "L"
    });
  }

  (0, _createClass2.default)(Api, [{
    key: "searchBooks",
    value: function () {
      var _searchBooks = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(fullQuerry) {
        var url, response;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                url = "".concat((0, _classPrivateFieldGet2.default)(this, _apiUrlSearch), "/search.json?").concat(fullQuerry);
                _context.prev = 1;
                _context.next = 4;
                return fetch(url, {
                  mode: 'cors'
                });

              case 4:
                response = _context.sent;

                if (!response.ok) {
                  _context.next = 9;
                  break;
                }

                _context.next = 8;
                return response.json();

              case 8:
                return _context.abrupt("return", _context.sent);

              case 9:
                console.error("Request ".concat(url, " failed with ").concat(response.status));
                _context.next = 15;
                break;

              case 12:
                _context.prev = 12;
                _context.t0 = _context["catch"](1);
                console.error("Request ".concat(url, " failed with error"), _context.t0);

              case 15:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[1, 12]]);
      }));

      function searchBooks(_x) {
        return _searchBooks.apply(this, arguments);
      }

      return searchBooks;
    }()
  }, {
    key: "searchBooksQuerry",
    value: function () {
      var _searchBooksQuerry = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2(querry, page) {
        var url, response;
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                url = "".concat((0, _classPrivateFieldGet2.default)(this, _apiUrlSearch), "/search.json?q=").concat(querry, "&page=").concat(page);
                _context2.prev = 1;
                _context2.next = 4;
                return fetch(url, {
                  mode: 'cors'
                });

              case 4:
                response = _context2.sent;

                if (!response.ok) {
                  _context2.next = 9;
                  break;
                }

                _context2.next = 8;
                return response.json();

              case 8:
                return _context2.abrupt("return", _context2.sent);

              case 9:
                console.error("Request ".concat(url, " failed with ").concat(response.status));
                _context2.next = 15;
                break;

              case 12:
                _context2.prev = 12;
                _context2.t0 = _context2["catch"](1);
                console.error("Request ".concat(url, " failed with error"), _context2.t0);

              case 15:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[1, 12]]);
      }));

      function searchBooksQuerry(_x2, _x3) {
        return _searchBooksQuerry.apply(this, arguments);
      }

      return searchBooksQuerry;
    }()
  }, {
    key: "searchBookImage",
    value: function () {
      var _searchBookImage = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3(bookLinks) {
        var url, response;
        return _regenerator.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                url = "".concat((0, _classPrivateFieldGet2.default)(this, _apiUrlImage), "/b/").concat(bookLinks, "-").concat((0, _classPrivateFieldGet2.default)(this, _imageSize), ".jpg?default=false");
                _context3.prev = 1;
                _context3.next = 4;
                return fetch("".concat(url), {
                  mode: 'cors'
                });

              case 4:
                response = _context3.sent;

                if (!response.ok) {
                  _context3.next = 11;
                  break;
                }

                _context3.next = 8;
                return response.blob();

              case 8:
                return _context3.abrupt("return", _context3.sent);

              case 11:
                _context3.next = 16;
                break;

              case 13:
                _context3.prev = 13;
                _context3.t0 = _context3["catch"](1);
                console.error("Request ".concat(url, " failed with error"), _context3.t0);

              case 16:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[1, 13]]);
      }));

      function searchBookImage(_x4) {
        return _searchBookImage.apply(this, arguments);
      }

      return searchBookImage;
    }()
  }]);
  return Api;
}();

exports.Api = Api;
},{"@babel/runtime/helpers/asyncToGenerator":"fwsn","@babel/runtime/helpers/classCallCheck":"ZBnv","@babel/runtime/helpers/createClass":"NoOd","@babel/runtime/helpers/classPrivateFieldGet":"IfMn","@babel/runtime/regenerator":"m4eR"}],"cojp":[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BookInfo = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _api = require("./api");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BookInfo = /*#__PURE__*/function () {
  function BookInfo() {
    (0, _classCallCheck2.default)(this, BookInfo);
    (0, _defineProperty2.default)(this, "targetBook", []);
    (0, _defineProperty2.default)(this, "api", new _api.Api());
    (0, _defineProperty2.default)(this, "i", 0);
    (0, _defineProperty2.default)(this, "imageLinks", []);
    // console.log('BookInfo');
    this.bookInfoHeader = document.getElementById("bookInfoHeader");
    this.bookInfoProps = document.getElementById("bookInfoProps");
  }

  (0, _createClass2.default)(BookInfo, [{
    key: "addToReadList",
    value: function addToReadList(storage) {
      var _this = this;

      if (!storage) {
        return;
      }

      var message = '';
      var bookAdded = false;
      this.targetBook.read = false;
      var myBooks = storage.get("myBooks"); // console.log(myBooks);

      if (myBooks) {
        var checkBookInStorage = myBooks.filter(function (item) {
          return item.id == _this.targetBook.id;
        }).length > 0; // console.log(`book "${this.targetBook.title}" in storage? = ` + checkBookInStorage);

        if (checkBookInStorage) {
          bookAdded = false;
          message = "This book is already in Read List";
        } else {
          myBooks.push(this.targetBook);
          bookAdded = true;
          message = "This book was added in Read List";
        }
      } else if (!myBooks) {
        myBooks = [];
        myBooks.push(this.targetBook);
        bookAdded = true;
        message = "This book was added in Read List";
      }

      this.pushMessage(bookAdded, message);
      storage.set("myBooks", myBooks);
    }
  }, {
    key: "pushMessage",
    value: function pushMessage(bookAdded, message) {
      var AddToReadMessage = document.createElement('div');
      AddToReadMessage.classList.add('message');
      AddToReadMessage.textContent = message;
      AddToReadMessage.style.backgroundColor = bookAdded ? '#c6fdcd' : '#fdc6c6';
      addToReadButton.appendChild(AddToReadMessage);
      setTimeout(function () {
        AddToReadMessage.remove();
      }, 2000);
    }
  }, {
    key: "setBookInfo",
    value: function setBookInfo(book) {
      var _book$author_name,
          _book$language,
          _this2 = this,
          _book$publish_year;

      this.targetBook = book;
      this.bookInfoHeader.innerHTML = "";
      this.bookInfoProps.innerHTML = "";
      addToReadButton.style.display = "block"; // this.bookInfoProps.innerHTML += book.title ? `<h2 class="book-info__title">${book.title}</h2>` : ``; // var 3
      // book.title && (this.bookInfoProps.innerHTML += `<h3 class="book-info__title">${book.title}</h3>`);   // var 2

      this.bookInfoHeader.innerHTML += "<h2 class=\"book-info__title\">".concat(book.title, "</h2>"); // var 1

      if (book.subtitle) {
        this.bookInfoProps.innerHTML += "<h3 class=\"book-info__subtitle\">".concat(book.subtitle, "</h3>");
      }

      this.bookInfoProps.innerHTML += "<img class=\"book-info__img\" id=\"bookPicture\"></img>";
      this.imageLinks = this.getImageLinks(book);
      this.loadBookImage(this.imageLinks, this.i);
      this.addPropsHtml("Author:", (_book$author_name = book.author_name) === null || _book$author_name === void 0 ? void 0 : _book$author_name.join(", "));
      this.addPropsHtml("Languages available:", (_book$language = book.language) === null || _book$language === void 0 ? void 0 : _book$language.map(function (item) {
        return _this2.getFlagHTML(item) + item;
      }).join(", "));
      this.addPropsHtml("Full text available:", book.has_fulltext);
      this.addPropsHtml("First publish year:", book.first_publish_year);
      this.addPropsHtml("Years published:", (_book$publish_year = book.publish_year) === null || _book$publish_year === void 0 ? void 0 : _book$publish_year.join(", "));
    }
  }, {
    key: "addPropsHtml",
    value: function addPropsHtml(propTitle, bookKey) {
      if (bookKey) {
        this.bookInfoProps.innerHTML += "<div class=\"book-info__prop\">\n        <span class=\"book-info__prop-title\">".concat(propTitle, "</span>\n        <span class=\"book-info__prop-value\">").concat(bookKey, "</span>\n      </div>");
      }
    }
  }, {
    key: "getImageLinks",
    value: function getImageLinks(book) {
      this.i = 0; // индекс первого искомого элемента в массиве картинкок

      var imageLinks = []; // Все возможные части ссылок на картинки

      book.cover_i && imageLinks.push("id/".concat(book.cover_i));
      book.isbn && book.isbn.forEach(function (value) {
        return imageLinks.push("isbn/".concat(value));
      });
      book.lccn && book.lccn.forEach(function (value) {
        return imageLinks.push("lccn/".concat(value));
      });
      book.olid && book.olid.forEach(function (value) {
        return imageLinks.push("olid/".concat(value));
      });
      book.oclc && book.oclc.forEach(function (value) {
        return imageLinks.push("oclc/".concat(value));
      });
      return imageLinks;
    }
  }, {
    key: "loadBookImage",
    value: function loadBookImage(imageLinks, i) {
      var _this3 = this;

      if (!imageLinks[i] || imageLinks.length == this.i) return; // console.log('link = ', imageLinks[i], '; i = ', i);

      this.api.searchBookImage(imageLinks[i]).then(function (blob) {
        var objectURL = window.URL.createObjectURL(blob);
        var bookPicture = document.getElementById('bookPicture');

        if (bookPicture.src === '') {
          bookPicture.src = objectURL;
        }
      }).catch(function (error) {
        // console.log('error:', error);
        // Если нету картинки по ссылке, смотрим следующую 
        // и так, пока не найдётся или не закончатся варианты
        _this3.i++;

        _this3.loadBookImage(_this3.imageLinks, _this3.i);
      });
    } //#region getFlagsHTML

  }, {
    key: "getFlagHTML",
    value: function getFlagHTML(item) {
      // console.log(item);
      if (item == 'eng') item = 'gb';
      if (item == 'rus') item = 'ru';
      if (item == 'spa') item = 'es';
      if (item == 'esp') item = 'es';
      if (item == 'ger') item = 'de';
      if (item == 'chi') item = 'cn';
      if (item == 'ukr') item = 'ua';
      if (item == 'fre') item = 'fr';
      if (item == 'ita') item = 'it';
      if (item == 'jpn') item = 'jp';
      if (item == 'por') item = 'pt';
      if (item == 'iri') item = 'ie';
      if (item == 'alb') item = 'al';
      if (item == 'scc') item = 'rs';
      if (item == 'dut') item = 'nl';
      if (item == 'dan') item = 'dk';
      if (item == 'cze') item = 'cz';
      if (item == 'mon') item = 'mn';
      if (item == 'scr') item = 'hr';
      if (item == 'hrv') item = 'hr';
      if (item == 'ara') item = 'ae';
      if (item == 'pol') item = 'pl';
      if (item == 'fin') item = 'fi';
      if (item == 'swe') item = 'se';
      if (item == 'rum') item = 'ro';
      if (item == 'est') item = 'ee';
      if (item == 'sco') item = 'gb-sct';
      if (item == 'grc') item = 'gr';
      if (item == 'hun') item = 'hu';
      if (item == 'slo') item = 'sk';
      if (item == 'kor') item = 'kr';
      if (item == 'ice') item = 'is';
      if (item == 'bul') item = 'bg';
      if (item == 'tur') item = 'tr';
      if (item == 'gre') item = 'gr';
      if (item == 'arm') item = 'am';
      if (item == 'wal') item = 'gb-wls';
      if (item == 'amh') item = 'et';
      if (item == 'mol') item = 'md';
      if (item == 'tgl') item = 'ph';
      if (item == 'heb') item = 'il';
      if (item == 'lit') item = 'lt';
      if (item == 'vie') item = 'vn';
      if (item == 'nor') item = 'no';
      if (item.length === 3) return "";
      return "<img class=\"book-info__flag\" src=\"https://flagcdn.com/16x12/".concat(item, ".png\"></img> ");
    } //#endregion getFlagsHTML

  }]);
  return BookInfo;
}();

exports.BookInfo = BookInfo;
},{"@babel/runtime/helpers/classCallCheck":"ZBnv","@babel/runtime/helpers/createClass":"NoOd","@babel/runtime/helpers/defineProperty":"xwXl","./api":"PUOG"}],"hQ4w":[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ButtonsController = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ButtonsController = /*#__PURE__*/function () {
  function ButtonsController(storage, bookInfo) {
    var _this = this;

    (0, _classCallCheck2.default)(this, ButtonsController);
    (0, _defineProperty2.default)(this, "bookId", void 0);
    // console.log('ButtonsController');
    this.storage = storage;
    this.bookInfo = bookInfo;
    this.readList = document.getElementById("readList");
    var addToReadButton = document.getElementById("addToReadButton");
    addToReadButton.addEventListener("click", function (e) {
      return _this.bookInfo.addToReadList(_this.storage);
    });
    this.readList.addEventListener("click", function (e) {
      return _this.trackElement(e);
    });
  }

  (0, _createClass2.default)(ButtonsController, [{
    key: "trackElement",
    value: function trackElement(e) {
      var item = e.target;

      if (item.tagName == 'BUTTON') {
        // console.log('click button');
        this.bookId = item.parentNode.parentNode.parentNode.parentNode.dataset.bookId;
        this.onChangeReadList(this.bookId, item.id);
      }

      if (item.tagName == 'DIV') {
        // console.log('click book');
        this.bookId = item.dataset.bookId;
        this.showBook(this.bookId, e);
      }
    }
  }, {
    key: "onChangeReadList",
    value: function onChangeReadList(bookId, divId) {
      var myBooks = this.storage.get("myBooks");
      myBooks.forEach(function (item, i, object) {
        if (item.id == bookId) {
          if (divId == 'markAsReadButton') {
            item.read = true;
          }

          if (divId == 'unmarkAsReadButton') {
            item.read = false;
          }

          if (divId == 'removefromListButton') {
            object.splice(i, 1);
          }
        }
      });
      this.storage.set("myBooks", myBooks);
    }
  }, {
    key: "showBook",
    value: function showBook(bookId, e) {
      var targetDiv = e.target;
      var myBooks = this.storage.get("myBooks");
      var selectBook = myBooks.find(function (item) {
        return item.id == bookId;
      });

      if (!selectBook) {
        return;
      }

      var LastSelectedBook = document.getElementsByClassName("book-card--active");

      if (LastSelectedBook[0]) {
        LastSelectedBook[0].classList.remove("book-card--active");
      }

      this.LastSelectedBook = selectBook;
      targetDiv.classList.add("book-card--active");
      this.bookInfo.setBookInfo(selectBook);
    }
  }]);
  return ButtonsController;
}();

exports.ButtonsController = ButtonsController;
},{"@babel/runtime/helpers/classCallCheck":"ZBnv","@babel/runtime/helpers/createClass":"NoOd","@babel/runtime/helpers/defineProperty":"xwXl"}],"aYl1":[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BookCard = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BookCard = /*#__PURE__*/function () {
  function BookCard(bookInfo) {
    var _this = this;

    (0, _classCallCheck2.default)(this, BookCard);
    // console.log('BookCard');
    this.currentPage = [];
    this.bookInfo = bookInfo;
    var booksList = document.querySelector("#booksList");
    booksList.addEventListener("click", function (e) {
      return _this.onClickBookCard(e, _this.currentPage);
    });
  }

  (0, _createClass2.default)(BookCard, [{
    key: "setCurrentPage",
    value: function setCurrentPage(currentPage) {
      this.currentPage = currentPage;
    }
  }, {
    key: "onClickBookCard",
    value: function onClickBookCard(e, currentPage) {
      var targetDiv = e.target;
      var id = targetDiv.id;
      var selectBook = currentPage.find(function (item) {
        return item.id === id;
      });

      if (!selectBook) {
        return;
      }

      var LastSelectedBook = document.getElementsByClassName("book-card--active");

      if (LastSelectedBook[0]) {
        LastSelectedBook[0].classList.remove("book-card--active");
      }

      this.LastSelectedBook = selectBook;
      targetDiv.classList.add("book-card--active");
      this.bookInfo.setBookInfo(selectBook);
    }
  }]);
  return BookCard;
}();

exports.BookCard = BookCard;
},{"@babel/runtime/helpers/classCallCheck":"ZBnv","@babel/runtime/helpers/createClass":"NoOd"}],"A8J8":[function(require,module,exports) {
module.exports = "/dataart-to-read-list/skin.b4b31e92.png";
},{}],"kesZ":[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BooksList = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _skin = _interopRequireDefault(require("./../img/skin.png"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import url from "file!./file.png"
// import image from '/../src/img/skin.png';
var BooksList = /*#__PURE__*/function () {
  function BooksList() {
    (0, _classCallCheck2.default)(this, BooksList);
    // console.log('BooksList');
    this.currentPage = []; // const booksList =     document.querySelector("#booksList");
    // const booksShown =    document.querySelector("#booksShown");
    // const booksFound =    document.querySelector("#booksFound");
  }

  (0, _createClass2.default)(BooksList, [{
    key: "addBooksList",
    value: function addBooksList(page) {
      page.docs.forEach(function (item) {
        item.id = item.key.split("/").pop();
      });
      this.currentPage = page.docs;
      var blueBook = "https://www.clker.com/cliparts/c/f/n/A/k/T/book-th.png";
      var redBook = "https://www.clker.com/cliparts/U/a/w/s/n/V/c-users-public-pictures-sample-pictures-th.png";
      var booksListHTML = this.currentPage.reduce(function (acc, item) {
        return acc + "<div id=\"".concat(item.id, "\" class=\"book-card\">\n          <div class=\"book-card__container\">\n\n            <img class=\"book-card__img\" src=\"").concat(item.cover_i ? "https://covers.openlibrary.org/b/id/".concat(item.cover_i, "-L.jpg?default=false") : "".concat(item.isbn ? "https://covers.openlibrary.org/b/isbn/".concat(item.isbn[0], "-L.jpg?default=false") : "".concat(_skin.default)), "\" onError=\"this.src='").concat(_skin.default, "'\">\n            <div class=\"book-card__header\">\n              <span class=\"book-card__title\">").concat(item.title, "</span> \n              ").concat(item.language ? "<span class=\"book-card__lang\">".concat(item.language.join(", "), "</span>") : "", "\n              ").concat(item.subtitle ? "<div class=\"book-card__subtitle\">".concat(item.subtitle, "</div>") : "", "\n            </div> \n          </div> \n        </div>");
      }, "");
      booksList.innerHTML += booksListHTML;
      booksShown.innerHTML = "Shown books: ".concat(this.numShown(page));
      booksFound.innerHTML = "Found books: ".concat(page.numFound);
    }
  }, {
    key: "numShown",
    value: function numShown(page) {
      var start = page.start;
      var pageSize = page.docs.length;
      var numberShownBooks;

      if (pageSize == 100) {
        numberShownBooks = start + 100;
      } else {
        numberShownBooks = start + pageSize;
      }

      return numberShownBooks;
    }
  }]);
  return BooksList;
}();

exports.BooksList = BooksList;
},{"@babel/runtime/helpers/classCallCheck":"ZBnv","@babel/runtime/helpers/createClass":"NoOd","./../img/skin.png":"A8J8"}],"nd3t":[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Data = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _api = require("./api");

var _bookCard = require("./book-card");

var _booksList = require("./books-list");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Data = /*#__PURE__*/function () {
  function Data(bookInfo) {
    (0, _classCallCheck2.default)(this, Data);
    (0, _defineProperty2.default)(this, "api", new _api.Api());
    (0, _defineProperty2.default)(this, "loadedPage", 0);
    (0, _defineProperty2.default)(this, "countPages", 0);
    (0, _defineProperty2.default)(this, "pageLoaded", false);
    (0, _defineProperty2.default)(this, "currentPage", []);
    // console.log('Data');
    this.bookList = new _booksList.BooksList();
    this.bookCard = new _bookCard.BookCard(bookInfo);
    this.querry = '';
  }

  (0, _createClass2.default)(Data, [{
    key: "getData",
    value: function getData(querry, page) {
      var _this = this;

      if (!querry) {
        return;
      }

      this.pageLoaded = false;
      this.querry = querry;
      this.loadedPage = page;

      if (page == 1) {
        booksList.innerHTML = "";
        this.currentPage.length = 0;
        spinnerBig.style.display = "block";
      } else if (page > 1) {
        spinnerMini.style.display = 'block';
      }

      this.api.searchBooksQuerry(querry, page).then(function (page) {
        _this.currentPage = _this.currentPage.concat(page.docs);

        _this.bookCard.setCurrentPage(_this.currentPage);

        _this.bookList.addBooksList(page);

        _this.getCountPages(page);

        _this.pageLoaded = true;
        spinnerBig.style.display = "none";
        spinnerMini.style.display = 'none'; // console.log(this.currentPage);
      });
    }
  }, {
    key: "getCountPages",
    value: function getCountPages(page) {
      var start = page.start;
      var numFound = page.numFound;
      this.countPages = Math.ceil(numFound / 100);
      this.loadedPage = Math.ceil((start + 100) / 100);
    }
  }, {
    key: "addData",
    value: function addData() {
      if (this.loadedPage < this.countPages) {
        this.pageLoaded = false;
        this.getData(this.querry, this.loadedPage + 1); // console.log('новые данные ещё нужны');
      }

      if (this.loadedPage == this.countPages) {// console.log('новые данные не нужны');
      }
    }
  }]);
  return Data;
}();

exports.Data = Data;
},{"@babel/runtime/helpers/classCallCheck":"ZBnv","@babel/runtime/helpers/createClass":"NoOd","@babel/runtime/helpers/defineProperty":"xwXl","./api":"PUOG","./book-card":"aYl1","./books-list":"kesZ"}],"NVxX":[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MenuController = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MenuController = function MenuController(data) {
  var _this = this;

  (0, _classCallCheck2.default)(this, MenuController);
  // console.log('MenuController');
  var onSearchListBtn = document.querySelector("#onSearchListBtn");
  var onInfoListBtn = document.querySelector("#onInfoListBtn");
  var onReadListBtn = document.querySelector("#onReadListBtn");
  this.leftBlock = document.querySelector("#leftBlock");
  this.centerBlock = document.querySelector("#centerBlock");
  this.rightBlock = document.querySelector("#rightBlock"); // window.addEventListener(`resize`, e => {
  //   console.log(e.target.innerHeight);
  //   console.log(e.target.innerWidth);
  // }, false);

  onInfoListBtn.addEventListener('click', function (e) {
    console.log('onInfoListBtn');
    _this.leftBlock.style.zIndex = 0;
    _this.centerBlock.style.zIndex = 1;
    _this.rightBlock.style.zIndex = 0;
  });
  onReadListBtn.addEventListener('click', function (e) {
    console.log('onReadListBtn');
    _this.leftBlock.style.zIndex = 0;
    _this.centerBlock.style.zIndex = 0;
    _this.rightBlock.style.zIndex = 1;
  });
  onSearchListBtn.addEventListener('click', function (e) {
    console.log('onSearchListBtn');
    _this.leftBlock.style.zIndex = 1;
    _this.centerBlock.style.zIndex = 0;
    _this.rightBlock.style.zIndex = 0;
  });
};

exports.MenuController = MenuController;
},{"@babel/runtime/helpers/classCallCheck":"ZBnv"}],"N2TO":[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ScrollController = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ScrollController = /*#__PURE__*/function () {
  function ScrollController(data) {
    var _this = this;

    (0, _classCallCheck2.default)(this, ScrollController);
    (0, _defineProperty2.default)(this, "canAddData", true);
    (0, _defineProperty2.default)(this, "isLoadedNewData", false);
    // console.log('ScrollController');
    // console.log(data);
    this.data = data;
    var scrollBooksList = document.querySelector('#scrollBooksList');
    var spinnerMini = document.querySelector('#spinnerMini');
    scrollBooksList.addEventListener("scroll", function (e) {
      _this.isScrolledIntoView(scrollBooksList);
    });
  }

  (0, _createClass2.default)(ScrollController, [{
    key: "isScrolledIntoView",
    value: function isScrolledIntoView(scroll) {
      var docViewTop = scroll.scrollTop;
      var docViewBottom = docViewTop + scroll.offsetHeight;
      var scrollHeigh = scroll.scrollHeight;

      if (docViewBottom + 100 >= scrollHeigh) {
        // scroll in target bottom
        if (this.canAddData && this.data.pageLoaded) {
          this.data.addData();
        }
      }
    }
  }]);
  return ScrollController;
}();

exports.ScrollController = ScrollController;
},{"@babel/runtime/helpers/classCallCheck":"ZBnv","@babel/runtime/helpers/createClass":"NoOd","@babel/runtime/helpers/defineProperty":"xwXl"}],"VvdB":[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SearchController = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SearchController = /*#__PURE__*/function () {
  function SearchController(data) {
    var _this = this;

    (0, _classCallCheck2.default)(this, SearchController);
    // console.log('SearchController');
    this.data = data; // const booksList =     document.querySelector("#booksList");
    // const searchInput =   document.querySelector("#searchInput");
    // const searchClear =   document.querySelector("#searchClear");
    // const searchButton =  document.querySelector("#searchButton");

    var debounce = function debounce(callback) {
      var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 250;
      var timeoutId;
      return function () {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        clearTimeout(timeoutId);
        timeoutId = setTimeout(function () {
          timeoutId = null;
          data.getData(searchInput.value, 1);
          callback.apply(void 0, args);
        }, delay);
      };
    };

    var debouncedGreet = debounce(this.onChangeInput, 777);
    searchInput.addEventListener("keyup", function (e) {
      return debouncedGreet(e);
    });
    searchButton.addEventListener("click", function (e) {
      return _this.data.getData(searchInput.value, 1);
    });
    searchClear.addEventListener("click", function (e) {
      return _this.onClickClear(e);
    });
    searchInput.addEventListener("keyup", function (e) {
      var value = e.path[0].value;
      searchClear.style.display = value == "" || undefined ? 'none' : 'block';

      if (e.code === 'Enter') {
        _this.data.getData(searchInput.value, 1);
      }

      if (e.code === 'Backspace' && value == "") {
        _this.onClearBooksList();
      }
    });
    searchInput.focus();
  }

  (0, _createClass2.default)(SearchController, [{
    key: "onChangeInput",
    value: function onChangeInput(e) {// console.log(`after 777 ms. data(Value) = ${e.target.value}`);
    }
  }, {
    key: "onClickClear",
    value: function onClickClear(e) {
      searchInput.value = "";
      e.currentTarget.style.display = 'none';
      this.onClearBooksList();
    }
  }, {
    key: "onClearBooksList",
    value: function onClearBooksList() {
      addToReadButton.style.display = 'none';
      booksList.innerHTML = "";
      bookInfoHeader.innerHTML = "";
      bookInfoProps.innerHTML = "";
      booksShown.innerHTML = "Shown books: 0";
      booksFound.innerHTML = "Found books: 0";
    }
  }]);
  return SearchController;
}();

exports.SearchController = SearchController;
},{"@babel/runtime/helpers/classCallCheck":"ZBnv","@babel/runtime/helpers/createClass":"NoOd"}],"vsyn":[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReadList = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _skin = _interopRequireDefault(require("./../img/skin.png"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ReadList = /*#__PURE__*/function () {
  function ReadList() {
    (0, _classCallCheck2.default)(this, ReadList);
    (0, _defineProperty2.default)(this, "books", []);
    (0, _defineProperty2.default)(this, "BookCount", 0);
    (0, _defineProperty2.default)(this, "ReadCount", 0);
    // console.log('ReadList');
    this.readListBookCount = document.getElementById("readListBookCount");
    this.readListReadCount = document.getElementById("readListReadCount");
    this.readListBook = document.getElementById("readListBook");
    this.readListRead = document.getElementById("readListRead");
  }

  (0, _createClass2.default)(ReadList, [{
    key: "loadReadList",
    value: function loadReadList(storage) {
      var myBooks = storage.get("myBooks");

      if (myBooks) {
        this.setReadListHTML(myBooks, false); // не прочитанные книги

        this.setReadListHTML(myBooks, true); // прочитанные книги

        this.setListAboutHTML(myBooks);
      }

      storage.show("myBooks");
    }
  }, {
    key: "setReadListHTML",
    value: function setReadListHTML(myBooks, bool) {
      var blueBook = "https://www.clker.com/cliparts/c/f/n/A/k/T/book-th.png";
      var redBook = "https://www.clker.com/cliparts/U/a/w/s/n/V/c-users-public-pictures-sample-pictures-th.png";
      var targetDiv = bool ? this.readListRead : this.readListBook;
      targetDiv.innerHTML = myBooks.sort(function (prev, next) {
        if (prev.title < next.title) return -1;
        if (prev.title < next.title) return 1;
      }).filter(function (item) {
        return item.read == bool;
      }).map(function (item) {
        return "<div data-book-id=\"".concat(item.id, "\" class=\"book-card book-card--read-").concat(bool, "\">\n        <div class=\"book-card__container book-card__container\">\n          <img class=\"book-card__img\" src=\"").concat(item.cover_i ? "https://covers.openlibrary.org/b/id/".concat(item.cover_i, "-L.jpg?default=false") : "".concat(item.isbn ? "https://covers.openlibrary.org/b/isbn/".concat(item.isbn[0], "-L.jpg?default=false") : "".concat(_skin.default)), "\" onError=\"this.src='").concat(_skin.default, "'\">\n            <div class=\"book-card__header\">\n            <span class=\"book-card__title\">").concat(item.title, "</span> \n            ").concat(item.language ? "<span class=\"book-card__lang\">".concat(item.language.join(", "), "</span>") : "", "\n            ").concat(item.subtitle && !bool ? "<div class=\"book-card__subtitle\">".concat(item.subtitle, "</div>") : "", "\n            ").concat(item.author_name ? "<div class=\"book-card__author\">".concat(item.author_name.join(", "), "</div>") : "", "\n            <div class=\"book-card__buttons\">\n              <button class=\"book-card__button\" id=\"").concat(bool ? "un" : "", "markAsReadButton\">").concat(bool ? "un" : "", "Mark as read</button>\n              <button class=\"book-card__button\" id=\"removefromListButton\">Remove from list</button>\n            </div>\n            </div> \n        </div> \n      </div>");
      }).join("");
    }
  }, {
    key: "setListAboutHTML",
    value: function setListAboutHTML(myBooks) {
      this.BookCount = myBooks.length;
      this.readListBookCount.innerHTML = "<div class=\"read-list__item\" id=\"readListBookCount\">".concat(this.BookCount, " books,</div>");
      this.ReadCount = myBooks.filter(function (item) {
        return item.read == true;
      }).length;
      this.readListReadCount.innerHTML = "<div class=\"read-list__item\" id=\"readListBookCount\">".concat(this.ReadCount, " read</div>");
    }
  }]);
  return ReadList;
}();

exports.ReadList = ReadList;
},{"@babel/runtime/helpers/classCallCheck":"ZBnv","@babel/runtime/helpers/createClass":"NoOd","@babel/runtime/helpers/defineProperty":"xwXl","./../img/skin.png":"A8J8"}],"cMRm":[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Storage = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _readList = require("./read-list");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Storage = /*#__PURE__*/function () {
  function Storage() {
    (0, _classCallCheck2.default)(this, Storage);
    // console.log('Storage');
    // this.clear();
    this.readList = new _readList.ReadList();
    this.refresh();
  }

  (0, _createClass2.default)(Storage, [{
    key: "refresh",
    value: function refresh() {
      this.readList.loadReadList(this);
    }
  }, {
    key: "get",
    value: function get(name) {
      // name = "myBooks", "myTheme"
      return JSON.parse(localStorage.getItem(name));
    }
  }, {
    key: "set",
    value: function set(name, value) {
      // "myBooks" = [{},{},{}]
      // "myTheme" = "dark"
      localStorage.setItem(name, JSON.stringify(value));
      this.refresh();
    }
  }, {
    key: "clear",
    value: function clear() {
      console.log('Clear storage');
      localStorage.clear();
    }
  }, {
    key: "show",
    value: function show(name) {// console.log(`${name} = `, this.get(name));
    }
  }]);
  return Storage;
}();

exports.Storage = Storage;
},{"@babel/runtime/helpers/classCallCheck":"ZBnv","@babel/runtime/helpers/createClass":"NoOd","./read-list":"vsyn"}],"ojng":[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ToggleTheme = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ToggleTheme = /*#__PURE__*/function () {
  function ToggleTheme(storage) {
    var _this = this;

    (0, _classCallCheck2.default)(this, ToggleTheme);
    (0, _defineProperty2.default)(this, "theme", void 0);
    // console.log('ToggleTheme');
    this.storage = storage;
    toggleThemeButton.addEventListener('click', function (e) {
      return _this.toggleTheme();
    }); // localStorage.removeItem("myTheme");

    this.loadTheme();
  }

  (0, _createClass2.default)(ToggleTheme, [{
    key: "loadTheme",
    value: function loadTheme() {
      var myTheme = this.storage.get("myTheme");

      if (myTheme == 'light' || myTheme == null) {
        this.theme = 'light';
        sunIcon.style.display = "block";
        moonIcon.style.display = "none";
      }

      if (myTheme == 'dark') {
        this.theme = 'dark';
        sunIcon.style.display = "none";
        moonIcon.style.display = "block";
        document.documentElement.setAttribute('theme', 'dark');
      }
    }
  }, {
    key: "toggleTheme",
    value: function toggleTheme() {
      // console.log(this.toggleButton.children[0].src);
      if (document.documentElement.hasAttribute('theme')) {
        document.documentElement.removeAttribute('theme');
        this.storage.set("myTheme", "light");
        sunIcon.style.display = "block";
        moonIcon.style.display = "none"; // this.toggleButton.children[0].src = "./src/img/sun.png";
      } else {
        document.documentElement.setAttribute('theme', 'dark');
        this.storage.set("myTheme", "dark");
        sunIcon.style.display = "none";
        moonIcon.style.display = "block"; // this.toggleButton.children[0].src = "./src/img/moon.png";
      }

      this.storage.show("myTheme");
    }
  }]);
  return ToggleTheme;
}();

exports.ToggleTheme = ToggleTheme;
},{"@babel/runtime/helpers/classCallCheck":"ZBnv","@babel/runtime/helpers/createClass":"NoOd","@babel/runtime/helpers/defineProperty":"xwXl"}],"mahc":[function(require,module,exports) {
'use strict';

var _bookInfo = require("./book-info");

var _buttonsController = require("./buttons-controller");

var _data = require("./data");

var _menuController = require("./menu-controller");

var _scrollController = require("./scroll-controller");

var _searchController = require("./search-controller");

var _storage = require("./storage");

var _toggleTheme = require("./toggle-theme");

var bookInfo = new _bookInfo.BookInfo();
var data = new _data.Data(bookInfo);
new _searchController.SearchController(data);
new _scrollController.ScrollController(data);
var storage = new _storage.Storage();
new _toggleTheme.ToggleTheme(storage);
new _buttonsController.ButtonsController(storage, bookInfo);
new _menuController.MenuController();
},{"./book-info":"cojp","./buttons-controller":"hQ4w","./data":"nd3t","./menu-controller":"NVxX","./scroll-controller":"N2TO","./search-controller":"VvdB","./storage":"cMRm","./toggle-theme":"ojng"}]},{},["mahc"], null)
//# sourceMappingURL=/dataart-to-read-list/js.0585f77b.js.map