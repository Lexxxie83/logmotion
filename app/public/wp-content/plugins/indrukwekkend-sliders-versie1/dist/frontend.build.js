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
/******/ 	return __webpack_require__(__webpack_require__.s = 34);
/******/ })
/************************************************************************/
/******/ ({

/***/ 34:
/*!*************************!*\
  !*** ./src/frontend.js ***!
  \*************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__project_slider_frontend_js__ = __webpack_require__(/*! ./project-slider/frontend.js */ 35);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__project_slider_frontend_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__project_slider_frontend_js__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__project_masonry_frontend_js__ = __webpack_require__(/*! ./project-masonry/frontend.js */ 52);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__project_masonry_frontend_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__project_masonry_frontend_js__);\n/**\n * Import all your frontend.js files here\n * \n * !!!!!!!!!Let op:!!!!!!!!!!! \n * Al deze frontend plugins apart benoemen in de INIT.PHP!!!!!\n * \n * Dit heeft te maken met de fouten die sommige scripts kunnen veroorzaken als ze niet door de blokken worden aangeroepen in de rest van de admin.\n *  \n */\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzQuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZnJvbnRlbmQuanM/N2YyYyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEltcG9ydCBhbGwgeW91ciBmcm9udGVuZC5qcyBmaWxlcyBoZXJlXG4gKiBcbiAqICEhISEhISEhIUxldCBvcDohISEhISEhISEhISBcbiAqIEFsIGRlemUgZnJvbnRlbmQgcGx1Z2lucyBhcGFydCBiZW5vZW1lbiBpbiBkZSBJTklULlBIUCEhISEhXG4gKiBcbiAqIERpdCBoZWVmdCB0ZSBtYWtlbiBtZXQgZGUgZm91dGVuIGRpZSBzb21taWdlIHNjcmlwdHMga3VubmVuIHZlcm9vcnpha2VuIGFscyB6ZSBuaWV0IGRvb3IgZGUgYmxva2tlbiB3b3JkZW4gYWFuZ2Vyb2VwZW4gaW4gZGUgcmVzdCB2YW4gZGUgYWRtaW4uXG4gKiAgXG4gKi9cbmltcG9ydCAnLi9wcm9qZWN0LXNsaWRlci9mcm9udGVuZC5qcyc7XG5pbXBvcnQgJy4vcHJvamVjdC1tYXNvbnJ5L2Zyb250ZW5kLmpzJztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9mcm9udGVuZC5qc1xuLy8gbW9kdWxlIGlkID0gMzRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///34\n");

/***/ }),

/***/ 35:
/*!****************************************!*\
  !*** ./src/project-slider/frontend.js ***!
  \****************************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed: SyntaxError: Unexpected token (34:2)\\n\\n\\u001b[0m \\u001b[90m 32 | \\u001b[39m\\n \\u001b[90m 33 | \\u001b[39m\\trender( \\n\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m 34 | \\u001b[39m\\t\\t\\u001b[33m<\\u001b[39m\\u001b[33mAsNavFor\\u001b[39m \\n \\u001b[90m    | \\u001b[39m\\t\\t\\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\n \\u001b[90m 35 | \\u001b[39m\\t\\t\\tdots \\u001b[33m=\\u001b[39m { dots }\\n \\u001b[90m 36 | \\u001b[39m\\t\\t\\timages\\u001b[33m=\\u001b[39m{ iconsSources }\\n \\u001b[90m 37 | \\u001b[39m\\t\\t\\tfade\\u001b[33m=\\u001b[39m{fade}\\u001b[0m\\n\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzUuanMiLCJzb3VyY2VzIjpbXSwibWFwcGluZ3MiOiIiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///35\n");

/***/ }),

/***/ 52:
/*!*****************************************!*\
  !*** ./src/project-masonry/frontend.js ***!
  \*****************************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed: SyntaxError: Unexpected token (31:2)\\n\\n\\u001b[0m \\u001b[90m 29 | \\u001b[39m\\n \\u001b[90m 30 | \\u001b[39m  render(\\n\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m 31 | \\u001b[39m\\t\\t\\u001b[33m<\\u001b[39m\\u001b[33mFrontendGallery\\u001b[39m\\n \\u001b[90m    | \\u001b[39m\\t\\t\\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\n \\u001b[90m 32 | \\u001b[39m\\t\\t\\tphotos\\u001b[33m=\\u001b[39m{photos}\\n \\u001b[90m 33 | \\u001b[39m\\t\\t\\tdirection\\u001b[33m=\\u001b[39m{direction}\\n \\u001b[90m 34 | \\u001b[39m      margin\\u001b[33m=\\u001b[39m{margin}\\u001b[0m\\n\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNTIuanMiLCJzb3VyY2VzIjpbXSwibWFwcGluZ3MiOiIiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///52\n");

/***/ })

/******/ });