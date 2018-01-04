import { combineReducers } from "redux";
import hello from "./hello";
import todos from "./todos";
import chat from "./chat";

const reducers = { hello, todos, chat };


export default combineReducers(reducers);