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

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

var _apiUrlSearch = new WeakMap();

var _apiUrlImage = new WeakMap();

var _imageSize = new WeakMap();

class Api {
  constructor() {
    _apiUrlSearch.set(this, {
      writable: true,
      value: `https://openlibrary.org`
    });

    _apiUrlImage.set(this, {
      writable: true,
      value: `https://covers.openlibrary.org`
    });

    _imageSize.set(this, {
      writable: true,
      value: `L`
    });
  }

  async searchBooks(fullQuerry) {
    const url = `${_classPrivateFieldGet(this, _apiUrlSearch)}/search.json?${fullQuerry}`;

    try {
      const response = await fetch(url, {
        mode: 'cors'
      });

      if (response.ok) {
        return await response.json();
      }

      console.error(`Request ${url} failed with ${response.status}`);
    } catch (error) {
      console.error(`Request ${url} failed with error`, error);
    }
  }

  async searchBooksQuerry(querry, page) {
    const url = `${_classPrivateFieldGet(this, _apiUrlSearch)}/search.json?q=${querry}&page=${page}`;

    try {
      const response = await fetch(url, {
        mode: 'cors'
      });

      if (response.ok) {
        return await response.json();
      }

      console.error(`Request ${url} failed with ${response.status}`);
    } catch (error) {
      console.error(`Request ${url} failed with error`, error);
    }
  }

  async searchBookImage(bookLinks) {
    const url = `${_classPrivateFieldGet(this, _apiUrlImage)}/b/${bookLinks}-${_classPrivateFieldGet(this, _imageSize)}.jpg?default=false`;

    try {
      let response = await fetch(`${url}`, {
        mode: 'cors'
      });

      if (response.ok) {
        return await response.blob();
      } else {// console.error(`Request ${url} failed with ${response.status}`)
      }
    } catch (error) {
      console.error(`Request ${url} failed with error`, error);
    }
  }

}

