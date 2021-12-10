import * as CartApiUtil from '../util/cart_api_util';
export const RECEIVE_CART = "RECEIVE_CART"
export const RECEIVE_ALL_CARTS = "RECEIVE_ALL_CARTS"

const receiveCart = cart => ({
    type: RECEIVE_CART,
    cart
})

const receiveAllCarts = carts => ({
    type: RECEIVE_ALL_CARTS,
    carts
})

export const fetchCart = cartId => dispatch => {
    return CartApiUtil.fetchCart(cartId)
        .then(cartId => dispatch(receiveCart(cartId)))
}

export const fetchCarts = () => dispatch => {
    return CartApiUtil.fetchCarts()
    .then(carts => dispatch(receiveAllCarts(carts)))
}

export const createCart = () => dispatch => {
    return CartApiUtil.createCart()
    .then(cart => dispatch(receiveCart(cart)))
}