import React from 'react'
import 'style-loader!./PlaceListItem.css'

export default class PlaceListItem extends React.Component {
    render() {

        let place = this.props.place;
        let homeMarkup;
        if (place.isHome) {
            homeMarkup = <div className="float-right">Your home</div>
        } else {
            homeMarkup = <a onClick={() => this.props.setHome(place)} className="button-clear float-right">Make Home</a>
        }

        return (
        <div className="place-item clearfix">
            <div>
                <div className="float-left"><b>{place.mapData.name}</b></div>
                <div className="float-right">{place.travelTime}</div>
            </div>
            <div className="clearfix">
                <div>{place.mapData.formatted_address}</div>
            </div>
            <div>
                <a className="button-clear float-left">Add Note</a>
                {homeMarkup}
            </div>
        </div>
        )
    }
}
