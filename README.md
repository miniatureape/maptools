# Maptools

A tool for doing advance research of a place.


place
{
    mapData: all the google maps data,
    isHome: bool,
    travelTime: all the google maps travel time.
    note: {
        message: "",
        isOpen: bool,
    }
}

## TODOS

- [.]  PlaceList 
    - [X]  A button to set one as "Home"
        - [X]  It marks the current place as home and recalcultes travel times for all saved places if home has changed.
    - [ ]  There is a button to set your prefered travel method?
    - [ ]  There is a button that exposes the UI.
    - [ ]  You can click the notes button to view notes and add a note:
        - [ ]  Text and submit button.
        - [ ]  If you open one, all the others close.
    - [ ] You can remove a place from the list
    - [ ] YOu can search to move the map.
        - [ ] When you search, there is an infowindow that allows you to save the location.
- [ ]  Exploration Map
    - [ ]  Make the info window look just like the place list so you can re-use that component. (But "save" button instead of notes section)
    - [ ]  When you save a place, the info window closes.
    - [ ]  You cannot save a place that youv'e alread saved. The button should not appear.
    - [ ]  If there is a home set, it should fetch travel times and display them there.
- [ ]  Persistance
    - [ ]  On update, save store to local storage or something for now.
    - [ ]  On load read store from local storage or something.
    - [ ]  Figure out why google maps balks if I don't null out the active place
- [ ]  Other
    - [ ]  Move clearfix into App.css
    - [ ]  Consider changing "Home" to "Origin"
