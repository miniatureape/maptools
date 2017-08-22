import PlaceListItem from '../components/PlaceListItem'
import { connect } from 'react-redux';

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
        deletePlace: function(place) {
            dispatch({
                type: "REMOVE_PLACE",
                place: place
            });
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlaceListItem)
