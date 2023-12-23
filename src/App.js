// App.js
import React from 'react';
import TaskList from './TaskList';
import TaskForm from './TaskForm';
import './App.css';

function App() {
  return (
    <div>
      <TaskForm />
      <TaskList />
    </div>
  );
}

export default App;
