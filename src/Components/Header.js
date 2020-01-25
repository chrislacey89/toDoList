import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import classes from '../Styles/style.module.css';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import { logout } from '../Actions/authActions';
import { clearTodos } from '../Actions/postActions';

import { connect } from 'react-redux';

class Header extends Component {
  onClick = () => {
    console.log('clicked');
    this.props.logout();
    this.props.clearTodos();
  };

  render() {
    let loggedInLinks;
    if (this.props.loggedIn === true) {
      loggedInLinks = [
        <div>
          <Link component={RouterLink} to='/about'>
            <Button color='textSecondary' className={classes.container}>
              About
            </Button>
          </Link>
          <Button
            color='textSecondary'
            className={classes.container}
            onClick={this.onClick}
          >
            Logout
          </Button>
        </div>
      ];
    }

    let drawer = [
      <Drawer
        className={classes.drawer}
        variant='persistent'
        anchor='right'
        open={true}
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={console.log('close')}>
            <ChevronRightIcon />
          </IconButton>
        </div>
        <Divider />
        <List>
          <ListItem>
            <Link component={RouterLink} to='/about'>
              <Button color='textSecondary'>About</Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link component={RouterLink} to='/login'>
              <Button color='textSecondary'>Login</Button>
            </Link>
          </ListItem>

          <ListItem>
            <Link component={RouterLink} to='/signup'>
              <Button color='white'>Sign Up</Button>
            </Link>
          </ListItem>
        </List>
        <Divider />
      </Drawer>
    ];

    let loggedOutLinks;
    if (this.props.loggedIn === false) {
      loggedOutLinks = [
        <div>
          <Hidden smDown>
            <Link component={RouterLink} to='/about'>
              <Button color='textSecondary' className={classes.container}>
                About
              </Button>
            </Link>
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
          </Hidden>

          <IconButton
            color='inherit'
            aria-label='open drawer'
            edge='end'
            // onClick={handleDrawerOpen}
          >
            <MenuIcon />
          </IconButton>
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
              {loggedInLinks}
              {loggedOutLinks}
            </Grid>
          </Toolbar>
        </AppBar>
        {drawer}
      </div>
    );
  }
}
const mapStateToProps = state => ({
  loggedIn: state.authSettings.loggedIn
});

export default connect(mapStateToProps, { logout, clearTodos })(Header);
