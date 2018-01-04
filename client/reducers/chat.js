import createReducer from "@utils/create-reducers";
import * as constants from "@constants";

let initialState = {
  messages: []
};

let actionHandlers = {
  [constants.chat.SEND_MESSAGE]: (state, action) => {
    state.messages.push(action.string);
    return state;
  },
};

export default createReducer(initialState, actionHandlers);