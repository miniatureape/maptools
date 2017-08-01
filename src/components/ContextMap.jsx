import React from 'react';
import GoogleMapReact from 'google-map-react';

class ContextMap extends React.Component {
    render() {
        return (
            <div className="context-map">
                <GoogleMapReact
                     defaultCenter={this.props.center}
                     defaultZoom={this.props.zoom}
                >
                </GoogleMapReact>
            </div>
        )
    }
}

ContextMap.defaultProps = {
    center: {lat: 59.95, lng: 30.33},
    zoom: 11
}

export default ContextMap;
