import { useUser } from '../../context/UserContext';
import Header from './Header/Header';
import './Layout.css';

export default function Layout({ children }) {
  const { user } = useUser();

  return (
    <div className="layout">
      {user.email && <Header />}
      <main>{children}</main>
    </div>
  );
}
