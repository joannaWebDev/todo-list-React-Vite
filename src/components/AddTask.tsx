import React, { useState, useContext } from 'react';
import { TaskContext } from './TaskContext';
import styles from './AddTask.module.css';

const AddTask: React.FC = () => {
  const { dispatch } = useContext(TaskContext)!;
  const [newTaskText, setNewTaskText] = useState('');

  const handleAddTask = () => {
    if (newTaskText.trim() !== '') {
      dispatch({ type: 'ADD_TASK', payload: { text: newTaskText } });
      setNewTaskText('');
    }
  };

  return (
    <div className={styles.addTaskContainer}>
      <input
        type="text"
        value={newTaskText}
        onChange={(e) => setNewTaskText(e.target.value)}
        className={styles.inputText}
        data-testid="add-task-input"
      />
      <button onClick={handleAddTask}>
        Add Task
      </button>
    </div>
  );
};

export default AddTask;
