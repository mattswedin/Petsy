import React from 'react';
import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapS = ({ errors }) => ({
    user: {
        email: "",
        username: "",
        password: ""
    },
    formType: "Sign Up!",
    errors: errors.session
})

const mapD = (dispatch) => ({
    action: user => dispatch(signup(user))
})

export default connect(mapS, mapD)(SessionForm);