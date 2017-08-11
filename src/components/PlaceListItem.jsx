import React from 'react'
import 'style-loader!./PlaceListItem.css'

export default class PlaceListItem extends React.Component {
    render() {

        let place = this.props.place.mapData;

        return (
        <div className="place-item">
            <div>
                <div className="float-left"><b>{place.name}</b></div>
                <div className="float-right">39 min</div>
            </div>
            <div className="clearfix">
                <div>{place.formatted_address}</div>
            </div>
            <div>
                <a className="button-clear">Add Note</a>
            </div>
        </div>
        )
    }
}
