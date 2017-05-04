/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var DOMNodeCollection = __webpack_require__(1);

window.$l = function(selectors) {
  if (selectors instanceof HTMLElement){
    console.log('hey');
    var htmlArr = [selectors];
    return new DOMNodeCollection(htmlArr);
  } else {
    console.log('sup');
    var NodeList = document.querySelectorAll(selectors);
    var nodeListArr = Array.from(NodeList);
    return new DOMNodeCollection(nodeListArr);
  }
};


/***/ }),
/* 1 */
/***/ (function(module, exports) {

class DOMNodeCollection {
  constructor(HTMLElements) {
    this.HTMLElements = HTMLElements;
  }

  html(string) {
    if (string === undefined){
      return this.HTMLElements[0].innerHTML;
    } else {
      this.HTMLElements.forEach((e) => {
        e.innerHTML = string;
      });
    }
  }

  empty() {
    this.HTMLElements.forEach((e) => {
      e.innerHTML = "";
    });
  }

  append(arg) {
    this.HTMLElements.forEach((e) => {
      e.innerHTML += arg.outerHTML;
    });
  }

  attr(attribute, value) {
    if (value === undefined){
      return this.HTMLElements[0].getAttribute(attribute);
    } else {
      this.HTMLElements.forEach((el) => {
        el.setAttribute(attribute, value);
    });
  }
}

  addClass(newClass) {
    this.HTMLElements.forEach((el) => {
      el.className += ` ${newClass}`;
    });
  }

  removeClass(classy) {
    if (classy === undefined){
      this.HTMLElements.forEach((el) => {
        el.className = "";
    });
    } else {
      this.HTMLElements.forEach((el) => {
        el.className.replace(classy, "");
      });
    }
  }

  children() {
    let child = [];
    this.HTMLElements.forEach((el) => {
      child.push(new DOMNodeCollection(el.children));
    });
    return child;
  }

  parent() {
    let parent = [];
    this.HTMLElements.forEach((el) => {
      parent.push(new DOMNodeCollection(el.parentNode));
    });
    return parent;
  }

  remove() {
    this.HTMLElements.forEach((el) => {
      el.parentNode.removeChild(el);
    });
  }

  on(type, cb){
    this.HTMLElements.forEach((el) => {
      el.addEventListener(type, cb);
      el["callback"] = cb;
      // el.setAttribute("callback", cb);
    });
  }

  off(type){
    this.HTMLElements.forEach((el) => {
      // var cb = el.getAttribute("callback");
      console.log(el["callback"]);
      el.removeEventListener(type, el["callback"]);
    });
  }

}


module.exports = DOMNodeCollection;


/***/ })
/******/ ]);