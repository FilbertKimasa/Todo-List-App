import Task from '../task.js';
// const Task = require('../task.js');
// import Task from './task.js';

// Mock data, UI
const mockData = {
  tasks: [],
  updateStorage: jest.fn(),
};

const mockUI = {
  form: document.createElement('form'),
  textInput: document.createElement('input'),
  clearInputs: jest.fn(),
};

const task = new Task(mockData, mockUI);

describe('addTask', () => {
  beforeEach(() => {
    // Clear any previous task data and reset mock function states
    mockData.tasks = [];
    mockData.updateStorage.mockClear();
    mockUI.clearInputs.mockClear();
  });

  test('adds a task when description is not empty', () => {
    // Arrange
    mockUI.textInput.value = 'Test task description';

    // Act
    task.addTask();

    // Assert
    expect(mockData.tasks.length).toBe(1);
    expect(mockData.tasks[0].description).toBe('Test task description');
    expect(mockData.updateStorage).toHaveBeenCalledTimes(1);
    expect(mockUI.clearInputs).toHaveBeenCalledTimes(1);
    // You can add more assertions as needed
  });

  test('does not add a task when description is empty', () => {
    // Arrange
    mockUI.textInput.value = '';

    // Act
    task.addTask();

    // Assert
    expect(mockData.tasks.length).toBe(0);
    expect(mockData.updateStorage).toHaveBeenCalledTimes(0);
    expect(mockUI.clearInputs).toHaveBeenCalledTimes(0);
  });
});
