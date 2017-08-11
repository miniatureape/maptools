import 'style-loader!./ContextMapDisplayToggle.css'

export default function ToggleButton(props) {
    return <button onClick={props.toggleContextMap}>Click Me</button>
}
