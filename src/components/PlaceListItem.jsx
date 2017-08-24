import React from 'react'
import 'style-loader!./PlaceListItem.css'
import BasicPlaceDetails from './BasicPlaceDetails'
import MdHome from 'react-icons/lib/md/home'
import Note from '../containers/Note'
import MdHighlightRemove from 'react-icons/lib/md/highlight-remove'

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
                onClick={() => this.props.setOrigin(place)} /> }

        debugger;
        return (
            <div 
                onClick={() => this.props.setActivePlace(place.mapData.geometry.location, place.mapData.place_id) }
                className="place-item clearfix">
                <BasicPlaceDetails place={place} />
                <div onClick={(e) => e.stopPropagation() }>
                    <Note place={place} />
                    {originMarkup}
                    <MdHighlightRemove onClick={() => this.props.deletePlace(place)} />
                </div>
            </div>
        )
    }
};
