import { describe, it, expect } from 'vitest';
import { TaskState, TaskAction } from '../types';
import {taskReducer} from "./taskReducer";

describe('taskReducer', () => {
  it('toggles task status correctly', () => {
    const initialState: TaskState = { tasks: [{ id: 1, text: 'Test Task', status: 'pending' }] };
    const action: TaskAction = { type: 'TOGGLE_STATUS', payload: { id: 1 } };
    const newState = taskReducer(initialState, action);

    expect(newState.tasks[0].status).toBe('done');
  });

  it('edits a task correctly', () => {
    const initialState: TaskState = { tasks: [{ id: 1, text: 'Test Task', status: 'pending' }] };
    const action: TaskAction = { type: 'EDIT_TEXT', payload: { id: 1, text: 'Edited Task' } };
    const newState = taskReducer(initialState, action);

    expect(newState.tasks[0].text).toBe('Edited Task');
  });

  it('adds a new task correctly', () => {
    const initialState: TaskState = { tasks: [] };
    const action: TaskAction = { type: 'ADD_TASK', payload: { text: 'New Task' } };
    const newState = taskReducer(initialState, action);

    expect(newState.tasks.length).toBe(1);
    expect(newState.tasks[0].text).toBe('New Task');
    expect(newState.tasks[0].status).toBe('pending');
  });
});