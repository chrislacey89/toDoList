import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Todos from "./Components/Todos";

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Take out the trash",
        completed: false
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

  render() {
    return (
      <div>
        <Todos todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
