import { useState } from 'react';
import { getProfile } from '../services/profiles';
import { useEffect } from 'react';

export const useProfile = () => {
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState({
    user_name: '',
    bear: '',
    task_list: [],
  });

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await getProfile();
        setProfile(response);
        setLoading(false);
      } catch (error) {
        setProfile({ user_name: '', bear: '', task_list: [] });
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, []);

  return { profile, setProfile, loading };
};
