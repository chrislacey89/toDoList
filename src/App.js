import React, { Component } from "react";
import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import "typeface-roboto";

import Todos from "./Components/Todos";

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Take out the trash",
        completed: true
      },
      {
        id: 2,
        title: "Pay attention to Madeline",
        completed: false
      },
      {
        id: 3,
        title: "Meow at the cat",
        completed: false
      }
    ]
  };

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

  render() {
    return (
      <div>
        {/* gets selected Id data from Todos.js*/}
        <Todos todos={this.state.todos} toggleComplete={this.toggleComplete} />
      </div>
    );
  }
}

export default App;
