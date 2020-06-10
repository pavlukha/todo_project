import React from "react";
import { connect } from "react-redux";
import { toggleTodo } from "../constants/actions";
import { VISIBILITY_FILTERS } from "../constants/constants";

const TodoList = ({ todoList, toggleTodo, visibilityFilter }) => {
  const newArray3 = todoList.filter((todo) => {
    switch (visibilityFilter) {
      case VISIBILITY_FILTERS.COMPLETED:
        return todo.completed;
      case VISIBILITY_FILTERS.INCOMPLETE:
        return !todo.completed;
      case VISIBILITY_FILTERS.ALL:
      default:
        return todo;
    }
  });
  return (
    <ol>
      {newArray3.length !== 0 &&
        newArray3.map((el, ind) => (
          <li
            key={ind}
            onClick={() => toggleTodo(el.id)}
            style={{
              textDecoration: el.completed ? "line-through" : "none",
              cursor: "pointer",
            }}
          >
            {el.text}
          </li>
        ))}
    </ol>
  );
};

const mapStateToProps = (state) => {
  const { todos, visibilityFilter } = state;
  console.log(state);
  // const todos = getTodosByVisibilityFilter(state, visibilityFilter);
  return {
    todoList: todos.todoList,
    todos,
    visibilityFilter,
  };
};

const mapDispatchToProps = (dispatch) => ({
  toggleTodo: (id) => dispatch(toggleTodo(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
// export default TodoList;
