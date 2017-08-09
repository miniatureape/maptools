import { connect } from 'react-redux';
import InfoWindowContents from '../components/InfoWindowContents'

function mapStateToProps(state) {
    return state;
}

function mapDispatchToProps(dispatch) {
    return {
        savePlace: (place) => {
            console.log('saving place');
            dispatch({ type: 'SAVE_PLACE', place: place })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(InfoWindowContents)

