import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import classes from '../Styles/style.module.css';
import Grid from '@material-ui/core/Grid';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';

function Header() {
  return (
    <div className=''>
      <AppBar position='static' className={classes.container}>
        <Toolbar>
          <Grid container direction='row' justify='left' alignItems='center'>
            <Link component={RouterLink} to='/' underline='none'>
              <Typography variant='h6' className={classes.centerAlign}>
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
            <Link component={RouterLink} to='/login'>
              <Button color='white' className={classes.container}>
                Login
              </Button>
            </Link>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}
export default Header;
