import { useReducer } from "react";
import { ACTIONS } from "./actions";
import { Context } from "./Context";
import { reducer } from "./reducer";

export const TodoState = ({ children }) => {
  const initialState = { todos: [] };
  const [state, dispatch] = useReducer(reducer, initialState);

  const addTodo = (todo) => {
    dispatch({ type: ACTIONS.ADD_TODO, payload: todo });
  };

  const deleteTodo = (id) => {
    dispatch({ type: ACTIONS.DELETE_TODO, payload: id });
  };

  const toggleTodo = (id) => {
    dispatch({ type: ACTIONS.TOGGLE_TODO, payload: id });
  };

  return (
    <Context.Provider
      value={{ todos: state.todos, addTodo, deleteTodo, toggleTodo }}
    >
      {children}
    </Context.Provider>
  );
};
