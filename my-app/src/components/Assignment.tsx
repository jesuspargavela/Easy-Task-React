import type { Task } from "../models/task";

import { formatDate } from "../utils/formatDate";

import "./assignment.css";

function Assignment({
  task,
  deleteTask,
}: {
  task: Task;
  deleteTask: (taskId: string) => void;
}) {
  return (
    <article className="task-card">
      <div className="task-card_content">
        <h3>{task.title}</h3>
        <h4>{formatDate(task.dueDate)}</h4>
        <p>{task.summary}</p>
      </div>
      <div className="task-card_actions">
        <button
          className="complete-button"
          type="button"
          onClick={() => deleteTask(task.id)}
        >
          Complete
        </button>
      </div>
    </article>
  );
}

export default Assignment;
