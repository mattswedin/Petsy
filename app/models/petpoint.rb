class Petpoint < ApplicationRecord

    validates :petter_id, :pet_id, presence: true
  
    belongs_to :user,
    foreign_key: :petter_id,
    class_name: :User

    belongs_to :pet,
    foreign_key: :pet_id,
    class_name: :Pet

end