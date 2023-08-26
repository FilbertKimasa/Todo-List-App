"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkwebpack_start"] = self["webpackChunkwebpack_start"] || []).push([["ui"],{

/***/ "./src/ui.js":
/*!*******************!*\
  !*** ./src/ui.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ UI)\n/* harmony export */ });\nclass UI {\n  constructor() {\n    this.textInput = document.querySelector('.form-input');\n    this.formBtn = document.getElementById('submit-btn');\n    this.deleteTask = document.querySelector('.vertical-dots');\n    this.taskList = document.querySelector('.task-list');\n    this.form = document.querySelector('.task-form');\n    this.sync = document.querySelector('.sync');\n  }\n\n  clearInputs() {\n    this.textInput.value = '';\n  }\n}\n\n\n//# sourceURL=webpack://webpack-start/./src/ui.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/ui.js"));
/******/ }
]);