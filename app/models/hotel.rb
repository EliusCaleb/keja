class Hotel < ApplicationRecord
    validates :name, :hotel_type, :city, :address, presence:true
    has_many :rooms

    
    
end
