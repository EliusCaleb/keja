class Review < ApplicationRecord
   validates :title,  presence: true
   validates :comment, { :length => { :maximum => 300 } }

   belongs_to :hotel
end
