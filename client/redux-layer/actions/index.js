import widgetAction from "./widgetActions";
import slideAction from "./sliderActions";
import recentProductAction from "./recentProductActions";
import loginAction from "./loginAction";
import newProduct from "./newProductActions";

const actions = {
  burgerToggle: widgetAction.burgerToggle,
  overlayClick: widgetAction.overlayClick,
  openCart: widgetAction.openCart,
  closeCart: widgetAction.closeCart,
  openSearch: widgetAction.openSearch,
  initSlide: slideAction.initSlide,
  slideChange: slideAction.slideChange,
  setRecentProducts: recentProductAction.setRecentProducts,
  setUsersAccount: loginAction.setAccount,
  setFieldErrors: loginAction.setFieldErrors,
  loggingIn: loginAction.loggingIn,
  successLogin: loginAction.successLogin,
  setProductRecord: newProduct.setProductRecord,
  resetProductRecord: newProduct.resetForm,
  previewImage: newProduct.previewImage
};

export default actions;
