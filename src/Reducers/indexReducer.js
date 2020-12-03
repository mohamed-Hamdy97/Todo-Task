//if there is more than one reducdr

import { combineReducers } from "redux";
import todosList from "./todosList";

export default combineReducers({
    todos: todosList,
})