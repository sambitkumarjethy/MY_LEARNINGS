import React, { useRef } from "react";

const RefHook = () => {
  const inputRef = useRef(null);
  const onClick = () => {
    inputRef.current.focus();
    console.log(inputRef.current.value);
  };
  return (
    <>
      <h1>USE OF REF HOOK</h1>
      <input type="text" placeholder="Ex.." ref={inputRef} />
      <button onClick={onClick}> Change Name</button>
    </>
  );
};
export default RefHook;
