import { useState } from 'react';
import { useUser } from '../../context/UserContext';
import { deleteTask, updateTask } from '../../services/tasks';
import { useTasks } from '../../context/TaskContext';
import './TaskCard.css';

export default function TaskCard({
  task,
  onEdit,
  setIsSelected,
  isSelected,
  handleHabitsLeft,
}) {
  const { user } = useUser();
  const [isExpanded, setIsExpanded] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editTask, setEditTask] = useState(task);
  const { taskList, setTaskList } = useTasks();

  const handleDelete = () => {
    deleteTask(task.id);
    setTaskList((prevState) => prevState.filter((item) => item.id !== task.id));
  };

  const handleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    onEdit(editTask);
    setIsEditing(false);
  };

  const handleSelect = async () => {
    await updateTask(task.id, task.task, task.task_description, user.id, true);
    const taskSelected =
      isSelected[task.id] !== undefined
        ? !isSelected[task.id]
        : !task.is_selected;
    setIsSelected((prevState) => ({
      ...prevState,
      [task.id]: taskSelected,
    }));
    handleHabitsLeft();
  };

  return (
    <div className="task-card">
      <h3 className="task-card_title">{task?.task}</h3>
      {isExpanded && <p>{task?.task_description}</p>}
      <div className="task-card_buttons">
        {isExpanded && !isEditing && (
          <>
            <button onClick={() => setIsEditing(true)}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
          </>
        )}
        {!isEditing && <button onClick={handleSelect}>Set Habit</button>}
      </div>
      {!isExpanded && (
        <p className="arrow" onClick={handleExpand}>
          ▼
        </p>
      )}
      {isExpanded && (
        <p className="arrow" onClick={handleExpand}>
          ▲
        </p>
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
            <button type="submit">Save</button>
          </form>
        </>
      )}
    </div>
  );
}
