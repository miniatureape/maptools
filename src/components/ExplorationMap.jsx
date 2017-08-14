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

    /* 
     * We have to hack around the fact that the maps are linked
     * and only fire the center changed listener handle when the mouse is moving
     * the exploration map. In the case that we're programatically changing
     * the center we can remove the listener, center and then rebind it. 
     * */
    setupCenterListener() {
        this.centerListener = this.map.addListener('center_changed', () => {
            this.props.changeCenter(this.map.getCenter())
        });
    }

    tearDownCenterListener() {
        this.centerListener.remove();
    }

    setCenterWithoutTriggeringEvent() {
        this.tearDownCenterListener();
        this.map.setCenter(this.props.center);
        this.setupCenterListener();
    }

    setupMapListeners() {

        this.setupCenterListener();

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
        if (this.props.searched && this.map) {
            this.setCenterWithoutTriggeringEvent(this.props.center);
        }
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

