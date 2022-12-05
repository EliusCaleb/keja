class HotelsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    #GET /hotels
    def index    
        hotels = Hotel.all
        render json: hotels
    end  
      # GET /hotels/:id
   def show
    hotel = find_hotel
    render json: hotel
   end
    
    # POST /hotels
   def create
    hotel = Hotel.create!(hotel_params)
    render json: hotel, status: :created
   end 

   # PATCH /hotels/:id
  def update
    hotel = find_hotel
    hotel.update!(hotel_params)
    render json: hotel
  end
   # DELETE /hotels/:id
  def destroy
    hotel = find_hotel
    hotel.destroy
    head :no_content
  end


    private
    def find_hotel
        Hotel.find(params[:id])
    end
    def hotel_params
        params.permit(:name, :hotel_type, :city, :address, :distance, :photos, :description, :ratings, :cheapest_price, :features)
    end 
    def render_not_found_response
        render json: { error: "Hotel not found" }, status: :not_found
    end
end
