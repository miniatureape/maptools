import 'style-loader!./ContextMapDisplayToggle.css'
import MdMap from 'react-icons/lib/md/map'

export default function ToggleButton(props) {
    return (
        <div className="float-right">
            context <MdMap onClick={props.toggleContextMap} />
        </div>
    )
}
