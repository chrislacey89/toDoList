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

import { withSnackbar } from 'notistack';

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
  state = {
    drawerOpen: false
  };

  onClick = () => {
    console.log('clicked');
    this.props.logout();
    this.props.clearTodos();
    this.props.enqueueSnackbar('Logged Out!', {
      variant: 'success',
      anchorOrigin: {
        horizontal: 'center',
        vertical: 'bottom'
      }
    });
  };

  handleDrawerOpen = () => {
    this.setState({ drawerOpen: true });
  };

  handleDrawerClose = () => {
    this.setState({ drawerOpen: false });
  };

  render() {
    let loggedInLinks;
    let loggedInDrawer;

    if (this.props.loggedIn === true) {
      loggedInLinks = [
        <div>
          <Hidden xsDown>
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
          </Hidden>
          <Hidden smUp>
            <IconButton
              color='inherit'
              aria-label='open drawer'
              edge='end'
              onClick={this.handleDrawerOpen}
            >
              <MenuIcon />
            </IconButton>
          </Hidden>
        </div>
      ];

      loggedInDrawer = [
        <Drawer
          className={classes.drawer}
          variant='persistent'
          anchor='right'
          open={this.state.drawerOpen}
          classes={{
            paper: classes.drawerPaper
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={this.handleDrawerClose}>
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
              <Button
                color='textSecondary'
                className={classes.container}
                onClick={this.onClick}
              >
                Logout
              </Button>
            </ListItem>
          </List>
          <Divider />
        </Drawer>
      ];
    }

    let logoLink;
    if (this.props.loggedIn) {
      logoLink = (
        <Link component={RouterLink} to='/' underline='none'>
          <Typography
            variant='h6'
            className={classes.centerAlign}
            color='textSecondary'
          >
            To Do List
          </Typography>
        </Link>
      );
    } else {
      logoLink = (
        <Link component={RouterLink} to='/login' underline='none'>
          <Typography
            variant='h6'
            className={classes.centerAlign}
            color='textSecondary'
          >
            To Do List
          </Typography>
        </Link>
      );
    }

    let loggedOutLinks;
    let loggedOutDrawer;
    if (this.props.loggedIn === false) {
      loggedOutLinks = [
        <div>
          <Hidden xsDown>
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
          <Hidden smUp>
            <IconButton
              color='inherit'
              aria-label='open drawer'
              edge='end'
              onClick={this.handleDrawerOpen}
            >
              <MenuIcon />
            </IconButton>
          </Hidden>
        </div>
      ];

      loggedOutDrawer = [
        <Drawer
          className={classes.drawer}
          variant='persistent'
          anchor='right'
          open={this.state.drawerOpen}
          classes={{
            paper: classes.drawerPaper
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={this.handleDrawerClose}>
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
    }

    return (
      <div className=''>
        <AppBar position='static' className={classes.container}>
          <Toolbar>
            <Grid container direction='row' justify='left' alignItems='center'>
              {logoLink}
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
        {loggedInDrawer}
        {loggedOutDrawer}
        <div style={{ backgroundColor: 'red', color: 'coral' }}></div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  loggedIn: state.authSettings.loggedIn
});

export default withSnackbar(
  connect(mapStateToProps, { logout, clearTodos })(Header)
);
