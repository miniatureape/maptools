import 'style-loader!./ContextMapDisplayToggle.css'

export default function ToggleButton(props) {
    return (
        <div className="float-right">
            <button 
                className="button-small button-outline"
                onClick={props.toggleContextMap}>Show Context Map</button>
        </div>
    )
}
