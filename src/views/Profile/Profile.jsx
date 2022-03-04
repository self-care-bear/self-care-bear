import { Redirect } from 'react-router-dom';
import { useUser } from '../../context/UserContext';
import { useProfile } from '../../hooks/useProfile';
import { useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';
import { getSelectedTasks, updateTask } from '../../services/tasks';
import { useHistory } from 'react-router-dom';
import FadeIn from 'react-fade-in/lib/FadeIn';
import brown1 from '../../assets/brown1.png';
import brown2 from '../../assets/brown2.png';
import brown3 from '../../assets/brown3.png';
import brown4 from '../../assets/brown4.png';
import brown5 from '../../assets/brown5.png';
import panda1 from '../../assets/panda1.png';
import panda2 from '../../assets/panda2.png';
import panda3 from '../../assets/panda3.png';
import panda4 from '../../assets/panda4.png';
import panda5 from '../../assets/panda5.png';
import { useTasks } from '../../context/TaskContext';

export default function Profile() {
  const [selectedTasks, setSelectedTasks] = useState([]);
  const [isCompleted, setIsCompleted] = useState({});
  const history = useHistory();
  const { user } = useUser();
  const { profile, loading } = useProfile();
  const { taskList } = useTasks();

  useEffect(() => {
    const fetchSelectedTasks = async () => {
      const data = await getSelectedTasks(user.id);
      setSelectedTasks(data);
    };
    fetchSelectedTasks();
  }, []);

  const handleToggle = async (task) => {
    const taskCompleted =
      isCompleted[task.id] !== undefined
        ? !isCompleted[task.id]
        : !task.is_completed;

    setIsCompleted((prevState) => ({
      ...prevState,
      [task.id]: taskCompleted,
    }));
    await updateTask(
      task.id,
      task.task,
      task.task_description,
      user.id,
      true,
      taskCompleted
    );
  };

  // if (loading) return <p>loading...</p>;
  // if (Object.values(isCompleted).filter((val) => val).length === 5) {
  //   history.push('/profile/completed');
  // }

  const handleClear = async () => {
    await taskList.map((task) => {
      updateTask(
        task.id,
        task.task,
        task.task_description,
        user.id,
        false,
        false
      );
    });
  };

  if (Object.values(isCompleted).filter((val) => val).length === 5) {
    setTimeout(() => {
      handleClear();
      history.push('/profile/completed'), 1000;
    });
  }

  console.log(selectedTasks);
  if (!loading && !profile.user_name) return <Redirect to="/profile/create" />;
  // if (!loading && selectedTasks.length === 0)
  //   return <Redirect to="/profile/tasks" />;
  return (
    <FadeIn transitionDuration="1000">
      <div className="profile-container">
        <section className="profile-container_desc">
          <h1> Good Morning!</h1>
          <p>
            Here are the habits you want to include in your day! Whenever you’re
            ready, get started accomplishing them. As you go about your morning,
            tick off your habits. And don’t forget! You’re taking care of your
            buddy, too…
          </p>
        </section>
        <section className="profile-container_list">
          {profile.task_list}
          <ul className="profile-tasks">
            {selectedTasks.map((task) => {
              return (
                <li className="profile-tasks_item" key={uuid()}>
                  <input
                    type="checkbox"
                    checked={
                      isCompleted[task.id] !== undefined
                        ? isCompleted[task.id]
                        : task.is_completed
                    }
                    onChange={() => handleToggle(task)}
                  />
                  <p>{task.task}</p>
                </li>
              );
            })}
          </ul>
          <section className="profile-container_bear">
            {(profile.bear === 'brown' &&
              Object.values(isCompleted).filter((val) => val).length === 0 && (
                <img src={brown1} />
              )) ||
              (profile.bear === 'panda' &&
                Object.values(isCompleted).filter((val) => val).length ===
                  0 && <img src={panda1} />)}
            {(profile.bear === 'brown' &&
              Object.values(isCompleted).filter((val) => val).length === 1 && (
                <img src={brown2} />
              )) ||
              (profile.bear === 'panda' &&
                Object.values(isCompleted).filter((val) => val).length ===
                  1 && <img src={panda2} />)}
            {(profile.bear === 'brown' &&
              Object.values(isCompleted).filter((val) => val).length === 2 && (
                <img src={brown3} />
              )) ||
              (profile.bear === 'panda' &&
                Object.values(isCompleted).filter((val) => val).length ===
                  2 && <img src={panda3} />)}
            {(profile.bear === 'brown' &&
              Object.values(isCompleted).filter((val) => val).length === 3 && (
                <img src={brown4} />
              )) ||
              (profile.bear === 'panda' &&
                Object.values(isCompleted).filter((val) => val).length ===
                  3 && <img src={panda4} />)}
            {(profile.bear === 'brown' &&
              Object.values(isCompleted).filter((val) => val).length === 4 && (
                <img src={brown5} />
              )) ||
              (profile.bear === 'panda' &&
                Object.values(isCompleted).filter((val) => val).length ===
                  4 && <img src={panda5} />)}
          </section>
        </section>
      </div>
    </FadeIn>
  );
}
