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


const cartToggle = () => {
  return {
    type: "toggleCart"
  }
}



const actions = {
  burgerToggle,
  overlayClick,
  cartToggle
}

export default actions;