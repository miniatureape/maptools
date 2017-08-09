import 'style-loader!./App.css'
import { connect } from 'react-redux';

import ExplorationMap from '../containers/ExplorationMap'
import ContextMap from '../containers/ContextMap'
import ContextMapDisplayToggle from '../containers/ContextMapDisplayToggle'
import PlaceList from '../containers/PlaceList'

function App(props) {
    return (
        <div className="app-wrapper">
            <div className="map-wrapper">
                <ExplorationMap store={props.store} />
                { props.displayContextMap && <ContextMap /> }
            </div>
            <PlaceList />
            <ContextMapDisplayToggle />
        </div>
    )
}

let AppContainer = connect((state) => state)(App)

export default AppContainer;
