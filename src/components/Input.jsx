import { useContext, useState } from "react";
import { Context } from "../context/Context";
import styles from "./Input.module.css";
import { v4 as uuid } from "uuid";

export const Input = () => {
  const [todo, setTodo] = useState("");
  const { addTodo } = useContext(Context);

  const onChange = (e) => {
    setTodo(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      id: uuid(),
      text: todo,
      compelete: false,
    };
    addTodo(newTodo);
    setTodo("");
  };

  return (
    <div className={styles.todoInput}>
      <h3 className={styles.todoInput__title}>Todo List</h3>
      <form action="" onSubmit={onSubmit} className={styles.todoInput__form}>
        <input
          type="text"
          value={todo}
          className={styles.todoInput__input}
          onChange={onChange}
          placeholder="Enter here"
        />
        <button className={styles.todoInput__submitBtn}>Add</button>
      </form>
    </div>
  );
};
