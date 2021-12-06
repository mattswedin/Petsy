class Cart < ApplicationRecord
    validates :user_id

    belongs_to :user
    foreign_key: :user_id
    class_name: :User

    has_many :cart_items,
    foreign_key: :cart_id,
    class_name: :CartItem

    has_many :pets, through: :cart_items

end