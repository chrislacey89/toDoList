import React, { Component } from "react";
import PropTypes from "prop-types";

export class TodoItem extends Component {
  render() {
    return (
      <div className="list-group">
        <div
          className={
            this.props.todo.completed
              ? "list-group-item disabled"
              : "list-group-item"
          }
        >
          {this.props.todo.title}
        </div>
      </div>
    );
  }
}

TodoItem.propTypes = {
  todos: PropTypes.object.isRequired
};

export default TodoItem;
