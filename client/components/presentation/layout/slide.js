import React, { Fragment } from "react";

const determineClass = (current, refIndex) => {
  const currentSlide = current.enabled === true && parseInt(current.slide);
  if (current.enabled) return "slide-image active";
  return "slide-image faded";
};

const Slide = props => {
  const trueActive = props.sliders.filter(each => each.enabled === true);

  return (
    <Fragment>
      {props.sliders.map((each, index) => {
        return (
          <div
            key={index}
            className={determineClass(each, trueActive)}
            style={{
              backgroundImage: `url(../images/slider/keiki${index + 1}.jpg)`
            }}
          />
        );
      })}
    </Fragment>
  );
};

export default Slide;
