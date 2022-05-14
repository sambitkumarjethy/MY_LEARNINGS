// IMPORT THE REACT AND REACTDOM  libraries
import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDeatil from "./components/commentDetail";
import ApprovalCard from "./components/ApprovalCard";

//CREATE A REACT COMPONENT
// function getBtnTxt() {
//   return "Click on me";
// }
const App = () => {
  console.log(faker.image.avatar());
  return (
    <>
      <div className="ui container comments">
        <ApprovalCard>
          <h4>Warning !</h4>Are you sure ?
        </ApprovalCard>
        <ApprovalCard>
          <CommentDeatil
            auther="Sam"
            time={Date().toLocaleString()}
            image={faker.image.avatar()}
            post="How the food waste problem in Africa can be reduced by technology"
          />
        </ApprovalCard>
        <ApprovalCard>
          <CommentDeatil
            auther="Alex"
            time={Date().toLocaleString()}
            image={faker.image.avatar()}
            post="How waste incentive initiatives can improve recycling rates in Africa"
          />
        </ApprovalCard>

        <CommentDeatil
          auther="James"
          time={Date().toLocaleString()}
          image={faker.image.avatar()}
          post="What you need to know about Circular Economy-Enabled technology"
        />
      </div>
    </>
  );
};

//  TAKE A REACT COMPONENT AND SHOW IT ON SCREEN
ReactDOM.render(<App />, document.querySelector("#root"));
