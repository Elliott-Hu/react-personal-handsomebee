require("normalize.css/normalize.css");
require("./root.scss");

import React from "react";
import ReactDom from "react-dom";

import { createStore } from "redux";
import { Provider } from "react-redux";

import reducers from "@reducers";
import PageTodos from "@pages/todos";

let store = createStore(reducers);

class App extends React.Component {
  render() {
    return (<div className="app">
      <PageTodos />
    </div>);
  }
}

ReactDom.render(
  <Provider store={ store }><App /></Provider>,
  document.getElementById("root")
);