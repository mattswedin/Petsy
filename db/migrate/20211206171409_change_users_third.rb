class ChangeUsersThird < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :current_order, :integer, default: 0
  end
end
