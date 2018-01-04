require("./todos.scss");

import React from "react";

import TodoContainer from "@containers/todos";
import HelloContainer from "@containers/hello";
import ChatContainer from "@containers/chat";

export default class PageTodos extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="page-todos">
        <div className="fl">
          @@@@ hello react tsx welcome
          <HelloContainer />
          <TodoContainer />
        </div>
        <div className="fr">
          <ChatContainer />
        </div>
      </div>
    );
  }
}