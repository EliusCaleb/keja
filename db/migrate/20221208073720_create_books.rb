class CreateBooks < ActiveRecord::Migration[7.0]
  def change
    create_table :books do |t|
      t.string :start_date
      t.string :end_date
      t.integer :room_number
      t.integer :room_id
      t.integer :user_id
      t.integer :hotel_id

      t.timestamps
    end
  end
end
