import React, { Component } from 'react';
import TodoItem from './TodoItem';
import uuid from 'uuid';
import { connect } from 'react-redux';
import { fetchPosts } from '../Actions/postActions';
// import PropTypes from 'prop-types';

class Todos extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.newPost) {
      this.props.posts.push(nextProps.newPost);
      console.log(nextProps);
    }
  }

  render() {
    //  props.todos comes from from App.js. The Props is set there
    console.log(this.props.todos);
    return this.props.todos.map(todo => (
      <TodoItem
        key={uuid.v4()}
        todos={this.props}
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

const mapStateToProps = state => ({
  todos: state.posts.todos
  // newTodo: [...state.posts.todos, state.posts.todo]
});

// const mapStateToProps = state => ({ todos: state.todos });

export default connect(mapStateToProps, { fetchPosts })(Todos);