exports.Api = Api;
},{}],"cojp":[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BookInfo = void 0;

var _api = require("./api");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class BookInfo {
  constructor() {
    _defineProperty(this, "targetBook", []);

    _defineProperty(this, "api", new _api.Api());

    _defineProperty(this, "i", 0);

    _defineProperty(this, "imageLinks", []);

    // console.log('BookInfo');
    this.bookInfoHeader = document.getElementById("bookInfoHeader");
    this.bookInfoProps = document.getElementById("bookInfoProps");
  }

  addToReadList(storage) {
    if (!storage) {
      return;
    }

    let message = '';
    let bookAdded = false;
    this.targetBook.read = false;
    let myBooks = storage.get("myBooks"); // console.log(myBooks);

    if (myBooks) {
      let checkBookInStorage = myBooks.filter(item => item.id == this.targetBook.id).length > 0; // console.log(`book "${this.targetBook.title}" in storage? = ` + checkBookInStorage);

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

  pushMessage(bookAdded, message) {
    const AddToReadMessage = document.createElement('div');
    AddToReadMessage.classList.add('message');
    AddToReadMessage.textContent = message;
    AddToReadMessage.style.backgroundColor = bookAdded ? '#c6fdcd' : '#fdc6c6';
    addToReadButton.appendChild(AddToReadMessage);
    setTimeout(function () {
      AddToReadMessage.remove();
    }, 2000);
  }

  setBookInfo(book) {
    var _book$author_name, _book$language, _book$publish_year;

    this.targetBook = book;
    this.bookInfoHeader.innerHTML = ``;
    this.bookInfoProps.innerHTML = ``;
    addToReadButton.style.display = "block"; // this.bookInfoProps.innerHTML += book.title ? `<h2 class="book-info__title">${book.title}</h2>` : ``; // var 3
    // book.title && (this.bookInfoProps.innerHTML += `<h3 class="book-info__title">${book.title}</h3>`);   // var 2

    this.bookInfoHeader.innerHTML += `<h2 class="book-info__title">${book.title}</h2>`; // var 1

    if (book.subtitle) {
      this.bookInfoProps.innerHTML += `<h3 class="book-info__subtitle">${book.subtitle}</h3>`;
    }

    this.bookInfoProps.innerHTML += `<img class="book-info__img" id="bookPicture"></img>`;
    this.imageLinks = this.getImageLinks(book);
    this.loadBookImage(this.imageLinks, this.i);
    this.addPropsHtml(`Author:`, (_book$author_name = book.author_name) === null || _book$author_name === void 0 ? void 0 : _book$author_name.join(", "));
    this.addPropsHtml(`Languages available:`, (_book$language = book.language) === null || _book$language === void 0 ? void 0 : _book$language.map(item => this.getFlagHTML(item) + item).join(", "));
    this.addPropsHtml(`Full text available:`, book.has_fulltext);
    this.addPropsHtml(`First publish year:`, book.first_publish_year);
    this.addPropsHtml(`Years published:`, (_book$publish_year = book.publish_year) === null || _book$publish_year === void 0 ? void 0 : _book$publish_year.join(", "));
  }

  addPropsHtml(propTitle, bookKey) {
    if (bookKey) {
      this.bookInfoProps.innerHTML += `<div class="book-info__prop">
        <span class="book-info__prop-title">${propTitle}</span>
        <span class="book-info__prop-value">${bookKey}</span>
      </div>`;
    }
  }

  getImageLinks(book) {
    this.i = 0; // индекс первого искомого элемента в массиве картинкок

    const imageLinks = []; // Все возможные части ссылок на картинки

    book.cover_i && imageLinks.push(`id/${book.cover_i}`);
    book.isbn && book.isbn.forEach(value => imageLinks.push(`isbn/${value}`));
    book.lccn && book.lccn.forEach(value => imageLinks.push(`lccn/${value}`));
    book.olid && book.olid.forEach(value => imageLinks.push(`olid/${value}`));
    book.oclc && book.oclc.forEach(value => imageLinks.push(`oclc/${value}`));
    return imageLinks;
  }

  loadBookImage(imageLinks, i) {
    if (!imageLinks[i] || imageLinks.length == this.i) return; // console.log('link = ', imageLinks[i], '; i = ', i);

    this.api.searchBookImage(imageLinks[i]).then(blob => {
      let objectURL = window.URL.createObjectURL(blob);
      let bookPicture = document.getElementById('bookPicture');

      if (bookPicture.src === '') {
        bookPicture.src = objectURL;
      }
    }).catch(error => {
      // console.log('error:', error);
      // Если нету картинки по ссылке, смотрим следующую 
      // и так, пока не найдётся или не закончатся варианты
      this.i++;
      this.loadBookImage(this.imageLinks, this.i);
    });
  } //#region getFlagsHTML


  getFlagHTML(item) {
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
    if (item.length === 3) return ``;
    return `<img class="book-info__flag" src="https://flagcdn.com/16x12/${item}.png"></img> `;
  } //#endregion getFlagsHTML


}

exports.BookInfo = BookInfo;
},{"./api":"PUOG"}],"hQ4w":[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ButtonsController = void 0;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class ButtonsController {
  constructor(storage, bookInfo) {
    _defineProperty(this, "bookId", void 0);

    // console.log('ButtonsController');
    this.storage = storage;
    this.bookInfo = bookInfo;
    this.readList = document.getElementById("readList");
    const addToReadButton = document.getElementById("addToReadButton");
    addToReadButton.addEventListener("click", e => this.bookInfo.addToReadList(this.storage));
    this.readList.addEventListener("click", e => this.trackElement(e));
  }

  trackElement(e) {
    let item = e.target;

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

  onChangeReadList(bookId, divId) {
    const myBooks = this.storage.get("myBooks");
    myBooks.forEach((item, i, object) => {
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

  showBook(bookId, e) {
    const targetDiv = e.target;
    const myBooks = this.storage.get("myBooks");
    const selectBook = myBooks.find(item => item.id == bookId);

    if (!selectBook) {
      return;
    }

    const LastSelectedBook = document.getElementsByClassName("book-card--active");

    if (LastSelectedBook[0]) {
      LastSelectedBook[0].classList.remove("book-card--active");
    }

    this.LastSelectedBook = selectBook;
    targetDiv.classList.add("book-card--active");
    this.bookInfo.setBookInfo(selectBook);
  }

}

exports.ButtonsController = ButtonsController;
},{}],"aYl1":[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BookCard = void 0;

class BookCard {
  constructor(bookInfo) {
    // console.log('BookCard');
    this.currentPage = [];
    this.bookInfo = bookInfo;
    const booksList = document.querySelector("#booksList");
    booksList.addEventListener("click", e => this.onClickBookCard(e, this.currentPage));
  }

  setCurrentPage(currentPage) {
    this.currentPage = currentPage;
  }

  onClickBookCard(e, currentPage) {
    const targetDiv = e.target;
    const id = targetDiv.id;
    const selectBook = currentPage.find(item => item.id === id);

    if (!selectBook) {
      return;
    }

    const LastSelectedBook = document.getElementsByClassName("book-card--active");

    if (LastSelectedBook[0]) {
      LastSelectedBook[0].classList.remove("book-card--active");
    }

    this.LastSelectedBook = selectBook;
    targetDiv.classList.add("book-card--active");
    this.bookInfo.setBookInfo(selectBook);
  }

}

exports.BookCard = BookCard;
},{}],"A8J8":[function(require,module,exports) {
module.exports = "skin.b4b31e92.png";
},{}],"kesZ":[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BooksList = void 0;

var _skin = _interopRequireDefault(require("./../img/skin.png"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import url from "file!./file.png"
// import image from '/../src/img/skin.png';
class BooksList {
  constructor() {
    // console.log('BooksList');
    this.currentPage = []; // const booksList =     document.querySelector("#booksList");
    // const booksShown =    document.querySelector("#booksShown");
    // const booksFound =    document.querySelector("#booksFound");
  }

  addBooksList(page) {
    page.docs.forEach(item => {
      item.id = item.key.split("/").pop();
    });
    this.currentPage = page.docs;
    const blueBook = `https://www.clker.com/cliparts/c/f/n/A/k/T/book-th.png`;
    const redBook = `https://www.clker.com/cliparts/U/a/w/s/n/V/c-users-public-pictures-sample-pictures-th.png`;
    const booksListHTML = this.currentPage.reduce((acc, item) => {
      return acc + `<div id="${item.id}" class="book-card">
          <div class="book-card__container">

            <img class="book-card__img" src="${item.cover_i ? `https://covers.openlibrary.org/b/id/${item.cover_i}-L.jpg?default=false` : `${item.isbn ? `https://covers.openlibrary.org/b/isbn/${item.isbn[0]}-L.jpg?default=false` : `${_skin.default}`}`}" onError="this.src='${_skin.default}'">
            <div class="book-card__header">
              <span class="book-card__title">${item.title}</span> 
              ${item.language ? `<span class="book-card__lang">${item.language.join(", ")}</span>` : ``}
              ${item.subtitle ? `<div class="book-card__subtitle">${item.subtitle}</div>` : ``}
            </div> 
          </div> 
        </div>`;
    }, "");
    booksList.innerHTML += booksListHTML;
    booksShown.innerHTML = `Shown books: ${this.numShown(page)}`;
    booksFound.innerHTML = `Found books: ${page.numFound}`;
  }

  numShown(page) {
    const start = page.start;
    const pageSize = page.docs.length;
    let numberShownBooks;

    if (pageSize == 100) {
      numberShownBooks = start + 100;
    } else {
      numberShownBooks = start + pageSize;
    }

    return numberShownBooks;
  }

}

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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class Data {
  constructor(bookInfo) {
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

  getData(querry, page) {
    if (!querry) {
      return;
    }

    this.pageLoaded = false;
    this.querry = querry;
    this.loadedPage = page;

    if (page == 1) {
      booksList.innerHTML = ``;
      this.currentPage.length = 0;
      spinnerBig.style.display = "block";
    } else if (page > 1) {
      spinnerMini.style.display = 'block';
    }

    this.api.searchBooksQuerry(querry, page).then(page => {
      this.currentPage = this.currentPage.concat(page.docs);
      this.bookCard.setCurrentPage(this.currentPage);
      this.bookList.addBooksList(page);
      this.getCountPages(page);
      this.pageLoaded = true;
      spinnerBig.style.display = "none";
      spinnerMini.style.display = 'none'; // console.log(this.currentPage);
    });
  }

  getCountPages(page) {
    const start = page.start;
    const numFound = page.numFound;
    this.countPages = Math.ceil(numFound / 100);
    this.loadedPage = Math.ceil((start + 100) / 100);
  }

  addData() {
    if (this.loadedPage < this.countPages) {
      this.pageLoaded = false;
      this.getData(this.querry, this.loadedPage + 1); // console.log('новые данные ещё нужны');
    }

    if (this.loadedPage == this.countPages) {// console.log('новые данные не нужны');
    }
  }

}

exports.Data = Data;
},{"./api":"PUOG","./book-card":"aYl1","./books-list":"kesZ"}],"NVxX":[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MenuController = void 0;

class MenuController {
  constructor(data) {
    // console.log('MenuController');
    const onSearchListBtn = document.querySelector("#onSearchListBtn");
    const onInfoListBtn = document.querySelector("#onInfoListBtn");
    const onReadListBtn = document.querySelector("#onReadListBtn");
    this.leftBlock = document.querySelector("#leftBlock");
    this.centerBlock = document.querySelector("#centerBlock");
    this.rightBlock = document.querySelector("#rightBlock"); // window.addEventListener(`resize`, e => {
    //   console.log(e.target.innerHeight);
    //   console.log(e.target.innerWidth);
    // }, false);

    onInfoListBtn.addEventListener('click', e => {
      console.log('onInfoListBtn');
      this.leftBlock.style.zIndex = 0;
      this.centerBlock.style.zIndex = 1;
      this.rightBlock.style.zIndex = 0;
    });
    onReadListBtn.addEventListener('click', e => {
      console.log('onReadListBtn');
      this.leftBlock.style.zIndex = 0;
      this.centerBlock.style.zIndex = 0;
      this.rightBlock.style.zIndex = 1;
    });
    onSearchListBtn.addEventListener('click', e => {
      console.log('onSearchListBtn');
      this.leftBlock.style.zIndex = 1;
      this.centerBlock.style.zIndex = 0;
      this.rightBlock.style.zIndex = 0;
    });
  }

}

exports.MenuController = MenuController;
},{}],"N2TO":[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ScrollController = void 0;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class ScrollController {
  constructor(data) {
    _defineProperty(this, "canAddData", true);

    _defineProperty(this, "isLoadedNewData", false);

    // console.log('ScrollController');
    // console.log(data);
    this.data = data;
    const scrollBooksList = document.querySelector('#scrollBooksList');
    const spinnerMini = document.querySelector('#spinnerMini');
    scrollBooksList.addEventListener("scroll", e => {
      this.isScrolledIntoView(scrollBooksList);
    });
  }

  isScrolledIntoView(scroll) {
    let docViewTop = scroll.scrollTop;
    let docViewBottom = docViewTop + scroll.offsetHeight;
    let scrollHeigh = scroll.scrollHeight;

    if (docViewBottom + 100 >= scrollHeigh) {
      // scroll in target bottom
      if (this.canAddData && this.data.pageLoaded) {
        this.data.addData();
      }
    }
  }

}

exports.ScrollController = ScrollController;
},{}],"VvdB":[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SearchController = void 0;

class SearchController {
  constructor(data) {
    // console.log('SearchController');
    this.data = data; // const booksList =     document.querySelector("#booksList");
    // const searchInput =   document.querySelector("#searchInput");
    // const searchClear =   document.querySelector("#searchClear");
    // const searchButton =  document.querySelector("#searchButton");

    const debounce = (callback, delay = 250) => {
      let timeoutId;
      return (...args) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
          timeoutId = null;
          data.getData(searchInput.value, 1);
          callback(...args);
        }, delay);
      };
    };

    const debouncedGreet = debounce(this.onChangeInput, 777);
    searchInput.addEventListener("keyup", e => debouncedGreet(e));
    searchButton.addEventListener("click", e => this.data.getData(searchInput.value, 1));
    searchClear.addEventListener("click", e => this.onClickClear(e));
    searchInput.addEventListener("keyup", e => {
      let value = e.path[0].value;
      searchClear.style.display = value == "" || undefined ? 'none' : 'block';

      if (e.code === 'Enter') {
        this.data.getData(searchInput.value, 1);
      }

      if (e.code === 'Backspace' && value == "") {
        this.onClearBooksList();
      }
    });
    searchInput.focus();
  }

  onChangeInput(e) {// console.log(`after 777 ms. data(Value) = ${e.target.value}`);
  }

  onClickClear(e) {
    searchInput.value = "";
    e.currentTarget.style.display = 'none';
    this.onClearBooksList();
  }

  onClearBooksList() {
    addToReadButton.style.display = 'none';
    booksList.innerHTML = ``;
    bookInfoHeader.innerHTML = ``;
    bookInfoProps.innerHTML = ``;
    booksShown.innerHTML = `Shown books: 0`;
    booksFound.innerHTML = `Found books: 0`;
  }

}

exports.SearchController = SearchController;
},{}],"vsyn":[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReadList = void 0;

var _skin = _interopRequireDefault(require("./../img/skin.png"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class ReadList {
  constructor() {
    _defineProperty(this, "books", []);

    _defineProperty(this, "BookCount", 0);

    _defineProperty(this, "ReadCount", 0);

    // console.log('ReadList');
    this.readListBookCount = document.getElementById("readListBookCount");
    this.readListReadCount = document.getElementById("readListReadCount");
    this.readListBook = document.getElementById("readListBook");
    this.readListRead = document.getElementById("readListRead");
  }

  loadReadList(storage) {
    const myBooks = storage.get("myBooks");

    if (myBooks) {
      this.setReadListHTML(myBooks, false); // не прочитанные книги

      this.setReadListHTML(myBooks, true); // прочитанные книги

      this.setListAboutHTML(myBooks);
    }

    storage.show("myBooks");
  }

  setReadListHTML(myBooks, bool) {
    const blueBook = `https://www.clker.com/cliparts/c/f/n/A/k/T/book-th.png`;
    const redBook = `https://www.clker.com/cliparts/U/a/w/s/n/V/c-users-public-pictures-sample-pictures-th.png`;
    let targetDiv = bool ? this.readListRead : this.readListBook;
    targetDiv.innerHTML = myBooks.sort((prev, next) => {
      if (prev.title < next.title) return -1;
      if (prev.title < next.title) return 1;
    }).filter(item => item.read == bool).map(item => `<div data-book-id="${item.id}" class="book-card book-card--read-${bool}">
        <div class="book-card__container book-card__container">
          <img class="book-card__img" src="${item.cover_i ? `https://covers.openlibrary.org/b/id/${item.cover_i}-L.jpg?default=false` : `${item.isbn ? `https://covers.openlibrary.org/b/isbn/${item.isbn[0]}-L.jpg?default=false` : `${_skin.default}`}`}" onError="this.src='${_skin.default}'">
            <div class="book-card__header">
            <span class="book-card__title">${item.title}</span> 
            ${item.language ? `<span class="book-card__lang">${item.language.join(", ")}</span>` : ``}
            ${item.subtitle && !bool ? `<div class="book-card__subtitle">${item.subtitle}</div>` : ``}
            ${item.author_name ? `<div class="book-card__author">${item.author_name.join(", ")}</div>` : ``}
            <div class="book-card__buttons">
              <button class="book-card__button" id="${bool ? `un` : ``}markAsReadButton">${bool ? `un` : ``}Mark as read</button>
              <button class="book-card__button" id="removefromListButton">Remove from list</button>
            </div>
            </div> 
        </div> 
      </div>`).join("");
  }

  setListAboutHTML(myBooks) {
    this.BookCount = myBooks.length;
    this.readListBookCount.innerHTML = `<div class="read-list__item" id="readListBookCount">${this.BookCount} books,</div>`;
    this.ReadCount = myBooks.filter(item => item.read == true).length;
    this.readListReadCount.innerHTML = `<div class="read-list__item" id="readListBookCount">${this.ReadCount} read</div>`;
  }

}

exports.ReadList = ReadList;
},{"./../img/skin.png":"A8J8"}],"cMRm":[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Storage = void 0;

var _readList = require("./read-list");

class Storage {
  constructor() {
    // console.log('Storage');
    // this.clear();
    this.readList = new _readList.ReadList();
    this.refresh();
  }

  refresh() {
    this.readList.loadReadList(this);
  }

  get(name) {
    // name = "myBooks", "myTheme"
    return JSON.parse(localStorage.getItem(name));
  }

  set(name, value) {
    // "myBooks" = [{},{},{}]
    // "myTheme" = "dark"
    localStorage.setItem(name, JSON.stringify(value));
    this.refresh();
  }

  clear() {
    console.log('Clear storage');
    localStorage.clear();
  }

  show(name) {// console.log(`${name} = `, this.get(name));
  }

}

exports.Storage = Storage;
},{"./read-list":"vsyn"}],"ojng":[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ToggleTheme = void 0;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class ToggleTheme {
  constructor(storage) {
    _defineProperty(this, "theme", void 0);

    // console.log('ToggleTheme');
    this.storage = storage;
    toggleThemeButton.addEventListener('click', e => this.toggleTheme()); // localStorage.removeItem("myTheme");

    this.loadTheme();
  }

  loadTheme() {
    const myTheme = this.storage.get("myTheme");

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

  toggleTheme() {
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

}

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

let bookInfo = new _bookInfo.BookInfo();
let data = new _data.Data(bookInfo);
new _searchController.SearchController(data);
new _scrollController.ScrollController(data);
let storage = new _storage.Storage();
new _toggleTheme.ToggleTheme(storage);
new _buttonsController.ButtonsController(storage, bookInfo);
new _menuController.MenuController();
},{"./book-info":"cojp","./buttons-controller":"hQ4w","./data":"nd3t","./menu-controller":"NVxX","./scroll-controller":"N2TO","./search-controller":"VvdB","./storage":"cMRm","./toggle-theme":"ojng"}]},{},["mahc"], null)
//# sourceMappingURL=js.00af9952.js.map