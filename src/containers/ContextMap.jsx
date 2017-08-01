import { connect } from 'react-redux';
import ContextMap from '../components/ContextMap';

function mapStateToProps(state) {
    return {
        ...state
    };
}

function mapDispatchToProps(dispatch) {
    return {};
}

let ContextMapContainer = connect(mapStateToProps, mapDispatchToProps)(ContextMap);

export default ContextMapContainer;
