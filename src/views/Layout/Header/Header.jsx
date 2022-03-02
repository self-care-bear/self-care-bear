import { useUser } from '../../../context/UserContext';
import { signOutUser } from '../../../services/auth';
import { useHistory } from 'react-router-dom';
import './Header.css';

export default function Header() {
  const history = useHistory();
  const { user } = useUser();
  const handleLogout = () => {
    signOutUser();
    history.replace('/');
  };
  return (
    <header>
      <h1>Self Care Bear</h1>
      <h2>You're signed in as {user.email}</h2>
      <button onClick={handleLogout}>log out</button>
    </header>
  );
}
