class RoomSerializer < ActiveModel::Serializer
  attributes :id, :title, :price, :max_people, :room_number, :description, :hotel_id
end
