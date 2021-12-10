import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import { withRouter } from "react-router"

const Cart = ({ currentUserId, cart, fetchCart, match, fetchCartItems, cart_items, pets, deleteCartItem, updatePet, fetchPets, user, fetchUsers, history, users }) => {


    useEffect(()=> {
        fetchCart(match.params.cartId)
        fetchCartItems()
        fetchUsers()
        fetchPets()
    }, [])

    const usersCartItems = Object.values(cart_items).filter(item => item.cart_id === user.current_order)


    const handleBack = () => {
        history.goBack()
    }


    
    
    const handleClick = () => {
        usersCartItems.map( item =>
            item.can_adopt === "true" ? updatePet({ id: item.pet_id, owner_id: currentUserId, adoptable: false}).then(deleteCartItem(item.id)) : null
        )
    }
    
    let pet;
    
    
    return usersCartItems[0] && pets[usersCartItems[0].pet_id] && currentUserId === cart.user_id ? (
        <div className="outer-cart-div">
            <div className="cart-page">
                <div className="cart-title-div">
                    <h1 className="cart-title">{usersCartItems.length} Pet(s) in your cart</h1>
                    <h1 className="cart-keep" onClick={handleBack} >Keep Adopting</h1>
                </div>
                <div className="cart-container">
                    <div className="pet-cart">
                        {  
                            usersCartItems.map((item , i) => {

                                pet = item.pet_id;

                                return (
                                    <div key={i} className='cart-item'>
                                        <div className="pet-profile-pic-cart" >
                                            <Link to={`/pets/${pets[item.pet_id].id}`} ><img src={pets[item.pet_id].photo} /></Link>
                                        </div>
                                        <div className="cart-both-sides">
                                            <div >
                                                <h1 className="pet-name-cart" >{pets[item.pet_id].name}, the { pets[item.pet_id].category === "Sheep" || pets[item.pet_id].category === "Fish" ? pets[item.pet_id].category : pets[item.pet_id].category.slice(0, -1)}</h1>
                                                <h1 className="pet-info-cart" >Pet Size: {pets[item.pet_id].size}</h1>
                                                <h1 className="pet-info-cart" >Pet Color: {pets[item.pet_id].color}</h1>
                                                <h1 className="pet-info-cart" >{pets[item.pet_id].adoptable === "true" || pets[item.pet_id].adoptable === true ? "Adoptable" : "Has owner, cannot Adopt now"}</h1>
                                                <h1 className="pet-remove-cart" onClick={() => deleteCartItem(item.id)}>Remove Pet from Basket</h1>
                                            </div>
                                            <div className="cart-right" >
                                                <div className="owner" >
                                                    <h1>{pets[item.pet_id].adoptable ? "Previous Owner: " : "Owner: "}</h1><Link  className="cart-link" to={`/users/${pets[item.pet_id].owner_id}`}> {users[pets[item.pet_id].owner_id].username}</Link>
                                                </div>
                                                <select  className="quanity" >
                                                    <option  value="1">Only 1</option>
                                                </select>
                                                <div className="only">
                                                <h1>Only 1 in this world and they're in {Object.values(cart_items).filter((item, i) => { 
                                                    return (item.pet_id === pet)}).length} people's baskets</h1>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                )}
                            )
                        }
                    </div>
                    <div className="order">
                        <div className="order-center">
                            <h1 className="how-pay">How you'll pay</h1>
                            <br />
                            <div className="order-radio">
                                <input type="radio" name="order" value="Love and Affection" />
                                <h3 className="order-radio-option">Love and Affection</h3>
                            </div>
                            <div className="order-radio">
                                <input type="radio" name="order" value="Respect and Consideration" />
                                <h3 className="order-radio-option" >Respect and Consideration</h3>
                            </div>
                            <div className="order-radio">
                                <input type="radio" name="order" value="All of the Above" />
                                <h3 className="order-radio-option" >All of the Above</h3>
                            </div>
                            <br />
                            <div className="order-num-free">
                                <h3 className="before-num-free" >Adoptable Pet(s) total</h3>
                                <h3 className="num">{usersCartItems.filter(item => pets[item.pet_id].adoptable === "true" || pets[item.pet_id].adoptable === true ).length} Pet(s)</h3>
                            </div>
                            <div className="order-num-free">
                                <h3 className="before-num-free" >Snuggling</h3>
                                <h3 className="free" >FREE</h3>
                            </div>
                            <div className="order-line" ></div>
                                <h1 className="total" >Total ({usersCartItems.filter(item => pets[item.pet_id].adoptable === "true" || pets[item.pet_id].adoptable === true ).length} Pet(s))</h1>
                                <button className="adopt-button" onClick={handleClick}>Proceed to Adoption</button>
                                <div className="order-radio">
                                
                            </div>
                            <div className="duties-center">
                                <div className="duties-div">
                                    <h3 className="duties">* Additional duties and care </h3>
                                    <h3 className="duties2"> do apply</h3>
                                </div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ) : <div>
            <h1 className="no-results" >You have no Pets in your basket!</h1>
        </div>

}

export default withRouter(Cart);