import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import * as actions from "@actions";
import * as constants from "@constants";
import * as helpers from "@utils/helpers";

import _filter from "lodash/filter";
import _reject from "lodash/reject";

//components
import TodosInput from "@components/todos/todo-input";
import TodosList from "@components/todos/list";
import TodosFilters from "@components/todos/filters";

class TodoContainer extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.handleFilter = this.handleFilter.bind(this);
  }
  handleSubmit(word) {
    const { todos } = this.props;
    todos.create(word);
  }
  handleRemove(id) {
    const { todos } = this.props;
    todos.remove(id);
  }
  handleToggle(id) {
    const { todos } = this.props;
    todos.toggleTodo(id);
  }
  handleFilter(type) {
    const { todos } = this.props;
    todos.filterTodos(type);
  }
  filterList() {
    const { $store: { todos: { list, filter_type } } } = this.props;
    switch (filter_type) {
      case constants.todos.SHOW_ALL:
        return list;
      case constants.todos.SHOW_COMPLETED:
        return _filter(list, "done");
      case constants.todos.SHOW_ACTIVE:
        return _reject(list, "done");
    }
  }
  render() {
    const { $store: { todos: { filter_type } } } = this.props;
    return (<div>
      <TodosInput handleSubmit={ this.handleSubmit } />
      <TodosFilters filter_type={ filter_type } handleFilter={ this.handleFilter } />
      <TodosList 
        handleRemove={ this.handleRemove }
        handleToggle={ this.handleToggle }
        todos={ this.filterList() }
      />
    </div>);
  }
}

TodoContainer.propTypes = {
  $store: PropTypes.object,
  todos: PropTypes.object
};

export default connect(
  state => ({ $store: { todos: state.todos } }),
  helpers.mapDispatchToProps({ todos: actions.todos })
)(TodoContainer);


