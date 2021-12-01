import React from "react"

const OurPick = ({ pets }) => {

    
    const petsArr = Object.values(pets).filter(pet => pet.adoptable);
        
    const shufflePets = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let pet = array[i];
            array[i] = array[j];
            array[j] = pet;
        }
        return array
    }
    

    return petsArr[0] ? (
        
        <div>
            <h1 className="ourpicks" >Our Picks for You</h1>
            <br />
            <div className="ourpicks-pets">
                <div className="adopt-pets-message">
                    <h1>Adopt the pets you like</h1>
                    <h1>to get more pets added to</h1>
                    <h1>your profile</h1>
                </div>
                {
                    shufflePets(petsArr).map((pet, i) =>
                        (i > 3 ? null : (
                        <div className="userPet" key={i}>
                            <img className="pet-profile-pic-ourpicks" src={pet.photo} />
                        </div>
                        ))
                    )
                }
            </div>
        </div>
    ) : null

}

export default OurPick