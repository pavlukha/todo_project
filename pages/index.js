import React from "react";
// import ReactDOM from "react-dom";
import { createStore } from "redux";
import rootReducer from "./reducer";

import { Provider } from "react-redux";
import store from "./store";

import TodoApp from "./TodoApp";

// const rootElement = document.getElementById("root");
class StoreFinale extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <TodoApp />
      </Provider>
    );
  }
  // rootElement
}

export default StoreFinale;
