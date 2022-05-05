import React from 'react';

const TaskList = ({ tasks, onTaskDelete }) => {
  return (
    <>
      <ul>
        {tasks.map((task) => (
          <div key={task.id}>
            <li>{task.name}</li>
            <button onClick={() => onTaskDelete(task)}>Delete</button>
          </div>
        ))}
      </ul>
    </>
  );
};

export default TaskList;
