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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../img/background.jpg */ \"./src/img/background.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap);\"]);\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Black+Ops+One&display=swap);\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `:root {\r\n  --blue-color: #0b4f6c;\r\n  --white-color: #fbfbff;\r\n  --gray-color: #b1b1b1;\r\n  --black-color: black;\r\n  --ship-color: #425871;\r\n  --missed-color: #ff6961;\r\n  --hit-color: #77dd77;\r\n}\r\n\r\nhtml {\r\n  font-family:\r\n    Roboto,\r\n    -apple-system,\r\n    BlinkMacSystemFont,\r\n    \"Segoe UI\",\r\n    Oxygen,\r\n    Ubuntu,\r\n    Cantarell,\r\n    \"Open Sans\",\r\n    \"Helvetica Neue\",\r\n    sans-serif;\r\n  font-size: 18px;\r\n}\r\n\r\nbody {\r\n  margin: 0;\r\n  padding: 0;\r\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\r\n}\r\n\r\n#container {\r\n  min-height: 100vh;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n#title {\r\n  font-family: \"Black Ops One\", cursive;\r\n  font-size: 5rem;\r\n  margin: 50px;\r\n  color: var(--white-color);\r\n}\r\n\r\n#game-container {\r\n  display: flex;\r\n  gap: 50px;\r\n  height: 300px;\r\n  width: 700px;\r\n  margin-top: 50px;\r\n}\r\n\r\n.board {\r\n  display: grid;\r\n  grid-template-columns: repeat(10, 1fr);\r\n  grid-template-rows: repeat(10, 1fr);\r\n  flex: 1;\r\n  border: 1px solid var(--black-color);\r\n  background-color: var(--white-color);\r\n}\r\n\r\n.tile {\r\n  border: 1px solid var(--black-color);\r\n}\r\n\r\n.tile:hover {\r\n  background-color: var(--gray-color);\r\n}\r\n\r\n.tile.ship {\r\n  background-color: var(--ship-color);\r\n}\r\n\r\n.tile.fake-ship {\r\n  background-color: var(--ship-color);\r\n}\r\n\r\n.tile.miss {\r\n  background-color: var(--missed-color);\r\n}\r\n\r\n.tile.hit {\r\n  background-color: var(--hit-color);\r\n}\r\n\r\nfooter {\r\n  position: fixed;\r\n  bottom: 0;\r\n  width: 100%;\r\n  padding: 10px;\r\n  text-align: center;\r\n  background-color: rgba(0, 0, 0, 0.5);\r\n  color: var(--white-color)\r\n}\r\n\r\n.place-ships-modal .overlay,\r\n.game-over-modal .overlay {\r\n  background-color: rgba(0, 0, 0, 0.5);\r\n  height: 100vh;\r\n  width: 100vw;\r\n  z-index: 1;\r\n  position: fixed;\r\n  top: 0px;\r\n  left: 0px;\r\n  backdrop-filter: blur(4px);\r\n  display: none;\r\n}\r\n\r\n.place-ships-modal .place-ships-board,\r\n.place-ships-modal-fake .place-ships-board,\r\n.game-over-modal .game-over-content {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  z-index: 2;\r\n  height: 75%;\r\n  width: 30%;\r\n  transform: translate(-50%, -50%) scale(0);\r\n  background-color: var(--white-color);\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  border-radius: 6px;\r\n  padding: 25px 50px;\r\n}\r\n\r\n.place-ships-modal .board,\r\n.place-ships-modal-fake .board {\r\n  width: 100%;\r\n  margin: 25px 0;\r\n}\r\n\r\n.place-ships-modal.active .overlay,\r\n.game-over-modal.active .overlay {\r\n  display: flex;\r\n}\r\n\r\n.place-ships-modal.active .place-ships-board,\r\n.place-ships-modal-fake.active .place-ships-board,\r\n.game-over-modal.active .game-over-content {\r\n  transition: all 200ms ease-in-out;\r\n  transform: translate(-50%, -50%) scale(1);\r\n}\r\n\r\n.place-ships-modal-fake .place-ships-board {\r\n  z-index: 3;\r\n}\r\n\r\n.game-over-modal .game-over-content {\r\n  justify-content: space-between;\r\n  height: 25%;\r\n}\r\n\r\n#modal-text,\r\n#winner-text {\r\n  font-size: 2rem;\r\n}\r\n\r\n#game-over-modal-text {\r\n  text-align: center;\r\n  font-size: 3rem;\r\n}\r\n\r\n.button {\r\n  height: 50px;\r\n  width: 25%;\r\n  margin-bottom: 10px;\r\n  font-size: 1rem;\r\n  border: 2px solid var(--gray-color);\r\n  border-radius: 6px;\r\n}\r\n\r\n.button:hover {\r\n  background-color: var(--gray-color);\r\n}\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleship/./src/css/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://battleship/./src/css/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/style.css */ \"./src/css/style.css\");\n/* harmony import */ var _modules_game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/game */ \"./src/modules/game.js\");\n/* harmony import */ var _modules_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/dom */ \"./src/modules/dom.js\");\n\r\n\r\n\r\n\r\n\r\n_modules_dom__WEBPACK_IMPORTED_MODULE_2__[\"default\"].loadPage();\r\n(0,_modules_game__WEBPACK_IMPORTED_MODULE_1__.preGame)();\r\n\n\n//# sourceURL=webpack://battleship/./src/index.js?");

