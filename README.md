# Maptools

A tool for doing advance research of a place.

## TODOS

- [X] Create root app and boostrap index file (create store etc).
- [X] Create Exploration Map Component
- [X] Create Context Map Component
- [ ] Add home feature
- [ ] Add Place
- [ ] See places feature
    - [ ] When you look at the list, the distances to home should show along side it.
- [ ] Remove Place
- [ ] Toggle Context Map


## Integration with Google Maps.

We need a way to load google maps and have it available to our components. 
We need a way to call google maps functions.
Can we treat google maps as write only?
    We need some events to be able to create items, etc.
    But for the most part, we want to be able to add markers, set the location etc.
    Some sort of bridge would be best I think.
    What if when you added a map it listened to all events on the map and passed them through a mapdispatchtoprops container?
