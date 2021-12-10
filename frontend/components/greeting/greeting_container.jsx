import { connect } from 'react-redux';

import { fetchUsers, logout } from '../../actions/session_actions';
import { closeModal, openModal } from '../../actions/modal_actions';
import Greeting from './greeting';

const mapS = ({ session, entities: { users }  }) => {
    return {
        currentUser: users[session.id]
    };
};

const mapD = dispatch => ({
    fetchUsers: () => dispatch(fetchUsers()),
    logout: () => dispatch(logout()),
    login: user => dispatch(login(user)),
    openModal: modal => dispatch(openModal(modal)),
    closeModal: modal => dispatch(closeModal(modal))
});

export default connect(mapS, mapD)(Greeting);