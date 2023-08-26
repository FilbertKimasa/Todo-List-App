import UI from './ui.js';

export default class Task {
  constructor() {
    this.ui = new UI();
    this.ui.textInput.focus();
    this.renderTasks();
  }

  renderTasks() {
    this.ui.taskList.innerHTML = this.data.tasks
      .map(
        (task) => `
          <li class="task">
            <input type="checkbox" name="" id="0" value="pp" />
            <label for="0" class="task-description">${task.description}</label
            ><button type="button" class="vertical-dots">&#8942;</button>
          </li>
        `
      )
      .join('');
  }
}
