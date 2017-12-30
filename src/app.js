require('./app.scss');

import React from "react";
import ReactDom from "react-dom";

import { createStore } from "redux";
import { Provider } from "react-redux";

import reducers from "@reducers";
import TodoContainer from "@containers/todoContainer";

let store = createStore(reducers);

class App extends React.Component {
  render() {
    return (<div className={ "app" }>
      @@@@ hello react tsx welcome
      <TodoContainer />
    </div>)
  }
}

ReactDom.render(
  <Provider store={ store }><App /></Provider>,
  document.getElementById("root")
)