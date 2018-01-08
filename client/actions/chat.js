import * as constants from "@constants";

export const chatStart = info => ({
  type: constants.chat.CHAT_START,
  info
});

export const sendMessage = message => ({
  type: constants.chat.SEND_MESSAGE,
  message
});