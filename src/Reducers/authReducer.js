import { SIGN_UP, LOG_IN, ERROR, CLOSE_MODAL } from '../Actions/types';

import { updateObject } from '../utility';

// import { updateObject } from '../utility';

const initialState = {
  error: null,
  resStatus: null,
  loggedIn: false,
  token: null
};

const login = (state, action) => {
  console.log('login in reducer');
  return updateObject(state, {
    resStatus: action.payload.status
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

export default function(state = initialState, action) {
  switch (action.type) {
    case SIGN_UP:
      return signup(state, action);
    case LOG_IN:
      return login(state, action);
    case ERROR:
      return authFail(state, action);
    case CLOSE_MODAL:
      return closeModal(state, action);

    default:
      return state;
  }
}
