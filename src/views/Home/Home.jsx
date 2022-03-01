import { getCreatedTasks } from '../../services/tasks';
import { useEffect } from 'react';
import { useUser } from '../../context/UserContext';

export default function Home() {
  const { user } = useUser();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCreatedTasks(user.id);
      console.log(data);
    };
    fetchData();
  }, [user]);
  return (
    <div>
      <h1>Hello, {user.email}!</h1>
    </div>
  );
}
