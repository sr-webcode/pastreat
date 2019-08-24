const widgetState = {
  closeBtn: false,
  searchBar: false,
  mobileMenu: false,
  cartMenu: false,
}

const widgetReducer = (state = widgetState, action) => {
  let modifiedState;
  switch (action.type) {
    case "toggleBurger":
      modifiedState = Object.assign({}, state, { mobileMenu: !state.mobileMenu })
      return modifiedState;
    default:
      return state;
  }
}


export default widgetReducer;
