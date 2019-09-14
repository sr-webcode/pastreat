const recentProductState = {
  items: [],
}


const recentProductReducer = (state = recentProductState, action) => {
  switch (action) {
    case "setRecentProducts":
      return state;
    default:
      return state;
  }
}


export default recentProductReducer;

