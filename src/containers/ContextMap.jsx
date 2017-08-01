import { connect } from 'react-redux';
import ContextMap from '../components/ContextMap';

function mapStateToProps(state) {
    console.log(state);
    return {};
}

function mapDispatchToProps(dispatch) {
    console.log(dispatch);
    return {};
}

let ContextMapContainer = connect(mapStateToProps, mapDispatchToProps)(ContextMap);

export default ContextMapContainer;
