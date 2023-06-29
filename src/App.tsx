import { useState } from "react";
import "./App.css";
import Inputfield from "./components/Inputfield";

function App() {
  const [todo, setTodo] = useState<string>("");

  return (
    <div className="App">
      <Inputfield todo={todo} setTodo={setTodo} />
    </div>
  );
}

export default App;
