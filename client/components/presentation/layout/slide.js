import React from "react";

const Slide = (props) => {
  const slideIndex = props.slideIndex;
  const isEnabled = props.isEnabled;
  return <div className="slideImage" style={{ backgroundImage: `url(../images/slider/keiki${slideIndex + 1}.jpg)`, display: isEnabled ? "block" : "none" }} />
}

export default Slide;