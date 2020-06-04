import { combineReducers } from "redux";
import visibilityFilter from "./VisibilityFilters";
import todos from "./todos";

export default combineReducers({ todos, visibilityFilter });
