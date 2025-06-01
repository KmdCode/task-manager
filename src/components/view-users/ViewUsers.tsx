import React, {useState} from "react";
import './viewUsers.css';


const ViewUsers = () => {

    interface Task{
    id: number,
    name: string,
    }

    interface User {
        id:number,
        name: string,
        tasksAssigned: Task[]
    }

    const [users, setUsers] = useState<User[]>([
        {
            id: 1,
            name: "Karabo",
            tasksAssigned: [
                {
                    id: 1,
                    name: "Task 1"
                },
                {
                    id:2,
                    name: "Task 2"
                }
            ]
        },
        {
            id:2,
            name:"Modise",
            tasksAssigned: [
                {
                    id:3,
                    name: "Task 4"
                },
                 {
                    id:4,
                    name: "Task 5"
                }
            ]
        }
    ])

    return(
        <>
            <div id="header">
                <h1>Users</h1>
                
            </div>
            <div id="users-container">
                <div>
                    <button>Add New User</button>
                </div>
                <div id="users-list">
                        {users.map(user => (
                            <div key={user.id} id="user">
                                <h2>{user.name}</h2>
                                <h3>Assigned Tasks</h3>
                                <ul>
                                    {user.tasksAssigned.map(task => (
                                        <li key={task.id}>{task.name}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                </div>

            </div>
        </>
    )
}

export default ViewUsers;