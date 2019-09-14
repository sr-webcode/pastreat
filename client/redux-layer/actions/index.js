import widgetAction from './widgetActions'
import slideAction from './sliderActions'
import recentProductAction from './recentProductActions'


const actions = {
  burgerToggle: widgetAction.burgerToggle,
  overlayClick: widgetAction.overlayClick,
  openCart: widgetAction.openCart,
  closeCart: widgetAction.closeCart,
  openSearch: widgetAction.openSearch,
  initSlide: slideAction.initSlide,
  slideChange: slideAction.slideChange,
  setRecentProducts: recentProductAction.setRecentProducts

}

export default actions;