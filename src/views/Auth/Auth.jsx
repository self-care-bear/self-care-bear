// import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import { signInUser, signUpUser } from '../../services/auth';

export default function Auth({ isSigningUp = false }) {
  const [user, setUser] = useState({});
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const history = useHistory();
  const handleAuth = async (e) => {
    e.preventDefault();
    try {
      if (isSigningUp) {
        await signUpUser(email, password);
        // console.log(signUpUser);
      } else {
        const response = await signInUser(email, password);
        setUser({ id: response.id, email: response.email });
      }
    } catch (error) {
      throw error;
    }
  };
  return (
    <div>
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
    </div>
  );
}
