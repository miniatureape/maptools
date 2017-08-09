import { connect } from 'react-redux';
import ContextMap from '../components/ContextMap';

const ZOOM_DIFF = 2;

export default connect(function(state) {
    return {
        ...state,
        zoom: state.zoom - ZOOM_DIFF
    };
}, undefined)(ContextMap);
