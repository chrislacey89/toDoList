import * as actionTypes from './actions';

const initialState = {
  todos: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_TODOS:
      return {};
    case actionTypes.NEW_TODO:
      return {
        ...state,
        todos: {
          ...state.todos,
          [action.todoTitle]: state.todos[action.todoTitle]
        }
      };
    default:
      return state;
  }
};

export default reducer;
