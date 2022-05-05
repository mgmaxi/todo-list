import React from 'react';

const TaskAdd = ({ onTaskAdd }) => {
  function handleSubmit(event) {
    event.preventDefault();
    onTaskAdd(event.target.elements.name.value);
    event.target.reset();
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Write a task</label>
        <input id="name" type="text" />
        <button type="submit">Add Task</button>
      </form>
    </>
  );
};

export default TaskAdd;
