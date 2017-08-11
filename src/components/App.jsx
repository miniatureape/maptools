import { connect } from 'react-redux';

import 'style-loader!./App.css'
import ExplorationMap from '../containers/ExplorationMap'
import ContextMap from '../containers/ContextMap'
import PlaceList from '../containers/PlaceList'

function App(props) {
    return (
        <div className="app-wrapper">
            <div className="map-wrapper">
                <ExplorationMap store={props.store} />
                { props.displayContextMap && <ContextMap /> }
            </div>
            <PlaceList>
            </PlaceList>
        </div>
    )
}

let AppContainer = connect((state) => state)(App)

export default AppContainer;
