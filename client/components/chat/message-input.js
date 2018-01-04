require("./message-input.scss");

import React from "react";
import PropTypes from "prop-types";

export default class MessageInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ""
    };

    this.handleOnSubmit = this.handleOnSubmit.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
  }
  handleOnSubmit(e) {
    e.preventDefault();
    if (!this.state.message.trim()) return;
    let { handleSend } = this.props;
    handleSend(this.state.message);
    this.setState({ message: "" });
  }
  handleOnChange(e) {
    this.setState({ message: e.target.value });
  }
  render() {
    return (<form className="message-input" onSubmit={ this.handleOnSubmit }>
      <input type="input" placeholder="说点什么吧~" onChange={ this.handleOnChange } value={ this.state.message }/>
      <button type="submit">发送</button>
    </form>);
  }
}

MessageInput.propTypes = {
  handleSend: PropTypes.func
};