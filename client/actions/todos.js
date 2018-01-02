import * as constants from "@constants";

export const create = word => ({
  type: constants.todos.CREATE_TODO,
  word
})