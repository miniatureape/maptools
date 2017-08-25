import PlaceListItem from '../components/PlaceListItem'
import { connect } from 'react-redux';

import { setActivePlace } from '../actions/index'

function mapStateToProps(state) {
    return state;
}

function mapDispatchToProps(dispatch) {
    return {
        setOrigin: function(place) {
            dispatch({
                type: "SET_PLACE_AS_ORIGIN",
                place: place
            });
        },
        setActivePlace: (latLng, placeId) => {
            dispatch(setActivePlace(latLng, placeId));
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlaceListItem)
