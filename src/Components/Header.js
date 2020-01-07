import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import classes from '../Styles/style.module.css';
import Grid from '@material-ui/core/Grid';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';

import { connect } from 'react-redux';

class Header extends Component {
  render() {
    let loggedInLinks;
    if (this.props.loggedIn === false) {
      loggedInLinks = [
        <div>
          <Link component={RouterLink} to='/login'>
            <Button color='textSecondary' className={classes.container}>
              Login
            </Button>
          </Link>
          <Link component={RouterLink} to='/signup'>
            <Button color='white' className={classes.container}>
              Sign Up
            </Button>
          </Link>
        </div>
      ];
    }

    return (
      <div className=''>
        <AppBar position='static' className={classes.container}>
          <Toolbar>
            <Grid container direction='row' justify='left' alignItems='center'>
              <Link component={RouterLink} to='/' underline='none'>
                <Typography
                  variant='h6'
                  className={classes.centerAlign}
                  color='textSecondary'
                >
                  To Do List
                </Typography>{' '}
              </Link>
            </Grid>

            <Grid
              container
              direction='row'
              justify='flex-end'
              alignItems='center'
            >
              <Link component={RouterLink} to='/about'>
                <Button color='textSecondary' className={classes.container}>
                  About
                </Button>
              </Link>
              {loggedInLinks}
            </Grid>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  loggedIn: state.authSettings.loggedIn
});

export default connect(mapStateToProps)(Header);
