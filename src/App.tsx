import { useState } from "react";
import "./App.css";
import Inputfield from "./components/Inputfield";
import { Todo } from "./model";
import TodoList from "./components/TodoList";

function App() {
  const [todo, setTodo] = useState<string>("");

  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos((prev) => {
        return [...prev, { id: Date.now(), todo: todo, isDone: false }];
      });
      setTodo("");
      // setTodos([...todos, { id: Date.now(), todo: todo, isDone: false }]);
    }
  };

  console.log(todos);

  return (
    <div className="App">
      <Inputfield todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      {/* {todos.map((t) => (
        <li>{t.todo}</li>
      ))} */}

      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
