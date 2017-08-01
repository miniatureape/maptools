const appReducers = (state = [], action) => {
    switch (action.type) {
        case 'CENTER_MAP':
            console.log('center map reducer', action.latLng);
            return {
                ...state,
                center: action.latLng
            }
            break;
        default:
            return state;
    }
}
export default appReducers;
