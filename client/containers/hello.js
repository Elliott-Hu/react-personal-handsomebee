require("./hello.scss");

import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import * as actions from "@actions";
import * as helpers from "@utils/helpers";

class HelloContainer extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.props.hello.hello();
  }
  render() {
    let { $store: { hello: { word } } } = this.props;
    return <div className="demo-click" onClick={ this.handleClick }>this is todo app! @@ handsomeBee { word }</div>;
  }
}

export default connect(
  state => ({ $store: { hello: state.hello } }),
  helpers.mapDispatchToProps({ hello: actions.hello })
)(HelloContainer);

HelloContainer.propTypes = {
  hello: PropTypes.object,
  $store: PropTypes.object
};