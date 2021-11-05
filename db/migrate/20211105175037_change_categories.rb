class ChangeCategories < ActiveRecord::Migration[5.2]
  def change
    remove_column :categories, :goats, :string
    remove_column :categories, :sheep, :string
    remove_column :categories, :cows, :string
    remove_column :categories, :cats, :string
    remove_column :categories, :lizards, :string
    remove_column :categories, :turtles, :string
    remove_column :categories, :snakes, :string
    remove_column :categories, :birds, :string
    remove_column :categories, :fish, :string
    remove_column :categories, :dogs, :string
    remove_column :categories, :rabbits, :string
    remove_column :categories, :rats, :string
    add_column :categories, :title, :string
    add_column :categories, :body, :string
    
  end
end
