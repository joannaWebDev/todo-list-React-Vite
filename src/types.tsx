export interface Task {
  id: number;
  text: string;
  status: 'pending' | 'done';
}

export interface TaskState {
  tasks: Task[];
}

interface ToggleStatusPayload {
  id: number;
}

interface EditTextPayload {
  id: number;
  text: string;
}

interface AddTaskPayload {
  text: string;
}

export type TaskAction =
  | { type: 'TOGGLE_STATUS'; payload: ToggleStatusPayload }
  | { type: 'EDIT_TEXT'; payload: EditTextPayload }
  | { type: 'ADD_TASK'; payload: AddTaskPayload };

