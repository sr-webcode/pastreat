import { combineReducers } from 'redux';
import widgetReducer from './widgetReducer'
import sliderReducer from './sliderReducer'
import recentProductReducer from './recentProductReducer'


const allReducers = combineReducers({
  widgets: widgetReducer,
  slider: sliderReducer,
  recentProducts: recentProductReducer
})

export default allReducers;