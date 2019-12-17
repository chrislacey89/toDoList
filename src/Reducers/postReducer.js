import { FETCH_POSTS, NEW_POST, DELETE_POST } from '../Actions/types';
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

    default:
      return state;
  }
}
