import { Button, FormControl, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import React from "react";

const AddTask = ({taskList,setTaskList,task, setTask}:any) => {
  const handleSubmit = (e:any) => {
     e.preventDefault();
     if(task.id) {
      const date = new Date()
      const updatedTaskList = taskList.map((todo) => (
        todo.id === task.id ? {id:task.id , name: task.name , date:`${date.toLocaleTimeString()}${date.toLocaleDateString()}`}:todo
        ))
      setTaskList(updatedTaskList)
      setTask({})
     } else {
      const date = new Date()
      const newTask = {
      id: date.getTime(),
      name: e.target.task.value,
      date:`${date.toLocaleTimeString()}${date.toLocaleDateString()}`
     }
     setTaskList([...taskList,newTask ])
     setTask({})
     }
  }
  return (
    <>
       <section>
        <form onSubmit={handleSubmit}>
          <label htmlFor="task"></label>
          <input name="task" type="text" value={task.name || ""} autoComplete="off" onChange={e => setTask({...task,name:e.target.value})} />
          <button className="btn btn-success">Add</button>
        </form>
       </section>
    </>
  );
};

export default AddTask;
