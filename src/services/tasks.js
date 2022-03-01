import { client, parseData } from './client';

export async function getPresetTasks() {
  const request = await client.from('preset_tasks').select('*');
  return parseData(request);
}

export async function getCreatedTasks(user_id) {
  const request = await client
    .from('created_tasks')
    .select('*')
    .match({ user_id });
  return parseData(request);
}

//add task
//update task
//delete task
