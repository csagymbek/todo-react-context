import { Input } from "./components/Input";
import { List } from "./components/List";
import { TodoState } from "./context/TodoState";
import "./App.css";

export const App = () => {
  return (
    <div className="app">
      <div className="app__todoApp">
        <TodoState>
          <Input />
          <List />
        </TodoState>
      </div>
    </div>
  );
};
