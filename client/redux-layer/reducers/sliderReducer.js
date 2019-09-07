console.log(`hello!`)

const sliderState = {
  currImage: ["1", "2", "3", "4"],
  count: 0,
}

const sliderReducer = (state = sliderState, action) => {
  // let currSliderState;
  switch (action.type) {
    case "bubbleTick":
      console.log(action.payload)
      return state;
    default:
      return state;
  }
}

export default sliderReducer;
