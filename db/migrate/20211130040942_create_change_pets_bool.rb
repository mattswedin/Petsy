class CreateChangePetsBool < ActiveRecord::Migration[5.2]
  def change
      remove_column :pets, :adoptable, :boolean
      add_column :pets, :adoptable, :string
  end
end
