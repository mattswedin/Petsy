class Cart < ApplicationRecord
    validates :user_id

    belongs_to :user
    foreign_key: :user_id
    class_name: :User

end