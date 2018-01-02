import React from "react";
import PropTypes from "prop-types";

import Todo from "./item-todo";

export default class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleToggle = this.handleToggle.bind(this); 
  }
  handleRemove(id) {
    const { handleRemove } = this.props;
    handleRemove(id);
  }
  handleToggle(id) {
    const { handleToggle } = this.props;
    handleToggle(id);
  }
  render() {
    return (
      <div>
        { this.props.todos.map(item => 
          <Todo 
            handleRemove={ this.handleRemove }
            handleToggle={ this.handleToggle }
            done={ item.done } 
            tip={ item.tip } 
            id={ item.id } 
            key={ item.id } 
          />
        ) }
      </div>
    );
  }
}

TodoList.propTypes = {
  todos: PropTypes.array,
  handleRemove: PropTypes.func,
  handleToggle: PropTypes.func
};