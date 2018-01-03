require("./filters.scss");

import React from "react";
import PropTypes from "prop-types";

import cx from "classnames";
import * as constants from "@constants";

const filtersMap = [{
  type: constants.todos.SHOW_ALL,
  name: "全部"
}, {
  type: constants.todos.SHOW_COMPLETED,
  name: "已完成"
}, {
  type: constants.todos.SHOW_ACTIVE,
  name: "进行中"
} ];

export default class TodosFilters extends React.Component {
  constructor(props) {
    super(props);
    this.renderFilter = this.renderFilter.bind(this);
  }
  handleClick(type) {
    const { handleFilter } = this.props;
    handleFilter(type);
  }
  renderFilter(type, name) {
    const { filter_type } = this.props;
    let className = cx({ "is-active": filter_type == type });
    return (<div className={ className } onClick={ this.handleClick.bind(this, type) } key={ type }>{ name }</div>);
  }
  render() {
    return (
      <div className="todos-filters">
        { filtersMap.map(item => this.renderFilter(item.type, item.name)) }
      </div>
    );
  }
}

TodosFilters.propTypes = {
  handleFilter: PropTypes.func,
  filter_type: PropTypes.string
};