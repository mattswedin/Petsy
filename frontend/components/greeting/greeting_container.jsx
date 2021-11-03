import { connect } from 'react-redux';

import { logout } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';
import Greeting from './greeting';

const mapS = ({ session, entities: { users } }) => {
    return {
        currentUser: users[session.id]
    };
};

const mapD = dispatch => ({
    logout: () => dispatch(logout()),
    openModal: modal => dispatch(openModal(modal))
});

export default connect(mapS, mapD)(Greeting);