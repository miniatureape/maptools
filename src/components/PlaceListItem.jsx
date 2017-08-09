import React from 'react'

export default class PlaceListItem extends React.Component {
    render() {
        return <div>{this.props.place.name}</div>
    }
}
