
import AddTask from "./components/AddTask"
import Header from "./components/Header"
import ShowTask from "./components/ShowTask"
import { useState } from "react"
import 'bootstrap/dist/css/bootstrap.css';
function App() {
   const[taskList, setTaskList] = useState([])
   const[task, setTask] = useState([])
  return (
    <>
        <Header></Header>
        <AddTask taskList={taskList} setTaskList={setTaskList}/>
        <ShowTask taskList={taskList} setTaskList={setTaskList}/>
    </>
      
  )
}

export default App
