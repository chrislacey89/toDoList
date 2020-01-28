import React, { Component } from 'react';
import TodoItem from './TodoItem';
import uuid from 'uuid';
import { connect } from 'react-redux';
import { fetchPosts, deletePost } from '../Actions/postActions';
import { Redirect } from 'react-router-dom';

// import PropTypes from 'prop-types';

class Todos extends Component {
  componentDidMount() {
    this.props.fetchPosts(
      this.props.authSettings.token,
      this.props.authSettings.userID
    );
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.newPost) {
      this.props.posts.push(nextProps.newPost);
      console.log(nextProps);
    }
  }

  render() {
    //  props.todos comes from from App.js. The Props is set there
    console.log(this.props);

    return this.props.todos.map(todo => (
      <TodoItem
        key={uuid.v4()}
        todos={this.props}
        // pass on everything from the state in app.js
        todo={todo}
        //sends id selected data to App.js
        // toggleComplete={this.props.toggleComplete}
        //sends id selected data to App.js

        updateTodo={this.props.updateTodo}
        // deleteTodo={this.props.deleteTodo}
        // submitTodo={this.props.submitTodo}
      />
    ));
  }
}

const mapStateToProps = state => ({
  todos: state.posts.todos,
  authSettings: state.authSettings
});

export default connect(mapStateToProps, { fetchPosts })(Todos);
