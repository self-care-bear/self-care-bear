import { useUser } from '../../../context/UserContext';
import { signOutUser } from '../../../services/auth';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Header.css';
export default function Header() {
  const history = useHistory();
  const { user, setUser } = useUser();
  const handleLogout = () => {
    signOutUser();
    setUser({});
    history.replace('/');
  };

  return (
    <header>
      <h1>Self Care Bear</h1>
      {user.email && (
        <section className="header-controls">
          <div className="header-controls_links">
            <Link to="/profile/tasks">Habits</Link>
            <Link to="/profile">Profile</Link>
            <Link to="/about">About</Link>
          </div>
          <div className="header-controls_user">
            <span>You're signed in as {user.email}</span>
            <button onClick={handleLogout}>log out</button>
          </div>
        </section>
      )}
    </header>
  );
}
