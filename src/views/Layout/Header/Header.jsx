import { useUser } from '../../../context/UserContext';
import { signOutUser } from '../../../services/auth';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../../assets/logo.png';

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
      <section>
        <Link to="/profile/tasks">Habits</Link>
        <Link to="/profile">Profile</Link>
      </section>
      <section className="header-logo">
        <img src={logo} />
        <span>You're signed in as {user.email}</span>
      </section>
      <section>
        <Link to="/about">About</Link>
        <Link to="/" onClick={handleLogout}>
          Log Out
        </Link>
      </section>
    </header>
  );
}
