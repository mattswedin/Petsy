# == Schema Information
#
# Table name: categories
#
#  id      :integer(8)      not null, primary key
#  goats   :string          not null
#  sheep   :string          not null
#  cows    :string          not null
#  cats    :string          not null
#  lizards :string          not null
#  turtles :string          not null
#  snakes  :string          not null
#  dogs    :string          not null
#  birds   :string          not null
#  fish    :string          not null
#  rabbits :string          not null
#  rats    :string          not null
#

class Category < ApplicationRecord
    validates :title, presence: true

end

