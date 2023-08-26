// eslint-disable-next-line no-unused-vars
import _ from 'lodash';
import Task from './task.js';
import './style.css';

const task = new Task();

window.addEventListener('load', task.renderTasks);
