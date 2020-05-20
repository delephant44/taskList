import React from 'react';
import Tasks from "./components/Tasks"
import Title from "./components/Title"

import './App.css';


function App() {
  return (
    <div className="app">
      <Title />
      <Tasks />
    </div>
  );
}

export default App;
