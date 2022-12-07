class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :title, :comment, :hotel_id
end
