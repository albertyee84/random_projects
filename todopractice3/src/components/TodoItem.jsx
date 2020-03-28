import React from 'react'

export const TodoItem = ({ item, todos, setTodos, header }) => {
    return (
        <div className={`item${item}`}>
            <button onClick={()=> move('left')}>{`<<`}</button>
            {item}
            <button onClick={() => move('right')}>{`>>`}</button>
        </div>
    )

    function move(dir) {
        let newTodos = {...todos}
        newTodos[header] = newTodos[header].filter(el => el !== item)
        header = parseInt(header)
        if (dir === 'left' && header > 1) {
            header -= 1
        } else if(dir === "right" && header < 4) {
            header += 1
        }
        newTodos[header].push(item);
        setTodos(newTodos)
    }
}
