import React from 'react'
import 'style-loader!./PlaceListItem.css'

export default class BasicPlaceDetails extends React.Component {
    render() {
        let place = this.props.place;
        console.log('place', place);
        return (
            <div className="basic-place-details">
                <div>
                    <div className="float-left"><b>{place.mapData.name}</b></div>
                    <div className="float-right">{place.travelTime}</div>
                </div>
                <div className="clearfix">
                    <div>{place.mapData.formatted_address}</div>
                </div>
            </div>
        )
    }
}
