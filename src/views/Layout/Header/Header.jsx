import { useUser } from '../../../context/UserContext';

export default function Header() {
  const { user } = useUser();
  return <div className="Header">You're signed in as {user.email}</div>;
}
