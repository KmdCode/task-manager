import React from "react"
import ViewTasks from "./components/view-tasks/ViewTasks"
import CreateTask from "./components/create-task/CreateTask"
import { TaskProvider } from "./context/TaskContext"

const App = () => {
  
  return (
    <TaskProvider>
      {/* <CreateTask/> */}
      <ViewTasks/>
    </TaskProvider>
  )
}

export default App