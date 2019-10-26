import { combineReducers } from 'redux';
import widgetReducer from './widgetReducer'
import sliderReducer from './sliderReducer'
import recentProductReducer from './recentProductReducer'
import loginReducer from './loginReducer'


const allReducers = combineReducers({
  widgets: widgetReducer,
  slider: sliderReducer,
  recentProducts: recentProductReducer,
  login: loginReducer
})

export default allReducers;