import { useEffect, useRef, useState } from "react";

import type { Profile } from "../models/profile";
import type { Task } from "../models/task";

import TaskList from "./TaskList";
import AddTask from "./AddTask";

import Dialog from "./shared/Dialog";

import "./task-container.css";

function TaskContainer(profile: Profile) {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch("/api/tasks");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setTasks([...data.tasks]);
      } catch (error) {
        console.error(error);
      }
    };

    fetchTasks();
  }, []);

  const createTask = async (newTask: Task) => {
    try {
      const response = await fetch("/api/tasks/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTask),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();

      setTasks((prevTasks) => [...prevTasks, data.task]);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteTask = async (taskId: string) => {
    try {
      const response = await fetch(
        `/api/tasks/${taskId}/`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ id: taskId }),
        },
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();

      setTasks((prevTasks) => prevTasks.filter((task) => task.id !== data.id));
    } catch (error) {
      console.error(error);
    }
  };

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
      <TaskList id={profile.id} tasks={tasks} deleteTask={deleteTask} />
      <Dialog ref={dialogRef}>
        <AddTask
          closeDialog={closeDialog}
          id={profile.id}
          createTask={createTask}
          length={tasks.length}
        />
      </Dialog>
    </section>
  );
}

export default TaskContainer;
