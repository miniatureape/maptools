import 'style-loader!./App.css'
import {connect} from 'react-redux'
import ReactDOMServer from 'react-dom/server'

import ExplorationMap from '../containers/ExplorationMap'

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

class ContextMap extends React.Component {

    componentDidMount() {
        this.map = new google.maps.Map(this.mapEl, {center: this.props.center, zoom: this.props.zoom});
        this.rectangle = this.makeBoundaryRectangle(this.map, this.props.bounds);
    }

    render() {

        if (this.map) {
            this.map.panTo(this.props.center);
            this.map.setZoom(this.props.zoom);
        }

        if (this.rectangle) {
            this.rectangle.setMap(null);
        } 
        this.rectangle = this.makeBoundaryRectangle(this.map, this.props.bounds);

        return <div 
                className="context-map"
                key="context-map" 
                ref={(el) => this.mapEl = el}
                ></div>
    }

    makeBoundaryRectangle(map, bounds) {
        if (!bounds) {
            return;
        }
        return new google.maps.Rectangle({
            strokeColor: '#FF0000',
            strokeOpacity: 1,
            strokeWeight: 1,
            fillColor: '#000000',
            fillOpacity: 0.0,
            map: map,
            bounds: bounds,
        });
    }
}

let ContextMapContainer = connect(function(state) {
    return {
        ...state,
        zoom: state.zoom - ZOOM_DIFF
    };
}, undefined)(ContextMap);



function App(props) {
    return (
            <div className="app-wrapper">
                <div className="map-wrapper">
                    <ExplorationMap />
                    { props.displayContextMap && <ContextMapContainer /> }
                </div>
                <ToggleButtonContainer />
            </div>
    )
}

let AppContainer = connect((state) => state)(App)

export default AppContainer;
