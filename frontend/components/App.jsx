import React from "react";
import { Route } from "react-router";
import GreetingContainer from "./greeting/greeting_container";
import Modal from "./modal/modal";
import CategoriesIndexContainer from "./categories/categories_index_container"
import { Switch } from "react-router";


const App = () => (
    <div>
        <Modal />
        <header className="top-nav" >
            <h2 className="logo" >Petsy</h2>
            <input className="search-bar" type="text" />
            <GreetingContainer />
        </header>
        <Switch>
            <Route exact path="/" component={CategoriesIndexContainer} />
        </Switch>
        
    </div>
);

export default App