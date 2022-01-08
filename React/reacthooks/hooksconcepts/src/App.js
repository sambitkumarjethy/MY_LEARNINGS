import React, { useState } from "react";

const StateTutorial = () => {
  const [counter, setCounter] = useState(0);
  const [inputvalue, setInputvalue] = useState("");

  const increment = (e) => {
    setCounter(counter + 1);
  };
  const changevalue = (event) => {
    setInputvalue(event.target.value);
  };
  return (
    <>
      <div>
        <h1>
          {counter}
          <button onClick={increment}>increment the value</button>
          <input placeholder="entersomething" onKeyUp={changevalue} />
          {inputvalue}
        </h1>
      </div>
    </>
  );
};
export default StateTutorial;
