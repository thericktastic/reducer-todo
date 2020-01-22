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
      return [
        ...state,
        {
          item: action.payload,
          completed: false,
          id: Date.now()
        }
      ];
    case "TOGGLE_COMPLETE":
      return state.map(todo => {
        // console.log("This is todo in reducers: ", todo);
        if (todo.id === action.payload) {
          return { ...todo, completed: !todo.completed };
        } else {
          return todo;
        }
      });
      case "CLEAR_COMPLETED":
          return (
              state.filter(todo => !todo.completed)
          )
    default:
      return state;
  }
};
