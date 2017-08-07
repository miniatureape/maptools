const events = []
/*
    "bounds_changed",
    "center_changed",
    "click",
    "dblclick",
    "drag",
    "dragend",
    "dragstart",
    "heading_changed",
    "idle",
    "maptypeid_changed",
    "mousemove",
    "mouseout",
    "mouseover",
    "projection_changed",
    "resize",
    "rightclick",
    "tilesloaded",
    "tilt_changed",
    "zoom_changed",
]
*/

class MapWrapper {

    dispatch: null 
    map: null 
    listeners: []

    constructor(el, options) {
        this.map = new google.maps.Map(el, options);
    }

    getMap() {
        return this.map;
    }

    setStore(store) {
        this.store = store;
        this.bindStore(this.store);
    }

    bindStore(store) {
        if (!this.map) {
            throw new Exception('Must have a google map instance set.');
        }
        events.forEach((evtName) => this.bindEventToStore(evtName, store));
        this.store.subscribe(this.storeListener);
    }

    bindEventToStore(evtName, store) {
        this.listeners = this.map.addListener(evtName, (e) => {
            this.store.dispatch({
                type: evtName.toUpperCase(),
                map: this.map,
                payload: e,
            });
        });
    }

    storeListener() {
        console.log('map has heard store change');
    }

    /*
     * options
     *   zoomDiff = amount map should differ from linked map
     *   rectStyles = passed to google maps polygon constructor
     */
    connectCenter(otherMap, options) {
        let rect, zoomDiff = options.zoomDiff;
        otherMap.addListener('center_changed', () => this.map.setCenter(otherMap.getCenter()));
        otherMap.addListener('zoom_changed', () => this.map.setZoom(otherMap.getZoom() - options.zoomDiff));
        otherMap.addListener('bounds_changed', () => {

            if (rect) {
                rect.setMap(null);
            }

            rect = new google.maps.Rectangle({
                ...options.rectStyle,
                map: this.map,
                bounds: otherMap.getBounds(),
            });

        }); 

        this.map.addListener('zoom_changed', () => { 
            zoomDiff = otherMap.getZoom() - this.map.getZoom()
        });
    }

}

export default MapWrapper;
