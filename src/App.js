import React from 'react';
import Tasks from "./components/Tasks"
import Title from "./components/Title"
import AddTask from "./components/AddTask"

import './App.css';


function App() {
  return (
    <div className="app">
      <Title />
      <Tasks />
      <AddTask />
    </div>
  );
}

export default App;
