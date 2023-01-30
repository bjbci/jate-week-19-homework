/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../../../../Dropbox/PC/Downloads/19-PWA (1)-COPY/19-PWA/02-Challenge/Develop/client/src/css/style.css":
/*!*************************************************************************************************************!*\
  !*** ../../../../Dropbox/PC/Downloads/19-PWA (1)-COPY/19-PWA/02-Challenge/Develop/client/src/css/style.css ***!
  \*************************************************************************************************************/
/***/ (() => {

eval("throw new Error(\"Module parse failed: Unexpected token (2:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n| /* app shell CSS */\\n> :root {\\n|   --primary: #31a9e1;\\n|   --gray: #ececec;\");\n\n//# sourceURL=webpack://JATE/../../../../Dropbox/PC/Downloads/19-PWA_(1)-COPY/19-PWA/02-Challenge/Develop/client/src/css/style.css?");

/***/ }),

/***/ "../../../../Dropbox/PC/Downloads/19-PWA (1)-COPY/19-PWA/02-Challenge/Develop/client/src/js/database.js":
/*!**************************************************************************************************************!*\
  !*** ../../../../Dropbox/PC/Downloads/19-PWA (1)-COPY/19-PWA/02-Challenge/Develop/client/src/js/database.js ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getDb\": () => (/* binding */ getDb),\n/* harmony export */   \"putDb\": () => (/* binding */ putDb)\n/* harmony export */ });\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module 'idb'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n\r\n\r\nconst initdb = async () =>\r\n  Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'idb'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('jate', 1, {\r\n    upgrade(db) {\r\n      if (db.objectStoreNames.contains('jate')) {\r\n        console.log('jate database already exists');\r\n        return;\r\n      }\r\n      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });\r\n      console.log('jate database created');\r\n    },\r\n  });\r\n\r\n// TODO: Add logic to a method that accepts some content and adds it to the database\r\nconst putDb = async (content) => console.error('putDb not implemented');\r\n\r\n// TODO: Add logic for a method that gets all the content from the database\r\nconst getDb = async () => console.error('getDb not implemented');\r\n\r\ninitdb();\r\n\n\n//# sourceURL=webpack://JATE/../../../../Dropbox/PC/Downloads/19-PWA_(1)-COPY/19-PWA/02-Challenge/Develop/client/src/js/database.js?");

/***/ }),

/***/ "../../../../Dropbox/PC/Downloads/19-PWA (1)-COPY/19-PWA/02-Challenge/Develop/client/src/js/editor.js":
/*!************************************************************************************************************!*\
  !*** ../../../../Dropbox/PC/Downloads/19-PWA (1)-COPY/19-PWA/02-Challenge/Develop/client/src/js/editor.js ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _database__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./database */ \"../../../../Dropbox/PC/Downloads/19-PWA (1)-COPY/19-PWA/02-Challenge/Develop/client/src/js/database.js\");\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header */ \"../../../../Dropbox/PC/Downloads/19-PWA (1)-COPY/19-PWA/02-Challenge/Develop/client/src/js/header.js\");\n// Import methods to save and get data from the indexedDB database in './database.js'\r\n\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (class {\r\n  constructor() {\r\n    const localData = localStorage.getItem('content');\r\n\r\n    // check if CodeMirror is loaded\r\n    if (typeof CodeMirror === 'undefined') {\r\n      throw new Error('CodeMirror is not loaded');\r\n    }\r\n\r\n    this.editor = CodeMirror(document.querySelector('#main'), {\r\n      value: '',\r\n      mode: 'javascript',\r\n      theme: 'monokai',\r\n      lineNumbers: true,\r\n      lineWrapping: true,\r\n      autofocus: true,\r\n      indentUnit: 2,\r\n      tabSize: 2,\r\n    });\r\n\r\n    // When the editor is ready, set the value to whatever is stored in indexeddb.\r\n    // Fall back to localStorage if nothing is stored in indexeddb, and if neither is available, set the value to header.\r\n    (0,_database__WEBPACK_IMPORTED_MODULE_0__.getDb)().then((data) => {\r\n      console.info('Loaded data from IndexedDB, injecting into editor');\r\n      this.editor.setValue(data || localData || _header__WEBPACK_IMPORTED_MODULE_1__.header);\r\n    });\r\n\r\n    this.editor.on('change', () => {\r\n      localStorage.setItem('content', this.editor.getValue());\r\n    });\r\n\r\n    // Save the content of the editor when the editor itself is loses focus\r\n    this.editor.on('blur', () => {\r\n      console.log('The editor has lost focus');\r\n      (0,_database__WEBPACK_IMPORTED_MODULE_0__.putDb)(localStorage.getItem('content'));\r\n    });\r\n  }\r\n});\r\n\n\n//# sourceURL=webpack://JATE/../../../../Dropbox/PC/Downloads/19-PWA_(1)-COPY/19-PWA/02-Challenge/Develop/client/src/js/editor.js?");

