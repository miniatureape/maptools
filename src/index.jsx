import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import appReducers from './reducers/appReducers';
import { createStore } from 'redux';
import { Provider } from 'react-redux'

let store = createStore(appReducers, {
    center: {lat: 40.0, lng: 72.0},
    explorationMap: {
        zoom: 5
    },
    contextMap: {
        zoom: 5
    },
});

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
