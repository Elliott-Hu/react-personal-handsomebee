import React from "react";
import PropTypes from "prop-types";

import MessageBubble from "./item-bubble";

export default class Messages extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { messages, my_id } = this.props;
    return (
      <div>
        { messages.map((item, index) => <MessageBubble key={ index } my_id={ my_id } message={ item } />) }
      </div>
    );
  }
}

Messages.propTypes = {
  messages: PropTypes.array,
  my_id: PropTypes.number
};