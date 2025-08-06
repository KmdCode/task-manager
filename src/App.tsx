import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import ViewTasks from "./components/view-tasks/ViewTasks"
import CreateTask from "./components/create-task/CreateTask"
import { TaskProvder } from "./context/TaskContext"

const App = () => {
  
  return (
    <TaskProvider>
      <Router>
        <Routes>
          <Route path="/" elemet={<ViewTasks/>}/>
          <Route path="/createTask" ement={<CreateTask/>}/>
        </Routes>
      </Router>
    </TaskProvider>
  )
}

export default App