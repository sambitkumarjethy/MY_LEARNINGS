// IMPORT THE REACT AND REACTDOM  libraries
import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";

//CREATE A REACT COMPONENT
const App = () => {
  console.log(faker.image.avatar());
  return (
    <>
      <div className="ui container comments"></div>
    </>
  );
};

//  TAKE A REACT COMPONENT AND SHOW IT ON SCREEN
ReactDOM.render(<App />, document.querySelector("#root"));
