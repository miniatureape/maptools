export function fetchPlaceDetails(origin, places) {
    let destinations = places.map((place) => {
        return place.mapData.geometry.location
    });

    let directionsMatrixService = new google.maps.DistanceMatrixService();

    return function(dispatch) {
        let p = new Promise((resolve, reject) => {

            directionsMatrixService.getDistanceMatrix({
                origins: [origin.mapData.geometry.location],
                destinations: destinations,
                travelMode: 'DRIVING',
            }, directions => {
                resolve(directions);
            });

        })
        .then(directions => dispatch({
                type: "RECEIVED_DIRECTIONS",
                directions: directions
            })
        );
        return p;
    }
}

export function setActivePlace(latLng, placeId) {
    return {
        type: 'SET_ACTIVE_PLACE',
        activePlace: {
            latLng,
            placeId,
        }
    }
}
