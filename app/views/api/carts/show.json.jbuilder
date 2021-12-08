json.extract! @cart, :user_id, :id
json.partial! "api/carts/cart", cart: @cart