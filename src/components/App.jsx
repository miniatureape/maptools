import 'style-loader!./App.css'
import {connect} from 'react-redux'
import ReactDOMServer from 'react-dom/server'

import ExplorationMap from '../containers/ExplorationMap'
import ContextMap from '../containers/ContextMap'

const ZOOM_DIFF = 2;

function mapDispatchToProps(dispatch) {
    return {
        toggleContextMap: function() {
            dispatch({
                type: "TOGGLE_CONTEXT_MAP",
            });
        }
    }
}

function ToggleButton(props) {
    return <button onClick={props.toggleContextMap}>Click Me</button>
}

let ToggleButtonContainer = connect(undefined, mapDispatchToProps)(ToggleButton)


function App(props) {
    return (
            <div className="app-wrapper">
                <div className="map-wrapper">
                    <ExplorationMap />
                    { props.displayContextMap && <ContextMap /> }
                </div>
                <ToggleButtonContainer />
            </div>
    )
}

let AppContainer = connect((state) => state)(App)

export default AppContainer;
