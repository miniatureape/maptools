import {connect} from 'react-redux'
import ContextMapDisplayToggle from '../components/ContextMapDisplayToggle'

function mapDispatchToProps(dispatch) {
    return {
        toggleContextMap: function() {
            dispatch({
                type: "TOGGLE_CONTEXT_MAP",
            });
        }
    }
}


export default connect(undefined, mapDispatchToProps)(ContextMapDisplayToggle)
