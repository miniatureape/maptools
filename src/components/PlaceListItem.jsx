import React from 'react'
import 'style-loader!./PlaceListItem.css'
import BasicPlaceDetails from './BasicPlaceDetails'
import MdCreate from 'react-icons/lib/md/create'

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
            <BasicPlaceDetails place={this.props.place} />
            <div>
                <a className="button-clear float-left">
                    <MdCreate />
                </a>
                {homeMarkup}
            </div>
        </div>
        )
    }
}
