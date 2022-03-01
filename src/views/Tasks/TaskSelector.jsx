import { getCreatedTasks, getPresetTasks } from '../../services/tasks';
import { useEffect, useState } from 'react';
import { useUser } from '../../context/UserContext';
import TaskCard from '../../components/TaskCard/TaskCard';
import { v4 as uuid } from 'uuid';
import './Tasks.css';

export default function TaskSelector() {
  const { user } = useUser();
  const [loading, setLoading] = useState(true);
  const [taskList, setTaskList] = useState([]);

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

  if (loading) return <span>Loading...</span>;

  return (
    <div className="card-container">
      {taskList.map((task) => {
        return <TaskCard key={uuid()} task={task} />;
      })}
    </div>
  );
}
