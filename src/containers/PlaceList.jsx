import { connect } from 'react-redux';
import PlaceList from '../components/PlaceList'

function mapStateToProps(state) {
    return {...state};
}

export default connect(mapStateToProps)(PlaceList)
