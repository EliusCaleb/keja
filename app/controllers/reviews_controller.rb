class ReviewsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    #GET /reviews
    def index    
          reviews = Review.all
        render json: reviews
    end  
      # GET /reviews/:id
   def show
     review = find_review
    render json: review
   end
    
    # POST /hotels
   def create
    review = Review.create!(review_params)
    render json: review, status: :created
   end 

   # PATCH /hotels/:id
  def update
     review = find_review
     review.update!(review_params)
    render json: review
  end
   # DELETE /hotels/:id
  def destroy
     review = find_review
     review.destroy
    head :no_content
  end

  private
  def find_review
      Review.find(params[:id])
  end
  def review_params
      params.permit(:title, :comment, :hotel_id)
  end 
  def render_not_found_response
      render json: { error: "Review not found" }, status: :not_found
  end
end
