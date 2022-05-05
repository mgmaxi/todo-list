import React from 'react';
import { Input, useToast } from '@chakra-ui/react';

const TaskAdd = ({ onTaskAdd }) => {
  const toast = useToast();

  function handleSubmit(event) {
    event.preventDefault();

    if (!event.target.elements.name.value) {
      toast({
        title: 'Task add fail!',
        description: "The field can't be empty",
        status: 'warning',
        duration: 3000,
        isClosable: true,
      });
    } else {
      onTaskAdd(event.target.elements.name.value);
      event.target.reset();
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Input
          id="name"
          variant="flushed"
          placeholder="Write a task.."
          className="taskInput"
        />
        <button type="submit" className="add-btn">
          Add Task
        </button>
      </form>
    </>
  );
};

export default TaskAdd;
