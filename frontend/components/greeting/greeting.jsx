import React from 'react';
import { Link } from 'react-router-dom';



const Greeting = ({ currentUser, logout, login, openModal, closeModal }) => {
    
    const sessionLinks = () => (
        

         <nav className="sign-reg-modal">
            <input className="sign-in-sign-put-top-nav" type="submit" onClick={() => openModal({ type: 'login'})} value="Sign In"/>
        </nav>
    );
    const personalGreeting = () => (
        <div>
            <Link to={`/users/${currentUser.id}`}>Profile</Link>
            <Link to="/" className="sign-in-sign-put-top-nav" onClick={logout} >Sign out</Link>
        </div>
    );

    return currentUser ? personalGreeting() : sessionLinks();
};


export default Greeting;
