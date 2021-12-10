class ChangeCartItem < ActiveRecord::Migration[5.2]
  def change
    add_column :cart_items, :can_adopt, :string, default: "false", null: false
  end
end
