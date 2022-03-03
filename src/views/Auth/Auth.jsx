import { useHistory, Link } from 'react-router-dom';
import { useState } from 'react';
import { signInUser, signUpUser } from '../../services/auth';
import { useUser } from '../../context/UserContext';
import './Auth.css';

export default function Auth({ isSigningUp = false }) {
  const { setUser } = useUser();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleAuth = async (e) => {
    e.preventDefault();
    try {
      if (isSigningUp) {
        const response = await signUpUser(email, password);
        console.log('response', response);
        setUser({ id: response.user.id, email: response.user.email });
        history.replace('/profile');
      } else {
        const response = await signInUser(email, password);
        console.log('response', response);
        setUser({ id: response.user.id, email: response.user.email });
        history.replace('/profile');
      }
    } catch (error) {
      throw error;
    }
  };
  return (
    <div className="auth-container">
      <h4>
        {isSigningUp
          ? 'Welcome! Create an account.'
          : 'Welcome back! Please sign in.'}
      </h4>
      <form className="auth" onSubmit={handleAuth}>
        <section>
          <label htmlFor="email">Email: </label>
          <input
            id="email"
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </section>
        <section>
          <label htmlFor="password">Password: </label>
          <input
            id="password"
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </section>
        <button type="submit">Save</button>
      </form>
      <div className="auth-container_links">
        <Link to="/signin">Sign-in</Link>
        or
        <Link to="/signup">Sign-up</Link>
      </div>
    </div>
  );
}
