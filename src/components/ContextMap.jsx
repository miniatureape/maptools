import React from 'react';
import contextMapConfig from '../config/contextMap'

export default class ContextMap extends React.Component {

    componentDidMount() {
        this.map = new google.maps.Map(this.mapEl, {...contextMapConfig, center: this.props.center, zoom: this.props.zoom});
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

