import React from 'react';
import InfoWindowContents from '../containers/InfoWindowContents'

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
            // TODO We need to add more information here, but for now save the place
            let iw = new InfoWindowContents(this.props);
            this.infoWindow.setContent(ReactDOMServer.renderToString(iw));
        });
    }

    render() {
        return null;
    }

    componentWillUnmount() {
        this.infoWindow.close();
    }

}
