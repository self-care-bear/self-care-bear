import { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { useUser } from '../../context/UserContext';
import { useProfile } from '../../hooks/useProfile';
import { getProfileById } from '../../services/profiles';
import CreateProfile from './CreateProfile';

export default function Profile() {
  const { user } = useUser();
  const { profile, setProfile, loading } = useProfile();
  // useEffect(async () => {
  //   try {
  //     const response = await getProfileById(user.id);
  //     setProfile(response);
  //   } catch (error) {
  //     <CreateProfile />;
  //   }
  // }, []);
  if (loading) return <p>loading...</p>;

  if (!loading && !profile.user_name) return <Redirect to="/profile/create" />;
  return (
    <div>
      <h2>Profile</h2>
    </div>
  );
}
