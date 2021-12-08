import React, { useEffect } from "react"

const Cart = ({ currentUserId, cart, fetchCart, match, fetchCartItems, cart_items, pets, deleteCartItem, updatePet, fetchPets, user, fetchUsers }) => {


    useEffect(()=> {
        fetchCart(match.params.cartId)
        fetchCartItems()
        fetchUsers()
        fetchPets()
    }, [])

    const usersCartItems = Object.values(cart_items).filter(item => item.cart_id === user.current_order)
    
    
    const handleClick = () => {
        usersCartItems.map( item =>
            item.can_adopt === "true" ? updatePet({ id: item.pet_id, owner_id: currentUserId, adoptable: false}).then(deleteCartItem(item.id)) : null
        )
    }
    
    
    
    return usersCartItems[0] && pets[usersCartItems[0].pet_id] && currentUserId === cart.user_id ? (
        <div className="outer-cart-div">
            <div className="cart-page">
                <h1 className="cart-title">{usersCartItems.length} Pets in your cart</h1>
                <div className="cart-container">
                    <div className="pet-cart">
                        {  
                            usersCartItems.map((item , i) => 
                                <div key={i} className='cart-item'>
                                    <div className="pet-profile-pic-cart" >
                                        <img src={pets[item.pet_id].photo} />
                                    </div>
                                    <div>
                                    <h1 className="pet-ele-list" >{pets[item.pet_id].name}, the { pets[item.pet_id].category === "Sheep" || pets[item.pet_id].category === "Fish" ? pets[item.pet_id].category : pets[item.pet_id].category.slice(0, -1)}</h1>
                                    <h1>{item.can_adopt === "true" ? "Adoptable" : "Has owner, cannot Adopt now"}</h1>
                                    <h1 onClick={() => deleteCartItem(item.id)}>Remove Pet from Basket</h1>
                                    </div>

                                </div> 
                            )
                        }
                    </div>
                    <div className="order">
                        <h1 onClick={handleClick}>ADOPT NOW</h1>
                    </div>
                </div>
            </div>
        </div>
    ) : <h1>You have no Pets in your basket!</h1>

}

export default Cart;