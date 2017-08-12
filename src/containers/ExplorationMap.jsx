import { connect } from 'react-redux';
import ExplorationMap from '../components/ExplorationMap';

export default connect((state) => { 
        return state;
    }, function(dispatch) {
    return {
        dispatch,
        changeCenter: (center) => dispatch({
            type: "CHANGE_CENTER",
            center: center
        }),
        changeZoom: (zoom) => dispatch({
            type: 'CHANGE_ZOOM',
            zoom: zoom
        }),
        changeBounds: (bounds) => dispatch({
            type: 'CHANGE_BOUNDS',
            bounds: bounds
        }),
        setActivePlace: (latLng, placeId) => {
            dispatch({
                type: 'SET_ACTIVE_PLACE',
                activePlace: {
                    latLng: latLng,
                    placeId: placeId
                }
            });
        },
        clearActivePlace: () => {
            dispatch({
                type: 'CLEAR_ACTIVE_PLACE',
            });
        }
    }
})(ExplorationMap);
