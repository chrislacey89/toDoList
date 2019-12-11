import { FETCH_POSTS } from './types';
import axios from 'axios';

export const fetchPosts = () => dispatch => {
  console.log('fetching');
  axios
    .get('http://localhost:5000/api/todos/')
    .then(res =>
      dispatch({
        type: FETCH_POSTS,
        payload: res.data.todos
      })
    )
    .then(res => console.log(res.data));
};
