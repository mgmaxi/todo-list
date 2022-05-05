import React from 'react';

const TaskDone = ({ tasks, onTaskDelete, onToggleTaskDone }) => {
  return (
    <>
      <h2>Task done: {tasks.filter((task) => task.done === true).length}</h2>
      <ul>
        {tasks.map((task) =>
          task.done === true ? (
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

export default TaskDone;
