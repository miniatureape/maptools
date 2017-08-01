import ExplorationMap from '../containers/ExplorationMap';
import ContextMap from '../containers/ContextMap';
import 'style-loader!./App.css'

function App(props) {
    return <div className="app-wrapper">
               <ExplorationMap />
               <ContextMap />
           </div>
}

export default App;
