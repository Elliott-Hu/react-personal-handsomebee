import createReducer from "@utils/create-reducers";
import * as constants from "@constants";


let initialState = {
  word: "招财"
}

let actionHandlers = {
  [constants.hello.HELLO]: (state, action) => {
    state.word = state.word == "招财" ? "进宝" : "招财";
    return state;
  } 
}

export default createReducer(initialState, actionHandlers);