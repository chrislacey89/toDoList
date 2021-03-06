import { SIGN_UP, LOG_IN, ERROR, CLOSE_MODAL, LOG_OUT } from '../Actions/types';

import { updateObject } from '../utility';

// import { updateObject } from '../utility';

const initialState = {
  error: null,
  resStatus: null,
  loggedIn: false,
  token: null,
  userID: null,
  logOutSnackBar: false
};

const login = (state, action) => {
  console.log('login in reducer');
  console.log('TCL: login -> action', action);
  // localStorage.setItem('token', 'response.data.token');

  return updateObject(state, {
    // resStatus: action.payload.status,
    token: action.payload.token,
    userID: action.payload.userId,
    loggedIn: true
  });
};

const signup = (state, action) => {
  console.log('sign up reducer');
  return updateObject(state, {
    resStatus: action.payload.status
  });
};

const authFail = (state, action) => {
  console.log('authFail reducer');
  console.log(action.payload);
  console.log(action.payload.response);

  console.log('TCL: authFail -> action', action);
  return updateObject(state, {
    resStatus: action.payload.response.status
  });
};

const closeModal = (state, action) => {
  console.log('close modal reducer');
  return updateObject(state, {
    resStatus: null
  });
};

const logout = (state, action) => {
  console.log('logout reducer');
  return updateObject(state, {
    token: null,
    userID: null,
    loggedIn: false,
    logOutSnackBar: true
  });
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SIGN_UP:
      return signup(state, action);
    case LOG_IN:
      return login(state, action);
    case LOG_OUT:
      return logout(state, action);
    case ERROR:
      return authFail(state, action);
    case CLOSE_MODAL:
      return closeModal(state, action);

    default:
      return state;
  }
}
