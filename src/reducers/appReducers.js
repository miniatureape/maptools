const appReducers = (state = [], action) => {
    switch (action.type) {
        case 'TOGGLE_CONTEXT_MAP':
            return {
                ...state,
                displayContextMap: !state.displayContextMap
            }
            break;
        default:
            return state;
    }
}
export default appReducers;
