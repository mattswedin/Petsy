class Pet < ApplicationRecord
    validates :name, :color, :species, presence: true

    has_one_attached :photo

    belongs_to :user,
    foreign_key: :owner_id,
    class_name: :User
end