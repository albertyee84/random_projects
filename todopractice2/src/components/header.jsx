import React from 'react'
import { Todos } from './Todos';

export const Header = ({ header, todos, setTodos }) => {
    return (
        <div className={`header`}>
            <div className={`headerElement${header}`}>
                {header}
            </div>
            {renderTodos()}
            <button onClick={addTodo}>Create Todo Item</button>
        </div>
    )

    function addTodo() {
        const newItem = window.prompt()
        const newTodos = {...todos}
        newTodos[header].push(newItem)
        setTodos(newTodos)
    }

    function renderTodos() {
        const currentTodos = todos[header];
        return currentTodos.map(todo => <Todos key={Math.random()} todo={todo}/>)
    }
}
