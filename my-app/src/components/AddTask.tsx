import { useState } from "react";

import "./add-task.css";

import type { Task } from "../models/task";

function AddTask({
  closeDialog,
  id,
  createTask,
  length,
}: {
  closeDialog: () => void;
  id: string;
  createTask: (task: Task) => void;
  length: number;
}) {
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [dueDate, setDueDate] = useState("");

  const submitHandler = (event: React.SubmitEvent) => {
    event.preventDefault();

    const newTask = {
      id: `${id}-${length + 1}`,
      userId: id,
      title,
      summary,
      dueDate,
    };

    createTask(newTask);

    event.target.reset();

    closeDialog();
  };

  return (
    <div className="add-task-container">
      <div className="add-task-container_header">
        <h1>Add Task</h1>
      </div>
      <form onSubmit={submitHandler}>
        <div className="add-task-container_content">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <label htmlFor="summary">Summary:</label>
          <textarea
            id="summary"
            name="summary"
            rows={5}
            onChange={(e) => setSummary(e.target.value)}
            required
          />
          <label htmlFor="dueDate">Due Date:</label>
          <input
            type="date"
            id="dueDate"
            name="dueDate"
            onChange={(e) => setDueDate(e.target.value)}
            required
          />
        </div>
        <div className="add-task-container_actions">
          <button className="cancel-button" type="button" onClick={closeDialog}>
            Cancel
          </button>
          <button type="submit">Create</button>
        </div>
      </form>
    </div>
  );
}

export default AddTask;
