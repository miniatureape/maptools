import React from 'react';
import ReactDOM from 'react-dom';
import { findHome } from '../store'

export default class ActivePlace extends React.Component {

    infoWidow: null
    placesService: null
    directionsMatrixService: null

    componentDidMount() {
        this.infoWindow = new google.maps.InfoWindow({content: '<div id="info-window-wrapper"></div>'});
        this.infoWindow.setPosition(this.props.activePlace.latLng);
        this.infoWindow.addListener('closeclick', (e) => {
            this.props.dispatch({
                type: 'CLEAR_ACTIVE_PLACE',
            });
            return false;
        } );

        this.infoWindow.addListener('domready', (e) => {
            ReactDOM.render(this.props.children, document.getElementById('info-window-wrapper'));
        });

        this.placesService = new google.maps.places.PlacesService(this.props.map);
        this.directionsMatrixService = new google.maps.DistanceMatrixService();

        this.placesService.getDetails({placeId: this.props.activePlace.placeId}, (place, status) => {

            let home = findHome(this.props.places);

            if (home) {
                this.directionsMatrixService.getDistanceMatrix({
                    origins: [home.mapData.geometry.location],
                    destinations: [place.geometry.location],
                    travelMode: 'DRIVING',
                }, (e) => this.showActivePlaceWIthDrivingTimes(e, place) );
            } else {
                this.props.dispatch({
                    type: 'SET_ACTIVE_PLACE_DETAILS',
                    activePlaceDetails: place,
                    directions: null
                });
                this.openInfoWindowAndRender();
            }

        });
    }

    openInfoWindowAndRender() {
        this.infoWindow.open(this.props.map);
    }

    showActivePlaceWIthDrivingTimes(directions, place) {
        this.props.dispatch({
            type: 'SET_ACTIVE_PLACE_DETAILS',
            activePlaceDetails: place,
            directions: directions
        });
        this.openInfoWindowAndRender();
    }

    render() {
        return null;
    }

    componentWillUnmount() {
        this.infoWindow.close();
    }

}
