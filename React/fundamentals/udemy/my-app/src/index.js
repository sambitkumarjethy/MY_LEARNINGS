// IMPORT THE REACT AND REACTDOM  libraries
import React from "react";
import ReactDOM from "react-dom";

//CREATE A REACT COMPONENT
const App = () => {
  return <div>Hii There!</div>;
};

//  TAKE A REACT COMPONENT AND SHOW IT ON SCREEN
ReactDOM.render(<App />, document.querySelector("#root"));
