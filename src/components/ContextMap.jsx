import React from 'react';
import GoogleMapReact from 'google-map-react';

class ContextMap extends React.Component {
    render() {
        return (
            <div className="context-map">
                <GoogleMapReact
                     bootstrapURLKeys={{key: "AIzaSyBYAJ51pvSmz9Vp30WSlNDdE7k5ZSsmGSM"}}
                     center={this.props.center}
                     defaultZoom={this.props.contextMap.zoom}
                >
                </GoogleMapReact>
            </div>
        )
    }
}

export default ContextMap;
