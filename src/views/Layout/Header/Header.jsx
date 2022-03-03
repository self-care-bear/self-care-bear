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
        <div className="header-controls">
          <span>You're signed in as {user.email}</span>
          <button onClick={handleLogout}>log out</button>
          <Link to="/profile/tasks">Tasks</Link>
          <Link to="/profile">Profile</Link>
        </div>
      )}
    </header>
  );
}