/***/ }),

/***/ "./src/modules/dom.js":
/*!****************************!*\
  !*** ./src/modules/dom.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ DOM)\n/* harmony export */ });\nclass DOM {\r\n  static loadPage() {\r\n    DOM.createTitle();\r\n    DOM.createGameContainer();\r\n    DOM.createGameBoards();\r\n    DOM.createFooter();\r\n    DOM.createModal();\r\n    DOM.createFakeModal();\r\n    DOM.createGameOverModal();\r\n  }\r\n\r\n  static createTitle() {\r\n    const container = document.getElementById(\"container\");\r\n\r\n    const title = document.createElement(\"div\");\r\n    title.setAttribute(\"id\", \"title\");\r\n    title.textContent = \"Battleship\";\r\n\r\n    container.appendChild(title);\r\n  }\r\n\r\n  static createFooter() {\r\n    const container = document.getElementById(\"container\");\r\n\r\n    const footer = document.createElement(\"footer\");\r\n    footer.textContent = \"Copyright © 2023 chaseseidel\";\r\n\r\n    container.appendChild(footer);\r\n  }\r\n\r\n  static createGameContainer() {\r\n    const container = document.getElementById(\"container\");\r\n\r\n    const gameContainer = document.createElement(\"div\");\r\n    gameContainer.setAttribute(\"id\", \"game-container\");\r\n\r\n    container.appendChild(gameContainer);\r\n  }\r\n\r\n  static createGameBoards() {\r\n    const gameContainer = document.getElementById(\"game-container\");\r\n\r\n    for (let i = 0; i < 2; i++) {\r\n      const board = document.createElement(\"div\");\r\n      board.classList.add(\"board\");\r\n\r\n      for (let i = 0; i < 100; i++) {\r\n        const tile = document.createElement(\"div\");\r\n        tile.classList.add(\"tile\");\r\n        board.appendChild(tile);\r\n      }\r\n\r\n      gameContainer.appendChild(board);\r\n    }\r\n  }\r\n\r\n  static createModal() {\r\n    const container = document.getElementById(\"container\");\r\n\r\n    const modal = document.createElement(\"div\");\r\n    modal.className = \"place-ships-modal active\";\r\n\r\n    const overlay = document.createElement(\"div\");\r\n    const content = document.createElement(\"div\");\r\n    const text = document.createElement(\"div\");\r\n    const board = document.createElement(\"div\");\r\n    const rotate = document.createElement(\"button\");\r\n\r\n    overlay.classList.add(\"overlay\");\r\n    content.classList.add(\"place-ships-board\");\r\n\r\n    text.setAttribute(\"id\", \"modal-text\");\r\n    text.textContent = \"Place your ships\";\r\n\r\n    board.classList.add(\"board\");\r\n\r\n    for (let i = 0; i < 100; i++) {\r\n      const tile = document.createElement(\"div\");\r\n      tile.classList.add(\"tile\");\r\n      board.appendChild(tile);\r\n    }\r\n\r\n    rotate.classList.add(\"button\");\r\n    rotate.setAttribute(\"id\", \"rotate\");\r\n    rotate.textContent = \"Rotate\";\r\n\r\n    content.appendChild(text);\r\n    content.appendChild(board);\r\n    content.appendChild(rotate);\r\n\r\n    modal.appendChild(overlay);\r\n    modal.appendChild(content);\r\n\r\n    container.appendChild(modal);\r\n  }\r\n\r\n  static createFakeModal() {\r\n    const container = document.getElementById(\"container\");\r\n\r\n    const modal = document.createElement(\"div\");\r\n    modal.className = \"place-ships-modal-fake active\";\r\n\r\n    const content = document.createElement(\"div\");\r\n    const text = document.createElement(\"div\");\r\n    const board = document.createElement(\"div\");\r\n    const rotate = document.createElement(\"button\");\r\n\r\n    content.classList.add(\"place-ships-board\");\r\n\r\n    text.setAttribute(\"id\", \"modal-text\");\r\n    text.textContent = \"Place your ships\";\r\n\r\n    board.classList.add(\"board\");\r\n\r\n    for (let i = 0; i < 100; i++) {\r\n      const tile = document.createElement(\"div\");\r\n      tile.classList.add(\"tile\");\r\n      board.appendChild(tile);\r\n    }\r\n\r\n    rotate.classList.add(\"button\");\r\n    rotate.setAttribute(\"id\", \"fake-rotate\");\r\n    rotate.textContent = \"Rotate\";\r\n\r\n    content.appendChild(text);\r\n    content.appendChild(board);\r\n    content.appendChild(rotate);\r\n\r\n    modal.appendChild(content);\r\n\r\n    container.appendChild(modal);\r\n  }\r\n\r\n  static createGameOverModal() {\r\n    const container = document.getElementById(\"container\");\r\n\r\n    const modal = document.createElement(\"div\");\r\n    modal.className = \"game-over-modal\";\r\n\r\n    const overlay = document.createElement(\"div\");\r\n    const content = document.createElement(\"div\");\r\n    const text = document.createElement(\"div\");\r\n    const winnerText = document.createElement(\"div\");\r\n    const resetButton = document.createElement(\"button\");\r\n\r\n    overlay.classList.add(\"overlay\");\r\n    content.classList.add(\"game-over-content\");\r\n\r\n    text.setAttribute(\"id\", \"game-over-modal-text\");\r\n    text.textContent = \"Game Over\";\r\n\r\n    winnerText.setAttribute(\"id\", \"winner-text\");\r\n    winnerText.textContent = \"You won the game!\";\r\n\r\n    resetButton.classList.add(\"button\");\r\n    resetButton.setAttribute(\"id\", \"reset\");\r\n    resetButton.textContent = \"Reset Game\";\r\n\r\n    content.appendChild(text);\r\n    content.appendChild(winnerText);\r\n    content.appendChild(resetButton);\r\n\r\n    modal.appendChild(overlay);\r\n    modal.appendChild(content);\r\n\r\n    container.appendChild(modal);\r\n  }\r\n\r\n  static placeShip(tiles, length, position, direction) {\r\n    position = position[1] * 10 + position[0];\r\n    if (direction === \"x\") {\r\n      for (let i = 0; i < length; i++) {\r\n        tiles[position + i].classList.add(\"ship\");\r\n      }\r\n    } else {\r\n      for (let i = 0; i < length; i++) {\r\n        tiles[position + 10 * i].classList.add(\"ship\");\r\n      }\r\n    }\r\n  }\r\n\r\n  static markAttack(tiles, position) {\r\n    position = position[1] * 10 + position[0];\r\n\r\n    if (tiles[position].classList.contains(\"ship\")) {\r\n      tiles[position].className = \"tile hit\";\r\n    } else {\r\n      tiles[position].classList.add(\"miss\");\r\n    }\r\n  }\r\n\r\n  static markPlayerAttack(tiles, position, opponent) {\r\n    const tilePosition = position[1] * 10 + position[0];\r\n\r\n    if (typeof opponent.board.board[position[0]][position[1]] === \"object\") {\r\n      tiles[tilePosition].className = \"tile hit\";\r\n    } else {\r\n      if (!tiles[tilePosition].classList.contains(\"miss\")) {\r\n        tiles[tilePosition].classList.add(\"miss\");\r\n      }\r\n    }\r\n  }\r\n\r\n  static playerPlacesShip(tiles, length, direction, shipLengths, ships) {\r\n    tiles.forEach((tile, index) => {\r\n      tile.addEventListener(\"click\", () => {\r\n        let interfere = false;\r\n        if (direction === \"x\") {\r\n          for (let i = 0; i < length; i++) {\r\n            if ((index % 10) + length > 10) {\r\n              interfere = true;\r\n              break;\r\n            }\r\n            if (tiles[index + i].classList.contains(\"ship\")) {\r\n              interfere = true;\r\n              break;\r\n            }\r\n          }\r\n          if (!interfere) {\r\n            DOM.placeShip(\r\n              tiles,\r\n              length,\r\n              [index % 10, Math.floor(index / 10)],\r\n              direction\r\n            );\r\n            shipLengths.shift();\r\n            ships.push([\r\n              length,\r\n              [index % 10, Math.floor(index / 10)],\r\n              direction,\r\n            ]);\r\n          }\r\n        } else {\r\n          for (let i = 0; i < length; i++) {\r\n            if (Math.floor(index / 10) + length > 10) {\r\n              interfere = true;\r\n              break;\r\n            }\r\n            if (tiles[index + 10 * i].classList.contains(\"ship\")) {\r\n              interfere = true;\r\n              break;\r\n            }\r\n          }\r\n          if (!interfere) {\r\n            DOM.placeShip(\r\n              tiles,\r\n              length,\r\n              [index % 10, Math.floor(index / 10)],\r\n              direction\r\n            );\r\n            shipLengths.shift();\r\n            ships.push([\r\n              length,\r\n              [index % 10, Math.floor(index / 10)],\r\n              direction,\r\n            ]);\r\n          }\r\n        }\r\n      });\r\n    });\r\n  }\r\n\r\n  static addInteractiveBoard(tiles, length, direction) {\r\n    tiles.forEach((tile, index) => {\r\n      tile.addEventListener(\"mouseenter\", () => {\r\n        let interfere = false;\r\n        if (direction === \"x\") {\r\n          for (let i = 0; i < length; i++) {\r\n            if ((index % 10) + length > 10) {\r\n              interfere = true;\r\n              break;\r\n            }\r\n            if (\r\n              tiles[index + i].classList.contains(\"ship\") ||\r\n              tiles[index + i].classList.contains(\"fake-ship\")\r\n            ) {\r\n              interfere = true;\r\n              break;\r\n            }\r\n          }\r\n          if (!interfere) {\r\n            for (let i = 0; i < length; i++) {\r\n              tiles[index + i].classList.toggle(\"ship\");\r\n            }\r\n          } else {\r\n            tile.classList.toggle(\"miss\");\r\n          }\r\n        } else if (direction === \"y\") {\r\n          for (let i = 0; i < length; i++) {\r\n            if (Math.floor(index / 10) + length > 10) {\r\n              interfere = true;\r\n              break;\r\n            }\r\n            if (\r\n              tiles[index + 10 * i].classList.contains(\"ship\") ||\r\n              tiles[index + 10 * i].classList.contains(\"fake-ship\")\r\n            ) {\r\n              interfere = true;\r\n              break;\r\n            }\r\n          }\r\n          if (!interfere) {\r\n            for (let i = 0; i < length; i++) {\r\n              tiles[index + 10 * i].classList.toggle(\"ship\");\r\n            }\r\n          } else {\r\n            tile.classList.toggle(\"miss\");\r\n          }\r\n        }\r\n      });\r\n\r\n      tile.addEventListener(\"mouseleave\", () => {\r\n        if (direction === \"x\") {\r\n          if (tile.classList.contains(\"ship\")) {\r\n            for (let i = 0; i < length; i++) {\r\n              tiles[index + i].classList.toggle(\"ship\");\r\n            }\r\n          }\r\n          if (tile.classList.contains(\"miss\")) {\r\n            tile.classList.toggle(\"miss\");\r\n          }\r\n        } else if (direction === \"y\") {\r\n          if (tile.classList.contains(\"ship\")) {\r\n            for (let i = 0; i < length; i++) {\r\n              tiles[index + 10 * i].classList.toggle(\"ship\");\r\n            }\r\n          }\r\n          if (tile.classList.contains(\"miss\")) {\r\n            tile.classList.toggle(\"miss\");\r\n          }\r\n        }\r\n      });\r\n    });\r\n  }\r\n\r\n  static updateBoard() {\r\n    const boards = document.querySelectorAll(\".board\");\r\n    const playerBoard = boards[0];\r\n    const boardToCopy = boards[2];\r\n\r\n    const playerTiles = playerBoard.querySelectorAll(\".tile\");\r\n    const tilesToCopy = boardToCopy.querySelectorAll(\".tile\");\r\n\r\n    playerTiles.forEach((tile, index) => {\r\n      tile.className = tilesToCopy[index].className;\r\n    });\r\n  }\r\n\r\n  static removeEventListeners(tiles) {\r\n    tiles.forEach((tile) => {\r\n      tile.parentNode.replaceChild(tile.cloneNode(true), tile);\r\n    });\r\n  }\r\n\r\n  static toggleModal() {\r\n    const modal = document.querySelector(\".place-ships-modal\");\r\n\r\n    modal.classList.toggle(\"active\");\r\n  }\r\n\r\n  static toggleFakeModal() {\r\n    const modal = document.querySelector(\".place-ships-modal-fake\");\r\n\r\n    modal.classList.toggle(\"active\");\r\n  }\r\n\r\n  static toggleGameOverModal() {\r\n    const modal = document.querySelector(\".game-over-modal\");\r\n\r\n    modal.classList.toggle(\"active\");\r\n  }\r\n\r\n  static resetPage() {\r\n    const container = document.getElementById(\"container\");\r\n    while (container.firstChild) {\r\n      container.removeChild(container.firstChild);\r\n    }\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://battleship/./src/modules/dom.js?");

/***/ }),

