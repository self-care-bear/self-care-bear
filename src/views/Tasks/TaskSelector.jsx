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
    setTaskList((prevState) => [
      ...prevState,
      { task: newTask, task_description: newTaskDesc },
    ]);
  };

  if (loading) return <span>Loading...</span>;

  return (
    <div className="task-selector">
      <form className="task-selector_form" onSubmit={handleSubmit}>
        <label htmlFor="newTask">Task:</label>
        <input
          type="text"
          id="newTask"
          name="newTask"
          value={newTask}
          placeholder="task"
          onChange={(e) => setNewTask(e.target.value)}
        />
        <label htmlFor="newTaskDesc">Task Description:</label>
        <input
          type="text"
          id="newTaskDesc"
          name="newTaskDesc"
          value={newTaskDesc}
          onChange={(e) => setNewTaskDesc(e.target.value)}
          placeholder="description"
        />
        <button type="submit">submit</button>
      </form>
      <div className="card-container">
        {taskList.map((task) => {
          return (
            <TaskCard key={uuid()} task={task} setTaskList={setTaskList} />
          );
        })}
      </div>
    </div>
  );
}
