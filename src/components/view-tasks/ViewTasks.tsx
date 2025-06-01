import React, {useState, useEffect} from "react";
import { useTaskContext } from "../../context/TaskContext";
import { useNavigate } from "react-router-dom";
import './viewTasks.css';
import ViewUsers from "../view-users/ViewUsers";

const ViewTasks = () => {{

    const {tasks} = useTaskContext();
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/createTask");
    }

    return(
        <>
            <div id="header">
                <h1>Task Manager</h1>
            </div>
            <div id="allTasks">
                <div id="task-header"> 
                    <h2>Available Tasks</h2>
                    <button id="add-task" onClick={handleClick}>Add task</button>
                </div>
                <ul id="taskList">
                    {tasks.map(task => (
                        <li key={task.id}>{task.name}</li>
                    ))}
                </ul>
            </div>
            <div id="users">
                <ViewUsers/>
            </div>
        </>
    )
}}

export default ViewTasks;