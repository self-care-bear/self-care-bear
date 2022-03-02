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
  const { user } = useUser();
  // const [user, setUser] = useState({});
  const { profile, setProfile, loading } = useProfile();
  const history = useHistory();
  const [bear, setBear] = useState('');
  const [name, setName] = useState('');

  useEffect(() => {
    // const fetchUser = () => {
    //   const data = getUser();
    //   setUser(data);
    // };
    // fetchUser();
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
      task_list: [],
    });
    setProfile(response);
    history.replace('/profile');
  };
  return (
    <div className="create-container">
      <h2>create profile</h2>
      <form className="create-container_form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
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
        <button type="submit">submit</button>
      </form>
    </div>
  );
}
