import React, {useEffect} from "react";


const AddToCart = ({ pet, closeModal, currentuser, fetchUsers, users, carts, fetchCarts, updateUser, createCartItem, fetchCartItems, cart_items }) => {

    useEffect(() => {
        fetchUsers()
        fetchCarts()
        fetchCartItems()
    }, [])

    const userCart = carts.filter(cart => currentuser === cart.user_id)
    
    const handleClick = () =>{
        if (users[currentuser].current_order === null || users[currentuser].current_order === 0 ){
            updateUser({id: currentuser, current_order: userCart[0].id })
            .then(createCartItem({ pet_id: pet.id, cart_id: userCart[0].id, can_adopt: pet.adoptable }))
            .then(closeModal())
        } else {
            const usersCartItems = cart_items.filter(item => item.cart_id === users[currentuser].current_order)
            if (usersCartItems.some(item => item.pet_id === pet.id)) {
                closeModal()
            } else {
            createCartItem({ pet_id: pet.id, cart_id: userCart[0].id, can_adopt: pet.adoptable })
            .then(closeModal())
            }
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

export default AddToCart