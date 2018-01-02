import React from "react";
import PropTypes from "prop-types";

export default class TodoInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      word: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({ word: e.target.value });
  }
  handleSubmit(e) {
    console.log("@state", this.state.word);
    console.log("H-A-N-D-S-O-M-E-B-E-E");

    const { handleSubmit } = this.props;
    handleSubmit(this.state.word, e);
    this.setState({ word: "" });
    e.preventDefault();
  }
  render() {
    let { word } = this.state;

    return (
      <form onSubmit={ this.handleSubmit }>
        <input 
          type="input"
          placeholder="你想做什么？"
          onChange={ this.handleChange } 
          value={ word } 
        />
        <button type="submit">提交</button>
      </form>
    );
  }
}

TodoInput.propTypes = {
  handleSubmit: PropTypes.func
};