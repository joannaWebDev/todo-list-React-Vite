import { describe, it, expect, vi } from 'vitest';
import {render, fireEvent} from '@testing-library/react';
import AddTask from './AddTask';
import { TaskContext } from './TaskContext';
import { TaskState } from '../types';

describe('AddTask component', () => {
  it('renders without crashing', () => {
    const mockState: TaskState = {
      tasks: [],
    };

    const { container } = render(
      <TaskContext.Provider value={{ state: mockState, dispatch: vi.fn() }}>
        <AddTask />
      </TaskContext.Provider>
    );
    expect(container).toMatchSnapshot();
  });

  it('calls dispatch when the button is clicked', () => {
    const dispatchMock = vi.fn();
    const mockState: TaskState = {
      tasks: [],
    };

    const { getByTestId, getByText } = render(
      <TaskContext.Provider value={{ state: mockState, dispatch: dispatchMock }}>
        <AddTask />
      </TaskContext.Provider>
    );

    const input = getByTestId('add-task-input');
    const button = getByText('Add Task');

    fireEvent.change(input, { target: { value: 'New Task' } });
    fireEvent.click(button);

    expect(dispatchMock).toHaveBeenCalledWith({ type: 'ADD_TASK', payload: 'New Task' });
  });
});