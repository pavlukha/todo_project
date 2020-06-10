import React from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import VisibilityFilters from "./VisibilityFilters";
import { orange } from "@material-ui/core/colors";

const color = orange[300];

export default function TodoApp() {
  const setFilters = () => {};
  return (
    <div
      style={{
        width: "450px",
        height: "100%",
        flexDirection: "column",
        backgroundColor: color, // #FFBC40
        backgroundImage: "notepad.png",
        overflow: "hidden",
        boxShadow: "10px 5px 5px #B89E38",
      }}
    >
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        Todo List
      </h1>
      <AddTodo />
      <TodoList />
      <VisibilityFilters setFilters={setFilters} />
    </div>
  );
}
