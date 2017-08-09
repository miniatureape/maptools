import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import App from './components/App';
import store from './store';
import * as indexCss from './index.css';

window.initMaps = () => {
    ReactDOM.render(
        <Provider store={store}>
            <App store={store} />
        </Provider>,
        document.getElementById('root')
    );
}

let script = document.createElement('script');
script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyBYAJ51pvSmz9Vp30WSlNDdE7k5ZSsmGSM&callback=initMaps&libraries=places";
document.body.appendChild(script);
