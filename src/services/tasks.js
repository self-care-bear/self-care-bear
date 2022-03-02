import { client, parseData } from './client';

export async function getPresetTasks() {
  const request = await client.from('preset_tasks').select('*');
  return parseData(request);
}

export async function getCreatedTasks(user_id) {
  const request = await client
    .from('created_tasks')
    .select('*')
    .match({ user_id })
    .order('created_at', { ascending: false });
  return parseData(request);
}

export async function createTask(task, task_description) {
  const request = await client.from('created_tasks').insert([
    {
      task: task,
      task_description: task_description,
      user_id: client.auth.user().id,
    },
  ]);
  return parseData(request);
}
export async function updateTask(
  id,
  task,
  task_description,
  user_id,
  is_selected,
  is_completed
) {
  const request = await client
    .from('created_tasks')
    .update({ task, task_description, is_selected, is_completed })
    .match({ id, user_id });
  return parseData(request);
}

export async function deleteTask(id) {
  const request = await client.from('created_tasks').delete().match({ id });
  return parseData(request);
}

export async function getSelectedTasks(user_id) {
  const request = await client
    .from('created_tasks')
    .select('*')
    .match({ user_id, is_selected: true })
    .order('created_at', { ascending: false });
  return parseData(request);
}

export async function getCompletedTasks(user_id) {
  const request = await client
    .from('created_tasks')
    .select('*')
    .match({ user_id, is_completed: true })
    .order('created_at', { ascending: false });
  return parseData(request);
}
