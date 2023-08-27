export default class Data {
  constructor() {
    this.tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  }

  removeTask(id) {
    this.tasks = this.tasks.filter((task) => task.index !== id);
    this.updateStorage();
  }

  updateStorage() {
    if (this.tasks) {
      for (let i = 0; i < this.tasks.length; i += 1) {
        this.tasks[i].index = i;
      }
      localStorage.setItem('tasks', JSON.stringify(this.tasks));
      return;
    }
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
