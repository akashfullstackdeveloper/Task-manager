// taskActions.js
import { ADD_TASK, TOGGLE_TASK, DELETE_TASK } from './taskActionTypes';

export const addTask = (title, description) => ({
  type: ADD_TASK,
  payload: { title, description },
});

export const toggleTask = (id) => ({
  type: TOGGLE_TASK,
  payload: { id },
});

export const deleteTask = (id) => ({
  type: DELETE_TASK,
  payload: { id },
});
