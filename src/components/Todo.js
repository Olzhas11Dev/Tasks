import Input from "./Input.js/Input";
import Task from "./Tasks/Task";
import "./todo.css";
import React, { useState } from "react";

function Todo() {
  const [color, setColor] = useState("green");

  return (
    <div style={{ backgroundColor: color, width: "400px" }}>
      <button onClick={() => setColor("red")}>click</button>
    </div>
  );
}

export default Todo;

//create div width: 200px ,color 'yellow
// onClick color "blue"
