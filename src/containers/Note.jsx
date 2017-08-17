import { connect } from 'react-redux';
import Note from '../components/Note';

function mapStateToProps(state) {
    return state;
}
function mapDispatchToProps(dispatch) {
    return {
        showEmptyNote: function(place) {
            dispatch({
                type: "OPEN_NOTE_EDIT",
                place: place
            });
        },

        hideEmptyNote: function(place) {
            dispatch({
                type: "CLOSE_NOTE_EDIT",
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

export default connect(mapStateToProps, mapDispatchToProps)(Note)
