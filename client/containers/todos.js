import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import * as actions from "@actions";
import * as helpers from "@utils/helpers";

//components
import TodosInput from "@components/todos/todo-input";
import TodosList from "@components/todos/list";

class TodoContainer extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
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
  render() {
    const { $store: { todos: { list } } } = this.props;

    return (<div>
      <TodosInput handleSubmit={ this.handleSubmit } />
      <TodosList 
        handleRemove={ this.handleRemove }
        handleToggle={ this.handleToggle }
        todos={ list } 
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


