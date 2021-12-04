json.extract! @cart, :user_id, :id
json.partial! "api/cart", cart: @cart