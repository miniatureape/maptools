import { connect } from 'react-redux';
import InfoWindowContents from '../components/InfoWindowContents'

export default connect(undefined, function(dispatch) {
    return {
        savePlace: (place) => {
            dispatch({ type: 'SAVE_PLACE', place: place })
        }
    }
})(InfoWindowContents)

