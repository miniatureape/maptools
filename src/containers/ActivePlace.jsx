import { connect } from 'react-redux';
import ActivePlace from '../components/ActivePlace'
function mapStateToProps(state) {
    return state;
}
export default connect()(ActivePlace);
