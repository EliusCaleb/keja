class Book < ApplicationRecord
    validates :start_date, presence: true
    validates :end_date, presence: true
    validates :room_number, uniqueness: true
    belongs_to :user
    belongs_to :hotel
    belongs_to :room
end
