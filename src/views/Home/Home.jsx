import './Home.css';
import { Link } from 'react-router-dom';
import Bear from '../../assets/brown1.png';
import logo from '../../assets/logo.png';

export default function Home() {
  return (
    <div className="home-container">
      <img src={logo} alt="" />
      <p>
        An app that cares about you and wants you to care for yourself, this
        site exists to help you create your ideal morning routine.
      </p>
      <p>
        Start your day off on the right foot with your Self Care Bear, and take
        care of your buddy like you’d take care of yourself.
      </p>
      <div className="home-container_links">
        <Link to="/signin">Sign-in</Link>|<Link to="/signup">Sign-up</Link>
      </div>
    </div>
  );
}
