import React from "react";
import { Redirect, Route } from "react-router";
import GreetingContainer from "./greeting/greeting_container";
import Modal from "./modal/modal";
import CategoriesIndexContainer from "./categories/categories_index_container"
import { Switch } from "react-router";
import ProfileShowContainer from "./profile/profile_show_container"
import { Link } from "react-router-dom";


class App extends React.Component{

    render(){
        return(
        <div>
            <Modal />
            <header className="top-nav" >
                <Link to="/" className="logo" >Petsy</Link>
                <input className="search-bar" type="text" />
                <GreetingContainer />

            </header>
            <Switch>
                <Route exact path="/" component={CategoriesIndexContainer} />
                <Route exact path="/users/:userId" component={ProfileShowContainer} />
                <Redirect to="/" />
            </Switch>
            
        </div>
        )
    
}
};

export default App