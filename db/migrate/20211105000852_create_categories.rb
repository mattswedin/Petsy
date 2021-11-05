class CreateCategories < ActiveRecord::Migration[5.2]
  def change
    create_table :categories do |t|
      t.string :goats, null: false
      t.string :sheep, null: false
      t.string :cows, null: false
      t.string :cats, null: false
      t.string :lizards, null: false
      t.string :turtles, null: false
      t.string :snakes, null: false
      t.string :dogs, null: false
      t.string :birds, null: false
      t.string :fish, null: false
      t.string :rabbits, null: false
      t.string :rats, null: false
    end
  end
end
