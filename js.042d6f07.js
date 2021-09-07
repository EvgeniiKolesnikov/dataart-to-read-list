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
})({"PUOG":[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Api = void 0;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

var _apiUrlSearch = /*#__PURE__*/new WeakMap();

var _apiUrlImage = /*#__PURE__*/new WeakMap();

var _imageSize = /*#__PURE__*/new WeakMap();

var Api = /*#__PURE__*/function () {
  function Api() {
    _classCallCheck(this, Api);

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

  _createClass(Api, [{
    key: "searchBooks",
    value: function () {
      var _searchBooks = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(fullQuerry) {
        var url, response;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                url = "".concat(_classPrivateFieldGet(this, _apiUrlSearch), "/search.json?").concat(fullQuerry);
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
      var _searchBooksQuerry = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(querry, page) {
        var url, response;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                url = "".concat(_classPrivateFieldGet(this, _apiUrlSearch), "/search.json?q=").concat(querry, "&page=").concat(page);
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
      var _searchBookImage = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(bookLinks) {
        var url, response;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                url = "".concat(_classPrivateFieldGet(this, _apiUrlImage), "/b/").concat(bookLinks, "-").concat(_classPrivateFieldGet(this, _imageSize), ".jpg?default=false");
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
},{}],"cojp":[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BookInfo = void 0;

var _api = require("./api");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var BookInfo = /*#__PURE__*/function () {
  function BookInfo() {
    _classCallCheck(this, BookInfo);

    _defineProperty(this, "targetBook", []);

    _defineProperty(this, "api", new _api.Api());

    _defineProperty(this, "i", 0);

    _defineProperty(this, "imageLinks", []);

    // console.log('BookInfo');
    this.bookInfoHeader = document.getElementById("bookInfoHeader");
    this.bookInfoProps = document.getElementById("bookInfoProps");
  }

  _createClass(BookInfo, [{
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
},{"./api":"PUOG"}],"hQ4w":[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ButtonsController = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ButtonsController = /*#__PURE__*/function () {
  function ButtonsController(storage, bookInfo) {
    var _this = this;

    _classCallCheck(this, ButtonsController);

    _defineProperty(this, "bookId", void 0);

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

  _createClass(ButtonsController, [{
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
},{}],"aYl1":[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BookCard = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var BookCard = /*#__PURE__*/function () {
  function BookCard(bookInfo) {
    var _this = this;

    _classCallCheck(this, BookCard);

    // console.log('BookCard');
    this.currentPage = [];
    this.bookInfo = bookInfo;
    var booksList = document.querySelector("#booksList");
    booksList.addEventListener("click", function (e) {
      return _this.onClickBookCard(e, _this.currentPage);
    });
  }

  _createClass(BookCard, [{
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
},{}],"A8J8":[function(require,module,exports) {
module.exports = "/dataart-to-read-list/skin.b4b31e92.png";
},{}],"kesZ":[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BooksList = void 0;

var _skin = _interopRequireDefault(require("./../img/skin.png"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// import url from "file!./file.png"
// import image from '/../src/img/skin.png';
var BooksList = /*#__PURE__*/function () {
  function BooksList() {
    _classCallCheck(this, BooksList);

    // console.log('BooksList');
    this.currentPage = []; // const booksList =     document.querySelector("#booksList");
    // const booksShown =    document.querySelector("#booksShown");
    // const booksFound =    document.querySelector("#booksFound");
  }

  _createClass(BooksList, [{
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
},{"./../img/skin.png":"A8J8"}],"nd3t":[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Data = void 0;

var _api = require("./api");

var _bookCard = require("./book-card");

var _booksList = require("./books-list");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Data = /*#__PURE__*/function () {
  function Data(bookInfo) {
    _classCallCheck(this, Data);

    _defineProperty(this, "api", new _api.Api());

    _defineProperty(this, "loadedPage", 0);

    _defineProperty(this, "countPages", 0);

    _defineProperty(this, "pageLoaded", false);

    _defineProperty(this, "currentPage", []);

    // console.log('Data');
    this.bookList = new _booksList.BooksList();
    this.bookCard = new _bookCard.BookCard(bookInfo);
    this.querry = '';
  }

  _createClass(Data, [{
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
},{"./api":"PUOG","./book-card":"aYl1","./books-list":"kesZ"}],"NVxX":[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MenuController = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MenuController = function MenuController(data) {
  var _this = this;

  _classCallCheck(this, MenuController);

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
},{}],"N2TO":[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ScrollController = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ScrollController = /*#__PURE__*/function () {
  function ScrollController(data) {
    var _this = this;

    _classCallCheck(this, ScrollController);

    _defineProperty(this, "canAddData", true);

    _defineProperty(this, "isLoadedNewData", false);

    // console.log('ScrollController');
    // console.log(data);
    this.data = data;
    var scrollBooksList = document.querySelector('#scrollBooksList');
    var spinnerMini = document.querySelector('#spinnerMini');
    scrollBooksList.addEventListener("scroll", function (e) {
      _this.isScrolledIntoView(scrollBooksList);
    });
  }

  _createClass(ScrollController, [{
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
},{}],"VvdB":[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SearchController = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var SearchController = /*#__PURE__*/function () {
  function SearchController(data) {
    var _this = this;

    _classCallCheck(this, SearchController);

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

  _createClass(SearchController, [{
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
},{}],"vsyn":[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReadList = void 0;

var _skin = _interopRequireDefault(require("./../img/skin.png"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ReadList = /*#__PURE__*/function () {
  function ReadList() {
    _classCallCheck(this, ReadList);

    _defineProperty(this, "books", []);

    _defineProperty(this, "BookCount", 0);

    _defineProperty(this, "ReadCount", 0);

    // console.log('ReadList');
    this.readListBookCount = document.getElementById("readListBookCount");
    this.readListReadCount = document.getElementById("readListReadCount");
    this.readListBook = document.getElementById("readListBook");
    this.readListRead = document.getElementById("readListRead");
  }

  _createClass(ReadList, [{
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
},{"./../img/skin.png":"A8J8"}],"cMRm":[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Storage = void 0;

var _readList = require("./read-list");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Storage = /*#__PURE__*/function () {
  function Storage() {
    _classCallCheck(this, Storage);

    // console.log('Storage');
    // this.clear();
    this.readList = new _readList.ReadList();
    this.refresh();
  }

  _createClass(Storage, [{
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
},{"./read-list":"vsyn"}],"ojng":[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ToggleTheme = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ToggleTheme = /*#__PURE__*/function () {
  function ToggleTheme(storage) {
    var _this = this;

    _classCallCheck(this, ToggleTheme);

    _defineProperty(this, "theme", void 0);

    // console.log('ToggleTheme');
    this.storage = storage;
    toggleThemeButton.addEventListener('click', function (e) {
      return _this.toggleTheme();
    }); // localStorage.removeItem("myTheme");

    this.loadTheme();
  }

  _createClass(ToggleTheme, [{
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
},{}],"mahc":[function(require,module,exports) {
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
//# sourceMappingURL=/dataart-to-read-list/js.042d6f07.js.map