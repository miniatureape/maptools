import { connect } from 'react-redux';
import PlaceList from '../components/PlaceList'

function mapStateToProps(state) {
    return {...state};
}

function mapDispatchToProps(dispatch) {
    return {
        signalResize: () => {
            dispatch({
                type: "CONTAINER_RESIZED"
            });
            dispatch({
                type: "CONTAINER_RESIZE_HANDLED"
            });
        },
        exportPlaces: () => {
            dispatch({
                type: "EXPORT_PLACES"
            });
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlaceList)
