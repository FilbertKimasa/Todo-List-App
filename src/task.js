import Data from './data.js';
import UI from './ui.js';

export default class Task {
  constructor(index, description, completed) {
    this.index = index;
    this.description = description;
    this.completed = completed;
  }

  init() {
    this.ui = new UI();
    // this.data = new Data();
    // this.ui.formBtn.addEventListener('click', this.addTask.bind(this));
    // if (this.data.task) {
    // this.renderTasks();
    this.addTask();
    console.log(this.ui.formBtn);
    // }
    console.log('hgyffy');
    // this.ui.formBtn.addEventListener('click');
  }

  addTask() {
    alert('');

    const description = this.ui.textInput.trim();
    const completed = this.ui.checkBox.checked;
    const index = ui.tasks.length;

    if (description.length > 0) {
      const task = { index, description, completed };
      const same = this.data.tasks.some(
        (tsk) => JSON.stringify(tsk) === JSON.stringify(task)
      );
      if (!same) {
        this.data.tasks.push(task);
        this.data.updateStorage();
        this.ui.clearInputs();
        this.renderBooks();
      }
    }
    // window.stop();
  }

  renderTasks() {
    this.ui.taskList.innerHTML = this.data.tasks
      .map(
        (book) => `
          <li class="task">
            <input type="checkbox" name="" id="0" value="pp" />
            <label for="0">${task.description}</label
            ><button type="button" class="vertical-dots">&#8942;</button>
          </li>
        `
      )
      .join('');

    // const removeBtns = document.querySelectorAll('.vertical-dots');

    // removeBtns.forEach((btn) => {
    //   btn.addEventListener('click', (e) => {
    //     const card = e.target.closest('.task');
    //     const taskName = card.querySelector('.book-title').innerText;
    //     this.data(title, author);
    //     this.renderTasks();
    //   });
    // });
  }
}
