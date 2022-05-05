import React from 'react';

const TaskList = ({ tasks }) => {
  return (
    <>
      <ul>
        {tasks.map((task) => (
          <div key={task.id}>
            <li>{task.name}</li>
          </div>
        ))}
      </ul>
    </>
  );
};

export default TaskList;
