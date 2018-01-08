require("./chat.scss");

import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import io from "socket.io-client";

import * as actions from "@actions";
import * as helpers from "@utils/helpers";
import * as constants from "@constants";

//components
import ChatInt from "@components/chat/chat-init";
import ChatInput from "@components/chat/message-input";
import Messages from "@components/chat/messages";

class ChatContainer extends React.Component {
  constructor(props) {
    super(props);
    this.sendMessage = this.sendMessage.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    this.socket = io("http://localhost:6688", { path: "/ws" });
  }
  sendMessage(msg) {
    const { $store: { chat: { id } } } = this.props;
    console.log("client sendMessage", msg);
    this.socket.emit(constants.chat.CHAT_MESSAGE, { msg, id });
  }
  handleSubmit(name) {
    const { chat } = this.props;
    // 获取历史消息及个人信息
    this.socket.once(constants.chat.CHAT_GET_INDENTITY, info => {
      chat.chatStart(info);
      console.log("chat init: ", info);
    });
    // 监听消息
    this.socket.on(constants.chat.CHAT_MESSAGE, message => { 
      console.log("from server:", message);
      chat.sendMessage(message);
    });
    // 聊天启动
    this.socket.emit(constants.chat.CHAT_START, { name });
  }
  render() {
    const { $store: { chat: { messages, id } } } = this.props;
    return (
      <div className="container-chat">
        { id ? null : <ChatInt handleSubmit={ this.handleSubmit }/> }
        <Messages my_id={ id } messages={ messages } />
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