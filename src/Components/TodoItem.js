import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deletePost, toggleComplete, updateTodo } from '../Actions/postActions';
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
import Modal from '../Components/Modal';

export class TodoItem extends Component {
  state = {
    title: null,
    inputError: false
  };

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
    const todoItem = this.props.todo;
    this.props.toggleComplete(todoItem, this.props.authSettings.token);
  };

  onSubmit = e => {
    e.preventDefault();

    const todoId = this.props.todo._id;
    const todoTitle = this.state.title;
    this.props.updateTodo(todoId, todoTitle, this.props.authSettings.token);

    if (todoTitle === '') {
      this.setState({
        inputError: true
      });
    }
    console.log(this.state);
  };

  closeModal = () => {
    this.setState(prevState => {
      return {
        ...prevState,
        inputError: false
      };
    });
  };

  onClick = () => {
    const todoId = this.props.todo._id;
    console.log(todoId);
    this.props.deletePost(todoId, this.props.authSettings.token);
  };

  changeHandler = e => {
    this.setState({
      title: e.target.value
    });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <Modal
          openModal={this.state.inputError}
          closeModal={this.closeModal}
          errorMessage={'Enter text before updating your Todo Item.'}
        />
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
              fullWidth
              id='standard-with-placeholder'
              // label={this.props.todo.title}
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

const mapStateToProps = state => ({
  authSettings: state.authSettings
});

export default connect(mapStateToProps, {
  deletePost,
  toggleComplete,
  updateTodo
})(TodoItem);
