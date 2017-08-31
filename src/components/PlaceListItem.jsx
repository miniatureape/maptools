import React from 'react'
import 'style-loader!./PlaceListItem.css'
import BasicPlaceDetails from './BasicPlaceDetails'
import MdHome from 'react-icons/lib/md/home'
import Note from '../containers/Note'
import PlaceRemoveButton from '../containers/PlaceRemoveButton'

export default class PlaceListItem extends React.Component {
    render() {

        let place = this.props.place;
        let places = this.props.places;
        console.log('places', places);
        let originMarkup;

        if (place.isOrigin) {
            originMarkup = <div
                    onClick={() => this.props.setOrigin(place, places)}
                ><MdHome
                className="origin"
                title= "This is your origin"
               /> Home </div>
        } else {
            originMarkup = <div
                    onClick={() => this.props.setOrigin(place, places)} 
                    ><MdHome
                className="origin not-origin"
                title= "Set this as your origin"
            />  Make Home</div>
        }

        return (
            <div 
                onClick={() => this.props.setActivePlace(place.mapData.geometry.location, place.mapData.place_id) }
                className="place-item clearfix">
                <BasicPlaceDetails place={place} />
                <div onClick={(e) => e.stopPropagation() }>
                    {originMarkup} 
                    <Note place={place} /> 
                    <PlaceRemoveButton place={place} />
                </div>
            </div>
        )
    }
};
