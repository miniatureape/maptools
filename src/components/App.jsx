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

function InfoWindowContents(props) {
    return (
        <div>
            <span>{props.placeName}</span>
            <a onClick={props.savePlace}>save</a>
        </div>
    )
}

let InfoWindowContentsContainer = connect(undefined, function(dispatch) {
    return {
        savePlace: (place) => {
            dispatch({ type: 'SAVE_PLACE', place: place })
        }
    }
})(InfoWindowContents)

class ActivePlace extends React.Component {
    infoWidow: null
    placesService: null
    componentDidMount() {
        this.infoWindow = new google.maps.InfoWindow({content: ''});
        this.infoWindow.setPosition(this.props.activePlace.latLng);
        this.infoWindow.open(this.props.map);
        this.infoWindow.addListener('closeclick', (e) => {
            this.props.dispatch({
                type: 'CLEAR_ACTIVE_PLACE',
            });
            return false;
        } );
        this.placesService = new google.maps.places.PlacesService(this.props.map);
        this.placesService.getDetails({placeId: this.props.activePlace.placeId}, (place, status) => {
            // TODO We need to add more information here, but for now save the place
            let iw = new InfoWindowContentsContainer(this.props);
            this.infoWindow.setContent(ReactDOMServer.renderToString(iw));
        });
    }
    render() {
        return null;
    }
    componentWillUnmount() {
        this.infoWindow.close();
    }
}

let ActivePlaceContainer = connect()(ActivePlace);

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
