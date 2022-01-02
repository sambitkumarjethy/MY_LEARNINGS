import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handlelowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleonChange = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("Enter text Here");
  return (
    <>
      <div className="container">
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
        <button className="btn-primary mx-2" onClick={handleUpClick}>
          Convert to Upper Case
        </button>
        <button className="btn-primary" onClick={handlelowClick}>
          Convert to Lower Case
        </button>
      </div>
      <div className="container my-3">
        <h1>Your text summary</h1>
        <p>
          {text.split(" ").length} words , {text.length} charecters
        </p>
        <p>
          It will take <b>{0.008 * text.split(" ").length}</b> minutes to read
        </p>
        <h3>Preview</h3>
        <p>{text}</p>
      </div>
    </>
  );
}
