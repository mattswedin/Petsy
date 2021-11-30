import React, { useState } from "react";
import { closeModal } from "../../actions/modal_actions";

const AreYouSure = ({ pet, closeModal, updatePet }) => {

   
    const handleClick = () => {
        console.log(pet)
        pet.adoptable = true;
        updatePet(pet).then(closeModal());

        
    }
    return (
        
        <div>
            <h1>Are you sure you want to put your Pet up for adoption? They will no longer be your Pet...this is perminent.</h1>
            <br />
            Continue?
            <br />
            <button onClick={() => handleClick()}>Yes</button><button onClick={() => closeModal()}>No</button>
        </div>
    )

}

export default AreYouSure