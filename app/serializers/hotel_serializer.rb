class HotelSerializer < ActiveModel::Serializer
  attributes :id, :name, :hotel_type, :city, :address, :distance, :photo, :description, :ratings, :cheapest_price, :features
end
