import MapWrapper from './MapWrapper'

const START_ZOOM = 6;
const CONTEXT_MAP_ZOOM_OFFSET = 2;

export default function(options) {

    options.store.subscribe(function() {
        if (options.store.getState().displayContextMap) {
            document.getElementById('maps').classList.toggle('display-context');
        }
    });

    let explorationMapEl = document.getElementById('exploration-map'),
        contextMapEl = document.getElementById('context-map'),
        explorationMap = new MapWrapper(explorationMapEl, 
            {center: {lat: -34.397, lng: 150.644}, zoom: START_ZOOM}
        ),
        contextMap = new MapWrapper(contextMapEl, 
            {center: {lat: -34.397, lng: 150.644}, zoom: START_ZOOM - CONTEXT_MAP_ZOOM_OFFSET});

    explorationMap.setStore(options.store);
    contextMap.connectCenter(explorationMap.getMap(), {
        zoomDiff: CONTEXT_MAP_ZOOM_OFFSET,
        rectStyle: {
            strokeColor: '#FF0000',
            strokeOpacity: 1,
            strokeWeight: 1,
            fillColor: '#000000',
            fillOpacity: 0.0
        }
    });
}
