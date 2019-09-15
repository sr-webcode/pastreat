const recentProductState = {
  items: [],
}


const recentProductReducer = (state = recentProductState, action) => {
  switch (action.type) {
    case "setRecentProducts":
      return Object.assign({}, state, { items: [...action.payload] })
    default:
      return state;
  }
}


export default recentProductReducer;

