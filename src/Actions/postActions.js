import { FETCH_POSTS, NEW_POST } from './types';
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

export const createPost = postData => dispatch => {
  console.log('post action called');
  console.log(postData);
  axios
    .post(`http://localhost:5000/api/todos/`, {
      title: postData.title,
      completed: false
    })
    .then(res =>
      dispatch({
        type: NEW_POST,
        payload: res.data.todo
      })
    )
    .then(res => console.log('this is the res', res));
};
