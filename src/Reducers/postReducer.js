import { FETCH_POSTS, NEW_POST } from '../Actions/types';
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

// .then(
//   res => this.setState({ todos: [...this.state.todos, res.data.todo] }),
//   console.log(
//     this.state.todos.map(todo => {
//       let realID = todo._id;
//       return realID;
//     })
//   )
//   // console.log(this.state.todos.lastIndexOf('_id'))
// );

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

    default:
      return state;
  }
}
