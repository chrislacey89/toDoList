import {
  FETCH_POSTS,
  NEW_POST,
  DELETE_POST,
  TOGGLE_COMPLETE,
  UPDATE_POST,
  CLEAR_POSTS
} from '../Actions/types';
import { updateObject } from '../utility';

// import { updateObject } from '../utility';

const initialState = {
  todos: [],
  updateSuccess: false
};

const clearTodos = state => {
  console.log('cleartodo reducer');
  return {
    ...state,
    todos: []
  };
};

const addTodo = (state, action) => {
  const updatedTodos = [...state.todos, action.payload];
  const updatedState = {
    todos: updatedTodos
  };

  return updatedState;
};

const deleteTodo = (state, action) => {
  console.log('reducer');
  const stateClone = [...state.todos];
  console.log(stateClone);
  const filteredState = stateClone.filter(todo => todo._id !== action.payload);
  console.log(filteredState);

  const updatedState = {
    todos: filteredState
  };
  return updatedState;
};

const toggleComplete = (state, action) => {
  console.log('toggle reducer');
  const stateClone = [...state.todos];
  const toggleComplete = stateClone.map(todo => {
    if (todo._id === action.payload) {
      todo.completed = !todo.completed;
    }
    return todo;
  });
  const updatedState = {
    todos: toggleComplete
  };
  console.log(updatedState);

  return updatedState;
};

const updateTodo = (state, action) => {
  // let updateTest = action.payload;
  console.log('update reducer');
  console.log(action.payload.data);
  // console.log(updateTest);
  const todosClone = [...state.todos];
  const toggleComplete = todosClone.map(todo => {
    if (todo._id === action.payload.data._id) {
      todo.title = action.payload.data.title;
    }

    return todo;
  });
  const updatedState = {
    todos: toggleComplete,
    updateSuccess: true
  };

  return updatedState;
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_POSTS:
      console.log('reducer');
      return {
        ...state,
        todos: action.payload
      };
    case NEW_POST:
      return addTodo(state, action);
    case DELETE_POST:
      return deleteTodo(state, action);
    case TOGGLE_COMPLETE:
      return toggleComplete(state, action);
    case UPDATE_POST:
      return updateTodo(state, action);
    case CLEAR_POSTS:
      return clearTodos(state);

    default:
      return state;
  }
}
