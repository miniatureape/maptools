import React from 'react';

export default class InfoWindowContents extends React.Component {

    render() {
        return (
            <div id="info-wrapper">
                <div>{this.props.activePlaceDetails.name}</div>
                <div>{this.props.activePlaceDetails.formatted_address}</div>
                <div id="something" onClick={() => this.props.savePlace(this.props.activePlaceDetails, this.props.activePlaceDirections) }>save</div>
            </div>
        )
    }
}
