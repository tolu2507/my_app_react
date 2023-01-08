import React, { useReducer, useState } from "react";
import "./App.css";
import { Items } from "./components/Listitems";
import { reduceFunc } from "./components/reducer";

function App() {
  const [task, setTask] = useState("");

  const [id, setId] = useState(0);

  const initial = [];

  const [arr, dispatch] = useReducer(reduceFunc, initial);

  function handleChange(e) {
    setTask(e.target.value);
  }

  function handleClick() {
    setTask("");
    setId(id + 1);
    dispatch({
      type: "ADDED",
      id: id,
      todo: task,
    });
  }
  function handleDelete(id) {
    dispatch({
      type: "DELETED",
      id: id,
    });
  }
  function handleEdit(task) {
    dispatch({
      type: "EDIT",
      todo: task,
    });
  }

  return (
    <>
      <input name="text" value={task} onChange={handleChange} id="input" />
      <button type="button" onClick={handleClick}>
        ADD
      </button>
      <div>
        <ul>
          {arr.map((item) => (
            <li key={item.id}>
              <Items item={item} onEdit={handleEdit} OnDelete={handleDelete} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
