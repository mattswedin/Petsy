import React from 'react';
import { Link } from 'react-router-dom';



const Greeting = ({ currentUser, logout, openModal }) => {
    const sessionLinks = () => (
        // <div>
        //     <Link to="/login">Sign in</Link>
        //     <Link to="/signup">Register</Link>
        // </div>

         <nav className="sign-reg-modal">
            <input type="submit" onClick={() => openModal('login')} value="Sign In"/>
        </nav>
    );
    const personalGreeting = () => (
        <div>
            <h2>Hello {currentUser.username}! Let's get petting!</h2>
            <button onClick={logout}>Log Out</button>
        </div>
    );

    return currentUser ? personalGreeting() : sessionLinks();
};


export default Greeting;