/***/ }),

/***/ "../../../../Dropbox/PC/Downloads/19-PWA (1)-COPY/19-PWA/02-Challenge/Develop/client/src/js/header.js":
/*!************************************************************************************************************!*\
  !*** ../../../../Dropbox/PC/Downloads/19-PWA (1)-COPY/19-PWA/02-Challenge/Develop/client/src/js/header.js ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"header\": () => (/* binding */ header)\n/* harmony export */ });\nconst header = `\r\n/*\r\n       _____  ____________\r\n      / /   |/_  __/ ____/\r\n __  / / /| | / / / __/   \r\n/ /_/ / ___ |/ / / /___   \r\n ____/_/  |_/_/ /_____/   \r\njust another text editor\r\n*/                          \r\n`;\r\n\r\n\r\n\n\n//# sourceURL=webpack://JATE/../../../../Dropbox/PC/Downloads/19-PWA_(1)-COPY/19-PWA/02-Challenge/Develop/client/src/js/header.js?");

/***/ }),

/***/ "../../../../Dropbox/PC/Downloads/19-PWA (1)-COPY/19-PWA/02-Challenge/Develop/client/src/js/index.js":
/*!***********************************************************************************************************!*\
  !*** ../../../../Dropbox/PC/Downloads/19-PWA (1)-COPY/19-PWA/02-Challenge/Develop/client/src/js/index.js ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module 'workbox-window'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n/* harmony import */ var _editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editor */ \"../../../../Dropbox/PC/Downloads/19-PWA (1)-COPY/19-PWA/02-Challenge/Develop/client/src/js/editor.js\");\n/* harmony import */ var _database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./database */ \"../../../../Dropbox/PC/Downloads/19-PWA (1)-COPY/19-PWA/02-Challenge/Develop/client/src/js/database.js\");\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../css/style.css */ \"../../../../Dropbox/PC/Downloads/19-PWA (1)-COPY/19-PWA/02-Challenge/Develop/client/src/css/style.css\");\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_css_style_css__WEBPACK_IMPORTED_MODULE_3__);\n\r\n\r\n\r\n\r\n\r\nconst main = document.querySelector('#main');\r\nmain.innerHTML = '';\r\n\r\nconst loadSpinner = () => {\r\n  const spinner = document.createElement('div');\r\n  spinner.classList.add('spinner');\r\n  spinner.innerHTML = `\r\n  <div class=\"loading-container\">\r\n  <div class=\"loading-spinner\" />\r\n  </div>\r\n  `;\r\n  main.appendChild(spinner);\r\n};\r\n\r\nconst editor = new _editor__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\r\n\r\nif (typeof editor === 'undefined') {\r\n  loadSpinner();\r\n}\r\n\r\n// Check if service workers are supported\r\nif ('serviceWorker' in navigator) {\r\n  // register workbox service worker\r\n  const workboxSW = new Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'workbox-window'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('/src-sw.js');\r\n  workboxSW.register();\r\n} else {\r\n  console.error('Service workers are not supported in this browser.');\r\n}\r\n\n\n//# sourceURL=webpack://JATE/../../../../Dropbox/PC/Downloads/19-PWA_(1)-COPY/19-PWA/02-Challenge/Develop/client/src/js/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("../../../../Dropbox/PC/Downloads/19-PWA (1)-COPY/19-PWA/02-Challenge/Develop/client/src/js/index.js");
/******/ 	
/******/ })()
;