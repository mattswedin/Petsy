import React from 'react';
import { Link } from 'react-router-dom';



const Greeting = ({ currentUser, logout }) => {
    const sessionLinks = () => (
        <div className="signin">
            <h2>Petsy</h2>
            <Link to="/login">Sign in</Link>
            <Link to="/signup">Register</Link>
        </div>
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
