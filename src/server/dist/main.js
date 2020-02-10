module.exports =
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/web/index.server.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \"{\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    for (var i = 0; i < this.length; i++) {\n      // eslint-disable-next-line prefer-destructuring\n      var id = this[i][0];\n\n      if (id != null) {\n        alreadyImportedModules[id] = true;\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = modules[_i]; // skip already imported module\n      // this implementation is not 100% perfect for weird media query combinations\n      // when a module is imported multiple times with different media queries.\n      // I hope this will never occur (Hey this way we have smaller bundles)\n\n      if (item[0] == null || !alreadyImportedModules[item[0]]) {\n        if (mediaQuery && !item[2]) {\n          item[2] = mediaQuery;\n        } else if (mediaQuery) {\n          item[2] = \"(\".concat(item[2], \") and (\").concat(mediaQuery, \")\");\n        }\n\n        list.push(item);\n      }\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot).concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (url, needQuotes) {\n  // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n  url = url.__esModule ? url.default : url;\n\n  if (typeof url !== 'string') {\n    return url;\n  } // If url is already wrapped in quotes, remove them\n\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    // eslint-disable-next-line no-param-reassign\n    url = url.slice(1, -1);\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]/.test(url) || needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, '\\\\n'), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./src/web/assets/icon.png":
/*!*********************************!*\
  !*** ./src/web/assets/icon.png ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAAAkCAYAAAAKNyObAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQwIDc5LjE2MDQ1MSwgMjAxNy8wNS8wNi0wMTowODoyMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6REZEMkRFNkY1MTZCMTFFOUFEQTNCMTRDOUFBOEMyNTYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6REZEMkRFNzA1MTZCMTFFOUFEQTNCMTRDOUFBOEMyNTYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpERkQyREU2RDUxNkIxMUU5QURBM0IxNEM5QUE4QzI1NiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpERkQyREU2RTUxNkIxMUU5QURBM0IxNEM5QUE4QzI1NiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pr6Bn2cAAAGVSURBVHja7NdNKARRAMDx2Y9ifYYTKQdOkhPl5ujq4CQXRznLzYWbXJRSDi5cHRwdHEQpyWHj5CsfbSg2hNg1/k/zapusfbP7Zt7Ivvpte5iZ/e989Z5l6RmVWMIbVlCtuqNt23npGC3YFb+T4wBtpuP6cO0Kk27Rbypu1LmM9i/eMR5kXBzzBaLcxP1Y4XdcEzY9hkk7aPYrrhsnRYZJV+jRHTeEpxLDpFeM6IiLYhqfmsJyzSFWbFwt1n2IyrWBRq9xHTj0OUw6Rpdq3ADuAwqTxP08WChuApmAwyRxX08h4o5LYNVQlNsaamRcK/ZCEiYl0W45Mwg7hI4ifKRRb4Vv3MX4uEQnHp3vL2gwEHPhvFZSOMPkTxsNG7qMY+5XSdQK8SjHlePKcX8lLl7i/mIWs4Vsnj/eiwWdwV5ewhGF4z2begmrLJEy/+aByBpq+VCJuzEUl1LZKOFhAa0y0grH+Z6mqTwQYkW+GPBZWybmQXXjKmwHdOb2xUzc64pfBM7g1HlIdMaJZeA5ZlGXb8X/JcAAuPQBxTXAMY8AAAAASUVORK5CYII=\"\n\n//# sourceURL=webpack:///./src/web/assets/icon.png?");

/***/ }),

/***/ "./src/web/components/Index/index.tsx":
/*!********************************************!*\
  !*** ./src/web/components/Index/index.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nfunction IndexBanner() {\n  return react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", null, \"Index Banner\");\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (IndexBanner);\n\n//# sourceURL=webpack:///./src/web/components/Index/index.tsx?");

/***/ }),

/***/ "./src/web/components/common/Header.tsx":
/*!**********************************************!*\
  !*** ./src/web/components/common/Header.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _common_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common.scss */ \"./src/web/components/common/common.scss\");\n/* harmony import */ var _common_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_common_scss__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nfunction Header() {\n  return react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", {\n    className: \"header-box\"\n  }, react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n    to: \"/\"\n  }, \"\\u9996\\u9875\"), \"\\xA0\", react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n    to: \"/about\"\n  }, \"\\u5173\\u4E8E\\u6211\"), \"\\xA0\", react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"span\", null, \"\\u9000\\u51FA\"));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (react__WEBPACK_IMPORTED_MODULE_0__[\"memo\"](Header));\n\n//# sourceURL=webpack:///./src/web/components/common/Header.tsx?");

