// IMPORT THE REACT AND REACTDOM  libraries
import React from "react";
import ReactDOM from "react-dom";

//CREATE A REACT COMPONENT
function getBtnTxt() {
  return "Click on me";
}
const App = () => {
  // const buttonText = "Click Me";
  return (
    <div>
      <label className="label" htmlFor="name">
        Enter Name{" "}
      </label>
      <input tyepe="text" />
      <button style={{ backgroundColor: "green", color: "white" }}>
        {getBtnTxt()}
      </button>
    </div>
  );
};

//  TAKE A REACT COMPONENT AND SHOW IT ON SCREEN
ReactDOM.render(<App />, document.querySelector("#root"));
