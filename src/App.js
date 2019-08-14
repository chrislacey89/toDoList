import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
// import "bootstrap/dist/css/bootstrap.min.css";
import 'typeface-roboto';

import Header from './Components/Header';
import Todos from './Components/Todos';
import AddtoDo from './Components/AddTodo';
import About from './Components/Pages/About';

import uuid from 'uuid';

class App extends Component {
  state = {
    todos: [
      {
        id: uuid.v4(),
        title: 'Take out the trash',
        completed: true
      },
      {
        id: uuid.v4(),
        title: 'Pay attention to Madeline',
        completed: false
      },
      {
        id: uuid.v4(),
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

  //Add Todo
  addTodo = title => {
    const newTodo = {
      id: uuid.v4(),
      title: title,
      completed: false
    };
    this.setState({ todos: [...this.state.todos, newTodo] });
  };

  render() {
    return (
      <Router>
        <div>
          <Header />
          <Route
            exact
            path='/'
            render={props => (
              <React.Fragment>
                {/* gets selected Id data from Todos.js*/}
                <Todos
                  todos={this.state.todos}
                  toggleComplete={this.toggleComplete}
                  deleteTodo={this.deleteTodo}
                />
                <AddtoDo addTodo={this.addTodo} />
              </React.Fragment>
            )}
          />
          <Route path='/about' component={About} />
        </div>
      </Router>
    );
  }
}

export default App;
