import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Upper case is clicked");

    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleonChange = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("Enter text Here");
  return (
    <div>
      <div className="mb-3">
        <h1>{props.heading}</h1>
        <label htmlFor="myBox" className="form-label">
          Example textarea
        </label>
        <textarea
          className="form-control"
          value={text}
          id="myBox"
          rows="8"
          onChange={handleonChange}
        ></textarea>
      </div>
      <button className="btn-primary" onClick={handleUpClick}>
        Convert to Upper Case
      </button>
    </div>
  );
}
