import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
// import "bootstrap/dist/css/bootstrap.min.css";
import 'typeface-roboto';

import Header from './Components/Header';
import Todos from './Components/Todos';
import AddtoDo from './Components/AddTodo';
import About from './Components/Pages/About';
import Signup from './Components/Pages/Signup';

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

  addTodo = title => {
    axios
      .post(`http://localhost:5000/api/todos/`, {
        title: title,
        completed: false
      })
      .then(
        res => this.setState({ todos: [...this.state.todos, res.data.todo] }),
        console.log(
          this.state.todos.map(todo => {
            let realID = todo._id;
            return realID;
          })
        )
        // console.log(this.state.todos.lastIndexOf('_id'))
      );
  };

  // submitTodo
  submitTodo = (res, e) => {
    e.preventDefault();
    console.log(res._id);
    //pass title up through state
    console.log(this);

    let passedTitle;

    this.setState({
      todos: this.state.todos.map(todo => {
        console.log(e.target);
        if (todo._id === res._id) {
          todo.title = this.element.value;

          passedTitle = todo.title;

          console.log(`Current Title: ${todo.title}`);
        }
        return todo;
      })
    });

    axios.put(`http://localhost:5000/api/todos/${res._id}`, {
      title: passedTitle
    });
  };

  // updateTodo
  updateTodo = (res, e) => {
    console.log(res._id);
    console.log('pew');
    let passedTitle;

    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo._id === res._id) {
          todo.title = e.target.value;

          passedTitle = todo.title;

          console.log(`Current Title: ${todo.title}`);
        }
        return todo;
      })
    });

    axios.put(`http://localhost:5000/api/todos/${res._id}`, {
      title: passedTitle
    });
  };

  //Toggle Complete
  toggleComplete = res => {
    let passedCompleted;

    this.setState({
      todos: this.state.todos.map(todo => {
        // if the todo is = to the id that is passed into the function, then set it to the opposite
        if (todo._id === res._id) {
          todo.completed = !todo.completed;
          passedCompleted = todo.completed;
        }
        return todo;
      })
    });

    axios.put(`http://localhost:5000/api/todos/${res._id}`, {
      completed: passedCompleted
    });
  };

  //Delete Todo item
  deleteTodo = id => {
    axios.delete(`http://localhost:5000/api/todos/${id}`).then(
      res => {
        // console.log(this.state.todos);

        this.setState(prevState => {
          const updatedTodos = prevState.todos.filter(
            todoItem => todoItem._id !== id
          );
          return { todos: updatedTodos };
        });
      }
      // res => {
      //   this.setState({
      //     todos: [...this.state.todos.filter(todo => todo.id !== id)]
      //   });
      // }
    );
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
                  updateTodo={this.updateTodo}
                  submitTodo={this.submitTodo}
                />
                <AddtoDo addTodo={this.addTodo} />
              </React.Fragment>
            )}
          />
          <Route path='/about' component={About} />
          <Route path='/signup' component={Signup} />
        </div>
      </Router>
    );
  }
}

export default App;
