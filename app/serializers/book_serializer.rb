class BookSerializer < ActiveModel::Serializer
  attributes :id, :start_date, :end_date, :room_number, :room_id, :user_id, :hotel_id
  belongs_to :user
  belongs_to :room
end
