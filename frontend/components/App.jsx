import React from "react";
import { Route } from "react-router";
import GreetingContainer from "./greeting/greeting_container";
import SessionForm from "./session_form/session_form";
import LoginFormContainer from "./session_form/login_form_container";
import SignupFormContainer from "./session_form/signup_form_container";
import { AuthRoute } from "../util/route_util";
import Modal from "./modal/modal";
import CategoriesIndexContainer from "./categories/categories_index_container"
import { Switch } from "react-router";
import { mapS } from "./greeting/greeting_container";

const App = () => (
    <div>
        <Modal />
        <header className="top-nav" >
            <h2 className="logo" >Petsy</h2>
            <input className="search-bar"type="text" />
            <GreetingContainer className="modal-signin" />
        </header>
        <Switch>
            <Route exact path="/" component={CategoriesIndexContainer} />
        </Switch>
        

        {/* <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} /> */}
    </div>
);

export default App