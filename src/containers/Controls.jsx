import { connect } from 'react-redux'
import Controls from '../components/Controls'

function mapDispatchToProps(dispatch) {
    return {
        toggleDrawer: function() {
            dispatch({
                type: 'TOGGLE_DRAWER'
            });
        }
    }
}

export default connect(null, mapDispatchToProps)(Controls);
