export function setActivePlace(latLng, placeId) {
    return {
        type: 'SET_ACTIVE_PLACE',
        activePlace: {
            latLng,
            placeId,
        }
    }
}
