import _ from 'lodash';
import Task from './task.js';
// import printMe from './print.js';
import './style.css';

const task = new Task();

window.addEventListener('load', task.init);
// document.addEventListener('load', () => {
//   alert('');
// });
// const textInput = document.querySelector('.form-input');
// const formBtn = document.getElementById('submit-btn');
// const deleteBtn = document.querySelector('.vertical-dots');
// const taskList = document.querySelector('.task-list');
// console.log(ui.formBtn);
// document.body.appendChild(component());
