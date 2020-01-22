import React from 'react';

const Todo = props => {
    const handleClick = () => {
        console.log("This is props.todo.key in Todo.js: ", props.todo.id)
        props.dispatch({
            type: "TOGGLE_COMPLETE",
            payload: props.todo.id
        })
    }

    console.log("This is props.todo.completed: ", props.todo.completed)

    return (
        <div className={`item${props.todo.completed ? ' completed' : ''}`}>
        <p onClick={handleClick}>{props.todo.item}</p>
        </div>
    )
}

export default Todo;