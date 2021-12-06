json.extract! @cart_item, :cart_id, :pet_id, :can_adopt, :id
json.partial! "api/cart_item", cart_item: @cart_item