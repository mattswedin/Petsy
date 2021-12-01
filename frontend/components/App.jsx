import React from "react";
import { Redirect, Route } from "react-router";
import GreetingContainer from "./greeting/greeting_container";
import Modal from "./modal/modal";
import CategoriesIndexContainer from "./categories/categories_index_container"
import { Switch } from "react-router";
import ProfileShowContainer from "./profile/profile_show_container"
import { Link } from "react-router-dom";
import PetEditFormContainer from "./pets/pet_edit_form_container"
import PetShowPageContainer from "./pets/pet_show_page_container"


class App extends React.Component{

    render(){
        return(
        <div>
            <Modal />
            <header >
                
                <div className="top-nav">
                 <Link to="/" className="logo" >Petsy</Link>
                 <input className="search-bar" type="text" />
                 <GreetingContainer />
                        <i id="shopping-cart" className="fas fa-shopping-cart"></i>

                </div>
                <div className="top-nav-cats" >
                    <h1 className="first" >Snakes</h1>
                    <h1>Dogs</h1>
                    <h1>Rats</h1>
                    <h1>Rabbits</h1>
                    <h1>Fish</h1>
                    <h1>Birds</h1>
                    <h1>Gerbils</h1>
                    <h1>Hamsters</h1>
                    <h1>Monkeys</h1>
                    <h1>Ferrets</h1>
                    <h1>Rocks</h1>
                    <h1>Pigs</h1>
                    <h1>Guinea Pigs</h1>
                    <h1>Horses</h1>
                    <h1>Plants</h1>
                    <h1 className="last" >Deer</h1>
                </div>
                <div className="line" ></div>
            </header>
            
            <Switch>
                <Route exact path="/" component={CategoriesIndexContainer} />
                <Route exact path="/pets/:petId" component={PetShowPageContainer} />
                <Route exact path="/users/:userId" component={ProfileShowContainer} />
                <Redirect to="/" />
            </Switch>
            
        </div>
        )
    
}
};

export default App