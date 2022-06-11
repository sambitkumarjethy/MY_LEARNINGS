import "./seasonDIsplay.css";
import React from "react";
const seasonConfig = {
  summer: {
    text: "Let hit the beach",
    icon: "sun",
  },
  winter: { text: "Burr, its cold", icon: "snowflake" },
};
const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};
const seasonDisplay = (props) => {
  console.log(props.lat, { props }, "test");
  const season = getSeason(props.lat, new Date().getMonth());
  const { text, icon } = seasonConfig[season]; //{text,icon}
  console.log({ season }, seasonConfig[season], "seasonx");
  //  const icon = season === "winter" ? "sowflake" : "sun";
  // const text = season === "Winter" ? "Burr,Its chilly" : "Let, hit the Beach";
  return (
    <div className={`seasonDisplay ${season}`}>
      <i className={`${icon} icon-left  massive  icon`} />
      <h1>
        {text}
        {props.lat}
      </h1>
      <i className={`${icon}  icon-right massive icon`} />
    </div>
  );
};
export default seasonDisplay;
