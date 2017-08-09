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
                activePlaceDetails: action.activePlaceDetails
            }
        case 'SAVE_PLACE':
            console.log(action.place)
            return {
                ...state,
                places: [...state.places, action.place]
            }
        default:
            return state;
    }
}
export default appReducers;
