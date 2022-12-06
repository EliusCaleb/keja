class Room < ApplicationRecord
    validates :title, presence: true, uniqueness: true
    belongs_to :hotel
    
end
