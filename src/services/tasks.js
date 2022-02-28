import { client, parseData } from './client';
export async function getPresetTasks() {
  const request = await client.from('preset_tasks').select('*');
  return parseData(request);
}


//create tasklist array
