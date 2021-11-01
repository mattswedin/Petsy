import { connect } from 'react-redux';

import { logout } from '../../actions/session_actions';
import Greeting from './greeting';

const mapS = ({ session, entities: { users } }) => {
    return {
        currentUser: users[session.id]
    };
};

const mapD = dispatch => ({
    logout: () => dispatch(logout())
});

export default connect(mapS, mapD)(Greeting);