class Review < ApplicationRecord
   validates :title,  presence: true
   validates :comment, { :length => { :maximum => 20 } }
   
   belongs_to :hotel
end
