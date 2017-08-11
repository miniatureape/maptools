function createPlace(mapPlaceData, directions) {
    let travelTime = null;
    if (directions) {
        travelTime = directions.rows[0].elements[0].duration.text
    }
    return {
        mapData: mapPlaceData,
        isHome: false,
        travelTime: travelTime,
        note: {
            message: "",
            isOpen: false,
        }
    }
}

const appReducers = (state = [], action) => {
    switch (action.type) {
        case 'TOGGLE_CONTEXT_MAP':
            return {
                ...state,
                displayContextMap: !state.displayContextMap
            }
            break;
        case 'CHANGE_CENTER':
            return {
                ...state,
                center: action.center
            }
            break;
        case 'CHANGE_ZOOM':
            return {
                ...state,
                zoom: action.zoom
            }
            break;
        case 'CHANGE_BOUNDS':
            return {
                ...state,
                bounds: action.bounds
            }
            break;
        case 'SET_ACTIVE_PLACE':
            return {
                ...state,
                activePlace: action.activePlace
            }
        case 'CLEAR_ACTIVE_PLACE':
            return {
                ...state,
                activePlace: null
            }
        case 'SET_ACTIVE_PLACE_DETAILS':
            return {
                ...state,
                activePlaceDetails: action.activePlaceDetails,
                activePlaceDirections: action.directions
            }
        case 'SAVE_PLACE':
            return {
                ...state,
                places: [...state.places, createPlace(action.place, action.directions)]
            }
        case "SET_PLACE_AS_HOME":
            let places = state.places.map((place) => {
                place.isHome = place.mapData.place_id === action.place.mapData.place_id;
                return place;
            });
            return {
                ...state,
                places: places
            }
        default:
            return state;
    }
}
export default appReducers;
