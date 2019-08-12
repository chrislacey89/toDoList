import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Add from '@material-ui/icons/Add';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

// const useStyles = makeStyles(theme => ({
//   margin: {
//     margin: theme.spacing(1)
//   }
// }));

export default function addTodo() {
  //   const classes = useStyles();

  return (
    <div>
      <List>
        <ListItem dense button>
          <Grid container spacing={1} alignItems='flex-end'>
            <Grid item>
              <Add />
            </Grid>
            <Grid item>
              <TextField id='input-with-icon-grid' label='Add a new item' />
            </Grid>
          </Grid>
        </ListItem>
      </List>
    </div>
  );
}
