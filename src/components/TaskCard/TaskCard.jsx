import { useState } from 'react';
import { useUser } from '../../context/UserContext';
import { deleteTask, updateTask } from '../../services/tasks';
import './TaskCard.css';

export default function TaskCard({ task, setTaskList }) {
  const { user } = useUser();
  const [isExpanded, setIsExpanded] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editTask, setEditTask] = useState(task);

  const handleDelete = () => {
    deleteTask(task.id);
    setTaskList((prevState) => prevState.filter((item) => item.id !== task.id));
  };

  const handleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    updateTask(editTask.task, editTask.task_description, user.id);
    setIsEditing(false);
  };

  return (
    <div className="task-card" onClick={handleExpand}>
      <h3>{task.task}</h3>
      {isExpanded && !isEditing && (
        <>
          <p>{task.task_description}</p>
          <button onClick={handleDelete}>delete task</button>
          <button onClick={() => setIsEditing(true)}>edit task</button>
        </>
      )}
      {isEditing && (
        <>
          <form onSubmit={handleUpdate}>
            <input
              type="text"
              value={editTask.task}
              placeholder="task"
              onChange={(e) =>
                setEditTask((prevState) => ({
                  ...prevState,
                  task: e.target.value,
                }))
              }
            />
            <input
              type="text"
              value={editTask.task_description}
              onChange={(e) =>
                setEditTask((prevState) => ({
                  ...prevState,
                  task_description: e.target.value,
                }))
              }
            />
            <button type="submit">save</button>
          </form>
        </>
      )}
    </div>
  );
}
