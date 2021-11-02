import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapS = ({ errors }) => ({
    user: {
        email: "",
        password: ""
    },
    demo: {
        user: {
        email: "demo@aol.com",
        password: "password"
    }
        
    },
    formType: "Login!",
    errors: errors.session
})

const mapD = (dispatch) => ({
    action: user => dispatch(login(user))
})

export default connect(mapS, mapD)(SessionForm);