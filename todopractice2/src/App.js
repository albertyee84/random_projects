import React, { useState } from 'react';
import './App.css';
import { Todoheaders } from './components/todoheaders';



function App() {
  const defList = { '1': ['1', '2'], '2': ['3', '4'], '3': ['5', '6'], '4': ['7', '8'] }
  const [list, setList] = useState(getLocalList() || defList)

  const headers = Object.keys(list);

  return (
    <div className="App">
      {renderHeaders()}
    </div>
  );

  function renderHeaders() {
    return (
      headers.map(header => 
        <Todoheaders 
          key={Math.random()}
          header={header}
          list={list}
          setList={setList}
          todos={list[header]}
        />
        )
    )
  }

  function getLocalList() {
    return JSON.parse(localStorage.getItem("todoList")) 
  }
}

export default App;
