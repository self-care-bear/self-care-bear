import { createContext, useContext, useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';
// import { getUser } from '../services/auth';

export const TaskContext = createContext();

const TaskProvider = ({ children }) => {
  const [taskList, setTaskList] = useState([]);
  const [selectedTasks, setSelectedTasks] = useState([]);
  const value = { taskList, setTaskList, selectedTasks, setSelectedTasks };

  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
};

const useTasks = () => {
  const context = useContext(TaskContext);

  if (context === undefined) {
    throw new Error('To use useTasks you must wrap component in TaskProvider');
  }

  return context;
};

export { TaskProvider, useTasks };
