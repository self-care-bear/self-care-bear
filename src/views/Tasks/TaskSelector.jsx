import { createTask, updateTask } from '../../services/tasks';
import { useState } from 'react';
import { useUser } from '../../context/UserContext';
import TaskCard from '../../components/TaskCard/TaskCard';
import { v4 as uuid } from 'uuid';
import './Tasks.css';
import { useHistory } from 'react-router-dom';
import { useTasks } from '../../context/TaskContext';
import FadeIn from 'react-fade-in/lib/FadeIn';

export default function TaskSelector() {
  const { user } = useUser();
  const [loading, setLoading] = useState(false);
  const { taskList, setTaskList } = useTasks([]);
  const [newTask, setNewTask] = useState('');
  const [newTaskDesc, setNewTaskDesc] = useState('');
  const [isSelected, setIsSelected] = useState({});
  const history = useHistory();
  const [isExpanded, setIsExpanded] = useState(false);
  const [habitsLeft, setHabitsLeft] = useState(5);

  const handleHabitsLeft = () => {
    setHabitsLeft((prevState) => prevState - 1);
  };

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
    setNewTask('');
    setNewTaskDesc('');
  };

  const handleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  if (loading) return <span>Loading...</span>;

  if (Object.values(isSelected).filter((val) => val).length === 5) {
    history.push('/profile');
  }

  return (
    <FadeIn transitionDuration="1000">
      <div className="task-selector">
        <h1>Habit Builder</h1>
        <section className="task-selector_copy">
          <div className="task-selector_intro">
            <p>
              A foundational practice in self-care is creating a routine that
              takes care of you. So, think about the habits that best support
              your care. Add as many habits as you want to your profile, but
              each day we’ll ask you to focus on 5. When you’re ready, set
              today’s habits!
            </p>
          </div>
          <div className="task-selector_dropdown">
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
            <p>Stuck on where to begin?</p>
            <p> Here are some ideas to get started:</p>
            {!isExpanded && (
              <p className="arrow" onClick={handleExpand}>
                ▼
              </p>
            )}
            {isExpanded && (
              <>
                <section className="task-selector_prompts">
                  <h3>Meditate for 10 minutes</h3>
                  <p>
                    A meditation practice can help create a sense of calm,
                    peace, and balance - something we could all use more of!
                  </p>
                  <h3>Drink a glass of water</h3>
                  <p>
                    It can be hard to remember to drink an adequate amount of
                    water during the day, so start your day with a big glass!
                    Your body will thank you!
                  </p>
                  <h3>Step outside</h3>
                  <p>
                    We’re in front of our screens so much, stepping outside in
                    the morning - try building the routine of stepping outside
                    for a big breath of air in the morning. Go for a walk if you
                    have the energy!
                  </p>
                </section>
                <p className="task-card_arrow" onClick={handleExpand}>
                  ▲
                </p>
              </>
            )}
          </div>
        </section>
        {
          <p className="task-selector_counter">
            You have <span>{habitsLeft}</span> habits to set for today.
          </p>
        }
        <div className="task-selector_cards">
          {taskList.length > 0 &&
            taskList.map((task) => {
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
    </FadeIn>
  );
}
