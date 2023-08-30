import Data from './data.js';
import UI from './ui.js';

export default class Task {
  constructor() {
    this.ui = new UI();
    this.data = new Data();
    this.ui.formBtn.addEventListener('click', this.addTask.bind(this));
    this.ui.clearCompleted.addEventListener(
      'click',
      this.clearCompleted.bind(this)
    );
    this.ui.textInput.focus();
    this.renderTasks();
  }

  addTask() {
    this.ui.form.addEventListener('submit', (e) => {
      e.preventDefault();
    });
    const description = this.ui.textInput.value.trim();
    const index = this.data.tasks.length + 1;
    const completed = false;

    if (description.length > 0) {
      const task = { index, description, completed };
      this.data.tasks.push(task);
      this.data.updateStorage();
      this.ui.clearInputs();
      this.renderTasks();
    }
  }

  renderTasks() {
    this.ui.taskList.innerHTML = this.data.tasks
      .map(
        (task) => `
          <li class="task" id="${task.index}">
            <input type="checkbox" name="" ${
              task.completed ? 'checked' : ''
            } class="task-state" />
            <input type="text" class="task-description" readonly value="${
              task.description
            }"
            /><button type="button" class="save-btn hide">save</button><div class="vertical-dots"><span class="three-dots">&#8942;</span>
            <div class="edit-label-wrapper">
      <button type="button" class="btn-edit">
        <i class="material-icons edit-task">edit</i>
      </button>
      <button type="button" class="btn-delete">
        <i class="material-icons delete-task delete-icon">delete</i>
      </button>
    </div>
            </div>
          </li>
        `
      )
      .join('');

    const taskState = document.querySelectorAll('.task-state');
    const btnDelete = document.querySelectorAll('.btn-delete');
    const btnEdit = document.querySelectorAll('.btn-edit');
    const btnSave = document.querySelectorAll('.save-btn');
    btnDelete.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        const card = e.target.closest('.task');
        let { id } = card;
        id = parseInt(id, 10);
        this.data.removeTask(id);
        this.renderTasks();
      });
    });

    btnEdit.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        const card = e.target.closest('.task');
        const textInput = card.querySelector('.task-description');
        const saveBtn = card.querySelector('.save-btn');
        textInput.removeAttribute('readonly');
        textInput.focus();
        const temp = textInput.value;
        textInput.value = '';
        textInput.value = temp;
        saveBtn.classList.remove('hide');
      });
    });

    btnSave.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        const card = e.target.closest('.task');
        const newDescription = card.querySelector('.task-description').value;
        let { id } = card;
        id = parseInt(id, 10);
        this.data.editTask(id, newDescription);
        this.renderTasks();
      });
    });

    taskState.forEach((check) => {
      check.addEventListener('change', (e) => {
        const card = e.target.closest('.task');
        let { id } = card;
        id = parseInt(id, 10);
        const eventState = card.querySelector('.task-state').checked;
        this.data.updateTaskStatus(id, eventState);
        this.renderTasks();
      });
    });
  }

  clearCompleted() {
    const tasksList = document.querySelectorAll('.task-state');
    tasksList.forEach((task) => {
      if (task.checked) {
        this.data.removeCompletedTasks(task.checked);
      }
    });
    this.renderTasks();
  }
}
