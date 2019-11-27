import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Modal from '../../Components/Modal';

import axios from 'axios';

function Copyright() {
  return (
    <Typography variant='body2' color='textSecondary' align='center'>
      {'Copyright © '}
      <Link color='inherit' href='https://material-ui.com/'>
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white
    }
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

class Signup extends Component {
  state = {
    signupForm: {
      email: {
        value: '',
        valid: false,
        touched: false
        // validators: [required, email]
      },
      password: {
        value: '',
        valid: false,
        touched: false
        // validators: [required, length({ min: 5 })]
      },
      name: {
        value: '',
        valid: false,
        touched: false
        // validators: [required]
      },
      error: true
    }
  };
  onSubmit = e => {
    e.preventDefault();
    //pass title up .through state

    const email = this.state.email;
    const name = this.state.name;
    const password = this.state.password;

    axios
      .post(`http://localhost:5000/api/todos/signup`, {
        email: email,
        name: name,
        password: password
      })
      .catch(err => {
        console.log(err.response);
      });
  };

  inputChangeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  // inputBlurHandler = input => {
  //   this.setState(prevState => {
  //     return {
  //       signupForm: {
  //         ...prevState.signupForm,
  //         [input]: {
  //           ...prevState.signupForm[input],
  //           touched: true
  //         }
  //       }
  //     };
  //   });
  // };

  closeModal = () => {
    this.setState(prevState => {
      return {
        signupForm: {
          ...prevState.signupForm,
          error: false
        }
      };
    });
  };

  render() {
    return (
      <Container component='main' maxWidth='xs'>
        <CssBaseline />
        <div>
          <Modal
            openModal={this.state.signupForm.error}
            closeModal={this.closeModal}
          />
          <Avatar>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component='h1' variant='h5'>
            Sign Up
          </Typography>
          <form noValidate onSubmit={this.onSubmit}>
            <TextField
              variant='outlined'
              margin='normal'
              required
              fullWidth
              id='email'
              label='Email Address'
              name='email'
              autoComplete='email'
              autoFocus
              onChange={this.inputChangeHandler}
              // onBlur={this.inputBlurHandler.bind(this, 'email')}
              // value={this.state.signupForm['email'].value}
              // valid={this.state.signupForm['email'].valid}
              // touched={this.state.signupForm['email'].touched}
            />
            <TextField
              variant='outlined'
              margin='normal'
              required
              fullWidth
              name='name'
              label='Your Name'
              type='text'
              id='name'
              autoComplete='current-password'
              onChange={this.inputChangeHandler}
              onBlur={this.inputBlurHandler.bind(this, 'name')}
              // value={this.state.signupForm['name'].value}
              // valid={this.state.signupForm['name'].valid}
              // touched={this.state.signupForm['name'].touched}
            />
            <TextField
              variant='outlined'
              margin='normal'
              required
              fullWidth
              name='password'
              label='Password'
              type='password'
              id='Passwordord'
              autoComplete='current-password'
              onChange={this.inputChangeHandler}
              onBlur={this.inputBlurHandler.bind(this, 'password')}
              // value={this.state.signupForm['password'].value}
              // valid={this.state.signupForm['password'].valid}
              // touched={this.state.signupForm['password'].touched}
            />

            <Button
              type='submit'
              fullWidth
              variant='contained'
              color='primary'
              loading={this.props.loading}
            >
              > Sign Up
            </Button>
          </form>
        </div>
        <Box mt={8}>
          <Copyright />
        </Box>
      </Container>
    );
  }
}

export default Signup;
