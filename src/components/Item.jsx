import styles from "./Item.module.css";

export const Item = ({ text, toggleTodo, deleteTodo, complete }) => {
  return (
    <div className={styles.todoItem__text}>
      <span
        className={styles.todoItem__text}
        style={{ color: complete ? "cyan" : "salmon" }}
      >
        {text}
      </span>
      <div>
        <button className={styles.todoItem__toggleBtn} onClick={toggleTodo}>
          toggle
        </button>
        <button className={styles.todoItem__deleteBtn} onClick={deleteTodo}>
          delete
        </button>
      </div>
    </div>
  );
};
