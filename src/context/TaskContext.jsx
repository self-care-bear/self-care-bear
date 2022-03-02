import { createContext, useContext, useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';
// import { getUser } from '../services/auth';

export const TaskContext = createContext();

const initialTasks = [
  {
    task_id: uuid(),
    task: 'Stretch',
    task_description: 'Do a yoga practice!',
  },
  {
    task_id: uuid(),
    task: 'Eat a vegebil',
    task_description: 'Eat a carrot!',
  },
  {
    task_id: uuid(),
    task: 'Pet your cat',
    task_description: 'And kiss it, too!',
  },
];

const TaskProvider = ({ children }) => {
  const [taskList, setTaskList] = useState(initialTasks);
  const [selectedTasks, setSelectedTasks] = useState([]);

  //   useEffect(() => {
  //     console.log('taskList', taskList);
  //   });

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
