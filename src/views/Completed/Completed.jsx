import './Completed.css';
import panda6 from '../../assets/panda6.png';
import brown6 from '../../assets/brown6.png';
import { useProfile } from '../../hooks/useProfile';

export default function Completed() {
  const { profile } = useProfile();

  return (
    <div className="completed-container">
      {(profile.bear === 'brown' && <img src={brown6} />) ||
        (profile.bear === 'panda' && <img src={panda6} />)}
    </div>
  );
}
