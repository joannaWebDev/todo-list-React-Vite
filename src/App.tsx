import TaskList from './components/TaskList';
import AddTask from './components/AddTask';
import {TaskProvider} from './components/TaskContext';
import './App.css';

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  return (
    <div id="app">
      <header>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo"/>
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo"/>
        </a>
      </header>

      <main>
        <TaskProvider>
          <h1>ToDo List</h1>
          <div>
            <TaskList/>
            <AddTask/>
          </div>
        </TaskProvider>
      </main>
    </div>
  );
}

export default App;
