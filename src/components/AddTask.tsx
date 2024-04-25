import { Button, FormControl, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import React from "react";

const AddTask = ({taskList,setTaskList,task, setTask}:any) => {
  const handleSubmit = (e:any) => {
     e.preventDefault();
     const date = new Date()
     const newTask = {
      id: date.getTime(),
      name: e.target.task.value,
      date:`${date.toLocaleTimeString()}${date.toLocaleDateString()}`
     }
     setTaskList([...taskList,newTask ])
  }
  return (
    <>
       <section>
        <form onSubmit={handleSubmit}>
          <label htmlFor="task"></label>
          <input name="task" type="text" autoComplete="off"  />
          <button className="btn btn-success">Add</button>
        </form>
       </section>
    </>
  );
};

export default AddTask;
