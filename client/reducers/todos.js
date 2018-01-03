import createReducer from "@utils/create-reducers";
import * as constants from "@constants";

import _filter from "lodash/filter";
import _findIndex from "lodash/findIndex";
import _includes from "lodash/includes";

let initialState = {
  list: [],
  filter_type: constants.todos.SHOW_ALL
};

let actionHandlers = {
  [constants.todos.CREATE_TODO]: (state, action) => {
    if (!action.word.trim()) return state;
    state.list.push({ tip: action.word, id: new Date().getTime(), done: false });
    return state;
  },
  [constants.todos.DELETE_TODO]: (state, action) => {
    state.list = _filter(state.list, item => item.id != action.id);
    return state;
  },
  [constants.todos.TOGGLE_TODO]: (state, action) => {
    let idx = _findIndex(state.list, item => item.id == action.id);
    state.list[idx].done = !state.list[idx].done;
    return state;
  },
  [constants.todos.FILTER_TODOS]: (state, action) => {
    const validator = [
      constants.todos.SHOW_ALL,
      constants.todos.SHOW_COMPLETED,
      constants.todos.SHOW_ACTIVE
    ];
    if(!_includes(validator, action.filter_type)) return state;
    state.filter_type = action.filter_type;
    return state;
  }
};

export default createReducer(initialState, actionHandlers);