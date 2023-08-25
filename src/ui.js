import Data from './data';

export default class UI {
  constructor() {
    this.textInputTwo = document.createElement('input');
    this.textInput = document.querySelector('.form-input');
    this.formBtn = document.getElementById('submit-btn');
    this.delete = document.querySelector('.vertical-dots');
    this.taskList = document.querySelector('.task-list');
    // this.checkBox = document.getElementById(`${task.checked}`);
  }

  clearInputs() {
    this.bookTitle.value = '';
    this.bookAuthor.value = '';
  }
}
