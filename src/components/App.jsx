import 'style-loader!./App.css'
import { connect } from 'react-redux';

import ExplorationMap from '../containers/ExplorationMap'
import ContextMap from '../containers/ContextMap'
import ContextMapDisplayToggle from '../containers/ContextMapDisplayToggle'

function App(props) {
    return (
            <div className="app-wrapper">
                <div className="map-wrapper">
                    <ExplorationMap />
                    { props.displayContextMap && <ContextMap /> }
                </div>
                <ContextMapDisplayToggle />
            </div>
    )
}

let AppContainer = connect((state) => state)(App)

export default AppContainer;
