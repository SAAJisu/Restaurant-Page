/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/aboutMe.JS":
/*!************************!*\
  !*** ./src/aboutMe.JS ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   aboutMeTab: () => (/* binding */ aboutMeTab)\n/* harmony export */ });\nfunction aboutMeTab() {\n    const contentDiv = document.getElementById('content');\n    const heading = document.createElement('h1');\n    heading.textContent= 'Welcome to our restaurant';\n    contentDiv.appendChild(heading);\n}\n\n//# sourceURL=webpack:///./src/aboutMe.JS?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pageLoading_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageLoading.js */ \"./src/pageLoading.js\");\n/* harmony import */ var _aboutMe_JS__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./aboutMe.JS */ \"./src/aboutMe.JS\");\n\n\n\ndocument.addEventListener('DOMContentLoaded', ()=> {\n    (0,_pageLoading_js__WEBPACK_IMPORTED_MODULE_0__.initializePage)();\n    (0,_aboutMe_JS__WEBPACK_IMPORTED_MODULE_1__.aboutMeTab)();\n})\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/pageLoading.js":
/*!****************************!*\
  !*** ./src/pageLoading.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   initializePage: () => (/* binding */ initializePage)\n/* harmony export */ });\nfunction initializePage() {\n    const contentDiv = document.getElementById('content');\n\n\n    const image = document.createElement('img');\n    image.src = 'https://dummyimage.com/600x400/000/fff&text=Our+Restaurant';\n    image.width = 600;\n    image.height = 400;\n    contentDiv.appendChild(image);\n\n    const heading = document.createElement('h1');\n    heading.textContent= 'Welcome to our restaurant';\n    contentDiv.appendChild(heading);\n\n    const paragraph = document.createElement('p');\n    paragraph.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.';\n    contentDiv.appendChild(paragraph);\n\n}\n\n//# sourceURL=webpack:///./src/pageLoading.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;