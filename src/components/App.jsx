import 'style-loader!./App.css'
import {connect} from 'react-redux'
import ReactDOMServer from 'react-dom/server'

import ExplorationMap from '../containers/ExplorationMap'
import ContextMap from '../containers/ContextMap'
import ContextMapDisplayToggle from '../containers/ContextMapDisplayToggle'

const ZOOM_DIFF = 2;



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
