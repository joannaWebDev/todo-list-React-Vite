import React, { useState, useContext } from 'react';
import { TaskContext } from './TaskContext';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import CheckIcon from '@mui/icons-material/Check';
import TextField from '@mui/material/TextField';
import { Task as TaskType } from '../types';
import styles from './Task.module.css';

interface TaskProps {
  task: TaskType;
}

const Task: React.FC<TaskProps> = ({ task }) => {
  const { dispatch } = useContext(TaskContext)!;
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [editText, setEditText] = useState<string>(task.text);

  const handleToggleStatus = () => {
    dispatch({ type: 'TOGGLE_STATUS', payload: { id: task.id } });
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    dispatch({ type: 'EDIT_TEXT', payload: { id: task.id, text: editText } });
    setIsEditing(false);
  };

  return (
    <li className={styles.taskBox}>
      <input
        type="checkbox"
        checked={task.status === 'done'}
        onChange={handleToggleStatus}
      />
      {isEditing ? (
        <TextField
          variant="outlined"
          size="medium"
          fullWidth
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          onBlur={handleSave}
          autoFocus
          sx={{
            input: { color: 'white', backgroundColor: 'rgba(255, 255, 255, 0.1)' },
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: 'rgba(255, 255, 255, 0.3)',
              },
              '&:hover fieldset': {
                borderColor: 'white',
              },
              '&.Mui-focused fieldset': {
                borderColor: 'white',
              },
            },
          }}
        />
      ) : (
        <span style={{ textDecoration: task.status === 'done' ? 'line-through' : 'none', color: 'white' }}>
          {task.text}
        </span>
      )}
      {isEditing ? (
        <IconButton onClick={handleSave} aria-label="save" sx={{ color: 'white' }}>
          <CheckIcon />
        </IconButton>
      ) : (
        <IconButton onClick={handleEdit} aria-label="edit" sx={{ color: 'white' }} className={styles.editButton}>
          <EditIcon />
        </IconButton>
      )}
    </li>
  );
};

export default Task;