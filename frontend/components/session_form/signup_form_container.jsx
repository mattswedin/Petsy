import React from 'react';
import { connect } from 'react-redux';
import { signup, clearErrors } from '../../actions/session_actions';
import SessionForm from './session_form';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapS = ({ errors }) => ({
    user: {
        email: "",
        username: "",
        password: ""
    },
    formType: "Register",
    errors: errors.session
})

const mapD = (dispatch) => ({
    action: user => dispatch(signup(user)),
    clearErrors: () => dispatch(clearErrors()),
    otherForm: (
        <button onClick={() => dispatch(openModal({ type: 'signup'}))}>
            Signup
        </button>
    ),
    closeModal: () => dispatch(closeModal()),
    openModal: () => dispatch(openModal({type: 'login'}))

})

export default connect(mapS, mapD)(SessionForm);