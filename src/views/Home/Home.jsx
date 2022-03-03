import './Home.css';
import { Link } from 'react-router-dom';
import Bear from '../../assets/brown1.png';

export default function Home() {
  return (
    <div className="home-container">
      <h3>
        An app that cares about you and wants you to care for yourself, this
        site exists to help you create your ideal morning routine.
      </h3>
      <h3>
        Start your day off on the right foot with your Self Care Bear, and take
        care of your buddy like you’d take care of yourself.
      </h3>
      <img className="home-container_image" src={Bear} alt="brown bear" />
      <div className="home-container_links">
        <Link to="/signin">Sign-in</Link>
        or
        <Link to="/signup">Sign-up</Link>
      </div>
    </div>
  );
}
