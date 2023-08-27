export default class UI {
  constructor() {
    this.textInput = document.querySelector('.form-input');
    this.formBtn = document.getElementById('submit-btn');
    this.deleteTask = document.querySelector('.vertical-dots');
    this.taskList = document.querySelector('.task-list');
    this.form = document.querySelector('.task-form');
    this.sync = document.querySelector('.sync');

    this.sync.addEventListener('click', this.syncPage.bind(this));
  }

  clearInputs() {
    this.textInput.value = '';
  }

  syncPage() {
    window.location.reload();
    this.textInput.focus();
  }
}
