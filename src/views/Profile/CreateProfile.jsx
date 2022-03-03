import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useProfile } from '../../hooks/useProfile';
import { useUser } from '../../context/UserContext';
import BrownBear from '../../assets/brown2.png';
import PandaBear from '../../assets/panda2.png';
import './Profile.css';
import { createProfile } from '../../services/profiles';
// import { getUser } from '../../services/auth';

export default function CreateProfile() {
  const { user, setUser } = useUser();
  const { profile, setProfile, loading } = useProfile();
  const history = useHistory();
  const [bear, setBear] = useState('');
  const [name, setName] = useState('');

  useEffect(() => {
    setName(profile.user_name);
    setBear(profile.bear);
  }, [profile]);

  const handleChange = (e) => {
    setBear(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await createProfile({
      user_id: user.id,
      user_name: name,
      bear: bear,
    });
    setProfile(response);
    history.replace('/profile/tasks');
  };
  return (
    <div className="create-container">
      <p>
        One of our favorite self-care mantras is this: ‘take care of yourself
        like you’d take care of your best friend.’ So, let’s build you a little
        buddy!
      </p>
      <p>
        To get started,{' '}
        <span className="create-container_bold">create a profile</span>. Your
        buddy may look a little disheveled right now, but your routine will help
        change that.
      </p>
      <form className="create-container_form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="give your buddy a name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <div className="create-container_bears">
          <label>
            <input
              type="radio"
              name="bear"
              value="brown"
              checked={bear === 'brown'}
              onChange={handleChange}
            />
            <img src={BrownBear} />
          </label>
          <label>
            <input
              type="radio"
              name="bear"
              value="panda"
              checked={bear === 'panda'}
              onChange={handleChange}
            />
            <img src={PandaBear} />
          </label>
        </div>
        <button type="submit">Let's Go!</button>
      </form>
    </div>
  );
}
