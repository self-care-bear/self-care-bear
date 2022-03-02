import { Redirect } from 'react-router-dom';
import { useUser } from '../../context/UserContext';
import { useProfile } from '../../hooks/useProfile';
import { getProfileById } from '../../services/profiles';
import CreateProfile from './CreateProfile';
import { useTasks } from '../../context/TaskContext';
import { createContext, useContext, useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';
import {
  getSelectedTasks,
  getCompletedTasks,
  updateTask,
} from '../../services/tasks';

export default function Profile() {
  const [selectedTasks, setSelectedTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [isCompleted, setIsCompleted] = useState(false);
  const { user } = useUser();
  const { profile, loading } = useProfile();

  console.log('profile', profile);

  useEffect(() => {
    const fetchSelectedTasks = async () => {
      const data = await getSelectedTasks(user.id);
<<<<<<< HEAD
      console.log('data', data);
=======
      // console.log('data', data);
>>>>>>> 34bd54e80719affef32efa0829d92f6da4f46180
      setSelectedTasks(data);
    };
    fetchSelectedTasks();
  }, []);
<<<<<<< HEAD
=======

  useEffect(() => {
    const fetchCompletedTasks = async () => {
      const data = await getCompletedTasks(user.id);
      console.log('data', data);
      setCompletedTasks(data);
    };
    fetchCompletedTasks();
  }, []);

  const handleToggle = async (task) => {
    setIsCompleted(!isCompleted);
    await updateTask(
      task.id,
      task.task,
      task.task_description,
      user.id,
      true,
      !isCompleted
    );
  };
>>>>>>> 34bd54e80719affef32efa0829d92f6da4f46180

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
<<<<<<< HEAD
              <input type="checkbox" />
=======
              <input
                type="checkbox"
                checked={task.is_completed}
                onChange={() => handleToggle(task)}
              />
>>>>>>> 34bd54e80719affef32efa0829d92f6da4f46180
              <p>{task.task}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
