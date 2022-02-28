import { useEffect } from 'react';
// import { getProfile } from '../../services/profiles';
import { getPresetTasks } from '../../services/tasks';

export default function Profile() {
  useEffect(() => {
    const fetchData = async () => {
      const data = await getPresetTasks();
    };
    fetchData();
  }, []);

  return <div>Profile</div>;
}
