import Data from './data.js';
import UI from './ui.js';

export default class Task {
  constructor() {
    this.ui = new UI();
    this.data = new Data();
    this.ui.formBtn.addEventListener('click', this.addTask.bind(this));
    this.ui.textInput.focus();
    this.renderTasks();
  }

  addTask() {
    this.ui.form.addEventListener('submit', (e) => {
      e.preventDefault();
    });
    const description = this.ui.textInput.value.trim();
    const index = this.data.tasks.length;
    const completed = false;

    if (description.length > 0) {
      const task = { index, description, completed };
      const same = this.data.tasks.some(
        (tsk) => JSON.stringify(tsk) === JSON.stringify(task)
      );
      if (!same) {
        this.data.tasks.push(task);
        this.data.updateStorage();
        this.ui.clearInputs();
        this.renderTasks();
      }
    }
  }

  renderTasks() {
    this.ui.taskList.innerHTML = this.data.tasks
      .map(
        (task) => `
          <li class="task" id="${task.index}">
            <input type="checkbox" name="" value="pp" />
            <label for="0" class="task-description">${task.description}</label
            ><button type="button" class="vertical-dots">&#8942;</button>
          </li>
        `
      )
      .join('');

    const removeBtns = document.querySelectorAll('.vertical-dots');
    removeBtns.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        const card = e.target.closest('.task');
        // const taskName = card.querySelector('.task-description').innerText;
        let { id } = card;

        id = parseInt(id, 10);
        this.data.removeTask(id);
        // console.log(id);
        this.renderTasks(id);
      });
    });
  }
}
