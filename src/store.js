import { createStore } from 'redux';
import appReducers from './reducers/appReducers';

let store = createStore(appReducers, {
    center: {lat: 40.0, lng: 72.0},
    explorationMap: {
        zoom: 5
    },
    contextMap: {
        zoom: 5
    },
});

export default store;

