import { combineReducers } from "redux";
import widgetReducer from "./widgetReducer";
import sliderReducer from "./sliderReducer";
import recentProductReducer from "./recentProductReducer";
import loginReducer from "./loginReducer";
import newProd from "./newProdReducer";

const allReducers = combineReducers({
  widgets: widgetReducer,
  slider: sliderReducer,
  recentProducts: recentProductReducer,
  login: loginReducer,
  newProduct: newProd,

});

export default allReducers;
