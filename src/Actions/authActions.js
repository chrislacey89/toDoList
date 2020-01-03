import { SIGN_UP, LOG_IN, ERROR } from './types';
import axios from 'axios';
//
// export const fetchPosts = () => dispatch => {
//   console.log('fetching');
//   axios.get('http://localhost:5000/api/todos/').then(res =>
//     dispatch({
//       type: FETCH_POSTS,
//       payload: res.data.todos
//     })
//   );
// };

export const signupFail = error => {
  return {
    type: ERROR,
    payload: error
  };
};

export const signup = (email, name, password, userData) => dispatch => {
  console.log('signup action');
  console.log(userData.email);
  axios
    .post(`http://localhost:5000/api/auth/signup`, {
      email: email,
      name: name,
      password: password
    })
    .then(res =>
      dispatch({
        type: SIGN_UP,
        payload: res
      })
    )
    .catch(err => {
      dispatch(signupFail(err));
    });
};

export const login = () => dispatch => {
  console.log('login action');
};
