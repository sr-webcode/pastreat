const widgetState = {
  closeBtn: false,
  searchBar: false,
  mobileMenu: false,
  cartMenu: false,
  overlay: false,
}

const widgetReducer = (state = widgetState, action) => {
  let modifiedState;
  switch (action.type) {
    case "toggleBurger":
      modifiedState = Object.assign({}, state, { mobileMenu: !state.mobileMenu, overlay: !state.overlay })
      return modifiedState;
    case "overlayClick":
      modifiedState = Object.assign({}, state, { mobileMenu: false, overlay: false, cartMenu: false })
      return modifiedState;
    case "toggleCart":
      modifiedState = Object.assign({}, state, { mobileMenu: false, overlay: true, mobileMenu: false, cartMenu: true })
      return modifiedState;
    default:
      return state;
  }
}


export default widgetReducer;
