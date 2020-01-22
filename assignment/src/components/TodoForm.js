import React from 'react';
import { reducer } from '../reducers/reducer';

const TodoForm = props => {
    return (
        <form>
        <input type="text" name="todo" value="" />
        <button>ADD TO LIST</button>
        </form>
    )
}

export default TodoForm;