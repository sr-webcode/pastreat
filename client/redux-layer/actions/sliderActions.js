const initSlide = () => {
  return {
    type: "initSlide"
  };
};

const slideChange = val => {
  return {
    type: "slideChange",
    payload: val
  };
};

const sliderActions = {
  initSlide,
  slideChange
};

export default sliderActions;
