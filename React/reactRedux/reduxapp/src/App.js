import React from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { incNumber, decNumber } from "./actions/index";

const App = () => {
  const myState = useSelector((state) => state.changeTheNumber);
  const dispatch = useDispatch();
  return (
    <>
      <h1>WellCome to Redux</h1>
      <h1>INCREMENT DECREMENT COUNTER</h1>
      <div className="quantity">
        <a
          className="qty_minus"
          title="Decrement"
          onClick={() => dispatch(decNumber())}
        >
          <span>-</span>
        </a>
        <input
          name="qty"
          type="text"
          className="qty_input"
          value={myState}
        ></input>
        <a
          className="qty_plus"
          title="Increment"
          onClick={() => dispatch(incNumber(5))}
        >
          <span>+</span>
        </a>
      </div>
    </>
  );
};

export default App;
