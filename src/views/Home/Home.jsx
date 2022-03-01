import { getCreatedTasks } from '../../services/tasks';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    const fetchData = async () => {
      const data = await getCreatedTasks();
      console.log(data);
    };
    fetchData();
  }, []);
  return <div></div>;
}
