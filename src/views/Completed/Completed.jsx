import './Completed.css';
import panda6 from '../../assets/panda6.png';
import brown6 from '../../assets/brown6.png';
import { useProfile } from '../../hooks/useProfile';
<<<<<<< HEAD

export default function Completed() {
  const { profile } = useProfile();

  return (
    <div className="completed-container">
      {(profile.bear === 'brown' && <img src={brown6} />) ||
        (profile.bear === 'panda' && <img src={panda6} />)}
=======
import { useHistory } from 'react-router-dom';

export default function Completed() {
  const { profile } = useProfile();
  const history = useHistory();

  const handleClick = () => {
    history.push('/profile/tasks');
  };

  return (
    <div className="completed-container">
      <p>
        Wow, you did it. You completed your entire morning routine! And you got
        your bear ready for their day! This accomplishment is huge. Pat yourself
        on the back for building some really meaningful morning habits.
      </p>
      <p>Whenever you’re ready for tomorrow, we’re here for you.</p>
      {(profile.bear === 'brown' && <img src={brown6} />) ||
        (profile.bear === 'panda' && <img src={panda6} />)}
      <button onClick={handleClick}>Begin Again</button>
>>>>>>> 2d21b53782ff79554cef87cb5616bb360266787e
    </div>
  );
}
