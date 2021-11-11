import React from 'react';
import { Link } from 'react-router-dom';



const Greeting = ({ currentUser, logout, login, openModal, closeModal }) => {
    
    const sessionLinks = () => (
        

         <nav className="sign-reg-modal">
            <input className="sign-in-sign-put-top-nav" type="submit" onClick={() => openModal({ type: 'login'})} value="Sign In"/>
        </nav>
    );
    const personalGreeting = () => (
        <div className="links-nav">
            <Link to={`/users/${currentUser.id}`}><i id="profile-icon" className="fas fa-user-circle"></i></Link>
            <Link to="/" id="link-sign-out" onClick={logout}>Sign out</Link>
        </div>
    );

    return currentUser ? personalGreeting() : sessionLinks();
};


export default Greeting;
