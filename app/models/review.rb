class Review < ApplicationRecord

    validates :ranking, presence: true
  
    belongs_to :user,
    foreign_key: :author_id,
    class_name: :User

    belongs_to :pet,
    foreign_key: :pet_id,
    class_name: :Pet

end