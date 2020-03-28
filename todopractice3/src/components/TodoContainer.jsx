import React from 'react'
import { TodoItem } from './TodoItem'

export const TodoContainer = ({ header, setTodos, todos }) => {

    return (
        <div className={`container${header}`}>
            <div className="header">
                {header}
            </div>
            {renderTodoItem()}
            <button onClick={addNewTodo}>Create new Todo</button>
        </div>
    )

    function renderTodoItem() {
        return (
            todos[header].map(item => 
            <TodoItem 
                item={item}
                key={Math.random()}
                todos={todos}
                setTodos={setTodos}
                header={header}
            />
            )
        )
    }

    function addNewTodo() {
        const newTodoItem = window.prompt();
        const newTodos = {...todos};
        newTodos[header].push(newTodoItem);
        setTodos(newTodos)
    }
    
}