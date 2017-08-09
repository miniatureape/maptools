import React from 'react';
import ReactDOM from 'react-dom';

export default class ActivePlace extends React.Component {

    infoWidow: null
    placesService: null

    componentDidMount() {
        this.infoWindow = new google.maps.InfoWindow({content: '<div id="info-window-wrapper"></div>'});
        this.infoWindow.setPosition(this.props.activePlace.latLng);
        this.infoWindow.open(this.props.map);
        this.infoWindow.addListener('closeclick', (e) => {
            this.props.dispatch({
                type: 'CLEAR_ACTIVE_PLACE',
            });
            return false;
        } );
        this.infoWindow.addListener('click', (e) => {
            console.log('clicked');
        })
        this.placesService = new google.maps.places.PlacesService(this.props.map);
        this.placesService.getDetails({placeId: this.props.activePlace.placeId}, (place, status) => {
            this.props.dispatch({
                type: 'SET_ACTIVE_PLACE_DETAILS',
                activePlaceDetails: place
            });
            ReactDOM.render(this.props.children, document.getElementById('info-window-wrapper'));
        });
    }

    render() {
        return null;
    }

    componentWillUnmount() {
        this.infoWindow.close();
    }

}
