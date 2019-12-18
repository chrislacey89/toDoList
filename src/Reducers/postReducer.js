import {
  FETCH_POSTS,
  NEW_POST,
  DELETE_POST,
  TOGGLE_COMPLETE
} from '../Actions/types';
import { updateObject } from '../utility';

// import { updateObject } from '../utility';

const initialState = {
  todos: []
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

// this.setState({
//   todos: this.state.todos.map(todo => {
//     // if the todo is = to the id that is passed into the function, then set it to the opposite
//     if (todo._id === res._id) {
//       todo.completed = !todo.completed;
//       passedCompleted = todo.completed;
//     }
//     return todo;
//   })
// });

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

    default:
      return state;
  }
}
