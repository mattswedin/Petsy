import React, { useState } from "react";


const AreYouSure = ({ pet, closeModal, updatePet, currentuser}) => {
    const [state, setState] = useState({
        name: pet.name,
        color: pet.color,
        category: pet.category,
        size: pet.size,
        id: pet.id,
        owner_id: pet.owner_id,
        adoptable: true
    })

    const [adopted, setAdopted ] = useState({
        name: pet.name,
        color: pet.color,
        category: pet.category,
        size: pet.size,
        id: pet.id,
        owner_id: currentuser,
        adoptable: false
    })

   
    const handleClick = (e) => {

        if (!pet.adoptable){
        e.preventDefault();
        updatePet(state).then(closeModal());
        } else {
        console.log(pet.owner_id)
        updatePet(adopted).then(closeModal());
        }
    }
    return !pet.adoptable ? (
        
        <div className="areYouSure-cont">
            <h1>Are you sure you want to put your Pet up for adoption? They will no longer be your Pet...this is permanent.</h1>
            <br />
            <h1>Continue?</h1>
            <br />
            <button onClick={handleClick}>Yes</button><button onClick={() => closeModal()}>No</button>
        </div>
    ) : (

        <div className="areYouSure-cont">
            <h1>Are you sure you want to adopt {pet.name}? Adopting a pet is a lot of responsiblity. You must love, respect, and care for {pet.name} with all your heart!</h1>
            <br />
            <h1>Continue?</h1>
            <br />
            <button onClick={handleClick}>Yes</button><button onClick={() => closeModal()}>No</button>
        </div>
    )

}

export default AreYouSure