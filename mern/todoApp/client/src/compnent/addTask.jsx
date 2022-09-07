import React, { useState } from "react";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";

function AddTask() {
  const [inputField, setInputField] = useState({
    task: "",
    priority: "",
    task_description: "",
  });
  const inputsHandler = (e) => {
    setInputField({ [e.target.name]: e.target.value });
  };
  const submitButton = () => {
    alert(inputField.task);
  };
  return (
    <>
      <div>
        <br />
        <br />
        <input
          type="text"
          name="task"
          onChange={inputsHandler}
          placeholder="Task"
          value={inputField.task}
        />

        <br />
        <br />

        <select
          name="priority"
          onChange={inputsHandler}
          placeholder="priority"
          value={inputField.priority}
        >
          <option value="P3">P3</option>
          <option value="P2">P2</option>
          <option value="P1">P1</option>
          <option value="P0">P0</option>
        </select>

        <br />
        <br />

        <textarea
          name="task_description"
          onChange={inputsHandler}
          placeholder="Task Description"
          value={inputField.task_description}
          rows="4"
          cols="50"
        ></textarea>

        <br />

        <button onClick={submitButton}>Submit Now</button>
      </div>
    </>
  );
}

export default AddTask;
