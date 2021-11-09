class ChangePetsthree < ActiveRecord::Migration[5.2]
  def change
    remove_column :pets, :type, :string
    add_column :pets, :kind, :string
  end
end
