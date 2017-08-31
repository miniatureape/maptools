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

function updatePlacesWithNewTravelTimes(state, directions) {
    let durations = directions.destinationAddresses.map((address, i) => {
        return directions.rows[0].elements[i].duration.text;
    }, {})

    let places = state.places.map((place, i) => {
        let newTravelTime = durations[i];

        if (place.isOrigin) {
            newTravelTime = null;
        }

        return {
            ...place,
            travelTime: newTravelTime
        }

    });

    return {
        ...state,
        places: places
    };
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
                activePlace: action.activePlace,
                center: action.activePlace.latLng,
                searched: true
            }
        case 'CLEAR_ACTIVE_PLACE':
            return {
                ...state,
                activePlace: null,
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
        case "RECEIVE_TRAVEL_TIMES":
            return {
                ...state
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
        case "TOGGLE_DRAWER":
            return {
                ...state,
                displayDrawer: !state.displayDrawer,
            }
        case "CONTAINER_RESIZED":
            return {
                ...state,
                didResize: true
            }
        case "CONTAINER_RESIZE_HANDLED":
            return {
                ...state,
                didResize: false
            }
        case "RECEIVED_DIRECTIONS":
            return updatePlacesWithNewTravelTimes(state, action.directions);
        case "REMOVE_PLACE":
            return {
                ...state,
                places: state.places.reduce((carry, place) => {
                    if (place.mapData.place_id != action.place.mapData.place_id) {
                        carry.push(place);
                    }
                    return carry;
                }, [])
            }
        default:
            return state;
    }
}
export default appReducers;
