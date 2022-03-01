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


export async function updateTask(task, task_description, user_id) {
  const request = await client
    .from('created_tasks')
    .update({ task, task_description })
    .match({ user_id });
  return parseData(request);
}

export async function deleteTask(id) {
  const request = await client.from('created_tasks').delete().match({ id });
  return parseData(request);
}
