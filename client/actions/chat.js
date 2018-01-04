import * as constants from "@constants";

export const sendMessage = string => ({
  type: constants.chat.SEND_MESSAGE,
  string
});