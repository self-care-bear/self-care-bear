import { client, parseData } from './client';

//add custom task

//get custom tasks

//delete custom tasks

//edit custom tasks

//get preset tasks
export async function getPresetTasks() {
  const request = await client.from('preset_tasks').select('*');
  return parseData(request);
}

//create tasklist array
