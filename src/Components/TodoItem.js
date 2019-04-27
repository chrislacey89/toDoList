import React, { Component } from "react";
import PropTypes from "prop-types";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

export class TodoItem extends Component {
  render() {
    return (
      <List>
        <ListItem
          // key={value}
          role={undefined}
          dense
          button
          // onClick={this.handleToggle(value)}
        >
          <Checkbox
          // checked={this.state.checked.indexOf(value) !== -1}
          // tabIndex={-1}
          />
          <ListItemText primary={this.props.todo.title} />
          <ListItemSecondaryAction>
            <IconButton aria-label="Comments">
              <DeleteIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      </List>
    );
  }
}

TodoItem.propTypes = {
  todos: PropTypes.object.isRequired
};

export default TodoItem;
