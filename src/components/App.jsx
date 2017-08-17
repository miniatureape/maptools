import { connect } from 'react-redux';

import 'style-loader!./App.css'
import ExplorationMap from '../containers/ExplorationMap'
import ContextMap from '../containers/ContextMap'
import PlaceList from '../containers/PlaceList'
import ContextMapDisplayToggle from '../containers/ContextMapDisplayToggle'
import Controls from './Controls'

function App(props) {
    return (
        <div className="app-wrapper">
            <Controls />
            <PlaceList />
            <div className="map-wrapper">
                <ExplorationMap store={props.store} />
                { props.displayContextMap && <ContextMap /> }
            </div>
            <ContextMapDisplayToggle />
        </div>
    )
}

let AppContainer = connect((state) => state)(App)

export default AppContainer;
