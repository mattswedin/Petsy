class ChangePet < ActiveRecord::Migration[5.2]
  def change
    remove_column :pets, :class, :string
  end
end
