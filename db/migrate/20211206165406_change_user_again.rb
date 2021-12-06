class ChangeUserAgain < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :current_order, :integer, default: false, null: false
  end
end
