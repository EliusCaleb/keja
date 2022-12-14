class Room < ApplicationRecord
    validates :title, presence: true
    validates :room_number, uniqueness: true
    belongs_to :hotel
    has_one :book
end
