import widgetAction from './widgetActions'
import slideAction from './sliderActions'
import recentProductAction from './recentProductActions'
import loginAction from './loginAction'


const actions = {
  burgerToggle: widgetAction.burgerToggle,
  overlayClick: widgetAction.overlayClick,
  openCart: widgetAction.openCart,
  closeCart: widgetAction.closeCart,
  openSearch: widgetAction.openSearch,
  initSlide: slideAction.initSlide,
  slideChange: slideAction.slideChange,
  setRecentProducts: recentProductAction.setRecentProducts,
  setUsersAccount: loginAction.setAccount
}

export default actions;