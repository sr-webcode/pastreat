import { createStore, applyMiddleware } from 'redux';
import allReducers from '../reducers/index';
const globalStore = createStore(allReducers);
export default globalStore;





