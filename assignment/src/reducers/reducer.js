import { useReducer } from "react";

export const initialState = [
  {
    item: "Learn about reducers",
    completed: false,
    id: 3892987589
  },
  {
    item: "Secure the iron throne",
    completed: false,
    id: 3892987590
  },
  {
    item: "Take over the world",
    completed: false,
    id: 3892987591
  }
];

export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: state.todos.map()
      };
      default: 
      return state;
  }
};
