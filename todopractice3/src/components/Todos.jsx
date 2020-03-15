import React from 'react'
import { TodoItem } from './TodoItem'


export const Todos = ({ header, todos, setTodos }) => {
    return (
        <div className="todocontainer">
            <div className={`header${header}`}>
                {header}
            </div>
            {renderTodos()}
            <button onClick={addTodo}>Add Todo</button>
        </div>
    )

    function addTodo() {
        const newTodo = window.prompt();
        const newTodoList = {...todos};
        newTodoList[header].push(newTodo);
        setTodos(newTodoList)
    }

    function renderTodos() {
        return (
            todos[header].map(todo => 
                <TodoItem key={Math.random()} todo={todo}/>
            )
        )
    }
}
