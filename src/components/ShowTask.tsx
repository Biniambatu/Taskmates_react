import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { Button, Card, CardBody, HStack, Text, VStack } from "@chakra-ui/react";

const ShowTask = ({ taskList, setTaskList }: any) => {
  const handleClear = () => {
    setTaskList([])
  }
  const handleEdit = (id:any) => {
     
  }
  const handleDelete = (id:any) => {
    const updatedTaskList = taskList.filter(todos => todos.id !== id );
    setTaskList(updatedTaskList)
  } 
  return (
    <>
      <div>
        <HStack>
          <Text>Todo</Text>
          <Text>{taskList.length}</Text>
          <HStack>
            <Button onClick={handleClear}>Clear All</Button>
          </HStack>
        </HStack>
      </div>

      <div className="card">
        {taskList.map((todo) => (
          <div className="card-body" key={todo.id}>
            <h5 className="card-title">{todo.name}</h5>
            <p className="card-text">{todo.date}</p>
            <HStack>
              <EditIcon color="blue" cursor='pointer' onClick={()=>handleEdit(todo.id)}></EditIcon>
              <DeleteIcon color="red" cursor='pointer' onClick={()=>handleDelete(todo.id)}></DeleteIcon>
            </HStack>
          </div>
        ))}
      </div>
    </>
  );
};

export default ShowTask;
