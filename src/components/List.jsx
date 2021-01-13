import { useContext } from "react";
import { Context } from "../context/Context";
import { Item } from "./Item";
import styles from "./List.module.css";

export const List = () => {
  const { todos, toggleTodo, deleteTodo } = useContext(Context);
  console.log(todos);

  return (
    <div className={styles.todoList}>
      <h3 className={styles.todoList__title}>Todos</h3>
      <div className={styles.todoList__todos}>
        {todos.map((todo) => (
          <Item
            text={todo.text}
            key={todo.id}
            toggleTodo={() => toggleTodo(todo.id)}
            deleteTodo={() => deleteTodo(todo.id)}
            id={todo.id}
            complete={todo.complete}
          />
        ))}
      </div>
    </div>
  );
};
