import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import ViewTasks from "./components/view-tasks/ViewTasks"
import CreateTask from "./components/create-task/CreateTask"
import { TaskProvider } from "./context/TaskContext"

const App = () => {
  
  return (
    <TaskProvider>
      <Router>
        <Routes>
          <Route path="/" element={<ViewTasks/>}/>
          <Route path="/createTask" element={<CreateTask/>}/>
        </Routes>
      </Router>
    </TaskProvider>
  )
}

export default App