require("./item-bubble.scss");

import React from "react";
import PropTypes from "prop-types";

import cx from "classnames";
import * as constants from "@constants";

export default class MessageBubble extends React.Component {
  constructor(props) {
    super(props);
  }
  renderSystemMessage() {
    const { desc } = this.props.message;
    return <div className="message-bubble-system"><div className="username">聊天助手</div><div className="message-desc">{ desc }</div></div>;
  }
  renderMessage() {
    const { message: { desc, name, id }, my_id } = this.props;
    let className = cx({
      "message-bubble-normal": true,
      "is-mine": my_id == id
    });
    return <div className={ className }><div className="username">{ name }</div><div className="message-desc">{ desc }</div></div>;
  }
  mapMessage() {
    switch (this.props.message.type) {
      case constants.chat.MSG_TYPE_SYSTEM:
        return this.renderSystemMessage();
      case constants.chat.MSG_TYPE_NORMAL:
        return this.renderMessage();
      default:
        return (<div>暂不支持查看此消息</div>);
    }
  }
  render() {
    return (
      <div className="message-wrapper">
        { this.mapMessage() }
      </div>
    );
  }
}

MessageBubble.propTypes = {
  message: PropTypes.object.isRequired,
  my_id: PropTypes.number
};