/***/ "./src/modules/game.js":
/*!*****************************!*\
  !*** ./src/modules/game.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ playGame),\n/* harmony export */   preGame: () => (/* binding */ preGame)\n/* harmony export */ });\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ \"./src/modules/player.js\");\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ship */ \"./src/modules/ship.js\");\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom */ \"./src/modules/dom.js\");\n\r\n\r\n\r\n\r\nlet shipLengths = [2, 3, 3, 4, 5];\r\n\r\nlet playerShips = [];\r\n\r\nlet direction = \"x\";\r\n\r\nfunction playGame() {\r\n  const player = new _player__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"Bob\");\r\n  const computer = new _player__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"AI\");\r\n\r\n  player.board.createBoard();\r\n  computer.board.createBoard();\r\n\r\n  player.changeTurn();\r\n\r\n  const boards = document.querySelectorAll(\".board\");\r\n  const playerBoard = boards[0];\r\n  const computerBoard = boards[1];\r\n  let playerTiles = playerBoard.querySelectorAll(\".tile\");\r\n  const computerTiles = computerBoard.querySelectorAll(\".tile\");\r\n\r\n  computer.randomFleet();\r\n  addPlayerShips(player);\r\n\r\n  computerTiles.forEach((tile, index) => {\r\n    tile.addEventListener(\"click\", () => {\r\n      if (!tile.classList.contains(\"miss\") && !tile.classList.contains(\"hit\")) {\r\n        const position = [index % 10, Math.floor(index / 10)];\r\n        player.attackPlayer(computer, position);\r\n        _dom__WEBPACK_IMPORTED_MODULE_2__[\"default\"].markPlayerAttack(computerTiles, position, computer);\r\n        computer.randomAttack(player);\r\n        const attack = getAttack(player);\r\n        _dom__WEBPACK_IMPORTED_MODULE_2__[\"default\"].markAttack(playerTiles, attack);\r\n        if (computer.board.allShipsSunk()) {\r\n          _dom__WEBPACK_IMPORTED_MODULE_2__[\"default\"].toggleGameOverModal();\r\n        } else if (player.board.allShipsSunk()) {\r\n          _dom__WEBPACK_IMPORTED_MODULE_2__[\"default\"].toggleGameOverModal();\r\n          const winnerText = document.getElementById(\"winner-text\");\r\n          winnerText.textContent = \"You lost the game!\";\r\n        }\r\n      }\r\n    });\r\n  });\r\n\r\n  const resetButton = document.getElementById(\"reset\");\r\n  resetButton.addEventListener(\"click\", () => {\r\n    _dom__WEBPACK_IMPORTED_MODULE_2__[\"default\"].resetPage();\r\n    _dom__WEBPACK_IMPORTED_MODULE_2__[\"default\"].loadPage();\r\n    shipLengths = [2, 3, 3, 4, 5];\r\n    playerShips = [];\r\n    direction = \"x\";\r\n    preGame();\r\n  });\r\n}\r\n\r\nfunction preGame() {\r\n  const modal = document.querySelector(\".place-ships-modal\");\r\n  const fakeModal = document.querySelector(\".place-ships-modal-fake\");\r\n  const playerBoard = modal.querySelector(\".board\");\r\n  const fakePlayerBoard = fakeModal.querySelector(\".board\");\r\n  let playerTiles = playerBoard.querySelectorAll(\".tile\");\r\n  let fakePlayerTiles = fakePlayerBoard.querySelectorAll(\".tile\");\r\n\r\n  const fakeRotate = document.getElementById(\"fake-rotate\");\r\n  fakeRotate.addEventListener(\"click\", () => {\r\n    if (direction === \"x\") {\r\n      direction = \"y\";\r\n    } else {\r\n      direction = \"x\";\r\n    }\r\n\r\n    _dom__WEBPACK_IMPORTED_MODULE_2__[\"default\"].removeEventListeners(playerTiles);\r\n    _dom__WEBPACK_IMPORTED_MODULE_2__[\"default\"].removeEventListeners(fakePlayerTiles);\r\n    playerTiles = playerBoard.querySelectorAll(\".tile\");\r\n    fakePlayerTiles = fakePlayerBoard.querySelectorAll(\".tile\");\r\n    fakePlayerTiles.forEach((tile, index) => {\r\n      if (playerTiles[index].classList.contains(\"ship\")) {\r\n        tile.className = \"tile fake-ship\";\r\n      }\r\n    });\r\n    fakePlayerTiles.forEach((tile, index) => {\r\n      tile.addEventListener(\"click\", () => {\r\n        if (!tile.classList.contains(\"miss\")) {\r\n          playerBoard.click();\r\n          playerTiles[index].click();\r\n          _dom__WEBPACK_IMPORTED_MODULE_2__[\"default\"].toggleFakeModal();\r\n        }\r\n      });\r\n    });\r\n    _dom__WEBPACK_IMPORTED_MODULE_2__[\"default\"].playerPlacesShip(\r\n      playerTiles,\r\n      shipLengths[0],\r\n      direction,\r\n      shipLengths,\r\n      playerShips\r\n    );\r\n    playerTiles.forEach((tile) => {\r\n      tile.addEventListener(\"click\", () => _dom__WEBPACK_IMPORTED_MODULE_2__[\"default\"].toggleFakeModal());\r\n    });\r\n    _dom__WEBPACK_IMPORTED_MODULE_2__[\"default\"].addInteractiveBoard(fakePlayerTiles, shipLengths[0], direction);\r\n  });\r\n\r\n  _dom__WEBPACK_IMPORTED_MODULE_2__[\"default\"].addInteractiveBoard(fakePlayerTiles, shipLengths[0], direction);\r\n  fakePlayerTiles.forEach((tile, index) => {\r\n    tile.addEventListener(\"click\", () => {\r\n      if (!tile.classList.contains(\"miss\")) {\r\n        playerBoard.click();\r\n        playerTiles[index].click();\r\n        _dom__WEBPACK_IMPORTED_MODULE_2__[\"default\"].toggleFakeModal();\r\n      }\r\n    });\r\n  });\r\n\r\n  playerBoard.addEventListener(\"click\", () => {\r\n    _dom__WEBPACK_IMPORTED_MODULE_2__[\"default\"].removeEventListeners(playerTiles);\r\n    _dom__WEBPACK_IMPORTED_MODULE_2__[\"default\"].removeEventListeners(fakePlayerTiles);\r\n    playerTiles = playerBoard.querySelectorAll(\".tile\");\r\n    fakePlayerTiles = fakePlayerBoard.querySelectorAll(\".tile\");\r\n    fakePlayerTiles.forEach((tile, index) => {\r\n      if (playerTiles[index].classList.contains(\"ship\")) {\r\n        tile.className = \"tile fake-ship\";\r\n      }\r\n    });\r\n    fakePlayerTiles.forEach((tile, index) => {\r\n      tile.addEventListener(\"click\", () => {\r\n        if (!tile.classList.contains(\"miss\")) {\r\n          playerBoard.click();\r\n          playerTiles[index].click();\r\n          _dom__WEBPACK_IMPORTED_MODULE_2__[\"default\"].toggleFakeModal();\r\n        }\r\n      });\r\n    });\r\n    _dom__WEBPACK_IMPORTED_MODULE_2__[\"default\"].playerPlacesShip(\r\n      playerTiles,\r\n      shipLengths[0],\r\n      direction,\r\n      shipLengths,\r\n      playerShips\r\n    );\r\n    playerTiles.forEach((tile) => {\r\n      tile.addEventListener(\"click\", () => _dom__WEBPACK_IMPORTED_MODULE_2__[\"default\"].toggleFakeModal());\r\n    });\r\n    _dom__WEBPACK_IMPORTED_MODULE_2__[\"default\"].addInteractiveBoard(fakePlayerTiles, shipLengths[0], direction);\r\n    if (shipLengths.length < 1) {\r\n      _dom__WEBPACK_IMPORTED_MODULE_2__[\"default\"].toggleFakeModal();\r\n      const rotate = document.getElementById(\"rotate\");\r\n      rotate.textContent = \"Start Game\";\r\n      rotate.addEventListener(\"click\", () => {\r\n        playGame();\r\n        _dom__WEBPACK_IMPORTED_MODULE_2__[\"default\"].updateBoard();\r\n        _dom__WEBPACK_IMPORTED_MODULE_2__[\"default\"].toggleModal();\r\n      });\r\n    }\r\n  });\r\n}\r\n\r\nfunction getAttack(player) {\r\n  const x = Number(player.board.mostRecentHit()[1]);\r\n  const y = Number(player.board.mostRecentHit()[3]);\r\n  return [x, y];\r\n}\r\n\r\nfunction addPlayerShips(player) {\r\n  playerShips.forEach((ship) => {\r\n    player.board.placeShip(new _ship__WEBPACK_IMPORTED_MODULE_1__[\"default\"](ship[0]), ship[1], ship[2]);\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack://battleship/./src/modules/game.js?");

