const burgerToggle = () => {
  return {
    type: 'toggleBurger',
  }
}
const overlayClick = () => {
  return {
    type: "overlayClick",
  }
}
const openCart = () => {
  return {
    type: "openCart"
  }
}


const closeCart = () => {
  return {
    type: "closeCart"
  }
}

const openSearch = () => {
  return {
    type: "openSearch"
  }
}

const actions = {
  burgerToggle,
  overlayClick,
  openCart,
  closeCart,
  openSearch
}

export default actions;