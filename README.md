# Maptools

A tool for doing advance research of a place.

## TODOS

- Start on the UI
    - List of places if any.
    - A button to set one as "Home"
    - There is a button to set your prefered travel time?
    - There is a button that exposes the UI.
- Add place selection to map:
    - Create a new component that represents the info window.
        - It should say the place name.
        - If there is a home set, it should fetch travel times and display them there.
        - There should be a button to save it to your places
    - If you select a place, we show a UI to save it.

## Rubber Duck

I'm creating a container programatically so I can render and pass to google maps.

```
let iw = new InfoWindowContentsContainer();
this.infoWindow.setContent(ReactDOMServer.renderToString(iw));
```

This is fine if I have my component is a function. But the component here is wrapped in a container and redux usually handles the setting of store on it. I need to get the store to it somehow.

I could probably pass the store down to it. 

Maybe this is a sign that I should turn these into JSX.
