import React from 'react';
import BasicPlaceDetails from './BasicPlaceDetails'

export default class InfoWindowContents extends React.Component {

    render() {
        let place = this.props.activePlaceDetails;
        let photoObject = place.mapData.photos[0];
        let photoUrl;
        if (photoObject.getUrl) {
            photoUrl = photoObject.getUrl({maxWidth: 300, maxHeight: 300});
        }
        return (
            <div id="info-wrapper">
                <BasicPlaceDetails place={place} />
                <img src={photoUrl} className="place-photo" />
                <div id="something" onClick={() => this.props.savePlace(place) }>save</div>
            </div>
        )
    }
}
