import React, { Fragment } from "react";

const Slide = (props) => {
  return (<Fragment>
    {props.sliders.map((each, index) => {
      return <div key={index} className="slide-image" style={{
        display: `${each.enabled ? "block" : "none"}`,
        backgroundImage: `url(../images/slider/keiki${index + 1}.jpg)`
      }} />
    })}
  </Fragment>)
}

export default Slide;
