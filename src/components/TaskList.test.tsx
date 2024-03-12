import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { TaskContext } from './TaskContext';
import TaskList from './TaskList';
import {TaskState} from "../types";

const mockState: TaskState = {
  tasks: [
    { id: 1, text: 'Test Task 1', status: 'pending' },
    { id: 2, text: 'Test Task 2', status: 'done' },
  ],
};

describe('TaskList', () => {
  it('displays a message when there are no tasks', () => {
    const emptyState = { tasks: [] };
    render(
      <TaskContext.Provider value={{ state: emptyState, dispatch: vi.fn() }}>
        <TaskList />
      </TaskContext.Provider>
    );

    expect(screen.getByText(/no tasks available/i)).toBeInTheDocument();
  });

  it('displays tasks when there are one or more tasks', () => {
    render(
      <TaskContext.Provider value={{ state: mockState, dispatch: vi.fn() }}>
        <TaskList />
      </TaskContext.Provider>
    );

    expect(screen.getByText(/test task 1/i)).toBeInTheDocument();
    expect(screen.getByText(/test task 2/i)).toBeInTheDocument();
  });
});

