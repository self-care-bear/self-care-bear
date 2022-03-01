import { deleteTask } from '../../services/tasks';
import './TaskCard.css';

export default function TaskCard({ task }) {
  const handleDelete = () => {
    deleteTask(task.id);
  };

  return (
    <div className="task-card">
      <p>{task.task}</p>
      <button onClick={handleDelete}>delete</button>
    </div>
  );
}
