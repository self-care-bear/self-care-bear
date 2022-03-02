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
export async function updateTask(
  id,
  task,
  task_description,
  user_id,
  is_selected
) {
  const request = await client
    .from('created_tasks')
    .update({ task, task_description, is_selected })
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
    .match({ user_id, is_selected: true });
  return parseData(request);
}

// const { data, error } = await supabase
//   .from('cities')
//   .select('name, country_id')
//   .match({name: 'Beijing', country_id: 156})

// go into created tasks
// find selected 'true'
// match by user_id
// return those

// const { data, error } = await supabase
//   .from('cities')
//   .select('name, country_id')
//   .filter('name', 'in', '("Paris","Tokyo")')
