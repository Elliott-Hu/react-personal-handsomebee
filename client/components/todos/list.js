import React from "react";

export default class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        { this.props.todos.map(item => (<div key={ item.id }>{ item.tip }</div>)) }
      </div>
    )
  }
}