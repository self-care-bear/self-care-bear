import { useState, useEffect } from 'react';
import { getProfileById } from '../services/profiles';
import { useUser } from '../context/UserContext';

export const useProfile = () => {
  const { user } = useUser();

  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState({
    user_name: '',
    user_id: '',
    bear: '',
    task_list: [],
  });

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await getProfileById(user.id);
        setProfile(response);
      } catch (error) {
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, []);

  return { profile, setProfile, loading };
};
