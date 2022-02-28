import { useEffect } from 'react';
import { getProfile } from '../../services/profiles';
import { getPresetTasks } from '../../services/tasks';

export default function Profile() {
  useEffect(() => {
    const fetchData = async () => {
      const data = await getPresetTasks();
      console.log(data);
    };
    fetchData();
  }, []);

  return <div>Profile</div>;
}
