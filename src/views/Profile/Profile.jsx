import { Redirect } from 'react-router-dom';
import { useUser } from '../../context/UserContext';
import { useProfile } from '../../hooks/useProfile';
import { getProfileById } from '../../services/profiles';
import CreateProfile from './CreateProfile';
import { useTasks } from '../../context/TaskContext';
import { createContext, useContext, useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';
import { getSelectedTasks } from '../../services/tasks';

export default function Profile() {
  const [selectedTasks, setSelectedTasks] = useState([]);
  const { user } = useUser();
  const { profile, loading } = useProfile();

  console.log('profile', profile);

  useEffect(() => {
    const fetchSelectedTasks = async () => {
      const data = await getSelectedTasks(user.id);
      console.log('data', data);
      setSelectedTasks(data);
    };
    fetchSelectedTasks();
  }, []);

  if (loading) return <p>loading...</p>;

  if (!loading && !profile.user_name) return <Redirect to="/profile/create" />;
  return (
    <div>
      <h2>Profile</h2>
      {profile.task_list}
      <ul className="profile-tasks">
        {selectedTasks.map((task) => {
          return (
            <li className="profile-tasks_item" key={uuid()}>
              <input type="checkbox" />
              <p>{task.task}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
