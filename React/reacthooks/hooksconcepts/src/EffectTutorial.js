import React, { useEffect, useState } from "react";
import axios from "axios";

const EffectTutorial = () => {
  const [data, setData] = useState("");
  const [count, setcount] = useState(0);

  useEffect(() => {
    // console.log("hello world");
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        console.log("Hii");
        setData(response.data[0].email);
      });
  }, [count]);
  return (
    <>
      <h1>USE EFFECT HOOK</h1>
      <button
        onClick={() => {
          setcount(count + 1);
        }}
      >
        increment the value
      </button>
      <h2>{count}</h2>
      <p> {data} </p>
    </>
  );
};
export default EffectTutorial;
