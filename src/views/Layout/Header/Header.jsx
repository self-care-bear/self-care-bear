import { useUser } from '../../../context/UserContext';
import './Header.css';

export default function Header() {
  const { user } = useUser();
  return (
    <header>
      <h1>Self Care Bear</h1>
      <h2>You're signed in as {user.email}</h2>
      <button>log out</button>
    </header>
  );
}
