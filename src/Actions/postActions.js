import {
  FETCH_POSTS,
  NEW_POST,
  DELETE_POST,
  TOGGLE_COMPLETE,
  CLEAR_POSTS,
  UPDATE_POST
} from './types';
import axios from 'axios';

let config;
export const fetchPosts = (token, userId) => dispatch => {
  config = {
    headers: {
      Authorization: 'Bearer ' + token
    }
  };

  console.log('fetching');
  axios.get('http://localhost:5000/api/todos/', config).then(res =>
    dispatch({
      type: FETCH_POSTS,
      payload: res.data.todos
    })
  );
};

export const createPost = (postData, token) => dispatch => {
  console.log('post action called');
  console.log(token);
  config = {
    headers: {
      Authorization: 'Bearer ' + token
    }
  };

  axios
    .post(
      `http://localhost:5000/api/todos/`,
      {
        title: postData.title,
        completed: false
      },
      config
    )
    .then(res =>
      dispatch({
        type: NEW_POST,
        payload: res.data.post
      })
    )
    .then(res => console.log('this is the res', res));
};

// todo: add token
export const deletePost = (id, token) => dispatch => {
  console.log('delete action called');
  config = {
    headers: {
      Authorization: 'Bearer ' + token
    }
  };
  axios
    .delete(`http://localhost:5000/api/todos/${id}`, config)
    .then(res =>
      dispatch({
        type: DELETE_POST,
        payload: id
      })
    )
    .then(res => console.log('this is the res', res));
};

// todo: add token
export const toggleComplete = (todoItem, token) => dispatch => {
  console.log('toggle action called');
  console.log(todoItem);
  config = {
    headers: {
      Authorization: 'Bearer ' + token
    }
  };
  const todoId = todoItem._id;
  const todoCompleted = todoItem.completed;
  axios
    .put(
      `http://localhost:5000/api/todos/${todoId}`,
      {
        completed: !todoCompleted
      },
      config
    )
    .then(res =>
      dispatch({
        type: TOGGLE_COMPLETE,
        payload: todoId
      })
    )
    .then(res => console.log('this is the res', res));
};

export const updateTodo = (todoId, todoTitle, token) => dispatch => {
  config = {
    headers: {
      Authorization: 'Bearer ' + token
    }
  };
  axios
    .put(
      `http://localhost:5000/api/todos/${todoId}`,
      {
        title: todoTitle
      },
      config
    )
    .then(res =>
      dispatch({
        type: UPDATE_POST,
        payload: res
      })
    );
};

export const clearTodos = () => {
  console.log('clear todo action');
  return {
    type: CLEAR_POSTS
  };
};
