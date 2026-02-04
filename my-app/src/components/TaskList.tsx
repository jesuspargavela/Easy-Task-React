import "./task-list.css";

import Assignment from "./Assignment";

function TaskList({
  id,
  tasks,
  deleteTask,
}: {
  id: string;
  tasks: Array<{
    id: string;
    userId: string;
    title: string;
    summary: string;
    dueDate: string;
  }>;
  deleteTask: (taskId: string) => void;
}) {
  const filteredTasks = tasks.filter((task) => task.userId === id);

  return (
    <>
      <ul className="task-list">
        {filteredTasks.map((task) => (
          <li key={task.id}>
            <Assignment task={task} deleteTask={deleteTask} />
          </li>
        ))}
      </ul>
    </>
  );
}

export default TaskList;
