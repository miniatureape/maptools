import { connect } from 'react-redux';
import PlaceList from '../components/PlaceList'

function mapStateToProps(state) {
    return {...state};
}

function mapDispatchToProps(dispatch) {
    return {
        toggleDrawer: function() {
            dispatch({
                type: 'TOGGLE_DRAWER'
            });
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlaceList)
