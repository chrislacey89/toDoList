import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';

import './App.css';
// import "bootstrap/dist/css/bootstrap.min.css";
import 'typeface-roboto';

import Header from './Components/Header';
import Todos from './Components/Todos';
import AddtoDo from './Components/AddTodo';
import About from './Components/Pages/About';
import Signup from './Components/Pages/Signup';
import Login from './Components/Pages/Login';

// import uuid from 'uuid';
import axios from 'axios';

class App extends Component {
  state = {
    todos: []
  };

  getToken = () => {
    const token = localStorage.getItem('token');
    console.log('TCL: App -> getToken -> token', token);
    return token;
  };

  render() {
    let routes = [
      <Switch>
        <div>
          <Header />

          <Route path='/about' component={About} />

          <Route
            path='/login'
            render={props => <Login {...props} token={this.getToken} />}
          />
          <Route path='/signup' component={Signup} />
        </div>
      </Switch>
    ];

    if (this.props.isAuth) {
      let routes = [
        <Switch>
          <div>
            <Header />
            <Route
              exact
              path='/'
              render={props => (
                <React.Fragment>
                  {/* gets selected Id data from Todos.js*/}
                  <Todos />
                  <AddtoDo />
                </React.Fragment>
              )}
            />
            <Route path='/about' component={About} />
          </div>
        </Switch>
      ];
    }

    return routes;
  }
}

const mapStateToProps = state => {
  return {};
};
export default withRouter(connect(mapStateToProps)(App));
