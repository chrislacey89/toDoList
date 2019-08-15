import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Add from '@material-ui/icons/Add';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

export class AddTodo extends Component {
  state = {
    title: ''
  };

  onChange = e =>
    this.setState({
      [e.target.name]: e.target.value
    });

  onSubmit = e => {
    e.preventDefault();
    //pass title up through state
    this.props.addTodo(this.state.title);
    //set title back to nothing
    this.setState({ title: '' });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <List>
            <ListItem dense button>
              <Grid container spacing={1} alignItems='flex-end'>
                <Grid item>
                  <TextField
                    id='input-with-icon-grid'
                    label='Add a new item'
                    name='title'
                    value={this.state.title}
                    onChange={this.onChange}
                  />
                </Grid>
              </Grid>
            </ListItem>
          </List>
        </form>
      </div>
    );
  }
}

//PropTypes
AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired
};

export default AddTodo;
