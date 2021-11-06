import React from 'react';
import { Link } from 'react-router-dom';



const Greeting = ({ currentUser, logout, login, openModal, closeModal }) => {
    
    const sessionLinks = () => (
        

         <nav className="sign-reg-modal">
            <input type="submit" onClick={() => openModal('login')} value="Sign In"/>
        </nav>
    );
    const personalGreeting = () => (
        // closeModal(),
        <div>
            
            <button onClick={logout}>Log Out</button>
            
        </div>
    );

    return currentUser ? personalGreeting() : sessionLinks();
};


export default Greeting;
