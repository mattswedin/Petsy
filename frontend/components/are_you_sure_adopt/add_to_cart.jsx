import React, {useEffect} from "react";
import { withRouter } from "react-router";


const AddToCart = ({ pet, closeModal, updatePet, currentuser, fetchUsers, history, users}) => {

    useEffect(() => {
        fetchUsers()
    }, [])

    const handleClick = () =>{
        if (users[currentuser].current_order === 0){
            // createCart()
            // createCartItem({pet_id: pet.id})
            history.replace(`/cart/${currentuser}`);
            closeModal()
        } else {
            // createCartItem({pet_id: pet.id})
            history.replace(`/cart/${currentuser}`);
            closeModal()
        }
    }

    return pet.adoptable ? (
        
        <div className="areYouSure-cont">
            <h1>Add {pet.name} to Adoption Basket? You can finalize your adoption by selecting your cart and continue adopting!</h1>
            <br />
            <h1>Continue?</h1>
            <br />
            <button onClick={handleClick}>Yes</button><button onClick={() => closeModal()}>No</button>
        </div>
    ) : (

        <div className="areYouSure-cont">
            <h1>{pet.name} already has a loving owner, {users[pet.owner_id].username}. You can add this Pet to your Adoption Basket but you will not be able to adopt {pet.name} unless {users[pet.owner_id].username} puts them up for adoption. </h1>
            <br />
            <h1>Continue?</h1>
            <br />
            <button onClick={handleClick}>Yes</button><button onClick={() => closeModal()}>No</button>
        </div>
    )
}

export default withRouter(AddToCart)