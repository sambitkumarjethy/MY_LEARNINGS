import React from "react";
const ImageList = (props) => {
  console.log(props.images, "test");
  const images = props.images.map(({ id, urls }) => {
    return <img key={id} src={urls.regular} alt={urls.alt_description} />;
  });
  return <div>{images}</div>;
};
export default ImageList;
