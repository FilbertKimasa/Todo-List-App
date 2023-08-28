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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Data)\n/* harmony export */ });\nclass Data {\n  constructor() {\n    this.tasks = JSON.parse(localStorage.getItem('tasks')) || [];\n  }\n\n  removeTask(id) {\n    this.tasks = this.tasks.filter((task) => task.index !== id);\n    this.updateStorage();\n  }\n\n  removeCompletedTasks(status) {\n    this.tasks = this.tasks.filter((task) => task.completed !== status);\n    this.updateStorage();\n  }\n\n  updateStorage() {\n    if (this.tasks) {\n      for (let i = 0; i < this.tasks.length; i += 1) {\n        this.tasks[i].index = i;\n      }\n      localStorage.setItem('tasks', JSON.stringify(this.tasks));\n      return;\n    }\n    localStorage.setItem('tasks', JSON.stringify(this.tasks));\n  }\n\n  updateTaskStatus(id, eventState) {\n    this.tasks[id].completed = eventState;\n    localStorage.setItem('tasks', JSON.stringify(this.tasks));\n  }\n}\n\n\n//# sourceURL=webpack://webpack-start/./src/data.js?");

/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Task)\n/* harmony export */ });\n/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data.js */ \"./src/data.js\");\n/* harmony import */ var _ui_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui.js */ \"./src/ui.js\");\n\n\n\nclass Task {\n  constructor() {\n    this.ui = new _ui_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n    this.data = new _data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n    this.ui.formBtn.addEventListener('click', this.addTask.bind(this));\n    this.ui.clearCompleted.addEventListener(\n      'click',\n      this.clearCompleted.bind(this)\n    );\n    this.ui.textInput.focus();\n    this.renderTasks();\n  }\n\n  addTask() {\n    this.ui.form.addEventListener('submit', (e) => {\n      e.preventDefault();\n    });\n    const description = this.ui.textInput.value.trim();\n    const index = this.data.tasks.length;\n    const completed = false;\n\n    if (description.length > 0) {\n      const task = { index, description, completed };\n      const same = this.data.tasks.some(\n        (tsk) => JSON.stringify(tsk) === JSON.stringify(task)\n      );\n      if (!same) {\n        this.data.tasks.push(task);\n        this.data.updateStorage();\n        this.ui.clearInputs();\n        this.renderTasks();\n      }\n    }\n  }\n\n  renderTasks() {\n    this.ui.taskList.innerHTML = this.data.tasks\n      .map(\n        (task) => `\n          <li class=\"task\" id=\"${task.index}\">\n            <input type=\"checkbox\" name=\"\" ${\n              task.completed ? 'checked' : ''\n            } class=\"task-state\" />\n            <label for=\"0\" class=\"task-description\">${task.description}</label\n            ><button type=\"button\" class=\"vertical-dots\"><span class=\"three-dots\">&#8942;</span><i class=\"material-icons delete-icon\">delete</i></button>\n          </li>\n        `\n      )\n      .join('');\n\n    const removeBtns = document.querySelectorAll('.vertical-dots');\n    const taskState = document.querySelectorAll('.task-state');\n    removeBtns.forEach((btn) => {\n      btn.addEventListener('click', (e) => {\n        const card = e.target.closest('.task');\n        let { id } = card;\n        id = parseInt(id, 10);\n        this.data.removeTask(id);\n        this.renderTasks();\n      });\n    });\n\n    taskState.forEach((check) => {\n      check.addEventListener('click', (e) => {\n        const card = e.target.closest('.task');\n        let { id } = card;\n        id = parseInt(id, 10);\n        const eventState = card.querySelector('.task-state').checked;\n        this.data.updateTaskStatus(id, eventState);\n        this.renderTasks();\n      });\n    });\n  }\n\n  clearCompleted() {\n    const tasksList = document.querySelectorAll('.task-state');\n    tasksList.forEach((task) => {\n      if (task.checked) {\n        this.data.removeCompletedTasks(task.checked);\n      }\n    });\n    this.renderTasks();\n  }\n}\n\n\n//# sourceURL=webpack://webpack-start/./src/task.js?");

/***/ }),

/***/ "./src/ui.js":
/*!*******************!*\
  !*** ./src/ui.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ UI)\n/* harmony export */ });\nclass UI {\n  constructor() {\n    this.textInput = document.querySelector('.form-input');\n    this.formBtn = document.getElementById('submit-btn');\n    this.deleteTask = document.querySelector('.vertical-dots');\n    this.taskList = document.querySelector('.task-list');\n    this.form = document.querySelector('.task-form');\n    this.sync = document.querySelector('.sync');\n    this.clearCompleted = document.querySelector('.todo-footer');\n\n    this.sync.addEventListener('click', this.syncPage.bind(this));\n  }\n\n  clearInputs() {\n    this.textInput.value = '';\n  }\n\n  syncPage() {\n    window.location.reload();\n    this.textInput.focus();\n  }\n}\n\n\n//# sourceURL=webpack://webpack-start/./src/ui.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/task.js"));
/******/ }
]);