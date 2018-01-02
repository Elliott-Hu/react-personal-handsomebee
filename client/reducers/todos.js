import createReducer from "@utils/create-reducers";
import * as constants from "@constants";

let initialState = {
  list: [],
}

let actionHandlers = {
  [constants.todos.CREATE_TODO]: (state, action) => {
    if (!action.word.trim()) return state;
    state.list.push({ tip: action.word, id: new Date().getTime() })
    return state;
  }
}

export default createReducer(initialState, actionHandlers);