import { connect } from 'react-redux';
import InfoWindowContents from '../components/InfoWindowContents'

function placeInPlaces(places, place) {
    if (!place) {
        return false;
    }
    return places.reduce((carry, p) => {
        return (carry || p.mapData.place_id === place.placeId);
    }, false);
}

function mapStateToProps(state) {
    return {
        ...state,
        activePlaceIsSaved: placeInPlaces(state.places, state.activePlace)
    }
}

function mapDispatchToProps(dispatch) {
    return {
        savePlace: (place) => {
            dispatch({ type: 'SAVE_PLACE', place: place})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(InfoWindowContents)
;
