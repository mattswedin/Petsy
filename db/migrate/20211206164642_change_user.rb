class ChangeUser < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :current_order, :integer, default: false, null: false
  end
end
