import React from 'react'

import 'style-loader!./PlaceList.css'
import PlaceListItem from '../containers/PlaceListItem'
import ContextMapDisplayToggle from '../containers/ContextMapDisplayToggle'

export default class PlaceList extends React.Component {
    render() {
        let contents;

        if (this.props.places.length === 0) {
            contents = (
            <div className="message">
                <div>Click a place on the map to save it to your list. Once you set a place as home, you will see travel times for all other places.</div>
                <div>You can leave notes on places and share this list them with someone else.</div>
            </div>
            );
        } else {
            contents = 
                this.props.places.map((place) => { 
                    return <PlaceListItem key={place.mapData.place_id} place={place} />;
                })
            
        }

        return (
            <div id="place-list">
                <div className="header">
                    <h4 className="float-left">Your Places</h4>
                    <ContextMapDisplayToggle />
                </div>
                <div className="clearfix">
                    { contents }
                </div>
            </div>
        )
    }
}
