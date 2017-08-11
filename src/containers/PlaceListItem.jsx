import PlaceListItem from '../components/PlaceListItem'
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return state;
}

function mapDispatchToProps(dispatch) {
    return {
        setHome: function(place) {
            dispatch({
                type: "SET_PLACE_AS_HOME",
                place: place
            });
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlaceListItem)
