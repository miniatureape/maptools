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

/*
 *
 * We have two maps. One of them dispatches a change center
 * whenever its center is changed. One of the them changeds its
 * center based on the first maps center.
 *
 * Map Two has a render that always returns the same dom and sets
 * its center and zoom based on changes to it.
 *
 * Map One has a render that doesn't do anything. 
 *
 * What owns the dom element?
 * What owns the JS map Object?
 * How to share common initialization?
 *
 * 1. Duplication. Each map just initializas its onw map element.
 *    This seems totally fine
 *
 * 2. Composition. This is much trickier.
 *
 */

class ExplorationMap extends React.Component {
    componentDidMount() {
        console.log('cdm ex', this.props);
        this.map = new google.maps.Map(this.mapEl, {center: this.props.center, zoom: this.props.zoom});
        this.map.addListener('center_changed', () => {
            this.props.changeCenter(this.map.getCenter())
        });
        this.map.addListener('zoom_changed', () => {
            console.log(this.map.getZoom());
            this.props.changeZoom(this.map.getZoom())
        });
    }
    render() {
        return <div className="exploration-map" style={{width: "50%", height: "100%", "float": "left"}} ref={(el) => this.mapEl = el}></div>
    }
}

class ContextMap extends React.Component {

    componentDidMount() {
        this.map = new google.maps.Map(this.mapEl, {center: this.props.center, zoom: this.props.zoom});
    }

    render() {
        if (this.map) {
            this.map.panTo(this.props.center);
            this.map.setZoom(this.props.zoom);
        }
        return <div 
                key="context-map" 
                ref={(el) => this.mapEl = el}
                style={{width: "50%", height: "100%"}}></div>
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
        changeCenter: (center) => dispatch({
            type: "CHANGE_CENTER",
            center: center
        }),
        changeZoom: (zoom) => dispatch({
            type: 'CHANGE_ZOOM',
            zoom: zoom
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
