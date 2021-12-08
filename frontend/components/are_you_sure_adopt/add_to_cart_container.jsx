import { connect } from "react-redux";
import { createCart, fetchCarts } from "../../actions/cart_actions";
import { createCartItem, fetchCartItems } from "../../actions/cart_items_actions";
import { closeModal, openModal } from "../../actions/modal_actions";
import { updatePet,fetchPet } from "../../actions/pet_actions"
import { fetchUsers, updateUser } from "../../actions/session_actions";
import AddToCart from './add_to_cart'

const mapS = state => {
    
    return{
        carts: Object.values(state.entities.cart),
        pet: state.ui.modal.pet,
        currentuser: state.session.id,
        users: state.entities.users,
        cart_items: Object.values(state.entities.cart_items)
    }
}

const mapD = dispatch => ({
    createCart: () => dispatch(createCart()),
    fetchCartItems: () => dispatch(fetchCartItems()),
    updateUser: (userId) => dispatch(updateUser(userId)),
    fetchCarts: () => dispatch(fetchCarts()),
    fetchUsers: () => dispatch(fetchUsers()),
    fetchPet: (id) => dispatch(fetchPet(id)),
    openModal: () => dispatch(openModal()),
    closeModal: () => dispatch(closeModal()),
    updatePet: (pet) => dispatch(updatePet(pet)),
    createCartItem: (cartItem) => dispatch(createCartItem(cartItem))

})

export default connect(mapS, mapD)(AddToCart)