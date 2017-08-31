# Maptools

A tool for doing advance research of a place.


## TODOS

### Version .1

- [X] It recalculates travel times for all saved places if home has changed.
- [X] Add export GeoJSON button.
- [X] If you click on a place it centers the map on it and sets it active again.
- [X] Make title a link

### Future

- [o]  PlaceList 
    - [o]  A button to set one as "Home"
        - [X] It marks the current place as home 
    - [X] There is a button that exposes the UI.
    - [X] You can click the notes button to view notes and add a note:
        - [X] Text
        - [X] If you open one, all the others close.
        - [X] Closes on some action (submit, unfocus, etc)
    - [X] You can remove a place from the list
    - [x] You can search to move the map.
        - [X] When you search, there is an infowindow that allows you to save the location.
            - [ ] (This might not actually be an issue.) If you search for a place that doesn't have a place id, you have some way of saving it. (key on latlng?)
    - [ ] There is a button to set your prefered travel method?
    - [ ] You should be able to categorize places.
- [o]  Exploration Map
    - [x] Make the info window look just like the place list so you can re-use that component. (But "save" button instead of notes section)
    - [X] When you save a place, the info window closes.
    - [X] You cannot save a place that youv'e alread saved. The button should not appear.
    - [x] If there is a home set, it should fetch travel times and display them there.
    - [ ] You need to think about this, but you probably do want to add markers. Either they're there all the time or when you select a place or something.
- [ ] Context Map
    - [ ] Changing zoom on the context map should keep that zoom level difference in place.
- [o]  Persistance
    - [X]  On update, save store to local storage or something for now.
    - [X]  On load read store from local storage or something.
    - [ ]  Figure out why google maps balks if I don't null out the active place
    - [ ] Save to Database
        - [ ] Create basic schema. Basically a primary key with a json blob.
        - [ ] Create an endpoint to add places to your thingy.
- [o]  Other
    - [X]  Move clearfix into App.css
    - [X]  Consider changing "Home" to "Origin"
    - [ ] You should probably make the notes section an object indexed by place id or something. Having it nested is a bummer.
    - [ ] You can move a lot of conditional code in your components into your containers.

Sharing Flow:

When you land, you can start adding etc. Its all saved in local storage.
If you sign in you are redirected to a "private" url 
if you come back to `/` and you are signed in, you are taken to a list of your places
If you come back to `/<private-url` that thing is loaded from the server
Periodically we store the UI on the server. (Need to handle conflicts).
There is an endpoint at `/<private-url/add` that lets you add places.

### Further Ideas:

Should you see home marked on the context map?
You should be able to categorize or tag things and filter your list by them.
Needs integration with street view? Opens street view in the context map place, another window or just adds a link to it.
    Maybe the context pane should show street view if there is an active place?
    
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
