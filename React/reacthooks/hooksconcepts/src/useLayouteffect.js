import { useEffect, useLayoutEffect } from "react";
function LayoutEffecttutorial() {
  useLayoutEffect(() => {
    console.log("useLayoutEffect");
  }, []);
  useEffect(() => {
    console.log("useEffect");
  }, []);
  return <div></div>;
}
export default LayoutEffecttutorial;
