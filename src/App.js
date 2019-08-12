import React, { Component } from 'react';
import './App.css';
// import "bootstrap/dist/css/bootstrap.min.css";
import 'typeface-roboto';

import Todos from './Components/Todos';
import AddtoDo from './Components/AddTodo';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Take out the trash',
        completed: true
      },
      {
        id: 2,
        title: 'Pay attention to Madeline',
        completed: false
      },
      {
        id: 3,
        title: 'Meow at the cat',
        completed: false
      }
    ]
  };

  //Toggle Complete
  toggleComplete = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        // if the todo is = to the id that is passed into the function, then set it to the opposite
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  };

  //Delete Todo item
  deleteTodo = id => {
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    });
  };

  render() {
    return (
      <div>
        {/* gets selected Id data from Todos.js*/}
        <Todos
          todos={this.state.todos}
          toggleComplete={this.toggleComplete}
          deleteTodo={this.deleteTodo}
        />
        <AddtoDo />
      </div>
    );
  }
}

export default App;
