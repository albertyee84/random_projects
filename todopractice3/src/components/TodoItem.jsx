import React from 'react'

export const TodoItem = ({ todo }) => {
    return (
        <div className={`item${todo}`}>
            {todo}
        </div>
    )
}
