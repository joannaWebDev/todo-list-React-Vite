/*
* This file defines a context for managing the state of tasks in a React application using the Context API and the useReducer hook.
* It's structured to provide a global state that can be accessed and modified from different components in the application.
* */
import React, { createContext, useReducer, ReactNode } from 'react';
import {tasks} from "../data/tasks";
import {TaskAction, TaskState} from "../types";
import {taskReducer} from "./taskReducer";

interface TaskContextProps {
  state: TaskState;
  dispatch: React.Dispatch<TaskAction>;
}
// Creates a new context named TaskContext with the possibility of being TaskContextProps or undefined
// Initially, it's undefined because no value is provided yet
export const TaskContext = createContext<TaskContextProps | undefined>(undefined);

//  Defines a TaskProvider component that wraps its children with the TaskContext.Provider.
//  This component uses the useReducer hook to manage the tasks' state with the taskReducer function and the initial tasks state.
// - The useReducer hook returns the current state and a dispatch function used to update the state.
// These are provided to the context, making them accessible to any component in the tree that uses the TaskContext.
// - The TaskProvider should be used to wrap the root component or any part of your app where you want the tasks' state to be accessible.

export const TaskProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(taskReducer, tasks);

  return <TaskContext.Provider value={{ state, dispatch }}>{children}</TaskContext.Provider>;
};
