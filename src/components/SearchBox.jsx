import React from 'react'
import 'style-loader!./SearchBox.css'

export default class SearchBox extends React.Component {

    componentDidMount() {
        this.searchBox = new google.maps.places.SearchBox(this.inputEl);
        this.searchBox.addListener('places_changed', (e) => {
            let places = this.searchBox.getPlaces();
            if (places.length) {
                this.props.changeCenter(places[0]);
            }
        })
    }

    render() {
        return (
            <input 
                placeholder="Search"
                className="search-box"
                ref={(el) => this.inputEl = el } />
        )
    }

}
