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
        this.props.dispatch({
            type: 'CHANGE_BOUNDS',
            bounds: this.map.getBounds()
        });
    }
    render() {
        return <div className="exploration-map" style={{width: "50%", height: "100%", "float": "left"}} ref={(el) => this.mapEl = el}></div>
    }
}

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
                key="context-map" 
                ref={(el) => this.mapEl = el}
                style={{width: "50%", height: "100%"}}></div>
    }

    makeBoundaryRectangle(map, bounds) {
        if (!bounds) {
            return;
        }
        console.log('setting rect', bounds);
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
        })
    }
})(ExplorationMap);

function App(props) {
    return (
        <div className="app-wrapper">
            <ExplorationMapContainer />
            <ContextMapContainer />
        </div>
    )
}

export default App;
