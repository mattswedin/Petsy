import React from 'react';



const Greeting = ({ currentUser, logout, login, openModal, closeModal }) => {
    
    const sessionLinks = () => (
        

         <nav className="sign-reg-modal">
            <input type="submit" onClick={() => openModal('login')} value="Sign In"/>
        </nav>
    );
    const personalGreeting = () => (
        <div>
             <button onClick={logout}>Log Out</button>
        </div>
    );

    return currentUser ? personalGreeting() : sessionLinks();
};


export default Greeting;
