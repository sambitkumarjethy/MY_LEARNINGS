import React from "react";
const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "Summer" : "Winter";
  } else {
    return lat > 0 ? "Winter" : "Summer";
  }
};
const seasonDisplay = (props) => {
  console.log(props.lat, { props }, "test");
  const season = getSeason(props.lat, new Date().getMonth());
  return <div>Season display{season}</div>;
};
export default seasonDisplay;
