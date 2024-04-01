import { Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import React from "react";

const AddTask = () => {
  return (
    <>
      <InputGroup size="md">
        <Input pr="4.5rem" placeholder="add task" />
        <InputRightElement width="4.5rem">
          <Button h="1.75rem" size="sm">
            ADD
          </Button>
        </InputRightElement>
      </InputGroup>
    </>
  );
};

export default AddTask;
