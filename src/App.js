import React, { useEffect, useState } from 'react';
import { Divider, useToast, Icon } from '@chakra-ui/react';
import { BsGithub } from 'react-icons/bs';
import './App.css';
import TaskAdd from './components/TaskAdd';
import TaskDone from './components/TaskDone';
import TaskList from './components/TaskList';

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(window.localStorage.getItem('tasks')) || []
  );

  const toast = useToast();

  useEffect(() => {
    window.localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  function taskAdd(task) {
    setTasks([...tasks, { id: Date.now(), name: task, done: false }]);
    toast({
      title: 'Task added',
      description: 'The task has been added to the "task to do" list.',
      status: 'success',
      duration: 3000,
      isClosable: true,
    });
  }

  function taskDelete(task) {
    setTasks(tasks.filter((t) => t.id !== task.id));
    toast({
      title: 'Task deleted',
      description: 'The task has been deleted',
      status: 'success',
      duration: 3000,
      isClosable: true,
    });
  }

  function toggleTaskDone(task) {
    setTasks(
      tasks.map((t) => (t.id === task.id ? { ...t, done: !t.done } : t))
    );
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>ToDo List</h1>
      </header>
      <main className="App-main">
        <Divider />
        <h2>Tasks: {tasks.length}</h2>
        <Divider />
        <TaskAdd onTaskAdd={taskAdd}></TaskAdd>
        <TaskList
          tasks={tasks}
          onTaskAdd={taskAdd}
          onTaskDelete={taskDelete}
          onToggleTaskDone={toggleTaskDone}
        ></TaskList>
        <TaskDone
          tasks={tasks}
          onTaskAdd={taskAdd}
          onTaskDelete={taskDelete}
          onToggleTaskDone={toggleTaskDone}
        ></TaskDone>
      </main>
      <footer className="App-footer">
        <a href="https://github.com/mgmaxi">
          <p>Developed by Maximiliano Ghirardi </p>
          <Icon as={BsGithub} />
        </a>
      </footer>
    </div>
  );
}

export default App;

