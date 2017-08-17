function createPlace(mapPlaceData, directions) {
    let travelTime = null;
    if (directions) {
        travelTime = directions.rows[0].elements[0].duration.text
    }
    return {
        mapData: mapPlaceData,
        isOrigin: false,
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
        case 'END_SEARCH':
            return {
                ...state,
                searched: false
            }
            break;
        case 'CHANGE_CENTER':
            return {
                ...state,
                center: action.center
            }
            break;
        case 'CHANGE_CENTER_ON_SEARCH':
            return {
                ...state,
                center: action.center,
                searched: true
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
            let activePlaceDetails = createPlace(action.activePlaceDetails, action.directions);
            return {
                ...state,
                activePlaceDetails: activePlaceDetails,
            }
        case 'SAVE_PLACE':
            return {
                ...state,
                places: [...state.places, action.place],
                activePlace: null,
            }
        case "SET_PLACE_AS_ORIGIN":
            let places = state.places.map((place) => {
                place.isOrigin = place.mapData.place_id === action.place.mapData.place_id;
                return place;
            });
            return {
                ...state,
                places: places
            }
        case "OPEN_NOTE_EDIT":
            return {
                ...state,
                places: state.places.map((place) => {
                    place.note = {
                        ...place.note,
                        isOpen: place.mapData.place_id === action.place.mapData.place_id
                    }
                    return place;
                })
            }
        case "CLOSE_NOTE_EDIT":
            return {
                ...state,
                places: state.places.map((place) => {
                    place.note = {
                        ...place.note,
                        isOpen: false
                    }
                    return place;
                })
            }
        case "EDIT_NOTE_MESSAGE":
            return {
                ...state,
                places: state.places.map((place) => {
                    if (place.mapData.place_id === action.place.mapData.place_id) {
                        place.note = {
                            ...place.note,
                            message: action.message.trim()
                        }
                    }
                    return place;
                })
            }
        default:
            return state;
    }
}
export default appReducers;
