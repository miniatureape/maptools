import 'style-loader!./App.css'
import {connect} from 'react-redux'

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

class ExplorationMap extends React.Component {
    componentDidMount() {
        this.map = new google.maps.Map(this.mapEl, {center: this.props.center, zoom: this.props.zoom});
        this.map.addListener('center_changed', () => {
            this.props.changeCenter(this.map.getCenter())
        });
        this.map.addListener('zoom_changed', () => {
            this.props.changeZoom(this.map.getZoom())
        });
        this.map.addListener('bounds_changed', () => {
            this.props.changeBounds(this.map.getBounds())
        });
        this.map.addListener('click', (e) => {
            if (e.placeId) {
                e.stop();
                this.props.setActivePlace(e.latLng, e.placeId);
            } else {
                // TODO: clear active place? Probably need to do this in a lot of places
            }
        });
        this.props.dispatch({
            type: 'CHANGE_BOUNDS',
            bounds: this.map.getBounds()
        });
    }
    render() {
        return (
                <div className="exploration-map" ref={(el) => this.mapEl = el}>
                    { this.props.activePlace 
                        && <ActivePlaceContainer 
                            map={this.map} 
                            activePlace={this.props.activePlace} /> }
                </div>
        )
    }
}


class ActivePlace extends React.Component {
    infoWidow: null
    placesService: null
    componentDidMount() {
        this.infoWindow = new google.maps.InfoWindow;
        this.infoWindow.setContent("");
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
            this.infoWindow.setContent(place.name);
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


let ExplorationMapContainer = connect((state) => { 
        return state;
    }, function(dispatch) {
    return {
        dispatch,
        changeCenter: (center) => dispatch({
            type: "CHANGE_CENTER",
            center: center
        }),
        changeZoom: (zoom) => dispatch({
            type: 'CHANGE_ZOOM',
            zoom: zoom
        }),
        changeBounds: (bounds) => dispatch({
            type: 'CHANGE_BOUNDS',
            bounds: bounds
        }),
        setActivePlace: (latLng, placeId) => {
            dispatch({
                type: 'SET_ACTIVE_PLACE',
                activePlace: {
                    latLng: latLng,
                    placeId: placeId
                }
            });
        }
    }
})(ExplorationMap);

function App(props) {
    return (
            <div className="app-wrapper">
                <div className="map-wrapper">
                    <ExplorationMapContainer />
                    { props.displayContextMap && <ContextMapContainer /> }
                </div>
                <ToggleButtonContainer />
            </div>
    )
}

let AppContainer = connect((state) => state)(App)

export default AppContainer;
