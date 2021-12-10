import * as CartItemApiUtil from '../util/cart_item_api_util';
export const RECEIVE_ALL_CART_ITEMS = "RECEIVE_ALL_CART_ITEMS"
export const RECEIVE_CART_ITEM = "RECEIVE_CART_ITEM"
export const REMOVE_CART_ITEM = "REMOVE_CART_ITEM"

const receiveCartItems = cartItems => {
    return {
        type: RECEIVE_ALL_CART_ITEMS,
        cartItems
    }
}

const receiveCartItem = cartItem => {
    return {
        type: RECEIVE_CART_ITEM,
        cartItem
    }
}

const removeCartItem = cartItemId => {
    return {
        type: REMOVE_CART_ITEM,
        cartItemId
    }
}

export const fetchCartItems = () => dispatch => {
    return CartItemApiUtil.fetchCartItems()
        .then(cartItems => dispatch(receiveCartItems(cartItems)))
}

export const fetchCartItem = cartItemId => dispatch => {
    return CartItemApiUtil.fetchCartItem(cartItemId)
        .then(cartItemId => dispatch(receiveCartItem(cartItemId)))
}

export const createCartItem = cartItem => dispatch => {
    return CartItemApiUtil.createCartItem(cartItem)
        .then(cartItem => dispatch(receiveCartItem(cartItem))
        )
}

export const deleteCartItem = cartItemId => dispatch => {
    return CartItemApiUtil.deleteCartItem(cartItemId)
        .then(() => dispatch(removeCartItem(cartItemId))
        )
}
