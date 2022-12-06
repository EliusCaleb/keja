class RoomsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    #GET /rooms
    def index    
        rooms = Room.all
        render json: rooms
    end  
      # GET /rooms/:id
   def show
    room = find_room
    render json: room
   end
    
    # POST /rooms
   def create
     room = Room.create!(room_params)
    render json: room, status: :created
   end 

   # PATCH /rooms/:id
  def update
    room = find_room
    room.update!(room_params)
    render json: room
  end
   # DELETE /rooms/:id
  def destroy
    room = find_room
    room.destroy
    head :no_content
  end


    private
    def find_room
        Room.find(params[:id])
    end
    def room_params
        params.permit(:title, :price, :max_people, :room_number, :description, :hotel_id)
    end 
    def render_not_found_response
        render json: { errors: ["Room not found"] }, status: :not_found
    end
end
