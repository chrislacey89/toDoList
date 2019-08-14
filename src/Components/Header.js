import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import classes from '../Styles/style.module.css';
import Grid from '@material-ui/core/Grid';

export default function ButtonAppBar() {
  return (
    <div className=''>
      <AppBar position='static' className={classes.container}>
        <Toolbar>
          <Grid container direction='row' justify='left' alignItems='center'>
            <Typography variant='h6' className={classes.centerAlign}>
              To Do List
            </Typography>
          </Grid>
          <Grid
            container
            direction='row'
            justify='flex-end'
            alignItems='center'
          >
            <Button color='inherit' className={classes.container}>
              Login
            </Button>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}
