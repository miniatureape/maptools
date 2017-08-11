import { connect } from 'react-redux';
import InfoWindowContents from '../components/InfoWindowContents'

function mapStateToProps(state) {
    return state;
}

function mapDispatchToProps(dispatch) {
    return {
        savePlace: (place, directions) => {
            dispatch({ type: 'SAVE_PLACE', place: place, directions: directions })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(InfoWindowContents)

