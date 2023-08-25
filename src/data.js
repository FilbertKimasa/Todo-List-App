export default class Data {
  constructor() {
    this.tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  }

  removeTask(task) {
    this.books = this.books.filter((task) => task.name !== title);
    this.updateStorage();
  }

  updateStorage() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
