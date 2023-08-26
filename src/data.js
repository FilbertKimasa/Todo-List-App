export default class Data {
  constructor() {
    this.tasks = [
      {
        description: 'An example description one',
        completed: false,
        index: 1,
      },
      {
        description: 'An example description two',
        completed: false,
        index: 2,
      },
    ];
  }

  removeTask(taskName) {
    this.tasks = this.tasks.filter((task) => task.description !== taskName);
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
