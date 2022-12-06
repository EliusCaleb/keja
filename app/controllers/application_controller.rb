class ApplicationController < ActionController::API
    include ActionController::Cookies
    def not_found
      render json: { errors: ['not_found'] }
    end
  
    def authorize_request
      header = request.headers['Authorization']
      header = header.split(' ').last if header
      begin
        @decoded = JsonWebToken.decode(header)
        @current_user = User.find(@decoded[:user_id])
      rescue ActiveRecord::RecordNotFound => e
        render json: { errors: e.message }, status: :unauthorized
      rescue JWT::DecodeError => e
        render json: { errors: e.message }, status: :unauthorized
      end
    end  

    # rescue_from ActiveRecord::RecordInvalid, with: :render_errors
    # before_action :authorize
  
  
    #  private
    # def authorize
    #   @current_user = User.find_by(id: session[:user_id])
    #   return render json: { errors: ["Not authorized"] }, status: :unauthorized unless  @current_user
    # end
  
    # def render_errors(exception)
    #   render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
    # end


end
