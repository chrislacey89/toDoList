import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
// import "bootstrap/dist/css/bootstrap.min.css";
import 'typeface-roboto';

import Header from './Components/Header';
import Todos from './Components/Todos';
import AddtoDo from './Components/AddTodo';
import About from './Components/Pages/About';
import Login from './Components/Pages/Login';

// import uuid from 'uuid';
import axios from 'axios';

class App extends Component {
  state = {
    todos: []
  };

  //Get info from backend then update state
  componentDidMount() {
    axios
      .get('http://localhost:5000/api/todos/')
      // .then(res => console.log(res.data.todos));

      .then(res => this.setState({ todos: res.data.todos }));
  }

  // componentDidMount() {
  //   axios
  //     .get('https://jsonplaceholder.typicode.com/todos?_limit=4')
  //     .then(res => this.setState({ todos: res.data }));
  // }

  //Add Todo
  // addTodo = title => {
  //   axios
  //     .post('http://localhost:5000/api/todos/', {
  //       title: title,
  //       completed: false
  //     })
  //     .then(res => this.setState({ todos: [...this.state.todos, res.data] }))
  //     .then(console.log(this.state));
  // };

  addTodo = title => {
    axios
      .post('http://localhost:5000/api/todos/', {
        title: title,
        completed: false
      })
      .then(res =>
        this.setState({ todos: [...this.state.todos, res.data.todo] })
      );
  };

  //Toggle Complete
  // Todo: add a Put request to method
  toggleComplete = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        // if the todo is = to the id that is passed into the function, then set it to the opposite
        if (todo._id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  };

  //Delete Todo item
  deleteTodo = id => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(res => {
        this.setState({
          todos: [...this.state.todos.filter(todo => todo.id !== id)]
        });
      });
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
          <Route path='/login' component={Login} />
        </div>
      </Router>
    );
  }
}

export default App;