/***/ }),

/***/ "./src/web/components/common/common.scss":
/*!***********************************************!*\
  !*** ./src/web/components/common/common.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \".header-box {\\n  height: 62px;\\n  line-height: 62px;\\n  background: #ccc;\\n  padding-left: 50px; }\\n\", \"\"]);\n\n\n//# sourceURL=webpack:///./src/web/components/common/common.scss?");

/***/ }),

/***/ "./src/web/index.server.tsx":
/*!**********************************!*\
  !*** ./src/web/index.server.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _routers_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./routers/server */ \"./src/web/routers/server.tsx\");\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./store */ \"./src/web/store/index.ts\");\n\n\n\n\n\nfunction createServerDom(url, store) {\n  return react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"StaticRouter\"], {\n    location: url\n  }, react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_store__WEBPACK_IMPORTED_MODULE_3__[\"MyContext\"].Provider, {\n    value: store\n  }, Object(_routers_server__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (createServerDom);\n\n//# sourceURL=webpack:///./src/web/index.server.tsx?");

/***/ }),

/***/ "./src/web/pages/about/index.tsx":
/*!***************************************!*\
  !*** ./src/web/pages/about/index.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _pages_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @pages/layout */ \"./src/web/pages/layout/index.tsx\");\n\n\n\nfunction About() {\n  return react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_pages_layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null, react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", null, \"\\u5173\\u4E8E\\u6211\"));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (About);\n\n//# sourceURL=webpack:///./src/web/pages/about/index.tsx?");

/***/ }),

/***/ "./src/web/pages/index/index.scss":
/*!****************************************!*\
  !*** ./src/web/pages/index/index.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Imports\nvar getUrl = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\nvar ___CSS_LOADER_URL___0___ = getUrl(__webpack_require__(/*! ../../assets/icon.png */ \"./src/web/assets/icon.png\"));\n// Module\nexports.push([module.i, \".index-pages {\\n  font-size: 18px;\\n  padding: 50px;\\n  background: url(\" + ___CSS_LOADER_URL___0___ + \") no-repeat; }\\n  .index-pages aside {\\n    border: 10px solid yellowgreen;\\n    padding: 30px; }\\n\", \"\"]);\n\n\n//# sourceURL=webpack:///./src/web/pages/index/index.scss?");

/***/ }),

/***/ "./src/web/pages/index/index.tsx":
/*!***************************************!*\
  !*** ./src/web/pages/index/index.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/Index */ \"./src/web/components/Index/index.tsx\");\n/* harmony import */ var _pages_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @pages/layout */ \"./src/web/pages/layout/index.tsx\");\n/* harmony import */ var _store_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @store/index */ \"./src/web/store/index.ts\");\n/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.scss */ \"./src/web/pages/index/index.scss\");\n/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nvar useContext = react__WEBPACK_IMPORTED_MODULE_0__[\"useContext\"];\n\nfunction Index() {\n  var store = useContext(_store_index__WEBPACK_IMPORTED_MODULE_3__[\"MyContext\"]);\n  return react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], null, react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_pages_layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null, react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", {\n    className: \"index-pages\"\n  }, react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_components_Index__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null), react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"hr\", null), react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"hr\", null), react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"section\", null, \"IndexPage\"))));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\n//# sourceURL=webpack:///./src/web/pages/index/index.tsx?");

/***/ }),

/***/ "./src/web/pages/layout/index.tsx":
/*!****************************************!*\
  !*** ./src/web/pages/layout/index.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_common_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/common/Header */ \"./src/web/components/common/Header.tsx\");\n\n\n\nvar Layout = function Layout(props) {\n  console.log(props);\n  return react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", null, react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_components_common_Header__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null), props.children);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layout);\n\n//# sourceURL=webpack:///./src/web/pages/layout/index.tsx?");

/***/ }),

