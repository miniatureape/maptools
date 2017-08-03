const events = [
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

class MapWrapper {

    dispatch: null 
    map: null 
    listeners: []

    constructor(el) {
        this.map = new google.maps.Map(el, {center: {lat: -34.397, lng: 150.644}, zoom: 6});
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

    connectCenter(otherMap) {
        this.map.addListener('center_changed', () => otherMap.setCenter(this.map.getCenter()));
    }

}

export default MapWrapper;
