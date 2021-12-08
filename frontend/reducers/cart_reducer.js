import {
    RECEIVE_CART,
    RECEIVE_ALL_CARTS
} from '../actions/cart_actions';


const CartReducer = (oldstate = {}, action) => {
    Object.freeze(oldstate)
    let nextState = Object.assign({}, oldstate)

    switch (action.type) {
        case RECEIVE_ALL_CARTS:
            return nextState = action.carts;
        case RECEIVE_CART:
            nextState[action.cart.id] = action.cart;
            return nextState;
        default:
            return oldstate;
    }
}

export default CartReducer;