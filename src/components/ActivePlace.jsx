import React from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server'

export default class ActivePlace extends React.Component {

    infoWidow: null
    placesService: null

    componentDidMount() {
        this.infoWindow = new google.maps.InfoWindow({content: ''});
        this.infoWindow.setPosition(this.props.activePlace.latLng);
        this.infoWindow.open(this.props.map);
        this.infoWindow.addListener('closeclick', (e) => {
            this.props.dispatch({
                type: 'CLEAR_ACTIVE_PLACE',
            });
            return false;
        } );
        this.placesService = new google.maps.places.PlacesService(this.props.map);
        this.placesService.getDetails({placeId: this.props.activePlace.placeId}, (place, status) => {
            this.props.dispatch({
                type: 'SET_ACTIVE_PLACE_DETAILS',
                activePlaceDetails: place
            });
            const content = this.renderChildren();
            this.infoWindow.setContent(content);
        });
    }

    renderChildren() {
        const {children} = this.props;
        return ReactDOMServer.renderToString(children);
    }

    render() {
        return null;
    }

    componentWillUnmount() {
        this.infoWindow.close();
    }

}
