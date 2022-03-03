import { useHistory, Link } from 'react-router-dom';
import { useState } from 'react';
import { signInUser, signUpUser } from '../../services/auth';
import { useUser } from '../../context/UserContext';
import './Auth.css';

export default function Auth({ isSigningUp = false }) {
  const { setUser } = useUser();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const history = useHistory();

  const handleAuth = async (e) => {
    e.preventDefault();
    try {
      if (isSigningUp) {
        const response = await signUpUser(email, password);
        setError(response.error.message);
        setUser({ id: response.user.id, email: response.user.email });
        history.replace('/profile/tasks');
      } else {
        const response = await signInUser(email, password);
        setError(response.error.message);
        setUser({ id: response.user.id, email: response.user.email });
        history.replace('/profile/tasks');
      }
    } catch (err) {
      throw new Error(err);
    }
  };
  return (
    <div className="auth-container">
      <h4>
        {isSigningUp
          ? "Welcome! Let's create your account."
          : "Welcome back! Let's start your day."}
      </h4>
      <form className="auth" onSubmit={handleAuth}>
        <section>
          <label>
            Email:
            <input
              id="email"
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </section>
        <section>
          <label>
            Password:
            <input
              id="password"
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
        </section>
        <button type="submit">Go</button>
      </form>
      <div className="auth-container_links">
        <Link to="/signin">Sign-in</Link>|<Link to="/signup">Sign-up</Link>
      </div>
      {error && <p style={{ color: '#b7210d' }}>{error}</p>}
    </div>
  );
}
