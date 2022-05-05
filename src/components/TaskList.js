import React from 'react';

const TaskList = ({ tasks, onTaskDelete, onToggleTaskDone }) => {
  return (
    <>
      <ul>
        {tasks.map((task) => (
          <div key={task.id}>
            <li>{task.name}</li>
            <input type="checkbox" onChange={() => onToggleTaskDone(task)} />
            <button onClick={() => onTaskDelete(task)}>Delete</button>
          </div>
        ))}
      </ul>
    </>
  );
};

export default TaskList;
