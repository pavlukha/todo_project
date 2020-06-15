import React from "react";
// import ReactDOM from "react-dom";
import { createStore } from "redux";
import rootReducer from "./reducers/reducer";

import { Provider } from "react-redux";
import store from "./store/store";

import TodoApp from "./components/TodoApp";

class StoreFinale extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <TodoApp />
      </Provider>
    );
  }
}

export default StoreFinale;
