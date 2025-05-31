import React, {useState, useEffect} from "react";
import './viewTasks.css';

const ViewTasks = () => {{

    interface task{
        id: number,
        name: string
    }

    const [tasks, setTasks] = useState<task[]>([
        {
            id:1,
            name: "Task 1"
        },
        {
            id:2,
            name: "Task 2"
        },
        {
            id:3,
            name: "Task 3"
        },
        {
            id:4,
            name: "Task 4"
        },
        {
            id:5,
            name: "Task 3"
        },
        {
            id:6,
            name: "Task 6"
        }
    ])
    

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