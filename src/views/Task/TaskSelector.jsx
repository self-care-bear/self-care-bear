import { getCreatedTasks, getPresetTasks } from '../../services/tasks';
import { useEffect, useState } from 'react';
import { useUser } from '../../context/UserContext';

export default function TaskSelector() {
  const { user } = useUser();
  const [array1, setArray1] = useState([]);
  const [array2, setArray2] = useState([]);
  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    const fetchCreatedData = async () => {
      const createdData = await getCreatedTasks(user.id);
      console.log('createdData', createdData);
      setArray1(createdData);
      console.log('array1', array1);
    };
    const fetchPresetData = async () => {
      const presetData = await getPresetTasks();
      console.log('presetData', presetData);
      setArray2(presetData);
      console.log('array2', array2);
    };
    fetchCreatedData();
    fetchPresetData();
    setTaskList([...array1, ...array2]);
    console.log('taskList', taskList);
  }, [user]);

  // TUESDAY! fix this! get that taskList to work!
  // taskList gets returned if array1 & array 2 are dependencies
  // but it also gets stuck in an infinite loop?

  return (
    <div>
      <h1>Hello, {user.email}!</h1>
    </div>
  );
}
