import { getCreatedTasks, getPresetTasks } from '../../services/tasks';
import { useEffect, useState } from 'react';
import { useUser } from '../../context/UserContext';
import { v4 as uuid } from 'uuid';

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
    <div>
      {taskList.map((task) => {
        return <p key={uuid()}>{task.task}</p>;
      })}
    </div>
  );
}
