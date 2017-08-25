import { connect } from 'react-redux'
import PlaceRemoveButton from '../components/PlaceRemoveButton'


function mapStateToProps(state) {
    return state;
}

function mapDispatchToProps(dispatch) {
    return {
        deletePlace: function(place) {
            dispatch({
                type: "REMOVE_PLACE",
                place: place
            });
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlaceRemoveButton)
