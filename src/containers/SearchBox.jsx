import SearchBox from '../components/SearchBox';
import { connect } from 'react-redux';
import { setActivePlace } from '../actions/index'

function mapDispatchToProps(dispatch) {
    // TODO fact this and the other instance of it into an action.
    return {
        changeCenter: (place) => { 
            dispatch({
                type: 'CHANGE_CENTER_ON_SEARCH',
                center: place.geometry.location,
            })
            dispatch(
                setActivePlace(place.geometry.location, place.place_id)
            ),
            dispatch({
                type: 'END_SEARCH',
            })
        }
    }
}

function mapStateToProps(state) {
    return state
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);
