import React from "react";
import { connect } from "react-redux";
import * as constants from "@constants";
import * as actions from "@actions";
import * as helpers from "@utils/helpers";

//components
import TodosInput from "@components/todos/todo-input";
import TodosList from "@components/todos/list";

class TodoContainer extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(word) {
    const { todos } = this.props;
    todos.create(word);
  }
  render() {
    const { $store: { todos: { list } } } = this.props;

    return (<div>
      <TodosInput handleSubmit={ this.handleSubmit } />
      <TodosList todos={ list } />
    </div>)
  }
}

export default connect(
  state => ({ $store: { todos: state.todos } }),
  helpers.mapDispatchToProps({ todos: actions.todos })
)(TodoContainer)