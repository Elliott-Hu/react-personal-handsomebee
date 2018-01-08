import createReducer from "@utils/create-reducers";
import * as constants from "@constants";

let initialState = {
  messages: [],
  name: "",
  id: 0
};

let actionHandlers = {
  [constants.chat.CHAT_START]: (state, action) => {
    state.name = action.info.name;
    state.id = action.info.id;
    state.messages = action.info.messages;
    return state;
  },
  [constants.chat.SEND_MESSAGE]: (state, action) => {
    state.messages.push(action.message);
    return state;
  },
};

export default createReducer(initialState, actionHandlers);