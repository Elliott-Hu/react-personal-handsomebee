import * as constants from "@constants";

export const create = word => ({
  type: constants.todos.CREATE_TODO,
  word
});

export const remove = id => ({
  type: constants.todos.DELETE_TODO,
  id
});

export const toggleTodo = id => ({
  type: constants.todos.TOGGLE_TODO,
  id
});