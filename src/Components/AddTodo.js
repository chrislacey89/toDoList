import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createPost } from '../Actions/postActions';
// import PropTypes from 'prop-types';

import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

export class AddTodo extends Component {
  state = {
    title: ''
  };

  onSubmit = e => {
    e.preventDefault();

    if (this.state.title !== '') {
      const post = {
        title: this.state.title,
        body: this.state.body
      };

      this.props.createPost(post);
    }
  };

  onChange = e =>
    this.setState({
      [e.target.name]: e.target.value
    });

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

// //PropTypes
// AddTodo.propTypes = {
//   addTodo: PropTypes.func.isRequired
// };

export default connect(null, { createPost })(AddTodo);
