import React, { Component } from "react";
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";

class Todos extends Component {
  markComplete = e => {
    console.log(this.props);
  };
  render() {
    console.log(this.props.todos);
    return this.props.todos.map(todo => (
      <TodoItem
        key={todo.id}
        todo={todo}
        //sends id selected data to App.js
        markComplete={this.props.markComplete}
      />
    ));
  }
}

Todos.propTypes = {
  todos: PropTypes.array.isRequired
};

export default Todos;
