import React, { useState } from 'react';
import './App.css';
import { Todos } from './components/Todos';

function App() {

  const initialTodos = { '1': ['1', '2'], '2': ['3', '4'], '3': ['5', '6'], '4': ['7', '8'] }

  const [todos, setTodos] = useState(initialTodos);

  const columnHeaders = Object.keys(todos);
  
  return (
    <div className="App">
      {renderColumns()}
    </div>
  );

  function renderColumns() {
    return (
      columnHeaders.map(header => 
      <Todos 
        header={header}
        key={Math.random()}
        todos={todos}
        setTodos={setTodos}
        />
      )
    )
  }
}

export default App;
