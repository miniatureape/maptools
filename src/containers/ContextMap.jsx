import { connect } from 'react-redux';
import ContextMap from '../components/ContextMap';

export default connect(function(state) {
    return {
        ...state,
        zoom: state.zoom - ZOOM_DIFF
    };
}, undefined)(ContextMap);
