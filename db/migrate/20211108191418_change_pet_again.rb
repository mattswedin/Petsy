class ChangePetAgain < ActiveRecord::Migration[5.2]
  def change
    remove_column :pets, :species, :string
    add_column :pets, :type, :string
    add_column :pets, :size, :string
  end
end
