import React from "react";

const commentDeatil = (props) => {
  console.log({ props });
  return (
    <div className="comment">
      <a href="/" className="avtar">
        <img alt="avtar" src={props?.image} />
      </a>
      <div className="content">
        <a href="/" className="auther">
          {props?.auther}
        </a>
        <div className="metadata">
          <span className="date">{props?.time}</span>
        </div>
        <div className="text">{props?.post}</div>
      </div>
    </div>
  );
};
export default commentDeatil;
