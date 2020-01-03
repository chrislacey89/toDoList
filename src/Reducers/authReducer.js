import { SIGN_UP, LOG_IN, ERROR } from '../Actions/types';

import { updateObject } from '../utility';

// import { updateObject } from '../utility';

const initialState = {
  error: null,
  resStatus: null,
  loggedIn: false,
  token: null
};

const login = (state, action) => {};

const signup = (state, action) => {
  console.log('sign up reducer');
  console.log(action.payload);
  console.log(state);
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

export default function(state = initialState, action) {
  switch (action.type) {
    case SIGN_UP:
      return signup(state, action);
    case ERROR:
      return authFail(state, action);

    default:
      return state;
  }
}
