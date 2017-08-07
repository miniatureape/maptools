import { createStore } from 'redux';
import appReducers from './reducers/appReducers';

let store = createStore(appReducers, {
    displayContextMap: false,
});

export default store;

