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

        editNote: function(place) {
            dispatch({
                type: "OPEN_NOTE_EDIT",
                place: place
            });
        },

        editNoteMessage: function(place, value) {
            dispatch({
                type: "EDIT_NOTE_MESSAGE",
                place: place,
                message: value
            });
        }
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(PlaceListItem)
