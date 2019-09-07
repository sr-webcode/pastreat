import { combineReducers } from 'redux';
import widgetReducer from './widgetReducer'
import sliderReducer from './sliderReducer'

const allReducers = combineReducers({
  widgets: widgetReducer,
  slider: sliderReducer
})

export default allReducers;