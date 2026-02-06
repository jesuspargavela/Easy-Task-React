import "./task-list.css";

import Assignment from "./Assignment";

import type { Task } from "../models/task";

function TaskList({
  id,
  tasks,
  setTasks,
}: {
  id: string;
  tasks: Array<{
    id: string;
    userId: string;
    title: string;
    summary: string;
    dueDate: string;
  }>;
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}) {
  const filteredTasks = tasks.filter((task) => task.userId === id);

  return (
    <>
      <ul className="task-list">
        {filteredTasks.map((task) => (
          <li key={task.id}>
            <Assignment task={task} setTasks={setTasks} />
          </li>
        ))}
      </ul>
    </>
  );
}

export default TaskList;
