import React from 'react';
import { Provider } from 'react-redux'

import ActivePlace from '../containers/ActivePlace'
import InfoWindowContents from '../containers/InfoWindowContents'
import explorationMapConfig from '../config/explorationMap'

export default class ExplorationMap extends React.Component {
    componentDidMount() {
        this.map = new google.maps.Map(this.mapEl, {
            ...explorationMapConfig, 
            center: this.props.center, 
            zoom: this.props.zoom
        });
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
                        && <ActivePlace
                            map={this.map} 
                            activePlace={this.props.activePlace}
                            >
                                {/* We need to explicitly wrap the child in a Provider because
                                    it is rendered via react server dom renderer.*/}
                                <Provider store={this.props.store}>
                                    <InfoWindowContents />
                                </Provider>
                           </ActivePlace> }
                </div>
        )
    }
}

