import React, { Component } from 'react';
import TodoItem from './TodoItem';
import uuid from 'uuid';
// import PropTypes from 'prop-types';

class Todos extends Component {
  render() {
    //  props.todos comes from from App.js. The Props is set there
    return this.props.todos.map(todo => (
      <TodoItem
        key={uuid.v4()}
        // pass on everything from the state in app.js
        todo={todo}
        //sends id selected data to App.js
        toggleComplete={this.props.toggleComplete}
        //sends id selected data to App.js

        updateTodo={this.props.updateTodo}
        deleteTodo={this.props.deleteTodo}
        submitTodo={this.props.submitTodo}
      />
    ));
  }
}
// // PropTypes
// Todos.propTypes = {
//   todos: PropTypes.array.isRequired,
//   markComplete: PropTypes.func.isRequired,
//   delTodo: PropTypes.func.isRequired
// };

export default Todos;
