import React from 'react'
import { TodoItem } from './todoItem'


export const Todoheaders = ({ header, todos, list, setList }) => {
    return (
        <div className={`container${header}`}>
            <div className={`header${header}`}>
                {header}
            </div>
            {renderTodo()}
            <button onClick={addTodo}>Create Todo</button>
        </div>
    )

    function addTodo(e) {
        const newItem = window.prompt();
        const newList = {...list}
        newList[header].push(newItem);
        setList(newList)
        localStorage.setItem("todoList", JSON.stringify(newList));
    }

    function renderTodo() {
        return (
            todos.map(todo => 
                <TodoItem key={Math.random()} todo={todo}/>
            )
        )
    }
}
