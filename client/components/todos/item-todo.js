require("./item-todo.scss");

import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

export default class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.handleClickRemove = this.handleClickRemove.bind(this);
    this.handleClickToggle = this.handleClickToggle.bind(this);
  }
  handleClickRemove(e) {
    e.stopPropagation();
    const { id, handleRemove } = this.props;
    handleRemove(id);
  }
  handleClickToggle() {
    const { id, handleToggle } = this.props;
    handleToggle(id);
  }
  render() {
    const { tip, done } = this.props;
    const className = cx({
      "item-todo": true,
      "is-done": done
    });
    return (
      <div className={ className } onClick={ this.handleClickToggle }>
        <p>{ tip }</p>
        <a onClick={ this.handleClickRemove }>x</a>
      </div>
    );
  }
}

Todo.propTypes = {
  tip: PropTypes.string,
  id: PropTypes.number,
  done: PropTypes.bool,
  handleRemove: PropTypes.func,
  handleToggle: PropTypes.func
};