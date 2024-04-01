import { DeleteIcon } from "@chakra-ui/icons";
import { Button, Card, CardBody, HStack, Text, VStack } from "@chakra-ui/react";
import React from "react";
DeleteIcon
const ShowTask = () => {
  const taskAdd = [
    {id: 1, name: 'Task 1', date: "10:14 PM 3/31/2024"},
    {id: 1, name: 'Task 2', date: "13:54 PM 4/31/2024"},
    {id: 1, name: 'Task 3', date: "8:23 PM 3/31/2024"}
  ]
  return (
    <>
      <div>
        <HStack>
          <Text>Todo</Text>
          <Text>0</Text>
          <HStack >
            <Button>Clear All</Button>
          </HStack>
        </HStack>
      </div>
      <div>
        <Card> 
          {taskAdd.map((task)=>(<CardBody>
            <VStack>
              <Text>{task.name}</Text>
              <Text>{task.date}</Text>
              <DeleteIcon></DeleteIcon>
            </VStack>
          </CardBody>))}
          
        </Card>
      </div>
    </>
  );
};

export default ShowTask;
