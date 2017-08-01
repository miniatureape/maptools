import React from 'react';
import GoogleMapReact from 'google-map-react';

class ExplorationMap extends React.Component {

    constructor() {
        super();
        this.onChange = this.onChange.bind(this);
    }

    render() {
        return (
            <div className="exploration-map">
                <GoogleMapReact
                     bootstrapURLKeys={{key: "AIzaSyBYAJ51pvSmz9Vp30WSlNDdE7k5ZSsmGSM"}}
                     center={this.props.center}
                     defaultZoom={this.props.explorationMap.zoom}
                     onBoundsChange={this.onChange}
                     debounced={false}
                >
                </GoogleMapReact>
            </div>
        )
    }

    onChange(center) {
        console.log(center);
        this.props.setCenter(center)
    }

}

export default ExplorationMap;
