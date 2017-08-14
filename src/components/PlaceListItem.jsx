import React from 'react'
import 'style-loader!./PlaceListItem.css'
import BasicPlaceDetails from './BasicPlaceDetails'
import MdCreate from 'react-icons/lib/md/create'
import MdHome from 'react-icons/lib/md/home'

export default class PlaceListItem extends React.Component {
    render() {

        let place = this.props.place;
        let originMarkup;

        if (place.isOrigin) {
            originMarkup = <MdHome
                className="float-right origin"
                title= "This is your origin"
                onClick={() => this.props.setOrigin(place)}
               />
        } else {
            originMarkup = <MdHome
                className="float-right origin not-origin"
                title= "Set this as your origin"
                onClick={() => this.props.setOrigin(place)}
               />
        }

        return (
        <div className="place-item clearfix">
            <BasicPlaceDetails place={place} />
            <div>
                { place.note.message && 
                    <blockquote contentEditable={true} className="place-item-message">{place.note.message}</blockquote>
                }
                <MdCreate 
                    onClick={() => this.props.editNote(place)}
                    className="float-left" />
                {originMarkup}
            </div>
            {this.props.place.note.isOpen && (
                <textarea 
                    onChange={(e) => this.props.editNoteMessage(place, e.target.value)}
                    defaultValue={this.props.place.note.message}></textarea>
            )}
        </div>
        )
    }
}
