import React, { useEffect, useState } from 'react';
import './App.css';
import TaskAdd from './components/TaskAdd';
import TaskDone from './components/TaskDone';
import TaskList from './components/TaskList';

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      name: 'Task',
      done: false,
    },
    {
      id: 2,
      name: 'Task',
      done: false,
    },
    {
      id: 3,
      name: 'Task',
      done: false,
    },
  ]);

  function taskAdd(task) {
    setTasks([...tasks, { id: Date.now(), name: task, done: false }]);
  }

  return (
    <div className="App">
      <header></header>
      <main className="App-main">
        <TaskAdd onTaskAdd={taskAdd}></TaskAdd>
        <TaskList tasks={tasks} onTaskAdd={taskAdd}></TaskList>
        <TaskDone></TaskDone>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;

