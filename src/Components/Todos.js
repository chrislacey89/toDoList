import React, { Component } from "react";
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";

class Todos extends Component {
  render() {
    console.log(this.props.todos);
    // We get props.todos from App.js. Set the props there
    return this.props.todos.map(todo => (
      <TodoItem
        key={todo.id}
        // pass on everything from the state in app.js
        todo={todo}
        //sends id selected data to App.js
        toggleComplete={this.props.toggleComplete}
      />
    ));
  }
}

Todos.propTypes = {
  todos: PropTypes.array.isRequired
};

export default Todos;
