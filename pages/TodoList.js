import React from "react";
import { connect } from "react-redux";
import AddTodo from "./AddTodo";

const TodoList = ({ todos }) => (
  <ul>
    {" "}
    {Object.entries(todos.byIds).map((todo) => (
      <li> {todo[1].content} </li>
    ))}{" "}
  </ul>
);

const mapStateToProps = (state) => {
  const { todos } = state;
  console.log(state);
  // const todos = getTodosByVisibilityFilter(state, visibilityFilter);
  return {
    todos,
  };
};

export default connect(mapStateToProps)(TodoList);
// export default TodoList;
