import React, { useState, useReducer } from 'react';
import { initialState, reducer } from './reducers/reducer';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import './App.css';

function App () {
  const [state, dispatch] = useReducer(reducer, initialState); 
  console.log("This is state in App.js: ", state)

    return (
      <div>
      <h2>Welcome to the Task Master</h2>
      <h3>Current Things You Must Do</h3>
      <TodoList todoList={state}/>
      <TodoForm />
      </div>
    )
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
