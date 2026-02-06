import type { Task } from "../models/task";

import { deleteTask } from "../services/task.service";

import { formatDate } from "../utils/formatDate";

import "./assignment.css";

function Assignment({
  task,
  setTasks
}: {
  task: Task;
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
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
          onClick={() => deleteTask(task.id, setTasks)}
        >
          Complete
        </button>
      </div>
    </article>
  );
}

export default Assignment;
