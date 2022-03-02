import { getCreatedTasks, createTask, updateTask } from '../../services/tasks';
import { useEffect, useState } from 'react';
import { useUser } from '../../context/UserContext';
import TaskCard from '../../components/TaskCard/TaskCard';
import { v4 as uuid } from 'uuid';
import './Tasks.css';
import { useHistory } from 'react-router-dom';
import { useTasks } from '../../context/TaskContext';

export default function TaskSelector() {
  const { user } = useUser();
  const [loading, setLoading] = useState(true);
  //   const [taskList, setTaskList] = useState(initialTasks);
  const { taskList, setTaskList } = useTasks([]);
  const [newTask, setNewTask] = useState('');
  const [newTaskDesc, setNewTaskDesc] = useState('');
  //   const [selectedTasks, setSelectedTasks] = useState([]);
  const { selectedTasks, setSelectedTasks } = useTasks();
  const history = useHistory();

  useEffect(() => {
    const fetchCreatedData = async () => {
      const createdData = await getCreatedTasks(user.id);
      setTaskList((prevState) => [...prevState, ...createdData]);
      setLoading(false);
    };
    // const fetchPresetData = async () => {
    //   const presetData = await getPresetTasks();
    //   setTaskList((prevState) => [...prevState, ...presetData]);
    //   setLoading(false);
    // };
    fetchCreatedData();
    // fetchPresetData();
  }, []);

  const handleTaskEdit = (editTask) => {
    updateTask(editTask.id, editTask.task, editTask.task_description, user.id);
    const updatedTaskList = taskList.map((item) => {
      return item.id === editTask.id
        ? {
            ...editTask,
            task: editTask.task,
            task_description: editTask.task_description,
          }
        : item;
    });
    //need to get update working on refresh
    setTaskList(updatedTaskList);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const task = await createTask(newTask, newTaskDesc);
    console.log('task', task);
    setTaskList((prevState) => [...prevState, task[0]]);
  };

  if (loading) return <span>Loading...</span>;

  //   if (selectedTasks.length === 5) {
  //     setTimeout(() => {
  //       history.push('/profile');
  //     }, 1000);
  //   }

  return (
    <div className="task-selector">
      <form className="task-selector_form" onSubmit={handleSubmit}>
        <label htmlFor="newTask">Task:</label>
        <input
          type="text"
          id="newTask"
          name="newTask"
          value={newTask}
          placeholder="task"
          onChange={(e) => setNewTask(e.target.value)}
        />
        <label htmlFor="newTaskDesc">Task Description:</label>
        <input
          type="text"
          id="newTaskDesc"
          name="newTaskDesc"
          value={newTaskDesc}
          onChange={(e) => setNewTaskDesc(e.target.value)}
          placeholder="description"
        />
        <button type="submit">submit</button>
      </form>
      <div className="card-container">
        {taskList.map((task) => {
          return <TaskCard key={uuid()} onEdit={handleTaskEdit} task={task} />;
        })}
        {selectedTasks.map((task) => {
          return <p key={task.id}>{task.task}</p>;
        })}
      </div>
      {selectedTasks &&
        selectedTasks.map((task) => {
          return <p key={uuid()}>{task.task}</p>;
        })}
    </div>
  );
}
