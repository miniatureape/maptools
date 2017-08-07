import 'style-loader!./App.css'
import {connect} from 'react-redux'

function mapDispatchToProps(dispatch) {
    return {
        toggleContextMap: function() {
            dispatch({
                type: "TOGGLE_CONTEXT_MAP",
            });
        }
    }
}

function ToggleButton(props) {
    return <button onClick={props.toggleContextMap}>Click Me</button>
}

let ToggleButtonContainer = connect(undefined, mapDispatchToProps)(ToggleButton)

function App(props) {
    return <div className="app-wrapper">
        <ToggleButtonContainer / >
        </div>
}

export default App;
