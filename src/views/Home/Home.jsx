import './Home.css';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="home-container">
      <h3>
        Welcome! A place where you can start building a morning routine full of
        self-care.
      </h3>
      <h3>Take care of your buddy like you’d take care of yourself.</h3>
      <div className="home-container_links">
        <Link to="/signin">Sign-in</Link>
        or
        <Link to="/signup">Sign-up</Link>
      </div>
    </div>
  );
}
