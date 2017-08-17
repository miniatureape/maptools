import { createStore } from 'redux';
import appReducers from './reducers/appReducers';

let defaultState;

if (window.localStorage['state']) {
    defaultState = JSON.parse(window.localStorage['state']);
    // Hack around something in maps not liking the stored data.
    // TODO: Figure out the exact cause of this and fix in a more general way.
    defaultState.activePlace = null;
} else {
    defaultState = {
        displayContextMap: false,
        displayDrawer: true,
        searched: false,
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

export function findOrigin() {
    return (store.getState())
        .places
        .map((place) => place.isOrigin ? place : null)
        .filter(n => n)
        .shift()
}

export { store };
