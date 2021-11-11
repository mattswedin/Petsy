import React from 'react';
import { connect } from 'react-redux';
import { clearErrors, login } from '../../actions/session_actions';
import SessionForm from './session_form';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapS = ({ errors }) => ({
    user: {
        email: "",
        password: ""
    },
    formType: "Sign in",
    errors: errors.session
})

const mapD = (dispatch) => ({
    action: user => dispatch(login(user)),
    login: user => dispatch(login(user)),
    clearErrors: () => dispatch(clearErrors()),
    otherForm: (
        <button onClick={() => dispatch(openModal('login'))}>
            Login
        </button>
    ),
    closeModal: () => dispatch(closeModal()),
    openModal: () => dispatch(openModal({type: 'signup'}))
})

export default connect(mapS, mapD)(SessionForm);