import React from "react";
import { connect } from "react-redux";

const TodoList = ({ todos }) => (
  <ol>
    {" "}
    {Object.entries(todos.byIds).map((todo) => (
      <li
        style={{
          color: "#3E2D84",
          fontSize: "18px",
        }}
      >
        {todo[1].content}
      </li>
    ))}{" "}
  </ol>
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
