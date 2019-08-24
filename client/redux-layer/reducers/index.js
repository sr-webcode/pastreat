import { combineReducers } from 'redux';
import widgetReducer from './widgetReducer'

const allReducers = combineReducers({
  widgets: widgetReducer
})

export default allReducers;