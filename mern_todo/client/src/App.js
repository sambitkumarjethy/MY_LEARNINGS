import "./App.css";
import { useState, useEffect } from "react";
import Item from "./components/item";
import axios from "axios";

function App() {
  const [text, setText] = useState("");
  const [todo, setTodo] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/get-todo")
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="App">
      <div className="container">
        <h1> Todo App</h1>
        <div className="top">
          <input
            type="text"
            placeholder="Task.."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="add">Add</div>
      </div>
      <div className="list">
        <Item />
      </div>
    </div>
  );
}

export default App;
