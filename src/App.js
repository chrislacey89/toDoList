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

  markComplete = id => {
    console.log(id);
  };

  render() {
    return (
      <div>
        {/* gets selected Id data from Todos.js*/}
        <Todos todos={this.state.todos} markComplete={this.markComplete} />
      </div>
    );
  }
}

export default App;
