export const fetchCartItems = () => {
    return $.ajax({
        url: "/api/cart_items",
        method: "GET"
    });
};

export const fetchCartItem = cart_itemId => {
    return $.ajax({
        url: `/api/cart_items/${cart_itemId}`,
        method: "GET"
    });
};

export const createCartItem = cart_item => {
    return $.ajax({
        url: "/api/cart_items",
        method: "POST",
        data: { cart_item }
    });
};

export const deleteCartItem = cart_itemId => {
    return $.ajax({
        url: `/api/cart_items/${cart_itemId}`,
        method: "DELETE",
    });
};