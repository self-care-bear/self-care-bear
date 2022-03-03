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
  const { taskList, setTaskList } = useTasks([]);
  const [newTask, setNewTask] = useState('');
  const [newTaskDesc, setNewTaskDesc] = useState('');
  const [isSelected, setIsSelected] = useState({});
  const history = useHistory();
  const [isExpanded, setIsExpanded] = useState(false);
  const [habitsLeft, setHabitsLeft] = useState(5);

  console.log('habitsLeft', habitsLeft);

  const handleHabitsLeft = () => {
    setHabitsLeft((prevState) => prevState - 1);
  };

  useEffect(() => {
    const fetchCreatedData = async () => {
      const createdData = await getCreatedTasks(user.id);
      setTaskList((prevState) => [...prevState, ...createdData]);
      setLoading(false);
    };
    fetchCreatedData();
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
    setTaskList(updatedTaskList);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const task = await createTask(newTask, newTaskDesc);
    setTaskList((prevState) => [...prevState, task[0]]);
  };

  const handleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  if (loading) return <span>Loading...</span>;

  if (Object.values(isSelected).filter((val) => val).length === 5) {
    history.push('/profile');
  }

  return (
    <div className="task-selector">
      <section className="task-selector_copy">
        <p>
          A foundational practice in self-care is creating a routine that takes
          care of you. So, think about the habits that best support your care.
        </p>
        <div>
          <p>Stuck on where to begin? Here are some ideas to get started:</p>
          {!isExpanded && (
            <p className="task-card_arrow" onClick={handleExpand}>
              ▼
            </p>
          )}
          {isExpanded && (
            <>
              <h3>Meditate for 10 minutes</h3>
              <p>
                A meditation practice can help create a sense of calm, peace,
                and balance - something we could all use more of!
              </p>
              <h3>Drink a glass of water</h3>
              <p>
                It can be hard to remember to drink an adequate amount of water
                during the day, so start your day with a big glass! Your body
                will thank you!
              </p>
              <h3>Step outside</h3>
              <p>
                We’re in front of our screens so much, stepping outside in the
                morning - try building the routine of stepping outside for a big
                breath of air in the morning. Go for a walk if you have the
                energy!
              </p>
              <p className="task-card_arrow" onClick={handleExpand}>
                ▲
              </p>
            </>
          )}
        </div>
        <p>
          Add as many habits as you want to your profile, but each day we’ll ask
          you to focus on 5 to build your morning routine. When you’re ready,
          set today’s habits!
        </p>
      </section>
      <form className="task-selector_form" onSubmit={handleSubmit}>
        <label htmlFor="newTask">Habit:</label>
        <input
          type="text"
          id="newTask"
          name="newTask"
          value={newTask}
          placeholder="habit"
          onChange={(e) => setNewTask(e.target.value)}
        />
        <label htmlFor="newTaskDesc">Description:</label>
        <input
          type="text"
          id="newTaskDesc"
          name="newTaskDesc"
          value={newTaskDesc}
          onChange={(e) => setNewTaskDesc(e.target.value)}
          placeholder="description"
        />
        <button type="submit">Create Habit</button>
      </form>
      {<p>You have {habitsLeft} habits to set for today.</p>}
      <div className="card-container">
        {taskList.map((task) => {
          return (
            <TaskCard
              key={uuid()}
              onEdit={handleTaskEdit}
              task={task}
              isSelected={isSelected}
              setIsSelected={setIsSelected}
              handleHabitsLeft={handleHabitsLeft}
            />
          );
        })}
      </div>
    </div>
  );
}
