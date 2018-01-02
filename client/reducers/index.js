import { combineReducers } from "redux";
import hello from "./hello";
import todos from "./todos";

const reducers = { hello, todos };


export default combineReducers(reducers);