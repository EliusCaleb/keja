class CreateRooms < ActiveRecord::Migration[7.0]
  def change
    create_table :rooms do |t|
      t.string :title
      t.integer :price
      t.integer :max_people
      t.string :room_number
      t.string :description
      t.integer :hotel_id

      t.timestamps
    end
  end
end
