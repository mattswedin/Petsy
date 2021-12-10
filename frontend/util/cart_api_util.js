export const createCart = () => {
    return $.ajax({
        url: "/api/carts",
        method: "POST"
    });
};

export const fetchCart = (cartId) => {
    return $.ajax({
        url: `/api/carts/${cartId}`,
        method: "GET"
    });
};

export const fetchCarts = () => {
    return $.ajax({
        url: "/api/carts",
        method: "GET"
    });
}