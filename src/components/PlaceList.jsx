import React from 'react'

import 'style-loader!./PlaceList.css'
import PlaceListItem from './PlaceListItem'
import ContextMapDisplayToggle from '../containers/ContextMapDisplayToggle'

export default class PlaceList extends React.Component {
    render() {
        let contents;

        if (this.props.places.length === 0) {
            contents = <div>Click a place on the map to save it to your list.</div>;
        } else {
            contents = 
                this.props.places.map((place) => { 
                    return <PlaceListItem key={place.place_id} place={place} />;
                })
            
        }

        return (
            <div id="place-list">
                <h3>Your Places</h3>
                <ContextMapDisplayToggle />
                { contents }
            </div>
        )
    }
}
