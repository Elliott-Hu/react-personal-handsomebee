require("./chat-init.scss");

import React from "react";
import PropTypes from "prop-types";

export default class ChatInt extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };

    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }
  handleOnChange(e) {
    this.setState({ name: e.target.value });
  }
  handleOnSubmit(e) {
    e.preventDefault();

    const { handleSubmit } = this.props;
    handleSubmit(this.state.name, e);
  }
  render() {
    return (
      <form className="chat-init" onSubmit={ this.handleOnSubmit }>
        <input type="input" placeholder="请输入名字，按回车键加入聊天吧~" onChange={ this.handleOnChange } value={ this.state.name } />
      </form>
    );
  }
}

ChatInt.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};