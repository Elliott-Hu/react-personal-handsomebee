require('./app.scss');

import React from "react";
import ReactDom from "react-dom";
import TodoContainer from "./containers/todoContainer";

class App extends React.Component {
  render() {
    return (<div className={ "app" }>
      @hello react tsx
      <TodoContainer />
    </div>)
  }
}

ReactDom.render(
  <App />,
  document.getElementById("root")
)