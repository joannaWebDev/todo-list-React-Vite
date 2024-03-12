import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Task from './Task';
import { TaskContext } from './TaskContext';
import {Task as TaskType} from "../types";

describe('Task Component', () => {
  const mockDispatch = vi.fn();
  const task:TaskType = { id: 1, text: 'Test Task', status: 'pending' };

  it('renders task text', () => {
    render(
      <TaskContext.Provider value={{ state: { tasks: [task] }, dispatch: mockDispatch }}>
        <Task task={task} />
      </TaskContext.Provider>
    );

    expect(screen.getByText('Test Task')).toBeInTheDocument();
  });

  it('enters editing mode on edit button click', () => {
    render(
      <TaskContext.Provider value={{ state: { tasks: [task] }, dispatch: mockDispatch }}>
        <Task task={task} />
      </TaskContext.Provider>
    );

    fireEvent.click(screen.getByLabelText('edit'));
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('toggles task status on checkbox change', () => {
    render(
      <TaskContext.Provider value={{ state: { tasks: [task] }, dispatch: mockDispatch }}>
        <Task task={task} />
      </TaskContext.Provider>
    );

    fireEvent.click(screen.getByRole('checkbox'));
    expect(mockDispatch).toHaveBeenCalledWith({
      type: 'TOGGLE_STATUS',
      payload: { id: task.id },
    });
  });
});