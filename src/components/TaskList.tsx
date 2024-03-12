import React, { useContext } from 'react';
import { TaskContext } from './TaskContext';
import Task from './Task';
import { Task as TaskType } from '../types';

const TaskList: React.FC = () => {
  const context = useContext(TaskContext);

  if (!context) {
    return <p>Unable to load tasks.</p>;
  }

  const { state } = context;

  if (state.tasks.length === 0) {
    return <p>No tasks available. Add a new task to get started!</p>;
  }

  return (
    <ul>
      {state.tasks.map((task: TaskType) => (
        <Task key={task.id} task={task} />
      ))}
    </ul>
  );
};

export default TaskList;