import { useEffect } from 'react';
import { useProfile } from '../../hooks/useProfile';
import { createProfile } from '../../services/profiles';
import { getProfile } from '../../services/profiles';
import { getPresetTasks } from '../../services/tasks';

export default function Profile() {
  const { profile, loading } = useProfile();
  return <div>Profile</div>;
}
