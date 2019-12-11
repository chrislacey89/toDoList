import { FETCH_POSTS, NEW_POST } from '../Actions/types';

const initialState = {
  todos: []
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
      return {
        ...state,
        todo: action.payload
      };
    default:
      return state;
  }
}
