import './App.css';
import TaskAdd from './components/TaskAdd';
import TaskDone from './components/TaskDone';
import TaskList from './components/TaskList';

function App() {
  return (
    <div className="App">
      <header></header>
      <main className="App-main">
        <TaskAdd></TaskAdd>
        <TaskList></TaskList>
        <TaskDone></TaskDone>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;

