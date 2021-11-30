import React, { useState } from "react";


const AreYouSure = ({ pet, closeModal, updatePet}) => {
    const [state, setState] = useState({
        name: pet.name,
        color: pet.color,
        category: pet.category,
        size: pet.size,
        id: pet.id,
        owner_id: pet.owner_id,
        adoptable: true
    })

   
    const handleClick = (e) => {
        console.log(state)
        console.log(pet)
        e.preventDefault();
        
        updatePet(state).then(closeModal());
    }
    return (
        
        <div className="areYouSure-cont">
            <h1>Are you sure you want to put your Pet up for adoption? They will no longer be your Pet...this is permanent.</h1>
            <br />
            <h1>Continue?</h1>
            <br />
            <button onClick={handleClick}>Yes</button><button onClick={() => closeModal()}>No</button>
        </div>
    )

}

export default AreYouSure