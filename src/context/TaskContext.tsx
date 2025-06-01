import React, {createContext, useContext, useState} from "react";
import type { ReactNode } from "react";

interface Task{
    id: number,
    name: string,
}

interface TaskContextType {
    tasks: Task[],
    addTask: (name: string) => void
}

const TaskContext = createContext<TaskContextType | undefined>(undefined);

export const TaskProvider = ({children}:{children:ReactNode}) =>{

    const [tasks, setTasks] = useState<Task[]>([]);
    
    const addTask = (name:string) =>{

        let newTask:Task;

        newTask = {
            id:Date.now(),
            name
        }
        setTasks(prev => [...prev, newTask]);
        
    }
    return(
        <TaskContext.Provider value = {{tasks, addTask}}>
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