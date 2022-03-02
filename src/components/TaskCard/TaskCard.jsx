import { useState } from 'react';
import { useUser } from '../../context/UserContext';
import { deleteTask, updateTask } from '../../services/tasks';
import './TaskCard.css';
import { useTasks } from '../../context/TaskContext';
import { useProfile } from '../../hooks/useProfile';
import { updateProfile } from '../../services/profiles';

export default function TaskCard({ task }) {
  const { user } = useUser();
  const { profile, setProfile } = useProfile();
  const [isExpanded, setIsExpanded] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editTask, setEditTask] = useState(task);
  const { taskList, setTaskList, selectedTasks, setSelectedTasks } = useTasks();

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
    const updatedTaskList = taskList.map((item) => {
      item.id === editTask.id
        ? {
            ...editTask,
            task: editTask.task,
            task_description: editTask.task_description,
          }
        : item;
    });
    //need to get update working on refresh
    // setTaskList(updatedTaskList);
    setIsEditing(false);
  };

  const handleSelect = async () => {
    setSelectedTasks((prevState) => [...prevState, task]);
    console.log('selectedTasks', selectedTasks);
    const response = await updateProfile({
      user_id: user.id,
      user_name: profile.name,
      bear: profile.bear,
      task_list: [...selectedTasks],
    });
    console.log('response', response);
    setProfile(response);
  };

  return (
    <div className="task-card">
      <h3 className="task-card_title">{task.task}</h3>
      {isExpanded && <p>{task.task_description}</p>}
      <div className="task-card_buttons">
        {isExpanded && !isEditing && (
          <>
            <button onClick={handleDelete}>Delete</button>
            <button onClick={() => setIsEditing(true)}>Edit</button>
          </>
        )}
        {!isEditing && <button onClick={handleSelect}>Add to Tasks</button>}
      </div>
      {!isExpanded && (
        <p className="task-card_arrow" onClick={handleExpand}>
          ▼
        </p>
      )}
      {isExpanded && (
        <p className="task-card_arrow" onClick={handleExpand}>
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
            <button type="submit">save</button>
          </form>
        </>
      )}
    </div>
  );
}
