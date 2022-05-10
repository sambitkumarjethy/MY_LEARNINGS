import React from "react";
const commentDeatil = () => {
  return (
    <div className="comment">
      <a href="/" className="avtar">
        <img alt="avtar" src={faker.image.avatar()} />
      </a>
      <div className="content">
        <a href="/" className="auther">
          Sam
        </a>
        <div className="metadata">
          <span className="date">Today at 6:00 AM</span>
        </div>
        <div className="text">Nice Blog Post</div>
      </div>
    </div>
  );
};
export default commentDeatil;
