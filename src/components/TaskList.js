import React from 'react';

const TaskList = ({ tasks, onTaskDelete, onToggleTaskDone }) => {
  return (
    <>
      <h2>Tasks to do: {tasks.filter((task) => task.done === false).length}</h2>
      <ul>
        {tasks.map((task) =>
          task.done === false ? (
            <div key={task.id}>
              <li>{task.name}</li>
              <input type="checkbox" onChange={() => onToggleTaskDone(task)} />
              <button onClick={() => onTaskDelete(task)}>Delete</button>
            </div>
          ) : (
            ''
          )
        )}
      </ul>
    </>
  );
};

export default TaskList;
