import { connect } from "react-redux";
import { fetchCart } from "../../actions/cart_actions";
import { deleteCartItem, fetchCartItems } from "../../actions/cart_items_actions";
import { fetchPets, updatePet } from "../../actions/pet_actions";
import { fetchUsers } from "../../actions/session_actions";
import Cart from './cart'

const mapS = (state, ownProps) => {
    
    return{
        cart: state.entities.cart[ownProps.match.params.cartId],
        currentUserId: state.session.id,
        cart_items: state.entities.cart_items,
        pets: state.entities.pets,
        user: state.entities.users[state.session.id]
    }
    
}

const mapD = dispatch => ({
    fetchUsers: () => dispatch(fetchUsers()),
    fetchPets: () => dispatch(fetchPets()),
    updatePet: (petId) => dispatch(updatePet(petId)),
    deleteCartItem: (petId) => dispatch(deleteCartItem(petId)),
    fetchCart: (cart) => dispatch(fetchCart(cart)),
    fetchCartItems: () => dispatch(fetchCartItems())
})
export default connect(mapS, mapD)(Cart)