class BooksController < ApplicationController

    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    #GET /books
    def index    
        books = Book.all
        render json: books
    end  
      # GET /books/:id
   def show
    book = Book.find(params[:id])
    render json: book,status: :ok
   end
    
   # POST /books
   def create
    book = Book.create!(book_params)
   render json: book, status: :created
  end 
   # DELETE /books/:id
  def destroy
    book = Book.find(params[:id])
    book.destroy
    head :no_content
  end

    private
    
    def book_params
        params.permit(:start_date, :end_date, :room_number, :room_id, :user_id, :hotel_id)
    end 
    def render_not_found_response
        render json: { errors: ["Book not found"] }, status: :not_found
    end 


end
