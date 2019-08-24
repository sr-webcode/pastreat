const widgetState = {
  closeBtn: false,
  searchBar: false,
  mobileMenu: false,
  cartMenu: false,
}

const widgetReducer = (state = widgetState, action) => {
  switch (action.type) {
    case "toggleBurger":
      console.log(`hello toggling burger now!`)
      return state;
    default:
      return state;
  }
}


export default widgetReducer;
