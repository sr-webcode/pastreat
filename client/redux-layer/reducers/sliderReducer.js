const sliderState = {
  sliders: [
    {
      slide: "1",
      enabled: true
    },
    {
      slide: "2",
      enabled: false
    },
    {
      slide: "3",
      enabled: false
    },
    {
      slide: "4",
      enabled: false
    },
  ],
  count: 0,
}
const sliderReducer = (state = sliderState, action) => {
  switch (action.type) {
    case "initSlide":
      const currentCount = state.count;
      // console.log(currentCount);
      const currentSlide = (list, slideIndex) => {
        return list.map((slide, subIndex) => {
          if (slideIndex === subIndex) {
            slide.enabled = true;
            return slide;
          }
          slide.enabled = false;
          return slide;
        })
      }
      return Object.assign({}, state, {
        count: state.count >= 3 ? 0 : state.count += 1, sliders: currentSlide(state.sliders, currentCount
        )
      })
    case "slideChange":
      console.log(action.payload);
    default:
      return state;
  }

}

export default sliderReducer;
