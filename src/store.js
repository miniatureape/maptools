import { createStore } from 'redux';
import appReducers from './reducers/appReducers';

let defaultState;

if (window.localStorage['state']) {
    defaultState = JSON.parse(window.localStorage['state']);
    // Hack around something in maps not liking the stored data.
    defaultState.activePlace = null;
} else {
    defaultState = {
        displayContextMap: false,
        center: {
            lat: 40.7128,
            lng: -74.0059
        },
        bounds: null,
        zoom: 12,
        activePlace: null,
        activePlaceDetails: null,
        activePlaceDirections: null,
        places: [],
    }
}

let store = createStore(appReducers, defaultState);

store.subscribe(function() {
    window.localStorage['state'] = JSON.stringify(store.getState());
});

export function findHome() {
    return (store.getState())
        .places
        .map((place) => place.isHome ? place : null)
        .filter(n => n)
        .shift()
}

export default store;

