class CreateCartItem < ActiveRecord::Migration[5.2]
  def change
    create_table :cart_items do |t|
      t.integer :cart_id, null: false
      t.integer :pet_id, null: false
    end
  end
end
