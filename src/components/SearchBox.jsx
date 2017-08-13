import React from 'react'
import 'style-loader!./SearchBox.css'

export default class SearchBox extends React.Component {

    componentDidMount() {
        this.searchBox = new google.maps.places.SearchBox(this.inputEl);
        this.searchBox.addListener('places_changed', (e) => {
            console.log(this.searchBox.getPlaces());
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
