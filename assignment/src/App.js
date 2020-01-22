import React, { useReducer } from 'react';
import { initialState, reducer } from './reducers/reducer';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import './App.css';

function App () {
  const [state, dispatch] = useReducer(reducer, initialState); 
  console.log("This is state in App.js: ", state)

    return (
      <div className="App-header">
      <h2>Welcome to the Task Master</h2>
      <h3>Current Things You Must Do</h3>
      <TodoList todoList={state} dispatch={dispatch}/>
      <TodoForm dispatch={dispatch}/>
      </div>
    )
}

export default App;
