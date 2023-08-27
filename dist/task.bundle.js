"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkwebpack_start"] = self["webpackChunkwebpack_start"] || []).push([["task"],{

/***/ "./src/data.js":
/*!*********************!*\
  !*** ./src/data.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Data)\n/* harmony export */ });\nclass Data {\n  constructor() {\n    this.tasks = [\n      {\n        description: 'An example description one',\n        completed: false,\n        index: 1,\n      },\n      {\n        description: 'An example description two',\n        completed: false,\n        index: 2,\n      },\n    ];\n  }\n}\n\n\n//# sourceURL=webpack://webpack-start/./src/data.js?");

/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Task)\n/* harmony export */ });\n/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data.js */ \"./src/data.js\");\n/* harmony import */ var _ui_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui.js */ \"./src/ui.js\");\n\n\n\nclass Task {\n  constructor() {\n    this.ui = new _ui_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n    this.data = new _data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n    this.ui.textInput.focus();\n    this.renderTasks();\n  }\n\n  renderTasks() {\n    this.ui.taskList.innerHTML = this.data.tasks\n      .map(\n        (task) => `\n          <li class=\"task\">\n            <input type=\"checkbox\" name=\"\" id=\"0\" value=\"pp\" />\n            <label for=\"0\" class=\"task-description\">${task.description}</label\n            ><button type=\"button\" class=\"vertical-dots\">&#8942;</button>\n          </li>\n        `,\n      )\n      .join('');\n  }\n}\n\n\n//# sourceURL=webpack://webpack-start/./src/task.js?");

/***/ }),

/***/ "./src/ui.js":
/*!*******************!*\
  !*** ./src/ui.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ UI)\n/* harmony export */ });\nclass UI {\n  constructor() {\n    this.textInput = document.querySelector('.form-input');\n    this.formBtn = document.getElementById('submit-btn');\n    this.deleteTask = document.querySelector('.vertical-dots');\n    this.taskList = document.querySelector('.task-list');\n    this.form = document.querySelector('.task-form');\n    this.sync = document.querySelector('.sync');\n  }\n}\n\n\n//# sourceURL=webpack://webpack-start/./src/ui.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/task.js"));
/******/ }
]);