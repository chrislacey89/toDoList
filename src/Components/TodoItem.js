import React, { Component } from 'react';
import PropTypes from 'prop-types';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

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

  render() {
    return (
      <List>
        <ListItem
          style={this.getStyle()}
          // key={value}
          role={undefined}
          dense
          button
          // onClick={this.handleToggle(value)}
        >
          <Checkbox
            checked={this.checked()}
            //toggleComplete will be picked up by toDos.js
            // bind allows us to send up the id to the top of the tree
            onChange={this.props.toggleComplete.bind(this, this.props.todo.id)}
          />
          {/* props.todo is coming from map function in todos.js */}
          <ListItemText primary={this.props.todo.title} />
          <ListItemSecondaryAction
            onClick={this.props.deleteTodo.bind(this, this.props.todo.id)}
          >
            <IconButton aria-label='Comments'>
              <DeleteIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      </List>
    );
  }
}

TodoItem.propTypes = {
  todos: PropTypes.object.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired
};

export default TodoItem;
