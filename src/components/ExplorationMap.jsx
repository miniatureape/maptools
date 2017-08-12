import React from 'react';
import { Provider } from 'react-redux'
import InfoWindowContents from '../containers/InfoWindowContents'

import ActivePlace from '../containers/ActivePlace'
import explorationMapConfig from '../config/explorationMap'

export default class ExplorationMap extends React.Component {
    createMap(el) {
        return new google.maps.Map(this.mapEl, {
            ...explorationMapConfig, 
            center: this.props.center, 
            zoom: this.props.zoom
        });
    }

    setupMapListeners() {
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
                this.props.clearActivePlace();
            }
        });
    }

    componentDidMount() {
        this.map = this.createMap(this.mapEl);
        this.setupMapListeners();
    }

    render() {
        return (
            <div 
                className="exploration-map" 
                ref={(el) => this.mapEl = el}>
                { 
                this.props.activePlace 
                    && <ActivePlace
                        map={this.map} 
                        activePlace={this.props.activePlace} >

                            {/* We need to explicitly wrap the child in a Provider because
                                it is rendered via react directly. */}

                            <Provider store={this.props.store}>
                                <InfoWindowContents />
                            </Provider>

                        </ActivePlace> 
                }
            </div>
        )
    }
}

