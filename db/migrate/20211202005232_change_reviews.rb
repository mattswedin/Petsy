class ChangeReviews < ActiveRecord::Migration[5.2]
  def change
    add_column :reviews, :ranking, :integer, null: false
  end
end
