import { getCreatedTasks, createTask } from '../../services/tasks';
import { useEffect, useState } from 'react';
import { useUser } from '../../context/UserContext';
import TaskCard from '../../components/TaskCard/TaskCard';
import { v4 as uuid } from 'uuid';
import './Tasks.css';
import { useHistory } from 'react-router-dom';

export default function TaskSelector() {
  const { user } = useUser();
  const initialTasks = [
    {
      task_id: uuid(),
      task: 'Stretch',
      task_description: 'Do a yoga practice!',
    },
    {
      task_id: uuid(),
      task: 'Eat a vegebil',
      task_description: 'Eat a carrot!',
    },
    {
      task_id: uuid(),
      task: 'Pet your cat',
      task_description: 'And kiss it, too!',
    },
  ];
  const [loading, setLoading] = useState(true);
  const [taskList, setTaskList] = useState(initialTasks);
  const [newTask, setNewTask] = useState('');
  const [newTaskDesc, setNewTaskDesc] = useState('');
  const [selectedTasks, setSelectedTasks] = useState([]);
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    createTask(newTask, newTaskDesc);
    setTaskList((prevState) => [
      ...prevState,
      { task: newTask, task_description: newTaskDesc },
    ]);
  };

  if (loading) return <span>Loading...</span>;

  if (selectedTasks.length === 5) {
    setTimeout(() => {
      history.push('/profile');
    }, 1000);
  }

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
          return (
            <TaskCard
              key={uuid()}
              task={task}
              taskList={taskList}
              setTaskList={setTaskList}
              setSelectedTasks={setSelectedTasks}
            />
          );
        })}
      </div>
      {selectedTasks.map((task) => {
        return <p key={uuid()}>{task.task}</p>;
      })}
    </div>
  );
}
