# Maptools

A tool for doing advance research of a place.

place
{
    mapData: all the google maps data,
    isOrigin: bool,
    travelTime: all the google maps travel time.
    note: {
        message: "",
        isOpen: bool,
    }
}

## TODOS

- [.]  PlaceList 
    - [o]  A button to set one as "Home"
        - [X] It marks the current place as home 
        - [ ] It recalcultes travel times for all saved places if home has changed.
    - [ ] There is a button to set your prefered travel method?
    - [ ] There is a button that exposes the UI.
    - [o] You can click the notes button to view notes and add a note:
        - [X] Text
        - [X] If you open one, all the others close.
        - [ ] Closes on some action (submit, unfocus, etc)
    - [ ] You can remove a place from the list
    - [x] You can search to move the map.
        - [X] When you search, there is an infowindow that allows you to save the location.
            - [ ] (This might not actually be an issue.) If you search for a place that doesn't have a place id, you have some way of saving it. (key on latlng?)
- [.]  Exploration Map
    - [x] Make the info window look just like the place list so you can re-use that component. (But "save" button instead of notes section)
    - [X] When you save a place, the info window closes.
    - [ ] You cannot save a place that youv'e alread saved. The button should not appear.
    - [x] If there is a home set, it should fetch travel times and display them there.
    - [ ] You need to think about this, but you probably do want to add markers. Either they're there all the time or when you select a place or something.
- [o]  Persistance
    - [X]  On update, save store to local storage or something for now.
    - [X]  On load read store from local storage or something.
    - [ ]  Figure out why google maps balks if I don't null out the active place
- [.]  Other
    - [ ]  Move clearfix into App.css
    - [X]  Consider changing "Home" to "Origin"
    - [ ] You should probably make the notes section an object indexed by place id or something. Haivng it nested is a bummer.

Ideas:

Should you see home marked on the context map?
You should be able to categorize or tag things and filter your list by them.
