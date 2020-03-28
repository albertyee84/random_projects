import React, { useState } from 'react';
import './App.css';
import { TodoContainer } from './components/TodoContainer';

function App() {
  const [todos, setTodos] = useState({
    1: [1, 2],
    2: [3, 4],
    3: [5, 6],
    4: [7, 8]
  })
  return (
    <div className="App">
      {renderTodoContainer()}
    </div>
  );

  function renderTodoContainer() {
    return (
      Object.keys(todos).map(header => 
        <TodoContainer
          key={Math.random()} 
          header={header} 
          setTodos={setTodos}
          todos={todos}
        />
      )
    )
  }
}

export default App;
