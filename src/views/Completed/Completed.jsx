import './Completed.css';
import panda6 from '../../assets/panda6.png';
import brown6 from '../../assets/brown6.png';
import { useProfile } from '../../hooks/useProfile';
import { useHistory } from 'react-router-dom';
import { updateTask } from '../../services/tasks';
import { useTasks } from '../../context/TaskContext';
import { useUser } from '../../context/UserContext';
import FadeIn from 'react-fade-in/lib/FadeIn';
import Confetti from './Confetti';

export default function Completed() {
  const { taskList } = useTasks();
  const { profile } = useProfile();
  const { user } = useUser();
  const history = useHistory();

  const handleClick = async () => {
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
    history.push('/profile/tasks');
  };

  return (
    <>
      <FadeIn transitionDuration="1000">
        <div className="completed-container">
          <h1>Wow, you did it!</h1>
          <p>
            You completed your entire morning routine! And you got{' '}
            {profile.user_name} ready for their day! This accomplishment is
            huge.Pat yourself on the back for building some really meaningful
            morning habits. Whenever you’re ready for tomorrow, we’re here for
            you.
          </p>
          {(profile.bear === 'brown' && <img src={brown6} />) ||
            (profile.bear === 'panda' && <img src={panda6} />)}
          <button onClick={handleClick}>Begin Again</button>
        </div>
      </FadeIn>
      <Confetti />
    </>
  );
}
