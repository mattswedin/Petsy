class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.string :body
      t.integer :pet_id, null: false, unique: true
      t.integer :author_id, null: false, unique: true
      t.timestamps
    end
    add_index :reviews, :pet_id
    add_index :reviews, :author_id
  end
end