/***/ }),

/***/ "./src/modules/gameboard.js":
/*!**********************************!*\
  !*** ./src/modules/gameboard.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Gameboard)\n/* harmony export */ });\nclass Gameboard {\r\n  constructor() {\r\n    this.board = [];\r\n    this.ships = [];\r\n    this.hits = new Set();\r\n  }\r\n\r\n  createBoard() {\r\n    for (let i = 0; i < 10; i++) {\r\n      const array = [];\r\n      for (let i = 0; i < 10; i++) {\r\n        array.push(0);\r\n      }\r\n      this.board.push(array);\r\n    }\r\n  }\r\n\r\n  placeShip(ship, position, direction) {\r\n    if (direction === \"x\") {\r\n      if (position[0] + ship.length > 10) {\r\n        throw new Error(\"Ship cannot be placed there\");\r\n      }\r\n\r\n      for (let i = 0; i < ship.length; i++) {\r\n        if (this.board[position[0] + i][position[1]] !== 0) {\r\n          throw new Error(\"Ship cannot be placed there\");\r\n        }\r\n        this.board[position[0] + i][position[1]] = ship;\r\n      }\r\n      this.ships.push(ship);\r\n    } else {\r\n      if (position[1] + ship.length > 10) {\r\n        throw new Error(\"Ship cannot be placed there\");\r\n      }\r\n\r\n      for (let i = 0; i < ship.length; i++) {\r\n        if (this.board[position[0]][position[1] + i] !== 0) {\r\n          throw new Error(\"Ship cannot be placed there\");\r\n        }\r\n\r\n        this.board[position[0]][position[1] + i] = ship;\r\n      }\r\n      this.ships.push(ship);\r\n    }\r\n  }\r\n\r\n  receiveAttack(position) {\r\n    if (\r\n      position[0] > 9 ||\r\n      position[0] < 0 ||\r\n      position[1] > 9 ||\r\n      position[1] < 0\r\n    ) {\r\n      throw new Error(\"Shot is out of bounds\");\r\n    }\r\n    if (this.board[position[0]][position[1]] === 0) {\r\n      this.board[position[0]][position[1]] = 1;\r\n      this.hits.add(`[${position[0]},${position[1]}]`);\r\n    } else if (this.board[position[0]][position[1]] !== 1) {\r\n      this.board[position[0]][position[1]].hit(position);\r\n      this.hits.add(`[${position[0]},${position[1]}]`);\r\n    } else {\r\n      throw new Error(\"This spot was already shot at!\");\r\n    }\r\n  }\r\n\r\n  allShipsSunk() {\r\n    let check = true;\r\n\r\n    this.ships.forEach((ship) => {\r\n      if (!ship.isSunk()) {\r\n        check = false;\r\n      }\r\n    });\r\n\r\n    return check;\r\n  }\r\n\r\n  mostRecentHit() {\r\n    return [...this.hits][this.hits.size - 1];\r\n  }\r\n\r\n  printBoard() {\r\n    let totalBoard = \"\";\r\n    for (let i = 0; i < 10; i++) {\r\n      for (let j = 0; j < 10; j++) {\r\n        let board = \"\";\r\n        if (typeof this.board[j][i] === \"object\") {\r\n          board += \"X \";\r\n        } else {\r\n          board += `${this.board[j][i]} `;\r\n        }\r\n        totalBoard += board;\r\n      }\r\n      totalBoard += \"\\n\";\r\n    }\r\n    console.log(totalBoard);\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://battleship/./src/modules/gameboard.js?");

/***/ }),

