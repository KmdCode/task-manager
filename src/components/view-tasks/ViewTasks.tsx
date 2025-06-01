import React, {useState, useEffect} from "react";
import { useTaskContext } from "../../context/TaskContext";
import './viewTasks.css';

const ViewTasks = () => {{

    const {tasks} = useTaskContext();

    return(
        <>
            <div id="header">
                <h1>Task Manager</h1>
            </div>
            <div id="allTasks">
                <div id="task-header"> 
                    <h2>Available Tasks</h2>
                    <button id="add-task">Add task</button>
                </div>
                <ul id="taskList">
                    {tasks.map(task => (
                        <li key={task.id}>{task.name}</li>
                    ))}
                </ul>
            </div>
        </>
    )
}}

export default ViewTasks;