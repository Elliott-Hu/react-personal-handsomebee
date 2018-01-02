import React from "react";
import TodoContainer from "@containers/todos";
import HelloContainer from "@containers/hello";

export default class PageTodos extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <HelloContainer />
        <TodoContainer />
      </div>
    );
  }
}