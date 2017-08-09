import React from 'react'

import PlaceListItem from './PlaceListItem'

export default class PlaceList extends React.Component {
    render() {
        return (
            <div>
                {this.props.places.map((place) => { 
                    return <PlaceListItem key={place.place_id} place={place} />;
                    })
                }
            </div>
        )
    }
}
