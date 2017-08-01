import { connect } from 'react-redux';
import ExplorationMap from '../components/ExplorationMap';
import { setCenter } from '../actions/index.js';

function mapStateToProps(state) {
    return {
        ...state
    };
}

function mapDispatchToProps(dispatch) {
    return {
        "setCenter": (center) => {
            dispatch(setCenter(center))
        }
    }
    return {};
}

let ExplorationMapContainer = connect(mapStateToProps, mapDispatchToProps)(ExplorationMap);

export default ExplorationMapContainer;
