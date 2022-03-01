import {
  getCreatedTasks,
  getPresetTasks,
  createTask,
} from '../../services/tasks';
import { useEffect, useState } from 'react';
import { useUser } from '../../context/UserContext';
import TaskCard from '../../components/TaskCard/TaskCard';
import { v4 as uuid } from 'uuid';
import './Tasks.css';

export default function TaskSelector() {
  const { user } = useUser();
  const [loading, setLoading] = useState(true);
  const [taskList, setTaskList] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [newTaskDesc, setNewTaskDesc] = useState('');

  useEffect(() => {
    const fetchCreatedData = async () => {
      const createdData = await getCreatedTasks(user.id);
      setTaskList((prevState) => [...prevState, ...createdData]);
    };
    const fetchPresetData = async () => {
      const presetData = await getPresetTasks();
      setTaskList((prevState) => [...prevState, ...presetData]);
      setLoading(false);
    };
    fetchCreatedData();
    fetchPresetData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    createTask(newTask, newTaskDesc);
  };

  if (loading) return <span>Loading...</span>;

  return (
    <div className="card-container">
      {taskList.map((task) => {
        return <TaskCard key={uuid()} task={task} />;
      })}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newTask}
          placeholder="task"
          onChange={(e) => setNewTask(e.target.value)}
        />
        <input
          type="text"
          value={newTaskDesc}
          onChange={(e) => setNewTaskDesc(e.target.value)}
          placeholder="description"
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
}
