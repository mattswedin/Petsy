class AddAdoptToPet < ActiveRecord::Migration[5.2]
  def change
    add_column :pets, :adoptable, :boolean, default: false, null: false
  end
end
