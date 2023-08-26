export default class UI {
  constructor() {
    this.textInput = document.querySelector('.form-input');
    this.formBtn = document.getElementById('submit-btn');
    this.deleteTask = document.querySelector('.vertical-dots');
    this.taskList = document.querySelector('.task-list');
    this.form = document.querySelector('.task-form');
    this.sync = document.querySelector('.sync');
  }

  clearInputs() {
    this.textInput.value = '';
  }
}
