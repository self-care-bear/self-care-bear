import { useState } from 'react';
import { useUser } from '../../context/UserContext';
import { deleteTask, updateTask } from '../../services/tasks';
import './TaskCard.css';

export default function TaskCard({ task }) {
  const { user } = useUser();
  // console.log(user);
  const [isEditing, setIsEditing] = useState(false);
  const [editTask, setEditTask] = useState(task);

  const handleDelete = () => {
    deleteTask(task.id);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    updateTask(editTask.task, editTask.task_description, user.id);
    setIsEditing(false);
  };

  return (
    <div className="task-card">
      <p>{task.task}</p>
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
          <p>{task.task_description}</p>
        </>
      )}
      <button onClick={handleDelete}>delete task</button>
      <button onClick={() => setIsEditing(true)}>edit task</button>
    </div>
  );
}
