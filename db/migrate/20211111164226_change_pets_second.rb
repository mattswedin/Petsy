class ChangePetsSecond < ActiveRecord::Migration[5.2]
  def change
    remove_column :pets, :kind, :string
    add_column :pets, :category, :string
  end
end
