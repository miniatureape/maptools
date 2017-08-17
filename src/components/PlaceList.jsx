import React from 'react'
import FaPlusCircle from 'react-icons/lib/fa/plus-circle'

import 'style-loader!./PlaceList.css'
import PlaceListItem from '../containers/PlaceListItem'

export default class PlaceList extends React.Component {

    componentDidMount() {
        this.drawerEl.addEventListener('transitionend', () => {
            this.props.signalResize();
        });
    }

    render() {
        let contents,
            drawerClass = 'hidden';

        if (this.props.displayDrawer) {
            drawerClass = '';
        }

        if (this.props.places.length === 0) {
            contents = (
            <div className="message">
                <p>Search for a place or find one on the map, then save it.</p>
                <p>If you set a place as home, you will see travel times from there for all other places.</p>
                <p>You can leave notes on places and share this list them with someone else.</p>
            </div>
            );
        } else {
            contents = 
                this.props.places.map((place) => { 
                    return <PlaceListItem key={place.mapData.place_id} place={place} />;
                })
        }
        return (
            <div 
                className={"drawer " + drawerClass}
                ref={(el) => this.drawerEl = el}>
                <div className="place-list">
                    { contents }
                </div>
            </div>
        )
    }
}
