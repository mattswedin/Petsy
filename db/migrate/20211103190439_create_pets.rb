class CreatePets < ActiveRecord::Migration[5.2]
  def change
    create_table :pets do |t|
      t.string :name, null: false
      t.string :color, null: false
      t.string :class, null: false
      t.string :species, null: false
      t.integer :owner_id, null: false, unique: true
      t.timestamps
    end
    add_index :pets, :owner_id
    add_index :pets, :name
    add_index :pets, :color
    add_index :pets, :class
    add_index :pets, :species

  end
end
