class Hotel < ApplicationRecord
    validates :name, :hotel_type, :city, :address, presence:true
    has_many :rooms   
    has_many :reviews
    has_many :books
end
