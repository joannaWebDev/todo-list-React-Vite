import { TaskState, TaskAction } from '../types';

//  Defines a reducer function taskReducer that takes the current state (TaskState) and an action (TaskAction) and returns a new state
//  It uses a switch statement to handle different action types ('TOGGLE_STATUS', 'EDIT_TEXT', and 'ADD_TASK'), updating the state accordingly
export const taskReducer = (state: TaskState, action: TaskAction): TaskState => {
  switch (action.type) {
    case 'TOGGLE_STATUS':
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id ? { ...task, status: task.status === 'pending' ? 'done' : 'pending' } : task
        ),
      };
    case 'EDIT_TEXT':
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id ? { ...task, text: action.payload.text } : task
        ),
      };
    case 'ADD_TASK':
      return {
        ...state,
        tasks: [...state.tasks, { id: state.tasks.length + 1, text: action.payload.text, status: 'pending' }],
      };
    default:
      return state;
  }
};