import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deletePost, toggleComplete } from '../Actions/postActions';
// import PropTypes from 'prop-types';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
// import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Input } from '@material-ui/core';

export class TodoItem extends Component {
  getStyle = () => {
    return {
      textDecoration: this.props.todo.completed ? 'line-through' : 'none'
    };
  };

  //check if item is completed. Will mark box checked
  checked = () => {
    if (this.props.todo.completed === true) {
      return true;
    }
  };

  toggleComplete = () => {
    console.log('ggot');
    const todoItem = this.props.todo;
    this.props.toggleComplete(todoItem);

    // this.props.toggleComplete()
  };

  onSubmit = e => {
    e.preventDefault();
    console.log(this.props.todo);
    //pass title up through state
    this.props.submitTodo();
  };

  onClick = () => {
    const todoId = this.props.todo._id;
    console.log(todoId);
    this.props.deletePost(todoId);
  };

  changeHandler = () => {
    console.log('change');
    this.props.updateTodo.bind(this, this.props.todo);
  };

  render() {
    return (
      <form onSubmit={this.props.submitTodo.bind(this, this.props.todo)}>
        <List>
          <ListItem
            style={this.getStyle()}
            role={undefined}
            dense
            button
            // onClick={this.handleToggle(value)}
          >
            <Checkbox
              checked={this.checked()}
              //toggleComplete will be picked up by toDos.js
              // bind allows us to send up the id to the top of the tree
              onChange={this.toggleComplete}
            />
            <Input
              disabled={this.checked()}
              id='standard-with-placeholder'
              label={this.props.todo.title}
              defaultValue={this.props.todo.title}
              // className={classes.textField}
              type='text'
              margin='normal'
              onChange={this.changeHandler}
            />
            {/* <Button variant='contained'>Submit</Button> */}

            {/* <ListItemText primary={this.props.todo.title} /> */}

            {/* props.todo is coming from map function in todos.js */}
            {/* <ListItemText primary={this.props.todo.title} /> */}
            <ListItemSecondaryAction
              // onClick={this.props.deleteTodo.bind(this, this.props.todo._id)}
              onClick={this.onClick}
            >
              <IconButton aria-label='Comments'>
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        </List>
      </form>
    );
  }
}

// TodoItem.propTypes = {
//   todos: PropTypes.object.isRequired,
//   markComplete: PropTypes.func.isRequired,
//   delTodo: PropTypes.func.isRequired
// };

export default connect(null, { deletePost, toggleComplete })(TodoItem);
