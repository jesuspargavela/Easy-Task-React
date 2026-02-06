import { useEffect, useRef, useState } from "react";

import type { Profile } from "../models/profile";
import type { Task } from "../models/task";

import TaskList from "./TaskList";
import AddTask from "./AddTask";

import Dialog from "./shared/Dialog";

import "./task-container.css";

import { fetchTasks } from "../services/task.service";

function TaskContainer(profile: Profile) {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    fetchTasks(setTasks);
  }, []);

  const dialogRef = useRef<HTMLDialogElement>(null);

  const openDialog = () => {
    dialogRef.current?.showModal();
  };

  const closeDialog = () => {
    if (!dialogRef.current?.open) return;
    dialogRef.current?.close();
  };

  return (
    <section className="task-container">
      <article className="task-container_header">
        <h2>{`${profile.name}'s Tasks`}</h2>
        <button type="button" onClick={openDialog}>
          Add Task
        </button>
      </article>
      <TaskList id={profile.id} tasks={tasks} setTasks={setTasks} />
      <Dialog ref={dialogRef}>
        <AddTask
          closeDialog={closeDialog}
          id={profile.id}
          setTasks={setTasks}
          length={tasks.length}
        />
      </Dialog>
    </section>
  );
}

export default TaskContainer;
