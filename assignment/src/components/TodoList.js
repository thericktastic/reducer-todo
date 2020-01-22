import React from "react";
import Todo from "./Todo";

const TodoList = props => {
  console.log("This is props.todoList: ", props.todoList);
  return (
    <div>
      {props.todoList.map(item => (
        <Todo todo={item} key={item.id} />
  ))}
    </div>
  );
};

export default TodoList;
