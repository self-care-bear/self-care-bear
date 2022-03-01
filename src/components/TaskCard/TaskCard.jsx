import './TaskCard.css';

export default function TaskCard({ task }) {
  return (
    <div className="task-card">
      <p>{task.task}</p>
    </div>
  );
}
