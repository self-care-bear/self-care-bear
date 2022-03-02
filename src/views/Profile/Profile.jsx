import { Redirect } from 'react-router-dom';
import { useUser } from '../../context/UserContext';
import { useProfile } from '../../hooks/useProfile';
import { getProfileById } from '../../services/profiles';
import CreateProfile from './CreateProfile';
import { useTasks } from '../../context/TaskContext';
import { createContext, useContext, useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';

export default function Profile() {
  const { user } = useUser();
  const { profile, loading } = useProfile();
  const dummyTasks = [
    {
      task_id: uuid(),
      task: 'Stretch',
      task_description: 'Do a yoga practice!',
    },
    {
      task_id: uuid(),
      task: 'Eat a vegebil',
      task_description: 'Eat a carrot!',
    },
    {
      task_id: uuid(),
      task: 'Pet your cat',
      task_description: 'And kiss it, too!',
    },
    {
      task_id: uuid(),
      task: 'Go outside',
      task_description: 'Get some vitamin D!',
    },
    {
      task_id: uuid(),
      task: 'Call a friend',
      task_description: 'And tell them you love them!',
    },
  ];

  console.log('profile', profile);

  //   useEffect(async () => {
  //   try {
  //     const response = await getProfileById(user.id);
  //     setProfile(response);
  //   } catch (error) {
  //     <CreateProfile />;
  //   }
  //   }, []);

  if (loading) return <p>loading...</p>;

  if (!loading && !profile.user_name) return <Redirect to="/profile/create" />;
  return (
    <div>
      <h2>Profile</h2>
      {profile.task_list}
      <ul className="profile-tasks">
        {dummyTasks.map((task) => {
          return (
            <li className="profile-tasks_item">
              <input type="checkbox" />
              <p>{task.task}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
