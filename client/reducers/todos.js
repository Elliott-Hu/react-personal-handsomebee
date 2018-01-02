import createReducer from "@utils/create-reducers";
import * as constants from "@constants";

import _filter from "lodash/filter";

let initialState = {
  list: [],
};

let actionHandlers = {
  [constants.todos.CREATE_TODO]: (state, action) => {
    if (!action.word.trim()) return state;
    state.list.push({ tip: action.word, id: new Date().getTime(), done: false });
    return state;
  },
  [constants.todos.DELETE_TODO]: (state, action) => {
    console.log(state);
    state.list = _filter(state.list, item => item.id != action.id);
    return state;
  },
  [constants.todos.TOGGLE_TODO]: (state, aciton) => {
    console.log(state, aciton);
    return state;
  }
};

export default createReducer(initialState, actionHandlers);