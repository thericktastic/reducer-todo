import React, { useState } from 'react';

const TodoForm = props => {
    const [state, setState] = useState()
    
    const handleChanges = e => {
        setState(e.target.value)
    }

    const addTodo = e => {
        e.preventDefault();
        props.dispatch({ type: "ADD_TODO", payload: state });
        setState('');
    }

    const clearCompleted = e => {
        e.preventDefault();
        props.dispatch({ type: "CLEAR_COMPLETED", payload: state })
    }

    return (
        <form>
        <input type="text" name="todo" value={state} onChange={handleChanges}/>
        <button onClick={addTodo}>ADD TO LIST</button>
        <button onClick={clearCompleted}>CLEAR</button>
        </form>
    )
}

export default TodoForm;