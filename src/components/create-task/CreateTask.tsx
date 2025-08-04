import React, { useState } from "react";
import { useTaskContext } from "../../context/TaskContext";
import './createTask.css'

const CreateTask = () => {


    const {tasks, addTask} = useTaskContext();

    const [taskName, setTaskName] = useState<string>("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newTask = e.target.value;
        setTaskName(newTask);
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        addTask(taskName);
        console.log(tasks)
        setTaskName("");
    }


    return(
        <>
            <div>
                <h1 id="header">Task Manager</h1>
            </div>
            <div id="task-form">
            <div id="new-task">
                <h2>Create new task</h2>
                <form onSubmit={handleSubmit}>
                <input name="name" placeholder="Enter Task Name" onChange={handleChange}/><br />
                <button id="create-task" >Create Task</button>
                </form>
            </div>
            </div>
        </>
    )
}

export default CreateTask;