require("./chat.scss");

import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import io from "socket.io-client";

import * as actions from "@actions";
import * as helpers from "@utils/helpers";

//components
import ChatInput from "@components/chat/message-input";
import Messages from "@components/chat/messages";

class ChatContainer extends React.Component {
  constructor(props) {
    super(props);
    this.sendMessage = this.sendMessage.bind(this);
  }
  componentDidMount() {
    const { chat } = this.props;
    this.socket = io("http://localhost:6688");
    this.socket.on("chat message", message => { 
      chat.sendMessage(`from server: ${message}`);
    });
  }
  sendMessage(message) {
    // const { chat } = this.props;
    // chat.sendMessage(message);
    console.log("client sendMessage", message);
    this.socket.emit("chat message", message);
  }
  render() {
    const { $store: { chat: { messages } } } = this.props;
    return (
      <div className="container-chat">
        <Messages messages={ messages } />
        <ChatInput handleSend={ this.sendMessage } />
      </div>
    );  
  }
}

ChatContainer.propTypes = {
  chat: PropTypes.object,
  $store: PropTypes.object
};

export default connect(
  state => ({ $store: { chat: state.chat } }),
  helpers.mapDispatchToProps({ chat: actions.chat })
)(ChatContainer);