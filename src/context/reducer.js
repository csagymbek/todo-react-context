import { ACTIONS } from "./actions";

export const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case ACTIONS.DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case ACTIONS.TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload
            ? { ...todo, complete: !todo.complete }
            : todo
        ),
      };
    default:
      return state;
  }
};
