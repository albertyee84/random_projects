import React, { useState } from 'react';
import './App.css';
import { Header } from './components/header';

function App() {
  const [todos, setTodos] = useState({ '1': ['1', '2'], '2': ['3', '4'], '3': ['5', '6'], '4': ['7', '8'] })
  return (
    <div className="App">
      {renderColumnHeaders()}
    </div>
  );

  function renderColumnHeaders() {
    const headerValue = Object.keys(todos)
    return (
      headerValue.map(header => 
        <Header 
          key={Math.random()}
          header={header} 
          todos={todos}
          setTodos={setTodos}
          />
        )
    )
  }
}

export default App;
