import { createContext, useContext, useEffect, useState } from 'react';
import { getCreatedTasks } from '../services/tasks';
import { useUser } from './UserContext';

export const TaskContext = createContext();

const TaskProvider = ({ children }) => {
  const [taskList, setTaskList] = useState([]);
  const [selectedTasks, setSelectedTasks] = useState([]);
  const value = { taskList, setTaskList, selectedTasks, setSelectedTasks };
  const { user } = useUser();

  useEffect(() => {
    const fetchCreatedData = async () => {
      const createdData = await getCreatedTasks(user.id);
      setTaskList((prevState) => [...prevState, ...createdData]);
    };
    fetchCreatedData();
  }, []);

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
