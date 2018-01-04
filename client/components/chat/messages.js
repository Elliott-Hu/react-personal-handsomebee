import React from "react";
import PropTypes from "prop-types";

export default class Messages extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { messages } = this.props;
    return (
      <div>
        { messages.map((item, index) => <div key={ index }>{ item }</div>) }
      </div>
    );
  }
}

Messages.propTypes = {
  messages: PropTypes.array
};