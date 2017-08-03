import MapWrapper from './MapWrapper'

export default function(options) {
    let explorationMapEl = document.getElementById('exploration-map'),
        contextMapEl = document.getElementById('context-map'),
        explorationMap = new MapWrapper(explorationMapEl),
        contextMap = new MapWrapper(contextMapEl);

    explorationMap.setStore(options.store);
    contextMap.setStore(options.store);
}
