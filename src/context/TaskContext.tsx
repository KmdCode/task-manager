import React, {createContext, useContext, useState} from "react";
import type { ReactNode } from "react";

interface Task{
    id: number,
    name: string,
}

interface User {
    id:number,
    name: string,
    tasksAssigned: Task[]
}

interface TaskContextType {
    tasks: Task[],
    addTask: (name: string) => void,
    users: User [],
    addUser: (name: string) => void
}

const TaskContext = createContext<TaskContextType | undefined>(undefined);

export const TaskProvider = ({children}:{children:ReactNode}) =>{

    const [tasks, setTasks] = useState<Task[]>([]);
    const [users, setUsers] = useState<User[]>([]);
    
    const addTask = (name:string) =>{

        

        const newTask:Task = {
            id:Date.now(),
            name
        }

        if(!newTask) return;

        setTasks(prev => [...prev, newTask]);
        
    }

    const addUser = (name:string) => {
        

        const newUser: User = {
            id: Date.now(),
            name,
            tasksAssigned: []
        }

        setUsers(prev => [...prev, newUser])

    }

    return(
        <TaskContext.Provider value = {{tasks, users, addTask, addUser}}>
            {children}
        </TaskContext.Provider>
    )
}

export const useTaskContext = () => {
    const context = useContext(TaskContext);
    if (context === undefined) {
    throw new Error("useTaskContext must be used within a TaskProvider");
  }
    return context;
}