/***/ "./src/web/pages/login/index.scss":
/*!****************************************!*\
  !*** ./src/web/pages/login/index.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \".login-page {\\n  width: 100vw;\\n  height: 100vh;\\n  background: url(http://testgy.515md.com/static/img/loginbg.e3c462e.jpg) 50%;\\n  background-size: cover;\\n  padding-top: 1px; }\\n  .login-page .login-title {\\n    font-size: 32px;\\n    color: #2a2a2a;\\n    margin-bottom: 30px;\\n    padding-top: 5%;\\n    text-align: center; }\\n  .login-page .login-main {\\n    width: 325px;\\n    margin: 0 auto; }\\n  .login-page .block {\\n    display: block;\\n    width: 100%; }\\n  .login-page .mb30 {\\n    margin-bottom: 30px; }\\n\", \"\"]);\n\n\n//# sourceURL=webpack:///./src/web/pages/login/index.scss?");

/***/ }),

/***/ "./src/web/pages/login/index.tsx":
/*!***************************************!*\
  !*** ./src/web/pages/login/index.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../store */ \"./src/web/store/index.ts\");\n/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.scss */ \"./src/web/pages/login/index.scss\");\n/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_2__);\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === \"[object Arguments]\")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\nfunction Login(props) {\n  var store = react__WEBPACK_IMPORTED_MODULE_0__[\"useContext\"](_store__WEBPACK_IMPORTED_MODULE_1__[\"MyContext\"]);\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"](''),\n      _React$useState2 = _slicedToArray(_React$useState, 2),\n      username = _React$useState2[0],\n      setUsername = _React$useState2[1];\n\n  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"](''),\n      _React$useState4 = _slicedToArray(_React$useState3, 2),\n      password = _React$useState4[0],\n      setPassword = _React$useState4[1];\n\n  var submit = function submit() {\n    if (!username.trim() || !password.trim()) return; // store.setToken(username)\n    // store.setUserInfo({\n    //     username,\n    //     password\n    // })\n  };\n\n  return react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", {\n    className: \"login-page\"\n  }, react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", {\n    className: \"login-title\"\n  }, \"\\u767B\\u5F55\\u7CFB\\u7EDF\"), react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", {\n    className: \"login-main\"\n  }, react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"input\", {\n    className: \"ui-input mb30 block\",\n    placeholder: \"\\u7528\\u6237\\u540D\",\n    onChange: function onChange(e) {\n      setUsername(e.target.value);\n    }\n  }), react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"input\", {\n    type: \"password\",\n    className: \"ui-input mb30 block\",\n    placeholder: \"\\u5BC6\\u7801\",\n    onChange: function onChange(e) {\n      setPassword(e.target.value);\n    }\n  }), react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"button\", {\n    onClick: submit,\n    className: \"ui-button ui-button-primary block\",\n    role: \"button\"\n  }, \"\\u767B\\u5F55\")));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Login);\n\n//# sourceURL=webpack:///./src/web/pages/login/index.tsx?");

/***/ }),

/***/ "./src/web/routers/server.tsx":
/*!************************************!*\
  !*** ./src/web/routers/server.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _pages_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @pages/index */ \"./src/web/pages/index/index.tsx\");\n/* harmony import */ var _pages_login__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @pages/login */ \"./src/web/pages/login/index.tsx\");\n/* harmony import */ var _pages_about__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @pages/about */ \"./src/web/pages/about/index.tsx\");\n\n\n\n\n\nvar routers = [{\n  component: _pages_index__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  path: '/',\n  exact: true,\n  auth: true\n}, {\n  component: _pages_about__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n  path: '/about',\n  exact: true,\n  auth: true\n}, {\n  component: _pages_login__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n  path: '/login',\n  exact: true\n}];\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  return react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Switch\"], null, routers.map(function (route, index) {\n    var component = route.component,\n        path = route.path,\n        exact = route.exact;\n    var LazyCompon = component;\n    return react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], {\n      key: index,\n      exact: exact,\n      path: path,\n      render: function render(props) {\n        return react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](LazyCompon, props);\n      }\n    });\n  }));\n});\n\n//# sourceURL=webpack:///./src/web/routers/server.tsx?");

/***/ }),

/***/ "./src/web/store/index.ts":
/*!********************************!*\
  !*** ./src/web/store/index.ts ***!
  \********************************/
/*! exports provided: MyContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MyContext\", function() { return MyContext; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nvar MyContext = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"createContext\"])(null);\n\n//# sourceURL=webpack:///./src/web/store/index.ts?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ })

/******/ });