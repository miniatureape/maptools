import React from 'react';
import BasicPlaceDetails from './BasicPlaceDetails'

export default class InfoWindowContents extends React.Component {

    render() {
        let place = this.props.activePlaceDetails;
        return (
            <div id="info-wrapper">
                <BasicPlaceDetails place={place} />
                <div id="something" onClick={() => this.props.savePlace(place) }>save</div>
            </div>
        )
    }
}
