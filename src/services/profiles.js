import { client, parseData } from './client';

export async function getProfileById(id) {
  const request = await client
    .from('profile')
    .select('*')
    .eq('user_id', id)
    .single();
  return parseData(request);
}

export async function createProfile({ user_name, bear, task_list, user_id }) {
  const request = await client
    .from('profile')
    .insert({ user_name, bear, task_list, user_id });
  return parseData(request);
}

export async function updateProfile({ user_id, user_name, bear, task_list }) {
  const request = await client
    .from('profile')
    .update({ user_name, bear, task_list })
    .match({ user_id });
  return parseData(request);
}
