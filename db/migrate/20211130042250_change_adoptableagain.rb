class ChangeAdoptableagain < ActiveRecord::Migration[5.2]
  def change
    remove_column :pets, :adoptable, :string
    add_column :pets, :adoptable, :boolean, default: false, null: false
  end
end
