import type { Task } from "../models/task";

export const fetchTasks = async (setTasks: React.Dispatch<React.SetStateAction<Task[]>>) => {
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

export const createTask = async (newTask: Task, setTasks: React.Dispatch<React.SetStateAction<Task[]>>) => {
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

export const deleteTask = async (taskId: string, setTasks: React.Dispatch<React.SetStateAction<Task[]>>) => {
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