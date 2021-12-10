class CreatePetpoints < ActiveRecord::Migration[5.2]
  def change
    create_table :petpoints do |t|
      t.integer :petter_id, null: false, presence: true
      t.integer :pet_id, null: false, presence: true
      t.timestamps
    end
  end
end
