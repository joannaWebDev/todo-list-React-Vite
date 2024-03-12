import {TaskState} from "../types";

export const tasks: TaskState = {
  tasks: [
    { id: 1, text: 'It should show a list of tasks', status: 'pending' },
    { id: 2, text: 'Each task in the list should display a text', status: 'pending' },
    { id: 3, text: 'User should be able to toggle the status of each task', status: 'pending' },
    { id: 4, text: 'User should be able to edit the text of each task', status: 'pending' },
    { id: 5, text: 'Redux or React Contexts for state management', status: 'pending' },
    { id: 6, text: 'CSS Modules for styling components', status: 'pending'},
    { id: 7, text: 'Implement Material UI', status: 'pending' },
    { id: 8, text: 'Use Vitest for testing', status: 'pending' },
  ],
};