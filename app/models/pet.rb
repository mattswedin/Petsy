class Pet < ApplicationRecord
    validates :name, :color, :species, presence: true

    has_one_attached :photo

    belongs_to :user,
    foreign_key: :owner_id,
    class_name: :User
end


# == Schema Information

# Table name: pets

#  id         :integer(8)      not null, primary key
#  name       :string          not null
#  color      :string          not null
#  species    :string          not null
#  owner_id   :integer(4)      not null
#  created_at :datetime        not null
#  updated_at :datetime        not null


