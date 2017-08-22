import React from 'react';
import BasicPlaceDetails from './BasicPlaceDetails'

export default class InfoWindowContents extends React.Component {

    render() {
        let place = this.props.activePlaceDetails,
            photoObject,
            photoUrl,
            alreadySaved;

        if (place.mapData.photos) {
            photoObject = place.mapData.photos[0];
        }

        if (photoObject && photoObject.getUrl) {
            photoUrl = photoObject.getUrl({maxWidth: 300, maxHeight: 300});
        }

        return (
            <div id="info-wrapper">
                <BasicPlaceDetails place={place} />
                <img src={photoUrl} className="place-photo" />
                { !this.props.activePlaceIsSaved && <div id="something" onClick={() => this.props.savePlace(place) }>save</div>}
            </div>
        )
    }
}
