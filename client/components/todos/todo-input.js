import React from "react";

export default class TodoInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      word: ""
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({ word: this.refs.input.value });
  }
  handleSubmit(e) {
    console.log("@ref-value",this.refs.input.value);
    console.log("@state", this.state.word)
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
          ref="input"
          onChange={ this.handleChange } 
          value={ word } />

        <button type="submit">提交</button>
      </form>
    )
  }
}