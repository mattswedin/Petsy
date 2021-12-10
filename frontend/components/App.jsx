import React from "react";
import { Redirect, Route } from "react-router";
import GreetingContainer from "./greeting/greeting_container";
import Modal from "./modal/modal";
import CategoriesIndexContainer from "./categories/categories_index_container"
import { Switch } from "react-router";
import ProfileShowContainer from "./profile/profile_show_container"
import { Link } from "react-router-dom";
import PetShowPageContainer from "./pets/pet_show_page_container"
import CategoryNavContainer from "./categories/category_nav_container"
import CategoriesShowContainer from "./categories/categories_show_container"
import SearchBarContainer from "./search_bar/search_bar_container"
import SearchContainer from "./search_bar/search_container"
import ScrollToTop from "./util/scrollToTop"
import CartContainer from "./cart/cart_container"
import NoCart from "./cart/no_cart";


class App extends React.Component{



    render(){
        return(
        <div>
            <Modal />
            <ScrollToTop />
            <header >
                <div className="top-nav">
                 <Link to="/" className="logo" >Petsy</Link>
                 <SearchBarContainer />
                 <GreetingContainer />
                </div>
                <div className="top-nav-cats" >
                    <CategoryNavContainer />
                </div>
                <div className="line" ></div>
            </header>
            
            <Switch>
                <Route exact path="/" component={CategoriesIndexContainer} />
                <Route exact path="/cart/0" component={NoCart} />
                <Route exact path="/search/:query" component={SearchContainer} />
                <Route exact path="/cart/:cartId" component={CartContainer} />
                <Route exact path="/pets/:petId" component={PetShowPageContainer} />
                <Route exact path="/categories/:categoryId" component={CategoriesShowContainer} />
                <Route exact path="/users/:userId" component={ProfileShowContainer} />
                <Redirect to="/" />
            </Switch>
            
        </div>
        )
    
}
};

export default App