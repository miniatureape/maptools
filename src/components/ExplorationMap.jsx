import React from 'react';
import GoogleMapReact from 'google-map-react';

class ExplorationMap extends React.Component {

    render() {
        return (
            <div className="exploration-map">
                <GoogleMapReact
                     defaultCenter={this.props.center}
                     defaultZoom={this.props.zoom}
                >
                </GoogleMapReact>
            </div>
        )
    }

}

ExplorationMap.defaultProps = {
    center: {lat: 59.95, lng: 30.33},
    zoom: 11
}


export default ExplorationMap;