/***/ "./src/modules/player.js":
/*!*******************************!*\
  !*** ./src/modules/player.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Player)\n/* harmony export */ });\n/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ \"./src/modules/gameboard.js\");\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ship */ \"./src/modules/ship.js\");\n\r\n\r\n\r\nclass Player {\r\n  constructor(name) {\r\n    this.name = name;\r\n    this.board = new _gameboard__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\n    this.turn = false;\r\n  }\r\n\r\n  isTurn() {\r\n    return this.turn;\r\n  }\r\n\r\n  changeTurn() {\r\n    if (this.turn) {\r\n      this.turn = false;\r\n    } else {\r\n      this.turn = true;\r\n    }\r\n  }\r\n\r\n  incomingAttack(position) {\r\n    this.board.receiveAttack(position);\r\n  }\r\n\r\n  attackPlayer(player, position) {\r\n    player.board.receiveAttack(position);\r\n  }\r\n\r\n  randomAttack(player) {\r\n    let x = Math.floor(Math.random() * 10);\r\n    let y = Math.floor(Math.random() * 10);\r\n    try {\r\n      player.board.receiveAttack([x, y]);\r\n    } catch (e) {\r\n      this.randomAttack(player);\r\n    }\r\n  }\r\n\r\n  randomShip(length) {\r\n    let x = Math.floor(Math.random() * 10);\r\n    let y = Math.floor(Math.random() * 10);\r\n    let direction;\r\n\r\n    let odds = Math.floor(Math.random() * 10);\r\n    if (odds < 5) {\r\n      direction = \"x\";\r\n    } else {\r\n      direction = \"y\";\r\n    }\r\n\r\n    try {\r\n      this.board.placeShip(new _ship__WEBPACK_IMPORTED_MODULE_1__[\"default\"](length), [x, y], direction);\r\n    } catch (e) {\r\n      this.randomShip(length);\r\n    }\r\n  }\r\n\r\n  randomFleet() {\r\n    for (let i = 0; i < 2; i++) {\r\n      this.randomShip(3);\r\n    }\r\n\r\n    this.randomShip(2);\r\n    this.randomShip(4);\r\n    this.randomShip(5);\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://battleship/./src/modules/player.js?");

/***/ }),

/***/ "./src/modules/ship.js":
/*!*****************************!*\
  !*** ./src/modules/ship.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Ship)\n/* harmony export */ });\nclass Ship {\r\n  constructor(length) {\r\n    this.length = length;\r\n    this.hits = [];\r\n    this.sunk = false;\r\n  }\r\n\r\n  hit(position) {\r\n    if (!this.hits.includes(`${position}`)) {\r\n      this.hits.push(`${position}`);\r\n    } else {\r\n      throw new Error(\"Cannot attack that part of the ship\");\r\n    }\r\n\r\n    if (this.hits.length >= this.length) {\r\n      this.sunk = true;\r\n    }\r\n  }\r\n\r\n  isSunk() {\r\n    return this.sunk;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://battleship/./src/modules/ship.js?");

/***/ }),

/***/ "./src/img/background.jpg":
/*!********************************!*\
  !*** ./src/img/background.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"2ea5196487f8ce12f190.jpg\";\n\n//# sourceURL=webpack://battleship/./src/img/background.jpg?");

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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