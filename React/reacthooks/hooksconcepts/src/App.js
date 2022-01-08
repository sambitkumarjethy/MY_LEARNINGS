import React, { useReducer } from "react";
const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { counter: state.counter + 1, inputvalue: state.inputvalue };
    case "inputText":
      return { counter: state.counter, inputvalue: !state.inputvalue };
    default:
      return state;
  }
};

const ReducerTutorial = () => {
  const [state, dispatch] = useReducer(reducer, {
    counter: 0,
    inputvalue: "xx",
  });

  return (
    <>
      <h1>USE OF REDUCER</h1>
      <div>
        <h1>
          {state.counter}
          <button
            onClick={() => {
              dispatch({ type: "INCREMENT" });
              dispatch({ type: "inputText" });
            }}
          >
            increment the value
          </button>
          {/* <input placeholder="entersomething" onKeyUp={changevalue} /> */}
        </h1>
        {state.inputvalue && <p>This is the text</p>}
      </div>
    </>
  );
};
export default ReducerTutorial;
