import React from 'react';

const eventNames = [
    "bounds_changed",
    "center_changed",
    "click",
    "dblclick",
    "drag",
    "dragend",
    "dragstart",
    "heading_changed",
    "idle",
    "maptypeid_changed",
    "mousemove",
    "mouseout",
    "mouseover",
    "projection_changed",
    "resize",
    "rightclick",
    "tilesloaded",
    "tilt_changed",
    "zoom_changed",
];

function toCamel(snake) {
    var parts = snake.split("_");
    parts.map(function(part, i) { 
        if (i > 0) {
            return part.substr(0,1).toUpperCase() + part.substr(1);
        }
    })
    return parts.join('');
}

class Map extends React.Component {

    map: null,
    mapId: 
    listeners: [],

    componentDidMount() {
        this.bindAllToDispatch();
    }

    componentWillUnmount() {
        this.map = null;
        this.unbindAllFromDispatch();
    }

    bindAllToDispatch() {
        if (!this.map) {
            throw Exception('Must have a map to bind to.');
        }
        eventNames.forEach(function(name) {
            let camelName = toCamel(name);
            if (this.props.camelName) {
                this.listeners.push(this.map.addListener(name, this.props[camelName]));
            }
        });
    }

    unbindAllFromDispatch() {
        if (!this.map) {
            throw Exception('Must have a map to unbind from.');
        }
        this.listeners.forEach(this.map.removeListener);
    }

    render() {
        return (
            <div>
                <div ref={(el) => this.mapEl = el } />
                {this.props.children}
            </div>);
    }

}
