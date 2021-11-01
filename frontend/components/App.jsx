import React from "react";
import { Route } from "react-router";
import GreetingContainer from "./greeting/greeting_container";
import SessionForm from "./session_form/session_form";
import LoginFormContainer from "./session_form/login_form_container";
import SignupFormContainer from "./session_form/signup_form_container";

const App = () => (
    <div>
        <header>
            <h1>Petsy</h1>
            <GreetingContainer />
        </header>

        <Route exact path="/login" component={LoginFormContainer} />
        <Route exact path="/signup" component={SignupFormContainer} />
    </div>
);

export default App