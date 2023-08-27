"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkwebpack_start"] = self["webpackChunkwebpack_start"] || []).push([["data"],{

/***/ "./src/data.js":
/*!*********************!*\
  !*** ./src/data.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Data)\n/* harmony export */ });\nclass Data {\n  constructor() {\n    this.tasks = JSON.parse(localStorage.getItem('tasks')) || [];\n  }\n\n  removeTask(id) {\n    this.tasks = this.tasks.filter((task) => task.index !== id);\n    this.updateStorage();\n  }\n\n  updateStorage() {\n    if (this.tasks) {\n      for (let i = 0; i < this.tasks.length; i += 1) {\n        this.tasks[i].index = i;\n      }\n      localStorage.setItem('tasks', JSON.stringify(this.tasks));\n      return;\n    }\n    localStorage.setItem('tasks', JSON.stringify(this.tasks));\n  }\n}\n\n\n//# sourceURL=webpack://webpack-start/./src/data.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/data.js"));
/******/ }
]);