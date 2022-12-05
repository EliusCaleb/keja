class CreateHotels < ActiveRecord::Migration[7.0]
  def change
    create_table :hotels do |t|
      t.string :name
      t.string :hotel_type
      t.string :city
      t.string :address
      t.string :distance
      t.string :photo
      t.string :description
      t.integer :ratings
      t.integer :cheapest_price
      t.boolean :features, default:false

      t.timestamps
    end
  end
end
