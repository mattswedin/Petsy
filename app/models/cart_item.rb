class CartItem < ApplicationRecord

    belongs_to :pet,
    foreign_key: :pet_id,
    class_name: :Pet

    belongs_to :cart,
    foreign_key: :cart_id,
    class_name: :Cart

end