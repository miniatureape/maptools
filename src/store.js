import { createStore } from 'redux';
import appReducers from './reducers/appReducers';

let store = createStore(appReducers, {
    displayContextMap: false,
    center: {
        lat: 40.7128,
        lng: -74.0059
    },
    bounds: null,
    zoom: 12,
    activePlace: null,
    activePlaceDetails: null,
    places: [],
});

export default store;

